import "./projects.css";

const projects = [
  {
    number: "01",
    name: "RescueAI",
    category: "AI · RESCUE TECHNOLOGY",
    description:
      "An AI-focused project exploring how intelligent technology can support rescue efforts and help solve real-world problems.",
    tags: ["AI", "Technology", "Development"],
    link: "https://github.com/AnjaliCodeee",
  },
  {
    number: "02",
    name: "3D Portfolio",
    category: "WEB · INTERACTIVE DESIGN",
    description:
      "A personal portfolio exploring modern web design, expressive typography, and interactive digital experiences.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://github.com/AnjaliCodeee",
  },
];

function Projects() {
  return (
    <div className="projects-section">
      <div className="projects-heading">
        <p className="editorial-kicker">SELECTED WORK</p>
        <h2>Things I've been building.</h2>
        <p>Small steps, practical ideas, and projects in progress.</p>
      </div>

      <div className="projects-list">
        {projects.map((project) => (
          <article className="project-row" key={project.number}>
            <span className="project-number">{project.number}</span>

            <div className="project-main">
              <p className="project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>

            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.name} on GitHub`}
            >
              ↗️
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;