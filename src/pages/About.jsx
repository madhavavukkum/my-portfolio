import { motion } from 'framer-motion'
import { FiDownload } from 'react-icons/fi'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { skills } from '../data/skills'
import { experience } from '../data/experience'
import { education } from '../data/education'

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium inline-block mb-6">
                About Me
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                I solve problems and create effective solutions.
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                With expertise in AI, Data Science, and full-stack web development, I build cutting-edge solutions that enhance user experiences and streamline processes. Whether it's crafting dynamic web applications or designing intelligent systems, I focus on creating impactful, scalable, and efficient digital products.
              </p>
              <Button 
                href="#" 
                variant="primary"
                className="flex items-center"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Designer at work" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 p-5 bg-white dark:bg-dark-700 rounded-lg shadow-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <span className="block text-sm text-gray-600 dark:text-gray-400">Coded with</span>
                      <span className="block text-3xl font-bold text-primary-500">Purpose</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-3xl font-bold text-secondary-500">300+</span>
                      <span className="block text-sm text-gray-600 dark:text-gray-400">DSA Problems Solved</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <SectionTitle 
            subtitle="My Journey"
            title="Work Experience"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-12">
              {experience.map((job, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary-500"></div>
                  <div className="mb-1 flex items-center">
                    <h3 className="text-xl font-bold">{job.role}</h3>
                    <span className="ml-auto px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-primary-500 font-medium mb-2">{job.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                  {job.achievements && (
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-300">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container">
          <SectionTitle 
            subtitle="My Education"
            title="Academic Background"
          />
          
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-secondary-500"></div>
                  <div className="p-6 bg-white dark:bg-dark-700 shadow-md rounded-lg">
                    <div className="flex items-start mb-4">
                      <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                        {edu.icon}
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-bold">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      </div>
                      <div className="ml-auto text-right">
                      <span className="ml-auto px-3 py-1 text-xs font-medium rounded-full bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300">
                      {edu.period}
                    </span>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <SectionTitle 
            subtitle="My Expertise"
            title="Skills & Technologies"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                className="card p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary-500">{category}</h3>
                <div className="space-y-4">
                  {items.map((skill, i) => (
                    <div key={`${category}-${i}`}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                        <motion.div 
                          className="bg-primary-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.1 * i }}
                          viewport={{ once: true }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Interested in working together?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I'm always open to discussing new projects and opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                to="/contact"
                className="bg-white text-primary-600 hover:bg-white/90"
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

export default About