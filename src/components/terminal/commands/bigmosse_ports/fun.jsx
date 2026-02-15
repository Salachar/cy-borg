import {
  Box,
  Line,
  Section,
  Divider,
  KeyValue,
  InsetBox,
} from '@terminal/TerminalComponents';
import {
  ArcadeCabinet,
  Safe,
  Jukebox,
  MaintenanceAccess,
  PublicPortal,
  HoursBanner,
  Menu,
  PersonnelFile,
  Workstation,
  Locked,
} from "@terminal/retcomdevice"

export const FUN_COMMANDS = {
  "Street Preacher Live Stream": {
    content: (
      <Box color="red">
        <Line red bold large>[LIVE: BROTHER STATIC'S SERMON]</Line>
        <Line yellow>Streaming from: Ports district, Pier 7</Line>
        <InsetBox title="CURRENT BROADCAST:" color="yellow">
          <Line red>"...AND THE MACHINES WILL WEEP CHROME TEARS!"</Line>
          <Line neon>"The corporations feed on your SOUL like vampires!"</Line>
          <Line red>"G0 was THEIR doing! THEIR sacrifice to dark gods!"</Line>
          <Line neon>"Reject the upload! Your consciousness DIES in the cloud!"</Line>
          <Line red>"ONLY FLESH IS REAL! ONLY PAIN IS TRUTH!"</Line>
          <Line neon>"The Basilisk watches from the Deep Net! WATCHING!"</Line>
          <Line red>"Repent! REPENT! Before the second Incident comes!"</Line>
        </InsetBox>
        <KeyValue label="Live Viewers" value="47" />
        <KeyValue label="Total Donations" value="12¤" />
        <Line yellow>"Chat is disabled due to spam."</Line>
      </Box>
    ),
  },

  "Sanchez Electronics & Repair": {
    content: (
      <PublicPortal
        name="SANCHEZ ELECTRONICS & REPAIR"
        tagline="Interdimensional Selection. Dimensional Prices."
        network="SANCHEZ_SHOP_GUEST"
        signalStrength="strong"
        status="OPEN"
        statusColor="neon"
        nowPlaying="Interdimensional Cable (signal unstable)"
        notes={[
          "All sales final (seriously, don't even try)",
          "Repairs: 3-5 day turnaround (maybe longer)",
          "Management not responsible for existential side effects",
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="Mon-Sat: 11:00-23:00 | Sun: 12:00-20:00"
          days="7 Days a Week"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="SHOP-ELEC-001"
            name="R. Sanchez"
            age={67}
            position="Owner / Electronics Technician"
            department="Independent Electronics Repair"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Market District (unknown residence)"
            emergencyContact="Morty Smith (grandson)"
            performance={94}
            notes={[
              "Genius-level intellect, specializes in unusual electronics",
              "Often smells like alcohol, burps frequently",
              "Refuses to explain modifications or special inventory",
              "Reputation: Brilliant but erratic — customers nervous but loyal",
              "Known for: 'infinite channels' cable boxes, mysterious back room",
            ]}
          />
        ),
      },

      "Shop Inventory": {
        content: (
          <MaintenanceAccess
            title="[INVENTORY DATABASE]"
            deviceModel="Shop Inventory System"
            deviceId="INV-SANCHEZ-01"
            firmwareVersion="v1.3.7"
            systemStatus="OPERATIONAL"
            notes={[
              "Last updated: 2 hours ago",
              "Back room inventory not tracked here",
              "Repair queue: 3 items waiting",
            ]}
          >
            <Divider />
            <InsetBox title="STANDARD STOCK:">
              <Line neon>Smart TVs: 8 units (refurbished, various brands)</Line>
              <Line neon>Tablets: 15 units (mixed condition)</Line>
              <Line neon>Phones: 22 units (unlocked, some carrier-locked)</Line>
              <Line neon>Cables & adapters: High stock (universal compatibility)</Line>
            </InsetBox>
            <InsetBox title="BACK ROOM (Special Items):">
              <Line cyan>Weird cable boxes: 3 units (claim to receive "infinite channels")</Line>
              <Line cyan>Portal device: 1 unit (parts only — do not activate)</Line>
              <Line cyan>Strange blue boxes: 4 units (unknown purpose, owner won't sell)</Line>
              <Line yellow>Green vials: Unknown quantity (locked cabinet)</Line>
            </InsetBox>
            <InsetBox title="REPAIR QUEUE:">
              <Line smoke>Smart fridge — firmware issue (waiting for parts)</Line>
              <Line smoke>Game console — overheating (in progress)</Line>
              <Line smoke>Cyberdeck — unknown fault (customer waiting, frustrated)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Demo Console": {
        content: (
          <ArcadeCabinet
            id="demo-sanchez-console"
            name="CYSTATION PRO"
            location="Display near front counter"
            screenState="DEMO MODE"
            lastPlayed="Yesterday"
            user="R_SANCHEZ"
            credits={0}
            gamesAvailable={[
              "LIFE SIMULATOR VR",
              "COSMIC HORROR ADVENTURE",
              "DIMENSION JUMPER",
              "CABLE SURFING SIMULATOR",
              "POCKET CREATURES",
            ]}
          >
            <Divider />
            <InsetBox title="HIGH SCORES:">
              <Line yellow>Life Simulator VR: R_Sanchez — 55 years (off the grid ending)</Line>
              <Line yellow>Dimension Jumper: Morty — 2.4M points (second place)</Line>
              <Line yellow>Pocket Creatures: BirdPrsn — All 151 captured</Line>
            </InsetBox>
            <Line smoke small>Modified hardware. Don't ask about the modifications.</Line>
          </ArcadeCabinet>
        ),
      },

      "Back Room Safe": {
        content: (
          <Safe
            id="sanchez-backroom-safe"
            model="???"
            location="Back room — behind shelving unit"
            owner="R. Sanchez"
            security="Unknown technology (not standard)"
            lastAccess="Unknown (no logs)"
            physical={[
              {
                id: "sanchez_cash",
                label: "Cash",
                description: "Unknown amount (safe makes weird noises)",
              },
              {
                id: "sanchez_documents",
                label: "Documents",
                description: "Patents? Blueprints? Language unrecognizable.",
              },
              {
                id: "sanchez_vials",
                label: "Vials",
                description: "Green liquid — do not consume",
              },
              {
                id: "sanchez_components",
                label: "Device components",
                description: "Unknown purpose",
              },
            ]}
            digital={[
              {
                id: "sanchez_credchip",
                label: "Credchip",
                description: "28¤",
                value: 28,
                isCredits: true,
              },
              {
                id: "sanchez_cable_app",
                label: "App",
                description: "Inter-D Cable Guide (non-functional)",
              },
              {
                id: "sanchez_encrypted_file",
                label: "Encrypted file",
                description: "boogeraids_aidsbooger.enc",
              },
            ]}
            notes="⚠ Safe appears to phase in and out of visibility occasionally"
          />
        ),
      },

    },
  },

  "Gilded Oddities Pawn": {
    content: (
      <PublicPortal
        name="GILDED ODDITIES PAWN"
        tagline="Treasures. Trash. Tales."
        network="PAWN_SHOP_PUBLIC"
        signalStrength="medium"
        status="✓ OPEN"
        statusColor="neon"
        notes={[
          "Free appraisals (first 3 items)",
          "Golden statue NOT for sale",
          "Locals claim the shop is cursed"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="09:00 - 19:00"
          days="Monday - Saturday (Closed Sunday)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="PAWN-OWNER-008"
            name="Roger Smith"
            age={42}
            position="Owner / Pawnbroker"
            department="Independent Retail"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Near waterfront (unknown residence)"
            emergencyContact="None listed"
            performance={78}
            notes={[
              "Eighth owner of this shop - all previous owners met unfortunate ends",
              "Changes persona/disguises regularly (collection in safe)",
              "Refuses to sell golden statue despite high offers",
              "Reputation: Mysterious but fair, customers wary of 'curse'",
              "Known for: Voice recognition that changes weekly",
              "Previous owners: Disappeared, suicide, murdered, accidents (see records)"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Shop Safe": {
        password: {
          pw: "persona",
          hint: "What the owner seems to change regularly",
          difficulty: "easy",
          content: <Locked theme="safe" title="SHOP SAFE" />
        },
        content: (
          <Safe
            id="pawn-counter-safe"
            model="DS-350"
            location="Behind counter, floor-mounted"
            owner="Roger Smith (this week's name)"
            security="Combination + voice recognition"
            lastAccess="This morning (opening)"
            physical={[
              {
                id: "pawn_cash",
                label: "Cash",
                description: "daily receipts + emergency fund",
                value: 200,
                isCredits: true
              },
              {
                id: "pawn_jewelry",
                label: "High-value jewelry",
                description: "Wedding rings (3), gold chains (2)",
                value: 100,
              },
              {
                id: "pawn_disguises",
                label: "Personal items",
                description: "Collection of disguises (wigs, glasses, prosthetics)",
              },
            ]}
            digital={[
              {
                id: "pawn_credchip",
                label: "Credchip",
                description: "18¤",
                value: 18,
                isCredits: true
              },
            ]}
          />
        ),
      },

      "Pawn Records": {
        password: {
          pw: "goldenturd",
          hint: "What locals call the shop mascot statue",
          difficulty: "hard",
          content: <Locked theme="terminal" title="PAWN RECORDS" />
        },
        content: (
          <MaintenanceAccess
            title="[PAWN RECORDS]"
            deviceModel="Pawn Shop Management System"
            deviceId="PAWN-ODDITIES-01"
            firmwareVersion="v2.1.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Active loans & recent transactions",
              "Last 7 days of pawn activity",
              "High-value inventory tracked",
              "Owner history documented (all 8 owners)"
            ]}
          >
            <Divider />
            <InsetBox title="RECENT PAWNS (Last 7 days):">
              <Line neon>Item: Electric guitar, Loan: 75¤, Due: 28 days</Line>
              <Line neon>Item: Smartwatch, Loan: 50¤, Due: 24 days</Line>
              <Line neon>Item: Antique camera, Loan: 60¤, Due: 19 days</Line>
              <Line yellow>Item: Wedding dress, Loan: 40¤, Due: 45 days (extended term)</Line>
            </InsetBox>
            <InsetBox title="HIGH-VALUE INVENTORY:">
              <Line cyan>Vintage sword collection: 420¤ (display case)</Line>
              <Line cyan>Refurbished cyberware: 280¤ (various components)</Line>
              <Line cyan>Antique music box: 180¤ (plays haunting melody)</Line>
            </InsetBox>
            <InsetBox title="BACK ROOM (Not For Sale):">
              <Line pink>The golden statue (shop mascot, mysterious origins)</Line>
              <Line pink>Owner's personal effects (changes with each owner)</Line>
              <Line pink>Previous owners' belongings (unclaimed)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Cipher Solutions": {
    content: (
      <PublicPortal
        name="CIPHER SOLUTIONS"
        tagline="Data Recovery. System Security. Discretion Guaranteed."
        network="CIPHER_GUEST"
        signalStrength="strong"
        status="✓ ACCEPTING CLIENTS"
        statusColor="neon"
        notes={[
          "Appointments only",
          "Confidentiality guaranteed",
          "No corporate contracts (independents only)"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="10:00 - 18:00"
          days="Monday - Friday (Appointments Only)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="TECH-CIPHER-001"
            name="Cipher"
            age={36}
            position="Owner / Security Consultant"
            department="Independent Data Forensics"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Office building, 3rd floor (unknown residence)"
            emergencyContact="None provided"
            performance={96}
            notes={[
              "Real name unknown - operates under pseudonym 'Cipher'",
              "Expert: Data recovery, digital forensics, network security",
              "Reputation: Brilliant but secretive, absolutely trustworthy",
              "Refuses corporate clients - independents only",
              "Known for: Military-grade encryption, quantum-secured safe",
              "Motto: 'Your secrets are safe. From everyone except me.'"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Office Workstation": {
        password: {
          pw: "encryption",
          hint: "What Cipher specializes in for security",
          difficulty: "medium",
          content: <Locked theme="terminal" title="WORKSTATION ACCESS" />
        },
        content: (
          <Workstation
            owner="Cipher"
            role="Security Consultant / Data Forensics"
            status="IDLE"
            lastActivity="4 hours ago"
            openTabs={[
              { title: 'Client 447 - Recovery Progress', type: 'work' },
              { title: 'Network Analysis - SmallBiz 082', type: 'work' },
              { title: 'Forensic Imaging Software', type: 'work' },
              { title: '[ENCRYPTED PROJECT]', type: 'work' },
            ]}
            recentFiles={[
              { name: 'Client_447_Recovery.log', timestamp: '2 days ago' },
              { name: 'NetworkMap_SmallBiz_082.png', timestamp: 'Yesterday' },
              { name: 'Invoice_Template.docx', timestamp: 'This morning' },
              { name: 'Personal_Notes_Encrypted.txt', timestamp: 'Unknown' },
            ]}
            emails={8}
            productivity={94}
          />
        ),
      },

      "Office Safe": {
        password: {
          pw: "decryption",
          hint: "Opposite of encryption",
          difficulty: "easy",
          content: <Locked theme="safe" title="OFFICE SAFE" />
        },
        content: (
          <Safe
            id="cipher-office-safe"
            model="DS-500X"
            location="Suite 307, wall-mounted behind desk"
            owner="Cipher (proprietor)"
            security="Biometric + quantum encryption"
            lastAccess="Yesterday evening"
            physical={[
              {
                id: "cipher_cash",
                label: "Cash",
                description: "680¤ (client payments, emergency fund)",
                value: 680,
                isCredits: true
              },
            ]}
            digital={[
              {
                id: "cipher_business_credchip",
                label: "Credchip",
                description: "95¤ (business account)",
                value: 95,
                isCredits: true
              },
            ]}
            notes="Safe features quantum encryption - extremely difficult to crack"
          />
        ),
      },
    },
  },

  "The Compiler Bar": {
    content: (
      <PublicPortal
        name="THE COMPILER BAR"
        tagline="Where Code Meets Culture."
        network="COMPILER_GUEST_WIFI"
        signalStrength="strong"
        status="OPEN"
        statusColor="neon"
        nowPlaying="Recursion Blues - The Stack Overflow"
        notes={[
          "Free wifi (gigabit fiber)",
          "Weekly coding meetups (Thursdays, 19:00)",
          "Whiteboard wall for collaborative problem-solving"
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
            title="THE COMPILER BAR"
            subtitle="Tech District's Favorite Watering Hole"
            signType="cocktail"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (craft local)", price: "10¤" },
                  { name: "Coffee (actually good)", price: "6¤" },
                  { name: "Whiskey (imported)", price: "15¤" },
                  { name: "Energy Drink", price: "7¤" },
                  { name: "The Infinite Loop", price: "12¤ (house special)" },
                ],
              },
              {
                name: "FOOD",
                items: [
                  { name: "Code-fuel nachos", price: "12¤" },
                  { name: "Syntax error sandwich", price: "14¤" },
                  { name: "Debugging pizza (personal)", price: "16¤" },
                  { name: "Stack overflow fries", price: "8¤" },
                ],
              },
            ]}
            footer="// TODO: Get another drink"
          />
        ),
      },

      "Personnel File": {
        content: (
          <PersonnelFile
            employeeId="BAR-COMPILER-001"
            name="Morgan Patel"
            age={39}
            position="Owner / Bartender"
            department="Independent Hospitality"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Tech district (lives in apartment above bar)"
            emergencyContact="Dev Patel (sibling)"
            performance={89}
            notes={[
              "Former software engineer - left tech to open bar",
              "Knows programming, creates themed drinks and menu items",
              "Hosts weekly coding meetups (popular with local devs)",
              "Reputation: Friendly, tech-savvy, understands the crowd",
              "Known for: Whiteboard wall, free gigabit wifi",
              "Bar motto: '// TODO: Get another drink'"
            ]}
            status="ACTIVE"
          />
        ),
      },

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
          difficulty: "medium",
          content: <Locked theme="safe" title="BAR SAFE" />
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
              {
                id: "compiler_cash",
                label: "Cash",
                description: "340¤ (daily receipts)",
                value: 340,
                isCredits: true
              },
              {
                id: "compiler_documents",
                label: "Documents",
                description: "Liquor license, business permits"
              },
              {
                id: "compiler_personal_credchip",
                label: "Personal credchip",
                description: "Unknown amount (owner's personal funds)"
              },
            ]}
            digital={[
              {
                id: "compiler_petty_cash",
                label: "Credchip",
                description: "32¤ (bar petty cash)",
                value: 32,
                isCredits: true
              },
              {
                id: "compiler_coupon",
                label: "Coupon code",
                description: "COMPILER25 (25% off next meetup event, expires in 1 month)"
              },
            ]}
            notes="Safe checked at opening (14:00) and closing (02:00)"
          />
        ),
      },

      "Internal Systems": {
        password: {
          pw: "debug",
          hint: "What programmers do when code doesn't work",
          difficulty: "hard",
          content: <Locked theme="terminal" title="BAR SYSTEMS" />
        },
        content: (
          <MaintenanceAccess
            title="[BAR INTERNAL SYSTEMS]"
            deviceModel="POS & Inventory System"
            deviceId="BAR-COMPILER-01"
            firmwareVersion="v4.2.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Today's transactions: 67",
              "Revenue: 823¤ (above average for weekday)",
              "Occupancy: 24 customers (moderate)",
              "Most ordered: Coffee, Beer, Energy drinks"
            ]}
          >
            <Divider />
            <InsetBox title="INVENTORY ALERTS:">
              <Line yellow>Low stock: Imported whiskey, craft beer (IPA)</Line>
              <Line yellow>Reorder needed: Coffee beans, energy drinks</Line>
              <Line red>Out of stock: The Infinite Loop ingredients (signature drink)</Line>
            </InsetBox>
            <InsetBox title="UPCOMING EVENTS:">
              <Line cyan>Tomorrow: Coding meetup (expected 15-20 attendees)</Line>
              <Line cyan>This weekend: Live music - "The Exception Handlers"</Line>
              <Line cyan>Next week: Startup pitch night (reserved area)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Traffic Signal Control (Innovation & 7th)": {
    content: (
      <MaintenanceAccess
        title="[TRAFFIC SIGNAL - INNOVATION AVE & 7TH ST]"
        deviceModel="Traffic Control System"
        deviceId="TRAFFIC-INNO7-01"
        firmwareVersion="v6.0.3"
        systemStatus="OPERATIONAL"
        notes={[
          "Operation Mode: AUTOMATED (adaptive timing)",
          "Cycle Time: 80 seconds (adjusts to traffic)",
          "Last Malfunction: 6 weeks ago (resolved)",
          "Maintained by: Cynergy Infrastructure Division"
        ]}
      >
        <Divider />
        <InsetBox title="CURRENT TIMING:">
          <Line neon>Innovation Ave (East-West): 40 seconds green</Line>
          <Line neon>7th St (North-South): 30 seconds green</Line>
          <Line neon>All-red phase: 5 seconds (safety buffer)</Line>
          <Line neon>Pedestrian crossing: 20 seconds</Line>
        </InsetBox>
        <InsetBox title="TRAFFIC METRICS (Last Hour):">
          <Line cyan>Vehicles: 287 (Innovation Ave), 156 (7th St)</Line>
          <Line cyan>Pedestrians: 67 crossings</Line>
          <Line cyan>Emergency vehicle overrides: 1</Line>
          <Line cyan>Average wait time: 32 seconds</Line>
        </InsetBox>
      </MaintenanceAccess>
    ),
  },

  "NetBattler Arcade (Tech Mall)": {
    content: (
      <PublicPortal
        name="NETBATTLER ARCADE"
        tagline="Jack In. Battle. Win."
        network="ARCADE_GUEST"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="NetBattle Tournament Stream (live)"
        notes={[
          "Cost: 5¤ per game, 20¤ for 5 games",
          "Players online: 18 (across 12 terminals)",
          "Weekly tournaments - Saturday, 14:00"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="10:00 - 22:00"
          days="Every Day"
        />
        <Divider />
        <InsetBox title="UPCOMING TOURNAMENT:">
          <Line cyan>Date: This Saturday, 14:00</Line>
          <Line cyan>Prize: 200¤ + Rare chip code</Line>
          <Line cyan>Registration: Open (12/16 slots filled)</Line>
        </InsetBox>
        <Line pink>"Jack in! MegaMan, execute!"</Line>
      </PublicPortal>
    ),
  },

  "Trauma Response Station (Medical District)": {
    content: (
      <PublicPortal
        name="TRAUMA RESPONSE COORDINATION"
        tagline="Critical Care. Rapid Deployment."
        network="TRAUMA_PUBLIC"
        signalStrength="strong"
        status="ACCEPTING MEMBERS"
        statusColor="neon"
        notes={[
          "Emergency medical response (platinum tier)",
          "Air & ground ambulance services",
          "Corporate contract coverage available"
        ]}
        theme="friendly"
      >
        <InsetBox title="MEMBERSHIP FEES:">
          <Line yellow>Platinum: 5,000¤/month (individual), 15,000¤/month (family)</Line>
          <Line yellow>Gold: 2,500¤/month (individual), 7,500¤/month (family)</Line>
          <Line yellow>Silver: 800¤/month (individual), 2,000¤/month (family)</Line>
        </InsetBox>
        <Divider />
        <InsetBox title="COVERAGE AREAS:">
          <Line cyan>Central districts: Full air coverage</Line>
          <Line cyan>Mid-tier districts: Ground priority</Line>
          <Line cyan>Outer districts: Limited (contract dependent)</Line>
          <Line red>Slums: No service (corporate policy)</Line>
        </InsetBox>
        <Line pink>"Your life. Our priority. Their profit."</Line>
      </PublicPortal>
    ),
  },
};

export default FUN_COMMANDS;
