import bannerImg from '../../assets/story-banner.jpg'
import './storybanner.css'

function StoryBanner() {
  return (
    <section className="story-banner">
      <img src={bannerImg} alt="Every meal carries a story. Let someone who knows it cook it for you." />
    </section>
  )
}

export default StoryBanner
