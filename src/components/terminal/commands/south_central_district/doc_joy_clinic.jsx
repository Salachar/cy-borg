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
  BountyCard,
  Camera,
  CoffeeMachine,
  CommercialCamera,
  CommunityBoard,
  DigitalWallet,
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

import STEEL_PROFILE from "@images/profile_images/steel_jackhammer.png";

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
      "Active Reaper Contract": {
        content: (
          <BountyCard
            id="bounty-steel-jackhammer"
            name="STEEL JACKHAMMER"
            alias="The Unkillable"
            image={STEEL_PROFILE}
            credits={5000}
            sponsor="Doc Joy (Private Contract)"
            hp={12}
            lastSeen="Central District, Tower Block 7, Unit 4201"
            threat="MEDIUM"
            notes={[
              "REAPER CONTRACT RR-2067-1104: Chrome legs only - NOT for termination",
              "Target must be incapacitated. Removal requires DR14 Knowledge test",
              "Damage to merchandise: -500¤ per point. Time limit: 36 hours",
              "BONUS: 1 cybertech upgrade (choice of 3) upon delivery",
              "Target hosting multi-day party - security minimal, likely intoxicated"
            ]}
          >
            <InsetBox title="CONTRACT PAYMENT:">
              <Line yellow bold>Base Payment: 5,000¤</Line>
              <Line yellow bold>Bonus: 1 Cybertech upgrade (choice of 3)</Line>
              <Line red bold>Time Limit: 36 hours</Line>
              <Line red>Pay deduction: -500¤ per point of damage to merchandise</Line>
            </InsetBox>
          </BountyCard>
        ),
        related_commands: {
          "Steel Jackhammer Profile": {
            content: (
              <PersonnelFile
                employeeId="KILLMATCH-SJ-01"
                name="Steel Jackhammer"
                age={28}
                position="Professional Killmatch Athlete"
                occupation="Heavyweight Division Fighter"
                department="Alliansen Inc. Sponsored"
                joinDate="2075 (7 years pro)"
                supervisor="Alliansen Inc. Management"
                district="Central District, Tower Block 7, Unit 4201"
                emergencyContact="Alliansen Inc. Medical Team"
                notes={[
                  "Stage name only - real identity unknown",
                  "Division: Heavyweight Killmatch, Rank #18 (climbing)",
                  "Record: 24 wins, 8 losses",
                  "Signature Move: Jackhammer Punch (chained attacks on 5+ damage)",
                  "Recent viral moment: Both legs ripped off by 5 Kroks, continued fighting 30 seconds (50M+ views)",
                  "Chrome legs installed 2 weeks ago by Alliansen Inc. sponsor",
                  "Current status: Day 3+ of recovery party in penthouse",
                  "Upcoming match: vs Gargoyle (odds 3:1 against Jackhammer)",
                  "REAPER TARGET: Chrome legs match stolen Doc Joy prototype"
                ]}
                status="ACTIVE"
              />
            ),
          },
          // Keep your existing related_commands structure
        },
      },

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
              { text: "Selling old cyberdeck - good working condition", color: "pink" },
              { text: "WARNING: Virid Vipers active in area - stay alert", color: "red" },
            ]}
            services={[
              "Emergency contact: +67-555-FIXME",
              "Reaper contracts available (inquire with Doc Joy)",
            ]}
            vibe="Gritty but professional. Locals trust Doc Joy."
          />
        ),
      },

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

          },
        },
      },

      "Coffee Machine": {
        content: (
          <CoffeeMachine>
            <DigitalWallet
              id="doc_joy_coffee_machine_wallet"
              credits={100}
            />
          </CoffeeMachine>
        ),
      },

      "Internal Systems": {
        // password: {
        //   pw: "reaper_work",
        //   hint: "What Doc Joy calls his specialty contract jobs (check services menu)",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="STAFF ACCESS" />
        // },
        content: (
          <MaintenanceAccess
            title="Doc Joy's Clinic"
            deviceModel="Surgical Suite"
            deviceId="CLINIC-OP-01"
            firmwareVersion="v3.1.0"
            systemStatus="OPERATIONAL"
            notes={[
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
          "Security Incident Log": {
            content: (
              <IncidentLog
                title="SECURITY INCIDENTS"
                timeframe="Last 30 days"
                incidents={[
                  {
                    timestamp: "Oct 28 (03:47)",
                    type: "FORCED ENTRY - THEFT",
                    details: {
                      Location: "Secure storage area",
                      Stolen: "Chrome leg prototype (45,000¤ value)",
                      Method: "Professional - lock bypassed cleanly, no forced entry",
                      Footage: "Corrupted by professional-grade malware",
                      Profile: "High-level tech skills, knew exactly what to steal",
                      Status: "UNSOLVED"
                    }
                  },
                  {
                    timestamp: "Nov 2 (14:20)",
                    type: "INTELLIGENCE UPDATE",
                    details: {
                      Source: "Anonymous tip",
                      Info: "Identical design spotted on Steel Jackhammer",
                      Timeline: "Oct 29: Jackhammer's Krok fight (legs ripped off) → Oct 30: Alliansen announces 'new prototype' → Nov 1: Jackhammer appears with matching legs",
                      Suspicion: "Timing too convenient - theft likely commissioned by Alliansen Inc.",
                      Status: "CONFIRMED MATCH"
                    }
                  },
                  {
                    timestamp: "Nov 14 (09:15)",
                    type: "REAPER CONTRACT ISSUED",
                    details: {
                      Reason: "Legal action impossible - Alliansen claims independent development (no proof)",
                      Action: "Physical recovery authorized",
                      Target: "Steel Jackhammer's chrome legs",
                      Status: "ACTIVE"
                    }
                  },
                ]}
              >
                <Divider />
                <Line red bold>CONCLUSION: Doc Joy's stolen design is on Steel Jackhammer's legs.</Line>
                <Line red>Either: (1) Alliansen hired thief before Krok fight, (2) Krok fight arranged to create need, or (3) Opportunistic theft sold to Alliansen. Regardless - physical recovery is only option.</Line>
              </IncidentLog>
            ),
            related_commands: {
              "Biometric Access Log": {
                content: (
                  <BiometricRecognition
                    id="docjoy-secure-storage"
                    name="SECURE STORAGE ACCESS CONTROL"
                    location="Doc Joy's Clinic - Secure Storage Area"
                    lastService="1 week ago (upgraded after breach)"
                    confidence="95%"
                    scans={[
                      {
                        timestamp: "Today, 20:00",
                        source: "Storage Access Scanner",
                        name: "Doc Joy",
                        result: "MATCHED",
                        confidence: 98,
                        details: "Retinal scan + fingerprint verified",
                        notes: "Evening inventory check - retrieved medical supplies"
                      },
                      {
                        timestamp: "Today, 08:30",
                        source: "Storage Access Scanner",
                        name: "Doc Joy",
                        result: "MATCHED",
                        confidence: 97,
                        details: "Retinal scan + fingerprint verified",
                        notes: "Morning equipment check - chrome components inventory"
                      },
                      {
                        timestamp: "Yesterday, 14:30",
                        source: "Storage Access Scanner",
                        name: "Authorized Contractor",
                        result: "OVERRIDE",
                        confidence: 0,
                        details: "Manual override by Doc Joy",
                        notes: "Equipment delivery - escorted entry, logged by security"
                      },
                      {
                        timestamp: "Nov 15, 03:15",
                        source: "Storage Access Scanner",
                        name: "Unknown Individual",
                        result: "FAILED",
                        confidence: 0,
                        details: "No biometric match in database",
                        notes: "ALERT - Unauthorized access attempt, alarm triggered, suspect fled"
                      },
                      {
                        timestamp: "Oct 28, 03:47",
                        source: "Storage Access Scanner",
                        name: "SECURITY BREACH",
                        result: "FAILED",
                        confidence: 0,
                        details: "System bypassed - lock picked, scanner disabled",
                        notes: "⚠ CRITICAL - Chrome leg prototype stolen, footage corrupted. Security upgraded post-incident."
                      },
                    ]}
                  />
                ),
              },
            },
          },

          "Main Security Camera": {
            content: (
              <CommercialCamera
                location="Doc Joy's Clinic - Main Floor"
                cameraId="CAM-DOCJOY-01"
                status="ACTIVE - RECORDING"
                coverage="Operating room, entrance, waiting area (full coverage)"
                details={[
                  "Resolution: 1080p HD",
                  "Recording: 24/7 loop (7-day storage)",
                  "Night vision: Enabled",
                  "Motion detection: Active"
                ]}
                alerts={[
                  {
                    time: "Today, 20:00",
                    message: "Doc Joy arrived for night shift"
                  },
                  {
                    time: "Today, 18:30",
                    message: "Suspicious individual - hooded, no treatment, departed after 3 min"
                  },
                  {
                    time: "Today, 13:30",
                    message: "Emergency surgery - gunshot wound (stabilized)"
                  },
                  {
                    time: "Today, 09:00",
                    message: "Chrome installation - arm replacement"
                  },
                  {
                    time: "Oct 28, 03:47",
                    message: "⚠ THEFT EVENT - Footage corrupted by malware"
                  }
                ]}
                lastService="1 week ago"
              />
            ),
          },

          "CyberWare Lockbox": {
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

          "MedCryo Storage": {
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
                physicalItems={[
                  {
                    id: "blood_packs",
                    label: "Blood Packs (Type O-) x8",
                    description: "Emergency transfusion supply",
                    value: 400
                  },
                  {
                    id: "synthetic_skin",
                    label: "Synthetic Skin x12",
                    description: "Grafting patches",
                    value: 180
                  },
                  {
                    id: "antibiotics",
                    label: "Antibiotics (Medical grade)",
                    description: "Broad spectrum - 20 doses"
                  },
                  {
                    id: "painkillers",
                    label: "Painkillers (Prescription)",
                    description: "High-grade - 30 doses"
                  },
                ]}
                freezerItems={[
                  {
                    id: "faceblock",
                    label: "Faceblock x3",
                    description: "Facial recognition blocker",
                    value: 450
                  },
                  {
                    id: "red_juice",
                    label: "Red-juice x2",
                    description: "Emergency healing stimulant",
                    value: 600
                  },
                  {
                    id: "vurt",
                    label: "Vurt x1",
                    description: "High-grade hallucinogen",
                    value: 300
                  },
                  {
                    id: "blackout",
                    label: "Blackout x1",
                    description: "Sedative/anesthetic",
                    value: 150
                  },
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
          },
        },
      },
    },
  },
};

export default DOC_JOY_CLINIC_COMMANDS;
