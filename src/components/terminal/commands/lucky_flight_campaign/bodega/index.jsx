import {
  Line,
  Section,
  Divider,
  DataTable,
} from '@terminal/TerminalComponents';
import {
  ATM,
  VendingMachine,
  Safe,
  Camera,
  Menu,
  MaintenanceAccess,
  InternalAccess,
  PublicPortal,
  PersonnelFile,
  CommunityBoard,
  CoffeeMachine,
  HoursBanner,
  Radio,
  ArcadeCabinet,
  DigitalWallet,
} from "@terminal/retcomdevice"

import BatusBodegaAd from './ad'

export const BODEGA_COMMANDS = {
  "Batu's Bodega (FREE ACCESS)": {
    content: (
      <BatusBodegaAd>
        <PublicPortal
          network="FREE_BODEGA_5G"
          signalStrength="strong"
          status="⚠ Store Currently CLOSED"
          statusColor="red"
          nowPlaying="Now playing: Underground Radio - Ports District Mix"
          notes={[
            "Free wifi courtesy of Batu - No purchase necessary",
            "Please respect bandwidth - Community shared connection",
          ]}
          theme="friendly"
        />
      </BatusBodegaAd>
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

      "Coffee Machine": {
        content: (
          <CoffeeMachine />
        ),
      },

      "Boedga Radio": {
        content: (
          <Radio />
        )
      },

      "Arcade Machine": {
        content: (
          <ArcadeCabinet
            credits={15}
          />
        )
      },

      "Boedga ATM": {
        password: {
          pw: "compound",
          hint: "It grows faster than work ever could",
          hintStrength: 1,
        },
        content: (
          <ATM
            id="bodega-corner-atm"
            location="Inside Batu's Bodega - Near entrance"
            credits={20}
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

      "Vending Machine": {
        content: (
          <VendingMachine
            id="bodega-outside-vending"
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
              <MaintenanceAccess />
            ),
            related_commands: {
              "vend_wallet": {
                password: {
                  pw: "coins",
                  hint: "What accumulates in the cash box",
                  hintStrength: 1,
                },
                content: (
                  <DigitalWallet
                    id="bodega-vending-machine-wallet"
                    accountHolder="Beverage Corp (vending division)"
                    credits={15}
                  />
                ),
              },
              "debug": {
                password: {
                  pw: "freevend",
                  hint: "The mode that gives away drinks",
                  hintStrength: 2,
                },
                content: (
                  <InternalAccess
                    name="VENDING MACHINE"
                    message="DEBUG MODE ACTIVATED"
                    note="Dispense drinks via main interface - no charge"
                    theme="corporate"
                  >
                    <Line yellow large>⚠ FREE VEND MODE ENABLED</Line>
                    <Line cyan>All payment verification disabled</Line>
                  </InternalAccess>
                ),
              },
            },
          },
        },
      },

      "Deals!": {
        content: (
          <InternalAccess
            name="BODEGA"
            system="TODAY'S SPECIALS"
            message="Updated: 3 days ago"
            note={'"Fair prices. No questions." - Batu'}
            theme="casual"
          >
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
          </InternalAccess>
        ),
      },

      "Hours of Operation": {
        content: (
          <HoursBanner
            name="Batu's Bodega"
            hours="06:00 - 23:00"
            days="Monday-Saturday"
            status="⚠ CLOSED - 3 DAYS"
            statusColor="closed"
            location="Corner of Drech Ave & 5th Street, Ports/Bigmosse border"
            note="Batu sometimes stays open late for regulars"
          >
            <Line smoke large bold>[CLOSURE DETAILS]</Line>
            <Divider />
            <DataTable data={[
              { label: "Duration Closed", value: "3 days" },
              { label: "Last Transaction", value: "72 hours ago (19:47)" },
              { label: "Owner Contact", value: "NO RESPONSE" },
              { label: "Sunday Hours", value: "08:00 - 20:00 (when open)" },
            ]} />
            <Divider />
            <Section title="ADDITIONAL LOCATION INFO:">
              <Line cyan>4 blocks from Lucky Flight Casino</Line>
              <Line cyan>Ground floor of old apartment complex</Line>
            </Section>
            <Divider />
            <Line red>⚠ Store appears damaged - front window broken</Line>
            <Line yellow>Neighbors report no sign of Batu for 3 days</Line>
          </HoursBanner>
        ),
      },

      "Neighborhood Bulletin": {
        content: (
          <CommunityBoard
            id="bodega-bulletin"
            boardName="COMMUNITY BULLETIN BOARD"
            location="Inside Batu's Bodega - Near counter"
            posts={[
              { text: '"MISSING: Batu, bodega owner. Anyone seen him?"', color: 'pink' },
              { text: '"Lucky Flight took another house on our street this week"', color: 'pink' },
              { text: '"Can\'t afford groceries after casino payment this month"', color: 'pink' },
              { text: '"4th eviction on our block this year. When does it stop?"', color: 'pink' },
              { text: '"Organizing neighborhood meeting - discuss casino problem"', color: 'pink' },
              { text: '"We need to do something about that fucking place"', color: 'pink' },
              { text: '"Anyone know a good fixer? Asking for a friend..."', color: 'pink' },
            ]}
            services={[
              'Street doc - "Fingers" (2 blocks south, knock 3x)',
              "Chop shop - Razor's (3 blocks east, alley entrance)",
              "Black market credchip exchange (fluctuating rates)",
              "Cyberware installation (unlicensed, cheap)",
              "Taxi boat service to canal district (negotiable rates)",
            ]}
            vibe="General mood: Frustrated, angry, desperate"
          />
        ),
      },

      access_internal_network: {
        password: {
          pw: "payday",
          hint: "Niece's favorite day and candybar",
          hintStrength: 3,
        },
        content: (
          <InternalAccess
            name="BODEGA"
            message="EMPLOYEE ACCESS GRANTED"
            note="Internal network maintained by Batu (basic security)"
            theme="casual"
          />
        ),
        related_commands: {
          access_security_cam: {
            content: (
              <Camera
                id="bodega-main-cam"
                location="Batu's Bodega - Main room (above counter)"
                status="ACTIVE"
                recording={true}
                storage="Local"
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
              />
            ),
          },

          query_personnel: {
            content: (
              <InternalAccess
                name="BODEGA"
                system="PERSONNEL RECORDS"
                message="EMPLOYEE ACCESS GRANTED"
                note="Internal network maintained by Batu (basic security)"
                theme="corporate"
              >
                <Line smoke large bold>[PERSONNEL RECORDS]</Line>
                <Line cyan>Active employees: 2</Line>
                <Divider />
                <Section title="EMPLOYEE ROSTER:">
                  <Line neon>→ Batu (Owner/Operator)</Line>
                  <Line neon>→ Zara (Part-time, Batu's niece)</Line>
                </Section>
              </InternalAccess>
            ),
            related_commands: {
              query_batu_personnel_file: {
                password: {
                  pw: "community",
                  hint: "What Batu cares about more than profit",
                  hintStrength: 2,
                },
                content: (
                  <PersonnelFile
                    employeeId="BODEGA-001"
                    name="Batu Khamidov"
                    position="Owner/Operator"
                    department="Self-Employed"
                    hireDate="May 2067 (15 years)"
                    supervisor="N/A - Owner"
                    clearanceLevel="OWNER"
                    salary="~800¤/month (variable)"
                    location="Corner of Drech Ave & 5th Street"
                    email="batu@bodega-local.cy"
                    phone="[REDACTED]"
                    emergencyContact="Zara Khamidova (niece)"
                    performance={75}
                    status="MISSING"
                    notes={[
                      "FINANCIAL: Outstanding debt 3,200¤ to CasinoBlizzFunds Inc.",
                      "FINANCIAL: Original loan 1,500¤ at 47% interest (medical emergency)",
                      "FINANCIAL: Total paid to date ~8,100¤, Current savings: 47¤",
                      "PERSONAL NOTE (Cloud): 'Can't keep living like this. The neighborhood deserves better.'",
                      "PERSONAL NOTE (Cloud): 'If I don't come back, tell Zara I'm sorry.'",
                      "PERSONAL NOTE (Cloud): 'Charlie was right. Someone needs to act.'",
                      "COMMUNICATIONS: Debt negotiation request to Lucky Flight - DENIED",
                      "STATUS: Missing for 3 days - last seen heading toward casino",
                    ]}
                  />
                ),
              },

              query_zara_personnel_file: {
                content: (
                  <PersonnelFile
                    employeeId="BODEGA-002"
                    name="Zara Khamidova"
                    position="Part-time Associate"
                    department="Retail (intermittent)"
                    hireDate="June 2081"
                    supervisor="Batu Khamidov (uncle)"
                    clearanceLevel={1}
                    salary="Unpaid (family arrangement)"
                    location="2 blocks north - Shared apartment"
                    email="zara_k_courier@freenet.cy"
                    phone="[AVAILABLE]"
                    emergencyContact="Batu Khamidov (uncle)"
                    performance={85}
                    status="ACTIVE"
                    notes={[
                      "PRIMARY EMPLOYMENT: Freelance courier (cyberbike)",
                      "BODEGA ROLE: Works shifts between courier jobs, has keys & security codes",
                      "RECENT ACTIVITY: Shift cancelled by Batu 3 days ago (unusual)",
                      "RECENT ACTIVITY: No store contact for 2 days",
                      "RECENT ACTIVITY: Attempted to reach Batu via RCD - no response",
                      "RECENT ACTIVITY: Found store damaged, filed missing person report this morning",
                    ]}
                  />
                ),
              },
            },
          },

          query_inventory: {
            content: (
              <InternalAccess
                name="BODEGA"
                system="INVENTORY MANAGEMENT"
                message="Last updated: 3 days ago (pre-closure)"
                note="Free wifi still active"
                theme="casual"
              >
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
              </InternalAccess>
            ),
          },

          "Office Safe": {
            password: {
              pw: "zara",
              hint: "His niece's name",
              hintStrength: 2,
            },
            content: (
              <Safe
                id="bodega-office-safe"
                model="DS-200"
                location="Batu's office"
                owner="Batu Khamidov"
                security="4-digit PIN"
                lastAccess="3 days ago (before disappearance)"
                physical={[
                  {
                    id: "batu_cash",
                    label: "Emergency cash",
                    description: "180¤ (small bills, last reserves)",
                    value: 180,
                    isCredits: true
                  },
                  {
                    id: "batu_documents",
                    label: "Documents",
                    description: "Bodega deed, Zara's medical records"
                  },
                  {
                    id: "batu_personal",
                    label: "Personal items",
                    description: "Family photos, wedding ring (deceased wife)"
                  },
                  {
                    id: "batu_casino_chip",
                    label: "Casino chip",
                    description: "Lucky Flight 100¤ chip (never cashed, sentimental)"
                  },
                ]}
                digital={[
                  {
                    id: "batu_credchip",
                    label: "Credchip",
                    description: "22¤ (personal savings, transferable)",
                    value: 22,
                    isCredits: true
                  },
                  {
                    id: "batu_goodbye_note",
                    label: "Note",
                    description: "Goodbye letter to Zara (unsent, dated 3 days ago)"
                  },
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
