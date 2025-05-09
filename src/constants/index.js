import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  mysql,
  docker,
  meta,
  starbucks,
  portfolio,
  travel,
  dapp,
  weather,
  simon,
  tictactoe,
  jarvis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MERN-STACK Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "InternPe",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS, and JavaScript.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Teaching Assistant",
    company_name: "Apna College",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2024 - April 2025",
    points: [
      "Solved doubts of students and provided them with optimized quality solutions of their coding problems.",
      "Worked on MERN stack projects, from scratch to deployment of project.",
      "Participated in code reviews and provided constructive feedback to other developers.",
      "Helped 5000+ students as a mentor.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Portfolio",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/biswombhara/portfolio",
    deployed_link: "*",
  },
  {
    name: "Travel Booking",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: travel,
    source_code_link: "https://github.com/biswombhara/Airbnb_Clone",
    deployed_link: "https://airbnb-clone-zjms.onrender.com/listings",
  },
  {
    name: "Weather App",
    description:
      "A web application that provides real-time weather information for any location, including temperature, humidity, wind speed, and other relevant weather details.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "weatherapi",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      }
    ],
    image: weather,
    source_code_link: "https://github.com/biswombhara/Weather",
    deployed_link: "https://weather-masterbisup.netlify.app/",
  },
  {
    name: "Presale ICO DApp",
    description:
      "It is a decentralized application designed to facilitate the pre-sale of our native cryptocurrency, NAVYA. It provides a platform for early adopters to purchase NAVYA tokens before they are publicly listed on exchanges.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "solidity",
        color: "green-text-gradient",
      },
      {
        name: "metamask",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
    ],
    image: dapp,
    source_code_link: "https://github.com/biswombhara/Coindox_Frontend",
    deployed_link: "*",
  },
  {
    name: "Simon Game",
    description:
      "A game where the player has to repeat the sequence of lights by pressing the colored buttons in the correct order. The sequence is played by the computer and the player has to repeat it exactly.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      }
    ],
    image: simon,
    source_code_link: "https://github.com/biswombhara/Simon",
    deployed_link: "https://simon-masterbisup.netlify.app/",
  },
  {
    name: "Tic Tac Toe",
    description:
      "A game where two players take turns marking the spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      }
    ],
    image: tictactoe,
    source_code_link: "https://github.com/biswombhara/Tic-Tac-Toe",
    deployed_link: "https://masterbisup-tictactoe.netlify.app/",
  },
  {
    name: "Jarvis",
    description:
      "A chatbot that can perform various tasks, such as answering questions, providing weather information, playing music, and more.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      }
    ],
    image: jarvis,
    source_code_link: "https://github.com/biswombhara/Jarvis",
    deployed_link: "https://jarvis-masterbisup.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
