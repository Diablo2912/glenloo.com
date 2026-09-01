import "./Footer.css";

/**
 * Footer
 * Simple dark footer with a "</> with ❤ by [name]" line and
 * a copyright year range beneath it.
 *
 * Props:
 * - name: string        name shown after "by" (default "Glen Loo")
 * - startYear: number   first copyright year (default 2023)
 * - endYear: number|string  last copyright year, or "Present" (default current year)
 */
export default function Footer({
  name = "Glen Loo",
  startYear = 2023,
  endYear = new Date().getFullYear(),
}) {
  return (
    <footer className="ft">
      <p className="ft-line">
        <span className="ft-tag">{"</>"}</span> with{" "}
        <span className="ft-heart" aria-label="love">
          ❤
        </span>{" "}
        by <span className="ft-name">{name}</span>
      </p>
      <p className="ft-copyright">
        © {startYear} - {endYear}
      </p>
    </footer>
  );
}