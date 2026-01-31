import './NavDrawer.css'

export type NavView = 'home' | 'casi' | 'lessonplans' | 'teachingscripts' | 'positionbalance' | 'pivotsteering' | 'edging' | 'pressure' | 'timingcoordination' | 'alpinegroups101'

interface NavDrawerProps {
  open: boolean
  currentView: NavView
  onClose: () => void
  onNavigate: (view: NavView) => void
}

const NAV_ITEMS: { id: NavView; label: string }[] = [
  { id: 'home', label: 'QR Codes' },
  { id: 'casi', label: 'CASI Study Guide' },
  { id: 'lessonplans', label: 'Lesson Plans by Skill' },
  { id: 'teachingscripts', label: 'Teaching Scripts' },
  { id: 'positionbalance', label: 'Position & Balance' },
  { id: 'pivotsteering', label: 'Pivot (Steering)' },
  { id: 'edging', label: 'Edging' },
  { id: 'pressure', label: 'Pressure' },
  { id: 'timingcoordination', label: 'Timing & Coordination' },
  { id: 'alpinegroups101', label: 'Alpine Groups 101' }
]

export function NavDrawer({ open, currentView, onClose, onNavigate }: NavDrawerProps) {
  const handleNav = (view: NavView) => {
    onNavigate(view)
    onClose()
  }

  return (
    <>
      <div
        className={`nav-overlay ${open ? 'open' : ''}`}
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={-1}
        aria-hidden={!open}
      />
      <aside
        className={`nav-drawer ${open ? 'open' : ''}`}
        aria-label="Navigation"
        aria-hidden={!open}
      >
        <div className="nav-drawer-header">
          <h2 className="nav-drawer-title">Menu</h2>
          <button
            type="button"
            className="nav-drawer-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        <nav className="nav-drawer-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`nav-drawer-link ${currentView === id ? 'active' : ''}`}
              onClick={() => handleNav(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
