import Web from './assets/Logos/Web.png';
import Mobile from './assets/Logos/Mobile.png'
import UI from './assets/Logos/UI.png'
import Devops from './assets/Logos/Devops.png'
export const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact Us", href: "/contact" }
  ];

export const aboutItems = [
  {no:360,p:"Active Clients"},
  {no:3000,p:"Projects Delivered"},
  {no:23,p:"Countries Supported"}
]

export const serviveItems = [
  {title:"Web Development",icon:Web,p:"Creating responsive and interactive websites with modern technologies for seamless user experiences."},
  {title:"App Development",icon:Mobile,p:"Developing high-performance, cross-platform applications with user-friendly interfaces."},
  {title:"UI/UX Design",icon:UI,p:"Designing visually appealing interfaces and user-centric experiences for maximum usability."},
  {title:"DevOps",icon:Devops,p:"Streamlining processes with automated deployments for reliable and scalable software solutions."}
]

export const Pricingdetails ={
  "Basic" : {title:"Bug Fix",price:"5,823",p:"I will fix bug of your application for both backend and frontend",dt:"2-day delivery"},
  "Standard" : {title:"Develop and Add Features",price:"PKR 29,187",p:"Add new feature in existing web app or develop new feature",dt:"5-day delivery"},
  "Premium" : {title:"Complete Solution",price:"PKR 145,935",p:"Develop Complete new dynamic web application from scratch with API and data base design",dt:"10-day delivery"}
}