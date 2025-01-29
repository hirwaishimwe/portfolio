import React from "react";
import rwuxray from '../assets/images/rwuxray.png';
import fmvtool from '../assets/images/fmvtool.png';
import parkingapp from '../assets/images/parkingapp.png';
import radiologyapp from '../assets/images/radiologyapp.png';
import portfolio from '../assets/images/portfolio.png';
import '../assets/styles/Project.scss';

const projectsData = [
    {
        id: 1,
        img: fmvtool,
        title: "HCP-FMV Tool",
        description: "Developed a scalable full-stack application to replace an outdated tool for calculating healthcare professional fair market value. Built with Angular, NestJS, PostgreSQL, and Redis, improving accuracy and scalability.",
        link: null, // No link available
    },
    {
        id: 2,
        img: parkingapp,
        title: "RWU Parking App",
        description: "Led a team to create a mobile application that displays real-time parking spot availability, reducing campus parking congestion by 30%. Utilized MySQL, PHP, and sensor integration.",
        link: "https://www.linkedin.com/posts/hirwa-ishimwe_i-was-honored-to-present-two-of-my-projects-activity-7201703857440075777-o-FE?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: 3,
        img: radiologyapp,
        title: "Radiology Report Web App",
        description: "Designed and built a web application for managing radiology reports. Implemented secure authentication, responsive design, and CRUD functionality using React and Flask.",
        link: "https://github.com/hirwaishimwe/rad-report",
    },
    {
        id: 4,
        img: rwuxray,
        title: "Pneumonia Detection Using CNN",
        description: "Trained a convolutional neural network (CNN) with TensorFlow to classify chest X-rays and detect pneumonia with 93% accuracy. Utilized a dataset of 5,863 pediatric X-ray images.",
        link: "https://www.linkedin.com/posts/hirwa-ishimwe_i-was-honored-to-present-two-of-my-projects-activity-7201703857440075777-o-FE?utm_source=share&utm_medium=member_desktop",
    },
    {
        id: 5,
        img: portfolio,
        title: "Personal Portfolio Website",
        description: "Built a responsive portfolio website to showcase projects and professional experience. Designed with React and integrated GitHub repositories for live project demonstrations.",
        link: null, // No link available
    },
];

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div className="project" key={project.id}>
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.img} className="zoom" alt={`${project.title} Thumbnail`} width="100%" />
                            </a>
                        ) : (
                            <img src={project.img} className="zoom" alt={`${project.title} Thumbnail`} width="100%" />
                        )}
                        {project.link ? (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <h2>{project.title}</h2>
                            </a>
                        ) : (
                            <h2>{project.title}</h2>
                        )}
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
