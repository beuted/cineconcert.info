import AnimateOnScroll from './AnimateOnScroll'

export default function PageHero({ title, image, height = 300, bgPosition = 'center' }) {
  return (
    <section
      className="page-hero page-hero--image"
      style={{ '--hero-height': `${height}px`, '--hero-bg-position': bgPosition }}
    >
      <div
        className="page-hero-bg"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="page-hero-inner">
        <AnimateOnScroll>
          <h1>{title}</h1>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
