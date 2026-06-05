import Layout from '../components/Layout'
import AnimateOnScroll from '../components/AnimateOnScroll'
import ObfuscatedEmail from '../components/ObfuscatedEmail'

export default function Contact() {
  return (
    <Layout>
      <section className="page-hero">
        <div className="page-hero-inner">
          <AnimateOnScroll>
            <h1>Contact</h1>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="page-content contact-page">
        <AnimateOnScroll>
          <p className="contact-text large">
            Vous pouvez nous contacter à l'adresse{' '}
            <ObfuscatedEmail />
          </p>
        </AnimateOnScroll>
      </section>
    </Layout>
  )
}
