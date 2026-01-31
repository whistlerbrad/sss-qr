import type { VersionInfo } from './useUpdateCheck'

interface UpdateModalProps {
  open: boolean
  onClose: () => void
  onRefresh: () => void
  remote?: VersionInfo | null
  currentVersion: string
  currentBuildId: string
}

export function UpdateModal({
  open,
  onClose,
  onRefresh,
  remote,
  currentVersion,
  currentBuildId
}: UpdateModalProps) {
  if (!open) return null

  return (
    <div
      className="update-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="update-title"
    >
      <div className="update-modal">
        <h2 id="update-title">Update available</h2>
        <p>
          A new version of the app is live. Refresh to get the latest build.
        </p>
        {remote && (
          <p className="update-meta">
            New build: {remote.buildId} · v{remote.version}
          </p>
        )}
        <p className="update-meta muted">
          Current: {currentBuildId} · v{currentVersion}
        </p>
        <div className="update-actions">
          <button type="button" className="btn secondary" onClick={onClose}>
            Later
          </button>
          <button type="button" className="btn primary" onClick={onRefresh}>
            Refresh now
          </button>
        </div>
      </div>
    </div>
  )
}
