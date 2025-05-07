import React from "react";

const Project = () => {
  const myProjects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "My personal portfolio using React and CSS.",
      link :""
    },
    {
      id: 2,
      title: "Food Court Project",
      description:
        "A frontend project showcasing a food court with menus and items.",
      link : "https://github.com/Praveenbaiti/Food-Court"  
    },
    {
        id: 3,
        title: "Shopping",
        description: "A frontend project showcasing a Shopping with Mens and Womens items.",
        link: "https://github.com/Praveenbaiti/react-shopping-ui"
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
