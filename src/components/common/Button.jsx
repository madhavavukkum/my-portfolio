import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Button = ({ 
  children, 
  to, 
  href, 
  variant = 'primary', 
  className = '', 
  onClick, 
  ...props 
}) => {
  const baseClasses = `btn btn-${variant} ${className}`
  
  const buttonMotion = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
  }
  
  // For internal navigation
  if (to) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonMotion}
      >
        <Link to={to} className={baseClasses} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }
  
  // For external links
  if (href) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonMotion}
      >
        <a 
          href={href} 
          className={baseClasses} 
          target="_blank" 
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      </motion.div>
    )
  }
  
  // Default button
  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonMotion}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button