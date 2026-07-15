import './howitworks.css'

const steps = [
  {
    number: '01',
    title: 'Browse verified cooks',
    text: 'Filter by cuisine, city and availability. Every cook on Appron is background-checked and personally verified before their first booking.',
  },
  {
    number: '02',
    title: 'Book a time that suits you',
    text: 'Pick your date, share your kitchen details, and tell your cook what you’re craving — a Punjabi thali or proper Kerala sadhya, or just amma-style dal chawal.',
  },
  {
    number: '03',
    title: 'They cook. You enjoy.',
    text: 'Your cook arrives, uses your kitchen, prepares everything fresh, and leaves it spotless. You sit down to the best meal you’ve had in months.',
  },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow eyebrow-center">Simple process</p>
          <h2 className="section-title">
            Home-cooked food,<em> in three simple steps</em>
          </h2>
          <span className="divider" />
        </div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
