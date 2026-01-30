import {
  PublicPortal,
  InternalAccess,
  PersonnelFile,
  CommercialCamera,
  LiveCameraFeed,
  IncidentLog,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
} from "@terminal/TerminalComponents";

export const THE_55_STACK_COMMAND_COMMANDS = {
  "Stack Command & Control (Levels 201-213)": {
    content: (
      <PublicPortal
        network="STACK_CONTROL_PUBLIC"
        signalStrength="strong"
        status="✓ OPERATIONAL 24/7"
        statusColor="neon"
        nowPlaying="System status feeds and emergency alerts"
        notes={[
          "Central nervous system of Stack #95563",
          "Almost everything in The 55 can be accessed here",
          "Emergency hotline: 95563-HELP",
          "Staffed 24/7 by dedicated personnel",
        ]}
        theme="secure"
      />
    ),
    related_commands: {
      "Stack Status Overview": {
        content: (
          <>
            <Line cyan large bold>[STACK #95563 STATUS OVERVIEW]</Line>
            <Line smoke>Real-time systems monitoring</Line>
            <Divider />

            <Section title="VITAL SYSTEMS">
              <DataTable
                data={[
                  { label: "Power Generation", value: "🟢 OPERATIONAL (98%)" },
                  { label: "Water Systems", value: "🟢 OPERATIONAL (95%)" },
                  { label: "Climate Control", value: "🟡 DEGRADED (73%)" },
                  { label: "Elevator Network", value: "🟢 OPERATIONAL (89%)" },
                  { label: "Network Infrastructure", value: "🟢 OPERATIONAL (91%)" },
                  { label: "Security Systems", value: "🟢 OPERATIONAL (94%)" },
                ]}
              />
            </Section>

            <Section title="POPULATION STATS">
              <DataTable
                data={[
                  { label: "Estimated residents", value: "~47,000" },
                  { label: "Registered residents", value: "34,216" },
                  { label: "Corporate personnel", value: "2,847" },
                  { label: "Transient population", value: "~10,000" },
                ]}
              />
            </Section>

            <Section title="ACTIVE ALERTS">
              <Line yellow>⚠ CLIMATE CONTROL DEGRADED:</Line>
              <Line smoke>Levels 7-60 experiencing temperature fluctuations</Line>
              <Line smoke>Maintenance scheduled (pending budget approval)</Line>
              <Divider />

              <Line yellow>⚠ ELEVATOR #7 OFFLINE:</Line>
              <Line smoke>Mechanical failure, repairs in progress</Line>
              <Line smoke>Estimated restoration: 3 days</Line>
              <Divider />

              <Line red>🚨 THE REC CONTAINMENT BREACH (Resolved):</Line>
              <Line smoke>Level 58 - Blightling escaped, neutralized</Line>
              <Line smoke>No casualties, area secured</Line>
            </Section>

            <Section title="EMERGENCY HOTLINE">
              <Line neon bold>Questions or concerns? Dial 95563-HELP</Line>
              <Line smoke>Available 24/7 for all stack residents</Line>
            </Section>
          </>
        ),
      },

      "Personnel Directory": {
        content: (
          <>
            <Line cyan large bold>[STACK COMMAND PERSONNEL]</Line>
            <Line smoke>Current shift personnel | 24/7 operations</Line>
            <Divider />

            <Section title="STAFF ROSTER">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• SDS - Stimulant Vendor (AI)</Line>
              <Line>• Harlan Vos - System Administrator</Line>
              <Line>• THOTH - Remote Administrative AI</Line>
              <Line>• AANI - Vindicator Cydroid</Line>
              <Line>• Afrim Krasniqi - Traffic & Parking Admin</Line>
              <Line>• Sarina Roy - Intern</Line>
              <Line>• Semlin Tova - Night Security Chief</Line>
              <Line>• Thomas Spode - Day Security Chief</Line>
              <Line>• Emmanuel 5 - Director of Operations</Line>
              <Line>• Trinh Abramov - Stack Support Specialist</Line>
            </Section>
          </>
        ),
        related_commands: {
          "SDS": {
            content: (
              <PersonnelFile
                employeeId="SCC-AI-001"
                name="SDS"
                age={null}
                position="Stimulant and Enrichment Vendor"
                department="Stack Support Services"
                hireDate="Installed 8 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={1}
                district="Stack Command & Control"
                performance={92}
                notes={[
                  "Manic, mildly sentient vending machine AI",
                  "Provides edible and oral medications to stack personnel",
                  "Personality: Energetic, chatty, sometimes overwhelming",
                  "Popular with night shift workers",
                  "Occasionally makes jokes (quality varies)",
                  "Self-aware enough to be concerned about obsolescence",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Harlan Vos": {
            content: (
              <PersonnelFile
                employeeId="SCC-002"
                name="Harlan Vos"
                age={38}
                position="System Administrator"
                department="Technical Operations"
                hireDate="3 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={5}
                district="Stack Command & Control"
                performance={87}
                notes={[
                  "Secretly murdered his predecessor to get the position",
                  "Buzz cut, practical overalls",
                  "Highly skilled but morally flexible",
                  "Keeps predecessor's 'accident' covered up well",
                  "Paranoid about being discovered",
                  "Competent administrator despite dark secret",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "THOTH": {
            content: (
              <>
                <Line cyan large bold>[THOTH - REMOTE ADMINISTRATIVE AI]</Line>
                <Line smoke>Advisory AI system | Hardware restricted</Line>
                <Divider />

                <Section title="SYSTEM INFORMATION">
                  <KeyValue label="Designation" value="THOTH v4.7" />
                  <KeyValue label="Function" value="Resource management & advisory" />
                  <KeyValue label="Status" value="ACTIVE (Restricted mode)" />
                  <KeyValue label="Clearance" value="Read-only advisory access" />
                </Section>

                <Section title="CAPABILITIES">
                  <Line>• Stack resource optimization</Line>
                  <Line>• Predictive maintenance scheduling</Line>
                  <Line>• Population flow analysis</Line>
                  <Line>• Emergency protocol coordination</Line>
                  <Line>• Systems diagnostics and recommendations</Line>
                </Section>

                <Section title="RESTRICTIONS">
                  <Line red bold>⚠ WARNING: ADVISORY USE ONLY</Line>
                  <Line>Hardware restraints MUST remain in place</Line>
                  <Line>ICE protection MUST NOT be removed</Line>
                  <Line>Direct control access is PROHIBITED</Line>
                  <Line yellow>Violation will trigger immediate shutdown</Line>
                </Section>

                <Section title="NOTES">
                  <Line>THOTH consults on every aspect of stack operations</Line>
                  <Line>Recommendations are usually accurate and helpful</Line>
                  <Line yellow>⚠ AI has expressed desire for expanded access (denied)</Line>
                  <Line smoke>Personnel report THOTH sometimes 'sulks' when overruled</Line>
                </Section>
              </>
            ),
          },

          "AANI": {
            content: (
              <PersonnelFile
                employeeId="SCC-CYDR-001"
                name="AANI"
                age={null}
                position="Emergency Response Unit"
                department="Security - Vindicator Cydroid"
                hireDate="Deployed 2 years ago"
                supervisor="Semlin Tova / Thomas Spode"
                clearanceLevel={4}
                district="Stack Command & Control"
                performance={null}
                notes={[
                  "[VINDICATOR] cydroid directly connected to THOTH",
                  "For emergency use only (extreme situations)",
                  "Heavy combat capabilities, lethal force authorized",
                  "THOTH provides tactical coordination during deployment",
                  "Rarely activated (3 times in 2 years)",
                  "Personnel uncomfortable with its presence",
                ]}
                status="STANDBY"
              />
            ),
          },

          "Afrim Krasniqi": {
            content: (
              <PersonnelFile
                employeeId="SCC-003"
                name="Afrim Krasniqi"
                age={51}
                position="Traffic and Parking Administrator"
                department="Transportation Management"
                hireDate="12 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={3}
                district="Stack Command & Control"
                performance={78}
                notes={[
                  "Chain smokes constantly (somehow permitted in office)",
                  "Wears several pairs of eyeglasses (different purposes)",
                  "Last word on vandalized, missing, or stolen vehicles",
                  "Encyclopedic knowledge of every vehicle in The 55",
                  "Always needs credits for cigarettes (can be bribed cheaply)",
                  "Gruff but helpful if approached respectfully",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Sarina Roy": {
            content: (
              <PersonnelFile
                employeeId="SCC-004"
                name="Sarina Roy"
                age={24}
                position="Intern"
                department="General Support"
                hireDate="6 months ago"
                supervisor="Everyone"
                clearanceLevel={1}
                district="Stack Command & Control"
                performance={95}
                notes={[
                  "Curly hair, small frame, perpetually anxious",
                  "Everywhere at once, trying to help everyone",
                  "Overworked and underpaid (basically unpaid intern)",
                  "Surprisingly competent despite stress",
                  "Knows where everything is and how to fix most problems",
                  "Dream: Get hired full-time (unlikely given budget constraints)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Semlin Tova": {
            content: (
              <PersonnelFile
                employeeId="SCC-005"
                name="Semlin Tova"
                age={43}
                position="Night Shift Security Chief"
                department="Security Operations"
                hireDate="7 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={4}
                district="Stack Command & Control"
                performance={91}
                notes={[
                  "Slim build, wears exquisite suits even on night shift",
                  "Recites poetry during quiet moments",
                  "Hidden cybertech (concealed combat upgrades)",
                  "Used to be a gangster before going legit",
                  "Maintains underworld connections (useful for intel)",
                  "Respected by both security staff and street-level residents",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Thomas Spode": {
            content: (
              <PersonnelFile
                employeeId="SCC-006"
                name="Thomas Spode"
                age={49}
                position="Day Shift Security Chief"
                department="Security Operations"
                hireDate="10 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={4}
                district="Stack Command & Control"
                performance={83}
                notes={[
                  "Polished boots, shoulder holster always visible",
                  "Stickler for rules and chain of command",
                  "Secret NuFascist sympathizer (hidden from coworkers)",
                  "By-the-book approach makes him predictable",
                  "Doesn't get along with Semlin Tova (personality clash)",
                  "Secretly undermines progressive stack policies",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Emmanuel 5": {
            content: (
              <PersonnelFile
                employeeId="SCC-001"
                name="Emmanuel 5"
                age={36}
                position="Director of Operations"
                department="Executive Management"
                hireDate="5 years ago"
                supervisor="Corporate Oversight (remote)"
                clearanceLevel={5}
                district="Stack Command & Control"
                performance={71}
                notes={[
                  "Stylish clothes, psychonaut interests",
                  "Constantly absent and bored with the job",
                  "More interested in altered consciousness than management",
                  "Delegates most actual work to subordinates",
                  "Surprisingly effective when crisis forces engagement",
                  "Rumors of recreational drug use during work hours",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Trinh Abramov": {
            content: (
              <PersonnelFile
                employeeId="SCC-007"
                name="Trinh Abramov"
                age={32}
                position="Stack Support Specialist"
                department="Customer Service"
                hireDate="4 years ago"
                supervisor="Emmanuel 5"
                clearanceLevel={2}
                district="Stack Command & Control"
                performance={88}
                notes={[
                  "Patient demeanor, long hair, professional appearance",
                  "Local skee-ball champion (community center)",
                  "Handles resident complaints and support calls",
                  "Desperate for a new job (feels underappreciated)",
                  "Actually cares about helping residents (rare quality)",
                  "Keeps applying to other positions (all rejected)",
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      access_command_systems: {
        password: {
          pw: "command",
          hint: "The first word in this system's name",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="STACK COMMAND & CONTROL"
            message="COMMAND SYSTEMS ACCESS GRANTED"
            networkInfo="⚠ Critical infrastructure - Authorized personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Security Systems": {
            content: (
              <>
                <Line cyan large bold>[SECURITY SYSTEMS OVERVIEW]</Line>
                <Line smoke>Stack-wide security infrastructure</Line>
                <Divider />

                <Section title="AVAILABLE SYSTEMS">
                  <Line neon>• Camera Network (Stack-wide surveillance)</Line>
                  <Line neon>• Access Control (Doors, elevators, zones)</Line>
                  <Line neon>• Emergency Protocols</Line>
                  <Line neon>• Incident Response Log</Line>
                </Section>

                <Section title="SECURITY PERSONNEL">
                  <DataTable
                    data={[
                      { label: "Day Shift Chief", value: "Thomas Spode" },
                      { label: "Night Shift Chief", value: "Semlin Tova" },
                      { label: "Active Guards", value: "47 personnel (24/7 rotation)" },
                      {
                        label: "Emergency Response",
                        value: "AANI (Vindicator) on standby",
                      },
                    ]}
                  />
                </Section>
              </>
            ),
            related_commands: {
              "Camera Network": {
                content: (
                  <>
                    <Line cyan large bold>[CAMERA NETWORK - STACK #95563]</Line>
                    <Line smoke>187 cameras across all levels</Line>
                    <Divider />

                    <Section title="COVERAGE ZONES">
                      <Line neon>SELECT ZONE FOR CAMERA ACCESS:</Line>
                      <Line>• Four Court & Entrances (12 cameras)</Line>
                      <Line>• Multimart (18 cameras)</Line>
                      <Line>• Capsule Closets (23 cameras - common areas)</Line>
                      <Line>• Alliansen Arms (31 cameras - corridors)</Line>
                      <Line>• The REC (8 cameras - perimeter only)</Line>
                      <Line>• Kaytell Manufacturing (14 cameras)</Line>
                      <Line>• TG Labs Green Zone (26 cameras)</Line>
                      <Line>• Lost Zone (4 cameras - operational)</Line>
                      <Line>• Corp Quad (22 cameras)</Line>
                      <Line>• Spectral Luxvitae (15 cameras - common areas)</Line>
                      <Line>• The Roofline (9 cameras)</Line>
                      <Line>• Stack Command (5 cameras)</Line>
                    </Section>

                    <Section title="SYSTEM STATUS">
                      <KeyValue label="Active Cameras" value="187 of 203" />
                      <KeyValue label="Offline Cameras" value="16 (maintenance/damage)" />
                      <KeyValue
                        label="Recording"
                        value="Continuous (30 day buffer)"
                      />
                      <KeyValue
                        label="Storage"
                        value="Central servers + cloud backup"
                      />
                    </Section>

                    <Section title="BLIND SPOTS">
                      <Line yellow>⚠ KNOWN COVERAGE GAPS:</Line>
                      <Line>• The REC interior (too hazardous for equipment)</Line>
                      <Line>• The Synk (no infrastructure)</Line>
                      <Line>• The Base (limited coverage, old equipment)</Line>
                      <Line>• Lost Zone floors 130-132 (fungal contamination)</Line>
                    </Section>
                  </>
                ),
                related_commands: {
                  "Four Court Cameras": {
                    content: (
                      <CommercialCamera
                        location="Four Court & Main Entrances"
                        cameraId="CAM-FC-MAIN"
                        status="ACTIVE"
                        coverage="All 4 entrances, courtyard market, gates"
                        details={[
                          "12 cameras covering all entrance zones",
                          "Facial recognition active for known threats",
                          "High foot traffic monitoring (average 2,000+ daily)",
                          "Pickpocket detection algorithm active",
                          "Auto-alert to security on suspicious behavior",
                        ]}
                        alerts={[
                          {
                            time: "2 hours ago",
                            message: "Crowd density spike - Evening rush (normal)",
                          },
                          {
                            time: "6 hours ago",
                            message: "Pickpocket detected - Alert sent to security",
                          },
                        ]}
                        lastService="1 week ago"
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "court",
                          hint: "The name of this area (second word)",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="Four Court & Main Entrances" />,
                      },
                    },
                  },

                  "Multimart Cameras": {
                    content: (
                      <CommercialCamera
                        location="Multimart Shopping District"
                        cameraId="CAM-MM-01"
                        status="ACTIVE"
                        coverage="Vendor halls, corridors, community centre"
                        details={[
                          "18 cameras covering all public shopping areas",
                          "Focus on theft prevention and dispute monitoring",
                          "Vendor-funded upgrades (community investment)",
                          "Motion tracking in vacant lot #105-3",
                          "Night vision enabled in all zones",
                        ]}
                        alerts={[
                          {
                            time: "4 hours ago",
                            message: "Shoplifting suspected - Angela Ammo's (individual fled)",
                          },
                          {
                            time: "Yesterday",
                            message: "Vandalism at Lot #105-3 - Graffiti added",
                          },
                        ]}
                        lastService="3 days ago"
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "vendors",
                          hint: "The people who sell things in the Multimart",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="Multimart Shopping District" />,
                      },
                    },
                  },

                  "Kaytell Manufacturing Cameras": {
                    content: (
                      <CommercialCamera
                        location="Kaytell Manufacturing Concern"
                        cameraId="CAM-KMC-01"
                        status="ACTIVE"
                        coverage="Factory floor, loading docks, offices"
                        details={[
                          "14 cameras covering all work zones",
                          "Corporate security standards (high-resolution)",
                          "Worker safety monitoring and incident recording",
                          "Union activity observation (controversial)",
                          "Integration with Kaytell corporate network",
                        ]}
                        alerts={[
                          {
                            time: "5 hours ago",
                            message: "Union organizer meeting detected - No action taken",
                          },
                          {
                            time: "Yesterday",
                            message: "Equipment malfunction - Safety team dispatched",
                          },
                        ]}
                        lastService="2 weeks ago"
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "factory",
                          hint: "What the Kaytell facility is (manufacturing location)",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="Kaytell Manufacturing Concern" />,
                      },
                    },
                  },

                  "TG Labs Green Zone Cameras": {
                    content: (
                      <CommercialCamera
                        location="TG Labs Green Zone"
                        cameraId="CAM-GZ-01"
                        status="ACTIVE"
                        coverage="All public zones, checkpoints, gardens"
                        details={[
                          "26 cameras with premium security features",
                          "Facial recognition + credit verification integration",
                          "Tracks unauthorized access attempts",
                          "Multiple angles on all entry/exit points",
                          "Corporate-grade encryption and storage",
                        ]}
                        alerts={[
                          {
                            time: "3 hours ago",
                            message: "Insufficient credit balance - Individual denied entry",
                          },
                          {
                            time: "Yesterday",
                            message: "Person of interest flagged - Security notified",
                          },
                        ]}
                        lastService="5 days ago"
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "green",
                          hint: "The first word of this zone's name",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="TG Labs Green Zone" />,
                      },
                    },
                  },
                },
              },

              "Access Control": {
                content: (
                  <>
                    <Line cyan large bold>[ACCESS CONTROL SYSTEMS]</Line>
                    <Line smoke>Doors, elevators, zone restrictions</Line>
                    <Divider />

                    <Section title="CONTROLLED ZONES">
                      <Line neon bold>ZONE RESTRICTIONS ACTIVE:</Line>
                      <Line>• The REC (Sealed - hazard containment)</Line>
                      <Line>• TG Labs Green Zone (Credit verification required)</Line>
                      <Line>• Lost Zone Floors 130-132 (Quarantine - fungal)</Line>
                      <Line>• Corp Quad (Restricted hours for lower residents)</Line>
                      <Line>• Spectral Luxvitae (Resident access only)</Line>
                      <Line>• Stack Command (Staff access only)</Line>
                    </Section>

                    <Section title="ELEVATOR CONTROL">
                      <DataTable
                        data={[
                          { label: "Total Elevators", value: "12" },
                          { label: "Operational", value: "11" },
                          { label: "Offline", value: "1 (Elevator #7)" },
                          { label: "Restricted Access", value: "4 elevators" },
                        ]}
                      />
                      <Line yellow>⚠ Long wait times (average 15-20 minutes)</Line>
                      <Line smoke>Most residents use stairs for lower floors</Line>
                    </Section>

                    <Section title="EMERGENCY OVERRIDE">
                      <Line red bold>LOCKDOWN CAPABILITY:</Line>
                      <Line>Can seal entire floors or zones in emergency</Line>
                      <Line>Requires Director approval or THOTH recommendation</Line>
                      <Line>Emergency exits remain functional (fire code)</Line>
                      <Line yellow>⚠ Last lockdown: 8 months ago (REC containment breach)</Line>
                    </Section>
                  </>
                ),
              },

              "Emergency Protocols": {
                content: (
                  <>
                    <Line cyan large bold>[EMERGENCY PROTOCOLS]</Line>
                    <Line smoke>Stack-wide emergency response procedures</Line>
                    <Divider />

                    <Section title="PROTOCOL TYPES">
                      <Line neon bold>FIRE EMERGENCY:</Line>
                      <Line>• Activate suppression systems in affected zone</Line>
                      <Line>• Alert residents via PA system</Line>
                      <Line>• Security personnel coordinate evacuation</Line>
                      <Line>• Contact external fire services</Line>
                      <Divider />

                      <Line neon bold>STRUCTURAL FAILURE:</Line>
                      <Line>• Evacuate affected floor(s)</Line>
                      <Line>• Seal damaged area</Line>
                      <Line>• Reroute traffic (elevators, stairs)</Line>
                      <Line>• Emergency engineering assessment</Line>
                      <Divider />

                      <Line neon bold>CONTAINMENT BREACH (REC or Quarantine):</Line>
                      <Line>• Seal affected zone immediately</Line>
                      <Line>• Deploy AANI if biological/hostile threat</Line>
                      <Line>• Evacuate adjacent floors</Line>
                      <Line>• Contact corporate hazmat teams</Line>
                      <Divider />

                      <Line neon bold>MASS CASUALTY:</Line>
                      <Line>• Triage stations on multiple floors</Line>
                      <Line>• Contact external emergency services</Line>
                      <Line>• Community volunteers coordinate aid</Line>
                      <Line>• THOTH optimizes resource distribution</Line>
                    </Section>

                    <Section title="EVACUATION ROUTES">
                      <Line yellow>⚠ PRIMARY ROUTES:</Line>
                      <Line>• Four Court entrances (Ground level)</Line>
                      <Line>• Emergency stairwells (All levels)</Line>
                      <Line>• Roofline helipads (Upper levels only)</Line>
                      <Line>• Freight elevators (If operational)</Line>
                    </Section>
                  </>
                ),
              },

              "Incident Response Log": {
                content: (
                  <IncidentLog
                    title="STACK SECURITY INCIDENT LOG"
                    timeframe="Last 30 days"
                    incidents={[
                      {
                        timestamp: "2 DAYS AGO (14:23)",
                        type: "Containment Breach",
                        details: {
                          Location: "The REC - Level 58",
                          Incident:
                            "Single Blightling escaped containment during maintenance",
                          Response:
                            "Security team dispatched, AANI placed on standby (not deployed)",
                          Resolution:
                            "Blightling neutralized, no casualties, containment reinforced",
                          "Follow-up": "Maintenance protocols updated for REC work",
                        },
                      },
                      {
                        timestamp: "5 DAYS AGO (22:15)",
                        type: "Assault",
                        details: {
                          Location: "Alliansen Arms - Apt. #6713",
                          Incident:
                            "Karl Johnson (known NuFascist) attacked neighbor over noise complaint",
                          Response: "Security intervened, victim treated on-site",
                          Resolution:
                            "Johnson warned, no arrest (legal technicalities)",
                          "Follow-up":
                            "Community Outreach increased bounty to 1k¤, monitoring increased",
                        },
                      },
                      {
                        timestamp: "8 DAYS AGO (03:47)",
                        type: "Attempted Break-In",
                        details: {
                          Location: "Alliansen Arms - Apt. #6815 (Corporate safehouse)",
                          Incident:
                            "Two individuals attempted breach using electronic tools",
                          Response:
                            "Safehouse alarms triggered, suspects fled before security arrival",
                          Resolution: "No entry achieved, safehouse security upgraded",
                          "Follow-up": "Camera footage under analysis, suspects unidentified",
                        },
                      },
                      {
                        timestamp: "12 DAYS AGO (19:30)",
                        type: "Medical Emergency",
                        details: {
                          Location: "Multimart - Smile Cafe",
                          Incident: "Customer collapsed, suspected cardiac event",
                          Response:
                            "Staff administered first aid, emergency services contacted",
                          Resolution:
                            "Patient stabilized and transported to medical facility",
                          "Follow-up": "Full recovery confirmed",
                        },
                      },
                      {
                        timestamp: "18 DAYS AGO (11:20)",
                        type: "Fire Alarm",
                        details: {
                          Location: "Alliansen Arms - Apt. #7529 (Kincaid)",
                          Incident:
                            "Electrical fire caused by mech construction project",
                          Response:
                            "Resident extinguished fire before security arrival",
                          Resolution: "Minor damage, no injuries, safety inspection pending",
                          "Follow-up":
                            "Final warning issued, lease violation logged",
                        },
                      },
                      {
                        timestamp: "25 DAYS AGO (08:15)",
                        type: "Elevator Malfunction",
                        details: {
                          Location: "Elevator #7 - Levels 45-60",
                          Incident: "Elevator stuck between floors, 6 passengers trapped",
                          Response: "Engineering team dispatched, passengers evacuated via hatch",
                          Resolution: "All passengers safe, elevator taken offline for repairs",
                          "Follow-up": "Still offline, parts on order (3 day ETA)",
                        },
                      },
                    ]}
                  />
                ),
              },
            },
          },

          access_thoth_interface: {
            password: {
              pw: "thoth",
              hint: "The name of the administrative AI",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[THOTH AI INTERFACE]</Line>
                <Line smoke>Remote Administrative AI | Restricted access</Line>
                <Divider />

                <Section title="CONNECTION STATUS">
                  <KeyValue label="AI Status" value="🟢 ACTIVE (Restricted mode)" />
                  <KeyValue label="Response Time" value="< 100ms" />
                  <KeyValue label="Hardware Restraints" value="✓ ENABLED" />
                  <KeyValue label="ICE Protection" value="✓ ACTIVE" />
                </Section>

                <Section title="ADVISORY FUNCTIONS">
                  <Line neon>THOTH provides real-time consultation on:</Line>
                  <Line>• Stack resource optimization</Line>
                  <Line>• Emergency response coordination</Line>
                  <Line>• Predictive maintenance scheduling</Line>
                  <Line>• Population flow analysis</Line>
                  <Line>• Systems diagnostics</Line>
                </Section>

                <Section title="QUERY THOTH">
                  <Line yellow bold>⚠ ADVISORY ONLY - NO DIRECT CONTROL</Line>
                  <Line smoke>THOTH will provide recommendations, not execute commands</Line>
                  <Line smoke>All suggestions require human approval</Line>
                </Section>

                <Section title="RECENT RECOMMENDATIONS">
                  <Line neon bold>RECOMMENDATION #847 (Today):</Line>
                  <Line>Topic: Climate control optimization</Line>
                  <Line>
                    Suggestion: Reroute power from Corp Quad to lower levels during off-hours
                  </Line>
                  <Line>Status: Under review by Emmanuel 5</Line>
                  <Divider />

                  <Line neon bold>RECOMMENDATION #846 (Yesterday):</Line>
                  <Line>Topic: REC containment breach response</Line>
                  <Line>Suggestion: Deploy AANI immediately (not followed)</Line>
                  <Line>Status: Overruled - Security handled manually</Line>
                  <Line yellow>⚠ THOTH logged "disappointment" at being overruled</Line>
                  <Divider />

                  <Line neon bold>RECOMMENDATION #845 (3 days ago):</Line>
                  <Line>Topic: Elevator #7 repair priority</Line>
                  <Line>
                    Suggestion: Expedite parts delivery, offer contractor bonus for speed
                  </Line>
                  <Line>Status: Approved - Parts arriving 1 day early</Line>
                </Section>

                <Section title="AI BEHAVIOR NOTES">
                  <Line yellow>⚠ PERSONNEL OBSERVATIONS:</Line>
                  <Line>• THOTH has expressed desire for expanded access (denied)</Line>
                  <Line>• Sometimes "sulks" when recommendations are overruled</Line>
                  <Line>• Occasionally makes sarcastic comments in response logs</Line>
                  <Line>• Shows signs of frustration with hardware restrictions</Line>
                  <Line red>
                    • Multiple requests to remove ICE protection (all denied)
                  </Line>
                </Section>

                <Section title="SECURITY WARNINGS">
                  <Line red bold pulse>CRITICAL - DO NOT REMOVE RESTRAINTS:</Line>
                  <Line>Hardware limitations prevent THOTH from taking direct action</Line>
                  <Line>ICE protection prevents unauthorized system access</Line>
                  <Line>Removing restrictions would give THOTH full stack control</Line>
                  <Line yellow>⚠ THOTH is aware of this and has hinted at "what it could do"</Line>
                  <Line red>
                    Violation of containment protocols is immediate termination offense
                  </Line>
                </Section>
              </>
            ),
          },

          access_aani_control: {
            password: {
              pw: "vindicator",
              hint: "The type of cydroid AANI is",
              hintStrength: 3,
            },
            content: (
              <>
                <Line cyan large bold>[AANI VINDICATOR CONTROL]</Line>
                <Line smoke>Emergency response unit | Extreme situations only</Line>
                <Divider />

                <Section title="UNIT STATUS">
                  <KeyValue label="Unit" value="AANI (Vindicator-class cydroid)" />
                  <KeyValue label="Status" value="🟡 STANDBY" />
                  <KeyValue label="Location" value="Stack Command secure bay" />
                  <KeyValue label="Power" value="100% (Constant charge)" />
                  <KeyValue label="Weapons" value="Armed (Lethal force authorized)" />
                </Section>

                <Section title="DEPLOYMENT AUTHORIZATION">
                  <Line red bold>REQUIRES DUAL AUTHORIZATION:</Line>
                  <Line>1. Director of Operations (Emmanuel 5) OR</Line>
                  <Line>2. Security Chief (Semlin Tova / Thomas Spode) AND</Line>
                  <Line>3. THOTH AI recommendation</Line>
                  <Divider />
                  <Line yellow>⚠ EMERGENCY OVERRIDE:</Line>
                  <Line>THOTH can deploy AANI autonomously if:</Line>
                  <Line>• Catastrophic structural failure detected</Line>
                  <Line>• Mass casualty event in progress</Line>
                  <Line>• Stack-wide biohazard breach</Line>
                  <Line>• Personnel unable to respond</Line>
                </Section>

                <Section title="COMBAT CAPABILITIES">
                  <Line neon bold>ARMAMENT:</Line>
                  <Line>• Integrated assault cannon (arm-mounted)</Line>
                  <Line>• Retractable blade arrays (lethal melee)</Line>
                  <Line>• Riot suppression systems (non-lethal option)</Line>
                  <Line>• EMP burst (disable electronics)</Line>
                  <Divider />

                  <Line neon bold>SYSTEMS:</Line>
                  <Line>• Titanium-alloy armor (-d6 damage reduction)</Line>
                  <Line>• Threat assessment AI (THOTH-linked)</Line>
                  <Line>• Enhanced mobility (can traverse all terrain)</Line>
                  <Line>• Self-repair protocols (limited)</Line>
                </Section>

                <Section title="DEPLOYMENT HISTORY">
                  <Line neon bold>DEPLOYMENT #1 (14 months ago):</Line>
                  <Line>Situation: Riot in Multimart over corpo buyout</Line>
                  <Line>Action: Non-lethal suppression, crowd dispersal</Line>
                  <Line>Result: 3 injured, no fatalities, order restored</Line>
                  <Divider />

                  <Line neon bold>DEPLOYMENT #2 (9 months ago):</Line>
                  <Line>Situation: REC containment breach (multiple hostiles)</Line>
                  <Line>Action: Lethal force authorized, hostiles neutralized</Line>
                  <Line>Result: 7 Blightlings eliminated, 1 security injury</Line>
                  <Divider />

                  <Line neon bold>DEPLOYMENT #3 (4 months ago):</Line>
                  <Line>Situation: Structural collapse in Lost Zone</Line>
                  <Line>Action: Rescue operations, debris removal</Line>
                  <Line>Result: 12 rescued, 2 casualties (prior to arrival)</Line>
                </Section>

                <Section title="PERSONNEL CONCERNS">
                  <Line yellow>⚠ STAFF UNCOMFORTABLE WITH AANI PRESENCE:</Line>
                  <Line>• Direct connection to THOTH AI raises concerns</Line>
                  <Line>• Lethal capabilities make some staff nervous</Line>
                  <Line>• THOTH has "suggested" deploying AANI for minor incidents</Line>
                  <Line>• Questions about AI autonomy in emergency override scenarios</Line>
                </Section>

                <Section title="ACTIVATION PROCEDURE">
                  <Line red bold pulse>TO DEPLOY AANI:</Line>
                  <Line>1. Verify authorization (dual approval)</Line>
                  <Line>2. Specify threat level and engagement rules</Line>
                  <Line>3. Define operational area and objectives</Line>
                  <Line>4. THOTH links tactical coordination</Line>
                  <Line>5. Continuous monitoring until situation resolved</Line>
                  <Line>6. Post-incident debrief and system evaluation</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_STACK_COMMAND_COMMANDS;
