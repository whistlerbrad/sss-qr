import { useUpdateCheck } from './useUpdateCheck'
import { UpdateModal } from './UpdateModal'
import { QRSection } from './QRSection'
import './App.css'

const WHATSAPP_IMAGE = '/WhatsApp-Brad.jpg'
const BUYMEACOFFEE_IMAGE = '/BuyMeACoffee-whistlerpeak.png'

export default function App() {
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

  return (
    <div className="app">
      <header className="header">
        <h1>SSS QR</h1>
        <p className="tagline">Instructor quick links</p>
        <p className="build">
          Build {currentBuildId} · v{currentVersion}
        </p>
      </header>

      <main className="main">
        <QRSection
          title="WhatsApp contact"
          description="Scan to save my number so you can reach me during the day—handy if we get separated on the mountain."
          imageSrc={WHATSAPP_IMAGE}
          imageAlt="WhatsApp contact QR code"
        />
        <QRSection
          title="Buy Me a Coffee"
          description="Tip after your lesson or when you’re back at the hotel. Thanks for the support!"
          imageSrc={BUYMEACOFFEE_IMAGE}
          imageAlt="Buy Me a Coffee QR code"
        />
      </main>

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
