import "./hero.css";

const links = [
  { label: "WORKS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CREATIVE", href: "#creative" },
  { label: "CONTACT", href: "#contact" },
];

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-empty-space" />

      <header className="hero-header">
        <a href="#home" className="hero-brand">
          PORTFOLIO
        </a>

        <nav className="hero-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="hero-menu-link" href="#skills">
          SKILLS <span>↘️</span>
        </a>
      </header>

      <div className="hero-title-area">
        <h1>
          ANJALI PATEL<span>.</span>
        </h1>

        <div className="hero-intro-row">
          <p className="hero-intro">
            An aspiring developer creating interactive
            websites and exploring creative digital experiences.
          </p>

          <div className="hero-socials">
            <a
              href="https://github.com/AnjaliCodeee"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB ↗️
            </a>
            <a
              href="https://linkedin.com/in/anjali-patel-dev67"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗️
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-image-link" aria-label="Explore portfolio">
        <img
          className="hero-banner-image"
          src="/profile.jpg"
          alt="Portrait of Anjali Patel"
        />
      </a>

      <div className="hero-bottom">
        <span>DEVELOPMENT · DESIGN · CURIOSITY</span>
        <a href="#about">SCROLL TO EXPLORE ↓</a>
      </div>
    </section>
  );
}

export default Hero;