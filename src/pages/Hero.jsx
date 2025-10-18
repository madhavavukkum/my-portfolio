import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDown, FiArrowRight } from 'react-icons/fi';
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
      style={{ overflowX: 'hidden', width: '100vw', maxWidth: '100%' }}
    >
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ opacity, scale, y, overflow: 'hidden' }}
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

      <div className="relative z-10 text-center w-full">
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
          text="Hello,  I'm  Madhava"
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
            to="#projects"
            className="bg-primary-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-600 hover:shadow-lg transition-all duration-300"
          >
            View My Work <FiArrowRight className="ml-2 inline" />
          </Button>
          <Button
            to="#contact"
            className="border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-full font-semibold hover:border-primary-500 hover:text-primary-500 dark:hover:text-primary-400 hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Button>
        </motion.div>
        <motion.div
          className="flex justify-center gap-6 mb-16"
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="https://github.com/madhavapavan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="GitHub Profile"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://leetcode.com/u/madhavavukkum/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="LeetCode Profile"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://www.geeksforgeeks.org/user/madhavap6tsj"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="GeeksforGeeks Profile"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.45 17.94c-0.36-0.36-0.78-0.54-1.26-0.54-0.48 0-0.9 0.18-1.26 0.54-0.36 0.36-0.54 0.78-0.54 1.26 0 0.48 0.18 0.9 0.54 1.26 0.36 0.36 0.78 0.54 1.26 0.54 0.48 0 0.9-0.18 1.26-0.54 0.36-0.36 0.54-0.78 0.54-1.26 0-0.48-0.18-0.90-0.54-1.26zM5.01 17.94c-0.36-0.36-0.78-0.54-1.26-0.54-0.48 0-0.90 0.18-1.26 0.54-0.36 0.36-0.54 0.78-0.54 1.26 0 0.48 0.18 0.90 0.54 1.26 0.36 0.36 0.78 0.54 1.26 0.54 0.48 0 0.90-0.18 1.26-0.54 0.36-0.36 0.54-0.78 0.54-1.26 0-0.48-0.18-0.90-0.54-1.26zM16.35 13.26c0.48 0.48 1.08 0.72 1.80 0.72s1.32-0.24 1.80-0.72c0.48-0.48 0.72-1.08 0.72-1.80s-0.24-1.32-0.72-1.80c-0.48-0.48-1.08-0.72-1.80-0.72s-1.32 0.24-1.80 0.72c-0.48 0.48-0.72 1.08-0.72 1.80s0.24 1.32 0.72 1.80zM4.05 13.26c0.48 0.48 1.08 0.72 1.80 0.72s1.32-0.24 1.80-0.72c0.48-0.48 0.72-1.08 0.72-1.80s-0.24-1.32-0.72-1.80c-0.48-0.48-1.08-0.72-1.80-0.72s-1.32 0.24-1.80 0.72c-0.48 0.48-0.72 1.08-0.72 1.80s0.24 1.32 0.72 1.80zM13.20 6.78c0-0.72-0.24-1.32-0.72-1.80-0.48-0.48-1.08-0.72-1.80-0.72s-1.32 0.24-1.80 0.72c-0.48 0.48-0.72 1.08-0.72 1.80s0.24 1.32 0.72 1.80c0.48 0.48 1.08 0.72 1.80 0.72s1.32-0.24 1.80-0.72c0.48-0.48 0.72-1.08 0.72-1.80z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://codolio.com/profile/Madhava"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="Codolio Portfolio"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 3.75a3.75 3.75 0 0 0-3.75 3.75v9a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75v-9a3.75 3.75 0 0 0-3.75-3.75h-9zm1.5 3.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3zm0 6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3z"/>
            </svg>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/madhavavukkum"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="LinkedIn Profile"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.a>
          <motion.a
            href="mailto:madhavavukkum@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-dark-700 border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-lg transition-all duration-300"
            whileHover={{ y: -5 }}
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </motion.a>
        </motion.div>
        <motion.div
          className="absolute bottom-[-20px] left-[calc(50vw+20px)] transform -translate-x-1/2 z-20"
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
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-dark-700 shadow-md"
          >
            <FiArrowDown size={20} className="text-primary-500 animate-pulse" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;