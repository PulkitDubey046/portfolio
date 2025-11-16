import React, { useState } from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import DataBase from '../../assets/database.png';
import softskill from '../../assets/softskill.png';
import aiNcloud from '../../assets/ai&cloud.png';
import programming from '../../assets/programming.png';
import tool from '../../assets/git.png';

const Skills = () => {
    const allSkills = [
        {
            img: UIDesign,
            title: 'UI/UX Design',
            desc: 'Designing clean, modern, and user-centered interfaces with a focus on usability and visual balance.'
        },
        {
            img: programming,
            title: 'Programming',
            desc: 'C, C++, Python, and Java with strong OOP fundamentals, efficient logic building, and problem-solving skills.'
        },
        {
            img: WebDesign,
            title: 'Web Development',
            desc: 'Building responsive and clean websites using HTML, CSS, JavaScript, and React — focused on speed and user experience.'
        },
        {
            img: DataBase,
            title: 'Databases',
            desc: 'Hands-on experience with MySQL and MongoDB for efficient data management and querying.'
        },
        {
            img: aiNcloud,
            title: 'AI & Cloud',
            desc: 'Working with AI models, Gemini API, Python automation, and deploying applications on cloud platforms.'
        },
        {
            img: tool,
            title: 'Development Tools',
            desc: 'Experienced with Git, GitHub, VS Code, Netlify, and Colab for version control and deployment.'
        },
        {
            img: softskill,
            title: 'Soft Skills',
            desc: 'Strong communication, teamwork, adaptability, leadership, and time management abilities.'
        }
    ];

    const [visibleCount, setVisibleCount] = useState(3);

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
                {allSkills.slice(0, visibleCount).map((skill, index) => (
                    <div className="skillBar" key={index}>
                        <img src={skill.img} alt={skill.title} className="skillBarImg" />
                        <div className="skillBarText">
                            <h2>{skill.title}</h2>
                            <p>{skill.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {visibleCount < allSkills.length ? (
                <button className="seeMoreBtn" onClick={() => setVisibleCount(allSkills.length)}>
                    Show More
                </button>
            ) : (
                <button className="seeMoreBtn" onClick={() => setVisibleCount(3)}>
                    Show Less
                </button>
            )}

        </section>
    );
}

export default Skills;
