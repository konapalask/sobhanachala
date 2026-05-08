import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SmoothScroll } from './components/layout/SmoothScroll'
import { Navbar } from './components/layout/Navbar'
import { LoadingScreen } from './components/ui/LoadingScreen'
import { CustomCursor } from './components/ui/CustomCursor'
import { Home } from './pages/Home'
import { Collections } from './pages/Collections'
import { Men } from './pages/Men'
import { Women } from './pages/Women'
import { Traditional } from './pages/Traditional'
import { NewArrivals } from './pages/NewArrivals'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Footer } from './components/layout/Footer'

function App() {
  return (
    <Router>
      <SmoothScroll>
        <div className="relative min-h-screen bg-background text-primary selection:bg-gold selection:text-background">
          <LoadingScreen />
          <CustomCursor />
          <Navbar />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/men" element={<Men />} />
              <Route path="/women" element={<Women />} />
              <Route path="/traditional" element={<Traditional />} />
              <Route path="/new-arrivals" element={<NewArrivals />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  )
}

export default App
