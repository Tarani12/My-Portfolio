import React from 'react';
import { Code, Database, Globe, Star } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 90 },
        { name: "Java", level: 75 },
        { name: "Python", level: 90 }
      ]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Technologies",
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database & Tools",
      skills: [
        { name: "SQL", level: 75 },
        { name: "Git", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "MongoDB", level: 70 }
      ]
    }
  ];

  const competitiveProgramming = [
    {
      platform: "CodeChef",
      rating: "1469",
      stars: "2*",
      url: "https://www.codechef.com/users/tarani_y",
      color: "bg-orange-500"
    },
    {
      platform: "LeetCode",
      rating: "1496",
      stars: "Problem Solver",
      url: "https://leetcode.com/u/Tarani_Y/",
      color: "bg-yellow-500"
    },
    {
      platform: "HackerRank",
      rating: "Active",
      stars: "5* CPP, 3* SQL",
      url: "https://www.hackerrank.com/profile/taraniyaragani12",
      color: "bg-green-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          {/* Skill Categories */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-blue-100 rounded-lg text-blue-600 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-sm text-gray-600">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Competitive Programming */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Competitive Programming</h3>
              <p className="text-gray-600">Active problem solver across multiple platforms</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {competitiveProgramming.map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900 text-lg">{platform.platform}</h4>
                    <div className={`w-3 h-3 rounded-full ${platform.color}`}></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Highest Rating:</span>
                      <span className="font-semibold text-gray-900">{platform.rating}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Achievement:</span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="font-semibold text-gray-900">{platform.stars}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                    View Profile →
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 text-sm">
                Also active on <strong>Codeforces</strong>, <strong>HackerEarth</strong>, <strong>CodeSignal</strong>, and <strong>Snakify</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
