import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()

  return (
    <motion.button
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      className="relative p-3 rounded-full bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-all duration-300 group"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-center w-6 h-6"
        initial={false}
        animate={{ scale: darkMode ? 1 : 1 }} // Removed rotate to prevent flipping
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {darkMode ? (
          <FiMoon className="w-5 h-5 text-white" /> // Static rotation to ensure downward crescent
        ) : (
          <FiSun className="w-5 h-5 text-yellow-400" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle