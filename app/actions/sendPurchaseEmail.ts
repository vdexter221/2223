import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@material-tailwind/react'; // Assuming you're using Material Tailwind
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { sendPurchaseEmail } from './path/to/your/emailService'; // Adjust the path accordingly

const CompleteOrderCard = ({ prices }) => {
  const [url, setUrl] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reviewType, setReviewType] = useState('');
  const [reviewCount, setReviewCount] = useState('');

  const handlePaymentCompletion = async (details, data) => {
    try {
      // Send the URL along with payment details to your backend
      await axios.post('/api/submit-order', {
        url: url,
        paymentDetails: details,
        paymentData: data,
        name: name,
        email: email,
        reviewType: reviewType,
        reviewCount: reviewCount,
      });

      // Prepare form data for sending email
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('reviewType', reviewType);
      formData.append('reviewCount', reviewCount);
      formData.append('totalPrice', prices.total.toString());

      // Send purchase email
      await sendPurchaseEmail(formData);

      alert('Payment successful and URL submitted! Check your email for more information.');
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error processing your payment.');
    }
  };

  return (
    <Card className="max-w-xl mx-auto mb-8 sm:mb-16 bg-[#1a1630] border-2 border-[#2a253c] shadow-lg">
      <CardHeader>
        <CardTitle className="text-white text-xl font-semibold">
          Complete Your Order
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-[#0f0c24] p-6 rounded-lg">
          {/* Additional Form Fields */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1630] border border-[#2a253c] rounded-lg 
                        focus:ring-2 focus:ring-[#ff4b36] focus:border-transparent 
                        transition-all duration-300 placeholder-gray-500 text-white"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1630] border border-[#2a253c] rounded-lg 
                        focus:ring-2 focus:ring-[#ff4b36] focus:border-transparent 
                        transition-all duration-300 placeholder-gray-500 text-white"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-sm font-medium">
              Review Type
            </label>
            <input
              type="text"
              value={reviewType}
              onChange={(e) => setReviewType(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1630] border border-[#2a253c] rounded-lg 
                        focus:ring-2 focus:ring-[#ff4b36] focus:border-transparent 
                        transition-all duration-300 placeholder-gray-500 text-white"
              placeholder="Review Type"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-sm font-medium">
              Review Count
            </label>
            <input
              type="number"
              value={reviewCount}
              onChange={(e) => setReviewCount(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1630] border border-[#2a253c] rounded-lg 
                        focus:ring-2 focus:ring-[#ff4b36] focus:border-transparent 
                        transition-all duration-300 placeholder-gray-500 text-white"
              placeholder="Number of Reviews"
              required
            />
          </div>

          {/* URL Input Section */}
          <div className="mb-6">
            <label className="block text-gray-300 mb-3 text-sm font-medium">
              Product/Service URL
            </label>
            <input
              type="url"
              name="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1630] border border-[#2a253c] rounded-lg 
                        focus:ring-2 focus:ring-[#ff4b36] focus:border-transparent 
                        transition-all duration-300 placeholder-gray-500 text-white"
              placeholder="https://example.com/product"
              required
            />
          </div>

          {/* Total Price Display Section */}
          <div className="flex justify-between items-center mb-8">
            <span className="text-gray-300">Total:</span>
            <span className="text-2xl font-bold text-[#ff4b36]">
              ${prices.total}
            </span>
          </div>

          {/* PayPal Payment Button Section */}
          <PayPalScriptProvider
            options={{
              "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
              currency: "USD",
              intent: "capture",
            }}
          >
            <PayPalButtons
              style={{ layout: 'vertical' }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: prices.total.toString(),
                      },
                    },
                  ],
                });
              }}
              onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                handlePaymentCompletion(order, data);
              }}
              onError={(err) => {
                console.error('PayPal Error:', err);
                alert('There was an error processing your payment.');
              }}
            />
          </PayPalScriptProvider>

          {/* Security Indicators Section */}
          <div className="mt-6 flex justify-center gap-4 text-white opacity-75">
            <span>💳</span>
            <span>🔒</span>
            <span>🛡️</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompleteOrderCard;

