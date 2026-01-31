import {
  Line,
  Box,
  Section,
  Divider,
  KeyValue,
  DataTable,
} from '@terminal/TerminalComponents';
import {
  Safe,
  Message,
  PersonnelFile,
  Menu,
  EventLineup,
  CommunityBoard,
  IncidentLog,
  HoursBanner,
} from "@terminal/retcomdevice";

import StoneEelsAd from './ad';

// ============================================================================
// STONE EELS COMMANDS
// ============================================================================

export const STONE_EELS_COMMANDS = {
  "Cave Club": {
    content: (
      <StoneEelsAd />
    ),
    related_commands: {
      "Tonight's Entertainment": {
        content: (
          <EventLineup
            title="TONIGHT'S LINEUP"
            subtitle="Updated hourly"
            performances={[
              { time: "22:00", act: "PHASER/MOB", genre: "blackened chromecore" },
              { time: "23:30", act: "HeCcc", genre: "hexcore" },
              { time: "01:00", act: "I must leave", genre: "doompunk" },
              { time: "02:30", act: "Sirius Last Light", genre: "atmo-orbitalwave" },
            ]}
            djs={[
              { name: "DJ Scrap", style: "industrial techno" },
              { name: "SynthWave Sasha", style: "retro-future" },
              { name: "Bass_Driller", style: "sub-bass assault" },
            ]}
            additionalInfo={[
              { label: "Entry", value: "20¤ (includes 1 drink token)" },
              { label: "VIP Access", value: "By invitation only" },
              { label: "Stone Eels members", value: "Free entry" },
            ]}
            footer={`"No corps. No cops. No bullshit."`}
          />
        ),
      },

      "Bar Menu": {
        content: (
          <Menu
            title="CAVE CLUB BAR"
            subtitle="Cash or credchip - No corp cards"
            signType="cocktail"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (local)", price: "8¤" },
                  { name: "Synth-Whiskey", price: "12¤" },
                  { name: "NeoVodka", price: "10¤" },
                  { name: "Energy Drink", price: "6¤" },
                  { name: "Mystery Shot", price: "5¤" },
                  { name: "Water (free)", price: "0¤" },
                ],
              },
              {
                name: "SPECIALS",
                items: [
                  { name: "Stone Eel Special (don't ask what's in it)", price: "15¤" },
                  { name: "Ports Punch (strong, cheap, effective)", price: "10¤" },
                ],
              },
            ]}
            footer="⚠ Management not responsible for morning regrets"
          />
        ),
      },

      "Hours & Location": {
        content: (
          <HoursBanner
            name="CAVE CLUB"
            hours="20:00 - 06:00"
            days="Every Night"
            status="OPEN"
            statusColor="open"
            location="Ports District, Eastern Section"
            note="Best time: 23:00-03:00 (peak crowd, live music)"
          />
        ),
      },

      "Community Board": {
        content: (
          <CommunityBoard
            title="COMMUNITY POSTINGS"
            subtitle="Physical board scanned - recent posts"
            posts={[
              { category: "SCENE NEWS", text: "New band forming - need drummer with own kit", color: "pink" },
              { category: "SCENE NEWS", text: "Selling modified amp - 200¤ OBO", color: "pink" },
              { category: "SCENE NEWS", text: "Studio space available - split rent 4 ways", color: "pink" },
              { category: "SCENE NEWS", text: "Looking for vocals for industrial project", color: "pink" },
              { category: "SCENE NEWS", text: "Anti-gentrification protest this Saturday - meet at bodega", color: "pink" },
              { category: "WARNINGS", text: "Virid Vipers spotted near docks - watch your back", color: "red" },
              { category: "WARNINGS", text: "SecOps doing sweeps on weekends lately", color: "red" },
              { category: "WARNINGS", text: "Alliansen suits been asking questions about the club", color: "yellow" },
            ]}
            footer="Vibe: Tight community, fuck-the-corps attitude"
          />
        ),
      },

      access_internal_network: {
        password: {
          pw: "serpent",
          hint: "The Stone Eels gang symbol - what kind of creature?",
          hintStrength: 2
        },
        content: (
          <Message
            title="CAVE CLUB"
            message="STAFF ACCESS GRANTED"
            note="⚠ Internal network maintained by Stone Eels tech crew"
            theme="secure"
          />
        ),
        related_commands: {
          "Facility Layout": {
            password: {
              pw: "storm",
              hint: "What the club was before - a water overflow chamber",
              hintStrength: 2
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
                  <KeyValue label="Capacity" value="40-60 comfortable, ~100 packed" />
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

          "Security Systems": {
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

          "VIP Management": {
            password: {
              pw: "clearance",
              hint: "You don't have it",
              hintStrength: 3
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

          "Incident Reports": {
            content: (
              <IncidentLog
                title="INCIDENT LOG"
                timeframe="Last 7 days"
                incidents={[
                  {
                    timestamp: "3 DAYS AGO (22:45)",
                    type: "Questioning",
                    details: {
                      "Individual brought in": '"Charlie Sand"',
                      "Reason": "Asking questions about Lucky Flight Casino operations",
                      "Duration": "2 hours (holding room)",
                      "Resolution": "Information provided, released",
                      "Status": "No further action required",
                    }
                  },
                  {
                    timestamp: "5 DAYS AGO (23:15)",
                    type: "Territorial intrusion",
                    details: {
                      "Details": "Virid Vipers scout spotted outside entrance",
                      "Response": "Stone Eels mobilized (3 members)",
                      "Resolution": "Subject fled before engagement",
                      "Follow-up": "Increased perimeter patrols initiated",
                    }
                  },
                  {
                    timestamp: "6 DAYS AGO (01:30)",
                    type: "Patron disturbance",
                    details: {
                      "Details": "Intoxicated patrons fighting on main floor",
                      "Response": "Bouncers intervened (non-lethal)",
                      "Resolution": "Both parties ejected to street",
                      "Injuries": "Minor (bruises, no medical treatment required)",
                    }
                  },
                ]}
              />
            ),
          },

          "Back Office Safe": {
            password: {
              pw: "eels",
              hint: "The gang's name (plural)",
              hintStrength: 1
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
                  {
                    id: "cave_club_cash",
                    label: "Cash",
                    description: "1,200¤ (nightly bar receipts, mixed bills)",
                    value: 1200,
                    isCredits: true
                  },
                  {
                    id: "cave_club_documents",
                    label: "Documents",
                    description: "Property deed, business licenses, insurance"
                  },
                  {
                    id: "cave_club_weapons",
                    label: "Weapons",
                    description: "2 backup handguns (emergency stash, 9mm)"
                  },
                  {
                    id: "cave_club_product",
                    label: "Product samples",
                    description: "Quality control inventory (Stone Eels brand)"
                  },
                  {
                    id: "cave_club_keys",
                    label: "Keys",
                    description: "Access to 3 safe houses, storage units"
                  },
                ]}
                digital={[
                  {
                    id: "cave_club_credchip",
                    label: "Credchip",
                    description: "85¤ (petty cash fund, transferable)",
                    value: 85,
                    isCredits: true
                  },
                  {
                    id: "cave_club_coupon",
                    label: "Coupon code",
                    description: "CAVECLUB50 (50% off cover charge, expires in 1 month)"
                  },
                  {
                    id: "cave_club_event_app",
                    label: "App",
                    description: "Event Scheduler Pro (2¤ value, booking management)"
                  },
                  {
                    id: "cave_club_vip_list",
                    label: "Data file",
                    description: "VIP guest list with contact info (sellable to rivals for 60-100¤)"
                  },
                ]}
                notes="⚠ Safe alarm connected to security station (silent trigger) | Biometric access: Saša + 2 senior members"
              />
            ),
          },

          access_operations: {
            password: {
              pw: "alliansen",
              hint: "The megacorp trying to take over Ports",
              hintStrength: 2
            },
            content: (
              <Message
                title="STONE EELS OPERATIONS"
                message="GANG LEADERSHIP ACCESS GRANTED"
                note="⚠ Restricted operational data - Leadership only"
                theme="secure"
              />
            ),
            related_commands: {
              "Territory Status": {
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
                  </Box>
                ),
              },

              "Leadership Files": {
                password: {
                  pw: "sasa",
                  hint: "The gang leader's first name",
                  hintStrength: 3
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
                  "Saša": {
                    content: (
                      <PersonnelFile
                        employeeId="GANG-SE-001"
                        name="Saša"
                        age={38}
                        dob="Unknown (late 30s)"
                        position="Stone Eels Primary Leadership"
                        department="Gang Operations - Territory Control"
                        hireDate="~2067 (15+ years tenure)"
                        supervisor="None (autonomous leadership)"
                        clearanceLevel={5}
                        district="Ports (3rd generation resident)"
                        emergencyContact="Council of 5 senior members"
                        performance={95}
                        notes={[
                          "Rose through ranks via strategy, not violence",
                          "Reputation: Tactical thinking, keeps agreements, fair dealing",
                          "Philosophy: Protect Ports from corporate takeover",
                          "Master access to all Cave Club areas and safe houses",
                          "Extensive network: fixers, info brokers, medical, weapons",
                          "Protective of Ports residents (potential exploitable weakness)",
                        ]}
                        status="ACTIVE"
                      />
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
