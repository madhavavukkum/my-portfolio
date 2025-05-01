import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from 'react-icons/si'
import Button from '../components/common/Button'
import AnimatedText from '../components/common/AnimatedText'
import SectionTitle from '../components/common/SectionTitle'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Skills from '../components/home/Skills'
import AnimatedArrow from '../components/common/AnimatedArrow'
import { LuCodeXml } from "react-icons/lu";

const Home = () => {
  const targetRef = useRef(null)
  const svgRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  // SVG animation for a single, uneven, centered shape
  useEffect(() => {
    const svg = svgRef.current
    const path = svg.querySelector('path')
    let time = 0

    const animate = () => {
      const points = []
      const numPoints = 12 // More points for complex shape
      const baseRadius = 250 // Base size of the shape
      const centerX = window.innerWidth / 2 // Center horizontally
      const centerY = window.innerHeight / 2 // Center vertically

      // Generate uneven, non-circular shape
      for (let i = 0; i <= numPoints; i++) {
        const angle = (i / numPoints) * Math.PI * 2
        const t = time + (i / numPoints) * 3
        // Combine multiple sine/cosine for irregular shape
        const r = baseRadius * (
          1 +
          Math.sin(t * 0.8) * 0.3 + // Primary wave
          Math.cos(t * 1.2) * 0.2 + // Secondary wave
          Math.sin(t * 0.5) * 0.15  // Tertiary wave for asymmetry
        )
        const x = centerX + Math.cos(angle) * r
        const y = centerY + Math.sin(angle) * r
        points.push({ x, y })
      }

      // Create smooth SVG path with Bezier curves
      let d = `M${points[0].x},${points[0].y}`
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1]
        const curr = points[i]
        const cx = (prev.x + curr.x) / 2
        const cy = (prev.y + curr.y) / 2
        d += ` Q${prev.x},${prev.y} ${cx},${cy}`
      }
      d += ' Z'
      path.setAttribute('d', d)

      time += 0.01 // Slow animation for fluid effect
      requestAnimationFrame(animate)
    }

    animate()

    // Resize SVG to fit viewport
    const resizeSvg = () => {
      svg.setAttribute('width', window.innerWidth)
      svg.setAttribute('height', window.innerHeight)
    }
    resizeSvg()
    window.addEventListener('resize', resizeSvg)

    return () => {
      window.removeEventListener('resize', resizeSvg)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section 
        ref={targetRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background with Scroll Animation */}
        <motion.div 
          className="absolute inset-0 -z-10"
          style={{ opacity, scale, y }}
        >
          {/* SVG Background */}
          <svg
            ref={svgRef}
            className="absolute inset-0"
            style={{ filter: 'url(#blur)' }}
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
          
          {/* Fallback Gradient */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-secondary-500/10 dark:from-primary-500/5 dark:to-secondary-500/5"></div>
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-dark-800 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-dark-800 to-transparent"></div>
          </div>
        </motion.div>

        {/* Social Handles - Vertical on Left Side */}
        <motion.div
          className="absolute left-6 md:left-12 top-0 h-full flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex flex-col items-center gap-6 mt-20">
            <a
              href="https://github.com/madhavapavan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GitHub Profile"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://leetcode.com/u/PTpT3kvydS"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode size={24} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/madhavap6tsj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="GeeksforGeeks Profile"
            >
              <SiGeeksforgeeks size={24} />
            </a>
            <a
              href="https://codolio.com/profile/Madhava"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Codolio Portfolio"
            >
              <LuCodeXml size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/madhavavukkum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:madhavavukkum@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <FiMail size={24} />
            </a>
          </div>
          {/* Vertical Line */}
          <div className="w-px bg-gray-400 dark:bg-gray-600 flex-grow mt-6" style={{ height: 'calc(100% - 320px)' }}></div>
        </motion.div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium inline-block mb-6">
                Creative Designer & Developer
              </span>
            </motion.div>
            
            <AnimatedText
              text="Hello, I'm  Madhava"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I'm a passionate developer driven by curiosity in web development and AI, dedicated to building innovative, efficient, and impactful digital solutions.            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button to="/projects" variant="primary">
                View My Work <FiArrowRight className="ml-2" />
              </Button>
              <Button to="/contact" variant="outline">
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <Link 
            to="#about" 
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
            }}
            aria-label="Scroll down"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-dark-700 shadow-md"
          >
            <FiArrowDown 
              size={20} 
              className="text-primary-500 animate-pulse"
            />
          </Link>
        </motion.div>
        </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-dark-800">
        <div className="container">
          <SectionTitle 
            subtitle="About Me"
            title="Think.  Code.  Create."
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="homeimg.jpg" // Replace with actual image path
                    alt="Creative workspace" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <Button
                  href="https://drive.google.com/file/d/1E_1Wc9GsZoW5vFR1hgzimfT-Oxa9HriC/view?usp=sharing"
                  target="_blank"
                  className="absolute -bottom-6 -right-6 p-4 bg-primary-500 text-white hover:text-white rounded-lg shadow-lg flex items-center gap-2 transition-colors z-10"
                  aria-label="Download Resume"
                >
                  <FiDownload size={18} className="text-white" />
                  <span className="text-sm font-medium text-white">Download Resume</span>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-2xl font-bold mb-4">Problem solving through code</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm a full-stack developer with solid problem-solving skills, building practical and efficient applications. I focus on writing clean code and delivering solutions that are simple, effective, and user-friendly.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I also work with machine learning and deep learning technologies to broaden my capabilities and bring smarter features into the products I build.
              </p>   
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Strengths</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Problem Solving, DSA, Logical Thinking
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Interests</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Frontend, Backend, Machine Learning, Deep Learning
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-start">
                <Button to="/about" variant="primary">
                  More About Me <AnimatedArrow className="ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <Skills />
      
      {/* Featured Projects */}
      <FeaturedProjects />
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-500 dark:bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to bring your ideas to life?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's collaborate and create something amazing together.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                to="/contact" 
                className="bg-white text-primary-600 hover:bg-white/90 hover:shadow-lg"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home