import React from "react";
import {  GraduationCap, Award, Briefcase, Building2 } from "lucide-react";
import { useCollegeContext } from "../Context/Context";
import principla_img from '../Images/man_profile.jpg'

const FacultyPage = () => {
  const { facultys } = useCollegeContext();

  // Group faculty by department
  const groupedFacultys = facultys.reduce((acc, faculty) => {
    const dept = faculty.department || "Others";
    if (!acc[dept]) {
      acc[dept] = [];
    }
    acc[dept].push(faculty);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-[#fafdfb]">

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center gap-8 mb-20">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <GraduationCap size={14} />
            Academic Leadership
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Faculty of <span className="text-emerald-600">PRAYAG</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our distinguished faculty members are leaders in tech innovation and social work,
            dedicated to mentoring the next generation of digital pioneers.
          </p>
        </div>
      </section>

      {/* Principal's Insight Section */}
      <section className="relative bg-white border border-emerald-100 p-8 md:p-12 rounded-[2rem] shadow-sm mb-24 overflow-hidden max-w-5xl mx-auto">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-slate-100 border-4 border-emerald-50 flex items-center justify-center shadow-lg overflow-hidden">
              <img src={principla_img} alt="Principal" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-4">
            <p className="text-slate-600 text-lg italic leading-relaxed">
              "Our mission is to ensure our students don't just use technology, but understand the ethics and logic behind it to build a better society."
            </p>
            <div>
              <p className="font-bold text-slate-900 text-xl">Shailesh Patel</p>
              <p className="text-emerald-600 font-medium">Head of Institution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Sections */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 uppercase tracking-tight">Meet Our Experts</h2>
          <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full" />
        </div>

        {Object.entries(groupedFacultys).map(([department, members]) => (
          <div key={department} className="mb-24">
            {/* Department Header */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="hidden sm:block h-[1px] w-16 bg-slate-200"></div>
              <h3 className="text-center text-2xl sm:text-3xl font-black text-slate-800 tracking-tight flex items-center gap-3">
                <Building2 className="text-emerald-500" size={28} />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 uppercase">
                  {department} Department
                </span>
              </h3>
              <div className="hidden sm:block h-[1px] w-16 bg-slate-200"></div>
            </div>

            {/* Faculty Grid */}
            <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
              {members.map((faculty) => (
                <div
                  key={faculty._id}
                  className="group relative bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 w-full sm:w-[320px] flex flex-col items-center text-center overflow-hidden"
                >
                  {/* Experience Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className="bg-slate-900 text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                      <Briefcase size={10} /> {faculty.exprience || 'N/A'} EXP
                    </div>
                  </div>

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Image Container */}
                  <div className="relative w-36 h-36 mb-6 p-1 rounded-full border-2 border-dashed border-emerald-100 group-hover:border-emerald-500 transition-colors duration-500">
                    <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden shadow-inner">
                      <img
                        src={faculty.fimage}
                        alt={faculty.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Info Section */}
                  <div className="space-y-3 w-full">
                    <h4 className="text-xl font-extrabold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {faculty.name}
                    </h4>

                    <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                      <Award size={14} /> {faculty.role}
                    </div>

                    <div className="flex flex-col gap-2 pt-2">
                      <div className="flex items-center justify-center gap-2 text-sm text-slate-500 font-medium">
                        <GraduationCap size={16} className="text-emerald-500 shrink-0" />
                        <span className="truncate">{faculty.qualification}</span>
                      </div>
                     
                    </div>
                  </div>

                  {/* Bottom Decoration */}
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-emerald-50 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FacultyPage;