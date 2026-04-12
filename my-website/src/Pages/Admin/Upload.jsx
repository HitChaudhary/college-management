import React, { useState } from 'react';
import { UploadCloud, X, Plus, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useCollegeContext } from '../../Context/Context';

const UploadPhotoPage = () => {
  const navigate = useNavigate();
  const { axios } = useCollegeContext();

  const [gimage, setGimage] = useState(false);
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState(''); // New State
  const [uploadedAt, setDate] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!gimage) return toast.error('Please select an image');

    try {
      setIsUploading(true);
      const gallery = { title, subtitle, uploadedAt };

      const formData = new FormData();
      formData.append('gallery', JSON.stringify(gallery));
      formData.append('gimage', gimage);

      const { data } = await axios.post('/api/gallery/upload', formData);

      if (data.success) {
        toast.success(data.message);
        navigate('/admin/gallery-list');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="p-6 lg:p-12 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto mb-10 flex items-center gap-4">
        <Link to="/admin/gallery-list" className="p-2 hover:bg-emerald-50 rounded-full text-slate-400 hover:text-emerald-600 transition-all">
          <ArrowLeft size={20} />
        </Link>
        <h1 className="text-xl font-bold text-slate-800">Upload Media</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <form onSubmit={onSubmitHandler} className="space-y-8">
          
          {/* IMAGE UPLOAD SECTION (RESTORED) */}
          <div className="flex flex-col items-center justify-center">
            <label htmlFor="gimage" className="relative cursor-pointer group">
              <div className="w-48 h-48 rounded-[2.5rem] bg-slate-50 border-2 border-dashed border-slate-200 flex items-center justify-center overflow-hidden group-hover:border-emerald-400 transition-all">
                {gimage ? (
                  <img src={URL.createObjectURL(gimage)} className="w-full h-full object-cover" alt="preview" />
                ) : (
                  <div className="text-center text-slate-400 group-hover:text-emerald-500">
                    <UploadCloud size={40} className="mx-auto mb-2" />
                    <p className="text-[10px] font-bold uppercase tracking-widest">Select Image</p>
                  </div>
                )}
              </div>
              {gimage && (
                <button type="button" onClick={() => setGimage(false)} className="absolute -top-2 -right-2 bg-rose-500 text-white p-1.5 rounded-full shadow-lg">
                  <X size={16} />
                </button>
              )}
            </label>
            <input type="file" id="gimage" hidden accept="image/*" onChange={(e) => setGimage(e.target.files[0])} />
          </div>

          <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm space-y-6">
            {/* Title */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1">Photo Title</label>
              <input
                type="text"
                placeholder="e.g. Graduation Ceremony"
                className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            {/* Subtitle (New) */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1">Subtitle / Description</label>
              <input
                type="text"
                placeholder="e.g. Batch of 2025 celebration"
                className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>

            {/* Date */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase mb-2 ml-1">Event Date</label>
              <input
                type="date"
                className="w-full px-5 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:bg-white focus:border-emerald-500 outline-none transition-all text-sm font-medium"
                value={uploadedAt}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>

            <button
              disabled={isUploading}
              type="submit"
              className="w-full flex items-center justify-center gap-3 py-4 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-300 text-white font-bold rounded-2xl transition-all"
            >
              {isUploading ? "Uploading..." : <><Plus size={20} /> Upload Photo</>}
            </button>
          </div>
          <p className="text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-500" /> Max size: 10MB
          </p>
        </form>
      </div>
    </div>
  );
};

export default UploadPhotoPage;