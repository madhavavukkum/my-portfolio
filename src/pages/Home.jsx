import { motion } from 'framer-motion'
import Hero from './Hero'
import About from './About'
import SkillsSection from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
    </motion.div>
  )
}

export default Home