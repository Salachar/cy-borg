import {
  PublicPortal,
  Message,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  Box,
} from "@terminal/TerminalComponents";

export const THE_55_LOST_ZONE_COMMANDS = {
  "Lost Zone (Levels 125-147)": {
    content: (
      <>
        <Line cyan large bold>[THE LOST ZONE]</Line>
        <Line smoke>Levels 125-147 | Abandoned construction zone</Line>
        <Divider />

        <Box color="yellow">
          <Line bold>⚠ HAZARDOUS AREA - ENTER AT OWN RISK</Line>
          <Line>Abandoned mid-construction decades ago</Line>
          <Line>Structural instability, environmental hazards</Line>
          <Line>Corporate activity and salvage operations</Line>
          <Line>No official access - trespassing technically illegal</Line>
        </Box>

        <Section title="HISTORY">
          <Line>Construction began 30+ years ago during expansion boom</Line>
          <Line>Project abandoned when funding collapsed</Line>
          <Line>22 floors left incomplete - skeletal structures, exposed systems</Line>
          <Line>Stack operations continued around it (walls sealed off)</Line>
          <Line>Now serves as no-man's-land between lower and upper levels</Line>
        </Section>

        <Section title="CURRENT STATUS">
          <DataTable
            data={[
              { label: "Official status", value: "Condemned / Restricted" },
              { label: "Actual usage", value: "Salvage, corporate ops, squatters" },
              { label: "Structural integrity", value: "40-70% (varies by floor)" },
              { label: "Power", value: "Intermittent (jury-rigged)" },
              { label: "Water", value: "None (except leaks)" },
            ]}
          />
        </Section>

        <Section title="KNOWN HAZARDS">
          <Line red bold>DANGER ZONES:</Line>
          <Line>• Structural collapse risk (floors 130-132 critical)</Line>
          <Line>• Exposed electrical systems (live wires)</Line>
          <Line>• Toxic materials (asbestos, lead, chemicals)</Line>
          <Line>• Poor lighting (darkness in most areas)</Line>
          <Line>• No emergency services (you're on your own)</Line>
          <Line>• Fungal contamination (floors 130-132)</Line>
        </Section>

        <Section title="INHABITANTS">
          <Line yellow bold>⚠ KNOWN PRESENCES:</Line>
          <Line>• Salvagers and scavengers (independent operators)</Line>
          <Line>• Squatters (homeless residents seeking shelter)</Line>
          <Line>• United Citadel security (corporate operations)</Line>
          <Line>• C.R.A.W.L.E.R. construction robots (still active)</Line>
          <Line>• Gang-Goons (occasional hideouts)</Line>
          <Line>• Urban explorers (thrill-seekers)</Line>
        </Section>
      </>
    ),
    related_commands: {
      "Zone Map": {
        content: (
          <>
            <Line cyan large bold>[LOST ZONE FLOOR BREAKDOWN]</Line>
            <Line smoke>22 floors of abandoned construction</Line>
            <Divider />

            <Section title="LEVELS 125-129: LOWER LOST ZONE">
              <Line neon bold>ACCESSIBLE FROM KAYTELL:</Line>
              <Line>Semi-stable floors, some concrete poured</Line>
              <Line>Popular with salvagers (easier access)</Line>
              <Line>Construction materials still present</Line>
              <Line>Occasional gang-goon presence</Line>
            </Section>

            <Section title="LEVELS 130-132: CONTAMINATED ZONE">
              <Line red bold>⚠ EXTREME HAZARD - FUNGAL CONTAMINATION:</Line>
              <Line>Floors partially collapsed into each other</Line>
              <Line>Toxic fungal growth throughout</Line>
              <Line>DR12 Toughness when breathing unfiltered air</Line>
              <Line>Avoid if possible - nothing valuable remains</Line>
            </Section>

            <Section title="LEVELS 133-140: MID LOST ZONE">
              <Line neon bold>SKELETAL STRUCTURES:</Line>
              <Line>Steel framework exposed, no walls or floors complete</Line>
              <Line>Vertiginous open spaces (fatal fall risk)</Line>
              <Line>C.R.A.W.L.E.R. robots still operating (unpredictable)</Line>
              <Line>Some squatter camps in safer corners</Line>
            </Section>

            <Section title="LEVELS 141-147: UPPER LOST ZONE">
              <Line neon bold>CORPORATE OPERATIONS AREA:</Line>
              <Line>United Citadel security presence (active)</Line>
              <Line>Unauthorized access met with force</Line>
              <Line>Unknown corporate project in progress</Line>
              <Line>Heavy equipment and construction activity</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Contaminated Zone (130-132)": {
            content: (
              <>
                <Line cyan large bold>[CONTAMINATED ZONE]</Line>
                <Line smoke>Levels 130-132 | Fungal biohazard</Line>
                <Divider />

                <Box color="red">
                  <Line bold>🚨 EXTREME BIOHAZARD - DO NOT ENTER</Line>
                  <Line>Toxic fungal contamination throughout</Line>
                  <Line>Structural collapse - floors merged into single mass</Line>
                  <Line>No salvage value - everything contaminated</Line>
                </Box>

                <Section title="CONTAMINATION DETAILS">
                  <Line red bold>FUNGAL INFESTATION:</Line>
                  <Line>Unknown species of aggressive fungus</Line>
                  <Line>Covers walls, floors, exposed materials</Line>
                  <Line>Releases toxic spores into air</Line>
                  <Line>DR12 Toughness check if breathing unfiltered</Line>
                  <Line>Failure: Respiratory damage, possible infestation</Line>
                </Section>

                <Section title="STRUCTURAL STATUS">
                  <Line yellow bold>PARTIAL COLLAPSE:</Line>
                  <Line>Floor 131 collapsed into 130</Line>
                  <Line>Floor 132 partially collapsed into 131</Line>
                  <Line>Creates unstable 3-floor open pit</Line>
                  <Line>Falling debris common (DR14 Agility to dodge)</Line>
                </Section>

                <Section title="ACCESS">
                  <Line neon>Entry points sealed by Stack Command</Line>
                  <Line>DR16 to breach seals (not recommended)</Line>
                  <Line>Alternative: Navigate through mid-zone (dangerous)</Line>
                  <Line yellow>⚠ No reason to enter - avoid entirely</Line>
                </Section>

                <Section title="CONTAINMENT EFFORTS">
                  <Line>Stack Command monitors remotely (sensors)</Line>
                  <Line>Contamination not spreading (sealed effectively)</Line>
                  <Line>No cleanup planned (too expensive, low priority)</Line>
                  <Line>
                    Plan: Leave sealed indefinitely, wait for fungus to die naturally
                  </Line>
                </Section>
              </>
            ),
          },

          "C.R.A.W.L.E.R. Robots": {
            content: (
              <>
                <Line cyan large bold>[C.R.A.W.L.E.R. CONSTRUCTION ROBOTS]</Line>
                <Line smoke>Autonomous construction machines</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>
                    Autonomous robots left behind when construction abandoned
                  </Line>
                  <Line>Continued operating without supervision for 30+ years</Line>
                  <Line>Original programming: Build and maintain structures</Line>
                  <Line>Current behavior: Erratic, unpredictable</Line>
                </Section>

                <Section title="SPECIFICATIONS">
                  <KeyValue label="Designation" value="C.R.A.W.L.E.R. Series 7" />
                  <KeyValue label="Quantity" value="12 units (estimated active)" />
                  <KeyValue
                    label="Power"
                    value="Solar + internal battery (self-sustaining)"
                  />
                  <KeyValue label="Size" value="3m tall, 2m wide, treaded base" />
                  <KeyValue label="Capabilities" value="Welding, cutting, lifting, drilling" />
                </Section>

                <Section title="BEHAVIOR PATTERNS">
                  <Line yellow bold>⚠ UNPREDICTABLE ACTIONS:</Line>
                  <Line>
                    Sometimes construct new structures (following corrupted plans)
                  </Line>
                  <Line>Sometimes deconstruct existing structures (reverse programming)</Line>
                  <Line>Occasionally repair themselves using salvaged parts</Line>
                  <Line>May ignore humans, may treat them as obstacles to remove</Line>
                  <Line red>
                    Have killed trespassers (accidental and intentional unclear)
                  </Line>
                </Section>

                <Section title="THREAT ASSESSMENT">
                  <KeyValue label="HP" value="20 (armored chassis)" />
                  <KeyValue label="Armor" value="Heavy plating (-d6)" />
                  <KeyValue label="Weapons" value="Industrial tools (d8 damage)" />
                  <Line>Not specifically designed for combat but extremely dangerous</Line>
                  <Line>Tools can cut through metal, crush bone, burn flesh</Line>
                  <Line yellow>⚠ Best strategy: Avoid or disable (DR16 to hack)</Line>
                </Section>

                <Section title="CORPORATE INTEREST">
                  <Line neon>United Citadel attempting to recover units</Line>
                  <Line>Value: 500k¤ per functioning robot</Line>
                  <Line>Capture teams active in upper Lost Zone</Line>
                  <Line>Offering bounty: 50k¤ per disabled robot (intact)</Line>
                </Section>
              </>
            ),
          },

          "United Citadel Operations": {
            content: (
              <>
                <Line cyan large bold>[UNITED CITADEL CORPORATE OPERATIONS]</Line>
                <Line smoke>Levels 141-147 | Active corporate presence</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>
                    United Citadel Corp has claimed upper Lost Zone for operations
                  </Line>
                  <Line>Legal status unclear (abandoned space, no official ownership)</Line>
                  <Line>Enforced by private security (armed and authorized)</Line>
                  <Line>Project details classified</Line>
                </Section>

                <Section title="SECURITY PRESENCE">
                  <Line red bold>ARMED GUARDS (2d6 present):</Line>
                  <KeyValue label="Personnel" value="12-18 security operatives" />
                  <KeyValue label="Equipment" value="Body armor, assault rifles, stun weapons" />
                  <KeyValue label="Stance" value="Hostile to unauthorized personnel" />
                  <Line yellow>⚠ Will detain or use force on trespassers</Line>
                  <Line>No warning shots - assume hostile intent</Line>
                </Section>

                <Section title="OPERATIONS">
                  <Line neon bold>KNOWN ACTIVITIES:</Line>
                  <Line>• Heavy construction equipment operating</Line>
                  <Line>• Material deliveries (via freight elevator)</Line>
                  <Line>• C.R.A.W.L.E.R. robot recovery efforts</Line>
                  <Line>• Unknown research or construction project</Line>
                  <Divider />

                  <Line yellow bold>⚠ SPECULATION:</Line>
                  <Line>Rumor: Building secret research facility</Line>
                  <Line>Rumor: Testing experimental construction tech</Line>
                  <Line>Rumor: Salvaging valuable materials/equipment</Line>
                  <Line>Rumor: Planning to complete original construction</Line>
                </Section>

                <Section title="ACCESS RESTRICTIONS">
                  <Line red bold>NO TRESPASSING - ENFORCED:</Line>
                  <Line>Perimeter established at Level 140/141 boundary</Line>
                  <Line>Guards patrol 24/7</Line>
                  <Line>Cameras and motion sensors active</Line>
                  <Line>Trespassers detained and prosecuted</Line>
                  <Line yellow>⚠ Corporate lawyers aggressively defend operations</Line>
                </Section>
              </>
            ),
          },
        },
      },

      "Salvage Opportunities": {
        content: (
          <>
            <Line cyan large bold>[SALVAGE OPPORTUNITIES]</Line>
            <Line smoke>Valuable materials and equipment</Line>
            <Divider />

            <Section title="CONSTRUCTION MATERIALS">
              <Line neon bold>STILL PRESENT IN LOWER ZONE:</Line>
              <DataTable
                data={[
                  { label: "Steel beams & rebar", value: "10¤ - 50¤ per piece" },
                  { label: "Copper wiring", value: "30¤ per kg" },
                  { label: "Concrete blocks", value: "5¤ per block" },
                  { label: "Aluminum panels", value: "20¤ per panel" },
                  { label: "Glass sheets (intact)", value: "40¤ per sheet" },
                ]}
              />
              <Line smoke>Most easily accessible materials already claimed</Line>
            </Section>

            <Section title="TOOLS & EQUIPMENT">
              <Line neon bold>ABANDONED CONSTRUCTION TOOLS:</Line>
              <DataTable
                data={[
                  { label: "Power drills", value: "100¤ - 300¤" },
                  { label: "Welding equipment", value: "200¤ - 800¤" },
                  { label: "Heavy machinery (parts)", value: "500¤ - 5,000¤" },
                  { label: "Safety equipment", value: "20¤ - 100¤" },
                ]}
              />
              <Line yellow>⚠ Most tools require repair or parts replacement</Line>
            </Section>

            <Section title="ELECTRONICS">
              <Line neon bold>SALVAGED TECH:</Line>
              <Line>• Wiring and cables (copper, fiber optic)</Line>
              <Line>• Control panels and switches</Line>
              <Line>• Electrical components (resistors, capacitors)</Line>
              <Line>• Old computers and data storage (mostly corrupted)</Line>
              <Line yellow>⚠ Some electronics may contain valuable data</Line>
            </Section>

            <Section title="HIGH-VALUE TARGETS">
              <Line red bold>DANGEROUS BUT PROFITABLE:</Line>
              <Line>• C.R.A.W.L.E.R. robots (50k¤ bounty if disabled)</Line>
              <Line>• Industrial batteries (500¤ - 2,000¤)</Line>
              <Line>• Heavy machinery (requires transport, 10k¤+)</Line>
              <Line>• Corporate equipment in upper zone (guarded)</Line>
            </Section>

            <Section title="SALVAGER TIPS">
              <Line neon bold>FROM EXPERIENCED SCAVENGERS:</Line>
              <Line>• Work in pairs (safety and efficiency)</Line>
              <Line>• Bring headlamps and backup lights</Line>
              <Line>• Test floor stability before walking (tap with pole)</Line>
              <Line>• Avoid contaminated zone (130-132) entirely</Line>
              <Line>• Mark your route (easy to get lost)</Line>
              <Line>• Don't venture into upper zone (corporate security)</Line>
            </Section>
          </>
        ),
      },

      "Squatter Camps": {
        content: (
          <>
            <Line cyan large bold>[SQUATTER COMMUNITIES]</Line>
            <Line smoke>Homeless residents in Lost Zone</Line>
            <Divider />

            <Section title="ABOUT">
              <Line>30-50 individuals living in Lost Zone (estimates vary)</Line>
              <Line>Mostly lower-level residents unable to afford housing</Line>
              <Line>Establish camps in relatively stable areas</Line>
              <Line>Technically illegal but rarely enforced</Line>
            </Section>

            <Section title="MAJOR CAMPS">
              <Line neon bold>CAMP ALPHA (Level 127):</Line>
              <Line>~15 residents in corner of east wing</Line>
              <Line>Most organized, some basic amenities</Line>
              <Line>Community rules and shared resources</Line>
              <Line>Leader: "Old Jack" (resident for 8+ years)</Line>
              <Divider />

              <Line neon bold>CAMP BRAVO (Level 135):</Line>
              <Line>~8 residents in mid-zone skeletal structure</Line>
              <Line>More desperate, fewer resources</Line>
              <Line>Higher risk location (structural instability)</Line>
              <Line>Residents often salvagers working in zone</Line>
              <Divider />

              <Line neon bold>TRANSIENT CAMPS (Various):</Line>
              <Line>Individuals or small groups (2-3 people)</Line>
              <Line>Move frequently, no permanent structures</Line>
              <Line>Hiding from authorities, debts, enemies</Line>
            </Section>

            <Section title="LIVING CONDITIONS">
              <Line yellow bold>⚠ HARSH REALITY:</Line>
              <Line>No running water (collect rainwater or steal)</Line>
              <Line>No heat (except improvised fires - dangerous)</Line>
              <Line>No sanitation (serious health risks)</Line>
              <Line>Limited food (scavenge or beg in lower levels)</Line>
              <Line>Constant danger (collapse, violence, accidents)</Line>
            </Section>

            <Section title="COMMUNITY SUPPORT">
              <Line neon>HELP AVAILABLE:</Line>
              <Line>Community Outreach occasionally brings supplies</Line>
              <Line>Some lower-level residents donate food/clothing</Line>
              <Line>Medical clinic (TG Labs) refuses to treat (policy)</Line>
              <Line>Dr. Yuki Tanaka secretly provides basic care (off-hours)</Line>
            </Section>

            <Section title="INTERACTIONS">
              <Line neon bold>DEALING WITH SQUATTERS:</Line>
              <Line>Most are non-violent, just trying to survive</Line>
              <Line>May ask for food, water, credits (up to you)</Line>
              <Line>Can provide information about Lost Zone (for price)</Line>
              <Line>Respect their camps, they'll respect you</Line>
              <Line yellow>⚠ A few are dangerous (criminals hiding out)</Line>
            </Section>
          </>
        ),
      },

      access_construction_systems: {
        password: {
          pw: "abandoned",
          hint: "What the Lost Zone construction project was (left incomplete)",
          hintStrength: 1,
        },
        content: (
          <Message
            name="LOST ZONE CONSTRUCTION SYSTEMS"
            message="LEGACY SYSTEM ACCESS"
            networkInfo="⚠ Outdated systems - Limited functionality"
            theme="limeade"
          />
        ),
        related_commands: {
          "Construction Plans": {
            content: (
              <>
                <Line cyan large bold>[ORIGINAL CONSTRUCTION PLANS]</Line>
                <Line smoke>Archived blueprints | 30+ years old</Line>
                <Divider />

                <Section title="PROJECT OVERVIEW">
                  <Line>Project Name: "The 55 Expansion Initiative"</Line>
                  <Line>Timeline: 22 floors planned (Levels 125-147)</Line>
                  <Line>Purpose: Mixed-use residential and commercial</Line>
                  <Line>Budget: 500 million credits</Line>
                  <Line>Status: ABANDONED (40% complete when halted)</Line>
                </Section>

                <Section title="ORIGINAL DESIGN">
                  <Line neon bold>PLANNED LAYOUT:</Line>
                  <Line>Levels 125-135: Residential apartments (mid-tier)</Line>
                  <Line>Levels 136-142: Commercial offices and retail</Line>
                  <Line>Levels 143-147: Premium residential (luxury)</Line>
                  <Line smoke>
                    Would have bridged gap between Kaytell and Corp Quad
                  </Line>
                </Section>

                <Section title="COMPLETED WORK">
                  <DataTable
                    data={[
                      { label: "Structural steel", value: "85% complete" },
                      { label: "Concrete floors", value: "40% complete" },
                      { label: "Exterior walls", value: "15% complete" },
                      { label: "Electrical systems", value: "30% complete" },
                      { label: "Plumbing", value: "20% complete" },
                      { label: "Interior finishing", value: "0% complete" },
                    ]}
                  />
                </Section>

                <Section title="ABANDONMENT REASON">
                  <Line yellow bold>PROJECT FAILURE:</Line>
                  <Line>Primary investor declared bankruptcy</Line>
                  <Line>Secondary funding fell through during recession</Line>
                  <Line>Legal disputes over ownership and contracts</Line>
                  <Line>Eventually declared lost cause, sealed off</Line>
                  <Line red>Total loss: ~200 million credits invested</Line>
                </Section>
              </>
            ),
          },

          "C.R.A.W.L.E.R. Control": {
            password: {
              pw: "robots",
              hint: "What the C.R.A.W.L.E.R. units are (plural)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[C.R.A.W.L.E.R. CONTROL SYSTEM]</Line>
                <Line smoke>Robot management interface | Legacy system</Line>
                <Divider />

                <Box color="yellow">
                  <Line bold>⚠ WARNING: SYSTEM OUTDATED</Line>
                  <Line>Control protocols corrupted</Line>
                  <Line>Robot behavior unpredictable</Line>
                  <Line>Override commands may or may not work</Line>
                </Box>

                <Section title="REGISTERED UNITS">
                  <Line neon bold>C.R.A.W.L.E.R. SERIES 7 INVENTORY:</Line>
                  <DataTable
                    data={[
                      { label: "Unit 01", value: "Status: ACTIVE (Level 135)" },
                      { label: "Unit 02", value: "Status: ACTIVE (Level 128)" },
                      { label: "Unit 03", value: "Status: OFFLINE (Level 130 - stuck)" },
                      { label: "Unit 04", value: "Status: ACTIVE (Level 142)" },
                      { label: "Unit 05", value: "Status: DESTROYED" },
                      { label: "Unit 06", value: "Status: ACTIVE (Level 138)" },
                      { label: "Unit 07", value: "Status: UNKNOWN (signal lost)" },
                      { label: "Unit 08", value: "Status: ACTIVE (Level 145 - UC custody)" },
                      { label: "Unit 09", value: "Status: ACTIVE (Level 133)" },
                      { label: "Unit 10", value: "Status: UNKNOWN (signal lost)" },
                      { label: "Unit 11", value: "Status: ACTIVE (Level 129)" },
                      { label: "Unit 12", value: "Status: DESTROYED" },
                    ]}
                  />
                </Section>

                <Section title="CONTROL COMMANDS">
                  <Line red bold>⚠ COMMANDS MAY FAIL (30+ years without maintenance):</Line>
                  <Line>• HALT - Emergency stop (50% success rate)</Line>
                  <Line>• RETURN - Return to charging station (20% success rate)</Line>
                  <Line>• SHUTDOWN - Power down robot (40% success rate)</Line>
                  <Line>• REBOOT - Restart system (60% success rate, unpredictable)</Line>
                  <Line yellow>⚠ Failed commands may trigger aggressive behavior</Line>
                </Section>

                <Section title="HACKING OPPORTUNITY">
                  <Line neon bold>OVERRIDE PROTOCOLS:</Line>
                  <Line>DR16 to successfully hack individual unit</Line>
                  <Line>Success: Gain control for 1d6 hours</Line>
                  <Line>Failure: Robot becomes hostile and attacks</Line>
                  <Line>Critical failure: Robot sounds alarm to all other units</Line>
                </Section>

                <Section title="UNITED CITADEL BOUNTY">
                  <Line neon>ACTIVE BOUNTY PROGRAM:</Line>
                  <Line>50,000¤ per intact, functioning C.R.A.W.L.E.R. delivered</Line>
                  <Line>Must be disabled but repairable</Line>
                  <Line>Contact: United Citadel Operations (Level 145)</Line>
                  <Line yellow>⚠ Extremely dangerous - many have died attempting</Line>
                </Section>
              </>
            ),
          },

          "Quarantine Protocols": {
            content: (
              <>
                <Line cyan large bold>[CONTAMINATED ZONE QUARANTINE]</Line>
                <Line smoke>Levels 130-132 containment procedures</Line>
                <Divider />

                <Section title="CONTAINMENT STATUS">
                  <KeyValue label="Threat Level" value="HIGH (Biohazard)" />
                  <KeyValue label="Contamination Type" value="Fungal infestation" />
                  <KeyValue label="Sealed" value="Yes (8 years ago)" />
                  <KeyValue label="Monitoring" value="Remote sensors only" />
                </Section>

                <Section title="SEALING MEASURES">
                  <Line neon bold>CONTAINMENT BARRIERS:</Line>
                  <Line>All stairwell access sealed (welded shut)</Line>
                  <Line>Ventilation ducts blocked and filtered</Line>
                  <Line>Elevator bypasses floors (no stops)</Line>
                  <Line>Warning signs posted at all approaches</Line>
                  <Line yellow>⚠ DR16 to breach seals (strongly discouraged)</Line>
                </Section>

                <Section title="SENSOR DATA">
                  <Line yellow bold>⚠ ENVIRONMENTAL READINGS:</Line>
                  <DataTable
                    data={[
                      { label: "Air quality", value: "TOXIC (spore concentration high)" },
                      {
                        label: "Structural integrity",
                        value: "CRITICAL (25% stable)",
                      },
                      { label: "Temperature", value: "18°C (stable)" },
                      { label: "Humidity", value: "95% (promotes fungal growth)" },
                      { label: "Biohazard spread", value: "CONTAINED (not spreading)" },
                    ]}
                  />
                </Section>

                <Section title="CLEANUP PLANS">
                  <Line red bold>NO CLEANUP SCHEDULED:</Line>
                  <Line>Cost estimated at 10-20 million credits</Line>
                  <Line>Stack Command: "Not economically viable"</Line>
                  <Line>Plan: Leave sealed until fungus dies naturally</Line>
                  <Line>Estimated timeline: 50-100 years</Line>
                  <Line yellow>⚠ Effectively permanent quarantine</Line>
                </Section>

                <Section title="BREACH RESPONSE">
                  <Line red bold>IF CONTAINMENT FAILS:</Line>
                  <Line>1. Immediate evacuation of adjacent floors (125-129, 133-135)</Line>
                  <Line>2. Emergency sealing of entire Lost Zone</Line>
                  <Line>3. Chemical sanitization of breach area</Line>
                  <Line>4. Medical screening for all exposed individuals</Line>
                  <Line>5. Extended quarantine of affected persons</Line>
                </Section>
              </>
            ),
          },

          "Salvage Records": {
            content: (
              <>
                <Line cyan large bold>[SALVAGE OPERATION RECORDS]</Line>
                <Line smoke>Documented scavenging activity</Line>
                <Divider />

                <Section title="REGISTERED SALVAGERS">
                  <Line>47 individuals have registered with Stack Command</Line>
                  <Line>Registration optional but provides legal protection</Line>
                  <Line>Registered salvagers less likely to be arrested</Line>
                  <Line yellow>⚠ Most salvagers operate unregistered</Line>
                </Section>

                <Section title="MAJOR FINDS (Last 12 months)">
                  <Line neon bold>VALUABLE SALVAGE REPORTED:</Line>
                  <Line>• Industrial battery bank (sold for 15,000¤)</Line>
                  <Line>• Copper wiring cache (sold for 8,000¤)</Line>
                  <Line>• Intact welding equipment (sold for 3,500¤)</Line>
                  <Line>• Steel beam stockpile (sold for 12,000¤)</Line>
                  <Line>• Abandoned construction crane (parts, 6,000¤)</Line>
                </Section>

                <Section title="ACCIDENTS & INCIDENTS">
                  <Line red bold>SALVAGER CASUALTIES (Last 12 months):</Line>
                  <Line>• 3 deaths (structural collapse, falls)</Line>
                  <Line>• 8 serious injuries (falls, equipment accidents)</Line>
                  <Line>• 2 respiratory illnesses (contaminated zone exposure)</Line>
                  <Line>• 1 C.R.A.W.L.E.R. attack (survivor, severe injuries)</Line>
                  <Line yellow>⚠ Actual numbers likely higher (unreported incidents)</Line>
                </Section>

                <Section title="BEST SALVAGE LOCATIONS">
                  <Line neon>ACCORDING TO VETERAN SCAVENGERS:</Line>
                  <Line>• Level 127 (east wing) - Construction materials</Line>
                  <Line>• Level 135 (north corner) - Electronics and wiring</Line>
                  <Line>• Level 129 (west wing) - Tools and equipment</Line>
                  <Line yellow>⚠ All "good" spots heavily picked over</Line>
                  <Line>Best finds now require deeper/riskier exploration</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_LOST_ZONE_COMMANDS;
