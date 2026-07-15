import { AppleIcon, PlayStoreIcon } from '../Icons/Icons'
import './cta.css'

function CTA() {
  return (
    <section id="book" className="cta">
      <div className="container cta-inner">
        <p className="eyebrow eyebrow-light eyebrow-center">Get the app</p>
        <h2 className="cta-title">Book your cook today.</h2>
        <p className="cta-text">
          Stop settling for cold bowls and restaurant food that tastes the same
          everywhere. Your next great meal is made at home, by someone who grew up
          cooking it.
        </p>

        <div className="cta-store-badges">
          <a href="#" className="cta-store-badge">
            <AppleIcon />
            <span>
              <small>Download on the</small>
              <strong>App Store</strong>
            </span>
          </a>
          <a href="#" className="cta-store-badge">
            <PlayStoreIcon />
            <span>
              <small>GET IT ON</small>
              <strong>Google Play</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
