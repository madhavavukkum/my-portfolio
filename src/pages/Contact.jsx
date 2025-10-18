import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { LuCodeXml } from 'react-icons/lu'
import SectionTitle from '../components/common/SectionTitle'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
    const mailtoLink = `mailto:madhavavukkum@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`
    window.location.href = mailtoLink
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Opening your email client...',
    })
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setFormStatus({ submitted: false, success: false, message: '' })
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      value: 'madhavavukkum@gmail.com',
      link: 'mailto:madhavavukkum@gmail.com',
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      value: 'Rajahmundry, Andhra Pradesh',
      link: null,
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/madhavavukkum',
      icon: <FiGithub size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/madhavavukkum',
      icon: <FiLinkedin size={24} />,
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/Madhava',
      icon: <LuCodeXml size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:madhavavukkum@gmail.com',
      icon: <FiMail size={24} />,
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section id="contact" className="min-h-screen py-24 px-6 bg-gray-50 dark:bg-dark-800" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <SectionTitle subtitle="Let's Connect" title="Get In Touch" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-dark-900 dark:text-white">Contact Information</h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-5 p-5 bg-white dark:bg-dark-700 rounded-xl border border-gray-200 dark:border-dark-600 hover:border-primary-500 dark:hover:border-primary-400 transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-blue-800 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-600 dark:text-gray-400">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-lg font-semibold text-dark-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-lg font-semibold text-dark-900 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-medium text-dark-900 dark:text-white">Connect with me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 flex items-center justify-center bg-white dark:bg-dark-700 rounded-xl border border-gray-200 dark:border-dark-600 text-gray-600 dark:text-gray-400 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.form
              className="bg-white dark:bg-dark-700 p-8 rounded-2xl border border-gray-200 dark:border-dark-600"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2.5 font-semibold text-dark-900 dark:text-white">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full p-4 bg-gray-100 dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 focus:bg-white dark:focus:bg-dark-700 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block mb-2.5 font-semibold text-dark-900 dark:text-white">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full p-4 bg-gray-100 dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 focus:bg-white dark:focus:bg-dark-700 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2.5 font-semibold text-dark-900 dark:text-white">
                  Subject
                </label>
                <motion.input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="w-full p-4 bg-gray-100 dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 focus:bg-white dark:focus:bg-dark-700 transition-all"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2.5 font-semibold text-dark-900 dark:text-white">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message here..."
                  className="w-full p-4 bg-gray-100 dark:bg-dark-800 border-2 border-gray-200 dark:border-dark-600 rounded-xl text-dark-900 dark:text-white focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 focus:bg-white dark:focus:bg-dark-700 transition-all resize-y min-h-[120px]"
                  whileFocus={{ scale: 1.02 }}
                />
              </div>

              {formStatus.submitted && (
                <motion.div
                  className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg mb-6 text-center font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {formStatus.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                className="w-full py-4 px-8 bg-primary-500 text-white rounded-full font-semibold text-base flex items-center justify-center gap-2.5 hover:bg-primary-600 dark:hover:bg-primary-400 transition-all hover:shadow-lg hover:-translate-y-0.5 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <FiSend size={20} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.form>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
