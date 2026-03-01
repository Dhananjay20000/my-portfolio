import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaDatabase, FaReact } from 'react-icons/fa';
import { SiSpringboot, SiJavascript } from 'react-icons/si';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  icon: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TaskBuddy',
    description: 'A comprehensive task management application built with React. Features include task creation, categorization, due dates, priority levels, and a responsive design for seamless usage across devices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
    github: 'https://github.com/Dhananjay20000/TaskBuddy',
    icon: '📋'
  },
  {
    id: 2,
    title: 'Sales-Savvy',
    description: 'A robust sales management backend system built with Spring Boot. Provides RESTful APIs for managing products, orders, customers, and sales analytics with MySQL database integration.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST APIs'],
    github: 'https://github.com/Dhananjay20000/Sales-Savvy',
    icon: '💰'
  },
  {
    id: 3,
    title: 'Item-API',
    description: 'A RESTful inventory management API built with Spring Boot. Supports CRUD operations, category management, stock tracking, and provides comprehensive documentation.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'MySQL'],
    github: 'https://github.com/Dhananjay20000/Item-API',
    icon: '📦'
  }
];

const getTechIcon = (tech: string) => {
  const iconMap: { [key: string]: React.ReactNode } = {
    'React': <FaReact />,
    'Java': <FaCode />,
    'Spring Boot': <SiSpringboot />,
    'JavaScript': <SiJavascript />,
    'MySQL': <FaDatabase />,
    'REST APIs': <FaCode />,
    'HTML': <FaCode />,
    'CSS': <FaCode />,
  };
  return iconMap[tech] || <FaCode />;
};

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="section-container relative">
      {/* Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="relative"
            >
              {/* 3D Card Effect */}
              <motion.div
                className="glass-card rounded-2xl p-6 h-full cursor-pointer"
                style={{
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateX: hoveredProject === project.id ? 5 : 0,
                  rotateY: hoveredProject === project.id ? -5 : 0,
                  translateZ: hoveredProject === project.id ? 10 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10">
                  {/* Project Icon & Title */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl">{project.icon}</span>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub size={24} />
                    </motion.a>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-300 border border-white/10 flex items-center gap-1"
                      >
                        {getTechIcon(tech)}
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors text-sm font-medium"
                    whileHover={{ x: 5 }}
                  >
                    View on GitHub <FaExternalLinkAlt />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Dhananjay20000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <FaGithub />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
