import { getContactEmail } from '../utils/contactEmail'

export default function ObfuscatedEmail({ className = '' }) {
  const email = getContactEmail()
  const at = String.fromCharCode(64)
  const [local, host] = email.split(at)

  const openMail = (event) => {
    event.preventDefault()
    window.location.href = `mailto:${email}`
  }

  return (
    <a
      href="#contact"
      onClick={openMail}
      className={`obfuscated-email ${className}`.trim()}
      title="Envoyer un e-mail"
    >
      <span className="obfuscated-email__local">{local}</span>
      <span className="obfuscated-email__at">{at}</span>
      <span className="obfuscated-email__domain">{host}</span>
    </a>
  )
}
