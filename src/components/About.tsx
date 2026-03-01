import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="section-container relative">
      {/* Background Elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-30" />
              
              {/* Card */}
              <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                
                <div className="relative z-10 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-dark-secondary flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text">DC</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">Dhananjay Chougule</h3>
                  <p className="text-gray-400 mb-4">Full Stack Developer</p>
                  
                  <div className="flex flex-col gap-3 text-sm text-gray-400">
                    <div className="flex items-center justify-center gap-2">
                      <FaMapMarkerAlt className="text-primary" />
                      <span>Bangalore, Karnataka</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <FaEnvelope className="text-primary" />
                      <span>mrdhananjaychougule@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <FaPhone className="text-primary" />
                      <span>+91 8548011365</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <FaLightbulb className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Professional Summary</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Computer Science and Engineering graduate with strong fundamentals in Java and Spring Boot. 
                      Experienced in building REST APIs and responsive web applications through academic projects 
                      and internships. Seeking opportunities as a Backend or Full Stack Developer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <FaGraduationCap className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Education</h3>
                    <p className="text-gray-400">
                      <span className="text-white font-medium">B.E. in Computer Science and Engineering</span>
                      <br />
                      (2021 – 2025)
                      <br />
                      CGPA: 8.00
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <FaCode className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">What I Do</h3>
                    <p className="text-gray-400 leading-relaxed">
                      I build robust backend systems with Java & Spring Boot, create responsive web applications 
                      with React, and design efficient databases. Passionate about clean code and scalable solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
