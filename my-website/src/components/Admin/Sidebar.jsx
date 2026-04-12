import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, Users, Image as ImageIcon, FileText, 
  ClipboardList, UserPlus, UploadCloud, LogOut, Menu, X 
} from 'lucide-react';
import { useCollegeContext } from '../../Context/Context';
import logo from '../../Images/tlogo.png'

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { logoutAdmin } = useCollegeContext();

  // Compact Style: Padding aur Gap kam kiya gaya hai
  const navItemStyles = ({ isActive }) => `
    flex flex-col items-center justify-center gap-0.5 py-2 mx-1 rounded-lg transition-all duration-200
    ${isActive 
      ? 'bg-emerald-600 text-white shadow-md' 
      : 'text-slate-400 hover:bg-emerald-50 hover:text-emerald-600'}
  `;

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-white overflow-hidden">
      {/* 1. Logo Area: Height kam ki gayi hai */}
      <div className="flex justify-center py-4 shrink-0">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
      </div>

      {/* 2. Nav List: Spacing tight ki gayi hai taaki scroll na karna pade */}
      <nav className="flex-1 flex flex-col gap-1 px-1">
        <NavLink to="/admin/dashboard" className={navItemStyles} onClick={() => setIsMobileOpen(false)}>
          <LayoutDashboard size={20} />
          <span className="text-[9px] font-bold">Dash</span>
        </NavLink>

        <NavLink to="/admin/faculty-list" className={navItemStyles} onClick={() => setIsMobileOpen(false)}>
          <Users size={20} />
          <span className="text-[9px] font-bold">Faculty</span>
        </NavLink>

        <NavLink to="/admin/gallery-list" className={navItemStyles} onClick={() => setIsMobileOpen(false)}>
          <ImageIcon size={20} />
          <span className="text-[9px] font-bold">Gallery</span>
        </NavLink>

        <NavLink to="/admin/admission-list" className={navItemStyles} onClick={() => setIsMobileOpen(false)}>
          <FileText size={20} />
          <span className="text-[9px] font-bold">Admiss</span>
        </NavLink>

        <NavLink to="/admin/trail-list" className={navItemStyles} onClick={() => setIsMobileOpen(false)}>
          <ClipboardList size={20} />
          <span className="text-[9px] font-bold">Trial</span>
        </NavLink>

        <NavLink to="/admin/add-faculty" className={navItemStyles} onClick={() => setIsMobileOpen(false)}>
          <UserPlus size={20} />
          <span className="text-[9px] font-bold">+Staff</span>
        </NavLink>

        <NavLink to="/admin/upload" className={navItemStyles} onClick={() => setIsMobileOpen(false)}>
          <UploadCloud size={20} />
          <span className="text-[9px] font-bold">+Media</span>
        </NavLink>

        {/* 3. Exit Button: Ab yeh list ke bilkul niche set ho jayega */}
        <button 
          onClick={logoutAdmin} 
          className="mt-0 mb-4 flex flex-col items-center justify-center py-2 mx-1 text-rose-400 hover:bg-rose-50 hover:text-rose-600 rounded-lg transition-all"
        >
          <LogOut size={20} />
          <span className="text-[9px] font-bold uppercase">Exit</span>
        </button>
      </nav>
    </div>
  );

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b border-slate-100 p-3 sticky top-0 z-50 flex items-center justify-between">
        <img src={logo} alt="logo" className="w-8 h-8" />
        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="p-2 bg-slate-50 rounded-lg">
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar for Desktop & Mobile Drawer */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-40 h-[100dvh] bg-white border-r border-slate-100 shadow-sm transition-transform
        ${isMobileOpen ? 'translate-x-0 w-20' : '-translate-x-full lg:translate-x-0 w-20'}
      `}>
        <SidebarContent />
      </aside>

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden" onClick={() => setIsMobileOpen(false)}></div>
      )}
    </>
  );
};

export default Sidebar;