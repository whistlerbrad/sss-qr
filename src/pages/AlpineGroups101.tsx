import './AlpineGroups101.css'

export function AlpineGroups101() {
  return (
    <div className="alpine-page">
      <h1 className="alpine-title">Whistler Alpine Snowboard Ultimate Groups 101</h1>
      <p className="alpine-summary">Daily adult group intermediate and advanced lessons — Full day lessons only.</p>

      <nav className="alpine-quicklinks" aria-label="Jump to section">
        <a href="#key-timings">Key Timings</a>
        <a href="#alpine-levels">Alpine Levels</a>
        <a href="#warm-up">Warm up Run</a>
        <a href="#sign-out">Sign out</a>
        <a href="#lunch">Lunch</a>
        <a href="#challenges">Challenges</a>
        <a href="#injuries">Injuries</a>
        <a href="#contacts">Contacts</a>
        <a href="#skill-development">Skill development</a>
        <a href="#terrain">Terrain Progression</a>
      </nav>

      <section id="key-timings" className="alpine-section">
        <h2>Key Timings</h2>
        <ul>
          <li><strong>Check in time:</strong> 9:25am</li>
          <li><strong>Check in location:</strong> Whistler alpine hut</li>
          <li><strong>Morning staff meeting:</strong> 9:30am</li>
          <li><strong>Guests arrive:</strong> 9:45am</li>
          <li><strong>Lesson finishes:</strong> 3pm</li>
        </ul>
      </section>

      <section id="greeter" className="alpine-section">
        <h2>Greeter / Organiser</h2>
        <p>Meets and checks in guests and assigns students to level.</p>
      </section>

      <section id="alpine-levels" className="alpine-section">
        <h2>Ultimate Groups Alpine Levels (for instructors)</h2>
        <p className="alpine-note alpine-note-inline">When guest numbers are low, groups will have a wider range of ability. e.g. entry and mid 4&apos;s can go together, mid and high 4&apos;s can go together, etc. Park lessons can be mixed riding ability (minimum high 4) but similar park experience.</p>
        <div className="alpine-block">
          <h3>Level 4</h3>
          <ul>
            <li><strong>Entry:</strong> Comfortable linking turns on green terrain. Isolated turns on blue terrain.</li>
            <li><strong>Mid:</strong> Comfortable linking turns on most blue terrain, isolated on steeper blue groomed terrain.</li>
            <li><strong>High:</strong> Comfortable linking turns on all blue groomed terrain, isolated on easier black terrain.</li>
          </ul>
        </div>
        <div className="alpine-block">
          <h3>Level 5</h3>
          <ul>
            <li><strong>Entry:</strong> Comfortable linking turns on all blue and easy black groomed terrain. Starting to link turns in mellow bumps and trees. Working on shorter turns and entry level carving (isolated turns).</li>
            <li><strong>Mid:</strong> Comfortable linking turns on all blue and most black groomed terrain. Working towards steeper black terrain. Linking turns in mellow bumps and trees.</li>
            <li><strong>High:</strong> Comfortable riding black groomed terrain. Working on bumps/trees and small drops (&lt;5ft).</li>
          </ul>
        </div>
        <div className="alpine-block">
          <h3>Level 6</h3>
          <p>Comfortable riding black groomed terrain, most trees and bumps. Working towards double black terrain, larger drops.</p>
        </div>
      </section>

      <section id="warm-up" className="alpine-section alpine-highlight">
        <h2>Warm up / Assessment Run — 9:50am</h2>
        <p className="alpine-caps">NO TEACHING ON WARM UP RUN!</p>
        <ul>
          <li>Instructors split groups and assign an instructor before getting on the chair.</li>
          <li>One instructor leads and one tail guns. Any additional instructors float in the middle of the group.</li>
          <li><strong>Level 4:</strong> Ride down Ego Bowl, stop at top of second steep pitch on left hand side (pitch above Pig Alley).</li>
          <li><strong>Level 5/6:</strong> Upper Whiskey Jack to Ego Bowl off piste, then meet Level 4 group at top of second steep pitch.</li>
          <li>Check back in at the hut to pick up any late arrivals.</li>
        </ul>
      </section>

      <section id="sign-out" className="alpine-section alpine-highlight">
        <h2>Sign out with Supervisor / Coordinator</h2>
        <p>Give your name, lesson level and number of students — this is how we trigger paying you, so it&apos;s <strong>IMPORTANT</strong>.</p>
      </section>

      <section id="lunch" className="alpine-section">
        <h2>Lunch</h2>
        <ul>
          <li>Have lunch with your guests.</li>
          <li>Their skill level will determine where is appropriate. e.g. High 4 minimum for Dustys and Crystal Hut. Mid 4 for Glacier Creek.</li>
        </ul>
      </section>

      <section className="alpine-section">
        <h2>Lesson finishes</h2>
        <p><strong>3pm</strong></p>
      </section>

      <section id="challenges" className="alpine-section">
        <h2>Challenges</h2>
        <ul>
          <li>Determining student level can be challenging — they might underestimate or overestimate. On the warm up, meet the other levels to move students if needed so they have time on the same run to confirm the fit.</li>
          <li>Some guests may not have ridden in several years and may take longer to warm up and show their true ability; you may have to shuffle the groups again at the end of the run.</li>
          <li>You may have to deal with a small split in your class occasionally if no other groups at that level.</li>
          <li>Determining your group level and goals before coming back to the hut will help to fit in any latecomers.</li>
        </ul>
      </section>

      <section id="injuries" className="alpine-section">
        <h2>Injuries</h2>
        <div className="alpine-block">
          <h3>Student gets injured</h3>
          <p>Contact patrol, get photo of RFID pass. You may continue with the lesson when patrol doesn&apos;t need you anymore. Fill out Incident Report Form (available in Springs beside front desk) at end of day.</p>
        </div>
        <div className="alpine-block">
          <h3>Instructor gets injured</h3>
          <p>Call Patrol if urgent. Contact the supervisor on duty as soon as possible. You <strong>MUST</strong> visit the First Aid Room at Springs building before going home if patrol isn&apos;t needed.</p>
        </div>
      </section>

      <section id="contacts" className="alpine-section">
        <h2>Contacts</h2>
        <div className="alpine-contacts-list">
          <div className="alpine-contact-card">
            <h3>Patrol</h3>
            <p><a href="tel:6049355555">604-935-5555</a></p>
          </div>
          <div className="alpine-contact-card">
            <h3>Wade Sutton — Sup (Alpine S-W)</h3>
            <p><a href="tel:6049383738">604-938-3738</a></p>
            <p><a href="mailto:wsutton@vailresorts.com">wsutton@vailresorts.com</a></p>
          </div>
          <div className="alpine-contact-card">
            <h3>Marc Emerson — Sup (Alpine T-St)</h3>
            <p><a href="tel:6048157267">604-815-7267</a> <span className="alpine-contact-label">Mobile</span></p>
            <p><a href="tel:6049052283">604-905-2283</a> <span className="alpine-contact-label">Office</span></p>
            <p><a href="mailto:memerson2@vailresorts.com">memerson2@vailresorts.com</a></p>
          </div>
          <div className="alpine-contact-card">
            <h3>Office Cari/Ronia</h3>
            <p><a href="tel:6049687053">604-968-7053</a></p>
          </div>
          <div className="alpine-contact-card">
            <h3>Base Hut</h3>
            <p><a href="tel:6049052249">604-905-2249</a></p>
          </div>
          <div className="alpine-contact-card">
            <h3>Nadio Hachey — Mgr (M-F)</h3>
            <p><a href="tel:6046987425">604-698-7425</a> <span className="alpine-contact-label">Mobile</span></p>
            <p><a href="tel:6049052091">604-905-2091</a> <span className="alpine-contact-label">Office</span></p>
            <p><a href="mailto:nhachey@vailresorts.com">nhachey@vailresorts.com</a></p>
          </div>
        </div>
      </section>

      <section id="skill-development" className="alpine-section alpine-skill-dev">
        <h2>Skill development</h2>
        <p className="alpine-note alpine-note-inline">Common observations, improvements and student goals by level — for assessment and instruction.</p>

        <div className="alpine-skill-level">
          <h3>Level 4</h3>
          <div className="alpine-skill-grid">
            <div className="alpine-skill-col">
              <h4>Common observations</h4>
              <ul>
                <li>Kicking of back foot to turn</li>
                <li>Counter rotation</li>
                <li>Breaking at the waist</li>
                <li>Board chattering on heelside</li>
                <li>Isolated turns (toeside)</li>
                <li>Snow sprayed down hill</li>
              </ul>
            </div>
            <div className="alpine-skill-col">
              <h4>Common improvements</h4>
              <ul>
                <li>Lower body rotation</li>
                <li>Body position</li>
                <li>Flexion and extension</li>
                <li>Early edging</li>
                <li>Flat base between turns</li>
                <li>Lateral movement of the hips</li>
              </ul>
            </div>
            <div className="alpine-skill-col">
              <h4>Common Student Goals</h4>
              <ul>
                <li>General technique improvement</li>
                <li>Confidence on green/blue terrain</li>
                <li>Ride steeper runs</li>
                <li>Cat tracks</li>
                <li>Ollie/Butters</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="alpine-skill-level">
          <h3>Level 5</h3>
          <div className="alpine-skill-grid">
            <div className="alpine-skill-col">
              <h4>Common observations</h4>
              <ul>
                <li>Too static in on/off piste situations</li>
                <li>Late edging</li>
                <li>Sliding when trying to carve</li>
                <li>Poor line choice off piste</li>
              </ul>
            </div>
            <div className="alpine-skill-col">
              <h4>Common improvements</h4>
              <ul>
                <li>Pressure control</li>
                <li>Earlier edging</li>
                <li>Stronger body position</li>
                <li>Timing and co-ordination in different terrain</li>
              </ul>
            </div>
            <div className="alpine-skill-col">
              <h4>Common Student Goals</h4>
              <ul>
                <li>Off piste (bumps)/trees</li>
                <li>Learn to jump (straight with grabs)</li>
                <li>Learn to carve</li>
                <li>Ride steeper runs</li>
                <li>Learn to drop</li>
                <li>Switch</li>
                <li>Powder</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="alpine-skill-level">
          <h3>Level 6</h3>
          <div className="alpine-skill-grid">
            <div className="alpine-skill-col">
              <h4>Common observations</h4>
              <ul>
                <li>Turn shape not round</li>
                <li>Losing balance on drops</li>
                <li>Over rotating — park spins</li>
                <li>Lack of board performance</li>
              </ul>
            </div>
            <div className="alpine-skill-col">
              <h4>Common improvements</h4>
              <ul>
                <li>Using steering movements for different situations</li>
                <li>Strong body position in all types of terrain</li>
                <li>Drops and park</li>
                <li>Loading and deflecting of the board for different uses, e.g. bumps and short turns</li>
              </ul>
            </div>
            <div className="alpine-skill-col">
              <h4>Common Student Goals</h4>
              <ul>
                <li>Steeper off piste (bumps)</li>
                <li>Tighter trees</li>
                <li>Steeps (Double Black)</li>
                <li>Bigger drops</li>
                <li>Euro carve</li>
                <li>180&apos;s/360&apos;s</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="terrain" className="alpine-section alpine-terrain">
        <h2>Terrain progression</h2>
        <p className="alpine-note">Runs noted are in an approximate progression order. Line choice, snow accumulation and condition can make these runs easier or harder for your students. Always work up to the harder runs throughout the day so you know if your students are ready or not. Always check the grooming report for daily updates.</p>

        <div id="terrain-level-4" className="alpine-level">
          <h3>Level 4</h3>
          <div className="alpine-tables">
            <div className="alpine-table-wrap">
              <h4>Whistler</h4>
              <table className="alpine-table">
                <thead>
                  <tr><th>Groomed</th><th>Ungroomed (4+)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ego Bowl, Upper and Lower Whiskey Jack, Green Acres, Enchanted Forrest, Old Crow, Orange Peel to Pony trail, Fish Eye, Little Red Run, Upper Franz&apos;s, Ptarmigan, Harmony Ridge, Harmony Piste, Jeff&apos;s Ode To Joy, Raven, Upper Dave Murray to Bear Cub</td>
                    <td>Upper Whiskey to Ego Bowl, Riders right lower Green Acres, riders left lower Ratfink (Star Wars but stay close to Ratfink)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="alpine-table-wrap">
              <h4>Blackcomb</h4>
              <table className="alpine-table">
                <thead>
                  <tr><th>Groomed</th><th>Ungroomed (4+)</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Easy out, Wishbone, Honey Comb, Buzz Cut, Jersey Cream, Ross&apos; Gold, Cruiser, Ridge runner, Twist and Shout, Rock N Roll, Trap Line, Zig Zag, Blue line to Glacier Drive, Cloud 9, Panorama, Hugh&apos;s Heaven</td>
                    <td>Between Upper Cloud Nine and Hugh&apos;s Heaven, Lower section of Dakine</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="terrain-level-5" className="alpine-level">
          <h3>Level 5</h3>
          <div className="alpine-tables">
            <div className="alpine-table-wrap">
              <h4>Whistler</h4>
              <table className="alpine-table">
                <thead>
                  <tr><th>Groomed</th><th>Ungroomed</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GS, Ptarmigan, Toilet Bowl, T-Bar Run, Bear Paw, The Saddle, Jimmy&apos;s Joker, Wild Card</td>
                    <td>Green acres riders right, Star Wars trees, Coyote trees, Low roll, Pale Face, Chunky&apos;s Choice, Upper Ratfink, Bagel bowl, Seppo&apos;s, Sun Bowl, Club 21, T-Bar Bowl, Headwall, Whistler Bowl, Grand Finale, Frog Hollow, Doom and Gloom, Shale Slope, Franz&apos;s Meadows, Flute Bowl</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="alpine-table-wrap">
              <h4>Blackcomb</h4>
              <table className="alpine-table">
                <thead>
                  <tr><th>Groomed</th><th>Ungroomed</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Sling Shot, Lower Gear Jammer, Cat Skinner</td>
                    <td>Rock Garden, Lower Dakine, Lower Espresso Bumps, Lower Arthur&apos;s Choice, Gear Jammer, Arthur&apos;s Choice</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div id="terrain-level-6" className="alpine-level">
          <h3>Level 6</h3>
          <div className="alpine-tables">
            <div className="alpine-table-wrap">
              <h4>Whistler</h4>
              <table className="alpine-table">
                <thead>
                  <tr><th>Groomed</th><th>Ungroomed</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Garbo Lift line, Gun Barrels, Goat&apos;s Gully, Harmony Horseshoes, VD&apos;s, The Cirque, West Cirque</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="alpine-table-wrap">
              <h4>Blackcomb</h4>
              <table className="alpine-table">
                <thead>
                  <tr><th>Groomed</th><th>Ungroomed</th></tr>
                </thead>
                <tbody>
                  <tr>
                    <td>The Bite, Staircase, Garnet Bowl, Pakalolo, Cougar Chutes, Ruby Bowl, Saphire Bowl, Sudain Couloir</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
