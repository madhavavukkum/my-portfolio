import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center min-h-screen"
    >
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            className="text-9xl font-bold text-primary-500 mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>
          
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Page Not Found
          </motion.h2>
          
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The page you are looking for doesn't exist or has been moved.
          </motion.p>
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button to="/" variant="primary">
              Back to Home
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default NotFound