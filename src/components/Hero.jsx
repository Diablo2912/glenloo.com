import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TextType from "./TextType";
import { rotating_words } from "../constants";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
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
        aria-label="Scroll to Experience section"
      >
        <span className="hero-scroll-mouse">
          <span className="hero-scroll-dot" />
        </span>
      </a>
    </section>
  );
}