import {
  Line,
  Box,
  Section,
  ListItem,
  Warning,
  Divider,
  KeyValue,
  DataTable,
} from '../TerminalComponents';

export const STONE_EELS_COMMANDS = {
  "Cave Club": {
    content: (
      <>
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
          hintStrength: 1,
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
                  <Line neon>1-2 Bouncers (entrance)</Line>
                  <Line neon>1 Guard (stairway)</Line>
                  <Line neon>2 Security (upper level station)</Line>
                  <Line neon>Bar staff (2-3 depending on night)</Line>
                  <Line yellow>Stone Eels members: Variable (often in VIP lounge)</Line>
                </Section>
                <Divider />
                <Line cyan>Security philosophy: Moderate presence, heavy response if needed</Line>
              </>
            ),
          },

          query_vip_management: {
            password: {
              pw: "gibos",
              hint: "Nickname of the cyborg grandpa high roller",
              hintStrength: 2,
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
                  <Line neon>  Status: Seated in VIP booth (mobility issues)</Line>
                  <Line neon>  Known for: Big casino winnings, cybernetic upgrades</Line>
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
                  <Line neon>Reason: Asking questions about Lucky Flight Casino</Line>
                  <Line neon>Duration: 2 hours</Line>
                  <Line neon>Resolution: Released, given information</Line>
                  <Line neon>Status: No further action</Line>
                </Section>
                <Divider />
                <Section title="5 DAYS AGO (23:15):">
                  <Line yellow>Incident Type: Territorial intrusion</Line>
                  <Line neon>Details: Virid Vipers scout spotted outside entrance</Line>
                  <Line neon>Response: Stone Eels mobilized</Line>
                  <Line neon>Resolution: Subject fled, no engagement</Line>
                  <Line red>Follow-up: Increased perimeter awareness</Line>
                </Section>
                <Divider />
                <Section title="6 DAYS AGO (01:30):">
                  <Line yellow>Incident Type: Patron disturbance</Line>
                  <Line neon>Details: Intoxicated patrons fighting on main floor</Line>
                  <Line neon>Response: Bouncers intervened (non-lethal)</Line>
                  <Line neon>Resolution: Both parties ejected</Line>
                  <Line neon>Injuries: Minor (bruises)</Line>
                </Section>
              </>
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
                      { label: "Members", value: "~100 total (~20-30 active)" },
                      { label: "Headquarters", value: "Cave Club" },
                      { label: "Control", value: "Strong (established 8 years)" },
                    ]} />
                    <Divider color="pink" />
                    <Section title="CURRENT THREATS:">
                      <Line red>→ Virid Vipers (rival gang, hostile)</Line>
                      <Line red>→ Alliansen Inc. (corporate expansion)</Line>
                      <Line yellow>→ SecOps (bribed but unreliable)</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="OPERATIONS:">
                      <Line neon>• Protection collection (fair rates, Ports businesses)</Line>
                      <Line neon>• Product distribution (Stone Eels brand only)</Line>
                      <Line neon>• Weapons trade (select contacts)</Line>
                      <Line neon>• Information brokering</Line>
                      <Line neon>• Neutral ground services (Cave Club)</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="COMMUNITY RELATIONS:">
                      <Line cyan>Ports residents: Generally positive</Line>
                      <Line cyan>Reputation: Fair but firm</Line>
                      <Line yellow>Philosophy: Protect territory from corps</Line>
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
                    <Section title="STONE EELS COMMAND:">
                      <Line cyan>→ Saša (Primary leadership)</Line>
                      <Line cyan>→ Council of 5 (senior members)</Line>
                      <Line cyan>→ Enforcers (trusted veterans)</Line>
                    </Section>
                  </>
                ),
                related_commands: {
                  profile_sasa: {
                    content: (
                      <Box color="yellow">
                        <Line yellow large bold>[PERSONNEL FILE: SAŠA]</Line>
                        <Divider color="yellow" />
                        <DataTable data={[
                          { label: "Name", value: "Saša" },
                          { label: "Age", value: "Late 30s" },
                          { label: "Position", value: "Stone Eels leadership" },
                          { label: "Years in Gang", value: "15+ (rose through ranks)" },
                          { label: "Territory", value: "Ports district" },
                        ]} />
                        <Divider color="yellow" />
                        <Section title="BACKGROUND:">
                          <Line neon>Born in Ports district (local, not outsider)</Line>
                          <Line neon>Joined Stone Eels at 20 (street-level)</Line>
                          <Line neon>Rose to leadership through strategy, not violence</Line>
                          <Line neon>Known for: Tactical thinking, keeping word</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="PERSONAL EQUIPMENT:">
                          <Line yellow>Preferred weapon: Throwing knives (custom-made)</Line>
                          <Line yellow>Backup: Concealed handgun (rarely used)</Line>
                          <Line yellow>Armor: Reinforced jacket (appears casual)</Line>
                          <Line yellow>Vehicle: Modified bike (fast extraction)</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="KNOWN ASSETS:">
                          <Line neon>Keys: Cave Club safe, hideouts</Line>
                          <Line neon>Credchip: 2,000¤ (personal funds)</Line>
                          <Line neon>Contacts: Info brokers, fixers, street docs</Line>
                          <Line neon>Intel network: Throughout Ports</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="OPERATIONAL NOTES:">
                          <Line cyan>Primary location: Cave Club (VIP lounge or office)</Line>
                          <Line cyan>Philosophy: Protect Ports from corporate takeover</Line>
                          <Line cyan>Leadership style: Respected, not feared</Line>
                          <Line yellow>Negotiation: Open to deals if mutually beneficial</Line>
                        </Section>
                        <Divider color="yellow" />
                        <Section title="RECENT COMMUNICATIONS:">
                          <Line neon>3 days ago: Meeting with "Charlie Sand"</Line>
                          <Line neon>5 days ago: Council discussion re: Alliansen threat</Line>
                          <Line neon>1 week ago: Negotiation with local fixer (successful)</Line>
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
