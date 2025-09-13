import { Variants } from "framer-motion";  
import myPic from './mypic.jpg';
import { FiDownload, FiMail } from 'react-icons/fi';



//nav link on Navbar
export const Navlinks = [
  { id: 1, url: '#home', label: 'Home' },
  { id: 2, url: '#about', label: 'About' },
  { id: 3, url: '#projects', label: 'Projects' },
  { id: 4, url: '#services', label: ' Services' },
  { id: 5, url: '#blog', label: 'Blog ' },
  
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
    "I’m a web and app developer from Algeria, passionate about building modern and helpful websites and apps that make everyday life easier.",
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
