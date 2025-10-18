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
      <section id="about" className="pt-24 pb-16 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <SectionTitle 
            subtitle="About Me"
            title="Think. Code. Create."
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
                    src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Designer at work" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <Button
                  href="https://codolio.com/profile/Madhava"
                  target="_blank"
                  className="absolute -bottom-6 left-6 sm:left-auto sm:-right-6 p-3 sm:p-5 bg-primary-500 rounded-lg shadow-lg hover:bg-primary-600 transition-colors z-10"
                  aria-label="Visit Codolio Profile"
                >
                  <div className="grid grid-cols-2 gap-2 sm:gap-4">
                    <div className="text-center">
                      <span className="block text-xs sm:text-sm text-white dark:text-white">Coded with</span>
                      <span className="block text-xl sm:text-3xl font-bold text-secondary-300">Purpose</span>
                    </div>
                    <div className="text-center">
                      <span className="block text-xl sm:text-3xl font-bold text-secondary-300">300+</span>
                      <span className="block text-xs sm:text-sm text-white dark:text-white">DSA Problems Solved</span>
                    </div>
                  </div>
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
    </motion.div>
  );
};

export default About;
