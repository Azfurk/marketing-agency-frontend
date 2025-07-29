import { AnimatePresence, motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StickyButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-8 right-8 z-50"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/contact">
            <motion.button
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-medium rounded-full shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(0, 255, 255, 0.3)',
                  '0 0 40px rgba(255, 0, 128, 0.3)',
                  '0 0 20px rgba(0, 255, 255, 0.3)',
                ],
              }}
              transition={{
                boxShadow: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                },
              }}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Let's Talk</span>
            </motion.button>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyButton;