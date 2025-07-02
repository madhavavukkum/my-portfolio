import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link with form data
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:madhavavukkum@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(emailBody)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Update form status to show success
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Opening your email client...',
    });

    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: '',
      });
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="pt-32 pb-20">
        <div className="container">
          <SectionTitle subtitle="Let's Connect" title="Get In Touch" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                {formStatus.submitted && (
                  <motion.div
                    className={`mb-6 p-4 rounded-lg ${
                      formStatus.success
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {formStatus.message}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 text-gray-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <Button type="submit" variant="primary">
                    Send Message <FiSend className="ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-500 mr-4">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a
                        href="mailto:madhavavukkum@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      >
                        madhavavukkum@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-500 mr-4">
                      <FiMapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-gray-600 dark:text-gray-300">Rajahnundry, AP</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                I’m open to internships and job opportunities—feel free to reach out or connect with me on the platforms below.
                </p>
                <div className="flex space-x-4">
                  {[
                    { name: 'GitHub', link: 'https://github.com/madhavapavan' },
                    { name: 'LinkedIn', link: 'https://www.linkedin.com/in/madhavavukkum' },
                    { name: 'Gmail', link: 'mailto:madhavavukkum@gmail.com' },
                  ].map(({ name, link }) => (
                    <motion.a
                      key={name}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {name}
                    </motion.a>
                  ))}
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="rounded-2xl overflow-hidden h-96 shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117369.73275862698!2d81.784104!3d17.000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b5ebd9d9b1c7f%3A0xc8f90b74c0a409a8!2sRajahmundry%2C%20Andhra%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1683133252353!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;