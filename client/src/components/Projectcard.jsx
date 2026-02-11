import "../styles/Projectcard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p className="description">{project.description}</p>
      <p className="tech">{project.tech}</p>

      <div className="project-links">
        <a href={project.github} target="_blank">GitHub</a>
        <a href={project.demo} target="_blank">Live Demo</a>
      </div>
    </div>
  );
}

export default ProjectCard;
