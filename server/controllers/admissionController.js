import fs from 'fs';
import Admission from '../modules/admission.js';


export const admissionForm = async (req, res) => {
  try {
    const { name, course, email, phone, address, twelfthPercentage, twelfthStream, gender } = req.body;

    // Validation for new fields
    if (!name || !course || !email || !phone || !address || !twelfthPercentage || !twelfthStream || !gender) {
      return res.json({ success: false, message: "All fields are required" });
    }

    await Admission.create({
      name,
      course,
      email,
      phone,
      address,
      twelfthPercentage,
      twelfthStream,
      gender
    });

    res.json({
      success: true,
      message: "Application submitted! Our team will connect with you within 24 hours."
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


export const admissionList = async (req, res) => {
    try {
        const admissions = await Admission.find()
        res.json({ success: true, admissions })
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}



export const removeAdmission = async (req, res) => {
  try {
    const { _id } = req.body;

    if (!_id) {
      return res.json({ success: false, message: "ID required" });
    }

    const deleted = await Admission.findByIdAndDelete(_id);

    if (!deleted) {
      return res.json({ success: false, message: "Not found" });
    }

    res.json({ success: true, message: "Admission removed successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
