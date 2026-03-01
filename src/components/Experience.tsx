import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaBuilding } from 'react-icons/fa';

interface Internship {
  id: number;
  title: string;
  company: string;
  duration: string;
  description: string[];
  icon: string;
}

const internships: Internship[] = [
  {
    id: 1,
    title: 'Full Stack Development Trainee',
    company: 'KodNest',
    duration: 'Dec 2025 – Present',
    description: [
      'Training in Full Stack Development technologies',
      'Working on real-world projects',
      'Building responsive web applications'
    ],
    icon: '💻'
  },
  {
    id: 2,
    title: 'AI-DevOps Engineer Intern',
    company: 'Rooman Technologies Pvt. Ltd.',
    duration: 'Sep 2024 – Feb 2025',
    description: [
      'Worked on AI and DevOps integration',
      'Learned infrastructure management',
      'Implemented CI/CD pipelines'
    ],
    icon: '🤖'
  },
  {
    id: 3,
    title: 'Machine Learning with Python Intern',
    company: 'Compsoft Technology',
    duration: 'Oct 2023 – Dec 2023',
    description: [
      'Built ML models using Python',
      'Worked on data preprocessing',
      'Gained hands-on experience with ML libraries'
    ],
    icon: '📊'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container relative">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {internships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12 last:mb-0"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6`}>
                {/* Content Card */}
                <div className="flex-1">
                  <div className="glass-card rounded-xl p-6 relative overflow-hidden group">
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-4xl mb-2 block">{internship.icon}</span>
                          <h3 className="text-xl font-semibold text-white">
                            {internship.title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-400 mt-1">
                            <FaBuilding className="text-primary" />
                            <span>{internship.company}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-accent text-sm mb-4">
                        <FaCalendarAlt />
                        <span>{internship.duration}</span>
                      </div>

                      <ul className="space-y-2">
                        {internship.description.map((desc, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="text-primary mt-1">▹</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Timeline Indicator */}
                <div className="hidden md:flex items-center justify-center">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-primary neon-glow" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-30" />
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2 opacity-30" />
      </div>
    </section>
  );
};

export default Experience;
