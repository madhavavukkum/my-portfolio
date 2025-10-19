import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiArrowRight, FiFolder, FiCode } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';
import Button from '../components/common/Button';
import AnimatedText from '../components/common/AnimatedText';

const Hero = () => {
  const targetRef = useRef(null);
  const svgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  useEffect(() => {
    const svg = svgRef.current;
    const path = svg.querySelector('path');
    let time = 0;

    const animate = () => {
      const points = [];
      const numPoints = 12;
      const baseRadius = 250;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      for (let i = 0; i <= numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2;
        const t = time + (i / numPoints) * 3;
        const r =
          baseRadius *
          (1 +
            Math.sin(t * 0.8) * 0.3 +
            Math.cos(t * 1.2) * 0.2 +
            Math.sin(t * 0.5) * 0.15);
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;
        points.push({ x, y });
      }

      let d = `M${points[0].x},${points[0].y}`;
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const cx = (prev.x + curr.x) / 2;
        const cy = (prev.y + curr.y) / 2;
        d += ` Q${prev.x},${prev.y} ${cx},${cy}`;
      }
      d += ' Z';
      path.setAttribute('d', d);

      time += 0.01;
      requestAnimationFrame(animate);
    };

    animate();

    const resizeSvg = () => {
      svg.setAttribute('width', window.innerWidth);
      svg.setAttribute('height', window.innerHeight);
    };
    resizeSvg();
    window.addEventListener('resize', resizeSvg);

    return () => {
      window.removeEventListener('resize', resizeSvg);
    };
  }, []);

  return (
    <section
      id="home"
      ref={targetRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{ boxSizing: 'border-box', width: '100%', maxWidth: '100vw', margin: 0, padding: 0 }}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ opacity, scale, y }}
      >
        <svg
          ref={svgRef}
          className="absolute inset-0"
          style={{ filter: 'url(#blur)', width: '100%', height: '100%' }}
        >
          <defs>
            <filter id="blur">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
            <linearGradient id="shapeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'rgba(45, 212, 191, 0.2)', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: 'rgba(34, 211, 238, 0.15)', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path fill="url(#shapeGradient)" />
        </svg>
        <div className="absolute inset-0 bg-[linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)] bg-[length:50px_50px] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(59,130,246,0.15)_0%,transparent_70%)] blur-[60px] animate-[pulse_4s_ease-in-out_infinite]"></div>
      </motion.div>

      <div className="relative z-10 text-center w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium inline-block mb-6">
            Creative Designer & Developer
          </span>
        </motion.div>
        <AnimatedText
          text="Hello,   I'm   Madhava"
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mx-auto"
        />
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          I'm a passionate developer driven by curiosity in web development and AI, dedicated to building innovative, efficient, and impactful digital solutions.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transition-all duration-300 min-w-[180px]"
          >
            View My Work <FiArrowRight className="ml-2 inline" />
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-primary-500 hover:text-primary-500 dark:hover:text-primary-400 hover:shadow-lg transition-all duration-300 min-w-[180px]"
          >
            Get in Touch
          </Button>
        </motion.div>
        <motion.div
          className="flex items-center justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="https://github.com/madhavavukkum"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/madhavavukkum/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="LeetCode Profile"
          >
            <SiLeetcode size={24} />
          </motion.a>
          <motion.a
            href="https://www.geeksforgeeks.org/user/madhavap6tsj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="GeeksforGeeks Profile"
          >
            <FiCode size={24} />
          </motion.a>
          <motion.a
            href="https://codolio.com/profile/Madhava"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="Codolio Portfolio"
          >
            <FiFolder size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/madhavavukkum"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="mailto:madhavavukkum@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="Email"
          >
            <MdEmail size={24} />
          </motion.a>
        </motion.div>
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-dark-700 shadow-md left-1/2 transform -translate-x-1/2"
          >
            <FiArrowDown size={20} className="text-primary-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
