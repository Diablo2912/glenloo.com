import { useEffect, useState } from "react";
import "./TextType.css";

/**
 * TextType
 * Cycles through an array of strings with a typewriter effect:
 * types each string out, pauses, deletes it, then moves to the next.
 * If only one string is given, types it once and leaves it (no loop).
 *
 * Props:
 * - text: string[]            words/phrases to cycle through
 * - typingSpeed: number        ms per character while typing (default 70)
 * - deletingSpeed: number      ms per character while deleting (default 40)
 * - pauseDuration: number      ms to hold the full word before deleting (default 1400)
 * - loop: boolean              whether to loop back to the start (default true)
 * - className: string          extra class for the visible text span
 */
export default function TextType({
  text = [],
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseDuration = 1400,
  loop = true,
  className = "",
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  const singleWord = text.length === 1;

  useEffect(() => {
    if (!text.length) return;

    const current = text[wordIndex];
    let timeout;

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, typingSpeed);
      } else if (!singleWord) {
        timeout = setTimeout(() => setPhase("pausing"), pauseDuration);
      }
      // singleWord: fully typed, do nothing further
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, deletingSpeed);
      } else {
        const isLast = wordIndex === text.length - 1;
        if (isLast && !loop) return;
        timeout = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % text.length);
          setPhase("typing");
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, phase, wordIndex, text, typingSpeed, deletingSpeed, pauseDuration, loop, singleWord]);

  return (
    <span className={`text-type ${className}`}>
      {displayed}
      <span className="text-type-cursor" aria-hidden="true" />
    </span>
  );
}