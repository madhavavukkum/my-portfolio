import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionTitle from '../common/SectionTitle';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
    { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Power BI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
  ];

  const softSkills = [
    { name: 'Communication', icon: '💬' },
    { name: 'Teamwork', icon: '🤝' },
    { name: 'Problem-Solving', icon: '🧩' },
    { name: 'Strategic Thinking', icon: '🎯' },
  ];

  const codingProfiles = [
    {
      name: 'LeetCode',
      link: 'https://leetcode.com/u/madhavavukkum',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
        </svg>
      ),
      gradient: 'from-orange-400 to-orange-600',
    },
    {
      name: 'GeeksforGeeks',
      link: 'https://geeksforgeeks.org/user/madhavap6tsj',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.45 17.94c-0.36-0.36-0.78-0.54-1.26-0.54-0.48 0-0.9 0.18-1.26 0.54-0.36 0.36-0.54 0.78-0.54 1.26 0 0.48 0.18 0.9 0.54 1.26 0.36 0.36 0.78 0.54 1.26 0.54 0.48 0 0.9-0.18 1.26-0.54 0.36-0.36 0.54-0.78 0.54-1.26 0-0.48-0.18-0.9-0.54-1.26zM5.01 17.94c-0.36-0.36-0.78-0.54-1.26-0.54-0.48 0-0.9 0.18-1.26 0.54-0.36 0.36-0.54 0.78-0.54 1.26 0 0.48 0.18 0.9 0.54 1.26 0.36 0.36 0.78 0.54 1.26 0.54 0.48 0 0.9-0.18 1.26-0.54 0.36-0.36 0.54-0.78 0.54-1.26 0-0.48-0.18-0.9-0.54-1.26zM16.35 13.26c0.48 0.48 1.08 0.72 1.8 0.72s1.32-0.24 1.8-0.72c0.48-0.48 0.72-1.08 0.72-1.8s-0.24-1.32-0.72-1.8c-0.48-0.48-1.08-0.72-1.8-0.72s-1.32 0.24-1.8 0.72c-0.48 0.48-0.72 1.08-0.72 1.8s0.24 1.32 0.72 1.8zM4.05 13.26c0.48 0.48 1.08 0.72 1.8 0.72s1.32-0.24 1.8-0.72c0.48-0.48 0.72-1.08 0.72-1.8s-0.24-1.32-0.72-1.8c-0.48-0.48-1.08-0.72-1.8-0.72s-1.32 0.24-1.8 0.72c-0.48 0.48-0.72 1.08-0.72 1.8s0.24 1.32 0.72 1.8zM13.2 6.78c0-0.72-0.24-1.32-0.72-1.8-0.48-0.48-1.08-0.72-1.8-0.72s-1.32 0.24-1.8 0.72c-0.48 0.48-0.72 1.08-0.72 1.8s0.24 1.32 0.72 1.8c0.48 0.48 1.08 0.72 1.8 0.72s1.32-0.24 1.8-0.72c0.48-0.48 0.72-1.08 0.72-1.8z" />
        </svg>
      ),
      gradient: 'from-green-600 to-green-800',
    },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-dark-900"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle subtitle="What I bring to the table" title="Skills & Expertise" />
          </motion.div>

          {/* Technical Skills */}
          <motion.div
            className="grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 text-center cursor-pointer hover:border-blue-500 hover:shadow-lg hover:bg-gradient-to-br hover:from-blue-500/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-md hover:scale-125 transition-transform duration-300"
                  />
                </div>
                <span className="font-semibold text-sm text-gray-900 dark:text-gray-100 mt-4">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-center mb-8">Soft Skills</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 text-center cursor-pointer hover:border-blue-500 hover:bg-gradient-to-br hover:from-blue-500/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <span className="text-4xl">{skill.icon}</span>
                  <span className="font-semibold text-lg text-gray-900 dark:text-gray-100 mt-4">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coding Profiles */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <h3 className="text-3xl font-bold text-center mb-8">Coding Profiles</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
              {codingProfiles.map((profile, index) => (
                <motion.a
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.5 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${profile.gradient} rounded-lg flex items-center justify-center text-white flex-shrink-0`}
                  >
                    {profile.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {profile.name}
                    </h4>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default Skills;
