import React from 'react';
import { Target, Code, Award, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Committed to graduating with high GPA (above 80%) and continuous skill development"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Excellence",
      description: "Strong foundation in programming with focus on competitive programming"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Achievement Driven",
      description: "2* coder on CodeChef with highest rating of 1469"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Proven collaboration skills through hackathons and group projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a B.Tech student with a strong foundation in programming and a passion for development, 
                I am keen to secure opportunities that enhance my technical skills and industry knowledge. 
                I am committed to building a solid academic and skill-based foundation.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                I am focused on graduating with a high GPA (above 80%) and am dedicated to refining my 
                programming skills through competitive programming and continuous learning. My strengths 
                include resilience, a goal-oriented mindset, and consistency in my approach to challenges.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I believe in the power of technology to solve real-world problems and am always eager 
                to learn new technologies and methodologies that can help me become a better developer.
              </p>
            </div>
            
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages Known</h3>
            <div className="flex flex-wrap gap-3">
              {['English', 'Telugu', 'Hindi'].map((language) => (
                <span
                  key={language}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;