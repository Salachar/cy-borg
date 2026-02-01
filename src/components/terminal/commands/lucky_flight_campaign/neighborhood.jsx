import {
  Line,
  Section,
  Divider,
  KeyValue,
  InsetBox,
} from '@terminal/TerminalComponents';
import {
  ATM,
  Safe,
  LocalAd,
  GameConsole,
  Camera,
  Tenet,
  Jukebox,
  Menu,
  HoursBanner,
  CommunityBoard,
  MaintenanceAccess,
  PublicPortal,
  PersonnelFile,
  IncidentLog,
  NetworkDevices,
} from "@terminal/retcomdevice"

export const NEIGHBORHOOD_COMMANDS = {
  "Dice Emporium [Ad]": {
    content: (
      <LocalAd
        corp="THE LOADED DICE"
        slogan="Gaming Supply Specialists"
        products={[
          "Premium Gaming Dice",
          "Custom Chip Sets",
          "Card Decks (Standard & Marked)",
          "Gaming Accessories"
        ]}
        cta="Roll With The Best - 2 Blocks From Lucky Flight"
        theme="purple"
      >
        <p className="text-xs text-purple-300/60 italic text-center mt-4">
          We don't ask how you use them.
        </p>
      </LocalAd>
    ),
  },

  "Ports Bar [Ad]": {
    content: (
      <LocalAd
        corp="THE ANCHOR BAR"
        slogan="Cheap Drinks. No Judgment."
        products={[
          "Beer - 8¤",
          "Whiskey - 12¤",
          "Well Drinks - 10¤",
          "Happy Hour: 5PM-7PM (Half Price)"
        ]}
        cta="WATERFRONT VIEWS. DIVE BAR PRICES."
        theme="dystopian"
      >
        <p className="text-sm text-orange-200 text-center mt-4">
          Near Dock 5 - Open 2PM-2AM Daily
        </p>
      </LocalAd>
    ),
  },

  "Street Doc [Ad]": {
    content: (
      <LocalAd
        corp="EMERGENCY MEDICAL"
        slogan="No Questions. No Records."
        products={[
          "Trauma Surgery - 150¤",
          "Emergency Treatment - 100¤",
          "Cyberware Installation - Variable",
          "24/7 Availability"
        ]}
        cta="WHEN YOU CAN'T GO TO A REAL HOSPITAL"
        theme="sleek"
      >
        <p className="text-xs text-gray-400 italic text-center mt-4">
          Cash only. Location disclosed to verified clients.
        </p>
      </LocalAd>
    ),
  },

  "SecOps Recruitment [Ad]": {
    content: (
      <LocalAd
        corp="CY SECURITY OPERATIONS"
        slogan="Protect & Serve"
        tagline="Join the force that keeps Cy safe."
        products={[
          "Competitive Pay & Benefits",
          "Combat Training & Enhancement",
          "Career Advancement Opportunities",
          "Corporate Partnership Bonuses"
        ]}
        cta="APPLY NOW - SECOPS.CY/CAREERS"
        theme="corporate"
      />
    ),
  },

  "Public Safety Warning": {
    content: (
      <LocalAd
        corp="PUBLIC SAFETY NOTICE"
        slogan="Stay Alert. Stay Safe."
        theme="dystopian"
      >
        <div className="space-y-3 text-orange-200">
          <p className="font-bold text-lg">CURRENT THREAT LEVEL: MODERATE</p>
          <div className="space-y-2 text-sm">
            <p>• Report suspicious activity to SecOps immediately</p>
            <p>• Avoid unlit areas after dark</p>
            <p>• Carry valid identification at all times</p>
            <p>• Gang activity reported in Ports district</p>
          </div>
          <p className="text-xs text-orange-300/70 italic mt-4">
            Your compliance ensures everyone's safety.
          </p>
        </div>
      </LocalAd>
    ),
  },

  "Corp Compliance Alert": {
    content: (
      <LocalAd
        corp="CORPORATE RELATIONS BUREAU"
        slogan="Working Together Works"
        theme="corporate"
      >
        <div className="space-y-3 text-blue-200">
          <p className="font-bold">REMEMBER:</p>
          <div className="space-y-2 text-sm">
            <p>✓ Corporations provide jobs & stability</p>
            <p>✓ Cooperation ensures prosperity</p>
            <p>✓ Resistance is counterproductive</p>
            <p>✓ Your data keeps you safe</p>
          </div>
          <p className="text-lg font-bold text-cyan-300 mt-4">
            TRUST THE SYSTEM. THE SYSTEM TRUSTS YOU.
          </p>
        </div>
      </LocalAd>
    ),
  },

  "Samurai Concert [Ad]": {
    content: (
      <LocalAd
        corp="SAMURAI"
        slogan="Never Fade Away"
        tagline="Legendary Rockerboy Legacy Tour"
        theme="neon"
      >
        <div className="space-y-3 text-center">
          <p className="text-2xl font-black text-fuchsia-200">TRIBUTE CONCERT</p>
          <p className="text-lg text-pink-300">Featuring: Multiple Acts</p>
          <div className="text-sm text-fuchsia-200/80 space-y-1 mt-4">
            <p>THIS SATURDAY - 8PM</p>
            <p>THE CHROME ARENA</p>
            <p>Tickets: 50¤-200¤</p>
          </div>
          <p className="text-xs text-pink-300/60 italic mt-4">
            "Wake the fuck up, samurai. We have a show to rock."
          </p>
        </div>
      </LocalAd>
    ),
  },

  "NetBattler Tournament": {
    content: (
      <LocalAd
        corp="NETBATTLER CHAMPIONSHIP"
        slogan="Jack In. Battle. Win."
        products={[
          "Grand Prize: 500¤",
          "Professional Commentary",
          "Live Streamed Globally"
        ]}
        cta="REGISTER NOW - LIMITED SLOTS"
        theme="cyber"
      >
        <div className="text-center mt-4 space-y-1">
          <p className="text-cyan-200 font-bold">PERPETUALLY NEXT SATURDAY - TECH MALL ARENA</p>
          <p className="text-cyan-300/80 text-sm">Entry Fee: 5¤ | Ages 11+</p>
        </div>
      </LocalAd>
    ),
  },

  "Ports District Guide": {
    content: (
      <MaintenanceAccess
        title="[PORTS DISTRICT - VISITOR INFORMATION]"
        deviceModel="Public Info Kiosk"
        deviceId="KIOSK-PORTS-MAIN"
        firmwareVersion="v3.0.1"
        systemStatus="OPERATIONAL"
        notes={[
          "Tourist Mode: Active",
          "Population: ~15,000 residents",
          "Primary Industry: Canal shipping, service work",
          "Transit: Water taxis (24/7)",
          "Reputation: Working-class waterfront - rough but navigable"
        ]}
      >
        <Divider />
        <InsetBox title="NOTABLE LOCATIONS:">
          <Line neon>→ Canal docks (main transport hub)</Line>
          <Line neon>→ Market district (daily 06:00-18:00)</Line>
          <Line neon>→ Residential blocks (mixed apartment buildings)</Line>
          <Line neon>→ Industrial zone (warehouses, mostly abandoned)</Line>
          <Line yellow>→ Entertainment district (bars, clubs, late hours)</Line>
        </InsetBox>
        <InsetBox title="VISITOR ADVISORY:">
          <Line yellow>• Keep valuables secured</Line>
          <Line yellow>• Avoid industrial zone after dark</Line>
          <Line yellow>• Water taxis safer than walking at night</Line>
          <Line red>• Corporate security limited - local issues handled locally</Line>
        </InsetBox>
        <Line pink>"Not the worst place to be. Not the best either."</Line>
      </MaintenanceAccess>
    ),
  },

  "Canal Water Taxi Network": {
    content: (
      <MaintenanceAccess
        title="[PORTS CANAL TRANSIT]"
        deviceModel="Transit Information System"
        deviceId="TRANSIT-CANAL-01"
        firmwareVersion="v2.5.0"
        systemStatus="OPERATIONAL"
        notes={[
          "Operating: 24/7 (all docks)",
          "Peak hours: 06:00-09:00, 17:00-20:00",
          "Average wait time: Under 5 minutes",
          "Payment: Cash or credchip accepted"
        ]}
      >
        <Divider />
        <InsetBox title="STANDARD RATES:">
          <KeyValue label="Short trip (under 1km)" value="10¤" />
          <KeyValue label="Medium trip (1-3km)" value="20¤" />
          <KeyValue label="Long trip (over 3km)" value="40¤" />
          <KeyValue label="Private charter (1 hour)" value="150¤" />
        </InsetBox>
        <InsetBox title="MAJOR ROUTES:">
          <Line neon>→ Residential docks ⟷ Market district</Line>
          <Line neon>→ Industrial zone ⟷ Entertainment district</Line>
          <Line neon>→ North pier ⟷ South docks</Line>
          <Line yellow>→ Special routes available (negotiate with driver)</Line>
        </InsetBox>
        <InsetBox title="PASSENGER INFO:">
          <Line cyan>Capacity: Up to 6 passengers per boat</Line>
          <Line cyan>Luggage: Equipment/cargo allowed (driver discretion)</Line>
          <Line yellow>Tip expected for after-hours or special requests</Line>
        </InsetBox>
        <Line pink>"Cleanest water transport in Ports. That's not saying much."</Line>
      </MaintenanceAccess>
    ),
  },

  "Fingers' Clinic": {
    content: (
      <MaintenanceAccess
        title="[FINGERS' MEDICAL SERVICES]"
        deviceModel="Clinic Management System"
        deviceId="CLINIC-FINGERS-01"
        firmwareVersion="v2.1.0"
        systemStatus="OPERATIONAL"
        notes={[
          "Walk-ins welcome - Cash preferred",
          "Hours: 24/7 (emergencies always accepted)",
          "Location: 2 blocks south of main market, basement entrance",
          "Access: Knock three times, wait for response",
          "Proprietor: 'Fingers' (licensed medical training, former corporate medic)"
        ]}
      >
        <Divider />
        <InsetBox title="SERVICES & RATES:">
          <KeyValue label="Emergency treatment" value="100¤" />
          <KeyValue label="Trauma surgery" value="150¤" />
          <KeyValue label="Cyberware installation" value="Variable (consultation required)" />
          <KeyValue label="Prescriptions (stims, painkillers)" value="20¤ per dose" />
          <KeyValue label="Medical record services" value="80¤" />
        </InsetBox>
        <Line pink>"Former corporate medic. Credentials don't matter when you're bleeding."</Line>
      </MaintenanceAccess>
    ),
    related_commands: {
      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="CLINIC-DOC-001"
            name="Victor 'Fingers' Chen"
            position="Proprietor / Street Doctor"
            department="Independent Medical Practice"
            supervisor="Self-employed"
            clearanceLevel={5}
            performance={88}
            notes={[
              "Former corporate medic - MediCorp (10 years service)",
              "Left corporate medicine after ethics dispute",
              "Specialty: Trauma care, emergency cyberware repairs",
              "Reputation: Discreet, skilled, expensive but fair",
              "No questions asked policy - maintains strict patient confidentiality",
              "Maintains connections with black market medical suppliers",
              "Known weakness: Soft spot for desperate cases (sometimes works pro bono)"
            ]}
          />
        ),
      },

      "Patient Records [CONFIDENTIAL]": {
        // password: {
        //   pw: "scalpel",
        //   hint: "Surgical cutting tool",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="PATIENT DATABASE" />
        // },
        content: (
          <MaintenanceAccess
            title="[PATIENT DATABASE]"
            deviceModel="Medical Records System"
            deviceId="MED-REC-FINGERS"
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

  "Razor's Garage": {
    content: (
      <MaintenanceAccess
        title="[RAZOR'S TECHNICAL SERVICES]"
        deviceModel="Shop Management System"
        deviceId="SHOP-RAZOR-01"
        firmwareVersion="v3.0.2"
        systemStatus="OPERATIONAL"
        notes={[
          "Modifications. Repairs. Discretion.",
          "Hours: 14:00-02:00 (closed mornings)",
          "Location: 3 blocks east, abandoned garage complex",
          "Access: Side entrance, ask for Razor",
          "Premium: +50¤ for 'no questions asked' service"
        ]}
      >
        <Divider />
        <InsetBox title="SERVICES OFFERED:">
          <Line neon>• Cyberware sales & installation</Line>
          <Line neon>• Weapon modifications</Line>
          <Line neon>• Vehicle repairs & upgrades</Line>
          <Line neon>• Electronics & hacking tools</Line>
          <Line neon>• ID & credential services</Line>
        </InsetBox>
        <InsetBox title="PRICING:">
          <Line cyan>Cyberware: Market rate minus 40% (used/refurbished)</Line>
          <Line cyan>Weapons: Custom work, 80¤ base + parts</Line>
          <Line cyan>IDs/Credentials: 80¤ (quality varies)</Line>
          <Line cyan>Vehicle work: Consultation required</Line>
        </InsetBox>
        <Line pink>"You get what you pay for. Sometimes you get more."</Line>
        <Line red>* All sales final - No refunds or exchanges</Line>
      </MaintenanceAccess>
    ),
    related_commands: {
      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="SHOP-TECH-001"
            name="Razor"
            age={35}
            position="Proprietor / Chop Shop Technician"
            department="Independent Technical Services"
            hireDate="2075 (7 years in Ports)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (unknown residence)"
            emergencyContact="None listed"
            performance={91}
            notes={[
              "Background: Unknown (suspected former corpo tech)",
              "Specialty: Cyberware modification, weapons tech, vehicle work",
              "Reputation: Skilled but paranoid, high quality work",
              "Known for: Refusing jobs from corps, SecOps, Virid Vipers",
              "Maintains strict 'no questions' policy on all work",
              "Excellent connections to black market suppliers",
              "Will sometimes trade services for interesting tech/parts"
            ]}
            status="ACTIVE"
          />
        ),
      },

      access_inventory_system: {
        // password: {
        //   pw: "razor",
        //   hint: "The shop owner's nickname",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="INVENTORY SYSTEM" />
        // },
        content: (
          <MaintenanceAccess
            title="[INVENTORY DATABASE]"
            deviceModel="Shop Inventory System"
            deviceId="INV-RAZOR-01"
            firmwareVersion="v2.0.1"
            systemStatus="OPERATIONAL"
            uptime="234 days, 6 hours"
            notes={[
              "Current stock - Last updated 2 hours ago",
              "Source: Various (stolen, salvaged, black market)",
              "Shipment expected: 3 days (canal delivery)",
              "All items tested before sale (mostly)"
            ]}
          >
            <Divider />
            <InsetBox title="CYBERWARE (Refurbished):">
              <Line neon>Neural interface (basic) - 3 units</Line>
              <Line neon>Subdermal armor plates - 2 units</Line>
              <Line neon>Optical enhancement (low-grade) - 4 units</Line>
              <Line yellow>Reflex booster (untested) - 1 unit</Line>
            </InsetBox>
            <InsetBox title="WEAPONS & PARTS:">
              <Line neon>Pistol frames (no serial) - 6 units</Line>
              <Line neon>Ammunition (various calibers) - Mixed stock</Line>
              <Line neon>Suppressors (homemade) - 3 units</Line>
            </InsetBox>
            <InsetBox title="ELECTRONICS:">
              <Line cyan>Signal jammers - 2 units</Line>
              <Line cyan>Lockpick kits (electronic) - 5 units</Line>
              <Line cyan>Surveillance counter-measures - 4 units</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  // ============================================================================
  // MIRA'S CORNER SHOP
  // ============================================================================

  "Mira's Corner Shop": {
    content: (
      <PublicPortal
        name="MIRA'S CORNER SHOP"
        tagline="Groceries. Supplies. Gossip."
        network="MIRA_GUEST_WIFI"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="Local radio - Ports Community Hour"
        notes={[
          "Free WiFi with purchase",
          "Package pickup available",
          "Bathroom for customers only"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="Mon-Sat: 06:00-22:00 | Sun: 08:00-18:00"
          days="7 Days a Week"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Community Bulletin": {
        content: (
          <CommunityBoard
            id="miras-shop-board"
            boardName="COMMUNITY BULLETIN BOARD"
            location="Inside Mira's Corner Shop - Wall near register"
            posts={[
              { text: "Roommate needed - 300¤/month, utilities split", color: "pink" },
              { text: "Lost cat - grey tabby, answers to 'Static'", color: "pink" },
              { text: "Selling bicycle - needs work, 50¤", color: "pink" },
              { text: "Looking for work - have tools, will travel", color: "pink" },
              { text: "Poker night Fridays - basement of The Anchor bar", color: "cyan" },
              { text: "Musician seeking bandmates - synth & drums especially", color: "pink" },
            ]}
            services={[
              "Handyman - odd jobs, fair rates (RCD: fix_it_vic@local)",
              "Tutor - math & science, evenings (knock apt 4B)",
              "Bicycle repair - mobile service, call ahead",
            ]}
            vibe="Tight-knit neighborhood, everyone knows everyone"
          />
        ),
      },

      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="SHOP-OWNER-001"
            name="Mira Patel"
            age={52}
            position="Owner / Operator"
            department="Independent Retail"
            hireDate="2069 (13 years in business)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (lives in apartment above shop)"
            emergencyContact="Daughter - Priya Patel"
            performance={84}
            notes={[
              "Third-generation Ports resident",
              "Known as neighborhood information hub",
              "Maintains good relationships with all local factions",
              "Fair prices, extends credit to regulars during hard times",
              "Gossip network: Knows everything happening in 5-block radius",
              "Protective of neighborhood - reports suspicious outsiders",
              "Daughter Priya helps with shop on weekends"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Internal Access": {
        // password: {
        //   pw: "boxesboxesboxes",
        //   hint: "So many boxes",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="SHOP SYSTEMS" />
        // },
        content: (
          <MaintenanceAccess
            title="[SHOP INTERNAL SYSTEMS]"
            deviceModel="Retail Management System"
            deviceId="RETAIL-MIRA-01"
            firmwareVersion="v1.9.2"
            systemStatus="OPERATIONAL"
            uptime="412 days, 3 hours"
            notes={[
              "Last 24h transactions: 47",
              "Revenue: 412¤",
              "Most popular: Cigarettes, energy drinks, lottery",
              "Next delivery: Tomorrow morning (06:00)"
            ]}
          >
            <Divider />
            <InsetBox title="INVENTORY ALERTS:">
              <Line yellow>Low stock: Milk, bread, batteries</Line>
              <Line yellow>Reorder needed: Snacks, alcohol</Line>
              <Line red>Expired soon: Check cooler items</Line>
            </InsetBox>
            <InsetBox title="PENDING:">
              <Line neon>Customer package pickups: 3</Line>
              <Line neon>Credchip exchange requests: 2</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  // ============================================================================
  // THE RUSTY ANCHOR BAR
  // ============================================================================

  "The Rusty Anchor": {
    content: (
      <PublicPortal
        name="THE RUSTY ANCHOR"
        tagline="Cheap drinks. Cheaper conversation."
        network="ANCHOR_GUEST"
        signalStrength="medium"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="Jukebox: Canal Blues - The Ports Drifters"
        notes={[
          "Happy Hour: 17:00-19:00",
          "Pool table: 5¤ per game",
          "Cash or credchip accepted"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="14:00 - 02:00"
          days="Every Day"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Bar Menu": {
        content: (
          <Menu
            title="THE RUSTY ANCHOR"
            subtitle="Waterfront Dive Since 2070"
            signType="cocktail"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (local)", price: "8¤" },
                  { name: "Whiskey (synth)", price: "12¤" },
                  { name: "Vodka", price: "10¤" },
                  { name: "Well drinks", price: "10¤" },
                  { name: "Water (free)", price: "0¤" },
                ],
              },
              {
                name: "FOOD",
                items: [
                  { name: "Pretzels & peanuts", price: "Free with drink" },
                  { name: "Synth-meat sandwich", price: "15¤" },
                  { name: "Protein bowl", price: "12¤" },
                ],
              },
            ]}
            footer="If you can't find it at the Anchor, you don't need it."
          />
        ),
      },

      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="BAR-OWNER-001"
            name="Voss Andersen"
            age={58}
            position="Owner / Bartender"
            department="Independent Hospitality"
            hireDate="2070 (12 years in business)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (lives in back room behind bar)"
            emergencyContact="None listed"
            performance={79}
            notes={[
              "Former dockworker - saved for 10 years to buy bar",
              "No-nonsense personality, maintains order through respect",
              "Extends credit to unemployed regulars (within reason)",
              "Known for: Remembering everyone's usual drink",
              "Neutral ground policy - all factions welcome if they behave",
              "Information broker (passive) - hears everything, shares selectively",
              "Pool shark - don't bet against him"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Jukebox Terminal (JB-707-F4)": {
        content: (
          <Jukebox
            model="JB-707"
            location="Corner near pool table"
            cost="2¤"
            songs={[
              { title: "Rusty Water", artist: "Steel Tide", genre: "Industrial rock", color: 'blue' },
              { title: "Corporate Collapse", artist: "System Down", genre: "Punk", color: 'red' },
              { title: "Whiskey Nights", artist: "Dock Workers Union", genre: "Folk", color: 'orange' },
              { title: "Canal Blues", artist: "The Ports Drifters", genre: "Industrial folk-rock", color: 'cyan' },
              { title: "Chrome Dreams", artist: "Synapse", genre: "Synthwave", color: 'purple' },
            ]}
          />
        ),
      },

      "Bar Safe": {
        // password: {
        //   pw: "crustacean",
        //   hint: "Crabs and such",
        //   difficulty: "medium",
        //   content: <Locked theme="safe" title="BAR SAFE" />
        // },
        content: (
          <Safe
            id="rusty-anchor-bar-safe"
            model="DS-300"
            location="Behind bar, under counter"
            owner="Voss (bar owner)"
            security="Electronic keypad"
            lastAccess="6 hours ago"
            physical={[
              {
                id: "bar_safe_cash",
                label: "Daily collected cash",
                description: "300¤ (cash, mixed bills)",
                value: 300,
                isCredits: true
              },
            ]}
            digital={[
              {
                id: "bar_safe_credchip",
                label: "Digitally collection credits",
                description: "125¤",
                value: 125,
                isCredits: true
              },
            ]}
            notes="Safe checked at closing (02:00) and opening (14:00)"
          />
        ),
      },
    },
  },

  // ============================================================================
  // TORRES APARTMENTS
  // ============================================================================

  "Torres Apartments": {
    content: (
      <PublicPortal
        name="TORRES APARTMENTS"
        tagline="Affordable Living Since 2071"
        network="TORRES_RESIDENT_WIFI"
        signalStrength="strong"
        status="✓ ACCEPTING APPLICATIONS"
        statusColor="neon"
        notes={[
          "24 units (6 floors, 4 per floor)",
          "2 vacancies available",
          "Building Manager: Rosa Mendez (Unit 1A)",
          "Laundry: 5¤ wash, 3¤ dry"
        ]}
        theme="casual"
      >
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="350¤/month" />
          <KeyValue label="1-bedroom" value="500¤/month" />
          <KeyValue label="2-bedroom" value="700¤/month" />
          <Line smoke>Utilities: Additional 80-120¤/month</Line>
        </Section>
        <Divider />
        <Line pink>"Quiet building. Good neighbors. Mostly."</Line>
      </PublicPortal>
    ),
    related_commands: {
      "Security Cameras": {
        content: (
          <NetworkDevices
            networkName="TORRES_SECURITY"
            devices={[
              { name: "Lobby Camera", ip: "10.88.1.101", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
              { name: "Floor 2 Hallway", ip: "10.88.1.102", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
              { name: "Floor 4 Hallway", ip: "10.88.1.103", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
              { name: "Floor 6 Hallway", ip: "10.88.1.104", type: "Security Camera", status: "ONLINE", lastSeen: "Just now" },
            ]}
          />
        ),
      },

      "Camera - Lobby": {
        content: (
          <Camera
            id="torres-lobby-cam"
            location="Torres Apartments - Entrance lobby"
            coverage="Front entrance, mailboxes, stairs"
            status="ACTIVE"
            recording={true}
            storage="Local server (basement)"
            timeline={[
              "Yesterday, 18:45 → Resident entered with groceries",
              "Yesterday, 20:15 → Pizza delivery (Unit 4B)",
              "Today, 07:30 → Multiple residents departing for work",
              "Today, 12:00 → Mail carrier delivery",
              "Today, 15:45 → Maintenance worker entered (scheduled repair)",
            ]}
            blindSpots={[
              "Side entrance (emergency exit only)",
              "Package locker area (partially blocked)",
            ]}
            lastService="3 months ago"
          />
        ),
      },

      "Building Incident Log": {
        content: (
          <IncidentLog
            title="BUILDING INCIDENTS"
            timeframe="Last 30 days"
            incidents={[
              {
                timestamp: "Jan 15 (22:30)",
                type: "Noise Complaint",
                details: {
                  Unit: "6A (musician)",
                  Complaint: "Loud music during quiet hours",
                  Resolution: "Verbal warning issued",
                  Status: "Resolved"
                }
              },
              {
                timestamp: "Jan 8 (14:00)",
                type: "Maintenance",
                details: {
                  Unit: "4C",
                  Issue: "Plumbing leak",
                  Resolution: "Repaired same day",
                  Status: "Closed"
                }
              },
              {
                timestamp: "Jan 3 (09:00)",
                type: "Payment Issue",
                details: {
                  Unit: "5A",
                  Issue: "Late rent (14 days overdue)",
                  Resolution: "Payment plan arranged",
                  Status: "Monitoring"
                }
              },
            ]}
          >
            <Divider />
            <Line cyan>Overall: Quiet building, minimal issues</Line>
            <Line yellow>Next maintenance: HVAC inspection (next week)</Line>
          </IncidentLog>
        ),
      },

      "Unit 2A": {
        content: (
          <Tenet
            id="CIT-2847-JT"
            name="Jake Torres"
            age={34}
            dob="05/12/2048"
            occupation="Facilities Maintenance Technician"
            employer="Lucky Flight Casino"
            district="Ports (Torres Apartments, Unit 2A)"
            bio="Keeping the machines running so you can keep losing. Night shift life. Coffee addict. Builder of things."
            interests={['Gaming', 'Electronics', 'DIY Projects', 'Mechanical Repair', 'Coffee', 'Cyberpunk Media']}
            connections={47}
            status="ACTIVE"
            privacy="PUBLIC"
          />
        ),
        related_commands: {
          "Game Console": {
            content: (
              <GameConsole
                model="CyberDeck Pro X"
                owner="xXShadowHackerXx"
                gameLoaded="Cyberpunk 2077: Ultra Edition"
                friends={[
                  { name: 'NoobMaster69', status: 'online', game: 'Call of Cyber' },
                  { name: 'Elite_Sniper', status: 'offline' },
                  { name: 'RazorEdge', status: 'online', game: 'Netrunner Arena' },
                  { name: 'GhostReaper', status: 'offline' },
                ]}
              />
            )
          },

          "Personal Safe": {
            // password: {
            //   pw: "maintenance",
            //   hint: "The resident's department at the casino",
            //   difficulty: "medium",
            //   content: <Locked theme="safe" title="PERSONAL SAFE" />
            // },
            content: (
              <Safe
                id="torres-2a-safe"
                model="DS-200"
                location="Unit 2A, kitchen cabinet (hidden)"
                owner="Jake Torres (facilities maintenance)"
                security="Combination lock (mechanical)"
                lastAccess="2 days ago"
                physical={[
                  {
                    id: "torres_2a_coveralls",
                    label: "Work coveralls",
                    description: "Lucky Flight maintenance uniform (dirty, needs washing)"
                  },
                  {
                    id: "torres_2a_keycard",
                    label: "Staff keycard",
                    description: "Maintenance access (service corridors, mechanical rooms, roof access)"
                  },
                  {
                    id: "torres_2a_cash",
                    label: "Cash",
                    value: 20,
                    isCredits: true
                  },
                ]}
                digital={[
                  {
                    id: "torre_2a_credchip",
                    label: "Credchip",
                    description: "85¤",
                    value: 85,
                    isCredits: true
                  },
                  {
                    id: "torres_2a_lfc_password",
                    label: "LFC Facilities PW",
                    description: "architecture"
                  },
                ]}
                notes="Maintenance worker has extensive building access - keys rarely logged"
              />
            ),
          },
        }
      },

      "Unit 3B - Personal Safe": {
        // password: {
        //   pw: "localhost",
        //   hint: "This terminal doesn't trust the outside world",
        //   difficulty: "easy",
        //   content: <Locked theme="safe" title="PERSONAL SAFE" />
        // },
        content: (
          <Safe
            id="torres-3b-safe"
            model="PS-150"
            location="Unit 3B, bedroom closet"
            owner="Marco Silva"
            security="4-digit PIN"
            lastAccess="2 days ago"
            physical={[
              {
                id: "torres_3b_documents",
                label: "Documents",
                description: "Passport, birth certificate"
              },
              {
                id: "torres_3b_bracelet",
                label: "Jewelry",
                description: "Gold bracelet (family heirloom)"
              },
            ]}
            digital={[
              {
                id: "torres_3b_credchip",
                label: "Credchip",
                description: "40¤",
                value: 40,
                isCredits: true
              },
            ]}
            notes="Safe mounted to wall, relatively new installation"
          />
        ),
      },

      "Unit 4B - Personal Safe": {
        // password: {
        //   pw: "dealer",
        //   hint: "The resident's job at the casino",
        //   difficulty: "medium",
        //   content: <Locked theme="safe" title="PERSONAL SAFE" />
        // },
        content: (
          <Safe
            id="torres-4b-safe"
            model="DS-250"
            location="Unit 4B, bedroom closet shelf"
            owner="Marcus Reeves"
            security="Digital keypad"
            lastAccess="Yesterday evening"
            physical={[
              {
                id: "reeves_documents",
                label: "Documents",
                description: "Pay stubs, employee handbook, locker key"
              },
            ]}
            digital={[
              {
                id: "reeves_credchip",
                label: "Credchip",
                description: "15¤ (personal spending money, transferable)",
                value: 15,
                isCredits: true
              },
            ]}
            notes="Safe checked daily before and after casino shifts"
          />
        ),
      },

      access_building_management: {
        // password: {
        //   pw: "blind",
        //   hint: "You pay before you see",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="BUILDING MANAGEMENT" />
        // },
        content: (
          <MaintenanceAccess
            title="[BUILDING MANAGEMENT SYSTEM]"
            deviceModel="Property Management Software"
            deviceId="BLD-MGMT-TORRES"
            firmwareVersion="v3.1.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Manager Access: Rosa Mendez",
              "Upcoming maintenance: HVAC inspection (next week)",
              "Annual fire safety check: Next month",
              "Vacancies: 2 units available"
            ]}
          >
            <InsetBox title="RECENT ISSUES:">
              <Line yellow>Unit 4C: Plumbing leak (resolved)</Line>
              <Line yellow>Floor 2: Hallway light replacement (scheduled)</Line>
              <Line red>Unit 5A: Late payment (14 days overdue)</Line>
              <Line yellow>Roof access: Door lock needs repair</Line>
            </InsetBox>
            <InsetBox title="RESIDENT NOTES:">
              <Line cyan>Unit 2B: Hosting weekly poker games</Line>
              <Line cyan>Unit 6A: Musician (occasional noise complaints)</Line>
              <Line cyan>Unit 3D: Quiet, pays early, model tenant</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  // ============================================================================
  // LUCKY'S PAWN & TRADE
  // ============================================================================

  "Lucky's Pawn & Trade": {
    content: (
      <PublicPortal
        name="LUCKY'S PAWN & TRADE"
        tagline="Buy. Sell. Trade. No Judgments."
        network="LUCKY_PAWN_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        notes={[
          "Valid ID required",
          "All sales final",
          "Free appraisals (under 5 items)"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="LUCKY'S PAWN & TRADE"
          hours="10:00 - 19:00"
          days="Monday - Saturday (Closed Sunday)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="PAWN-OWNER-001"
            name="'Lucky' Lucas Kane"
            age={44}
            position="Owner / Pawnbroker"
            department="Independent Retail"
            hireDate="2074 (8 years in business)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Ports (unknown residence)"
            emergencyContact="None listed"
            performance={82}
            notes={[
              "Background: Former fence for minor gangs",
              "Went legitimate after corp crackdown in 2074",
              "Sharp appraiser - rarely pays more than item is worth",
              "Reputation: Fair but shrewd businessman",
              "Known for: Accepting 'no questions asked' items (for premium)",
              "Connections: Maintains relationships with collectors, dealers",
              "Will occasionally tip off Stone Eels about valuable items"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "ATM": {
        // password: {
        //   pw: "cash",
        //   hint: "What everyone wants from an ATM",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="ATM ACCESS" />
        // },
        content: (
          <ATM
            id="lucky-pawn-atm"
            model="ATM-500"
            location="Inside Lucky's Pawn (by entrance)"
            network="CityBank"
            credits={20}
            lastService="1 week ago"
            transactions={[
              "14:32 → Withdrawal: 40¤",
              "15:18 → Withdrawal: 100¤",
              "16:05 → Balance inquiry",
              "16:47 → Failed transaction (insufficient funds)",
              "17:23 → Withdrawal: 20¤",
            ]}
          />
        ),
      },

      access_pawn_records: {
        // password: {
        //   pw: "thehouse",
        //   hint: "It always wins",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="PAWN RECORDS" />
        // },
        content: (
          <MaintenanceAccess
            title="[PAWN RECORDS DATABASE]"
            deviceModel="Pawn Shop Management System"
            deviceId="PAWN-LUCKY-01"
            firmwareVersion="v2.4.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Active loans & transaction history",
              "Last 7 days of pawn activity",
              "High-value items tracked separately",
              "Back room inventory unsorted"
            ]}
          >
             <Divider />
            <InsetBox title="RECENT PAWNS (Last 7 days):">
              <Line neon>Item: Synthesizer keyboard, Loan: 80¤, Due: 22 days</Line>
              <Line neon>Item: Gold watch, Loan: 120¤, Due: 18 days</Line>
              <Line neon>Item: Power tools (set), Loan: 60¤, Due: 25 days</Line>
              <Line yellow>Item: Wedding ring, Loan: 40¤, Due: 3 days (redemption likely)</Line>
            </InsetBox>
            <InsetBox title="HIGH-VALUE ITEMS (In Stock):">
              <Line cyan>Vintage guitar: 200¤ (floor display)</Line>
              <Line cyan>Cyberware components: 150¤ (back room)</Line>
              <Line cyan>Antique watch collection: 180¤ (display case)</Line>
            </InsetBox>
            <InsetBox title="BACK ROOM INVENTORY:">
              <Line yellow>Unsorted electronics (awaiting testing)</Line>
              <Line yellow>Confiscated items (failed loan redemptions)</Line>
              <Line yellow>Lucky's personal collection (not for sale)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },
};

export default NEIGHBORHOOD_COMMANDS;
