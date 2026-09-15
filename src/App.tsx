import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router'
import Masthead from '@/components/newspaper/Masthead'
import Footer from '@/components/newspaper/Footer'
import Home from '@/pages/Home'
import Experience from '@/pages/Experience'
import Projects from '@/pages/Projects'
import Education from '@/pages/Education'
import Contact from '@/pages/Contact'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Masthead />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
