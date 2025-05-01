import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { LuCodeXml } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/madhavapavan', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/madhavavukkum', label: 'LinkedIn' },
    { icon: <LuCodeXml />, url: 'https://codolio.com/profile/Madhava', label: 'Codolio' },
    { icon: <FiMail />, url: 'mailto:madhavavukkum@gmail.com', label: 'Email' }
  ]
  
  
  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ]
  
  return (
    <footer className="bg-gray-100 dark:bg-dark-700 pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="text-2xl font-bold mb-4 inline-block">
              Portfolio
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Creating beautiful digital experiences with a focus on performance and accessibility.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-xl">{link.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
          <h3 className="text-lg font-semibold mb-4">Projects & Interests</h3>
          <ul className="space-y-2">
            <li>
              <span className="text-gray-600 dark:text-gray-400">Web Development</span>
            </li>
            <li>
              <span className="text-gray-600 dark:text-gray-400">AI & Machine Learning</span>
            </li>
            <li>
              <span className="text-gray-600 dark:text-gray-400">Data Analytics</span>
            </li>
            <li>
              <span className="text-gray-600 dark:text-gray-400">Real-time Applications</span>
            </li>
          </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">madhavavukkum@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-400">Rajahmundry, Ap</p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-dark-600 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer