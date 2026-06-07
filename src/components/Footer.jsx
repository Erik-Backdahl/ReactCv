import "./Footer.css";

export default function Footer({ onEmailClick }) {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2026 Erik Bäckdahl. All rights reserved.</p>
        <nav aria-label="Social links">
          <a
            id="emailBtn"
            onClick={(e) => {
              e.preventDefault();
              onEmailClick?.();
            }}
          >Email
          </a>
          <a
            href="https://www.linkedin.com/in/erik-b%C3%A4ckdahl/"
            target="_blank"
            rel="noreferrer"
          >LinkedIn
          </a>
          <a
            href="https://github.com/Erik-Backdahl"
            target="_blank"
            rel="noreferrer"
          >GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
