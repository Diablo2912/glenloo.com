import "./Timeline.css";
import { experience } from "../constants";

/**
 * Timeline
 * Vertical, alternating-side timeline with a center line, circular
 * logo markers, and a date label beside each marker.
 *
 * Props:
 * - items: Array<{
 *     logo?: string,        image url for the marker (optional)
 *     initials?: string,    fallback text if no logo image (e.g. "DSO")
 *     role: string,
 *     org: string,
 *     period: string,       e.g. "Apr 2026 - Jul 2026"
 *     bullets: string[]     supports `code` and **bold** inline
 *   }>
 *   Defaults to the `experience` array from constants if not passed.
 */
export default function Timeline({ items = experience }) {
  return (
    <div className="tl" id="experience">
      <h2 className="tl-heading">Experience</h2>
      <div className="tl-body">
        <div className="tl-line" aria-hidden="true" />
        {items.map((item, idx) => {
          const cardOnLeft = idx % 2 === 0;
          return (
            <div className="tl-row" key={`${item.org}-${idx}`}>
              <div className="tl-col tl-col-left">
                {cardOnLeft ? (
                  <TimelineCard item={item} align="left" />
                ) : (
                  <TimelinePeriod period={item.period} align="left" />
                )}
              </div>

              <div className="tl-marker-col">
                <div className="tl-marker">
                  {item.logo ? (
                    <img src={item.logo} alt="" className="tl-marker-img" />
                  ) : (
                    <span className="tl-marker-initials">{item.initials}</span>
                  )}
                </div>
              </div>

              <div className="tl-col tl-col-right">
                {cardOnLeft ? (
                  <TimelinePeriod period={item.period} align="right" />
                ) : (
                  <TimelineCard item={item} align="right" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelinePeriod({ period, align }) {
  return (
    <div className={`tl-period tl-period-${align}`}>
      <span>{period}</span>
    </div>
  );
}

function TimelineCard({ item, align }) {
  return (
    <div className={`tl-card tl-card-${align}`}>
      <p className="tl-card-period">{item.period}</p>
      <h3 className="tl-role">{item.role}</h3>
      <p className="tl-org">{item.org}</p>
      <ul className="tl-bullets">
        {item.bullets.map((bullet, i) => (
          <li key={i}>{renderInline(bullet)}</li>
        ))}
      </ul>
    </div>
  );
}

// Turns `code` into <code>, **bold** into <strong>, and [text](url) into <a>
function renderInline(text) {
  const parts = text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, url] = linkMatch;
      return (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="tl-bullet-link"
        >
          {label}
        </a>
      );
    }
    return <span key={i}>{part}</span>;
  });
}