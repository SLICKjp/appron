import { ShieldIcon, PinIcon, ClockIcon, StarIcon } from '../Icons/Icons'
import './trustbar.css'

const items = [
  { icon: ShieldIcon, text: 'Background-verified cooks' },
  { icon: PinIcon, text: 'Mumbai · Delhi · Bengaluru · Hyderabad & more' },
  { icon: ClockIcon, text: 'Book with 24h notice' },
  { icon: StarIcon, text: '4.9 avg rating across 14,000+ bookings' },
]

function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container trust-bar-inner">
        {items.map(({ icon: Icon, text }) => (
          <span className="trust-item" key={text}>
            <Icon />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TrustBar
