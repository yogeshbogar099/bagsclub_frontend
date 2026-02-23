import React from 'react';
import { motion } from 'framer-motion';

const AddOrder = () => {
  const products = [
    { 
      id: 'non-woven', 
      name: 'Non-woven bags', 
      image: 'https://placehold.co/400x300/255A5E/FFFFFF?text=Non-woven+Bags' 
    },
    { 
      id: 'paper', 
      name: 'Paper bags', 
      image: 'https://placehold.co/400x300/FF8C42/FFFFFF?text=Paper+Bags' 
    },
    { 
      id: 'plastic', 
      name: 'Plastic bags', 
      image: 'https://placehold.co/400x300/255A5E/FFFFFF?text=Plastic+Bags' 
    },
    { 
      id: 'hdpe', 
      name: 'HDPE bags', 
      image: 'https://placehold.co/400x300/FF8C42/FFFFFF?text=HDPE+Bags' 
    },
    { 
      id: 'canvas', 
      name: 'Canvas bags', 
      image: 'https://placehold.co/400x300/255A5E/FFFFFF?text=Canvas+Bags' 
    },
  ];

  const handleProductSelect = (product) => {
    console.log('Selected product:', product.name);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary font-heading mb-2">Add New Order</h2>
        <p className="text-gray-600">Select a product category to continue</p>
        <div className="w-20 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer border border-gray-100 flex flex-col h-full"
            onClick={() => handleProductSelect(product)}
          >
            <div className="h-48 overflow-hidden bg-gray-100 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-opacity duration-300"></div>
            </div>
            <div className="p-5 text-center flex-grow flex items-center justify-center">
              <h3 className="font-semibold text-lg text-gray-800 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AddOrder;
