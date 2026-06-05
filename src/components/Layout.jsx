import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, transparentHeader = false, mainClassName = '' }) {
  return (
    <div className="site">
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <div className="site-boxed">
        <Header transparent={transparentHeader} />
        <main id="main-content" className={mainClassName}>{children}</main>
        <Footer />
      </div>
    </div>
  )
}
