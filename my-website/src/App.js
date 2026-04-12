import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

// Public Pages
import Main from "./Pages/Main";
import Department from "./Pages/Department";
import FacultyApp from "./Pages/Faculty_page";
import GalleryPage from "./Pages/Gallery_Page";
import AboutUsPage from "./Pages/About_us";
import ContactUsPage from "./Pages/Conatct_us";
import Login from "./Pages/Login";
import AdmissionPage from "./components/Admission_page";

// Admin Pages
import Leyout from "./Pages/Admin/Leyout";
import Dashboard from "./Pages/Admin/Dashboard";
import FacultyList from "./Pages/Admin/Facultylist";
import GalleryList from "./Pages/Admin/Gellerylist";
import AdmissionList from "./Pages/Admin/Admissionlist";
import TrialForm from "./Pages/Admin/Trialform";
import AddFaculty from "./Pages/Admin/Addfaculty";
import Upload from "./Pages/Admin/Upload";
import { Provider, useCollegeContext } from "./Context/Context";
import {Toaster} from 'react-hot-toast'

// departments
import BCA from './Pages/Departments/BCA'
import MScCAIT from "./Pages/Departments/MSC";
import MSW from "./Pages/Departments/MSW";
import WhatsAppButton from "./components/WhatsAppButton";
import UpdateFaculty from "./Pages/Admin/UpdateFaculty";

const AppContent = () => {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");
   const {token} = useCollegeContext();

   
  return (
    
    <>
      <ScrollTop />

      {/* Only show Header if NOT in Admin panel */}
      {!isAdminPath && <Header />}
      <Toaster/>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Main />} />
        <Route path="/department/bca" element={<BCA />} />
                <Route path="/department/msc" element={<MScCAIT />} />

        <Route path="/department/msw" element={<MSW />} />

        <Route path="/faculty" element={<FacultyApp />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/admission-page" element={<AdmissionPage />} />

        {/* Admin Routes (Nested) */}
        <Route path="/admin" element={token ?<Leyout /> : <Login/>}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="faculty-list" element={<FacultyList />} />
          <Route path="gallery-list" element={<GalleryList />} />
          <Route path="admission-list" element={<AdmissionList />} />
          <Route path="trail-list" element={<TrialForm />} />
          <Route path="add-faculty" element={<AddFaculty />} />
          <Route path="upload" element={<Upload />} />
          <Route path="update-faculty/:id" element={<UpdateFaculty/>} />
        </Route>
      </Routes>
     {!isAdminPath && <WhatsAppButton />}

      {/* Only show Footer if NOT in Admin panel */}
      {!isAdminPath && <Footer />}
    </>
  );
};

function App() {
  
  return (
    <BrowserRouter>
    <Toaster/>
      <Provider>
        <AppContent />
      </Provider>

    </BrowserRouter>
  );
}

export default App;