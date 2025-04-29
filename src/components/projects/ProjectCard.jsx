import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card group h-full"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/projects/${project.id}`}>
        <div className="project-card-content h-full card flex flex-col">
          <div className="relative overflow-hidden rounded-t-2xl aspect-[16/9]">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {project.featured && (
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                Featured
              </div>
            )}
          </div>
          
          <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
              {project.excerpt}
            </p>
            
            <div className="flex items-center text-primary-500 font-medium mt-auto">
              <span>View Project</span>
              <motion.span
                className="inline-block ml-2"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <FiArrowRight />
              </motion.span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard