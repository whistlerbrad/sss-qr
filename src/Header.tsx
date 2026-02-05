interface HeaderProps {
  onMenuClick?: () => void
  onProfileClick?: () => void
  onTitleClick?: () => void
  menuExpanded?: boolean
}

export function Header({ onMenuClick, onProfileClick, onTitleClick, menuExpanded = false }: HeaderProps) {
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
      <button
        type="button"
        className="app-header-title"
        onClick={onTitleClick}
        aria-label="Scroll to top"
      >
        <h1>Brad Meraly</h1>
        <p>Snowboard Instructor · Whistler Blackcomb</p>
      </button>
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
