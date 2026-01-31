import './NavDrawer.css'

export type NavView = 'home' | 'casi' | 'lessonplans' | 'teachingscripts' | 'positionbalance' | 'pivotsteering' | 'edging' | 'pressure' | 'timingcoordination' | 'alpinegroups101' | 'sssresources'

interface NavDrawerProps {
  open: boolean
  currentView: NavView
  onClose: () => void
  onNavigate: (view: NavView) => void
}

type NavItem =
  | { type: 'link'; id: NavView; label: string }
  | { type: 'separator' }

const NAV_ITEMS: NavItem[] = [
  { type: 'link', id: 'home', label: 'QR Codes' },
  { type: 'link', id: 'alpinegroups101', label: 'Alpine Groups 101' },
  { type: 'separator' },
  { type: 'link', id: 'casi', label: 'CASI Study Guide' },
  { type: 'link', id: 'lessonplans', label: 'Lesson Plans by Skill' },
  { type: 'link', id: 'teachingscripts', label: 'Teaching Scripts' },
  { type: 'link', id: 'positionbalance', label: 'Position & Balance' },
  { type: 'link', id: 'pivotsteering', label: 'Pivot (Steering)' },
  { type: 'link', id: 'edging', label: 'Edging' },
  { type: 'link', id: 'pressure', label: 'Pressure' },
  { type: 'link', id: 'timingcoordination', label: 'Timing & Coordination' },
  { type: 'separator' },
  { type: 'link', id: 'sssresources', label: 'SSS Resources' }
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
          {NAV_ITEMS.map((item, index) => {
            if (item.type === 'separator') {
              return <div key={`sep-${index}`} className="nav-drawer-separator" role="presentation" />
            }
            return (
              <button
                key={item.id}
                type="button"
                className={`nav-drawer-link ${currentView === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}
