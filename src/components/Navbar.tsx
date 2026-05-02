import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaCertificate, FaPhone, FaFilePdf } from 'react-icons/fa';

const navItems = [
  { name: 'Home', icon: FaHome, href: '#home' },
  { name: 'About', icon: FaUser, href: '#about' },
  { name: 'Skills', icon: FaCode, href: '#skills' },
  { name: 'Experience', icon: FaBriefcase, href: '#experience' },
  { name: 'Projects', icon: FaProjectDiagram, href: '#projects' },
  { name: 'Certifications', icon: FaCertificate, href: '#certifications' },
  { name: 'Contact', icon: FaPhone, href: '#contact' },
  { name: 'Resume', icon: FaFilePdf, href: '/my-portfolio/Dhananjay_Resume_2026.pdf', download: 'Dhananjay_Resume_2026.pdf' },
];

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Dhananjay20000' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com/in/chouguledhananjay' },
  { name: 'Email', icon: FaEnvelope, href: 'mailto:mrdhananjaychougule@gmail.com' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'navbar-glass py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            DC
          </motion.a>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.name === 'Resume' ? (
                <a
                  key={item.name}
                  href="/my-portfolio/Dhananjay_Resume_2026.pdf"
                  download="Dhananjay_Resume_2026.pdf"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
                >
                  Download Resume
                </a>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className={`nav-link text-sm font-medium ${
                    activeSection === item.href.slice(1)
                      ? 'text-primary'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                </motion.a>
              )
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                whileHover={{ scale: 1.2 }}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          <button
            className="lg:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                item.name === 'Resume' ? (
                  <a
                    key={item.name}
                    href="/my-portfolio/Dhananjay_Resume_2026.pdf"
                    download="Dhananjay_Resume_2026.pdf"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                  >
                    Download Resume
                  </a>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }
                    }}
                    className="text-gray-300 px-4 py-2"
                  >
                    {item.name}
                  </a>
                )
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;