import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Calendar, Code2, Target, Lightbulb } from 'lucide-react';

interface ProjectDetails {
  technologies: string[];
  features: string[];
  challenges: string;
}

interface Project {
  title: string;
  year: string;
  description: string;
  image: string;
  github: string;
  github2?: string;
  demo: string;
  details: ProjectDetails;
  featured?: boolean;
}

const baseProjects: Project[] = [
  {
    title: "Portfolio Website",
    year: "2024",
    description: "A modern, responsive portfolio website showcasing my projects and skills with interactive features and smooth animations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Portfolio.git",
    demo: "https://shanmukh-portfolio.netlify.app/",
    details: {
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      features: [
        "Responsive design",
        "Interactive project cards",
        "Smooth animations",
        "Project filtering",
        "Modal project details"
      ],
      challenges: "Implementing smooth animations and transitions while maintaining performance across devices"
    }
  },
  {
    title: "Basic Online Bank Management System",
    year: "2023",
    description: "A comprehensive banking system with user authentication, transaction management, and account operations.",
    image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/ONLINE-BANK-MANAGEMENT.git",
    github2: "https://github.com/shanmukh7781-prog/Online-Bank-Management-System.git",
    demo: "https://joyful-taiyaki-affee9.netlify.app/",
    details: {
      technologies: ["Java", "Spring Boot", "MySQL", "React"],
      features: [
        "User authentication and authorization",
        "Account management",
        "Transaction history",
        "Fund transfers"
      ],
      challenges: "Implementing secure transaction processing and maintaining data consistency"
    }
  },
  {
    title: "Information Gathering Tool",
    year: "2024",
    description: "Advanced reconnaissance tool for ethical hacking and security assessment.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Information-Gathering-Tool.git",
    github2: "https://github.com/shanmukh7781-prog/Infomaration-Gathering.git",
    demo: "https://harmonious-clafoutis-d1e423.netlify.app/",
    details: {
      technologies: ["Python", "OSINT frameworks", "API integration"],
      features: [
        "Domain information gathering",
        "Network scanning",
        "Vulnerability assessment",
        "Report generation"
      ],
      challenges: "Handling rate limiting and API restrictions while maintaining tool efficiency"
    }
  },
  {
    title: "System Hacking - Password Attack",
    year: "2024",
    description: "Educational tool demonstrating various password attack vectors and defense mechanisms.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Security-Attacks.git",
    demo: "https://nimble-pastelito-40f85c.netlify.app/",
    details: {
      technologies: ["Python", "Hashcat", "John the Ripper"],
      features: [
        "Dictionary attacks",
        "Brute force attacks",
        "Rainbow table implementation",
        "Password strength analysis"
      ],
      challenges: "Implementing ethical constraints and educational value while maintaining security"
    }
  },
  {
    title: "To-Do App Using Django",
    year: "2024",
    description: "Feature-rich task management application with user authentication and real-time updates.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Todo-Application.git",
    github2: "https://github.com/shanmukh7781-prog/Todo-app.git",
    demo: "https://magnificent-fenglisu-b9abe4.netlify.app/",
    details: {
      technologies: ["Django", "PostgreSQL", "React", "Redis"],
      features: [
        "User authentication",
        "Task categorization",
        "Priority management",
        "Due date tracking"
      ],
      challenges: "Implementing real-time updates and maintaining application performance"
    }
  },
  {
    title: "Search Engine",
    year: "2025",
    description: "A search engine that indexes and retrieves web pages based on keywords, providing relevant results.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Basic-Search-Engine.git",
    demo: "https://resilient-hummingbird-87a74c.netlify.app/",
    details: {
      technologies: ["Python", "Elasticsearch", "Django"],
      features: [
        "Keyword-based search",
        "Result ranking",
        "Web page indexing",
        "Advanced filtering"
      ],
      challenges: "Ensuring search accuracy and handling large data sets efficiently"
    }
  },
  {
    title: "Essential Marketing Website",
    year: "2024",
    description: "A marketing website that displays key business information and promotes products.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Banner-Page-of-Sassto.git",
    demo: "https://nimble-horse-befd59.netlify.app/",
    details: {
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Banner page",
        "Business promotion",
        "Contact form"
      ],
      challenges: "Creating a responsive design that adapts to various screen sizes"
    }
  },
  {
    title: "Advanced Search Engine",
    year: "2025",
    description: "A sophisticated search platform with AI-powered relevance ranking, semantic analysis, and personalized search results.",
    image: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Advanced-Search-Engine.git",
    demo: "https://tourmaline-nasturtium-e7216a.netlify.app/",
    details: {
      technologies: ["Python", "Elasticsearch", "Django", "Machine Learning"],
      features: [
        "Natural language processing",
        "Context-aware search",
        "Personalized recommendations",
        "Multi-language support",
        "Advanced analytics dashboard"
      ],
      challenges: "Implementing complex ranking algorithms and maintaining search accuracy across diverse content types"
    }
  },
  {
    title: "Secure File Sharing",
    year: "2024",
    description: "A platform to securely share files with end-to-end encryption.",
    image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Secure-File-Sharing.git",
    demo: "https://effortless-douhua-143cc6.netlify.app/",
    details: {
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      features: [
        "File encryption and decryption",
        "Secure file upload and download",
        "User authentication"
      ],
      challenges: "Ensuring data security and preventing unauthorized access"
    }
  },
  {
    title: "Car Website",
    year: "2024",
    description: "A basic car dealership website showcasing available vehicles and services.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
    github: "https://github.com/shanmukh7781-prog/Basic-Car-Website.git",
    demo: "https://lively-flan-805824.netlify.app/",
    details: {
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Car showcase",
        "Car search functionality",
        "Contact information"
      ],
      challenges: "Designing an intuitive interface for easy navigation"
    }
  }
];

const featuredProject: Project = {
  title: "LinkedIn Clone",
  year: "2024",
  description: "A comprehensive LinkedIn clone featuring professional networking capabilities, user profiles, and post interactions.",
  image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&w=800&q=80",
  github: "https://github.com/shanmukh7781-prog/Linkedin-Clone.git",
  demo: "https://jolly-salmiakki-525a09.netlify.app/",
  featured: true,
  details: {
    technologies: ["React", "Firebase", "Redux", "Styled Components"],
    features: [
      "User authentication",
      "Professional profile creation",
      "Post creation and interaction",
      "Real-time updates",
      "Responsive design"
    ],
    challenges: "Implementing real-time updates and maintaining consistent UI/UX across different devices"
  }
};

const projects = [featuredProject, ...baseProjects];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my portfolio of projects showcasing expertise in various technologies and problem-solving capabilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group transform transition-all duration-300 hover:shadow-2xl h-[420px] flex flex-col ${
                project.featured ? 'md:col-span-2 lg:col-span-3 h-[500px]' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredProject(project)}
              onHoverEnd={() => setHoveredProject(null)}
              onClick={() => setSelectedProject(project)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`relative ${project.featured ? 'h-72' : 'h-48'} flex-shrink-0`}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {hoveredProject === project && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="text-white text-center px-4">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90">Click to view details</p>
                    </div>
                  </motion.div>
                )}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured Project
                  </div>
                )}
              </div>
              <div className="p-6 flex-grow overflow-auto">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{project.year}</span>
                </div>
                <h3 className={`${project.featured ? 'text-2xl' : 'text-xl'} font-bold mb-2 text-gray-900`}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.details.technologies.slice(0, project.featured ? 6 : 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.details.technologies.length > (project.featured ? 6 : 3) && (
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-full text-xs font-medium">
                      +{project.details.technologies.length - (project.featured ? 6 : 3)} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl overflow-hidden max-w-2xl w-full max-h-[90vh] flex flex-col relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-48 flex-shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button 
                  className="absolute top-4 right-4 text-white bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors"
                  onClick={() => setSelectedProject(null)}
                >
                  <X size={20} />
                </button>
                {selectedProject.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Featured Project
                  </div>
                )}
              </div>
              
              <div className="p-8 overflow-y-auto flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar size={16} />
                  <span>{selectedProject.year}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{selectedProject.title}</h3>
                <p className="text-gray-700 mb-6">{selectedProject.description}</p>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-gray-900 font-semibold mb-2">
                      <Code2 size={20} className="text-blue-600" />
                      <h4>Technologies</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.details.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-900 font-semibold mb-2">
                      <Target size={20} className="text-green-600" />
                      <h4>Key Features</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      {selectedProject.details.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-900 font-semibold mb-2">
                      <Lightbulb size={20} className="text-yellow-600" />
                      <h4>Technical Challenges</h4>
                    </div>
                    <p className="text-gray-700">{selectedProject.details.challenges}</p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t">
                    {selectedProject.github && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    )}
                    {selectedProject.github2 && (
                      <a
                        href={selectedProject.github2}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <Github size={20} />
                        <span>View Code (Git 2)</span>
                      </a>
                    )}
                    {selectedProject.demo && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}