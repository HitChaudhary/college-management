import express from 'express';
import auth from '../middleware/auth.js';
import { removeTrail, trailLessonForm, trailLessonList } from '../controllers/trailLessonController.js';


const trailLessonRouter = express.Router();

trailLessonRouter.post('/traillessonform',trailLessonForm)
trailLessonRouter.get('/all',trailLessonList);
trailLessonRouter.post('/remove',auth,removeTrail);


export default trailLessonRouter;