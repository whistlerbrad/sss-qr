import { useEffect, useState } from 'react'

const BUILD_ID = __BUILD_ID__
const APP_VERSION = __APP_VERSION__

export interface VersionInfo {
  version: string
  buildId: string
  builtAt: string
}

export function useUpdateCheck() {
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [remoteVersion, setRemoteVersion] = useState<VersionInfo | null>(null)

  useEffect(() => {
    const check = async () => {
      try {
        const url = `${import.meta.env.BASE_URL}version.json?t=${Date.now()}`
        const res = await fetch(url, { cache: 'no-store' })
        if (!res.ok) return
        const data: VersionInfo = await res.json()
        setRemoteVersion(data)
        if (data.buildId !== BUILD_ID) {
          setUpdateAvailable(true)
        }
      } catch {
        // Offline or no version.json (dev)
      }
    }

    check()
    const interval = setInterval(check, 60 * 60 * 1000)
    return () => clearInterval(interval)
  }, [])

  const dismiss = () => setUpdateAvailable(false)

  return {
    updateAvailable,
    remoteVersion,
    currentBuildId: BUILD_ID,
    currentVersion: APP_VERSION,
    dismiss
  }
}
