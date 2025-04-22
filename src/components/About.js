import photo from '../photo.jpg';
import './About.css';
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const About = () => {
    return (
        <div id="about">
        <div className="intro-text">
        <h1>Hi, I'm Brian Zhang</h1>
        <p>
        I am a Software Engineer with 3+ years of professional experience, 
        specializing in Generative AI and Backend Development.
        </p>
        <p>
        I'm also currently pursuing a graduate degree in Artificial Intelligence in San Jose, CA, 
        with an expected graduation date of May, 2026.
        </p>
        <div className="links">
        <a href="/resume.pdf" download className="resume-button">
        resume
        <FaFileDownload />
        </a>
        <a href="https://www.linkedin.com/in/brianxwz" target="_blank" rel="noopener noreferrer" className="link-button">
        <FaLinkedin />
        </a>
        <a href="https://github.com/brianxwz" target="_blank" rel="noopener noreferrer" className="link-button">
        <FaGithub />
        </a>
        <a href="mailto:bzhang.xwz@gmail.com" className="link-button">
        <FaEnvelope />
        </a>
        </div>
        </div>
        <div className="intro-photo">
        <img src={photo} alt="portrait"/>
        </div>
        </div>
    );
}

export default About;