import { Code, LayoutTemplate, Smartphone, Database, ShoppingCart, PenTool } from 'lucide-react';

export const personalData = {
  name: 'Muiz Adesope',
  title: 'Full Stack Developer',
  email: 'muiz.dev.io@gmail.com',
  phone: '+2349030049952',
  location: 'Lagos, Nigeria',
  portfolioUrl: 'https://muiz-dev.vercel.app',
  resumeUrl: 'https://pdanalqroypjmkidfzhd.supabase.co/storage/v1/object/public/ticket-attachments//Muiz_Adesope_Resume.pdf',
  linkedin: 'https://linkedin.com/in/muiz-dev',
  github: 'https://github.com/Muiz-dev',
  instagram: 'https://instagram.com/muiz_dev',
  x: 'https://x.com/muiz_sui',
  resumeText: `Muiz Adesope
Full Stack Developer
muiz.dev.io@gmail.com | +2349030049952 | Lagos, Nigeria | https://muiz-dev.vercel.app | linkedin.com/in/muiz-dev

EDUCATION
National Diploma / Mechatronics Engineering
Yaba College of Technology, Lagos, Nigeria
2024 – present

PROFESSIONAL EXPERIENCE
Full-Stack Developer (Freelance)
Self-employed / Remote Clients
2023 – present
- Built custom web applications for individuals and small businesses
- Designed user interfaces, developed backend logic, and managed deployments
- Handled features such as complaint systems, user dashboards, authentication, and real-time notifications using PHP, JavaScript, and Bootstrap

Software Engineering Intern
Digital Technology Academy
2024 – 2025
- Worked closely with senior developers to build and test web applications
- Assisted in frontend and backend development tasks using modern tools and best practices
- Gained hands-on experience with responsive design, version control, and real-time collaboration on projects

Web Developer
LoveView Estates (UK-based Real Estate Agency)
2024 – present
- Designed and developed the company’s official website from scratch
- Focused on creating a user-friendly, mobile-responsive platform that showcases property listings, services, and client trust
- Implemented a clean interface, intuitive navigation, and strong visual branding

Product Developer / Community Manager
WheatChain Protocol
2023 – 2025
- Developed and managed features for a DeFi crowdfunding protocol
- Built both web and Telegram mini-apps, integrated blockchain wallet connections, and managed a small online community
- Handled platform logic, user flows, and coordinated updates post-rebrand and relaunch

Software Engineering Program
ALX Africa
2022 – 2023
- Completed a comprehensive software engineering program covering programming fundamentals, data structures, algorithms, system engineering, DevOps, and modern development practices
- Gained hands-on experience through numerous projects and collaborative assignments

SKILLS
React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, PHP, Firebase, Supabase, Next.js, TypeScript, AJAX & REST APIs, MySQL, PostgreSQL, Git & GitHub

PROJECTS
LoveView Estates: Real Estate Website for UK Property Firm. Tech: Next.js, Supabase, Tailwind CSS, TypeScript.
Complaint Management System: Internal Web App for Organizational Complaint Handling. Tech: Next.js, PostgreSQL, Tailwind CSS, TypeScript.
Developer Portfolio Website: Personal Portfolio. Tech: Next.js, Tailwind CSS, TypeScript, Vercel.
Student Result Management System (SRMS): Web App for Academic Results Management. Tech: PHP, MySQL, AJAX, Bootstrap.

CERTIFICATES
ALX Software Engineering Program (Graduate)
FreeCodeCamp: Responsive Web Design Certification
The Complete Web Development Bootcamp (Udemy – Dr. Angela Yu)

LANGUAGES
English
`
};

export const services = [
  {
    title: 'Web App Development',
    description: 'I build dynamic, high-performance web applications from the ground up using modern technologies like React, Next.js, and robust backend systems.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    description: 'I create intuitive, user-friendly interfaces that provide a seamless user experience, turning complex requirements into beautiful and functional designs.',
    icon: LayoutTemplate,
  },
  {
    title: 'API & Database Integration',
    description: 'I design and integrate robust, scalable APIs and manage databases (SQL & NoSQL) to power your applications efficiently and securely.',
    icon: Database,
  },
  {
    title: 'E-Commerce Solutions',
    description: 'From product catalogs to secure payment gateways, I build complete e-commerce platforms that help businesses sell and grow online.',
    icon: ShoppingCart,
  },
  {
    title: 'Responsive Design',
    description: 'I ensure your website looks and functions perfectly on all devices—desktops, tablets, and mobile phones—for a consistent user experience.',
    icon: Smartphone,
  },
  {
    title: 'Content Management Systems',
    description: 'I implement and customize CMS platforms that give you full control over your website\'s content, making updates easy and efficient.',
    icon: PenTool,
  },
];

export const skills = [
  { name: 'React.js', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
  { name: 'Firebase', icon: '/icons/firebase.svg' },
  { name: 'Supabase', icon: '/icons/supabase.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'PHP', icon: '/icons/php.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Git & GitHub', icon: '/icons/github.svg' },
  { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
];

export const experiences = [
  {
    role: 'Web Developer',
    company: 'LoveView Estates',
    period: '2024 – Present',
    description: 'Designed and developed the company’s official website from scratch, focusing on a user-friendly, mobile-responsive platform to showcase property listings and build client trust.',
  },
  {
    role: 'Full-Stack Developer (Freelance)',
    company: 'Self-employed',
    period: '2023 – Present',
    description: 'Built custom web applications for individuals and small businesses, handling UI design, backend logic, and deployment. Implemented features like complaint systems, user dashboards, and real-time notifications.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Digital Technology Academy',
    period: '2024 – 2025',
    description: 'Worked with senior developers on web applications, assisting in both frontend and backend tasks and gaining hands-on experience with modern tools and responsive design.',
  },
  {
    role: 'Product Developer / Community Manager',
    company: 'WheatChain Protocol',
    period: '2023 – 2025',
    description: 'Developed and managed features for a DeFi crowdfunding protocol, including web and Telegram mini-apps, blockchain wallet integrations, and community management.',
  },
  {
    role: 'Software Engineering Program',
    company: 'ALX Africa',
    period: '2022 – 2023',
    description: 'Completed a comprehensive program covering programming fundamentals, data structures, algorithms, system engineering, DevOps, and modern development practices.',
  },
];

export const projects = [
  {
    title: 'LoveView Estates',
    description: 'A professional real estate website for a UK-based property firm, featuring property browsing, listings, and an admin-controlled CMS.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/loveview.png',
    imageHint: 'real estate website',
    liveUrl: 'https://www.loveviewestates.co.uk/',
    githubUrl: 'https://github.com/wheat-eco/loveviewestates',
  },
  {
    title: 'Complaint Management System',
    description: 'An internal web app for organizational complaint handling, with features for submissions with attachments, urgency levels, and a real-time admin dashboard.',
    stack: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/cms.png',
    imageHint: 'dashboard interface',
    liveUrl: 'https://cts-m.vercel.app/',
    githubUrl: 'https://github.com/wheat-eco/CMS',
  },
  {
    title: 'Developer Portfolio Website',
    description: 'A personal portfolio to showcase skills, projects, and contact information, designed to be fast-loading and animated.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    imageUrl: '/port.png',
    imageHint: 'portfolio design',
    liveUrl: 'https://github.com/muiz-dev',
    githubUrl: 'https://github.com/muiz-dev',
  },
  {
    title: 'Student Result Management System',
    description: 'A web application for academic results management, allowing admins to enter grades and students to view their results through a dedicated portal.',
    stack: ['PHP', 'MySQL', 'AJAX', 'Bootstrap'],
    imageUrl: '/AcademyIq.PNG',
    imageHint: 'student portal',
    liveUrl: 'https://academyiq.vercel.app/',
    githubUrl: 'https://github.com/PredFinance/Student-Result-Managment-System-V2',
  },
];
