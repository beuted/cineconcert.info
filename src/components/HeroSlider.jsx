import { heroSlider } from '../data/content'

export default function HeroSlider() {
  const { image, announcement } = heroSlider

  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight * 0.7, behavior: 'smooth' })
  }

  return (
    <section className="hero-slider">
      <div className="hero-slide">
        <div
          className="hero-slide-bg"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="hero-announcement animate-fade-up">
          <p className="announcement-label">{announcement.label}</p>
          <p className="announcement-title">
            <strong>{announcement.title}</strong>
            <br />
            <strong>{announcement.date}</strong>
          </p>
          <p className="announcement-venue">
            <strong>{announcement.venue}</strong>
            <br />
            <strong>{announcement.city}</strong>
          </p>
        </div>
      </div>

      <button className="slider-down-arrow" onClick={scrollDown} aria-label="Défiler vers le bas">
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </button>
    </section>
  )
}
