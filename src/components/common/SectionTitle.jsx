import { motion } from 'framer-motion'
import AnimatedText from './AnimatedText'

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <motion.div 
      className={`mb-12 md:mb-16 text-${align}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {subtitle && (
        <motion.p 
          className="text-sm md:text-base font-medium text-primary-500 mb-2"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
      <AnimatedText
        text={title}
        className="text-2xl md:text-3xl lg:text-4xl font-bold"
        once={true}
      />
    </motion.div>
  )
}

export default SectionTitle