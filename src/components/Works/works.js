import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
    return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. 
            I am excited to bring my skills and experience to help businesses achieve their goals and create a strong online presence.
        </span>

        {/* Images Section */}
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>

        <button className="workBtn">See More</button>

        {/* ---------- Your Added Project Cards ---------- */}
        <section id="projects" className="projectsSection">
            <h2 className="projectsHeading">Projects</h2>

            {/* Card 1 */}
            <div className="projectCard">
                <h3 className="projectTitle">Balaji Computer Academy Website</h3>
                <p className="techStack">Tech Stack: HTML, CSS, JavaScript, Bootstrap</p>
                <p>
                    Developed a responsive, SEO-friendly educational website with course
                    listings and contact sections. Achieved top ranking in Google search results for the academy's brand keywords...
                </p>
                <a 
                    href="https://balajicomputeracademy.netlify.app/" 
                    target="_blank" rel="noopener noreferrer"
                    className="projectLink"
                >
                    View Project
                </a>
            </div>

            {/* Card 2 */}
            <div className="projectCard">
                <h3 className="projectTitle"> AI Career Path Guide</h3>
                <p className="techStack">Tech Stack:  Streamlit, Gemini AI, Python</p>
                <p>
                    Built an AI-driven web application that provides personalized career guidance
                    based on user education and interests.
                </p>
                <a 
                    href="https://career-path-guide-pulkitdubey046.streamlit.app/" 
                    target="_blank" rel="noopener noreferrer"
                    className="projectLink"
                >
                    View Project
                </a>
            </div>

            {/* Card 3 */}
            <div className="projectCard">
                <h3 className="projectTitle">Personal Portfolio Website</h3>
                <p className="techStack">Tech Stack: React, CSS, GitHub, Netlify</p>
                <p>
                    A modern portfolio to showcase projects, skills, and contact information with smooth animations,
                    responsive design and continuous deployment configured.
                </p>
                <a 
                    href="https://pulkitdubey.netlify.app/" 
                    target="_blank" rel="noopener noreferrer"
                    className="projectLink"
                >
                    View Project
                </a>
            </div>
        
            {/* Card 4 */}
            <div className="projectCard">
                <h3 className="projectTitle">Pomodoro Timer App </h3>
                <p className="techStack">Tech Stack: HTML, CSS, JavaScript, GitHub Pages</p>
                <p>
                    A web-based Pomodoro Timer inspired by Pomofocus.io. 
                    Built by Pulkit Dubey, it brings structure and focus to your workflow 
                    using the proven Pomodoro Technique.
                </p>
                <a 
                    href="https://pulkitdubey046.github.io/Pomodoro-app/" 
                    target="_blank" rel="noopener noreferrer"
                    className="projectLink"
                >
                    View Project
                </a>
            </div>
            
            {/* Card 5 */}
            <div className="projectCard">
                <h3 className="projectTitle">Study To Create Website</h3>
                <p className="techStack">Tech Stack: HTML, CSS, JavaScript, Netlify</p>
                <p>
                   A simple and clean library website named "Study To Create" that offers free resources and tutorials for learners to enhance their skills and knowledge.
                </p>
                <a 
                    href="https://studytocreate.netlify.app/" 
                    target="_blank" rel="noopener noreferrer"
                    className="projectLink"
                >
                    View Project
                </a>
            </div>

            {/* Card 6 */}
            <div className="projectCard">
                <h3 className="projectTitle">Youtube Clone</h3>
                <p className="techStack">Tech Stack: HTML, CSS, JavaScript, GitHub Pages</p>
                <p>
                    Youtube-clone is one of the starting project which i made and it was the first project which was deployed through GitHub Pages
                </p>
                <a 
                    href="https://pulkitdubey046.github.io/Youtube-clone/" 
                    target="_blank" rel="noopener noreferrer"
                    className="projectLink"
                >
                    View Project
                </a>
            </div>
        </section>
    </section>
);

}

export default Works;