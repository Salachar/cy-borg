import {
  Line,
  Section,
  Divider,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  ATM,
  Camera,
  CCTV,
  Extractable,
  FacilityPortal,
  MaintenanceAccess,
  Menu,
  NetworkDevices,
  PersonnelFile,
  PublicPortal,
  RetComImage,
  Safe,
  SecureAccessControl,
  Tenet,
  VendingMachine,
} from '@terminal/retcomdevice';

import { GLASS_GARDENS_COMMANDS } from './glass_gardens';
import { STEEL_PENTHOUSE_COMMANDS } from './steel_penthouse';

import penthouseBlueprint from '@images/blueprints/steel_penthouse_2.png';
import central_tower_atrium_cctv_image from '@images/locations/central_tower_atrium_cctv.png';

// ============================================================================
// CENTRAL PLAZA TOWER
// 51 floors. Ground + Floor 2: open atrium (lobby + ChromeLux).
// Floors 3-39: Residential. Floors 40-50: Penthouses. Floor 51: Management/Glass Gardens roof.
// ============================================================================

export const CENTRAL_PLAZA_TOWER_COMMANDS = {
  "Central Plaza Tower": {
    content: (
      <FacilityPortal
        companyName="CENTRAL PLAZA"
        facilityId="TOWER BLOCK 7"
        tagline="Premium Living in the Heart of the City"
        location="2847 Central Plaza, South Central District"
        owner="Central District Properties Inc."
        function="Luxury Residential High-Rise + Retail"
        personnel="198 residential units + 12 penthouses (210 total)"
        networkStatus="TOWER_INTERNAL (Secure building network)"
        securityLevel="HIGH"
        warnings={[
          "Visitor log maintained at security desk",
          "Weapon scanners active at main entrance",
          "Floors 40+ require keycard authorization",
          "ChromeLux security personnel operate throughout atrium"
        ]}
        theme="corporate"
      />
    ),
    related_commands: {

      // ========================================================================
      // ATRIUM (GROUND + FLOOR 2)
      // ========================================================================

      "Atrium": {
        content: (
          <MaintenanceAccess
            title="[ATRIUM - GROUND & FLOOR 2]"
            deviceModel="Public Zone Monitoring"
            deviceId="ATRIUM-TOWER-01"
            firmwareVersion="v3.2.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Open double-height atrium connecting ground floor and second floor",
              "Ground floor: Lobby, security desk, ATM, vending",
              "Second floor: ChromeLux boutique (open to atrium below)",
              "ChromeLux security doubles as visible deterrent in shared space",
              "Foot traffic: Residents, visitors, ChromeLux clients"
            ]}
          >
            <Divider />
            <InsetBox title="GROUND FLOOR FEATURES:">
              <Line neon>• Security desk (2 guards on duty, weapon scanners)</Line>
              <Line neon>• Visitor check-in system</Line>
              <Line neon>• ATM (Cy Central Bank)</Line>
              <Line neon>• Vending machine (VendLux Elite)</Line>
              <Line neon>• Elevator bank (4 main + 1 service)</Line>
              <Line neon>• Digital resident directory</Line>
            </InsetBox>
            <InsetBox title="SECOND FLOOR FEATURES:">
              <Line neon>• ChromeLux Boutique (open railing overlooks lobby)</Line>
              <Line neon>• ChromeLux waiting lounge</Line>
              <Line neon>• Consultation suites (3 rooms, appointment only)</Line>
              <Line neon>• Surgical wing (restricted access)</Line>
            </InsetBox>
            <InsetBox title="CURRENT STATUS:">
              <Line cyan>Moderate traffic. Mix of residents, visitors, ChromeLux clients.</Line>
              <Line cyan>Party guests have been flowing to Unit 4201 for 3 days.</Line>
              <Line cyan>ChromeLux staff visible on second floor railing - visibly chromed.</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Atrium CCTV": {
            content: (
              <CCTV
                src={central_tower_atrium_cctv_image}
                cameraId="CAM-CPT-FOYER"
                location="Entrance"
                theme="amber"
                height={500}
              />
            ),
          },

          // ------------------------------------------------------------------
          // LOBBY DEVICES
          // ------------------------------------------------------------------

          "ATM": {
            content: (
              <ATM
                id="atm-tower-lobby"
                model="ATM-600"
                location="Central Plaza Tower - Ground Floor Lobby"
                network="Cy Central Bank"
                credits={500}
                lastService="Yesterday, 14:00"
                transactions={[
                  "14:32 → Withdrawal: 500¤",
                  "13:18 → Withdrawal: 1,000¤",
                  "12:05 → Deposit: 2,500¤",
                  "11:42 → Balance inquiry",
                  "10:15 → Withdrawal: 200¤",
                ]}
              />
            ),
            related_commands: {
              "Maintenance Panel": {
                content: (
                  <MaintenanceAccess
                    title="[ATM MAINTENANCE PANEL]"
                    deviceModel="ATM-600"
                    deviceId="ATM-CP-TOWER7-L01"
                    firmwareVersion="v4.2.0"
                    systemStatus="OPERATIONAL"
                    uptime="87 days, 14 hours"
                    notes={[
                      "Cash available: 87,500¤ (well-stocked)",
                      "Daily withdrawals: 142,300¤ (high volume)",
                      "Last refill: Yesterday, 14:00",
                      "Next scheduled: Tomorrow, 14:00",
                      "Error log: 0 errors"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="NETWORK CONNECTION:">
                      <Line cyan>Connected to: TOWER_INTERNAL network</Line>
                      <Line cyan>Bank VPN: Cy Central Bank Secure Gateway</Line>
                      <Line cyan>Transaction encryption: Active</Line>
                      <Line yellow>Note: Small transaction skims rarely detected due to high volume</Line>
                    </InsetBox>
                    <Line smoke small>Physical cash extraction requires service key. Digital skim possible via network access.</Line>
                  </MaintenanceAccess>
                ),
                related_commands: {
                  "Cash Box": {
                    content: (
                      <Extractable
                        id="atm-tower-lobby-cash"
                        physicalItems={[
                          {
                            id: "atm_bills_large",
                            label: "Large bills",
                            description: "500¤ in 100¤ notes",
                            value: 500,
                            isCredits: true
                          },
                        ]}
                        stealing={false}
                      />
                    ),
                  },
                },
              },
            },
          },

          "Vending Machine": {
            content: (
              <VendingMachine
                id="vend-tower-lobby"
                model="VendLux Elite"
                location="Central Plaza Tower - Ground Floor Lobby"
                drinks={[
                  { name: 'PREMIUM WATER', pattern: 'waves', color: 'blue', available: true },
                  { name: 'ENERGY DRINK', pattern: 'lines', color: 'orange', available: true },
                  { name: 'SYNTH-CAF', pattern: 'dots', color: 'yellow', available: true },
                  { name: 'PROTEIN BAR', pattern: 'blocks', color: 'green', available: true },
                  { name: 'ORGANIC SNACKS', pattern: 'circles', color: 'purple', available: true },
                ]}
              />
            ),
            related_commands: {
              "Maintenance Panel": {
                content: (
                  <MaintenanceAccess
                    title="[VENDING MACHINE MAINTENANCE]"
                    deviceModel="VendLux Elite"
                    deviceId="VM-TOWER-L01"
                    firmwareVersion="v3.0.1"
                    systemStatus="OPERATIONAL"
                    uptime="156 days, 3 hours"
                    notes={[
                      "Upscale products for upscale residents",
                      "Prices: 8¤-25¤ (premium pricing)",
                      "Last service: 1 week ago",
                      "Collection box emptied weekly"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="CASH BOX:">
                      <Extractable
                        id="vending-tower-lobby-cash"
                        physicalItems={[
                          {
                            id: "vending_bills",
                            label: "Bills",
                            description: "180¤ (wealthy residents pay cash)",
                            value: 180,
                            isCredits: true
                          },
                          {
                            id: "vending_coins",
                            label: "Coins",
                            description: "45¤ in mixed change",
                            value: 45,
                            isCredits: true
                          },
                        ]}
                        stealing={false}
                      />
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          // ------------------------------------------------------------------
          // CHROMELUX (FLOOR 2 ATRIUM)
          // ------------------------------------------------------------------

          "ChromeLux Boutique": {
            content: (
              <PublicPortal
                name="CHROMELUX"
                tagline="Premium augmentation for the discerning individual"
                network="CHROMELUX_GUEST"
                signalStrength="strong"
                status="✓ OPEN (By Appointment)"
                statusColor="neon"
                notes={[
                  "Appointment required (walk-ins discouraged)",
                  "Consultation fee: 500¤ (credited toward purchase)",
                  "Installation by certified surgeons only",
                  "Security services available to Central Plaza Tower residents"
                ]}
                theme="fancy"
              >
                <Divider />
                <Section title="LOCATION:">
                  <Line cyan>Second floor - Central Plaza Tower Atrium</Line>
                  <Line cyan>Open railing overlooks ground floor lobby</Line>
                  <Line smoke small>Hours: 10:00 - 20:00, Mon-Sat (closed Sunday)</Line>
                </Section>
              </PublicPortal>
            ),
            related_commands: {
              "Product Catalog": {
                content: (
                  <Menu
                    title="CHROMELUX"
                    subtitle="Premium Cyberware - By Appointment"
                    signType="food"
                    categories={[
                      {
                        name: "NEURAL AUGMENTS",
                        items: [
                          { name: "Reflex Booster MK-II", price: "8,500¤" },
                          { name: "Neural Interface (Premium)", price: "12,000¤" },
                          { name: "Memory Expansion Unit", price: "6,000¤" },
                          { name: "Combat Targeting System", price: "15,000¤" },
                        ]
                      },
                      {
                        name: "PHYSICAL AUGMENTS",
                        items: [
                          { name: "Dermal Plating (Titanium)", price: "10,000¤" },
                          { name: "Subdermal Armor (Ceramic)", price: "14,000¤" },
                          { name: "Reinforced Skeleton", price: "18,000¤" },
                          { name: "Cyber-limbs (per limb)", price: "20,000¤+" },
                        ]
                      },
                      {
                        name: "OPTICAL AUGMENTS",
                        items: [
                          { name: "Low-light Vision", price: "4,500¤" },
                          { name: "Thermal Imaging", price: "7,000¤" },
                          { name: "Targeting Reticle", price: "5,500¤" },
                          { name: "Full Cyber-eyes (premium)", price: "12,000¤" },
                        ]
                      },
                      {
                        name: "MILITARY-GRADE (⚠ License Required)",
                        items: [
                          { name: "Adrenaline Injector System", price: "25,000¤" },
                          { name: "Pain Editor", price: "30,000¤" },
                          { name: "Sandevistan Reflex System", price: "45,000¤" },
                          { name: "Gorilla Arms", price: "35,000¤" },
                        ]
                      },
                    ]}
                    footer="Consultation fee 500¤ credited toward purchase. Financing at 18% APR."
                  />
                ),
              },

              "Personnel File - Dr. Nakamura": {
                content: (
                  <PersonnelFile
                    employeeId="CHROMELUX-OWNER-001"
                    name="Dr. Yuki Nakamura"
                    age={44}
                    position="Owner / Chief Surgeon"
                    department="Cyberware Installation"
                    hireDate="Founded ChromeLux: 2061 (6 years)"
                    supervisor="Self-employed"
                    clearanceLevel={5}
                    district="Central Plaza Tower, Unit 2204 (Floor 22)"
                    emergencyContact="Private medical insurance"
                    performance={96}
                    notes={[
                      "Former TG Labs researcher - cybernetics division",
                      "Departed TG Labs 2061 (circumstances undisclosed)",
                      "Specialization: High-end custom chrome installations",
                      "Reputation: Best rejection rate in South Central (zero documented)",
                      "Clientele: Corporate executives, killmatch athletes, wealthy criminals",
                      "Building security contract: ChromeLux staff supplement Tower security",
                      "Residence: Unit 2204 - same building as boutique"
                    ]}
                    status="ACTIVE"
                  />
                ),
              },

              "Vault Safe": {
                content: (
                  <Safe
                    id="chromelux-vault"
                    model="MilitaryGrade-X"
                    location="Secure vault room, Floor 2 surgical wing"
                    owner="Dr. Yuki Nakamura"
                    security="Biometric + retinal scan + 8-digit PIN"
                    lastAccess="Yesterday (inventory check)"
                    physical={[
                      {
                        id: "vault_cyberware_stock",
                        label: "Premium cyberware inventory",
                        description: "Various high-end augments (estimated 500k¤+ value)"
                      },
                      {
                        id: "vault_military_chrome",
                        label: "Military-grade augments",
                        description: "Restricted stock (requires license to sell legally)"
                      },
                      {
                        id: "vault_custom_parts",
                        label: "Custom installation components",
                        description: "Rare parts for specialized builds"
                      },
                    ]}
                    digital={[
                      {
                        id: "vault_credchip",
                        label: "Business credchip",
                        description: "45,000¤ (operating capital)",
                        value: 45000,
                        isCredits: true
                      },
                      {
                        id: "vault_client_list",
                        label: "Client database",
                        description: "Complete installation records - all clients (encrypted)"
                      },
                    ]}
                    notes="Vault is military-grade. Client list is worth more than the cash."
                    stealing={true}
                  />
                ),
              },
            },
          },
        },
      },

      // ========================================================================
      // RESIDENT DIRECTORY (PUBLIC)
      // ========================================================================

      "Resident Directory": {
        content: (
          <MaintenanceAccess
            title="[RESIDENT DIRECTORY - PUBLIC ACCESS]"
            deviceModel="Directory System"
            deviceId="DIR-TOWER-01"
            firmwareVersion="v2.0.1"
            systemStatus="OPERATIONAL"
            notes={[
              "Partial listing - many residents opt for privacy",
              "Full directory: Building security only",
              "210 units total (198 residential, 12 penthouses)",
              "Floors 3-39: Standard residential",
              "Floors 40-50: Penthouse level"
            ]}
          >
            <Divider />
            <InsetBox title="LISTED RESIDENTS (SELECTED):">
              <Line smoke small>Showing public listings only. 147 residents unlisted by request.</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {

          // ------------------------------------------------------------------
          // UNIT 2204 - DR. NAKAMURA
          // ------------------------------------------------------------------

          "Unit 2204 - Floor 22": {
            content: (
              <Tenet
                id="RES-2204"
                name="Y. Nakamura"
                unit="2204"
                building="Central Plaza Tower"
                moveInDate="March 2061"
                status="ACTIVE"
                intercomEnabled={true}
                emergencyContact="ChromeLux Boutique - Floor 2"
                notes="Deliveries: Leave with ChromeLux reception (Floor 2). Do not leave at door."
              />
            ),
          },

          // ------------------------------------------------------------------
          // UNIT 1508 - RANDOM RESIDENT A
          // ------------------------------------------------------------------

          "Unit 1508 - Floor 15": {
            content: (
              <Tenet
                id="RES-1508"
                name="D. & P. Osei"
                unit="1508"
                building="Central Plaza Tower"
                moveInDate="January 2065"
                status="ACTIVE"
                intercomEnabled={true}
                notes="Deliveries: Ring intercom. Do not leave unattended."
              />
            ),
          },

          // ------------------------------------------------------------------
          // UNIT 3302 - RANDOM RESIDENT B
          // ------------------------------------------------------------------

          "Unit 3302 - Floor 33": {
            content: (
              <Tenet
                id="RES-3302"
                name="T. Halverson"
                unit="3302"
                building="Central Plaza Tower"
                moveInDate="August 2063"
                status="ACTIVE"
                intercomEnabled={false}
                notes="All correspondence via building management. Do not buzz directly."
              />
            ),
          },

          // ------------------------------------------------------------------
          // STEEL JACKHAMMER'S PENTHOUSE
          // ------------------------------------------------------------------

          "Unit 4201 - Floor 42": {
            content: (
              <Tenet
                id="RES-4201"
                name="Jackhammer"
                unit="4201"
                building="Central Plaza Tower"
                moveInDate="September 2066"
                status="ACTIVE"
                intercomEnabled={false}
                notes="All deliveries: Contact Alliansen Inc. management. Do not buzz directly."
              />
            ),
            related_commands: {
              ...STEEL_PENTHOUSE_COMMANDS,
            }
          },
        },
      },

      // ========================================================================
      // SECURITY SYSTEMS
      // ========================================================================

      "Security Systems": {
        content: (
          <MaintenanceAccess
            title="[BUILDING SECURITY SYSTEMS]"
            deviceModel="Security Control Center"
            deviceId="SEC-TOWER-01"
            firmwareVersion="v6.0.3"
            systemStatus="OPERATIONAL"
            notes={[
              "Central monitoring station - Floor 51 management level",
              "Full building coverage (48 cameras)",
              "⚠ RESTRICTED ACCESS - Authorized security personnel only",
              "ChromeLux contract supplements lobby and atrium coverage"
            ]}
          >
            <Divider />
            <InsetBox title="AVAILABLE SYSTEMS:">
              <Line neon>• Camera surveillance grid (48 cameras)</Line>
              <Line neon>• Access control (elevators, doors, gates)</Line>
              <Line neon>• Building network (internal infrastructure)</Line>
              <Line neon>• Maintenance systems</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {

          "Camera Grid": {
            content: (
              <MaintenanceAccess
                title="[SECURITY CAMERA GRID]"
                deviceModel="Surveillance System"
                deviceId="CAM-GRID-01"
                firmwareVersion="v4.2.1"
                systemStatus="OPERATIONAL"
                notes={[
                  "Total cameras: 48",
                  "Resolution: 1080p-4K (varies by location)",
                  "Recording: 24/7 to local storage",
                  "Retention: 30 days",
                  "1 camera offline: Roof (scheduled maintenance)"
                ]}
              >
                <Divider />
                <InsetBox title="RECENT ALERTS:">
                  <Line yellow>14:32 - High traffic to Unit 4201 continues (party day 3)</Line>
                  <Line yellow>12:15 - Roof camera offline (scheduled maintenance)</Line>
                  <Line yellow>09:45 - Delivery authorization: Unit 4201 (alcohol delivery)</Line>
                </InsetBox>
                <InsetBox title="CAMERA LOCATIONS:">
                  <Line neon>• Atrium ground & second floor (6 cameras)</Line>
                  <Line neon>• Elevator banks (8 cameras)</Line>
                  <Line neon>• Penthouse hallways floors 40-50 (20 cameras)</Line>
                  <Line neon>• Service areas (6 cameras)</Line>
                  <Line neon>• Parking garage (5 cameras)</Line>
                  <Line neon>• Glass Gardens roof level (3 cameras)</Line>
                  <Line red>• Roof access door (1 camera - OFFLINE)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {

              "Floor 42 - Penthouse Hallway": {
                content: (
                  <Camera
                    id="cam-fl42-hall-a"
                    location="Floor 42 - Penthouse Hallway"
                    coverage="Full hallway view including Unit 4201 entrance"
                    status="ACTIVE"
                    recording={true}
                    storage="Local server (30 day retention)"
                    timeline={[
                      "14:32 → Three guests entered Unit 4201 (party traffic)",
                      "14:28 → One guest left, stumbling drunk",
                      "14:25 → Food delivery, guards checked bags briefly",
                      "14:20 → Guards swapped out for break rotation",
                    ]}
                    blindSpots={[
                      "Interior of Unit 4201 (private)",
                    ]}
                    lastService="2 weeks ago"
                  />
                ),
                related_commands: {
                  "Live Feed": {
                    content: (
                      <MaintenanceAccess
                        title="[CAM-FL42-HALL-A LIVE FEED]"
                        deviceModel="Live Surveillance Feed"
                        deviceId="CAM-FL42-HALL-A"
                        firmwareVersion="v4.2.1"
                        systemStatus="STREAMING"
                        notes={[
                          "Floor 42 Penthouse Hallway",
                          "Unit 4201 entrance visible"
                        ]}
                      >
                        <Divider />
                        <InsetBox title="CURRENT SCENE:">
                          <Line cyan>• Unit 4201 entrance clearly visible</Line>
                          <Line cyan>• Two guards stationed outside (private security, not building staff)</Line>
                          <Line cyan>• Guards relaxed, chatting - not heavily vigilant</Line>
                          <Line cyan>• Party guests entering and leaving continuously</Line>
                          <Line cyan>• Music audible through door (bass thumping)</Line>
                          <Line cyan>• Hallway: empty bottles, takeout boxes, general chaos</Line>
                        </InsetBox>
                        <InsetBox title="ENTRY ASSESSMENT:">
                          <Line yellow>Guards checking for heavy weapons on entry</Line>
                          <Line yellow>Lenient with anyone who looks like a party guest</Line>
                          <Line yellow>Small concealed items likely to pass</Line>
                          <Line yellow>Heavy weapons and explosives will be caught</Line>
                        </InsetBox>
                      </MaintenanceAccess>
                    ),
                  },
                },
              },

              "Service Entrance Camera": {
                content: (
                  <Camera
                    id="cam-service-ent"
                    location="Service Entrance - East Side"
                    coverage="Service entrance door and loading area"
                    status="ACTIVE"
                    recording={true}
                    storage="Local server (30 day retention)"
                    timeline={[
                      "Today, 14:10 → Delivery truck departed",
                      "Today, 13:45 → Delivery arrival (building supplies)",
                      "Today, 11:20 → Maintenance worker entered (HVAC repair)",
                      "Today, 08:30 → Cleaning crew arrived",
                    ]}
                    blindSpots={[
                      "Side alley (partially obscured by dumpsters)",
                    ]}
                    lastService="2 weeks ago"
                  />
                ),
                related_commands: {
                  "Live Feed": {
                    content: (
                      <MaintenanceAccess
                        title="[CAM-SERVICE-ENT LIVE FEED]"
                        deviceModel="Live Surveillance Feed"
                        deviceId="CAM-SERVICE-ENT"
                        firmwareVersion="v4.2.1"
                        systemStatus="STREAMING"
                        notes={[
                          "Service Entrance - East Side",
                          "Unguarded - monitored remotely only"
                        ]}
                      >
                        <Divider />
                        <InsetBox title="CURRENT SCENE:">
                          <Line cyan>• Service entrance door closed and locked</Line>
                          <Line cyan>• Keycard reader visible (maintenance/delivery access)</Line>
                          <Line cyan>• Loading area empty - last delivery 20 min ago</Line>
                          <Line cyan>• No guard posted here</Line>
                        </InsetBox>
                        <InsetBox title="TACTICAL NOTE:">
                          <Line yellow>Unguarded entrance, keycard required</Line>
                          <Line yellow>Service elevator from here reaches all floors including penthouses</Line>
                          <Line yellow>Bypasses lobby weapon scanners entirely</Line>
                        </InsetBox>
                      </MaintenanceAccess>
                    ),
                  },
                },
              },

              "Roof Access Camera": {
                content: (
                  <MaintenanceAccess
                    title="[CAM-ROOF STATUS]"
                    deviceModel="Security Camera"
                    deviceId="CAM-ROOF-01"
                    firmwareVersion="v4.2.1"
                    systemStatus="OFFLINE"
                    notes={[
                      "Status: MAINTENANCE - Weather damage",
                      "Offline since: 12:00 today",
                      "Estimated repair: 2 days",
                      "Covers: Roof access door and helipad approach"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="⚠ SECURITY BLIND SPOT:">
                      <Line red bold>Roof access currently unmonitored</Line>
                      <Line yellow>Door locked (keycard required) but no visual confirmation possible</Line>
                      <Line yellow>Helipad and Glass Gardens service access from this level</Line>
                      <Line yellow>Penthouse balconies approx. 9 floors below</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "Access Control System": {
            content: (
              <SecureAccessControl
                systemName="BUILDING ACCESS CONTROL"
                location="Central Plaza Tower"
                systemVersion="v5.0.2"
                lastUpdate="2 weeks ago"
                accessPoints={[
                  {
                    name: "Main Elevators (4 units)",
                    status: "OPERATIONAL",
                    security: "Keycard required for floors 40+",
                    authorized: "Residents + authorized guests",
                    lastAccess: "Active (constant use)",
                    accessCount: 847,
                    notes: "Destination approval required for penthouse floors"
                  },
                  {
                    name: "Service Elevator",
                    status: "OPERATIONAL",
                    security: "Staff keycard required (all floors)",
                    authorized: "Maintenance, delivery, ChromeLux staff",
                    lastAccess: "20 minutes ago",
                    accessCount: 47,
                    flags: ["BYPASSES LOBBY"],
                    notes: "Direct penthouse access without front desk"
                  },
                  {
                    name: "Service Entrance - East Side",
                    status: "LOCKED",
                    security: "Keycard (maintenance staff)",
                    authorized: "Building maintenance, delivery crews",
                    lastAccess: "20 minutes ago (delivery truck)",
                    accessCount: 12,
                    flags: ["UNGUARDED"],
                    notes: "No physical guard - monitored remotely via camera"
                  },
                  {
                    name: "Roof Access - Floor 51",
                    status: "LOCKED",
                    security: "Keycard (maintenance + Glass Gardens staff)",
                    authorized: "Maintenance staff, Glass Gardens service entrance",
                    lastAccess: "This morning (routine check)",
                    accessCount: 2,
                    flags: ["CAMERA OFFLINE"],
                    notes: "Camera down for 2 days. Helipad and Glass Gardens accessible from here."
                  },
                  {
                    name: "Parking Garage Gates (B1-B3)",
                    status: "OPERATIONAL",
                    security: "Resident keycard",
                    authorized: "Residents only",
                    lastAccess: "Continuous",
                    accessCount: 324
                  },
                  {
                    name: "Emergency Stairwell - Penthouse Level",
                    status: "LOCKED",
                    security: "One-way exit only (fire code)",
                    authorized: "Emergency exit - no entry from stairwell",
                    lastAccess: "Not tracked (exit only)",
                    notes: "Cannot enter penthouse level from stairwell side"
                  },
                ]}
              />
            ),
            related_commands: {
              "Elevator Control": {
                content: (
                  <MaintenanceAccess
                    title="[ELEVATOR CONTROL SYSTEM]"
                    deviceModel="Elevator Management"
                    deviceId="ELEV-CONTROL-01"
                    firmwareVersion="v4.0.1"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Elevators: 4 main + 1 service",
                      "Status: All operational (Elevator 3 minor noise - inspection pending)",
                      "Restrictions: Floors 40+ require keycard + destination approval",
                      "Service elevator: Staff keycard, all floors"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="OVERRIDE OPTIONS (ADMIN ACCESS):">
                      <Line yellow>• Disable keycard requirement for specific elevator</Line>
                      <Line yellow>• Force elevator to specific floor</Line>
                      <Line yellow>• Lock elevator at current floor</Line>
                      <Line yellow>• Duration: Up to 10 minutes (auto-reset)</Line>
                    </InsetBox>
                    <Line red>⚠ All overrides generate security log entries.</Line>
                  </MaintenanceAccess>
                ),
              },

              "Door Lock Control": {
                content: (
                  <MaintenanceAccess
                    title="[DOOR LOCK CONTROL]"
                    deviceModel="Building Access Management"
                    deviceId="LOCK-CONTROL-01"
                    firmwareVersion="v3.5.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Controllable: Service doors, roof access, garage gates",
                      "Individual unit doors: NOT controlled by building system",
                      "Override duration: 5 minutes before auto-lock"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="CONTROLLABLE LOCKS:">
                      <Line yellow>Service Entrance - East Side</Line>
                      <Line yellow>Roof Access Door - Floor 51</Line>
                      <Line yellow>Emergency Stairwell Doors</Line>
                      <Line yellow>Parking Garage Gates (B1-B3)</Line>
                    </InsetBox>
                    <InsetBox title="NOT CONTROLLABLE:">
                      <Line red bold>Unit 4201 uses a PRIVATE security system.</Line>
                      <Line red>Building access control does not extend to individual unit doors.</Line>
                      <Line red>Penthouse smart home requires direct network access to hack separately.</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "Building Network": {
            content: (
              <MaintenanceAccess
                title="[BUILDING NETWORK ACCESS]"
                deviceModel="Network Infrastructure"
                deviceId="NET-TOWER-01"
                firmwareVersion="v7.2.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Network: TOWER_INTERNAL",
                  "Encryption: WPA3-Enterprise",
                  "Bandwidth: 10 Gbps fiber backbone",
                  "Covers: All building systems, lobby devices, management floor"
                ]}
              >
                <Divider />
                <InsetBox title="ACCESSIBLE FROM HERE:">
                  <Line yellow>• Building security systems (cameras, access control)</Line>
                  <Line yellow>• Elevator and door controls</Line>
                  <Line yellow>• HVAC and maintenance systems</Line>
                  <Line yellow>• ATM network (transaction data)</Line>
                  <Line yellow>• Glass Gardens management systems</Line>
                </InsetBox>
                <InsetBox title="SEPARATE NETWORKS (NOT ACCESSIBLE):">
                  <Line red>• Individual resident unit networks</Line>
                  <Line red>• Unit 4201 smart home (JACKHAMMER_HOME) - private</Line>
                  <Line red>• ChromeLux internal network (CHROMELUX_INTERNAL) - separate</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Connected Devices": {
                content: (
                  <NetworkDevices
                    networkName="TOWER_INTERNAL"
                    devices={[
                      { name: "Security Console", ip: "10.0.1.10", type: "Terminal", status: "ONLINE", lastSeen: "Active now" },
                      { name: "Camera Grid Hub", ip: "10.0.1.20", type: "Surveillance", status: "ONLINE", lastSeen: "Active now" },
                      { name: "Elevator Control", ip: "10.0.1.100", type: "Access Control", status: "ONLINE", lastSeen: "Active now" },
                      { name: "Door Lock System", ip: "10.0.1.101", type: "Access Control", status: "ONLINE", lastSeen: "Active now" },
                      { name: "HVAC Main Control", ip: "10.0.1.200", type: "Maintenance", status: "ONLINE", lastSeen: "Active now" },
                      { name: "Fire Suppression", ip: "10.0.1.201", type: "Safety", status: "ONLINE", lastSeen: "Active now" },
                      { name: "Lobby ATM", ip: "10.0.1.150", type: "Banking", status: "ONLINE", lastSeen: "Active now" },
                      { name: "Parking Gate Control", ip: "10.0.1.102", type: "Access Control", status: "ONLINE", lastSeen: "Active now" },
                      { name: "Glass Gardens Systems", ip: "10.0.1.300", type: "Facility", status: "ONLINE", lastSeen: "Active now" },
                    ]}
                  />
                ),
              },
            },
          },
        },
      },

      // ========================================================================
      // TOWER MANAGEMENT (FLOOR 51)
      // ========================================================================

      "Tower Management": {
        content: (
          <MaintenanceAccess
            title="[TOWER MANAGEMENT - FLOOR 51]"
            deviceModel="Facility Management System"
            deviceId="MGMT-TOWER-01"
            firmwareVersion="v5.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Floor 51 - Management and services level",
              "Building operations, Glass Gardens restaurant above (roof)",
              "Restricted access - management and authorized staff only",
              "Central maintenance and security coordination from this floor"
            ]}
          >
            <Divider />
            <InsetBox title="FLOOR 51 FACILITIES:">
              <Line neon>• Building management offices</Line>
              <Line neon>• Security control center (monitors all 48 cameras)</Line>
              <Line neon>• HVAC and building systems hub</Line>
              <Line neon>• Service keycard administration</Line>
              <Line neon>• Roof access (helipad + Glass Gardens service entry)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {

          "Facility Information": {
            content: (
              <MaintenanceAccess
                title="[BUILDING SPECIFICATIONS]"
                deviceModel="Tower Management System"
                deviceId="TOWER-BLOCK-7"
                firmwareVersion="v5.1.2"
                systemStatus="OPERATIONAL"
                notes={[
                  "Address: 2847 Central Plaza, South Central District",
                  "Height: 51 floors (218 meters)",
                  "Completed: 2051 (16 years old)",
                  "Management: Central District Properties Inc.",
                  "Security Rating: Class-A (High)",
                  "Building security contract: ChromeLux (atrium + lobby supplement)"
                ]}
              >
                <Divider />
                <InsetBox title="FLOOR PLAN:">
                  <Line yellow>Ground + Floor 2: Open atrium (Lobby, ChromeLux)</Line>
                  <Line yellow>Floors 3-39: Residential (198 units)</Line>
                  <Line yellow>Floors 40-50: Penthouse level (12 units)</Line>
                  <Line yellow>Floor 51: Management + Glass Gardens service</Line>
                  <Line yellow>Roof: The Glass Gardens restaurant + helipad</Line>
                </InsetBox>
                <InsetBox title="ACCESS POINTS:">
                  <Line cyan>Main Entrance: Ground floor atrium (staffed 24/7)</Line>
                  <Line cyan>Service Entrance: East side (keycard required, unguarded)</Line>
                  <Line cyan>Parking Garage: B1-B3 (resident keycards only)</Line>
                  <Line cyan>Roof: Floor 51 access door (maintenance + Glass Gardens staff)</Line>
                </InsetBox>
                <InsetBox title="SECURITY NOTES:">
                  <Line red>• Visitor log at desk - all guests signed in</Line>
                  <Line red>• Weapon scanners at main atrium entrance</Line>
                  <Line red>• Elevators to floors 40+ require keycard + approval</Line>
                  <Line red>• Penthouse residents employ private security (not building staff)</Line>
                  <Line red>• ChromeLux staff armed - operate throughout atrium floors</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Penthouse Blueprint": {
                content: (
                  <MaintenanceAccess
                    title="[UNIT 4201 - MAINTENANCE FILE]"
                    deviceModel="Building Records"
                    deviceId="BLUEPRINT-4201"
                    firmwareVersion="v1.0.0"
                    systemStatus="ARCHIVED"
                    notes={[
                      "Unit 4201 - Floor 42, Southeast corner",
                      "3-bedroom penthouse suite",
                      "Tenant: Jackhammer (Alliansen Inc. lease)",
                      "Last inspection: Aug 2067"
                    ]}
                  >
                    <RetComImage
                      theme="blue"
                      src={penthouseBlueprint}
                      alt="Steel Jackhammer Penthouse Layout"
                    />
                    <InsetBox title="STANDARD AMENITIES:">
                      <Line neon>• Master bedroom (soundproofed - standard penthouse spec)</Line>
                      <Line neon>• Open kitchen with Smart™ appliance suite</Line>
                      <Line neon>• Holo space (multi-projector entertainment, 4 units)</Line>
                      <Line neon>• Dining room</Line>
                      <Line neon>• Spa (hot tub pool + sauna)</Line>
                      <Line neon>• Gym</Line>
                      <Line neon>• Guest room</Line>
                      <Line neon>• Balcony (full perimeter, southeast exposure)</Line>
                    </InsetBox>
                    <InsetBox title="TENANT MODIFICATIONS (PERMITTED):">
                      <Line yellow>• Balcony glazing upgrade - full bulletproof replacement (Nov 2066)</Line>
                      <Line yellow>• Dining room partition - structural cage installation, load-bearing approved (Jan 2067)</Line>
                      <Line yellow>• Gym - cydroid anchor points, reinforced flooring (Mar 2067)</Line>
                      <Line yellow>• Sensory deprivation chamber - wet room conversion, spa annex (Jun 2067)</Line>
                    </InsetBox>
                    <InsetBox title="OPEN MAINTENANCE ITEMS:">
                      <Line red>• Dining room cage - inspection overdue (tenant unresponsive)</Line>
                      <Line red>• Balcony floor - stress fracture reported (under review)</Line>
                      <Line smoke small>Tenant contact: Alliansen Inc. management - direct contact not available</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "HVAC Control": {
            content: (
              <MaintenanceAccess
                title="[HVAC CONTROL SYSTEM]"
                deviceModel="Climate Control"
                deviceId="HVAC-TOWER-01"
                firmwareVersion="v4.1.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Building average: 21°C",
                  "Mode: Auto",
                  "Air quality: Good (except Floor 42 - elevated CO2, party ongoing day 3)",
                  "Pending: Filter replacement in 3 weeks"
                ]}
              >
                <Divider />
                <InsetBox title="ZONE CONTROL:">
                  <Line neon>• Atrium (Ground + Floor 2)</Line>
                  <Line neon>• Residential Floors (3-39)</Line>
                  <Line neon>• Penthouse Level (40-50)</Line>
                  <Line neon>• Management Floor (51)</Line>
                  <Line neon>• Parking Garage</Line>
                  <Line smoke small>Individual units have local thermostats (limited override available)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Service Keycard Database": {
            content: (
              <MaintenanceAccess
                title="[SERVICE KEYCARD DATABASE]"
                deviceModel="Access Card Management"
                deviceId="KEYCARD-DB-01"
                firmwareVersion="v3.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Active maintenance and delivery staff credentials",
                  "ChromeLux staff have separate CHROMELUX-tier cards (atrium only)",
                  "Glass Gardens staff have ROOF-tier access",
                  "Cards can be cloned with appropriate equipment"
                ]}
              >
                <Divider />
                <InsetBox title="ACTIVE KEYCARDS:">
                  <Line yellow>MAINT-001: Carlos Rodriguez (Building maintenance - all floors)</Line>
                  <Line yellow>MAINT-002: Kim Lee (HVAC specialist - all floors)</Line>
                  <Line yellow>MAINT-003: Sarah Johnson (Cleaning supervisor - floors 3-39)</Line>
                  <Line yellow>DELIV-101: Rotating delivery personnel (ground + service lift)</Line>
                  <Line yellow>ROOF-001: Glass Gardens staff (Floor 51 + roof)</Line>
                  <Line yellow>EMER-001: Fire/Emergency services (all floors, always active)</Line>
                </InsetBox>
                <InsetBox title="ACCESS LEVELS:">
                  <Line cyan>MAINT: Service elevator (all floors), service entrance, roof</Line>
                  <Line cyan>DELIV: Service entrance, service elevator (delivery floors only)</Line>
                  <Line cyan>ROOF: Floor 51 stairwell, roof access door</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Maintenance Log": {
            content: (
              <MaintenanceAccess
                title="[BUILDING MAINTENANCE LOG]"
                deviceModel="Facility Management System"
                deviceId="MAINT-LOG-01"
                firmwareVersion="v5.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Last full service: Nov 10, 2067",
                  "Next scheduled: Dec 1, 2067",
                  "Current open issues: 3"
                ]}
              >
                <Divider />
                <InsetBox title="OPEN ISSUES:">
                  <Line yellow bold>MEDIUM - Roof camera offline</Line>
                  <Line yellow>Weather damage, technician scheduled, 2-day repair window</Line>
                  <Line yellow>Reported: Nov 15, 12:00</Line>

                  <Divider />

                  <Line cyan>LOW - HVAC filter replacement overdue (Floor 3-15 zone)</Line>
                  <Line cyan>Routine, 3 weeks out</Line>
                  <Line cyan>Reported: Nov 10</Line>

                  <Divider />

                  <Line cyan>LOW - Elevator 3 bearing noise</Line>
                  <Line cyan>Inspection pending, safe to use</Line>
                  <Line cyan>Reported: Nov 12</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      // ========================================================================
      // THE GLASS GARDENS (ROOF)
      // ========================================================================
      ...GLASS_GARDENS_COMMANDS,
    },
  },
};

export default CENTRAL_PLAZA_TOWER_COMMANDS;
