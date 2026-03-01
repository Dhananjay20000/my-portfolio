import { motion } from 'framer-motion';
import { FaAward, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'AI-DevOps Engineer',
    issuer: 'Rooman Technologies',
    date: '2025',
    description: 'Comprehensive training in AI-DevOps practices, including CI/CD pipelines, containerization, and infrastructure automation.',
    icon: '🤖'
  },
  {
    id: 2,
    title: 'Infrastructure Management for Microservices with Ansible',
    issuer: 'IBM CEP',
    date: '2024',
    description: 'Hands-on experience with Ansible for managing and orchestrating microservices infrastructure.',
    icon: '☁️'
  },
  {
    id: 3,
    title: 'Linux & Network Administration Workshop',
    issuer: 'Technical Workshop',
    date: '2024',
    description: 'Workshop covering Linux system administration, networking concepts, and server management.',
    icon: '🐧'
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-container relative">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card rounded-xl p-6 group hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-2xl">
                  {cert.icon}
                </div>
                <FaAward className="text-secondary text-2xl opacity-50" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>

              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <span>{cert.issuer}</span>
                <span>•</span>
                <span>{cert.date}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {cert.description}
              </p>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 text-accent text-sm">
                <FaCheckCircle />
                <span>Verified Certificate</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 glass rounded-full px-8 py-4">
            <FaAward className="text-primary text-xl" />
            <span className="text-gray-300">Continuous Learning & Professional Development</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
