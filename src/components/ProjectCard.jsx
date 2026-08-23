import { useRef, useState } from "react";
import "./ProjectCard.css";

const TAG_COLORS = ["#5dd0e8", "#7ee787", "#f778ba", "#f0b429", "#a78bfa"];

/**
 * ProjectCard
 * Dark project card with image, title, description, and colored
 * "./tag" labels, with a built-in cursor-tilt effect.
 *
 * Props:
 * - image: string        image url
 * - title: string
 * - description: string
 * - tags: string[]       rendered as "./tag", colors auto-cycled
 * - maxTilt: number      max tilt rotation in degrees (default 10)
 * - scale: number        hover scale factor (default 1.02)
 * - glare: boolean       show the cursor-following glare (default true)
 */
export default function ProjectCard({
  image,
  title,
  description,
  tags = [],
  maxTilt = 10,
  scale = 1.02,
  glare = true,
}) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState(
    "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [glareStyle, setGlareStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * maxTilt;
    const rotateX = -((y - centerY) / centerY) * maxTilt;

    setTransform(
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
    );

    if (glare) {
      const px = (x / rect.width) * 100;
      const py = (y / rect.height) * 100;
      setGlareStyle({
        opacity: 1,
        background: `radial-gradient(circle at ${px}% ${py}%, rgba(255,255,255,0.14), transparent 60%)`,
      });
    }
  };

  const handleMouseLeave = () => {
    setTransform(
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
    );
    setGlareStyle({ opacity: 0 });
  };

  return (
    <div
      ref={cardRef}
      className="project-card"
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-card-image-wrap">
        <img src={image} alt={title} className="project-card-image" />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tags">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className="project-card-tag"
              style={{ color: TAG_COLORS[i % TAG_COLORS.length] }}
            >
              ./{tag}
            </span>
          ))}
        </div>
      </div>

      {glare && <div className="project-card-glare" style={glareStyle} />}
    </div>
  );
}