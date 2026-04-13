import React from 'react';
import Sidebar from '../../components/Admin/Sidebar'; 
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (

    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 overflow-x-hidden">
      
     
      <Sidebar />

      
      <main className="flex-1 w-full max-w-full overflow-x-hidden transition-all duration-300">
        
       
        <main className="flex-1 min-h-screen overflow-y-auto">
   <Outlet />
</main>

      </main>
    </div>
  );
};

export default AdminLayout; 