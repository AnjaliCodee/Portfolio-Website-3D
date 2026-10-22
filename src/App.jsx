import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Footer from "./sections/footer";
import "./App.css";

const certificates = [
{
title: "Binary Hacks 4.0",
issuer: "Binary Club · RKGIT",
file: "/certificates/binary-hacks-4.pdf",
},
{
title: "Prompt Wars Competition",
issuer: "IEEE Club · RKGIT",
file: "/certificates/prompt-wars.pdf",
}
];


function App() {
  return (
    <main className="portfolio-shell">
      <Hero />

      <div className="portfolio-content">
        <section id="about" className="portfolio-section">
          <About />
        </section>

        <section id="skills" className="portfolio-section">
          <Skills />
        </section>

        <section id="projects" className="portfolio-section">
          <Projects />
        </section>

        <section id="creative" className="portfolio-section">
          <div className="editorial-section">
            <p className="editorial-kicker">BEYOND THE SCREEN</p>
            <h2>Creative Works.</h2>
            <p>
              Posters, visual experiments, and photographs
              captured along the way.
            </p>
          </div>
        </section>

        


<section className="certificates-section" id="certificates">
  <p className="section-eyebrow">PROOF OF LEARNING</p>

  <h2 className="certificates-title">Certificates<span>.</span></h2>

  <p className="certificates-subtitle">
    A few milestones from my learning journey.
  </p>

  <div className="certificates-grid">
    {certificates.map((certificate, index) => (
      <article className="certificate-card" key={certificate.title}>
        <span className="certificate-number">
          0{index + 1}
        </span>

        <div className="certificate-info">
          <h3>{certificate.title}</h3>
          <p>{certificate.issuer}</p>
        </div>

        <a
          className="certificate-view"
          href={certificate.file}
          target="_blank"
          rel="noreferrer"
        >
          View certificate <span>↗️</span>
        </a>
      </article>
    ))}
  </div>
</section>

        <section id="contact" className="portfolio-section">
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;