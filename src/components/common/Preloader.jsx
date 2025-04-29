import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <motion.div 
      className="preloader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="preloader-inner">
        <div className="preloader-circle"></div>
        <motion.div 
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="text-xl font-semibold">Portfolio</span>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Preloader