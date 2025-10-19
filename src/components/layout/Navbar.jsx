import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../common/ThemeToggle';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const section = document.querySelector(`#${id}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Section with id "${id}" not found`);
    }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: 'tween',
        ease: [0.4, 0.0, 0.2, 1],
      },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md shadow-lg'
          : 'py-5 bg-transparent'
      }`}
      style={{ width: '100vw', maxWidth: '100%' }}
    >
      <div className="container mx-auto flex items-center justify-between px-4 relative">
        {/* Logo on the left */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, 'home')}
          className="relative z-50 focus:outline-none"
        >
          <div className="text-2xl font-bold text-dark-900 dark:text-white">
            Madhava
          </div>
        </a>

        {/* Centered Nav Links */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-base font-medium transition-colors duration-300 text-dark-800 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle and Menu Button on the right */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            className="md:hidden relative z-50 p-2 text-dark-900 dark:text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed top-0 left-0 w-64 h-screen bg-white/80 dark:bg-dark-800/80 backdrop-blur-md z-40 flex flex-col justify-center p-8 md:hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              style={{ overflow: 'hidden' }}
            >
              <nav className="flex flex-col space-y-6 text-center">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <a
                      href={`#${link.id}`}
                      onClick={(e) => handleNavClick(e, link.id)}
                      className="block text-xl font-medium text-dark-800 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 focus:outline-none"
                    >
                      {link.label}
                    </a>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;