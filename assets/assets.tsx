//icons from react :
import { Variants } from "framer-motion";  
import { FiDownload, FiMail } from 'react-icons/fi';
import {FaGraduationCap} from "react-icons/fa";
//my photo : 
import myPic from './mypic.jpg';
//icons:
//lagus :
import FaHtml5 from './html5.svg'
import FaCss3Alt from './css3.svg'
import FaJs from './javascript.svg'
import FaPython from './python.svg'
import FaPhp from './php.svg'
import SiTypescript from './typescript.svg'
//farmworks : 
import FaReact from './react.svg' 
import SiNextdotjs from './nextjs.svg'
import SiTailwindcss from './tailwindcss.svg'
import FaLaravel from './laravel.svg'
import SiDjango from './django.svg'
import SiExpress from './express.svg'
//tools&platforms: 
import SiGit from './git.svg'
import SiGithub from './github.svg'
import FaDocker from './docker.svg'
import SiFirebase from './firebase.svg'
import FaLinux from './linux.svg'
import FaWindows from './windows.svg'

//services icons : 
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaPaintBrush,
  } from "react-icons/fa";


//nav link on Navbar
export const Navlinks = [
  { id: 1, url: '/', label: 'Home' },
  { id: 2, url: '/About', label: 'About' },
  { id: 3, url: '/projects', label: 'Projects' },
  { id: 4, url: '/Services', label: ' Services' },
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
  "Welcome to my personal page, where you'll find my skills, services, portfolio, and a few articles I've written.",
  badge: {
    text: "Available for work",
    locationIcon: "HiOutlineLocationMarker", 
  },
  buttons: [
    {
      text: "Résumé",
      icon: FiDownload,
      style: "border border-gray-600 hover:border-gray-400 text-white hover:bg-gray-800/20",
      link: "#cv",
    },
    {
      text: "Get In Touch",
      icon: FiMail,
      style: "border border-gray-600 hover:border-gray-400 text-white hover:bg-gray-800/20",
      link: "#contact",
    },
  ],
};

//============================================================================

// 🏅 الشهادات
export const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "FreeCodeCamp",
    year: "2024",
    icon: FaGraduationCap,
  },
  {
    title: "Bachelor's Degree in Automation and Industrial Computing",
    issuer: "Blida 1 University",
    year: "2026",
    icon: FaGraduationCap,
  },
];

// 🧠 المهارات (Skills)
export const skills = {
  languages: [
    { icon: FaHtml5},
    { icon: FaCss3Alt},
    { icon: FaJs},
    { icon: SiTypescript},
    { icon: FaPython},
    { icon: FaPhp},
  ],
  frameworks: [
    { icon: FaReact},
    { icon: SiNextdotjs},
    { icon: SiTailwindcss},
    { icon: FaLaravel},
    { icon: SiDjango},
    { icon: SiExpress},
  ],
  tools: [
    { icon: SiGit},
    { icon: SiGithub},
    { icon: FaDocker},
    { icon: SiFirebase},
    { icon: FaWindows},
    { icon: FaLinux},
  ],
};

//ServicesData :

export const  services = [
    {
      id: 1,
      title: "Web Development",
      icon: FaLaptopCode,
      color: "text-blue-500",
      description:
        "Modern, responsive websites built with React, Next.js, and Tailwind CSS. Fast, secure, and SEO-friendly solutions.",
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: FaMobileAlt,
      color: "text-green-500",
      description:
        "Cross-platform mobile apps for Android and iOS using React Native or Flutter. Smooth and user-friendly experiences.",
    },
    {
      id: 3,
      title: "E-Commerce Stores",
      icon: FaShoppingCart,
      color: "text-yellow-500",
      description:
        "Full-featured online stores with secure payment systems and inventory management. Scalable and professional dashboards.",
    },
    {
      id: 4,
      title: "UI/UX Design",
      icon: FaPaintBrush,
      color: "text-purple-500",
      description:
        "Attractive, intuitive user interfaces. Enhanced user experience tailored to your brand’s identity.",
    },
  ];