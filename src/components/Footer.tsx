
import { Link } from 'react-router-dom';
import { Wheat, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Wheat className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">Kisan Mitra</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering Indian farmers with innovative, integrated services to create a sustainable and prosperous agricultural ecosystem.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-sm">info@kisanmitra.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-sm">New Delhi, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/impact" className="text-gray-300 hover:text-green-400 transition-colors">Our Impact</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Partners</h3>
            <ul className="space-y-2">
              <li><Link to="/for-farmers" className="text-gray-300 hover:text-green-400 transition-colors">For Farmers</Link></li>
              <li><Link to="/partnerships" className="text-gray-300 hover:text-green-400 transition-colors">Partnerships</Link></li>
              <li><Link to="/investors" className="text-gray-300 hover:text-green-400 transition-colors">Investors</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kisan Mitra. All rights reserved. Revolutionizing Farmer Support in Bharat.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
