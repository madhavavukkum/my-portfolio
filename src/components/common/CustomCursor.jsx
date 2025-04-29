import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../context/CursorContext';

const CustomCursor = () => {
  const { position, linkHovered, showCustomCursor } = useCursor();
  const [cursorVariant, setCursorVariant] = useState('default');

  // Handle hover states for text and interactive elements
  useEffect(() => {
    if (!showCustomCursor) return;

    const handleTextHover = (e) => {
      setCursorVariant('text');
      e.target.setAttribute('data-magnify', 'true');
    };
    const handleInteractiveHover = (e) => {
      setCursorVariant('interactive');
      e.target.setAttribute('data-magnify', 'true');
    };
    const handleMouseOut = (e) => {
      setCursorVariant('default');
      e.target.removeAttribute('data-magnify');
    };

    const attachListeners = () => {
      // Text elements
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
      textElements.forEach((el) => {
        el.addEventListener('mouseover', handleTextHover);
        el.addEventListener('mouseout', handleMouseOut);
      });
      // Buttons and inputs
      const interactiveElements = document.querySelectorAll('button, [role="button"], input, textarea');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseover', handleInteractiveHover);
        el.addEventListener('mouseout', handleMouseOut);
      });
    };

    // Attach listeners initially
    attachListeners();

    // Use MutationObserver to detect new elements
    const observer = new MutationObserver(() => {
      attachListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Cleanup
    return () => {
      const textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span');
      const interactiveElements = document.querySelectorAll('button, [role="button"], input, textarea');
      textElements.forEach((el) => {
        el.removeEventListener('mouseover', handleTextHover);
        el.removeEventListener('mouseout', handleMouseOut);
        el.removeAttribute('data-magnify');
      });
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseover', handleInteractiveHover);
        el.removeEventListener('mouseout', handleMouseOut);
        el.removeAttribute('data-magnify');
      });
      observer.disconnect();
    };
  }, [showCustomCursor]);

  // Cursor variants for dot
  const dotVariants = {
    default: {
      x: position.x - 8, // Center 16px dot
      y: position.y - 8,
      height: 16,
      width: 16,
      opacity: 1,
      backgroundColor: 'rgba(0, 212, 255, 0.8)', // Neon blue
      transition: {
        type: 'spring',
        mass: 0.08, // Smooth tracking
        stiffness: 900, // Tight following
        damping: 20, // Fluid movement
      },
    },
    text: {
      x: position.x - 20, // Center 40px dot
      y: position.y - 20,
      height: 40,
      width: 40,
      opacity: 0.9,
      backgroundColor: 'rgba(0, 212, 255, 0.8)', // Neon blue
      transition: {
        type: 'spring',
        mass: 0.08,
        stiffness: 900,
        damping: 20,
      },
    },
    interactive: {
      x: position.x - 8, // Center 16px dot (no size change)
      y: position.y - 8,
      height: 16,
      width: 16,
      opacity: 1,
      backgroundColor: 'rgba(0, 212, 255, 0.8)', // Neon blue
      transition: {
        type: 'spring',
        mass: 0.08,
        stiffness: 900,
        damping: 20,
      },
    },
  };

  if (!showCustomCursor) return null;

  return (
    <motion.div
      className="cursor-dot"
      variants={dotVariants}
      animate={cursorVariant}
    />
  );
};

export default CustomCursor;