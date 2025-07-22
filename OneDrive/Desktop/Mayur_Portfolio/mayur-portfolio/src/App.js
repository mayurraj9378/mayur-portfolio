import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Database, Cloud, Users, FileCode, Braces, Coffee, FileText, Globe, Puzzle, ExternalLink, Menu, X, ChevronDown } from 'lucide-react';
import './App.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: [
      { name: 'Python', icon: <FileCode size={16} color="#64ffda" /> },
      { name: 'JavaScript', icon: <Braces size={16} color="#64ffda" /> },
      { name: 'Java', icon: <Coffee size={16} color="#64ffda" /> },
      { name: 'HTML5', icon: <FileText size={16} color="#64ffda" /> },
      { name: 'CSS3', icon: <Globe size={16} color="#64ffda" /> },
      { name: 'React', icon: <Puzzle size={16} color="#64ffda" /> },
      { name: 'C++', icon: null },
      { name: 'C', icon: null },
      { name: 'Kotlin', icon: null },
      { name: 'SQL', icon: null }
    ],
    frameworks: ['React.js', 'Node.js', 'Flask', 'Express.js', 'TensorFlow'],
    databases: ['MySQL', 'MongoDB'],
    tools: ['Git/GitHub', 'AWS Cloud', 'Android Studio', 'Power BI'],
    concepts: ['Machine Learning', 'Data Analysis', 'REST APIs', 'Responsive Design']
  };

  const projects = [
    {
      title: 'AI-Powered ATS Resume Analyzer',
      description: 'Enhanced Resume effectiveness with AI-Driven Job Match Analysis achieving 85% accuracy',
      tech: ['Python', 'TensorFlow', 'Flask', 'MySQL', 'NLP'],
      github: 'https://github.com/mayurraj9378/ATS_Resume_Analyzer'
    },
    {
      title: 'University Club Event Management',
      description: 'Designed and implemented a web-based event management system for university clubs',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/mayurraj9378/university-club-event-management'
    },
    {
      title: 'PDF-to-MindMap (MindMapify)',
      description: 'Developed a tool to convert PDF content into interactive mind maps',
      tech: ['Python', 'NLP', 'Data Structures', 'Web Scraping'],
      github: 'https://github.com/mayurraj9378/PDF-TO-MindMap-MindMapify-'
    },
    {
      title: 'Smart Timetable Generator',
      description: 'Optimized Scheduling Solution with Evolutionary Algorithms using Genetic Algorithm',
      tech: ['Python', 'Genetic Algorithm', 'Optimization'],
      github: 'https://github.com/mayurrajgude/Smart-Timetable-Generator'
    },
    {
      title: 'Stocks Analysis AI Agents',
      description: 'A web-based application built with Streamlit to analyze stock data, provide AI-driven insights, and display financial metrics using interactive candlestick charts and AI agents.',
      tech: ['Streamlit', 'yFinance', 'Plotly', 'Phi', 'Python'],
      github: 'https://github.com/mayurraj9378/Stock-analysis-AI-agent'
    },
    {
      title: 'Hotel Finder',
      description: 'A Streamlit-based application for personalized hotel recommendations, featuring sorting by rating, price, or distance investigating, and filtering by amenities like Pool, Spa, and WiFi.',
      tech: ['Streamlit', 'Python', 'Pandas', 'Plotly'],
      github: 'https://github.com/mayurraj9378/hotel-finder'
    },
    {
      title: 'Chat-with-PDF',
      description: 'An AI-powered web application that enables users to interact with PDF documents, extract content, and ask questions using natural language processing.',
      tech: ['Python', 'Streamlit', 'PyPDF2', 'LangChain', 'OpenAI'],
      github: 'https://github.com/mayurraj9378/chat-with-pdf'
    },
    {
      title: 'Secure Data Analyst Agent',
      description: 'A secure AI agent for analyzing sensitive data, implementing robust encryption and access controls to ensure data privacy and compliance.',
      tech: ['Python', 'Streamlit', 'Pandas', 'PyCryptodome', 'LangChain'],
      github: 'https://github.com/mayurraj9378/secure-data-analyst-agent'
    }
  ];

  const experiences = [
    {
      title: 'Data Science Intern',
      company: 'iGurus Service Consultancy LLP',
      period: 'Jan 2025 - Mar 2025',
      location: 'Remote',
      points: [
        'Engaged in Data Science and Analytics role for Malaysian Web Platforms User Engagement Survey',
        'Applied Python, data preprocessing, visualization, and machine learning concepts',
        'Consistently met project deadlines with quality deliverables'
      ]
    },
    {
      title: 'Google Android Developer Virtual Internship',
      company: 'Eduskill, AICTE',
      period: '2024',
      location: 'Virtual',
      points: [
        'Enhanced skills in Kotlin, Android Studio, UI layouts, and adaptive designs',
        'Developed mobile applications with modern Android development practices'
      ]
    },
    {
      title: 'Cybersecurity Internship',
      company: 'Palo Alto Networks',
      period: '2024',
      location: 'Remote',
      points: [
        'PCCET Certified with expertise in Network and Cloud Security',
        'Applied risk management and implemented cybersecurity frameworks'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Ajeenkya DY Patil School of Engineering,Pune \n Affiliated to Savitribai Phule Pune University (SPPU)',
      period: '2022 - 2026',
      details: 'CGPA: 8.9/10\nRelevant Coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering, Machine Learning'
    },
    {
      degree: 'HSC',
      institution: 'Sir Parshurambhau College (Maharashtra State Board), Pune',
      period: '2021',
      details: 'Percentage: 83.50%'
    },
    {
      degree: 'SSC',
      institution: 'Maharashtra State Board, Pune',
      period: '2019',
      details: 'Percentage: 87.60%'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div>
      {/* Internal CSS for Hero Section */}
      <style>
        {`
          section#home {
            min-height: 100vh;
            display: flex;
            align-items: center;
            background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
            position: relative;
            overflow: hidden;
          }

          section#home .background {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.15) 0%, transparent 50%), 
                        radial-gradient(circle at 80% 20%, rgba(100, 149, 237, 0.15) 0%, transparent 50%);
            z-index: -1;
          }

          section#home .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
            position: relative;
            z-index: 1;
          }

          section#home .content {
            display: flex;
            align-items: center;
            gap: 3rem;
            max-width: 100%;
            flex-wrap: wrap;
          }

          section#home .text-content {
            flex: 1;
            min-width: 300px;
            max-width: 600px;
            color: #ccd6f6;
          }

          section#home .image-content {
            flex: 1;
            min-width: 200px;
            max-width: 350px;
            height: 350px;
            background-image: url('https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-working-on-project-7662187-6153700.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 12px;
            // box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          section#home .image-content:hover {
            transform: scale(1.03);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
          }

          section#home .content h3 {
            font-size: clamp(2.5rem, 7vw, 5rem);
            font-weight: 700;
            margin: 0 0 0.8rem 0;
            background: linear-gradient(135deg, #ccd6f6, #64ffda);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }

          section#home .content h2 {
            font-size: clamp(1.8rem, 5vw, 3rem);
            color: #a8b2d1;
            margin: 0 0 1.5rem 0;
            font-weight: 600;
          }

          section#home .content p.intro {
            color: #64ffda;
            font-size: 1.2rem;
            font-weight: 500;
            margin: 0 0 1rem 0; /* Reduced margin to ensure visibility */
            padding-top: 0.3rem;
          }

          section#home .content p.description {
            font-size: 1.1rem;
            color: #a8b2d1;
            line-height: 1.8;
            margin-bottom: 2.5rem;
          }

          section#home .content .buttons {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
          }

          section#home .content .buttons button {
            padding: 0.9rem 2rem;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: inherit;
            border-radius: 6px;
          }

          section#home .content .buttons button.view-work {
            background-color: transparent;
            border: 2px solid #64ffda;
            color: #64ffda;
            font-weight: 500;
          }

          section#home .content .buttons button.view-work:hover {
            background-color: rgba(100, 255, 218, 0.15);
            transform: translateY(-2px);
          }

          section#home .content .buttons button.get-in-touch {
            background-color: #64ffda;
            border: 2px solid #64ffda;
            color: #0f0f23;
            font-weight: 600;
          }

          section#home .content .buttons button.get-in-touch:hover {
            background-color: #4fd3b8;
            transform: translateY(-2px);
          }

          section#home .scroll-indicator {
            position: absolute;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            animation: bounce 2s infinite;
          }

          @media (max-width: 768px) {
            section#home .content {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            section#home .text-content {
              max-width: 100%;
            }
            section#home .image-content {
              max-width: 80%;
              height: 250px;
              box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
            }
            section#home .content .buttons {
              justify-content: center;
            }
            section#home .content p.intro {
              margin: 0 0 0.8rem 0;
              padding-top: 0.2rem;
            }
          }
        `}
      </style>

      {/* Navigation */}
      <nav className={isScrolled ? 'scrolled' : ''}>
        <div className="container">
          <div className="logo">Mayur Rajgude</div>
          
          {/* Desktop Menu */}
          <div className="desktop-menu">
            {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={activeSection === item ? 'active' : ''}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mobile-menu-button"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={activeSection === item ? 'active' : ''}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
        <div className="background" />
        <div className="container">
          <div className="content">
            <div className="text-content">
              <p className="intro">Hi, my name is</p>
              <h3>Mayur Rajgude</h3>
              <h2>Full-Stack & AI/ML Enthusiast</h2>
              <p className="description">
                Final year Computer Engineering student with a passion for technology and innovation. 
                Experienced in data science projects and full-stack development with a strong focus on AI/ML solutions.
              </p>
              <div className="buttons">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="view-work"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="get-in-touch"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="image-content"></div>
          </div>
        </div>
        <div className="scroll-indicator">
          <ChevronDown size={32} color="#64ffda" />
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <div className="container">
          <h2>
            <span>01.</span>
            About Me
            <div className="line" />
          </h2>
          <div className="content">
            <div>
              <p>
                I am a Final year Computer Engineering student with a passion for technology and innovation. 
                My strong work ethic drives my academics and professional pursuits. I excel in adapting to 
                new environments and collaborating with teams to achieve innovative solutions.
              </p>
              <p>
                Currently pursuing my Bachelor's degree with a CGPA of 8.9/10, I have hands-on experience 
                in data science, full-stack development, and AI/ML projects. I'm passionate about applying 
                my skills to real-world projects and making meaningful contributions.
              </p>
              <p>
                Here are some technologies I've been working with:
              </p>
              <div className="skills">
                {skills.languages.slice(0, 9).map((skill, index) => (
                  <div key={index}>
                    {skill.icon || <span>▹</span>}
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="skill-categories">
              <div>
                <Code size={32} color="#64ffda" />
                <h3>Full-Stack Development</h3>
                <p>React.js, Node.js, Flask, Express.js</p>
              </div>
              <div className="data-science">
                <Database size={32} color="#6495ed" />
                <h3>Data Science</h3>
                <p>Python, TensorFlow, Machine Learning</p>
              </div>
              <div className="cloud-devops">
                <Cloud size={32} color="#ffa500" />
                <h3>Cloud & DevOps</h3>
                <p>AWS, Git/GitHub, Docker</p>
              </div>
              <div className="leadership">
                <Users size={32} color="#ff1493" />
                <h3>Leadership</h3>
                <p>Technical Head at ACE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education">
        <div className="container">
          <h2>
            <span>02.</span>
            Education
            <div className="line" />
          </h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <div className="header">
                  <div>
                    <h3>
                      {edu.degree} <span>@ {edu.institution}</span>
                    </h3>
                    <p>{edu.period}</p>
                  </div>
                </div>
                <p className="details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <div className="container">
          <h2>
            <span>03.</span>
            Experience
            <div className="line" />
          </h2>
          <div className="experience-list">
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="header">
                  <div>
                    <h3>
                      {exp.title} <span>@ {exp.company}</span>
                    </h3>
                    <p>{exp.location}</p>
                  </div>
                  <span className="period">{exp.period}</span>
                </div>
                <ul>
                  {exp.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <span>▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <h2>
            <span>04.</span>
            Projects
            <div className="line" />
          </h2>
          <div className="project-list">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <div className="header">
                  <Code size={28} color="#64ffda" />
                  <div className="links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={20} />
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-tags">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2>
            <span>05.</span>
            Get In Touch
          </h2>
          <p>
            I'm currently looking for new opportunities and internships. Whether you have a question 
            or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-links">
            <a href="mailto:mrajgude2003@gmail.com">
              <Mail size={20} />
              mrajgude2003@gmail.com
            </a>
            <a href="tel:+919307643378">
              <Phone size={20} />
              +91-9307643378
            </a>
          </div>
          <div className="social-links">
            <a href="https://github.com/mayurraj9378" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/mayurrajgude" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
              LinkedIn
            </a>
          </div>
          <div className="location">
            <MapPin size={16} />
            Pune, Maharashtra, India
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>Built with React.js by Mayur Rajgude © 2025</p>
      </footer>
    </div>
  );
};

export default Portfolio;