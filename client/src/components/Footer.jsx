import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Mahibalan</h3>

        <p>
          © {new Date().getFullYear()} Mahibalan. All rights reserved.
        </p>

        <div className="footer-links">
          <a
            href="https://github.com/Mahibalan-s"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mahibalan-s-427430258/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:mahibalan798@email.com">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
