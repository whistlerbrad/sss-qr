import './QuickRide.css'

export function QuickRide() {
  return (
    <div className="quickride-page">
      <h1 className="quickride-title">QuickRide System</h1>
      <p className="quickride-subtitle">
        Create mobility, control and enjoyment on the snowboard as quickly as possible. Five steps, or milestones.
      </p>
      <p className="quickride-credit">
        <a href="https://www.quickride.ca" target="_blank" rel="noopener noreferrer">quickride.ca</a>
      </p>

      <nav className="quickride-quicklinks" aria-label="Jump to step">
        <a href="#basics">1. Basics</a>
        <a href="#sliding">2. Sliding</a>
        <a href="#control">3. Control</a>
        <a href="#turning">4. Turning</a>
        <a href="#flow">5. Flow</a>
      </nav>

      <section id="basics" className="quickride-section quickride-basics">
        <h2>1. Basics</h2>
        <div className="quickride-section-content">
          <div className="quickride-block">
            <h3>Goal</h3>
            <p>To learn to use the equipment, and gain comfort moving around on the snowboard with one foot attached.</p>
          </div>
          <div className="quickride-block">
            <h3>Key concepts</h3>
            <p>Equipment · Mobility</p>
          </div>
          <div className="quickride-block">
            <h3>Exercises</h3>
            <ul>
              <li>Introductions</li>
              <li>Equipment: Parts Of The Board</li>
              <li>Attaching The Front Foot</li>
              <li>Equipment Familiarity &amp; Mobility</li>
              <li>“The Neutral Position”</li>
              <li>Skating</li>
              <li>Climbing &amp; Descending</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="sliding" className="quickride-section quickride-sliding">
        <h2>2. Sliding</h2>
        <div className="quickride-section-content">
          <div className="quickride-block">
            <h3>Goal</h3>
            <p>To become comfortable standing on the snowboard while it is sliding.</p>
          </div>
          <div className="quickride-block">
            <h3>Key concepts</h3>
            <p>Straight Running</p>
          </div>
          <div className="quickride-block">
            <h3>Exercises</h3>
            <ul>
              <li>“Push-Push-Glide”</li>
              <li>Straight Running</li>
              <li>Experiment With Varied Body Positions</li>
              <li>Toe/Heel Drag</li>
              <li>J-Turns</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="control" className="quickride-section quickride-control">
        <h2>3. Control</h2>
        <div className="quickride-section-content">
          <div className="quickride-block">
            <h3>Goal</h3>
            <p>To gain control of both speed and direction (across the fall line), with both feet attached to the snowboard.</p>
          </div>
          <div className="quickride-block">
            <h3>Key concepts</h3>
            <p>Sideslipping · Pendulum</p>
          </div>
          <div className="quickride-block">
            <h3>Exercises</h3>
            <ul>
              <li>Intro To Edging (Gas Pedal Exercise)</li>
              <li>One-Foot Attached Sideslipping &amp; Drift Left / Right</li>
              <li>One-Foot Attached Traverse</li>
              <li>Attaching The Board On A Slope</li>
              <li>Sideslipping (two feet attached)</li>
              <li>Pendulum (two feet attached)</li>
              <li>Power Pendulum</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="turning" className="quickride-section quickride-turning">
        <h2>4. Turning</h2>
        <div className="quickride-section-content">
          <div className="quickride-block">
            <h3>Goal</h3>
            <p>To learn to turn (changing edges in the fall line).</p>
          </div>
          <div className="quickride-block">
            <h3>Key concepts</h3>
            <p>Beginner Turns</p>
          </div>
          <div className="quickride-block">
            <h3>Exercises</h3>
            <ul>
              <li>Static Rotation Exercise (board off)</li>
              <li>Garland Exercise</li>
              <li>J-Turns (revisit from Sliding)</li>
              <li>Walking Through Turns</li>
              <li>Beginner Turns</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="flow" className="quickride-section quickride-flow">
        <h2>5. Flow</h2>
        <div className="quickride-section-content">
          <div className="quickride-block">
            <h3>Goal</h3>
            <p>To learn to explore the mountain safely.</p>
          </div>
          <div className="quickride-block">
            <h3>Key concepts</h3>
            <p>Novice Turns</p>
          </div>
          <div className="quickride-block">
            <h3>Exercises</h3>
            <ul>
              <li>Add Traverse Between Turns</li>
              <li>Traverse with Flexion/Extension</li>
              <li>Novice Turns (‘release’ the COM before, and flex after the fall line)</li>
              <li>Speed Control: 4 S&apos;s (Speed = Shape, Size, Slope)</li>
              <li>Sliding 360&apos;s</li>
              <li>Hopping in traverses</li>
            </ul>
          </div>
        </div>
      </section>

      <p className="quickride-tip">
        QuickRide is <strong>flexible</strong>—start with the proven steps for first-timers, then adjust, skip or invent tactics as needed for the individual.
      </p>
    </div>
  )
}
