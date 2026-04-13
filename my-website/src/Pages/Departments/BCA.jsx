import React from "react";
import { 
  BookOpen, 
  Cpu, 
  Monitor, 
  
  CheckCircle2
} from "lucide-react";
import {
  bcaHighlights,
  bcaLabs,
  
} from "../../assetes/data";



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

       
        
      </div>
    </div>
  );
};

export default BCA;