import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import "./Projects.css";

/**
 * Projects
 * Renders a 3-per-row grid of ProjectCard, collapsing to fewer
 * columns on smaller screens.
 *
 * Props:
 * - items: same shape as the `projects` array in constants.
 *   Defaults to `projects` from constants if not passed.
 */
export default function Projects({ items = projects }) {
  return (
    <section className="projects-section" id="projects">
      <h2 className="project-heading">Projects</h2>

      <div className="projects-grid">
        {items.map((project, idx) => (
          <ProjectCard key={`${project.title}-${idx}`} {...project} />
        ))}
      </div>
    </section>
  );
}