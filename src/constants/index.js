import cropzyImg from "../assets/images/cropzy.png";
import IoTImg from "../assets/images/iot.png";
// import homelabImg from "../assets/images/homelab.png";


// Text Type
export const rotating_words = [
  "Infocomm & Security Student",
  "Cybersecurity Enthusiast",
  "Full-Stack Developer",
];


// Timeline
export const experience = [
  {
    initials: "UOB",
    role: "Infrastructure Analyst Intern",
    org: "United Overseas Bank",
    period: "Mar 2026 - Present",
    bullets: [
      "Develop dashboards using `React.js` , `Django`.",
      // "Engineered and maintained malware unpacking, deobfuscation, and decompilation tools, reducing manual analysis time by over **10x**.",
      "Design and maintain monitoring dashboards to visualise system health, capacity, and performance KPI",
      "Enhance existing dashboards for better visibility and usability",
      "Automate repetitive monitoring tasks using `Python`. ",
      "Work with stakeholders to understand dashboard requirements "
    ],
  },
  {
    initials: "NYP",
    role: "Infocomm & Security Student",
    org: "Nanyang Polytechnic",
    period: "Mar 2025 - Mar 2026",
    bullets: [
      "Awards: Director's List Y1 S2, Y2 S1, Y2 S2. Edusave Certificate of Academic Achievement 2025.",
      "NYP InfoSec Club Subcommittee.",
    ],
  },
  {
    initials: "CCKSS",
    role: "Student",
    org: "Chua Chu Kang Secondary School",
    period: "Aug 2024 - Feb 2025",
    bullets: [
      "CCA: Badminton",
      "Chairperson for Values in Action (VIA) Projects in Badminton CCA (2020-2023)",
      "Awards: Edusave Good Progress Award (2023)",
      // "Represented Singapore at the [Global Cybersecurity Camp 2025](https://example.com/gcc-2025), winning the \"Best Project\" award",
    ],
  },
];


// Project
export const projects = [
  {
    image: cropzyImg,
    title: "Cropzy",
    description: "An all-in-one agricultural management platform designed to optimize  productivity while prioritizing sustainbility, built with Python Flask and featuring product management, crop calendars, and secure authentication with JWT and Face ID-based MFA.",
    tags: ["Python", "Flask", "MySQL"],
    link: "https://github.com/Diablo2912/NYP-Y2-S1-System-Security-Project",
  },
  {
    image: IoTImg,
    title: "Smart Gym",
    description: "Smart Gym for Schools is an IoT-based gym management system designed to streamline and enhance fitness facility operations. Built using C# and using Raspberry Pi with Features such as Attendance Analytics, Credit Score, Email & SMS Notifications, Active Session, Account Management.",
    tags: ["Raspberry Pi", "C#", "WinForm", "MySQL"],
    link: "https://github.com/Diablo2912/NYP-Y2-S2-IoT-Project",
  },
  {
    image: "/images/project-three.png",
    title: "Homelab",
    description: "More coming soon.",
    tags: ["Raspberry Pi", "Homelab"],
    link: "https://app.notion.com/p/Homelab-3cce0722d853805ca127df44046bd519?source=copy_link",
  },
];

// Tech Stack 
export const techStack = [
  {
    category: "Languages",
    items: ["Python", "JavaScript","C#"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React",  "Django", "Flask", "ASP.NET", "WinForm"],
  },
  {
    category: "Security & Tools",
    items: ["Docker", "Cisco Packet Tracer", "Windows", "Linux"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Cloudflare", "Git", "Linux", "CI/CD"],
  },
];

// Awards
export const awards = [
  "NYP Director's List Y1 S2, Y2 S1, Y2 S2",
  "Edusave Certificate of Academic Achievement 2025",
];