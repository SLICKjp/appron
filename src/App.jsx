import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import TrustBar from './components/TrustBar/TrustBar'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Cuisines from './components/Cuisines/Cuisines'
import Difference from './components/Difference/Difference'
import StoryBanner from './components/StoryBanner/StoryBanner'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Cuisines />
      <Difference />
      <StoryBanner />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
