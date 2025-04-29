import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useRef, useEffect } from 'react'
import SectionTitle from '../common/SectionTitle'
import ProjectCard from '../projects/ProjectCard'
import Button from '../common/Button'
import { projects } from '../../data/projects'
import AnimatedArrow from '../common/AnimatedArrow'

const FeaturedProjects = () => {
  // Get only featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 5)


  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container">
        <SectionTitle 
          subtitle="Featured Work"
          title="Recent Projects"
        />
        
        <div className="mb-12">
          <div className="flex flex-wrap gap-8">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-8 mt-8">
            {featuredProjects.slice(3, 4).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center"
            >
              <Button to="/projects" variant="outline">
                View All Projects 
                <AnimatedArrow className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects