import React from 'react';
import wpavtar from '../assetes/wpavtar.png'

const WhatsAppButton = () => {
  const phoneNumber = "9328322307"; // Apna 10-digit number 91 prefix ke saath dalein
  const message = "Hello! I am interested in Prayag MSW College admissions."; // Default message

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2 shadow-green-200 hover:scale-110 hover:bg-[#128C7E] transition-all duration-300 flex items-center justify-center group"
      aria-label="Connect on WhatsApp"
    >
      {/* Tooltip jo hover karne par dikhega */}
      <span className="absolute right-16 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-gray-100 pointer-events-none">
        Chat with us!
      </span>
      
      {/* WhatsApp Icon */}
      <img src={wpavtar} className='w-10 max-h-10 rounded-full' alt="" />
    </a>
  );
};

export default WhatsAppButton;