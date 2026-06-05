import ObfuscatedEmail from './ObfuscatedEmail'

export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Contact</h2>
      <p className="contact-text">
        Vous pouvez nous contacter à l'adresse{' '}
        <ObfuscatedEmail />
      </p>
    </section>
  )
}
