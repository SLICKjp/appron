import heroImg from '../../assets/hero.png';
import {AppleIcon,PlayStoreIcon} from '../Icons/Icons';
import './hero.css'

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <p className="eyebrow">— Real food, real cooks</p>

          <h1 className="hero-title">
            A cook in your <em>home.</em>
            <br />
            Fresh food ,<span className="underline-swash">made right.</span>
          </h1>

          <p className="hero-text">
            Appron connects you with verified home cooks who come to your kitchen and
            prepare the regional Indian food you grew up loving — not delivery, not a
            restaurant. A real person. Your kitchen. Asli ghar ka khaana.
          </p>

          <div className="hero-store-badges">
            <a href="#" className="hero-store-badge">
              <AppleIcon />
              <span>
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
            <a href="#" className="hero-store-badge">
              <PlayStoreIcon />
              <span>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="hero-media">
          <img src={heroImg} alt="Spices laid out for home cooking" className="hero-img" />

       
        </div>
      </div>
    </section>
  )
}

export default Hero
