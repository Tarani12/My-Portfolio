import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-15 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>
            
            <div className="space-y-8">
              {/* B.Tech */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">Bachelor of Technology</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">Computer Science Engineering</h4>
                      <p className="text-gray-700 font-medium mb-4">
                        Vignana's Institute of Information Technology (VIIT), Visakhapatnam
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />2022 - 2026</div>
                        <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Visakhapatnam, Andhra Pradesh</div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>Focus Areas:</strong> Software Development, Data Structures & Algorithms, 
                          Web Technologies, Database Management, Machine Learning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Intermediate */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">Intermediate (MPC)</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">Sri Chaitanya Junior College</h4>
                      <p className="text-gray-700 font-medium mb-4">
                        Steel Plant, Visakhapatnam
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />2020 - 2022</div>
                        <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Steel Plant, Visakhapatnam, Andhra Pradesh</div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800"><strong>Percentage:</strong> 95%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schooling */}
              <div className="relative flex items-start">
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16 bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="w-6 h-6 text-blue-600 mr-2" />
                        <h3 className="text-xl font-bold text-gray-900">Schooling</h3>
                      </div>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">Sri Chaitanya English Medium School</h4>
                      <p className="text-gray-700 font-medium mb-4">
                        Gajuwaka, Visakhapatnam
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center"><Calendar className="w-4 h-4 mr-1" />2010 - 2020</div>
                        <div className="flex items-center"><MapPin className="w-4 h-4 mr-1" />Old Gajuwaka, Visakhapatnam, Andhra Pradesh</div>
                      </div>
                      <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                        <p className="text-sm text-blue-800"><strong>Percentage:</strong> 93%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
