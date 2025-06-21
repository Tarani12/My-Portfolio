import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Python Essentials",
      issuer: "CISCO",
      category: "Programming",
      description: "Comprehensive certification covering Python fundamentals, data structures, and programming concepts.",
      skills: ["Python Programming", "Data Structures", "Object-Oriented Programming", "Problem Solving"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "JavaScript Essentials",
      issuer: "CISCO",
      category: "Web Development",
      description: "In-depth certification covering JavaScript fundamentals, DOM manipulation, and modern ES6+ features.",
      skills: ["JavaScript", "DOM Manipulation", "ES6+", "Web Development"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      category: "Cloud Technology",
      description: "Comprehensive course covering cloud computing concepts, services, and deployment models.",
      skills: ["Cloud Architecture", "Service Models", "Deployment Strategies", "Cloud Security"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "The Relational Database Basics Course",
      issuer: "IBM & edX",
      category: "Database",
      description: "Foundational course covering relational database concepts, SQL, and database design principles.",
      skills: ["SQL", "Database Design", "Relational Concepts", "Data Modeling"],
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Leading with Effective Communication",
      issuer: "edX (Inclusive Leadership Training)",
      category: "Leadership",
      description: "Professional development course focusing on communication skills and inclusive leadership practices.",
      skills: ["Leadership", "Communication", "Team Management", "Inclusive Practices"],
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      category: "Machine Learning",
      description: "Advanced course covering supervised learning algorithms, regression, and classification techniques.",
      skills: ["Machine Learning", "Regression Analysis", "Classification", "Model Evaluation"],
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-15 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional certifications from leading technology companies and educational platforms, 
              demonstrating commitment to continuous learning and skill development.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-full border border-gray-200 text-sm font-medium shadow-sm"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${cert.color} p-6 text-white`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                        <p className="text-lg opacity-90">{cert.issuer}</p>
                        <span className="inline-block mt-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                          {cert.category}
                        </span>
                      </div>
                    </div>
                    <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors duration-200">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Skills Acquired
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </div>
                      ))}
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

export default Certifications;
