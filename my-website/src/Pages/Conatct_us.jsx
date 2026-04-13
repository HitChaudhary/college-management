import React from "react";
import { 
  Facebook, 
  Instagram, 
  Linkedin,

} from 'lucide-react';
import contactimg from '../Images/trial_image.png'

const ContactUs = () => {
    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
       
        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
      ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mb-20">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-green-600">
            Contact Us
          </h1>

          <p className="text-gray-600 max-w-md mb-8 leading-relaxed">
            Have questions about admissions, programs, or campus life?
            Reach out to us. Our team is always ready to guide you.
          </p>

          {/* Social Icons */}
         <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-stone-200 rounded-full  border-blue-800 flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="h-64 sm:h-80 rounded-3xl flex items-center justify-center text-gray-500 font-medium">
          <img src={contactimg} className="h-fll w-full object-contain" alt="" />
        </div>
      </section>

      {/* Short Message Section */}
      <section className="text-center mb-20">
        <p className="text-xl sm:text-2xl font-medium text-gray-700 max-w-2xl mx-auto">
          We believe clear communication builds strong connections.
          Let’s start the conversation.
        </p>
      </section>

      {/* Form Section */}
      <section className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 sm:p-10 mb-16">
        <h2 className="text-2xl font-bold mb-8">
          Send Us a Message
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <input
            type="text"
            placeholder="Subject"
            className="md:col-span-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="md:col-span-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <button
            type="submit"
            className="md:col-span-2 w-fit bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition flex items-center gap-2"
          >
            Send Message →
          </button>
        </form>
      </section>

      {/* Bottom Slogan */}
      <section className="text-center">
        <p className="text-gray-500 italic">
          “Connecting students with opportunities.”
        </p>
      </section>
    </div>
  );
};

export default ContactUs;
