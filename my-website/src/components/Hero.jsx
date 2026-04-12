// src/components/Hero.jsx
import React from 'react';
import Heroimg from "../Images/Hero_image.png";
import { useNavigate } from 'react-router-dom';
import { Award, Users, BookOpen, ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-green-50/50 blur-3xl"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-50/50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXT CONTENT */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-black uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Admissions Open 2025-26
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
              Shape Your Future at <br/>
              <span className="relative inline-block">
                <span className="relative z-10 text-green-600">PRAYAG MSW College</span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-green-200 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                </svg>
              </span>
            </h1>

            <p className="text-slate-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Excellence in Social Work education. We provide the tools, mentorship, and environment to turn your passion into a professional career.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <button 
                onClick={() => navigate('/admission-page')}
                className="group flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-xl active:scale-95"
              >
                Start Application
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a href="#departments" className="flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-slate-700 hover:bg-slate-100 transition-all border border-slate-200">
                View Curriculum
              </a>
            </div>

            
          </div>

          {/* IMAGE CONTENT */}
          <div className="lg:w-2/5 relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl shadow-emerald-300 rotate-2 hover:rotate-0 transition-all duration-500">
              <img src={Heroimg} alt="Campus" className="w-full h-full object-cover" />
            </div>            
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;