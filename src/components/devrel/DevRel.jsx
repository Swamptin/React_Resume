import "./DevRel.css";

import React from "react";

//Workexperience function
const Workexperience = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Podcasting and Radio",
      description:
        "Volunteer Radio Presenting/Producing: Flirt FM NUI Galway (2004-2006), RAG Radio UL (2008), OnFM London (2012), The Back of the Library Podcast (2011-2014). \n Broadcast Radio: RTE Lyric FM - Technical Operator ensuring broadcasts went to air on time. (2008) \n ",
    },
    {
      id: 2,
      title: "Blogging",
      description:
        "Sports blog: <a href=\"http://swamptin.ie/mtb/index.html\">A Mountain Biking Blog</a> about my time training for and taking part in the Biking Blitz series and other race series in Ireland. (2022) \n Tech Blog: <a href=\"http://swamptin.ie/tech/index.html\">A Tech Blog</a> I initially created to help track my progress through learning various secure software and security testing concepts. (2022)",
    },
    {
      id: 3,
      title: "High Performance Computing Operations Engineer/Developer | General Motors",
      description:
        "Java and Bash development and maintenance. Projects mostly focussed on improving efficiencies in jobs in order to reduce cost and improve throughput. \n In one project I reduced overall cost by migrating secondary functions onto a separate queue which freed up CPU cores to be used by other jobs. \n Maintenance and patching of HPC environment (1000+ servers) using Chef and Puppet \n Hadoop Operations - providing server management support through Ambari. Managing monthly patch cycles across the Hadoop clusters. \n Maintain, enhance, and secure Operations tools. This work reduced engineering time spent on applying upgrades to the HPC environment",
    },
  ];

  const createBulletedList = (str) =>
  str.split('\n').map((subStr) => {
    return (
      <>
        <li>{' \u25CF ' + subStr}</li>
      </>
    );
  });

  return (
    <section id="devrel">
      <h2>Past Roles</h2>

      <div className="container devrel__container">
        {soloProjects.map((pro) => (
          <article className="devrel__item" key={pro.id}>
            <div className="devrel__item-content">
              <h3>{pro.title}</h3>
              <h4>{pro.dates}</h4>
              <p>{createBulletedList(pro.description)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default DevRel;
