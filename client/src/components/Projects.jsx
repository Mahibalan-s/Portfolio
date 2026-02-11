import "../styles/Projects.css";
import projects from "../data/DummyData";
import ProjectCard from "./Projectcard";

function Projects() {
  return (
    <section className="projects fade-in" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
