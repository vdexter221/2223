"use client";

import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useState, useEffect } from "react";

export default function PaypalButton({ price }: { price: number }) {
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [{ isPending, isResolved }, dispatch] = usePayPalScriptReducer();


  const createOrder = async () => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/paypal/createOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      });

      if (!response.ok) throw new Error("Failed to create order");

      const { orderID } = await response.json();
      return orderID;
    } catch (err) {
      setError("Payment initialization failed");
      throw err;
    } finally {
      setIsProcessing(false);
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/paypal/captureOrder", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID: data.orderID }),
      });

      if (!response.ok) throw new Error("Payment failed");

      window.location.href = "/confirmation";
    } catch (err) {
      setError("Payment processing failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  useEffect(() => {
    if (isResolved) {
      // Handle onScriptLoad if needed, though it's often not necessary for basic integrations
    }
  }, [isResolved]);

  return (
    <div className="mt-6">
      {/* Removed PayPalScriptProvider from here */}
      {error && <div className="text-red-500 text-sm mb-3">{error}</div>}
      {isProcessing || isPending ? (
        <div className="text-gray-400 text-sm mb-3">
          Processing payment...
        </div>
      ) : null}

      <PayPalButtons
        style={{
          layout: "vertical",
          color: "gold",
          label: "pay",
          height: 48,
          shape: "rect",
        }}
        disabled={isProcessing}
        createOrder={createOrder}
        onApprove={onApprove}
        onError={(err) => setError(err.toString())}
      />
      {/* Removed PayPalScriptProvider from here */}
    </div>
  );
}

