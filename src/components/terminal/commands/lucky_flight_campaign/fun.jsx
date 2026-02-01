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
  Safe,
  Camera,
  Jukebox,
  MaintenanceAccess,
  VendingMachine,
  PublicPortal,
  HoursBanner,
  Menu,
  PersonnelFile,
  IncidentLog,
  NetworkDevices,
  Workstation,
  Locked,
} from "@terminal/retcomdevice"

export const FUN_COMMANDS = {
  // ============================================================================
  // RESIDENTIAL BUILDINGS
  // ============================================================================

  "Silverpeak Residences": {
    content: (
      <PublicPortal
        name="SILVERPEAK RESIDENCES"
        tagline="Modern Living. Classic Community."
        network="SILVERPEAK_RESIDENT_WIFI"
        signalStrength="strong"
        status="✓ NOW LEASING"
        statusColor="neon"
        notes={[
          "32 units (8 floors, 4 per floor)",
          "2 vacancies available",
          "Fitness center & roof deck access",
          "Monthly resident mixer (first Friday)"
        ]}
        theme="casual"
      >
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="420¤/month" />
          <KeyValue label="1-bedroom" value="580¤/month" />
          <KeyValue label="2-bedroom" value="800¤/month" />
          <Line smoke>Utilities: Additional 100-140¤/month</Line>
        </Section>
        <Divider />
        <Line pink>"Good neighbors make good neighborhoods."</Line>
      </PublicPortal>
    ),
    related_commands: {
      "Fitness Center Console": {
        content: (
          <MaintenanceAccess
            title="[ENTERTAINMENT CONSOLE - FITNESS CENTER]"
            deviceModel="FitScreen Pro"
            deviceId="FITNESS-SP-01"
            firmwareVersion="v2.8.1"
            systemStatus="OPERATIONAL"
            notes={[
              "Location: Community fitness center, wall-mounted",
              "Status: ON (workout mode)",
              "Last Used: 45 minutes ago",
              "Primary Function: Workout programs & streaming"
            ]}
          >
            <Divider />
            <InsetBox title="INSTALLED PROGRAMS:">
              <Line neon>→ CardioClimb Challenge (treadmill sync enabled)</Line>
              <Line neon>→ Strength Training Guide (video tutorials)</Line>
              <Line neon>→ Yoga Flow Sequences (morning routines popular)</Line>
              <Line neon>→ Combat Training Sim (VR compatible, 3 residents use regularly)</Line>
              <Line neon>→ Meditation & Recovery (cool-down programs)</Line>
            </InsetBox>
            <InsetBox title="USAGE STATS (This Week):">
              <Line yellow>Total sessions: 47</Line>
              <Line yellow>Most popular: CardioClimb (23 sessions)</Line>
              <Line yellow>Average session: 38 minutes</Line>
              <Line yellow>Peak usage: 06:00-08:00, 18:00-20:00</Line>
            </InsetBox>
            <Line pink>"Your body is your temple. Also your weapon."</Line>
          </MaintenanceAccess>
        ),
      },

      "Building Incident Log": {
        content: (
          <IncidentLog
            title="BUILDING INCIDENTS"
            timeframe="Last 30 days"
            incidents={[
              {
                timestamp: "Jan 12 (08:00)",
                type: "Package Delivery",
                details: {
                  Unit: "3A",
                  Issue: "Package delivery complaint",
                  Resolution: "Improved lobby notification system",
                  Status: "Resolved"
                }
              },
              {
                timestamp: "Jan 7 (23:15)",
                type: "Noise Complaint",
                details: {
                  Unit: "2B",
                  Issue: "Loud music during quiet hours",
                  Resolution: "Warning issued to resident",
                  Status: "Resolved"
                }
              },
            ]}
          >
            <Divider />
            <Line cyan>Overall: Well-maintained building, minimal issues</Line>
            <Line yellow>Floor 7 elevator: Maintenance scheduled next week</Line>
            <Line red>Roof deck lock: Repair pending</Line>
          </IncidentLog>
        ),
      },

      "Unit 6C": {
        content: (
          <PersonnelFile
            employeeId="RESIDENT-SP-6C"
            name="Mira Chen"
            age={31}
            position="Fitness Instructor"
            department="Independent / Freelance"
            hireDate="Resident since 2079 (3 years)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Silverpeak Residences, Unit 6C"
            emergencyContact="Wei Chen (brother)"
            performance={92}
            notes={[
              "Profession: Fitness instructor, personal trainer",
              "Community involvement: Hosts informal classes in lounge",
              "Excellent tenant - pays rent early, no complaints",
              "Fitness goal for year: Marathon training",
              "Known for: Early morning workouts, friendly to neighbors"
            ]}
            status="ACTIVE"
          />
        ),
        related_commands: {
          "Personal Safe": {
            // password: {
            //   pw: "marathon",
            //   hint: "Fitness goal for the new year!",
            //   difficulty: "hard",
            //   content: <Locked theme="safe" title="PERSONAL SAFE" />
            // },
            content: (
              <Safe
                id="silverpeak-6c-safe"
                model="DS-400"
                location="Unit 6C, bedroom closet shelf"
                owner="Mira Chen (fitness instructor)"
                security="Digital keypad + biometric"
                lastAccess="3 days ago"
                physical={[
                  {
                    id: "chen_cash",
                    label: "Cash",
                    description: "180¤ (emergency fund)",
                    value: 180,
                    isCredits: true
                  },
                ]}
                digital={[
                  {
                    id: "chen_credchip",
                    label: "Credchip",
                    description: "25¤",
                    value: 25,
                    isCredits: true
                  },
                ]}
                notes="Safe installed 18 months ago"
              />
            ),
          },
        },
      },

      "Management Portal": {
        // password: {
        //   pw: "community",
        //   hint: "What the building emphasizes in its culture",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="BUILDING MANAGEMENT" />
        // },
        content: (
          <MaintenanceAccess
            title="[BUILDING MANAGEMENT SYSTEM]"
            deviceModel="Property Management Software"
            deviceId="BLD-MGMT-SP"
            firmwareVersion="v3.5.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Manager Access: Building Administration",
              "Occupancy: 94% (2 vacancies)",
              "Next resident mixer: First Friday of month",
              "Maintenance schedule: Current"
            ]}
          >
            <Divider />
            <InsetBox title="RECENT ISSUES:">
              <Line yellow>Unit 3A: Package delivery complaint (resolved)</Line>
              <Line yellow>Floor 7: Elevator maintenance needed (scheduled next week)</Line>
              <Line yellow>Unit 2B: Noise complaint during quiet hours (warning issued)</Line>
              <Line red>Roof deck: Lock mechanism damaged (repair pending)</Line>
            </InsetBox>
            <InsetBox title="RESIDENT NOTES:">
              <Line cyan>Unit 6C: Fitness instructor, hosts informal classes in lounge</Line>
              <Line cyan>Unit 4A: Works night shift, requested noise considerations</Line>
              <Line cyan>Unit 8D: Monthly mixer organizer, excellent tenant</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },

  "Cascade Heights": {
    content: (
      <PublicPortal
        name="CASCADE HEIGHTS"
        tagline="Waterfront Views. Urban Convenience."
        network="CASCADE_RESIDENT_WIFI"
        signalStrength="medium"
        status="✓ NOW LEASING"
        statusColor="neon"
        notes={[
          "20 units (5 floors, 4 per floor)",
          "3 vacancies available",
          "Canal dock access (small boats permitted)",
          "Elevator out of service - repair estimate: 3 months"
        ]}
        theme="casual"
      >
        <Section title="RENT INFO:">
          <KeyValue label="Studio" value="380¤/month" />
          <KeyValue label="1-bedroom" value="520¤/month" />
          <KeyValue label="2-bedroom (canal view)" value="750¤/month" />
          <Line smoke>Utilities: Additional 90-130¤/month</Line>
        </Section>
        <Divider />
        <Line pink>"Character building. Literally."</Line>
      </PublicPortal>
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
            lastService="8 months ago (overdue for cleaning/repair)"
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
                timestamp: "Jan 20 (Storm)",
                type: "Flooding",
                details: {
                  Location: "Basement",
                  Issue: "Heavy rain caused basement flooding",
                  Resolution: "Water pumped out, resident items damaged",
                  Status: "Ongoing issue (monthly occurrence)"
                }
              },
              {
                timestamp: "Jan 10 (Ongoing)",
                type: "Equipment Failure",
                details: {
                  Issue: "Elevator out of service",
                  Resolution: "Awaiting parts, repair estimate 3 months",
                  Status: "Unresolved"
                }
              },
              {
                timestamp: "Jan 5 (Ongoing)",
                type: "Security",
                details: {
                  Location: "Dock gate",
                  Issue: "Lock broken, residents prop it open",
                  Resolution: "Repair scheduled (low priority)",
                  Status: "Unresolved"
                }
              },
            ]}
          >
            <Divider />
            <Line red>Overall: Building maintenance significantly behind</Line>
            <Line yellow>Known issues: Basement floods, elevator broken, dock unsecured</Line>
          </IncidentLog>
        ),
      },

      "Unit 2A": {
        content: (
          <PersonnelFile
            employeeId="RESIDENT-CH-2A"
            name="Jonas Verne"
            age={38}
            position="Boat Repair Technician"
            department="Independent / Freelance"
            hireDate="Resident since 2075 (7 years)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Cascade Heights, Unit 2A"
            emergencyContact="Marina Verne (ex-spouse)"
            performance={85}
            notes={[
              "Profession: Boat repair technician (small vessels)",
              "Uses building dock for work - neighbors don't complain",
              "Divorced, kept wedding ring for sentimental reasons",
              "Reliable tenant despite building issues",
              "Known for: Early morning work, skilled craftsman"
            ]}
            status="ACTIVE"
          />
        ),
        related_commands: {
          "Personal Safe": {
            // password: {
            //   pw: "tides",
            //   hint: "What the canal experiences twice daily",
            //   difficulty: "easy",
            //   content: <Locked theme="safe" title="PERSONAL SAFE" />
            // },
            content: (
              <Safe
                id="cascade-2a-safe"
                model="PS-250"
                location="Unit 2A, hall closet upper shelf"
                owner="Jonas Verne (boat repair technician)"
                security="Combination lock (mechanical + digital)"
                lastAccess="1 week ago"
                physical={[
                  {
                    id: "verne_cash",
                    label: "Cash",
                    description: "95¤ (mixed bills, rent savings)",
                    value: 95,
                    isCredits: true
                  },
                  {
                    id: "verne_documents",
                    label: "Documents",
                    description: "Boat registration, repair licenses"
                  },
                  {
                    id: "verne_tools",
                    label: "Tools",
                    description: "Precision screwdriver set (professional quality)"
                  },
                  {
                    id: "verne_ring",
                    label: "Personal",
                    description: "Wedding ring (divorced, kept for sentimental reasons)"
                  },
                ]}
                digital={[
                  {
                    id: "verne_credchip",
                    label: "Credchip",
                    description: "22¤",
                    value: 22,
                    isCredits: true
                  },
                  {
                    id: "verne_coupon",
                    label: "Coupon code",
                    description: "BOATPARTS15 (15% off marine supplies, expires in 2 months)"
                  },
                ]}
                notes="Safe showing signs of water damage (external), still functional"
              />
            ),
          },
        },
      },
    },
  },

  // ============================================================================
  // SHOPS & SERVICES
  // ============================================================================

  "Sanchez Electronics & Repair": {
    content: (
      <PublicPortal
        name="SANCHEZ ELECTRONICS & REPAIR"
        tagline="Interdimensional Selection. Dimensional Prices."
        network="SANCHEZ_SHOP_GUEST"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="Interdimensional Cable (signal unstable)"
        notes={[
          "All sales final (seriously, don't even try)",
          "Repairs: 3-5 day turnaround (maybe longer)",
          "Management not responsible for existential side effects"
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
            hireDate="2069 (13 years in business)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="Market district (unknown residence)"
            emergencyContact="Morty (grandson?)"
            performance={94}
            notes={[
              "Genius-level intellect, specializes in unusual electronics",
              "Often smells like alcohol, burps frequently",
              "Refuses to explain modifications or special inventory",
              "Reputation: Brilliant but erratic, customers nervous but loyal",
              "Known for: 'Infinite channels' cable boxes, mysterious back room",
              "Warning: Do NOT touch green vials or activate portal device"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Shop Inventory": {
        // password: {
        //   pw: "portalgun",
        //   hint: "Device in back room (broken, parts only)",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="INVENTORY SYSTEM" />
        // },
        content: (
          <MaintenanceAccess
            title="[INVENTORY DATABASE]"
            deviceModel="Shop Inventory System"
            deviceId="INV-SANCHEZ-01"
            firmwareVersion="v1.3.7"
            systemStatus="OPERATIONAL"
            notes={[
              "Last updated: 2 hours ago",
              "Standard stock tracked",
              "Back room inventory NOT for sale under any circumstances",
              "Repair queue: 3 items waiting"
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
              <Line cyan>Portal device: 1 unit (BROKEN - parts only, DO NOT ACTIVATE)</Line>
              <Line cyan>Strange blue boxes: 4 units (unknown purpose, owner won't sell)</Line>
              <Line yellow>Green vials: Unknown quantity (locked cabinet, do not touch)</Line>
            </InsetBox>
            <InsetBox title="REPAIR QUEUE:">
              <Line yellow>Smart fridge: Firmware issue (waiting for parts)</Line>
              <Line yellow>Game console: Overheating problem (in progress)</Line>
              <Line yellow>Cyberdeck: Unknown fault (customer waiting, frustrated)</Line>
            </InsetBox>
            <Line red>Note: Back room inventory NOT for sale under any circumstances</Line>
          </MaintenanceAccess>
        ),
      },

      "Demo Console": {
        content: (
          <MaintenanceAccess
            title="[DEMO CONSOLE - SHOP FLOOR]"
            deviceModel="CyStation Pro (Modified - unknown alterations)"
            deviceId="DEMO-SANCHEZ-01"
            firmwareVersion="v?.?.?"
            systemStatus="OPERATIONAL"
            notes={[
              "Location: Display near front counter",
              "Status: ON (demo mode, glitches occasionally)",
              "Last Reset: Yesterday",
              "Purpose: Customer testing & owner's personal use"
            ]}
          >
            <Divider />
            <InsetBox title="INSTALLED GAMES:">
              <Line neon>→ Life Simulator VR (suspiciously realistic, 200+ playthroughs)</Line>
              <Line neon>→ Cosmic Horror Adventure (banned in 3 districts, owner doesn't care)</Line>
              <Line neon>→ Dimension Jumper (physics seem wrong, makes players dizzy)</Line>
              <Line neon>→ Cable Surfing Simulator (connects to weird cable boxes?)</Line>
              <Line neon>→ Pocket Creatures (creature collection game, complete collection)</Line>
            </InsetBox>
            <InsetBox title="HIGH SCORES:">
              <Line yellow>Life Simulator VR: "R_Sanchez" - 55 years (off the grid ending)</Line>
              <Line yellow>Dimension Jumper: "Morty" - 2.4M points (second place)</Line>
              <Line yellow>Pocket Creatures: "BirdPrsn" - All 151 captured</Line>
            </InsetBox>
            <Line pink>"Don't ask about the modifications. Just... don't."</Line>
          </MaintenanceAccess>
        ),
      },

      "Back Room Safe": {
        // password: {
        //   pw: "C137",
        //   hint: "Dimension number written on portal device",
        //   difficulty: "easy",
        //   content: <Locked theme="safe" title="BACK ROOM SAFE" />
        // },
        content: (
          <Safe
            id="sanchez-backroom-safe"
            model="???"
            location="Back room, behind shelving unit"
            owner="R. Sanchez"
            security="Unknown technology (not standard)"
            lastAccess="Unknown (no logs available)"
            physical={[
              {
                id: "sanchez_cash",
                label: "Cash",
                description: "Unknown amount (safe makes weird noises)"
              },
              {
                id: "sanchez_documents",
                label: "Documents",
                description: "Patents? Blueprints? (language unrecognizable)"
              },
              {
                id: "sanchez_vials",
                label: "Vials",
                description: "Green liquid (DO NOT CONSUME)"
              },
              {
                id: "sanchez_components",
                label: "Device components",
                description: "Unknown purpose (possibly dangerous)"
              },
            ]}
            digital={[
              {
                id: "sanchez_credchip",
                label: "Credchip",
                description: "28¤",
                value: 28,
                isCredits: true
              },
              {
                id: "sanchez_cable_app",
                label: "App",
                description: "Inter-D Cable Guide (0¤ value, completely non-functional)"
              },
              {
                id: "sanchez_encrypted_file",
                label: "Data file",
                description: "boogeraids_aidsbooger.enc (encrypted, unknown contents)"
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
            hireDate="2080 (2 years in business)"
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
        // password: {
        //   pw: "persona",
        //   hint: "What the owner seems to change regularly",
        //   difficulty: "easy",
        //   content: <Locked theme="safe" title="SHOP SAFE" />
        // },
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
                description: "520¤ (daily receipts + emergency fund)",
                value: 520,
                isCredits: true
              },
              {
                id: "pawn_jewelry",
                label: "High-value jewelry",
                description: "Wedding rings (3), gold chains (2)"
              },
              {
                id: "pawn_documents",
                label: "Documents",
                description: "Business license, insurance papers"
              },
              {
                id: "pawn_disguises",
                label: "Personal items",
                description: "Collection of disguises (wigs, glasses, prosthetics)"
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
              {
                id: "pawn_coupon",
                label: "Coupon code",
                description: "PAWN20 (20% bonus on next pawn, expires in 1 month)"
              },
            ]}
            notes="Voice recognition changes weekly (matches current 'persona')"
          />
        ),
      },

      "Pawn Records": {
        // password: {
        //   pw: "goldenturd",
        //   hint: "What locals call the shop mascot statue",
        //   difficulty: "hard",
        //   content: <Locked theme="terminal" title="PAWN RECORDS" />
        // },
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
            <InsetBox title="OWNER HISTORY:">
              <Line yellow>2067-2068: Original owner (disappeared)</Line>
              <Line yellow>2068-2070: Second owner (committed suicide)</Line>
              <Line yellow>2070-2072: Third owner (killed in robbery)</Line>
              <Line yellow>2072-2074: Fourth owner (vanished overnight)</Line>
              <Line yellow>2074-2076: Fifth owner (fatal accident)</Line>
              <Line yellow>2076-2078: Sixth owner (murdered)</Line>
              <Line yellow>2078-2080: Seventh owner (heart attack)</Line>
              <Line yellow>2080-Present: Current owner (Roger Smith)</Line>
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
            hireDate="2075 (7 years in business)"
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
        // password: {
        //   pw: "encryption",
        //   hint: "What Cipher specializes in for security",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="WORKSTATION ACCESS" />
        // },
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
        // password: {
        //   pw: "decryption",
        //   hint: "Opposite of encryption",
        //   difficulty: "easy",
        //   content: <Locked theme="safe" title="OFFICE SAFE" />
        // },
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
              {
                id: "cipher_usb_drives",
                label: "USB drives",
                description: "Client data backups (3 drives, encrypted)"
              },
              {
                id: "cipher_documents",
                label: "Documents",
                description: "Business license, insurance, client NDAs"
              },
              {
                id: "cipher_personal_credchip",
                label: "Personal credchip",
                description: "Unknown amount (separate from business)"
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
      <PublicPortal
        name="THE COMPILER BAR"
        tagline="Where Code Meets Culture."
        network="COMPILER_GUEST_WIFI"
        signalStrength="strong"
        status="✓ OPEN"
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
            hireDate="2074 (8 years in business)"
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
        // password: {
        //   pw: "algorithm",
        //   hint: "What programmers write to solve problems",
        //   difficulty: "medium",
        //   content: <Locked theme="safe" title="BAR SAFE" />
        // },
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
        // password: {
        //   pw: "debug",
        //   hint: "What programmers do when code doesn't work",
        //   difficulty: "hard",
        //   content: <Locked theme="terminal" title="BAR SYSTEMS" />
        // },
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

  // ============================================================================
  // CITY INFRASTRUCTURE & DEVICES
  // ============================================================================

  "Public Terminal (Tech District)": {
    content: (
      <MaintenanceAccess
        title="[PUBLIC INFORMATION TERMINAL]"
        deviceModel="CityInfo Kiosk 3000"
        deviceId="KIOSK-TECH-047"
        firmwareVersion="v5.1.2"
        systemStatus="OPERATIONAL"
        notes={[
          "Location: Tech district plaza, near transit stop",
          "Purpose: City directory, maps, internet access",
          "Cost: 10¤ per 15 minutes (internet)",
          "Condition: Good (regular maintenance)",
          "Serviced weekly by Cynergy infrastructure division"
        ]}
      >
        <Divider />
        <InsetBox title="AVAILABLE SERVICES:">
          <Line neon>• City maps & navigation</Line>
          <Line neon>• Transit schedules & routes</Line>
          <Line neon>• Business directory</Line>
          <Line neon>• Emergency contacts</Line>
          <Line neon>• Public announcements</Line>
          <Line neon>• Internet access (paid)</Line>
        </InsetBox>
        <InsetBox title="RECENT SEARCHES (Anonymous):">
          <Line pink>→ "cipher solutions reviews"</Line>
          <Line pink>→ "data recovery success rate"</Line>
          <Line pink>→ "is AI sentient yet"</Line>
          <Line pink>→ "best bars near me"</Line>
          <Line pink>→ "how to leave cy permanently"</Line>
        </InsetBox>
      </MaintenanceAccess>
    ),
  },

  "Smart Vending Machine (SMV_729)": {
    content: (
      <VendingMachine
        id="tech-plaza-vending"
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
        // password: {
        //   pw: "restock",
        //   hint: "What you do when inventory runs low",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="VENDING MAINTENANCE" />
        // },
        content: (
          <MaintenanceAccess
            title="[VENDING MACHINE MAINTENANCE]"
            deviceModel="SVM-700"
            deviceId="PLAZA-VM-2891"
            firmwareVersion="v3.2.1"
            systemStatus="OPERATIONAL"
            uptime="12 days, 4 hours"
            notes={[
              "Last service: 2 days ago (routine)",
              "Next service: Thursday, 09:00",
              "Owner: VendCorp (vending division)",
              "Machine empties to central vault weekly"
            ]}
          />
        ),
        related_commands: {
          "Internal Safe": {
            // password: {
            //   pw: "coins",
            //   hint: "What accumulates in the cash box",
            //   difficulty: "easy",
            //   content: <Locked theme="safe" title="CASH BOX" />
            // },
            content: (
              <Safe
                id="tech-plaza-vending-safe"
                model="VM-CASH-200"
                location="Internal cash collection box"
                owner="VendCorp (vending division)"
                security="Maintenance keypad"
                lastAccess="2 days ago (routine service)"
                physical={[
                  {
                    id: "vending_coins",
                    label: "Coins",
                    description: "140¤ in change (mixed denominations)",
                    value: 140,
                    isCredits: true
                  },
                  {
                    id: "vending_bills",
                    label: "Bills",
                    description: "80¤ (small bills)",
                    value: 80,
                    isCredits: true
                  },
                  {
                    id: "vending_service_log",
                    label: "Service log",
                    description: "Paper logbook (last 6 months)"
                  },
                ]}
                digital={[
                  {
                    id: "vending_credchip",
                    label: "Credchip",
                    description: "95¤ (2 days of receipts)",
                    value: 95,
                    isCredits: true
                  },
                  {
                    id: "vending_transaction_log",
                    label: "Transaction log",
                    description: "Last 1000 purchases logged"
                  },
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
    // password: {
    //   pw: "fiatvalue",
    //   hint: "It's worth something because everyone agrees it is",
    //   difficulty: "easy",
    //   content: <Locked theme="terminal" title="ATM ACCESS" />
    // },
    content: (
      <ATM
        id="tech-district-atm"
        model="ATM-600"
        location="Tech district, corner of Innovation Ave & 7th"
        network="CityBank Network"
        credits={200}
        lastService="5 days ago"
        transactions={[
          "08:15 → Withdrawal: 100¤",
          "09:42 → Balance inquiry",
          "11:18 → Withdrawal: 60¤",
          "14:33 → Deposit: 200¤ (paycheck)",
          "16:08 → Withdrawal: 40¤",
        ]}
      />
    ),
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

  "Streetlight Grid (Innovation Ave)": {
    content: (
      <MaintenanceAccess
        title="[STREETLIGHT CONTROL - INNOVATION AVENUE]"
        deviceModel="Street Lighting System"
        deviceId="LIGHTS-INNO-01"
        firmwareVersion="v4.1.0"
        systemStatus="OPERATIONAL"
        notes={[
          "Grid management: 45 units total",
          "Active lights: 43/45 (95.6%)",
          "Malfunctioning: 2 units (repair scheduled)",
          "System managed by Cynergy Water & Power Co."
        ]}
      >
        <Divider />
        <InsetBox title="SCHEDULED OPERATIONS:">
          <Line neon>Auto-on: 18:30 (dusk sensor)</Line>
          <Line neon>Auto-off: 06:00 (dawn sensor)</Line>
          <Line neon>Dimming: 23:00-05:00 (reduced brightness during low traffic)</Line>
          <Line neon>Brightness: 75% (adaptive based on ambient light)</Line>
        </InsetBox>
        <InsetBox title="MAINTENANCE LOG:">
          <Line yellow>Last service: 3 weeks ago</Line>
          <Line yellow>Next scheduled: 5 weeks</Line>
          <Line yellow>Failed units: #23 (ballast issue), #37 (vandalism)</Line>
          <Line red>Vandalism incidents: 2 this quarter</Line>
        </InsetBox>
      </MaintenanceAccess>
    ),
  },

  // ============================================================================
  // GAME REFERENCES & EASTER EGGS
  // ============================================================================

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
        status="✓ ACCEPTING MEMBERS"
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

  "Samurai Memorabilia Shop": {
    content: (
      <PublicPortal
        name="CHROME & STEEL COLLECTIBLES"
        tagline="Legends Never Die. They Just Get Merchandised."
        network="CHROME_STEEL_GUEST"
        signalStrength="strong"
        status="✓ OPEN"
        statusColor="neon"
        nowPlaying="Samurai - Chippin' In (1996 remaster)"
        notes={[
          "Vintage & reproduction band merchandise",
          "Bar area with themed drinks",
          "Signed memorabilia available"
        ]}
        theme="friendly"
      >
        <HoursBanner
          name="Schedule"
          hours="Mon-Sat: 12:00-00:00 | Sun: 14:00-22:00"
          days="7 Days a Week"
        />
        <Divider />
        <InsetBox title="SPECIAL DRINKS (Bar Area):">
          <Line neon>"Johnny Silverhand Special": 18¤ (whiskey, ice, attitude)</Line>
          <Line neon>"Relic Runner": 15¤ (mystery cocktail, glows slightly)</Line>
          <Line neon>"Netrunner's Choice": 12¤ (energy drink + vodka)</Line>
        </InsetBox>
        <Line pink>"Wake the fuck up, samurai. We have merch to sell."</Line>
      </PublicPortal>
    ),
  },
};

export default FUN_COMMANDS;
