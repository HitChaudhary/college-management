import React from "react";
import { 
  BookOpen, 
  Cpu, 
  Monitor, 
  Users, 
  Trophy, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import {
  bcaHighlights,
  bcaLabs,
  facultyMembers,
  topStudents,
} from "../assetes/data";



const BCA = () => {
  return (
    <div className="bg-[#fcfdfc] text-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-32">

        {/* Hero Section */}
        <section className="relative text-center space-y-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl -z-10" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-bold tracking-wide uppercase">
            <BookOpen size={16} />
            Department of Computer Applications
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            Bachelor of <span className="text-emerald-600">Computer Applications</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            A future-focused program designed to build strong foundations in
            software engineering, digital logic, and emerging cloud technologies.
          </p>

          {/* Quick Stats Bar */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
             {bcaHighlights.slice(0, 4).map((item, index) => (
               <div key={index} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-emerald-100 rounded-2xl shadow-sm">
                 <CheckCircle2 className="text-emerald-500" size={18} />
                 <span className="text-sm font-semibold text-slate-700">{item}</span>
               </div>
             ))}
          </div>
        </section>

        {/* About the Department - Modern Split Layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative">
              Academic <span className="text-emerald-600">Excellence</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-emerald-500 rounded-full" />
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                The Department of Computer Applications blends deep theoretical
                logic with industry-standard practical learning. We don't just teach 
                coding; we teach problem-solving.
              </p>
              <p>
                Students engage in a curriculum that evolves with the tech industry, 
                utilizing modern DevOps tools, AI integration, and agile methodologies.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-100/50 rounded-[2.5rem] rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative h-[400px] rounded-[2rem] overflow-hidden bg-slate-100 border-2 border-white shadow-2xl flex items-center justify-center">
               <Cpu size={80} className="text-emerald-200 animate-pulse" />
               {/* Replace with actual high-quality Lab/Department photo */}
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-emerald-50">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest">Innovation Hub</p>
                  <p className="text-sm text-slate-800 font-medium">Equipped with 100+ High-end Workstations</p>
               </div>
            </div>
          </div>
        </section>

        {/* Labs & Facilities - Cards with Icons */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Advanced Infrastructure</h2>
            <p className="text-slate-500 mt-2">Specialized environments for specialized learning</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {bcaLabs.map((lab, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300"
              >
                <div className="w-14 h-14 mb-6 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                  <Monitor size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{lab}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Full-stack capabilities with gigabit connectivity and enterprise-grade software licenses.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Top Students - Leaderboard Style */}
        <section className="bg-emerald-900 rounded-[3rem] p-12 lg:p-20 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-3xl -z-0 opacity-50" />
          
          <div className="relative z-10 text-center lg:text-left mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center lg:justify-start gap-3">
                <Trophy className="text-yellow-400" /> Academic Titans
              </h2>
              <p className="text-emerald-200 mt-2 text-lg">Recognizing the top achievers of the current session</p>
            </div>
            <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-emerald-300 transition-colors">
              Hall of Fame <ArrowRight size={16} />
            </button>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {topStudents.map((student, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-6 text-center hover:bg-white/20 transition-all group"
              >
                <div className="relative w-20 h-20 mx-auto mb-4">
                  <img
                    src={student.image}
                    alt={student.name}
                    className="w-full h-full object-cover rounded-2xl ring-2 ring-emerald-400"
                  />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-yellow-400 text-emerald-900 text-xs font-black flex items-center justify-center shadow-lg">
                    #{index + 1}
                  </div>
                </div>

                <p className="font-bold text-white truncate">{student.name}</p>
                <div className="inline-block mt-3 px-3 py-1 bg-emerald-500/30 rounded-full">
                   <p className="text-emerald-100 font-bold text-sm tracking-tighter">{student.score}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faculty Teaser */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Expert Mentors</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {facultyMembers.slice(0, 3).map((faculty, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-slate-100 border-2 border-emerald-100 p-1 mb-4">
                   <div className="w-full h-full bg-emerald-50 rounded-full flex items-center justify-center">
                     <Users size={32} className="text-emerald-300" />
                   </div>
                </div>
                <p className="font-bold text-slate-800">{faculty.name}</p>
                <p className="text-xs font-medium text-emerald-600 uppercase tracking-tighter mt-1">{faculty.role}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <button className="px-8 py-3 rounded-full border-2 border-emerald-600 text-emerald-600 font-bold hover:bg-emerald-600 hover:text-white transition-all">
              Meet Full Faculty
            </button>
          </div>
        </section>
        
      </div>
    </div>
  );
};

export default BCA;