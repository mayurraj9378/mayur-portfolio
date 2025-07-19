 
import React from 'react';
import { Code, Database, Cloud, Users } from 'lucide-react';
import { skills } from '../data/portfolioData';

const About = () => (
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
                {skill.icon ? React.createElement(require('lucide-react')[skill.icon], { size: 16, color: '#64ffda' }) : <span>▹</span>}
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        <div className="skill-categories">
          <div>
            <Code size={32} color="#64ffda" aria-hidden="true" />
            <h3>Full-Stack Development</h3>
            <p>React.js, Node.js, Flask, Express.js</p>
          </div>
          <div className="data-science">
            <Database size={32} color="#6495ed" aria-hidden="true" />
            <h3>Data Science</h3>
            <p>Python, TensorFlow, Machine Learning</p>
          </div>
          <div className="cloud-devops">
            <Cloud size={32} color="#ffa500" aria-hidden="true" />
            <h3>Cloud & DevOps</h3>
            <p>AWS, Git/GitHub, Docker</p>
          </div>
          <div className="leadership">
            <Users size={32} color="#ff1493" aria-hidden="true" />
            <h3>Leadership</h3>
            <p>Technical Head at ACE</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;