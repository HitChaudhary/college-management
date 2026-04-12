import React from "react";
import { useCollegeContext } from "../Context/Context";
import B1 from '../assetes/A3.jpeg'

const GalleryPage = () => {
  const { photos = [] } = useCollegeContext();

  // Group photos by title
  const groupedGallery = photos.reduce((acc, item) => {
    if (!acc[item.title]) {
      acc[item.title] = [];
    }
    acc[item.title].push(item);
    return acc;
  }, {});

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">

      {/* Hero Section */}
      <section className="mb-16 relative overflow-hidden rounded-3xl shadow-lg">
        <div className="h-96 w-full relative">
          <img 
            src={B1}  
            className='h-full w-full object-cover transition-transform duration-700 hover:scale-105' 
            alt="College Gallery Hero" 
          />
          {/* Overlay for text readability if you want to add a title here later */}
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="bg-white p-8 md:px-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Capturing Our Journey</h1>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our college campus reflects a balanced environment of academics,
            discipline, and student life. The gallery below highlights key moments,
            facilities, and activities that define the institutional culture and
            learning atmosphere.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      {Object.entries(groupedGallery).map(([section, images]) => (
        <section key={section} className="mb-20">

          {/* Section Header */}
          <div className="flex flex-col mb-10 border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-tight">
                {section}
            </h2>
           
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {images.map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={item.gimage}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content Section */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base font-bold text-gray-800 leading-tight">
                        {item.title}
                    </h4>
                  </div>
                  
                  {/* Subtitle Rendering */}
                  {item.subtitle && (
                      <p className="text-sm text-indigo-500 font-semibold mb-3">
                          {item.subtitle}
                      </p>
                  )}

                  <div className="flex items-center justify-between border-t border-gray-50 pt-3">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                        Event Log
                    </span>
                    <p className="text-xs text-gray-500 italic">
                      {formatDate(item.uploadedAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>
      ))}
    </div>
  );
};

export default GalleryPage;