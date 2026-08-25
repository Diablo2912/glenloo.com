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
            typingSpeed={80}
            deletingSpeed={45}
            pauseDuration={1500}
            className="hero-rotator"
          />
        </h1>

        <div className="hero-socials">
          <a
            href="https://github.com/Diablo2912"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hero-social-link"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/glen-loo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hero-social-link"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="glenloo2007@gmail.com"
            aria-label="Email"
            className="hero-social-link"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}