import React from 'react';
import Sidebar from '../../components/Admin/Sidebar'; // Adjust path
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    // lg:flex-row desktop ke liye, default (mobile) flex-col rahega
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 overflow-x-hidden">
      
      {/* Navigation: 
          Mobile par ye top par rahega (flex-col ki wajah se) 
          Desktop par ye left side par fix ho jayega (lg:flex-row)
      */}
      <Sidebar />

      {/* Main Content: 
          'flex-1' space fill karega. 
          'w-full' aur 'max-w-full' mobile par padding issues solve karte hain.
      */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden transition-all duration-300">
        
        {/* Content Wrapper: 
            Mobile par thodi kam padding (p-4) aur desktop par zyada (lg:p-8)
            taki layout saas le sake (breathable layout).
        */}
        <main className="flex-1 min-h-screen overflow-y-auto">
   <Outlet />
</main>

      </main>
    </div>
  );
};

export default AdminLayout; 