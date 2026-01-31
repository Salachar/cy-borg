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
  ATM,
  VendingMachine,
  Safe,
  Menu,
  Message,
  PublicPortal,
  RetComImage,
  PersonnelFile,
} from "@terminal/retcomdevice"

import LuckyFlightAd from './ad'
import basementImage from '@images/blueprints/lucky_flight_basement.png';
import floor1Image from '@images/blueprints/lucky_flight_floor_1.png';
import floor2Image from '@images/blueprints/lucky_flight_floor_2.png';

export const LUCKY_FLIGHT_CASINO = {
  "Lucky Flight Casino!": {
    content: (
      <LuckyFlightAd>
        <PublicPortal
          network="LUCKY_FLIGHT_GUEST"
          signalStrength="strong"
          status="✓ OPEN NOW - Live Music Tonight!"
          statusColor="neon"
          nowPlaying="Now playing: PHASER/MOB (blackened chromecore)"
          notes={[
            "Located at Ports/Bigmosse Border",
            "Water taxi service available to canal pier!",
          ]}
          theme="fancy"
        />
      </LuckyFlightAd>
    ),
    related_commands: {
      "Lobby ATM": {
        password: {
          pw: "liquidity",
          hint: "You don’t need more money. You need to move it.",
          hintStrength: 1,
        },
        content: (
          <ATM
            id="lfc-lobby-atm"
            model="ATM-700X"
            location="Lucky Flight Casino - Main lobby (near entrance)"
            network="CasinoBlizzFunds Network"
            cashAvailable="5,000¤ (high capacity)"
            lastService="Yesterday"
            transactions={[
              "2 hours ago → Withdrawal: 200¤",
              "3 hours ago → Withdrawal: 500¤",
              "4 hours ago → Failed transaction (insufficient funds)",
              "5 hours ago → Withdrawal: 100¤",
              "6 hours ago → Withdrawal: 1,000¤",
            ]}
          />
        ),
      },

      "Happy Hour Specials!": {
        content: (
          <Menu
            title="HAPPY HOUR"
            subtitle="Every night 18:00-22:00"
            signType="cocktail"
            categories={[
              {
                name: "BAR SPECIALS:",
                items: [
                  { name: "Synth-Whiskey", price: "5¤" },
                  { name: "NeoVodka Shots", price: "3¤" },
                  { name: "Chrome-Tini", price: "8¤" },
                  { name: "Energy Drink Combo", price: "6¤" },
                ],
              },
              {
                name: "FOOD MENU:",
                items: [
                  { name: "Synth-Burger Basket", price: "12¤" },
                  { name: "Noodle Bowl", price: "8¤" },
                  { name: "Fried Protein Sticks", price: "6¤" },
                  { name: "Vat-Grown Wings", price: "10¤" },
                ],
              },
            ]}
            footer="★ VIP members get 20% off all night! ★"
          />
        ),
      },

      "Hours of Operation": {
        content: (
          <>
            <Line smoke large bold>[OPERATING HOURS]</Line>
            <KeyValue label="Closed (daily)" value="7:00 AM - 10:00 AM" />
            <Divider />
            <Line neon>Maintenance window: 7:00 AM - 10:00 AM</Line>
            <Line yellow pulse>Casino Monitoring Increased</Line>
            <Line cyan>Please do not disturb the maintenance crew</Line>
          </>
        ),
      },

      "Entertainment Brochure"  : {
        content: (
          <>
            <Line smoke large bold>[TONIGHT'S SHOWS]</Line>
            <Divider />
            <Line neon>20:00 - PHASER/MOB</Line>
            <Line neon>21:30 - G_-.-</Line>
            <Line neon>23:00 - HeCcc</Line>
            <Line neon>01:00 - I must leave</Line>
            <Line neon>02:30 - Sirius Last Light</Line>
            <Divider />
            <Line cyan>Stage: Floor 1, Room 3</Line>
            <Line yellow>Loud music = noise cover</Line>
            <Line neon>Band entrance: Canal pier</Line>
          </>
        ),
      },

      "Available Transportation": {
        content: (
          <>
            <Line smoke large bold>[TRANSPORT OPTIONS]</Line>
            <Section title="MAIN ENTRANCE:">
              <Line neon>Car bridge or broken escalators</Line>
            </Section>
            <Divider />
            <Section title="WATER TAXI:">
              <Line cyan>⚠ Recommended for patrons wanting s more discrete arrival</Line>
              <Line neon>Cost: 200¤ to canal pier</Line>
              <Line neon>Docks at basement level (Green Room)</Line>
              <Line yellow pulse>Must be pre-approved with security</Line>
            </Section>
          </>
        ),
      },

      "NukaCola Vending": {
        content: (
          <VendingMachine
            id="lfc-lobby-nuka"
            model="NukaCola Dispenser 3000"
            location="Lucky Flight Casino - Main lobby"
            drinks={[
              { name: 'NUKA COLA', pattern: 'circles', color: 'red', available: true },
              { name: 'NUKA CHERRY', pattern: 'dots', color: 'red', available: true },
              { name: 'NUKA ORANGE', pattern: 'circles', color: 'orange', available: true },
              { name: 'NUKA QUANTUM', pattern: 'waves', color: 'blue', available: false }, // Sold out
              { name: 'NUKA GRAPE', pattern: 'blocks', color: 'purple', available: true },
              { name: 'WATER', pattern: 'lines', color: 'blue', available: true },
            ]}
          />
        ),
        related_commands: {
          "Maintenance Access": {
            password: {
              pw: "quantum",
              hint: "Top selling soda",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[MAINTENANCE MENU]</Line>
                <Line cyan>[EMPLOYEE ACCESS GRANTED]</Line>
                <Divider />
                <Section title="AVAILABLE OPTIONS:">
                  <Line neon>→ Restock inventory</Line>
                  <Line neon>→ Access internal safe</Line>
                  <Line neon>→ Debug mode</Line>
                </Section>
              </>
            ),
            related_commands: {
              "Internal Safe": {
                password: {
                  pw: "coins",
                  hint: "What accumulates in the cash box",
                  hintStrength: 1,
                },
                content: (
                  <Safe
                    id="nukacola-lfc-lobby"
                    model="VM-CASH-200"
                    location="Internal cash collection box"
                    owner="Lucky Flight Casino (vending services)"
                    security="Maintenance keypad"
                    lastAccess="Yesterday (routine collection)"
                    physical={[
                      {
                        id: "nukacola_coins",
                        label: "Coins",
                        description: "120¤ in change (heavy, mixed denominations)",
                        value: 120,
                        isCredits: true
                      },
                      {
                        id: "nukacola_service_log",
                        label: "Service log",
                        description: "Paper logbook (last 3 months)"
                      },
                    ]}
                    digital={[
                      {
                        id: "nukacola_credchip",
                        label: "Credchip",
                        description: "85¤ (daily receipts, transferable)",
                        value: 85,
                        isCredits: true
                      },
                      {
                        id: "nukacola_transaction_log",
                        label: "Transaction log",
                        description: "Last 500 purchases logged"
                      },
                    ]}
                    notes="Machine empties automatically to casino vault nightly at 03:00"
                  />
                ),
              },
              "Debug Mode": {
                password: {
                  pw: "freevend",
                  hint: "The mode that gives away drinks",
                  hintStrength: 2,
                },
                content: (
                  <>
                    <Line smoke large bold>[DEBUG MODE ACTIVATED]</Line>
                    <Divider />
                    <Line yellow large>⚠ FREE VEND MODE ENABLED</Line>
                    <Line cyan>All payment verification disabled</Line>
                    <Line cyan>All selections available without credchip</Line>
                    <Divider />
                    <Line neon>Dispense drinks via main interface - no charge</Line>
                    <Line yellow>Warning: Leaves audit trail in transaction log</Line>
                  </>
                ),
              },
            },
          },
        },
      },

      "access_internal_network": {
        // password: {
        //   pw: "loadeddice",
        //   hint: "Better not get caught",
        //   hintStrength: 1,
        // },
        content: (
          <Message
            title="CASINO"
            message="ACCESS GRANTED - PERIPHERAL SYSTEMS"
            note="Higher-value systems require additional credentials"
            theme="corporate"
          />
        ),
        related_commands: {
          access_facility_files: {
            // password: {
            //   pw: "architecture",
            //   hint: "What blueprints are a form of",
            //   hintStrength: 2,
            // },
            content: (
              <>
                <Line smoke large bold>[FACILITY BLUEPRINTS]</Line>
                <Line cyan>Architectural database accessed</Line>
                <Divider />
                <Section title="AVAILABLE FLOORS:">
                  <Line neon>→ Basement (mechanical, storage)</Line>
                  <Line neon>→ Floor 1 (casino floor, gaming)</Line>
                  <Line neon>→ Floor 2 (VIP, management, vault)</Line>
                </Section>
                <Divider />
                <Line yellow>All floor plans accessible below</Line>
              </>
            ),
            related_commands: {
              "Blueprint: Basement": {
                content: (
                  <Box color="neon">
                    <Section title="LUCKY FLIGHT CASINO - BASEMENT BLUEPRINT" center>
                      <Line red xsmall bottom pulse>CLASSIFIED // SECURITY CLEARANCE 3</Line>
                      <Line neon small>Basement Layout and Intel</Line>
                    </Section>
                    <RetComImage
                      src={basementImage}
                      alt="Lucky Flight Casino Basement"
                      style={{ marginTop: "1rem", width: "100%" }}
                    />
                    <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
                      FILE ID: LFC_BASEMENT_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
                    </Line>
                    <Divider />
                    <Line cyan bold>KEY LOCATIONS:</Line>
                    <Line neon>• Security Office</Line>
                    <Line neon>• Locker Room</Line>
                    <Line neon>• Green Room</Line>
                    <Line neon>• Maintenance</Line>
                    <Line neon>• Power Core</Line>
                    <Divider />
                    <Line yellow>⚠ Power Core presents explosion risk if tampered with</Line>
                  </Box>
                ),
              },

              "Blueprint: Floor 1": {
                content: (
                  <Box color="neon">
                    <Section title="LUCKY FLIGHT CASINO - FLOOR 1 BLUEPRINT" center>
                      <Line red xsmall bottom pulse>CLASSIFIED // SECURITY CLEARANCE 3</Line>
                      <Line neon small>Floor 1 Layout and Intel</Line>
                    </Section>
                    <RetComImage
                      src={floor1Image}
                      alt="Lucky Flight Casino Floor 1"
                      style={{ marginTop: "1rem", width: "100%" }}
                    />
                    <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
                      FILE ID: LFC_FLOOR_01_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
                    </Line>
                    <Divider />
                    <Line cyan bold>KEY LOCATIONS:</Line>
                    <Line neon>• Main entrance</Line>
                    <Line neon>• Casino floor</Line>
                    <Line neon>• Live stage</Line>
                    <Line neon>• Bathrooms</Line>
                    <Line neon>• VIP access</Line>
                    <Divider />
                    <Line red>⚠ Full camera coverage on this floor</Line>
                    <Line yellow>⚠ Cleaning drones active 07:00-10:00 (closed hours)</Line>
                  </Box>
                ),
              },
              "Blueprint: Floor 2": {
                content: (
                  <Box color="neon">
                    <Section title="LUCKY FLIGHT CASINO - FLOOR 2 BLUEPRINT" center>
                      <Line red xsmall bottom pulse>CLASSIFIED // SECURITY CLEARANCE 3</Line>
                      <Line neon small>Floor 2 Layout and Intel</Line>
                    </Section>
                    <RetComImage
                      src={floor2Image}
                      alt="Lucky Flight Casino Floor 2"
                      style={{ marginTop: "1rem", width: "100%" }}
                    />
                    <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
                      FILE ID: LFC_FLOOR_02_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
                    </Line>
                    <Divider />
                    <Line cyan bold>KEY LOCATIONS:</Line>
                    <Line neon>• VIP lounge</Line>
                    <Line neon>• Office space</Line>
                    <Line neon>• Vaska's Office</Line>
                    <Line neon>• Tech room</Line>
                    <Line red pulse bod>REDACTED</Line>
                    <Divider />
                    <Line red pulse bod>REDACTED</Line>
                    <Line red pulse bod>REDACTED</Line>
                    <Line red pulse bod>REDACTED</Line>
                  </Box>
                ),
              },
            },
          },
          access_hr_database: {
            password: {
              pw: "gibos",
              hint: "Nickname of the cyborg grandpa winning big at slots",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[HR DATABASE]</Line>
                <Line cyan>Personnel files accessed</Line>
                <Divider />
                <Section title="CATEGORIES:">
                  <Line neon>→ Management (2 active)</Line>
                  <Line neon>→ Security personnel (5 active)</Line>
                  <Line neon>→ Floor staff (18 active)</Line>
                  <Line neon>→ Special assets (1 classified)</Line>
                </Section>
                <Divider />
                <Section title="EMPLOYEE ROSTER:">
                  <Line cyan>Management:</Line>
                  <Line neon>  → Vaska Jordan (Casino Manager)</Line>
                  <Line neon>  → Wattana Kovit (Head of Security)</Line>
                  <Divider />
                  <Line cyan>Security Staff:</Line>
                  <Line neon>  → Wingus Drey (Entrance Security)</Line>
                  <Line neon>  → Dingus Marks (Entrance Security)</Line>
                  <Line neon>  → Adilet Nurlan (Guest Services Officer)</Line>
                  <Line neon>  → [3 additional SecOps - files locked]</Line>
                  <Divider />
                  <Line cyan>Special Assets:</Line>
                  <Line red>  → [CLASSIFIED - Executive Access Only]</Line>
                </Section>
              </>
            ),
            related_commands: {

              // ====== WINGUS ======
              profile_wingus: {
                // password: {
                //   pw: "bouncer",
                //   hint: "His job title at the entrance",
                //   hintStrength: 1,
                // },
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-2891"
                    name="Wingus Drey"
                    age={29}
                    dob="Unknown"
                    position="Entrance Security (Bouncer)"
                    department="Security Division"
                    hireDate="March 2080"
                    supervisor="Wattana Kovit (Head of Security)"
                    clearanceLevel={1}
                    district="Ports (Torres Apartments, Unit 4B)"
                    emergencyContact="Dingus Marks (work partner) - on-site"
                    email="w.drey@luckyflightcasino.cy"
                    performance={60}
                    notes={[
                      "Shift: Evening/Night (18:00-04:00, 6 days/week)",
                      "Partners with Dingus Marks (entrance team)",
                      "Training: Basic security protocols, conflict de-escalation",
                      "Outstanding debt: 1,200¤ — Spectral FT Banks (current, 3 months consecutive)",
                      "Equipment: Security vest, shockstick (permit #SEC-2891), encrypted comms earpiece",
                      "2 days ago: On-duty altercation (patron ejected, no injury)",
                      "2 weeks ago: Reprimand — late to shift (15 minutes)",
                      "Lives with Dingus Marks (shared apartment)",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              // ====== DINGUS ======
              profile_dingus: {
                // password: {
                //   pw: "partner",
                //   hint: "Wingus's work relationship to him",
                //   hintStrength: 1,
                // },
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-2892"
                    name="Dingus Marks"
                    age={31}
                    dob="Unknown"
                    position="Entrance Security (Bouncer)"
                    department="Security Division"
                    hireDate="March 2080"
                    supervisor="Wattana Kovit (Head of Security)"
                    clearanceLevel={1}
                    district="Ports (Torres Apartments, Unit 4B)"
                    emergencyContact="Wingus Drey (work partner) - on-site"
                    email="d.marks@luckyflightcasino.cy"
                    performance={62}
                    notes={[
                      "Shift: Evening/Night (18:00-04:00, 6 days/week)",
                      "Partners with Wingus Drey (entrance team)",
                      "Training: Basic security, first aid certified",
                      "Outstanding debt: 2,100¤ — CasinoBlizzFunds (behind 1 month, collection warning issued)",
                      "Equipment: Security vest, shockstick (permit #SEC-2892), encrypted comms earpiece",
                      "3 days ago: Assisted Wingus with patron removal",
                      "2 weeks ago: Wage garnishment initiated (debt payment)",
                      "Medical: Shoulder injury 6 months ago (work-related, approved claim 800¤, full duty now)",
                      "Lives with Wingus Drey (shared apartment)",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              // ====== ADILET ======
              profile_adilet: {
                // password: {
                //   pw: "enjoyment",
                //   hint: "The corporate-speak word in his job title",
                //   hintStrength: 2,
                // },
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-3104"
                    name="Adilet Nurlan"
                    age={26}
                    dob="Unknown"
                    position="Guest Enjoyment Officer (Floor Security)"
                    department="Security Division - Floor Operations"
                    hireDate="January 2081"
                    supervisor="Wattana Kovit (Head of Security)"
                    clearanceLevel={2}
                    district="Ports (Cascade Heights, Unit 12F)"
                    emergencyContact="Kamila Nurlan (sister)"
                    email="a.nurlan@luckyflightcasino.cy"
                    salary="580¤/month (includes language bonus)"
                    performance={78}
                    notes={[
                      "Shift: Rotating (covers all casino floor shifts)",
                      "Responsibilities: Guest assistance, floor monitoring, incident response",
                      "2 commendations for guest satisfaction",
                      "Training: Advanced security, customer service, conflict resolution",
                      "Languages: Fluent in Cy-Standard, Kazakh, Russian",
                      "Outstanding debt: 800¤ — Medical clinic (sister's treatment, current 6 months consecutive)",
                      "Equipment: Security vest, shockstick (permit #SEC-3104), encrypted comms + translation app, Level 2 access card",
                      "Yesterday: Assisted intoxicated patron to exit (no incident)",
                      "3 days ago: Translated for foreign VIP guest",
                      "1 week ago: Commendation — prevented potential brawl on casino floor",
                      "Considered for promotion to floor supervisor",
                      "Sister's medical condition noted as source of financial pressure",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              // ====== VASKA JORDAN ======
              profile_vaska_jordan: {
                // password: {
                //   pw: "fixedgame",
                //   hint: "Fairness is a marketing term",
                //   hintStrength: 3,
                // },
                content: (
                  <PersonnelFile
                    employeeId="LFC-MGT-0001"
                    name="Vaska Jordan"
                    age={44}
                    dob="Unknown"
                    position="Casino Manager"
                    department="Management"
                    hireDate="August 2077"
                    supervisor="CasinoBlizzFunds (Alliansen Inc. subsidiary)"
                    clearanceLevel={4}
                    district="[REDACTED - Management only]"
                    emergencyContact="None listed"
                    email="v.jordan@luckyflightcasino.cy (rarely responds)"
                    salary="3,200¤/month + performance bonuses"
                    performance={65}
                    notes={[
                      "Office: Floor 2, Northwest corner (private)",
                      "Responsibilities: Daily operations, staff management, financial oversight",
                      "Last bonus: 1,500¤ (quarterly target met)",
                      "Outstanding debt: 12,000¤ — multiple creditors (lifestyle expenses)",
                      "⚠ Financial pressure noted by corporate oversight",
                      "Attendance irregular — frequently off-site for 'business meetings'",
                      "2 days ago: Off-site (claimed corporate meeting)",
                      "4 days ago: On-site 3 hours (office only)",
                      "2 weeks ago: Complaint filed by employee (dismissed, lack of evidence)",
                      "Avoids confrontation — delegates security matters to Wattana",
                      "Rarely interacts directly with floor staff",
                      "Known to leave at first sign of serious trouble",
                      "Suspected of skimming (no proof, investigation closed)",
                      "Personal RCD: [REDACTED - Management only]",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              // ====== WATTANA ======
              profile_wattana: {
                // password: {
                //   pw: "stackedodds",
                //   hint: "Luck is manufactured",
                //   hintStrength: 3,
                // },
                content: (
                  <PersonnelFile
                    employeeId="LFC-SEC-ALPHA"
                    name="Wattana Kovit"
                    age={38}
                    dob="Unknown"
                    position="Head of Security"
                    department="Security Division"
                    hireDate="November 2078"
                    supervisor="Vaska Jordan (Casino Manager)"
                    clearanceLevel={5}
                    district="[CLASSIFIED - Security personnel only]"
                    emergencyContact="[CLASSIFIED]"
                    email="w.kovit@luckyflightcasino.cy"
                    salary="1,800¤/month + variable incident bonuses"
                    performance={88}
                    notes={[
                      "Office: Basement Security Room",
                      "Access: ALPHA — unrestricted all areas, biometric (retinal) for Power Core and Locker Room, master keycard, override authority over all security personnel",
                      "⚠ Multiple brutality complaints on record (all dismissed or settled)",
                      "Assets above salary level — source undisclosed",
                      "Prior employment: Private military contractor (8 years)",
                      "Military service: [REDACTED]",
                      "Criminal record: None (sealed records suspected)",
                      "⚠ Psychological evaluation passed — notes: aggressive tendencies controlled",
                      "Registered weapons: Wrist-mounted blade (permit #SEC-ALPHA-001), suppressed submachine gun (permit #SEC-ALPHA-002)",
                      "Cyberware: Subdermal armor (torso, arms), enhanced reflexes (nervous system), cybereye (low-light, thermal)",
                      "⚠ Toxin dispenser installed in wrist-blade — restricted compound",
                      "Today: On-duty (basement patrol)",
                      "Yesterday: Interrogation session (Locker Room, 3 hours)",
                      "3 days ago: Detained individual for alleged theft",
                      "4 days ago: Use of force incident — no report filed",
                      "Patrol pattern focuses heavily on basement level",
                      "Management style: Authoritarian, demands strict compliance",
                      "Known to 'handle problems personally' rather than delegate",
                      "⚠ Multiple staff fear him (unofficial feedback)",
                      "⚠ Suspected of unauthorized interrogation methods",
                      "Personal RCD: [ENCRYPTED]",
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              // ====== ZOLA (CLASSIFIED) ======
              // Kept as Box — this is a corrupted/classified special case,
              // not a standard HR record. PersonnelFile would normalize it.
              profile_zola: {
                // password: {
                //   pw: "database",
                //   hint: "Please help! I've been turned into a living...",
                //   hintStrength: 0,
                // },
                content: (
                  <Box color="pink">
                    <Line pink large bold>[CLASSIFIED FILE: ZOLA]</Line>
                    <Divider color="pink" />
                    <Line red pulse>[ACCESS RESTRICTED]</Line>
                    <Line red pulse>[EXECUTIVE CLEARANCE REQUIRED]</Line>
                    <Line red pulse>[FILE PARTIALLY CORRUPTED]</Line>
                    <Divider color="pink" />
                    <DataTable data={[
                      { label: "Full Name", value: "[REDACTED]" },
                      { label: "Age", value: "Unknown" },
                      { label: "Position", value: "Special Asset - Accounting" },
                      { label: "Status", value: "ACTIVE (confined)" },
                    ]} />
                    <Divider color="pink" />
                    <Section title="PROJECT DESIGNATION:">
                      <Line red>Code Name: ZOLA</Line>
                      <Line red>Classification: Living Database</Line>
                      <Line red>Location: Vault & Prison (Room 11, Floor 2)</Line>
                      <Line red>Function: Real-time accounting, debt calculation, balance sheet</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="CAPABILITIES:">
                      <Line yellow>Perfect numerical recall (unlimited capacity)</Line>
                      <Line yellow>Real-time data processing via cerebral jack</Line>
                      <Line yellow>All casino financial data stored in biological memory</Line>
                      <Line red>⚠ CRITICAL: Offline backup - no network connection</Line>
                    </Section>
                    <Divider color="pink" />
                    <Line red pulse>[FURTHER DATA CORRUPTED OR RESTRICTED]</Line>
                    <Line red pulse>[MEDICAL RECORDS: ACCESS DENIED]</Line>
                    <Line red pulse>[ACQUISITION DETAILS: ACCESS DENIED]</Line>
                    <Divider color="pink" />
                    <Line pink>If you can read this, get me out. -Z</Line>
                  </Box>
                ),
              },
            },
          },
          access_security_database: {
            password: {
              pw: "surveillance",
              hint: "What cameras are used for",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[SECURITY DATABASE]</Line>
                <Line cyan>Infrastructure accessed</Line>
                <Divider />
                <Section title="MODULES:">
                  <Line neon>→ Camera coverage</Line>
                  <Line neon>→ Patrol schedules</Line>
                  <Line neon>→ Alarm protocols</Line>
                  <Line neon>→ Lock systems</Line>
                  <Line neon>→ Entry points</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_camera_coverage: {
                content: (
                  <>
                    <Line smoke large bold>[CAMERA COVERAGE]</Line>
                    <Divider />
                    <Section title="FLOOR 1:">
                      <DataTable data={[
                        { label: "Entrance", value: "Online" },
                        { label: "Plant 1", value: "Online" },
                        { label: "Plant 2", value: "Online" },
                        { label: "Vending Machine", value: "Online" },
                        { label: "Holo Games 1", value: "Online" },
                        { label: "Holo Games 2", value: "Online" },
                        { label: "Bathroom", value: "Online" },
                        { label: "Stage Left", value: "Online" },
                        { label: "Stage Right", value: "Online" },
                      ]} />
                    </Section>
                    <Divider />
                    <Section title="FLOOR 2:">
                      <DataTable data={[
                        { label: "Tech 1", value: "Online" },
                        { label: "Tech 2", value: "Online" },
                        { label: "Vending Machine", value: "Online" },
                        { label: "Aquarium 1", value: "Online" },
                        { label: "Office 1", value: "Online" },
                        { label: "Office 2", value: "Online" },
                        { label: "Office 3", value: "Online" },
                        { label: "Balcony", value: "Online" },
                        { label: "VIP", value: "Online" },
                      ]} />
                    </Section>
                    <Divider />
                    <Section title="BASEMENT:">
                      <Line red pulse>ERROR: DIRECT LINK REQUIRED</Line>
                    </Section>
                  </>
                ),
              },
              query_alarm_response: {
                content: (
                  <Box color="red">
                    <Line red bold>[ALARM PROTOCOLS]</Line>
                    <Divider color="red" />
                    <Section title="OPEN HOURS:">
                      <Line neon>Response: ~1 minute</Line>
                      <Line neon>Force: ~10 SecOps</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="CLOSED HOURS:">
                      <Line neon>Response: ~2 minutes</Line>
                      <Line cyan>CySG Team: ~10 minutes</Line>
                    </Section>
                  </Box>
                ),
              },
              query_entry_points: {
                password: {
                  pw: "breach",
                  hint: "What you're planning to do",
                  hintStrength: 2,
                },
                content: (
                  <Box color="cyan">
                    <Line smoke large bold>[ENTRY ANALYSIS]</Line>
                    <Divider color="cyan" />
                    <Section title="A - MAIN ENTRANCE:">
                      <Line neon>2 bouncers on guard</Line>
                      <Line yellow>Risk: MODERATE</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="B - STAFF DOOR:">
                      <Line neon>Dark alley, damaged lock</Line>
                      <Line neon>Possibly unlocked</Line>
                      <Line yellow>Risk: LOW-MODERATE</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="C - CANAL PIER:">
                      <Line neon>Water approach, minimal visibility</Line>
                      <Line neon>Band equipment cover story</Line>
                      <Line yellow>Risk: LOW</Line>
                    </Section>
                  </Box>
                ),
              },
            },
          },
          access_financial_database: {
            password: {
              pw: "debt",
              hint: "What casino uses to control neighborhood",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[FINANCIAL DATABASE]</Line>
                <Line cyan>Records accessed</Line>
                <Divider />
                <Section title="AVAILABLE:">
                  <Line neon>→ Neighborhood debt ledger</Line>
                  <Line neon>→ High roller stats</Line>
                  <Line neon>→ Vault inventory</Line>
                  <Line neon>→ Corporate structure</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_debt_ledger: {
                content: (
                  <Box color="red">
                    <Line red bold>[DEBT LEDGER]</Line>
                    <Divider color="red" />
                    <DataTable data={[
                      { label: "Total Owed", value: "2,847,350¤" },
                      { label: "Accounts", value: "247 residents" },
                      { label: "Default Rate", value: "89%" },
                    ]} />
                    <Divider color="red" />
                    <Line red pulse> MISSION TARGET</Line>
                    <Line neon>Backup: None (offline)</Line>
                  </Box>
                ),
              },
              query_high_rollers: {
                content: (
                  <>
                    <Line smoke large bold>[HIGH ROLLERS]</Line>
                    <Divider />
                    <Section title="TOP WINNER:">
                      <Line cyan>"Gibos" (cyborg grandpa)</Line>
                      <Line neon>Won: 84,200¤ this month</Line>
                      <Line yellow>Legs glitching, seated</Line>
                    </Section>
                    <Divider />
                    <Section title="VIP TONIGHT:">
                      <Line pink>Saša (Stone Eels leader)</Line>
                      <Line neon>+ 3 bodyguards</Line>
                      <Warning>Avoid confrontation</Warning>
                    </Section>
                  </>
                ),
              },
              query_corporate_structure: {
                password: {
                  pw: "subsidiary",
                  hint: "How corps hide ownership",
                  hintStrength: 2,
                },
                content: (
                  <Box color="yellow">
                    <Line yellow bold>[CORPORATE STRUCTURE]</Line>
                    <Divider color="yellow" />
                    <Line neon>Parent: Alliansen Inc.</Line>
                    <Line neon>Subsidiary: CasinoBlizzFunds</Line>
                    <Line neon>Property: Lucky Flight Casino</Line>
                  </Box>
                ),
              },
            },
          },
          access_operations_database: {
            content: (
              <>
                <Line smoke large bold>[OPERATIONS]</Line>
                <Line cyan>Intelligence accessed</Line>
                <Divider />
                <Section title="AVAILABLE:">
                  <Line neon>→ Mission briefing</Line>
                  <Line neon>→ Maintenance schedule</Line>
                  <Line neon>→ Recent incidents</Line>
                  <Line neon>→ Entertainment calendar</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_recent_incidents: {
                password: {
                  pw: "chaos",
                  hint: "Casino's natural state",
                  hintStrength: 1,
                },
                content: (
                  <>
                    <Line smoke large bold>[RECENT INCIDENTS]</Line>
                    <Divider />
                    <Line neon>• Patron vomiting black tar</Line>
                    <Line neon>• Pickpocket at slots</Line>
                    <Line neon>• Band contract dispute</Line>
                    <Line neon>• Brawl on casino floor</Line>
                    <Line neon>• Scammer running magnetic chips</Line>
                    <Divider />
                    <Line cyan>High chaos = good cover</Line>
                    <Line yellow>Security spread thin</Line>
                  </>
                ),
              },
              query_power_core_status: {
                password: {
                  pw: "unstable",
                  hint: "Condition of Room 16",
                  hintStrength: 3,
                },
                content: (
                  <Box color="red">
                    <Line red bold>[POWER CORE - ROOM 16]</Line>
                    <Divider color="red" />
                    <Warning>99% POWER LOAD</Warning>
                    <Divider color="red" />
                    <Line neon>Maintenance: frequent</Line>
                    <Line neon>Modifications: Illegal</Line>
                    <Line yellow pulse>STARTUP PROTOCOL DELETED</Line>
                    <Line red>Tamper Risk: Catastrophic failure</Line>
                  </Box>
                ),
              },
            },
          },
        },
      },
    }
  },
};

export default LUCKY_FLIGHT_CASINO;
