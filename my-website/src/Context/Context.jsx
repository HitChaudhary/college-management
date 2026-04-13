import { createContext, useContext, useEffect, useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";


axios.defaults.baseURL = `https://college-management-backend-6k4y.onrender.com`;



axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = token; // Sends the token automatically
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

const CollegeContext = createContext();


export const Provider = ({ children }) => {

   const navigate = useNavigate()
   const [token, setToken] = useState(null);
   const [facultys, setFacultys] = useState([]);
   const [input, setInput] = useState("");
   const [photos, setPhotos] = useState([]);
   const [admissionForms, setAdmissionForms] = useState([]);
   const [trailLessonForms, setTrailLessonForms] = useState([]);



   const fetchFaculties = async () => {
      try {
         const { data } = await axios.get('/api/faculty/all');
         data.success ? setFacultys(data.faculties) : toast.error(data.message)
      } catch (error) {
         toast.error(error.message)
      }
   }

   const fetchPhotos = async () => {
      try {
         const { data } = await axios.get('/api/gallery/allphotos');
         data.success ? setPhotos(data.photos) : toast.error(data.message)
      } catch (error) {
         toast.error(error.message)

      }
   }

   const fetchAdmissionForm = async () => {
      try {
         const { data } = await axios.get('/api/admission/all');
         data.success ? setAdmissionForms(data.admissions) : toast.error(data.message)
         console.log(admissionForms)
      } catch (error) {
         toast.error(error.message)

      }
   }

   const fetchTrailLessonForm = async () => {
      try {
         const { data } = await axios.get('/api/traillesson/all')
         data.success ? setTrailLessonForms(data.trailLessons) : toast.error(data.message);
         
      } catch (error) {
         toast.error(error.message)

      }
   }

       const logoutAdmin = () => {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"]; // Clean up
      setToken(null);
      navigate("/admin");
      toast.success("Logged out");
   };


  useEffect(() => {
      fetchFaculties();
      fetchPhotos();
      fetchAdmissionForm();
      fetchTrailLessonForm();
      const savedToken = localStorage.getItem('token');
      if (savedToken) setToken(savedToken);
   }, []);
   
   const value = {
      axios, navigate, token, setToken, facultys, setFacultys, input, setInput, photos, setPhotos, admissionForms, setAdmissionForms,trailLessonForms,setTrailLessonForms,
      fetchFaculties,fetchPhotos,fetchAdmissionForm,fetchTrailLessonForm , logoutAdmin
   
   }

   return (

      <CollegeContext.Provider value={value}>
         {children}
      </CollegeContext.Provider>

   )
}

export const useCollegeContext = () => {
   return useContext(CollegeContext)
};


