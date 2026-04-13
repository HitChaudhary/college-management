import React from 'react';
import { Users, Image as ImageIcon, FileText, ClipboardCheck } from 'lucide-react';
import { useCollegeContext } from '../../Context/Context';

const Dashboard = () => {
  const { facultys, photos, admissionForms, trailLessonForms } = useCollegeContext();

  const stats = [
    {
      label: 'Faculty',
      count: facultys?.length || 0,
      icon: <Users size={20} />,
      color: 'bg-emerald-600',
      description: 'Active Members'
    },
    {
      label: 'Gallery',
      count: photos?.length || 0,
      icon: <ImageIcon size={20} />,
      color: 'bg-blue-600',
      description: 'Media Assets'
    },
    {
      label: 'Admissions',
      count: admissionForms?.length || 0,
      icon: <FileText size={20} />,
      color: 'bg-amber-500',
      description: 'Applications'
    },
    {
      label: 'Trials',
      count: trailLessonForms?.length || 0,
      icon: <ClipboardCheck size={20} />,
      color: 'bg-rose-500',
      description: 'Requests'
    }
  ];

  return (
    <div className="p-4 md:p-8 lg:p-10 bg-[#f8fafc] min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl md:text-2xl font-black text-slate-900">Admin Dashboard</h1>
        <p className="text-slate-500 text-xs md:text-sm mt-1">Computer Applications Department Overview</p>
      </div>

      {/* Dynamic Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl border border-slate-200/60 shadow-sm transition-all"
          >
            <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl ${stat.color} text-white flex items-center justify-center mb-3 md:mb-4 shadow-lg ring-4 ring-slate-50`}>
              {stat.icon}
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest truncate">{stat.label}</p>
            <h3 className="text-xl md:text-3xl font-black text-slate-900 mt-1">{stat.count}</h3>
            <p className="hidden md:flex text-slate-400 text-[10px] mt-2 items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-slate-300"></span>
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Grid for Table/Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity / Gallery Preview can go here */}
          <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-200/60 p-6 min-h-[300px]">
             <h2 className="font-bold text-slate-800 mb-4">Recent Updates</h2>
             <p className="text-slate-400 text-sm italic">System logs and recent form submissions will appear here.</p>
          </div>
      </div>
    </div>
  );
};

export default Dashboard;