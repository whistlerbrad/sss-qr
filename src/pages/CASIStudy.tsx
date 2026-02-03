import './CASIStudy.css'

export function CASIStudy() {
  return (
    <div className="casi-page">
      <h1 className="casi-title">CASI Snowboard Instructor Study Sheet</h1>
      <p className="casi-subtitle">Key notes for on-hill reference</p>

      <nav className="casi-quicklinks" aria-label="Jump to section">
        <a href="#skills-concept">Skills Concept</a>
        <a href="#core-competencies">Core Competencies</a>
        <a href="#advanced-competencies">Advanced</a>
        <a href="#quickride">QuickRide</a>
        <a href="#risk-management">Risk Management</a>
        <a href="#teaching-theory">Teaching Theory</a>
      </nav>

      <section id="skills-concept" className="casi-section casi-skills">
        <h2>Skills Concept — 5 movement-based skills</h2>
        <div className="casi-skills-card">
          <p className="casi-skills-lead">The five skills that underpin snowboarding performance:</p>
          <ol className="casi-skills-list">
            <li><strong>Position &amp; Balance</strong> — Dynamic balance via continuous muscular activity to keep the COM&apos;s resultant force through the BOS (board). Stable, adaptable stance.</li>
            <li><strong>Pivot (Steering)</strong> — Rotate from lower body to create steering angle (skidded turns); no steering angle in pure carving; lower edge angles allow greater steering.</li>
            <li><strong>Edging</strong> — Change of direction always involves edging. Use ankle/knee/hip to vary <strong>edge angle</strong> (base-to-snow). Edge control = manipulating edge angle.</li>
            <li><strong>Pressure</strong> — Sensory skill—manage forces with lower-joint movements; adjust via fore/aft positioning, leg flex/extend (one or both), edge angle, and steering. Defines expert performance.</li>
            <li><strong>Timing &amp; Coordination</strong> — Harmonize movements at the right moment/duration and combine them into a common effort—crucial beyond beginner.</li>
          </ol>
        </div>
      </section>

      <section id="core-competencies" className="casi-section casi-core">
        <h2>Core Competencies (what you look for in outcomes)</h2>
        <div className="casi-section-content">
          <ol className="casi-card-list casi-numbered">
            <li><strong>Centred &amp; Mobile Position</strong> — Aligned shoulders/hips/knees; equal weight both feet; even flexion; loose/relaxed/ready stance.</li>
            <li><strong>Turning With the Lower Body</strong> — Hips/knees/feet direct the board; rotational &amp; lateral (not counter-rotational); round, symmetrical turns with predictable timing/coordination.</li>
            <li><strong>Balance Along the Working Edge</strong> — Blend inclination (start) then angulation (hold) to manage pressure; COM directed inside the turn relative to speed/conditions; edge grip evident in track/shape.</li>
          </ol>
          <p className="casi-tip">Use the Core Competencies to spot deficiencies → then target the appropriate skill (balance, pivot, edging, pressure, timing/coordination). (E.g., overusing arms/shoulders to turn → address balance first.)</p>
        </div>
      </section>

      <section id="advanced-competencies" className="casi-section casi-advanced">
        <h2>Advanced Competencies</h2>
        <ul className="casi-card-list">
          <li><strong>Strength &amp; Flow</strong> — Strong yet mobile body position; resist higher forces; blend all five skills for fluid power.</li>
          <li><strong>Arc to Arc</strong> — Establish grip <strong>above fall line</strong> (inclination + refined ankle/foot); move COM smoothly through neutral at edge change; use sidecut to draw arcs; look ahead and plan line.</li>
          <li><strong>Loading &amp; Deflection</strong> — Bend board to build pressure; release into next turn for rhythm/rebound; direct resultant forces deliberately; accelerate across slope at exit.</li>
          <li><strong>Steering Versatility</strong> — Choose/adjust edge, pivot, pressure to slide, carve, or anywhere in between; can change edge angle mid-turn to alter size/shape; manage, maintain, or increase speed.</li>
        </ul>
      </section>

      <section id="quickride" className="casi-section casi-quickride">
        <h2>QuickRide System™ (Beginner Progression)</h2>
        <div className="casi-section-content">
          <div className="casi-stages">
            <div className="casi-stage">
              <strong>1. BASICS</strong> — Comfort with equipment; mobility with one foot on.
              <ul><li>Tactics: Parts of board, attach front foot, neutral position, skating, climb/descend.</li></ul>
            </div>
            <div className="casi-stage">
              <strong>2. SLIDING</strong> — Stand while the board slides.
              <ul><li>Tactics: Push-Push-Glide, straight run, body-position experiments, toe/heel drag, J-turns.</li></ul>
            </div>
            <div className="casi-stage">
              <strong>3. CONTROL</strong> — Control speed &amp; direction with both feet attached.
              <ul><li>Tactics (one-foot): Gas Pedal, sideslip drift L/R, traverse.</li><li>Tactics (two-feet): Attach on slope, sideslip, pendulum, power pendulum.</li></ul>
            </div>
            <div className="casi-stage">
              <strong>4. TURNING</strong> — Learn to change edges in the fall line.
              <ul><li>Tactics: Static rotation (board off), garlands, J-turns (revisit), walk-through turns, beginner turns.</li></ul>
            </div>
            <div className="casi-stage">
              <strong>5. FLOW</strong> — Explore the mountain safely &amp; smoothly.
              <ul><li>Tactics: Add traverse between turns (release COM), traverse with flex/extend, novice turns (flex after fall line), 4 S&apos;s of speed control (Shape, Size, Slope, Speed), sliding 360s, hop in traverses.</li></ul>
            </div>
          </div>
          <p className="casi-tip">QuickRide is <strong>flexible</strong>—start with the proven steps for first-timers, then adjust/skip/invent tactics as needed for the individual.</p>
        </div>
      </section>

      <section id="risk-management" className="casi-section casi-risk">
        <h2>Risk Management (primary concern)</h2>
        <div className="casi-block">
          <h3>Alpine Responsibility Code (10 points)</h3>
          <p>Control speed, right-of-way to people ahead, don&apos;t stop in blind spots, look uphill before merging, identify yourself after collisions, prevent runaway equipment, obey signs/closures, don&apos;t ride impaired, have ability to load/ride/unload lifts. Teach, model, and reinforce throughout lessons.</p>
        </div>
        <div className="casi-block">
          <h3>Class Management</h3>
          <p>Clear task/where to stop/when to go; safe regroup spots (side of run, visible from above); count students often; keep all within sight; carry radio/phone.</p>
        </div>
        <div className="casi-block">
          <h3>Terrain Choice &amp; Outdoor Skills</h3>
          <p>Pick terrain to match skills/learning stage; check weather/grooming; anticipate changing conditions.</p>
        </div>
        <div className="casi-block">
          <h3>Freestyle Terrain (Smart Style)</h3>
          <p>Inspect features; one rider at a time; spotters &amp; hand signals; never jump blind; clear landings quickly; always ride in control.</p>
        </div>
        <div className="casi-block">
          <h3>Duty of Care</h3>
          <p>Begins when you meet the student; choose appropriate terrain; greater duty with children (&quot;careful/prudent parent&quot; standard) until handed to responsible adult per school policy.</p>
        </div>
        <div className="casi-block">
          <h3>Accident Response (high level)</h3>
          <p>Secure scene (uphill spotter), <strong>do not move</strong> injured unless risk persists; keep warm; contact patrol; document conditions, positions, how it occurred, witnesses; avoid speculation.</p>
        </div>
      </section>

      <section id="teaching-theory" className="casi-section casi-teaching">
        <h2>Teaching Theory &amp; Tools</h2>
        <div className="casi-block">
          <h3>Role of Instructor</h3>
          <p>Not just technique—be a credible rider/teacher, communicate clearly, analyze cause/effect, lead/guided-coach, and create life-long snowboarders.</p>
        </div>
        <div className="casi-block">
          <h3>Principles of Learning</h3>
          <p>People learn by <strong>doing</strong>; what&apos;s learned first sticks; small steps; immediate feedback; telling ≠ learning.</p>
        </div>
        <div className="casi-block">
          <h3>Training Cycle</h3>
          <p><strong>Explain (10%) → Demonstrate (10%) → Student Trial (50%) → Feedback (30%)</strong>. Keep riders doing the riding; use clear &quot;What/Why/How/Where/When.&quot;</p>
        </div>
        <div className="casi-block">
          <h3>Lesson Format</h3>
          <p>Intro &amp; plan → Warm-up &amp; assess on easy terrain → Improvement segment (cycle) → Mileage (guided freeride) → Summary &amp; next steps.</p>
        </div>
        <div className="casi-block">
          <h3>Methods of Presentation</h3>
          <ul>
            <li><strong>Building Blocks</strong> (small, logical steps)</li>
            <li><strong>Whole–Part–Whole</strong> (see riding → isolate &amp; develop part → reintegrate)</li>
            <li><strong>Guided Discovery</strong> (questions + terrain/tasks to let riders feel &amp; find answers)</li>
          </ul>
        </div>
        <div className="casi-block">
          <h3>Learning Styles</h3>
          <p>Thinkers (cognitive), Doers (kinaesthetic), Watchers (visual). Blend cues/demos, guided mileage, and brief, plain-language explanations.</p>
        </div>
        <div className="casi-block">
          <h3>Demonstrations</h3>
          <p>Use terrain smartly, keep simple, match rider level, ensure visibility, don&apos;t talk while sliding (use keywords), exaggerate more for beginners; show precise pictures for advanced.</p>
        </div>
        <div className="casi-block">
          <h3>Analysis &amp; Improvement (A&amp;I)</h3>
          <p>Establish <strong>ideal</strong>, compare to performance, decide <strong>cause vs effect</strong> &amp; <strong>tolerance</strong>, then deliver improvement. Watch board performance first, then move up the body; choose the change with biggest impact.</p>
        </div>
        <div className="casi-block">
          <h3>TT-PP-EE Model (fastest levers first)</h3>
          <p><strong>Tactical, Technical, Psychological, Physical, Equipment, Environment</strong>—address what&apos;s easiest to change quickly for best gains.</p>
        </div>
        <div className="casi-block">
          <h3>Feedback – PTT</h3>
          <p><strong>Positive → To → Try</strong> (future-focused, specific, consequence-free). Avoid &quot;but/should/I want you to…&quot;. Prefer &quot;we/let&apos;s try…&quot;. Calibrate to rider personality.</p>
        </div>
        <div className="casi-block">
          <h3>People Skills – S.P.I.T.</h3>
          <p><strong>Smile</strong>, <strong>Plan</strong> with them, <strong>Interact</strong> (names, backgrounds), <strong>Teach</strong> with encouragement, pacing, and check-ins.</p>
        </div>
      </section>
    </div>
  )
}
