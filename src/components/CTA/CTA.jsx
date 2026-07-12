import { ArrowRightIcon } from '../Icons/Icons'
import './cta.css'

function CTA() {
  return (
    <section id="book" className="cta">
      <div className="container cta-inner">
        <p className="eyebrow eyebrow-light eyebrow-center">Taiyaar ho?</p>
        <h2 className="cta-title">Aaj hi book karein.</h2>
        <p className="cta-text">
          Stop settling for cold bowls and restaurant food that tastes the same
          everywhere. Your next great meal is made at home, by someone who grew up
          cooking it.
        </p>

        <div className="cta-actions">
          <a href="#book" className="btn btn-light">
            Find a cook near you <ArrowRightIcon />
          </a>
          <a href="#become-a-cook" className="btn btn-outline-light">Become a cook on Appron</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
