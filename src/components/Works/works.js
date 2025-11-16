import React from "react";
import "./works.css";

/* Images */
import BalajiComputerAcademy from "../../assets/portfolio1.png";
import AiCareerPathGuide from "../../assets/portfolio2.png";
import PersonalPortfolio from "../../assets/portfolio3.png";
import Pomodoro from "../../assets/portfolio4.png";
import Study2Create from "../../assets/portfolio5.png";
import Youtube from "../../assets/portfolio6.png";

const Works = () => {
  const projects = [
    {
      img: BalajiComputerAcademy,
      title: "Balaji Computer Academy Website",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      desc: "Responsive, SEO-friendly educational website with courses and contact pages.",
      link: "https://balajicomputeracademy.netlify.app/",
    },
    {
      img: AiCareerPathGuide,
      title: "AI Career Path Guide",
      tech: "Streamlit, Gemini AI, Python",
      desc: "AI-powered tool that provides personalized career guidance.",
      link: "https://career-path-guide-pulkitdubey046.streamlit.app/",
    },
    {
      img: PersonalPortfolio,
      title: "Personal Portfolio Website",
      tech: "React, CSS, GitHub, Netlify",
      desc: "Modern portfolio showcasing skills, projects, and animations.",
      link: "https://pulkitdubey.netlify.app/",
    },
    {
      img: Pomodoro,
      title: "Pomodoro Timer App",
      tech: "HTML, CSS, JavaScript",
      desc: "A productivity timer inspired by Pomofocus.io.",
      link: "https://pulkitdubey046.github.io/Pomodoro-app/",
    },
    {
      img: Study2Create,
      title: "Study To Create Website",
      tech: "HTML, CSS, JavaScript",
      desc: "A clean and simple learning resource platform.",
      link: "https://studytocreate.netlify.app/",
    },
    {
      img: Youtube,
      title: "YouTube Clone",
      tech: "HTML, CSS, JavaScript",
      desc: "My first deployed project built using basic web technologies.",
      link: "https://pulkitdubey046.github.io/Youtube-clone/",
    },
  ];

  return (
    <section id="works" className="works-section">
      <h2 className="worksTitle">My Portfolio</h2>
      <p className="worksDesc">
        I take pride in creating visually appealing, functional and responsive
        digital experiences.
      </p>

      {/* PROJECT GRID */}
      <div className="projectGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <img src={project.img} alt={project.title} className="projectImg" />

            <div className="projectContent">
              <h3 className="projectTitle">{project.title}</h3>
              <p className="techStack">Tech Stack: {project.tech}</p>
              <p className="projectDesc">{project.desc}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projectLink"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
