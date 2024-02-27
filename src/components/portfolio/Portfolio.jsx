import "./portfolio.css";

import IMG1 from "../../assets/Rust.png";
import IMG2 from "../../assets/Wedding.png";
import IMG3 from "../../assets/Resume.png";
import IMG4 from "../../assets/ImageChecker.png";
import IMG5 from "../../assets/Potsave.png";
import IMG6 from "../../assets/Health.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Rust Todo",
      img: IMG1,
      description:
        "This is a commandline TODO app written in the Rust programming language. I wrote this to learn more about Rust as a programming language and to see if it was a good fit for future personal projects.",
      technologies: "Rust",
      link: "https://github.com/Swamptin/rust_todo_cli_tool",
    },
    {
      id: 2,
      title: "Wedding Website",
      img: IMG2,
      description:
        "A website I created to share the details of my wedding and collect RSVP info. I wrote it in HTML, PHP, and Javascript as they allowed me to do everything I needed to do.",
      technologies: "HTML | PHP | Javascript",
      link: "http://swamptin.ie/wedding/",
    },
    {
      id: 3,
      title: "Resume Site",
      img: IMG3,
      description:
        "This resume website was built using ReactJS and deployed using the Netlify build infrastructure. The app is primarily ReactJS and HTML. The website is deployed on update to the repository. I took this project on to improve my ReactJS skills at a time when I was put on a React project in my current employer.",
      technologies: "React.js | HTML | CSS",
      link: "https://github.com/Swamptin/React_Resume",
    },
    {
      id: 4,
      title: "Image Checker",
      img: IMG4,
      description:
        "A simple image checker written in Python. I wrote it as a way to confirm, without looking at two images if they were the same image.",
      technologies: "Python",
      link: "https://github.com/Swamptin/ImageChecker",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
