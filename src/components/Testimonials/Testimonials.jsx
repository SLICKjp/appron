import Avatar from '../Avatar/Avatar'
import { QuoteIcon, StarIcon } from '../Icons/Icons'
import './testimonials.css'

const testimonials = [
  {
    quote: 'My mother-in-law was visiting from Amritsar and I was terrified. Sunita made the perfect sarson da saag — not even my mother-in-law could fault the recipe.',
    name: 'Priya Sharma',
    place: 'Gurgaon',
  },
  {
    quote: 'I grew up eating my nani’s Hyderabadi biryani. After she passed I thought I’d never taste it again. Appron changed that. I cried a little, honestly.',
    name: 'Arjun Reddy',
    place: 'Hyderabad',
  },
  {
    quote: 'Not Zomato, not a restaurant — a real person who knows the food. The difference is not small. It is night and day. Every Sunday now. Non-negotiable.',
    name: 'Kavitha Menon',
    place: 'Bengaluru',
  },
]

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow eyebrow-center">What people say</p>
          <h2 className="section-title">They ate. They felt it.</h2>
          <span className="divider" />
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <QuoteIcon className="quote-icon" />
              <p className="testimonial-quote">{t.quote}</p>

              <div className="testimonial-footer">
                <div className="testimonial-person">
                  <Avatar name={t.name} size={40} />
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-place">{t.place}</p>
                  </div>
                </div>
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
