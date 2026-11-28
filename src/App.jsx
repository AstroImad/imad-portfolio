import GalaxyBackground from './components/GalaxyBackground'
import Header from './components/Header'
import Projects from './components/Projects'
import useScrollReveal from './components/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <>
      <GalaxyBackground />

      <main>
        <Header />

        {/* 01 / About */}
        <section id="about" aria-labelledby="about-title">
          <p>01 / About</p>
          <h1 id="about-title">Imad Duddin</h1>
          <p className="about-tagline">Data scientist at INVOKE Solutions, Kuala Lumpur</p>

          <div className="about-bio">
            <p>
              I build models that turn survey and public opinion data into forecasts and
              insights that leaders use to make decisions, along with the tools and automation
              that keep the data flowing.
            </p>
            <p>
              I trained as a physicist, so I started out modelling stars and particles, not
              customers. From there I moved into economic analysis with time-series models,
              then into machine learning, and now into deploying apps and APIs on the cloud.
            </p>
            <p>
              That's why I care about the whole data journey, from the raw pipeline to the
              final number. I like understanding why a model gives the answer it does,
              explaining it in plain language, and building things that still work after I
              hand them over.
            </p>
          </div>

          <a className="button" href="/assets/imad-resume.pdf">
            View résumé (PDF)
          </a>
        </section>

        {/* 02 / Projects */}
        <Projects />

        {/* 03 / Contact */}
        <section id="contact" aria-labelledby="contact-title">
          <h2 id="contact-title">03 / Contact</h2>
          <p>Get in touch by email or find me on LinkedIn and GitHub.</p>

          <div className="contact-links">
            <a className="button" href="mailto:muhdimadduddin04@gmail.com">
              Email
            </a>
            <a
              className="button"
              href="https://www.linkedin.com/in/imadjuffri/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              className="button"
              href="https://github.com/AstroImad"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
