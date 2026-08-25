import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

const EMAIL = "glenloo2007@gmail.com";

export default function Contact() {
  return (
    <section id="contact" className="ct">
      <div className="ct-container">
        <p className="ct-eyebrow">Contact</p>
        <h2 className="ct-heading">Let's build something together</h2>
        <p className="ct-sub">
          Have a role, project, or just want to talk cybersecurity? My inbox
          is open — I usually reply within a day or two.
        </p>

        <a href={`mailto:${EMAIL}`} className="ct-cta">
          {EMAIL}
          <ArrowUpRight size={16} />
        </a>

        <div className="ct-socials">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="ct-social-link"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="ct-social-link"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="ct-social-link"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}