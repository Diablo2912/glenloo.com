import { awards } from "../constants";
import "./Awards.css";

/**
 * Awards
 * Displays a list as a Windows Command Prompt style window
 * (title bar with minimize/maximize/close, blinking cursor prompt).
 *
 * Props:
 * - items: string[]   Defaults to `awards` from constants if not passed.
 * - path: string       fake path shown in the title bar and prompt
 */
export default function Awards({ items = awards, path = "C:\\Users\\glen\\awards" }) {
  return (
    <section className="aw">
    <h2 className="aw-heading">Awards</h2>
      <div className="aw-window">
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
          <p className="aw-line">
            <span className="aw-prompt">{path}&gt;</span>
            <span className="aw-cursor" aria-hidden="true" /> {/* text cursor */}
          </p>
        </div>
      </div>
    </section>
  );
}