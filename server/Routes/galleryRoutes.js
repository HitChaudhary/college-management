import express from 'express'
import upload from '../middleware/multer.js';
import auth from '../middleware/auth.js';
import { galleryList, removePhoto, uploadPhoto } from '../controllers/galleryController.js';

const galleryRouter = express.Router();

galleryRouter.post("/upload",upload.single('gimage'),auth, uploadPhoto)
galleryRouter.get("/allphotos",galleryList);
galleryRouter.post("/removephoto",auth,removePhoto);


export default galleryRouter;