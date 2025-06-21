import React from 'react';
import { Trophy, Users, Clock, MapPin, Award, Target } from 'lucide-react';

const Hackathons = () => {
  const hackathons = [
    {
      title: "24-Hour SEO-Friendly Web Development Hackathon",
      organizer: "ANITS & Pivotalsoft",
      achievement: "19th Rank out of 59 Teams",
      duration: "24 Hours",
      teamSize: "5 Members",
      location: "Anil Neerukonda Institute of Technology & Sciences",
      problemStatement: "Child Therapy Hospital Online Visibility",
      description: "Created an SEO-optimized website for a child therapy hospital in Visakhapatnam to increase online visibility and attract more patients through strategic keyword optimization.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP", "Swiper.js"],
      achievements: [
        "91% keyword ranking achievement",
        "Optimized for 'Behavioral Therapy', 'Speech Therapy', 'Child Development'",
        "Clean UI with smooth animations",
        "SEO-friendly architecture with meta tags and schema"
      ],
      skills: ["SEO Optimization", "Web Development", "Team Collaboration", "Problem Solving"],
      color: "from-blue-500 to-indigo-600",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      title: "Sus-Hacks: Smart Road Cleanliness",
      organizer: "Sus-Hacks",
      achievement: "Societal Probem Solving",
      duration: "24 Hours",
      teamSize: "4 Members",
      location: "VIIT,Duvvada",
      problemStatement: "Smart Road Cleanliness Monitoring System",
      description: "Developed a smart system that notifies government municipal authorities when users upload images of unclean roads, complete with location pinning, status tracking, and reward system for community participation.",
      technologies: ["Mobile Development", "GPS Integration", "Image Processing", "Backend APIs"],
      achievements: [
        "Real-time image upload and processing",
        "GPS-based location tracking",
        "Government notification system",
        "Reward mechanism for user engagement"
      ],
      skills: ["Mobile App Development", "API Integration", "Geolocation Services", "Community Engagement"],
      color: "from-green-500 to-emerald-600",
      icon: <Target className="w-6 h-6" />
    },

  ];

  return (
    <section id="hackathons" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hackathons & Competitions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Showcasing my problem-solving abilities and collaborative skills through competitive programming 
              events and hackathons focused on real-world challenges.
            </p>
          </div>

          <div className="space-y-8">
            {hackathons.map((hackathon, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${hackathon.color} p-6 text-white`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        {hackathon.icon}
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold">{hackathon.title}</h3>
                        <p className="text-lg opacity-90">{hackathon.organizer}</p>
                      </div>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-5 h-5" />
                        <span className="font-semibold">{hackathon.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Problem Statement</h4>
                        <p className="text-gray-700 font-medium mb-3">{hackathon.problemStatement}</p>
                        <p className="text-gray-600 leading-relaxed">{hackathon.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {hackathon.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {hackathon.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Event Details</h4>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <Clock className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{hackathon.duration}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Users className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{hackathon.teamSize}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            <span className="text-sm text-gray-600">{hackathon.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">Skills Developed</h4>
                        <div className="space-y-2">
                          {hackathon.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-sm text-gray-600">{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;
