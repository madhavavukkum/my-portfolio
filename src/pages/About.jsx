import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import { skillsData } from '../data/skillsData';
import { experience } from '../data/experience';
import { education } from '../data/education';
import * as Icons from 'react-icons/fa';
import * as SimpleIcons from 'react-icons/si';

const About = () => {
  const getIcon = (logo) => {
    const IconComponent = Icons[logo] || SimpleIcons[logo];
    return IconComponent ? <IconComponent className="text-lg text-primary-500" /> : null;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
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
                Building impactful digital solutions
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                I specialize in full-stack development and data science, delivering scalable web applications and data-driven insights. My focus is on creating efficient, user-centric solutions.
              </p>
              <Button
                href="https://drive.google.com/file/d/1E_1Wc9GsZoW5vFR1hgzimfT-Oxa9HriC/view?usp=sharing"
                target="_blank"
                variant="primary"
                className="flex items-center text-lg px-6 py-3"
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
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Designer at work"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="My Journey" title="Work Experience" />
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
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="My Education" title="Academic Background" />
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start">
                    <div>
                      <h3 className="text-lg font-bold">{edu.degree}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container mx-auto px-4">
          <SectionTitle subtitle="My Expertise" title="Skills & Technologies" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(skillsData).map(([category, items], index) => (
              <motion.div
                key={category}
                className="p-6 bg-white dark:bg-dark-800 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-primary-500">{category}</h3>
                <ul className="space-y-3">
                  {items.map((skill, i) => (
                    <motion.li
                      key={`${category}-${i}`}
                      className="flex items-center"
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="mr-3">{getIcon(skill.logo)}</div>
                      <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Ready to collaborate?
            </motion.h2>
            <motion.p
              className="text-lg mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's discuss new projects and opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                to="/contact"
                className="bg-white text-primary-600 hover:bg-white/90 text-lg px-6 py-3 font-semibold"
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;