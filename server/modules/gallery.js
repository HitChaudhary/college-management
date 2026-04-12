import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  gimage: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String }, 
  uploadedAt: {
    type: Date,
    default: Date.now
  }
});

const Gallery = mongoose.model("Gallery", gallerySchema);

export default Gallery;
