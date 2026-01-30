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
  Menu,
  HoursBanner,
  PersonnelFile,
  Safe,
  IncidentLog,
  VendingMachine,
  CoffeeMachine,
  Camera,
  LiveCameraFeed,
  Extractable,
  NewsTicker,
} from '@terminal/retcomdevice';

const DOC_JOY_CLINIC_COMMANDS = {
  "doc_joy_clinic": {
    content: (
      <>
        <PublicPortal
          name="Doc Joy's Clinic"
          tagline="Fast fixes, no questions asked"
          network="DOCJOY_PUBLIC"
          signalStrength="strong"
          status="OPEN 24/7"
          statusColor="open"
          notes={[
            "Emergency trauma care available",
            "Chrome installation & repairs",
            "Discretion guaranteed"
          ]}
          theme="casual"
        />
      </>
    ),
    related_commands: {
      "services": {
        content: (
          <Menu
            title="DOC JOY'S SERVICES"
            subtitle="SvÃ¤rta District Reaperdoc"
            signType="coffee"
            categories={[
              {
                name: "EMERGENCY SERVICES",
                items: [
                  { name: "Trauma Stabilization", price: "500¤" },
                  { name: "Combat Stim Pack", price: "200¤" },
                  { name: "Blood Transfusion", price: "300¤" },
                  { name: "Organ Patch Job", price: "800¤" }
                ]
              },
              {
                name: "CHROME WORK",
                items: [
                  { name: "Chrome Installation", price: "2,000¤+" },
                  { name: "Chrome Repair", price: "500¤+" },
                  { name: "Chrome Removal", price: "1,500¤" },
                  { name: "Diagnostic Scan", price: "100¤" }
                ]
              },
              {
                name: "SPECIALTY SERVICES",
                items: [
                  { name: "Reaper Jobs (Contract Work)", price: "Negotiable" },
                  { name: "No-Records Treatment", price: "+50%" },
                  { name: "House Calls", price: "Triple Rate" }
                ]
              }
            ]}
            footer="Payment up front. Cash preferred. No corp insurance."
          />
        )
      },

      "hours": {
        content: (
          <HoursBanner
            name="Doc Joy's Clinic"
            hours="24/7"
            days="Every Day"
            status="OPEN"
            statusColor="open"
            location="SvÃ¤rta District, Underneath the old metro bridge"
            note="Emergency line: +67-555-FIXME"
          />
        )
      },

      "waiting_room": {
        content: (
          <>
            <Line cyan large bold>[WAITING ROOM - PUBLIC ACCESS]</Line>
            <Line smoke>Grimy but functional. Smells of antiseptic and desperation.</Line>
            <Divider />

            <Section title="AVAILABLE TERMINALS">
              <Line neon>• News ticker (killmatch feeds, city updates)</Line>
              <Line neon>• Vending machine (snacks, stims, basic meds)</Line>
              <Line neon>• Coffee machine (surprisingly high-end)</Line>
            </Section>

            <Box color="yellow">
              <Line bold>NOTICE:</Line>
              <Line>Weapons must be peace-bonded or checked at desk.</Line>
              <Line>Violent behavior will be met with violence.</Line>
              <Line>You have been warned.</Line>
            </Box>
          </>
        ),
        related_commands: {
          "news_ticker": {
            content: (
              <NewsTicker
                title="CY-CITY LIVE FEEDS"
                updateFrequency="Updated every 30 minutes"
                items={[
                  { text: "Steel Jackhammer's recovery party enters day 3 - no signs of stopping", category: "KILLMATCH" },
                  { text: "Alliansen Inc. stock up 12% after new chrome line announcement", category: "CORPORATE" },
                  { text: "Five dead in Ports District gang clash - Virid Vipers claim responsibility", category: "CRIME" },
                  { text: "Upcoming match: Gargoyle vs Steel Jackhammer - odds favor Gargoyle 3:1", category: "KILLMATCH" },
                  { text: "SvÃ¤rta power outages continue - residents advised to use backup generators", category: "LOCAL" },
                  { text: "Thugger's 11-month win streak continues - new record in heavyweight division", category: "KILLMATCH" }
                ]}
              />
            )
          },

          "vending_machine": {
            content: (
              <VendingMachine
                id="vend-docjoy-waiting"
                location="Doc Joy's Clinic - Waiting Room"
                items={[
                  { slot: "A1", name: "Synth-Caf", price: 8, stock: 15 },
                  { slot: "A2", name: "Protein Bar", price: 6, stock: 22 },
                  { slot: "A3", name: "Energy Drink", price: 10, stock: 8 },
                  { slot: "B1", name: "Painkillers (OTC)", price: 15, stock: 12 },
                  { slot: "B2", name: "Bandages", price: 20, stock: 9 },
                  { slot: "B3", name: "Stim-Lite", price: 35, stock: 4 },
                  { slot: "C1", name: "Cigarettes", price: 12, stock: 18 },
                  { slot: "C2", name: "Noodle Cup", price: 8, stock: 14 }
                ]}
                acceptsCash={true}
                acceptsCard={true}
                status="OPERATIONAL"
              />
            )
          },

          "coffee_machine": {
            content: (
              <>
                <CoffeeMachine
                  model="BrewLux Executive 9000"
                  location="Doc Joy's Clinic - Waiting Room"
                  status="OPERATIONAL"
                  beverages={[
                    { name: "Espresso", price: 0, available: true },
                    { name: "Cappuccino", price: 0, available: true },
                    { name: "Black Coffee", price: 0, available: true },
                    { name: "Synth-Latte", price: 0, available: true }
                  ]}
                  maintenance={{
                    lastService: "Nov 10, 2067",
                    nextService: "Dec 10, 2067"
                  }}
                />

                <Divider />

                <Box color="pink">
                  <Line bold>⚠ MACHINE ANOMALY DETECTED</Line>
                  <Line>This is an absurdly expensive coffee machine for a street clinic.</Line>
                  <Line>BrewLux Executive 9000 retail value: 8,000¤</Line>
                  <Line smoke small>Someone really likes their coffee...</Line>
                </Box>

                <Divider />

                <Line smoke small>Upon closer inspection, there's a small maintenance panel...</Line>
              </>
            ),
            related_commands: {
              "maintenance_panel": {
                password: {
                  pw: "brewlux",
                  hint: "Written on a strip of tape on the back of the machine",
                  hintStrength: 1
                },
                content: (
                  <>
                    <Line cyan large bold>[BREWLUX MAINTENANCE PANEL]</Line>
                    <Divider />

                    <Line smoke>The panel pops open. Inside you find:</Line>
                    <Line neon>• Standard maintenance logs</Line>
                    <Line neon>• Water filter status</Line>
                    <Line neon>• A small hidden compartment behind the circuit board</Line>

                    <Divider />

                    <Box color="yellow">
                      <Line bold>HIDDEN COMPARTMENT CONTENTS:</Line>
                      <Line>Someone's been using this as a dead drop.</Line>
                    </Box>

                    <Divider />

                    <Line smoke small>Doc Joy's emergency stash? Or someone else's?</Line>
                  </>
                )
              }
            }
          }
        }
      },

      "access_internal": {
        password: {
          pw: "reaper_work",
          hint: "What Doc Joy calls his specialty contract jobs (check services menu)",
          hintStrength: 2
        },
        content: (
          <>
            <Message
              title="Doc Joy's Clinic"
              message="STAFF ACCESS GRANTED"
              note="Internal Network: CLINIC_SECURE | Node: OFFICE-01"
              theme="casual"
            />
          </>
        ),
        related_commands: {
          "active_contract": {
            content: (
              <>
                <Line cyan large bold>[ACTIVE REAPER CONTRACT RR-2067-1104]</Line>
                <Line smoke>Status: ACCEPTED | Deadline: 36 hours from acceptance</Line>
                <Divider />

                <Box color="cyan">
                  <KeyValue label="Client" value="Doc Joy - SvÃ¤rta Reaperdoc" />
                  <KeyValue label="Contract Type" value="Chrome Repossession (Reaper Job)" />
                  <KeyValue label="Base Payment" value="5,000¤" valueColor="yellow" />
                  <KeyValue label="Bonus" value="1 Cybertech upgrade (choice of 3)" valueColor="yellow" />
                  <KeyValue label="Time Limit" value="36 hours" valueColor="red" />
                </Box>

                <Divider />

                <Section title="TARGET SPECIFICATIONS">
                  <Line yellow bold>TARGET ITEM: Alliansen Inc. Chrome Legs (Prototype)</Line>
                  <Line>• Model: Classified ("State-of-the-art" per press release)</Line>
                  <Line>• Current User: Steel Jackhammer (Killmatch athlete)</Line>
                  <Line>• Installation Date: ~2 weeks ago (post-Krok fight)</Line>
                  <Line>• Condition Required: INTACT - Minimal damage</Line>
                </Section>

                <Warning>Pay deduction: -500¤ per point of damage to merchandise</Warning>

                <Divider />

                <Section title="TARGET INTEL: STEEL JACKHAMMER">
                  <Line neon>• Location: Central District, Tower Block 7, Unit 4201</Line>
                  <Line neon>• Current Activity: "Recovery party" (ongoing, day 3+)</Line>
                  <Line neon>• Security: 2 guards at penthouse entrance</Line>
                  <Line neon>• Access: Party guests coming/going constantly</Line>
                  <Line neon>• Status: Likely intoxicated, distracted</Line>
                </Section>

                <Box color="yellow">
                  <Line bold>BACKSTORY:</Line>
                  <Line>Three weeks ago, Doc Joy's clinic was broken into. A chrome leg prototype was stolen from the research lab. Security footage was corrupted. Two weeks ago, Steel Jackhammer appeared on feeds with identical chrome legs, claiming they were "state-of-the-art Alliansen replacements" after his Krok fight injuries.</Line>
                  <Line top>Doc Joy believes Alliansen bought the stolen design and is claiming it as their own development. He wants his property back.</Line>
                </Box>

                <Divider />

                <Section title="EXTRACTION REQUIREMENTS">
                  <Line red bold>CRITICAL PROCEDURE:</Line>
                  <Line>1. Target must be fully incapacitated (unconscious/restrained)</Line>
                  <Line>2. DR14 Knowledge test required for safe removal</Line>
                  <Line>3. Failure causes D8 damage = payment reduction</Line>
                  <Line>4. Delivery to clinic within 36-hour deadline</Line>
                </Section>

                <Divider />

                <Section title="ADDITIONAL INTEL">
                  <Line smoke>• Deeper net search (DR14) reveals uncut interview with penthouse tour</Line>
                  <Line smoke>• Multiple killmatch VIPs confirmed at party (dangerous if discovered)</Line>
                  <Line smoke>• Guards check for heavy weapons but let party guests through</Line>
                  <Line smoke>• Two gene-spliced big cats present in penthouse (confined to dining room)</Line>
                </Section>
              </>
            ),
            related_commands: {
              "payment_options": {
                content: (
                  <>
                    <Line cyan large bold>[CONTRACT PAYMENT OPTIONS]</Line>
                    <Line smoke>Available upon successful delivery of intact chrome legs</Line>
                    <Divider />

                    <Box color="neon">
                      <Line bold>BASE PAYMENT: 5,000¤</Line>
                      <Line>Cash, credstick, or crypto - your choice</Line>
                    </Box>

                    <Divider />

                    <Section title="CYBERTECH UPGRADE (CHOOSE 1)">
                      <Box color="yellow">
                        <Line bold>OPTION 1: Reflex Boosters</Line>
                        <Line>• +2 to initiative rolls</Line>
                        <Line>• Neural acceleration system</Line>
                        <Line>• Improved reaction time in combat situations</Line>
                        <Line smoke small>Value: ~3,000¤</Line>
                      </Box>

                      <Box color="yellow">
                        <Line bold>OPTION 2: Dermal Plating</Line>
                        <Line>• Armor: -D2 damage reduction</Line>
                        <Line>• Subdermal titanium-ceramic weave</Line>
                        <Line>• Minimal external appearance change</Line>
                        <Line smoke small>Value: ~4,000¤</Line>
                      </Box>

                      <Box color="yellow">
                        <Line bold>OPTION 3: Neural Interface Jack</Line>
                        <Line>• Advantage on tech-related tests</Line>
                        <Line>• Direct brain-computer connection</Line>
                        <Line>• Faster hacking and system access</Line>
                        <Line smoke small>Value: ~3,500¤</Line>
                      </Box>
                    </Section>

                    <Divider />

                    <Box color="red">
                      <Line bold>PAYMENT DEDUCTIONS:</Line>
                      <Line>• Each point of damage to legs: -500¤</Line>
                      <Line>• Missed 36h deadline: -1,000¤ + no cybertech bonus</Line>
                      <Line>• Legs destroyed/unretrievable: Contract void, no payment</Line>
                      <Line>• Doc Joy killed during job: Obviously no payment</Line>
                    </Box>
                  </>
                )
              },

              "net_search_results": {
                content: (
                  <>
                    <Line cyan large bold>[NET SEARCH: "Steel Jackhammer"]</Line>
                    <Line smoke>Public records, social feeds, news archives</Line>
                    <Divider />

                    <Box color="pink">
                      <Line bold>★ STEEL JACKHAMMER - KILLMATCH PROFILE ★</Line>
                      <Line>Rising heavyweight division star</Line>
                    </Box>

                    <Divider />

                    <DataTable data={[
                      { label: "Real Name", value: "Unknown (stage name only)" },
                      { label: "Division", value: "Heavyweight Killmatch" },
                      { label: "Current Rank", value: "#18 (climbing)" },
                      { label: "Sponsor", value: "Alliansen Inc." },
                      { label: "Signature Move", value: "Jackhammer Punch (chained attacks)" },
                      { label: "Record", value: "24 wins, 8 losses" }
                    ]} />

                    <Divider />

                    <Section title="RECENT VIRAL MOMENT">
                      <Line neon bold>Fight vs. Five Kroks (3 weeks ago):</Line>
                      <Line>• Both legs ripped off mid-match (graphic footage)</Line>
                      <Line>• Continued fighting for 30 seconds before collapse</Line>
                      <Line>• 50M+ views across feeds</Line>
                      <Line>• Declared "Warrior of the Week" by KILL!KILL!KILL! feed</Line>
                    </Section>

                    <Divider />

                    <Section title="RECENT NEWS">
                      <Line yellow>Nov 1: "Steel Jackhammer receives state-of-the-art replacement legs from sponsor Alliansen Inc."</Line>
                      <Line yellow>Nov 5: "Jackhammer's recovery party hits 48+ hours - shows no signs of stopping"</Line>
                      <Line yellow>Nov 12: "Upcoming bout: Steel Jackhammer vs Gargoyle - Odds favor Gargoyle 3:1"</Line>
                    </Section>

                    <Divider />

                    <Box color="cyan">
                      <Line bold>CURRENT LOCATION:</Line>
                      <Line>Central District, Tower Block 7, Unit 4201 (Penthouse)</Line>
                      <Line>Address: 2847 Central Plaza, Southeast Corner Unit</Line>
                      <Line smoke small>Party ongoing - guests constantly arriving/leaving</Line>
                    </Box>

                    <Divider />

                    <Line smoke small>Social media shows constant party updates, VIP guests, heavy drug use...</Line>
                  </>
                )
              }
            }
          },

          "security_incident": {
            password: {
              pw: "incident_2067",
              hint: "Password format: incident_[current year]",
              hintStrength: 2
            },
            content: (
              <IncidentLog
                incidents={[
                  {
                    date: "Oct 28, 2067",
                    time: "03:47",
                    type: "FORCED ENTRY - THEFT",
                    location: "Research Lab (Basement Level)",
                    description: "Break-in detected by motion sensors. One chrome leg prototype stolen from secure storage. Lock bypassed professionally - no forced entry damage. Security camera footage corrupted (professional-grade malware). No witnesses. Estimated value: 45,000¤ (prototype development costs).",
                    reportedBy: "Doc Joy",
                    resolved: false
                  },
                  {
                    date: "Oct 28, 2067",
                    time: "04:30",
                    type: "INVESTIGATION OPENED",
                    location: "Clinic - All Areas",
                    description: "Local security contractor unable to recover footage or identify intrusion method. Suspect had high-level tech skills. Prototype was custom experimental chrome leg system - advanced servo-hydraulics, enhanced strength and speed. Design was unique to Doc Joy's research.",
                    reportedBy: "Doc Joy",
                    resolved: false
                  },
                  {
                    date: "Nov 2, 2067",
                    time: "14:20",
                    type: "INTELLIGENCE UPDATE",
                    location: "External Source",
                    description: "Anonymous tip: Identical chrome leg design spotted on Steel Jackhammer in viral killmatch footage. Specifications match stolen prototype exactly. Alliansen Inc. press release claims 'proprietary new design' developed in-house. Timing suspicious - two weeks after theft, immediately after Jackhammer's leg loss.",
                    reportedBy: "Anonymous Contact",
                    resolved: false
                  },
                  {
                    date: "Nov 14, 2067",
                    time: "09:15",
                    type: "REAPER CONTRACT ISSUED",
                    location: "Clinic Office",
                    description: "Unable to pursue legal action (no proof, Alliansen Inc. has legal team). Doc Joy issuing reaper contract for physical recovery of chrome legs from Steel Jackhammer. Evidence suggests Alliansen acquired stolen design through third-party, installed on sponsored athlete. Recovery mission authorized.",
                    reportedBy: "Doc Joy",
                    resolved: false
                  }
                ]}
              />
            ),
            related_commands: {
              "evidence_analysis": {
                content: (
                  <>
                    <Line cyan large bold>[INCIDENT ANALYSIS]</Line>
                    <Line smoke>Compiled by Doc Joy</Line>
                    <Divider />

                    <Section title="THEFT PROFILE">
                      <Line red bold>PROFESSIONAL OPERATION:</Line>
                      <Line>• No forced entry - lock bypassed cleanly</Line>
                      <Line>• Security footage wiped with malware (not physical damage)</Line>
                      <Line>• Knew exactly what to steal - ignored other valuable chrome</Line>
                      <Line>• Occurred during clinic's lowest activity period (3-4 AM)</Line>
                    </Section>

                    <Divider />

                    <Section title="TIMELINE ANALYSIS">
                      <Line yellow>Oct 28: Clinic broken into, prototype stolen</Line>
                      <Line yellow>Oct 29: Steel Jackhammer's viral Krok fight (legs ripped off)</Line>
                      <Line yellow>Oct 30: Alliansen announces "new prototype" for Jackhammer</Line>
                      <Line yellow>Nov 1: Jackhammer appears with new legs - identical design</Line>
                      <Line yellow>Nov 2: Anonymous tip confirms design match</Line>
                    </Section>

                    <Box color="red">
                      <Line bold>CONCLUSION:</Line>
                      <Line>Timing too convenient. Either:</Line>
                      <Line>1. Alliansen hired thief, knew about Krok fight injuries in advance</Line>
                      <Line>2. Krok fight was arranged to create need for "new prototype"</Line>
                      <Line>3. Opportunistic theft, design sold to Alliansen after Krok fight</Line>
                      <Line top>Regardless: Doc Joy's design is on Steel Jackhammer's legs.</Line>
                    </Box>

                    <Divider />

                    <Line smoke>Legal action impossible - Alliansen claims independent development.</Line>
                    <Line smoke>No proof of theft connection. Corporate lawyers would bury any case.</Line>
                    <Line smoke>Only option: Physical recovery via reaper contract.</Line>
                  </>
                )
              }
            }
          },

          "personnel": {
            content: (
              <>
                <Line cyan large bold>[PERSONNEL RECORDS]</Line>
                <Line smoke>Clinic staff and contractors</Line>
                <Divider />

                <Section title="CURRENT STAFF">
                  <Line neon>• Doc Joy (Owner/Lead Surgeon)</Line>
                  <Line neon>• 2 Nurses (Part-time, rotating)</Line>
                  <Line neon>• 1 Receptionist (Day shift)</Line>
                  <Line neon>• Various reaper contractors (As needed)</Line>
                </Section>
              </>
            ),
            related_commands: {
              "doc_joy": {
                content: (
                  <PersonnelFile
                    employeeId="OWNER-001"
                    name="Doc Joy"
                    position="Owner / Lead Surgeon"
                    department="Medical Services"
                    hireDate="Clinic Founded: 2059"
                    supervisor="Self-Employed"
                    clearanceLevel="OWNER"
                    location="SvÃ¤rta District Clinic"
                    email="contact@docjoy.cy.net"
                    phone="+67-555-FIXME"
                    status="ACTIVE"
                    notes={[
                      "Licensed reaperdoc - operates in legal gray area",
                      "Specializes in chrome installation and emergency trauma",
                      "Known for discretion and 'no questions asked' policy",
                      "Excellent reputation in SvÃ¤rta underground community",
                      "Maintains connections with black market chrome suppliers",
                      "Recent victim of industrial espionage (prototype theft)",
                      "Currently pursuing reaper contract for design recovery"
                    ]}
                  />
                )
              }
            }
          },

          // "medical_supplies": {
          //   password: {
          //     pw: "pharmacy_2067",
          //     hint: "Standard medical storage password format: pharmacy_[year]",
          //     hintStrength: 2
          //   },
          //   content: (
          //     <Safe
          //       id="safe-docjoy-medical"
          //       model="MedVault Pro-3000"
          //       location="Doc Joy's Clinic - Supply Room"
          //       owner="Doc Joy"
          //       security="Biometric + PIN"
          //       lastAccess="8 hours ago (routine restock)"
          //       physical={[
          //         { item: "Faceblock (3 doses)", desc: "Facial recognition blocker", value: 450 },
          //         { item: "Red-juice (2 doses)", desc: "Emergency healing stimulant", value: 600 },
          //         { item: "Vurt (1 dose)", desc: "High-grade hallucinogen", value: 300 },
          //         { item: "Painkillers (Medical grade)", desc: "20 doses", value: 200 },
          //         { item: "Blackout (1 dose)", desc: "Sedative/anesthetic", value: 150 }
          //       ]}
          //       digital={[
          //         { item: "Medical Licenses", desc: "Doc Joy's credentials & certifications" },
          //         { item: "Patient Records", desc: "Encrypted database (HIPAA-compliant... mostly)" },
          //         { item: "Supplier Contacts", desc: "Black market chrome and pharma sources" },
          //         { item: "Crypto Wallet", desc: "Emergency funds access", value: 2500 }
          //       ]}
          //       notes="Emergency supplies kept on hand. Doc Joy occasionally 'loans' items to trusted contractors before dangerous jobs."
          //     />
          //   )
          // },

          "clinic_security": {
            password: {
              pw: "watch_over",
              hint: "Two words: What security cameras do to a location",
              hintStrength: 2
            },
            content: (
              <>
                <Line cyan large bold>[CLINIC SECURITY SYSTEM]</Line>
                <Line smoke>4-camera setup covering entry points and critical areas</Line>
                <Divider />

                <DataTable data={[
                  { label: "System Status", value: "ONLINE" },
                  { label: "Recording", value: "24/7 to local storage" },
                  { label: "Retention", value: "30 days (overwrite)" },
                  { label: "Motion Detection", value: "ENABLED" },
                  { label: "Remote Access", value: "Disabled (after break-in)" }
                ]} />

                <Divider />

                <Section title="CAMERA LOCATIONS">
                  <Line neon>• CAM-01: Front entrance & waiting room</Line>
                  <Line neon>• CAM-02: Rear entrance & supply room</Line>
                  <Line neon>• CAM-03: Main surgical suite</Line>
                  <Line neon>• CAM-04: Research lab (basement)</Line>
                </Section>

                <Box color="red">
                  <Line bold>SECURITY NOTE:</Line>
                  <Line>Remote access disabled after Oct 28 break-in. All footage corrupted during theft. Security upgraded but paranoia remains high.</Line>
                </Box>
              </>
            ),
            related_commands: {
              "cam_01": {
                content: (
                  <Camera
                    cameraId="CAM-01"
                    location="Front Entrance & Waiting Room"
                    status="online"
                    resolution="1920x1080"
                    nightVision={true}
                    motionDetection={true}
                    coverage="180° view of entrance, reception desk, and waiting area"
                    lastMotion="2 minutes ago"
                    recording={true}
                  />
                ),
                related_commands: {
                  "live_feed": {
                    password: {
                      pw: "live_cam_01",
                      hint: "Format: live_[camera_id] in lowercase",
                      hintStrength: 2
                    },
                    content: (
                      <>
                        <Line cyan large bold>[CAM-01 LIVE FEED]</Line>
                        <Line smoke>Front Entrance & Waiting Room - Real-time</Line>
                        <Divider />

                        <Box color="cyan">
                          <Line bold>CURRENT VIEW:</Line>
                          <Line>• 3 people in waiting room (typical for this hour)</Line>
                          <Line>• Receptionist at desk, working on terminal</Line>
                          <Line>• One person getting coffee from the fancy machine</Line>
                          <Line>• Vending machine operational, well-stocked</Line>
                          <Line>• News ticker scrolling killmatch updates</Line>
                        </Box>

                        <Divider />

                        <Line smoke small>Feed quality: Good. No suspicious activity.</Line>
                      </>
                    )
                  }
                }
              },

              "cam_02": {
                content: (
                  <Camera
                    cameraId="CAM-02"
                    location="Rear Entrance & Supply Room"
                    status="online"
                    resolution="1920x1080"
                    nightVision={true}
                    motionDetection={true}
                    coverage="Rear door, supply room entrance, loading area"
                    lastMotion="15 minutes ago"
                    recording={true}
                  />
                ),
                related_commands: {
                  "live_feed": {
                    password: {
                      pw: "live_cam_02",
                      hint: "Format: live_[camera_id] in lowercase",
                      hintStrength: 2
                    },
                    content: (
                      <>
                        <Line cyan large bold>[CAM-02 LIVE FEED]</Line>
                        <Line smoke>Rear Entrance & Supply Room - Real-time</Line>
                        <Divider />

                        <Box color="cyan">
                          <Line bold>CURRENT VIEW:</Line>
                          <Line>• Rear entrance locked (red indicator light)</Line>
                          <Line>• Supply room door closed</Line>
                          <Line>• Small loading area empty</Line>
                          <Line>• Motion detected 15min ago: Doc Joy entering supply room</Line>
                        </Box>

                        <Divider />

                        <Line smoke small>Feed quality: Good. Area secure.</Line>
                      </>
                    )
                  }
                }
              },

              "cam_03": {
                content: (
                  <Camera
                    cameraId="CAM-03"
                    location="Main Surgical Suite"
                    status="online"
                    resolution="1920x1080"
                    nightVision={true}
                    motionDetection={true}
                    coverage="Operating table, equipment, storage"
                    lastMotion="1 hour ago"
                    recording={true}
                  />
                ),
                related_commands: {
                  "live_feed": {
                    password: {
                      pw: "live_cam_03",
                      hint: "Format: live_[camera_id] in lowercase",
                      hintStrength: 2
                    },
                    content: (
                      <>
                        <Line cyan large bold>[CAM-03 LIVE FEED]</Line>
                        <Line smoke>Main Surgical Suite - Real-time</Line>
                        <Divider />

                        <Box color="cyan">
                          <Line bold>CURRENT VIEW:</Line>
                          <Line>• Suite currently empty</Line>
                          <Line>• Operating table clean, ready for next patient</Line>
                          <Line>• Chrome installation tools on nearby tray</Line>
                          <Line>• Medical equipment operational, standby mode</Line>
                        </Box>

                        <Divider />

                        <Line smoke small>Feed quality: Good. Suite ready for operations.</Line>
                      </>
                    )
                  }
                }
              },

              "cam_04": {
                content: (
                  <Camera
                    cameraId="CAM-04"
                    location="Research Lab (Basement)"
                    status="online"
                    resolution="1920x1080"
                    nightVision={true}
                    motionDetection={true}
                    coverage="Lab entrance, workbenches, secure storage"
                    lastMotion="6 hours ago"
                    recording={true}
                  />
                ),
                related_commands: {
                  "live_feed": {
                    password: {
                      pw: "live_cam_04",
                      hint: "Format: live_[camera_id] in lowercase",
                      hintStrength: 2
                    },
                    content: (
                      <>
                        <Line cyan large bold>[CAM-04 LIVE FEED]</Line>
                        <Line smoke>Research Lab (Basement) - Real-time</Line>
                        <Divider />

                        <Box color="cyan">
                          <Line bold>CURRENT VIEW:</Line>
                          <Line>• Lab empty and locked</Line>
                          <Line>• Workbenches show ongoing projects (chrome components)</Line>
                          <Line>• Secure storage cabinet visible - door closed</Line>
                          <Line>• New high-grade lock installed (post-break-in)</Line>
                          <Line>• Motion sensors active (upgraded after incident)</Line>
                        </Box>

                        <Divider />

                        <Box color="yellow">
                          <Line bold>POST-INCIDENT SECURITY:</Line>
                          <Line>This is where the chrome leg prototype was stolen.</Line>
                          <Line>Security significantly enhanced since Oct 28.</Line>
                        </Box>

                        <Divider />

                        <Line smoke small>Feed quality: Good. Lab secure.</Line>
                      </>
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

export default DOC_JOY_CLINIC_COMMANDS;
