import React from "react";
import { missionVisionValues } from "../assetes/data";
import aboutimg from '../Images/contact_us_img.png'
import { useNavigate } from 'react-router-dom';

const AboutUsPage = () => {
    const navigate = useNavigate();
  
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 py-24">
          <span className="inline-block text-sm font-semibold text-indigo-600 mb-4">
            About Our Institution
          </span>

          <h1 className="text-5xl font-extrabold tracking-tight mb-6">
            Building Knowledge,<br className="hidden sm:block" />
            Shaping Futures
          </h1>

          <p className="max-w-3xl text-lg text-gray-600 leading-relaxed">
            We are committed to delivering quality education that blends
            academic excellence, ethical values, and practical learning.
            Our institution provides a disciplined and supportive environment
            where students grow into capable professionals.
          </p>
        </div>

        <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-60" />
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-4 py-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">
            About the Institution
          </h2>

          <p className="text-gray-600 leading-relaxed mb-5">
            Founded with the vision of empowering learners through education,
            our college focuses on delivering structured academic programs
            supported by experienced faculty and modern facilities.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We emphasize discipline, innovation, and continuous learning to
            ensure students are prepared for professional and societal
            responsibilities.
          </p>
        </div>

        <div className="relative">
          <div className="h-80 rounded-3xl shadow-xl flex items-center justify-center text-indigo-700 font-medium">
            <img src={aboutimg} alt="" />
          </div>
          <div className="absolute -inset-4 rounded-3xl border border-indigo-200/40 -z-10" />
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 py-28">
        <h2 className="text-4xl font-bold text-center mb-20">
          Why Choose Our Institution
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {[
            "Experienced Faculty",
            "Student-Focused Learning",
            "Modern Infrastructure",
            "Strong Academic Culture",
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-700 to-green-400 text-white flex items-center justify-center text-lg font-bold group-hover:scale-110 transition">
                {index + 1}
              </div>
              <p className="font-semibold text-gray-700">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-400 py-24">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <h2 className="text-3xl font-bold text-center mb-14">
            Institutional Highlights
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { label: "Years of Excellence", value: "5+" },
              { label: "Qualified Faculty", value: "10+" },
              { label: "Courses Offered", value: "3" },
              { label: "Successful Alumni", value: "1000+" },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-extrabold mb-2">
                  {stat.value}
                </p>
                <p className="text-sm opacity-90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Enrollment CTA */}
      <section className="relative bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-xl p-14 text-center">
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-60" />

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Begin Your Academic Journey With Us
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed mb-10">
              Admissions are open for eligible candidates who aspire to grow
              academically and professionally in a disciplined and supportive
              learning environment. Interested students are encouraged to apply
              through the official admission process.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-green-400 text-white font-semibold shadow-lgtransition-all duration-300 hover:shadow-2xl hover:scale-[1.02]" onClick={()=>navigate('/admission-page')}   >
                Enroll Now
              </button>

              <span className="self-center text-sm text-gray-500">
                For admission guidelines, contact the college office
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="grid  py-24 px-10 grid-cols-1 md:grid-cols-3 gap-10">
        {missionVisionValues.map((item, index) => (
          <div
            key={index}
            className="rounded-3xl  border border-gray-200 p-10 text-center shadow-sm hover:shadow-lg transition-all"
          >
            <div className="text-5xl mb-5">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default AboutUsPage;
