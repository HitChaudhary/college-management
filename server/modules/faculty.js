import mongoose from 'mongoose';

const facultySchema = new mongoose.Schema({
    name:{type: String, required: true},
    role:{type: String},
    department:{type: String},
    exprience:{type: String},
    qualification:{type: String},
    fimage:{type:String},
});

const Faculty = mongoose.model('faculty',facultySchema)

export default Faculty;

