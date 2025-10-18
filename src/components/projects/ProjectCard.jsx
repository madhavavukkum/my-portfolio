import { motion } from 'framer-motion'

const ProjectCard = ({ project, onCardClick }) => {
  return (
    <motion.div
      className="group h-full bg-white dark:bg-dark-700 rounded-2xl border border-gray-200 dark:border-dark-600 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary-500 dark:hover:border-primary-400 cursor-pointer"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={() => onCardClick(project)}
    >
      <div className="flex flex-col h-full">
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

          <h3 className="text-xl font-bold mb-2 text-dark-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-base">
            {project.excerpt || project.description}
          </p>

          <div className="flex justify-center gap-10 mt-auto">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-dark-600 text-dark-900 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-dark-600 text-sm font-medium hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg border border-primary-500 text-sm font-medium hover:bg-primary-600 dark:hover:bg-primary-400 hover:border-primary-600 dark:hover:border-primary-400 transition-all"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Live
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard