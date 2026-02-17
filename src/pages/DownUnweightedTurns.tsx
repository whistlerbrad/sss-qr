import './DownUnweightedTurns.css'

export function DownUnweightedTurns() {
  return (
    <div className="dut-page">
      <h1 className="dut-title">Down Unweighted Turns</h1>
      <p className="dut-subtitle">
        Advanced turns that put you in control at the start of every turn—no longer a passenger on your board.
      </p>

      <nav className="dut-quicklinks" aria-label="Jump to progression stage">
        <a href="#dut-concept">Key concept</a>
        <a href="#dut-benefits">Benefits</a>
        <a href="#dut-stage1">Stage 1</a>
        <a href="#dut-stage2">Stage 2</a>
        <a href="#dut-stage3">Stage 3</a>
      </nav>

      <section id="dut-concept" className="dut-section">
        <h2>Why &quot;Down Unweighted&quot;?</h2>
        <div className="dut-section-content">
          <p>Down unweighted turns are <strong>advanced</strong>—if you don&apos;t already have good edge control, you won&apos;t get the benefits. They&apos;re called down unweighted because you <strong>drop your body down toward the snowboard at the edge change</strong>.</p>
          <div className="dut-block dut-block-tip">
            <h4>The bathroom scales analogy</h4>
            <p>Imagine you&apos;re standing on a pair of bathroom scales. If you quickly drop your weight down, the scales would read a lower weight. We do the same on a snowboard: as we drop down, there&apos;s less pressure underfoot—and that is the <strong>perfect time to make an edge change</strong>. You are &quot;down unweighted.&quot;</p>
            <p className="dut-note">The term refers to the edge change; the turn itself can be any size and any shape.</p>
          </div>
        </div>
      </section>

      <section id="dut-benefits" className="dut-section">
        <h2>Benefits</h2>
        <div className="dut-section-content">
          <ul className="dut-list">
            <li><strong>Quick edge change</strong> and a <strong>strong position at the start of the turn</strong>—you decide what the board does and where it goes.</li>
            <li><strong>Starting low</strong> means you can immediately begin extending your legs and putting pressure into the board (like standing up on the scales = higher reading). That bends the board into reverse camber and tightens the turn radius—ideal for <strong>steep terrain</strong> and short turns, and great for <strong>carve turns</strong> where you can whip the board around.</li>
            <li><strong>Chopped-up or variable terrain:</strong> Being low at the edge change helps you keep your balance and avoid getting bucked off.</li>
            <li><strong>Powder:</strong> Low at the start of every turn, then as you push your legs out you compress the snow underneath and create a platform that pushes back—bouncing you out and popping you into the next turn. You don&apos;t have to ride powder by leaning all your weight on the back foot.</li>
          </ul>
        </div>
      </section>

      <section id="dut-stage1" className="dut-section dut-stage">
        <h2>Progression: Stage 1 — Sideslip</h2>
        <div className="dut-section-content">
          <p className="dut-terrain"><strong>Terrain:</strong> Slightly steeper blue or red run.</p>
          <ol className="dut-steps">
            <li>Begin in a <strong>sideslip</strong>.</li>
            <li><strong>Drop down</strong> (the down unweighted movement): bend your knees, get your body close to the board.</li>
            <li>Use <strong>torsional twist</strong> to get the board turning into the fall line and changing edge.</li>
            <li>Once the edge has changed, start <strong>extending your legs</strong> back out into a sideslip on your opposite edge.</li>
            <li>Finish with your legs extended at the <strong>high point</strong> on your new edge.</li>
            <li>Repeat the exercise, changing edge to edge (toes to heels, heels to toes).</li>
          </ol>
        </div>
      </section>

      <section id="dut-stage2" className="dut-section dut-stage">
        <h2>Progression: Stage 2 — Traverse</h2>
        <div className="dut-section-content">
          <p>Replace the sideslip with a <strong>slight traverse</strong> across the slope.</p>
          <ul className="dut-list">
            <li>Begin traversing across the slope.</li>
            <li>Focus on <strong>dropping your hips</strong> and dropping your body down toward the snowboard.</li>
            <li>Use <strong>torsional twist</strong> to make the edge change.</li>
            <li>Then <strong>extend back out through the turn</strong>.</li>
          </ul>
          <p className="dut-cue">Cue: &quot;Traverse → drop down → edge change → extend through the turn.&quot; Repeat.</p>
        </div>
      </section>

      <section id="dut-stage3" className="dut-section dut-stage">
        <h2>Progression: Stage 3 — Add board performance</h2>
        <div className="dut-section-content">
          <p>Add a bit more board performance: take the turns with <strong>a little more speed</strong> and <strong>increase your edge angle</strong>. This translates to carve turns on mellow terrain and grip turns on steep terrain.</p>
          <ul className="dut-list">
            <li><strong>Progressive extension:</strong> Extend out through the turn and feel the grip build as you turn the board across the fall line.</li>
            <li><strong>Rapid option:</strong> If you quickly extend your legs out, you&apos;ll feel the board really whip round underneath you—a super fun way to ride.</li>
          </ul>
        </div>
      </section>

      <section className="dut-section dut-section-tip">
        <h2>Instructor note</h2>
        <div className="dut-section-content">
          <p>This movement is not a quick fix—it&apos;s a <strong>process</strong>, a way of changing your riding. It&apos;s how many advanced riders ride most of the time. Once students understand it and begin to feel it working, it makes them much better riders.</p>
        </div>
      </section>
    </div>
  )
}
