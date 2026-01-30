import {
  PublicPortal,
  InternalAccess,
  PersonnelFile,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  Box,
} from "@terminal/TerminalComponents";

export const THE_55_GREEN_ZONE_COMMANDS = {
  "TG Labs Green Zone (Levels 171-200)": {
    content: (
      <PublicPortal
        network="GREEN_ZONE_PUBLIC"
        signalStrength="strong"
        status="✓ RESTRICTED ACCESS"
        statusColor="yellow"
        nowPlaying="Serene corporate ambiance and wellness messaging"
        notes={[
          "Corporate barrier separating upper and lower stack",
          "Credit balance required for access",
          "Lush gardens, clean air, premium amenities",
          "30 floors of privilege and exclusion",
        ]}
        theme="secure"
      />
    ),
    related_commands: {
      "Green Zone Overview": {
        content: (
          <>
            <Line cyan large bold>[TG LABS GREEN ZONE]</Line>
            <Line smoke>Levels 171-200 | Corporate access barrier</Line>
            <Divider />

            <Box color="yellow">
              <Line bold>⚠ ACCESS RESTRICTED</Line>
              <Line>Minimum 10,000¤ credit balance required for entry</Line>
              <Line>Facial recognition and credit verification at all entrances</Line>
              <Line>Unauthorized entry results in immediate security response</Line>
            </Box>

            <Section title="ABOUT">
              <Line>Corporate-maintained barrier between lower and upper stack</Line>
              <Line>Owned and operated by TG Labs corporation</Line>
              <Line>Serves as exclusive amenity zone for wealthy residents</Line>
              <Line>Also prevents lower-level residents from accessing upper floors</Line>
            </Section>

            <Section title="AMENITIES">
              <Line neon bold>AVAILABLE TO QUALIFIED RESIDENTS:</Line>
              <Line>• Lush vertical gardens (oxygen-rich environment)</Line>
              <Line>• Premium restaurants and cafes</Line>
              <Line>• Fitness centers and spas</Line>
              <Line>• Shopping boutiques</Line>
              <Line>• Medical clinics (private healthcare)</Line>
              <Line>• Business centers and meeting rooms</Line>
              <Line>• Parks and recreation spaces</Line>
            </Section>

            <Section title="ACCESS REQUIREMENTS">
              <DataTable
                data={[
                  { label: "Credit Balance", value: "10,000¤ minimum (verified)" },
                  { label: "Identity Check", value: "Facial recognition required" },
                  { label: "Background", value: "No outstanding warrants" },
                  { label: "Behavior", value: "Professional conduct mandatory" },
                ]}
              />
              <Line yellow>⚠ Violations result in permanent ban</Line>
            </Section>

            <Section title="SECURITY">
              <Line red bold>CORPORATE SECURITY PRESENCE:</Line>
              <Line>• Armed guards at all entrances (6 checkpoints)</Line>
              <Line>• Constant surveillance (cameras everywhere)</Line>
              <Line>• Automated credit verification systems</Line>
              <Line>• Quick response teams (2 minutes anywhere in zone)</Line>
              <Line>• Direct line to TG Labs corporate security</Line>
            </Section>
          </>
        ),
      },

      "Access Procedures": {
        content: (
          <>
            <Line cyan large bold>[GREEN ZONE ACCESS PROCEDURES]</Line>
            <Line smoke>Entry requirements and verification process</Line>
            <Divider />

            <Section title="STANDARD ENTRY PROCESS">
              <Line neon bold>CHECKPOINT VERIFICATION (6 locations):</Line>
              <Line>1. Approach checkpoint gate</Line>
              <Line>2. Facial recognition scan (automated)</Line>
              <Line>3. Credit balance verification (real-time)</Line>
              <Line>4. Background check (warrant database)</Line>
              <Line>5. Access granted or denied (2-5 seconds)</Line>
              <Divider />

              <Line yellow>⚠ DENIAL REASONS:</Line>
              <Line>• Insufficient credit balance (&lt;10,000¤)</Line>
              <Line>• Outstanding warrants or legal issues</Line>
              <Line>• Previous ban from Green Zone</Line>
              <Line>• Suspected criminal activity</Line>
              <Line>• Failed identity verification</Line>
            </Section>

            <Section title="CHECKPOINT LOCATIONS">
              <Line neon>6 ENTRY POINTS FROM LOWER STACK:</Line>
              <Line>• North Gate (Level 171) - Main entrance</Line>
              <Line>• South Gate (Level 171) - Secondary entrance</Line>
              <Line>• East Gate (Level 175) - Shopping district access</Line>
              <Line>• West Gate (Level 175) - Residential access</Line>
              <Line>• Service Entrance (Level 171) - Staff only</Line>
              <Line>• Emergency Exit (Level 200) - Locked from inside</Line>
            </Section>

            <Section title="BYPASS METHODS (Unofficial)">
              <Line red bold>⚠ KNOWN VULNERABILITIES:</Line>
              <Line>• Service entrance (employee badges can be forged, DR14)</Line>
              <Line>• Maintenance tunnels (access from Kaytell, DR16 to find)</Line>
              <Line>• Bribed guards (2,000¤ per entry, rare, risky)</Line>
              <Line>• Identity spoofing (requires hacking, DR16)</Line>
              <Line yellow>All methods carry risk of detection and prosecution</Line>
            </Section>

            <Section title="VISITOR PASSES">
              <Line neon bold>TEMPORARY ACCESS (24 hours):</Line>
              <Line>Sponsored by Green Zone resident (1,000¤ deposit)</Line>
              <Line>Visitor must stay with sponsor at all times</Line>
              <Line>Limited to specific approved areas</Line>
              <Line>Sponsor liable for visitor's conduct</Line>
              <Line yellow>⚠ Rarely granted to lower-level residents</Line>
            </Section>
          </>
        ),
      },

      "Notable Locations": {
        content: (
          <>
            <Line cyan large bold>[GREEN ZONE LOCATIONS]</Line>
            <Line smoke>Key facilities and attractions</Line>
            <Divider />

            <Section title="LEVEL 171-175: COMMERCIAL">
              <Line neon bold>THE GARDEN PROMENADE:</Line>
              <Line>Vertical gardens with lush vegetation</Line>
              <Line>Clean air, natural light, peaceful atmosphere</Line>
              <Line>Walking paths, seating areas, water features</Line>
              <Divider />

              <Line neon bold>AZURE DINING:</Line>
              <Line>Premium restaurant (prix fixe 200¤)</Line>
              <Line>Reservation required (weeks in advance)</Line>
              <Line>Celebrity chef, molecular gastronomy</Line>
              <Divider />

              <Line neon bold>BOUTIQUE ROW:</Line>
              <Line>High-end fashion and luxury goods</Line>
              <Line>Designer clothing, jewelry, accessories</Line>
              <Line>Prices start at 500¤</Line>
            </Section>

            <Section title="LEVEL 176-185: WELLNESS">
              <Line neon bold>VITALITY FITNESS CENTER:</Line>
              <Line>State-of-the-art gym equipment</Line>
              <Line>Personal trainers, yoga studios</Line>
              <Line>Membership: 500¤/month</Line>
              <Divider />

              <Line neon bold>SERENITY SPA:</Line>
              <Line>Full-service spa and wellness center</Line>
              <Line>Massage, facials, body treatments</Line>
              <Line>Treatments: 200¤-800¤</Line>
              <Divider />

              <Line neon bold>TG MEDICAL CLINIC:</Line>
              <Line>Private healthcare facility</Line>
              <Line>Advanced diagnostics, treatments</Line>
              <Line>No wait times, premium care</Line>
            </Section>

            <Section title="LEVEL 186-195: RESIDENTIAL">
              <Line neon bold>EDEN APARTMENTS:</Line>
              <Line>Luxury housing for corp employees</Line>
              <Line>Spacious units, premium finishes</Line>
              <Line>Rent: 3,000¤-8,000¤/month</Line>
              <Divider />

              <Line neon bold>THE COMMONS:</Line>
              <Line>Shared recreational spaces</Line>
              <Line>Pools, lounges, game rooms</Line>
              <Line>Residents only</Line>
            </Section>

            <Section title="LEVEL 196-200: CORPORATE">
              <Line neon bold>TG LABS OFFICES:</Line>
              <Line>Corporate headquarters and research</Line>
              <Line>High security, restricted access</Line>
              <Line>Employee badge required</Line>
              <Divider />

              <Line neon bold>THE ENRICHMENT CENTRE:</Line>
              <Line>Research facility (classified)</Line>
              <Line>Unknown experiments and projects</Line>
              <Line>Heavy security, no public access</Line>
              <Line red>⚠ Rumors of unethical research</Line>
            </Section>
          </>
        ),
        related_commands: {
          "The Enrichment Centre": {
            content: (
              <>
                <Line cyan large bold>[THE ENRICHMENT CENTRE]</Line>
                <Line smoke>Level 198-200 | TG Labs research facility</Line>
                <Divider />

                <Box color="red">
                  <Line bold>🚨 MAXIMUM SECURITY - NO PUBLIC ACCESS</Line>
                  <Line>TG Labs' most classified research facility</Line>
                  <Line>Armed guards, biometric access, surveillance</Line>
                  <Line>Unauthorized entry is corporate espionage (prison time)</Line>
                </Box>

                <Section title="OFFICIAL DESCRIPTION">
                  <Line>TG Labs describes The Enrichment Centre as:</Line>
                  <Line>
                    "A cutting-edge research facility dedicated to advancing human
                    potential through biotechnology, neural enhancement, and medical
                    innovation."
                  </Line>
                </Section>

                <Section title="RUMORS & SPECULATION">
                  <Line yellow bold>⚠ UNCONFIRMED REPORTS:</Line>
                  <Line>• Human experimentation (voluntary and otherwise)</Line>
                  <Line>• Neural interface development (military contracts)</Line>
                  <Line>• Consciousness uploading research</Line>
                  <Line>• Illegal nano-technology testing</Line>
                  <Line>• "Disappeared" test subjects</Line>
                  <Line>• Genetic modification experiments</Line>
                </Section>

                <Section title="MISSING PERSONS">
                  <Line red bold>UNEXPLAINED DISAPPEARANCES:</Line>
                  <Line>47 residents reported missing (last 3 years)</Line>
                  <Line>All last seen near Green Zone</Line>
                  <Line>TG Labs denies any connection</Line>
                  <Line>C.O.P. investigation inconclusive</Line>
                  <Line yellow>Community Outreach suspects foul play</Line>
                </Section>

                <Section title="SECURITY MEASURES">
                  <Line neon bold>ACCESS RESTRICTIONS:</Line>
                  <Line>• Level 5 clearance minimum (TG Labs employees only)</Line>
                  <Line>• Biometric scanners at all doors</Line>
                  <Line>• Armed security patrols (24/7)</Line>
                  <Line>• No windows or external views</Line>
                  <Line>• Electronic jamming (no unauthorized devices)</Line>
                  <Line>• Memory wipe protocols for visitors (rumored)</Line>
                </Section>

                <Section title="KNOWN EMPLOYEES">
                  <Line>Very few confirmed employees</Line>
                  <Line>Most staff housing inside facility</Line>
                  <Line>NDAs and non-compete agreements standard</Line>
                  <Line yellow>⚠ Whistleblowers have "accidents"</Line>
                </Section>
              </>
            ),
          },

          "Azure Dining": {
            content: (
              <>
                <Line cyan large bold>[AZURE DINING]</Line>
                <Line smoke>Level 173 | Premium restaurant</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>High-end restaurant in Green Zone</Line>
                  <Line>Celebrity chef Kenji Nakamura</Line>
                  <Line>Molecular gastronomy, seasonal tasting menus</Line>
                  <Line>Reservation-only (weeks in advance)</Line>
                </Section>

                <Section title="MENU">
                  <Line neon bold>PRIX FIXE TASTING MENU (200¤):</Line>
                  <Line>8 courses, wine pairings included</Line>
                  <Line>Changes seasonally</Line>
                  <Line>Dietary restrictions accommodated</Line>
                  <Divider />

                  <Line neon bold>CURRENT OFFERINGS:</Line>
                  <Line>• Amuse-bouche (Chef's choice)</Line>
                  <Line>• Oyster with yuzu foam</Line>
                  <Line>• Aged beef tartare, quail egg</Line>
                  <Line>• Uni risotto, gold leaf</Line>
                  <Line>• Seared scallop, cauliflower purée</Line>
                  <Line>• Wagyu beef, miso glaze</Line>
                  <Line>• Palate cleanser (sorbet)</Line>
                  <Line>• Chocolate sphere, espresso center</Line>
                </Section>

                <Section title="ATMOSPHERE">
                  <Line>Intimate dining room (20 seats)</Line>
                  <Line>Floor-to-ceiling windows overlooking gardens</Line>
                  <Line>Soft lighting, live music (pianist)</Line>
                  <Line>Service impeccable, formal attire required</Line>
                </Section>

                <Section title="CLIENTELE">
                  <Line>Corporate executives</Line>
                  <Line>Wealthy upper-level residents</Line>
                  <Line>Spectral Luxvitae penthouse dwellers</Line>
                  <Line>Occasional celebrity sightings</Line>
                </Section>
              </>
            ),
          },
        },
      },

      "Personnel Directory": {
        content: (
          <>
            <Line cyan large bold>[GREEN ZONE PERSONNEL]</Line>
            <Line smoke>Notable staff and residents</Line>
            <Divider />

            <Section title="SECURITY & MANAGEMENT">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Director Chen Wei - Green Zone Administrator</Line>
              <Line>• Captain Elena Voronin - Security Chief</Line>
              <Line>• Marcus Trent - Checkpoint Supervisor</Line>
            </Section>

            <Section title="SERVICE STAFF">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Sofia Ramirez - Concierge Manager</Line>
              <Line>• Dr. Yuki Tanaka - TG Medical Clinic Director</Line>
              <Line>• Chef Kenji Nakamura - Azure Dining (Celebrity)</Line>
            </Section>

            <Section title="NOTABLE RESIDENTS">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Julian Cross - Media Mogul (Eden Apartments)</Line>
              <Line>• Dr. Aria Blackwell - Research Scientist (TG Labs)</Line>
              <Line>• Victoria Sterling - Corporate Lawyer (Eden Apartments)</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Director Chen Wei": {
            content: (
              <PersonnelFile
                employeeId="GZ-DIR-001"
                name="Director Chen Wei"
                age={52}
                position="Green Zone Administrator"
                department="TG Labs Management"
                hireDate="9 years ago"
                supervisor="TG Labs Corporate (off-site)"
                clearanceLevel={5}
                district="Green Zone"
                performance={94}
                notes={[
                  "Oversees all Green Zone operations",
                  "Firm believer in credit-based access system",
                  "Views lower-level residents as security risk",
                  "Efficient administrator, no tolerance for rule-breaking",
                  "Has final say on access disputes",
                  "Rumored to receive bonuses for limiting lower-level access",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Captain Elena Voronin": {
            content: (
              <PersonnelFile
                employeeId="GZ-SEC-001"
                name="Captain Elena Voronin"
                age={41}
                position="Security Chief"
                department="Green Zone Security"
                hireDate="6 years ago"
                supervisor="Director Chen Wei"
                clearanceLevel={4}
                district="Green Zone"
                performance={91}
                notes={[
                  "Former military, highly disciplined",
                  "Commands 40+ security personnel",
                  "Zero-tolerance policy for security breaches",
                  "Respected by guards, feared by troublemakers",
                  "Personally investigates all serious incidents",
                  "Secretly sympathetic to lower-level struggles (won't act on it)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dr. Aria Blackwell": {
            content: (
              <PersonnelFile
                employeeId="GZ-RES-047"
                name="Dr. Aria Blackwell"
                age={36}
                position="Senior Research Scientist"
                department="TG Labs - Enrichment Centre"
                hireDate="4 years ago"
                supervisor="Classified"
                clearanceLevel={5}
                district="Green Zone (Eden Apartments)"
                performance={null}
                notes={[
                  "Works at The Enrichment Centre (classified research)",
                  "Brilliant but morally ambiguous",
                  "Specializes in neural interface technology",
                  "Under strict NDA, never discusses work",
                  "Lives in Eden Apartments (rarely leaves Green Zone)",
                  "Rumored involvement in controversial experiments",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Marcus Trent": {
            content: (
              <PersonnelFile
                employeeId="GZ-SEC-015"
                name="Marcus Trent"
                age={34}
                position="Checkpoint Supervisor"
                department="Green Zone Security"
                hireDate="3 years ago"
                supervisor="Captain Elena Voronin"
                clearanceLevel={3}
                district="Green Zone"
                performance={79}
                notes={[
                  "Supervises North Gate checkpoint (main entrance)",
                  "By-the-book approach to security",
                  "Occasionally accepts bribes (2,000¤ for entry)",
                  "Careful to never be caught, covers tracks well",
                  "Gambling debts motivate corruption",
                  "Vulnerable to blackmail if discovered",
                ]}
                status="ACTIVE - COMPROMISED"
              />
            ),
          },

          "Sofia Ramirez": {
            content: (
              <PersonnelFile
                employeeId="GZ-SRV-008"
                name="Sofia Ramirez"
                age={29}
                position="Concierge Manager"
                department="Guest Services"
                hireDate="5 years ago"
                supervisor="Director Chen Wei"
                clearanceLevel={2}
                district="Green Zone"
                performance={88}
                notes={[
                  "Manages visitor passes and guest services",
                  "Professional, courteous, extremely organized",
                  "Grew up in lower levels (rare for Green Zone staff)",
                  "Quietly helps lower-level residents when possible",
                  "Knows how to work the system without getting caught",
                  "Information broker (will trade intel for favors)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dr. Yuki Tanaka": {
            content: (
              <PersonnelFile
                employeeId="GZ-MED-001"
                name="Dr. Yuki Tanaka"
                age={44}
                position="Medical Director"
                department="TG Medical Clinic"
                hireDate="7 years ago"
                supervisor="Director Chen Wei"
                clearanceLevel={3}
                district="Green Zone"
                performance={93}
                notes={[
                  "Runs TG Medical Clinic (premium healthcare)",
                  "Excellent physician, cutting-edge treatments",
                  "Only treats Green Zone residents (corporate policy)",
                  "Frustrated by healthcare inequality",
                  "Secretly provides pro bono care to lower-level residents",
                  "Uses clinic resources off-hours (major risk)",
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      access_green_zone_security: {
        password: {
          pw: "credit",
          hint: "What you need a balance of to access the Green Zone",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="GREEN ZONE SECURITY SYSTEMS"
            message="SECURITY ACCESS GRANTED"
            networkInfo="⚠ Access control systems - Authorized personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Access Control Logs": {
            content: (
              <>
                <Line cyan large bold>[ACCESS CONTROL LOGS]</Line>
                <Line smoke>Entry/exit records | Last 24 hours</Line>
                <Divider />

                <Section title="CHECKPOINT ACTIVITY">
                  <DataTable
                    data={[
                      { label: "North Gate", value: "847 entries, 12 denials" },
                      { label: "South Gate", value: "623 entries, 18 denials" },
                      { label: "East Gate", value: "412 entries, 7 denials" },
                      { label: "West Gate", value: "389 entries, 9 denials" },
                      { label: "Service Entrance", value: "156 entries, 2 denials" },
                      { label: "Emergency Exit", value: "0 (exit only, alarmed)" },
                    ]}
                  />
                  <Line>Total entries: 2,427 | Total denials: 48 (1.9%)</Line>
                </Section>

                <Section title="DENIAL REASONS">
                  <DataTable
                    data={[
                      { label: "Insufficient credits", value: "31 (65%)" },
                      { label: "Outstanding warrants", value: "8 (17%)" },
                      { label: "Previous ban", value: "5 (10%)" },
                      { label: "Failed ID verification", value: "4 (8%)" },
                    ]}
                  />
                </Section>

                <Section title="RECENT INCIDENTS">
                  <Line yellow bold>⚠ FLAGGED EVENTS (Last 24 hours):</Line>
                  <Line>• 14:23 - Individual attempted entry with forged badge</Line>
                  <Line>  Location: Service Entrance | Status: Detained, handed to C.O.P.</Line>
                  <Divider />

                  <Line>• 19:47 - Altercation at North Gate checkpoint</Line>
                  <Line>
                    Individual denied entry, became aggressive with guard
                  </Line>
                  <Line>  Status: Escorted away, no arrest</Line>
                  <Divider />

                  <Line>• 02:15 - Suspicious activity near emergency exit</Line>
                  <Line>  Multiple individuals observed testing door (locked)</Line>
                  <Line>  Status: Patrol dispatched, individuals dispersed</Line>
                </Section>

                <Section title="VIP ACCESS">
                  <Line neon bold>HIGH-PRIORITY RESIDENTS (Last 24 hours):</Line>
                  <Line>• Julian Cross - 4 entries/exits (media mogul)</Line>
                  <Line>• Dr. Aria Blackwell - 2 entries/exits (TG Labs scientist)</Line>
                  <Line>• Victoria Sterling - 3 entries/exits (corporate lawyer)</Line>
                  <Line smoke>VIP access flagged for security priority</Line>
                </Section>
              </>
            ),
          },

          "Credit Verification Database": {
            password: {
              pw: "balance",
              hint: "What the system checks in your account (credit ____)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[CREDIT VERIFICATION DATABASE]</Line>
                <Line smoke>Real-time financial screening system</Line>
                <Divider />

                <Section title="SYSTEM OVERVIEW">
                  <Line>Automated credit balance verification at all checkpoints</Line>
                  <Line>Queries banking network in real-time (&lt;1 second)</Line>
                  <Line>Minimum threshold: 10,000¤ liquid funds</Line>
                  <Line>Updates continuously during Green Zone visit</Line>
                  <Line yellow>
                    ⚠ If balance drops below threshold while inside, ejection protocols
                    activate
                  </Line>
                </Section>

                <Section title="VERIFICATION PROCESS">
                  <Line neon bold>CHECKPOINT SCAN:</Line>
                  <Line>1. Facial recognition identifies individual</Line>
                  <Line>2. System queries linked bank accounts</Line>
                  <Line>3. Calculates total liquid assets</Line>
                  <Line>4. Checks against 10,000¤ minimum</Line>
                  <Line>5. Grant or deny access (2-5 seconds)</Line>
                </Section>

                <Section title="EXEMPTIONS">
                  <Line neon bold>BYPASS CREDIT CHECK:</Line>
                  <Line>• TG Labs employees (Level 3+ clearance)</Line>
                  <Line>• Green Zone service staff (on duty only)</Line>
                  <Line>• Sponsored visitors (temporary, 24 hours)</Line>
                  <Line>• Emergency personnel (medical, security)</Line>
                  <Line>• Corporate executives (director level+)</Line>
                </Section>

                <Section title="STATISTICS">
                  <Line yellow>RECENT TRENDS (Last 30 days):</Line>
                  <DataTable
                    data={[
                      { label: "Average entries per day", value: "2,400" },
                      { label: "Average denials per day", value: "50 (2%)" },
                      { label: "Highest denial day", value: "89 denials (3.7%)" },
                      { label: "Zero-denial days", value: "0 (always some denials)" },
                    ]}
                  />
                  <Line smoke>Denial rate increasing 0.3% month-over-month</Line>
                </Section>

                <Section title="VULNERABILITIES">
                  <Line red bold>⚠ KNOWN EXPLOITS:</Line>
                  <Line>• Identity spoofing (requires facial reconstruction, DR16)</Line>
                  <Line>• Banking system hack (temporarily inflate balance, DR18)</Line>
                  <Line>• Sponsored visitor fraud (forge sponsorship, DR14)</Line>
                  <Line>• Employee badge theft/forgery (DR14 to create)</Line>
                  <Line yellow>All exploits carry risk of detection and prosecution</Line>
                </Section>
              </>
            ),
          },

          "Missing Persons Database": {
            password: {
              pw: "enrichment",
              hint: "The name of TG Labs' research facility",
              hintStrength: 3,
            },
            content: (
              <>
                <Line cyan large bold>[MISSING PERSONS - GREEN ZONE RELATED]</Line>
                <Line smoke>Unexplained disappearances | Last 3 years</Line>
                <Divider />

                <Box color="red">
                  <Line bold>⚠ CLASSIFIED INFORMATION</Line>
                  <Line>47 missing persons cases linked to Green Zone</Line>
                  <Line>TG Labs denies involvement</Line>
                  <Line>Official investigations inconclusive</Line>
                </Box>

                <Section title="CASE SUMMARY">
                  <DataTable
                    data={[
                      { label: "Total cases", value: "47" },
                      { label: "Last seen in Green Zone", value: "39 (83%)" },
                      { label: "Last seen near Green Zone", value: "8 (17%)" },
                      { label: "Resolved cases", value: "0" },
                      { label: "Active investigations", value: "12" },
                      { label: "Cold cases", value: "35" },
                    ]}
                  />
                </Section>

                <Section title="VICTIM PROFILES">
                  <Line yellow bold>⚠ PATTERN ANALYSIS:</Line>
                  <Line>Demographics: Lower-level residents (100%)</Line>
                  <Line>Age range: 18-45 years old</Line>
                  <Line>Financial status: Desperate or in debt (89%)</Line>
                  <Line>Common factor: All responded to "research study" ads</Line>
                  <Line red>Ads traced to shell companies linked to TG Labs</Line>
                </Section>

                <Section title="NOTABLE CASES">
                  <Line neon bold>CASE #GZ-2024-031 (6 months ago):</Line>
                  <Line>Name: Marcus Chen, Age 28</Line>
                  <Line>Last seen: Green Zone Service Entrance</Line>
                  <Line>Details: Responded to ad for "paid medical trial"</Line>
                  <Line>Status: No body found, presumed alive</Line>
                  <Divider />

                  <Line neon bold>CASE #GZ-2025-008 (2 months ago):</Line>
                  <Line>Name: Sarah Kowalski, Age 34</Line>
                  <Line>Last seen: Near Enrichment Centre (visitor pass)</Line>
                  <Line>Details: Recruited for "cognitive enhancement study"</Line>
                  <Line>Status: Family filed missing persons, no leads</Line>
                  <Divider />

                  <Line neon bold>CASE #GZ-2025-015 (3 weeks ago):</Line>
                  <Line>Name: Diego Martinez, Age 23</Line>
                  <Line>Last seen: Azure Dining (worked as busboy)</Line>
                  <Line>Details: Offered "opportunity" by TG Labs recruiter</Line>
                  <Line>Status: Never returned home, phone inactive</Line>
                </Section>

                <Section title="INVESTIGATION STATUS">
                  <Line red bold>C.O.P. INVESTIGATION:</Line>
                  <Line>Official conclusion: "Insufficient evidence of foul play"</Line>
                  <Line>Cases remain open but inactive</Line>
                  <Line>TG Labs cooperation limited (corporate lawyers)</Line>
                  <Line yellow>⚠ Community Outreach suspects cover-up</Line>
                  <Divider />

                  <Line yellow bold>COMMUNITY OUTREACH THEORY:</Line>
                  <Line>TG Labs recruiting test subjects from lower levels</Line>
                  <Line>
                    Enrichment Centre conducting unauthorized human experiments
                  </Line>
                  <Line>Missing persons either dead or held against will</Line>
                  <Line>Corporate security protecting TG Labs interests</Line>
                  <Line red>No proof, but pattern too consistent to ignore</Line>
                </Section>

                <Section title="WARNINGS">
                  <Line red bold>🚨 COMMUNITY ALERT:</Line>
                  <Line>DO NOT respond to research study advertisements</Line>
                  <Line>DO NOT accept "opportunities" from TG Labs recruiters</Line>
                  <Line>DO NOT enter Enrichment Centre under any circumstances</Line>
                  <Line>REPORT suspicious recruitment to Community Outreach</Line>
                </Section>
              </>
            ),
          },

          "Security Patrol Routes": {
            content: (
              <>
                <Line cyan large bold>[SECURITY PATROL ROUTES]</Line>
                <Line smoke>Guard schedules and patrol patterns</Line>
                <Divider />

                <Section title="PATROL STRUCTURE">
                  <DataTable
                    data={[
                      { label: "Total security personnel", value: "42" },
                      { label: "Day shift (06:00-18:00)", value: "20 guards" },
                      { label: "Night shift (18:00-06:00)", value: "15 guards" },
                      { label: "Floating/relief", value: "7 guards" },
                    ]}
                  />
                </Section>

                <Section title="PATROL ZONES">
                  <Line neon bold>ZONE 1 - COMMERCIAL (Levels 171-175):</Line>
                  <Line>6 guards on patrol (15-minute rotation)</Line>
                  <Line>High visibility, frequent checkpoints</Line>
                  <Line>Focus: Shoplifting, disturbances</Line>
                  <Divider />

                  <Line neon bold>ZONE 2 - WELLNESS (Levels 176-185):</Line>
                  <Line>4 guards on patrol (20-minute rotation)</Line>
                  <Line>Lower traffic, relaxed presence</Line>
                  <Line>Focus: General security, medical emergencies</Line>
                  <Divider />

                  <Line neon bold>ZONE 3 - RESIDENTIAL (Levels 186-195):</Line>
                  <Line>5 guards on patrol (30-minute rotation)</Line>
                  <Line>Discreet presence, resident privacy respected</Line>
                  <Line>Focus: Unauthorized access, resident complaints</Line>
                  <Divider />

                  <Line neon bold>ZONE 4 - CORPORATE (Levels 196-200):</Line>
                  <Line>10 guards on patrol (constant coverage)</Line>
                  <Line>Maximum security, multiple checkpoints</Line>
                  <Line>Focus: Enrichment Centre, corporate espionage</Line>
                </Section>

                <Section title="RESPONSE TIMES">
                  <DataTable
                    data={[
                      { label: "Zone 1-2", value: "2 minutes average" },
                      { label: "Zone 3", value: "3 minutes average" },
                      { label: "Zone 4", value: "1 minute average (priority)" },
                      { label: "Emergency (all zones)", value: "< 90 seconds" },
                    ]}
                  />
                </Section>

                <Section title="SHIFT CHANGES">
                  <Line yellow>⚠ KNOWN VULNERABILITIES:</Line>
                  <Line>18:00 - Day to night shift transition (10-minute gap)</Line>
                  <Line>06:00 - Night to day shift transition (10-minute gap)</Line>
                  <Line>Lunch breaks: 12:00-13:00 (reduced coverage)</Line>
                  <Line>Weekend staffing: -20% (budget cuts)</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_GREEN_ZONE_COMMANDS;
