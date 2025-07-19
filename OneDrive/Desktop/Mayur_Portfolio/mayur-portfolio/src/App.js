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
      github: 'https://github.com/mayurrajgude/AI-Powered-ATS-Resume-Analyzer'
    },
    {
      title: 'University Club Event Management',
      description: 'Designed and implemented a web-based event management system for university clubs',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      github: 'https://github.com/mayurrajgude/University-Club-Event-Management'
    },
    {
      title: 'PDF-to-MindMap (MindMapify)',
      description: 'Developed a tool to convert PDF content into interactive mind maps',
      tech: ['Python', 'NLP', 'Data Structures', 'Web Scraping'],
      github: 'https://github.com/mayurrajgude/PDF-to-MindMap'
    },
    {
      title: 'Smart Timetable Generator',
      description: 'Optimized Scheduling Solution with Evolutionary Algorithms using Genetic Algorithm',
      tech: ['Python', 'Genetic Algorithm', 'Optimization'],
      github: 'https://github.com/mayurrajgude/Smart-Timetable-Generator'
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
      institution: 'Ajeenkya DY Patil School of Engineering, Pune',
      period: '2022 - 2026',
      details: 'CGPA: 8.9/10\nRelevant Coursework: Data Structures & Algorithms, Database Management Systems, Software Engineering, Machine Learning'
    },
    {
      degree: 'HSC',
      institution: 'Maharashtra State Board, Pune',
      period: '2022',
      details: 'Percentage: 83.50%'
    },
    {
      degree: 'SSC',
      institution: 'Maharashtra State Board, Pune',
      period: '2020',
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
            <p className="intro">Hi, my name is</p>
            <h1>Mayur Rajgude</h1>
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
                I am a 3rd-year Computer Engineering student with a passion for technology and innovation. 
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
            <a href="https://github.com/mayurrajgude" target="_blank" rel="noopener noreferrer">
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