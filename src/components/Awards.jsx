import { useEffect, useRef, useState } from "react";
import { awards } from "../constants";
import "./Awards.css";

/**
 * Awards
 * Displays a list as a Windows Command Prompt style window
 * (title bar with minimize/maximize/close, blinking cursor prompt).
 * The whole window flies in on scroll; contents appear together
 * once it's in place.
 *
 * Props:
 * - items: string[]   Defaults to `awards` from constants if not passed.
 * - path: string       fake path shown in the title bar and prompt
 */
export default function Awards({ items = awards, path = "C:\\Users\\glen\\awards" }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aw" ref={sectionRef}>
      <h2 className="aw-heading">Awards</h2>
      <div className={`aw-window ${visible ? "aw-window-visible" : ""}`}>
        <div className="aw-titlebar">
          <div className="aw-title">
            <span className="aw-title-icon">C:\</span>
            <span>{path} - Command Prompt</span>
          </div>
          <div className="aw-controls">
            <button type="button" className="aw-btn" aria-label="Minimize">
              &#8211;
            </button>
            <button type="button" className="aw-btn" aria-label="Maximize">
              &#9633;
            </button>
            <button type="button" className="aw-btn aw-btn-close" aria-label="Close">
              &#10005;
            </button>
          </div>
        </div>

        <div className="aw-body">
          <p className="aw-line">
            <span className="aw-prompt">{path}&gt;</span> dir /b awards
          </p>
          {items.map((item, i) => (
            <p className="aw-line aw-entry" key={i}>
              {item}
            </p>
          ))}
          <p className="aw-line aw-final-prompt">
            <span className="aw-prompt">{path}&gt;</span>
            <span className="aw-cursor" aria-hidden="true" /> {/* text cursor */}
          </p>
        </div>
      </div>
    </section>
  );
}