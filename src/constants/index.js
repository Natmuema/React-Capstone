import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    motion,
    nodejs,
    pricewise,
    react,
    snapgram,
    summiz,
    tailwindcss,
    threads,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Front-End Intern",
        company_name: "Beemaps (K) Ltd.",
        icon: git,
        iconBg: "#accbe1",
        date: "March 2024 - June 2024",
        points: [
            "Converted Figma designs into pixel-perfect, responsive web pages using Tailwind CSS and JavaScript.",
            "Assisted in debugging and optimizing a client’s e-commerce website, reducing load time by 30%.",
            "Participated in client meetings to gather requirements and provided technical support during project rollouts.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Junior Front-End Developer",
        company_name: "Finchghurt Enterprises",
        icon: react,
        iconBg: "#fbc3bc",
        date: "June 2024 - August 2024",
        points: [
            "Designed and developed responsive landing pages using HTML5, CSS3, and JavaScript, increasing user engagement by 20%.",
            "Collaborated with a cross-functional team to integrate React components into existing applications, improving performance and maintainability.",
            "Utilized Git for version control and streamlined the development workflow through effective branch management.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Freelance Web Developer",
        company_name: "Freelance",
        icon: nodejs,
        date: "September 2024 - Present",
        points: [
            "Built custom websites for small businesses, integrating Bootstrap to ensure responsive layouts and consistent UI design.",
            "Enhanced SEO performance by applying semantic HTML and optimizing site structure.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Delivered high-quality projects on time, fostering positive client relationships.lopers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Natmuema',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kalondu-muema-8a45091b6',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Weather App',
        description: 'Built a weather application using JavaScript, HTML5, and CSS3, allowing users to search for current weather conditions by city.Integrated the OpenWeatherMap API to fetch real-time weather data, including temperature, humidity, and weather icons.',
        link: 'https://github.com/Natmuema/weather-app.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'To-do list App',
        description: 'Developed a fully functional to-do list application using  Redux/Content API, Tailwind CSS.Features include adding, editing, marking tasks as completed, and deleting tasks',
        link: 'https://github.com/Natmuema/Week-3.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Zindua Alumni',
        description: 'Developed a specialized, JavaScript-powered platform where alumni can find, apply for, and track job opportunities that match their skills, the Zindua Alumni Job Board seeks to close this gap.',
        link: 'https://github.com/Natmuema/Job-Portal.git',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Recipe Book',
        description: 'Built a complete recipe book, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/Natmuema/Recipe-Book.git',
    },
   
];