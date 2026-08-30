import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import "./Navbar.css";

const LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [activeIdx, setActiveIdx] = useState(null);
  const [hoverIdx, setHoverIdx] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const linkRefs = useRef([]);
  const trackRef = useRef(null);
  const clickLock = useRef(false);
  const clickLockTimeout = useRef(null);

  // Called when a nav link is clicked: lock the scrollspy so the
  // in-flight smooth-scroll animation can't fight the click and
  // flip activeIdx back to the wrong section mid-transition.
  const handleNavClick = (idx) => {
    clickLock.current = true;
    setActiveIdx(idx);
    clearTimeout(clickLockTimeout.current);
    clickLockTimeout.current = setTimeout(() => {
      clickLock.current = false;
    }, 1000); // long enough to cover the smooth-scroll animation
  };

  const measure = (idx) => {
    const el = idx != null ? linkRefs.current[idx] : null;
    const track = trackRef.current;
    if (!el || !track) {
      // No active/hovered link — hide the indicator instead of
      // leaving it frozen at its last position.
      setIndicator((prev) => ({ ...prev, ready: false }));
      return;
    }
    const elRect = el.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    setIndicator({
      left: elRect.left - trackRect.left,
      width: elRect.width,
      ready: true,
    });
  };

  useEffect(() => {
    measure(hoverIdx ?? activeIdx);
    const onResize = () => measure(hoverIdx ?? activeIdx);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hoverIdx, activeIdx]);

  // Apply/remove the .dark class on <html> and persist the choice
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Scrollspy: highlight whichever section is actually in view,
  // not just whichever link was last clicked.
  useEffect(() => {
    const sectionEls = LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean);

    if (!sectionEls.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Ignore intersection updates while a click just triggered a
        // smooth-scroll — otherwise mid-animation frames can overwrite
        // the section the user actually clicked on.
        if (clickLock.current) return;

        // Among sections currently intersecting the "band" below the
        // navbar, pick the one closest to the top of that band.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          const topId = visible[0].target.id;
          const idx = LINKS.findIndex((link) => link.href === `#${topId}`);
          if (idx !== -1) {
            setActiveIdx(idx);
          }
        } else {
          setActiveIdx(null);
        }
      },
      {
        // Treat a section as "current" once it's within this band:
        // starts just below the sticky navbar, ends 60% down the viewport.
        rootMargin: "-72px 0px -60% 0px",
        threshold: 0,
      }
    );

    sectionEls.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      clearTimeout(clickLockTimeout.current);
    };
  }, []);

  return (
    <header className="nb-header">
      <div className="nb-container">
        <div className="nb-row">
          {/* Wordmark */}
          <a href="#top" className="nb-brand" aria-label="Home">
            <span className="nb-brand-name">Glen Loo</span>
          </a>

          {/* Desktop nav with sliding indicator */}
          <nav
            ref={trackRef}
            className="nb-nav"
            onMouseLeave={() => setHoverIdx(null)}
          >
            {LINKS.map((link, idx) => (
              <a
                key={link.label}
                ref={(el) => (linkRefs.current[idx] = el)}
                href={link.href}
                onMouseEnter={() => setHoverIdx(idx)}
                onClick={() => handleNavClick(idx)}
                className={`nb-link ${idx === activeIdx ? "nb-link-active" : ""}`}
              >
                {link.label}
              </a>
            ))}

            {/* sliding underline */}
            <span
              className="nb-indicator"
              style={{
                left: indicator.left,
                width: indicator.width,
                opacity: indicator.ready ? 1 : 0,
              }}
            />
          </nav>

          <div className="nb-actions">
            {/* Dark mode toggle */}
            <button
              type="button"
              onClick={() => setDarkMode((prev) => !prev)}
              className="nb-theme-toggle"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Mobile toggle */}
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="nb-toggle"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`nb-mobile-panel ${mobileOpen ? "nb-mobile-open" : ""}`}>
        <nav className="nb-mobile-nav">
          {LINKS.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                handleNavClick(idx);
                setMobileOpen(false);
              }}
              className={`nb-mobile-link ${idx === activeIdx ? "nb-mobile-link-active" : ""}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#start"
            onClick={() => setMobileOpen(false)}
            className="nb-mobile-cta"
          >
            Resume
            <ArrowUpRight size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
}