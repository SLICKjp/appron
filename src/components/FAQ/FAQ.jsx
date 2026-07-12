import { useState } from 'react'
import { ChevronIcon } from '../Icons/Icons'
import './faq.css'

const faqs = [
  {
    question: 'Is my kitchen safe?',
    answer: 'Yes. Every cook completes a police verification, in-person skills review, and hygiene check before they can accept their first booking on Appron.',
  },
  {
    question: 'Which cuisines are available?',
    answer: 'Over 30 regional cuisines, from Punjabi and Rajasthani to Kerala, Bengali, Hyderabadi and Goan. You can filter cooks by cuisine when you browse.',
  },
  {
    question: 'Do I need to buy the ingredients?',
    answer: 'You can either have your cook shop fresh ingredients on the way, or use what’s already in your kitchen — you choose when you book.',
  },
  {
    question: 'How far in advance must I book?',
    answer: 'Most bookings just need 24 hours notice, though popular cooks in your city may fill up faster around weekends.',
  },
  {
    question: 'Can I book for a special occasion?',
    answer: 'Absolutely — many people book Appron cooks for family gatherings, festivals and small celebrations. Just mention it when you book.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="container container-narrow">
        <div className="section-heading">
          <p className="eyebrow eyebrow-center">Sawaal aur jawaab</p>
          <h2 className="section-title">Things people ask us</h2>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div className="faq-item" key={faq.question}>
                <button className="faq-question" onClick={() => toggle(index)}>
                  {faq.question}
                  <ChevronIcon className={isOpen ? 'chevron chevron-open' : 'chevron'} />
                </button>
                {isOpen && <p className="faq-answer">{faq.answer}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
