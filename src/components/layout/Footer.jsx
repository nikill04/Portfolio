import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/SaiKumarReddy374"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/sai-kumar-reddy-541680261/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=saikumarreddypalakolanu6@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://leetcode.com/u/saireddy06/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-yellow-500 transition-colors"
            >
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.68 2.2c-2.56 0-5.04 1.04-6.88 2.88L5.08 10.8c-3.84 3.84-3.84 10.08 0 13.92l4.56 4.56c.4.4 1.04.4 1.44 0s.4-1.04 0-1.44L6.52 23.2c-3.04-3.04-3.04-7.92 0-10.96l5.72-5.72c1.36-1.36 3.2-2.12 5.16-2.12 4.04 0 7.32 3.28 7.32 7.32 0 1.96-.76 3.8-2.12 5.16l-6.64 6.64c-.8.8-2.08.8-2.88 0l-4.28-4.28c-.4-.4-1.04-.4-1.44 0s-.4 1.04 0 1.44l4.28 4.28c1.6 1.6 4.16 1.6 5.76 0l6.64-6.64c1.84-1.84 2.88-4.32 2.88-6.88C27.8 6.84 23.16 2.2 17.68 2.2z"/>
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-end">
              Made with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Sai Kumar Reddy
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
