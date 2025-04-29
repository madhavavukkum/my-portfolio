import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi'
import Button from '../components/common/Button'
import { projects } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const foundProject = projects.find((p) => p.id === id)
    
    // Simulate loading delay
    setTimeout(() => {
      setProject(foundProject)
      setLoading(false)
    }, 300)
  }, [id])
  
  if (loading) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div className="preloader-inner">
          <div className="preloader-circle"></div>
        </div>
      </div>
    )
  }
  
  if (!project) {
    return (
      <div className="pt-32 pb-20 min-h-screen">
        <div className="container">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button to="/projects" variant="primary">
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-20"
    >
      <div className="container">
        <Link to="/projects" className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 mb-8">
          <FiArrowLeft className="mr-2" />
          Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.description}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Challenge</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.challenge}
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Solution</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.solution}
                  </p>
                </div>
                
                {project.images && project.images.length > 0 && (
                  <div>
                    <h3 className="text-xl font-bold mb-4">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.map((image, index) => (
                        <motion.div
                          key={index}
                          className="rounded-lg overflow-hidden shadow-md"
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="w-full h-auto"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-32">
              <div className="card p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Client</h4>
                    <p className="text-gray-600 dark:text-gray-400">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Date</h4>
                    <p className="text-gray-600 dark:text-gray-400">{project.date}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Categories</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.categories.map((category, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                {project.liveUrl && (
                  <Button 
                    href={project.liveUrl} 
                    variant="primary"
                    className="w-full justify-center"
                  >
                    View Live Site <FiExternalLink className="ml-2" />
                  </Button>
                )}
                
                {project.githubUrl && (
                  <Button 
                    href={project.githubUrl} 
                    variant="outline"
                    className="w-full justify-center"
                  >
                    View Code <FiGithub className="ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetail