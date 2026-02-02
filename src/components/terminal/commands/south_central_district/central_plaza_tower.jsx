import {
  Box,
  Line,
  Section,
  Divider,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  ATM,
  Camera,
  Extractable,
  FacilityPortal,
  Locked,
  MaintenanceAccess,
  NetworkDevices,
  SecureAccessControl,
  VendingMachine,
  RetComImage,
} from '@terminal/retcomdevice';

import { STEEL_PENTHOUSE_COMMANDS } from './steel_penthouse';

import penthouseBlueprint from '@images/blueprints/steel_penthouse.png';

export const CENTRAL_PLAZA_TOWER_COMMANDS = {
  "Central Plaza Tower": {
    content: (
      <FacilityPortal
        companyName="CENTRAL PLAZA"
        facilityId="TOWER BLOCK 7"
        tagline="Premium Living in the Heart of the City"
        location="2847 Central Plaza, Central District"
        owner="Central District Properties Inc."
        function="Luxury Residential High-Rise"
        personnel="198 residential units + 12 penthouses (210 total)"
        networkStatus="TOWER_INTERNAL (Secure building network)"
        securityLevel="HIGH"
        warnings={[
          "Visitor log maintained at security desk",
          "Weapon scanners active at main entrance",
          "Floors 40+ require keycard authorization"
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Blueprint: Steel Penthouse": {
        content: (
          <Box color="neon">
            <Section title="LUCKY FLIGHT CASINO - BASEMENT BLUEPRINT" center>
              <Line red xsmall bottom pulse>CLASSIFIED // SECURITY CLEARANCE 3</Line>
              <Line neon small>Basement Layout and Intel</Line>
            </Section>
            <RetComImage
              src={penthouseBlueprint}
              alt="Steel Penthouse"
              style={{ marginTop: "1rem", width: "100%" }}
            />
            <Line neon xsmall style={{ marginTop: "1rem", textAlign: "center" }}>
              FILE ID: LFC_BASEMENT_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
            </Line>
            <Divider />
            <Line cyan bold>KEY LOCATIONS:</Line>
            <Line neon>• Security Office</Line>
            <Line neon>• Locker Room</Line>
            <Line neon>• Green Room</Line>
            <Line neon>• Maintenance</Line>
            <Line neon>• Power Core</Line>
            <Divider />
            <Line yellow>⚠ Power Core presents explosion risk if tampered with</Line>
          </Box>
        ),
      },
      "Building Information": {
        content: (
          <MaintenanceAccess
            title="[BUILDING SPECIFICATIONS]"
            deviceModel="Tower Management System"
            deviceId="TOWER-BLOCK-7"
            firmwareVersion="v5.1.2"
            systemStatus="OPERATIONAL"
            notes={[
              "Address: 2847 Central Plaza, Central District",
              "Height: 51 floors (218 meters)",
              "Completed: 2051 (16 years old)",
              "Management: Central District Properties Inc.",
              "Security Rating: Class-A (High)"
            ]}
          >
            <Divider />
            <InsetBox title="AMENITIES:">
              <Line neon>• 24/7 security desk with armed guards</Line>
              <Line neon>• Elevator access control (keycard required floors 40+)</Line>
              <Line neon>• Underground parking (3 levels, B1-B3)</Line>
              <Line neon>• Rooftop helipad (emergency use only)</Line>
              <Line neon>• Automated package delivery system</Line>
              <Line neon>• Building-wide high-speed network</Line>
            </InsetBox>
            <InsetBox title="ACCESS POINTS:">
              <Line yellow>Main Entrance: Ground floor lobby (staffed 24/7)</Line>
              <Line yellow>Service Entrance: East side (keycard required)</Line>
              <Line yellow>Parking Garage: B1-B3 (resident cards only)</Line>
              <Line yellow>Roof Access: Floor 51 (maintenance only)</Line>
            </InsetBox>
            <InsetBox title="SECURITY NOTES:">
              <Line red>• Visitor log maintained at desk</Line>
              <Line red>• Weapon scanners at main entrance</Line>
              <Line red>• Elevators to floors 40+ require keycard + destination approval</Line>
              <Line red>• Penthouse residents employ private security (not building staff)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Resident Directory": {
        content: (
          <MaintenanceAccess
            title="[RESIDENT DIRECTORY - PUBLIC ACCESS]"
            deviceModel="Directory System"
            deviceId="DIR-TOWER-01"
            firmwareVersion="v2.0.1"
            systemStatus="OPERATIONAL"
            notes={[
              "Partial listing available",
              "Premium residents opt for privacy",
              "Full directory: Building security only",
              "Public records available through separate search"
            ]}
          >
            <Divider />
            <InsetBox title="PENTHOUSE RESIDENTS (FLOORS 40-50):">
              <Line yellow>Many penthouse residents unlisted for privacy</Line>
              <Line smoke small>Public records available through net search...</Line>
            </InsetBox>
            <Divider />
            <InsetBox title="NOTABLE RESIDENT:">
              <Line pink bold>Steel Jackhammer</Line>
              <Line>Unit: 4201 (Floor 42, Southeast corner)</Line>
              <Line>Type: 3-bedroom penthouse suite</Line>
              <Line>Status: ACTIVE - Current occupant</Line>
              <Line>Note: Currently hosting multi-day recovery party</Line>
            </InsetBox>
            <Line smoke small>Other residents include corporate executives, celebrities, and high-net-worth individuals.</Line>
          </MaintenanceAccess>
        ),
        related_commands: {
          ...STEEL_PENTHOUSE_COMMANDS,
        },
      },

      "Lobby": {
        content: (
          <MaintenanceAccess
            title="[LOBBY - PUBLIC AREA]"
            deviceModel="Public Zone Monitoring"
            deviceId="LOBBY-TOWER-01"
            firmwareVersion="v3.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Marble floors, modern design",
              "Security desk: 2 guards on duty",
              "Moderate foot traffic",
              "Party guests flowing to Unit 4201 for days"
            ]}
          >
            <Divider />
            <InsetBox title="LOBBY FEATURES:">
              <Line neon>• Security desk (2 guards on duty, weapon scanners)</Line>
              <Line neon>• Visitor check-in system</Line>
              <Line neon>• ATM (Cy Central Bank)</Line>
              <Line neon>• Vending machine (upscale products)</Line>
              <Line neon>• Elevator bank (4 elevators)</Line>
              <Line neon>• Digital directory board</Line>
            </InsetBox>
            <InsetBox title="CURRENT STATUS:">
              <Line cyan>Moderate traffic. Mix of residents and visitors.</Line>
              <Line cyan>Guards appear alert but not overly suspicious.</Line>
              <Line cyan>Party guests have been flowing to Unit 4201 for days.</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "ATM": {
            content: (
              <ATM
                id="atm-tower-lobby"
                model="ATM-600"
                location="Central Plaza Tower - Lobby"
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
                // password: {
                //   pw: "atm_service_2067",
                //   hint: "Standard ATM service password format",
                //   difficulty: "medium",
                //   content: <Locked theme="terminal" title="ATM MAINTENANCE" />
                // },
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
                    // password: {
                    //   pw: "cashbox",
                    //   hint: "What holds the money inside",
                    //   difficulty: "easy",
                    //   content: <Locked theme="safe" title="CASH BOX" />
                    // },
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
                location="Central Plaza Tower - Lobby"
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
                // password: {
                //   pw: "restock",
                //   hint: "What you do when inventory runs low",
                //   difficulty: "medium",
                //   content: <Locked theme="terminal" title="VENDING MAINTENANCE" />
                // },
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
                      "Collection box emptied weekly",
                      "High profit margins"
                    ]}
                  />
                ),
                related_commands: {
                  "Cash Box": {
                    // password: {
                    //   pw: "coins",
                    //   hint: "What accumulates in the cash box",
                    //   difficulty: "easy",
                    //   content: <Locked theme="safe" title="CASH BOX" />
                    // },
                    content: (
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
                    ),
                  },
                },
              },
            },
          },
        },
      },

      "Security Systems": {
        // password: {
        //   pw: "tower_sec_admin",
        //   hint: "Building security admin credentials",
        //   difficulty: "hard",
        //   content: <Locked theme="terminal" title="SECURITY SYSTEMS" />
        // },
        content: (
          <MaintenanceAccess
            title="[BUILDING SECURITY SYSTEMS]"
            deviceModel="Security Control Center"
            deviceId="SEC-TOWER-01"
            firmwareVersion="v6.0.3"
            systemStatus="OPERATIONAL"
            notes={[
              "Central monitoring station",
              "Full building coverage",
              "⚠ RESTRICTED ACCESS - Authorized security personnel only",
              "All access logged and monitored"
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
                  <Line yellow>14:32 - High traffic to Unit 4201 continues (party ongoing)</Line>
                  <Line yellow>12:15 - Roof camera offline (scheduled maintenance)</Line>
                  <Line yellow>09:45 - Delivery authorization: Unit 4201 (alcohol delivery)</Line>
                </InsetBox>
                <InsetBox title="CAMERA LOCATIONS:">
                  <Line neon>• Lobby & entrance (4 cameras)</Line>
                  <Line neon>• Elevator banks (8 cameras)</Line>
                  <Line neon>• Hallways (24 cameras - 2 per floor, floors 40-50)</Line>
                  <Line neon>• Service areas (6 cameras)</Line>
                  <Line neon>• Parking garage (5 cameras)</Line>
                  <Line red>• Roof access (1 camera - OFFLINE)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Floor 42 - Main Hallway": {
                content: (
                  <Camera
                    id="cam-fl42-hall-a"
                    location="Floor 42 - Main Hallway (Penthouse Level)"
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
                    // password: {
                    //   pw: "live_cam_fl42_a",
                    //   hint: "Format: live_cam_[floor][section]",
                    //   difficulty: "medium",
                    //   content: <Locked theme="terminal" title="LIVE CAMERA FEED" />
                    // },
                    content: (
                      <MaintenanceAccess
                        title="[CAM-FL42-HALL-A LIVE FEED]"
                        deviceModel="Live Surveillance Feed"
                        deviceId="CAM-FL42-HALL-A"
                        firmwareVersion="v4.2.1"
                        systemStatus="STREAMING"
                        notes={[
                          "Floor 42 Main Hallway",
                          "Real-time surveillance",
                          "Unit 4201 entrance visible"
                        ]}
                      >
                        <Divider />
                        <InsetBox title="CURRENT SCENE:">
                          <Line cyan>• Unit 4201 entrance clearly visible</Line>
                          <Line cyan>• Two guards stationed outside door (private security)</Line>
                          <Line cyan>• Guards appear relaxed, chatting - NOT heavily vigilant</Line>
                          <Line cyan>• Three people just entered unit (party guests)</Line>
                          <Line cyan>• Music audible even through door (bass thumping)</Line>
                          <Line cyan>• Hallway shows signs of traffic - empty bottles, trash</Line>
                        </InsetBox>
                        <InsetBox title="SECURITY ASSESSMENT:">
                          <Line yellow>Guards checking for weapons but lenient with party guests</Line>
                          <Line yellow>If you look like you belong at a party, they're letting people through</Line>
                          <Line yellow>Heavy weapons and explosives will be caught</Line>
                          <Line yellow>Small concealed items likely to pass inspection</Line>
                        </InsetBox>
                      </MaintenanceAccess>
                    ),
                  },
                },
              },

              "Service Entrance": {
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
                      "Side alley (partially obscured)",
                    ]}
                    lastService="2 weeks ago"
                  />
                ),
                related_commands: {
                  "Live Feed": {
                    // password: {
                    //   pw: "live_cam_service",
                    //   hint: "Format: live_cam_[location]",
                    //   difficulty: "medium",
                    //   content: <Locked theme="terminal" title="LIVE CAMERA FEED" />
                    // },
                    content: (
                      <MaintenanceAccess
                        title="[CAM-SERVICE-ENT LIVE FEED]"
                        deviceModel="Live Surveillance Feed"
                        deviceId="CAM-SERVICE-ENT"
                        firmwareVersion="v4.2.1"
                        systemStatus="STREAMING"
                        notes={[
                          "Service Entrance - East Side",
                          "Real-time surveillance",
                          "Unguarded entrance"
                        ]}
                      >
                        <Divider />
                        <InsetBox title="CURRENT SCENE:">
                          <Line cyan>• Service entrance door closed and locked</Line>
                          <Line cyan>• Keycard reader visible (maintenance/delivery staff)</Line>
                          <Line cyan>• Loading area empty</Line>
                          <Line cyan>• No security guard stationed here (monitored remotely)</Line>
                          <Line cyan>• Last activity: Delivery truck departed 20 minutes ago</Line>
                        </InsetBox>
                        <InsetBox title="TACTICAL NOTE:">
                          <Line yellow>Unguarded entrance, but keycard required</Line>
                          <Line yellow>Could gain access with stolen/cloned service card</Line>
                          <Line yellow>Would bypass lobby security entirely</Line>
                          <Line yellow>Service elevator from here accesses all floors including penthouses</Line>
                        </InsetBox>
                      </MaintenanceAccess>
                    ),
                  },
                },
              },

              "Roof Access": {
                content: (
                  <MaintenanceAccess
                    title="[CAM-ROOF STATUS]"
                    deviceModel="Security Camera"
                    deviceId="CAM-ROOF-01"
                    firmwareVersion="v4.2.1"
                    systemStatus="OFFLINE"
                    notes={[
                      "Status: MAINTENANCE",
                      "Reason: Scheduled maintenance - weather damage repair",
                      "Offline Since: 12:00 today",
                      "Estimated Repair: 2 days"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="⚠ SECURITY BLIND SPOT:">
                      <Line red bold>Roof access currently unmonitored by cameras</Line>
                      <Line yellow>Door is locked (keycard required) but no visual confirmation possible</Line>
                      <Line yellow>Helicopter landing pad accessible from roof</Line>
                      <Line yellow>Penthouse balconies 9 floors below roof level</Line>
                    </InsetBox>
                    <Line smoke small>Lucky timing? Convenient for someone planning something...</Line>
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
                    authorized: "Maintenance, delivery personnel",
                    lastAccess: "20 minutes ago",
                    accessCount: 47,
                    flags: ["BYPASSES LOBBY"],
                    notes: "Direct access to penthouse level without front desk approval"
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
                    security: "Keycard (maintenance only)",
                    authorized: "Building maintenance staff only",
                    lastAccess: "This morning (routine check)",
                    accessCount: 2,
                    flags: ["CAMERA OFFLINE"],
                    notes: "Helipad access. Camera down for maintenance - blind spot for 2 days"
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
                    notes: "Door locked from stairwell side - cannot enter penthouse level this way"
                  },
                ]}
              />
            ),
            related_commands: {
              "Elevator Control": {
                // password: {
                //   pw: "elevator_override",
                //   hint: "Admin function to bypass restrictions",
                //   difficulty: "hard",
                //   content: <Locked theme="terminal" title="ELEVATOR CONTROL" />
                // },
                content: (
                  <MaintenanceAccess
                    title="[ELEVATOR CONTROL SYSTEM]"
                    deviceModel="Elevator Management"
                    deviceId="ELEV-CONTROL-01"
                    firmwareVersion="v4.0.1"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Elevators: 4 main + 1 service",
                      "Status: All operational",
                      "Restrictions: Floors 40+ require keycard",
                      "Service Elevator: Staff keycard (all floors access)"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="OVERRIDE OPTIONS (ADMIN ACCESS):">
                      <Line yellow>• Can disable keycard requirement for specific elevator</Line>
                      <Line yellow>• Can force elevator to specific floor</Line>
                      <Line yellow>• Can lock elevator at current floor</Line>
                      <Line yellow>• Duration: Up to 10 minutes before system auto-resets</Line>
                    </InsetBox>
                    <Line red>⚠ Override generates security log. Use discretion.</Line>
                    <Line smoke small>Service elevator most useful - direct access to penthouse level without lobby traffic.</Line>
                  </MaintenanceAccess>
                ),
              },

              "Door Lock Control": {
                // password: {
                //   pw: "door_override",
                //   hint: "Admin function to unlock doors",
                //   difficulty: "hard",
                //   content: <Locked theme="terminal" title="DOOR LOCKS" />
                // },
                content: (
                  <MaintenanceAccess
                    title="[DOOR LOCK CONTROL]"
                    deviceModel="Building Access Management"
                    deviceId="LOCK-CONTROL-01"
                    firmwareVersion="v3.5.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Controllable locks: Service doors, roof access, garage gates",
                      "Individual unit doors: NOT controlled by building system",
                      "Override duration: 5 minutes before auto-lock",
                      "All overrides generate security log entries"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="CONTROLLABLE LOCKS:">
                      <Line yellow>Service Entrance - East Side</Line>
                      <Line yellow>Roof Access Door - Floor 51</Line>
                      <Line yellow>Emergency Stairwell Doors - Penthouse level</Line>
                      <Line yellow>Parking Garage Gates (B1-B3)</Line>
                      <Line smoke small>Note: Individual unit doors NOT controlled by building system</Line>
                    </InsetBox>
                    <InsetBox title="LIMITATION:">
                      <Line red bold>Unit 4201 (Steel Jackhammer's penthouse):</Line>
                      <Line red>Uses PRIVATE security system</Line>
                      <Line red>Building access control does NOT extend to unit doors</Line>
                      <Line red>Would need to hack penthouse smart home separately</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "Building Network": {
            // password: {
            //   pw: "network_admin",
            //   hint: "Network administrator access",
            //   difficulty: "hard",
            //   content: <Locked theme="terminal" title="NETWORK ACCESS" />
            // },
            content: (
              <MaintenanceAccess
                title="[BUILDING NETWORK ACCESS]"
                deviceModel="Network Infrastructure"
                deviceId="NET-TOWER-01"
                firmwareVersion="v7.2.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Network: TOWER_INTERNAL (building infrastructure)",
                  "Encryption: WPA3-Enterprise",
                  "Bandwidth: 10 Gbps fiber backbone",
                  "Connected devices: All building systems"
                ]}
              >
                <Divider />
                <InsetBox title="NETWORK CAPABILITIES:">
                  <Line yellow>• Access to building security systems</Line>
                  <Line yellow>• Camera feed viewing and control</Line>
                  <Line yellow>• Access control override (with additional hacking)</Line>
                  <Line yellow>• Maintenance system access</Line>
                  <Line yellow>• ATM network connection (transaction data)</Line>
                </InsetBox>
                <InsetBox title="SEPARATE NETWORKS (NOT ACCESSIBLE):">
                  <Line red>• Individual unit networks (resident privacy)</Line>
                  <Line red>• Unit 4201 smart home system (private network)</Line>
                  <Line red>• Would require direct access to penthouse network</Line>
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
                    ]}
                  />
                ),
              },
            },
          },

          "Maintenance Systems": {
            // password: {
            //   pw: "maint_tower_2067",
            //   hint: "Standard maintenance password format",
            //   difficulty: "medium",
            //   content: <Locked theme="terminal" title="MAINTENANCE SYSTEMS" />
            // },
            content: (
              <MaintenanceAccess
                title="[BUILDING MAINTENANCE CONTROL]"
                deviceModel="Facility Management System"
                deviceId="MAINT-TOWER-01"
                firmwareVersion="v5.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Last service: Nov 10, 2067",
                  "Next scheduled: Dec 1, 2067",
                  "Current issues: 3 (1 medium, 2 low priority)"
                ]}
              >
                <Divider />
                <InsetBox title="CURRENT ISSUES:">
                  <Line yellow bold>MEDIUM: Roof camera offline</Line>
                  <Line yellow>Weather damage repair in progress</Line>
                  <Line yellow>Reported: Nov 15, 12:00</Line>
                  <Line smoke small>Status: Technician scheduled, 2 days to completion</Line>

                  <Divider />

                  <Line cyan>LOW: HVAC filter replacement due</Line>
                  <Line cyan>Routine maintenance, 3 weeks out</Line>
                  <Line cyan>Reported: Nov 10</Line>

                  <Divider />

                  <Line cyan>LOW: Elevator 3 slight noise</Line>
                  <Line cyan>Inspection scheduled</Line>
                  <Line cyan>Reported: Nov 12</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "HVAC Control": {
                content: (
                  <MaintenanceAccess
                    title="[HVAC CONTROL SYSTEM]"
                    deviceModel="Climate Control"
                    deviceId="HVAC-TOWER-01"
                    firmwareVersion="v4.1.0"
                    systemStatus="OPERATIONAL"
                    notes={[
                      "Heating, ventilation, and air conditioning",
                      "System Status: OPERATIONAL",
                      "Temperature: 21°C (building average)",
                      "Mode: Auto (climate control)",
                      "Air Quality: Good"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="ZONE CONTROL:">
                      <Line neon>• Lobby & Common Areas</Line>
                      <Line neon>• Residential Floors (1-39)</Line>
                      <Line neon>• Penthouse Level (40-50)</Line>
                      <Line neon>• Parking Garage</Line>
                      <Line smoke small>Individual units have local thermostats (limited override)</Line>
                    </InsetBox>
                    <InsetBox title="SABOTAGE OPTIONS (ADMIN ACCESS):">
                      <Line yellow>• Can disable AC to specific floor/zone</Line>
                      <Line yellow>• Can set temperature to uncomfortable levels</Line>
                      <Line yellow>• Can trigger false maintenance alerts</Line>
                      <Line smoke small>Effect: Penthouse party gets uncomfortably hot, people move to balcony...</Line>
                    </InsetBox>
                    <Line red>⚠ HVAC changes take 15-30 minutes to have noticeable effect</Line>
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
                      "Service cards provide: Elevator, entrance, roof access",
                      "Cards can be cloned with proper equipment"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="ACTIVE KEYCARDS:">
                      <Line yellow>MAINT-001: Carlos Rodriguez (Building maintenance)</Line>
                      <Line yellow>MAINT-002: Kim Lee (HVAC specialist)</Line>
                      <Line yellow>MAINT-003: Sarah Johnson (Cleaning crew supervisor)</Line>
                      <Line yellow>DELIV-101: Various (Rotating delivery personnel)</Line>
                      <Line yellow>EMER-001: Fire/Emergency services (always active)</Line>
                    </InsetBox>
                    <InsetBox title="KEYCARD ACCESS LEVELS:">
                      <Line cyan>• Service elevator (all floors)</Line>
                      <Line cyan>• Service entrance</Line>
                      <Line cyan>• Maintenance areas</Line>
                      <Line cyan>• Roof access (MAINT-level only)</Line>
                    </InsetBox>
                    <InsetBox title="TACTICAL NOTE:">
                      <Line pink>Service personnel blend in easily</Line>
                      <Line pink>Maintenance uniform + keycard = access</Line>
                      <Line pink>Building security doesn't scrutinize maintenance staff heavily</Line>
                      <Line pink>Could clone keycard data if you can scan one...</Line>
                    </InsetBox>
                  </MaintenanceAccess>
                ),
              },
            },
          },
        },
      },
    },
  },
};

export default CENTRAL_PLAZA_TOWER_COMMANDS;
