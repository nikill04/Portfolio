import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { ContactForm } from '../components/ui/ContactForm';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "saikumarreddypalakolanu6@gmail.com",
      href: "mailto:saikumarreddy@email.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9391035897",
      href: "tel:+919391035897"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "bengaluru, India",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/SaiKumarReddy374",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/sai-kumar-reddy-541680261/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: "Twitter",
      href: "",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      href: "https://mail.google.com/mail/?view=cm&to=saikumarreddypalakolanu6@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="text-blue-600 dark:text-blue-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {info.label}
                        </p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-900 dark:text-white font-medium">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Follow Me
              </h3>
              <div className="flex space-x-6">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-600 dark:text-gray-400 ${link.color} transition-colors p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-10"
            >
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Let's Build Something Great Together!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Whether you have a project in mind, need consultation, or just want to connect, 
                  I'd love to hear from you. I typically respond within 24 hours.
                </p>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>
              <ContactForm />
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/30">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Open to Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I'm currently looking for new opportunities in full-stack web development. 
              If you're interested in working together or have any questions about my experience, 
              please don't hesitate to reach out!
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};