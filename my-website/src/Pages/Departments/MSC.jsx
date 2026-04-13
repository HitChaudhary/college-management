import React from "react";
import { 
  Database, 
  Terminal, 
  
  CheckCircle2,
  Network
} from "lucide-react";
import {
  mscHighlights, // Ensure these are defined in your data file
  mscLabs,
  
} from "../../assetes/data";

const MScCAIT = () => {
  return (
    <div className="bg-[#fcfdfc] text-slate-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-32">

        {/* Hero Section */}
        <section className="relative text-center space-y-8">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl -z-10" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-bold tracking-wide uppercase">
            <Database size={16} />
            Post-Graduate Studies
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            MSc <span className="text-blue-600">(CA & IT)</span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-600 text-lg leading-relaxed">
            Advanced mastery in integrated technology, network architecture, 
            and enterprise-level software development for the modern era.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
             {mscHighlights.slice(0, 4).map((item, index) => (
               <div key={index} className="flex items-center gap-2 px-5 py-2.5 bg-white border border-blue-100 rounded-2xl shadow-sm">
                 <CheckCircle2 className="text-blue-500" size={18} />
                 <span className="text-sm font-semibold text-slate-700">{item}</span>
               </div>
             ))}
          </div>
        </section>

        {/* About Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative">
              Advanced <span className="text-blue-600">IT Integration</span>
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-500 rounded-full" />
            </h2>
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Our MSc program bridges the gap between core computer applications 
                and high-level Information Technology management.
              </p>
              <p>
                Focusing on Research & Development, students dive into Big Data, 
                Cybersecurity, and Advanced Web Frameworks.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-[2.5rem] rotate-2 group-hover:rotate-0 transition-transform duration-500" />
            <div className="relative h-[400px] rounded-[2rem] overflow-hidden bg-slate-100 border-2 border-white shadow-2xl flex items-center justify-center">
               <Network size={80} className="text-blue-200 animate-pulse" />
               <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-xl border border-blue-50">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Research Lab</p>
                  <p className="text-sm text-slate-800 font-medium">Dedicated Servers for Student Research</p>
               </div>
            </div>
          </div>
        </section>

        {/* Labs Section */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Specialized IT Labs</h2>
            <p className="text-slate-500 mt-2">Advanced computing environments for PG researchers</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {mscLabs.map((lab, index) => (
              <div key={index} className="group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300">
                <div className="w-14 h-14 mb-6 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <Terminal size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{lab}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Advanced architecture for system simulation and cloud deployment testing.
                </p>
              </div>
            ))}
          </div>
        </section>

       
      </div>
    </div>
  );
};


export default MScCAIT;