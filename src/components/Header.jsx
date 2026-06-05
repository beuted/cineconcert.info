import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { IMAGES } from '../data/content'

const navItems = [
  { label: 'ACCUEIL', path: '/' },
  { label: 'PARIS QUI DORT', path: '/paris-qui-dort' },
  { label: 'SEPT ANS DE MALHEUR', path: '/sept-ans-de-malheur' },
  { label: 'QUI SOMMES-NOUS ?', path: '/qui-sommes-nous' },
  { label: 'CONTACT', path: '/contact', solid: true },
]

export default function Header({ transparent = false }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isLight = transparent && !scrolled

  return (
    <>
      <header className={`site-header ${isLight ? 'transparent' : 'solid'} ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <Link to="/" className="logo-link">
            <img
              src={isLight ? IMAGES.logoWhite : IMAGES.logo}
              alt="Cineconcert"
              className="logo"
            />
          </Link>

          <button
            className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="lines" />
          </button>

          <nav className="main-nav">
            <ul>
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${item.solid ? 'solid' : 'bordered'} ${
                      location.pathname === item.path ? 'active' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />
      <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={() => setMenuOpen(false)} aria-label="Fermer">
          ×
        </button>
        <ul>
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={location.pathname === item.path ? 'active' : ''}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
