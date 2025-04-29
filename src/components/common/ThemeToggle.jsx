import { motion } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import { FiSun, FiMoon } from 'react-icons/fi'

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme()
  
  return (
    <motion.button
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
      className="relative p-2 rounded-full bg-gray-100 dark:bg-dark-700 transition-colors duration-300"
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="flex items-center justify-center"
        initial={false}
        animate={{ rotate: darkMode ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {darkMode ? (
          <FiMoon className="text-yellow-400 w-5 h-5" />
        ) : (
          <FiSun className="text-orange-400 w-5 h-5" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle