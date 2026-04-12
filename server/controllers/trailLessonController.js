import fs from 'fs';
import TrailLesson from '../modules/trailLesson.js';

export const trailLessonForm = async (req, res) => {
    try {

        const { name, course, email, phone, traildate } = req.body;


        if (!name || !course || !email || !phone || !traildate) {
            return res.json({ success: false, message: "Missing field" });
        }

        await TrailLesson.create({
            name,
            course,
            email,
            phone,
            traildate
        })

        res.json({
            success: true,
            message: "Form submitted successfully. we will Connect you in 24 hours"
        });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }

}



export const trailLessonList = async (req, res) => {
    try {
        const trailLessons = await TrailLesson.find()
        res.json({ success: true, trailLessons })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

export const removeTrail = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res.json({ success: false, message: "ID required" });
    }

    const deleted = await TrailLesson.findByIdAndDelete(_id);

    if (!deleted) {
      return res.json({ success: false, message: "Not found" });
    }

    res.json({ success: true, message: " removedtrailform successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};