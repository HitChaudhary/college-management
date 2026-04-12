import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCollegeContext } from '../../Context/Context';
import { Edit3, Image as ImageIcon, Briefcase, GraduationCap, Award, X, ArrowLeft } from 'lucide-react';

const UpdateFaculty = () => {
    const { id } = useParams(); // URL se faculty ID lene ke liye
    const navigate = useNavigate();
    const { axios, facultys,  fetchFaculties } = useCollegeContext();

    const [fimage, setFimage] = useState(false);
    const [preview, setPreview] = useState("");
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [department, setDepartment] = useState('');
    const [qualification, setQualification] = useState('');
    const [exprience, setExprience] = useState('');
    const [isUpdating, setIsUpdating] = useState(false);

   
    useEffect(() => {
        const facultyToEdit = facultys.find(f => f._id === id);
        if (facultyToEdit) {
            setName(facultyToEdit.name);
            setRole(facultyToEdit.role);
            setDepartment(facultyToEdit.department);
            setQualification(facultyToEdit.qualification);
            setExprience(facultyToEdit.exprience);
            setPreview(facultyToEdit.fimage); 
        }
    }, [id, facultys]);

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setIsUpdating(true);

            const facultyData = { 
                _id: id, 
                name, 
                role, 
                department, 
                qualification, 
                exprience 
            };

            const formData = new FormData();
            formData.append('faculty', JSON.stringify(facultyData));
            
         
            if (fimage) {
                formData.append('fimage', fimage);
            }

            const { data } = await axios.post('/api/faculty/updatefaculty', formData);

            if (data.success) {
                toast.success(data.message);
                fetchFaculties();
                navigate('/admin/faculty-list'); 
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="flex-1 bg-slate-50 p-3 md:p-10 min-h-screen font-sans">
            <button 
                onClick={() => navigate(-1)} 
                className="mb-6 flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-bold transition-all"
            >
                <ArrowLeft size={18} /> Back to List
            </button>

            <form onSubmit={onSubmitHandler} className="max-w-3xl mx-auto">
                <div className="bg-white shadow-xl rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-100 overflow-hidden">
                    
                    <div className="bg-amber-500 p-6 md:p-10 text-white flex justify-between items-center">
                        <div>
                            <h2 className="text-xl md:text-3xl font-black flex items-center gap-3">
                                <Edit3 size={24} /> Update Faculty
                            </h2>
                            <p className="text-amber-100 text-[11px] md:text-base mt-1 text-black font-bold">Modify existing faculty details.</p>
                        </div>

                        <div className="md:hidden">
                            <label htmlFor="fimage" className="relative cursor-pointer">
                                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center overflow-hidden">
                                    <img src={fimage ? URL.createObjectURL(fimage) : preview} className="w-full h-full object-cover" alt="preview" />
                                </div>
                            </label>
                        </div>
                    </div>

                    <div className="p-6 md:p-12 space-y-6 md:space-y-10">
                        
                        {/* Desktop Image Section */}
                        <div className="hidden md:flex flex-col items-center justify-center">
                            <label htmlFor="fimage" className="relative cursor-pointer group">
                                <div className="w-32 h-32 rounded-[2rem] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-amber-400 transition-all duration-300">
                                    <img src={fimage ? URL.createObjectURL(fimage) : preview} className="w-full h-full object-cover" alt="preview" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-white text-[10px] font-bold">CHANGE PHOTO</p>
                                    </div>
                                </div>
                            </label>
                            <input type="file" id="fimage" hidden onChange={(e) => setFimage(e.target.files[0])} />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                <input
                                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-amber-500 outline-none transition-all text-sm font-medium"
                                    type="text" value={name} onChange={e => setName(e.target.value)} required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Role</label>
                                <input
                                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-amber-500 outline-none transition-all text-sm font-medium"
                                    type="text" value={role} onChange={e => setRole(e.target.value)} required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Briefcase size={14} className="text-amber-500" /> Dept
                                </label>
                                <input
                                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-amber-500 outline-none transition-all text-sm font-medium"
                                    type="text" value={department} onChange={e => setDepartment(e.target.value)} required
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Award size={14} className="text-amber-500" /> Exp
                                </label>
                                <input
                                    className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-amber-500 outline-none transition-all text-sm font-medium"
                                    type="text" value={exprience} onChange={e => setExprience(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest ml-1 flex items-center gap-2">
                                <GraduationCap size={16} className="text-amber-500" /> Qualification
                            </label>
                            <input
                                className="w-full px-5 py-3.5 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-amber-500 outline-none transition-all text-sm font-medium"
                                type="text" value={qualification} onChange={e => setQualification(e.target.value)} required
                            />
                        </div>

                        <button
                            disabled={isUpdating}
                            type="submit"
                            className="w-full py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold rounded-2xl shadow-xl shadow-amber-100 transition-all active:scale-[0.98] mt-4"
                        >
                            {isUpdating ? "Updating..." : "Save Changes"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateFaculty;