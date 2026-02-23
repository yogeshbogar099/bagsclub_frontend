import React, { useState } from 'react';
import { QrCode, Banknote, X, Copy } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import toast from 'react-hot-toast';

const AddMoney = () => {
  const [showManualModal, setShowManualModal] = useState(false);

  // Bank Details
  const bankDetails = {
    bankName: "HDFC BANK",
    accountName: "BAGSCLUB",
    accountNumber: "50200066023456",
    ifscCode: "HDFC0000240",
    branch: "MUMBAI"
  };

  // Generate UPI String for QR Code
  // UPI format: upi://pay?pa=<upi_id>&pn=<name>&am=<amount>&tn=<note>
  // Here we don't specify amount so user can enter any amount
  // Assuming a UPI ID exists or using Account+IFSC format if supported, 
  // but standard UPI QR is safest. Let's use a placeholder UPI ID for now or construct one.
  // Ideally, this should be provided. For this example, I'll use a generic VPA format.
  const upiId = "bagsclub@hdfcbank"; 
  const qrValue = `upi://pay?pa=${upiId}&pn=${bankDetails.accountName}`;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Select Payment Option</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: Automatic Wallet Top-Up */}
        <div 
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden relative group cursor-pointer"
          onClick={() => navigate('/associate/financial/automatic-topup')}
        >
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
            New Launch
          </div>
          <div className="p-8 flex flex-col items-center text-center h-full">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <QrCode size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Automatic Wallet Top-Up</h3>
            <p className="text-gray-600 mb-2">Generate and scan a QR code online.</p>
            <p className="text-green-600 font-medium">Payment is instantly updated in your wallet.</p>
          </div>
        </div>
        
        {/* Card 2: Manual Wallet Top-Up */}
        <div 
          className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden group cursor-pointer"
          onClick={() => setShowManualModal(true)}
        >
          <div className="p-8 flex flex-col items-center text-center h-full">
             <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <Banknote size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">Manual Wallet Top-Up</h3>
            <p className="text-gray-600 mb-2">Transfer to our bank account</p>
            <p className="text-gray-500 text-sm mt-4">Send Screenshot to our Accounts Department to update your Wallet.</p>
          </div>
        </div>
      </div>

      {/* Manual Top-Up Modal */}
      {showManualModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center">
              <h3 className="text-lg font-bold">Manual Wallet Top-Up</h3>
              <button onClick={() => setShowManualModal(false)} className="text-white hover:bg-white/20 rounded-full p-1 transition-colors">
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[80vh]">
              {/* Bank Details */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-6">
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3 border-b border-gray-200 pb-2">Bank Account Details</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Bank Name</span>
                    <span className="font-bold text-gray-800">{bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Account Name</span>
                    <span className="font-bold text-gray-800">{bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">Account Number</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800">{bankDetails.accountNumber}</span>
                      <button onClick={() => copyToClipboard(bankDetails.accountNumber)} className="text-primary hover:text-green-700">
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm">IFSC Code</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-800">{bankDetails.ifscCode}</span>
                      <button onClick={() => copyToClipboard(bankDetails.ifscCode)} className="text-primary hover:text-green-700">
                        <Copy size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-center justify-center mb-6">
                <p className="text-sm font-medium text-gray-600 mb-3">Scan to Pay</p>
                <div className="p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                  <QRCodeSVG value={qrValue} size={180} level="H" includeMargin={true} />
                </div>
                <p className="text-xs text-gray-400 mt-2"> UPI ID: {upiId} </p>
              </div>

              {/* Instructions */}
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
                <h5 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                  Important Instructions
                </h5>
                <ul className="text-sm text-yellow-700 space-y-1 list-disc list-inside">
                  <li>Transfer funds using NEFT / IMPS / UPI.</li>
                  <li>Take a screenshot of the successful transaction.</li>
                  <li>Send the <strong>Screenshot + Your Member ID</strong> to our Accounts Department.</li>
                  <li>Wallet will be updated after verification.</li>
                  <li className="font-bold text-red-600">Note: Sunday is a holiday (no processing).</li>
                </ul>
              </div>
            </div>

            {/* Footer Action */}
            <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-center">
              <a 
                href={`https://wa.me/919975813249?text=Hi, I have transferred funds. Here is the proof. My Member ID is [ENTER_ID]`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-2 rounded-full font-bold hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                Send Proof on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddMoney;
