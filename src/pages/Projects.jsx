import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionTitle from '../components/common/SectionTitle'
import ProjectCard from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [displayProjects, setDisplayProjects] = useState(projects)
  
  // Get unique categories
  const categories = ['all', ...new Set(projects.flatMap(project => project.categories))]
  
  // Filter projects by category
  const filterProjects = (category) => {
    setFilter(category)
    
    if (category === 'all') {
      setDisplayProjects(projects)
    } else {
      setDisplayProjects(projects.filter(project => 
        project.categories.includes(category)
      ))
    }
  }
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-32 pb-20">
        <div className="container">
          <SectionTitle 
            subtitle="My Portfolio"
            title="Explore My Projects"
            align="center"
          />
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => filterProjects(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence>
              {displayProjects.length > 0 ? (
                displayProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    variants={item}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))
              ) : (
                <motion.div 
                  className="col-span-full text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    No projects found in this category.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default Projects