import React, { useMemo, useState } from "react";
import {
  Plus,
  Trash2,
  Maximize2,
  FolderOpen,
  Image as ImageIcon
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCollegeContext } from "../../Context/Context";
import toast from "react-hot-toast";

const AdminGalleryPage = () => {
  const { photos = [], axios, fetchPhotos } = useCollegeContext();

  // Group photos by title (category)
  const groupedPhotos = useMemo(() => {
    return photos.reduce((acc, item) => {
      const category = item.title || "Others";
      if (!acc[category]) acc[category] = [];
      acc[category].push(item);
      return acc;
    }, {});
  }, [photos]);

  const categories = Object.keys(groupedPhotos);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");

  if (!categories.length) {
    return (
      <div className="p-10 text-center text-slate-500">
        No gallery items found.
      </div>
    );
  }

  // ✅ DELETE PHOTO (FIXED)
  const removePhoto = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this photo?"
    );
    if (!confirmDelete) return;

    try {
      const { data } = await axios.post("/api/gallery/removephoto", { _id });

      if (data.success) {
        toast.success(data.message);
        fetchPhotos(); // ✅ refresh gallery list
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900">
            Gallery Management
          </h1>
          <p className="text-xs md:text-sm text-slate-500 font-medium">
            Organize and update your visual assets.
          </p>
        </div>

        <NavLink
          to="/admin/upload"
          className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3 rounded-xl font-bold shadow-lg shadow-emerald-100 text-sm"
        >
          <Plus size={18} />
          Upload New
        </NavLink>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-1">
          Filter by Folder
        </p>

        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold border ${
                activeCategory === cat
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-500 border-slate-200"
              }`}
            >
              <FolderOpen size={14} />
              {cat}
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100">
                {groupedPhotos[cat].length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {groupedPhotos[activeCategory]?.map((item) => (
          <div
            key={item._id}
            className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200"
          >
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={item.gimage}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
              />

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 transition">
                <button className="p-2 bg-white/20 rounded-lg text-white">
                  <Maximize2 size={16} />
                </button>

                <button
                  onClick={() => removePhoto(item._id)}
                  className="p-2 bg-rose-500 rounded-lg text-white"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="p-3 flex justify-between text-[10px] text-slate-400">
              <span>
                {item.uploadedAt
                  ? new Date(item.uploadedAt).toLocaleDateString()
                  : "—"}
              </span>
              <ImageIcon size={12} />
            </div>
          </div>
        ))}

        {/* Add New */}
        <NavLink
          to="/admin/upload"
          className="aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center gap-2 text-slate-400 hover:border-emerald-400 hover:text-emerald-600"
        >
          <Plus size={20} />
          <span className="text-[10px] font-bold">Add Photo</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminGalleryPage;
