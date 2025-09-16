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

import { 
  Code, Globe, 
  ShoppingCart, Cloud,
  LucideIcon } from "lucide-react";


export interface Service {
  id: number;
  title: string;
  description: string;
  description2: string;
  icon: LucideIcon;
  color: string;
  bgGradient: string;

}

export const services: Service[] = [
 
  {
    id: 1,
    title: "Website Development",
    description:
      "I design websites with a beautiful and unique front-end style, and I can draw inspiration from other designs. I also have solid knowledge of databases and back-end development."
,
    description2:
      "Professional and responsive websites built with modern technologies and best practices.",
    icon: Code,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: 2,
    title: "Web Applications",
    description:
      "Custom web applications tailored to your business needs, ensuring performance and scalability.",
    description2:
      "Professional and responsive websites built with modern technologies and best practices.",  
    icon: Globe,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: 3,
    title: "E-commerce Platforms",
    description:
      "End-to-end e-commerce solutions with secure payment gateways and smooth user experiences.",
    description2:
      "Professional and responsive websites built with modern technologies and best practices.",
    icon: ShoppingCart,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: 4,
    title: "Cloud Integration",
    description:
      "Seamless cloud integration services to enhance scalability, security, and performance.",
    description2:
      "Professional and responsive websites built with modern technologies and best practices.",
    icon: Cloud,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
];

export type { LucideIcon };

