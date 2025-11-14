import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import DataBase from '../../assets/database.png';
import softskill from '../../assets/softskill.png';
import aiNcloud from '../../assets/ai&cloud.png';
import programming from '../../assets/programming.png';
import tool from '../../assets/git.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I Do</span>

            <span className="skillDesc">
                Passionate about crafting digital experiences with a strong focus on 
                UI/UX design, programming, cloud technologies, and building efficient 
                AI-driven solutions. I love turning ideas into functional, clean, and 
                user-friendly products.
            </span>

            <div className="skillBars">

                {/* UI/UX Design */}
                <div className="skillBar">
                    <img src={UIDesign} alt="UI/UX Design" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>UI/UX Design</h2>
                        <p>Designing clean, modern, and user-centered interfaces with a focus on usability and visual balance.</p>
                    </div>
                </div>

                {/* Programming */}
                <div className="skillBar">
                    <img src={programming} alt="Programming" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Programming</h2>
                        <p>C, C++, Python, and Java with strong OOP fundamentals, efficient logic building, and problem-solving skills.</p>
                    </div>
                </div>

                {/* Web Development */}
                <div className="skillBar">
                    <img src={WebDesign} alt="Web Development" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Web Development</h2>
                        <p>Building responsive and clean websites using HTML, CSS, JavaScript, and React — focused on speed and user experience.</p>
                    </div>
                </div>

                {/* Databases */}
                <div className="skillBar">
                    <img src={DataBase} alt="Database" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Databases</h2>
                        <p>Hands-on experience with MySQL and MongoDB for efficient data management and querying.</p>
                    </div>
                </div>

                {/* AI & Cloud */}
                <div className="skillBar">
                    <img src={aiNcloud} alt="AI & Cloud" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>AI & Cloud</h2>
                        <p>Working with AI models, Gemini API, Python automation, and deploying applications on cloud platforms.</p>
                    </div>
                </div>

                {/* Tools */}
                <div className="skillBar">
                    <img src={tool} alt="Tools" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Development Tools</h2>
                        <p>Experienced with Git, GitHub, VS Code, Netlify, and Colab for version control and deployment.</p>
                    </div>
                </div>

                {/* Soft Skills */}
                <div className="skillBar">
                    <img src={softskill} alt="Soft Skills" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Soft Skills</h2>
                        <p>Strong communication, teamwork, adaptability, leadership, and time management abilities.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Skills;
