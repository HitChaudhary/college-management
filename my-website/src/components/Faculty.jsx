// src/components/Faculty.jsx
import React from "react";
import { Award, Briefcase, GraduationCap } from "lucide-react";
import { useCollegeContext } from "../Context/Context";

const Faculty = () => {
  

  const {facultys,navigate} = useCollegeContext()

  // Convert object -> array
  const facultyList = facultys;

  return (
    <section id="faculty" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Faculty
          </h2>
          <p className="text-gray-600 text-lg">
            Meet our distinguished faculty members who bring years of experience
            and expertise to the classroom.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facultyList.slice(0, 4).map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="h-44 bg-gradient-to-br from-green-100 to-emerald-200 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow">
                  <img src={member.fimage} alt=""  className="h-full  w-full object-contain"/>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-700 font-semibold mb-3 text-sm">
                  {member.role}
                </p>

                <div className="space-y-2 mb-5 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {member.department}
                  </div>

                  <div className="flex items-center text-gray-600">
                    <Award className="w-4 h-4 mr-2" />
                    {member.exprience}
                  </div>

                  <div className="flex items-center text-gray-600">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {member.qualification}
                  </div>
                </div>

                <button
                  onClick={() => navigate("/faculty")}
                  className="w-full bg-green-50 hover:bg-green-100 text-green-800 py-2 rounded-lg font-medium transition"
                >
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faculty;
