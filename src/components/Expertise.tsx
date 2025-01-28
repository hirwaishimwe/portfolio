import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faCloudflare } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Angular",
    "NestJS",
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Python",
    "PostgreSQL",
    "Redis"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "CI/CD",
    "Agile Methodologies",
    "AWS",
    "Azure",
    "Linux",
    "Firebase"
];

const labelsThird = [
    "Machine Learning",
    "OpenAI APIs",
    "Pandas",
    "TensorFlow",
    "Scikit-learn",
    "Streamlit"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>I specialize in building scalable and responsive web applications using modern frameworks like Angular, React, and NestJS. My expertise spans frontend and backend development, ensuring seamless integration and user experiences.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have hands-on experience with setting up DevOps pipelines, automating deployments, and ensuring efficient CI/CD processes for smooth application delivery. I’m proficient in leveraging cloud services like AWS and Azure for deployment.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCloudflare} size="3x"/>
                    <h3>AI & Data Solutions</h3>
                    <p>With professional experience in AI, I have developed machine learning models and solutions to empower intelligent decision-making. My projects often integrate APIs and frameworks for data-driven applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;