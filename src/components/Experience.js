import { useState } from 'react';
import './Experience.css';

const Experience = () => {
    const [activeTab, setActiveTab] = useState('work');
    
    const workTimeline = [
        { title: 'Backend Engineer', place: 'Behaviour', date: 'Aug 2023 - Aug 2024' , location: 'Montreal, QC', img: '/bhvr.jpg', link: 'https://www.bhvr.com/',
            description: [
                'Developed server tools and RESTful APIs with NodeJS to support ongoing game design updates for the company’s flagship product Dead by Daylight',
                'Implemented cross‑progression services, enabling 1+ million users to synchronize player progress across six platforms using AWS DynamoDB for real‑time data storage',
            ]
        },
        { title: 'Software Engineer Intern', place: 'Bumblebee Spaces', date: 'Sep 2022 - Dec 2022', location: 'San Francisco, CA', img: '/bumble.jpg', link: 'https://www.bumblebeespaces.com/',
            description: [
                'Developed front‑end and back‑end features for a smart home automation system using React and Go, enabling remote management of ceiling‑mounted furniture',
                'Implemented a computer vision‑based object detection system using TensorFlow and OpenCV to identify and track items in storage units for automated retrieval',
            ]
        },
        { title: 'Machine Learning Engineer Intern', place: 'ADP', date: 'May 2022 - Aug 2022', location: 'New York, NY', img: '/adp.png', link: 'https://www.adp.com/',
            description: [
                'Developed and maintained ML‑driven features to enhance HR management tools, including personalized search and recommendation systems for employee resources',
                'Performed data engineering with PySpark and SQL to process large‑scale data, improving recommendation system performance and operational efficiency for users',
            ]
        },
        { title: 'Frontend Engineer Intern', place: 'Sony', date: 'Sep 2021 - Dec 2021', location: 'Toronto, ON', img: '/sony.jpg', link: 'https://sonyinteractive.com/en/',
            description: [
                'Developed UI and shopping features for the PlayStation Store using React, enhancing user experience for 40+ million subscribers and improving navigation and functionality',
                'Designed and implemented the architecture of the PlayStation Plus subscription system, improving its integration and performance across various devices',
            ]
        },
        { title: 'Game Developer Intern', place: 'Behaviour', date: 'Jan 2021 - Apr 2021', location: 'Montreal, QC', img: '/bhvr.jpg', link: 'https://www.bhvr.com/',
            description: [
                'Developed two separate games early in development with an initial team of five programmers using Unity and C#',
                'Spearheaded development of numerous UI and gameplay features including game menus, controls, and score tracking',
            ]
        },
        { title: 'Software Engineer Intern', place: 'Infor', date: 'May 2020 - Aug 2020', location: 'Toronto, ON', img: '/infor.png', link: 'https://www.infor.com/',
            description: [
                'Updated web application’s UI and helped implement several new business software features using Kotlin and Angular',
                'Maintained software infrastructure during company’s transition from single‑tenancy to multi‑tenancy',
            ]
        },
        { title: 'Test Engineer Intern', place: 'Yuja', date: 'May 2020 - Aug 2020', location: 'Toronto, ON', img: '/yuja.jpg', link: 'https://www.yuja.com/',
            description: [
                'Developed and maintained automated testing framework using Selenium API and Java, reducing manual testing time by 80%',
                'Identified and resolved 100+ bugs using React throughout a consistent biweekly agile release schedule',
            ]
        },
    ];
    
    const educationTimeline = [
        { title: 'Master of Artificial Intelligence', place: 'San Jose State University', date: 'Aug 2024 - May 2026', location: 'San Jose, CA', img: '/sjsu.png', link: 'https://www.sjsu.edu/',
            description: [
                'GPA: 3.9/4.0',
            ]
        },
        { title: 'Bachelor of Computer Science', place: 'University of Waterloo', date: 'Sep 2018 - Apr 2023', location: 'Waterloo, ON', img: '/uw.jpg', link: 'https://uwaterloo.ca/',
            description: [
                'GPA: 3.8/4.0',
            ]
        },
    ]
    
    const timeline = activeTab === 'work' ? workTimeline : educationTimeline;
    
    return (
        <section className="experience-section">
        <div className="tabs">
        <button
        className={`tab ${activeTab === 'work' ? 'active' : ''}`}
        onClick={() => setActiveTab('work')}
        >
        Work
        </button>
        <button
        className={`tab ${activeTab === 'education' ? 'active' : ''}`}
        onClick={() => setActiveTab('education')}
        >
        Education
        </button>
        </div>
        
        <div className="timeline">
        {timeline.map((item, i) => (
            <div key={i} className="timeline-item">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="timeline-button">
            <img src={item.img} alt={item.place} className="timeline-image" />
            </a>
            <div className="timeline-content">
            <p className="date">{item.date} • {item.location}</p>
            <h3 className="company">{item.place}</h3>
            <h4 className="title">{item.title}</h4>
            <ul className="description">
            {item.description.map((line, idx) => (
                <li key={idx}>{line}</li>
            ))}
            </ul>
            </div>
            </div>
        ))}
        </div>
        </section>
    );
};

export default Experience;
