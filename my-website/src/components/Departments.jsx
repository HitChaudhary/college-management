// src/components/Departments.jsx
import React from 'react';
import { 
  Code2, 
  Database, 
  Cpu, 
  Globe, 
  Users, 
  BookOpen,
  TrendingUp,
  HeartHandshake 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Departments = () => {
  const navigate = useNavigate();
  const departments = [
    {
      id: 1,
      title: "MSc (CA & IT)",
      subtitle: "MSc in Information Technology & Computer Application",
      description: "Advanced Computing, Data analysis, AI & Machine learning",
      icon: <Cpu className="w-8 h-8" />,
      color: "green",
      features: [
        { icon: <Code2 className="w-5 h-5" />, text: "Programming 🖥" },
        { icon: <TrendingUp className="w-5 h-5" />, text: "Data Science & ML 📊" },
        { icon: <Database className="w-5 h-5" />, text: "System Design" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Projects 💡" }
      ],
       onclick:()=>navigate("/department/msc"),
    },
    {
      id: 2,
      title: "BCA",
      subtitle: "Bachelor of Computer Application",
      description: "Foundation in Computer Programming and Web development",
      icon: <Code2 className="w-8 h-8" />,
      color: "blue",
      features: [
        { icon: <Code2 className="w-5 h-5" />, text: "C++, JAVA 💻" },
        { icon: <Globe className="w-5 h-5" />, text: "Web Tech 🌐" },
        { icon: <Database className="w-5 h-5" />, text: "DBMS" },
        { icon: <BookOpen className="w-5 h-5" />, text: "Projects 💡" }
      ],
      onclick:()=>navigate("/department/bca"),

    },
    {
      id: 3,
      title: "MSW",
      subtitle: "Master in Social Work",
      description: "Leadership in Social work, Counseling And Community development.",
      icon: <Users className="w-8 h-8" />,
      color: "purple",
      features: [
        { text: "Human Rights & Ethics" },
        { icon: <HeartHandshake className="w-5 h-5" />, text: "Community Services 🤝" },
        { text: "Social Research" },
        { text: "NGO Management 👥" }
      ],
      onclick:()=>navigate("/department/msw"),
    }
  ];

  const colorClasses = {
    green: "bg-green-100 text-green-800 border-green-200",
    blue: "bg-blue-100 text-blue-800 border-blue-200",
    purple: "bg-purple-100 text-purple-800 border-purple-200"
  };

  const iconBgClasses = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    purple: "bg-purple-500"
  };

  return (
    <section id="departments" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">DEPARTMENTS</h2>
          <p className="text-gray-600 text-lg">
            Evergreen College offers diverse academic departments focused on Innovation. 
            Each program is designed to equip students with the skills and knowledge needed 
            for success in today's dynamic world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div 
              key={dept.id} 
              className={`rounded-2xl border-2 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${colorClasses[dept.color]}`}
            >
              <div className="flex items-center mb-6">
                <div className={`${iconBgClasses[dept.color]} w-14 h-14 rounded-xl flex items-center justify-center mr-4`}>
                  <div className="text-white">
                    {dept.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{dept.title}</h3>
                  <p className="text-sm opacity-80">{dept.subtitle}</p>
                </div>
              </div>

              <p className="mb-6 font-medium">{dept.description}</p>

              <ul className="space-y-3">
                {dept.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    {feature.icon && <span className="mr-3">{feature.icon}</span>}
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              <button   className={`mt-8 w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                dept.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                dept.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                'bg-purple-600 hover:bg-purple-700 text-white'
              }` } onClick={dept.onclick}
                  >
                    
                Learn More
                
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;