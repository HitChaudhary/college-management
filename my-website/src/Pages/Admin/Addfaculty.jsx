import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useCollegeContext } from '../../Context/Context';
import { UserPlus, Image as ImageIcon, Briefcase, GraduationCap, Award, X } from 'lucide-react';

const AddFaculty = () => {
  const { axios } = useCollegeContext();
  const [fimage, setFimage] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [department, setDepartment] = useState('');
  const [qualification, setQualification] = useState('');
  const [exprience, setExprience] = useState(''); 
  const [isAdding, setIsAdding] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsAdding(true);
      if (!fimage) return toast.error('Please upload faculty image');

      const faculty = { name, role, department, qualification, exprience }; 
      const formData = new FormData();
      formData.append('faculty', JSON.stringify(faculty));
      formData.append('fimage', fimage);

      const { data } = await axios.post('/api/faculty/addfaculty', formData);

      if (data.success) {
        toast.success(data.message);
        setName(''); setRole(''); setDepartment(''); setQualification(''); setExprience(''); setFimage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <div className="flex-1 bg-slate-50 p-3 md:p-10 min-h-screen font-sans">
      <form onSubmit={onSubmitHandler} className="max-w-3xl mx-auto">
        
        <div className="bg-white shadow-xl rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden">
          
          {/* Header Section */}
          <div className="bg-emerald-600 p-6 md:p-10 text-white flex justify-between items-center">
            <div>
              <h2 className="text-xl md:text-3xl font-black flex items-center gap-3">
                <UserPlus size={24} className="md:w-8 md:h-8" /> Add Faculty
              </h2>
              <p className="text-emerald-100 text-[11px] md:text-base mt-1">Register a new faculty member.</p>
            </div>

            {/* --- MOBILE ONLY IMAGE UPLOAD (Visible only on small screens) --- */}
            <div className="md:hidden">
                <label htmlFor="fimage" className="relative cursor-pointer">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden">
                      {fimage ? (
                        <img src={URL.createObjectURL(fimage)} className="w-full h-full object-cover" alt="preview" />
                      ) : (
                        <ImageIcon size={24} className="text-emerald-100" />
                      )}
                    </div>
                </label>
            </div>
          </div>

          <div className="p-6 md:p-12 space-y-6 md:space-y-10">
            
            {/* --- DESKTOP ONLY IMAGE UPLOAD (Hidden on mobile) --- */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <label htmlFor="fimage" className="relative cursor-pointer group">
                <div className="w-32 h-32 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-emerald-400 transition-all duration-300">
                  {fimage ? (
                    <img src={URL.createObjectURL(fimage)} className="w-full h-full object-cover" alt="preview" />
                  ) : (
                    <div className="text-center text-slate-400 group-hover:text-emerald-500">
                      <ImageIcon size={32} className="mx-auto mb-1" />
                      <p className="text-[10px] font-bold uppercase tracking-tighter">Select Photo</p>
                    </div>
                  )}
                </div>
                {fimage && (
                  <button type="button" onClick={() => setFimage(false)} className="absolute -top-2 -right-2 bg-rose-500 text-white p-1.5 rounded-full shadow-lg">
                    <X size={14} />
                  </button>
                )}
              </label>
              <input type="file" id="fimage" hidden onChange={(e) => setFimage(e.target.files[0])} />
            </div>

            {/* Desktop and Mobile Input Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                <input
                  className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                  type="text" placeholder="Full Name" required value={name} onChange={e => setName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Role</label>
                <input
                  className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                  type="text" placeholder="e.g. Professor" required value={role} onChange={e => setRole(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Briefcase size={14} className="text-emerald-500" /> Dept
                </label>
                <input
                  className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                  type="text" placeholder="e.g. MSW" required value={department} onChange={e => setDepartment(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                  <Award size={14} className="text-emerald-500" /> Exp
                </label>
                <input
                  className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                  type="text" placeholder="e.g. 5 Years" value={exprience} onChange={e => setExprience(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                <GraduationCap size={16} className="text-emerald-500" /> Qualification
              </label>
              <input
                className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                type="text" placeholder="Highest Degree" required value={qualification} onChange={e => setQualification(e.target.value)}
              />
            </div>

            <button
              disabled={isAdding}
              type="submit"
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-bold rounded-2xl shadow-xl shadow-emerald-100 transition-all active:scale-[0.98] mt-4"
            >
              {isAdding ? "Saving..." : "Register Faculty"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFaculty;