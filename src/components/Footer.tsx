import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      href: 'https://github.com/Dhananjay20000'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/chouguledhananjay'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      href: 'mailto:mrdhananjaychougule@gmail.com'
    }
  ];

  return (
    <footer className="relative py-12 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-secondary" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <span className="text-2xl font-bold gradient-text">DC</span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-400">Dhananjay Chougule</span>
          </motion.div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary/20 transition-all"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gray-400 text-sm"
          >
            <span>© {currentYear} All rights reserved</span>
            <span className="text-red-500">•</span>
            <span className="flex items-center gap-1">
              Made with <FaHeart className="text-red-500 text-xs animate-pulse" /> 
              using React
            </span>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute -top-5 right-4 md:right-0 w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
