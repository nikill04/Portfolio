import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

export const Resume = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "GDSC Club",
      period: "2023 - Present",
      description: "Developed and maintained web applications using the MERN stack."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science Engineering",
      institution: "Indian Institute of Information Technology(IIIT) Sri City",
      period: "2022 - 2026",
      grade: "CGPA: 8.32/10"
    },
    {
      degree: "Class 12 (Intermediate)",
      field: "MPC (Maths, Physics, Chemistry)",
      institution: "Narayana Junior College",
      period: "2020 - 2022",
      grade: "Percentage: 95.7%"
    },
    {
      degree: "Class 10 (Secondary School)",
      field: "General",
      institution: "ViswaBharati E.M School",
      period: "2019 - 2020",
      grade: "Percentage: 100%"
    }
  ];

  const certifications = [
    "Full Stack Web Development - Udemy",
    "Node.js Application Development - MongoDB University"
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Download my resume or view it online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/uc?export=download&id=1cZj_VzR3xRn65Hd4r0FQwdelpZ5x3P9L"
              className="flex items-center space-x-2"
            >
              <Button>
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </Button>
            </a>
            <a
              href="https://drive.google.com/file/d/1cZj_VzR3xRn65Hd4r0FQwdelpZ5x3P9L/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <Button variant="outline">
                <Eye className="w-5 h-5" />
                <span>View Online</span>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-full"></div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {exp.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 rounded-full"></div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  {edu.field && (
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      {edu.field}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.institution} • {edu.period}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.grade}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center mb-6">
            <Award className="w-6 h-6 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Certifications
            </h2>
          </div>
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <Award className="w-5 h-5 text-yellow-500" />
                  <span className="text-gray-800 dark:text-gray-200">{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};
