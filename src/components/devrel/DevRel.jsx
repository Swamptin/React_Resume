import "./DevRel.css";

import React from "react";

//DevRel function
const DevRel = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Podcasting and Radio",
      description:
        "Volunteer Radio Presenting/Producing: Flirt FM NUI Galway (2004-2006), RAG Radio UL (2008), OnFM London (2012), The Back of the Library Podcast (2011-2014). \n Broadcast Radio: RTE Lyric FM - Technical Operator ensuring broadcasts went to air on time. (2008)",
      technologies: "Adobe Audition | SAM Broadcaster | OBS ",
      link: "https://www.mixcloud.com/eoghanbrien/"
    },
    {
      id: 2,
      title: "Blogging",
      description:
        "swamptin.ie/mtb/index.html : A Mountain Biking Blog about my time training for and taking part in the Biking Blitz series and other race series in Ireland. (2022) \n swamptin.ie/tech/index.html : A tech blog I initially created to help track my progress through learning various secure software and security testing concepts. (2022)",
      technologies: "HTML | CSS",
      link: "http://swamptin.ie"
    },
  ];

  const createBulletedList = (str) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        <li>{' \u2013 ' + subStr}</li>
      </>
    );
  });

  return (
    <section id="devrel">
      <h2>DevRel Adjacent Experience</h2>

      <div className="container devrel__container">
        {soloProjects.map((pro) => (
          <article className="devrel__item" key={pro.id}>
            <div className="devrel__item-content">
              <h3>{pro.title}</h3>
              <p>{createBulletedList(pro.description)}</p>
              <p>{pro.technologies}</p>
              <p>
                <a
                  href={pro.link}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                 Link
                </a>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DevRel;
