import {
  PublicPortal,
  InternalAccess,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  Box,
} from "@terminal/TerminalComponents";

export const THE_55_REC_COMMANDS = {
  "The REC (Levels 51-60)": {
    content: (
      <>
        <Line cyan large bold>[THE REC - RECREATION LEVELS]</Line>
        <Line smoke>Levels 51-60 | Stack #95563 Recreations</Line>
        <Divider />

        <Box color="red">
          <Line bold>⚠ EXTREME HAZARD ZONE - SEALED</Line>
          <Line>Once required recreational amenities, now abandoned</Line>
          <Line>10 floors of semi-contained chaos and dangers</Line>
          <Line>Multiple hostile entities and environmental hazards</Line>
          <Line>Entry requires breaking seals (DR14) or maintenance access</Line>
        </Box>

        <Section title="HISTORY">
          <Line>Every stack was once required to provide 10 levels of parks,</Line>
          <Line>activity centres, and recreational amenities for residents.</Line>
          <Line>They never said anything about maintaining them.</Line>
          <Line yellow>⚠ Now it's semi-contained chaos locals call THE REC</Line>
        </Section>

        <Section title="KNOWN THREATS">
          <Line red bold>HOSTILE ENTITIES:</Line>
          <Line>• Chemmed Gang-Goons (2d6 at gym, 2d4 at gardens)</Line>
          <Line>• Blightlings (2d6 at park, d6 at ball courts)</Line>
          <Line>• Bloated (d3 at park)</Line>
          <Line>• Ghosts (d3 at Flynn's Cave)</Line>
          <Line>• Minos (cybered-up monster stalking The Halls)</Line>
          <Line>• Rot King (freight elevator, mobile threat)</Line>
        </Section>

        <Section title="ENVIRONMENTAL HAZARDS">
          <Line yellow>⚠ CONTAMINATION RISKS:</Line>
          <Line>• Fungal overgrowth from park and pool</Line>
          <Line>• Toxic water in pool and showers</Line>
          <Line>• Structural collapse (floors fallen into ball courts)</Line>
          <Line>• Poor visibility (overgrowth, darkness)</Line>
          <Line>• Experimental gang drugs in gardens</Line>
        </Section>

        <Section title="ACCESS POINTS">
          <Line neon>Known entry methods:</Line>
          <Line>• Break seals/locks on stairwells (DR14)</Line>
          <Line>• Maintenance access (credentials required)</Line>
          <Line>• Ball Courts structural damage (exposed from below)</Line>
          <Line>• Freight elevator (if you dare)</Line>
        </Section>

        <Section title="BOUNTIES">
          <Line neon bold>LAZET (Alliansen Arms) PAYS:</Line>
          <Line>100¤ per biological sample from The REC</Line>
          <Line>Interested in mutations, fungal specimens, entity tissue</Line>
        </Section>
      </>
    ),
    related_commands: {
      "REC Location Map": {
        content: (
          <>
            <Line cyan large bold>[THE REC - LOCATION MAP]</Line>
            <Line smoke>10 floors of abandoned recreation facilities</Line>
            <Divider />

            <Section title="LEVEL 51-52: AQUATIC ZONE">
              <Line neon bold>1. POOL (Olympic-sized)</Line>
              <Line>Long abandoned, strange ecosystem developed</Line>
              <Line>Toxic water, bioluminescent algae</Line>
              <Line>100¤ bounty per sample (Lazet)</Line>
              <Line yellow>⚠ Do not drink or swim in water</Line>
              <Divider />

              <Line neon bold>9. SHOWERS</Line>
              <Line>Humid, carpeted with fungi and rotting corpses</Line>
              <Line>Slippery floors, poor visibility</Line>
              <Line red>⚠ Toxic spores in air (DR12 Toughness)</Line>
            </Section>

            <Section title="LEVEL 53-54: FITNESS ZONE">
              <Line neon bold>2. GYM</Line>
              <Line>Occupied 24/7 by 2d6 angry Chemmed Gang-Goons</Line>
              <Line>Weights and equipment still functional</Line>
              <Line red>⚠ Extremely hostile to intruders</Line>
              <Divider />

              <Line neon bold>3. RUNNING TRACK</Line>
              <Line>Built along inner perimeter of floor 55</Line>
              <Line>Overgrown from park and pool vegetation</Line>
              <Line>Difficult terrain, limited visibility</Line>
            </Section>

            <Section title="LEVEL 55-56: ENTERTAINMENT ZONE">
              <Line neon bold>4. FLYNN'S CAVE (Ruined arcade)</Line>
              <Line>Broken arcade machines and cabinets</Line>
              <Line>Inhabited by d3 Ghosts</Line>
              <Line yellow>⚠ Digital entities, unpredictable behavior</Line>
              <Divider />

              <Line neon bold>7. CINEMA</Line>
              <Line>3 damaged screens, partially flooded</Line>
              <Line>Old seats and projection equipment</Line>
              <Line>Relatively safe (empty)</Line>
            </Section>

            <Section title="LEVEL 57-58: OUTDOOR ZONE">
              <Line neon bold>5. PARK</Line>
              <Line>Overgrown and mutated vegetation</Line>
              <Line>Sealed to public (DR14 to break seals)</Line>
              <Line>Inhabited by 2d6 Blightlings, d3 Bloated</Line>
              <Line red>⚠ Source of fungal contamination</Line>
              <Divider />

              <Line neon bold>6. BALL COURTS</Line>
              <Line>Moss and rot leaked in, floors collapsed</Line>
              <Line>Easy access to other REC areas</Line>
              <Line>Inhabited by d6 Blightlings</Line>
              <Line>Structural instability (collapse risk)</Line>
            </Section>

            <Section title="LEVEL 59: DANGER ZONE">
              <Line neon bold>8. THE HALLS</Line>
              <Line>Full of trash and barricaded doors</Line>
              <Line>DR12 to get in (sealed from inside)</Line>
              <Line red bold>⚠ MINOS stalks these corridors</Line>
              <Line>Cybered-up monster, extremely dangerous</Line>
              <Divider />

              <Line neon bold>10. GARDENS</Line>
              <Line>Converted to experimental botanical lab</Line>
              <Line>Attended by 2d4 Chemmed Gang-Goons</Line>
              <Line>Growing experimental drugs and mutated plants</Line>
              <Line yellow>⚠ Valuable but heavily guarded</Line>
            </Section>

            <Section title="LEVEL 60: VERTICAL DANGER">
              <Line neon bold>11. FREIGHT ELEVATOR</Line>
              <Line red bold>⚠ HOME OF THE ROT KING</Line>
              <Line>Mobile threat, climbs all surfaces</Line>
              <Line>Can eat corpses to recover HP</Line>
              <Line>Ambushes from elevator shaft</Line>
              <Divider />

              <Line neon bold>12. COMMON AREA</Line>
              <Line>Conversation pits, kids' play areas</Line>
              <Line>Converted to gang makeshift homes</Line>
              <Line>Lots of improvised gardens</Line>
              <Line>2d4 Chemmed Gang-Goons live here</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Threats: Chemmed Gang-Goons": {
            content: (
              <>
                <Line cyan large bold>[CHEMMED GANG-GOONS]</Line>
                <Line smoke>Muscular, chemically-enhanced residents</Line>
                <Divider />

                <Section title="STATS">
                  <KeyValue label="HP" value="6" />
                  <KeyValue label="Morale" value="6" />
                  <KeyValue label="Armor" value="Thick skin (-d2)" />
                  <KeyValue label="Weapons" value="Dumbbells and weights (d6)" />
                </Section>

                <Section title="DESCRIPTION">
                  <Line>Tall and wide, full of chemical enhancements and meat</Line>
                  <Line>Obsessed with fitness and strength</Line>
                  <Line>Aggressive territorial behavior</Line>
                  <Line>Use gym equipment as improvised weapons</Line>
                </Section>

                <Section title="LOCATIONS">
                  <Line neon>FOUND AT:</Line>
                  <Line>• Gym (2d6, extremely hostile)</Line>
                  <Line>• Gardens (2d4, guarding drug operation)</Line>
                  <Line>• Common Area (2d4, living quarters)</Line>
                </Section>

                <Section title="BEHAVIOR">
                  <Line>Will attack intruders on sight at Gym</Line>
                  <Line>More negotiable at Gardens (protecting investment)</Line>
                  <Line>Can be reasoned with if you appear strong</Line>
                  <Line yellow>⚠ Never back down from a challenge</Line>
                </Section>
              </>
            ),
          },

          "Threats: Blightlings": {
            content: (
              <>
                <Line cyan large bold>[BLIGHTLINGS]</Line>
                <Line smoke>Fungal-mutated entities</Line>
                <Divider />

                <Section title="STATS">
                  <KeyValue label="HP" value="12" />
                  <KeyValue label="Morale" value="-" />
                  <KeyValue label="Armor" value="None" />
                  <KeyValue label="Weapons" value="Claws (d6)" />
                </Section>

                <Section title="SPECIAL ABILITY">
                  <Line red bold>SPLIT ON DAMAGE:</Line>
                  <Line>When it takes damage, splits into 2 creatures</Line>
                  <Line>Each has half the remaining HP of original (round down)</Line>
                  <Line>Makes them difficult to kill without overwhelming force</Line>
                  <Line yellow>⚠ Can quickly become outnumbered</Line>
                </Section>

                <Section title="DESCRIPTION">
                  <Line>Humanoid shapes covered in fungal growth</Line>
                  <Line>Move erratically, no visible eyes</Line>
                  <Line>Emit spore clouds when damaged</Line>
                  <Line>Seem to operate on simple instinct</Line>
                </Section>

                <Section title="LOCATIONS">
                  <Line neon>FOUND AT:</Line>
                  <Line>• Park (2d6, primary infestation)</Line>
                  <Line>• Ball Courts (d6, spillover from park)</Line>
                </Section>
              </>
            ),
          },

          "Threats: Minos": {
            content: (
              <>
                <Line cyan large bold>[MINOS]</Line>
                <Line smoke>Cybered-up monster stalking The Halls</Line>
                <Divider />

                <Section title="STATS">
                  <KeyValue label="HP" value="16" />
                  <KeyValue label="Morale" value="9" />
                  <KeyValue label="Armor" value="Chromed (-d4)" />
                  <KeyValue label="Weapons" value="Metal hooves and fists (d8)" />
                </Section>

                <Section title="DESCRIPTION">
                  <Line red bold>A man, once upon a time.</Line>
                  <Line>Now a wandering, bellowing monster</Line>
                  <Line>Heavily cybered with chrome implants</Line>
                  <Line>Hoofed feet (cyberlegs), massive fists</Line>
                  <Line>Head replaced with chrome bull-like structure</Line>
                </Section>

                <Section title="BEHAVIOR">
                  <Line>Stalks The Halls endlessly</Line>
                  <Line>Attacks anything that moves</Line>
                  <Line>Makes loud bellowing sounds (audible throughout REC)</Line>
                  <Line>Intelligent enough to set ambushes</Line>
                  <Line yellow>⚠ Will chase prey through multiple rooms</Line>
                </Section>

                <Section title="TACTICS">
                  <Line>Uses darkness and trash-filled halls to advantage</Line>
                  <Line>Listens for intruders, stalks quietly until close</Line>
                  <Line>Charges when detected (devastating impact)</Line>
                  <Line>Will not leave The Halls unless pursued</Line>
                </Section>

                <Section title="LOCATION">
                  <Line neon bold>THE HALLS (Level 59):</Line>
                  <Line>DR12 to get in (barricaded from inside)</Line>
                  <Line>Full of trash and blocked corridors</Line>
                  <Line>Perfect hunting ground for Minos</Line>
                  <Line red>⚠ Extreme danger - avoid if possible</Line>
                </Section>
              </>
            ),
          },

          "Threats: Rot King": {
            content: (
              <>
                <Line cyan large bold>[ROT KING]</Line>
                <Line smoke>Corpse-composite entity in freight elevator</Line>
                <Divider />

                <Section title="STATS">
                  <KeyValue label="HP" value="10" />
                  <KeyValue label="Morale" value="-" />
                  <KeyValue label="Armor" value="Corpses (-d2)" />
                  <KeyValue label="Weapons" value="Bone shards (d6)" />
                </Section>

                <Section title="SPECIAL ABILITIES">
                  <Line neon bold>CLIMBS AND CLINGS:</Line>
                  <Line>Can traverse all surfaces (walls, ceilings)</Line>
                  <Line>Ambushes from unexpected angles</Line>
                  <Divider />

                  <Line neon bold>CORPSE CONSUMPTION:</Line>
                  <Line>Can eat corpses or organic matter to recover HP</Line>
                  <Line>Heals fully if given enough material</Line>
                  <Line yellow>⚠ Don't leave bodies behind</Line>
                </Section>

                <Section title="DESCRIPTION">
                  <Line>Amalgamation of corpses and decaying flesh</Line>
                  <Line>Multiple limbs from different bodies</Line>
                  <Line>Constantly adding to itself from victims</Line>
                  <Line>Smells of rot and decay (detectable from distance)</Line>
                </Section>

                <Section title="BEHAVIOR">
                  <Line>Lives in freight elevator shaft (Level 60)</Line>
                  <Line>Ambushes anything using elevator</Line>
                  <Line>Mobile threat - can move between REC levels</Line>
                  <Line>Intelligent hunter, plans attacks</Line>
                </Section>

                <Section title="LOCATION">
                  <Line neon bold>FREIGHT ELEVATOR (Level 60):</Line>
                  <Line>Connects REC to lower levels (The Base)</Line>
                  <Line>Only functional elevator in REC zone</Line>
                  <Line>Rot King uses shaft for mobility</Line>
                  <Line red>⚠ Using elevator is extremely dangerous</Line>
                </Section>
              </>
            ),
          },
        },
      },

      access_rec_monitoring: {
        password: {
          pw: "recreation",
          hint: "What REC is short for (the full word)",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="REC MONITORING SYSTEMS"
            message="CONTAINMENT ACCESS GRANTED"
            networkInfo="⚠ Hazard zone monitoring - Emergency personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Environmental Sensors": {
            content: (
              <>
                <Line cyan large bold>[REC ENVIRONMENTAL SENSORS]</Line>
                <Line smoke>Real-time hazard monitoring</Line>
                <Divider />

                <Section title="AIR QUALITY">
                  <DataTable
                    data={[
                      { label: "Level 51-52 (Pool/Showers)", value: "🔴 TOXIC (Spores)" },
                      { label: "Level 53-54 (Gym/Track)", value: "🟡 POOR (Stale air)" },
                      { label: "Level 55-56 (Arcade/Cinema)", value: "🟡 POOR (Dust)" },
                      { label: "Level 57-58 (Park/Courts)", value: "🔴 TOXIC (Fungal)" },
                      { label: "Level 59 (Halls/Gardens)", value: "🟡 POOR (Decay)" },
                      { label: "Level 60 (Elevator/Common)", value: "🟡 POOR (Rot)" },
                    ]}
                  />
                  <Line yellow>⚠ Recommend respirators for all REC entry</Line>
                </Section>

                <Section title="STRUCTURAL INTEGRITY">
                  <DataTable
                    data={[
                      { label: "Pool", value: "78% (Stable)" },
                      { label: "Gym", value: "85% (Stable)" },
                      { label: "Running Track", value: "71% (Degraded)" },
                      { label: "Arcade", value: "82% (Stable)" },
                      { label: "Park", value: "63% (Critical)" },
                      { label: "Ball Courts", value: "41% (Collapsed sections)" },
                      { label: "Cinema", value: "76% (Flooded)" },
                      { label: "The Halls", value: "68% (Barricaded)" },
                      { label: "Gardens", value: "73% (Modified)" },
                      { label: "Freight Elevator", value: "55% (Damaged)" },
                    ]}
                  />
                </Section>

                <Section title="BIOLOGICAL CONTAMINATION">
                  <Line red bold>ACTIVE CONTAMINATION ZONES:</Line>
                  <Line>• Park (Level 57) - SOURCE of fungal spread</Line>
                  <Line>• Pool (Level 51) - Toxic ecosystem development</Line>
                  <Line>• Showers (Level 52) - Fungal growth, corpses</Line>
                  <Line>• Ball Courts (Level 58) - Spillover from park</Line>
                  <Divider />

                  <Line yellow>⚠ CONTAINMENT STATUS:</Line>
                  <Line>Semi-contained - Sealed doors prevent spread to other levels</Line>
                  <Line>Internal spread uncontrolled within REC zone</Line>
                  <Line>Regular breaches require security response</Line>
                </Section>

                <Section title="MOTION DETECTION">
                  <Line neon bold>ACTIVITY DETECTED (Last 24 hours):</Line>
                  <Line>• Gym (Level 53) - Constant movement (gang activity)</Line>
                  <Line>• Gardens (Level 59) - Regular movement (gang cultivation)</Line>
                  <Line>• The Halls (Level 59) - Intermittent (Minos patrols)</Line>
                  <Line>• Freight Elevator - Sporadic (Rot King ambushes)</Line>
                  <Line>• Park (Level 57) - Extensive (Blightling infestation)</Line>
                </Section>
              </>
            ),
          },

          "Containment Protocols": {
            content: (
              <>
                <Line cyan large bold>[REC CONTAINMENT PROTOCOLS]</Line>
                <Line smoke>Emergency procedures for breach scenarios</Line>
                <Divider />

                <Section title="CURRENT STATUS">
                  <KeyValue label="Containment Level" value="SEMI-CONTAINED" />
                  <KeyValue label="Last Breach" value="2 days ago (Level 58)" />
                  <KeyValue label="Security Response" value="ACTIVE" />
                  <KeyValue
                    label="Elimination Authorization"
                    value="APPROVED (All threats)"
                  />
                </Section>

                <Section title="BREACH RESPONSE PROCEDURE">
                  <Line neon bold>IF ENTITY ESCAPES REC ZONE:</Line>
                  <Line>1. Identify threat type and location</Line>
                  <Line>2. Alert Stack Command immediately</Line>
                  <Line>3. Deploy security team (armed)</Line>
                  <Line>4. Evacuate adjacent floors if necessary</Line>
                  <Line>5. Eliminate or recapture threat</Line>
                  <Line>6. Reinforce containment seals</Line>
                </Section>

                <Section title="THREAT ELIMINATION PRIORITIES">
                  <Line red bold>HIGH PRIORITY (Eliminate on sight):</Line>
                  <Line>• Blightlings (Spread contamination)</Line>
                  <Line>• Bloated (Toxic hazard)</Line>
                  <Line>• Rot King (Extreme danger)</Line>
                  <Divider />

                  <Line yellow bold>MEDIUM PRIORITY (Contain or negotiate):</Line>
                  <Line>• Minos (Dangerous but contained to Halls)</Line>
                  <Line>• Ghosts (Low physical threat)</Line>
                  <Divider />

                  <Line smoke bold>LOW PRIORITY (Monitor only):</Line>
                  <Line>• Chemmed Gang-Goons (Rational, can negotiate)</Line>
                </Section>

                <Section title="RECENT INCIDENTS">
                  <Line neon bold>INCIDENT LOG:</Line>
                  <Line>• 2 days ago - Single Blightling escaped to Level 61</Line>
                  <Line>  Response: Security team eliminated, no casualties</Line>
                  <Divider />

                  <Line>• 1 week ago - Minos attempted breach at sealed door</Line>
                  <Line>  Response: Reinforced seals, monitored, returned to Halls</Line>
                  <Divider />

                  <Line>• 2 weeks ago - Rot King ambushed maintenance crew</Line>
                  <Line>  Response: 1 casualty, freight elevator marked off-limits</Line>
                </Section>

                <Section title="SEAL MAINTENANCE">
                  <Line yellow>⚠ SEAL INTEGRITY CHECKS:</Line>
                  <Line>Stairwell doors inspected weekly</Line>
                  <Line>Elevator access disabled (except freight - dangerous)</Line>
                  <Line>Ventilation sealed to prevent spore spread</Line>
                  <Line>Warning signs posted at all access points</Line>
                </Section>
              </>
            ),
          },

          "Emergency Shutoff Systems": {
            password: {
              pw: "containment",
              hint: "What the REC protocols are designed to do (keep things in)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[REC EMERGENCY SHUTOFF SYSTEMS]</Line>
                <Line smoke>Nuclear option for catastrophic scenarios</Line>
                <Divider />

                <Box color="red">
                  <Line bold>⚠ EXTREME MEASURES - AUTHORIZATION REQUIRED</Line>
                  <Line>These systems will cause massive damage to The REC</Line>
                  <Line>Use only if containment fails completely</Line>
                  <Line>Director approval + THOTH recommendation required</Line>
                </Box>

                <Section title="AVAILABLE SYSTEMS">
                  <Line red bold>OPTION 1: ATMOSPHERE PURGE</Line>
                  <Line>Vent all air from REC levels (10-15 minutes)</Line>
                  <Line>Kills most biological threats via suffocation</Line>
                  <Line>Will also kill any humans inside (no exceptions)</Line>
                  <Line yellow>⚠ Spores may survive, requires follow-up</Line>
                  <Divider />

                  <Line red bold>OPTION 2: THERMAL PURGE</Line>
                  <Line>Superheat REC levels to 200°C (30 minutes)</Line>
                  <Line>Sterilizes biological contamination</Line>
                  <Line>Destroys most equipment and structure</Line>
                  <Line yellow>⚠ Fire hazard, may spread to adjacent levels</Line>
                  <Divider />

                  <Line red bold>OPTION 3: CHEMICAL SATURATION</Line>
                  <Line>Flood REC with industrial cleaner/poison</Line>
                  <Line>Kills organic threats, neutralizes spores</Line>
                  <Line>Toxic to humans for weeks after application</Line>
                  <Line yellow>⚠ Chemical disposal required, expensive</Line>
                  <Divider />

                  <Line red bold>OPTION 4: TOTAL SEAL + STARVE</Line>
                  <Line>Reinforce all seals, cut power/water/air</Line>
                  <Line>Let threats die naturally over time (months)</Line>
                  <Line>Least destructive, longest timeframe</Line>
                  <Line yellow>⚠ Chemmed Gang-Goons may survive indefinitely</Line>
                </Section>

                <Section title="ACTIVATION REQUIREMENTS">
                  <Line neon bold>TO ACTIVATE ANY SYSTEM:</Line>
                  <Line>1. Document catastrophic failure of containment</Line>
                  <Line>2. Evacuate adjacent levels (50-70)</Line>
                  <Line>3. Obtain Director Emmanuel 5 approval</Line>
                  <Line>4. Confirm THOTH recommendation</Line>
                  <Line>5. Input dual-key authorization codes</Line>
                  <Line>6. Execute with 10-minute countdown (abort window)</Line>
                </Section>

                <Section title="CONSEQUENCES">
                  <Line red bold>POST-ACTIVATION CONCERNS:</Line>
                  <Line>• REC levels uninhabitable for extended period</Line>
                  <Line>• Structural damage may compromise levels 40-70</Line>
                  <Line>• Cost: 500,000¤ - 2,000,000¤ depending on method</Line>
                  <Line>• Loss of 10 floors reduces stack capacity permanently</Line>
                  <Line>• Corporate investigation into management failures</Line>
                </Section>

                <Section title="THOTH'S RECOMMENDATION">
                  <Line cyan bold>AI ADVISORY NOTE:</Line>
                  <Line>
                    "Current containment is holding. Emergency shutoff unnecessary at this
                    time."
                  </Line>
                  <Line>
                    "However, if Blightling infestation spreads beyond Park level,
                    recommend immediate Chemical Saturation."
                  </Line>
                  <Line>
                    "Rot King remains manageable. Minos is contained. Gang activity is
                    predictable."
                  </Line>
                  <Line yellow>
                    "Suggest increased monitoring rather than drastic action."
                  </Line>
                </Section>
              </>
            ),
          },

          "Bounty Board": {
            content: (
              <>
                <Line cyan large bold>[REC ELIMINATION BOUNTIES]</Line>
                <Line smoke>Community-funded threat removal program</Line>
                <Divider />

                <Section title="ACTIVE BOUNTIES">
                  <Line neon bold>BLIGHTLING ELIMINATION:</Line>
                  <KeyValue label="Bounty" value="50¤ per Blightling" />
                  <KeyValue label="Proof Required" value="Tissue sample or photo" />
                  <KeyValue label="Funded By" value="Community Outreach + Lazet" />
                  <Line smoke>Reduces contamination spread risk</Line>
                  <Divider />

                  <Line neon bold>MINOS ELIMINATION:</Line>
                  <KeyValue label="Bounty" value="2,000¤" />
                  <KeyValue label="Proof Required" value="Cybered bull head" />
                  <KeyValue label="Funded By" value="Stack Command" />
                  <Line smoke>
                    Most dangerous individual threat, would allow Halls reclamation
                  </Line>
                  <Divider />

                  <Line neon bold>ROT KING ELIMINATION:</Line>
                  <KeyValue label="Bounty" value="1,500¤" />
                  <KeyValue label="Proof Required" value="Core tissue sample" />
                  <KeyValue label="Funded By" value="Stack Command" />
                  <Line smoke>Would make freight elevator usable again</Line>
                  <Divider />

                  <Line neon bold>BIOLOGICAL SAMPLES:</Line>
                  <KeyValue label="Bounty" value="100¤ per unique sample" />
                  <KeyValue label="Proof Required" value="Viable specimen" />
                  <KeyValue label="Funded By" value="Lazet (Alliansen Arms)" />
                  <Line smoke>For research purposes, any REC organism</Line>
                </Section>

                <Section title="CLAIMED BOUNTIES (Last 30 Days)">
                  <Line>• 3 Blightlings eliminated (150¤ paid out)</Line>
                  <Line>• 7 biological samples collected (700¤ paid out)</Line>
                  <Line>• 0 major threats eliminated</Line>
                </Section>

                <Section title="SUBMISSION PROCESS">
                  <Line neon>TO CLAIM BOUNTY:</Line>
                  <Line>1. Bring proof to Stack Command or Community Outreach</Line>
                  <Line>2. Proof verified by staff or Lazet (for samples)</Line>
                  <Line>3. Payment issued immediately upon verification</Line>
                  <Line yellow>⚠ No bounty for gang-goons (they're human residents)</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_REC_COMMANDS;
