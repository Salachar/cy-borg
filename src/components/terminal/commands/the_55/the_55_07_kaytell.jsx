import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  InsetBox,
} from "@terminal/TerminalComponents";

import {
  Locked,
  MaintenanceAccess,
  Message,
  PersonnelFile,
  PublicPortal,
  ShiftSchedule,
} from "@terminal/retcomdevice";

export const THE_55_KAYTELL_MANUFACTURING_COMMANDS = {
  "[U148 - U170] Kaytell Manufacturing": {
    content: (
      <PublicPortal
        name="KAYTELL MANUFACTURING CONCERN"
        tagline="Production facility in The 55"
        network="KAYTELL_EMPLOYEE"
        signalStrength="strong"
        status="✓ OPERATIONAL"
        statusColor="neon"
        notes={[
          "Operates 24/7 with rotating shifts",
          "Employs ~200 workers across all shifts",
          "Employee services on-site"
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Facility Overview": {
        content: (
          <MaintenanceAccess
            title="[KAYTELL MANUFACTURING CONCERN]"
            deviceModel="Production Facility"
            deviceId="KAYTELL-FAC-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Produces consumer electronics and components",
              "~200 employees across 3 shifts",
              "Strict safety protocols (often ignored)"
            ]}
          >
            <Divider />
            <InsetBox title="EMPLOYEE SERVICES:">
              <Line cyan>• Company cafeteria (subsidized meals)</Line>
              <Line cyan>• Medical bay (work injuries only)</Line>
              <Line cyan>• Locker rooms and showers</Line>
              <Line cyan>• Break rooms (limited)</Line>
              <Line cyan>• Union office (unofficial, tolerated)</Line>
            </InsetBox>
            <InsetBox title="SECURITY:">
              <Line red>Badge access required for all areas</Line>
              <Line red>Cameras throughout facility</Line>
              <Line red>Armed security at main entrance</Line>
              <Line red>Random bag checks and searches</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Employee Directory": {
        content: (
          <MaintenanceAccess
            title="[KAYTELL EMPLOYEE DIRECTORY]"
            deviceModel="Personnel Registry"
            deviceId="EMPLOYEE-DIR-01"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Notable personnel",
              "~200 total employees",
              "Management, floor workers, support staff"
            ]}
          >
            <Divider />
            <InsetBox title="MANAGEMENT & OFFICE:">
              <Line neon>• Gale Lannister - Facility Manager</Line>
              <Line neon>• Hiro Tanaka - Production Supervisor</Line>
              <Line neon>• Sarah Chen - Quality Control Lead</Line>
              <Line neon>• Marcus Webb - Security Chief</Line>
              <Line neon>• Elena Rodriguez - HR Representative</Line>
            </InsetBox>
            <InsetBox title="FLOOR WORKERS:">
              <Line neon>• Viktor Sokolov - Line Worker, Union Organizer</Line>
              <Line neon>• Maya Patel - Assembly Specialist</Line>
              <Line neon>• James "Jimmy" O'Brien - Maintenance Tech</Line>
              <Line neon>• Lin Zhang - Forklift Operator</Line>
              <Line neon>• Carlos Mendez - Quality Inspector</Line>
            </InsetBox>
            <InsetBox title="LOGISTICS & WAREHOUSE:">
              <Line neon>• Andre Johnson - Warehouse Supervisor</Line>
              <Line neon>• Keiko Yamada - Inventory Specialist</Line>
              <Line neon>• Dmitri Volkov - Loading Dock Lead</Line>
            </InsetBox>
            <InsetBox title="SUPPORT STAFF:">
              <Line neon>• Dr. Amara Okafor - Medical Officer</Line>
              <Line neon>• Rosa Martinez - Cafeteria Manager</Line>
              <Line neon>• Tom "Wrench" Anderson - Senior Maintenance</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Gale Lannister": {
            content: (
              <PersonnelFile
                employeeId="KMC-MGR-001"
                name="Gale Lannister"
                age={47}
                position="Facility Manager"
                department="Management"
                hireDate="8 years ago"
                supervisor="Corporate HQ (off-site)"
                clearanceLevel={5}
                district="Kaytell Manufacturing"
                performance={91}
                notes={[
                  "Hard-nosed manager, runs tight operation",
                  "Prioritizes production quotas over worker safety",
                  "Known to crack down on union activity",
                  "Respects results, not excuses",
                  "Has connections to corporate security",
                  "Rumored to receive bonuses for anti-union success"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Hiro Tanaka": {
            content: (
              <PersonnelFile
                employeeId="KMC-SUP-002"
                name="Hiro Tanaka"
                age={39}
                position="Production Supervisor"
                department="Production"
                hireDate="12 years ago"
                supervisor="Gale Lannister"
                clearanceLevel={3}
                district="Kaytell Manufacturing"
                performance={88}
                notes={[
                  "Former line worker, promoted from within",
                  "Caught between management and workers",
                  "Tries to balance productivity with safety",
                  "Sympathetic to worker concerns but follows orders",
                  "Family depends on his income (wife, 2 kids)",
                  "Stressed and overworked"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Sarah Chen": {
            content: (
              <PersonnelFile
                employeeId="KMC-QC-003"
                name="Sarah Chen"
                age={32}
                position="Quality Control Lead"
                department="Quality Assurance"
                hireDate="5 years ago"
                supervisor="Gale Lannister"
                clearanceLevel={3}
                district="Kaytell Manufacturing"
                performance={95}
                notes={[
                  "Meticulous and detail-oriented",
                  "Fights constant pressure to pass defective products",
                  "Has flagged safety violations multiple times (ignored)",
                  "Secretly documents all quality failures",
                  "Considering whistleblowing to regulators",
                  "Excellent relationship with floor workers"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Viktor Sokolov": {
            content: (
              <PersonnelFile
                employeeId="KMC-WRK-015"
                name="Viktor Sokolov"
                age={44}
                position="Line Worker"
                department="Production - Assembly Line 3"
                hireDate="15 years ago"
                supervisor="Hiro Tanaka"
                clearanceLevel={1}
                district="Kaytell Manufacturing"
                performance={76}
                notes={[
                  "Unofficial union organizer (no official union yet)",
                  "Vocal about worker rights and safety",
                  "Has filed multiple safety complaints",
                  "Management watches him closely",
                  "Popular with workers, seen as leader",
                  "Been written up multiple times for 'insubordination'"
                ]}
                status="ACTIVE - MONITORED"
              />
            ),
          },

          "Maya Patel": {
            content: (
              <PersonnelFile
                employeeId="KMC-WRK-027"
                name="Maya Patel"
                age={28}
                position="Assembly Specialist"
                department="Production - Assembly Line 1"
                hireDate="4 years ago"
                supervisor="Hiro Tanaka"
                clearanceLevel={1}
                district="Kaytell Manufacturing"
                performance={92}
                notes={[
                  "One of the fastest workers on the floor",
                  "Supports Viktor's union efforts quietly",
                  "Saving money to leave The 55 entirely",
                  "Skilled enough to work anywhere",
                  "Keeps head down, avoids management attention",
                  "Dreams of starting own business someday"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "James 'Jimmy' O'Brien": {
            content: (
              <PersonnelFile
                employeeId="KMC-MNT-008"
                name="James 'Jimmy' O'Brien"
                age={51}
                position="Maintenance Technician"
                department="Maintenance"
                hireDate="20 years ago"
                supervisor="Tom Anderson"
                clearanceLevel={2}
                district="Kaytell Manufacturing"
                performance={84}
                notes={[
                  "Knows every inch of the facility",
                  "Been here longer than anyone except Tom Anderson",
                  "Fixes things management doesn't know are broken",
                  "Has access to every area (trusted)",
                  "Sympathetic to workers, keeps secrets",
                  "Could sabotage production if motivated (hasn't)"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dr. Amara Okafor": {
            content: (
              <PersonnelFile
                employeeId="KMC-MED-001"
                name="Dr. Amara Okafor"
                age={38}
                position="Medical Officer"
                department="Medical Bay"
                hireDate="3 years ago"
                supervisor="Gale Lannister"
                clearanceLevel={2}
                district="Kaytell Manufacturing"
                performance={87}
                notes={[
                  "Treats work injuries (company policy: work injuries only)",
                  "Frustrated with management's safety neglect",
                  "Sees same preventable injuries repeatedly",
                  "Documents all incidents thoroughly",
                  "Sympathetic to workers, provides care within limits",
                  "Would testify in lawsuit if workers filed"
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Tom 'Wrench' Anderson": {
            content: (
              <PersonnelFile
                employeeId="KMC-MNT-001"
                name="Tom 'Wrench' Anderson"
                age={63}
                position="Senior Maintenance Engineer"
                department="Maintenance"
                hireDate="28 years ago"
                supervisor="Gale Lannister"
                clearanceLevel={3}
                district="Kaytell Manufacturing"
                performance={90}
                notes={[
                  "Longest-serving employee at facility",
                  "Walking encyclopedia of facility history",
                  "Gruff exterior, soft heart for workers",
                  "Has master keys to everything",
                  "Management can't fire him (too valuable)",
                  "Knows where bodies are buried (figuratively... probably)"
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Shift Schedule": {
        content: (
          <ShiftSchedule
            title="KAYTELL MANUFACTURING SHIFT SCHEDULE"
            shifts={[
              {
                name: "DAY SHIFT",
                time: "06:00 - 14:00",
                personnel: "~80 workers",
                supervisor: "Hiro Tanaka",
                notes: "Highest production, management present, most scrutiny",
              },
              {
                name: "SWING SHIFT",
                time: "14:00 - 22:00",
                personnel: "~70 workers",
                supervisor: "Andre Johnson",
                notes: "Moderate production, less management oversight",
              },
              {
                name: "NIGHT SHIFT",
                time: "22:00 - 06:00",
                personnel: "~50 workers",
                supervisor: "Marcus Webb (Security)",
                notes: "Lowest production, minimal management, most relaxed",
              },
            ]}
            notes={[
              "Total workforce: ~200 employees",
              "Rotating schedule (most workers do all shifts)",
              "Overtime mandatory during high-demand periods",
              "Union organizing happens during night shift",
            ]}
          />
        ),
      },

      "Kaytell Systems": {
        // password: {
        //   pw: "kaytell",
        //   hint: "The name of the manufacturing company",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="KAYTELL SYSTEMS" />
        // },
        content: (
          <Message
            title="KAYTELL MANUFACTURING SYSTEMS"
            message="EMPLOYEE ACCESS GRANTED"
            note="⚠ Production systems - Authorized personnel only"
            theme="corporate"
          />
        ),
        related_commands: {
          "Production Schedules": {
            content: (
              <MaintenanceAccess
                title="[PRODUCTION SCHEDULE]"
                deviceModel="Manufacturing Control System"
                deviceId="PROD-SCHED-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Current production targets and status",
                  "3 active production lines",
                  "Line 3 chronically underperforming"
                ]}
              >
                <Divider />
                <InsetBox title="LINE 1 - CONSUMER ELECTRONICS:">
                  <Line cyan>Product: Smartwatches (Model KT-7)</Line>
                  <Line cyan>Daily Target: 2,400 units</Line>
                  <Line cyan>Current Output: 2,180 units (91%)</Line>
                  <Line yellow>Status: 🟡 Behind target</Line>
                </InsetBox>
                <InsetBox title="LINE 2 - COMPONENT ASSEMBLY:">
                  <Line cyan>Product: Circuit boards (Various)</Line>
                  <Line cyan>Daily Target: 8,000 units</Line>
                  <Line cyan>Current Output: 8,420 units (105%)</Line>
                  <Line neon>Status: 🟢 Exceeding target</Line>
                </InsetBox>
                <InsetBox title="LINE 3 - FINAL ASSEMBLY:">
                  <Line cyan>Product: Tablets (Model KT-Pro 4)</Line>
                  <Line cyan>Daily Target: 1,200 units</Line>
                  <Line cyan>Current Output: 987 units (82%)</Line>
                  <Line red>Status: 🔴 Significantly behind</Line>
                </InsetBox>
                <InsetBox title="PERFORMANCE ISSUES:">
                  <Line red bold>LINE 3 CHRONIC UNDERPERFORMANCE:</Line>
                  <Line red>Behind target for 12 consecutive days</Line>
                  <Line red>Causes: Equipment breakdowns, worker shortages</Line>
                  <Line red>Management pressure increasing on supervisors</Line>
                  <Line red>Mandatory overtime instituted (worker complaints)</Line>
                </InsetBox>
                <InsetBox title="UPCOMING ORDERS:">
                  <Line neon bold>PRIORITY CONTRACTS:</Line>
                  <Line yellow>• 50,000 smartwatches (Due: 2 weeks)</Line>
                  <Line yellow>• 100,000 circuit boards (Due: 3 weeks)</Line>
                  <Line yellow>• 20,000 tablets (Due: 1 month)</Line>
                  <Line red>Line 3 delays may cause contract breach</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Quality Control Logs": {
            content: (
              <MaintenanceAccess
                title="[QUALITY CONTROL LOGS]"
                deviceModel="Product Testing System"
                deviceId="QC-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Product testing and defect tracking",
                  "Last 30 days",
                  "Line 3 exceeds acceptable threshold"
                ]}
              >
                <Divider />
                <InsetBox title="DEFECT RATES (Last 30 Days):">
                  <Line cyan>Line 1 (Smartwatches): 3.2% defect rate</Line>
                  <Line cyan>Line 2 (Circuit boards): 1.8% defect rate</Line>
                  <Line red>Line 3 (Tablets): 7.4% defect rate</Line>
                  <Line red bold>Line 3 exceeds acceptable threshold (5%)</Line>
                </InsetBox>
                <InsetBox title="COMMON DEFECTS:">
                  <Line neon bold>LINE 1:</Line>
                  <Line smoke>• Touchscreen sensitivity issues (1.8%)</Line>
                  <Line smoke>• Battery connection failures (0.9%)</Line>
                  <Line smoke>• Cosmetic defects (0.5%)</Line>

                  <Divider />

                  <Line neon bold>LINE 2:</Line>
                  <Line smoke>• Solder joint failures (1.1%)</Line>
                  <Line smoke>• Component misalignment (0.7%)</Line>

                  <Divider />

                  <Line neon bold>LINE 3:</Line>
                  <Line smoke>• Screen defects (3.2%)</Line>
                  <Line smoke>• Housing assembly issues (2.8%)</Line>
                  <Line smoke>• Software installation failures (1.4%)</Line>
                </InsetBox>
                <InsetBox title="QC LEAD NOTES (Sarah Chen):">
                  <Line yellow bold>REPEATED CONCERNS:</Line>
                  <Line>"Line 3 defect rate unacceptable. Root cause: rushed production due to quotas."</Line>
                  <Line>"Recommended: Slow line speed 15%, allow proper assembly time. Management denied."</Line>
                  <Line>"Flagged 47 units with critical defects. Management overrode, shipped anyway."</Line>
                  <Line red>"Documented for liability purposes. Will not take responsibility for shipped defects."</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Safety Incidents": {
            content: (
              <MaintenanceAccess
                title="[SAFETY INCIDENT LOG]"
                deviceModel="Workplace Safety Tracking"
                deviceId="SAFETY-LOG-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Workplace injuries and accidents",
                  "Last 30 days: 14 total incidents",
                  "1 serious injury (crush injury, Line 3)"
                ]}
              >
                <Divider />
                <InsetBox title="INCIDENTS (Last 30 Days):">
                  <Line red bold>TOTAL INCIDENTS: 14</Line>
                  <Line cyan>Minor injuries: 9 (cuts, bruises)</Line>
                  <Line cyan>Moderate injuries: 4 (sprains, burns)</Line>
                  <Line red>Serious injuries: 1 (crush injury)</Line>
                  <Line cyan>Fatalities: 0</Line>
                </InsetBox>
                <InsetBox title="RECENT SERIOUS INCIDENT:">
                  <Line red bold>INCIDENT #KMC-2026-047 (3 days ago):</Line>
                  <Line red>Location: Line 3 - Final Assembly</Line>
                  <Line red>Injured: Carlos Mendez (QC Inspector)</Line>
                  <Line red>Injury: Hand caught in machinery (crush)</Line>
                  <Line red>Cause: Safety guard removed for maintenance</Line>
                  <Line red>Status: Medical leave (4-6 weeks)</Line>

                  <Divider />

                  <Line yellow bold>INVESTIGATION FINDINGS:</Line>
                  <Line>Safety guard not replaced after maintenance</Line>
                  <Line>Maintenance supervisor signed off without verification</Line>
                  <Line>Machine should have been tagged out (wasn't)</Line>
                  <Line red>Management determined "operator error" (disputed)</Line>
                </InsetBox>
                <InsetBox title="WORKER COMPLAINTS:">
                  <Line yellow bold>SAFETY VIOLATIONS REPORTED:</Line>
                  <Line yellow>• Inadequate machine guarding (12 reports)</Line>
                  <Line yellow>• Insufficient training (8 reports)</Line>
                  <Line yellow>• Broken safety equipment (15 reports)</Line>
                  <Line yellow>• Pressure to skip safety procedures (23 reports)</Line>
                  <Line red>All reports filed, minimal action taken by management</Line>
                </InsetBox>
                <InsetBox title="OSHA INSPECTION:">
                  <Line neon bold>LAST INSPECTION: 18 months ago</Line>
                  <Line>3 violations found, fines paid</Line>
                  <Line>Corrective actions implemented (minimal)</Line>
                  <Line yellow>Workers report conditions have deteriorated since</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Union Communications": {
            // password: {
            //   pw: "solidarity",
            //   hint: "The core principle of union organizing",
            //   difficulty: "medium",
            //   content: <Locked theme="terminal" title="UNION NETWORK" />
            // },
            content: (
              <MaintenanceAccess
                title="[UNOFFICIAL UNION NETWORK]"
                deviceModel="Worker Organizing Communications"
                deviceId="UNION-NET-01"
                firmwareVersion="v1.0.0"
                systemStatus="MONITORED"
                notes={[
                  "Worker organizing communications",
                  "Led by Viktor Sokolov and ~30 core organizers",
                  "Support from ~60% of workforce",
                  "⚠ Communications monitored by corporate security"
                ]}
              >
                <Divider />
                <InsetBox title="ABOUT:">
                  <Line>Unofficial worker network organizing for formal union recognition</Line>
                  <Line>Led by Viktor Sokolov and ~30 core organizers</Line>
                  <Line>Support from ~60% of workforce (estimated)</Line>
                  <Line>Management actively opposes unionization</Line>
                  <Line yellow>Communications monitored by corporate security</Line>
                </InsetBox>
                <InsetBox title="RECENT MESSAGES:">
                  <Line neon bold>FROM: Viktor Sokolov</Line>
                  <Line smoke>Subject: Safety Meeting - Night Shift</Line>
                  <Line>"Another injury on Line 3. Management calls it 'operator error' but we all know the guard was missing. Meeting Friday night, 23:00, break room. Pass it on quietly."</Line>

                  <Divider />

                  <Line neon bold>FROM: Maya Patel</Line>
                  <Line smoke>Subject: Overtime Refusal</Line>
                  <Line>"They're forcing mandatory overtime again. Line 3 behind quota because equipment keeps breaking, not our fault. Can we refuse collectively? Legal advice needed."</Line>

                  <Divider />

                  <Line neon bold>FROM: Anonymous</Line>
                  <Line smoke>Subject: Warning</Line>
                  <Line>"Security chief Marcus Webb asking questions about Viktor. Someone talking to management. Be careful who you trust."</Line>
                </InsetBox>
                <InsetBox title="ORGANIZING GOALS - PRIMARY DEMANDS:">
                  <Line cyan>1. Formal union recognition</Line>
                  <Line cyan>2. Improved safety standards</Line>
                  <Line cyan>3. Fair overtime compensation</Line>
                  <Line cyan>4. Protection from retaliation</Line>
                  <Line cyan>5. Grievance process for violations</Line>
                </InsetBox>
                <InsetBox title="CHALLENGES - OBSTACLES TO ORGANIZING:">
                  <Line red>• Management surveillance and intimidation</Line>
                  <Line red>• Fear of job loss (workers need income)</Line>
                  <Line red>• Possible informants within workforce</Line>
                  <Line red>• Corporate security interference</Line>
                  <Line red>• Legal barriers to union certification</Line>
                </InsetBox>
                <InsetBox title="NEXT STEPS - PLANNED ACTIONS:">
                  <Line yellow>• Formal vote on union representation (date TBD)</Line>
                  <Line yellow>• Contact external union for support</Line>
                  <Line yellow>• Document all safety violations (build case)</Line>
                  <Line yellow>• Coordinate with Community Outreach (The 55)</Line>
                  <Line yellow>• Prepare for possible walkout/strike</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_KAYTELL_MANUFACTURING_COMMANDS;
