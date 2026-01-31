interface HeaderProps {
  onMenuClick?: () => void
  onProfileClick?: () => void
  menuExpanded?: boolean
}

export function Header({ onMenuClick, onProfileClick, menuExpanded = false }: HeaderProps) {
  return (
    <header className="app-header">
      <button
        type="button"
        className="app-header-menu"
        onClick={onMenuClick}
        aria-label={menuExpanded ? 'Close menu' : 'Open menu'}
        aria-expanded={menuExpanded}
      >
        <span className="hamburger" aria-hidden>
          <span />
          <span />
          <span />
        </span>
      </button>
      <div className="app-header-title">
        <h1>Brad Meraly</h1>
        <p>Snowboard Instructor · Whistler Blackcomb</p>
      </div>
      <button
        type="button"
        className="app-header-profile"
        onClick={onProfileClick}
        aria-label="Go to QR codes"
      >
        <img src="/profile.png" alt="" width={40} height={40} />
      </button>
    </header>
  )
}
