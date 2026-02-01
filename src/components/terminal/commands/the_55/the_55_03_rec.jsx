import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  Locked,
  MaintenanceAccess,
  Message,
  PublicPortal,
} from "@terminal/retcomdevice";

export const THE_55_REC_COMMANDS = {
  "[U051 - U060] The REC": {
    content: (
      <PublicPortal
        name="THE REC"
        tagline="Recreation Levels - Abandoned"
        network="NONE"
        signalStrength="weak"
        status="EXTREME HAZARD - SEALED"
        statusColor="red"
        notes={[
          "Once required recreational amenities, now abandoned",
          "Multiple hostile entities and environmental hazards",
          "Entry requires breaking seals (DR14) or maintenance access",
          "Semi-contained chaos"
        ]}
        theme="secure"
      />
    ),
    related_commands: {
      "REC Overview": {
        content: (
          <MaintenanceAccess
            title="[THE REC - RECREATION LEVELS]"
            deviceModel="Hazard Zone Management"
            deviceId="REC-ZONE-01"
            firmwareVersion="v1.0.0"
            systemStatus="SEMI-CONTAINED"
            notes={[
              "Every stack once required 10+ levels of parks and recreation",
              "They never said anything about maintaining them",
              "Now: Semi-contained chaos locals call THE REC"
            ]}
          >
            <Divider />
            <InsetBox title="KNOWN THREATS:">
              <Line red>• Chemmed Gang-Goons</Line>
              <Line red>• Blightlings</Line>
              <Line red>• Bloated</Line>
              <Line red pulse bold>• Rot King</Line>
            </InsetBox>
            <InsetBox title="ENVIRONMENTAL HAZARDS:">
              <Line yellow>• Fungal overgrowth from park and pool</Line>
              <Line yellow>• Toxic water in pool and showers</Line>
              <Line yellow>• Poor visibility (overgrowth, darkness)</Line>
            </InsetBox>
            <InsetBox title="ACCESS POINTS:">
              <Line cyan>• Maintenance access (credentials required)</Line>
              <Line cyan>• Ball Courts structural damage (exposed from below)</Line>
              <Line red bold>• Freight elevator (ROT KING)</Line>
            </InsetBox>
            <InsetBox title="BOUNTIES:">
              <Line neon bold>LAZET (Alliansen Arms #6101) PAYS:</Line>
              <Line neon>100¤ per biological sample from The REC</Line>
              <Line smoke>Interested in mutations, fungal specimens, entity tissue</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "REC Location Map": {
        content: (
          <MaintenanceAccess
            title="[THE REC - LOCATION MAP]"
            deviceModel="Facility Directory"
            deviceId="REC-MAP-01"
            firmwareVersion="v1.0.0"
            systemStatus="MONITORING"
            notes={[
              "10 floors of abandoned recreation facilities",
              "12 major locations identified",
              "Multiple threat zones"
            ]}
          >
            <Divider />
            <InsetBox title="LEVEL 324-328: AQUATIC ZONE">
              <Line neon bold>1. POOL (Olympic-sized):</Line>
              <Line smoke>Long abandoned, strange ecosystem developed</Line>
              <Line smoke>Toxic water, bioluminescent algae</Line>
              <Line smoke>100¤ bounty per sample (Lazet)</Line>
              <Line yellow>Do not drink or swim in water</Line>

              <Divider />

              <Line neon bold>9. SHOWERS:</Line>
              <Line smoke>Humid, carpeted with fungi and rotting corpses</Line>
              <Line smoke>Slippery floors, poor visibility</Line>
              <Line red>Toxic spores in air (DR12 Toughness)</Line>
            </InsetBox>
            <InsetBox title="LEVEL 329-333: FITNESS ZONE">
              <Line neon bold>2. GYM:</Line>
              <Line smoke>Occupied 24/7 by 2d6 angry Chemmed Gang-Goons</Line>
              <Line smoke>Weights and equipment still functional</Line>
              <Line red>Extremely hostile to intruders</Line>

              <Divider />

              <Line neon bold>3. RUNNING TRACK:</Line>
              <Line smoke>Built along inner perimeter of floor</Line>
              <Line smoke>Overgrown from park and pool vegetation</Line>
              <Line smoke>Difficult terrain, limited visibility</Line>
            </InsetBox>
            <InsetBox title="LEVEL 334-338: ENTERTAINMENT ZONE">
              <Line neon bold>4. FLYNN'S CAVE (Ruined arcade):</Line>
              <Line smoke>Broken arcade machines and cabinets</Line>
              <Line smoke>Inhabited by d3 Ghosts</Line>
              <Line yellow>Digital entities, unpredictable behavior</Line>

              <Divider />

              <Line neon bold>7. CINEMA:</Line>
              <Line smoke>3 damaged screens, partially flooded</Line>
              <Line smoke>Old seats and projection equipment</Line>
              <Line cyan>Relatively safe (empty)</Line>
            </InsetBox>
            <InsetBox title="LEVEL 339-343: OUTDOOR ZONE">
              <Line neon bold>5. PARK:</Line>
              <Line smoke>Overgrown and mutated vegetation</Line>
              <Line smoke>Sealed to public (DR14 to break seals)</Line>
              <Line smoke>Inhabited by 2d6 Blightlings, d3 Bloated</Line>
              <Line red>SOURCE of fungal contamination</Line>

              <Divider />

              <Line neon bold>6. BALL COURTS:</Line>
              <Line smoke>Moss and rot leaked in, floors collapsed</Line>
              <Line smoke>Easy access to other REC areas</Line>
              <Line smoke>Inhabited by d6 Blightlings</Line>
              <Line yellow>Structural instability (collapse risk)</Line>
            </InsetBox>
            <InsetBox title="LEVEL 344-347: DANGER ZONE">
              <Line neon bold>8. THE HALLS:</Line>
              <Line smoke>Full of trash and barricaded doors</Line>
              <Line smoke>DR12 to get in (sealed from inside)</Line>
              <Line red bold>MINOS stalks these corridors</Line>
              <Line red>Cybered-up monster, extremely dangerous</Line>

              <Divider />

              <Line neon bold>10. GARDENS:</Line>
              <Line smoke>Converted to experimental botanical lab</Line>
              <Line smoke>Attended by 2d4 Chemmed Gang-Goons</Line>
              <Line smoke>Growing experimental drugs and mutated plants</Line>
              <Line yellow>Valuable but heavily guarded</Line>
            </InsetBox>
            <InsetBox title="LEVEL 348-349: VERTICAL DANGER">
              <Line neon bold>11. FREIGHT ELEVATOR:</Line>
              <Line red bold>HOME OF THE ROT KING</Line>
              <Line red>Mobile threat, climbs all surfaces</Line>
              <Line red>Can eat corpses to recover HP</Line>
              <Line red>Ambushes from elevator shaft</Line>

              <Divider />

              <Line neon bold>12. COMMON AREA:</Line>
              <Line smoke>Conversation pits, kids' play areas</Line>
              <Line smoke>Converted to gang makeshift homes</Line>
              <Line smoke>Lots of improvised gardens</Line>
              <Line smoke>2d4 Chemmed Gang-Goons live here</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Threats: Chemmed Gang-Goons": {
            content: (
              <MaintenanceAccess
                title="[CHEMMED GANG-GOONS]"
                deviceModel="Threat Assessment"
                deviceId="THREAT-GANG-01"
                firmwareVersion="v1.0.0"
                systemStatus="MONITORED"
                notes={[
                  "Muscular, chemically-enhanced residents",
                  "Found at: Gym, Gardens, Common Area",
                  "Threat level: MEDIUM (rational, negotiable)"
                ]}
              >
                <Divider />
                <InsetBox title="STATS:">
                  <Line cyan>HP: 6</Line>
                  <Line cyan>Morale: 6</Line>
                  <Line cyan>Armor: Thick skin (-d2)</Line>
                  <Line cyan>Weapons: Dumbbells and weights (d6)</Line>
                </InsetBox>
                <InsetBox title="DESCRIPTION:">
                  <Line>Tall and wide, full of chemical enhancements and meat</Line>
                  <Line>Obsessed with fitness and strength</Line>
                  <Line>Aggressive territorial behavior</Line>
                  <Line>Use gym equipment as improvised weapons</Line>
                </InsetBox>
                <InsetBox title="LOCATIONS:">
                  <Line neon>• Gym (2d6, extremely hostile)</Line>
                  <Line neon>• Gardens (2d4, guarding drug operation)</Line>
                  <Line neon>• Common Area (2d4, living quarters)</Line>
                </InsetBox>
                <InsetBox title="BEHAVIOR:">
                  <Line>Will attack intruders on sight at Gym</Line>
                  <Line>More negotiable at Gardens (protecting investment)</Line>
                  <Line>Can be reasoned with if you appear strong</Line>
                  <Line yellow>Never back down from a challenge</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Threats: Blightlings": {
            content: (
              <MaintenanceAccess
                title="[BLIGHTLINGS]"
                deviceModel="Threat Assessment"
                deviceId="THREAT-BLIGHT-01"
                firmwareVersion="v1.0.0"
                systemStatus="HIGH PRIORITY"
                notes={[
                  "Fungal-mutated entities",
                  "Found at: Park, Ball Courts",
                  "Threat level: HIGH (spread contamination)"
                ]}
              >
                <Divider />
                <InsetBox title="STATS:">
                  <Line cyan>HP: 12</Line>
                  <Line cyan>Morale: -</Line>
                  <Line cyan>Armor: None</Line>
                  <Line cyan>Weapons: Claws (d6)</Line>
                </InsetBox>
                <InsetBox title="SPECIAL ABILITY - SPLIT ON DAMAGE:">
                  <Line red>When it takes damage, splits into 2 creatures</Line>
                  <Line red>Each has half the remaining HP of original (round down)</Line>
                  <Line red>Makes them difficult to kill without overwhelming force</Line>
                  <Line yellow>Can quickly become outnumbered</Line>
                </InsetBox>
                <InsetBox title="DESCRIPTION:">
                  <Line>Humanoid shapes covered in fungal growth</Line>
                  <Line>Move erratically, no visible eyes</Line>
                  <Line>Emit spore clouds when damaged</Line>
                  <Line>Seem to operate on simple instinct</Line>
                </InsetBox>
                <InsetBox title="LOCATIONS:">
                  <Line neon>• Park (2d6, primary infestation)</Line>
                  <Line neon>• Ball Courts (d6, spillover from park)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Threats: Minos": {
            content: (
              <MaintenanceAccess
                title="[MINOS]"
                deviceModel="Threat Assessment"
                deviceId="THREAT-MINOS-01"
                firmwareVersion="v1.0.0"
                systemStatus="EXTREME DANGER"
                notes={[
                  "Cybered-up monster stalking The Halls",
                  "Found at: The Halls (Level 59)",
                  "Bounty: 2,000¤"
                ]}
              >
                <Divider />
                <InsetBox title="STATS:">
                  <Line red>HP: 16</Line>
                  <Line red>Morale: 9</Line>
                  <Line red>Armor: Chromed (-d4)</Line>
                  <Line red>Weapons: Metal hooves and fists (d8)</Line>
                </InsetBox>
                <InsetBox title="DESCRIPTION:">
                  <Line red bold>A man, once upon a time.</Line>
                  <Line>Now a wandering, bellowing monster</Line>
                  <Line>Heavily cybered with chrome implants</Line>
                  <Line>Hoofed feet (cyberlegs), massive fists</Line>
                  <Line>Head replaced with chrome bull-like structure</Line>
                </InsetBox>
                <InsetBox title="BEHAVIOR:">
                  <Line>Stalks The Halls endlessly</Line>
                  <Line>Attacks anything that moves</Line>
                  <Line>Makes loud bellowing sounds (audible throughout REC)</Line>
                  <Line>Intelligent enough to set ambushes</Line>
                  <Line yellow>Will chase prey through multiple rooms</Line>
                </InsetBox>
                <InsetBox title="TACTICS:">
                  <Line>Uses darkness and trash-filled halls to advantage</Line>
                  <Line>Listens for intruders, stalks quietly until close</Line>
                  <Line>Charges when detected (devastating impact)</Line>
                  <Line>Will not leave The Halls unless pursued</Line>
                </InsetBox>
                <InsetBox title="LOCATION - THE HALLS:">
                  <Line>DR12 to get in (barricaded from inside)</Line>
                  <Line>Full of trash and blocked corridors</Line>
                  <Line>Perfect hunting ground for Minos</Line>
                  <Line red>Extreme danger - avoid if possible</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Threats: Rot King": {
            content: (
              <MaintenanceAccess
                title="[ROT KING]"
                deviceModel="Threat Assessment"
                deviceId="THREAT-ROT-01"
                firmwareVersion="v1.0.0"
                systemStatus="EXTREME DANGER"
                notes={[
                  "Corpse-composite entity in freight elevator",
                  "Found at: Freight Elevator shaft",
                  "Bounty: 1,500¤"
                ]}
              >
                <Divider />
                <InsetBox title="STATS:">
                  <Line red>HP: 10</Line>
                  <Line red>Morale: -</Line>
                  <Line red>Armor: Corpses (-d2)</Line>
                  <Line red>Weapons: Bone shards (d6)</Line>
                </InsetBox>
                <InsetBox title="SPECIAL ABILITIES:">
                  <Line neon bold>CLIMBS AND CLINGS:</Line>
                  <Line neon>Can traverse all surfaces (walls, ceilings)</Line>
                  <Line neon>Ambushes from unexpected angles</Line>

                  <Divider />

                  <Line neon bold>CORPSE CONSUMPTION:</Line>
                  <Line neon>Can eat corpses or organic matter to recover HP</Line>
                  <Line neon>Heals fully if given enough material</Line>
                  <Line yellow>Don't leave bodies behind</Line>
                </InsetBox>
                <InsetBox title="DESCRIPTION:">
                  <Line>Amalgamation of corpses and decaying flesh</Line>
                  <Line>Multiple limbs from different bodies</Line>
                  <Line>Constantly adding to itself from victims</Line>
                  <Line>Smells of rot and decay (detectable from distance)</Line>
                </InsetBox>
                <InsetBox title="BEHAVIOR:">
                  <Line>Lives in freight elevator shaft (Level 60)</Line>
                  <Line>Ambushes anything using elevator</Line>
                  <Line>Mobile threat - can move between REC levels</Line>
                  <Line>Intelligent hunter, plans attacks</Line>
                </InsetBox>
                <InsetBox title="LOCATION - FREIGHT ELEVATOR:">
                  <Line>Connects REC to lower levels (The Base)</Line>
                  <Line>Only functional elevator in REC zone</Line>
                  <Line>Rot King uses shaft for mobility</Line>
                  <Line red>Using elevator is extremely dangerous</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "REC Monitoring": {
        // password: {
        //   pw: "recreation",
        //   hint: "What REC is short for",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="REC MONITORING" />
        // },
        content: (
          <Message
            title="REC MONITORING SYSTEMS"
            message="CONTAINMENT ACCESS GRANTED"
            note="⚠ Hazard zone monitoring - Emergency personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Environmental Sensors": {
            content: (
              <MaintenanceAccess
                title="[REC ENVIRONMENTAL SENSORS]"
                deviceModel="Hazard Monitoring System"
                deviceId="ENV-SENS-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Real-time hazard monitoring",
                  "10 floors of contaminated space",
                  "Recommend respirators for all REC entry"
                ]}
              >
                <Divider />
                <InsetBox title="AIR QUALITY:">
                  <Line red>Level 51-52 (Pool/Showers): TOXIC (Spores)</Line>
                  <Line yellow>Level 53-54 (Gym/Track): POOR (Stale air)</Line>
                  <Line yellow>Level 55-56 (Arcade/Cinema): POOR (Dust)</Line>
                  <Line red>Level 57-58 (Park/Courts): TOXIC (Fungal)</Line>
                  <Line yellow>Level 59 (Halls/Gardens): POOR (Decay)</Line>
                  <Line yellow>Level 60 (Elevator/Common): POOR (Rot)</Line>
                  <Line smoke>Recommend respirators for all REC entry</Line>
                </InsetBox>
                <InsetBox title="STRUCTURAL INTEGRITY:">
                  <Line cyan>Pool: 78% (Stable)</Line>
                  <Line cyan>Gym: 85% (Stable)</Line>
                  <Line yellow>Running Track: 71% (Degraded)</Line>
                  <Line cyan>Arcade: 82% (Stable)</Line>
                  <Line red>Park: 63% (Critical)</Line>
                  <Line red>Ball Courts: 41% (Collapsed sections)</Line>
                  <Line yellow>Cinema: 76% (Flooded)</Line>
                  <Line yellow>The Halls: 68% (Barricaded)</Line>
                  <Line yellow>Gardens: 73% (Modified)</Line>
                  <Line red>Freight Elevator: 55% (Damaged)</Line>
                </InsetBox>
                <InsetBox title="BIOLOGICAL CONTAMINATION:">
                  <Line red bold>ACTIVE CONTAMINATION ZONES:</Line>
                  <Line red>• Park (Level 57-58) - SOURCE of fungal spread</Line>
                  <Line red>• Pool (Level 51-52) - Toxic ecosystem development</Line>
                  <Line red>• Showers (Level 51-52) - Fungal growth, corpses</Line>
                  <Line red>• Ball Courts (Level 57-58) - Spillover from park</Line>

                  <Divider />

                  <Line yellow bold>CONTAINMENT STATUS:</Line>
                  <Line yellow>Semi-contained - Sealed doors prevent spread to other levels</Line>
                  <Line yellow>Internal spread uncontrolled within REC zone</Line>
                  <Line yellow>Regular breaches require security response</Line>
                </InsetBox>
                <InsetBox title="MOTION DETECTION (Last 24h):">
                  <Line neon>• Gym (Level 53-54) - Constant movement (gang activity)</Line>
                  <Line neon>• Gardens (Level 59) - Regular movement (gang cultivation)</Line>
                  <Line neon>• The Halls (Level 59) - Intermittent (Minos patrols)</Line>
                  <Line neon>• Freight Elevator - Sporadic (Rot King ambushes)</Line>
                  <Line neon>• Park (Level 57-58) - Extensive (Blightling infestation)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Containment Protocols": {
            content: (
              <MaintenanceAccess
                title="[REC CONTAINMENT PROTOCOLS]"
                deviceModel="Emergency Response System"
                deviceId="CONTAIN-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Emergency procedures for breach scenarios",
                  "Last breach: 2 days ago (Level 57-58)",
                  "Elimination authorization: APPROVED"
                ]}
              >
                <Divider />
                <InsetBox title="CURRENT STATUS:">
                  <Line cyan>Containment Level: SEMI-CONTAINED</Line>
                  <Line yellow>Last Breach: 2 days ago (Level 57-58)</Line>
                  <Line cyan>Security Response: ACTIVE</Line>
                  <Line cyan>Elimination Authorization: APPROVED (All threats)</Line>
                </InsetBox>
                <InsetBox title="BREACH RESPONSE PROCEDURE:">
                  <Line neon bold>IF ENTITY ESCAPES REC ZONE:</Line>
                  <Line neon>1. Identify threat type and location</Line>
                  <Line neon>2. Alert Stack Command immediately</Line>
                  <Line neon>3. Deploy security team (armed)</Line>
                  <Line neon>4. Evacuate adjacent floors if necessary</Line>
                  <Line neon>5. Eliminate or recapture threat</Line>
                  <Line neon>6. Reinforce containment seals</Line>
                </InsetBox>
                <InsetBox title="THREAT ELIMINATION PRIORITIES:">
                  <Line red bold>HIGH PRIORITY (Eliminate on sight):</Line>
                  <Line red>• Blightlings (Spread contamination)</Line>
                  <Line red>• Bloated (Toxic hazard)</Line>
                  <Line red>• Rot King (Extreme danger)</Line>

                  <Divider />

                  <Line yellow bold>MEDIUM PRIORITY (Contain or negotiate):</Line>
                  <Line yellow>• Minos (Dangerous but contained to Halls)</Line>
                  <Line yellow>• Ghosts (Low physical threat)</Line>

                  <Divider />

                  <Line smoke bold>LOW PRIORITY (Monitor only):</Line>
                  <Line smoke>• Chemmed Gang-Goons (Rational, can negotiate)</Line>
                </InsetBox>
                <InsetBox title="RECENT INCIDENTS:">
                  <Line neon>• 2 days ago - Single Blightling escaped to Level 350</Line>
                  <Line smoke>  Response: Security team eliminated, no casualties</Line>

                  <Line neon>• 1 week ago - Minos attempted breach at sealed door</Line>
                  <Line smoke>  Response: Reinforced seals, monitored, returned to Halls</Line>

                  <Line neon>• 2 weeks ago - Rot King ambushed maintenance crew</Line>
                  <Line smoke>  Response: 1 casualty, freight elevator marked off-limits</Line>
                </InsetBox>
                <InsetBox title="SEAL MAINTENANCE:">
                  <Line yellow>Stairwell doors inspected weekly</Line>
                  <Line yellow>Elevator access disabled (except freight - dangerous)</Line>
                  <Line yellow>Ventilation sealed to prevent spore spread</Line>
                  <Line yellow>Warning signs posted at all access points</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Emergency Shutoff Systems": {
            // password: {
            //   pw: "containment",
            //   hint: "What the REC protocols are designed to do",
            //   difficulty: "medium",
            //   content: <Locked theme="terminal" title="EMERGENCY SHUTOFF" />
            // },
            content: (
              <MaintenanceAccess
                title="[REC EMERGENCY SHUTOFF SYSTEMS]"
                deviceModel="Catastrophic Response Options"
                deviceId="SHUTOFF-01"
                firmwareVersion="v1.0.0"
                systemStatus="STANDBY"
                notes={[
                  "Nuclear option for catastrophic scenarios",
                  "Director approval + THOTH recommendation required",
                  "Use only if containment fails completely"
                ]}
              >
                <Divider />
                <InsetBox title="AVAILABLE SYSTEMS:">
                  <Line red bold>OPTION 1: ATMOSPHERE PURGE</Line>
                  <Line red>Vent all air from REC levels (10-15 minutes)</Line>
                  <Line red>Kills most biological threats via suffocation</Line>
                  <Line red>Will also kill any humans inside (no exceptions)</Line>
                  <Line yellow>Spores may survive, requires follow-up</Line>

                  <Divider />

                  <Line red bold>OPTION 2: THERMAL PURGE</Line>
                  <Line red>Superheat REC levels to 200°C (30 minutes)</Line>
                  <Line red>Sterilizes biological contamination</Line>
                  <Line red>Destroys most equipment and structure</Line>
                  <Line yellow>Fire hazard, may spread to adjacent levels</Line>

                  <Divider />

                  <Line red bold>OPTION 3: CHEMICAL SATURATION</Line>
                  <Line red>Flood REC with industrial cleaner/poison</Line>
                  <Line red>Kills organic threats, neutralizes spores</Line>
                  <Line red>Toxic to humans for weeks after application</Line>
                  <Line yellow>Chemical disposal required, expensive</Line>

                  <Divider />

                  <Line red bold>OPTION 4: TOTAL SEAL + STARVE</Line>
                  <Line red>Reinforce all seals, cut power/water/air</Line>
                  <Line red>Let threats die naturally over time (months)</Line>
                  <Line red>Least destructive, longest timeframe</Line>
                  <Line yellow>Chemmed Gang-Goons may survive indefinitely</Line>
                </InsetBox>
                <InsetBox title="ACTIVATION REQUIREMENTS:">
                  <Line neon>1. Document catastrophic failure of containment</Line>
                  <Line neon>2. Evacuate adjacent levels (320-355)</Line>
                  <Line neon>3. Obtain Director Emmanuel 5 approval</Line>
                  <Line neon>4. Confirm THOTH recommendation</Line>
                  <Line neon>5. Input dual-key authorization codes</Line>
                  <Line neon>6. Execute with 10-minute countdown (abort window)</Line>
                </InsetBox>
                <InsetBox title="CONSEQUENCES:">
                  <Line red>• REC levels uninhabitable for extended period</Line>
                  <Line red>• Structural damage may compromise levels 40-70</Line>
                  <Line red>• Cost: 500,000¤ - 2,000,000¤ depending on method</Line>
                  <Line red>• Loss of 10 floors reduces stack capacity permanently</Line>
                  <Line red>• Corporate investigation into management failures</Line>
                </InsetBox>
                <InsetBox title="THOTH'S RECOMMENDATION:">
                  <Line cyan>"Current containment is holding. Emergency shutoff unnecessary at this time."</Line>
                  <Line cyan>"However, if Blightling infestation spreads beyond Park level, recommend immediate Chemical Saturation."</Line>
                  <Line cyan>"Rot King remains manageable. Minos is contained. Gang activity is predictable."</Line>
                  <Line yellow>"Suggest increased monitoring rather than drastic action."</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Bounty Board": {
            content: (
              <MaintenanceAccess
                title="[REC ELIMINATION BOUNTIES]"
                deviceModel="Community Threat Removal Program"
                deviceId="BOUNTY-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Community-funded threat removal",
                  "Last 30 days: 3 Blightlings, 7 samples",
                  "Major threats: 0 eliminated"
                ]}
              >
                <Divider />
                <InsetBox title="BLIGHTLING ELIMINATION:">
                  <Line neon>Bounty: 50¤ per Blightling</Line>
                  <Line neon>Proof Required: Tissue sample or photo</Line>
                  <Line neon>Funded By: Community Outreach + Lazet</Line>
                  <Line smoke>Reduces contamination spread risk</Line>
                </InsetBox>
                <InsetBox title="MINOS ELIMINATION:">
                  <Line neon>Bounty: 2,000¤</Line>
                  <Line neon>Proof Required: Cybered bull head</Line>
                  <Line neon>Funded By: Stack Command</Line>
                  <Line smoke>Most dangerous individual threat, would allow Halls reclamation</Line>
                </InsetBox>
                <InsetBox title="ROT KING ELIMINATION:">
                  <Line neon>Bounty: 1,500¤</Line>
                  <Line neon>Proof Required: Core tissue sample</Line>
                  <Line neon>Funded By: Stack Command</Line>
                  <Line smoke>Would make freight elevator usable again</Line>
                </InsetBox>
                <InsetBox title="BIOLOGICAL SAMPLES:">
                  <Line neon>Bounty: 100¤ per unique sample</Line>
                  <Line neon>Proof Required: Viable specimen</Line>
                  <Line neon>Funded By: Lazet (Alliansen Arms #6101)</Line>
                  <Line smoke>For research purposes, any REC organism</Line>
                </InsetBox>
                <InsetBox title="CLAIMED BOUNTIES (Last 30 Days):">
                  <Line cyan>• 3 Blightlings eliminated (150¤ paid out)</Line>
                  <Line cyan>• 7 biological samples collected (700¤ paid out)</Line>
                  <Line yellow>• 0 major threats eliminated</Line>
                </InsetBox>
                <InsetBox title="SUBMISSION PROCESS:">
                  <Line neon>1. Bring proof to Stack Command or Community Outreach</Line>
                  <Line neon>2. Proof verified by staff or Lazet (for samples)</Line>
                  <Line neon>3. Payment issued immediately upon verification</Line>
                  <Line yellow>No bounty for gang-goons (they're human residents)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_REC_COMMANDS;
