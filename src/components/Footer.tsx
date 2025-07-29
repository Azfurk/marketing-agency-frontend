import { motion } from 'framer-motion';
import { Instagram, Linkedin, Mail, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg">
                <Zap className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                PulsePresence
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We power your presence. Helping boutique fitness studios grow through 
              strategic social media and Online Marketing.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/niaeto/' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/arpit-phogat-b839281b8/' },
                { icon: Mail, href: 'mailto:arpitphogat123@gmail.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-pink-500/20 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold mb-4">Pages</h3>
            <div className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services', path: '/services' },
                { name: 'Case Studies', path: '/case-studies' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PulsePresence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;