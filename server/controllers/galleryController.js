import fs from 'fs';
import imageKit from '../configs/imagekit.js';
import Gallery from '../modules/gallery.js';

export const uploadPhoto = async (req, res) => {
    try {
        // Destructure subtitle here
        const { title, subtitle, uploadedAt } = JSON.parse(req.body.gallery);
        const imageFile = req.file;

        if (!title || !imageFile) {
            return res.json({ success: false, message: "Missing required fields" })
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/College/Gallery"
        })

        const optimizitonImageUrl = imageKit.url({
            path: response.filePath,
            transformation: [{ width: "auto", height: "auto", quality: "auto", format: 'webp' }],
        });

        const gimage = optimizitonImageUrl;

        // Save subtitle to the database
        await Gallery.create({
            title,
            subtitle, // Added here
            gimage,
            uploadedAt: uploadedAt ? new Date(uploadedAt) : undefined,
        });

        res.json({ success: true, message: "Photo uploaded Successfully." })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}


export const galleryList = async (req, res) => {
    try {
        const photos = await Gallery.find()
        res.json({ success: true, photos })
    } catch (error) {
        res.json({ success: false, message: error.message })

    }
}

export const removePhoto = async (req, res) => {
    try {
        const { _id } = req.body;

        const result = await Gallery.deleteOne({ _id });
        
        if (result.deletedCount === 0) {
            return res.json({
                success: false,
                message: "Photo not found"
            });
        }
        res.json({
            success: true,
            message: "Photo removed successfully"
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
}