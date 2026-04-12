// src/assets/data.js

import std1 from "../assetes/student1.jpg";
import std2 from "../assetes/student1.jpg";
import std3 from "../assetes/student1.jpg";
import std4 from "../assetes/student1.jpg";
import std5 from "../assetes/student1.jpg";

export const facultyMembers = [
    {
      id: 1,
      name: "Shailesh Patel",
      role: "Principal",
      department: "MSc (CA & IT) , BCA",
      experience: "15+ years",
      qualification: "PhD in Computer Science",
      imageColor: "bg-green-100"
    },
    {
      id: 2,
      name: "Ishvari Vanzara",
      role: "Senior Lecturer",
      department: "MSc (CA & IT) , BCA ",
      experience: "5+ years",
      qualification: "MCA",
      imageColor: "bg-blue-100"
    },
    {
      id: 3,
      name: "Nandini Bhanushali",
      role: "Junior Lecturer",
      department: "BCA",
      experience: "2+ years",
      qualification: "BCA",
      imageColor: "bg-purple-100"
    },
    {
      id: 4,
      name: "Punam Sagar",
      role: "senior Lecturer",
      department: "MSW",
      experience: "5+ years",
      qualification: "PhD in Social Service",
      imageColor: "bg-green-100"
    }
  ];


  

export const galleryData = {
  Events: [
    { title: "Seminar Program" },
    { title: "Cultural Festival" },
    { title: "Workshop Session" },
    { title: "Guest Lecture" },
  ],
  Rooms: [
    { title: "Computer Laboratory" },
    { title: "Smart Classroom" },
    { title: "Library Reading Area" },
    { title: "Seminar Hall" },
  ],
  Sports: [
    { title: "Annual Sports Day" },
    { title: "Indoor Games" },
    { title: "Outdoor Sports" },
    { title: "Team Practice Session" },
  ],
};


  export const facultyData = {
    "MSC IT": [
      {
      id: 1,
      name: "Shailesh Patel",
      role: "Principal",
      department: "MSc (CA & IT) , BCA",
      experience: "15+ years",
      qualification: "PhD in Computer Science",
      
    },
       {
      id: 2,
      name: "Ishvari Vanzara",
      role: "Senior Lecturer",
      department: "MSc (CA & IT) , BCA ",
      experience: "5+ years",
      qualification: "MCA",
      
    },
      {
      id: 3,
      name: "Nandini Bhanushali",
      role: "Junior Lecturer",
      department: "BCA",
      experience: "2+ years",
      qualification: "BCA",
      
    },
    ],
    BCA: [
      {
      id: 4,
      name: "Punam Sagar",
      role: "senior Lecturer",
      department: "MSW",
      experience: "5+ years",
      qualification: "PhD in Social Service",
      imageColor: "bg-green-100"
    },
      { name: "Faculty Name", role: "Assistant Professor" },
      { name: "Faculty Name", role: "Assistant Professor" },
    ],
    MSW: [
      { name: "Faculty Name", role: "Assistant Professor" },
      { name: "Faculty Name", role: "Assistant Professor" },
      
    ]
  };
  
// src/assets/data.js


export const bcaHighlights = [
  "3 Years Program",
  "Industry Oriented Curriculum",
  "Modern Computer Labs",
  "Experienced Faculty Team",
];

export const bcaLabs = [
  "Computer Programming Lab",
  "Web Development Lab",
  "Database Management Lab",
  "Project Development Lab",
  "High-Speed Internet Facility",
  "Digital Library Access",
];


export const topStudents = [
  {
    name: "Alex Johnson",
    score: "98.5%",
    image: std1,
  },
  {
    name: "Maria Garcia",
    score: "97.8%",
    image: std2,
  },
  {
    name: "David Kim",
    score: "97.2%",
    image: std3,
  },
  {
    name: "Ananya Patel",
    score: "96.9%",
    image: std4,
  },
  {
    name: "Rahul Shah",
    score: "96.4%",
    image: std5,
  },
];

export const missionVisionValues = [
  {
    title: "Mission",
    icon: "🎯",
    text: "To develop skilled IT professionals through quality education and hands-on learning.",
  },
  {
    title: "Vision",
    icon: "🌟",
    text: "To be a leading center of excellence in computer education and research.",
  },
  {
    title: "Values",
    icon: "🤝",
    text: "Integrity, innovation, excellence, teamwork, and social responsibility.",
  },
];


// Add these to your existing ../assetes/data file

// --- MSc (CA & IT) Data ---
export const mscHighlights = [
  "Advanced Cloud Architecture",
  "Cybersecurity Research Cell",
  "100% Placement Assistance",
  "Industry-Expert Mentors",
  "Full-Stack PG Framework",
  "Enterprise Software Dev"
];

export const mscLabs = [
  "Advanced Data Analytics Lab",
  "Cloud & DevOps Suite",
  "Cybersecurity & Forensic Lab",
  "AI & Machine Learning Hub",
  "Network Simulation Center",
  "Database Management Lab"
];

export const topStudentsMsc = [
  { name: "Aarav Sharma", score: "9.8 CGPA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aarav" },
  { name: "Ishani Gupta", score: "9.6 CGPA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ishani" },
  { name: "Rohan Varma", score: "9.5 CGPA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rohan" },
  { name: "Meera Nair", score: "9.4 CGPA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Meera" },
  { name: "Kevin D'souza", score: "9.3 CGPA", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin" }
];

// --- MSW Data ---
export const mswHighlights = [
  "400+ Hours Field Work",
  "Rural Integration Camp",
  "NGO Partnership Program",
  "Global Social Policy",
  "Human Rights Advocacy",
  "Mental Health Focus"
];

export const mswFieldWork = [
  "Medical & Psychiatric Social Work",
  "Family & Child Welfare",
  "Urban & Rural Community Dev",
  "Human Resource Management",
  "Correctional Administration",
  "Disaster Management"
];

export const topStudentsMsw = [
  { name: "Sarah Williams", score: "A+ Grade", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
  { name: "Priya Das", score: "A+ Grade", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" },
  { name: "Arjun Mehta", score: "A Grade", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun" },
  { name: "Sneha Rao", score: "A Grade", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha" },
  { name: "Rahul Singh", score: "A Grade", image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul" }
];