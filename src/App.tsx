import { useState, useCallback, useRef, useEffect } from 'react'
import { useUpdateCheck } from './useUpdateCheck'
import { UpdateModal } from './UpdateModal'
import { QRSection } from './QRSection'
import { Header } from './Header'
import { NavDrawer, type NavView } from './NavDrawer'
import { CASIStudy } from './pages/CASIStudy'
import { LessonPlans } from './pages/LessonPlans'
import { TeachingScripts } from './pages/TeachingScripts'
import { PositionBalance } from './pages/PositionBalance'
import { PivotSteering } from './pages/PivotSteering'
import { Edging } from './pages/Edging'
import { Pressure } from './pages/Pressure'
import { TimingCoordination } from './pages/TimingCoordination'
import { AlpineGroups101 } from './pages/AlpineGroups101'
import './App.css'

const WHATSAPP_IMAGE = '/WhatsApp-Brad.jpg'
const BUYMEACOFFEE_IMAGE = '/BuyMeACoffee-whistlerpeak.png'
const SLIDE_COUNT = 2

export default function App() {
  const [view, setView] = useState<NavView>('home')
  const [navOpen, setNavOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const {
    updateAvailable,
    remoteVersion,
    currentVersion,
    currentBuildId,
    dismiss
  } = useUpdateCheck()

  const handleRefresh = () => {
    window.location.reload()
  }

  const goToSlide = useCallback((index: number) => {
    const i = Math.max(0, Math.min(index, SLIDE_COUNT - 1))
    setSlideIndex(i)
    const el = scrollRef.current
    if (el) {
      const w = el.clientWidth
      el.scrollTo({ left: i * w, behavior: 'smooth' })
    }
  }, [])

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null
      const el = scrollRef.current
      if (!el) return
      const w = el.clientWidth
      const index = Math.round(el.scrollLeft / w)
      setSlideIndex(Math.max(0, Math.min(index, SLIDE_COUNT - 1)))
    })
  }, [])

  return (
    <div className="app">
      <Header
        onMenuClick={() => setNavOpen(true)}
        onProfileClick={() => { setView('home'); setNavOpen(false) }}
        menuExpanded={navOpen}
      />

      {view === 'home' && (
        <main className="slideshow-wrap">
          <div
            ref={scrollRef}
            className="slideshow-scroll"
            role="region"
            aria-label="QR codes slideshow"
            aria-roledescription="carousel"
            aria-live="polite"
            onScroll={handleScroll}
          >
            <div className="slideshow-track">
              <div className="slideshow-slide">
                <QRSection
                  title="WhatsApp contact"
                  description="Scan to save my number so you can reach me during the day—handy if we get separated on the mountain."
                  imageSrc={WHATSAPP_IMAGE}
                  imageAlt="WhatsApp contact QR code"
                />
              </div>
              <div className="slideshow-slide">
                <QRSection
                  title="Buy Me a Coffee"
                  description="If you enjoyed the lesson, please consider buying me a delicious coffee. Thank you!"
                  imageSrc={BUYMEACOFFEE_IMAGE}
                  imageAlt="Buy Me a Coffee QR code"
                />
              </div>
            </div>
          </div>
          <div className="slideshow-dots" role="tablist" aria-label="Slides">
            {[0, 1].map((i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={slideIndex === i}
                aria-label={i === 0 ? 'WhatsApp QR' : 'Buy Me a Coffee QR'}
                className={`slideshow-dot ${slideIndex === i ? 'active' : ''}`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </main>
      )}

      {view === 'casi' && (
        <main className="app-main-content">
          <CASIStudy />
        </main>
      )}

      {view === 'lessonplans' && (
        <main className="app-main-content">
          <LessonPlans />
        </main>
      )}

      {view === 'teachingscripts' && (
        <main className="app-main-content">
          <TeachingScripts />
        </main>
      )}

      {view === 'positionbalance' && (
        <main className="app-main-content">
          <PositionBalance />
        </main>
      )}

      {view === 'pivotsteering' && (
        <main className="app-main-content">
          <PivotSteering />
        </main>
      )}

      {view === 'edging' && (
        <main className="app-main-content">
          <Edging />
        </main>
      )}

      {view === 'pressure' && (
        <main className="app-main-content">
          <Pressure />
        </main>
      )}

      {view === 'timingcoordination' && (
        <main className="app-main-content">
          <TimingCoordination />
        </main>
      )}

      {view === 'alpinegroups101' && (
        <main className="app-main-content">
          <AlpineGroups101 />
        </main>
      )}

      <NavDrawer
        open={navOpen}
        currentView={view}
        onClose={() => setNavOpen(false)}
        onNavigate={(v) => setView(v)}
      />

      <footer className="app-footer">
        <span className="app-footer-build">
          Build {currentBuildId} · v{currentVersion}
        </span>
      </footer>

      <UpdateModal
        open={updateAvailable}
        onClose={dismiss}
        onRefresh={handleRefresh}
        remote={remoteVersion}
        currentVersion={currentVersion}
        currentBuildId={currentBuildId}
      />
    </div>
  )
}
