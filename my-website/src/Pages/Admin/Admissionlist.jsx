import React, { useMemo, useState } from "react";
import {
  Search,
  Trash2,
  Phone,
  Mail,
  User,
  BookOpen,
  MapPin,
  GraduationCap,
  Users
} from "lucide-react";
import { useCollegeContext } from "../../Context/Context";
import toast from "react-hot-toast";

const AdminAdmissionPage = () => {
  const { admissionForms = [], axios, fetchAdmissionForm } = useCollegeContext();
  const [searchTerm, setSearchTerm] = useState("");

  // 🔍 Enhanced Search (now filters by stream and gender too)
  const filteredAdmissions = useMemo(() => {
    const term = searchTerm.toLowerCase();

    return admissionForms.filter((user) => {
      return (
        user.name?.toLowerCase().includes(term) ||
        user.email?.toLowerCase().includes(term) ||
        String(user.phone || "").includes(term) ||
        user.course?.toLowerCase().includes(term) ||
        user.twelfthStream?.toLowerCase().includes(term)
      );
    });
  }, [admissionForms, searchTerm]);

  const removeAdmission = async (_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this admission?");
    if (!confirmDelete) return;

    try {
      const { data } = await axios.post("/api/admission/remove", { _id });
      if (data.success) {
        toast.success(data.message);
        fetchAdmissionForm();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="p-4 md:p-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-black text-slate-900">Admission Enquiries</h1>
        <p className="text-sm text-slate-500 font-medium">
          Detailed overview of applications, academic backgrounds, and student contact info.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search by name, stream, or course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-emerald-500/10 outline-none transition-all shadow-sm"
        />
      </div>

      {/* Responsive Table Wrapper */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[900px]">
            <thead>
              <tr className="bg-slate-50/50 border-b border-slate-100">
                <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Student & Gender</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Applied Course</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">12th Academics</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider">Contact Info</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase text-slate-400 tracking-wider text-right">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-50">
              {filteredAdmissions.map((user) => (
                <tr key={user._id} className="hover:bg-slate-50/50 transition">
                  {/* Student & Gender */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        user.gender === 'Female' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {user.gender === 'Female' ? 'F' : 'M'}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800 leading-tight">{user.name}</p>
                        <p className="text-[10px] font-bold text-slate-400 mt-0.5">{user.gender}</p>
                      </div>
                    </div>
                  </td>

                  {/* Course */}
                  <td className="px-6 py-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-black">
                      <BookOpen size={14} />
                      {user.course}
                    </span>
                  </td>

                  {/* 12th Academics */}
                  <td className="px-6 py-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <GraduationCap size={16} className="text-emerald-500" />
                        <span className="text-sm font-black text-slate-700">{user.twelfthPercentage}%</span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
                        {user.twelfthStream} Stream
                      </p>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-5">
                    <div className="space-y-1">
                      <a href={`mailto:${user.email}`} className="flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-indigo-600 transition">
                        <Mail size={14} />
                        {user.email}
                      </a>
                      <a href={`tel:${user.phone}`} className="flex items-center gap-2 text-xs font-black text-slate-800 hover:text-emerald-600 transition">
                        <Phone size={14} />
                        {user.phone}
                      </a>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => removeAdmission(user._id)}
                      className="p-3 rounded-2xl bg-rose-50 text-rose-600 hover:bg-rose-600 hover:text-white transition-all shadow-sm"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty state */}
        {filteredAdmissions.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center bg-white">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 text-slate-300">
              <Search size={32} />
            </div>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
              No admission forms found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminAdmissionPage;