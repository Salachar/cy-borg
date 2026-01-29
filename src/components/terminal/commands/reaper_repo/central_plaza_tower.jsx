import {
  Line,
  Box,
  Section,
  Divider,
  KeyValue,
  DataTable,
  Warning,
  CodeBlock,
} from '@terminal/TerminalComponents';

import {
  FacilityPortal,
  ATM,
  VendingMachine,
  NetworkDevices,
  NetworkRouter,
  LiveCameraFeed,
  Camera,
  SecureAccessControl,
  MaintenanceAccess,
  Extractable,
} from '@terminal/retcomdevice';

const CENTRAL_PLAZA_TOWER_COMMANDS = {
  "central_plaza_tower": {
    content: (
      <FacilityPortal
        facilityName="Central Plaza - Tower Block 7"
        description="Luxury residential high-rise in Central District. 50 floors of premium living."
        departments={[
          { name: "Lobby & Reception", floor: "Ground", contact: "Security desk staffed 24/7" },
          { name: "Residential Units", floor: "1-39", contact: "Standard building security" },
          { name: "Penthouse Suites", floor: "40-50", contact: "Enhanced security - Private guards per unit" },
          { name: "Roof Access", floor: "51", contact: "Restricted - Maintenance only" },
          { name: "Parking Garage", floor: "B1-B3", contact: "Automated security" }
        ]}
        emergencyContact="Building Security: +67-555-TOWER | Fire: +67-911"
      />
    ),
    related_commands: {
      "resident_directory": {
        content: (
          <>
            <Line cyan large bold>[RESIDENT DIRECTORY - PUBLIC ACCESS]</Line>
            <Line smoke>Partial listing - Premium residents opt for privacy</Line>
            <Divider />

            <Section title="PENTHOUSE RESIDENTS (FLOORS 40-50)">
              <Line yellow>Many penthouse residents unlisted for privacy</Line>
              <Line smoke small>Public records available through separate search...</Line>
            </Section>

            <Divider />

            <Box color="pink">
              <Line bold>NOTABLE RESIDENT:</Line>
              <KeyValue label="Name" value="Steel Jackhammer" />
              <KeyValue label="Unit" value="4201 (Floor 42, Southeast corner)" />
              <KeyValue label="Type" value="3-bedroom penthouse suite" />
              <KeyValue label="Status" value="ACTIVE - Current occupant" />
            </Box>

            <Divider />

            <Line smoke small>Other residents include corporate executives, celebrities, and high-net-worth individuals.</Line>
            <Line smoke small>Full directory available to building security only.</Line>
          </>
        )
      },

      "building_info": {
        content: (
          <>
            <Line cyan large bold>[BUILDING SPECIFICATIONS]</Line>
            <Line smoke>Central Plaza - Tower Block 7</Line>
            <Divider />

            <DataTable data={[
              { label: "Address", value: "2847 Central Plaza, Central District" },
              { label: "Height", value: "51 floors (218 meters)" },
              { label: "Construction", value: "Completed 2051" },
              { label: "Units", value: "198 residential + 12 penthouses" },
              { label: "Management", value: "Central District Properties Inc." },
              { label: "Security Rating", value: "Class-A (High)" }
            ]} />

            <Divider />

            <Section title="AMENITIES">
              <Line neon>• 24/7 security desk with armed guards</Line>
              <Line neon>• Elevator access control (keycard required floors 40+)</Line>
              <Line neon>• Underground parking (3 levels)</Line>
              <Line neon>• Rooftop helipad (emergency use only)</Line>
              <Line neon>• Automated package delivery system</Line>
              <Line neon>• Building-wide high-speed network</Line>
            </Section>

            <Divider />

            <Section title="ACCESS POINTS">
              <Line yellow>Main Entrance: Ground floor lobby (staffed)</Line>
              <Line yellow>Service Entrance: East side (keycard required)</Line>
              <Line yellow>Parking Garage: B1-B3 (resident cards only)</Line>
              <Line yellow>Roof Access: Floor 51 (maintenance only)</Line>
            </Section>

            <Box color="yellow">
              <Line bold>SECURITY NOTES:</Line>
              <Line>• Visitor log maintained at desk</Line>
              <Line>• Weapon scanners at main entrance</Line>
              <Line>• Elevators to floors 40+ require keycard + destination approval</Line>
              <Line>• Penthouse residents employ private security (not building staff)</Line>
            </Box>
          </>
        )
      },

      "lobby": {
        content: (
          <>
            <Line cyan large bold>[LOBBY - PUBLIC AREA]</Line>
            <Line smoke>Marble floors, modern design, intimidatingly clean</Line>
            <Divider />

            <Section title="LOBBY FEATURES">
              <Line neon>• Security desk (2 guards on duty)</Line>
              <Line neon>• Visitor check-in system</Line>
              <Line neon>• ATM (Cy Central Bank)</Line>
              <Line neon>• Vending machine (snacks & drinks)</Line>
              <Line neon>• Elevator bank (4 elevators)</Line>
              <Line neon>• Digital directory board</Line>
            </Section>

            <Box color="cyan">
              <Line bold>CURRENT STATUS:</Line>
              <Line>Moderate traffic. Mix of residents and visitors.</Line>
              <Line>Guards appear alert but not overly suspicious.</Line>
              <Line>Party guests have been flowing to Unit 4201 for days.</Line>
            </Box>
          </>
        ),
        related_commands: {
          "atm": {
            content: (
              <>
                <ATM
                  machineId="ATM-CP-TOWER7-L01"
                  location="Central Plaza Tower - Lobby"
                  bankName="Cy Central Bank"
                  availableFunds={87500}
                  transactionFee={8}
                  maxWithdrawal={5000}
                  status="online"
                />

                <Divider />

                <Line smoke small>Standard ATM. Heavy traffic from wealthy residents = well-stocked.</Line>
              </>
            ),
            related_commands: {
              "maintenance_panel": {
                password: {
                  pw: "atm_service_2067",
                  hint: "Standard ATM service password format: atm_service_[year]",
                  hintStrength: 2
                },
                content: (
                  <>
                    <Line cyan large bold>[ATM MAINTENANCE PANEL]</Line>
                    <Divider />

                    <Section title="SYSTEM STATUS">
                      <KeyValue label="Cash Available" value="87,500¤" valueColor="yellow" />
                      <KeyValue label="Daily Withdrawals" value="142,300¤ (high volume)" />
                      <KeyValue label="Last Refill" value="Yesterday, 14:00" />
                      <KeyValue label="Next Scheduled" value="Tomorrow, 14:00" />
                      <KeyValue label="Error Log" value="0 errors" valueColor="neon" />
                    </Section>

                    <Divider />

                    <Box color="yellow">
                      <Line bold>NETWORK CONNECTION:</Line>
                      <Line>Connected to: TOWER_INTERNAL network</Line>
                      <Line>Bank VPN: Cy Central Bank Secure Gateway</Line>
                      <Line>Transaction encryption: Active</Line>
                    </Box>

                    <Divider />

                    <Warning>Physical cash extraction requires service key. Digital skim possible via network access.</Warning>

                    <Divider />

                    <Extractable
                      id="atm-tower-lobby-skim"
                      type="credits"
                      items={[
                        { item: "Transaction Skim", desc: "Small % from daily transactions", value: 850 }
                      ]}
                      buttonLabel="SKIM FUNDS"
                      requiresPresence={false}
                    />

                    <Line smoke small>Skimming detected rarely due to high volume. Small amounts go unnoticed.</Line>
                  </>
                )
              }
            }
          },

          "vending_machine": {
            content: (
              <>
                <VendingMachine
                  id="vend-tower-lobby"
                  location="Central Plaza Tower - Lobby"
                  items={[
                    { slot: "A1", name: "Premium Water", price: 12, stock: 18 },
                    { slot: "A2", name: "Energy Drink", price: 15, stock: 12 },
                    { slot: "A3", name: "Synth-Caf", price: 10, stock: 20 },
                    { slot: "B1", name: "Protein Bar (Luxury)", price: 18, stock: 15 },
                    { slot: "B2", name: "Organic Snack Mix", price: 20, stock: 8 },
                    { slot: "B3", name: "Chocolate Bar", price: 12, stock: 22 },
                    { slot: "C1", name: "Cigarettes (Premium)", price: 25, stock: 10 },
                    { slot: "C2", name: "Mints", price: 8, stock: 30 }
                  ]}
                  acceptsCash={true}
                  acceptsCard={true}
                  status="OPERATIONAL"
                />

                <Divider />

                <Line smoke small>Upscale products for upscale residents. Prices reflect the neighborhood.</Line>
              </>
            )
          }
        }
      },

      "security_systems": {
        password: {
          pw: "tower_sec_admin",
          hint: "Building security admin credentials - try common format",
          hintStrength: 2
        },
        content: (
          <>
            <Line cyan large bold>[BUILDING SECURITY SYSTEMS]</Line>
            <Line smoke>Central monitoring station - Full building coverage</Line>
            <Divider />

            <Box color="red">
              <Line bold>⚠ RESTRICTED ACCESS ⚠</Line>
              <Line>Authorized security personnel only</Line>
              <Line>All access logged and monitored</Line>
            </Box>

            <Divider />

            <Section title="AVAILABLE SYSTEMS">
              <Line neon>• Camera surveillance grid (48 cameras)</Line>
              <Line neon>• Access control (elevators, doors, gates)</Line>
              <Line neon>• Building network (internal infrastructure)</Line>
              <Line neon>• Maintenance systems</Line>
            </Section>
          </>
        ),
        related_commands: {
          "camera_grid": {
            content: (
              <LiveCameraFeed
                systemName="Central Plaza Tower - Security Grid"
                cameraCount={48}
                feeds={[
                  {
                    id: "CAM-LOBBY-01",
                    location: "Main Lobby - Entrance",
                    status: "ONLINE",
                    feed: "Two guards at desk. Moderate foot traffic. Weapon scanner operational. Current count: 8 people in lobby."
                  },
                  {
                    id: "CAM-LOBBY-ELEV",
                    location: "Main Lobby - Elevator Bank",
                    status: "ONLINE",
                    feed: "Elevator traffic normal. Mix of residents and visitors. Keycard checkpoint functioning for floors 40+."
                  },
                  {
                    id: "CAM-FL42-HALL-A",
                    location: "Floor 42 - Main Hallway",
                    status: "ONLINE",
                    feed: "Unit 4201 entrance visible. Two private guards posted outside door. Heavy party traffic - guests entering/leaving constantly."
                  },
                  {
                    id: "CAM-FL42-HALL-B",
                    location: "Floor 42 - Service Corridor",
                    status: "ONLINE",
                    feed: "Empty service corridor. Maintenance access door visible. Last activity: 6 hours ago (cleaning crew)."
                  },
                  {
                    id: "CAM-SERVICE-ENT",
                    location: "Service Entrance - East Side",
                    status: "ONLINE",
                    feed: "Locked service entrance. Keycard reader active. Delivery truck departed 20 minutes ago."
                  },
                  {
                    id: "CAM-GARAGE-B1",
                    location: "Parking Garage - Level B1",
                    status: "ONLINE",
                    feed: "Mostly full. Expensive cars. Normal activity. No security concerns."
                  },
                  {
                    id: "CAM-ROOF",
                    location: "Roof Access - Floor 51",
                    status: "MAINTENANCE",
                    feed: "Camera offline for scheduled maintenance. Estimated repair: 2 days."
                  },
                  {
                    id: "CAM-STAIR-40",
                    location: "Stairwell - Floor 40 Access",
                    status: "ONLINE",
                    feed: "Emergency stairwell. Door locked from stairwell side (penthouse security). No activity."
                  }
                ]}
                alerts={[
                  { time: "14:32", message: "High traffic to Unit 4201 continues (party ongoing)", severity: "info" },
                  { time: "12:15", message: "Roof camera offline - scheduled maintenance", severity: "warning" },
                  { time: "09:45", message: "Delivery authorization: Unit 4201 (alcohol delivery)", severity: "info" }
                ]}
              />
            ),
            related_commands: {
              "cam_fl42_hall_a": {
                content: (
                  <Camera
                    cameraId="CAM-FL42-HALL-A"
                    location="Floor 42 - Main Hallway (Penthouse Level)"
                    status="online"
                    resolution="2560x1440"
                    nightVision={true}
                    motionDetection={true}
                    coverage="Full hallway view including Unit 4201 entrance"
                    lastMotion="30 seconds ago"
                    recording={true}
                  />
                ),
                related_commands: {
                  "live_feed": {
                    password: {
                      pw: "live_cam_fl42_a",
                      hint: "Format: live_cam_[floor][section] - lowercase with underscores",
                      hintStrength: 2
                    },
                    content: (
                      <>
                        <Line cyan large bold>[CAM-FL42-HALL-A LIVE FEED]</Line>
                        <Line smoke>Floor 42 Main Hallway - Real-time surveillance</Line>
                        <Divider />

                        <Box color="cyan">
                          <Line bold>CURRENT SCENE:</Line>
                          <Line>• Unit 4201 entrance clearly visible</Line>
                          <Line>• Two guards stationed outside door (private security, not building)</Line>
                          <Line>• Guards appear relaxed, chatting - NOT heavily vigilant</Line>
                          <Line>• Three people just entered unit (party guests)</Line>
                          <Line>• Music audible even through door (bass thumping)</Line>
                          <Line>• Hallway shows signs of traffic - empty bottles, trash</Line>
                        </Box>

                        <Divider />

                        <Section title="OBSERVATIONS - LAST 10 MINUTES">
                          <Line yellow>14:32 - Two guests arrived, guards checked bags briefly</Line>
                          <Line yellow>14:28 - One guest left, stumbling drunk</Line>
                          <Line yellow>14:25 - Delivery person (food), allowed in after quick search</Line>
                          <Line yellow>14:20 - Guards swapped out for break (new pair arrived)</Line>
                        </Section>

                        <Box color="yellow">
                          <Line bold>SECURITY ASSESSMENT:</Line>
                          <Line>Guards checking for weapons but being lenient with party guests.</Line>
                          <Line>If you look like you belong at a party, they're letting people through.</Line>
                          <Line>Heavy weapons and explosives will be caught.</Line>
                          <Line>Small concealed items likely to pass inspection.</Line>
                        </Box>
                      </>
                    )
                  }
                }
              },

              "cam_service_ent": {
                content: (
                  <Camera
                    cameraId="CAM-SERVICE-ENT"
                    location="Service Entrance - East Side"
                    status="online"
                    resolution="1920x1080"
                    nightVision={true}
                    motionDetection={true}
                    coverage="Service entrance door and loading area"
                    lastMotion="20 minutes ago"
                    recording={true}
                  />
                ),
                related_commands: {
                  "live_feed": {
                    password: {
                      pw: "live_cam_service",
                      hint: "Format: live_cam_[location] - lowercase",
                      hintStrength: 2
                    },
                    content: (
                      <>
                        <Line cyan large bold>[CAM-SERVICE-ENT LIVE FEED]</Line>
                        <Line smoke>Service Entrance - Real-time surveillance</Line>
                        <Divider />

                        <Box color="cyan">
                          <Line bold>CURRENT SCENE:</Line>
                          <Line>• Service entrance door closed and locked</Line>
                          <Line>• Keycard reader visible (maintenance/delivery staff)</Line>
                          <Line>• Loading area empty</Line>
                          <Line>• No security guard stationed here (monitored remotely)</Line>
                          <Line>• Last activity: Delivery truck departed 20 minutes ago</Line>
                        </Box>

                        <Divider />

                        <Box color="yellow">
                          <Line bold>TACTICAL NOTE:</Line>
                          <Line>Unguarded entrance, but keycard required.</Line>
                          <Line>Could gain access with stolen/cloned service card.</Line>
                          <Line>Would bypass lobby security entirely.</Line>
                          <Line>Service elevator from here accesses all floors including penthouses.</Line>
                        </Box>
                      </>
                    )
                  }
                }
              },

              "cam_roof": {
                content: (
                  <>
                    <Line cyan large bold>[CAM-ROOF STATUS]</Line>
                    <Divider />

                    <Box color="red">
                      <Line bold>CAMERA OFFLINE</Line>
                      <KeyValue label="Status" value="MAINTENANCE" valueColor="yellow" />
                      <KeyValue label="Reason" value="Scheduled maintenance - weather damage repair" />
                      <KeyValue label="Offline Since" value="12:00 today" />
                      <KeyValue label="Estimated Repair" value="2 days" />
                    </Box>

                    <Divider />

                    <Box color="yellow">
                      <Line bold>⚠ SECURITY BLIND SPOT ⚠</Line>
                      <Line>Roof access currently unmonitored by cameras.</Line>
                      <Line>Door is locked (keycard required) but no visual confirmation possible.</Line>
                      <Line>Helicopter landing pad accessible from roof.</Line>
                      <Line>Penthouse balconies 9 floors below roof level.</Line>
                    </Box>

                    <Line smoke small>Lucky timing? Convenient for someone planning something...</Line>
                  </>
                )
              }
            }
          },

          "access_control": {
            content: (
              <>
                <Line cyan large bold>[ACCESS CONTROL SYSTEM]</Line>
                <Line smoke>Elevator, door, and gate control interface</Line>
                <Divider />

                <Section title="CONTROLLED ACCESS POINTS">
                  <Line neon>• Main elevators (floors 40+ require keycard)</Line>
                  <Line neon>• Service elevator (all floors, staff only)</Line>
                  <Line neon>• Parking garage gates</Line>
                  <Line neon>• Service entrance doors</Line>
                  <Line neon>• Roof access (maintenance only)</Line>
                  <Line neon>• Emergency stairwell doors (penthouse level)</Line>
                </Section>

                <Divider />

                <Box color="red">
                  <Line bold>OVERRIDE CAPABILITIES:</Line>
                  <Line>With admin access, can remotely unlock/lock doors.</Line>
                  <Line>Can override elevator destination restrictions.</Line>
                  <Line>Can disable keycard requirements temporarily.</Line>
                  <Line>All overrides generate security log entries.</Line>
                </Box>

                <Warning>Unauthorized access override will trigger security alerts</Warning>
              </>
            ),
            related_commands: {
              "elevator_control": {
                blocker: {
                  mastermind_hack: {
                    sequenceLength: 5,
                    sequenceCount: 10,
                    attempts: 4,
                    symbolCount: 4,
                    colorCount: 4
                  }
                },
                content: (
                  <>
                    <Line cyan large bold>[ELEVATOR CONTROL SYSTEM]</Line>
                    <Divider />

                    <DataTable data={[
                      { label: "Elevators", value: "4 main + 1 service" },
                      { label: "Status", value: "All operational" },
                      { label: "Restrictions", value: "Floors 40+ require keycard" },
                      { label: "Service Elevator", value: "Staff keycard required (all floors)" }
                    ]} />

                    <Divider />

                    <Box color="yellow">
                      <Line bold>OVERRIDE OPTIONS (ADMIN ACCESS):</Line>
                      <Line>• Can disable keycard requirement for specific elevator</Line>
                      <Line>• Can force elevator to specific floor</Line>
                      <Line>• Can lock elevator at current floor</Line>
                      <Line>• Duration: Up to 10 minutes before system auto-resets</Line>
                    </Box>

                    <Warning>Override generates security log. Use discretion.</Warning>

                    <Divider />

                    <Line smoke small>Service elevator most useful - direct access to penthouse level without lobby traffic.</Line>
                  </>
                )
              },

              "door_locks": {
                blocker: {
                  mastermind_hack: {
                    sequenceLength: 5,
                    sequenceCount: 10,
                    attempts: 4,
                    symbolCount: 4,
                    colorCount: 4
                  }
                },
                content: (
                  <>
                    <Line cyan large bold>[DOOR LOCK CONTROL]</Line>
                    <Divider />

                    <Section title="CONTROLLABLE LOCKS">
                      <Line yellow>Service Entrance - East Side</Line>
                      <Line yellow>Roof Access Door - Floor 51</Line>
                      <Line yellow>Emergency Stairwell Doors - Penthouse level</Line>
                      <Line yellow>Parking Garage Gates (B1-B3)</Line>
                      <Line smoke small>Note: Individual unit doors NOT controlled by building system</Line>
                    </Section>

                    <Divider />

                    <Box color="yellow">
                      <Line bold>OVERRIDE CAPABILITY:</Line>
                      <Line>Can remotely unlock any building-controlled door.</Line>
                      <Line>Override lasts 5 minutes before auto-lock.</Line>
                      <Line>Generates security log entry.</Line>
                    </Box>

                    <Box color="red">
                      <Line bold>LIMITATION:</Line>
                      <Line>Unit 4201 (Steel Jackhammer's penthouse) uses PRIVATE security system.</Line>
                      <Line>Building access control does NOT extend to individual unit doors.</Line>
                      <Line>Would need to hack penthouse smart home separately.</Line>
                    </Box>
                  </>
                )
              }
            }
          },

          "building_network": {
            blocker: {
              mastermind_hack: {
                sequenceLength: 5,
                sequenceCount: 12,
                attempts: 4,
                symbolCount: 4,
                colorCount: 4
              }
            },
            content: (
              <>
                <Line cyan large bold>[BUILDING NETWORK ACCESS]</Line>
                <Line smoke>TOWER_INTERNAL - Infrastructure network</Line>
                <Divider />

                <NetworkRouter
                  routerId="ROUTER-MAIN-01"
                  location="Central Plaza Tower - Server Room (Floor 3)"
                  model="SecureNet Enterprise Pro"
                  status="ONLINE"
                  connectedDevices={[
                    { name: "Security Console", ip: "10.0.1.10", mac: "00:1A:2B:3C:4D:5E", type: "Terminal" },
                    { name: "Camera Grid", ip: "10.0.1.20-68", mac: "Various", type: "Surveillance" },
                    { name: "Elevator Control", ip: "10.0.1.100", mac: "00:1A:2B:3C:4D:6F", type: "Access Control" },
                    { name: "Door Lock System", ip: "10.0.1.101", mac: "00:1A:2B:3C:4D:70", type: "Access Control" },
                    { name: "HVAC Control", ip: "10.0.1.200", mac: "00:1A:2B:3C:4D:71", type: "Maintenance" },
                    { name: "Fire Suppression", ip: "10.0.1.201", mac: "00:1A:2B:3C:4D:72", type: "Safety" },
                    { name: "Lobby ATM", ip: "10.0.1.150", mac: "00:1A:2B:3C:4D:73", type: "Banking" }
                  ]}
                  settings={{
                    ssid: "TOWER_INTERNAL",
                    encryption: "WPA3-Enterprise",
                    bandwidth: "10 Gbps fiber backbone"
                  }}
                />

                <Divider />

                <Box color="yellow">
                  <Line bold>NETWORK CAPABILITIES:</Line>
                  <Line>• Access to building security systems</Line>
                  <Line>• Camera feed viewing and control</Line>
                  <Line>• Access control override (with additional hacking)</Line>
                  <Line>• Maintenance system access</Line>
                  <Line>• ATM network connection (transaction data)</Line>
                </Box>

                <Box color="red">
                  <Line bold>SEPARATE NETWORKS (NOT ACCESSIBLE):</Line>
                  <Line>• Individual unit networks (resident privacy)</Line>
                  <Line>• Unit 4201 smart home system (private network)</Line>
                  <Line>• Would require direct access to penthouse network</Line>
                </Box>
              </>
            ),
            related_commands: {
              "network_devices": {
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
                      { name: "Parking Gate Control", ip: "10.0.1.102", type: "Access Control", status: "ONLINE", lastSeen: "Active now" }
                    ]}
                  />
                )
              }
            }
          },

          "maintenance_systems": {
            password: {
              pw: "maint_tower_2067",
              hint: "Standard maintenance password format: maint_[building]_[year]",
              hintStrength: 2
            },
            content: (
              <MaintenanceAccess
                systemName="Building Maintenance Control"
                location="Central Plaza Tower"
                status="OPERATIONAL"
                lastMaintenance="Nov 10, 2067"
                nextScheduled="Dec 1, 2067"
                issues={[
                  {
                    severity: "MEDIUM",
                    description: "Roof camera offline - weather damage repair in progress",
                    reported: "Nov 15, 12:00"
                  },
                  {
                    severity: "LOW",
                    description: "HVAC filter replacement due in 3 weeks (routine)",
                    reported: "Nov 10"
                  },
                  {
                    severity: "LOW",
                    description: "Elevator 3 slight noise - inspection scheduled",
                    reported: "Nov 12"
                  }
                ]}
              />
            ),
            related_commands: {
              "hvac_control": {
                content: (
                  <>
                    <Line cyan large bold>[HVAC CONTROL SYSTEM]</Line>
                    <Line smoke>Heating, ventilation, and air conditioning</Line>
                    <Divider />

                    <DataTable data={[
                      { label: "System Status", value: "OPERATIONAL" },
                      { label: "Temperature", value: "21°C (building average)" },
                      { label: "Mode", value: "Auto (climate control)" },
                      { label: "Air Quality", value: "Good" }
                    ]} />

                    <Divider />

                    <Section title="ZONE CONTROL">
                      <Line neon>• Lobby & Common Areas</Line>
                      <Line neon>• Residential Floors (1-39)</Line>
                      <Line neon>• Penthouse Level (40-50)</Line>
                      <Line neon>• Parking Garage</Line>
                      <Line smoke small>Individual units have local thermostats (limited override)</Line>
                    </Section>

                    <Divider />

                    <Box color="yellow">
                      <Line bold>SABOTAGE OPTIONS (ADMIN ACCESS):</Line>
                      <Line>• Can disable AC to specific floor/zone</Line>
                      <Line>• Can set temperature to uncomfortable levels</Line>
                      <Line>• Can trigger false maintenance alerts</Line>
                      <Line smoke small>Effect: Penthouse party gets uncomfortably hot, people move to balcony...</Line>
                    </Box>

                    <Warning>HVAC changes take 15-30 minutes to have noticeable effect</Warning>
                  </>
                )
              },

              "service_keycards": {
                content: (
                  <>
                    <Line cyan large bold>[SERVICE KEYCARD DATABASE]</Line>
                    <Line smoke>Active maintenance and delivery staff credentials</Line>
                    <Divider />

                    <Section title="ACTIVE KEYCARDS">
                      <Line yellow>MAINT-001: Carlos Rodriguez (Building maintenance)</Line>
                      <Line yellow>MAINT-002: Kim Lee (HVAC specialist)</Line>
                      <Line yellow>MAINT-003: Sarah Johnson (Cleaning crew supervisor)</Line>
                      <Line yellow>DELIV-101: Various (Rotating delivery personnel)</Line>
                      <Line yellow>EMER-001: Fire/Emergency services (always active)</Line>
                    </Section>

                    <Divider />

                    <Box color="cyan">
                      <Line bold>KEYCARD ACCESS LEVELS:</Line>
                      <Line>• Service elevator (all floors)</Line>
                      <Line>• Service entrance</Line>
                      <Line>• Maintenance areas</Line>
                      <Line>• Roof access (MAINT-level only)</Line>
                    </Box>

                    <Box color="yellow">
                      <Line bold>TACTICAL NOTE:</Line>
                      <Line>Service personnel blend in. Maintenance uniform + keycard = access.</Line>
                      <Line>Building security doesn't scrutinize maintenance staff heavily.</Line>
                      <Line>Could clone keycard data if you can scan one...</Line>
                    </Box>
                  </>
                )
              }
            }
          }
        }
      }
    }
  }
};

export default CENTRAL_PLAZA_TOWER_COMMANDS;
