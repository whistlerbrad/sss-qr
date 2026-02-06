import './StudentLanding.css'

const FEEDBACK_EMAIL = 'wbguestcommunication@vailresorts.com'
const FEEDBACK_SUBJECT = 'Brad Meraly SB Instructor Adult Groups'
const BUYMEACOFFEE_URL = 'https://buymeacoffee.com/whistlerpeak'
const SHARE_URL = 'https://snowboard-instructor.netlify.app/brad-meraly'

interface StudentLandingProps {
  /** When true, show the "Save for later" share card (instructor app only). Student landing page uses false. */
  showShareCard?: boolean
}

export function StudentLanding({ showShareCard = false }: StudentLandingProps) {
  const feedbackMailto = `mailto:${FEEDBACK_EMAIL}?subject=${encodeURIComponent(FEEDBACK_SUBJECT)}`

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Brad Meraly - Snowboard Instructor',
          text: "Check out Brad's snowboard lesson landing page!",
          url: SHARE_URL,
        })
      } catch (err) {
        console.log('Error sharing', err)
      }
    } else {
      navigator.clipboard.writeText(SHARE_URL)
      alert('Link copied to clipboard!')
    }
  }

  return (
    <div className="student-landing">
      <div className="student-landing-card">
        <header className="student-header">
          <h1 className="student-name">Brad Meraly</h1>
          <p className="student-role">Whistler Blackcomb Snowboard Instructor</p>
        </header>

        <section className="student-intro">
          <p>
            It was a pleasure joining you on the mountain today! I really enjoyed having you in the group and watching your progress.
          </p>
        </section>

        <section className="student-section feedback-box">
          <h2>Share Your Experience</h2>
          <p>
            Feedback goes a long way for me. If you enjoyed our lesson, I'd be thrilled if you could drop a quick note to my supervisor.
          </p>
          <a href={feedbackMailto} className="student-link student-link-email">
            Send Feedback Email
          </a>
        </section>

        <section className="student-section support-box">
          <h2>Fuel the Ride</h2>
          <p>
            I love a good morning coffee before hitting the lifts! If you'd like to support my work on the <strong>Whistler Peak</strong> project, you can buy me a coffee here.
          </p>
          <a
            href={BUYMEACOFFEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="student-link student-link-tip"
          >
            ☕️ Buy Me a Coffee
          </a>
        </section>

        <footer className="student-closing">
          <p>
            <strong>Keep riding!</strong> Everything we practiced today becomes second nature with repetition. Stick with it, enjoy the terrain, and stay safe out there.
          </p>
          <p className="signature">— Brad</p>
        </footer>
      </div>

      <div className={`student-landing-card student-card-share${showShareCard ? ' student-card-share-visible' : ''}`}>
        <h2 className="student-card-share-title">Save for later</h2>
        <p className="student-card-share-text">
          Want to keep this link or share it with your group?
        </p>
        <button type="button" onClick={handleShare} className="student-link student-link-share">
          📤 Share this page
        </button>
      </div>
    </div>
  )
}
