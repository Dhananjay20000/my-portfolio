import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaJs, FaHtml5, FaCss3, FaGitAlt, FaGithub, FaDatabase, FaServer } from 'react-icons/fa';
import { SiSpringboot, SiMysql, SiMongodb, SiVercel } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
}

const skills: Skill[] = [
  { name: 'Java', icon: <FaJava />, level: 90, category: 'Backend' },
  { name: 'Python', icon: <FaPython />, level: 75, category: 'Backend' },
  { name: 'Spring Boot', icon: <SiSpringboot />, level: 85, category: 'Backend' },
  { name: 'REST APIs', icon: <FaServer />, level: 88, category: 'Backend' },
  { name: 'React.js', icon: <FaReact />, level: 80, category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJs />, level: 82, category: 'Frontend' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 90, category: 'Frontend' },
  { name: 'CSS3', icon: <FaCss3 />, level: 85, category: 'Frontend' },
  { name: 'MySQL', icon: <FaDatabase />, level: 80, category: 'Database' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 75, category: 'Database' },
  { name: 'Git', icon: <FaGitAlt />, level: 85, category: 'Tools' },
  { name: 'GitHub', icon: <FaGithub />, level: 88, category: 'Tools' },
  { name: 'VS Code', icon: <SiVercel />, level: 92, category: 'Tools' },
];

const categories = ['All', 'Backend', 'Frontend', 'Database', 'Tools'];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="section-container relative">
      {/* Background Elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-secondary text-white neon-glow'
                  : 'glass-card text-gray-400 hover:text-white hover:border-primary/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 group cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl text-primary group-hover:text-white transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-white font-medium">{skill.name}</span>
                </div>
                <span className="text-gray-400 text-sm">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="skill-bar">
                <motion.div
                  className="skill-bar-fill"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                />
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center text-white mb-8">
            Technical Expertise
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Backend Development', 'REST API Design', 'Full Stack Apps', 'Database Design', 
              'Version Control', 'Problem Solving', 'Agile/Scrum', 'Code Review'].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass rounded-lg p-4 text-center hover:bg-white/5 transition-colors"
              >
                <span className="text-gray-300 text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
