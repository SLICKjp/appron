import collageImg from '../../assets/difference-collage.png'
import './difference.css'

const points = [
  {
    title: 'Freshly cooked, not reheated',
    text: 'Everything is made on-site with your ingredients or ones your cook sources fresh that morning — the right masala, the right taste.',
  },
  {
    title: 'Regional expertise',
    text: 'Our cooks grew up making these dishes. They know whether to add mustard oil or ghee, and exactly when to add the hing.',
  },
  {
    title: 'Your kitchen, your preferences',
    text: 'Jain, vegan, no onion-garlic, extra mirchi — you set the terms. Your cook respects them, every time.',
  },
  {
    title: 'Fully insured and verified',
    text: 'Every cook completes a police verification, in-person skills review, and hygiene check before joining Appron.',
  },
]

function Difference() {
  return (
    <section className="difference">
      <div className="container difference-inner">
        <img src={collageImg} alt="A home-cooked thali and tiffin, not a delivery box" className="difference-img" />

        <div className="difference-content">
          <p className="eyebrow">The difference</p>
          <h2 className="section-title">
             

            Food that actually <em>tastes like home</em>
          </h2>
          <p className="difference-text">
            Delivery food travels in a box. Restaurant food is made for a hundred people
            at a time. Appron is different entirely — a person who knows the cuisine, in
            your space, cooking the way they were taught to.
          </p>

          <ul className="difference-list">
            {points.map((point) => (
              <li className="difference-item" key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Difference
