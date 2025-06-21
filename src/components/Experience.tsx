import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Web Development Intern",
      company: "MOTION CUT",
      type: "Virtual Internship",
      duration: "Completed",
      location: "Remote",
      description: "Enhanced web development skills through structured learning and project-based assignments.",
      achievements: [
        "Built interactive web interfaces with modern frameworks",
        "Optimized website performance and user experience",
        "Learned industry-standard development workflows",
        "Delivered projects within specified timelines"
      ],
      technologies: ["Frontend Development", "UI/UX Implementation", "Version Control"],
      credentials: "AICTE & MSME Approved",
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Virtual internships that provided valuable industry experience and practical 
              application of web development skills in professional environments.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-white/20 rounded-lg">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold">{exp.title}</h3>
                        <p className="text-lg opacity-90">{exp.company}</p>
                        <span className="inline-block mt-1 px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <div className="text-sm opacity-75 mb-1">Status</div>
                      <div className="font-semibold">{exp.duration}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {exp.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
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
                        <h4 className="font-semibold text-gray-900 mb-3">Company Details</h4>
                        <div className="space-y-3">
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Organization</div>
                            <div className="font-medium text-gray-900">{exp.company}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Type</div>
                            <div className="font-medium text-gray-900">{exp.type}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500 mb-1">Credentials</div>
                            <div className="font-medium text-gray-900">{exp.credentials}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Experience Summary */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Virtual Internship Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Real-world project experience</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Industry-standard practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Professional skill development</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Remote collaboration experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Learnings</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Modern web development workflows</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Client project management</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Code quality and best practices</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">Professional communication</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;