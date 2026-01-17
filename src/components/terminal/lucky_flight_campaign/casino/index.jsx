import {
  Line,
  Box,
  Section,
  Warning,
  Divider,
  KeyValue,
  DataTable,
} from '../../TerminalComponents';

import LuckyFlightAd from './ad'
import LuckyFlightBasement from './LuckyFlightBasement';
import LuckyFlightFloor1 from './LuckyFlightFloor1';
import LuckyFlightFloor2 from './LuckyFlightFloor2';

export const LUCKY_FLIGHT_CASINO = {
  "Lucky Flight Casino!": {
    content: (
      <>
        <LuckyFlightAd />
        <Line cyan large bold>✦ LUCKY FLIGHT CASINO ✦</Line>
        <Line yellow>"Where Fortune Takes Flight!"</Line>
        <Divider />
        <Section title="HOURS OF OPERATION:">
          <KeyValue label="Open" value="10:00 AM - 7:00 AM" />
          <KeyValue label="Closed" value="7:00 AM - 10:00 AM (Maintenance)" />
        </Section>
        <Divider />
        <Section title="TONIGHT'S ENTERTAINMENT:">
          <Line pink>♪ LIVE MUSIC 20:00-03:00 ♪</Line>
          <Line neon>→ 20:00 - PHASER/MOB (blackened chromecore)</Line>
          <Line neon>→ 21:30 - G_-.- (seismic noise)</Line>
          <Line neon>→ 23:00 - HeCcc (hexcore)</Line>
          <Line neon>→ 01:00 - I must leave (doompunk)</Line>
          <Line neon>→ 02:30 - Sirius Last Light (atmo-orbitalwave)</Line>
        </Section>
        <Divider />
        <Section title="FEATURED GAMES:">
          <Line neon>• Slot Machines (100+ varieties)</Line>
          <Line neon>• Blackjack Tables</Line>
          <Line neon>• Poker Rooms (Texas Hold'em, Omaha)</Line>
          <Line neon>• Roulette</Line>
          <Line neon>• Virtual Reality Gaming Pods</Line>
        </Section>
        <Divider />
        <Line yellow>Located at Ports/Bigmosse Border</Line>
        <Line cyan>Water taxi service available to canal pier!</Line>
      </>
    ),
    related_commands: {
      "Happy Hour Specials! (lfc)": {
        content: (
          <>
            <Line yellow large bold>🍹 HAPPY HOUR 🍹</Line>
            <Line cyan>Every night 18:00-22:00</Line>
            <Divider />
            <Section title="BAR SPECIALS:">
              <KeyValue label="Synth-Whiskey" value="5¤" />
              <KeyValue label="NeoVodka Shots" value="3¤" />
              <KeyValue label="Chrome-Tini" value="8¤" />
              <KeyValue label="Energy Drink Combo" value="6¤" />
            </Section>
            <Divider />
            <Section title="FOOD MENU:">
              <KeyValue label="Synth-Burger Basket" value="12¤" />
              <KeyValue label="Noodle Bowl" value="8¤" />
              <KeyValue label="Fried Protein Sticks" value="6¤" />
              <KeyValue label="Vat-Grown Wings" value="10¤" />
            </Section>
            <Divider />
            <Line pink>★ VIP members get 20% off all night! ★</Line>
          </>
        ),
      },

      "Hours of Operation (lfc)": {
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

      "Entertainment Brochure (lfc)"  : {
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

      "Available Transportation (lfc)": {
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

      "NukaCola_vending_frg_003 (lfc_lobby)": {
        password: {
          pw: "nukacola",
          hint: "It's the soda this dispenses! CHANGE ME!",
          hintStrength: 3,
        },
        content: (
          <>
            <Line cyan pulse>[ACCESSING...]</Line>
            <Line neon>Maintenance Connection Established</Line>
          </>
        ),
        related_commands: {
          "dispense_NukaCola_vending_frg_003": {
            content: (
              <>
                <Line cyan>[ACCESSING...]</Line>
                <Line neon>Bypassing payment...</Line>
                <Line cyan>Dispensing Nuka Cola...</Line>
                <Line neon>🥤 Enjoy!</Line>
              </>
            ),
          }
        }
      },

      "access_casino_internal_network (lfc)": {
        password: {
          pw: "flyaway",
          hint: "What casino staff say when someone hits the jackpot",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[CASINO INTERNAL NETWORK]</Line>
            <Line cyan>[ACCESS GRANTED - PERIPHERAL SYSTEMS]</Line>
            <Divider />
            <Section title="AVAILABLE SYSTEMS:">
              <Line neon>→ Facility blueprints (restricted)</Line>
              <Line neon>→ HR database (employee records)</Line>
              <Line neon>→ Security infrastructure</Line>
              <Line neon>→ Financial systems</Line>
              <Line neon>→ Operations database</Line>
            </Section>
            <Divider />
            <Warning>Higher-value systems require additional credentials</Warning>
          </>
        ),
        related_commands: {
          access_facility_blueprints: {
            password: {
              pw: "architecture",
              hint: "What blueprints are a form of",
              hintStrength: 2,
            },
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
                  <>
                    <LuckyFlightBasement />
                    <Divider />
                    <Line cyan bold>KEY LOCATIONS:</Line>
                    <Line neon>• Security Office</Line>
                    <Line neon>• Locker Room</Line>
                    <Line neon>• Green Room</Line>
                    <Line neon>• Maintenance</Line>
                    <Line neon>• Power Core</Line>
                    <Divider />
                    <Line yellow>⚠ Power Core presents explosion risk if tampered with</Line>
                  </>
                ),
              },

              "Blueprint: Floor 1": {
                content: (
                  <>
                    <LuckyFlightFloor1 />
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
                  </>
                ),
              },
              "Blueprint: Floor 2": {
                content: (
                  <>
                    <LuckyFlightFloor2 />
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
                  </>
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
                password: {
                  pw: "bouncer",
                  hint: "His job title at the entrance",
                  hintStrength: 1,
                },
                content: (
                  <Box color="cyan">
                    <Line cyan large bold>[EMPLOYEE FILE: WINGUS DREY]</Line>
                    <Divider color="cyan" />
                    <DataTable data={[
                      { label: "Full Name", value: "Wingus Drey" },
                      { label: "Age", value: "29" },
                      { label: "Position", value: "Entrance Security (Bouncer)" },
                      { label: "Employment Start", value: "March 2080" },
                      { label: "Emergency Contact", value: "Dingus Marks (work partner)" },
                    ]} />
                    <Divider color="cyan" />
                    <Section title="EMPLOYMENT NOTES:">
                      <Line neon>Shift: Evening/Night (18:00-04:00, 6 days/week)</Line>
                      <Line neon>Partners with: Dingus Marks (entrance team)</Line>
                      <Line neon>Performance: Satisfactory (few complaints)</Line>
                      <Line neon>Training: Basic security protocols, conflict de-escalation</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="FINANCIAL DATA:">
                      <KeyValue label="Salary" value="450¤/month" />
                      <KeyValue label="Outstanding Debts" value="1,200¤" />
                      <KeyValue label="Creditor" value="Spectral FT Banks" />
                      <KeyValue label="Payment Status" value="Current (3 months consecutive)" />
                    </Section>
                    <Divider color="cyan" />
                    <Section title="EQUIPMENT ISSUED:">
                      <Line yellow>Security vest (standard issue)</Line>
                      <Line yellow>Shockstick (weapon permit #SEC-2891)</Line>
                      <Line yellow>Communication earpiece (encrypted channel)</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT ACTIVITY:">
                      <Line yellow>2 days ago → On-duty altercation (patron ejected, no injury)</Line>
                      <Line yellow>1 week ago → Attendance: Present all shifts</Line>
                      <Line yellow>2 weeks ago → Reprimand: Late to shift (15 minutes)</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="CONTACT INFORMATION:">
                      <Line neon>RCD: w.drey@luckyflightcasino.cy</Line>
                      <Line neon>Address: Unit 4B, Torres Apartments, Ports district</Line>
                      <Line neon>Living situation: Shares apartment with Dingus</Line>
                    </Section>
                  </Box>
                ),
              },

              // ====== DINGUS ======
              profile_dingus: {
                password: {
                  pw: "partner",
                  hint: "Wingus's work relationship to him",
                  hintStrength: 1,
                },
                content: (
                  <Box color="cyan">
                    <Line cyan large bold>[EMPLOYEE FILE: DINGUS MARKS]</Line>
                    <Divider color="cyan" />
                    <DataTable data={[
                      { label: "Full Name", value: "Dingus Marks" },
                      { label: "Age", value: "31" },
                      { label: "Position", value: "Entrance Security (Bouncer)" },
                      { label: "Employment Start", value: "March 2080" },
                      { label: "Emergency Contact", value: "Wingus Drey (work partner)" },
                    ]} />
                    <Divider color="cyan" />
                    <Section title="EMPLOYMENT NOTES:">
                      <Line neon>Shift: Evening/Night (18:00-04:00, 6 days/week)</Line>
                      <Line neon>Partners with: Wingus Drey (entrance team)</Line>
                      <Line neon>Performance: Satisfactory (reliable, follows protocol)</Line>
                      <Line neon>Training: Basic security, first aid certified</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="FINANCIAL DATA:">
                      <KeyValue label="Salary" value="450¤/month" />
                      <KeyValue label="Outstanding Debts" value="2,100¤" />
                      <KeyValue label="Creditor" value="CasinoBlizzFunds (Lucky Flight subsidiary)" />
                      <KeyValue label="Payment Status" value="Behind 1 month (collection warning issued)" />
                    </Section>
                    <Divider color="cyan" />
                    <Section title="EQUIPMENT ISSUED:">
                      <Line yellow>Security vest (standard issue)</Line>
                      <Line yellow>Shockstick (weapon permit #SEC-2892)</Line>
                      <Line yellow>Communication earpiece (encrypted channel)</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT ACTIVITY:">
                      <Line yellow>3 days ago → Assisted Wingus with patron removal</Line>
                      <Line yellow>1 week ago → Perfect attendance</Line>
                      <Line red>2 weeks ago → Wage garnishment initiated (debt payment)</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="MEDICAL HISTORY:">
                      <Line neon>Last treatment: 6 months ago (shoulder injury, work-related)</Line>
                      <Line neon>Insurance claim: Approved, 800¤ (casino paid)</Line>
                      <Line neon>Current status: Full duty, no restrictions</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="CONTACT INFORMATION:">
                      <Line neon>RCD: d.marks@luckyflightcasino.cy</Line>
                      <Line neon>Address: Unit 4B, Torres Apartments, Ports district</Line>
                      <Line neon>Living situation: Shares apartment with Wingus</Line>
                    </Section>
                  </Box>
                ),
              },

              // ====== ADILET ======
              profile_adilet: {
                password: {
                  pw: "enjoyment",
                  hint: "The corporate-speak word in his job title",
                  hintStrength: 2,
                },
                content: (
                  <Box color="cyan">
                    <Line cyan large bold>[EMPLOYEE FILE: ADILET NURLAN]</Line>
                    <Divider color="cyan" />
                    <DataTable data={[
                      { label: "Full Name", value: "Adilet Nurlan" },
                      { label: "Age", value: "26" },
                      { label: "Position", value: "Guest Enjoyment Officer (Floor Security)" },
                      { label: "Employment Start", value: "January 2081" },
                      { label: "Emergency Contact", value: "Kamila Nurlan (sister)" },
                    ]} />
                    <Divider color="cyan" />
                    <Section title="EMPLOYMENT NOTES:">
                      <Line neon>Shift: Rotating (covers all casino floor shifts)</Line>
                      <Line neon>Responsibilities: Guest assistance, floor monitoring, incident response</Line>
                      <Line neon>Performance: Above average (2 commendations for guest satisfaction)</Line>
                      <Line neon>Training: Advanced security, customer service, conflict resolution</Line>
                      <Line neon>Languages: Fluent in Cy-Standard, Kazakh, Russian</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="FINANCIAL DATA:">
                      <KeyValue label="Salary" value="580¤/month (includes language bonus)" />
                      <KeyValue label="Outstanding Debts" value="800¤" />
                      <KeyValue label="Creditor" value="Medical clinic (sister's treatment)" />
                      <KeyValue label="Payment Status" value="Current (6 months consecutive)" />
                    </Section>
                    <Divider color="cyan" />
                    <Section title="EQUIPMENT ISSUED:">
                      <KeyValue label="Security vest" value="Standard issue" />
                      <KeyValue label="Shockstick" value="Weapon permit #SEC-3104" />
                      <KeyValue label="Communication device" value="Encrypted + translation app" />
                      <KeyValue label="Access card" value="Level 2 (all public areas + basement)" />
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT ACTIVITY:">
                      <Line yellow>Yesterday → Assisted intoxicated patron to exit (no incident)</Line>
                      <Line yellow>3 days ago → Translated for foreign VIP guest (mandarin)</Line>
                      <Line yellow>1 week ago → Commendation: Prevented potential brawl on casino floor</Line>
                      <Line yellow>2 weeks ago → Overtime: Covered sick colleague's shift (approved)</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="PERSONNEL NOTES:">
                      <Line neon>Considered for promotion to floor supervisor</Line>
                      <Line neon>Well-liked by staff and management</Line>
                      <Line neon>Sister's medical condition creates financial pressure</Line>
                      <Line yellow>Performance review scheduled: Next month</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="CONTACT INFORMATION:">
                      <Line neon>RCD: a.nurlan@luckyflightcasino.cy</Line>
                      <Line neon>Address: Unit 12F, Cascade Heights, Ports district</Line>
                      <Line neon>Known associates: Floor staff, fellow security personnel</Line>
                    </Section>
                  </Box>
                ),
              },

              // ====== VASKA JORDAN ======
              profile_vaska_jordan: {
                password: {
                  pw: "manager",
                  hint: "His position at the casino",
                  hintStrength: 1,
                },
                content: (
                  <Box color="yellow">
                    <Line yellow large bold>[EMPLOYEE FILE: VASKA JORDAN]</Line>
                    <Divider color="yellow" />
                    <DataTable data={[
                      { label: "Full Name", value: "Vaska Jordan" },
                      { label: "Age", value: "44" },
                      { label: "Position", value: "Casino Manager" },
                      { label: "Employment Start", value: "August 2077" },
                      { label: "Emergency Contact", value: "None listed" },
                    ]} />
                    <Divider color="yellow" />
                    <Section title="EMPLOYMENT NOTES:">
                      <Line neon>Reports to: CasinoBlizzFunds (Alliansen Inc. subsidiary)</Line>
                      <Line neon>Office: Floor 2, Northwest corner (private office)</Line>
                      <Line neon>Responsibilities: Daily operations, staff management, financial oversight</Line>
                      <Line neon>Performance: Meets targets consistently</Line>
                      <Line yellow>Attendance: Irregular (frequently off-site for "business meetings")</Line>
                    </Section>
                    <Divider color="yellow" />
                    <Section title="FINANCIAL DATA:">
                      <KeyValue label="Salary" value="3,200¤/month + performance bonuses" />
                      <KeyValue label="Last Bonus" value="1,500¤ (quarterly target met)" />
                      <KeyValue label="Outstanding Debts" value="12,000¤" />
                      <KeyValue label="Creditors" value="Multiple (lifestyle expenses)" />
                      <Line red>⚠ Financial pressure noted by corporate oversight</Line>
                    </Section>
                    <Divider color="yellow" />
                    <Section title="ACCESS & EQUIPMENT:">
                      <Line yellow>Master keycard: All areas except Power Core</Line>
                      <Line yellow>Office safe: Contains additional 750¤ on anonymous credchip</Line>
                      <Line yellow>Vault key: Kept in office (desk drawer or jacket pocket)</Line>
                      <Line yellow>Personal weapon: Ancient revolver (8 rounds, rarely carried)</Line>
                    </Section>
                    <Divider color="yellow" />
                    <Section title="RECENT ACTIVITY:">
                      <Line yellow>2 days ago → Off-site (claimed corporate meeting)</Line>
                      <Line yellow>4 days ago → On-site for 3 hours (office only)</Line>
                      <Line yellow>1 week ago → Performance review with corporate (passed)</Line>
                      <Line red>2 weeks ago → Complaint filed by employee (dismissed for lack of evidence)</Line>
                    </Section>
                    <Divider color="yellow" />
                    <Section title="BEHAVIORAL NOTES:">
                      <Line neon>Avoids confrontation, delegates security matters to Wattana</Line>
                      <Line neon>Rarely interacts directly with floor staff</Line>
                      <Line yellow>Known to flee at first sign of serious trouble</Line>
                      <Line yellow>Suspected of skimming (no proof, investigation closed)</Line>
                    </Section>
                    <Divider color="yellow" />
                    <Section title="CONTACT INFORMATION:">
                      <Line neon>RCD: v.jordan@luckyflightcasino.cy (rarely responds)</Line>
                      <Line neon>Personal RCD: [REDACTED - Management only]</Line>
                      <Line neon>Address: [REDACTED - Management only]</Line>
                      <Line yellow>Known associates: Corporate contacts, wealthy patrons</Line>
                    </Section>
                  </Box>
                ),
              },

              // ====== WATTANA ======
              profile_wattana: {
                password: {
                  pw: "security",
                  hint: "His department at the casino",
                  hintStrength: 1,
                },
                content: (
                  <Box color="red">
                    <Line red large bold>[EMPLOYEE FILE: WATTANA KOVIT]</Line>
                    <Divider color="red" />
                    <DataTable data={[
                      { label: "Full Name", value: "Wattana Kovit" },
                      { label: "Age", value: "38" },
                      { label: "Position", value: "Head of Security" },
                      { label: "Employment Start", value: "November 2078" },
                      { label: "Emergency Contact", value: "[CLASSIFIED]" },
                    ]} />
                    <Divider color="red" />
                    <Section title="EMPLOYMENT NOTES:">
                      <Line neon>Reports to: Vaska Jordan (Casino Manager)</Line>
                      <Line neon>Office: Basement Security Room</Line>
                      <Line neon>Responsibilities: All security operations, staff supervision, threat response</Line>
                      <Line neon>Performance: Exceeds expectations (zero major incidents under tenure)</Line>
                      <Line red>⚠ Multiple brutality complaints (all dismissed or settled)</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="FINANCIAL DATA:">
                      <KeyValue label="Salary" value="1,800¤/month" />
                      <KeyValue label="Bonuses" value="Variable (incident-based)" />
                      <KeyValue label="Outstanding Debts" value="None on record" />
                      <KeyValue label="Assets" value="Above salary level (source: undisclosed)" />
                    </Section>
                    <Divider color="red" />
                    <Section title="SECURITY CLEARANCE:">
                      <Line yellow>Access Level: ALPHA (unrestricted, all areas)</Line>
                      <Line yellow>Biometric access: Retinal scan (Power Core, Locker Room)</Line>
                      <Line yellow>Master keycard: Full casino access</Line>
                      <Line yellow>Override authority: Can countermand other security personnel</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="EQUIPMENT & AUGMENTATION:">
                      <Line neon>Registered Weapons:</Line>
                      <Line yellow>  → Wrist-mounted blade (permit #SEC-ALPHA-001)</Line>
                      <Line yellow>  → Submachine gun, suppressed (permit #SEC-ALPHA-002)</Line>
                      <Line neon>Cyberware (Medical Records):</Line>
                      <Line yellow>  → Subdermal armor plating (torso, arms)</Line>
                      <Line yellow>  → Enhanced reflexes (nervous system augmentation)</Line>
                      <Line yellow>  → Cybereye (low-light, thermal vision)</Line>
                      <Line red>⚠ Toxin dispenser (wrist-blade, restricted compound)</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="RECENT ACTIVITY:">
                      <Line yellow>Today → Currently on-duty (basement patrol)</Line>
                      <Line yellow>Yesterday → Interrogation session (Locker Room, 3 hours)</Line>
                      <Line yellow>3 days ago → Detained individual for alleged theft</Line>
                      <Line red>4 days ago → Use of force incident (no report filed)</Line>
                      <Line yellow>1 week ago → Security protocol review with staff</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="BACKGROUND CHECK:">
                      <Line neon>Prior Employment: Private military contractor (8 years)</Line>
                      <Line neon>Military Service: [REDACTED]</Line>
                      <Line neon>Criminal Record: None (sealed records suspected)</Line>
                      <Line yellow>References: All from corporate security sector</Line>
                      <Line red>⚠ Psychological evaluation: Passed (notes: aggressive tendencies controlled)</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="BEHAVIORAL NOTES:">
                      <Line neon>Patrol pattern: Focuses heavily on basement level</Line>
                      <Line neon>Management style: Authoritarian, demands strict compliance</Line>
                      <Line yellow>Known to "handle problems personally" rather than delegate</Line>
                      <Line red>Multiple staff fear him (unofficial feedback)</Line>
                      <Line red>Suspected of unauthorized interrogation methods</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="CONTACT INFORMATION:">
                      <Line neon>RCD: w.kovit@luckyflightcasino.cy</Line>
                      <Line neon>Personal RCD: [ENCRYPTED]</Line>
                      <Line neon>Address: [CLASSIFIED - Security personnel only]</Line>
                      <Line yellow>Known associates: Security staff, corporate enforcers</Line>
                    </Section>
                  </Box>
                ),
              },

              // ====== ZOLA (CLASSIFIED) ======
              profile_zola: {
                password: {
                  pw: "database",
                  hint: "Please help! I've been turned into a living...",
                  hintStrength: 0,
                },
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
