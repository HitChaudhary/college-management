// src/components/TrialLesson.jsx
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useCollegeContext } from "../Context/Context";
import { CheckCircle, Clock, Users, BookOpen } from "lucide-react";

const TrialLesson = () => {
  const { axios } = useCollegeContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("BCA");
  const [traildate, setTrailDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !course || !traildate) {
      toast.error("All fields are required");
      return;
    }

    try {
      setIsSubmitting(true);

      const trialData = {
        name,
        email,
        phone,
        course,
        traildate
      };

      const { data } = await axios.post(
        "/api/traillesson/traillessonform",
        trialData
      );

      if (data.success) {
        toast.success(data.message);
        setName("");
        setEmail("");
        setPhone("");
        setCourse("BCA");
        setTrailDate("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: <BookOpen className="w-5 h-5" />, text: "Experience our teaching style" },
    { icon: <Users className="w-5 h-5" />, text: "Meet our supportive faculty" },
    { icon: <Clock className="w-5 h-5" />, text: "Explore modern curriculum" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Completely free, no obligation" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Trial Lesson
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join a free trial lesson and experience our teaching style firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">What You'll Experience</h3>

            <div className="space-y-4 mb-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-green-600 mr-3 mt-1">
                    {item.icon}
                  </div>
                  <p className="text-gray-700">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">
              Reserve Your Trial
            </h3>

            <form onSubmit={onSubmitHandler} className="space-y-5">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Course
                </label>
                <select
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                >
                  <option>BCA</option>
                  <option>MSc (CA & IT)</option>
                  <option>MSW</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-green-500"
                  value={traildate}
                  onChange={(e) => setTrailDate(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 disabled:bg-green-300 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                {isSubmitting ? "Submitting..." : "Reserve Trial"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrialLesson;
