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
const SNAP_THRESHOLD_PX = 50

export default function App() {
  const [view, setView] = useState<NavView>('home')
  const [navOpen, setNavOpen] = useState(false)
  const [slideIndex, setSlideIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const pointerStart = useRef<{ x: number; slideIndex: number } | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
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
    setSlideIndex(Math.max(0, Math.min(index, SLIDE_COUNT - 1)))
    setDragOffset(0)
  }, [])

  const endDrag = useCallback(
    (clientX: number) => {
      if (pointerStart.current === null) return
      const diff = pointerStart.current.x - clientX
      const nextIndex =
        diff > SNAP_THRESHOLD_PX
          ? Math.min(pointerStart.current.slideIndex + 1, SLIDE_COUNT - 1)
          : diff < -SNAP_THRESHOLD_PX
            ? Math.max(pointerStart.current.slideIndex - 1, 0)
            : pointerStart.current.slideIndex
      setSlideIndex(nextIndex)
      setDragOffset(0)
      setIsDragging(false)
      pointerStart.current = null
    },
    []
  )

  const updateDrag = useCallback((clientX: number) => {
    if (pointerStart.current === null) return
    const diff = pointerStart.current.x - clientX
    const maxDrag = typeof window !== 'undefined' ? window.innerWidth * 0.4 : 200
    setDragOffset(Math.max(-maxDrag, Math.min(maxDrag, diff)))
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onTouchMove = (e: TouchEvent) => {
      if (pointerStart.current === null) return
      const touch = e.touches[0]
      const diffX = pointerStart.current.x - touch.clientX
      if (Math.abs(diffX) > 8) e.preventDefault()
    }
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => el.removeEventListener('touchmove', onTouchMove)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    pointerStart.current = { x: e.touches[0].clientX, slideIndex }
    setIsDragging(true)
  }, [slideIndex])
  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (pointerStart.current === null) return
      updateDrag(e.touches[0].clientX)
    },
    [updateDrag]
  )
  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      endDrag(e.changedTouches[0].clientX)
    },
    [endDrag]
  )

  const slideshowRef = useRef<HTMLElement>(null)
  const wheelThrottleRef = useRef(0)
  useEffect(() => {
    if (view !== 'home') return
    const el = slideshowRef.current
    if (!el) return
    const onWheel = (e: WheelEvent) => {
      const now = Date.now()
      if (now - wheelThrottleRef.current < 400) return
      wheelThrottleRef.current = now
      if (e.deltaY > 0) {
        setSlideIndex((i) => Math.min(i + 1, SLIDE_COUNT - 1))
      } else if (e.deltaY < 0) {
        setSlideIndex((i) => Math.max(i - 1, 0))
      }
      e.preventDefault()
    }
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [view])

  return (
    <div className="app">
      <Header onMenuClick={() => setNavOpen(true)} menuExpanded={navOpen} />

      {view === 'home' && (
        <main ref={slideshowRef} className="slideshow-wrap">
          <div
            ref={trackRef}
            className="slideshow-track"
            style={{
              transform: `translateX(calc(-${slideIndex * 100}vw + ${dragOffset}px))`,
              transition: isDragging ? 'none' : 'transform 0.3s ease-out'
            }}
            role="region"
            aria-label="QR codes slideshow"
            aria-roledescription="carousel"
            aria-live="polite"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <QRSection
              title="WhatsApp contact"
              description="Scan to save my number so you can reach me during the day—handy if we get separated on the mountain."
              imageSrc={WHATSAPP_IMAGE}
              imageAlt="WhatsApp contact QR code"
            />
            <QRSection
              title="Buy Me a Coffee"
              description="If you enjoyed the lesson, please consider buying me a delicious coffee. Thank you!"
              imageSrc={BUYMEACOFFEE_IMAGE}
              imageAlt="Buy Me a Coffee QR code"
            />
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
