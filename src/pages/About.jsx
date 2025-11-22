import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Users, Target } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { skills } from '../data/skills';

export const About = () => {
  const achievements = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "450+ DSA Problems Solved",
      description: "Strong foundation in data structures and algorithms"
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "MERN Stack Expert",
      description: "Proficient in MongoDB, Express.js, React, and Node.js"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Team Collaboration",
      description: "Experience working in web development environments"
    },
    {
      icon: <Target className="w-8 h-8 text-red-600" />,
      title: "Problem Solver",
      description: "Passionate about finding efficient solutions to complex problems"
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
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate web developer with a strong foundation in modern technologies and a love for creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate full-stack web developer with a strong foundation in modern web technologies. 
                My journey in programming began with a fascination for solving complex problems through code, 
                which led me to master data structures and algorithms.
              </p>
              <p>
                Having solved over 450 DSA problems, I've developed a systematic approach to problem-solving 
                that I apply to every project I work on. My expertise lies in the MERN stack (MongoDB, Express.js, 
                React, and Node.js), where I've built numerous scalable applications.
              </p>
              <p>
                I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends. 
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing my knowledge through blog posts and community contributions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Coding workspace"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Key Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
              <Card key={index}>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};