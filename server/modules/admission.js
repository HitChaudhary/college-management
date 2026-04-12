import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    course: { type: String, required: true },
    address: { type: String, required: true },
    // New Fields Added Below
    twelfthPercentage: { type: Number, required: true },
    twelfthStream: { type: String, required: true },
    gender: { type: String, required: true }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Admission = mongoose.model('admission', admissionSchema);
export default Admission;