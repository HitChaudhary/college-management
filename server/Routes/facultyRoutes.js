import express from 'express'
import { addFaculty, facultyList, removeFaculty,updateFaculty } from '../controllers/facultyController.js';
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';

const facultyRouter = express.Router();

facultyRouter.post("/addfaculty",upload.single('fimage'),auth, addFaculty)
facultyRouter.get("/all",facultyList);
facultyRouter.post("/removefaculty",auth,removeFaculty);
facultyRouter.post("/updatefaculty", upload.single('fimage'), auth, updateFaculty);


export default facultyRouter;