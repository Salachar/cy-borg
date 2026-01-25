import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
} from '@terminal/TerminalComponents';
import {
  ATM,
  Safe,
  Camera,
  Jukebox,
  MaintenanceAccess,
  VendingMachine,
} from "@terminal/retcomdevice"

export const FUN_COMMANDS = {
  "Silverpeak Residences": {
    content: (
      <>
        <Line cyan large bold>SILVERPEAK RESIDENCES</Line>
        <Line yellow>"Modern Living. Classic Community."</Line>
        <Divider />
        <Line neon>Accessing building management...</Line>
        <Line cyan>[RESIDENT PORTAL]</Line>
        <Divider />
        <DataTable data={[
          { label: "Units", value: "32 (8 floors, 4 per floor)" },
          { label: "Occupancy", value: "94% (2 vacancies)" },
          { label: "Built", value: "2073" },
          { label: "Condition", value: "Good (routine maintenance)" },
        ]} />
        <Divider />
        <Section title="AMENITIES:">
          <Line neon>• Fitness center (24/7 access, basic equipment)</Line>
          <Line neon>• Laundry room (ground floor) - 6¤ wash, 4¤ dry</Line>
          <Line neon>• Community lounge (coffee station, work tables)</Line>
          <Line neon>• Roof deck (residents only, city views)</Line>
          <Line neon>• Package lockers (lobby, secure)</Line>
        </Section>
        <Divider />
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="420¤/month" />
          <KeyValue label="1-bedroom" value="580¤/month" />
          <KeyValue label="2-bedroom" value="800¤/month" />
          <Line yellow>Utilities: Additional 100-140¤/month</Line>
        </Section>
        <Divider />
        <Section title="BUILDING CULTURE:">
          <Line pink>• Monthly resident mixer (first Friday, community lounge)</Line>
          <Line pink>• Book exchange shelf (lobby, honor system)</Line>
          <Line pink>• Quiet hours enforced: 22:00-07:00</Line>
        </Section>
        <Divider />
        <Line pink>"Good neighbors make good neighborhoods."</Line>
      </>
    ),
    related_commands: {
      "Fitness Center Console": {
        content: (
          <>
            <Line smoke large bold>[ENTERTAINMENT CONSOLE - FITNESS CENTER]</Line>
            <Line cyan>Location: Community fitness center, mounted on wall</Line>
            <Divider />
            <DataTable data={[
              { label: "Model", value: "FitScreen Pro" },
              { label: "Status", value: "ON (workout mode)" },
              { label: "Last Used", value: "45 minutes ago" },
              { label: "Primary Function", value: "Workout programs & streaming" },
            ]} />
            <Divider />
            <Section title="INSTALLED PROGRAMS:">
              <Line neon>→ CardioClimb Challenge (treadmill sync enabled)</Line>
              <Line neon>→ Strength Training Guide (video tutorials)</Line>
              <Line neon>→ Yoga Flow Sequences (morning routines popular)</Line>
              <Line neon>→ Combat Training Sim (VR compatible, 3 residents use regularly)</Line>
              <Line neon>→ Meditation & Recovery (cool-down programs)</Line>
            </Section>
            <Divider />
            <Section title="USAGE STATS (This Week):">
              <Line yellow>Total sessions: 47</Line>
              <Line yellow>Most popular: CardioClimb (23 sessions)</Line>
              <Line yellow>Average session: 38 minutes</Line>
              <Line yellow>Peak usage: 06:00-08:00, 18:00-20:00</Line>
            </Section>
            <Divider />
            <Line pink>"Your body is your temple. Also your weapon."</Line>
          </>
        ),
      },

      "Unit 6C Safe": {
        password: {
          pw: "marathon",
          hint: "Fitness goal for the new year!",
          hintStrength: 3,
        },
        content: (
          <Safe
            id="silverpeak-6c"
            model="DS-400"
            location="Unit 6C, bedroom closet shelf"
            owner="Mira Chen (fitness instructor)"
            security="Digital keypad + biometric"
            lastAccess="3 days ago"
            physical={[
              { item: "Cash", desc: "180¤ (emergency fund)" },
            ]}
            digital={[
              { item: "Credchip", desc: "25¤ (transferable)" },
            ]}
            notes="Safe installed 18 months ago"
          />
        ),
      },

      "Management Portal": {
        password: {
          pw: "community",
          hint: "What the building emphasizes in its culture",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[BUILDING MANAGEMENT SYSTEM]</Line>
            <Line cyan>[MANAGER ACCESS]</Line>
            <Divider />
            <Section title="RECENT ISSUES:">
              <Line yellow>Unit 3A: Package delivery complaint (resolved)</Line>
              <Line yellow>Floor 7: Elevator maintenance needed (scheduled next week)</Line>
              <Line yellow>Unit 2B: Noise complaint during quiet hours (warning issued)</Line>
              <Line red>Roof deck: Lock mechanism damaged (repair pending)</Line>
            </Section>
            <Divider />
            <Section title="RESIDENT NOTES:">
              <Line cyan>Unit 6C: Fitness instructor, hosts informal classes in lounge</Line>
              <Line cyan>Unit 4A: Works night shift, requested noise considerations</Line>
              <Line cyan>Unit 8D: Monthly mixer organizer, excellent tenant</Line>
            </Section>
          </>
        ),
      },
    },
  },

  "Cascade Heights": {
    content: (
      <>
        <Line cyan large bold>CASCADE HEIGHTS</Line>
        <Line yellow>"Waterfront Views. Urban Convenience."</Line>
        <Divider />
        <Line neon>Connecting to building network...</Line>
        <Line cyan>[RESIDENT ACCESS]</Line>
        <Divider />
        <DataTable data={[
          { label: "Units", value: "20 (5 floors, 4 per floor)" },
          { label: "Occupancy", value: "85% (3 vacancies)" },
          { label: "Built", value: "2070" },
          { label: "Condition", value: "Fair (water damage repairs ongoing)" },
        ]} />
        <Divider />
        <Section title="AMENITIES:">
          <Line neon>• Canal dock access (residents only, small boats permitted)</Line>
          <Line neon>• Shared workspace (floor 1, wifi included)</Line>
          <Line neon>• Laundry facilities (coin-operated, frequent breakdowns)</Line>
          <Line neon>• Security cameras (lobby, hallways, dock)</Line>
        </Section>
        <Divider />
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="380¤/month" />
          <KeyValue label="1-bedroom" value="520¤/month" />
          <KeyValue label="2-bedroom (canal view)" value="750¤/month" />
          <Line yellow>Utilities: Additional 90-130¤/month</Line>
        </Section>
        <Divider />
        <Section title="KNOWN ISSUES:">
          <Line pink>• Basement floods during heavy rain (monthly occurrence)</Line>
          <Line pink>• Elevator out of service (repair estimate: 3 months)</Line>
          <Line pink>• Dock gate lock broken (residents prop it open)</Line>
        </Section>
        <Divider />
        <Line pink>"Character building. Literally."</Line>
      </>
    ),
    related_commands: {
      "Dock Security Camera": {
        content: (
          <Camera
            id="cascade-dock-cam"
            location="Cascade Heights - Rear dock entrance"
            coverage="Dock entrance, partial water view"
            status="ACTIVE"
            recording={true}
            storage="Local server (basement, often offline)"
            timeline={[
              "08:15 → Resident departed by small boat",
              "14:30 → Delivery boat docked (package dropoff)",
              "19:45 → Resident returned, boat secured",
              "23:00 → Unknown individual near dock (obscured by lens damage)",
            ]}
            blindSpots={[
              "Left side of dock (camera angle issue)",
              "Under dock platform (structural obstruction)",
              "Water approach from east (lens damage)",
            ]}
            lastMaintenance="8 months ago (overdue for cleaning/repair)"
          />
        ),
      },

      "Unit 2A Safe": {
        password: {
          pw: "tides",
          hint: "What the canal experiences twice daily",
          hintStrength: 1,
        },
        content: (
          <Safe
            id="cascade-unit2a-verne"
            model="PS-250"
            location="Unit 2A, hall closet upper shelf"
            owner="Jonas Verne (boat repair technician)"
            security="Combination lock (mechanical + digital)"
            lastAccess="1 week ago"
            physical={[
              { item: "Cash", desc: "95¤ (mixed bills, rent savings)" },
              { item: "Documents", desc: "Boat registration, repair licenses" },
              { item: "Tools", desc: "Precision screwdriver set (professional quality)" },
              { item: "Personal", desc: "Wedding ring (divorced, kept for sentimental reasons)" },
            ]}
            digital={[
              { item: "Credchip", desc: "22¤ (transferable)" },
              { item: "Coupon code", desc: "BOATPARTS15 (15% off marine supplies, expires in 2 months)" },
            ]}
            notes="Safe showing signs of water damage (external), still functional"
          />
        ),
      },
    },
  },

  // ============================================================================
  // SHOPS & SERVICES
  // ============================================================================

  "Sanchez Electronics & Repair": {
    content: (
      <>
        <Line cyan large bold>SANCHEZ ELECTRONICS & REPAIR</Line>
        <Line yellow>"Interdimensional Selection. Dimensional Prices."</Line>
        <Divider />
        <Line neon>Connecting to shop network...</Line>
        <Line cyan>[CUSTOMER ACCESS]</Line>
        <Divider />
        <Section title="SERVICES:">
          <Line neon>• Electronics sales (TVs, tablets, phones)</Line>
          <Line neon>• Device repair (no warranty questions asked)</Line>
          <Line neon>• Custom installations (specialty work)</Line>
          <Line neon>• "Unique" equipment (ask owner for details)</Line>
        </Section>
        <Divider />
        <Section title="FEATURED PRODUCTS:">
          <KeyValue label="Smart TV (Refurbished)" value="380¤" />
          <KeyValue label="Tablet (Various brands)" value="150-300¤" />
          <KeyValue label="Phone (Unlocked)" value="100-250¤" />
          <KeyValue label="Mystery Box" value="50¤ (contents vary)" />
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 11:00-23:00 (Mon-Sat), 12:00-20:00 (Sun)</Line>
          <Line neon>Location: Market district, corner unit</Line>
          <Line neon>Owner: R. Sanchez (often smells like alcohol, burps frequently)</Line>
        </Section>
        <Divider />
        <Section title="STORE POLICIES:">
          <Line yellow>• All sales final (seriously, don't even try)</Line>
          <Line yellow>• Repairs: 3-5 day turnaround (maybe longer)</Line>
          <Line red>• Management not responsible for existential side effects</Line>
        </Section>
        <Divider />
        <Line pink>"W-we've got everything you need, *burp* probably."</Line>
      </>
    ),
    related_commands: {
      "access_shop_inventory": {
        password: {
          pw: "portalgun",
          hint: "Device in back room (broken, parts only)",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[INVENTORY DATABASE]</Line>
            <Line yellow>Last updated: 2 hours ago</Line>
            <Divider />
            <Section title="STANDARD STOCK:">
              <Line neon>Smart TVs: 8 units (refurbished, various brands)</Line>
              <Line neon>Tablets: 15 units (mixed condition)</Line>
              <Line neon>Phones: 22 units (unlocked, some carrier-locked)</Line>
              <Line neon>Cables & adapters: High stock (universal compatibility)</Line>
            </Section>
            <Divider />
            <Section title="BACK ROOM (Special Items):">
              <Line cyan>Weird cable boxes: 3 units (claim to receive "infinite channels")</Line>
              <Line cyan>Portal device: 1 unit (BROKEN - parts only, DO NOT ACTIVATE)</Line>
              <Line cyan>Strange blue boxes: 4 units (unknown purpose, owner won't sell)</Line>
              <Line yellow>Green vials: Unknown quantity (locked cabinet, do not touch)</Line>
            </Section>
            <Divider />
            <Section title="REPAIR QUEUE:">
              <Line yellow>Smart fridge: Firmware issue (waiting for parts)</Line>
              <Line yellow>Game console: Overheating problem (in progress)</Line>
              <Line yellow>Cyberdeck: Unknown fault (customer waiting, frustrated)</Line>
            </Section>
            <Divider />
            <Line red>Note: Back room inventory NOT for sale under any circumstances</Line>
          </>
        ),
      },

      "Demo Console": {
        content: (
          <>
            <Line smoke large bold>[DEMO CONSOLE - SHOP FLOOR]</Line>
            <Line cyan>Location: Display near front counter</Line>
            <Divider />
            <DataTable data={[
              { label: "Model", value: "CyStation Pro (Modified - unknown alterations)" },
              { label: "Status", value: "ON (demo mode, glitches occasionally)" },
              { label: "Last Reset", value: "Yesterday" },
              { label: "Purpose", value: "Customer testing & owner's personal use" },
            ]} />
            <Divider />
            <Section title="INSTALLED GAMES:">
              <Line neon>→ Life Simulator VR (suspiciously realistic, 200+ playthroughs)</Line>
              <Line neon>→ Cosmic Horror Adventure (banned in 3 districts, owner doesn't care)</Line>
              <Line neon>→ Dimension Jumper (physics seem wrong, makes players dizzy)</Line>
              <Line neon>→ Cable Surfing Simulator (connects to weird cable boxes?)</Line>
              <Line neon>→ Pocket Creatures (creature collection game, complete collection)</Line>
            </Section>
            <Divider />
            <Section title="HIGH SCORES:">
              <Line yellow>Life Simulator VR: "R_Sanchez" - 55 years (off the grid ending)</Line>
              <Line yellow>Dimension Jumper: "Morty" - 2.4M points (second place)</Line>
              <Line yellow>Pocket Creatures: "BirdPrsn" - All 151 captured</Line>
            </Section>
            <Divider />
            <Line pink>"Don't ask about the modifications. Just... don't."</Line>
          </>
        ),
      },

      "Back Room Safe": {
        password: {
          pw: "C137",
          hint: "Dimension number written on portal device",
          hintStrength: 1,
        },
        content: (
          <Safe
            id="sanchez-garage-backroom"
            model="???"
            location="Back room, behind shelving unit"
            owner="R. Sanchez"
            security="Unknown technology (not standard)"
            lastAccess="Unknown (no logs available)"
            physical={[
              { item: "Cash", desc: "Unknown amount (safe makes weird noises)" },
              { item: "Documents", desc: "Patents? Blueprints? (language unrecognizable)" },
              { item: "Vials", desc: "Green liquid (DO NOT CONSUME)" },
              { item: "Device components", desc: "Unknown purpose (possibly dangerous)" },
            ]}
            digital={[
              { item: "Credchip", desc: "28¤ (transferable, standard currency)" },
              { item: "App", desc: "Inter-D Cable Guide (0¤ value, completely non-functional)" },
              { item: "Data file", desc: "boogeraids_aidsbooger.enc (encrypted, unknown contents)" },
            ]}
            notes="⚠ Safe appears to phase in and out of visibility occasionally"
          />
        ),
      },
    },
  },

  "Gilded Oddities Pawn": {
    content: (
      <>
        <Line cyan large bold>GILDED ODDITIES PAWN</Line>
        <Line yellow>"Treasures. Trash. Tales."</Line>
        <Divider />
        <Line neon>Accessing shop systems...</Line>
        <Line cyan>[CUSTOMER PORTAL]</Line>
        <Divider />
        <Section title="SERVICES:">
          <Line neon>• Buy used goods (we'll buy almost anything)</Line>
          <Line neon>• Sell items (cash offers, same day)</Line>
          <Line neon>• Pawn items (30-90 day terms, 18% interest)</Line>
          <Line neon>• Appraisals (free for first 3 items)</Line>
        </Section>
        <Divider />
        <Section title="CURRENT INVENTORY (Highlights):">
          <Line cyan>Jewelry: Various pieces (rings, watches, chains)</Line>
          <Line cyan>Electronics: Tablets, phones, older cyberware</Line>
          <Line cyan>Tools: Power tools, precision equipment</Line>
          <Line cyan>Curiosities: Antiques, collectibles, weird stuff</Line>
          <Line yellow>Display: Golden statue (NOT FOR SALE - shop mascot)</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 09:00-19:00 (Mon-Sat), Closed Sunday</Line>
          <Line neon>Location: Near waterfront, industrial district edge</Line>
          <Line neon>Owner: Changes frequently (current: "Roger Smith")</Line>
        </Section>
        <Divider />
        <Section title="STORE LORE:">
          <Line pink>The golden statue has been here for 15 years</Line>
          <Line pink>Previous owners: 8 total (all left under unusual circumstances)</Line>
          <Line pink>Current owner refuses to sell statue despite high offers</Line>
          <Line red>Locals claim the shop is cursed (owner says it's "character")</Line>
        </Section>
        <Divider />
        <Line pink>"Every item tells a story. Most of them are sad."</Line>
      </>
    ),
    related_commands: {
      "Shop Safe": {
        password: {
          pw: "persona",
          hint: "What the owner seems to change regularly",
          hintStrength: 1,
        },
        content: (
          <Safe
            id="pawn-shop-counter"
            model="DS-350"
            location="Behind counter, floor-mounted"
            owner="Roger Smith (this week's name)"
            security="Combination + voice recognition"
            lastAccess="This morning (opening)"
            physical={[
              { item: "Cash", desc: "520¤ (daily receipts + emergency fund)" },
              { item: "High-value jewelry", desc: "Wedding rings (3), gold chains (2)" },
              { item: "Documents", desc: "Business license, insurance papers" },
              { item: "Personal items", desc: "Collection of disguises (wigs, glasses, prosthetics)" },
            ]}
            digital={[
              { item: "Credchip", desc: "18¤ (transferable)" },
              { item: "Coupon code", desc: "PAWN20 (20% bonus on next pawn, expires in 1 month)" },
            ]}
            notes="Voice recognition changes weekly (matches current 'persona')"
          />
        ),
      },

      access_records: {
        password: {
          pw: "goldenturd",
          hint: "What locals call the shop mascot statue",
          hintStrength: 3,
        },
        content: (
          <>
            <Line smoke large bold>[PAWN RECORDS]</Line>
            <Line cyan>Active loans & recent transactions</Line>
            <Divider />
            <Section title="RECENT PAWNS (Last 7 days):">
              <Line neon>Item: Electric guitar, Loan: 75¤, Due: 28 days</Line>
              <Line neon>Item: Smartwatch, Loan: 50¤, Due: 24 days</Line>
              <Line neon>Item: Antique camera, Loan: 60¤, Due: 19 days</Line>
              <Line yellow>Item: Wedding dress, Loan: 40¤, Due: 45 days (extended term)</Line>
            </Section>
            <Divider />
            <Section title="HIGH-VALUE INVENTORY:">
              <Line cyan>Vintage sword collection: 420¤ (display case)</Line>
              <Line cyan>Refurbished cyberware: 280¤ (various components)</Line>
              <Line cyan>Antique music box: 180¤ (plays haunting melody)</Line>
            </Section>
            <Divider />
            <Section title="BACK ROOM (Not For Sale):">
              <Line pink>The golden statue (shop mascot, mysterious origins)</Line>
              <Line pink>Owner's personal effects (changes with each owner)</Line>
              <Line pink>Previous owners' belongings (unclaimed)</Line>
            </Section>
            <Divider />
            <Section title="OWNER HISTORY:">
              <Line yellow>2067-2068: Original owner (disappeared)</Line>
              <Line yellow>2068-2070: Second owner (committed suicide)</Line>
              <Line yellow>2070-2072: Third owner (killed in robbery)</Line>
              <Line yellow>2072-2074: Fourth owner (vanished overnight)</Line>
              <Line yellow>2074-2076: Fifth owner (fatal accident)</Line>
              <Line yellow>2076-2078: Sixth owner (murdered)</Line>
              <Line yellow>2078-2080: Seventh owner (heart attack)</Line>
              <Line yellow>2080-Present: Current owner (Roger Smith)</Line>
            </Section>
          </>
        ),
      },
    },
  },

  "Cipher Solutions": {
    content: (
      <>
        <Line cyan large bold>CIPHER SOLUTIONS</Line>
        <Line yellow>"Data Recovery. System Security. Discretion Guaranteed."</Line>
        <Divider />
        <Line neon>Connecting to business terminal...</Line>
        <Line cyan>[PUBLIC ACCESS]</Line>
        <Divider />
        <Section title="SERVICES OFFERED:">
          <Line neon>• Data recovery (deleted files, damaged drives)</Line>
          <Line neon>• Security consulting (personal & small business)</Line>
          <Line neon>• Network setup & maintenance</Line>
          <Line neon>• Digital forensics (legal & private investigations)</Line>
          <Line neon>• "Special projects" (consultation required)</Line>
        </Section>
        <Divider />
        <Section title="PRICING:">
          <KeyValue label="Data Recovery" value="150-500¤" />
          <KeyValue label="Security Audit" value="300¤" />
          <KeyValue label="Network Setup" value="200-600¤" />
          <KeyValue label="Forensics" value="400¤+/day" />
          <Line yellow>Special projects: Quote upon consultation</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 10:00-18:00 (Mon-Fri), Appointments only</Line>
          <Line neon>Location: Office building, 3rd floor, Suite 307</Line>
          <Line neon>Proprietor: "Cipher" (no real name provided)</Line>
        </Section>
        <Divider />
        <Section title="POLICIES:">
          <Line yellow>• Confidentiality guaranteed (no records shared)</Line>
          <Line yellow>• Payment upfront for new clients</Line>
          <Line yellow>• No corporate contracts (independents only)</Line>
          <Line red>• Illegal requests declined (officially)</Line>
        </Section>
        <Divider />
        <Line pink>"Your secrets are safe. From everyone except me."</Line>
      </>
    ),
    related_commands: {
      "Office Workstation": {
        password: {
          pw: "encryption",
          hint: "What Cipher specializes in for security",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[WORKSTATION - MAIN TERMINAL]</Line>
            <Line cyan>Location: Office Suite 307, primary desk</Line>
            <Divider />
            <DataTable data={[
              { label: "Model", value: "Custom-built (high-end components)" },
              { label: "Status", value: "ON (multiple VMs running)" },
              { label: "Security", value: "Military-grade encryption" },
              { label: "Last Login", value: "4 hours ago" },
            ]} />
            <Divider />
            <Section title="ACTIVE PROJECTS:">
              <Line neon>→ Data recovery: Corporate exec's deleted emails (80% complete)</Line>
              <Line neon>→ Security audit: Small business network (in progress)</Line>
              <Line neon>→ Forensics: Divorce case evidence (waiting on payment)</Line>
              <Line yellow>→ Special project: [ENCRYPTED] (no details visible)</Line>
            </Section>
            <Divider />
            <Section title="RECENT FILES:">
              <Line cyan>Client_447_Recovery.log (2 days ago)</Line>
              <Line cyan>NetworkMap_SmallBiz_082.png (yesterday)</Line>
              <Line cyan>Invoice_Template.docx (this morning)</Line>
              <Line yellow>Personal_Notes_Encrypted.txt (unknown date)</Line>
            </Section>
            <Divider />
            <Section title="INSTALLED TOOLS:">
              <Line neon>Professional data recovery suite</Line>
              <Line neon>Network analysis & penetration testing tools</Line>
              <Line neon>Forensic imaging software</Line>
              <Line neon>Custom scripts (proprietary)</Line>
            </Section>
          </>
        ),
      },

      "Office Safe": {
        password: {
          pw: "decryption",
          hint: "Opposite of encryption",
          hintStrength: 1,
        },
        content: (
          <Safe
            id="cipher-suite-307"
            model="DS-500X"
            location="Suite 307, wall-mounted behind desk"
            owner="Cipher (proprietor)"
            security="Biometric + quantum encryption"
            lastAccess="Yesterday evening"
            physical={[
              { item: "Cash", desc: "680¤ (client payments, emergency fund)" },
              { item: "USB drives", desc: "Client data backups (3 drives, encrypted)" },
              { item: "Documents", desc: "Business license, insurance, client NDAs" },
              { item: "Personal credchip", desc: "Unknown amount (separate from business)" },
            ]}
            digital={[
              { item: "Credchip", desc: "95¤ (business account, transferable)" },
            ]}
            notes="⚠ Safe features quantum encryption - extremely difficult to crack"
          />
        ),
      },
    },
  },

  // ============================================================================
  // ENTERTAINMENT & VENUES
  // ============================================================================

  "The Compiler Bar": {
    content: (
      <>
        <Line cyan large bold>THE COMPILER BAR</Line>
        <Line yellow>"Where Code Meets Culture."</Line>
        <Divider />
        <Line neon>Connecting to bar terminal...</Line>
        <Line cyan>[PUBLIC ACCESS]</Line>
        <Divider />
        <Section title="BAR MENU:">
          <KeyValue label="Beer (craft local)" value="10¤" />
          <KeyValue label="Coffee (actually good)" value="6¤" />
          <KeyValue label="Whiskey (imported)" value="15¤" />
          <KeyValue label="Energy Drink" value="7¤" />
          <KeyValue label="The Infinite Loop" value="12¤ (house special)" />
        </Section>
        <Divider />
        <Section title="FOOD MENU:">
          <Line neon>Code-fuel nachos: 12¤</Line>
          <Line neon>Syntax error sandwich: 14¤</Line>
          <Line neon>Debugging pizza (personal): 16¤</Line>
          <Line neon>Stack overflow fries: 8¤</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Open: 14:00-02:00 (every day)</Line>
          <Line neon>Location: Tech district, near startup corridor</Line>
          <Line neon>Atmosphere: Casual, tech-heavy crowd</Line>
        </Section>
        <Divider />
        <Section title="FEATURES:">
          <Line yellow>• Free wifi (gigabit fiber, no restrictions)</Line>
          <Line yellow>• Charging stations at every table</Line>
          <Line yellow>• Weekly coding meetups (Thursdays, 19:00)</Line>
          <Line yellow>• Whiteboard wall (collaborative problem-solving)</Line>
        </Section>
        <Divider />
        <Line pink>"// TODO: Get another drink"</Line>
      </>
    ),
    related_commands: {
      "Bar Jukebox": {
        content: (
          <Jukebox
            model="JB-808"
            location="Near pool table, corner booth area"
            cost="2¤"
            songs={[
              { title: "Recursion Blues", artist: "The Stack Overflow", genre: "Synthwave-rock fusion", color: 'cyan' },
              { title: "Infinite Loop", artist: "Compiled Dreams", genre: "Electronic", color: 'purple' },
              { title: "Garbage Collection", artist: "Memory Leaks", genre: "Industrial", color: 'green' },
              { title: "404 Not Found", artist: "Error State", genre: "Glitch-hop", color: 'red' },
              { title: "Binary Sunset", artist: "Digital Horizons", genre: "Ambient synthwave", color: 'orange' },
            ]}
          />
        ),
      },

      "Bar Safe": {
        password: {
          pw: "algorithm",
          hint: "What programmers write to solve problems",
          hintStrength: 2,
        },
        content: (
          <Safe
            id="compiler-bar-safe"
            model="DS-300"
            location="Behind bar, under counter"
            owner="Morgan Patel (bar owner)"
            security="Electronic keypad"
            lastAccess="6 hours ago (shift change)"
            physical={[
              { item: "Cash", desc: "340¤ (daily receipts from card payments)" },
              { item: "Documents", desc: "Liquor license, business permits" },
              { item: "Personal credchip", desc: "Unknown amount (owner's personal funds)" },
            ]}
            digital={[
              { item: "Credchip", desc: "32¤ (bar petty cash, transferable)" },
              { item: "Coupon code", desc: "COMPILER25 (25% off next meetup event, expires in 1 month)" },
            ]}
            notes="Safe checked at opening (14:00) and closing (02:00)"
          />
        ),
      },

      access_internal: {
        password: {
          pw: "debug",
          hint: "What programmers do when code doesn't work",
          hintStrength: 3,
        },
        content: (
          <>
            <Line smoke large bold>[BAR INTERNAL SYSTEMS]</Line>
            <Line cyan>[STAFF ACCESS]</Line>
            <Divider />
            <Section title="TODAY'S METRICS:">
              <Line neon>Transactions: 67 (as of current time)</Line>
              <Line neon>Revenue: 823¤ (above average for weekday)</Line>
              <Line neon>Most ordered: Coffee (32), Beer (28), Energy drinks (18)</Line>
              <Line neon>Occupancy: 24 customers (moderate)</Line>
            </Section>
            <Divider />
            <Section title="INVENTORY ALERTS:">
              <Line yellow>Low stock: Imported whiskey, craft beer (IPA)</Line>
              <Line yellow>Reorder needed: Coffee beans, energy drinks</Line>
              <Line red>Out of stock: The Infinite Loop ingredients (signature drink)</Line>
            </Section>
            <Divider />
            <Section title="UPCOMING EVENTS:">
              <Line cyan>Tomorrow: Coding meetup (expected 15-20 attendees)</Line>
              <Line cyan>This weekend: Live music - "The Exception Handlers"</Line>
              <Line cyan>Next week: Startup pitch night (reserved area)</Line>
            </Section>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // CITY INFRASTRUCTURE & DEVICES
  // ============================================================================

  "Public Terminal (Tech District)": {
    content: (
      <>
        <Line smoke large bold>[PUBLIC INFORMATION TERMINAL]</Line>
        <Line cyan>Location: Tech district plaza, near transit stop</Line>
        <Divider />
        <DataTable data={[
          { label: "Status", value: "OPERATIONAL" },
          { label: "Purpose", value: "City directory, maps, internet access" },
          { label: "Cost", value: "10¤ per 15 minutes (internet)" },
          { label: "Condition", value: "Good (regular maintenance)" },
        ]} />
        <Divider />
        <Section title="AVAILABLE SERVICES:">
          <Line neon>• City maps & navigation</Line>
          <Line neon>• Transit schedules & routes</Line>
          <Line neon>• Business directory</Line>
          <Line neon>• Emergency contacts</Line>
          <Line neon>• Public announcements</Line>
          <Line neon>• Internet access (paid)</Line>
        </Section>
        <Divider />
        <Section title="RECENT SEARCHES (Anonymous):">
          <Line pink>→ "cipher solutions reviews"</Line>
          <Line pink>→ "data recovery success rate"</Line>
          <Line pink>→ "is AI sentient yet"</Line>
          <Line pink>→ "best bars near me"</Line>
          <Line pink>→ "how to leave cy permanently"</Line>
        </Section>
        <Divider />
        <Line yellow>Terminal serviced weekly by Cynergy infrastructure division</Line>
      </>
    ),
  },

  "Smart Vending Machine (SMV_729)": {
    content: (
      <VendingMachine
        id="tech-district-plaza-vending"
        model="SVM-700"
        location="Tech district plaza, near benches"
        drinks={[
          { name: 'ENERGY DRINK', pattern: 'lines', color: 'yellow', available: true },
          { name: 'WATER BOTTLE', pattern: 'waves', color: 'blue', available: true },
          { name: 'PROTEIN BAR', pattern: 'blocks', color: 'green', available: true },
          { name: 'SYNTH-CHIPS', pattern: 'dots', color: 'orange', available: true },
          { name: 'MYSTERY SNACK', pattern: 'circles', color: 'purple', available: true },
        ]}
      />
    ),
    related_commands: {
      "Maintenance Access": {
        password: {
          pw: "restock",
          hint: "What you do when inventory runs low",
          hintStrength: 2,
        },
        content: (
          <MaintenanceAccess
            deviceModel="SVM-700"
            deviceId="PLAZA-VM-2891"
            firmwareVersion="v3.2.1"
            systemStatus="OPERATIONAL"
            uptime="12 days, 4 hours"
          />
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
                id="tech-plaza-vending-safe"
                model="VM-CASH-200"
                location="Internal cash collection box"
                owner="VendCorp (vending division)"
                security="Maintenance keypad"
                lastAccess="2 days ago (routine service)"
                physical={[
                  { item: "Coins", desc: "140¤ in change (mixed denominations)" },
                  { item: "Bills", desc: "80¤ (small bills)" },
                  { item: "Service log", desc: "Paper logbook (last 6 months)" },
                ]}
                digital={[
                  { item: "Credchip", desc: "95¤ (2 days of receipts, transferable)" },
                  { item: "Transaction log", desc: "Last 1000 purchases logged" },
                ]}
                notes="Machine empties to central vault weekly (Thursdays, 09:00)"
              />
            ),
          },
        },
      },
    },
  },

  "ATM (Tech District Corner)": {
    password: {
      pw: "fiatvalue",
      hint: "It’s worth something because everyone agrees it is",
      hintStrength: 1,
    },
    content: (
      <ATM
        id="tech-district-atm"
        model="ATM-600"
        location="Tech district, corner of Innovation Ave & 7th"
        network="CityBank Network"
        accountHolder="Sarah Chen (tech worker)"
        balance="847¤"
        recentTransactions={[
          "08:15 → Withdrawal: 100¤",
          "09:42 → Balance inquiry",
          "11:18 → Withdrawal: 60¤",
          "14:33 → Deposit: 200¤ (paycheck)",
          "16:08 → Withdrawal: 40¤",
        ]}
        lastService="5 days ago"
      />
    ),
  },

  "Traffic Signal Control (Innovation & 7th)": {
    content: (
      <>
        <Line smoke large bold>[TRAFFIC SIGNAL - INNOVATION AVE & 7TH ST]</Line>
        <Line cyan>Automated signal control system</Line>
        <Divider />
        <DataTable data={[
          { label: "Operation Mode", value: "AUTOMATED (adaptive timing)" },
          { label: "Cycle Time", value: "80 seconds (adjusts to traffic)" },
          { label: "Last Malfunction", value: "6 weeks ago (resolved)" },
          { label: "Pedestrian Signals", value: "FUNCTIONAL" },
        ]} />
        <Divider />
        <Section title="CURRENT TIMING:">
          <Line neon>Innovation Ave (East-West): 40 seconds green</Line>
          <Line neon>7th St (North-South): 30 seconds green</Line>
          <Line neon>All-red phase: 5 seconds (safety buffer)</Line>
          <Line neon>Pedestrian crossing: 20 seconds</Line>
        </Section>
        <Divider />
        <Section title="TRAFFIC METRICS (Last Hour):">
          <Line cyan>Vehicles: 287 (Innovation Ave), 156 (7th St)</Line>
          <Line cyan>Pedestrians: 67 crossings</Line>
          <Line cyan>Emergency vehicle overrides: 1</Line>
          <Line cyan>Average wait time: 32 seconds</Line>
        </Section>
        <Divider />
        <Line yellow>Maintained by: Cynergy Infrastructure Division</Line>
      </>
    ),
  },

  "Streetlight Grid (Innovation Ave)": {
    content: (
      <>
        <Line smoke large bold>[STREETLIGHT CONTROL - INNOVATION AVENUE]</Line>
        <Line cyan>Grid management system (45 units)</Line>
        <Divider />
        <Section title="CURRENT STATUS:">
          <DataTable data={[
            { label: "Active lights", value: "43/45 (95.6%)" },
            { label: "Malfunctioning", value: "2 units (repair scheduled)" },
            { label: "Power consumption", value: "Normal (energy-saving mode active)" },
            { label: "Brightness", value: "75% (adaptive based on ambient light)" },
          ]} />
        </Section>
        <Divider />
        <Section title="SCHEDULED OPERATIONS:">
          <Line neon>Auto-on: 18:30 (dusk sensor)</Line>
          <Line neon>Auto-off: 06:00 (dawn sensor)</Line>
          <Line neon>Dimming: 23:00-05:00 (reduced brightness during low traffic)</Line>
        </Section>
        <Divider />
        <Section title="MAINTENANCE LOG:">
          <Line yellow>Last service: 3 weeks ago</Line>
          <Line yellow>Next scheduled: 5 weeks</Line>
          <Line yellow>Failed units: #23 (ballast issue), #37 (vandalism)</Line>
          <Line red>Vandalism incidents: 2 this quarter</Line>
        </Section>
        <Divider />
        <Line cyan>System managed by Cynergy Water & Power Co.</Line>
      </>
    ),
  },

  // ============================================================================
  // GAME REFERENCES & EASTER EGGS
  // ============================================================================

  "NetBattler Arcade (Tech Mall)": {
    content: (
      <>
        <Line cyan large bold>NETBATTLER ARCADE</Line>
        <Line yellow>"Jack In. Battle. Win."</Line>
        <Divider />
        <Line neon>Connecting to arcade network...</Line>
        <Line cyan>[PLAYER ACCESS]</Line>
        <Divider />
        <Section title="ARCADE INFO:">
          <Line neon>Location: Tech district shopping mall, 2nd floor</Line>
          <Line neon>Hours: 10:00-22:00 (every day)</Line>
          <Line neon>Cost: 5¤ per game, 20¤ for 5 games</Line>
          <Line neon>Players online: 18 (across 12 terminals)</Line>
        </Section>
        <Divider />
        <Section title="AVAILABLE GAMES:">
          <Line pink>→ NetBattle Arena (PvP virus busting)</Line>
          <Line pink>→ Chip Trader Simulator (collect & trade)</Line>
          <Line pink>→ Cyber World Explorer (story mode)</Line>
          <Line pink>→ Tournament Mode (weekly competitions)</Line>
        </Section>
        <Divider />
        <Section title="LEADERBOARD (This Week):">
          <Line yellow>1st: "MegaFan_42" - 2,847 points</Line>
          <Line yellow>2nd: "Roll_Backup" - 2,301 points</Line>
          <Line yellow>3rd: "HubStyle" - 1,998 points</Line>
        </Section>
        <Divider />
        <Section title="UPCOMING TOURNAMENT:">
          <Line cyan>Date: This Saturday, 14:00</Line>
          <Line cyan>Prize: 200¤ + Rare chip code</Line>
          <Line cyan>Registration: Open (12/16 slots filled)</Line>
        </Section>
        <Divider />
        <Line pink>"Jack in! MegaMan, execute!"</Line>
      </>
    ),
  },

  "Trauma Response Station (Medical District)": {
    content: (
      <>
        <Line cyan large bold>TRAUMA RESPONSE COORDINATION</Line>
        <Line yellow>"Critical Care. Rapid Deployment."</Line>
        <Divider />
        <Line neon>Accessing public information...</Line>
        <Line cyan>[EMERGENCY SERVICES PORTAL]</Line>
        <Divider />
        <Section title="SERVICE OVERVIEW:">
          <Line neon>Emergency medical response (platinum tier)</Line>
          <Line neon>Air & ground ambulance services</Line>
          <Line neon>Combat trauma specialists</Line>
          <Line neon>Corporate contract coverage</Line>
        </Section>
        <Divider />
        <Section title="RESPONSE TIMES:">
          <KeyValue label="Platinum Members" value="<3 minutes (air), <5 minutes (ground)" />
          <KeyValue label="Gold Members" value="<5 minutes (air), <8 minutes (ground)" />
          <KeyValue label="Silver Members" value="<10 minutes (ground only)" />
          <KeyValue label="Non-Members" value="Standard emergency services apply" />
        </Section>
        <Divider />
        <Section title="MEMBERSHIP FEES:">
          <Line yellow>Platinum: 5,000¤/month (individual), 15,000¤/month (family)</Line>
          <Line yellow>Gold: 2,500¤/month (individual), 7,500¤/month (family)</Line>
          <Line yellow>Silver: 800¤/month (individual), 2,000¤/month (family)</Line>
        </Section>
        <Divider />
        <Section title="COVERAGE AREAS:">
          <Line cyan>Central districts: Full air coverage</Line>
          <Line cyan>Mid-tier districts: Ground priority</Line>
          <Line cyan>Outer districts: Limited (contract dependent)</Line>
          <Line red>Slums: No service (corporate policy)</Line>
        </Section>
        <Divider />
        <Line pink>"Your life. Our priority. Their profit."</Line>
      </>
    ),
  },

  "Samurai Memorabilia Shop": {
    content: (
      <>
        <Line cyan large bold>CHROME & STEEL COLLECTIBLES</Line>
        <Line yellow>"Legends Never Die. They Just Get Merchandised."</Line>
        <Divider />
        <Line neon>Connecting to shop catalog...</Line>
        <Line cyan>[CUSTOMER ACCESS]</Line>
        <Divider />
        <Section title="FEATURED COLLECTIONS:">
          <Line pink>→ "Samurai" band merchandise (vintage & reproductions)</Line>
          <Line pink>→ Rockerboy memorabilia (various artists)</Line>
          <Line pink>→ Corporate war artifacts (authenticated pieces)</Line>
          <Line pink>→ Cyberpunk culture items (books, posters, media)</Line>
        </Section>
        <Divider />
        <Section title="HIGHLIGHTED ITEMS:">
          <KeyValue label="Samurai concert poster (2020)" value="450¤ (reproduction)" />
          <KeyValue label="Johnny's guitar replica" value="1,200¤ (limited edition)" />
          <KeyValue label="Alt Cunningham biography" value="35¤ (signed copy)" />
          <KeyValue label="Arasaka War memorabilia" value="Varies (ask owner)" />
        </Section>
        <Divider />
        <Section title="SPECIAL DRINKS (Bar Area):">
          <Line neon>"Johnny Silverhand Special": 18¤ (whiskey, ice, attitude)</Line>
          <Line neon>"Relic Runner": 15¤ (mystery cocktail, glows slightly)</Line>
          <Line neon>"Netrunner's Choice": 12¤ (energy drink + vodka)</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line cyan>Hours: 12:00-midnight (Mon-Sat), 14:00-22:00 (Sun)</Line>
          <Line cyan>Location: Entertainment district, near music venues</Line>
          <Line cyan>Atmosphere: Dark, nostalgic, chrome everywhere</Line>
        </Section>
        <Divider />
        <Line pink>"Wake the fuck up, samurai. We have merch to sell."</Line>
      </>
    ),
  },
};

export default FUN_COMMANDS;
