import "./hero.css";

function Hero() {
return (
<section className="hero" id="home">
<header className="hero-header">
<a href="#home" className="hero-logo">
AP<span>.</span>
</a>

    <nav className="hero-nav">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#creative-works">Creative Works</a>
      <a href="#contact">Contact</a>
    </nav>

    <a href="#contact" className="hero-contact">
      Let's talk <span>↗️</span>
    </a>
  </header>

  <div className="hero-main">
    <div className="hero-text">
      <p className="hero-eyebrow">
        <span className="hero-dot"></span>
        DEVELOPER · CREATIVE THINKER
      </p>

      <h1>
        Anjali
        <br />
        <span>Patel.</span>
      </h1>

      <p className="hero-description">
        An aspiring developer who enjoys building
        interactive websites and creative digital
        experiences.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="hero-primary">
          Explore my work <span>↗️</span>
        </a>

        <a href="#about" className="hero-secondary">
          A little about me <span>↓</span>
        </a>
      </div>

      <p className="hero-location">
        BASED IN INDIA <span>·</span> OPEN TO LEARNING
      </p>
    </div>

    <div className="hero-visual">
      <div className="hero-image-glow"></div>

      <div className="hero-image-frame">
        <img
          src="/profile.jpg"
          alt="Portrait of Anjali Patel"
        />
      </div>

      <div className="hero-image-caption">
        <span>THE PERSON BEHIND THE PIXELS</span>
        <span>01 / 05</span>
      </div>
    </div>
  </div>

  <div className="hero-bottom">
    <span>DESIGN WITH INTENTION.</span>
    <a href="#about">SCROLL TO EXPLORE ↓</a>
  </div>
</section>

);
}

export default Hero;