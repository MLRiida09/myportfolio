import { Variants } from "framer-motion";  
import myPic from './mypic.jpg';

//icons===========================================
import { FiDownload, FiMail } from 'react-icons/fi';
import {
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp,
  FaReact, FaLaravel, FaDocker, FaWindows, FaLinux,
  FaGraduationCap
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiTailwindcss, SiDjango,
  SiExpress, SiGit, SiGithub, SiFirebase
} from "react-icons/si";





//nav link on Navbar
export const Navlinks = [
  { id: 1, url: '/', label: 'Home' },
  { id: 2, url: '/About', label: 'About' },
  { id: 3, url: '/projects', label: 'Projects' },
  { id: 4, url: '/services', label: ' Services' },
  { id: 5, url: '/blog', label: 'Blog ' },
  
];

 //==============NAV-LINKS===========================
// LOGO when restart
export const logoContainerVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Hover logo and icon 
export const iconHover = {
  rotate: 360,
  scale: 1.2,
  filter: "hue-rotate(90deg)",
  transition: {
    type: "spring" as const,
    stiffness: 200,
    damping: 10,
  },
};

// Hover link 
export const linkHover = {
  scale: 1.1,
  transition: { 
    type: "spring" as const, 
    stiffness: 300, 
    damping: 10 
  },
};

//link click 

export const linkTap = {
  scale: 0.95,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 15
  },
};

// Click and hover buttons
export const buttonHover = { 
  scale: 1.1,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};

export const buttonTap = { 
  scale: 0.9,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};

//==================================================================

// Hero Section Data

export const heroAssets = {
  userPic: myPic,
  title: "Rida Mellal",
  subtitle: "Full Stack Developer",
  description:
  "Welcome to my personal page, where you’ll find my skills, services, portfolio, and a few articles I’ve written.",
  badge: {
    text: "Available for work",
    locationIcon: "HiOutlineLocationMarker", 
  },
  buttons: [
    {
      text: "Résumé",
      icon: FiDownload,
      style: "bg-blue-600 hover:bg-blue-700 text-white",
      link: "#cv",
    },
    {
      text: "Get In Touch",
      icon: FiMail,
      style: "border border-gray-600 hover:border-blue-400 text-white",
      link: "#contact",
    },
  ],
};

//============================================================================

// بيانات الهيرو (يمكنك تعديلها أو عدم استخدامها هنا)

// 🏅 الشهادات
export const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    year: "2024",
    icon: FaGraduationCap,
  },
  {
    title: "Bachelor’s Degree in Automation and Industrial Computing",
    issuer: "Blida 1 University",
    year: "2026",
    icon: FaGraduationCap,
  },
];

// 🧠 المهارات (Skills)
export const skills = {
  languages: [
    { icon: FaHtml5, color: "text-orange-500" },
    { icon: FaCss3Alt, color: "text-blue-500" },
    { icon: FaJs, color: "text-yellow-400" },
    { icon: SiTypescript, color: "text-blue-600" },
    { icon: FaPython, color: "text-green-400" },
    { icon: FaPhp, color: "text-indigo-500" },
  ],
  frameworks: [
    { icon: FaReact, color: "text-cyan-400" },
    { icon: SiNextdotjs, color: "text-gray-200" },
    { icon: SiTailwindcss, color: "text-teal-400" },
    { icon: FaLaravel, color: "text-red-500" },
    { icon: SiDjango, color: "text-green-500" },
    { icon: SiExpress, color: "text-gray-300" },
  ],
  tools: [
    { icon: SiGit, color: "text-orange-400" },
    { icon: SiGithub, color: "text-white" },
    { icon: FaDocker, color: "text-blue-400" },
    { icon: SiFirebase, color: "text-yellow-400" },
    { icon: FaWindows, color: "text-blue-500" },
    { icon: FaLinux, color: "text-yellow-500" },
  ],
};