import express from 'express'
import auth from '../middleware/auth.js';
import { admissionForm, admissionList, removeAdmission } from '../controllers/admissionController.js';

const admissionRouter = express.Router();

admissionRouter.post("/admissionform", admissionForm)
admissionRouter.get("/all",admissionList);
admissionRouter.post("/remove",auth, removeAdmission)



export default admissionRouter;