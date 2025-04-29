import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Animation variants for the arrow
const arrowVariants = {
  shake: {
    x: [0, -5, 5, -5, 5, 0],
    transition: {
      duration: 0.7,
      repeat: Infinity,
      repeatDelay: 0.5,
      ease: 'easeInOut',
    },
  },
};

const AnimatedArrow = ({ size = 16, className = '' }) => {
  // Ref to access the arrow element
  const arrowRef = useRef(null);

  // Set circle border color to match arrow color
  useEffect(() => {
    if (arrowRef.current) {
      const arrowColor = window.getComputedStyle(arrowRef.current).color;
      arrowRef.current.parentElement.style.borderColor = arrowColor;
    }
  }, []);

  return (
    <motion.span
      variants={arrowVariants}
      animate="shake"
      className={`inline-block ml-2 rounded-full border-2 p-1 ${className}`}
      style={{ lineHeight: 0 }}
    >
      <FiArrowRight ref={arrowRef} size={size} />
    </motion.span>
  );
};

export default AnimatedArrow;