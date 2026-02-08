import './QuickRideExercises.css'

export function QuickRideExercises() {
  return (
    <div className="qre-page">
      <h1 className="qre-title">QuickRide Exercises</h1>
      <p className="qre-subtitle">
        Detailed exercise reference from the QuickRide System. Use quick links to jump to each step.
      </p>

      <nav className="qre-quicklinks" aria-label="Jump to step">
        <a href="#basics">1. Basics</a>
        <a href="#sliding">2. Sliding</a>
        <a href="#control">3. Control</a>
        <a href="#turning">4. Turning</a>
        <a href="#flow">5. Flow</a>
      </nav>

      {/* ——— BASICS ——— */}
      <section id="basics" className="qre-section qre-basics">
        <h2>1. Basics</h2>
        <div className="qre-section-content">
          <p className="qre-step-goal">Goal: Learn to use the equipment and gain comfort moving around on the snowboard with one foot attached.</p>

          <article id="basics-neutral-position" className="qre-exercise">
          <h3>The Neutral Position</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>An athletic stance common to most sports—stable and allows quick reaction.</p>
          </div>
          <div className="qre-block qre-block-context">
            <h4>On the snowboard</h4>
            <p>Ready position with ankles, knees, and hip joints equally flexed; shoulders and hips square to the front foot; arms relaxed; head and eyes toward direction of travel; weight even between both feet.</p>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Joints slightly flexed</li>
              <li>Equal weight</li>
              <li>Head up</li>
              <li>“Ready” position</li>
            </ul>
          </div>
        </article>

        <article id="basics-skating" className="qre-exercise">
          <h3>Skating</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>Moving around on flat ground with one foot attached to the snowboard.</p>
          </div>
          <div className="qre-block qre-block-why">
            <h4>Why</h4>
            <p>To get from point A to B and be mobile with the board attached.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How</h4>
            <ul className="qre-how-list">
              <li>From neutral position, orient head and eyes toward the nose.</li>
              <li>Place the back foot on the snow on the toeside or heelside, front leg slightly bent.</li>
              <li>Take small pushing steps with the rear foot and let the board slide on the base.</li>
              <li>Repeat.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Upper body aligned with front foot angle</li>
              <li>Eyes looking forward</li>
              <li>Balanced over front foot</li>
              <li>Small steps between bindings</li>
            </ul>
          </div>
          <div className="qre-block qre-block-tactics">
            <h4>Other tactics</h4>
            <ul className="qre-tactics-list">
              <li><strong>Toeside/heelside:</strong> Skate with rear foot on toeside and heelside; start with free foot behind or in front of binding, advance until in line with back binding.</li>
              <li><strong>Obstacle course:</strong> Follow the leader or skate around markers.</li>
              <li><strong>Skate to target:</strong> Skate to a target object and back.</li>
              <li><strong>Push-Push-Glide:</strong> As balance improves, take larger pushes and let the board glide longer.</li>
            </ul>
          </div>
        </article>

        <article id="basics-climbing-descending" className="qre-exercise">
          <h3>Climbing / Descending</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>Moving up and down a slope with the snowboard across the fall line.</p>
          </div>
          <div className="qre-block qre-block-why">
            <h4>Why</h4>
            <p>To negotiate varying sloped terrain with one foot attached.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How — Climbing</h4>
            <ul className="qre-how-list">
              <li>Front foot attached, facing up the slope; free foot uphill above the toeside.</li>
              <li>Extend front ankle and knee to engage toe edge.</li>
              <li>Medium step with free foot up the hill; small step with attached foot, lifting the board.</li>
              <li>Engage edge to prevent slipping back.</li>
            </ul>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How — Descending</h4>
            <ul className="qre-how-list">
              <li>Facing down the slope, free foot uphill.</li>
              <li>Flex front knee and ankle to engage heel edge.</li>
              <li>Step with the board downhill, then free foot; lift the board as needed.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Face uphill/downhill</li>
              <li>Board across fall line</li>
              <li>Edge snowboard to grip snow</li>
              <li>Big step with free foot, small step with the board</li>
            </ul>
          </div>
        </article>
        </div>
      </section>

      {/* ——— SLIDING ——— */}
      <section id="sliding" className="qre-section qre-sliding">
        <h2>2. Sliding</h2>
        <div className="qre-section-content">
          <p className="qre-step-goal">Goal: Become comfortable standing on the snowboard while it is sliding.</p>

          <article id="sliding-straight-running" className="qre-exercise">
          <h3>Straight Running</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>Sliding down a slope with one foot attached to the snowboard.</p>
          </div>
          <div className="qre-block qre-block-why">
            <h4>Why</h4>
            <p>To gain comfort and balance on the snowboard.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How</h4>
            <ul className="qre-how-list">
              <li>After climbing a slight incline, turn so the nose points down the slope, base flat in the fall line.</li>
              <li>Place free foot in snow to stop.</li>
              <li>When ready, place back foot against the back binding and begin sliding.</li>
              <li>Maintain neutral position—knees slightly flexed, eyes forward, arms to the sides.</li>
              <li>As terrain flattens, step off and skate to a safe area.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Place board in fall line and flat based</li>
              <li>Place back foot against back binding</li>
              <li>Look ahead</li>
              <li>Maintain neutral position</li>
            </ul>
          </div>
          <div className="qre-block qre-block-tactics">
            <h4>Other tactics</h4>
            <ul className="qre-tactics-list">
              <li><strong>Push-Push-Glide:</strong> Small skate or push to build speed, then second push, then place free foot and glide.</li>
              <li><strong>Experiment with body positions:</strong> Fore/aft, lateral, rotational, vertical (tall/small).</li>
              <li><strong>Toe/Heel Drag:</strong> Drag free foot on toe or heel side to slow and change direction.</li>
              <li><strong>J-Turn:</strong> See detailed teaching script below.</li>
            </ul>
          </div>

          <div id="sliding-j-turn" className="qre-block qre-jturn-script">
            <h4 className="qre-jturn-title">Tactic: The J-Turn</h4>
            <p className="qre-jturn-objective"><strong>Objective:</strong> To transition from a straight glide into a controlled stop using a single edge, creating a path in the snow that looks like the letter &quot;J.&quot;</p>

            <h5 className="qre-jturn-heading">1. The Setup (The Straight Glide)</h5>
            <p>Start in a neutral stance, pointing the board straight down the fall line (the &quot;Bunny Hill&quot; gradient). Keep the board flat to gain a small amount of momentum.</p>

            <h5 className="qre-jturn-heading">2. The Initiation (Look and Point)</h5>
            <p>To start the turn, the student must lead with their <strong>eyes and front shoulder</strong>:</p>
            <ul className="qre-how-list">
              <li><strong>Heelside:</strong> Look toward the side of the trail. Point the front knee and hip slightly toward the heel edge.</li>
              <li><strong>Toeside:</strong> Look toward the side of the trail. Shift the weight slightly over the toes, pressing the shins into the front of the boots.</li>
            </ul>

            <h5 className="qre-jturn-heading">3. The Execution (The Arc)</h5>
            <p>As the board begins to deviate from the fall line, increase the pressure on the chosen edge:</p>
            <ul className="qre-how-list">
              <li><strong>Rotational Pull:</strong> Gradually rotate the hips and shoulders toward the direction of the turn.</li>
              <li><strong>Edge Engagement:</strong> Slowly &quot;sit back&quot; (Heelside) or &quot;stand up&quot; (Toeside) to increase the edge angle.</li>
              <li><strong>The Finish:</strong> Continue across the hill until the board points slightly uphill, coming to a natural, balanced stop.</li>
            </ul>

            <h5 className="qre-jturn-heading">Instructor Tips &amp; Cues</h5>
            <ul className="qre-how-list">
              <li><strong>The &quot;Laser&quot; Cue:</strong> Tell students to imagine a laser pointer on their front knee. To turn, they need to point that laser toward the woods on the side of the run.</li>
              <li><strong>Avoid the &quot;Kick&quot;:</strong> Watch for students trying to kick their back foot out (ruddering). Remind them that the turn starts at the front of the board, not the back.</li>
              <li><strong>Safety First:</strong> Ensure students have enough space across the run, as a proper J-Turn requires traversing the width of the slope.</li>
            </ul>

            <h5 className="qre-jturn-heading">Why this works</h5>
            <p>The J-Turn is the first time a student feels the board <strong>sidecut</strong> doing the work. It teaches them that looking where they want to go naturally leads to rotation, which leads to an edge change—the fundamental building block of a linked S-turn.</p>
          </div>
        </article>
        </div>
      </section>

      {/* ——— CONTROL ——— */}
      <section id="control" className="qre-section qre-control">
        <h2>3. Control</h2>
        <div className="qre-section-content">
          <p className="qre-step-goal">Goal: Control both speed and direction with both feet attached to the snowboard.</p>

          <article id="control-gas-pedal" className="qre-exercise">
          <h3>Introduction to Edging (Gas Pedal)</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>Introduction to edging and speed control. Increased edge angle decreases speed; decreased edge angle increases speed.</p>
          </div>
          <div className="qre-block qre-block-why">
            <h4>Why</h4>
            <p>To gain control over the snowboard and our speed.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How</h4>
            <ul className="qre-how-list">
              <li>On flat terrain, lean slightly toward heel edge.</li>
              <li>Flex ankle and knee of the attached leg (and shin muscle) to increase heel edge angle; relax to flatten.</li>
              <li>With board flat, use rear foot to push; edge the board to resist.</li>
              <li>Try on both heel and toeside edges.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Front foot attached</li>
              <li>Lean body inside board slightly</li>
              <li>Flex hip, knee, ankle to increase or decrease edge angle and feel snowboard slide / stop</li>
            </ul>
          </div>
          <div className="qre-block">
            <h4>Progressing to one-foot sideslipping</h4>
            <p>On mellow terrain: board across fall line on heel edge, facing downhill, rear foot in snow on heel side for control. Push board downhill to slide on heel edge; as comfort grows, let it slide. Feel equal weight on both feet. To slow or stop, flex ankle, knee, hip of front leg (Gas Pedal). Practice both heel and toe edges; on toe edge, face uphill, rear foot over toe edge with toes dragging.</p>
          </div>
        </article>

        <article id="control-one-foot-sideslip" className="qre-exercise">
          <h3>One-Foot Attached Sideslipping &amp; Drift Left/Right</h3>
          <div className="qre-block">
            <p>Sideslip with free foot against the back binding, heel or toe slightly off to assist speed control. To move diagonally, shift weight toward the direction of travel and allow that end of the board to move downhill slightly. Back foot unattached allows stepping out if needed.</p>
          </div>
        </article>

        <article id="control-attaching-on-slope" className="qre-exercise">
          <h3>Attaching the Board on a Slope</h3>
          <div className="qre-block">
            <p>Arrange students with front foot attached, facing downhill, in an area free of traffic. Use heel edge to “dig” a platform. Clear snow from rear binding, place foot, attach ankle strap then toe strap. <strong>Alternatives:</strong> Facing uphill, dig heel edge (downhill edge) for a platform; or sit on snow facing downhill to strap in rear foot.</p>
          </div>
        </article>

        <article id="control-stand-up" className="qre-exercise">
          <h3>How to Stand Up</h3>

          <div className="qre-block">
            <h4>The Heelside Stand-Up</h4>
            <h5 className="qre-standup-heading">1. The Setup (The Foundation)</h5>
            <p><strong>The &quot;Dig&quot;:</strong> Before trying to stand, have the student use their heels to dig a small &quot;shelf&quot; or trench in the snow. This prevents the board from sliding away as they apply pressure.</p>
            <p><strong>Board Position:</strong> Ensure the board is perfectly perpendicular (across) the fall line. If it&apos;s tilted even slightly downhill, it will shoot away.</p>

            <h5 className="qre-standup-heading">2. The Execution (The &quot;Reach &amp; Rock&quot;)</h5>
            <p><strong>The Grab:</strong> Have the student grab the middle of the toe-side edge with their front hand. This pulls their chest closer to their knees.</p>
            <p><strong>The Push:</strong> Use the back hand to push off the snow right next to the hip.</p>
            <p><strong>The Momentum:</strong> Instead of pushing &quot;up,&quot; tell them to rock their weight forward over the board. The goal is to get the &quot;butt over the boots.&quot;</p>

            <h5 className="qre-standup-heading">3. Common Fixes (Troubleshooting)</h5>
            <p><strong>&quot;Reach for the Trees&quot;:</strong> If grabbing the board is too difficult, have them reach both arms straight forward toward the opposite side of the run as they stand.</p>
            <p><strong>The &quot;Quick Pull&quot;:</strong> Sometimes a tiny pull on the board toward the body right as they stand helps seat the edge into the snow.</p>
          </div>

          <div className="qre-block">
            <h4>Toeside Stand-Up</h4>
            <p><strong>Why it&apos;s easier:</strong> For students with less core strength or flexibility, pushing up from the knees is much more stable than pushing up from the sit-bones.</p>
            <ul className="qre-how-list">
              <li><strong>Step 1:</strong> While sitting, roll onto the belly so the board is uphill from the body.</li>
              <li><strong>Step 2:</strong> Dig the toe edge into the snow.</li>
              <li><strong>Step 3:</strong> Push up with the hands like a &quot;push-up&quot; until the student is on their knees.</li>
              <li><strong>Step 4:</strong> Push back with the hands to move the weight over the toes and stand up.</li>
            </ul>

            <h5 className="qre-standup-heading">Tips</h5>
            <p><strong>Slope Selection:</strong> If a student is struggling, move them to a slightly steeper section of the beginner hill. It sounds counter-intuitive, but a steeper slope brings the &quot;snow&quot; closer to their back, making the stand-up much easier.</p>
            <p><strong>The &quot;Buddy Pull&quot;:</strong> As an instructor, offer one hand. Don&apos;t pull them up; let them pull themselves up using your hand as a fixed anchor.</p>
          </div>
        </article>

        <article id="control-sideslipping" className="qre-exercise">
          <h3>Sideslipping (Two Feet Attached)</h3>
          <div className="qre-block">
            <h4>Heelside</h4>
            <p><strong>What:</strong> Sliding on heelside edge, board across fall line. <strong>Why:</strong> Use edges to control speed and gain comfort with both feet attached. <strong>How:</strong> Face down the slope, weight over both heels; relax ankles to reduce edge and slide. To slow/stop: flex hips and knees (like sitting on a tall stool), flex ankles to engage edge.</p>
          </div>
          <div className="qre-block">
            <h4>Toeside</h4>
            <p><strong>What:</strong> Sliding on toeside edge, board across fall line. <strong>How:</strong> Face up the slope, weight even, eyes uphill. Relax ankles to reduce edge and slide. To slow/stop: push knees forward, extend ankles into slope to engage edge.</p>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Board across fall line</li>
              <li>Neutral position, head up, eyes forward</li>
              <li>Arms relaxed in front of body</li>
              <li>Relax ankles to slide</li>
              <li>Flex hips, knees, ankles to slow down</li>
            </ul>
          </div>
          <div className="qre-block qre-block-tactics">
            <h4>Other tactics</h4>
            <ul className="qre-tactics-list">
              <li><strong>Stop &amp; Go / Red Light Green Light:</strong> Practice stopping and starting on cue.</li>
              <li><strong>Ballerina / Cowboy:</strong> On toeside avoid “ballerina” (extended ankles, unstable); encourage “cowboy”—ankle relaxed, weight over balls of feet. On heelside: wide base, knees out, weight even.</li>
            </ul>
          </div>
        </article>

        <article id="control-sideslipping-tactic" className="qre-exercise">
          <h3>Tactic: Side-Slipping</h3>
          <div className="qre-block qre-jturn-script">
            <p className="qre-jturn-objective"><strong>Objective:</strong> To control speed and come to a stop while moving directly down the fall line on a single edge.</p>

            <h5 className="qre-jturn-heading">1. The Setup</h5>
            <p>The board is perpendicular to the slope (horizontal). The student starts in a balanced, &quot;ready&quot; position with knees flexed.</p>

            <h5 className="qre-jturn-heading">2. The Execution (The &quot;Gas Pedal&quot;)</h5>
            <ul className="qre-how-list">
              <li><strong>Release:</strong> Slowly flatten the board by relaxing the ankles. For heelside, lower the toes; for toeside, lower the heels.</li>
              <li><strong>Glide:</strong> As the edge angle decreases, the board will begin to slide down the fall line.</li>
              <li><strong>Engage:</strong> To slow down or stop, &quot;apply the brakes&quot; by pulling the toes up (heelside) or pushing the shins forward (toeside) to increase the edge angle.</li>
            </ul>

            <h5 className="qre-jturn-heading">3. Instructor Cues</h5>
            <ul className="qre-how-list">
              <li><strong>&quot;Ankles, not Hips&quot;:</strong> Remind students that the movement comes from the ankles. Excessive hip movement usually leads to a fall.</li>
              <li><strong>&quot;Heavy Feet&quot;:</strong> Encourage them to keep weight centered over the board so it doesn&apos;t &quot;chatter&quot; or catch an edge.</li>
            </ul>
          </div>
        </article>

        <article id="control-pendulum" className="qre-exercise">
          <h3>Pendulum</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>Moving side-to-side in a diagonal direction on the snowboard.</p>
          </div>
          <div className="qre-block qre-block-why">
            <h4>Why</h4>
            <p>To control pressure distribution and side-to-side direction of travel.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How</h4>
            <ul className="qre-how-list">
              <li>Begin on heel or toeside in a sideslip.</li>
              <li>Shift slight pressure to the foot in the direction you want to go; slightly extend that lead ankle to reduce edge angle (heelside: “push left gas pedal to go left, right to go right”).</li>
              <li>Let the board slide diagonally, ~60/40 lead/rear.</li>
              <li>To stop, shift back to even weight and resume sideslipping.</li>
              <li>Repeat opposite direction.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words — Toeside Pendulum</h4>
            <ul>
              <li>Start in a sideslip</li>
              <li>Shift weight to left or right foot</li>
              <li>Slightly lower same heel to initiate traverse</li>
              <li>Look ahead</li>
              <li>Equalize weight and increase edge to slow/stop</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words — Heelside Pendulum</h4>
            <ul>
              <li>Start in a sideslip</li>
              <li>Shift weight to left or right foot</li>
              <li>Extend ankle and push same knee downhill slightly to initiate traverse</li>
              <li>Look ahead</li>
              <li>Equalize weight and increase edge to slow/stop</li>
            </ul>
          </div>
          <div className="qre-block qre-block-tactics">
            <h4>Instructor Cues</h4>
            <ul className="qre-tactics-list">
              <li><strong>&quot;Point the Flashlight&quot;:</strong> Imagine your front knee is a flashlight. Point it toward the far corner of the run to start moving that way.</li>
              <li><strong>&quot;Shift the Weight&quot;:</strong> Lean toward your front foot like you&apos;re trying to step on a bug. This pulls the nose downhill and starts the lateral move.</li>
              <li><strong>&quot;Eyes on the Horizon&quot;:</strong> Don&apos;t look at your feet. Look at the trees at the edge of the run where you want to go.</li>
              <li><strong>&quot;The Seesaw&quot;:</strong> Gently move your weight from the front foot (to start) to the back foot (to slow down and stop).</li>
            </ul>
          </div>
        </article>

        <article id="control-power-pendulum" className="qre-exercise">
          <h3>Power Pendulum</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>Moving side-to-side at higher speeds with more board control; key for learning to turn—allowing the board to pivot.</p>
          </div>
          <div className="qre-block qre-block-why">
            <h4>Why</h4>
            <p>To use rotation to assist directional control.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How</h4>
            <ul className="qre-how-list">
              <li>Start in a sideslip on heel or toeside.</li>
              <li>Shift pressure to lead foot and relax ankle (as in Pendulum); add slight rotation of hips and knees downhill so the board travels more down the hill.</li>
              <li>As speed increases, flex lead ankle and knee, rotate hips back up the slope, feel feet turning in the boots to steer—board moves more across the hill.</li>
              <li>Continue to guide board uphill and slow.</li>
              <li>Repeat opposite direction. Path resembles a “falling leaf”.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Start in a sideslip</li>
              <li>Shift weight and rotate hips downhill while reducing edge on that foot</li>
              <li>Increase speed by riding downhill</li>
              <li>Rotate hips uphill and look uphill to slow down</li>
              <li>Turn head and look back downhill, repeat in new direction</li>
            </ul>
          </div>
          <div className="qre-block qre-block-tactics">
            <h4>Instructor Cues</h4>
            <ul className="qre-tactics-list">
              <li><strong>&quot;Squat to Grip&quot;:</strong> As you move across the hill, sink lower into your boots. This puts more &quot;bite&quot; into the edge and prevents chattering.</li>
              <li><strong>&quot;Drive the Front Knee&quot;:</strong> Instead of just leaning, actively push your front knee toward the direction of travel. This engages the sidecut of the board earlier.</li>
              <li><strong>&quot;Gas and Brake&quot;:</strong> Think of your front foot as the gas (flatten to go) and your back foot as the brake (apply pressure to stop).</li>
              <li><strong>&quot;Spray the Woods&quot;:</strong> Try to push the snow toward the side of the trail. This encourages the student to use their lower body to create pressure rather than just leaning their torso.</li>
            </ul>
          </div>
          <div className="qre-block qre-block-tactics">
            <h4>Instructor Tips</h4>
            <p>If a student is struggling with the Power Pendulum, have them try it on a slightly steeper pitch. The increased gravity forces them to realize that &quot;just leaning&quot; isn&apos;t enough—they have to actively manage the edge pressure to stay in control.</p>
          </div>
        </article>
        </div>
      </section>

      {/* ——— TURNING ——— */}
      <section id="turning" className="qre-section qre-turning">
        <h2>4. Turning</h2>
        <div className="qre-section-content">
          <p className="qre-step-goal">Goal: Learn to turn (changing edges in the fall line).</p>

          <article id="turning-beginner-turn" className="qre-exercise">
          <h3>Beginner Turn</h3>
          <div className="qre-block">
            <p><strong>Heelside turn:</strong> Starts on toeside edge, crosses fall line on flat base, finishes on heelside edge. <strong>Toeside turn:</strong> Starts on heelside edge, crosses fall line on flat base, finishes on toeside edge.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How — Heelside Turn</h4>
            <ul className="qre-how-list">
              <li>On toeside edge (facing uphill), traverse with slight pressure on lead foot, eyes in direction of travel.</li>
              <li>Initiate: rotate head over lead shoulder, rotate core toward nose.</li>
              <li>Begin edge change: move lead hip and knee in direction of turn (across the board), allow board to flatten with slight ankle flexion; feel calf press into highback.</li>
              <li>Let board approach fall line and slide briefly on flat base.</li>
              <li>Continue: rotate knees, lead knee and ankle flexion to change from flat to heel edge. Hips rotate through to stay aligned.</li>
              <li>On heel edge, flex lower joints to engage edge; look ahead, equalize weight; sideslip to slow.</li>
            </ul>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How — Toeside Turn</h4>
            <ul className="qre-how-list">
              <li>On heelside edge (facing downhill), traverse with slight pressure on lead foot, eyes forward.</li>
              <li>Initiate: move lead hip and knee downhill; slightly extend lead ankle to relax edge, board toward fall line.</li>
              <li>Rotate hips to keep shoulders in line with board. Board approaches fall line, brief flat base.</li>
              <li>Continue: rotate hips through turn, flex lead knee and ankle to engage toe edge.</li>
              <li>On toe edge, push lead knee toward snow to complete; equalize weight, sideslip to slow.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words — Heelside</h4>
            <ul>
              <li>Sideslip on toe edge</li>
              <li>Shift hips to front foot and slightly inside turn (downhill)</li>
              <li>Rotate lead hip and knee toward nose</li>
              <li>Look through turn with eyes</li>
              <li>Allow board to flatten</li>
              <li>Flex ankle (toes up) to change edge</li>
              <li>Equal weight and increase edge to slow/stop</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words — Toeside</h4>
            <ul>
              <li>Begin with sideslip on heel edge</li>
              <li>Shift hips toward front foot and slightly inside turn (downhill)</li>
              <li>Move front knee over toes of front foot (downhill)</li>
              <li>Allow board to flatten</li>
              <li>Push hips and knees inside turn to change edge</li>
              <li>Equal weight and increase edge to slow/stop</li>
            </ul>
          </div>
          <div className="qre-block">
            <h4>Feedback focus</h4>
            <p>Core rotation (not just head/arms); correct sequence—starting edge → flat base → finishing edge; weight on lead foot (~60%), not shifting to back foot in fall line.</p>
          </div>
        </article>

        <article id="turning-other-tactics" className="qre-exercise">
          <h3>Other Suggested Tactics for Turning</h3>
          <div className="qre-tactics">
            <div className="qre-tactic-card">
              <h4>1. Static Rotation Exercise (board off)</h4>
            <p>Board off, on flat terrain; “noses” pointed same direction. Have students feel the rotation (core) and edging (knees, ankles) for turning. Use before walking through turns or as correction.</p>
            </div>
            <div className="qre-tactic-card">
              <h4>2. Garland Exercise</h4>
            <p>See detailed teaching script below. Traverse on toe or heel edge; initiate rotation toward fall line, then pull back to traverse.</p>
            </div>
            <div className="qre-tactic-card">
              <h4>3. J-Turns</h4>
            <p>Revisit J-Turn from Sliding; sometimes stepping back helps progress.</p>
            </div>
            <div className="qre-tactic-card">
              <h4>4. Walking Through Turns</h4>
            <p>Board off, walk through a series of toe and heelside turns to visualize the movement sequence.</p>
            </div>
            <div className="qre-tactic-card">
              <h4>5. Dance Exercise</h4>
            <p>On nearly flat terrain, board off: stand behind student (facing their back). Hold rider’s lead arm and trailing shoulder; walk alongside and direct through heelside turn. For toeside, stand below facing them, hold hands/arms for balance.</p>
            </div>
            <div className="qre-tactic-card">
              <h4>6. The “Moustache” (Fall Line Edge Change)</h4>
              <p>Like Power Pendulum—allow board into fall line slightly. Once enough speed, rotate core (hips, knees, feet) uphill; eyes up over lead shoulder. Feel base flat momentarily; as board slides back downhill, pressure opposite edge and continue rotation. Hands-on: hold uphill (lead) hand at edge change to stabilize.</p>
            </div>
          </div>
        </article>

        <article id="turning-garland-turns" className="qre-exercise">
          <h3>Tactic: Garland Turns (The &quot;Floating Leaf&quot;)</h3>
          <div className="qre-block qre-jturn-script">
            <p className="qre-jturn-objective"><strong>Objective:</strong> To practice initiating and finishing a turn without the high-consequence moment of crossing the fall line.</p>

            <h5 className="qre-jturn-heading">1. The Setup</h5>
            <p>The student starts in a traverse (moving across the hill) on a comfortable edge (e.g., heelside).</p>

            <h5 className="qre-jturn-heading">2. The Initiation (The &quot;Intro&quot;)</h5>
            <p>Ask the student to point the nose of the board slightly downhill toward the fall line. This is done by shifting weight to the front foot and relaxing the uphill edge.</p>

            <h5 className="qre-jturn-heading">3. The Finish (The &quot;Outro&quot;)</h5>
            <p>Before the board points straight down the hill, the student applies the J-Turn logic:</p>
            <ul className="qre-how-list">
              <li>Look back across the hill.</li>
              <li>Apply pressure to the original edge.</li>
              <li>Bring the board back to a horizontal traverse.</li>
            </ul>

            <h5 className="qre-jturn-heading">4. Instructor Cues</h5>
            <ul className="qre-how-list">
              <li><strong>&quot;Point and Pull&quot;:</strong> Point the nose down, then pull it back to safety.</li>
              <li><strong>&quot;The Half-Moon&quot;:</strong> Tell them they are drawing a series of small crescents across the run rather than one long line.</li>
            </ul>
          </div>
        </article>
        </div>
      </section>

      {/* ——— FLOW ——— */}
      <section id="flow" className="qre-section qre-flow">
        <h2>5. Flow</h2>
        <div className="qre-section-content">
          <p className="qre-step-goal">Goal: Learn to explore the mountain safely.</p>

          <article id="flow-traverse-between" className="qre-exercise">
          <h3>Adding a Traverse Between Turns</h3>
          <div className="qre-block">
            <p>Before Novice Turns, have students exit turns by traversing across the slope instead of sideslipping. Finish the turn, choose a target at the side of the run, maintain sufficient edge angle to keep the board moving across the slope. Creates rounder turn shape.</p>
          </div>
        </article>

        <article id="flow-novice-turns" className="qre-exercise">
          <h3>Novice Turns</h3>
          <div className="qre-block qre-block-what">
            <h4>What</h4>
            <p>Simple turn with flexion (bending) of the lower joints added after the fall line.</p>
          </div>
          <div className="qre-block qre-block-why">
            <h4>Why</h4>
            <p>To maintain balance and stability in the later part of the turn; “releasing” the centre of mass from one turn to the next links turns smoothly.</p>
          </div>
          <div className="qre-block qre-block-how">
            <h4>How</h4>
            <ul className="qre-how-list">
              <li>Perform a Beginner Turn (heel or toeside) with core rotation and knee/ankle edging.</li>
              <li>As the new edge engages (at or below fall line), flex hips, knees, ankles to lower C.O.M.</li>
              <li>Control speed and direction through flexion. Traverse across the slope maintaining edge grip (not sideslipping).</li>
              <li>When under control, stand up and initiate the next turn.</li>
            </ul>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>Begin in a traverse</li>
              <li>Shift hips toward front foot and slightly inside turn (downhill) to initiate beginner turn</li>
              <li>At fall line, flex hips, knees, ankles to lower body position</li>
              <li>Traverse out of turn, return to neutral vertical position</li>
            </ul>
          </div>
          <div className="qre-block">
            <h4>Feedback focus</h4>
            <p>Proper edging sequence; neutral position; smooth flexion as board exits fall line; flex in response to increased speed/pressure, not just going through the motion.</p>
          </div>
        </article>

        <article id="flow-speed-control" className="qre-exercise">
          <h3>Speed Control: 4 S&apos;s</h3>
          <div className="qre-block">
            <p><strong>Speed = Shape + Size + Slope.</strong> Rounder, “closed” turns reduce speed on steeper slopes; larger, more “open” turns maintain or increase speed on flatter terrain.</p>
          </div>
          <div className="qre-block qre-keywords">
            <h4>Key words</h4>
            <ul>
              <li>To reduce speed on steeper slopes, make rounder “closed” turns</li>
              <li>To increase or maintain speed on flatter terrain, create larger, more “open” turns</li>
            </ul>
          </div>
        </article>

        <article id="flow-other-tactics" className="qre-exercise">
          <h3>Other Suggested Tactics</h3>
          <div className="qre-tactics">
            <div className="qre-tactic-card">
              <h4>Traverse with Flexion/Extension</h4>
              <p>Before adding vertical movement to turns, practice a simple traverse with up/down motion; then add extension to initiate turn and flexion after fall line.</p>
            </div>
            <div className="qre-tactic-card">
              <h4>Sliding 360&apos;s</h4>
              <p>Initiate heel or toeside turn as usual; at completion, continue rotating so the board completes the second half—lower C.O.M. for stability; choose flat terrain.</p>
            </div>
            <div className="qre-tactic-card">
              <h4>Follow the Leader</h4>
              <p>Students follow your path to experiment with turning.</p>
            </div>
          </div>
        </article>
        </div>
      </section>

      <p className="qre-tip">
        Use the S.A.F.E. approach: <strong>Static</strong> (feel it on flat), <strong>Active</strong> (try it), <strong>Free</strong> (mileage and practice), <strong>Experimentation</strong> (vary terrain, speed, movements).
      </p>
    </div>
  )
}
