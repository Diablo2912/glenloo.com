import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../constants";
import "./Projects.css";

/**
 * Projects
 * Renders a 3-per-row grid of ProjectCard, collapsing to fewer
 * columns on smaller screens. Heading animates in on scroll.
 *
 * Props:
 * - items: same shape as the `projects` array in constants.
 *   Defaults to `projects` from constants if not passed.
 */
export default function Projects({ items = projects }) {
  const headingRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = headingRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects-section" id="projects">
      <h2
        ref={headingRef}
        className={`project-heading ${visible ? "project-heading-visible" : ""}`}
      >
        Projects
      </h2>

      <div className="projects-grid">
        {items.map((project, idx) => (
          <ProjectCard key={`${project.title}-${idx}`} {...project} />
        ))}
      </div>
    </section>
  );
}