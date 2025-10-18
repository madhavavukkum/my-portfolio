import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { LuCodeXml } from 'react-icons/lu'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/madhavavukkum', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://www.linkedin.com/in/madhavavukkum', label: 'LinkedIn' },
    { icon: <LuCodeXml />, url: 'https://codolio.com/profile/Madhava', label: 'Codolio' },
    { icon: <FiMail />, url: 'mailto:madhavavukkum@gmail.com', label: 'Email' }
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const section = document.querySelector(`#${id}`)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    } else {
      console.warn(`Section with id "${id}" not found`)
    }
  }

  return (
    <motion.footer
      className="bg-gray-100 dark:bg-dark-700 border-t border-gray-200 dark:border-dark-600"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          className="text-center md:text-left w-full md:w-auto"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-base mb-2">
            Designed & Built by <span className="text-primary-500 dark:text-primary-400 font-semibold">Madhava Vukkum</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            © {currentYear} All rights reserved
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
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
        </motion.div>

        <motion.div
          className="w-full md:w-auto text-center md:text-right"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-sm font-medium hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          >
            Back to top
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:-translate-y-1"
            >
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
