import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowLeft, Wallet } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AutomaticTopUp = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  // UPI ID for receiving payments
  const upiId = "bagsclub@hdfcbank"; 
  const merchantName = "BAGSCLUB";

  // Generate UPI String dynamically based on amount
  // If amount is empty, it generates a generic QR
  const qrValue = amount 
    ? `upi://pay?pa=${upiId}&pn=${merchantName}&am=${amount}&cu=INR`
    : `upi://pay?pa=${upiId}&pn=${merchantName}&cu=INR`;

  return (
    <div className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8 border-b border-gray-100 pb-4">
        <button onClick={() => navigate(-1)} className="text-gray-500 hover:text-gray-800 transition-colors">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Wallet className="text-blue-600" />
          Automatic Wallet Top-Up
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        {/* Left Side: Input & Info */}
        <div className="flex-1 w-full space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Enter Amount (₹)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 500"
              className="w-full px-4 py-3 text-xl font-bold text-gray-800 border-2 border-blue-100 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
              autoFocus
            />
            <p className="text-xs text-gray-500 mt-2">
              Minimum amount: ₹1. Payment updates instantly.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-md">
            <h4 className="font-bold text-blue-800 mb-1">How it works:</h4>
            <ol className="text-sm text-blue-700 list-decimal list-inside space-y-1">
              <li>Enter the amount you want to add.</li>
              <li>Scan the QR code with any UPI app.</li>
              <li>Complete the payment on your phone.</li>
              <li>Your wallet balance will update automatically.</li>
            </ol>
          </div>
        </div>

        {/* Right Side: QR Code Display */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 p-6 rounded-xl border border-gray-200 w-full md:w-auto">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
            <QRCodeSVG value={qrValue} size={200} level="H" includeMargin={true} />
          </div>
          
          <div className="text-center">
            <p className="text-sm font-bold text-gray-700 mb-1">Scan with any UPI App</p>
            <p className="text-lg font-bold text-blue-600">
              {amount ? `₹ ${amount}` : 'Enter Amount'}
            </p>
          </div>

          {/* Payment Logos */}
          <div className="flex items-center gap-4 mt-6 opacity-80 grayscale hover:grayscale-0 transition-all">
            {/* Using text placeholders or simple SVGs if external images aren't available */}
            <div className="flex flex-col items-center">
               <span className="text-xs font-bold text-purple-700">PhonePe</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
               <span className="text-xs font-bold text-blue-600">GPay</span>
            </div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="flex flex-col items-center">
               <span className="text-xs font-bold text-cyan-600">Paytm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomaticTopUp;
