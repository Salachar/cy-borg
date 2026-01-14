import {
  Line,
  Box,
  Section,
  ListItem,
  Warning,
  Divider,
  KeyValue,
  DataTable,
} from '../TerminalComponents';

export const FUN_COMMANDS = {

  // ============================================================================
  // APARTMENT COMPLEXES
  // ============================================================================

  "Dragonscale Apartments": {
    content: (
      <>
        <Line cyan large bold>DRAGONSCALE APARTMENTS</Line>
        <Line yellow>"Affordable Living with a Fantasy Theme"</Line>
        <Divider />
        <Line neon>Accessing building management...</Line>
        <Line cyan>[RESIDENT PORTAL]</Line>
        <Divider />
        <Section title="BUILDING INFO:">
          <DataTable data={[
            { label: "Units", value: "36 (9 floors, 4 per floor)" },
            { label: "Occupancy", value: "89% (4 vacancies)" },
            { label: "Built", value: "2069" },
            { label: "Condition", value: "Fair (fantasy murals peeling)" },
          ]} />
        </Section>
        <Divider />
        <Section title="AMENITIES:">
          <Line neon>• Laundry room (ground floor) - 5¤ wash, 3¤ dry</Line>
          <Line neon>• "Dragon's Lair" recreation room (board game library)</Line>
          <Line neon>• Rooftop garden (residents only)</Line>
          <Line neon>• Package lockers (lobby)</Line>
        </Section>
        <Divider />
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="380¤/month" />
          <KeyValue label="1-bedroom" value="520¤/month" />
          <KeyValue label="2-bedroom" value="720¤/month" />
          <Line yellow>Utilities: Additional 90-130¤/month</Line>
        </Section>
        <Divider />
        <Section title="BUILDING QUIRKS:">
          <Line pink>• Manager insists residents call units "chambers"</Line>
          <Line pink>• Monthly D&D game in recreation room (Tuesdays, 19:00)</Line>
          <Line pink>• Elevator plays fantasy tavern music</Line>
        </Section>
        <Divider />
        <Line pink>"Roll for initiative on your rent payment."</Line>
      </>
    ),
    related_commands: {
      "Recreation Room Console (Dragonscale)": {
        content: (
          <>
            <Line smoke large bold>[GAME CONSOLE - CHAMBER 1A]</Line>
            <Line cyan>Location: Recreation room, next to board game shelf</Line>
            <Divider />
            <DataTable data={[
              { label: "Model", value: "CyStation Pro" },
              { label: "Status", value: "ON (currently idle)" },
              { label: "Last Played", value: "2 hours ago" },
              { label: "User Account", value: "BUILDING_SHARED" },
            ]} />
            <Divider />
            <Section title="INSTALLED GAMES:">
              <Line neon>→ Baldur's Gate: Dark Alliance (Classic RPG)</Line>
              <Line neon>→ Neverwinter Nights (Multiplayer enabled)</Line>
              <Line neon>→ Icewind Dale (Speedrun attempts: 47)</Line>
              <Line neon>→ Planescape Torment (Save file at final boss)</Line>
              <Line neon>→ Divinity: Original Sin 2 (Co-op campaign in progress)</Line>
            </Section>
            <Divider />
            <Line yellow>Note: Resident "Marcus the DM" maintains the console</Line>
            <Line pink>"Save files are sacred. Delete at your own peril."</Line>
          </>
        ),
      },

      "Unit 7D Safe (Dragonscale)": {
        password: {
          pw: "d20",
          hint: "The die that matters most",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[PERSONAL SAFE - MODEL PS-200]</Line>
            <Line cyan>Location: Unit 7D, bedroom closet</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "LOCKED" },
              { label: "Security", value: "4-digit PIN" },
              { label: "Last Access", value: "4 days ago" },
              { label: "Owner", value: "Marcus Thorne (DM extraordinaire)" },
            ]} />
            <Divider />
            <Section title="ESTIMATED CONTENTS:">
              <Line yellow>Cash: 150¤ (rent money)</Line>
              <Line yellow>Vintage dice collection (sentimental value)</Line>
              <Line yellow>Campaign notes (handwritten, precious)</Line>
              <Line yellow>Collectible miniatures (painted)</Line>
            </Section>
            <Divider />
            <Line neon>Wall-mounted safe, installed 2 years ago</Line>
          </>
        ),
      },

      access_dragonscale_management: {
        password: {
          pw: "thorne",
          hint: "Building manager's last name",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[BUILDING MANAGEMENT SYSTEM]</Line>
            <Line cyan>[MANAGER ACCESS]</Line>
            <Divider />
            <Section title="RECENT ISSUES:">
              <Line yellow>Unit 3B: Noise complaint (D&D session too loud)</Line>
              <Line yellow>Floor 5: Hallway light flickering</Line>
              <Line yellow>Unit 8A: Late payment (2 days overdue)</Line>
              <Line red>Recreation room: Board game theft reported (Settlers of Catan)</Line>
            </Section>
            <Divider />
            <Section title="RESIDENT NOTES:">
              <Line cyan>Unit 7D: Runs weekly D&D games, reliable tenant</Line>
              <Line cyan>Unit 4C: Collects fantasy memorabilia, eccentric but quiet</Line>
              <Line cyan>Unit 2A: Always wears wizard robes to check mail</Line>
            </Section>
          </>
        ),
      },
    },
  },

  "Pied Piper Plaza": {
    content: (
      <>
        <Line cyan large bold>PIED PIPER PLAZA</Line>
        <Line yellow>"Tech-Forward Living Spaces"</Line>
        <Divider />
        <Line neon>Connecting to building network...</Line>
        <Line cyan>[RESIDENT ACCESS]</Line>
        <Divider />
        <Section title="BUILDING INFO:">
          <DataTable data={[
            { label: "Units", value: "28 (7 floors, 4 per floor)" },
            { label: "Occupancy", value: "96% (1 vacancy)" },
            { label: "Built", value: "2075 (recent construction)" },
            { label: "Condition", value: "Excellent (smart building)" },
          ]} />
        </Section>
        <Divider />
        <Section title="AMENITIES:">
          <Line neon>• Gigabit fiber internet (included in rent)</Line>
          <Line neon>• Co-working space (24/7 access)</Line>
          <Line neon>• Smart home integration (every unit)</Line>
          <Line neon>• Rooftop server room (residents prohibited)</Line>
        </Section>
        <Divider />
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="450¤/month" />
          <KeyValue label="1-bedroom" value="600¤/month" />
          <KeyValue label="2-bedroom" value="850¤/month" />
          <Line yellow>Utilities: Additional 100-150¤/month</Line>
        </Section>
        <Divider />
        <Section title="RESIDENT DEMOGRAPHICS:">
          <Line pink>87% of residents work in tech</Line>
          <Line pink>Average age: 28</Line>
          <Line pink>3 failed startups currently operating from units</Line>
        </Section>
        <Divider />
        <Line pink>"Making the world a better place through minimal message-oriented transport layers."</Line>
      </>
    ),
    related_commands: {
      "Unit 3A Console (Pied Piper)": {
        content: (
          <>
            <Line smoke large bold>[GAME CONSOLE - UNIT 3A]</Line>
            <Line cyan>Location: Living room entertainment center</Line>
            <Divider />
            <DataTable data={[
              { label: "Model", value: "CyStation Elite" },
              { label: "Status", value: "ON (game running)" },
              { label: "Last Played", value: "Currently active" },
              { label: "User Account", value: "DEFINITELY_NOT_JARED" },
            ]} />
            <Divider />
            <Section title="INSTALLED GAMES:">
              <Line neon>→ Tech Tycoon Simulator (800+ hours played)</Line>
              <Line neon>→ Startup Story (All achievements unlocked)</Line>
              <Line neon>→ Code Combat Arena (Online ranked: Diamond tier)</Line>
              <Line neon>→ Valley of Dreams (Parody game, 100% completion)</Line>
              <Line neon>→ Compression Quest (Speedrun record: 12min 34sec)</Line>
            </Section>
            <Divider />
            <Section title="RECENT ACTIVITY:">
              <Line yellow>Currently playing: Tech Tycoon Simulator</Line>
              <Line yellow>Company name: "Not Pied Piper"</Line>
              <Line yellow>Current valuation: 47 million (in-game currency)</Line>
            </Section>
            <Divider />
            <Line pink>"This guy fucks." - Achievement unlocked</Line>
          </>
        ),
      },

      "Co-Working Space Safe (Pied Piper)": {
        password: {
          pw: "hooli",
          hint: "The enemy of all startups",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[SHARED SAFE - CO-WORKING SPACE]</Line>
            <Line cyan>Location: Co-working space, under desk</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "LOCKED" },
              { label: "Security", value: "Digital keypad" },
              { label: "Last Access", value: "Today, 14:23" },
              { label: "Purpose", value: "Petty cash for building events" },
            ]} />
            <Divider />
            <Section title="ESTIMATED CONTENTS:">
              <Line yellow>Cash: 180¤ (pizza fund)</Line>
              <Line yellow>Spare key cards (building access)</Line>
              <Line yellow>USB drive labeled "COMPRESSION ALGORITHM"</Line>
            </Section>
            <Divider />
            <Line neon>Checked weekly by building manager</Line>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // SHOPS
  // ============================================================================

  "Interdimensional Cable & Electronics": {
    content: (
      <>
        <Line cyan large bold>INTERDIMENSIONAL CABLE & ELECTRONICS</Line>
        <Line yellow>"Infinite Channels. Infinite Possibilities."</Line>
        <Divider />
        <Line neon>Connecting to shop network...</Line>
        <Line cyan>[CUSTOMER ACCESS]</Line>
        <Divider />
        <Section title="SERVICES:">
          <Line neon>• TV & electronics sales</Line>
          <Line neon>• Cable/streaming installation</Line>
          <Line neon>• Device repair (no questions asked)</Line>
          <Line neon>• "Special" channel packages (wink wink)</Line>
        </Section>
        <Divider />
        <Section title="FEATURED PRODUCTS:">
          <KeyValue label="Smart TV (Basic)" value="450¤" />
          <KeyValue label="Smart TV (Premium)" value="890¤" />
          <KeyValue label="Streaming Box" value="120¤" />
          <KeyValue label="Mystery Box Special" value="???¤" />
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 11:00-23:00 (Mon-Sat), 12:00-20:00 (Sun)</Line>
          <Line neon>Location: Market district, near canal</Line>
          <Line neon>Owner: Rick (no last name provided)</Line>
        </Section>
        <Divider />
        <Section title="STORE POLICIES:">
          <Line yellow>• All sales final (seriously, don't ask)</Line>
          <Line yellow>• Warranty void if you're from dimension C-137</Line>
          <Line red>• Management not responsible for existential crises</Line>
        </Section>
        <Divider />
        <Line pink>"Wubba lubba dub dub! That's our slogan!"</Line>
      </>
    ),
    related_commands: {
      access_shop_inventory: {
        password: {
          pw: "portal",
          hint: "How Rick gets around",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[INVENTORY DATABASE]</Line>
            <Line yellow>Last updated: 30 minutes ago</Line>
            <Divider />
            <Section title="STANDARD STOCK:">
              <Line neon>Smart TVs: 12 units (various brands)</Line>
              <Line neon>Streaming devices: 24 units</Line>
              <Line neon>Cables & adapters: High stock</Line>
              <Line neon>Gaming consoles: 4 units (used)</Line>
            </Section>
            <Divider />
            <Section title="BACK ROOM (Special Items):">
              <Line cyan>Interdimensional TV Box: 2 units (not for sale?)</Line>
              <Line cyan>Portal Gun (broken): 1 unit (parts only)</Line>
              <Line cyan>Meeseeks Box: 1 unit (DO NOT OPEN)</Line>
              <Line yellow>Plumbus: 3 units (everyone has one)</Line>
            </Section>
            <Divider />
            <Section title="REPAIR QUEUE:">
              <Line yellow>Smart fridge: "Passes butter" (fixed)</Line>
              <Line yellow>Game console: Red ring of death (in progress)</Line>
              <Line yellow>Cyberdeck: Unknown issue (customer waiting)</Line>
            </Section>
          </>
        ),
      },

      "Shop Console (Interdimensional)": {
        content: (
          <>
            <Line smoke large bold>[DEMO CONSOLE - SHOP FLOOR]</Line>
            <Line cyan>Location: Display near front counter</Line>
            <Divider />
            <DataTable data={[
              { label: "Model", value: "CyStation Pro (Modded)" },
              { label: "Status", value: "ON (demo mode)" },
              { label: "Last Reset", value: "This morning" },
              { label: "Purpose", value: "Customer testing" },
            ]} />
            <Divider />
            <Section title="INSTALLED GAMES:">
              <Line neon>→ Roy: A Life Well Lived (VR game, 50+ playthroughs)</Line>
              <Line neon>→ Anatomy Park (Horror adventure, broken level)</Line>
              <Line neon>→ Vindicators (Multiplayer shooter, banned online)</Line>
              <Line neon>→ Interdimensional Cable Simulator (Staff favorite)</Line>
              <Line neon>→ Pocket Mortys (Mobile port, complete Pokedex)</Line>
            </Section>
            <Divider />
            <Line yellow>High score on Roy: Rick S. - 55 years</Line>
            <Line pink>"He took Roy off the grid! This guy doesn't have a social security number!"</Line>
          </>
        ),
      },
    },
  },

  "The Golden Turd Pawn": {
    content: (
      <>
        <Line cyan large bold>THE GOLDEN TURD PAWN</Line>
        <Line yellow>"Your Trash is Our Treasure (Literally)"</Line>
        <Divider />
        <Line neon>Accessing shop systems...</Line>
        <Line cyan>[CUSTOMER PORTAL]</Line>
        <Divider />
        <Section title="SERVICES:">
          <Line neon>• Buy used goods (we'll buy anything)</Line>
          <Line neon>• Sell unwanted items (cash offers)</Line>
          <Line neon>• Pawn items (30-90 day terms, 18% interest)</Line>
          <Line neon>• "Special acquisitions" (ask owner)</Line>
        </Section>
        <Divider />
        <Section title="CURRENT INVENTORY (Highlights):">
          <Line cyan>Jewelry: Wedding rings, watches, chains (various)</Line>
          <Line cyan>Electronics: Tablets, phones, gaming devices</Line>
          <Line cyan>Tools: Power drill, welding equipment</Line>
          <Line cyan>Oddities: Antique furniture, collectibles, weird stuff</Line>
          <Line yellow>Featured: "Golden Turd" statue (NOT FOR SALE)</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 09:00-19:00 (Mon-Sat), Closed Sunday</Line>
          <Line neon>Location: Near Ports district waterfront</Line>
          <Line neon>Owner: Roger (sunglasses, never removes them)</Line>
        </Section>
        <Divider />
        <Section title="STORE LORE:">
          <Line pink>The "Golden Turd" has been in the shop for 15 years</Line>
          <Line pink>Previous owners: 8 (all met unfortunate ends)</Line>
          <Line pink>Current owner refuses to sell it despite offers</Line>
          <Line red>⚠ Shop cursed? Locals say yes. Owner says "Ricky Spanish."</Line>
        </Section>
        <Divider />
        <Line pink>"I'm a baby now! Buy my stuff!"</Line>
      </>
    ),
    related_commands: {
      "Shop Safe (Golden Turd)": {
        password: {
          pw: "persona",
          hint: "What Roger takes on (plural)",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[SHOP SAFE - UNDER COUNTER]</Line>
            <Line cyan>Location: Behind counter, floor-mounted</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "LOCKED" },
              { label: "Security", value: "Combination lock" },
              { label: "Last Access", value: "This morning (opening)" },
              { label: "Owner", value: "Roger (shop owner)" },
            ]} />
            <Divider />
            <Section title="ESTIMATED CONTENTS:">
              <Line yellow>Cash: 420¤ (daily receipts)</Line>
              <Line yellow>High-value jewelry (held for customers)</Line>
              <Line yellow>Business documents</Line>
              <Line yellow>Personal credchip: Unknown amount</Line>
            </Section>
            <Divider />
            <Line neon>Heavy-duty safe, installed when shop opened</Line>
          </>
        ),
      },

      access_pawn_records: {
        password: {
          pw: "turd",
          hint: "The shop's namesake object",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[PAWN RECORDS]</Line>
            <Line cyan>Active loans & recent transactions</Line>
            <Divider />
            <Section title="RECENT PAWNS (Last 7 days):">
              <Line neon>Item: Guitar (acoustic), Loan: 60¤, Due: 28 days</Line>
              <Line neon>Item: Laptop (used), Loan: 100¤, Due: 22 days</Line>
              <Line neon>Item: Watch (gold-plated), Loan: 80¤, Due: 19 days</Line>
              <Line yellow>Item: Mysterious device labeled "Time Travel Vest", Loan: 200¤, Due: 45 days</Line>
            </Section>
            <Divider />
            <Section title="HIGH-VALUE INVENTORY:">
              <Line cyan>Antique sword collection: 350¤</Line>
              <Line cyan>Vintage arcade cabinet: 280¤</Line>
              <Line cyan>Cyberware components (various): 150-400¤</Line>
            </Section>
            <Divider />
            <Section title="BACK ROOM (Not For Sale):">
              <Line pink>The Golden Turd (priceless? cursed?)</Line>
              <Line pink>Roger's disguise collection</Line>
              <Line pink>Unclear alien technology</Line>
            </Section>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // CITY INFRASTRUCTURE
  // ============================================================================

  maintenance_access_4f7a: {
    password: {
      pw: "city",
      hint: "The thing all this infrastructure serves",
      hintStrength: 1,
    },
    content: (
      <>
        <Line smoke large bold>[CITY MAINTENANCE ACCESS - DISTRICT 7]</Line>
        <Line cyan>[TECHNICIAN LEVEL ACCESS]</Line>
        <Divider />
        <Warning>Unauthorized access is a criminal offense</Warning>
        <Divider />
        <Section title="AVAILABLE SYSTEMS:">
          <Line neon>→ Street lighting control</Line>
          <Line neon>→ Traffic signal management</Line>
          <Line neon>→ Public transit displays</Line>
          <Line neon>→ Emergency systems</Line>
        </Section>
        <Divider />
        <Line yellow>Maintenance contractor: Cynergy Infrastructure Division</Line>
      </>
    ),
    related_commands: {
      "Streetlight Control (Market St)": {
        content: (
          <>
            <Line smoke large bold>[STREETLIGHT GRID - MARKET STREET]</Line>
            <Line cyan>Control panel for Market Street lighting (40 units)</Line>
            <Divider />
            <Section title="CURRENT STATUS:">
              <Line neon>Active lights: 37/40 (92.5%)</Line>
              <Line yellow>Malfunctioning: 3 units (scheduled for repair)</Line>
              <Line neon>Power consumption: Normal</Line>
            </Section>
            <Divider />
            <Section title="SCHEDULED OPERATIONS:">
              <Line cyan>Auto-on: 18:00 (dusk)</Line>
              <Line cyan>Auto-off: 06:00 (dawn)</Line>
              <Line cyan>Brightness: 80% (energy-saving mode)</Line>
            </Section>
            <Divider />
            <Section title="MAINTENANCE LOG:">
              <Line yellow>Last service: 2 weeks ago</Line>
              <Line yellow>Next scheduled: 3 weeks</Line>
              <Line red>Vandalism incidents: 4 this month</Line>
            </Section>
            <Divider />
            <Line pink>"Let there be light. Sometimes."</Line>
          </>
        ),
      },

      "Bus Stop Display (Canal Dock 5)": {
        content: (
          <>
            <Line smoke large bold>[TRANSIT DISPLAY - CANAL DOCK 5]</Line>
            <Line cyan>Public information terminal</Line>
            <Divider />
            <Section title="NEXT ARRIVALS:">
              <Line neon>Route 14 (Central): 4 minutes</Line>
              <Line neon>Route 22 (Ports Loop): 8 minutes</Line>
              <Line neon>Route 7 (Mosscroft): 15 minutes</Line>
              <Line yellow>Route 31 (Slums): DELAYED (incident)</Line>
            </Section>
            <Divider />
            <Section title="SYSTEM STATUS:">
              <DataTable data={[
                { label: "Display", value: "OPERATIONAL" },
                { label: "Last Update", value: "30 seconds ago" },
                { label: "Network", value: "City Transit Authority" },
                { label: "Power", value: "Grid (backup battery available)" },
              ]} />
            </Section>
            <Divider />
            <Section title="RECENT ISSUES:">
              <Line yellow>2 days ago: Display vandalized (repaired)</Line>
              <Line yellow>1 week ago: Power outage (lasted 3 hours)</Line>
            </Section>
            <Divider />
            <Line pink>"Your ride is coming. Probably."</Line>
          </>
        ),
      },

      "Traffic Signal (Canal & 5th)": {
        content: (
          <>
            <Line smoke large bold>[TRAFFIC SIGNAL - CANAL & 5TH INTERSECTION]</Line>
            <Line cyan>Automated signal control system</Line>
            <Divider />
            <Section title="CURRENT STATUS:">
              <DataTable data={[
                { label: "Operation Mode", value: "AUTOMATED" },
                { label: "Cycle Time", value: "90 seconds" },
                { label: "Last Malfunction", value: "3 weeks ago" },
                { label: "Pedestrian Signals", value: "FUNCTIONAL" },
              ]} />
            </Section>
            <Divider />
            <Section title="TIMING PATTERN:">
              <Line neon>Canal St (North-South): 45 seconds green</Line>
              <Line neon>5th Ave (East-West): 35 seconds green</Line>
              <Line neon>All-red phase: 5 seconds (safety buffer)</Line>
              <Line neon>Pedestrian crossing: 25 seconds</Line>
            </Section>
            <Divider />
            <Section title="TRAFFIC METRICS (Last Hour):">
              <Line cyan>Vehicles: 342 (Canal St), 187 (5th Ave)</Line>
              <Line cyan>Pedestrians: 89 crossings</Line>
              <Line cyan>Emergency vehicle overrides: 2</Line>
            </Section>
            <Divider />
            <Line yellow>Maintained by: City Traffic Management Division</Line>
          </>
        ),
      },

      "Emergency Siren (District 7)": {
        content: (
          <>
            <Line smoke large bold>[EMERGENCY ALERT SYSTEM - DISTRICT 7]</Line>
            <Line cyan>Public warning siren network</Line>
            <Divider />
            <Section title="SYSTEM STATUS:">
              <DataTable data={[
                { label: "Status", value: "STANDBY" },
                { label: "Last Test", value: "2 weeks ago" },
                { label: "Last Activation", value: "8 months ago (G0 breach scare)" },
                { label: "Coverage", value: "2.4km radius" },
              ]} />
            </Section>
            <Divider />
            <Section title="ALERT TYPES:">
              <Line neon>Chemical leak: Continuous tone (3 minutes)</Line>
              <Line neon>Structural failure: Pulsing tone (2 minutes)</Line>
              <Line neon>G0 breach: Rising/falling tone (5 minutes)</Line>
              <Line red>All-clear: Steady tone (30 seconds)</Line>
            </Section>
            <Divider />
            <Section title="ACTIVATION AUTHORITY:">
              <Line yellow>SecOps Command</Line>
              <Line yellow>City Emergency Management</Line>
              <Line yellow>Corporate Security (limited zones)</Line>
            </Section>
            <Divider />
            <Warning>Unauthorized activation is a felony offense</Warning>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // RANDOM FUN DEVICE
  // ============================================================================

  "Public Terminal (Market District)": {
    content: (
      <>
        <Line smoke large bold>[PUBLIC INFORMATION TERMINAL]</Line>
        <Line cyan>Location: Market district plaza</Line>
        <Divider />
        <Section title="AVAILABLE SERVICES:">
          <Line neon>• City directory & maps</Line>
          <Line neon>• Transit schedules</Line>
          <Line neon>• Emergency contacts</Line>
          <Line neon>• Public announcements</Line>
          <Line neon>• Internet access (10¤ per 15 minutes)</Line>
        </Section>
        <Divider />
        <Section title="TERMINAL STATUS:">
          <DataTable data={[
            { label: "Condition", value: "Fair (screen cracked)" },
            { label: "Last Maintenance", value: "6 months ago" },
            { label: "Daily Users", value: "~40" },
            { label: "Vandalism Incidents", value: "12 this year" },
          ]} />
        </Section>
        <Divider />
        <Section title="RECENT SEARCHES (Anonymous):">
          <Line pink>→ "how to leave cy"</Line>
          <Line pink>→ "cheap cyberware installation"</Line>
          <Line pink>→ "is the golden turd real"</Line>
          <Line pink>→ "g0 survivor stories"</Line>
          <Line pink>→ "rick sanchez sightings cy"</Line>
        </Section>
        <Divider />
        <Line yellow>"Serving the community. One cracked screen at a time."</Line>
      </>
    ),
  },

  "Vending Machine (Canal St)": {
    content: (
      <>
        <Line smoke large bold>[SMART VENDING MACHINE - CANAL ST]</Line>
        <Line cyan>Location: Canal Street, near dock 3</Line>
        <Divider />
        <Section title="CURRENT STOCK:">
          <Line neon>Slot A1: Energy drink (6 remaining) - 6¤</Line>
          <Line neon>Slot A2: Water bottle (8 remaining) - 4¤</Line>
          <Line neon>Slot B1: Protein bar (SOLD OUT)</Line>
          <Line neon>Slot B2: Synth-chips (4 remaining) - 5¤</Line>
          <Line neon>Slot C1: Candy bar (3 remaining) - 3¤</Line>
          <Line yellow>Slot D1: "Mystery Item" (1 remaining) - 10¤</Line>
        </Section>
        <Divider />
        <Section title="MACHINE STATUS:">
          <DataTable data={[
            { label: "Status", value: "OPERATIONAL" },
            { label: "Payment", value: "Credchip or coins" },
            { label: "Last Restock", value: "4 days ago" },
            { label: "Cash Box", value: "Estimated 80¤" },
          ]} />
        </Section>
        <Divider />
        <Section title="RECENT ISSUES:">
          <Line yellow>Someone tried to tip it over (failed)</Line>
          <Line yellow>Coin slot jammed twice this week</Line>
          <Line red>Mystery item never purchased (been there 6 months)</Line>
        </Section>
        <Divider />
        <Line pink>"Insert coin. Receive sustenance. Question existence."</Line>
      </>
    ),
  },
};

export default FUN_COMMANDS;
