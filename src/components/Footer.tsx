import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

const whatsappMessage = "Hi Confidence! I came across your portfolio at codefidence.de and would love to connect. I'd like to discuss a potential project or collaboration.";
const whatsappUrl = `https://wa.me/4915565440104?text=${encodeURIComponent(whatsappMessage)}`;

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
          <span className="footer-link-item">
            <a href="https://github.com/C4Confidence" target="_blank" rel="noopener noreferrer">GitHub <span className="sr-only">(opens in a new tab)</span></a>
            <span className="footer-link-separator" aria-hidden="true">·</span>
          </span>
          <span className="footer-link-item">
            <a href="https://www.linkedin.com/in/confidence-aigbedion/" target="_blank" rel="noopener noreferrer">LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
            <span className="footer-link-separator" aria-hidden="true">·</span>
          </span>
          <span className="footer-link-item">
            <a href="mailto:aigconfidence@gmail.com">Email</a>
            <span className="footer-link-separator" aria-hidden="true">·</span>
          </span>
          <span className="footer-link-item">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp <span className="sr-only">(opens in a new tab)</span></a>
          </span>
        </nav>
      </div>
    </footer>
  );
}
