import React from 'react';
import { ExternalLink, Play, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone",
      description: "A responsive Netflix clone built with HTML, CSS, and JavaScript featuring a modern UI design with movie carousels, hover effects, and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Responsive design for all devices",
        "Interactive movie carousels",
        "Smooth hover animations",
        "Modern Netflix-inspired UI"
      ],
      icon: <Play className="w-6 h-6" />,
      color: "from-red-500 to-red-600",
      live: "https://netflix-clone-k25l.vercel.app/"
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern and professional portfolio website built using React, TypeScript, Tailwind CSS, and Vite...",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      features: [
        "Dynamic sections for projects, experience, and certifications",
        "Smooth scroll and responsive layout",
        "Modern UI with Tailwind utility classes",
        "Optimized for performance and SEO"
      ],
      icon: <ExternalLink className="w-6 h-6" />,
      color: "from-green-500 to-green-600",
      live: "#"
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "An interactive Tic-Tac-Toe game with smooth animations, win detection, and score tracking.",
      technologies: ["JavaScript", "HTML", "CSS"],
      features: [
        "Interactive gameplay",
        "Win/draw detection",
        "Score tracking",
        "Smooth animations"
      ],
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600",
      live: "https://tic-tac-toe-ashy-gamma.vercel.app/"
    },
    {
      title: "Rock-Paper-Scissors",
      description: "A fun and interactive Rock-Paper-Scissors game with computer AI, score tracking, and visual feedback.",
      technologies: ["JavaScript", "HTML", "CSS"],
      features: [
        "Computer AI opponent",
        "Real-time score updates",
        "Visual feedback",
        "Responsive controls"
      ],
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600",
      live: "https://tic-tac-toe-4ecm.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-15 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A collection of web applications and games showcasing my skills in front-end development 
              and interactive user interfaces.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.color} p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Profile Link */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <ExternalLink className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Projects on GitHub</h3>
              <p className="text-gray-600 mb-6">
                Explore more of my work and contributions on my GitHub profile
              </p>
              <a
                href="https://github.com/tarani12"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg font-semibold hover:from-gray-900 hover:to-black transition-all duration-300 hover:scale-105"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div><br></br><br></br>
    </section>
  );
};

export default Projects;
