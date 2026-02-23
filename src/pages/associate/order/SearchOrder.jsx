import React from 'react';
import { Search } from 'lucide-react';

const SearchOrder = () => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 uppercase tracking-wide">Search Order</h2>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Enter Order Number" 
            className="w-full px-5 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-primary pr-12 text-lg"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors">
            <Search size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchOrder;
