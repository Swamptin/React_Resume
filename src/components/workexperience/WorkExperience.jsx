import "./workexperience.css";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Engineering Operations/Tier3 Support | HMH Publishing",
      dates: "11/2019 - Present",
      description:
        "- Triage tickets and resolve or assign them. Track issue trends across products and provide tools to help resolve them faster or pre-emptively fix them.  - Generate runbooks, documentation, and tools to help remediate issues. - Enhance existing tools used across support to allow efficient and effective triaging of issues. - Maintain existing Operations infrastructure including EC2 instances, S3 Buckets, and Aurora PostgreSQL instances. This includes patching and reviewing resource provisioning for cost reduction.",
    },
    {
      id: 2,
      title: "System Test Engineer | Blackbox",
      dates: "08/2018 - 10/2019",
      description:
        "- Design, develop and execute test cases. - Develop tools to replicate Tier3 support issues. These tools were used to rapidly recreate issues that were reported. This improved resolution times for customer issues. - Update and maintain software used for flashing firmware and testing boards before shipping. Resolved an issue where every device was getting the same MAC address assigned at build. Resolved existing issues with the process which reduced the number of boards failing and increased throughput. - Built a number of scripts to automate the deployment of Windows 2012/2016 VM network as part of the test infrastructure. This reduced deployment times for the network from 3 days to less than day.",
    },
    {
      id: 3,
      title: "High Performance Computing Operations Engineer/Developer | General Motors",
      dates: "06/2016 - 07/2018",
      description:
        "- Java and Bash development and maintenance. Projects mostly focussed on improving efficiencies in jobs in order to reduce cost and improve throughput. - In one project I reduced overall cost by migrating secondary functions onto a separate queue which freed up CPU cores to be used by other jobs. - Maintenance and patching of HPC environment (1000+ servers) using Chef and Puppet - Hadoop Operations - providing server management support through Ambari. Managing monthly patch cycles across the Hadoop clusters. - PHP/MySQL - Maintain, enhance, and secure Operations tools. This work reduced engineering time spent on applying upgrades to the HPC environment",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My IT employment history</h5>
      <h2>Past Roles</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <h4>{pro.dates}</h4>
              <p>{pro.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
