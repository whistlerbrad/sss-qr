import './LessonPlans.css'

export function LessonPlans() {
  return (
    <div className="lesson-page">
      <h1 className="lesson-title">Lesson Plans by Skill</h1>
      <p className="lesson-subtitle">Quick reference for on-hill teaching</p>

      <nav className="lesson-quicklinks" aria-label="Jump to section">
        <a href="#position-balance">1. Position &amp; Balance</a>
        <a href="#pivot">2. Pivot (Steering)</a>
        <a href="#edging">3. Edging</a>
        <a href="#pressure">4. Pressure</a>
        <a href="#timing-coordination">5. Timing &amp; Coordination</a>
      </nav>

      <section id="position-balance" className="lesson-section lesson-balance">
        <h2>1. Position &amp; Balance</h2>
        <div className="lesson-blocks">
          <div className="lesson-tactic">
            <h3>Butter Yoga</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Explore limits of balance in static stance.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>On flat terrain with both feet strapped in, students balance over nose/tail, adding small rotations/edge pressure. Builds awareness of COM over BOS.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Riding Fore, Aft &amp; Centred</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Feel fore/aft shifts.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Link mellow turns while shifting COM to front foot, back foot, then centred. Compare stability/control.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Static Jump / “T” Stance</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Reinforce centred landing.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Flex &amp; extend in place, hop lightly. Land centred/aligned with equal pressure on both feet. Progress to hopping during riding.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pivot" className="lesson-section lesson-pivot">
        <h2>2. Pivot (Steering)</h2>
        <div className="lesson-blocks">
          <div className="lesson-tactic">
            <h3>Static Steering / Mason Jar</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Isolate knees/feet steering.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>On flat terrain, both feet attached, imagine turning a Mason Jar lid at knee level — rotate knees toward heel/toe edge.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Headlights on Knees</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Encourage steering with knees.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Students imagine headlights on knees; they “shine” lights where they want to go while linking turns.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Sliding 360s</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Explore full rotation while sliding.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>On mellow slope, rotate head–shoulders–hips through 360°, maintaining balance. Practice both frontside &amp; backside.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="edging" className="lesson-section lesson-edging">
        <h2>3. Edging</h2>
        <div className="lesson-blocks">
          <div className="lesson-tactic">
            <h3>Rail to Rail (Carving)</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Feel edge engagement.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>From straight run, roll onto toe edge (pencil-line track), then heel edge. Switch edges rhythmically, focus on knees/feet guiding edge.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Side-Slipping 180 Jumps</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Explore edge-to-edge hops.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Sideslip heel edge, flex/extend to hop 180° onto toe edge, land balanced, then repeat back. Builds edge awareness + commitment.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Hopping Between Turns</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Reinforce edge stability.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>During traverse phase of linked turns, hop lightly on two feet. Land cleanly on same edge, maintaining line and rhythm.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pressure" className="lesson-section lesson-pressure">
        <h2>4. Pressure</h2>
        <div className="lesson-blocks">
          <div className="lesson-tactic">
            <h3>Flatland Manoeuvres / “Butters”</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Explore pressure distribution nose/tail.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>On flat terrain, press over nose or tail, adding rotation/edging. Builds sensitivity to snowboard flex.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Motor Boat</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Manage forces through alignment &amp; pressure.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Imagine throttle on tail of board. Push/pull to rotate shoulders/hips while resisting forces. Encourages deliberate pressure use.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Sliding 360s (Pressure Focus)</h3>
            <div className="lesson-block">
              <h4>Variation</h4>
              <p>Maintain centred pressure through full rotation, focusing on equal distribution fore/aft.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="timing-coordination" className="lesson-section lesson-timing">
        <h2>5. Timing &amp; Coordination</h2>
        <div className="lesson-blocks">
          <div className="lesson-tactic">
            <h3>Fish Turns / Roller Coaster Turns</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Link movements smoothly.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Picture fish tail following head or roller coaster cars following the lead. Lead turn with nose, tail follows — promotes coordinated steering timing.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Rail to Rail (Coordination Focus)</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Coordinate edge changes.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Roll from toe → heel → toe edges in rhythm, increasing pace as control improves.</p>
            </div>
          </div>
          <div className="lesson-tactic">
            <h3>Side-Slipping 180 Jumps (Coordination Focus)</h3>
            <div className="lesson-block">
              <h4>Goal</h4>
              <p>Harmonize flexion, extension, rotation, landing.</p>
            </div>
            <div className="lesson-block">
              <h4>How</h4>
              <p>Time flex/extend to hop while coordinating body rotation and edge change.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
