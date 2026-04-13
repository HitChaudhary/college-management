import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { useCollegeContext } from '../Context/Context';

const Gallery = () => {
  const { navigate, photos = [] } = useCollegeContext();

  // Group photos by title and keep only one image per title
  const groupedPhotos = photos.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = item;
    }
    return acc;
  }, {});

  const galleryItems = Object.values(groupedPhotos);

  return (
    <section id="gallery" className="py-20 bg-emerald-50/30">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">
              Visual Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">
              Captured <span className="text-emerald-600">Moments</span>
            </h2>
            <p className="text-slate-600 text-lg mt-4">
              Explore our campus, facilities, and student life through our curated collection.
            </p>
          </div>

          <button
            onClick={() => navigate("/gallery")}
            className="hidden md:flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-all shadow-md"
          >
            Explore Full Gallery <ArrowRight size={18} />
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-emerald-100 overflow-hidden hover:border-emerald-300 transition-all shadow-sm hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-60 overflow-hidden bg-emerald-100">
                <img
                  src={item.gimage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-emerald-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => navigate("/gallery")}
                    className="p-3 bg-white rounded-full text-emerald-600 shadow-lg"
                  >
                    <ExternalLink size={24} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {item.title}
                </h3>

                <button
                  onClick={() => navigate("/gallery")}
                  className="w-full py-3 rounded-xl border border-emerald-200 text-emerald-700 font-semibold hover:bg-emerald-600 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  View Collection
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
