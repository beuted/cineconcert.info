import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import AnimateOnScroll from '../components/AnimateOnScroll'
import YouTubeEmbed from '../components/YouTubeEmbed'
import TestimonialSlider from '../components/TestimonialSlider'
import ContactSection from '../components/ContactSection'
import { parisQuiDortTestimonials, VIDEOS, IMAGES } from '../data/content'

export default function ParisQuiDort() {
  return (
    <Layout transparentHeader mainClassName="film-page">
      <PageHero
        title="Paris qui dort"
        image={IMAGES.parisQuiDortHeader}
        height={300}
        bgPosition="center"
      />

      <section className="film-content-band">
        <div className="film-content-grid">
          <AnimateOnScroll className="film-text-col">
            <p className="film-intro">
              <em><strong>« Paris qui dort »</strong> film de René Clair (durée : 60mn)</em>
            </p>
            <p>
              Ce film met en lumière Paris et la Tour Eiffel de façon unique.
              L'histoire mystérieuse et fantastique de ce Paris endormi est à la fois comique et poétique : la Tour Eiffel y est filmée sous tous les angles, certaines scènes sont à peine imaginables…
              Les musiques de Satie, Joplin, Debussy et Fauré, pour ne citer que ces compositeurs mettent en valeur ce Paris des années 20.
              Elles accompagnent le film de René Clair et sont interprétées par un trio classique piano, violoncelle et flûte : Isabelle Poulain, Sabine Jehanno et Marie Tournemouly.
              De plus, les musiciennes proposent une première partie composée d'œuvres de compositeurs de la même époque, Ravel, Fauré, Debussy, Satie… en formation duo et trio (durée modulable selon le public).
              Pour conclure et en fonction de la demande de l'organisateur, un débat s'établit entre les artistes et le public.
              Il est possible de faire deux séances dans la même journée, une pour les scolaires, l'autre tout public.
              <em> La location du film est à la charge de l'organisateur auprès du distributeur.</em>
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="film-media-col">
            <YouTubeEmbed
              videoId={VIDEOS.parisQuiDort.id}
              title={VIDEOS.parisQuiDort.title}
            />
            <p className="credit">Avec l'aimable autorisation de Cristal TV</p>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="page-content">
        <AnimateOnScroll className="testimonials-section">
          <h2>Ils ont dit…</h2>
          <TestimonialSlider testimonials={parisQuiDortTestimonials} />
        </AnimateOnScroll>

        <ContactSection />
      </section>
    </Layout>
  )
}
