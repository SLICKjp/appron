import { ArrowRightIcon, PlateIcon } from '../Icons/Icons'
import './cuisines.css'

const cuisines = [
  { name: 'Punjabi', region: 'North India', dishes: 'Dal Makhani · Sarson da Saag · Chole Bhature' },
  { name: 'Kerala', region: 'South India', dishes: 'Fish Molee · Appam · Kerala Sadhya' },
  { name: 'Bengali', region: 'East India', dishes: 'Shorshe Ilish · Kosha Mangsho · Mishti Doi' },
  { name: 'Rajasthani', region: 'West India', dishes: 'Dal Baati Churma · Laal Maas · Gatte ki Sabzi' },
  { name: 'Hyderabadi', region: 'Deccan', dishes: 'Dum Biryani · Haleem · Mirchi ka Salan' },
  { name: 'Goan', region: 'Coastal India', dishes: 'Prawn Balchão · Vindaloo · Bebinca' },
]

function Cuisines() {
  return (
    <section id="cuisines" className="cuisines">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow eyebrow-center">India on a plate</p>
          <h2 className="section-title">Every region. Every recipe.</h2>
          <p className="section-subtext">
            India has 28 states and 8 union territories, each with a culinary tradition of
            its own. Our cooks carry those traditions into your kitchen.
          </p>
          <span className="divider" />
        </div>

        <div className="cuisines-grid">
          {cuisines.map((cuisine) => (
            <div className="cuisine-card" key={cuisine.name}>
              <PlateIcon className="cuisine-icon" />
              <h3 className="cuisine-name">{cuisine.name}</h3>
              <p className="cuisine-region">{cuisine.region}</p>
              <p className="cuisine-dishes">{cuisine.dishes}</p>
            </div>
          ))}
        </div>

        <a href="#cuisines" className="link-arrow center">
          See all 30+ cuisines <ArrowRightIcon />
        </a>
      </div>
    </section>
  )
}

export default Cuisines
