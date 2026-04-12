import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { useCollegeContext } from "../Context/Context";
import logo from '../Images/tlogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [departmentValue, setDepartmentValue] = useState("");
  const location = useLocation();
  const { navigate } = useCollegeContext();

  // Sync department select with current route
  useEffect(() => {
    if (location.pathname.startsWith("/department")) {
      setDepartmentValue(location.pathname);
    } else {
      setDepartmentValue("");
    }
  }, [location.pathname]);

  const linkClass = ({ isActive }) =>
    `font-medium transition-colors duration-300 text-base md:text-sm lg:text-base ${
      isActive
        ? "text-green-600 border-b-2 border-green-600 pb-1"
        : "text-gray-700 hover:text-green-600"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">

          {/* Logo Section */}
          <div
            className="flex items-center cursor-pointer flex-shrink-0"
            onClick={() => { navigate("/"); setIsMenuOpen(false); }}
          >
            {/* <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center mr-2 md:mr-3">
              <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div> */}
            <h1 className="text-base md:text-xl lg:text-2xl font-bold text-gray-900 whitespace-nowrap">
              PRAYAG MSW<span className="text-green-600"> College</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <select
              value={departmentValue}
              onChange={(e) => {
                setDepartmentValue(e.target.value);
                navigate(e.target.value);
              }}
              className="border border-gray-300 rounded-lg px-2 py-1.5 text-sm text-gray-700 focus:ring-2 focus:ring-green-500 outline-none"
            >
              <option value="">Departments</option>
              <option value="/department/bca">BCA</option>
              <option value="/department/msc">MSc IT</option>
              <option value="/department/msw">MSW</option>
            </select>

            <NavLink to="/faculty" className={linkClass}>Faculty</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/about-us" className={linkClass}>About Us</NavLink>
            <NavLink to="/contact-us" className={linkClass}>Contact Us</NavLink>

            <div className="flex items-center gap-3 lg:gap-4">
              <button
                onClick={() => navigate("/admin")}
                className="px-4 lg:px-6 py-2 text-sm rounded-lg border border-green-600 text-green-600 hover:bg-green-50 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/admission-page")}
                className="bg-green-600 text-white px-4 lg:px-6 py-2 text-sm rounded-lg hover:bg-green-700 transition"
              >
                Enroll Now
              </button>
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-md transition"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu (Sliding/Overlay feel) */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b shadow-xl py-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-5 px-6">
              
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Select Department</label>
                <select
                  value={departmentValue}
                  onChange={(e) => {
                    setDepartmentValue(e.target.value);
                    navigate(e.target.value);
                    setIsMenuOpen(false);
                  }}
                  className="border border-gray-300 rounded-lg px-3 py-2.5 text-gray-700 outline-none focus:border-green-600 font-medium shadow-sm"
                >
                  <option value="" disabled>Departments</option>
                  <option value="/department/bca">BCA</option>
                  <option value="/department/msc">MSc IT</option>
                  <option value="/department/msw">MSW</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-b py-4">
                <NavLink to="/faculty" className={linkClass} onClick={() => setIsMenuOpen(false)}>Faculty</NavLink>
                <NavLink to="/gallery" className={linkClass} onClick={() => setIsMenuOpen(false)}>Gallery</NavLink>
                <NavLink to="/about-us" className={linkClass} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
                <NavLink to="/contact-us" className={linkClass} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <button
                  onClick={() => { navigate("/admin"); setIsMenuOpen(false); }}
                  className="w-full border-2 border-green-600 text-green-600 font-bold py-3 rounded-xl hover:bg-green-50 active:scale-95 transition"
                >
                  Admin Login
                </button>
                <button
                  onClick={() => { navigate("/admission-page"); setIsMenuOpen(false); }}
                  className="w-full bg-green-600 text-white font-bold py-3 rounded-xl shadow-lg shadow-green-200 active:scale-95 transition"
                >
                  Enroll Now (Admission)
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;