import { Variants } from "framer-motion";

export const Navlinks = [
  { id: 1, url: '#home', label: 'Home' },
  { id: 2, url: '#resume', label: 'Resume' },
  { id: 3, url: '#services', label: 'Services' },
  { id: 4, url: '#portfolio', label: 'Portfolio' },
  { id: 5, url: '#work', label: 'Work' },
  { id: 6, url: '#contact', label: 'Contact' },
];



// LOGO when restart
export const logoContainerVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

//hover logo and icon 
export const iconHover = {
  rotate: 360,
  scale: 1.2,
  filter: "hue-rotate(90deg)",
  transition: {
    ease: "easeInOut",
  
    stiffness: 200,
    damping: 10,
  },
};

// hover link 
export const linkHover = {
  scale: 1.1,
  transition: { type: "spring", stiffness: 300, damping: 10 },
};

// click and hover buttons
export const buttonHover = { scale: 1.1 };
export const buttonTap = { scale: 0.9 };
