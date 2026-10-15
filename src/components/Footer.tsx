import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <section className="footer-contact" aria-labelledby="footer-contact-heading">
        <div className="shell footer-contact-inner">
          <div className="footer-contact-copy">
            <p className="eyebrow">Have something in mind?</p>
            <h2 id="footer-contact-heading">Let&apos;s build it well.</h2>
          </div>
          <a className="button button-primary footer-contact-button" href="mailto:aigconfidence@gmail.com">
            Start a conversation
            <ArrowIcon />
          </a>
        </div>
      </section>

      <div className="shell footer-bottom">
        <div className="footer-brand">
          <Link className="brand" href="/" aria-label="Codefidence home">codefidence<span aria-hidden="true">.</span></Link>
          <p>© {currentYear} Codefidence.</p>
        </div>
        <nav className="footer-links" aria-label="Contact links">
          <a href="https://github.com/C4Confidence" target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(opens in a new tab)</span></a>
          <a href="mailto:aigconfidence@gmail.com">Email</a>
        </nav>
      </div>
    </footer>
  );
}
