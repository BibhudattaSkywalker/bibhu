'use client';
import { useState, useCallback } from 'react';
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiArrowUp,
  FiDatabase, 
  FiCode, 
  FiCloud, 
  FiCommand,
  FiServer,
  FiVideo,
  FiUsers,
  
  
} from 'react-icons/fi';
import { SiMongodb ,SiReact,
  SiNextdotjs,
  SiNodedotjs,SiExpress,SiEjs} from "react-icons/si";

import { FaHackerrank, FaPhone,FaNodeJs,FaJs, FaReact } from 'react-icons/fa';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { scrollYProgress } = useScroll();

  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);

  // Enhanced animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
  };

  const staggerItems = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: { opacity: 0 }
  };

  const itemAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  // Parallax effect for hero section
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Interactive Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "transparent" } },
          particles: {
            number: { value: 80 },
            color: { value: darkMode ? "#ffffff" : "#000000" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: darkMode ? "#ffffff" : "#000000",
              opacity: 0.4,
              width: 1
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse"
              },
              onclick: {
                enable: true,
                mode: "push"
              }
            }
          }
        }}
        className="fixed inset-0 z-0"
      />

      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-black/60 dark:to-gray-900/80" />

      <div className="min-h-screen text-gray-800 dark:text-gray-100 relative z-20">
        {/* Floating Elements */}
        <motion.div
          className="fixed top-1/4 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            y: [0, -50, 0],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="fixed top-1/3 right-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Scroll to Top */}
        <motion.button
          className="fixed bottom-8 right-8 p-3 bg-blue-600 dark:bg-purple-600 rounded-full shadow-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FiArrowUp className="text-white text-xl" />
        </motion.button>

        {/* Navigation */}
        <motion.header 
          className="fixed w-full z-50 backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Bibhudatta Satapathy
            </motion.h1>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              >
                {darkMode ? '🌞' : '🌙'}
              </button>
              {['Projects', 'Stack', 'Experience', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </nav>
        </motion.header>

        {/* Hero Section with Parallax Effect */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-4"
          style={{ y }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="mb-8 relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-48 h-48 rounded-full border-4 border-blue-500 dark:border-purple-500 mx-auto overflow-hidden shadow-2xl relative">
                  <img
                    src="https://res.cloudinary.com/dccwloryl/image/upload/v1742498538/WhatsApp_Image_2025-03-08_at_2.40.57_AM_ry7gfv.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 mix-blend-multiply" />
                </div>
              </motion.div>
              
              <motion.h1
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
              >
                Full-Stack Architect
              </motion.h1>
              
              <div className="text-xl mb-8 text-gray-600 dark:text-gray-300 font-mono">
                <Typewriter
                  options={{
                    strings: [
                      "<Express/> Scalable Backends",
                      "React-Driven Frontends",
                      "Cloud-Native Solutions",
                      "Database Optimization"
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Experience Timeline */}
        <section id="experience" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.h2 
              className="text-4xl font-bold mb-12 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Professional Journey
            </motion.h2>

            <motion.div 
              className="relative"
              variants={staggerItems}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="absolute left-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />
              
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className={`mb-8 w-full ${index % 2 === 0 ? 'pr-8' : 'pl-8'} ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
                  variants={itemAnimation}
                >
                  <div className="inline-block w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all">
                    <motion.div
                      whileHover={{ x: index % 2 === 0 ? -10 : 10 }}
                      className="flex items-center mb-4 space-x-4"
                    >
                      <div className="p-3 bg-blue-100 dark:bg-purple-900 rounded-lg">
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.company}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{exp.role}</p>
                      </div>
                    </motion.div>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.points.map((point, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start"
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-blue-600 dark:text-purple-400 mt-1 mr-2">▹</span>
                          {point}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-center">Let's Connect</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <FiMail className="text-3xl text-blue-600 dark:text-purple-600" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600 dark:text-gray-400">uccbibhu12321@gmail.com</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <FiGithub className="text-3xl text-blue-600 dark:text-purple-600" />
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <p className="text-gray-600 dark:text-gray-400">https://github.com/expertsolution12321</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <FiLinkedin className="text-3xl text-blue-600 dark:text-purple-600" />
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <p className="text-gray-600 dark:text-gray-400">https://in.linkedin.com/in/bibhudatta-satapathy-09003224a</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <FaHackerrank className="text-3xl text-blue-600 dark:text-purple-600" />
                    <div>
                      <p className="font-semibold">HackerRank</p>
                      <p className="text-gray-600 dark:text-gray-400">https://www.hackerrank.com/uccbibhu12321</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-4"
                    whileHover={{ x: 10 }}
                  >
                    <FaPhone className="text-3xl text-blue-600 dark:text-purple-600" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <p className="text-gray-600 dark:text-gray-400">7978394726</p>
                    </div>
                  </motion.div>
                </div>

                <form className="space-y-6">
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 bg-transparent border-b-2 focus:outline-none focus:border-blue-600 dark:focus:border-purple-600 placeholder-gray-500"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-transparent border-b-2 focus:outline-none focus:border-blue-600 dark:focus:border-purple-600 placeholder-gray-500"
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className="w-full p-3 bg-transparent border-b-2 focus:outline-none focus:border-blue-600 dark:focus:border-purple-600 placeholder-gray-500"
                    />
                  </motion.div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 dark:bg-purple-600 text-white py-3 rounded-lg hover:bg-blue-700 dark:hover:bg-purple-700 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
  <div className="container mx-auto max-w-6xl">
    <motion.h2
      className="text-4xl font-bold mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      My Skills
    </motion.h2>

    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={staggerItems}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
          variants={itemAnimation}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="text-4xl text-blue-600 dark:text-purple-600">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {skill.name}
            </h3>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>
    </div>
  );
}

// Data arrays remain the same as previous example

// Data
const techStack = [
  {
    name: "MongoDB",
    icon: <FiDatabase />,
    description: "Database design, optimization, and aggregation pipelines"
  },
  {
    name: "Express.js",
    icon: <FiCode />,
    description: "RESTful API development and microservices architecture"
  },
  {
    name: "React",
    icon: <FiCommand />,
    description: "Interactive UIs with modern state management"
  },
  {
    name: "Node.js",
    icon: <FiCloud />,
    description: "Scalable backend services and cloud integration"
  }
];

const experiences = [
  {
    company: "Hiyaan Technologies",
    role: "Backend Developer | Jul 2021 - Jan 2022",
    icon: <FiServer className="text-2xl" />,
    points: [
      "Developed and maintained server-side applications using Node.js handling 50+ API endpoints",
      "Designed RESTful APIs with Express.js achieving 98% endpoint reliability",
      "Implemented JWT authentication and role-based access control",
      "Optimized MongoDB queries reducing response times by 40%"
    ]
  },
  {
    company: "OrangeMantra",
    role: "Node.js Developer | Mar 2022 - Dec 2023",
    icon: <FiCode className="text-2xl" />,
    points: [
      "Developed and maintained backend services using Node.js, Express.js, and MongoDB/MySQL for major clients, including Panasonic, Nestlé, PVR, Hero, and Drimco.",
      "Designed and optimized RESTful APIs and microservices, ensuring scalability, security, and high performance.",
      "Integrated third-party services, implemented real-time data processing, and developed authentication/authorization mechanisms.",
      "Optimized database performance, improved system efficiency, and handled cloud deployment to ensure seamless functionality across projects."
    ]
  },
  {
    company: "RewardWale",
    role: "Fullstack Developer | Jan 2024 - Mar 2024",
    icon: <FiVideo className="text-2xl" />,
    points: [
      "Developed video reward system with Node.js and React",
      "Optimized MongoDB aggregation pipelines for real-time analytics",
      "Implemented WebSocket-based notifications system",
      "Enhanced security with rate limiting and request validation"
    ]
  },
  {
    company: "Expert Solutions",
    role: "Senior Full-Stack Developer | Oct 2024 - Present",
    icon: <FiUsers className="text-2xl" />,
    points: [
      "Technical lead for TMS and Trip Challan Books projects",
      "Mentored team of 8 developers in best practices",
      "Designed CI/CD pipeline with GitHub Actions",
      "Architected AWS-based infrastructure with auto-scaling"
    ]
  }
];
const skills = [
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "MongoDB",
    icon: < SiMongodb/>,
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    name: "EJS",
    icon: <SiEjs />,
  },
];