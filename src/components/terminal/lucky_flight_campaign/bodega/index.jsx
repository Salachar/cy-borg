import {
  Line,
  Box,
  Section,
  ListItem,
  Divider,
  KeyValue,
  DataTable,
} from '../../TerminalComponents';

import ATM from '../../ATM';
import VendingMachine from '../../VendingMachine';
import Safe from '../../Safe';
import Camera from "../../Camera";
import Menu from '../../Menu';

import BatusBodegaAd from './ad'

export const BODEGA_COMMANDS = {
  "Batu's Bodega (FREE ACCESS)": {
    content: (
      <>
        <BatusBodegaAd />
        <Line cyan large bold>✦ BATU'S BODEGA ✦</Line>
        <Line yellow>"Your Neighborhood Corner Store Since 2067"</Line>
        <Divider />
        <Line neon>Connecting to FREE_BODEGA_5G...</Line>
        <Line cyan>[CONNECTION ESTABLISHED]</Line>
        <Divider />
        <DataTable data={[
          { label: "SSID", value: "FREE_BODEGA_5G" },
          { label: "Signal", value: "████░░ (Strong)" },
          { label: "Security", value: "Open Network" },
          { label: "Status", value: "⚠ Store Currently CLOSED" },
        ]} />
        <Divider />
        <Line pink>🎵 Now playing: Underground Radio - Ports District Mix</Line>
        <Line yellow>* Free wifi courtesy of Batu - No purchase necessary</Line>
        <Line yellow>* Please respect bandwidth - Community shared connection</Line>
      </>
    ),
    related_commands: {
      "Bodega Menu": {
        content: (
          <Menu
            title="DAILY SPECIALS"
            subtitle="Batu's Bodega - Corner Store Deals"
            signType="sandwich"
            categories={[
              {
                name: "FOOD & SNACKS:",
                items: [
                  { name: "Synth-Ramen Cup", price: "3¤" },
                  { name: "Protein Bar", price: "2¤" },
                  { name: "Synth-Burger (heated)", price: "5¤" },
                  { name: "Candy Mix", price: "1¤" },
                ],
              },
              {
                name: "DRINKS:",
                items: [
                  { name: "Energy Drink", price: "4¤" },
                  { name: "Water Bottle", price: "2¤" },
                  { name: "Coffee (hot)", price: "3¤" },
                  { name: "Synth-Soda", price: "2¤" },
                ],
              },
            ]}
            footer="Free wifi with any purchase!"
          />
        ),
      },

      "Coffee Selections": {
        content: (
          <Menu
            title="BREW MENU"
            subtitle="Open 06:00-22:00"
            signType="coffee"
            categories={[
              {
                name: "HOT DRINKS:",
                items: [
                  { name: "Black Coffee", price: "3¤" },
                  { name: "Synth-Latte", price: "5¤" },
                  { name: "Cyber-Mocha", price: "6¤" },
                  { name: "Green Tea", price: "4¤" },
                ],
              },
              {
                name: "PASTRIES:",
                items: [
                  { name: "Vat-Croissant", price: "4¤" },
                  { name: "Synth-Muffin", price: "3¤" },
                  { name: "Protein Cookie", price: "2¤" },
                ],
              },
            ]}
            footer="Buy 5 coffees, get 1 free!"
          />
        ),
      },

      "Bodega ATM": {
        content: (
          <ATM
            id="bodega-corner-atm"
            model="ATM-350"
            location="Inside Batu's Bodega - Near entrance"
            network="CityBank"
            cashAvailable="800¤ (estimated)"
            lastService="2 weeks ago"
            transactions={[
              "3 days ago, 19:42 → Withdrawal: 40¤",
              "3 days ago, 18:15 → Withdrawal: 20¤",
              "3 days ago, 16:33 → Balance inquiry",
              "4 days ago, 20:01 → Withdrawal: 60¤",
            ]}
          />
        ),
      },

      "Bodega Vending Machine": {
        content: (
          <VendingMachine
            id="bodega-outside-vending"
            model="QuickDrinx 2000"
            location="Outside Batu's Bodega - Street side"
            drinks={[
              { name: 'ENERGY Z++', pattern: 'lines', color: 'yellow', available: true },
              { name: 'COLA SYNTH', pattern: 'blocks', color: 'red', available: true },
              { name: 'CYBORANGE', pattern: 'circles', color: 'orange', available: true },
              { name: 'WATER', pattern: 'waves', color: 'blue', available: false }, // Sold out
              { name: 'COFFEE STIM', pattern: 'dots', color: 'purple', available: true },
            ]}
          />
        ),
        related_commands: {
          "Maintenance Access": {
            password: {
              pw: "refresh",
              hint: "What you do to restock the machine",
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
                    id="bodega-vending-machine"
                    model="VM-CASH-100"
                    location="Internal cash collection box"
                    owner="Beverage Corp (vending division)"
                    security="Maintenance keypad"
                    lastAccess="2 weeks ago (missed last service)"
                    physical={[
                      { item: "Coins", desc: "95¤ in change (neglected, getting full)" },
                    ]}
                    digital={[
                      { item: "Credchip", desc: "62¤ (2 weeks of receipts, transferable)" },
                    ]}
                    notes="Machine service overdue - cash box nearly full"
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
                    <Divider />
                    <Line neon>Dispense drinks via main interface - no charge</Line>
                  </>
                ),
              },
            },
          },
        },
      },

      "Deals!": {
        content: (
          <>
            <Line yellow large bold>[TODAY'S SPECIALS]</Line>
            <Line cyan>Updated: 3 days ago (Store closed since)</Line>
            <Divider />
            <Section title="WEEKLY DEALS:">
              <Line neon>• Synth-Ramen 6-pack → 12¤ (was 18¤)</Line>
              <Line neon>• Energy Drinks (any brand) → 2 for 8¤</Line>
              <Line neon>• Protein Bars (expired last week) → 1¤ each</Line>
              <Line neon>• Credchip Top-Up (10¤ value) → 11¤ (includes fee)</Line>
            </Section>
            <Divider />
            <Section title="ALWAYS IN STOCK:">
              <Line yellow>→ Cigarettes (all brands)</Line>
              <Line yellow>→ Lottery tickets (Ports Weekly Draw)</Line>
              <Line yellow>→ Basic first aid supplies</Line>
              <Line yellow>→ Cheap liquor & beer</Line>
              <Line yellow>→ Snacks & candy</Line>
            </Section>
            <Divider />
            <Section title="SERVICES:">
              <Line cyan>✓ Credchip exchange (small fee)</Line>
              <Line cyan>✓ Package pickup/dropoff for couriers</Line>
              <Line cyan>✓ Bathroom access (regulars only)</Line>
              <Line cyan>✓ Free wifi (password: freewifi)</Line>
              <Line cyan>✓ Community bulletin board</Line>
            </Section>
            <Divider />
            <Line pink>"Fair prices. No questions. - Batu"</Line>
          </>
        ),
      },

      "Operating Status": {
        content: (
          <>
            <Line smoke large bold>[STORE STATUS]</Line>
            <Divider />
            <DataTable data={[
              { label: "Current Status", value: "⚠ CLOSED" },
              { label: "Duration", value: "3 days" },
              { label: "Last Transaction", value: "72 hours ago (19:47)" },
              { label: "Owner Contact", value: "NO RESPONSE" },
            ]} />
            <Divider />
            <Section title="NORMAL HOURS:">
              <Line neon>Monday-Saturday: 06:00 - 23:00</Line>
              <Line neon>Sunday: 08:00 - 20:00</Line>
              <Line yellow>Batu sometimes stays open late for regulars</Line>
            </Section>
            <Divider />
            <Section title="LOCATION:">
              <Line cyan>Corner of Drech Ave & 5th Street</Line>
              <Line cyan>Ports/Bigmosse border (4 blocks from Lucky Flight Casino)</Line>
              <Line cyan>Ground floor of old apartment complex</Line>
            </Section>
            <Divider />
            <Line red>⚠ Store appears damaged - front window broken</Line>
            <Line yellow>Neighbors report no sign of Batu for 3 days</Line>
          </>
        ),
      },

      "Bodega Neighborhood Bulletin": {
        content: (
          <>
            <Line smoke large bold>[COMMUNITY BULLETIN BOARD]</Line>
            <Line neon>Accessing physical postings via photo scan...</Line>
            <Divider />
            <Section title="RECENT POSTS:">
              <Line pink>→ "MISSING: Batu, bodega owner. Anyone seen him?"</Line>
              <Line pink>→ "Lucky Flight took another house on our street this week"</Line>
              <Line pink>→ "Can't afford groceries after casino payment this month"</Line>
              <Line pink>→ "4th eviction on our block this year. When does it stop?"</Line>
              <Line pink>→ "Organizing neighborhood meeting - discuss casino problem"</Line>
              <Line pink>→ "We need to do something about that fucking place"</Line>
              <Line pink>→ "Anyone know a good fixer? Asking for a friend..."</Line>
            </Section>
            <Divider />
            <Section title="SERVICES ADVERTISED:">
              <ListItem>Street doc - "Fingers" (2 blocks south, knock 3x)</ListItem>
              <ListItem>Chop shop - Razor's (3 blocks east, alley entrance)</ListItem>
              <ListItem>Black market credchip exchange (fluctuating rates)</ListItem>
              <ListItem>Cyberware installation (unlicensed, cheap)</ListItem>
              <ListItem>Taxi boat service to canal district (negotiable rates)</ListItem>
            </Section>
            <Divider />
            <Line yellow>General mood: Frustrated, angry, desperate</Line>
          </>
        ),
      },

      access_bodega_internal_network: {
        password: {
          pw: "payday",
          hint: "Niece's favorite day and candybar",
          hintStrength: 3,
        },
        content: (
          <>
            <Line smoke large bold>[BODEGA INTERNAL SYSTEMS]</Line>
            <Line cyan>[EMPLOYEE ACCESS GRANTED]</Line>
            <Divider />
            <Section title="AVAILABLE SYSTEMS:">
              <Line neon>→ Security camera archive</Line>
              <Line neon>→ Personnel records</Line>
              <Line neon>→ Inventory database</Line>
            </Section>
            <Divider />
            <Line yellow>Internal network maintained by Batu (basic security)</Line>
          </>
        ),
        related_commands: {
          access_bodega_security_cam: {
            content: (
              <Camera
                id="bodega-main-cam"
                location="Batu's Bodega - Main room (above counter)"
                coverage="Front entrance, counter, register, main aisles"
                status="ACTIVE"
                recording={true}
                storage="Local server (basement)"
                timeline={[
                  "19:15 → Batu closes register (earlier than usual)",
                  "19:30 → Last customers exit",
                  "19:45 → Batu locks front door, exits",
                  "19:47 → Batu walks north on Drech Ave (direction: casino)",
                  "20:00-22:00 → Store empty, lights remain on",
                  "22:15 → Unidentified individual tries door, leaves",
                  "22:30 → FEED LOST (power outage to building)",
                  "--- 2 DAYS AGO ---",
                  "No footage - camera offline",
                  "--- YESTERDAY ---",
                  "07:00 → Power restored, camera active",
                  "07:15 → Front window shattered (impact visible)",
                  "07:16 → Three individuals enter through broken window",
                  "07:17-07:45 → Store looted (shelves cleared, register opened)",
                  "07:46 → Stone Eels gang tag spray-painted on wall",
                  "07:47 → Individuals exit, head east on foot",
                ]}
                blindSpots={[
                  "Side entrance (emergency exit only)",
                  "Back storage room",
                  "Batu's office area",
                ]}
                lastMaintenance="3 months ago"
              />
            ),
          },

          query_bodega_personnel: {
            content: (
              <>
                <Line smoke large bold>[PERSONNEL RECORDS]</Line>
                <Line cyan>Active employees: 2</Line>
                <Divider />
                <Section title="EMPLOYEE ROSTER:">
                  <Line neon>→ Batu (Owner/Operator)</Line>
                  <Line neon>→ Zara (Part-time, Batu's niece)</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_batu_personnel_file: {
                password: {
                  pw: "community",
                  hint: "What Batu cares about more than profit",
                  hintStrength: 2,
                },
                content: (
                  <Box color="cyan">
                    <Line cyan large bold>[EMPLOYEE FILE: BATU]</Line>
                    <Divider color="cyan" />
                    <DataTable data={[
                      { label: "Full Name", value: "Batu Khamidov" },
                      { label: "Age", value: "54" },
                      { label: "Position", value: "Owner/Operator" },
                      { label: "Employment Start", value: "May 2067 (15 years)" },
                      { label: "Emergency Contact", value: "Zara Khamidova (niece)" },
                    ]} />
                    <Divider color="cyan" />
                    <Section title="FINANCIAL SUMMARY:">
                      <KeyValue label="Monthly Revenue" value="~800¤ (variable)" />
                      <KeyValue label="Outstanding Debts" value="3,200¤" />
                      <KeyValue label="Primary Creditor" value="CasinoBlizzFunds Inc." />
                      <KeyValue label="Monthly Payment" value="450¤ (auto-debit)" />
                      <KeyValue label="Personal Savings" value="47¤" />
                    </Section>
                    <Divider color="cyan" />
                    <Section title="LOAN DETAILS:">
                      <Line neon>Original Amount: 1,500¤</Line>
                      <Line neon>Purpose: Medical expenses (family emergency)</Line>
                      <Line neon>Date Issued: 18 months ago</Line>
                      <Line neon>Interest Rate: 47% annually</Line>
                      <Line neon>Total Paid To Date: ~8,100¤</Line>
                      <Line neon>Current Balance: 3,200¤</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT BANKING ACTIVITY:">
                      <Line yellow>4 days ago → Transfer OUT: 200¤ (emergency withdrawal)</Line>
                      <Line yellow>3 days ago → No transactions recorded</Line>
                      <Line yellow>2 days ago → Auto-debit FAILED: 450¤ (insufficient funds)</Line>
                      <Line yellow>Yesterday → Auto-debit FAILED: 450¤ (insufficient funds)</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="PERSONAL NOTES (RCD Cloud Backup):">
                      <Line pink>"Can't keep living like this. The neighborhood deserves better."</Line>
                      <Line pink>"If I don't come back, tell Zara I'm sorry."</Line>
                      <Line pink>"Charlie was right. Someone needs to act."</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT COMMUNICATIONS:">
                      <Line neon>4 days ago → Email to Lucky Flight management (debt negotiation request)</Line>
                      <Line neon>4 days ago → Response received: "Request DENIED - Full payment required"</Line>
                      <Line neon>3 days ago → Text to Zara: "Closing early. Don't worry about me."</Line>
                    </Section>
                  </Box>
                ),
              },

              query_zara_personnel_file: {
                content: (
                  <Box color="pink">
                    <Line pink large bold>[EMPLOYEE FILE: ZARA]</Line>
                    <Divider color="pink" />
                    <DataTable data={[
                      { label: "Full Name", value: "Zara Khamidova" },
                      { label: "Age", value: "23" },
                      { label: "Position", value: "Part-time Associate" },
                      { label: "Employment Start", value: "June 2081 (intermittent)" },
                      { label: "Primary Job", value: "Courier (freelance)" },
                      { label: "Relation to Owner", value: "Niece" },
                    ]} />
                    <Divider color="pink" />
                    <Section title="EMPLOYMENT NOTES:">
                      <Line neon>Works bodega shifts between courier jobs</Line>
                      <Line neon>Unpaid labor (family arrangement)</Line>
                      <Line neon>Has keys and security codes for store</Line>
                      <Line neon>Handles deliveries and inventory when Batu unavailable</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="MEDICAL HISTORY (Store Insurance):">
                      <Line yellow>18 months ago: Emergency hospitalization</Line>
                      <Line yellow>Diagnosis: Cyberware rejection syndrome</Line>
                      <Line yellow>Treatment Cost: 1,500¤ (paid by Batu via loan)</Line>
                      <Line yellow>Current Status: Recovered, no ongoing treatment</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="CONTACT INFORMATION:">
                      <Line neon>RCD: zara_k_courier@freenet.cy</Line>
                      <Line neon>Address: 2 blocks north (shares apt with 3 roommates)</Line>
                      <Line neon>Vehicle: Modified cyberbike (courier work)</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="RECENT ACTIVITY LOG:">
                      <Line yellow>3 days ago → Shift cancelled by Batu (unusual)</Line>
                      <Line yellow>2 days ago → No contact with store</Line>
                      <Line yellow>Yesterday → Attempted to reach Batu via RCD (no response)</Line>
                      <Line yellow>This morning → Visited store, found damage, filed missing person report</Line>
                    </Section>
                  </Box>
                ),
              },
            },
          },

          query_bodega_inventory: {
            content: (
              <>
                <Line smoke large bold>[INVENTORY DATABASE]</Line>
                <Line yellow>Last updated: 3 days ago (pre-closure)</Line>
                <Divider />
                <Section title="CURRENT STOCK STATUS:">
                  <Line red>⚠ Significant inventory loss detected</Line>
                  <Line red>⚠ Physical count required for accuracy</Line>
                </Section>
                <Divider />
                <Section title="ESTIMATED REMAINING STOCK:">
                  <Line neon>Credchips (loose change in register): Present</Line>
                  <Line neon>Energy drinks/stims: Low stock</Line>
                  <Line neon>First aid supplies: Partial kit remaining</Line>
                  <Line neon>Synth-food rations: Minimal</Line>
                  <Line neon>Batu's personal items: 1 casino chip (sentimental)</Line>
                </Section>
                <Divider />
                <Section title="EQUIPMENT STATUS:">
                  <Line cyan>✓ Wifi router: Operational</Line>
                  <Line cyan>✓ Security system: Online</Line>
                  <Line cyan>✓ Under-counter storage: Intact</Line>
                  <Line yellow>? Old taser (Batu's personal defense): Location unknown</Line>
                  <Line yellow>? Fire extinguisher: Should be under counter</Line>
                  <Line yellow>? Bottle inventory: Needs physical inspection</Line>
                </Section>
                <Divider />
                <Line cyan>Store layout unchanged - familiar to regulars</Line>
                <Line yellow>Free wifi still active</Line>
              </>
            ),
          },

          "Batu's Office Safe": {
            password: {
              pw: "zara",
              hint: "His niece's name",
              hintStrength: 2,
            },
            content: (
              <Safe
                id="bodega-office-safe"
                model="DS-200"
                location="Batu's office - Behind framed bodega opening photo"
                owner="Batu Khamidov"
                security="4-digit PIN"
                lastAccess="3 days ago (before disappearance)"
                physical={[
                  { item: "Emergency cash", desc: "180¤ (small bills, last reserves)" },
                  { item: "Documents", desc: "Bodega deed, Zara's medical records" },
                  { item: "Personal items", desc: "Family photos, wedding ring (deceased wife)" },
                  { item: "Casino chip", desc: "Lucky Flight 100¤ chip (never cashed, sentimental)" },
                ]}
                digital={[
                  { item: "Credchip", desc: "22¤ (personal savings, transferable)" },
                  { item: "Note", desc: "Goodbye letter to Zara (unsent, dated 3 days ago)" },
                ]}
                notes="Safe contains Batu's last personal effects before confronting casino"
              />
            ),
          },
        },
      },
    },
  },
};
