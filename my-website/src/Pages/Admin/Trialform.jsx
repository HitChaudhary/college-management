import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Calendar,
  Trash2,
  CheckCircle,
  Search,
  Building2,
  Bell,
  Clock
} from 'lucide-react';
import { useCollegeContext } from '../../Context/Context';
import toast from 'react-hot-toast';

const TrialFormPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { trailLessonForms = [], axios, fetchTrailLessonForm } = useCollegeContext();

  const filteredTrials = trailLessonForms.filter((user) => {
    const term = searchTerm.toLowerCase();
    return (
      user.name?.toLowerCase().includes(term) ||
      user.email?.toLowerCase().includes(term) ||
      String(user.phone || "").includes(term) ||
      user.course?.toLowerCase().includes(term)
    );
  });

  const removeTrailForm = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trail?"
    );
    if (!confirmDelete) return;

    try {
      const { data } = await axios.post(
        "/api/traillesson/remove",
        { _id }
      );

      if (data.success) {
        toast.success(data.message);
        fetchTrailLessonForm();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="p-4 md:p-10 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-3">
            Trial Requests
            <span className="bg-rose-500 text-white text-[10px] px-2 py-0.5 rounded-full animate-pulse">
              New
            </span>
          </h1>
          <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">
            Manage demo class requests submitted via the website.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-100 w-fit">
          <Bell size={18} className="text-emerald-600" />
          <span className="text-xs md:text-sm font-bold text-emerald-700">
            {filteredTrials.length} Pending Trials
          </span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search by name, phone or course..."
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all text-sm font-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* View Container */}
      <div className="bg-transparent md:bg-white md:rounded-[2rem] md:border md:border-slate-200 md:shadow-sm overflow-hidden">
        
        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-400">Student Details</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-400">Course</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-400">Date</th>
                <th className="px-6 py-5 text-xs font-bold uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredTrials.map((user) => (
                <tr key={user._id || user.id} className="hover:bg-emerald-50/20 transition-colors group">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-sm">
                        {user.name?.charAt(0)}
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-slate-800 leading-tight">{user.name}</p>
                        <div className="flex items-center gap-3 mt-1 text-[11px] font-medium text-slate-500">
                           <span className="flex items-center gap-1"><Phone size={10} className="text-emerald-500"/> {user.phone}</span>
                           <span className="flex items-center gap-1"><Mail size={10} className="text-emerald-500"/> {user.email}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                      <Building2 size={12} /> {user.course}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <Calendar size={16} className="text-emerald-500" />
                      {new Date(user.traildate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2.5 text-emerald-600 bg-emerald-50 hover:bg-emerald-600 hover:text-white rounded-xl transition-all" title="Accept Request"><CheckCircle size={18} /></button>
                      <button onClick={() => removeTrailForm(user._id)} className="p-2.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-all" title="Remove Request"><Trash2 size={18} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE CARDS */}
        <div className="grid grid-cols-1 gap-5 md:hidden">
          {filteredTrials.map((user) => (
            <div key={user._id || user.id} className="bg-white p-5 rounded-[2rem] border border-slate-200 shadow-sm relative overflow-hidden active:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-emerald-400 flex items-center justify-center font-black text-xl shadow-lg">
                  {user.name?.charAt(0)}
                </div>
                <div>
                  <h3 className="font-black text-slate-900 leading-none mb-1">{user.name}</h3>
                  <div className="flex items-center gap-1.5 text-emerald-600 font-bold">
                    <Building2 size={12} />
                    <span className="text-[11px] uppercase tracking-tight">{user.course}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 bg-slate-50 p-3 rounded-2xl mb-4 border border-slate-100">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={14} className="text-emerald-500" />
                  <span className="text-xs font-semibold truncate">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone size={14} className="text-emerald-500" />
                  <span className="text-xs font-bold tracking-wide">{user.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-800">
                  <Clock size={14} className="text-emerald-500" />
                  <span className="text-xs font-black">
                    Date: {new Date(user.traildate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-3 bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg shadow-emerald-100">
                  <CheckCircle size={14}/> Accept
                </button>
                <button onClick={() => removeTrailForm(user._id)} className="flex-1 py-3 bg-white border border-slate-200 text-rose-600 rounded-xl font-bold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  <Trash2 size={14}/> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredTrials.length === 0 && (
          <div className="py-20 text-center bg-white rounded-[2rem] border border-dashed border-slate-200 mx-auto max-w-lg my-10 px-4">
             <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
               <Calendar size={32} className="text-slate-300" />
             </div>
             <p className="text-slate-500 font-black text-lg">No Requests Found</p>
             <p className="text-slate-400 text-sm mt-1">Try searching with a different term or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrialFormPage;