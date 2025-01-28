import React from "react";
import rwuxray from '../assets/images/rwuxray.png';
import fmvtool from '../assets/images/fmvtool.png';
import parkingapp from '../assets/images/parkingapp.png';
import radiologyapp from '../assets/images/radiologyapp.png';
import portfolio from '../assets/images/portfolio.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/username/fmv-tool" target="_blank" rel="noreferrer"><img src={fmvtool} className="zoom" alt="FMV Tool Thumbnail" width="100%"/></a>
                <a href="https://github.com/username/fmv-tool" target="_blank" rel="noreferrer"><h2>HCP-FMV Tool</h2></a>
                <p>Developed a scalable full-stack application to replace an outdated tool for calculating healthcare professional fair market value. Built with Angular, NestJS, PostgreSQL, and Redis, improving accuracy and scalability.</p>
            </div>

            <div className="project">
                <a href="https://github.com/username/rwu-parking-app" target="_blank" rel="noreferrer"><img src={parkingapp} className="zoom" alt="Parking App Thumbnail" width="100%"/></a>
                <a href="https://github.com/username/rwu-parking-app" target="_blank" rel="noreferrer"><h2>RWU Parking App</h2></a>
                <p>Led a team to create a mobile application that displays real-time parking spot availability, reducing campus parking congestion by 30%. Utilized MySQL, PHP, and sensor integration.</p>
            </div>

            <div className="project">
                <a href="https://github.com/username/radiology-report-app" target="_blank" rel="noreferrer"><img src={radiologyapp} className="zoom" alt="Radiology App Thumbnail" width="100%"/></a>
                <a href="https://github.com/username/radiology-report-app" target="_blank" rel="noreferrer"><h2>Radiology Report Web App</h2></a>
                <p>Designed and built a web application for managing radiology reports. Implemented secure authentication, responsive design, and CRUD functionality using React and Flask.</p>
            </div>

            <div className="project">
                <a href="https://github.com/username/xray-pneumonia-detector" target="_blank" rel="noreferrer"><img src={rwuxray} className="zoom" alt="Pneumonia Detection Thumbnail" width="100%"/></a>
                <a href="https://github.com/username/xray-pneumonia-detector" target="_blank" rel="noreferrer"><h2>Pneumonia Detection Using CNN</h2></a>
                <p>Trained a convolutional neural network (CNN) with TensorFlow to classify chest X-rays and detect pneumonia with 93% accuracy. Utilized a dataset of 5,863 pediatric X-ray images.</p>
            </div>

            <div className="project">
                <a href="https://github.com/username/portfolio" target="_blank" rel="noreferrer"><img src={portfolio} className="zoom" alt="Portfolio Thumbnail" width="100%"/></a>
                <a href="https://github.com/username/portfolio" target="_blank" rel="noreferrer"><h2>Personal Portfolio Website</h2></a>
                <p>Built a responsive portfolio website to showcase projects and professional experience. Designed with React and integrated GitHub repositories for live project demonstrations.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
