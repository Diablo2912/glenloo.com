import { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextType from "./TextType";
import { rotating_words } from "../constants";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const node = heroRef.current;
      if (!node) return;

      const { height } = node.getBoundingClientRect();
      // Progress goes from 0 (top, not scrolled) to 1 (scrolled a full hero-height)
      const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const blurAmount = scrollProgress * 10; // up to 10px blur
  const opacity = 1 - scrollProgress * 0.9; // fades most of the way out
  const translateY = scrollProgress * 40; // subtle upward drift as it fades

  return (
    <section className="hero" ref={heroRef}>
      <div
        className="hero-container"
        style={{
          filter: `blur(${blurAmount}px)`,
          opacity,
          transform: `translateY(${-translateY}px)`,
        }}
      >
        <h1 className="hero-heading">
          Hi, I'm Glen I'm a
          <br />
          <TextType
            text={rotating_words}
            typingSpeed={100}
            deletingSpeed={45}
            pauseDuration={1400}
            className="hero-rotator"
          />
        </h1>

        <div className="hero-socials">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hero-social-link"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hero-social-link"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:you@example.com"
            aria-label="Email"
            className="hero-social-link"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>

      <a
        href="#experience"
        className="hero-scroll-indicator"
        style={{ opacity }}
        aria-label="Scroll to Experience section"
      >
        <span className="hero-scroll-mouse">
          <span className="hero-scroll-dot" />
        </span>
      </a>
    </section>
  );
}