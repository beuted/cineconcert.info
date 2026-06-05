import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ParisQuiDort from './pages/ParisQuiDort'
import SeptAnsDeMalheur from './pages/SeptAnsDeMalheur'
import QuiSommesNous from './pages/QuiSommesNous'
import Contact from './pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/paris-qui-dort" element={<ParisQuiDort />} />
      <Route path="/sept-ans-de-malheur" element={<SeptAnsDeMalheur />} />
      <Route path="/qui-sommes-nous" element={<QuiSommesNous />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}
