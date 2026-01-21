import {
  Line,
  Box,
  Section,
  Warning,
  Divider,
  KeyValue,
  DataTable,
} from '@terminal/TerminalComponents';
import {
  Safe,
} from "@terminal/retcomdevice"

import StoneEelsAd from './ad';

export const STONE_EELS_COMMANDS = {
  "Cave Club": {
    content: (
      <>
        <StoneEelsAd />
        <Line cyan large bold>🎵 CAVE CLUB 🎵</Line>
        <Line yellow>"Underground. Literally."</Line>
        <Divider />
        <Line neon>Connecting to CAVE_CLUB_GUEST...</Line>
        <Line cyan>[CONNECTION ESTABLISHED]</Line>
        <Divider />
        <DataTable data={[
          { label: "Location", value: "Converted storm chamber (Ports district)" },
          { label: "Atmosphere", value: "Dark, industrial, loud" },
          { label: "Vibe", value: "Anti-corp, DIY music scene" },
          { label: "Status", value: "✓ OPEN (20:00-06:00)" },
        ]} />
        <Divider />
        <Line pink>🎵 Now spinning: Underground beats - Ports hardcore mix</Line>
        <Line yellow>* Stone Eels territory - Neutral ground, no drama</Line>
        <Line yellow>* Weapon check at door (negotiable)</Line>
      </>
    ),
    related_commands: {
      "Tonight's Entertainment": {
        content: (
          <>
            <Line yellow large bold>[TONIGHT'S LINEUP]</Line>
            <Line cyan>Updated hourly</Line>
            <Divider />
            <Section title="LIVE PERFORMANCES:">
              <Line neon>22:00 → PHASER/MOB (blackened chromecore)</Line>
              <Line neon>23:30 → HeCcc (hexcore)</Line>
              <Line neon>01:00 → I must leave (doompunk)</Line>
              <Line neon>02:30 → Sirius Last Light (atmo-orbitalwave)</Line>
            </Section>
            <Divider />
            <Section title="RESIDENT DJS:">
              <Line yellow>→ DJ Scrap (industrial techno)</Line>
              <Line yellow>→ SynthWave Sasha (retro-future)</Line>
              <Line yellow>→ Bass_Driller (sub-bass assault)</Line>
            </Section>
            <Divider />
            <Section title="COVER & ENTRY:">
              <Line cyan>Entry: 20¤ (includes 1 drink token)</Line>
              <Line cyan>VIP Access: By invitation only</Line>
              <Line yellow>Stone Eels members: Free entry</Line>
            </Section>
            <Divider />
            <Line pink>"No corps. No cops. No bullshit."</Line>
          </>
        ),
      },

      "Bar Menu": {
        content: (
          <>
            <Line yellow large bold>[BAR MENU]</Line>
            <Line cyan>Cash or credchip - No corp cards</Line>
            <Divider />
            <Section title="DRINKS:">
              <KeyValue label="Beer (local)" value="8¤" />
              <KeyValue label="Synth-Whiskey" value="12¤" />
              <KeyValue label="NeoVodka" value="10¤" />
              <KeyValue label="Energy Drink" value="6¤" />
              <KeyValue label="Mystery Shot" value="5¤" />
              <KeyValue label="Water (free)" value="0¤" />
            </Section>
            <Divider />
            <Section title="SPECIAL:">
              <Line pink>→ Stone Eel Special: 15¤ (don't ask what's in it)</Line>
              <Line yellow>→ Ports Punch: 10¤ (strong, cheap, effective)</Line>
            </Section>
            <Divider />
            <Line red>⚠ Management not responsible for morning regrets</Line>
          </>
        ),
      },

      "Hours & Location": {
        content: (
          <>
            <Line smoke large bold>[VENUE INFORMATION]</Line>
            <Divider />
            <Section title="OPERATING HOURS:">
              <Line neon>Open: 20:00 - 06:00 (every night)</Line>
              <Line neon>Closed: 06:00 - 20:00 (cleanup, private events)</Line>
              <Line yellow>Best time: 23:00-03:00 (peak crowd, live music)</Line>
            </Section>
            <Divider />
            <Section title="LOCATION:">
              <Line cyan>Ports district, eastern section</Line>
              <Line cyan>Underground entrance (old storm chamber access)</Line>
              <Line cyan>Look for the eel graffiti near canal dock 7</Line>
              <Line yellow>No signs - locals know, tourists don't</Line>
            </Section>
            <Divider />
            <Section title="GETTING IN:">
              <Line neon>• Entrance checkpoint at door</Line>
              <Line neon>• Weapon check (bouncers decide enforcement)</Line>
              <Line neon>• Respect neutral ground rules</Line>
              <Line red>• Cause trouble = get thrown in canal</Line>
            </Section>
            <Divider />
            <Line pink>"If you can find us, you're welcome. If you can't, you're not."</Line>
          </>
        ),
      },

      "Community Board": {
        content: (
          <>
            <Line smoke large bold>[COMMUNITY POSTINGS]</Line>
            <Line neon>Physical board scanned - recent posts</Line>
            <Divider />
            <Section title="SCENE NEWS:">
              <Line pink>→ "New band forming - need drummer with own kit"</Line>
              <Line pink>→ "Selling modified amp - 200¤ OBO"</Line>
              <Line pink>→ "Studio space available - split rent 4 ways"</Line>
              <Line pink>→ "Looking for vocals for industrial project"</Line>
              <Line pink>→ "Anti-gentrification protest this Saturday - meet at bodega"</Line>
            </Section>
            <Divider />
            <Section title="WARNINGS:">
              <Line red>→ "Virid Vipers spotted near docks - watch your back"</Line>
              <Line red>→ "SecOps doing sweeps on weekends lately"</Line>
              <Line yellow>→ "Alliansen suits been asking questions about the club"</Line>
            </Section>
            <Divider />
            <Line yellow>Vibe: Tight community, fuck-the-corps attitude</Line>
          </>
        ),
      },

      access_cave_club_internal: {
        password: {
          pw: "serpent",
          hint: "The Stone Eels gang symbol - what kind of creature?",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[CAVE CLUB - INTERNAL SYSTEMS]</Line>
            <Line cyan>[STAFF ACCESS GRANTED]</Line>
            <Divider />
            <Section title="AVAILABLE SYSTEMS:">
              <Line neon>→ Facility layout & operations</Line>
              <Line neon>→ Security systems</Line>
              <Line neon>→ VIP guest management</Line>
              <Line neon>→ Incident reports</Line>
              <Line neon>→ Safe access</Line>
            </Section>
            <Divider />
            <Line yellow>Internal network maintained by Stone Eels tech crew</Line>
          </>
        ),
        related_commands: {
          query_facility_layout: {
            password: {
              pw: "storm",
              hint: "What the club was before - a water overflow chamber",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[FACILITY LAYOUT]</Line>
                <Divider />
                <Section title="GROUND FLOOR (Public):">
                  <Line cyan>→ Entrance checkpoint (bouncer station, coat check)</Line>
                  <Line cyan>→ Main floor (dance floor, bar, stage)</Line>
                  <Line cyan>→ Service area (storage, kitchen, bathrooms)</Line>
                  <Line cyan>→ Central stairs (guarded, VIP access only)</Line>
                  <KeyValue label="Capacity" value="40-60 patrons (comfortable)" />
                  <KeyValue label="Max capacity" value="~100 (packed nights)" />
                </Section>
                <Divider />
                <Section title="UPPER LEVEL (VIP):">
                  <Line yellow>→ VIP lounge (overlooks dance floor, 2 large booths)</Line>
                  <Line yellow>→ Semi-private booth (smaller meetings)</Line>
                  <Line yellow>→ Management office complex (waiting room, main office, back room)</Line>
                  <Line yellow>→ Security station (monitors, checkpoint)</Line>
                  <Line yellow>→ Private booths (2 exclusive rooms, secured access)</Line>
                  <KeyValue label="Access" value="Invitation only / Stone Eels members" />
                </Section>
                <Divider />
                <Section title="INFRASTRUCTURE:">
                  <Line neon>Original storm chamber structure (concrete, industrial)</Line>
                  <Line neon>Reinforced ceiling (old city above)</Line>
                  <Line neon>Canal access via loading dock (equipment/emergencies)</Line>
                  <Line neon>Ventilation system (prevents smoke buildup)</Line>
                </Section>
              </>
            ),
          },

          query_security_systems: {
            content: (
              <>
                <Line smoke large bold>[SECURITY SYSTEMS]</Line>
                <Divider />
                <Section title="SURVEILLANCE:">
                  <Line cyan>Main floor: Full coverage (4 cameras)</Line>
                  <Line cyan>Entrance: Single camera (bouncer station)</Line>
                  <Line cyan>Security station: Monitor bank (upper level)</Line>
                  <Line yellow>VIP lounge: NO cameras (privacy for guests)</Line>
                  <Line yellow>Management office: NO cameras</Line>
                  <Line yellow>Private booths: NO cameras</Line>
                </Section>
                <Divider />
                <Section title="ACCESS CONTROL:">
                  <Line neon>Entrance: Bouncer checkpoint (manual control)</Line>
                  <Line neon>Stairs: Guarded position (Stone Eels member)</Line>
                  <Line neon>Security station: Checkpoint before private areas</Line>
                  <Line red>Emergency: Panic button (security station)</Line>
                </Section>
                <Divider />
                <Section title="STAFF PRESENCE:">
                  <Line neon>Bouncers: 1-2 (entrance)</Line>
                  <Line neon>Guards: 1 (stairway position)</Line>
                  <Line neon>Security staff: 2 (upper level station)</Line>
                  <Line neon>Bar staff: 2-3 (depending on night)</Line>
                  <Line yellow>Stone Eels members: Variable presence (often in VIP lounge)</Line>
                </Section>
                <Divider />
                <Line cyan>Security philosophy: Moderate presence, heavy response if needed</Line>
              </>
            ),
          },

          query_vip_management: {
            password: {
              pw: "clearance",
              hint: "You don’t have it",
              hintStrength: 3,
            },
            content: (
              <>
                <Line smoke large bold>[VIP GUEST MANAGEMENT]</Line>
                <Divider />
                <Section title="CURRENT VIP GUESTS:">
                  <Line pink>→ Stone Eels leadership (always present)</Line>
                  <Line pink>→ Local fixers & info brokers (regulars)</Line>
                  <Line pink>→ Underground artists (performers)</Line>
                  <Line pink>→ High rollers (casino winners celebrating)</Line>
                </Section>
                <Divider />
                <Section title="TONIGHT'S NOTABLE GUESTS:">
                  <Line cyan>→ "Gibos" - Regular patron</Line>
                  <Line neon>  Status: Seated in VIP booth</Line>
                  <Line neon>  Known for: Lucky Flight casino winnings, extensive cyberware</Line>
                  <Line neon>  Medical notes: Mobility assistance required (leg actuators malfunctioning)</Line>
                  <Line neon>  Drinking: Stone Eel Special (4th round)</Line>
                </Section>
                <Divider />
                <Section title="VIP PROTOCOLS:">
                  <Line yellow>• Privacy respected (no cameras in VIP areas)</Line>
                  <Line yellow>• Neutral ground rules enforced</Line>
                  <Line yellow>• Violence = permanent ban + consequences</Line>
                  <Line yellow>• Discretion guaranteed (what happens here stays here)</Line>
                </Section>
                <Divider />
                <Line pink>"Cave Club is neutral ground. Everyone knows this."</Line>
              </>
            ),
          },

          query_incident_reports: {
            content: (
              <>
                <Line smoke large bold>[INCIDENT LOG]</Line>
                <Line cyan>Last 7 days</Line>
                <Divider />
                <Section title="3 DAYS AGO (22:45):">
                  <Line yellow>Incident Type: Questioning</Line>
                  <Line neon>Individual brought in: "Charlie Sand"</Line>
                  <Line neon>Reason: Asking questions about Lucky Flight Casino operations</Line>
                  <Line neon>Duration: 2 hours (holding room)</Line>
                  <Line neon>Resolution: Information provided, released</Line>
                  <Line neon>Status: No further action required</Line>
                </Section>
                <Divider />
                <Section title="5 DAYS AGO (23:15):">
                  <Line yellow>Incident Type: Territorial intrusion</Line>
                  <Line neon>Details: Virid Vipers scout spotted outside entrance</Line>
                  <Line neon>Response: Stone Eels mobilized (3 members)</Line>
                  <Line neon>Resolution: Subject fled before engagement</Line>
                  <Line red>Follow-up: Increased perimeter patrols initiated</Line>
                </Section>
                <Divider />
                <Section title="6 DAYS AGO (01:30):">
                  <Line yellow>Incident Type: Patron disturbance</Line>
                  <Line neon>Details: Intoxicated patrons fighting on main floor</Line>
                  <Line neon>Response: Bouncers intervened (non-lethal)</Line>
                  <Line neon>Resolution: Both parties ejected to street</Line>
                  <Line neon>Injuries: Minor (bruises, no medical treatment required)</Line>
                </Section>
              </>
            ),
          },

          "Cave Club Back Office Safe": {
            password: {
              pw: "eels",
              hint: "The gang's name (plural)",
              hintStrength: 3,
            },
            content: (
              <Safe
                id="cave-club-backoffice"
                model="DS-500X"
                location="Management office, back room (behind poster)"
                owner="Stone Eels leadership"
                security="Biometric (fingerprint) + keypad"
                lastAccess="Yesterday evening (21:30)"
                physical={[
                  { item: "Cash", desc: "1,200¤ (nightly bar receipts, mixed bills)" },
                  { item: "Documents", desc: "Property deed, business licenses, insurance" },
                  { item: "Weapons", desc: "2 backup handguns (emergency stash, 9mm)" },
                  { item: "Product samples", desc: "Quality control inventory (Stone Eels brand)" },
                  { item: "Keys", desc: "Access to 3 safe houses, storage units" },
                ]}
                digital={[
                  { item: "Credchip", desc: "85¤ (petty cash fund, transferable)" },
                  { item: "Coupon code", desc: "CAVECLUB50 (50% off cover charge, expires in 1 month)" },
                  { item: "App", desc: "Event Scheduler Pro (2¤ value, booking management)" },
                  { item: "Data file", desc: "VIP guest list with contact info (sellable to rivals for 60-100¤)" },
                ]}
                notes="⚠ Safe alarm connected to security station (silent trigger) | Biometric access: Saša + 2 senior members"
              />
            ),
          },

          access_stone_eels_operations: {
            password: {
              pw: "alliansen",
              hint: "The megacorp trying to take over Ports",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[STONE EELS - OPERATIONS]</Line>
                <Line red>[RESTRICTED ACCESS - GANG LEADERSHIP ONLY]</Line>
                <Divider />
                <Warning>Sensitive operational data</Warning>
                <Divider />
                <Section title="AVAILABLE INTELLIGENCE:">
                  <Line neon>→ Territory status & threats</Line>
                  <Line neon>→ Current operations</Line>
                  <Line neon>→ Leadership information</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_territory_status: {
                content: (
                  <Box color="pink">
                    <Line pink large bold>[STONE EELS - TERRITORY STATUS]</Line>
                    <Divider color="pink" />
                    <DataTable data={[
                      { label: "Territory", value: "Ports district (eastern section)" },
                      { label: "Estimated Members", value: "~100 total (~20-30 active daily)" },
                      { label: "Headquarters", value: "Cave Club" },
                      { label: "Established", value: "8 years (2074)" },
                      { label: "Control Status", value: "Strong (minimal challenges)" },
                    ]} />
                    <Divider color="pink" />
                    <Section title="CURRENT THREATS:">
                      <Line red>→ Virid Vipers (rival gang, ongoing conflict)</Line>
                      <Line red>→ Alliansen Inc. (corporate expansion into Ports)</Line>
                      <Line yellow>→ SecOps (bribed but unreliable, increased patrols)</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="OPERATIONS:">
                      <Line neon>• Protection services (local businesses, fair rates)</Line>
                      <Line neon>• Product distribution (Stone Eels brand, Ports exclusive)</Line>
                      <Line neon>• Weapons trade (select contacts, vetted buyers)</Line>
                      <Line neon>• Information brokering (intel gathering & sales)</Line>
                      <Line neon>• Neutral ground services (Cave Club negotiations)</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="COMMUNITY RELATIONS:">
                      <Line cyan>Ports residents: Generally positive (protectors vs corps)</Line>
                      <Line cyan>Reputation: Fair but firm enforcement</Line>
                      <Line cyan>Public services: Dispute resolution, local security</Line>
                      <Line yellow>Philosophy: Protect Ports from corporate takeover</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="RECENT ACTIVITY:">
                      <Line yellow>3 days ago: Questioned individual re: Lucky Flight</Line>
                      <Line yellow>5 days ago: Virid Vipers scout spotted (no engagement)</Line>
                      <Line yellow>1 week ago: Protection payment collection (routine)</Line>
                      <Line red>Ongoing: Monitoring Alliansen property acquisitions in Ports</Line>
                    </Section>
                  </Box>
                ),
              },

              query_leadership_files: {
                password: {
                  pw: "sasa",
                  hint: "The gang leader's first name",
                  hintStrength: 3,
                },
                content: (
                  <>
                    <Line smoke large bold>[LEADERSHIP FILES]</Line>
                    <Divider />
                    <Section title="STONE EELS COMMAND STRUCTURE:">
                      <Line cyan>→ Primary Leadership: Saša</Line>
                      <Line cyan>→ Council: 5 senior members</Line>
                      <Line cyan>→ Enforcers: Trusted veterans (8-10 active)</Line>
                      <Line cyan>→ General members: ~20-30 regular operatives</Line>
                    </Section>
                    <Divider />
                    <Line yellow>Individual personnel files available below</Line>
                  </>
                ),
                related_commands: {
                  profile_sasa: {
                    content: (
                      <Box color="yellow">
                        <Line yellow large bold>[PERSONNEL FILE: SAŠA]</Line>
                        <Divider color="yellow" />
                        <DataTable data={[
                          { label: "Full Name", value: "Saša (surname not recorded)" },
                          { label: "Age", value: "Late 30s (estimated 37-39)" },
                          { label: "Position", value: "Stone Eels primary leadership" },
                          { label: "Gang Tenure", value: "15+ years (joined ~2067)" },
                          { label: "Territory", value: "Ports district (eastern section)" },
                        ]} />
                        <Divider color="yellow" />
                        <Section title="BACKGROUND:">
                          <Line neon>Born: Ports district (3rd generation local resident)</Line>
                          <Line neon>Education: Street-level (no formal records)</Line>
                          <Line neon>Gang Entry: Age 20 (street-level recruitment)</Line>
                          <Line neon>Leadership Path: Rose through ranks via strategy, not violence</Line>
                          <Line neon>Reputation: Tactical thinking, keeping agreements, fair dealing</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="KNOWN EQUIPMENT & ASSETS:">
                          <Line yellow>Registered weapons: Throwing knives (custom-made, permit #GANG-SE-001)</Line>
                          <Line yellow>Secondary firearm: Concealed handgun (9mm, permit #GANG-SE-002)</Line>
                          <Line yellow>Personal armor: Reinforced jacket (kevlar weave, appears casual)</Line>
                          <Line yellow>Vehicle: Modified cyberbike (registration #PORT-2847, fast extraction)</Line>
                          <Line yellow>Property: Stake in Cave Club ownership, 2 residential properties</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="FINANCIAL DATA:">
                          <KeyValue label="Estimated Personal Funds" value="2,000¤+" />
                          <KeyValue label="Income Sources" value="Gang operations, Cave Club profits" />
                          <KeyValue label="Known Assets" value="Real estate, business stakes, credchips" />
                          <Line neon>Bank accounts: Multiple (locations and amounts undisclosed)</Line>
                          <Line neon>Payment methods: Prefers cash, uses encrypted credchips for large amounts</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="ACCESS & AUTHORITY:">
                          <Line neon>Cave Club: Master access (all areas, override capability)</Line>
                          <Line neon>Safe houses: Keys to 3 locations (addresses classified)</Line>
                          <Line neon>Network: Extensive contacts (fixers, info brokers, medical, weapons)</Line>
                          <Line neon>Communication: Encrypted RCD, secure channels</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="OPERATIONAL NOTES:">
                          <Line cyan>Primary location: Cave Club (VIP lounge or office)</Line>
                          <Line cyan>Leadership style: Respected through competence, not fear</Line>
                          <Line cyan>Philosophy: Protect Ports from corporate takeover</Line>
                          <Line cyan>Tactical approach: Alliances over violence when possible</Line>
                          <Line yellow>Negotiation stance: Open to mutually beneficial deals</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="RECENT ACTIVITY:">
                          <Line neon>3 days ago: Meeting with "Charlie Sand" (questioning)</Line>
                          <Line neon>5 days ago: Council meeting re: Alliansen threat response</Line>
                          <Line neon>1 week ago: Successful negotiation with local fixer</Line>
                          <Line yellow>Ongoing: Monitoring corporate property acquisitions</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="BEHAVIORAL PROFILE:">
                          <Line neon>Demeanor: Calm, calculating, deliberate speech</Line>
                          <Line neon>Decision-making: Strategic, weighs consequences</Line>
                          <Line neon>Loyalty: Values territory and people over profit</Line>
                          <Line neon>Ruthlessness: Not needlessly cruel, but absolutely firm when necessary</Line>
                          <Line yellow>Weaknesses: Protective of Ports residents (exploitable)</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="CONTACT INFORMATION:">
                          <Line neon>RCD: sasa@stoneeels.local (encrypted)</Line>
                          <Line neon>Emergency contact: Via Cave Club staff</Line>
                          <Line neon>Meeting location: Cave Club VIP lounge (by appointment)</Line>
                        </Section>
                      </Box>
                    ),
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export default STONE_EELS_COMMANDS;
