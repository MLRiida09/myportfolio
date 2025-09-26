//icons from react :
import { Variants } from "framer-motion"; 
import { FiDownload, FiMail } from 'react-icons/fi'; 
import {FaGraduationCap} from "react-icons/fa"; 
// Icons for Services Cards : 
import 
{ PanelsTopLeft ,ShoppingCart
   ,Smartphone  ,FileSliders,
   LucideIcon
 } from 'lucide-react';


//my photo : 
import myPic from './mypic.jpg';

//icons About page :
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

//Contact me icons :
import 
{ FaSquareUpwork, FaLinkedin, FaGithub, } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { SiWellfound } from "react-icons/si";

//admin panel icons :


//nav link on Navbar
export const Navlinks = [
  { id: 1, url: '/', label: 'Home' },
  { id: 2, url: '/About', label: 'About' },
  { id: 4, url: '/Services', label: ' Services' },
  { id: 3, url: '/Projects', label: 'Projects' },
  { id: 5, url: '/Blog', label: 'CodeTips' },
];



// Navbar LOGO when restart
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

// hover buttons
export const buttonHover = { 
  scale: 1.1,
  transition: {
    type: "spring" as const,
    stiffness: 400,
    damping: 10
  }
};
 //click buttons
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
  
  buttons: [
    {
      text: "Résumé",
      icon: FiDownload,
      style: "border border-gray-600 hover:border-gray-400 text-white hover:bg-gray-800/20",
      link: "/cv.pdf",
    },
    {
      text: "Get In Touch",
      icon: FiMail,
      style: "border border-gray-600 hover:border-gray-400 text-white hover:bg-gray-800/20",
      link: "/contact",
    },
  ],
};


// Maze configuration - 1=wall, 0=path, 2=start, 3=obstacle, 4=goal, 5=quit

export const maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1], 
    [2,0,0,0,1,0,0,0,0,0,3,1],
    [1,1,1,0,1,0,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,1,0,0,0,1], 
    [1,0,1,1,1,1,0,0,0,1,3,1],
    [1,3,1,0,0,0,0,1,1,1,1,1], 
    [1,1,1,0,1,1,1,1,0,0,0,1], 
    [1,0,0,0,0,0,0,0,0,1,0,1],
    [1,0,1,0,1,1,1,0,1,1,4,0],
    [1,0,0,0,1,1,1,0,0,1,1,1],
    [1,1,1,1,1,1,1,1,5,1,1,1],
  ];

export const obstacles = ["Anxiety", "Overthinking", "Self-Doubt"];


export const social = [
    { icon: FaSquareUpwork, label:"Upwork", link:"https://www.upwork.com/freelancers/~01296c693cf92bee69" },
    { icon: FaLinkedin, label:"LinkedIn", link:"https://www.linkedin.com/in/rida-mellal-203989371/" },
    { icon: FaGithub,   label:"GitHub", link: "https://github.com/MLRiida09" },
    { icon: FaStackOverflow,label:"StackOverflow", link: "https://stackoverflow.com/users/31533786/rida-mellal" },
    { icon: SiWellfound,    label:"wellfound", link:"https://wellfound.com/u/rida-mellal-2" },
  ];

//============================================================================
//About DATA : 

export const About ={
  description : (
    <>
    , I live in Algeria and have a strong passion for <span className="font-bold">developing applications and websites</span>, whether as a freelancer or an employee.
    I have excellent front-end skills, solid back-end and database knowledge using various libraries and languages, and I can work effectively both independently and as part of a team. <br />
    I also have two academic degrees,<span className="font-bold">a Bachelor&apos;s and a Master&apos;s</span> . You can view the details of my skills and degrees in my résumé. <br/>
    Feel free to contact me anytime.
    </>
  )
}

// Certificates Data 
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
    year: "2024",
    icon: FaGraduationCap,
  },
];

// Skills Data : 
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

// Services Data :




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
    title: "Web Design & Development",
    description:
      "Designing and building websites that look great and work well for users.",
    description2:
      "Crafting visually appealing and fully functional websites with responsive layouts, smooth navigation, and optimized performance across all devices.",
    icon: PanelsTopLeft,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: 2,
    title: "E-commerce Solutions",
    description:
      "Building online stores that are safe, easy to manage, and ready to grow with your business.",
    description2:
      "Creating secure and scalable e-commerce platforms with seamless payment integration, advanced product management, and detailed sales analytics.",
    icon: ShoppingCart,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Creating mobile applications that work seamlessly on different devices and are easy to use.",
    description2:
      "Building cross-platform mobile apps with React Native, delivering high performance, smooth navigation, and intuitive user interfaces.",
    icon: Smartphone,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
  {
    id: 4,
    title: "Custom Dashboards & Admin Panels",
    description:
      "Creating custom dashboards that make it easier to manage data and gain useful insights.",
    description2:
      "Developing tailored dashboards with real-time data visualization, advanced user management, and detailed business analytics.",
    icon: FileSliders,
    color: "text-gray-400",
    bgGradient: "bg-gradient-to-br from-gray-800 to-gray-900",
  },
];


export type { LucideIcon };


//Project Data : 

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string ;
  liveUrl: string;
  sourceUrl: string;
  category?: string;
  
}

const comingSoon =
  "https://imgs.search.brave.com/bs7ePX0v38cQWYmy04xfXlvDi2SPrAFTNE5yi-QebZE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQz/MzQ1MDQwMS92ZWN0/b3IvdmludGFnZS1j/b21pbmctc29vbi1s/YWJlbC1pbi1ncnVu/Z2Utc3R5bGUuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPXgz/Unk1c25mbVlUX2ZN/YjRkZnFCQTYtaGhr/ZTlNbThwOFBhOWNu/elY5TlU9";


export const projects: Project[] = [
  
  {
    id: 1,
    title: "landing page portfolio ",
    description:"A portfolio landing page designed using Next.js, Tailwind CSS, and JavaScript, featuring 5 well-structured and neatly styled sections. The project is 90% complete and currently in its final stages.",
    image: "/images/landingpage.PNG",
    liveUrl: "https://landing-page-nine-alpha-42.vercel.app/",
    sourceUrl: "https://github.com/MLRiida09/landing-page-portfolio",
    category:"Next.js"
  },
  
];

// Blogs Data : 

export interface Blog {
  [x: string]: string | undefined;
  id : string ;
  title : string ;
  description : string ; 
  content : string ;
  image : string ; 
  category?: string;
}

export const blogs: Blog[] = [
] ;



