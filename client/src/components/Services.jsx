import { motion } from 'framer-motion';
import { Printer, Monitor, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {

  const navigate = useNavigate();
  const handleServiceClick = (service) => {
    if (!service.active) return;
    if (service.title.toLowerCase().includes('bag printing')) {
      navigate('/associate/add-order');
      return;
    } 
    const element = document.getElementById('contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: "Bag Printing Services",
      status: "Active",
      icon: <Printer size={80} />,
      description: "Custom cloth bag printing for retail and corporate needs.",
      active: true
    },
    {
      title: "Free Design Services",
      status: "Coming Soon",
      icon: <Monitor size={80} />,
      description: "High-quality digital prints for various materials.",
      active: false
    },
    {
      title: "Buy & Sell Machine",
      status: "Coming Soon",
      icon: <Layers size={80} />,
      description: "Traditional screen printing for bulk orders.",
      active: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">OUR SERVICES</h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              onClick={() => handleServiceClick(service)}
              className={`bg-white rounded-2xl p-8 shadow-lg relative overflow-hidden group flex flex-col items-center text-center ${service.active ? 'cursor-pointer' : 'cursor-not-allowed'}`}
            >
              <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${service.active ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                {service.status}
              </div>
              
              <div className="mb-6 text-primary group-hover:text-secondary transition-colors">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 font-heading">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
