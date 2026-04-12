import mongoose from 'mongoose';

const trailLessonSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type:String, required:true},
    phone:{type:Number,required:true},
    course:{type: String,required:true},
    traildate:{type: Date, required: true},
    
});

const TrailLesson = mongoose.model('trailLesson',trailLessonSchema)

export default TrailLesson;

