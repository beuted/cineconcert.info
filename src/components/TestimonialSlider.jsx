import { useEffect, useState } from 'react'

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (testimonials.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 20000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const goTo = (index) => setCurrent(index)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const item = testimonials[current]

  return (
    <div className="testimonial-slider">
      <blockquote key={current} className="testimonial-quote animate-fade">
        <p>
          <span className="open-quote">"</span>
          {item.quote}
          <span className="close-quote">"</span>
        </p>
        <span className="testimonial-name">{item.name}</span>
        {item.title && <span className="testimonial-title">{item.title}</span>}
      </blockquote>

      {testimonials.length > 1 && (
        <div className="testimonial-controls">
          <button onClick={prev} aria-label="Précédent">‹</button>
          <div className="testimonial-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={i === current ? 'active' : ''}
                onClick={() => goTo(i)}
                aria-label={`Témoignage ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Suivant">›</button>
        </div>
      )}
    </div>
  )
}
