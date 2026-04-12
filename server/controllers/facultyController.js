import fs from 'fs';
import path from 'path';
import imageKit from '../configs/imagekit.js';
import Faculty from '../modules/faculty.js';

export const addFaculty = async (req, res) => {
    try {
        const { name, role, department, exprience, qualification } = JSON.parse(req.body.faculty);
        const imageFile = req.file;

        // check if all field are present

        if (!name || !role || !department || !exprience || !qualification || !imageFile) {
            return res.json({ success: false, message: "Missing field" })
        }


        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/College/faculty"
        })

        // optimiziton on iame to iamge kit

        const optimizitonImageUrl = imageKit.url({
            path: response.filePath,
            transformation: [
                {
                    width: 400,
                    height: 600,
                    quality: "auto",
                    format: 'webp',
                    focus:"auto"
                },
            ],
        });
        const fimage = optimizitonImageUrl;

        await Faculty.create({
            name, role, qualification, exprience, department, fimage
        })
        res.json({ success: true, message: "faculty added successfully" })
    } catch (error) {
        res.json({ success: false, message: error.message && "hello" })

    }
}

export const facultyList = async (req, res) => {
    try {
        const faculties = await Faculty.find()
        res.json({ success: true, faculties })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const removeFaculty = async (req, res) => {
  try {
    // Ab hum body se '_id' receive karenge
    const { _id } = req.body;

    if (!_id) {
      return res.json({
        success: false,
        message: "Faculty ID is required"
      });
    }

    // findByIdAndDelete sabse fast aur safe tarika hai
    const result = await Faculty.findByIdAndDelete(_id);

    if (!result) {
      return res.json({
        success: false,
        message: "Faculty member not found"
      });
    }

    res.json({
      success: true,
      message: "Faculty removed successfully from database"
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message
    });
  }
};



export const updateFaculty = async (req, res) => {
    try {
        const { _id, name, role, department, exprience, qualification } = JSON.parse(req.body.faculty);
        const imageFile = req.file;

        // Purana faculty data find karein
        const faculty = await Faculty.findById(_id);
        if (!faculty) {
            return res.json({ success: false, message: "Faculty not found" });
        }

        let fimage = faculty.fimage; // Default: purani image hi rakhenge

        // Agar Admin ne nayi image upload ki hai
        if (imageFile) {
            const fileBuffer = fs.readFileSync(imageFile.path);
            const response = await imageKit.upload({
                file: fileBuffer,
                fileName: imageFile.originalname,
                folder: "/College/faculty"
            });

            // ImageKit Optimization URL
            fimage = imageKit.url({
                path: response.filePath,
                transformation: [{
                    width: 400,
                    height: 600,
                    quality: "auto",
                    format: 'webp',
                    focus: "auto"
                }],
            });
        }

        // Database mein update karein
        await Faculty.findByIdAndUpdate(_id, {
            name, role, department, exprience, qualification, fimage
        });

        res.json({ success: true, message: "Faculty updated successfully" });

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}