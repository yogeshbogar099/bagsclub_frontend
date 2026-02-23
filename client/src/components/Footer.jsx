import { Facebook, Instagram, Youtube, Linkedin, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-primary">BAGSCLUB</h3>
            <p className="text-gray-400 mb-6">
              Premium cloth bag printing services for retail, corporate, and events. Eco-friendly and custom designs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-secondary transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#corporate" className="text-gray-400 hover:text-white transition-colors">Corporate</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#branches" className="text-gray-400 hover:text-white transition-colors">Branches</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Bag Printing</li>
              <li className="text-gray-400">Digital Printing (Soon)</li>
              <li className="text-gray-400">Screen Printing (Soon)</li>
              <li className="text-gray-400">Custom Branding</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <Phone size={20} className="text-secondary shrink-0" />
                <span>+91 9975813249</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <Mail size={20} className="text-secondary shrink-0" />
                <span>bagsclub.direct@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin size={20} className="text-secondary shrink-0" />
                <span>Latur, Maharashtra - 413512</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 BAGSCLUB. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;