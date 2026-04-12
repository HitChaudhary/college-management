import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js';
import adminRouter from './Routes/adminRoutes.js';
import facultyRouter from './Routes/facultyRoutes.js';
import galleryRouter from './Routes/galleryRoutes.js';
import admissionRouter from './Routes/admissionRoutes.js';
import trailLessonRouter from './Routes/trailLessonRoutes.js';


const app = express();

await connectDB();

//middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


// Routes
app.get('/',(req, res)=> res.send("API is Running"))
app.use('/api/admin', adminRouter)
app.use('/api/faculty', facultyRouter)
app.use('/api/gallery',galleryRouter)
app.use('/api/admission', admissionRouter)
app.use('/api/traillesson', trailLessonRouter)


const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log('server is running on ' + PORT)
});

export default app;