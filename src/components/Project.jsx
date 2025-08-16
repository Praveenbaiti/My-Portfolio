import React from "react";

const Project = () => {
  const myProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio using React and CSS.",
      link :"https://github.com/Praveenbaiti/My-Portfolio"
    },
    {
      id: 2,
      title: "Calculator",
      description:"A frontend Calculator project built using HTML, CSS, and JavaScript.",
      link : "https://github.com/Praveenbaiti/Calculator"  
    },
    {
        id: 3,
        title: "Shopping",
        description: "A frontend project showcasing a Shopping with Mens and Womens items.",
        link: "https://github.com/Praveenbaiti/react-shopping-ui"
    },
    {
      id:4,
      title: "IPL",
      description: "A Frontend Project Showcasing a IPL Project With all IPL teams with Players.",
      link : "https://github.com/Praveenbaiti/IPL"
    },
    {
      id:5,
      title: "Mail-Functionality",
      description: "A Mail Functionality web application developed using PHP, MySQL, CodeIgniter, Bootstrap, and JavaScript with features like Inbox, Sent, Draft, Starred, Trash, and View Message.",
      link: "https://github.com/Praveenbaiti/mail-functionality"
    }
  ];

  return (
    <div>
      <section className="page-section full-page">
        <h2>Projects</h2>
        <div className="project-grid">
          {myProjects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="project-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
