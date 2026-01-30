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

export const THE_55_SPECTRAL_LUXVITAE_COMMANDS = {
  "Spectral Luxvitae (Levels 265-331)": {
    content: (
      <PublicPortal
        network="LUXVITAE_GUEST"
        signalStrength="excellent"
        status="✓ RESIDENTS ONLY"
        statusColor="neon"
        nowPlaying="Classical music and ambient soundscapes"
        notes={[
          "67 floors of luxury penthouses",
          "Wealthiest residents in The 55",
          "Private security, concierge services",
          "Access restricted to residents and authorized guests",
        ]}
        theme="secure"
      />
    ),
    related_commands: {
      "Luxvitae Overview": {
        content: (
          <>
            <Line cyan large bold>[SPECTRAL LUXVITAE]</Line>
            <Line smoke>Levels 265-331 | Premium residential tower</Line>
            <Divider />

            <Box color="yellow">
              <Line bold>⚠ RESTRICTED ACCESS</Line>
              <Line>Residents and pre-approved guests only</Line>
              <Line>24/7 security, biometric access required</Line>
              <Line>Unauthorized entry is criminal trespass</Line>
            </Box>

            <Section title="ABOUT">
              <Line>67 floors of ultra-luxury penthouses</Line>
              <Line>Each unit occupies entire floor or multiple floors</Line>
              <Line>Wealthiest and most influential residents of The 55</Line>
              <Line>Private amenities, dedicated staff, maximum security</Line>
            </Section>

            <Section title="RESIDENTS">
              <Line neon bold>APPROXIMATE DEMOGRAPHICS:</Line>
              <DataTable
                data={[
                  { label: "Total units", value: "45 penthouses" },
                  { label: "Estimated residents", value: "~120 individuals" },
                  { label: "Corporate executives", value: "35%" },
                  { label: "Celebrities/influencers", value: "25%" },
                  { label: "Old money/inherited wealth", value: "20%" },
                  { label: "Criminal elite", value: "15% (suspected)" },
                  { label: "Other wealthy", value: "5%" },
                ]}
              />
            </Section>

            <Section title="AMENITIES">
              <Line neon>RESIDENT SERVICES:</Line>
              <Line>• 24/7 concierge and personal assistants</Line>
              <Line>• Private chef and catering services</Line>
              <Line>• In-unit spa and wellness treatments</Line>
              <Line>• Dedicated security details (per unit)</Line>
              <Line>• Helicopter pad access (roof level)</Line>
              <Line>• Private wine cellars and humidors</Line>
              <Line>• Smart home automation (cutting-edge)</Line>
              <Line>• Maintenance and housekeeping (daily)</Line>
            </Section>

            <Section title="COST OF LIVING">
              <Line yellow bold>ESTIMATED EXPENSES:</Line>
              <DataTable
                data={[
                  { label: "Monthly rent", value: "50,000¤ - 200,000¤ per unit" },
                  { label: "HOA fees", value: "10,000¤ - 30,000¤" },
                  { label: "Concierge service", value: "5,000¤ - 15,000¤" },
                  { label: "Security (private)", value: "10,000¤ - 40,000¤" },
                  {
                    label: "Total monthly",
                    value: "75,000¤ - 285,000¤ per household",
                  },
                ]}
              />
            </Section>

            <Section title="SECURITY">
              <Line red bold>MAXIMUM SECURITY PROTOCOLS:</Line>
              <Line>• Biometric access at all entry points</Line>
              <Line>• Armed security guards (24/7, 15+ personnel)</Line>
              <Line>• Facial recognition and surveillance</Line>
              <Line>• Elevator access restricted by floor</Line>
              <Line>• Panic rooms in every unit</Line>
              <Line>• Direct line to private security company</Line>
              <Line>• Background checks on all staff and visitors</Line>
            </Section>
          </>
        ),
      },

      "Notable Residents": {
        content: (
          <>
            <Line cyan large bold>[SPECTRAL LUXVITAE RESIDENT DIRECTORY]</Line>
            <Line smoke>High-profile inhabitants (partial list)</Line>
            <Divider />

            <Section title="CORPORATE ELITE">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Cassandra Vex - Tech CEO (Unit 301-302)</Line>
              <Line>• Alexander Hightower - Investment Banker (Unit 315)</Line>
              <Line>• Dr. Nathaniel Cross - Pharmaceutical Executive (Unit 289)</Line>
            </Section>

            <Section title="ENTERTAINMENT & MEDIA">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Stella Nova - Pop Star (Unit 295-296)</Line>
              <Line>• Julian Winters - Film Director (Unit 308)</Line>
              <Line>• Prophet Marcus Gold - Religious Leader (Unit 320)</Line>
            </Section>

            <Section title="OLD MONEY">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• The Ashford Family - Generational Wealth (Unit 325-328)</Line>
              <Line>• Lady Victoria Pembroke - Aristocrat (Unit 310)</Line>
            </Section>

            <Section title="CRIMINAL ELITE (Suspected)">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• "Mr. Silk" - Crime Boss (Unit 331, top floor)</Line>
              <Line>• Dmitri Volkov - Arms Dealer (Unit 318)</Line>
            </Section>

            <Section title="NOTABLE DETAILS">
              <Line yellow>⚠ PRIVACY CONCERNS:</Line>
              <Line>Most residents use aliases or shell companies</Line>
              <Line>Actual ownership often hidden behind layers</Line>
              <Line>Staff sign extensive NDAs</Line>
              <Line>Paparazzi and journalists banned from building</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Cassandra Vex": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-301"
                name="Cassandra Vex"
                age={41}
                position="Tech CEO"
                department="Founder & CEO - NexGen Systems"
                hireDate="Resident for 5 years"
                supervisor="None (business owner)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Unit 301-302)"
                performance={null}
                notes={[
                  "Founded NexGen Systems (AI and neural tech company)",
                  "Net worth estimated at 800 million credits",
                  "Occupies two full floors (14,000 sq ft total)",
                  "Rarely leaves penthouse (works remotely)",
                  "Rumored to be testing experimental neural implants on herself",
                  "Has connections to TG Labs and The Enrichment Centre",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Alexander Hightower": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-315"
                name="Alexander Hightower"
                age={56}
                position="Investment Banker"
                department="Managing Partner - Hightower Capital"
                hireDate="Resident for 8 years"
                supervisor="None (business owner)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Unit 315)"
                performance={null}
                notes={[
                  "Manages multi-billion credit investment fund",
                  "Net worth: 1.2 billion credits (personal)",
                  "Member of The Platinum Club",
                  "Connected to every major corporation in The City",
                  "Suspected of insider trading (unproven)",
                  "Divorced three times, currently single",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Stella Nova": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-295"
                name="Stella Nova"
                age={28}
                position="Pop Star"
                department="Recording Artist & Performer"
                hireDate="Resident for 2 years"
                supervisor="None (celebrity)"
                clearanceLevel={3}
                district="Spectral Luxvitae (Unit 295-296)"
                performance={null}
                notes={[
                  "International pop star, 50+ million fans",
                  "Net worth: 150 million credits",
                  "Two-floor penthouse with recording studio",
                  "Frequently hosts parties (noise complaints from neighbors)",
                  "Heavy security detail (paranoid about stalkers)",
                  "Secret: Clones of her live in The Shades (Capsule Closets)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Prophet Marcus Gold": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-320"
                name="Prophet Marcus Aurelius Gold"
                age={51}
                position="Religious Leader"
                department="Stadium of Prophets Returned"
                hireDate="Resident for 6 years"
                supervisor="None (self-appointed leader)"
                clearanceLevel={3}
                district="Spectral Luxvitae (Unit 320)"
                performance={null}
                notes={[
                  "Leader of Stadium of Prophets mega-church",
                  "Net worth: 50+ million credits",
                  "Lives in luxury while congregation struggles",
                  "Preaches prosperity gospel, practices opulence",
                  "Multiple scandals (financial, personal) swept under rug",
                  "Politically connected, immune to accountability",
                ]}
                status="ACTIVE"
              />
            ),
          },

          '"Mr. Silk"': {
            content: (
              <>
                <Line cyan large bold>["MR. SILK"]</Line>
                <Line smoke>Unit 331 (Top Floor) | Crime Boss</Line>
                <Divider />

                <Box color="red">
                  <Line bold>⚠ EXTREMELY DANGEROUS INDIVIDUAL</Line>
                  <Line>High-level organized crime figure</Line>
                  <Line>Occupies entire top floor penthouse</Line>
                  <Line>Heavily armed security, surveillance everywhere</Line>
                </Box>

                <Section title="KNOWN INFORMATION">
                  <Line red bold>IDENTITY UNKNOWN:</Line>
                  <Line>Real name never confirmed</Line>
                  <Line>Always appears in public wearing silk suits</Line>
                  <Line>Age: Estimated 50s-60s</Line>
                  <Line>Gender: Male (assumed)</Line>
                  <Line>Origin: Unknown</Line>
                </Section>

                <Section title="CRIMINAL ENTERPRISES">
                  <Line yellow bold>⚠ SUSPECTED ACTIVITIES:</Line>
                  <Line>• Drug trafficking (citywide network)</Line>
                  <Line>• Protection rackets (Lower levels of The 55)</Line>
                  <Line>• Money laundering (multiple businesses)</Line>
                  <Line>• Contract killings (professional assassins)</Line>
                  <Line>• Blackmail and extortion (high-profile targets)</Line>
                  <Line>• Illegal gambling operations</Line>
                </Section>

                <Section title="SECURITY">
                  <Line red bold>PENTHOUSE DEFENSES:</Line>
                  <Line>10+ armed bodyguards at all times</Line>
                  <Line>Biometric access (Mr. Silk and trusted lieutenants only)</Line>
                  <Line>Surveillance cameras covering all approaches</Line>
                  <Line>Reinforced walls and bulletproof windows</Line>
                  <Line>Panic room with independent escape route (helicopter)</Line>
                  <Line yellow>⚠ Attempting entry is suicide</Line>
                </Section>

                <Section title="LAW ENFORCEMENT">
                  <Line yellow>C.O.P. AWARENESS:</Line>
                  <Line>Multiple investigations launched (all failed)</Line>
                  <Line>Witnesses disappear or refuse to testify</Line>
                  <Line>Evidence mysteriously lost or compromised</Line>
                  <Line>Suspected corruption within law enforcement</Line>
                  <Line red>Effectively untouchable</Line>
                </Section>

                <Section title="WARNINGS">
                  <Line red bold>DO NOT ENGAGE:</Line>
                  <Line>Extremely dangerous and well-protected</Line>
                  <Line>Has killed people for less than suspicion</Line>
                  <Line>Connections throughout The City</Line>
                  <Line>Community Outreach advises: avoid at all costs</Line>
                </Section>
              </>
            ),
          },

          "The Ashford Family": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-325"
                name="The Ashford Family"
                age={null}
                position="Generational Wealth"
                department="Old Money Dynasty"
                hireDate="Resident for 15+ years"
                supervisor="None (inherited wealth)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Units 325-328, 4 floors)"
                performance={null}
                notes={[
                  "Four-generation family occupying 4 floors",
                  "Combined net worth: 2+ billion credits",
                  "Wealth accumulated over 150+ years",
                  "Own multiple properties worldwide",
                  "Rarely interact with other stack residents",
                  "Patriarch (age 87) controls family fortune with iron fist",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dmitri Volkov": {
            content: (
              <PersonnelFile
                employeeId="SL-RES-318"
                name="Dmitri Volkov"
                age={52}
                position="Arms Dealer"
                department="International Weapons Trade"
                hireDate="Resident for 4 years"
                supervisor="None (business owner)"
                clearanceLevel={4}
                district="Spectral Luxvitae (Unit 318)"
                performance={null}
                notes={[
                  "International arms dealer (legal and illegal)",
                  "Net worth: Unknown (estimated 500+ million)",
                  "Supplies weapons to corporations, governments, criminals",
                  "Has diplomatic immunity (works for foreign government)",
                  "Penthouse doubles as secure weapons cache",
                  "Completely immune to prosecution in The City",
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      "Amenities & Services": {
        content: (
          <>
            <Line cyan large bold>[LUXVITAE AMENITIES]</Line>
            <Line smoke>Premium resident services</Line>
            <Divider />

            <Section title="CONCIERGE SERVICES">
              <Line neon bold>24/7 PERSONAL ASSISTANCE:</Line>
              <Line>• Restaurant reservations (citywide)</Line>
              <Line>• Travel arrangements (private jet, helicopter)</Line>
              <Line>• Event planning (parties, gatherings)</Line>
              <Line>• Personal shopping and errands</Line>
              <Line>• Tickets to exclusive events</Line>
              <Line>• Gift procurement and delivery</Line>
              <Line>• Problem solving ("make it happen" service)</Line>
            </Section>

            <Section title="IN-UNIT SERVICES">
              <Line neon bold>AVAILABLE ON REQUEST:</Line>
              <Line>• Private chef (meals prepared in-unit)</Line>
              <Line>• Spa treatments (massage, facials, etc.)</Line>
              <Line>• Personal training and yoga instruction</Line>
              <Line>• Housekeeping (daily or on-demand)</Line>
              <Line>• Laundry and dry cleaning (same-day)</Line>
              <Line>• Pet care and grooming</Line>
              <Line>• Tech support and smart home maintenance</Line>
            </Section>

            <Section title="SHARED FACILITIES">
              <Line neon>RESIDENT-ONLY SPACES:</Line>
              <Line>• Rooftop terrace and gardens (Level 331)</Line>
              <Line>• Infinity pool and spa (Level 330)</Line>
              <Line>• Private theater (seats 20, Level 280)</Line>
              <Line>• Wine cellar and tasting room (Level 270)</Line>
              <Line>• Executive gym (Level 275)</Line>
              <Line>• Business center and meeting rooms (Level 268)</Line>
              <Line>• Helicopter landing pad (roof)</Line>
            </Section>

            <Section title="SECURITY SERVICES">
              <Line red bold>RESIDENT PROTECTION:</Line>
              <Line>• Building security (15+ guards, 24/7)</Line>
              <Line>• Personal bodyguards (available for hire)</Line>
              <Line>• Secure parking (armored vehicles)</Line>
              <Line>• Panic buttons in every room</Line>
              <Line>• Safe rooms in every unit</Line>
              <Line>• Private security firm on retainer</Line>
              <Line>• Background checks on all visitors/staff</Line>
            </Section>

            <Section title="EXCLUSIVE PRIVILEGES">
              <Line yellow bold>PERKS OF LUXVITAE RESIDENCY:</Line>
              <Line>• Priority access to Corp Quad and Green Zone</Line>
              <Line>• VIP treatment at all 55 businesses</Line>
              <Line>• Direct line to Stack Command for emergencies</Line>
              <Line>• Exemption from most stack regulations</Line>
              <Line>• Invitation to exclusive social events</Line>
              <Line>• Networking with other ultra-wealthy residents</Line>
            </Section>
          </>
        ),
      },

      "Staff Directory": {
        content: (
          <>
            <Line cyan large bold>[LUXVITAE STAFF DIRECTORY]</Line>
            <Line smoke>Building personnel and management</Line>
            <Divider />

            <Section title="MANAGEMENT">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Geoffrey Sterling - Building Manager</Line>
              <Line>• Isabelle Chen - Head Concierge</Line>
            </Section>

            <Section title="SECURITY">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Captain Marcus Steele - Security Director</Line>
              <Line>• 15+ Security Personnel (rotating shifts)</Line>
            </Section>

            <Section title="SERVICE STAFF">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Maria Santos - Head Housekeeper</Line>
              <Line>• Chef Pierre Laurent - Private Chef (on-call)</Line>
              <Line>• 40+ Support Staff (housekeeping, maintenance, etc.)</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Geoffrey Sterling": {
            content: (
              <PersonnelFile
                employeeId="SL-MGR-001"
                name="Geoffrey Sterling"
                age={63}
                position="Building Manager"
                department="Spectral Luxvitae Management"
                hireDate="18 years ago"
                supervisor="Property Owners (corporate consortium)"
                clearanceLevel={5}
                district="Spectral Luxvitae (Lives in Unit 267)"
                performance={95}
                notes={[
                  "Longest-serving manager in Luxvitae history",
                  "Impeccable reputation, trusted by residents",
                  "Knows every resident's secrets (never tells)",
                  "Manages staff of 60+ employees",
                  "Salary: 200,000¤/year + bonuses",
                  "Given free penthouse as part of compensation",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Isabelle Chen": {
            content: (
              <PersonnelFile
                employeeId="SL-CON-001"
                name="Isabelle Chen"
                age={37}
                position="Head Concierge"
                department="Resident Services"
                hireDate="9 years ago"
                supervisor="Geoffrey Sterling"
                clearanceLevel={4}
                district="Spectral Luxvitae"
                performance={93}
                notes={[
                  "Manages all concierge services and requests",
                  "Connected to every service provider in The City",
                  "Can make anything happen (legally or otherwise)",
                  "Discreet, professional, never judges",
                  "Residents trust her completely",
                  "Secret: Also works as information broker (very selective)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Captain Marcus Steele": {
            content: (
              <PersonnelFile
                employeeId="SL-SEC-001"
                name="Captain Marcus Steele"
                age={49}
                position="Security Director"
                department="Luxvitae Security"
                hireDate="11 years ago"
                supervisor="Geoffrey Sterling"
                clearanceLevel={5}
                district="Spectral Luxvitae"
                performance={91}
                notes={[
                  "Former military special forces",
                  "Commands 15-person security team",
                  "Zero tolerance for threats to residents",
                  "Has killed in defense of residents (legally justified)",
                  "Respected by residents, feared by potential threats",
                  "Salary: 180,000¤/year",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Maria Santos": {
            content: (
              <PersonnelFile
                employeeId="SL-HSK-001"
                name="Maria Santos"
                age={52}
                position="Head Housekeeper"
                department="Housekeeping Services"
                hireDate="14 years ago"
                supervisor="Geoffrey Sterling"
                clearanceLevel={3}
                district="Spectral Luxvitae"
                performance={89}
                notes={[
                  "Manages team of 25+ housekeepers",
                  "Sees everything, says nothing",
                  "Knows which residents have affairs, addictions, secrets",
                  "Fiercely protective of her staff",
                  "Will quit before tolerating resident abuse of workers",
                  "Sends money to family in lower levels every month",
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      access_luxury_management: {
        password: {
          pw: "spectral",
          hint: "The first word of this building's name",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="SPECTRAL LUXVITAE MANAGEMENT"
            message="MANAGEMENT ACCESS GRANTED"
            networkInfo="⚠ Resident systems - Authorized personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Resident Registry": {
            content: (
              <>
                <Line cyan large bold>[RESIDENT REGISTRY]</Line>
                <Line smoke>Current occupancy and details</Line>
                <Divider />

                <Section title="OCCUPANCY STATUS">
                  <DataTable
                    data={[
                      { label: "Total units", value: "45 penthouses" },
                      { label: "Occupied", value: "42 (93%)" },
                      { label: "Vacant", value: "2 (5%)" },
                      { label: "Under renovation", value: "1 (2%)" },
                    ]}
                  />
                </Section>

                <Section title="RESIDENT DEMOGRAPHICS">
                  <Line neon bold>WEALTH DISTRIBUTION:</Line>
                  <DataTable
                    data={[
                      { label: "Billionaires", value: "8 residents/families" },
                      { label: "100M-1B¤", value: "22 residents/families" },
                      { label: "10M-100M¤", value: "12 residents/families" },
                    ]}
                  />
                  <Line>Average net worth: 380 million credits per household</Line>
                </Section>

                <Section title="UNIT SIZES">
                  <DataTable
                    data={[
                      { label: "Single floor (7,000 sq ft)", value: "25 units" },
                      { label: "Two floors (14,000 sq ft)", value: "12 units" },
                      { label: "Three+ floors (21,000+ sq ft)", value: "8 units" },
                    ]}
                  />
                </Section>

                <Section title="RECENT ACTIVITY">
                  <Line yellow>⚠ NOTABLE CHANGES (Last 6 months):</Line>
                  <Line>• Unit 312 - New resident (CEO, tech startup)</Line>
                  <Line>• Unit 298 - Sold (12M¤ transaction)</Line>
                  <Line>• Unit 305 - Under renovation (expanding to 2 floors)</Line>
                  <Line>• Unit 289 - Resident death (Dr. Cross, natural causes)</Line>
                  <Line>  Estate in probate, family dispute over inheritance</Line>
                </Section>
              </>
            ),
          },

          "Financial Records": {
            password: {
              pw: "luxury",
              hint: "What type of living Spectral Luxvitae provides",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[FINANCIAL RECORDS]</Line>
                <Line smoke>Revenue and resident payments</Line>
                <Divider />

                <Section title="MONTHLY REVENUE">
                  <Line neon bold>TOTAL MONTHLY INCOME:</Line>
                  <DataTable
                    data={[
                      { label: "Rent (all units)", value: "4,200,000¤" },
                      { label: "HOA fees", value: "850,000¤" },
                      { label: "Concierge services", value: "420,000¤" },
                      { label: "Additional services", value: "380,000¤" },
                      { label: "Total", value: "5,850,000¤/month" },
                    ]}
                  />
                  <Line>Annual revenue: ~70,200,000¤</Line>
                </Section>

                <Section title="OPERATING EXPENSES">
                  <DataTable
                    data={[
                      { label: "Staff salaries", value: "1,200,000¤" },
                      { label: "Security", value: "600,000¤" },
                      { label: "Maintenance & repairs", value: "400,000¤" },
                      { label: "Utilities", value: "350,000¤" },
                      { label: "Insurance", value: "200,000¤" },
                      { label: "Other", value: "150,000¤" },
                      { label: "Total expenses", value: "2,900,000¤/month" },
                    ]}
                  />
                  <Line neon>Net profit: 2,950,000¤/month (~35M¤/year)</Line>
                </Section>

                <Section title="TOP PAYING RESIDENTS">
                  <Line yellow>HIGHEST RENT (Monthly):</Line>
                  <Line>1. Mr. Silk (Unit 331): 200,000¤</Line>
                  <Line>2. Ashford Family (Units 325-328): 180,000¤ combined</Line>
                  <Line>3. Cassandra Vex (Units 301-302): 150,000¤</Line>
                  <Line>4. Alexander Hightower (Unit 315): 120,000¤</Line>
                  <Line>5. Stella Nova (Units 295-296): 110,000¤</Line>
                </Section>

                <Section title="PAYMENT STATUS">
                  <Line neon>ALL RESIDENTS CURRENT ON PAYMENTS</Line>
                  <Line smoke>No outstanding balances (enforcement strict)</Line>
                  <Line smoke>
                    Failure to pay results in immediate eviction proceedings
                  </Line>
                </Section>
              </>
            ),
          },

          "Security Protocols": {
            content: (
              <>
                <Line cyan large bold>[SECURITY PROTOCOLS]</Line>
                <Line smoke>Access control and protection measures</Line>
                <Divider />

                <Section title="ACCESS CONTROL">
                  <Line red bold>MULTI-LAYER VERIFICATION:</Line>
                  <Line>Level 1: Building entrance (biometric + face recognition)</Line>
                  <Line>Level 2: Elevator access (resident-specific floors only)</Line>
                  <Line>Level 3: Penthouse entry (unit-specific biometrics)</Line>
                  <Line>Level 4: Interior rooms (varies by resident preference)</Line>
                </Section>

                <Section title="VISITOR PROTOCOLS">
                  <Line neon bold>GUEST ACCESS PROCEDURE:</Line>
                  <Line>1. Resident pre-approves visitor (name, photo, date/time)</Line>
                  <Line>2. Visitor presents ID at entrance (verified)</Line>
                  <Line>3. Security escorts visitor to correct floor</Line>
                  <Line>4. Resident confirms visitor at penthouse door</Line>
                  <Line>5. Visitor departure logged and verified</Line>
                  <Line yellow>⚠ Unannounced visitors turned away (no exceptions)</Line>
                </Section>

                <Section title="SECURITY STAFF">
                  <DataTable
                    data={[
                      { label: "Day shift (08:00-20:00)", value: "8 guards" },
                      { label: "Night shift (20:00-08:00)", value: "7 guards" },
                      { label: "Roaming patrols", value: "2 guards (24/7)" },
                      { label: "Total personnel", value: "15 guards" },
                    ]}
                  />
                </Section>

                <Section title="EMERGENCY RESPONSE">
                  <Line red bold>PANIC BUTTON ACTIVATION:</Line>
                  <Line>1. Immediate alert to security command center</Line>
                  <Line>2. Guards dispatched (ETA &lt;60 seconds)</Line>
                  <Line>3. Building lockdown if threat confirmed</Line>
                  <Line>4. Private security firm notified (backup)</Line>
                  <Line>5. C.O.P. contacted if necessary (rarely needed)</Line>
                </Section>

                <Section title="THREAT ASSESSMENT">
                  <Line yellow>⚠ KNOWN CONCERNS:</Line>
                  <Line>• Kidnapping risk (wealthy residents, potential targets)</Line>
                  <Line>• Burglary attempts (high-value possessions)</Line>
                  <Line>• Paparazzi and stalkers (celebrity residents)</Line>
                  <Line>• Criminal retaliation (Mr. Silk, others)</Line>
                  <Line>• Corporate espionage (executive residents)</Line>
                </Section>
              </>
            ),
          },

          "Incident Log": {
            password: {
              pw: "penthouse",
              hint: "What the luxury units in Spectral Luxvitae are called",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[SECURITY INCIDENT LOG]</Line>
                <Line smoke>Notable events | Last 12 months</Line>
                <Divider />

                <Section title="MAJOR INCIDENTS">
                  <Line red bold>INCIDENT #SL-2025-008 (3 months ago):</Line>
                  <Line>Type: Attempted break-in</Line>
                  <Line>Location: Unit 295 (Stella Nova)</Line>
                  <Line>Details: Obsessed fan bypassed lobby, reached floor</Line>
                  <Line>Resolution: Security apprehended, criminal charges filed</Line>
                  <Line>Outcome: Enhanced facial recognition database</Line>
                  <Divider />

                  <Line red bold>INCIDENT #SL-2025-014 (1 month ago):</Line>
                  <Line>Type: Domestic disturbance</Line>
                  <Line>Location: Unit 308 (Julian Winters)</Line>
                  <Line>
                    Details: Argument with partner, neighbors reported loud sounds
                  </Line>
                  <Line>Resolution: Security checked, no violence confirmed</Line>
                  <Line>Outcome: Resident counseled about noise levels</Line>
                  <Divider />

                  <Line red bold>INCIDENT #SL-2025-019 (2 weeks ago):</Line>
                  <Line>Type: Suspicious package</Line>
                  <Line>Location: Delivery for Unit 315 (Alexander Hightower)</Line>
                  <Line>Details: Unmarked package, no sender information</Line>
                  <Line>Resolution: Bomb squad called, package harmless (gift)</Line>
                  <Line>Outcome: Enhanced package screening procedures</Line>
                </Section>

                <Section title="ROUTINE INCIDENTS">
                  <Line yellow>⚠ MINOR EVENTS (Last 12 months):</Line>
                  <Line>• 47 unauthorized visitor attempts (all turned away)</Line>
                  <Line>• 12 noise complaints (parties, construction)</Line>
                  <Line>• 8 medical emergencies (all resolved, no fatalities)</Line>
                  <Line>• 6 elevator malfunctions (repairs completed)</Line>
                  <Line>• 3 fire alarms (all false alarms)</Line>
                </Section>

                <Section title="STAFF INCIDENTS">
                  <Line yellow>EMPLOYEE ISSUES:</Line>
                  <Line>• 2 staff members terminated (theft from residents)</Line>
                  <Line>• 1 housekeeper quit (resident abuse)</Line>
                  <Line>• 1 security guard reprimanded (sleeping on duty)</Line>
                </Section>

                <Section title="DEATHS">
                  <Line red bold>RESIDENT DEATHS (Last 12 months):</Line>
                  <Line>• Dr. Nathaniel Cross (Unit 289): Natural causes, age 78</Line>
                  <Line>  Estate valued at 90M¤, family dispute ongoing</Line>
                </Section>
              </>
            ),
          },

          "Concierge Request Log": {
            content: (
              <>
                <Line cyan large bold>[CONCIERGE SERVICE REQUESTS]</Line>
                <Line smoke>Recent requests | Last 7 days</Line>
                <Divider />

                <Section title="TRAVEL ARRANGEMENTS">
                  <Line neon>• Unit 301 (Cassandra Vex): Private jet to Paris</Line>
                  <Line>  Departure: Tomorrow, 14:00 | Return: 5 days</Line>
                  <Divider />

                  <Line neon>• Unit 315 (Alexander Hightower): Helicopter to heliport</Line>
                  <Line>  Departure: Today, 09:00 | Business meeting downtown</Line>
                </Section>

                <Section title="EVENT PLANNING">
                  <Line neon>• Unit 295 (Stella Nova): Party planning</Line>
                  <Line>  Date: This Saturday | Guests: 50+ | Budget: 100k¤</Line>
                  <Line>  Requirements: DJ, catering, security, cleanup</Line>
                  <Divider />

                  <Line neon>• Unit 320 (Prophet Gold): Charity gala organization</Line>
                  <Line>  Date: Next month | Guests: 200 | Venue: Off-site</Line>
                </Section>

                <Section title="PERSONAL SHOPPING">
                  <Line neon>• Unit 310 (Lady Pembroke): Rare orchid procurement</Line>
                  <Line>  Specific species requested, budget: 20k¤</Line>
                  <Divider />

                  <Line neon>• Unit 318 (Dmitri Volkov): Custom suit tailoring</Line>
                  <Line>  Designer: Exotique | Rush order: 3 days</Line>
                </Section>

                <Section title="UNUSUAL REQUESTS">
                  <Line yellow>⚠ SPECIAL SERVICES:</Line>
                  <Line>• Unit 331 (Mr. Silk): "Problem resolution" (no details logged)</Line>
                  <Line>  Status: Handled discreetly by Isabelle Chen</Line>
                  <Divider />

                  <Line>• Unit 325 (Ashford Family): Family therapist (confidential)</Line>
                  <Line>  In-home sessions, NDA required</Line>
                </Section>

                <Section title="NOTES">
                  <Line smoke>
                    All requests logged for billing and quality assurance
                  </Line>
                  <Line smoke>Sensitive requests redacted or coded</Line>
                  <Line yellow>⚠ Concierge staff sign extensive NDAs</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_SPECTRAL_LUXVITAE_COMMANDS;
