import Layout from '../components/Layout'
import PageHero from '../components/PageHero'
import AnimateOnScroll from '../components/AnimateOnScroll'
import YouTubeEmbed from '../components/YouTubeEmbed'
import TestimonialSlider from '../components/TestimonialSlider'
import ContactSection from '../components/ContactSection'
import { septAnsTestimonials, VIDEOS, IMAGES } from '../data/content'

export default function SeptAnsDeMalheur() {
  return (
    <Layout transparentHeader mainClassName="film-page">
      <PageHero
        title="Sept ans de malheur"
        image={IMAGES.septAnsHeader}
        height={350}
        bgPosition="top"
      />

      <section className="film-content-band">
        <div className="film-content-grid">
          <AnimateOnScroll className="film-text-col">
            <p className="film-intro">
              <em><strong>« Sept ans de malheur »</strong> de Max LINDER 1921 (durée 62 min) restauré par le CNC</em>
            </p>
            <p>
              Le lendemain de l'enterrement de sa vie de garçon, Max brise un miroir. Superstitieux, il essaie d'éviter les situations qui pourraient lui porter malheur. Mais en agissant ainsi, le résultat est catastrophique, et Max doit se sortir de bien des situations embarrassantes et reconquérir le cœur de sa fiancée.
            </p>
            <p>
              Max Linder, en tant que réalisateur et acteur, créât, avec son film «Sept ans de malheur», des cascades époustouflantes et un enchaînement de gags irrésistibles. Parmi eux, la fameuse scène du miroir brisé, qui sera reprise par nombre d'acteurs dont les Max Brothers. Charlie Chaplin reconnaissait à quel point son style était redevable de l'influence de Linder, au point de fermer ses studios le jour de sa mort.
            </p>
            <p>
              Nous avons créé un collage musical à partir de musiques provenant du classique mais aussi du jazz et de la chanson française du début du XXe siècle. Des bruitages nous permettant également de « coller » aux images, et de soutenir l'action
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="film-media-col">
            <YouTubeEmbed
              videoId={VIDEOS.septAnsDeMalheur.id}
              title={VIDEOS.septAnsDeMalheur.title}
            />
            <img
              src={IMAGES.septAns}
              alt="Sept ans de malheur"
              className="film-poster"
            />
          </AnimateOnScroll>
        </div>
      </section>

      <section className="page-content">
        <AnimateOnScroll className="testimonials-section">
          <h2>Ils ont dit…</h2>
          <TestimonialSlider testimonials={septAnsTestimonials} />
        </AnimateOnScroll>

        <ContactSection />
      </section>
    </Layout>
  )
}
