interface HeaderProps {
  onMenuClick?: () => void
  menuExpanded?: boolean
}

export function Header({ onMenuClick, menuExpanded = false }: HeaderProps) {
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
      <div className="app-header-spacer" aria-hidden />
    </header>
  )
}
