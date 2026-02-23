import React from 'react';
import { useAuth } from '../../../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Modify your Information</h2>
      
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.businessName || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Registered Mobile No.</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.mobileNumber || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.country || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.state || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.city || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">GST Number</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.gst || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Contact Person</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.name || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
          <input type="email" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.email || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Staff Contact No.</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.staffContact || ''} />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Pin Code</label>
          <input type="text" className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" readOnly value={user?.pinCode || ''} />
        </div>
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <textarea className="w-full px-4 py-2 border rounded-md bg-gray-50 text-gray-500" rows="3" readOnly value={user?.address || ''}></textarea>
        </div>
        
        <div className="md:col-span-2 flex justify-end mt-4">
          {/* Save Changes button removed or disabled since fields are read-only */}
        </div>
      </form>
    </div>
  );
};

export default Profile;
