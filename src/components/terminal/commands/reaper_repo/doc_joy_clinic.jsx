import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  InsetBox,
} from '@terminal/TerminalComponents';
import {
  ATM,
  BiometricRecognition,
  Camera,
  CoffeeMachine,
  CommunityBoard,
  Extractable,
  HoursBanner,
  IncidentLog,
  Locked,
  MaintenanceAccess,
  Menu,
  Message,
  NetworkDevices,
  PersonnelFile,
  PublicPortal,
  SmartFridge,
  VendingMachine,
  Workstation,
} from "@terminal/retcomdevice"

export const DOC_JOY_CLINIC_COMMANDS = {
  "Doc Joy's Clinic": {
    content: (
      <PublicPortal
        name="DOC JOY'S CLINIC"
        tagline="Fast fixes, no questions asked"
        network="DOCJOY_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN 24/7"
        statusColor="neon"
        notes={[
          "Emergency trauma care available",
          "Chrome installation & repairs",
          "Discretion guaranteed"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="24/7"
          days="Every Day"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Services Menu": {
        content: (
          <Menu
            title="DOC JOY'S SERVICES"
            subtitle="Svärta District Reaperdoc"
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

      "Community Board": {
        content: (
          <CommunityBoard
            id="docjoy-bulletin"
            boardName="CLINIC BULLETIN BOARD"
            location="Near entrance - Public access"
            posts={[
              { text: "Lost cat - grey with chrome leg - answers to 'Static'", color: "pink" },
              { text: "Chrome installer needed - pay negotiable", color: "pink" },
              { text: "Selling old cyberdeck parts - working condition", color: "pink" },
              { text: "WARNING: Virid Vipers active in area - stay alert", color: "red" },
            ]}
            services={[
              "Emergency contact: +67-555-FIXME",
              "Discretion guaranteed - no questions asked",
              "Reaper contracts available (inquire with Doc Joy)",
            ]}
            vibe="Gritty but professional. Locals trust Doc Joy."
          />
        ),
      },

      "Waiting Area": {
        content: (
          <MaintenanceAccess
            title="[WAITING AREA - PUBLIC ACCESS]"
            deviceModel="Public Terminal Zone"
            deviceId="CLINIC-PUBLIC-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Grimy but functional space",
              "Smells of antiseptic and desperation",
              "Weapons must be peace-bonded or checked at desk",
              "Violent behavior will be met with violence"
            ]}
          >
            <Divider />
            <InsetBox title="AVAILABLE TERMINALS:">
              <Line neon>• Vending machine (snacks, stims, basic meds)</Line>
              <Line neon>• Coffee machine (surprisingly high-end BrewLux)</Line>
              <Line neon>• Community bulletin board</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Vending Machine": {
            content: (
              <VendingMachine
                id="docjoy-waiting-vending"
                model="MediSnack Pro"
                location="Doc Joy's Clinic - Waiting Area"
                drinks={[
                  { name: 'SYNTH-CAF', pattern: 'lines', color: 'yellow', available: true },
                  { name: 'PROTEIN BAR', pattern: 'blocks', color: 'green', available: true },
                  { name: 'ENERGY DRINK', pattern: 'dots', color: 'orange', available: true },
                  { name: 'PAINKILLERS', pattern: 'waves', color: 'blue', available: true },
                  { name: 'STIM-LITE', pattern: 'circles', color: 'purple', available: true },
                ]}
              />
            ),
            related_commands: {
              "Maintenance Panel": {
                // password: {
                //   pw: "restock",
                //   hint: "What you do when inventory runs low",
                //   difficulty: "medium",
                //   content: <Locked theme="terminal" title="VENDING MAINTENANCE" />
                // },
                content: (
                  <MaintenanceAccess
                    title="[VENDING MACHINE MAINTENANCE]"
                    deviceModel="MediSnack Pro"
                    deviceId="VM-DOCJOY-01"
                    firmwareVersion="v2.1.0"
                    systemStatus="OPERATIONAL"
                    uptime="47 days, 12 hours"
                    notes={[
                      "Last service: 1 week ago",
                      "Next service: Due in 2 weeks",
                      "Collection box emptied weekly",
                      "Popular items: Painkillers, Energy drinks"
                    ]}
                  />
                ),
                related_commands: {
                  "Cash Box": {
                    // password: {
                    //   pw: "coins",
                    //   hint: "What accumulates in the cash box",
                    //   difficulty: "easy",
                    //   content: <Locked theme="safe" title="CASH BOX" />
                    // },
                    content: (
                      <Extractable
                        id="docjoy-vending-cash"
                        physicalItems={[
                          {
                            id: "vending_coins",
                            label: "Coins",
                            description: "85¤ in mixed change",
                            value: 85,
                            isCredits: true
                          },
                          {
                            id: "vending_bills",
                            label: "Bills",
                            description: "40¤ in small bills",
                            value: 40,
                            isCredits: true
                          },
                        ]}
                        stealing={false}
                      />
                    ),
                  },
                },
              },
            },
          },

          "Coffee Machine": {
            content: (
              <CoffeeMachine />
            ),
            related_commands: {
              "Maintenance Panel": {
                // password: {
                //   pw: "brewlux",
                //   hint: "Written on a strip of tape on the back of the machine",
                //   difficulty: "easy",
                //   content: <Locked theme="terminal" title="COFFEE MAINTENANCE" />
                // },
                content: (
                  <MaintenanceAccess
                    title="[BREWLUX MAINTENANCE PANEL]"
                    deviceModel="BrewLux Executive 9000"
                    deviceId="COFFEE-DOCJOY-01"
                    firmwareVersion="v8.2.4"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Standard maintenance logs",
                      "Water filter status: Good",
                      "Bean hopper: 78% full",
                      "Hidden compartment detected behind circuit board"
                    ]}
                  >
                    <Divider />
                    <Line yellow bold>HIDDEN COMPARTMENT FOUND:</Line>
                    <Line smoke>Someone's been using this as a dead drop...</Line>
                  </MaintenanceAccess>
                ),
                related_commands: {
                  "Hidden Compartment": {
                    content: (
                      <Extractable
                        id="docjoy-coffee-deadrop"
                        physicalItems={[
                          {
                            id: "coffee_note",
                            label: "Handwritten note",
                            description: "Intern - Use this for more pods. Don't tell Doc. - J"
                          },
                        ]}
                        digitalItems={[
                          {
                            id: "coffee_credstick",
                            label: "Credstick",
                            description: "20¤ (for coffee supplies)",
                            value: 20,
                            isCredits: true
                          },
                        ]}
                        stealing={false}
                      />
                    ),
                  },
                },
              },
            },
          },
        },
      },

      "Operating Room": {
        content: (
          <MaintenanceAccess
            title="[MAIN OPERATING ROOM]"
            deviceModel="Surgical Suite"
            deviceId="CLINIC-OP-01"
            firmwareVersion="v3.1.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Single large room with operating chair",
              "Chrome installation tools on nearby tray",
              "Medical equipment operational, standby mode",
              "Vibrant skull graffiti on floor",
              "Side walkways for equipment storage"
            ]}
          >
            <Divider />
            <InsetBox title="EQUIPMENT STATUS:">
              <Line neon>• Operating chair: READY</Line>
              <Line neon>• Chrome installation tools: STERILIZED</Line>
              <Line neon>• Medical scanner: ONLINE</Line>
              <Line neon>• Anesthetic dispenser: LOADED</Line>
              <Line neon>• Emergency defibrillator: CHARGED</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Camera System": {
            content: (
              <NetworkDevices
                networkName="CLINIC_SECURITY"
                devices={[
                  { name: "Entrance Camera", ip: "10.78.1.101", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
                  { name: "Operating Room Cam", ip: "10.78.1.102", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
                  { name: "Research Lab Cam", ip: "10.78.1.103", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
                ]}
              />
            ),
          },

          "Entrance Camera": {
            content: (
              <Camera
                id="cam-docjoy-entrance"
                location="Doc Joy's Clinic - Main Entrance"
                coverage="Entrance door, waiting area, reception desk"
                status="ACTIVE"
                recording={true}
                storage="Local server (basement)"
                timeline={[
                  "Today, 08:15 → Patient arrived (trauma case)",
                  "Today, 11:30 → Delivery (medical supplies)",
                  "Today, 14:45 → Multiple patients departing",
                  "Today, 18:30 → Suspicious individual (hooded, no treatment)",
                  "Today, 20:00 → Doc Joy arrived for night shift",
                ]}
                blindSpots={[
                  "Side door (partially obscured by equipment)",
                  "Corner of waiting area",
                ]}
                lastService="1 week ago"
              />
            ),
          },

          "Operating Room Camera": {
            content: (
              <Camera
                id="cam-docjoy-operating"
                location="Doc Joy's Clinic - Operating Room"
                coverage="Operating chair, equipment, main floor"
                status="ACTIVE"
                recording={true}
                storage="Local server (basement)"
                timeline={[
                  "Today, 09:00 → Chrome installation (arm replacement)",
                  "Today, 13:30 → Emergency surgery (gunshot wound)",
                  "Today, 16:00 → Room sterilized, prepared for next patient",
                  "Today, 19:45 → Doc Joy equipment check",
                ]}
                blindSpots={[
                  "Side walkways (equipment racks obscure view)",
                  "Under operating chair",
                ]}
                lastService="1 week ago"
              />
            ),
          },
        },
      },

      "Internal Systems": {
        // password: {
        //   pw: "reaper_work",
        //   hint: "What Doc Joy calls his specialty contract jobs (check services menu)",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="STAFF ACCESS" />
        // },
        content: (
          <Message
            title="Doc Joy's Clinic"
            message="STAFF ACCESS GRANTED"
            note="Internal Network: CLINIC_SECURE | Node: OFFICE-01"
            theme="casual"
          />
        ),
        related_commands: {
          "Active Reaper Contract": {
            content: (
              <MaintenanceAccess
                title="[ACTIVE REAPER CONTRACT RR-2067-1104]"
                deviceModel="Contract Management System"
                deviceId="CONTRACT-RR-1104"
                firmwareVersion="v1.0.0"
                systemStatus="ACCEPTED"
                notes={[
                  "Status: ACCEPTED",
                  "Deadline: 36 hours from acceptance",
                  "Client: Doc Joy (Self)",
                  "Type: Chrome Repossession"
                ]}
              >
                <Divider />
                <InsetBox title="CONTRACT PAYMENT:">
                  <Line yellow bold>Base Payment: 5,000¤</Line>
                  <Line yellow bold>Bonus: 1 Cybertech upgrade (choice of 3)</Line>
                  <Line red bold>Time Limit: 36 hours</Line>
                  <Line red>Pay deduction: -500¤ per point of damage to merchandise</Line>
                </InsetBox>
                <Divider />
                <InsetBox title="TARGET SPECIFICATIONS:">
                  <Line yellow bold>TARGET ITEM: Alliansen Inc. Chrome Legs (Prototype)</Line>
                  <Line>• Model: Classified ("State-of-the-art" per press release)</Line>
                  <Line>• Current User: Steel Jackhammer (Killmatch athlete)</Line>
                  <Line>• Installation Date: ~2 weeks ago (post-Krok fight)</Line>
                  <Line>• Condition Required: INTACT - Minimal damage</Line>
                </InsetBox>
                <Divider />
                <InsetBox title="TARGET INTEL: STEEL JACKHAMMER">
                  <Line neon>• Location: Central District, Tower Block 7, Unit 4201</Line>
                  <Line neon>• Current Activity: "Recovery party" (ongoing, day 3+)</Line>
                  <Line neon>• Security: 2 guards at penthouse entrance</Line>
                  <Line neon>• Access: Party guests coming/going constantly</Line>
                  <Line neon>• Status: Likely intoxicated, distracted</Line>
                </InsetBox>
                <Divider />
                <InsetBox title="BACKSTORY:">
                  <Line pink>Three weeks ago, Doc Joy's clinic was broken into. A chrome leg prototype was stolen from the research lab. Security footage was corrupted.</Line>
                  <Line pink>Two weeks ago, Steel Jackhammer appeared on feeds with identical chrome legs, claiming they were "state-of-the-art Alliansen replacements" after his Krok fight injuries.</Line>
                  <Line pink>Doc Joy believes Alliansen bought the stolen design and is claiming it as their own development. He wants his property back.</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Payment Options": {
                content: (
                  <MaintenanceAccess
                    title="[CONTRACT PAYMENT OPTIONS]"
                    deviceModel="Payment Terms"
                    deviceId="CONTRACT-RR-1104-PAY"
                    firmwareVersion="v1.0.0"
                    systemStatus="PENDING"
                    notes={[
                      "Available upon successful delivery of intact chrome legs",
                      "Payment method: Cash, credstick, or crypto",
                      "Cybertech installation: Same day"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="BASE PAYMENT:">
                      <Line neon bold>5,000¤</Line>
                      <Line smoke>Cash, credstick, or crypto - your choice</Line>
                    </InsetBox>
                    <Divider />
                    <InsetBox title="CYBERTECH UPGRADE (CHOOSE 1):">
                      <Line yellow bold>OPTION 1: Reflex Boosters</Line>
                      <Line>• +2 to initiative rolls</Line>
                      <Line>• Neural acceleration system</Line>
                      <Line>• Improved reaction time in combat situations</Line>
                      <Line smoke small>Value: ~3,000¤</Line>

                      <Divider />

                      <Line yellow bold>OPTION 2: Dermal Plating</Line>
                      <Line>• Armor: -D2 damage reduction</Line>
                      <Line>• Subdermal titanium-ceramic weave</Line>
                      <Line>• Minimal external appearance change</Line>
                      <Line smoke small>Value: ~4,000¤</Line>

                      <Divider />

                      <Line yellow bold>OPTION 3: Neural Interface Jack</Line>
                      <Line>• Advantage on tech-related tests</Line>
                      <Line>• Direct brain-computer connection</Line>
                      <Line>• Faster hacking and system access</Line>
                      <Line smoke small>Value: ~3,500¤</Line>
                    </InsetBox>
                    <Divider />
                    <InsetBox title="PAYMENT DEDUCTIONS:">
                      <Line red>• Each point of damage to legs: -500¤</Line>
                      <Line red>• Missed 36h deadline: -1,000¤ + no cybertech bonus</Line>
                      <Line red>• Legs destroyed/unretrievable: Contract void, no payment</Line>
                      <Line red>• Doc Joy killed during job: Obviously no payment</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },

              "Target Research": {
                content: (
                  <MaintenanceAccess
                    title="[NET SEARCH: Steel Jackhammer]"
                    deviceModel="Public Records Database"
                    deviceId="NETSEARCH-SJ-01"
                    firmwareVersion="v1.0.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Public records, social feeds, news archives",
                      "Search completed: 2 hours ago",
                      "Results: 847 matches found"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="KILLMATCH PROFILE:">
                      <Line pink bold>★ STEEL JACKHAMMER ★</Line>
                      <Line>Real Name: Unknown (stage name only)</Line>
                      <Line>Division: Heavyweight Killmatch</Line>
                      <Line>Current Rank: #18 (climbing)</Line>
                      <Line>Sponsor: Alliansen Inc.</Line>
                      <Line>Signature Move: Jackhammer Punch (chained attacks)</Line>
                      <Line>Record: 24 wins, 8 losses</Line>
                    </InsetBox>
                    <Divider />
                    <InsetBox title="RECENT VIRAL MOMENT:">
                      <Line neon bold>Fight vs. Five Kroks (3 weeks ago):</Line>
                      <Line>• Both legs ripped off mid-match (graphic footage)</Line>
                      <Line>• Continued fighting for 30 seconds before collapse</Line>
                      <Line>• 50M+ views across feeds</Line>
                      <Line>• Declared "Warrior of the Week" by KILL!KILL!KILL! feed</Line>
                    </InsetBox>
                    <Divider />
                    <InsetBox title="RECENT NEWS:">
                      <Line yellow>Nov 1: "Steel Jackhammer receives state-of-the-art replacement legs from sponsor Alliansen Inc."</Line>
                      <Line yellow>Nov 5: "Jackhammer's recovery party hits 48+ hours - shows no signs of stopping"</Line>
                      <Line yellow>Nov 12: "Upcoming bout: Steel Jackhammer vs Gargoyle - Odds favor Gargoyle 3:1"</Line>
                    </InsetBox>
                    <Divider />
                    <InsetBox title="CURRENT LOCATION:">
                      <Line cyan bold>Central District, Tower Block 7, Unit 4201 (Penthouse)</Line>
                      <Line>Address: 2847 Central Plaza, Southeast Corner Unit</Line>
                      <Line smoke small>Party ongoing - guests constantly arriving/leaving</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "Security Incident Log": {
            // password: {
            //   pw: "incident_2067",
            //   hint: "Password format: incident_[current year]",
            //   difficulty: "medium",
            //   content: <Locked theme="terminal" title="INCIDENT LOG" />
            // },
            content: (
              <IncidentLog
                title="SECURITY INCIDENTS"
                timeframe="Last 30 days"
                incidents={[
                  {
                    timestamp: "Oct 28 (03:47)",
                    type: "FORCED ENTRY - THEFT",
                    details: {
                      Location: "Research Lab (Basement Level)",
                      Stolen: "Chrome leg prototype (45,000¤ value)",
                      Method: "Professional - lock bypassed, no damage",
                      Footage: "Corrupted (professional-grade malware)",
                      Status: "UNSOLVED"
                    }
                  },
                  {
                    timestamp: "Oct 28 (04:30)",
                    type: "INVESTIGATION OPENED",
                    details: {
                      Investigator: "Doc Joy + Local security contractor",
                      Evidence: "None - suspect had high-level tech skills",
                      Description: "Prototype was custom experimental chrome leg system",
                      Status: "ONGOING"
                    }
                  },
                  {
                    timestamp: "Nov 2 (14:20)",
                    type: "INTELLIGENCE UPDATE",
                    details: {
                      Source: "Anonymous tip",
                      Info: "Identical design spotted on Steel Jackhammer",
                      Connection: "Alliansen Inc. claims proprietary design",
                      Suspicion: "Timing suspicious - 2 weeks after theft",
                      Status: "CONFIRMED MATCH"
                    }
                  },
                  {
                    timestamp: "Nov 14 (09:15)",
                    type: "REAPER CONTRACT ISSUED",
                    details: {
                      Reason: "Unable to pursue legal action (no proof)",
                      Action: "Physical recovery authorized",
                      Target: "Steel Jackhammer's chrome legs",
                      Status: "ACTIVE"
                    }
                  },
                ]}
              >
                <Divider />
                <Line red bold>CONCLUSION: Doc Joy's design is on Steel Jackhammer's legs.</Line>
                <Line red>Legal action impossible - Alliansen claims independent development.</Line>
                <Line red>Only option: Physical recovery via reaper contract.</Line>
              </IncidentLog>
            ),
            related_commands: {
              "Evidence Analysis": {
                content: (
                  <MaintenanceAccess
                    title="[INCIDENT ANALYSIS]"
                    deviceModel="Security Analysis"
                    deviceId="ANALYSIS-OCT28"
                    firmwareVersion="v1.0.0"
                    systemStatus="COMPLETE"
                    notes={[
                      "Compiled by Doc Joy",
                      "Analysis date: Nov 14, 2067",
                      "Conclusion: Professional theft operation"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="THEFT PROFILE:">
                      <Line red bold>PROFESSIONAL OPERATION:</Line>
                      <Line>• No forced entry - lock bypassed cleanly</Line>
                      <Line>• Security footage wiped with malware (not physical damage)</Line>
                      <Line>• Knew exactly what to steal - ignored other valuable chrome</Line>
                      <Line>• Occurred during clinic's lowest activity period (3-4 AM)</Line>
                    </InsetBox>
                    <Divider />
                    <InsetBox title="TIMELINE ANALYSIS:">
                      <Line yellow>Oct 28: Clinic broken into, prototype stolen</Line>
                      <Line yellow>Oct 29: Steel Jackhammer's viral Krok fight (legs ripped off)</Line>
                      <Line yellow>Oct 30: Alliansen announces "new prototype" for Jackhammer</Line>
                      <Line yellow>Nov 1: Jackhammer appears with new legs - identical design</Line>
                      <Line yellow>Nov 2: Anonymous tip confirms design match</Line>
                    </InsetBox>
                    <Divider />
                    <InsetBox title="CONCLUSION:">
                      <Line red bold>Timing too convenient. Either:</Line>
                      <Line red>1. Alliansen hired thief, knew about Krok fight injuries in advance</Line>
                      <Line red>2. Krok fight was arranged to create need for "new prototype"</Line>
                      <Line red>3. Opportunistic theft, design sold to Alliansen after Krok fight</Line>
                      <Line red>Regardless: Doc Joy's design is on Steel Jackhammer's legs.</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "Personnel Records": {
            content: (
              <MaintenanceAccess
                title="[PERSONNEL RECORDS]"
                deviceModel="Staff Database"
                deviceId="PERSONNEL-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Clinic staff and contractors",
                  "2 nurses (part-time, rotating)",
                  "1 receptionist (day shift)",
                  "Various reaper contractors (as needed)"
                ]}
              >
                <Divider />
                <InsetBox title="CURRENT STAFF:">
                  <Line neon>• Doc Joy (Owner/Lead Surgeon)</Line>
                  <Line neon>• 2 Nurses (Part-time, rotating)</Line>
                  <Line neon>• 1 Receptionist (Day shift)</Line>
                  <Line neon>• Various reaper contractors (As needed)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Doc Joy": {
                content: (
                  <PersonnelFile
                    employeeId="OWNER-001"
                    name="Doc Joy"
                    age={41}
                    position="Owner / Lead Surgeon"
                    department="Medical Services"
                    hireDate="Clinic Founded: 2059 (8 years)"
                    supervisor="Self-Employed"
                    clearanceLevel={5}
                    district="Svärta District Clinic"
                    emergencyContact="None listed"
                    performance={94}
                    notes={[
                      "Licensed reaperdoc - operates in legal gray area",
                      "Specializes in chrome installation and emergency trauma",
                      "Known for discretion and 'no questions asked' policy",
                      "Excellent reputation in Svärta underground community",
                      "Maintains connections with black market chrome suppliers",
                      "Recent victim of industrial espionage (prototype theft)",
                      "Currently pursuing reaper contract for design recovery",
                      "Warning: Do NOT cross him - skilled surgeon knows anatomy well"
                    ]}
                    status="ACTIVE"
                  />
                ),
              },
            },
          },

          "Medical Supplies": {
            // password: {
            //   pw: "pharmacy_2067",
            //   hint: "Standard medical storage password format: pharmacy_[year]",
            //   difficulty: "medium",
            //   content: <Locked theme="safe" title="MEDICAL STORAGE" />
            // },
            content: (
              <SmartFridge
                id="docjoy-medical-fridge"
                model="MediCool Pro-3000"
                location="Doc Joy's Clinic - Supply Room"
                temperature={38}
                items={[
                  { name: "Blood Packs (Type O-)", quantity: 8, description: "Emergency transfusion supply", value: 400 },
                  { name: "Synthetic Skin", quantity: 12, description: "Grafting patches", value: 180 },
                  { name: "Antibiotics (Medical grade)", quantity: "20 doses", description: "Broad spectrum" },
                  { name: "Painkillers (Prescription)", quantity: "30 doses", description: "High-grade" },
                ]}
                freezerItems={[
                  { name: "Faceblock", quantity: 3, description: "Facial recognition blocker", value: 450 },
                  { name: "Red-juice", quantity: 2, description: "Emergency healing stimulant", value: 600 },
                  { name: "Vurt", quantity: 1, description: "High-grade hallucinogen", value: 300 },
                  { name: "Blackout", quantity: 1, description: "Sedative/anesthetic", value: 150 },
                ]}
                freezerTemp={0}
                notes="Emergency supplies kept on hand. Doc Joy occasionally 'loans' items to trusted contractors before dangerous jobs."
              />
            ),
          },

          "Office Workstation": {
            // password: {
            //   pw: "reaperdoc",
            //   hint: "What Doc Joy's profession is called",
            //   difficulty: "easy",
            //   content: <Locked theme="terminal" title="OFFICE COMPUTER" />
            // },
            content: (
              <Workstation
                owner="Doc Joy"
                role="Owner / Lead Surgeon"
                status="IDLE"
                lastActivity="2 hours ago"
                openTabs={[
                  { title: 'Reaper Contract RR-2067-1104', type: 'work' },
                  { title: 'Steel Jackhammer - Net Search', type: 'work' },
                  { title: 'Black Market Suppliers Contact List', type: 'work' },
                  { title: 'Patient Records (Encrypted)', type: 'work' },
                ]}
                recentFiles={[
                  { name: 'Contract_RR-2067-1104.txt', timestamp: 'This morning' },
                  { name: 'Steel_Jackhammer_Intel.txt', timestamp: '2 hours ago' },
                  { name: 'Incident_Report_Oct28.txt', timestamp: '2 weeks ago' },
                  { name: 'Medical_Supplies_Order.txt', timestamp: '1 week ago' },
                ]}
                emails={3}
                productivity={87}
              />
            ),
            related_commands: {
              "Patient Records": {
                // password: {
                //   pw: "confidential",
                //   hint: "What medical records are supposed to be",
                //   difficulty: "medium",
                //   content: <Locked theme="terminal" title="PATIENT DATABASE" />
                // },
                content: (
                  <MaintenanceAccess
                    title="[PATIENT DATABASE]"
                    deviceModel="Medical Records System"
                    deviceId="MED-REC-DOCJOY"
                    firmwareVersion="v1.8.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Last 30 days of records",
                      "Patient identities not recorded per policy",
                      "All records encrypted and air-gapped",
                      "Supply orders tracked for inventory management"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="RECENT CASES:">
                      <Line neon>Patient #447 - Gunshot wound (shoulder), treated, stable</Line>
                      <Line neon>Patient #448 - Cyberware rejection, stabilized, referred</Line>
                      <Line neon>Patient #449 - Blunt trauma (multiple), treated, discharged</Line>
                      <Line yellow>Patient #450 - Stim overdose, critical, stabilized</Line>
                      <Line neon>Patient #451 - Lacerations (defensive wounds), treated</Line>
                    </InsetBox>
                    <InsetBox title="SUPPLY ORDERS:">
                      <Line cyan>Last order: 5 days ago</Line>
                      <Line neon>Items: Synthetic skin, antibiotics, painkillers</Line>
                      <Line neon>Supplier: Black market medical (no receipts)</Line>
                      <Line yellow>Next order: Low on trauma supplies</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },
        },
      },

      "Research Lab": {
        // password: {
        //   pw: "basement",
        //   hint: "Where the research lab is located in the clinic",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="RESEARCH LAB" />
        // },
        content: (
          <MaintenanceAccess
            title="[RESEARCH LAB - BASEMENT LEVEL]"
            deviceModel="Research Facility"
            deviceId="CLINIC-LAB-01"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Location: Basement level (restricted access)",
              "Security: Biometric scanner + high-grade lock",
              "Status: Operational (enhanced security after break-in)",
              "Current projects: Chrome prototypes, cybernetic research"
            ]}
          >
            <Divider />
            <InsetBox title="SECURITY UPGRADES (POST-BREAK-IN):">
              <Line yellow bold>Enhanced after Oct 28 incident:</Line>
              <Line neon>• New high-grade mechanical lock installed</Line>
              <Line neon>• Biometric scanner added (retinal + fingerprint)</Line>
              <Line neon>• Motion sensors upgraded (military-grade)</Line>
              <Line neon>• Camera coverage improved</Line>
              <Line neon>• Network access disabled (air-gapped)</Line>
            </InsetBox>
            <Divider />
            <InsetBox title="CURRENT PROJECTS:">
              <Line cyan>• Chrome leg mk.II (replacement for stolen prototype)</Line>
              <Line cyan>• Neural interface improvements</Line>
              <Line cyan>• Subdermal armor research</Line>
              <Line cyan>• Emergency medical tech (portable trauma kits)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Biometric Scanner": {
            content: (
              <BiometricRecognition
                id="docjoy-lab-biometric"
                name="RESEARCH LAB ACCESS CONTROL"
                location="Basement Level - Lab Entrance"
                lastService="1 week ago"
                confidence="95%"
                scans={[
                  {
                    timestamp: "Today, 08:30",
                    source: "Lab Entrance Scanner",
                    name: "Doc Joy",
                    result: "MATCHED",
                    confidence: 98,
                    details: "Retinal scan + fingerprint verified",
                    notes: "Morning equipment check"
                  },
                  {
                    timestamp: "Today, 03:15",
                    source: "Lab Entrance Scanner",
                    name: "Unknown Individual",
                    result: "FAILED",
                    confidence: 0,
                    details: "No biometric match in database",
                    notes: "ALERT - Unauthorized access attempt logged, alarm triggered"
                  },
                  {
                    timestamp: "Yesterday, 20:45",
                    source: "Lab Entrance Scanner",
                    name: "Doc Joy",
                    result: "MATCHED",
                    confidence: 97,
                    details: "Retinal scan + fingerprint verified",
                    notes: "Evening work session"
                  },
                  {
                    timestamp: "Yesterday, 14:30",
                    source: "Lab Entrance Scanner",
                    name: "Authorized Contractor",
                    result: "OVERRIDE",
                    confidence: 0,
                    details: "Manual override by Doc Joy",
                    notes: "Equipment delivery - escorted entry"
                  },
                ]}
              />
            ),
          },

          "Research Lab Camera": {
            content: (
              <Camera
                id="cam-docjoy-lab"
                location="Doc Joy's Clinic - Research Lab (Basement)"
                coverage="Lab entrance, workbenches, secure storage"
                status="ACTIVE"
                recording={true}
                storage="Local server (encrypted)"
                timeline={[
                  "Today, 08:30 → Doc Joy entered (equipment check)",
                  "Today, 03:15 → ALERT - Unauthorized access attempt (blocked by biometric)",
                  "Yesterday, 20:45 → Doc Joy working late (prototype mk.II)",
                  "Yesterday, 14:30 → Equipment delivery (manual override, escorted)",
                ]}
                blindSpots={[
                  "None - full coverage after security upgrade",
                ]}
                lastService="1 week ago"
              />
            ),
          },

          "Secure Storage": {
            // password: {
            //   pw: "prototype",
            //   hint: "What was stolen from the lab",
            //   difficulty: "medium",
            //   content: <Locked theme="vault" title="SECURE STORAGE" />
            // },
            content: (
              <Extractable
                id="docjoy-lab-storage"
                physicalItems={[
                  {
                    id: "chrome_leg_mk2",
                    label: "Chrome Leg Prototype Mk.II",
                    description: "Replacement for stolen design - improved servos",
                  },
                  {
                    id: "neural_interface",
                    label: "Neural Interface Components",
                    description: "Various experimental parts",
                  },
                  {
                    id: "research_notes",
                    label: "Research Notes",
                    description: "Handwritten design schematics (encrypted)",
                  },
                ]}
                digitalItems={[
                  {
                    id: "backup_designs",
                    label: "Backup Design Files",
                    description: "All chrome leg prototypes (encrypted)",
                  },
                  {
                    id: "supplier_contacts",
                    label: "Supplier Contact List",
                    description: "Black market chrome and medical suppliers",
                  },
                ]}
                stealing={false}
              />
            ),
          },
        },
      },
    },
  },
};

export default DOC_JOY_CLINIC_COMMANDS;
