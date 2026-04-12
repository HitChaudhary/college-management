import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Briefcase, GraduationCap, Award } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useCollegeContext } from '../../Context/Context';
import toast from 'react-hot-toast';

const AdminFacultyPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { facultys, axios,  fetchFaculties } = useCollegeContext();
  
  const allFaculty = facultys || [];

  const filteredFaculty = allFaculty.filter(member =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    member.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removeFaculty = async (id, name) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${name}?`);
    if (!confirmDelete) return;

    try {
      const { data } = await axios.post('/api/faculty/removefaculty', { _id: id });
      if (data.success) {
        toast.success(data.message);
         fetchFaculties();
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
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="text-xl md:text-2xl font-black text-slate-900 leading-none">Faculty Directory</h1>
        <NavLink to='/admin/add-faculty' className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-xl font-bold text-sm shadow-lg shadow-emerald-100 transition-all hover:bg-emerald-700 active:scale-95">
          <Plus size={18} /> Add New Member
        </NavLink>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search by name, department, or role..."
          className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all font-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-[2rem] border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-100">
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Faculty Details</th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Department</th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Qualification</th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400">Exp.</th>
                <th className="px-6 py-5 text-[11px] font-black uppercase tracking-widest text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredFaculty.map((member) => (
                <tr key={member._id} className="hover:bg-emerald-50/30 transition-all group">
                  {/* Faculty Info */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img src={member.fimage} className="w-11 h-11 rounded-xl object-cover shadow-sm ring-2 ring-slate-100" alt="" />
                      <div>
                        <p className="font-bold text-slate-800 leading-tight">{member.name}</p>
                        <p className="text-[10px] font-bold text-emerald-600 uppercase mt-0.5">{member.role}</p>
                      </div>
                    </div>
                  </td>

                  {/* Department */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-slate-100 rounded-lg text-slate-500">
                        <Briefcase size={14} />
                      </div>
                      <span className="text-sm font-bold text-slate-600 uppercase">{member.department}</span>
                    </div>
                  </td>

                  {/* Qualification */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 bg-slate-100 rounded-lg text-slate-500">
                        <GraduationCap size={14} />
                      </div>
                      <span className="text-sm font-medium text-slate-600">{member.qualification}</span>
                    </div>
                  </td>

                  {/* Experience */}
                  <td className="px-6 py-4">
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-lg border border-amber-100">
                      <Award size={12} className="shrink-0" />
                      <span className="text-[10px] font-black whitespace-nowrap">{member.exprience}</span>
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => navigate(`/admin/update-faculty/${member._id}`)}
                        className="p-2.5 text-amber-600 bg-amber-50 hover:bg-amber-500 hover:text-white rounded-xl transition-all"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => removeFaculty(member._id, member.name)}
                        className="p-2.5 text-rose-600 bg-rose-50 hover:bg-rose-500 hover:text-white rounded-xl transition-all"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="py-20 text-center text-slate-400 font-bold border-t border-slate-100">
            No faculty members found.
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminFacultyPage;