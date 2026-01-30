import {
  Line,
  Box,
  Section,
  Divider,
  KeyValue,
  DataTable,
  Warning,
} from '@terminal/TerminalComponents';
import {
  PublicPortal,
  Message,
  Camera,
  CommercialCamera,
  Safe,
  PersonnelFile,
  IncidentLog,
  MaintenanceAccess,
  Workstation,
} from "@terminal/retcomdevice";

// ============================================================================
// THE ROOFLINE COMMANDS (THE 55)
// ============================================================================

export const THE_55_ROOFLINE_COMMANDS = {
  "The Roofline (Levels 332-365)": {
    content: (
      <PublicPortal
        network="ROOFLINE_PUBLIC"
        signalStrength="strong"
        status="⚠ RESTRICTED ACCESS"
        statusColor="yellow"
        nowPlaying="Wind howling, machinery humming, fresh air above the smog"
        notes={[
          "Unfinished floors and infrastructure",
          "Security checkpoints active (2d6 Generic Sec Ops)",
          "Fresh air above The City's smog layer",
          "Construction materials and heavy machinery",
          "Graffiti artists and cultists at night",
        ]}
        theme="secure"
      />
    ),
    related_commands: {
      "Roofline Overview": {
        content: (
          <>
            <Line cyan large bold>[THE ROOFLINE - LEVELS 332-365]</Line>
            <Line smoke>The top of The 55 - Where the tower meets the sky</Line>
            <Divider />

            <Section title="DESCRIPTION">
              <Line>Unfinished floors, overlapping antennas, satellite dishes</Line>
              <Line>Various bits of important infrastructure and fresh air</Line>
              <Line>Above the smog and filth of The City</Line>
              <Line>All the complex machinery of lower floors</Line>
              <Line>Plus the security of the upper levels</Line>
            </Section>

            <Divider />

            <Section title="KEY FEATURES">
              <Line neon>• Construction crane (cargo movement)</Line>
              <Line neon>• VIP & Emergency helipads</Line>
              <Line neon>• Rooflight (acre of reinforced glass)</Line>
              <Line neon>• Solar field (hundreds of panels)</Line>
              <Line neon>• Wind turbine (defunct, stripped for parts)</Line>
              <Line neon>• Graffiti mural (floor 350 interior walls)</Line>
              <Line neon>• Security checkpoint (2d6 Generic Sec Ops)</Line>
              <Line neon>• Drone garage (2d6 Stinger Drones)</Line>
              <Line neon>• Storage crates (corporate containers)</Line>
              <Line neon>• Control aerials (antenna forest)</Line>
              <Line neon>• Observatory (cultist occupied at night)</Line>
              <Line neon>• Project CARV (flying Vindicator parked)</Line>
            </Section>

            <Divider />

            <Section title="SECURITY STATUS">
              <Line red bold>⚠ ACTIVE PATROLS:</Line>
              <Line>Security checkpoint staffed 24/7</Line>
              <Line>Drone patrols (Stinger Drones, remote controlled)</Line>
              <Line>Camera surveillance (limited coverage)</Line>
              <Line>Purpose: Keep citizens from heavy machinery & graffiti</Line>
            </Section>

            <Divider />

            <Section title="AFTER DARK">
              <Line yellow bold>⚠ NIGHTTIME ACTIVITY:</Line>
              <Line>Observatory: Occupied by 1 Heir of Kergoz + 2d4 Nanogoons</Line>
              <Line>Graffiti artists active (avoiding patrols)</Line>
              <Line>Security presence reduced (budget cuts)</Line>
              <Line>Fresh air and clear skies attract outsiders</Line>
            </Section>
          </>
        ),
      },

      "Construction Crane Access": {
        content: (
          <>
            <Line cyan large bold>[CONSTRUCTION CRANE]</Line>
            <Line smoke>Heavy cargo lift - Upper level access</Line>
            <Divider />

            <Section title="CRANE SPECIFICATIONS">
              <DataTable
                data={[
                  { label: "Model", value: "TitanLift 9000-XL" },
                  { label: "Capacity", value: "50 tons" },
                  { label: "Reach", value: "Levels 214-365" },
                  { label: "Status", value: "OPERATIONAL (limited hours)" },
                  { label: "Control", value: "Operator cabin + remote terminal" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="CURRENT USAGE">
              <Line neon>Used to move cargo on upper levels</Line>
              <Line neon>Scheduled for VIP deliveries (furniture, vehicles)</Line>
              <Line neon>Maintenance access for infrastructure repair</Line>
              <Line neon>Emergency evacuation capability (rarely used)</Line>
            </Section>

            <Divider />

            <Section title="CONTROL REQUIREMENTS">
              <Line yellow bold>⚠ OPERATION RESTRICTED:</Line>
              <Line>Operator license required (corp issued)</Line>
              <Line>Remote control: DR15 to hack system</Line>
              <Line>Physical access: Cabin on Level 340</Line>
              <Line>Safety override: Emergency stop at checkpoint</Line>
            </Section>

            <Divider />

            <Section title="RECENT ACTIVITY">
              <Line cyan>Yesterday: Delivered solar panel replacements (Level 355)</Line>
              <Line cyan>3 days ago: Moved furniture to penthouse (Level 287)</Line>
              <Line cyan>Last week: Lifted armored van to Unit 290-1</Line>
              <Line yellow>Maintenance scheduled: Next week (routine inspection)</Line>
            </Section>
          </>
        ),
      },

      "VIP & Emergency Helipads": {
        content: (
          <>
            <Line cyan large bold>[VIP & EMERGENCY HELIPADS]</Line>
            <Line smoke>Reserved for residents of floors 214-331</Line>
            <Divider />

            <Section title="HELIPAD LOCATIONS">
              <DataTable
                data={[
                  { label: "Pad Alpha (Level 365)", value: "VIP primary" },
                  { label: "Pad Beta (Level 360)", value: "VIP secondary" },
                  { label: "Pad Gamma (Level 350)", value: "Emergency services" },
                  { label: "Pad Delta (Level 345)", value: "Corporate charter" },
                  { label: "Pad Echo (Level 340)", value: "Medical evacuation" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="ACCESS RESTRICTIONS">
              <Line red bold>⚠ AUTHORIZED USERS ONLY:</Line>
              <Line>Residents: Floors 214-331 (verified by facial recognition)</Line>
              <Line>Corporate executives: Pre-approved list</Line>
              <Line>Emergency services: Priority override</Line>
              <Line>Charter services: Prime Convoys VIP Station</Line>
              <Line yellow>Unauthorized landing triggers immediate security response</Line>
            </Section>

            <Divider />

            <Section title="RECENT FLIGHTS">
              <Line cyan>2 hours ago: Corporate exec departed (Pad Alpha)</Line>
              <Line cyan>Yesterday: Medical evacuation (Pad Echo - heart attack)</Line>
              <Line cyan>3 days ago: VIP arrival from off-city resort (Pad Beta)</Line>
              <Line yellow>Last week: Unauthorized drone (shot down by Stinger Drones)</Line>
            </Section>

            <Divider />

            <Section title="CURRENT STATUS">
              <Line neon>Pad Alpha: AVAILABLE</Line>
              <Line neon>Pad Beta: AVAILABLE</Line>
              <Line neon>Pad Gamma: AVAILABLE</Line>
              <Line yellow>Pad Delta: RESERVED (corporate charter, 6 hours)</Line>
              <Line neon>Pad Echo: AVAILABLE</Line>
            </Section>
          </>
        ),
      },

      "Rooflight Maintenance": {
        content: (
          <>
            <Line cyan large bold>[ROOFLIGHT SYSTEM]</Line>
            <Line smoke>Acre of reinforced glass - Natural light to Level 214</Line>
            <Divider />

            <Section title="SYSTEM OVERVIEW">
              <DataTable
                data={[
                  { label: "Size", value: "1 acre (4,047 m²)" },
                  { label: "Material", value: "Reinforced transparent alloy" },
                  { label: "Light penetration", value: "Levels 214-365" },
                  { label: "Maintenance", value: "Daily cleaning (custodian squads)" },
                  { label: "Structural integrity", value: "98% (monitored)" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="CLEANING SCHEDULE">
              <Line neon>Daily: 06:00-10:00 (exterior surface)</Line>
              <Line neon>Weekly: Interior inspection (Level 214)</Line>
              <Line neon>Monthly: Structural assessment</Line>
              <Line yellow>Custodian squads: Underpaid, overworked, resentful</Line>
            </Section>

            <Divider />

            <Section title="RECENT ISSUES">
              <Line yellow>Last week: Minor crack detected (Sector 7-B)</Line>
              <Line yellow>  Status: Repaired, monitoring</Line>
              <Divider />
              <Line yellow>2 weeks ago: Graffiti on exterior (paint removal)</Line>
              <Line yellow>  Perpetrators: Not caught</Line>
              <Divider />
              <Line red>3 months ago: Bird strike (no structural damage)</Line>
              <Line red>  Note: Rare above smog layer</Line>
            </Section>

            <Divider />

            <Section title="ACCESS POINTS">
              <Line cyan>Maintenance catwalks (Level 365 - requires harness)</Line>
              <Line cyan>Interior access (Level 214 - locked maintenance doors)</Line>
              <Line yellow>⚠ Working on Rooflight without safety gear = death</Line>
            </Section>
          </>
        ),
      },

      "Solar Field Status": {
        content: (
          <MaintenanceAccess
            systemName="SOLAR FIELD ARRAY"
            location="Roofline - Levels 355-360"
            status="OPERATIONAL"
            lastService="2 weeks ago"
            nextMaintenance="4 weeks"
            stats={[
              { label: "Total Panels", value: "847 units" },
              { label: "Operational", value: "823 (97.2%)" },
              { label: "Current Output", value: "2.4 MW" },
              { label: "Battery Storage", value: "78% charged" },
              { label: "Efficiency", value: "89% (above smog helps)" },
            ]}
            readings={[
              { parameter: "Solar Irradiance", value: "850 W/m²", status: "OPTIMAL" },
              { parameter: "Panel Temperature", value: "42°C", status: "NORMAL" },
              { parameter: "Inverter Status", value: "All functional", status: "GOOD" },
              { parameter: "Battery Health", value: "94%", status: "GOOD" },
            ]}
            alerts={[
              "24 panels offline (scheduled replacement next month)",
              "Sector 3 inverter efficiency down 5% (monitoring)",
              "Bird nesting detected (Panels 450-455, cleaning scheduled)",
            ]}
            notes="Backup power for upper floors (214-365) during grid failures. Critical infrastructure."
          />
        ),
      },

      "Wind Turbine (Defunct)": {
        content: (
          <>
            <Line cyan large bold>[WIND TURBINE - DEFUNCT]</Line>
            <Line smoke>Long defunct, partially stripped for parts</Line>
            <Divider />

            <Section title="TURBINE STATUS">
              <DataTable
                data={[
                  { label: "Model", value: "SkyWind 5000" },
                  { label: "Status", value: "NON-OPERATIONAL (15 years)" },
                  { label: "Condition", value: "Stripped, vandalized, rusted" },
                  { label: "Height", value: "50 meters above Level 365" },
                  { label: "Original Output", value: "5 MW (when functional)" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="HISTORY">
              <Line yellow>Installed: 40 years ago (alternative energy initiative)</Line>
              <Line yellow>Operational: 25 years (intermittent failures)</Line>
              <Line yellow>Decommissioned: 15 years ago (repair costs too high)</Line>
              <Line yellow>Current use: None (monument to failed green energy)</Line>
            </Section>

            <Divider />

            <Section title="VANDALISM & GRAFFITI">
              <Line pink bold>COVERED IN LOCAL GRAFFITI:</Line>
              <Line>• "CORPO FAILURE" (large letters on turbine base)</Line>
              <Line>• Gang tags: Virid Vipers, Stone Eels, others</Line>
              <Line>• Political slogans: "GREEN LIES BROWN SKIES"</Line>
              <Line>• Art pieces: Elaborate murals by local artists</Line>
              <Line>• Cult symbols: Keter Protocol, D3BT markings</Line>
              <Line yellow>DR16 to add something that stands the test of time</Line>
            </Section>

            <Divider />

            <Section title="STRIPPED PARTS">
              <Line red>Missing components (stolen over 15 years):</Line>
              <Line>• Copper wiring (sold for scrap)</Line>
              <Line>• Generator housing (metal salvage)</Line>
              <Line>• Control electronics (resold on black market)</Line>
              <Line>• Turbine blades (1 of 3 remaining, others taken)</Line>
              <Line yellow>Estimated scrap value still remaining: 2,000¤</Line>
            </Section>

            <Divider />

            <Section title="CURRENT USE">
              <Line cyan>Graffiti canvas (constantly updated)</Line>
              <Line cyan>Urban explorer destination (risky climb)</Line>
              <Line cyan>Secret meetup spot (hidden behind turbine base)</Line>
              <Line cyan>Symbol of corporate green-washing failure</Line>
            </Section>
          </>
        ),
      },

      "Graffiti Mural (Floor 350)": {
        content: (
          <>
            <Line cyan large bold>[GRAFFITI MURAL - FLOOR 350]</Line>
            <Line smoke>Once unblemished walls, now local art collection</Line>
            <Divider />

            <Section title="LOCATION">
              <Line>Floor 350 interior walls (unfinished construction area)</Line>
              <Line>Accessible from multiple stairwells and service corridors</Line>
              <Line>Hidden from main security patrols (blind spot)</Line>
              <Line>Popular spot for graffiti artists and crews</Line>
            </Section>

            <Divider />

            <Section title="NOTABLE ARTWORK">
              <Line pink bold>FEATURED PIECES:</Line>
              <Line>• "THE 55 BLEEDS" - 20-foot mural depicting tower as wounded giant</Line>
              <Line>• "CORP DREAMS DIE HERE" - Abstract piece, dripping paint</Line>
              <Line>• Gang territory markers - Virid Vipers vs Stone Eels ongoing war</Line>
              <Line>• Portrait wall - Faces of residents who "disappeared"</Line>
              <Line>• "KETER WATCHES" - Cult symbol, glows in dark (nano-paint)</Line>
              <Line>• Collaborative piece - Dozens of artists, constantly evolving</Line>
            </Section>

            <Divider />

            <Section title="ADDING YOUR MARK">
              <Line yellow bold>⚠ ARTISTIC CHALLENGE:</Line>
              <Line>DR16 to add something that stands the test of time</Line>
              <Line>OR gets noticed by the underground art scene</Line>
              <Line>Success = respect from local crews, potential commissions</Line>
              <Line>Failure = painted over quickly or mocked publicly</Line>
            </Section>

            <Divider />

            <Section title="SECURITY THREAT">
              <Line red bold>⚠ CORPORATE RESPONSE:</Line>
              <Line>Corpos want to paint over it (haven't done it yet)</Line>
              <Line>Budget constraints delay action (always "next quarter")</Line>
              <Line>Security patrols occasionally sweep area</Line>
              <Line>2d6 chance each week of major paint-over operation</Line>
            </Section>

            <Divider />

            <Section title="CULTURAL SIGNIFICANCE">
              <Line cyan>Represents resistance against corporate control</Line>
              <Line cyan>Meeting place for underground artists</Line>
              <Line cyan>Tourist attraction for urban explorers</Line>
              <Line cyan>Historical record of The 55's counter-culture</Line>
            </Section>
          </>
        ),
      },

      "Security Checkpoint (Roofline)": {
        content: (
          <>
            <Line cyan large bold>[SECURITY CHECKPOINT]</Line>
            <Line smoke>Keeping citizens from machinery and vandalism</Line>
            <Divider />

            <Section title="CHECKPOINT STATUS">
              <DataTable
                data={[
                  { label: "Location", value: "Level 340 - Main access point" },
                  { label: "Staffing", value: "2d6 Generic Sec Ops (6-12 guards)" },
                  { label: "Hours", value: "24/7 coverage" },
                  { label: "Equipment", value: "Basic weapons, stun batons, comms" },
                  { label: "Drone Control", value: "Remote access to Stinger Drones" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="SECURITY PROTOCOLS">
              <Line neon bold>ACCESS CONTROL:</Line>
              <Line>• Check ID against authorized list</Line>
              <Line>• Maintenance workers: Verified credentials required</Line>
              <Line>• VIP residents: Facial recognition bypass</Line>
              <Line>• Unauthorized access: Detained, questioned, escorted out</Line>
              <Line>• Persistent trespassers: Handed to C.O.P.</Line>
            </Section>

            <Divider />

            <Section title="PATROL COVERAGE">
              <Line yellow>Guards patrol in 2-person teams</Line>
              <Line yellow>Routes: Helipads, Solar field, Storage area</Line>
              <Line yellow>Frequency: Every 2 hours (shift dependent)</Line>
              <Line yellow>Known gaps: Graffiti mural area, Wind turbine, Observatory at night</Line>
            </Section>

            <Divider />

            <Section title="RECENT INCIDENTS">
              <Line red>Yesterday: 3 graffiti artists detained (released with warning)</Line>
              <Line red>3 days ago: Urban explorer fell from crane (medical evac)</Line>
              <Line red>Last week: Cultists spotted at observatory (did not engage)</Line>
              <Line yellow>Budget cuts reduced night shift staffing by 30%</Line>
            </Section>

            <Divider />

            <Section title="GUARD MORALE">
              <Line cyan>Low - Boring job, low pay, budget cuts</Line>
              <Line cyan>Guards often bored (fly drones for entertainment)</Line>
              <Line cyan>Some guards sympathetic to graffiti artists</Line>
              <Line yellow>Bribery possible: 50-200¤ depending on guard and request</Line>
            </Section>
          </>
        ),
      },

      access_security_systems: {
        password: {
          pw: "roofline",
          hint: "What's this area called?",
          hintStrength: 1,
        },
        content: (
          <Message
            name="ROOFLINE SECURITY SYSTEMS"
            message="SECURITY ACCESS GRANTED"
            networkInfo="⚠ Checkpoint systems - Guard access only"
            theme="secure"
          />
        ),
        related_commands: {
          "Drone Garage Control": {
            content: (
              <>
                <Line cyan large bold>[DRONE GARAGE - CONTROL SYSTEM]</Line>
                <Line smoke>2d6 Stinger Drones - Remote controlled</Line>
                <Divider />

                <Section title="DRONE INVENTORY">
                  <DataTable
                    data={[
                      { label: "Total Drones", value: "8 units (current roll: 8)" },
                      { label: "Operational", value: "7 units" },
                      { label: "Maintenance", value: "1 unit (battery replacement)" },
                      { label: "Model", value: "Stinger-X Security Drone" },
                      { label: "Armament", value: "Taser, camera, spotlight" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="CURRENT DEPLOYMENT">
                  <Line neon>Drone 1: Patrolling helipad area</Line>
                  <Line neon>Drone 2: Monitoring storage crates</Line>
                  <Line neon>Drone 3: Parked at checkpoint (standby)</Line>
                  <Line neon>Drone 4: Investigating graffiti reports</Line>
                  <Line neon>Drone 5: Parked at checkpoint (standby)</Line>
                  <Line neon>Drone 6: Patrolling solar field perimeter</Line>
                  <Line neon>Drone 7: Parked at checkpoint (standby)</Line>
                  <Line yellow>Drone 8: IN MAINTENANCE (battery issue)</Line>
                </Section>

                <Divider />

                <Section title="CONTROL OPTIONS">
                  <Line cyan bold>REMOTE CONTROL (Current access):</Line>
                  <Line>• Deploy to location</Line>
                  <Line>• Return to garage</Line>
                  <Line>• View camera feed</Line>
                  <Line>• Activate spotlight/taser</Line>
                  <Line>• Set patrol route</Line>
                </Section>

                <Divider />

                <Section title="RECENT ACTIVITY">
                  <Line yellow>2 hours ago: Drone 4 chased urban explorer from crane</Line>
                  <Line yellow>Yesterday: Drone 2 investigated suspicious noise (false alarm)</Line>
                  <Line red>Last week: Drone 6 shot down unauthorized drone (intruder)</Line>
                  <Line cyan>Guards fly drones for fun when bored (against policy)</Line>
                </Section>

                <Divider />

                <Warning>
                  Guards often control drones when bored - Race them, play tag, etc.
                </Warning>
              </>
            ),
          },

          "Security Camera Network (Roofline)": {
            content: (
              <>
                <Line cyan large bold>[SECURITY CAMERA NETWORK]</Line>
                <Line smoke>Limited coverage - Infrastructure monitoring</Line>
                <Divider />

                <Section title="CAMERA LOCATIONS">
                  <DataTable
                    data={[
                      { label: "Checkpoint entrance", value: "2 cameras (main/backup)" },
                      { label: "Helipad Alpha", value: "1 camera" },
                      { label: "Helipad Beta", value: "1 camera" },
                      { label: "Solar field perimeter", value: "4 cameras" },
                      { label: "Storage crate area", value: "2 cameras" },
                      { label: "Construction crane", value: "1 camera" },
                      { label: "Total operational", value: "11 cameras" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="BLIND SPOTS">
                  <Line red bold>⚠ NO CAMERA COVERAGE:</Line>
                  <Line>• Graffiti mural area (Floor 350 interior)</Line>
                  <Line>• Wind turbine (too far from checkpoint)</Line>
                  <Line>• Observatory (unfinished construction zone)</Line>
                  <Line>• Control aerials (dense antenna forest blocks view)</Line>
                  <Line>• Multiple stairwells and service corridors</Line>
                </Section>

                <Divider />

                <Section title="RECORDING STATUS">
                  <Line neon>All cameras recording (7-day loop)</Line>
                  <Line neon>Storage: Local server at checkpoint</Line>
                  <Line neon>Backup: None (budget cuts eliminated cloud backup)</Line>
                  <Line yellow>⚠ Older footage frequently overwritten</Line>
                </Section>

                <Divider />

                <Section title="RECENT FOOTAGE">
                  <Line cyan>Yesterday: Urban explorer on crane (flagged)</Line>
                  <Line cyan>3 days ago: Graffiti artists at mural (not visible on camera)</Line>
                  <Line cyan>Last week: Cultists walking to observatory at dusk</Line>
                  <Line yellow>Guards rarely review footage unless incident reported</Line>
                </Section>
              </>
            ),
          },

          "Commercial Camera (Checkpoint)": {
            content: (
              <CommercialCamera
                id="roofline-checkpoint-main"
                location="Roofline Security Checkpoint - Main entrance"
                coverage="Checkpoint entrance, stairwell access, drone garage"
                status="ACTIVE"
                recording={true}
                resolution="4K security-grade"
                storage="Local server (7-day loop)"
                features={[
                  "Night vision",
                  "Motion detection",
                  "Facial recognition (linked to authorized list)",
                  "Zoom capability (50x optical)",
                  "Audio recording",
                ]}
                timeline={[
                  "06:00 → Day shift arrived (6 guards)",
                  "08:30 → Maintenance worker accessed solar field",
                  "12:00 → VIP resident passed through (no check required)",
                  "15:45 → Urban explorer detained, escorted out",
                  "18:00 → Night shift arrived (4 guards - reduced staffing)",
                  "20:30-Present → Quiet, guards on break room duty",
                ]}
                accessLog={[
                  { time: "08:30", user: "Maintenance: J. Martinez", action: "Solar field access" },
                  {
                    time: "12:00",
                    user: "VIP: Samuel Samson",
                    action: "Helipad access (authorized)",
                  },
                  {
                    time: "15:45",
                    user: "Unknown (detained)",
                    action: "Unauthorized access attempt",
                  },
                ]}
                lastService="1 month ago"
                notes="Primary security camera - High priority maintenance"
              />
            ),
            related_commands: {
              "LiveCameraFeed (Checkpoint)": {
                password: {
                  pw: "surveillance",
                  hint: "What security does with cameras",
                  hintStrength: 1,
                },
                content: (
                  <>
                    <Line cyan large bold>[LIVE CAMERA FEED - CHECKPOINT]</Line>
                    <Line smoke>Real-time surveillance</Line>
                    <Divider />

                    <Box color="cyan">
                      <Line cyan bold>📹 LIVE FEED</Line>
                      <Divider />
                      <Line>Checkpoint entrance: Clear, no activity</Line>
                      <Line>Guard station: 2 guards visible (4 total on shift)</Line>
                      <Line>  - Guard 1: Monitoring drone feeds</Line>
                      <Line>  - Guard 2: Playing game on personal RCD</Line>
                      <Divider />
                      <Line>Drone garage: 3 drones parked (standby mode)</Line>
                      <Line>Stairwell access: Locked gate, no movement</Line>
                      <Line>Recent activity: None (quiet night)</Line>
                    </Box>

                    <Divider />
                    <Line yellow>⚠ Night shift under-staffed (budget cuts)</Line>
                    <Line yellow>Guards distracted - good time to slip past?</Line>
                  </>
                ),
              },
            },
          },

          "Access Log": {
            content: (
              <>
                <Line cyan large bold>[CHECKPOINT ACCESS LOG]</Line>
                <Line smoke>Entry records - Last 7 days</Line>
                <Divider />

                <Section title="AUTHORIZED ACCESS">
                  <Line neon bold>RECENT ENTRIES (Last 24 hours):</Line>
                  <Line>08:30 - Maintenance: J. Martinez (Solar field repair)</Line>
                  <Line>12:00 - VIP: Samuel Samson (Helipad Alpha, departure)</Line>
                  <Line>14:00 - Cleaning crew: 4 personnel (Rooflight maintenance)</Line>
                  <Line>16:30 - Maintenance: K. Chen (Wind turbine graffiti removal - cancelled)</Line>
                </Section>

                <Divider />

                <Section title="UNAUTHORIZED ATTEMPTS">
                  <Line red bold>⚠ SECURITY INCIDENTS:</Line>
                  <Line>Yesterday 15:45 - Urban explorer detained</Line>
                  <Line>  Name: Unknown (no ID, gave fake name)</Line>
                  <Line>  Reason: "Wanted to see the view"</Line>
                  <Line>  Action: Escorted out, warned not to return</Line>
                  <Divider />

                  <Line>3 days ago 22:30 - Graffiti artists spotted</Line>
                  <Line>  Count: 3 individuals</Line>
                  <Line>  Location: Floor 350 mural area (blind spot)</Line>
                  <Line>  Action: Detained briefly, released with warning</Line>
                  <Divider />

                  <Line>Last week 03:00 - Unauthorized drone</Line>
                  <Line>  Type: Commercial quadcopter (paparazzi suspected)</Line>
                  <Line>  Action: Shot down by Stinger Drone 6</Line>
                  <Line>  Debris: Collected, stored in evidence locker</Line>
                </Section>

                <Divider />

                <Section title="NIGHTLY OBSERVATORY ACTIVITY">
                  <Line yellow bold>⚠ KNOWN BUT UNADDRESSED:</Line>
                  <Line>Cultists access observatory every night</Line>
                  <Line>1 Heir of Kergoz + 2d4 Nanogoons typically present</Line>
                  <Line>Security does not engage (orders from above)</Line>
                  <Line>"Not worth the trouble" - Captain's unofficial policy</Line>
                </Section>
              </>
            ),
          },

          "Guard Personnel Files": {
            content: (
              <>
                <Line cyan large bold>[GUARD PERSONNEL]</Line>
                <Line smoke>Security checkpoint staff roster</Line>
                <Divider />

                <Section title="CURRENT SHIFT (Night)">
                  <Line neon>SELECT NAME FOR PERSONNEL FILE:</Line>
                  <Line>• Captain Marcus Webb (Shift supervisor)</Line>
                  <Line>• Officer Sarah Kim (Drone operator)</Line>
                  <Line>• Officer David Foster (Patrol lead)</Line>
                  <Line>• Officer Nina Volkov (Checkpoint guard)</Line>
                </Section>

                <Divider />
                <Line yellow>⚠ Night shift under-staffed (budget cuts reduced from 6 to 4)</Line>
              </>
            ),
            related_commands: {
              "Captain Marcus Webb": {
                content: (
                  <PersonnelFile
                    employeeId="SEC-RL-001"
                    name="Captain Marcus Webb"
                    age={45}
                    position="Roofline Security Captain"
                    department="The 55 Security - Roofline Division"
                    hireDate="12 years ago"
                    supervisor="Stack Command and Control"
                    clearanceLevel={3}
                    district="The 55 - Resident (Level 95)"
                    performance={76}
                    notes={[
                      "Long tenure, experienced in roofline security protocols",
                      "Pragmatic approach: 'Pick your battles, avoid unnecessary trouble'",
                      "Unofficial policy: Don't engage cultists at observatory",
                      "Frustrated by budget cuts (staffing reduced 30%)",
                      "Allows guards to fly drones for entertainment (morale)",
                      "Open to bribes for minor infractions (50-200¤)",
                      "Protective of his team, resents corporate cost-cutting",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              "Officer Sarah Kim": {
                content: (
                  <PersonnelFile
                    employeeId="SEC-RL-015"
                    name="Officer Sarah Kim"
                    age={29}
                    position="Drone Operator"
                    department="The 55 Security - Roofline Division"
                    hireDate="3 years ago"
                    supervisor="Captain Marcus Webb"
                    clearanceLevel={2}
                    district="The 55 - Resident (Level 48)"
                    performance={85}
                    notes={[
                      "Expert drone pilot, handles all Stinger Drone operations",
                      "Tech-savvy, maintains drone garage systems",
                      "Hobby: Competitive drone racing (uses work drones after hours)",
                      "Sympathetic to graffiti artists (secretly appreciates their work)",
                      "Won't report minor trespassing if no damage done",
                      "Occasionally accepts bribes to 'look the other way' (100¤+)",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },
        },
      },

      "Storage Crates": {
        content: (
          <>
            <Line cyan large bold>[STORAGE CRATES]</Line>
            <Line smoke>Corporate shipping containers - Mixed contents</Line>
            <Divider />

            <Section title="CONTAINER INVENTORY">
              <DataTable
                data={[
                  { label: "Total containers", value: "37 units" },
                  { label: "Corporate logos", value: "Mixed (various corps)" },
                  { label: "Security", value: "Basic locks (DR12 to pick)" },
                  { label: "Official contents", value: "Building materials" },
                  { label: "Rumored contents", value: "Anomalous tech (unconfirmed)" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="LABELED CONTENTS">
              <Line neon bold>OFFICIAL MANIFESTS:</Line>
              <Line>• Construction materials (concrete, steel beams)</Line>
              <Line>• Solar panel replacements</Line>
              <Line>• HVAC system components</Line>
              <Line>• Electrical wiring and junction boxes</Line>
              <Line>• Rooflight maintenance supplies</Line>
              <Line>• General infrastructure repair materials</Line>
            </Section>

            <Divider />

            <Section title="RUMORS">
              <Line yellow bold>⚠ UNCONFIRMED SPECULATION:</Line>
              <Line>"This is a dumping ground for anomalous tech"</Line>
              <Line>"Failed corporate experiments hidden here"</Line>
              <Line>"Prototype cyberware that went wrong"</Line>
              <Line>"AI cores with unexpected behaviors"</Line>
              <Line>"Evidence of corporate crimes"</Line>
              <Line red>No proof, but rumors persist among urban explorers</Line>
            </Section>

            <Divider />

            <Section title="SECURITY">
              <Line cyan>Patrolled by security guards (every 2 hours)</Line>
              <Line cyan>Drone surveillance (Camera 2 monitors area)</Line>
              <Line cyan>Basic locks (DR12 to pick, but noisy)</Line>
              <Line yellow>⚠ Opening containers triggers motion alarms (50% chance)</Line>
            </Section>

            <Divider />

            <Section title="RECENT ACTIVITY">
              <Line neon>Last week: 3 new containers delivered (construction materials)</Line>
              <Line neon>2 weeks ago: 5 containers removed (contents unknown)</Line>
              <Line yellow>Urban explorers occasionally break in (rarely caught)</Line>
            </Section>
          </>
        ),
      },

      "Control Aerials": {
        content: (
          <>
            <Line cyan large bold>[CONTROL AERIALS]</Line>
            <Line smoke>Dense forest of antennas and satellite dishes</Line>
            <Divider />

            <Section title="INFRASTRUCTURE">
              <Line>Dense cluster of receivers and transmitters</Line>
              <Line>Antenna types: Communication, navigation, surveillance</Line>
              <Line>Satellite dishes: Corporate, government, broadcast</Line>
              <Line>Purpose: Control autonomous drones and craft in/around The 55</Line>
            </Section>

            <Divider />

            <Section title="HACKING OPPORTUNITY">
              <Line yellow bold>⚠ DRONE/CRAFT CONTROL:</Line>
              <Line>DR14 to hack autonomous systems from this location</Line>
              <Line>Targets: Delivery drones, security drones, flying cars</Line>
              <Line>Range: Within visual range of The 55</Line>
              <Line>Duration: Temporary control (15-30 minutes before re-sync)</Line>
              <Line red>Detection risk: High (corporate security monitors signal anomalies)</Line>
            </Section>

            <Divider />

            <Section title="LAYOUT">
              <Line cyan>Maze-like arrangement (easy to get lost)</Line>
              <Line cyan>Multiple levels (catwalks, platforms)</Line>
              <Line cyan>Service access points (maintenance hatches)</Line>
              <Line cyan>Blind spots (security cameras can't see through antenna forest)</Line>
            </Section>

            <Divider />

            <Section title="USES">
              <Line neon>Hacker hideout (signal tapping operations)</Line>
              <Line neon>Secret meetings (private, hidden from cameras)</Line>
              <Line neon>Urban explorer destination (great views from top)</Line>
              <Line neon>Graffiti canvas (hidden tags on antenna bases)</Line>
            </Section>

            <Divider />

            <Section title="SECURITY">
              <Line yellow>Patrols rarely check area (too dense, time-consuming)</Line>
              <Line yellow>Motion sensors disabled (too many false alarms from wind)</Line>
              <Line yellow>Access technically restricted (not enforced)</Line>
            </Section>
          </>
        ),
      },

      "Observatory": {
        content: (
          <>
            <Line cyan large bold>[OBSERVATORY]</Line>
            <Line smoke>Graffiti sigils, clear air, cultist occupation</Line>
            <Divider />

            <Section title="LOCATION">
              <DataTable
                data={[
                  { label: "Level", value: "365 (highest accessible point)" },
                  { label: "Structure", value: "Unfinished observation platform" },
                  { label: "Access", value: "Stairways covered in graffiti sigils" },
                  { label: "View", value: "Panoramic - Above smog layer" },
                  { label: "Air quality", value: "Clean (rare for The City)" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="GRAFFITI SIGILS">
              <Line pink bold>STAIRWAY MARKINGS:</Line>
              <Line>• Keter Protocol symbols (most prevalent)</Line>
              <Line>• D3BT accelerationist slogans</Line>
              <Line>• Heir of Kergoz warnings: "NANO ASCENDANT"</Line>
              <Line>• Directional arrows leading to observatory</Line>
              <Line>• Protective wards (alleged magical significance)</Line>
            </Section>

            <Divider />

            <Section title="NIGHTLY OCCUPATION">
              <Line red bold>⚠ CULTIST ACTIVITY:</Line>
              <Line>Occupied at night by 1 Heir of Kergoz</Line>
              <Line>+ 2d4 Nanogoons (cultist followers)</Line>
              <Line>Activity: Rituals, meditation, nano-tech experiments</Line>
              <Line>Duration: Sunset to sunrise (every night)</Line>
              <Line>Security response: None (orders from above to avoid engagement)</Line>
            </Section>

            <Divider />

            <Section title="WHAT THEY DO">
              <Line yellow>Heir of Kergoz: Nano-tech meditation rituals</Line>
              <Line yellow>Claims to "commune" with nano-entities</Line>
              <Line yellow>Nanogoons: Guard the heir, observe rituals, train</Line>
              <Line yellow>Purpose: Seeking nano-ascension (cult doctrine)</Line>
              <Line red>Dangerous if disturbed - nano-tech weaponry</Line>
            </Section>

            <Divider />

            <Section title="DURING THE DAY">
              <Line cyan>Empty - cultists leave at dawn</Line>
              <Line cyan>Popular with urban explorers (great views)</Line>
              <Line cyan>Graffiti artists add to sigil collection</Line>
              <Line cyan>Occasional meditation spot for residents</Line>
            </Section>

            <Divider />

            <Section title="THE VIEW">
              <Line neon>Panoramic view of The City</Line>
              <Line neon>Above smog layer - see stars at night</Line>
              <Line neon>Sunrise/sunset views spectacular</Line>
              <Line neon>Other megablocks visible on horizon</Line>
              <Line yellow>"Worth the climb" - Universal consensus</Line>
            </Section>
          </>
        ),
      },

      "Project CARV": {
        content: (
          <>
            <Line cyan large bold>[PROJECT CARV]</Line>
            <Line smoke>Flying Vindicator - Corporate military vehicle</Line>
            <Divider />

            <Section title="VEHICLE STATUS">
              <DataTable
                data={[
                  { label: "Model", value: "Vindicator-X Combat VTOL" },
                  { label: "Status", value: "PARKED (Helipad Delta)" },
                  { label: "Owner", value: "Unknown (classified)" },
                  { label: "Security", value: "Advanced (biometric locks)" },
                  { label: "Armament", value: "Heavy (classified loadout)" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="DESCRIPTION">
              <Line>Military-grade flying vehicle (VTOL capable)</Line>
              <Line>Sleek black chassis, no visible markings</Line>
              <Line>Armored hull (appears heavily reinforced)</Line>
              <Line>Weapon mounts visible (purpose unclear)</Line>
              <Line>Parked on Helipad Delta (Level 345)</Line>
            </Section>

            <Divider />

            <Section title="PROJECT CARV">
              <Line yellow bold>⚠ CLASSIFIED PROJECT:</Line>
              <Line>Official designation: "Project CARV"</Line>
              <Line>Purpose: Unknown (corporate R&D suspected)</Line>
              <Line>Ownership: Not listed in public records</Line>
              <Line>Speculation: Black ops, corporate military, experimental tech</Line>
              <Line red>High security clearance required for information access</Line>
            </Section>

            <Divider />

            <Section title="SECURITY">
              <Line red bold>⚠ DO NOT APPROACH:</Line>
              <Line>Biometric security locks (fingerprint + retina scan)</Line>
              <Line>Proximity alarms (trigger at 5 meters)</Line>
              <Line>Armed response team on standby (2-minute response)</Line>
              <Line>Tampering = immediate security escalation</Line>
            </Section>

            <Divider />

            <Section title="RECENT ACTIVITY">
              <Line cyan>Parked for 2 weeks (static, no movement)</Line>
              <Line cyan>Daily maintenance checks (anonymous technicians)</Line>
              <Line cyan>No flight activity observed</Line>
              <Line yellow>Purpose of extended parking: Unknown</Line>
            </Section>

            <Divider />

            <Section title="SPECULATION">
              <Line pink>"It's a corp black ops vehicle"</Line>
              <Line pink>"Experimental weapons testing platform"</Line>
              <Line pink>"VIP extraction vehicle (for emergencies)"</Line>
              <Line pink>"Evidence of upcoming corporate war"</Line>
              <Line pink>"Connected to missing persons from lower levels"</Line>
            </Section>
          </>
        ),
      },
    },
  },
};

export default THE_55_ROOFLINE_COMMANDS;
