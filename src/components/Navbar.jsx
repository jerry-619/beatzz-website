import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/main.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <motion.nav 
      style={{ backdropFilter: 'blur(5px)' }}
      className="fixed top-0 left-0 right-0 bg-black/30 border-b border-white/5 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center gap-2 hover:scale-105 transition-transform duration-300"
          >
            <img src="/logo.png" alt="Beatzz Logo" className="h-8 md:h-10 w-auto" />
            <span className="text-xl md:text-2xl font-bold gradient-text">
              Beatzz
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/download">Download</NavLink>
            <a 
              href="https://github.com/jerry-619/beatzz-website" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 font-medium"
            >
              GitHub
            </a>
            <a 
              href="https://t.me/beatzzApp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#0088cc] hover:bg-[#0099dd] px-6 py-2.5 rounded-xl font-medium transition-all duration-300 inline-flex items-center gap-2 group"
            >
              <svg className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
              </svg>
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">Join Community</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors duration-300"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              ref={menuRef}
              className="md:hidden py-4 border-t border-white/5"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col space-y-3">
                <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/download" onClick={() => setIsMenuOpen(false)}>
                  Download
                </MobileNavLink>
                <a 
                  href="https://github.com/beatzz" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-all duration-300 font-medium px-4 py-2.5 hover:bg-white/5 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GitHub
                </a>
                <a 
                  href="https://t.me/beatzzApp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#0088cc] hover:bg-[#0099dd] mx-4 px-4 py-2.5 rounded-xl font-medium transition-all duration-300 text-center inline-flex items-center gap-2 justify-center group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-5 h-5 group-hover:rotate-6 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .24z"/>
                  </svg>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-300">Join Community</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-gray-400 hover:text-white transition-all duration-300 font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link 
    to={to} 
    className="text-gray-400 hover:text-white transition-all duration-300 font-medium px-2 py-2 hover:bg-white/5 rounded-lg"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar; 