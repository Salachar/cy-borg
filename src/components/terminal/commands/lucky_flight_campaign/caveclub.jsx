import {
  Line,
  Box,
  Section,
  Divider,
  DataTable,
} from '@terminal/TerminalComponents';
import {
  Safe,
  PersonnelFile,
  Menu,
  EventLineup,
  CommunityBoard,
  IncidentLog,
  HoursBanner,
  MaintenanceAccess,
  VIPList,
  Locked,
} from "@terminal/retcomdevice";

import StoneEelsAd from './caveclub_ad';

export const STONE_EELS_COMMANDS = {
  "Cave Club": {
    content: (
      <StoneEelsAd />
    ),
    related_commands: {
      "Tonight's Entertainment": {
        content: (
          <EventLineup
            venueName="Cave Club"
            date="Tonight"
            updateFrequency="Updated hourly"
            theme="club"
            performances={[
              { time: "22:00", artist: "PHASER/MOB", genre: "blackened chromecore" },
              { time: "23:30", artist: "HeCcc", genre: "hexcore" },
              { time: "01:00", artist: "I must leave", genre: "doompunk" },
              { time: "02:30", artist: "Sirius Last Light", genre: "atmo-orbitalwave" },
            ]}
            djs={[
              { name: "DJ Scrap", genre: "industrial techno" },
              { name: "SynthWave Sasha", genre: "retro-future" },
              { name: "Bass_Driller", genre: "sub-bass assault" },
            ]}
            entry={{
              price: "20¤ (includes 1 drink token)",
              vipAccess: "By invitation only",
              memberBenefit: "Stone Eels members - Free entry"
            }}
            tagline="No corps. No cops. No bullshit."
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
            id="cave-club-board"
            boardName="COMMUNITY BOARD"
            location="Cave Club - Main floor near entrance"
            posts={[
              { text: "New band forming - need drummer with own kit", color: "pink" },
              { text: "Selling modified amp - 200¤ OBO", color: "pink" },
              { text: "Studio space available - split rent 4 ways", color: "pink" },
              { text: "Looking for vocals for industrial project", color: "pink" },
              { text: "Anti-gentrification protest this Saturday - meet at bodega", color: "pink" },
              { text: "Virid Vipers spotted near docks - watch your back", color: "red" },
              { text: "SecOps doing sweeps on weekends lately", color: "red" },
              { text: "Alliansen suits been asking questions about the club", color: "yellow" },
            ]}
            services={[
              "Band equipment rental - ask at bar",
              "Studio time bookings - talk to DJ Scrap",
            ]}
            vibe="Tight community, fuck-the-corps attitude"
          />
        ),
      },

      "Internal Network [STAY OUT!]": {
        // password: {
        //   pw: "serpent",
        //   hint: "The Stone Eels gang symbol - what kind of creature?",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="CAVE CLUB NETWORK" />
        // },
        content: (
          <MaintenanceAccess
            title="[CAVE CLUB INTERNAL NETWORK]"
            deviceModel="Stone Eels Secure Network"
            deviceId="CAVE-NET-MAIN"
            firmwareVersion="v3.2.1"
            systemStatus="OPERATIONAL"
            uptime="234 days, 18 hours"
            notes={[
              "Network maintained by Stone Eels tech crew",
              "Security level: Gang-grade encryption",
              "Access Level: Staff and trusted members",
              "Cameras, facility data, and operational files available",
              "Leadership files require elevated credentials"
            ]}
          />
        ),
        related_commands: {
          "Security Systems": {
            content: (
              <MaintenanceAccess
                title="[SECURITY SYSTEMS]"
                deviceModel="Cave Club Security Network"
                deviceId="SEC-SYS-MAIN"
                firmwareVersion="v4.0.3"
                systemStatus="OPERATIONAL"
                uptime="156 days, 9 hours"
                notes={[
                  "Main floor: Full camera coverage (4 cameras)",
                  "VIP areas: NO cameras (privacy policy)",
                  "Staff presence: 1-2 bouncers (entrance), 1 guard (stairs), 2 security (upper level)",
                  "Emergency response: Panic button at security station",
                  "Philosophy: Moderate presence, heavy response if needed"
                ]}
              >
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
              </MaintenanceAccess>
            ),
          },

          "VIP Management": {
            // password: {
            //   pw: "clearance",
            //   hint: "You don't have it",
            //   difficulty: "expert",
            //   content: <Locked theme="terminal" title="VIP GUEST SYSTEM" />
            // },
            content: (
              <VIPList
                eventName="Tonight's VIP Guests"
                location="Cave Club - Upper Level"
                date="Current Session"
                vips={[
                  {
                    name: "Gibos",
                    alias: "cyborg grandpa",
                    status: "ARRIVED",
                    notes: "Regular patron. Lucky Flight casino winnings. Extensive cyberware. Mobility assistance required (leg actuators malfunctioning). Drinking: Stone Eel Special (4th)",
                    clearance: "VIP",
                    arrivalTime: "21:30"
                  },
                  {
                    name: "Saša",
                    status: "ARRIVED",
                    notes: "Stone Eels leadership - always present on busy nights",
                    clearance: "STAFF"
                  },
                  {
                    name: "Marcus 'The Wire' Chen",
                    alias: "info broker",
                    status: "ARRIVED",
                    notes: "Regular fixer, buying rounds for contacts. Cousin to DJ Scrap.",
                    clearance: "VIP",
                    arrivalTime: "22:15"
                  },
                  {
                    name: "PHASER/MOB",
                    alias: "tonight's headliner",
                    status: "EXPECTED",
                    notes: "Blackened chromecore band. Backstage prep before 22:00 set.",
                    clearance: "GUEST",
                    arrivalTime: "21:45"
                  },
                  {
                    name: "Zara Khamidova",
                    alias: "courier",
                    status: "ARRIVED",
                    notes: "Batu's niece. Freelance courier. Checking in with gang contacts.",
                    clearance: "GUEST",
                    arrivalTime: "23:00"
                  },
                ]}
              >
                <Divider />
                <Line pink>"Cave Club is neutral ground. Everyone knows this."</Line>
                <Line yellow>Privacy policy: No cameras in VIP areas</Line>
                <Line yellow>Neutral ground rules: Violence = permanent ban + consequences</Line>
              </VIPList>
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
                      "Individual brought in": "Charlie Sand",
                      "Reason": "Asking questions about Lucky Flight Casino operations",
                      "Location": "Detained at Batu's Bodega, brought to Cave Club",
                      "Duration": "2 hours (holding room)",
                      "Resolution": "Information exchange completed, individual released",
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
              >
                <Divider />
                <Line cyan>Security posture: Moderate but responsive</Line>
                <Line yellow>Most incidents resolved without escalation</Line>
              </IncidentLog>
            ),
          },

          "Back Office Safe": {
            // password: {
            //   pw: "eels",
            //   hint: "The gang's name (plural)",
            //   difficulty: "expert",
            //   content: <Locked theme="safe" title="MANAGEMENT SAFE" />
            // },
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

          "Operations": {
            // password: {
            //   pw: "alliansen",
            //   hint: "The megacorp trying to take over Ports",
            //   difficulty: "medium",
            //   content: <Locked theme="terminal" title="GANG OPERATIONS" />
            // },
            content: (
              <MaintenanceAccess
                title="[STONE EELS OPERATIONS]"
                deviceModel="Gang Leadership Terminal"
                deviceId="GANG-OPS-MAIN"
                firmwareVersion="v5.0.1"
                systemStatus="OPERATIONAL"
                uptime="312 days, 6 hours"
                notes={[
                  "Access Level: Gang leadership only",
                  "Territory: Ports district (eastern section)",
                  "Estimated members: ~100 total (~20-30 active daily)",
                  "Established: 8 years ago (2074)",
                  "Current threats: Virid Vipers, Alliansen Inc., SecOps patrols",
                  "Philosophy: Protect Ports from corporate takeover"
                ]}
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

              "Personnel Files": {
                // password: {
                //   pw: "serpent",
                //   hint: "The Stone Eels gang symbol - what kind of creature?",
                //   difficulty: "medium",
                //   content: <Locked theme="terminal" title="PERSONNEL DATABASE" />
                // },
                content: (
                  <MaintenanceAccess
                    title="[PERSONNEL FILES]"
                    deviceModel="Gang Personnel Database"
                    deviceId="GANG-HR-01"
                    firmwareVersion="v2.5.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Command structure: Primary leader (Saša) + Council of 5",
                      "Enforcers: 8-10 trusted veterans",
                      "General members: ~20-30 regular operatives",
                      "Security staff: Bouncers, guards, floor watchers",
                      "Support staff: Bar, DJ, maintenance crew"
                    ]}
                  >
                    <Section title="PERSONNEL CATEGORIES:">
                      <Line cyan>→ Leadership (Saša + Council)</Line>
                      <Line cyan>→ Security (Bouncers, guards)</Line>
                      <Line cyan>→ Enforcers (Trusted veterans)</Line>
                      <Line cyan>→ General Members (Regular operatives)</Line>
                      <Line cyan>→ Support Staff (Bar, entertainment)</Line>
                    </Section>
                  </MaintenanceAccess>
                ),
                related_commands: {
                  "Saša": {
                    content: (
                      <PersonnelFile
                        employeeId="GANG-SE-001"
                        name="Saša"
                        age={38}
                        position="Stone Eels Primary Leadership"
                        department="Gang Operations - Territory Control"
                        hireDate="~2067 (15+ years tenure)"
                        supervisor="None (autonomous leadership)"
                        clearanceLevel={5}
                        district="Ports (3rd generation resident)"
                        emergencyContact="Council of 5 senior members"
                        performance={95}
                        notes={[
                          "Calm, calculating, intelligent - speaks deliberately",
                          "Philosophy: Protect Ports from corporate takeover",
                          "Reputation: Keeps agreements, fair but ruthless when necessary",
                          "Values territory and people over profit",
                          "Extensive network: fixers, info brokers, medical, weapons contacts",
                          "Master access to all Cave Club areas and safe houses",
                          "Known weakness: Protective of Ports civilian residents",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "Kaz 'Brick' Volkov": {
                    content: (
                      <PersonnelFile
                        employeeId="GANG-SE-008"
                        name="Kaz 'Brick' Volkov"
                        age={34}
                        position="Head Bouncer / Security Lead"
                        department="Cave Club Security"
                        hireDate="2070 (12 years)"
                        supervisor="Saša"
                        clearanceLevel={3}
                        district="Ports"
                        emergencyContact="Nina Volkov (sister, Alliansen security)"
                        performance={89}
                        notes={[
                          "Primary position: Entrance checkpoint bouncer",
                          "Responsibilities: Weapon checks, face recognition, crowd control",
                          "Build: Large, intimidating presence",
                          "Style: Professional but firm - follows protocols strictly",
                          "Known for: Remembering faces, spotting concealed weapons",
                          "Family connection: Sister works at Alliansen warehouse (potential intel)",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },

                  "Rina 'Switch' Pak": {
                    content: (
                      <PersonnelFile
                        employeeId="GANG-SE-014"
                        name="Rina 'Switch' Pak"
                        age={27}
                        position="Security Station Operator"
                        department="Cave Club Security - Surveillance"
                        hireDate="2078 (4 years)"
                        supervisor="Saša"
                        clearanceLevel={3}
                        district="Ports"
                        emergencyContact="Stone Eels Council"
                        performance={92}
                        notes={[
                          "Primary position: Upper level Security Area station",
                          "Responsibilities: Camera monitoring, access control to private booths",
                          "Tech skills: Above average - handles surveillance systems",
                          "Tactical role: Checkpoint before VIP areas",
                          "Known for: Quick response times, excellent situational awareness",
                          "Shift: Usually night hours (20:00-04:00)",
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
