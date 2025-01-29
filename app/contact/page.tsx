"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const result = await response.json();
      
      if (result.success) {
        setStatus('Thank you! Your message has been sent.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('There was an error submitting the form. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0c24]">
      <Header />
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Contact Us</h1>
          <div className="max-w-md mx-auto bg-[#1a1630] rounded-lg shadow-md p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">
                  Name
                </label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  required 
                  className="bg-gray-800 text-white border-gray-700" 
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="bg-gray-800 text-white border-gray-700"
                />
              </div>
              <Button type="submit" className="w-full bg-[#ff4b36] hover:bg-[#ff3621] text-white">
                Send Message
              </Button>
              {status && <p className={`mt-4 text-center ${status.includes('error') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

