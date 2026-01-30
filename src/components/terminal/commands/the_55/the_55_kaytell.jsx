import {
  PublicPortal,
  Message,
  PersonnelFile,
  ShiftSchedule,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
} from "@terminal/TerminalComponents";

export const THE_55_KAYTELL_MANUFACTURING_COMMANDS = {
  "Kaytell Manufacturing (Levels 148-170)": {
    content: (
      <PublicPortal
        network="KAYTELL_EMPLOYEE"
        signalStrength="strong"
        status="✓ OPERATIONAL"
        statusColor="neon"
        nowPlaying="Corporate radio - Productivity music and safety reminders"
        notes={[
          "Kaytell Manufacturing Concern facility",
          "22 floors of factory production",
          "Employee services on-site",
          "Strict safety protocols in effect",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Facility Overview": {
        content: (
          <>
            <Line cyan large bold>[KAYTELL MANUFACTURING CONCERN]</Line>
            <Line smoke>Levels 148-170 | Production facility</Line>
            <Divider />

            <Section title="ABOUT">
              <Line>Major manufacturing facility within Stack #95563</Line>
              <Line>Produces consumer electronics and components</Line>
              <Line>Operates 24/7 with rotating shift schedule</Line>
              <Line>Employs ~200 workers across all shifts</Line>
            </Section>

            <Section title="FACILITY LAYOUT">
              <Line neon bold>FLOORS 148-160: PRODUCTION</Line>
              <Line>Main factory floor, assembly lines, quality control</Line>
              <Line>Heavy machinery, conveyor systems</Line>
              <Line>Highest security, restricted access</Line>
              <Divider />

              <Line neon bold>FLOORS 161-165: LOGISTICS</Line>
              <Line>Shipping/receiving, inventory, loading docks</Line>
              <Line>Warehouse storage, material handling</Line>
              <Divider />

              <Line neon bold>FLOORS 166-170: SUPPORT</Line>
              <Line>Offices, break rooms, employee facilities</Line>
              <Line>Management, HR, security station</Line>
            </Section>

            <Section title="EMPLOYEE SERVICES">
              <Line>• Company cafeteria (subsidized meals)</Line>
              <Line>• Medical bay (work injuries only)</Line>
              <Line>• Locker rooms and showers</Line>
              <Line>• Break rooms (limited)</Line>
              <Line>• Union office (unofficial, tolerated)</Line>
            </Section>

            <Section title="SECURITY">
              <Line yellow>⚠ CORPORATE SECURITY ACTIVE:</Line>
              <Line>Badge access required for all areas</Line>
              <Line>Cameras throughout facility</Line>
              <Line>Armed security at main entrance</Line>
              <Line>Random bag checks and searches</Line>
            </Section>
          </>
        ),
      },

      "Employee Directory": {
        content: (
          <>
            <Line cyan large bold>[KAYTELL EMPLOYEE DIRECTORY]</Line>
            <Line smoke>Notable personnel | ~200 total employees</Line>
            <Divider />

            <Section title="MANAGEMENT & OFFICE">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Gale Lannister - Facility Manager</Line>
              <Line>• Hiro Tanaka - Production Supervisor</Line>
              <Line>• Sarah Chen - Quality Control Lead</Line>
              <Line>• Marcus Webb - Security Chief</Line>
              <Line>• Elena Rodriguez - HR Representative</Line>
            </Section>

            <Section title="FLOOR WORKERS">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Viktor Sokolov - Line Worker, Union Organizer</Line>
              <Line>• Maya Patel - Assembly Specialist</Line>
              <Line>• James "Jimmy" O'Brien - Maintenance Tech</Line>
              <Line>• Lin Zhang - Forklift Operator</Line>
              <Line>• Carlos Mendez - Quality Inspector</Line>
            </Section>

            <Section title="LOGISTICS & WAREHOUSE">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Andre Johnson - Warehouse Supervisor</Line>
              <Line>• Keiko Yamada - Inventory Specialist</Line>
              <Line>• Dmitri Volkov - Loading Dock Lead</Line>
            </Section>

            <Section title="SUPPORT STAFF">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Dr. Amara Okafor - Medical Officer</Line>
              <Line>• Rosa Martinez - Cafeteria Manager</Line>
              <Line>• Tom "Wrench" Anderson - Senior Maintenance</Line>
            </Section>
          </>
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
                  "Rumored to receive bonuses for anti-union success",
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
                  "Stressed and overworked",
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
                  "Excellent relationship with floor workers",
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
                  "Been written up multiple times for 'insubordination'",
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
                  "Dreams of starting own business someday",
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
                  "Could sabotage production if motivated (hasn't)",
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
                  "Would testify in lawsuit if workers filed",
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
                  "Knows where bodies are buried (figuratively... probably)",
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

      access_kaytell_systems: {
        password: {
          pw: "kaytell",
          hint: "The name of the manufacturing company",
          hintStrength: 1,
        },
        content: (
          <Message
            name="KAYTELL MANUFACTURING SYSTEMS"
            message="EMPLOYEE ACCESS GRANTED"
            networkInfo="⚠ Production systems - Authorized personnel only"
            theme="corporate"
          />
        ),
        related_commands: {
          "Production Schedules": {
            content: (
              <>
                <Line cyan large bold>[PRODUCTION SCHEDULE]</Line>
                <Line smoke>Current production targets and status</Line>
                <Divider />

                <Section title="ACTIVE PRODUCTION LINES">
                  <Line neon bold>LINE 1 - CONSUMER ELECTRONICS:</Line>
                  <KeyValue label="Product" value="Smartwatches (Model KT-7)" />
                  <KeyValue label="Daily Target" value="2,400 units" />
                  <KeyValue label="Current Output" value="2,180 units (91%)" />
                  <KeyValue label="Status" value="🟡 Behind target" />
                  <Divider />

                  <Line neon bold>LINE 2 - COMPONENT ASSEMBLY:</Line>
                  <KeyValue label="Product" value="Circuit boards (Various)" />
                  <KeyValue label="Daily Target" value="8,000 units" />
                  <KeyValue label="Current Output" value="8,420 units (105%)" />
                  <KeyValue label="Status" value="🟢 Exceeding target" />
                  <Divider />

                  <Line neon bold>LINE 3 - FINAL ASSEMBLY:</Line>
                  <KeyValue label="Product" value="Tablets (Model KT-Pro 4)" />
                  <KeyValue label="Daily Target" value="1,200 units" />
                  <KeyValue label="Current Output" value="987 units (82%)" />
                  <KeyValue label="Status" value="🔴 Significantly behind" />
                </Section>

                <Section title="PERFORMANCE ISSUES">
                  <Line yellow>⚠ LINE 3 CHRONIC UNDERPERFORMANCE:</Line>
                  <Line>Behind target for 12 consecutive days</Line>
                  <Line>Causes: Equipment breakdowns, worker shortages</Line>
                  <Line>Management pressure increasing on supervisors</Line>
                  <Line red>Mandatory overtime instituted (worker complaints)</Line>
                </Section>

                <Section title="UPCOMING ORDERS">
                  <Line neon bold>PRIORITY CONTRACTS:</Line>
                  <Line>• 50,000 smartwatches (Due: 2 weeks)</Line>
                  <Line>• 100,000 circuit boards (Due: 3 weeks)</Line>
                  <Line>• 20,000 tablets (Due: 1 month)</Line>
                  <Line yellow>⚠ Line 3 delays may cause contract breach</Line>
                </Section>
              </>
            ),
          },

          "Quality Control Logs": {
            content: (
              <>
                <Line cyan large bold>[QUALITY CONTROL LOGS]</Line>
                <Line smoke>Product testing and defect tracking</Line>
                <Divider />

                <Section title="DEFECT RATES (Last 30 Days)">
                  <DataTable
                    data={[
                      { label: "Line 1 (Smartwatches)", value: "3.2% defect rate" },
                      { label: "Line 2 (Circuit boards)", value: "1.8% defect rate" },
                      { label: "Line 3 (Tablets)", value: "7.4% defect rate" },
                    ]}
                  />
                  <Line red>⚠ Line 3 exceeds acceptable threshold (5%)</Line>
                </Section>

                <Section title="COMMON DEFECTS">
                  <Line neon bold>LINE 1:</Line>
                  <Line>• Touchscreen sensitivity issues (1.8%)</Line>
                  <Line>• Battery connection failures (0.9%)</Line>
                  <Line>• Cosmetic defects (0.5%)</Line>
                  <Divider />

                  <Line neon bold>LINE 2:</Line>
                  <Line>• Solder joint failures (1.1%)</Line>
                  <Line>• Component misalignment (0.7%)</Line>
                  <Divider />

                  <Line neon bold>LINE 3:</Line>
                  <Line>• Screen defects (3.2%)</Line>
                  <Line>• Housing assembly issues (2.8%)</Line>
                  <Line>• Software installation failures (1.4%)</Line>
                </Section>

                <Section title="QC LEAD NOTES (Sarah Chen)">
                  <Line yellow bold>⚠ REPEATED CONCERNS:</Line>
                  <Line>
                    "Line 3 defect rate unacceptable. Root cause: rushed production due to
                    quotas."
                  </Line>
                  <Line>
                    "Recommended: Slow line speed 15%, allow proper assembly time. Management
                    denied."
                  </Line>
                  <Line>
                    "Flagged 47 units with critical defects. Management overrode, shipped
                    anyway."
                  </Line>
                  <Line red>
                    "Documented for liability purposes. Will not take responsibility for
                    shipped defects."
                  </Line>
                </Section>
              </>
            ),
          },

          "Safety Incidents": {
            content: (
              <>
                <Line cyan large bold>[SAFETY INCIDENT LOG]</Line>
                <Line smoke>Workplace injuries and accidents</Line>
                <Divider />

                <Section title="INCIDENTS (Last 30 Days)">
                  <Line red bold>TOTAL INCIDENTS: 14</Line>
                  <DataTable
                    data={[
                      { label: "Minor injuries", value: "9 (cuts, bruises)" },
                      { label: "Moderate injuries", value: "4 (sprains, burns)" },
                      { label: "Serious injuries", value: "1 (crush injury)" },
                      { label: "Fatalities", value: "0" },
                    ]}
                  />
                </Section>

                <Section title="RECENT SERIOUS INCIDENT">
                  <Line red bold>INCIDENT #KMC-2026-047 (3 days ago):</Line>
                  <KeyValue label="Location" value="Line 3 - Final Assembly" />
                  <KeyValue label="Injured" value="Carlos Mendez (QC Inspector)" />
                  <KeyValue label="Injury" value="Hand caught in machinery (crush)" />
                  <KeyValue label="Cause" value="Safety guard removed for maintenance" />
                  <KeyValue label="Status" value="Medical leave (4-6 weeks)" />
                  <Divider />

                  <Line yellow bold>INVESTIGATION FINDINGS:</Line>
                  <Line>Safety guard not replaced after maintenance</Line>
                  <Line>Maintenance supervisor signed off without verification</Line>
                  <Line>Machine should have been tagged out (wasn't)</Line>
                  <Line red>Management determined "operator error" (disputed)</Line>
                </Section>

                <Section title="WORKER COMPLAINTS">
                  <Line yellow>⚠ SAFETY VIOLATIONS REPORTED:</Line>
                  <Line>• Inadequate machine guarding (12 reports)</Line>
                  <Line>• Insufficient training (8 reports)</Line>
                  <Line>• Broken safety equipment (15 reports)</Line>
                  <Line>• Pressure to skip safety procedures (23 reports)</Line>
                  <Line red>All reports filed, minimal action taken by management</Line>
                </Section>

                <Section title="OSHA INSPECTION">
                  <Line neon bold>LAST INSPECTION: 18 months ago</Line>
                  <Line>3 violations found, fines paid</Line>
                  <Line>Corrective actions implemented (minimal)</Line>
                  <Line yellow>Workers report conditions have deteriorated since</Line>
                </Section>
              </>
            ),
          },

          "Union Communications": {
            password: {
              pw: "solidarity",
              hint: "The core principle of union organizing (togetherness)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[UNOFFICIAL UNION NETWORK]</Line>
                <Line smoke>Worker organizing communications</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>
                    Unofficial worker network organizing for formal union recognition
                  </Line>
                  <Line>Led by Viktor Sokolov and ~30 core organizers</Line>
                  <Line>Support from ~60% of workforce (estimated)</Line>
                  <Line>Management actively opposes unionization</Line>
                  <Line yellow>⚠ Communications monitored by corporate security</Line>
                </Section>

                <Section title="RECENT MESSAGES">
                  <Line neon bold>FROM: Viktor Sokolov</Line>
                  <Line smoke>Subject: Safety Meeting - Night Shift</Line>
                  <Line>
                    "Another injury on Line 3. Management calls it 'operator error' but we
                    all know the guard was missing. Meeting Friday night, 23:00, break room.
                    Pass it on quietly."
                  </Line>
                  <Divider />

                  <Line neon bold>FROM: Maya Patel</Line>
                  <Line smoke>Subject: Overtime Refusal</Line>
                  <Line>
                    "They're forcing mandatory overtime again. Line 3 behind quota because
                    equipment keeps breaking, not our fault. Can we refuse collectively?
                    Legal advice needed."
                  </Line>
                  <Divider />

                  <Line neon bold>FROM: Anonymous</Line>
                  <Line smoke>Subject: Warning</Line>
                  <Line>
                    "Security chief Marcus Webb asking questions about Viktor. Someone
                    talking to management. Be careful who you trust."
                  </Line>
                </Section>

                <Section title="ORGANIZING GOALS">
                  <Line neon bold>PRIMARY DEMANDS:</Line>
                  <Line>1. Formal union recognition</Line>
                  <Line>2. Improved safety standards</Line>
                  <Line>3. Fair overtime compensation</Line>
                  <Line>4. Protection from retaliation</Line>
                  <Line>5. Grievance process for violations</Line>
                </Section>

                <Section title="CHALLENGES">
                  <Line red>⚠ OBSTACLES TO ORGANIZING:</Line>
                  <Line>• Management surveillance and intimidation</Line>
                  <Line>• Fear of job loss (workers need income)</Line>
                  <Line>• Possible informants within workforce</Line>
                  <Line>• Corporate security interference</Line>
                  <Line>• Legal barriers to union certification</Line>
                </Section>

                <Section title="NEXT STEPS">
                  <Line yellow bold>PLANNED ACTIONS:</Line>
                  <Line>• Formal vote on union representation (date TBD)</Line>
                  <Line>• Contact external union for support</Line>
                  <Line>• Document all safety violations (build case)</Line>
                  <Line>• Coordinate with Community Outreach (The 55)</Line>
                  <Line>• Prepare for possible walkout/strike</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_KAYTELL_MANUFACTURING_COMMANDS;
