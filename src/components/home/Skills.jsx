import { motion } from 'framer-motion'
import SectionTitle from '../common/SectionTitle'
import { skills } from '../../data/skills'

const Skills = () => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }
  
  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="container">
        <SectionTitle 
          subtitle="My Expertise"
          title="Skills & Technologies"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              className="card p-6"
              variants={item}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={index}
            >
              <h3 className="text-lg font-bold mb-4 text-primary-500">{category}</h3>
              <ul className="space-y-3">
                {items.map(skill => (
                  <motion.li 
                    key={skill.name}
                    className="flex items-center"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary-500 mr-2"></div>
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills