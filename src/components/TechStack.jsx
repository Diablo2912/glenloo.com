import { techStack } from "../constants";
import "./TechStack.css";

/**
 * TechStack
 * Displays technologies grouped by category as pill badges.
 *
 * Props:
 * - groups: Array<{ category: string, items: string[] }>
 *   Defaults to `techStack` from constants if not passed.
 */
export default function TechStack({ groups = techStack }) {
  return (
    <section id="tech-stack" className="ts">
      <div className="ts-container">
        <p className="ts-eyebrow">Tech Stack</p>
        <h2 className="ts-heading">Tools I work with</h2>

        <div className="ts-groups">
          {groups.map((group) => (
            <div className="ts-group" key={group.category}>
              <h3 className="ts-category">{group.category}</h3>
              <div className="ts-pills">
                {group.items.map((item) => (
                  <span className="ts-pill" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}