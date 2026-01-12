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

export const NEIGHBORHOOD_COMMANDS = {

  // ============================================================================
  // DISTRICT INFO
  // ============================================================================

  "Ports District Guide": {
    content: (
      <>
        <Line cyan large bold>PORTS DISTRICT - VISITOR INFORMATION</Line>
        <Line yellow>"Working-class waterfront. Watch your step."</Line>
        <Divider />
        <Line neon>Accessing public info kiosk...</Line>
        <Line cyan>[TOURIST MODE ACTIVE]</Line>
        <Divider />
        <DataTable data={[
          { label: "Population", value: "~15,000 residents" },
          { label: "Primary Industry", value: "Canal shipping, service work" },
          { label: "Transit", value: "Water taxis (24/7)" },
          { label: "Reputation", value: "Rough but navigable" },
        ]} />
        <Divider />
        <Section title="NOTABLE LOCATIONS:">
          <Line neon>→ Canal docks (main transport hub)</Line>
          <Line neon>→ Market district (daily 06:00-18:00)</Line>
          <Line neon>→ Residential blocks (mixed apartment buildings)</Line>
          <Line neon>→ Industrial zone (warehouses, mostly abandoned)</Line>
          <Line yellow>→ Entertainment district (bars, clubs, late hours)</Line>
        </Section>
        <Divider />
        <Section title="VISITOR ADVISORY:">
          <Line yellow>• Keep valuables secured</Line>
          <Line yellow>• Avoid industrial zone after dark</Line>
          <Line yellow>• Water taxis safer than walking at night</Line>
          <Line red>• Corporate security limited - local issues handled locally</Line>
        </Section>
        <Divider />
        <Line pink>"Not the worst place to be. Not the best either."</Line>
      </>
    ),
  },

  // ============================================================================
  // STREET DOC
  // ============================================================================

  "Fingers' Clinic": {
    content: (
      <>
        <Line cyan large bold>FINGERS' MEDICAL SERVICES</Line>
        <Line yellow>"Walk-ins Welcome. Cash Preferred."</Line>
        <Divider />
        <Line neon>Accessing clinic terminal...</Line>
        <Line cyan>[PUBLIC ACCESS]</Line>
        <Divider />
        <Section title="SERVICES & RATES:">
          <KeyValue label="Emergency treatment" value="100¤" />
          <KeyValue label="Trauma surgery" value="150¤" />
          <KeyValue label="Cyberware installation" value="Variable (consultation required)" />
          <KeyValue label="Prescriptions (stims, painkillers)" value="20¤ per dose" />
          <KeyValue label="Medical record services" value="80¤" />
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 24/7 (emergencies always accepted)</Line>
          <Line neon>Location: 2 blocks south of main market, basement entrance</Line>
          <Line neon>Access: Knock three times, wait for response</Line>
          <Line yellow>Payment: Cash only (no credchip records)</Line>
        </Section>
        <Divider />
        <Section title="ABOUT:">
          <Line cyan>Proprietor: "Fingers" (licensed medical training)</Line>
          <Line cyan>Specialty: Trauma care, emergency cyberware repairs</Line>
          <Line cyan>Established: 8 years in Ports district</Line>
        </Section>
        <Divider />
        <Line pink>"Former corporate medic. Credentials don't matter when you're bleeding."</Line>
      </>
    ),
    related_commands: {
      access_patient_records: {
        password: {
          pw: "scalpel",
          hint: "Surgical cutting tool",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[PATIENT DATABASE]</Line>
            <Line cyan>Last 30 days</Line>
            <Divider />
            <Section title="RECENT CASES:">
              <Line neon>Patient #447 - Gunshot wound (shoulder), treated, stable</Line>
              <Line neon>Patient #448 - Cyberware rejection, stabilized, referred</Line>
              <Line neon>Patient #449 - Blunt trauma (multiple), treated, discharged</Line>
              <Line yellow>Patient #450 - Stim overdose, critical, stabilized</Line>
              <Line neon>Patient #451 - Lacerations (defensive wounds), treated</Line>
            </Section>
            <Divider />
            <Section title="SUPPLY ORDERS:">
              <Line cyan>Last order: 5 days ago</Line>
              <Line neon>Items: Synthetic skin, antibiotics, painkillers</Line>
              <Line neon>Supplier: Black market medical (no receipts)</Line>
              <Line yellow>Next order: Low on trauma supplies</Line>
            </Section>
            <Divider />
            <Line yellow>Note: Patient identities not recorded per policy</Line>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // CHOP SHOP
  // ============================================================================

  "Razor's Garage": {
    content: (
      <>
        <Line cyan large bold>RAZOR'S TECHNICAL SERVICES</Line>
        <Line yellow>"Modifications. Repairs. Discretion."</Line>
        <Divider />
        <Line neon>Connecting to shop terminal...</Line>
        <Line cyan>[CUSTOMER ACCESS]</Line>
        <Divider />
        <Section title="SERVICES OFFERED:">
          <Line neon>• Cyberware sales & installation</Line>
          <Line neon>• Weapon modifications</Line>
          <Line neon>• Vehicle repairs & upgrades</Line>
          <Line neon>• Electronics & hacking tools</Line>
          <Line neon>• ID & credential services</Line>
        </Section>
        <Divider />
        <Section title="PRICING:">
          <Line cyan>Cyberware: Market rate minus 40% (used/refurbished)</Line>
          <Line cyan>Weapons: Custom work, 80¤ base + parts</Line>
          <Line cyan>IDs/Credentials: 80¤ (quality varies)</Line>
          <Line cyan>Vehicle work: Consultation required</Line>
          <Line yellow>Premium: +50¤ for "no questions asked" service</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 14:00-02:00 (closed mornings)</Line>
          <Line neon>Location: 3 blocks east, abandoned garage complex</Line>
          <Line neon>Access: Side entrance, ask for Razor</Line>
        </Section>
        <Divider />
        <Line pink>"You get what you pay for. Sometimes you get more."</Line>
        <Line red>* All sales final - No refunds or exchanges</Line>
      </>
    ),
    related_commands: {
      access_inventory_system: {
        password: {
          pw: "razor",
          hint: "The shop owner's nickname",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[INVENTORY DATABASE]</Line>
            <Line yellow>Current stock - Last updated 2 hours ago</Line>
            <Divider />
            <Section title="CYBERWARE (Refurbished):">
              <Line neon>Neural interface (basic) - 3 units</Line>
              <Line neon>Subdermal armor plates - 2 units</Line>
              <Line neon>Optical enhancement (low-grade) - 4 units</Line>
              <Line yellow>Reflex booster (untested) - 1 unit</Line>
            </Section>
            <Divider />
            <Section title="WEAPONS & PARTS:">
              <Line neon>Pistol frames (no serial) - 6 units</Line>
              <Line neon>Ammunition (various calibers) - Mixed stock</Line>
              <Line neon>Suppressors (homemade) - 3 units</Line>
            </Section>
            <Divider />
            <Section title="ELECTRONICS:">
              <Line cyan>Signal jammers - 2 units</Line>
              <Line cyan>Lockpick kits (electronic) - 5 units</Line>
              <Line cyan>Surveillance counter-measures - 4 units</Line>
            </Section>
            <Divider />
            <Section title="SUPPLIER NOTES:">
              <Line yellow>Shipment expected: 3 days (canal delivery)</Line>
              <Line yellow>Source: Various (stolen, salvaged, black market)</Line>
            </Section>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // WATER TAXI
  // ============================================================================

  "Canal Water Taxi Network": {
    content: (
      <>
        <Line cyan large bold>PORTS CANAL TRANSIT</Line>
        <Line yellow>"Fast. Cheap. Always Running."</Line>
        <Divider />
        <Line neon>Accessing transit info...</Line>
        <Line cyan>[PUBLIC SCHEDULE]</Line>
        <Divider />
        <Section title="SERVICE HOURS:">
          <Line neon>Operating: 24/7 (all docks)</Line>
          <Line neon>Peak hours: 06:00-09:00, 17:00-20:00</Line>
          <Line neon>Wait time: Usually under 5 minutes</Line>
        </Section>
        <Divider />
        <Section title="STANDARD RATES:">
          <KeyValue label="Short trip (under 1km)" value="10¤" />
          <KeyValue label="Medium trip (1-3km)" value="20¤" />
          <KeyValue label="Long trip (over 3km)" value="40¤" />
          <KeyValue label="Private charter (1 hour)" value="150¤" />
        </Section>
        <Divider />
        <Section title="MAJOR ROUTES:">
          <Line neon>→ Residential docks ⟷ Market district</Line>
          <Line neon>→ Industrial zone ⟷ Entertainment district</Line>
          <Line neon>→ North pier ⟷ South docks</Line>
          <Line yellow>→ Special routes available (negotiate with driver)</Line>
        </Section>
        <Divider />
        <Section title="PASSENGER INFO:">
          <Line cyan>Payment: Cash or credchip accepted</Line>
          <Line cyan>Capacity: Up to 6 passengers per boat</Line>
          <Line cyan>Luggage: Equipment/cargo allowed (driver discretion)</Line>
          <Line yellow>Tip expected for after-hours or special requests</Line>
        </Section>
        <Divider />
        <Line pink>"Cleanest water transport in Ports. That's not saying much."</Line>
      </>
    ),
  },

  // ============================================================================
  // CORNER SHOP
  // ============================================================================

  "Mira's Corner Shop": {
    content: (
      <>
        <Line cyan large bold>MIRA'S CORNER SHOP</Line>
        <Line yellow>"Groceries. Supplies. Gossip."</Line>
        <Divider />
        <Line neon>Connecting to shop network...</Line>
        <Line cyan>[WELCOME CUSTOMER]</Line>
        <Divider />
        <Section title="TODAY'S SPECIALS:">
          <KeyValue label="Synth-protein bars (10 pack)" value="15¤" />
          <KeyValue label="Energy drinks (6 pack)" value="18¤" />
          <KeyValue label="Instant ramen (case)" value="12¤" />
          <KeyValue label="Credchip top-up (10¤ value)" value="11¤" />
        </Section>
        <Divider />
        <Section title="ALWAYS STOCKED:">
          <Line neon>• Basic groceries & household items</Line>
          <Line neon>• Cigarettes & alcohol</Line>
          <Line neon>• First aid supplies (basic)</Line>
          <Line neon>• Lottery tickets & scratch-offs</Line>
          <Line neon>• Phone charging station (2¤)</Line>
        </Section>
        <Divider />
        <Section title="SERVICES:">
          <Line cyan>✓ Package pickup/dropoff (courier hub)</Line>
          <Line cyan>✓ Credchip exchange (small fee)</Line>
          <Line cyan>✓ Community bulletin board</Line>
          <Line cyan>✓ Public restroom (customers only)</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Monday-Saturday: 06:00-22:00</Line>
          <Line neon>Sunday: 08:00-18:00</Line>
          <Line neon>Location: Corner of Canal Street & 3rd Ave</Line>
        </Section>
        <Divider />
        <Line pink>"Mira knows everyone's business. Don't give her more to talk about."</Line>
      </>
    ),
    related_commands: {
      "Community Bulletin": {
        content: (
          <>
            <Line smoke large bold>[COMMUNITY BOARD]</Line>
            <Line neon>Recent postings - Updated daily</Line>
            <Divider />
            <Section title="RECENT POSTS:">
              <Line pink>→ "Roommate needed - 300¤/month, utilities split"</Line>
              <Line pink>→ "Lost cat - grey tabby, answers to 'Static'"</Line>
              <Line pink>→ "Selling bicycle - needs work, 50¤"</Line>
              <Line pink>→ "Looking for work - have tools, will travel"</Line>
              <Line pink>→ "Poker night Fridays - basement of The Anchor bar"</Line>
              <Line pink>→ "Musician seeking bandmates - synth & drums especially"</Line>
            </Section>
            <Divider />
            <Section title="SERVICES ADVERTISED:">
              <ListItem>Handyman - odd jobs, fair rates (RCD: fix_it_vic@local)</ListItem>
              <ListItem>Tutor - math & science, evenings (knock apt 4B)</ListItem>
              <ListItem>Bicycle repair - mobile service, call ahead</ListItem>
            </Section>
            <Divider />
            <Line yellow>Neighborhood vibe: Tight-knit, everyone knows everyone</Line>
          </>
        ),
      },

      access_shop_internal: {
        password: {
          pw: "mira",
          hint: "Shop owner's first name",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[SHOP INTERNAL SYSTEMS]</Line>
            <Line cyan>[EMPLOYEE ACCESS]</Line>
            <Divider />
            <Section title="RECENT SALES (Last 24h):">
              <Line neon>Total transactions: 47</Line>
              <Line neon>Revenue: 412¤</Line>
              <Line neon>Most popular: Cigarettes, energy drinks, lottery</Line>
            </Section>
            <Divider />
            <Section title="INVENTORY ALERTS:">
              <Line yellow>Low stock: Milk, bread, batteries</Line>
              <Line yellow>Reorder needed: Snacks, alcohol</Line>
              <Line red>Expired soon: Check cooler items</Line>
            </Section>
            <Divider />
            <Section title="SUPPLIER DELIVERIES:">
              <Line neon>Next delivery: Tomorrow morning (06:00)</Line>
              <Line neon>Pending: 3 customer package pickups</Line>
            </Section>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // BAR
  // ============================================================================

  "The Rusty Anchor": {
    content: (
      <>
        <Line cyan large bold>THE RUSTY ANCHOR</Line>
        <Line yellow>"Cheap drinks. Cheaper conversation."</Line>
        <Divider />
        <Line neon>Connecting to bar terminal...</Line>
        <Line cyan>[PUBLIC ACCESS]</Line>
        <Divider />
        <Section title="BAR MENU:">
          <KeyValue label="Beer (local)" value="8¤" />
          <KeyValue label="Whiskey (synth)" value="12¤" />
          <KeyValue label="Vodka" value="10¤" />
          <KeyValue label="Well drinks" value="10¤" />
          <KeyValue label="Water (free)" value="0¤" />
          <Line yellow>Happy Hour: 17:00-19:00 (half price beer)</Line>
        </Section>
        <Divider />
        <Section title="FOOD:">
          <Line neon>Pretzels & peanuts (complimentary with drink)</Line>
          <Line neon>Synth-meat sandwich: 15¤</Line>
          <Line neon>Protein bowl: 12¤</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Open: 14:00-02:00 (every day)</Line>
          <Line neon>Location: Waterfront, near dock 5</Line>
          <Line neon>Atmosphere: Dive bar, locals only vibe</Line>
        </Section>
        <Divider />
        <Section title="HOUSE RULES:">
          <Line yellow>• Pay as you go or start a tab (regulars only)</Line>
          <Line yellow>• No fighting (take it outside)</Line>
          <Line yellow>• Pool table: 5¤ per game</Line>
          <Line red>• Management reserves right to refuse service</Line>
        </Section>
        <Divider />
        <Line pink>"If you can't find it at the Anchor, you don't need it."</Line>
      </>
    ),
    related_commands: {
      access_bar_safe: {
        password: {
          pw: "anchor",
          hint: "The bar's name",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[DIGITAL SAFE - MODEL DS-300]</Line>
            <Line cyan>Location: Behind bar, under counter</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "LOCKED" },
              { label: "Security", value: "Electronic keypad" },
              { label: "Last Access", value: "6 hours ago" },
              { label: "Owner", value: "Voss (bar owner)" },
            ]} />
            <Divider />
            <Section title="ESTIMATED CONTENTS:">
              <Line yellow>Daily receipts (cash): 200-400¤</Line>
              <Line yellow>Personal credchip: Unknown amount</Line>
              <Line yellow>Bar license & documents</Line>
            </Section>
            <Divider />
            <Line red>Safe checked at closing (02:00) and opening (14:00)</Line>
          </>
        ),
      },

      "Jukebox Terminal": {
        content: (
          <>
            <Line smoke large bold>[JUKEBOX - MODEL JB-707]</Line>
            <Line cyan>Location: Corner near pool table</Line>
            <Divider />
            <Section title="NOW PLAYING:">
              <Line neon>Track: "Canal Blues" - The Ports Drifters</Line>
              <Line neon>Genre: Industrial folk-rock</Line>
              <Line neon>Queue: 3 songs remaining</Line>
            </Section>
            <Divider />
            <Section title="POPULAR SELECTIONS:">
              <Line pink>1. "Rusty Water" - Steel Tide</Line>
              <Line pink>2. "Corporate Collapse" - System Down</Line>
              <Line pink>3. "Whiskey Nights" - Dock Workers Union</Line>
              <Line pink>4. "Canal Blues" - The Ports Drifters</Line>
              <Line pink>5. "Chrome Dreams" - Synapse</Line>
            </Section>
            <Divider />
            <Line yellow>Cost: 2¤ per song, 5¤ for 3 songs</Line>
            <Line cyan>Payment: Credchip or coins accepted</Line>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // APARTMENT BUILDING
  // ============================================================================

  "Torres Apartments (Building)": {
    content: (
      <>
        <Line cyan large bold>TORRES APARTMENTS</Line>
        <Line yellow>"Affordable Living Since 2071"</Line>
        <Divider />
        <Line neon>Accessing building management...</Line>
        <Line cyan>[RESIDENT PORTAL]</Line>
        <Divider />
        <Section title="BUILDING INFO:">
          <DataTable data={[
            { label: "Units", value: "24 (6 floors, 4 per floor)" },
            { label: "Occupancy", value: "92% (2 vacancies)" },
            { label: "Built", value: "2071" },
            { label: "Condition", value: "Fair (routine maintenance)" },
          ]} />
        </Section>
        <Divider />
        <Section title="AMENITIES:">
          <Line neon>• Laundry room (ground floor) - 5¤ wash, 3¤ dry</Line>
          <Line neon>• Roof access (residents only)</Line>
          <Line neon>• Package lockers (lobby)</Line>
          <Line neon>• Security cameras (entrance, hallways)</Line>
        </Section>
        <Divider />
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="350¤/month" />
          <KeyValue label="1-bedroom" value="500¤/month" />
          <KeyValue label="2-bedroom" value="700¤/month" />
          <Line yellow>Utilities: Additional 80-120¤/month</Line>
        </Section>
        <Divider />
        <Section title="CONTACT:">
          <Line neon>Building Manager: Rosa Mendez (Unit 1A)</Line>
          <Line neon>Emergency Maintenance: 24/7 hotline</Line>
          <Line neon>Office Hours: Mon-Fri 09:00-17:00</Line>
        </Section>
        <Divider />
        <Line pink>"Quiet building. Good neighbors. Mostly."</Line>
      </>
    ),
    related_commands: {
      "Lobby Camera (Torres)": {
        content: (
          <>
            <Line smoke large bold>[SECURITY CAMERA - LOBBY]</Line>
            <Line cyan>Torres Apartments - Entrance view</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "ACTIVE" },
              { label: "Coverage", value: "Front entrance, mailboxes, stairs" },
              { label: "Recording", value: "YES (7-day loop)" },
              { label: "Storage", value: "Local server (basement)" },
            ]} />
            <Divider />
            <Section title="BLIND SPOTS:">
              <Line yellow>→ Side entrance (emergency exit only)</Line>
              <Line yellow>→ Package locker area (partially blocked)</Line>
            </Section>
            <Divider />
            <Line neon>Last maintenance: 3 months ago</Line>
          </>
        ),
      },

      "Unit 3B Safe": {
        password: {
          pw: "torres",
          hint: "Building name",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[PERSONAL SAFE - MODEL PS-150]</Line>
            <Line cyan>Location: Unit 3B, bedroom closet</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "LOCKED" },
              { label: "Security", value: "4-digit PIN" },
              { label: "Last Access", value: "2 days ago" },
              { label: "Owner", value: "Marco Silva" },
            ]} />
            <Divider />
            <Section title="ESTIMATED CONTENTS:">
              <Line yellow>Cash: 80-120¤ (emergency fund)</Line>
              <Line yellow>Documents: Passport, birth certificate</Line>
              <Line yellow>Personal items: Family photos, jewelry</Line>
            </Section>
            <Divider />
            <Line neon>Safe mounted to wall, relatively new installation</Line>
          </>
        ),
      },

      access_building_management: {
        password: {
          pw: "mendez",
          hint: "Building manager's last name",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[BUILDING MANAGEMENT SYSTEM]</Line>
            <Line cyan>[MANAGER ACCESS]</Line>
            <Divider />
            <Section title="RECENT ISSUES:">
              <Line yellow>Unit 4C: Plumbing leak (resolved)</Line>
              <Line yellow>Floor 2: Hallway light replacement (scheduled)</Line>
              <Line red>Unit 5A: Late payment (14 days overdue)</Line>
              <Line yellow>Roof access: Door lock needs repair</Line>
            </Section>
            <Divider />
            <Section title="UPCOMING MAINTENANCE:">
              <Line neon>Next week: HVAC inspection</Line>
              <Line neon>Next month: Annual fire safety check</Line>
            </Section>
            <Divider />
            <Section title="RESIDENT NOTES:">
              <Line cyan>Unit 2B: Hosting weekly poker games</Line>
              <Line cyan>Unit 6A: Musician (occasional noise complaints)</Line>
              <Line cyan>Unit 3D: Quiet, pays early, model tenant</Line>
            </Section>
          </>
        ),
      },
    },
  },

  // ============================================================================
  // PAWN SHOP
  // ============================================================================

  "Lucky's Pawn & Trade": {
    content: (
      <>
        <Line cyan large bold>LUCKY'S PAWN & TRADE</Line>
        <Line yellow>"Buy. Sell. Trade. No Judgments."</Line>
        <Divider />
        <Line neon>Accessing shop catalog...</Line>
        <Line cyan>[CUSTOMER ACCESS]</Line>
        <Divider />
        <Section title="SERVICES:">
          <Line neon>• Buy used goods (electronics, tools, jewelry)</Line>
          <Line neon>• Sell unwanted items (immediate cash offers)</Line>
          <Line neon>• Pawn items (30-90 day terms, 15% interest)</Line>
          <Line neon>• Trade & barter (negotiable)</Line>
        </Section>
        <Divider />
        <Section title="CURRENT INVENTORY (Highlights):">
          <Line cyan>Tools: Power drill set (60¤), Welding torch (80¤)</Line>
          <Line cyan>Electronics: Used tablets (40-70¤), Old phones (20-40¤)</Line>
          <Line cyan>Jewelry: Rings, watches, chains (various prices)</Line>
          <Line cyan>Miscellaneous: Bikes, musical instruments, vintage items</Line>
        </Section>
        <Divider />
        <Section title="HOURS & LOCATION:">
          <Line neon>Hours: 10:00-19:00 (Mon-Sat), Closed Sunday</Line>
          <Line neon>Location: Market district, near canal dock</Line>
        </Section>
        <Divider />
        <Section title="POLICIES:">
          <Line yellow>• Valid ID required for all transactions</Line>
          <Line yellow>• No stolen goods accepted (officially)</Line>
          <Line yellow>• All sales final</Line>
          <Line cyan>• Appraisals: Free (under 5 items)</Line>
        </Section>
        <Divider />
        <Line pink>"One person's trash is Lucky's treasure."</Line>
      </>
    ),
    related_commands: {
      "Pawn Shop ATM": {
        content: (
          <>
            <Line smoke large bold>[ATM - MODEL ATM-500]</Line>
            <Line cyan>Location: Inside Lucky's Pawn (by entrance)</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "ONLINE" },
              { label: "Cash Available", value: "1,200¤ (estimated)" },
              { label: "Last Service", value: "1 week ago" },
              { label: "Network", value: "CityBank" },
            ]} />
            <Divider />
            <Section title="RECENT TRANSACTIONS (Last 6h):">
              <Line neon>14:32 → Withdrawal: 40¤</Line>
              <Line neon>15:18 → Withdrawal: 100¤</Line>
              <Line neon>16:05 → Balance inquiry</Line>
              <Line yellow>16:47 → Failed transaction (insufficient funds)</Line>
              <Line neon>17:23 → Withdrawal: 20¤</Line>
            </Section>
            <Divider />
            <Line yellow>ATM restocked weekly (Thursdays, 10:00)</Line>
          </>
        ),
      },

      access_pawn_records: {
        password: {
          pw: "lucky",
          hint: "Shop owner's nickname",
          hintStrength: 1,
        },
        content: (
          <>
            <Line smoke large bold>[PAWN RECORDS DATABASE]</Line>
            <Line cyan>Active loans & transactions</Line>
            <Divider />
            <Section title="RECENT PAWNS (Last 7 days):">
              <Line neon>Item: Synthesizer keyboard, Loan: 80¤, Due: 22 days</Line>
              <Line neon>Item: Gold watch, Loan: 120¤, Due: 18 days</Line>
              <Line neon>Item: Power tools (set), Loan: 60¤, Due: 25 days</Line>
              <Line yellow>Item: Wedding ring, Loan: 40¤, Due: 3 days (redemption likely)</Line>
            </Section>
            <Divider />
            <Section title="HIGH-VALUE ITEMS (In Stock):">
              <Line cyan>Vintage guitar: 200¤ (floor display)</Line>
              <Line cyan>Cyberware components: 150¤ (back room)</Line>
              <Line cyan>Antique watch collection: 180¤ (display case)</Line>
            </Section>
            <Divider />
            <Section title="BACK ROOM INVENTORY:">
              <Line yellow>Unsorted electronics (awaiting testing)</Line>
              <Line yellow>Confiscated items (failed loan redemptions)</Line>
              <Line yellow>Lucky's personal collection (not for sale)</Line>
            </Section>
          </>
        ),
      },
    },
  },
};
