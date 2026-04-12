import React, { useState } from "react";
import toast from "react-hot-toast";
import { useCollegeContext } from "../Context/Context";

const AdmissionsPage = () => {
  const { axios } = useCollegeContext();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("BCA");
  const [address, setAddress] = useState("");
  // New States
  const [twelfthPercentage, setTwelfthPercentage] = useState("");
  const [twelfthStream, setTwelfthStream] = useState("Science");
  const [gender, setGender] = useState("Male");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);

      const admissionData = {
        name, email, phone, course, address,
        twelfthPercentage, twelfthStream, gender
      };

      const { data } = await axios.post("/api/admission/admissionform", admissionData);

      if (data.success) {
        toast.success(data.message);
        // Reset all states
        setName(""); setEmail(""); setPhone(""); setAddress("");
        setTwelfthPercentage(""); setCourse("BCA");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <section className="mb-14 text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-green-600">Admission Form</h1>
        <p className="text-gray-600">Fill in your academic details to apply.</p>
      </section>

      <section className="bg-white border border-gray-100 rounded-3xl shadow-lg p-6 sm:p-10 max-w-4xl mx-auto">
        <form onSubmit={onSubmitHandler} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          
           <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
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
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
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
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

         

          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              rows="3"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>


          {/* New Field: Gender */}
          <div>
            <label className="text-sm font-medium text-gray-700">Gender</label>
            <select
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* New Field: 12th Stream */}
          <div>
            <label className="text-sm font-medium text-gray-700">12th Stream</label>
            <select
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
              value={twelfthStream}
              onChange={(e) => setTwelfthStream(e.target.value)}
            >
              <option>Science</option>
              <option>Commerce</option>
              <option>Arts</option>
            </select>
          </div>

          {/* New Field: 12th Percentage */}
          <div>
            <label className="text-sm font-medium text-gray-700">12th Percentage (%)</label>
            <input
              type="number"
              placeholder="e.g. 85"
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
              value={twelfthPercentage}
              onChange={(e) => setTwelfthPercentage(e.target.value)}
              required
            />
          </div>

          {/* Course selection stays here */}
          <div>
            <label className="text-sm font-medium text-gray-700">Course Applying For</label>
            <select
              className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm focus:ring-2 focus:ring-green-500"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            >
              <option>BCA</option>
              <option>MSc IT</option>
              <option>MSW</option>
            </select>
          </div>

         

          <div className="sm:col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 disabled:bg-green-300 text-white px-10 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              {isSubmitting ? "Processing..." : "Submit Application"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AdmissionsPage;