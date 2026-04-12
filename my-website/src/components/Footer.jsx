// src/components/Footer.jsx
import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../Images/tlogo.png'

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { label: 'Home', onClick: () => navigate("/") },
    { label: 'Departments', onClick: () => navigate("/department") },
    { label: 'Admissions', onClick: () => navigate("/admission-page") },
    { label: 'Faculty', onClick: () => navigate("/faculty") },
    { label: 'Gallery', onClick: () => navigate("/gallery") },
    { label: 'Contact us', onClick: () => navigate("/contact-us") },
  ];
  
  const programLinks = [
    { label: 'MSc (CA & IT)', path: '/department/msc' },
    { label: 'BCA', path: '/department/bca' },
    { label: 'MSW', path: '/department/msw' },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-5 h-5" />, text: 'Prayag College Campus, Panol, Gujarat' },
    { icon: <Phone className="w-5 h-5" />, text: '+91 98765 43210' },
    { icon: <Mail className="w-5 h-5" />, text: 'info@prayagcollege.edu' },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Grid: Mobile (1 col) -> Tablet (2 col) -> Desktop (4 col) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          
          {/* 1. College Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 flex-shrink-0 mr-3">
                <img src={logo} alt="College Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">
                Prayag <span className="text-green-500">MSW</span> College
              </h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Empowering the next generation through academic excellence and innovation since 1995.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links - Grid adjust for mobile */}
          <div className="sm:pl-8 lg:pl-0">
            <h4 className="text-lg font-bold mb-6 text-green-400 border-b-2 border-green-900/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-y-3 gap-x-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={link.onClick} 
                    className="text-gray-400 hover:text-green-400 hover:pl-2 transition-all duration-300 text-sm md:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Programs */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-green-400 border-b-2 border-green-900/30 pb-2 inline-block">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((program, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigate(program.path)} 
                    className="text-gray-400 hover:text-green-400 transition-all duration-300 text-sm md:text-base text-left bg-transparent"
                  >
                    {program.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-6 text-green-400 border-b-2 border-green-900/30 pb-2 inline-block">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start group">
                  <span className="text-green-500 mr-3 mt-1 group-hover:scale-120 transition-transform">
                    {info.icon}
                  </span>
                  <span className="text-gray-400 text-sm md:text-base group-hover:text-gray-200 transition-colors">
                    {info.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Policies */}
        <div className="border-t border-gray-800/50 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs md:text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-green-600 font-semibold">Prayag MSW College</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <button onClick={() => navigate('/privacy')} className="text-gray-500 hover:text-green-400 text-xs transition-colors">Privacy Policy</button>
              <button onClick={() => navigate('/terms')} className="text-gray-500 hover:text-green-400 text-xs transition-colors">Terms of Use</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;