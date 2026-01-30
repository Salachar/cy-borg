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
} from "@terminal/TerminalComponents";

export const THE_55_CAPSULE_CLOSETS_COMMANDS = {
  "Capsule Closets (Levels 7-50)": {
    content: (
      <PublicPortal
        network="CAPSULE_RESIDENT_NET"
        signalStrength="weak"
        status="✓ ALWAYS OPEN"
        statusColor="neon"
        nowPlaying="Various resident streams and local feeds"
        notes={[
          "50 floors of coffin-sized rooms stacked floor to ceiling",
          "Thousands of residents in customized capsules",
          "Rent starts at 100¤ per month",
          "Some organized into small communities",
        ]}
        theme="limeade"
      />
    ),
    related_commands: {
      "Resident Directory": {
        content: (
          <>
            <Line cyan large bold>[CAPSULE CLOSETS RESIDENT DIRECTORY]</Line>
            <Line smoke>Levels 7-50 | Thousands of residents</Line>
            <Divider />

            <Section title="NOTABLE RESIDENTS">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• The Circuit Witch (Capsule 27-89)</Line>
              <Line>• sMUTT (Capsule 19-42)</Line>
              <Line>• December (Capsule 33-156)</Line>
              <Line>• Ibrakirre Gant (Capsule 41-203)</Line>
              <Line>• Sim-K-One (Capsule 22-78)</Line>
              <Line>• Calamity Coda (Capsule 38-91)</Line>
              <Line>• Maxus Tallard (Capsule 45-167)</Line>
              <Line>• Cooper (Capsule 31-122)</Line>
              <Line>• Way-High (Capsule 29-54)</Line>
              <Line>• Cell Damage (Capsule 36-198)</Line>
              <Line>• Gray Jacob (Capsule 48-231)</Line>
            </Section>

            <Section title="COMMUNITY NETWORKS">
              <Line neon>• Eco Hall (Floor 40) - Fresh produce gardens</Line>
              <Line neon>• The Shades (Floor 23) - Escaped clone community</Line>
              <Line neon>• Remote Hall (Floor 35) - Uploaded consciousness</Line>
              <Line neon>• The Serpent's Nest (Floor 17) - Virid Vipers gang</Line>
            </Section>

            <Section title="SEALED/QUARANTINED UNITS">
              <Line red>• Capsule 13-33 - Two [CY-RAGING MENACES] imprisoned</Line>
              <Line red>• Capsule 43-103 - [GHOST] containment</Line>
              <Line red>• Capsule 18-367 - [G0] infection (sealed)</Line>
            </Section>
          </>
        ),
        related_commands: {
          "The Circuit Witch": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-27-89"
                name="The Circuit Witch"
                age={null}
                position="Fortune Teller / Diviner"
                department="Independent Practitioner"
                hireDate="Resident for 4 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Gives portents, prophecies, and divination",
                  "Cost: 75¤ and one piece of tech (to be sacrificed in ritual)",
                  "Capsule heavily customized with occult symbols and wiring",
                  "Tech sacrifice is destroyed during reading (no returns)",
                  "Accuracy varies - some swear by her, others call it theater",
                  "Rumored to have actual nano-abilities (unconfirmed)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "sMUTT": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-19-42"
                name="sMUTT"
                age={26}
                position="Hacker for Hire"
                department="Independent Operator"
                hireDate="Resident for 2 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Skilled hacker with impressive track record",
                  "Discount offered if you provide rare data/vids",
                  "Specializes in corporate system infiltration",
                  "Works primarily on 'Net jobs, rarely leaves capsule",
                  "Known to trade in blackmail material and surveillance footage",
                  "Has connections to several local gangs (neutral broker)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "December": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-33-156"
                name="December"
                age={34}
                position="Mercenary"
                department="Independent Contractor"
                hireDate="Resident for 1 year"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Cheap mercenary work, budget-friendly rates",
                  "Specializes in wetwork against wealthy targets",
                  "Loves killing rich folks - will discount jobs targeting corpos",
                  "Reputation for efficiency but messy methods",
                  "Not subtle - prefers direct confrontation",
                  "Banned from Corp Quad after 'incident' (details sealed)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Ibrakirre Gant": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-41-203"
                name="Ibrakirre Gant"
                age={47}
                position="Ex-Corporate Executive"
                department="Former [KAYTELL MAKERS] Employee"
                hireDate="Resident for 6 months"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Claims to have a way into [KAYTELL MAKERS] orbital HQ",
                  "Fired from mid-level position (embezzlement suspected)",
                  "Desperately trying to sell 'insider information'",
                  "Information may be outdated or fabricated",
                  "Paranoid - believes Kaytell is tracking him",
                  "Owes money to multiple creditors in The 55",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Sim-K-One": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-22-78"
                name="Sim-K-One"
                age={22}
                position="Streamer"
                department="Content Creator"
                hireDate="Resident for 3 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Loquacious streamer with very few fans",
                  "Streams daily life in capsule (usually boring)",
                  "Desperate for viral content and recognition",
                  "Will do almost anything for views and donations",
                  "Known to exaggerate or fabricate stories for attention",
                  "Actually friendly and helpful if not streaming",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Calamity Coda": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-38-91"
                name="Calamity Coda"
                age={19}
                position="Stranded Corporate Brat"
                department="None"
                hireDate="Resident for 4 months"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Daughter of wealthy corporate family, currently estranged",
                  "In desperate need of transportation/vehicles",
                  "Will join anyone for a job if there's a vehicle involved",
                  "Skilled driver (cars, bikes, anything with wheels)",
                  "Trying to earn enough to leave The City entirely",
                  "Not used to poverty - struggles with capsule life",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Maxus Tallard": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-45-167"
                name="Maxus Tallard"
                age={52}
                position="Unknown"
                department="Claims to be Cloned CEO"
                hireDate="Resident for 8 months"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Swears he's a cloned CEO of major corporation",
                  "Story changes depending on who asks",
                  "May be delusional or may be telling the truth",
                  "Has detailed knowledge of corporate operations",
                  "Paranoid about being 'retired' by original",
                  "Occasionally receives mysterious packages",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Cooper": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-31-122"
                name="Cooper"
                age={null}
                position="Local Gossip"
                department="Information Broker (Informal)"
                hireDate="Resident for 5 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Knows everyone's business in Capsule Closets",
                  "Secret: Actually a [DOPPEL] cydroid",
                  "Gathering information for unknown purpose",
                  "Friendly and helpful - provides gossip for free",
                  "May be corpo spy or independent agent",
                  "Never sleeps (residents assume insomnia)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Way-High": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-29-54"
                name="Way-High"
                age={28}
                position="Streamer / Journalist"
                department="Amateur Journalist"
                hireDate="Resident for 2 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Streamer and amateur journalist",
                  "Exclusively covers car crashes and vehicle incidents",
                  "First responder to any traffic accident in The 55",
                  "Maintains database of crash footage (sellable)",
                  "Morbid fascination with vehicular destruction",
                  "Actually good investigative skills when motivated",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Cell Damage": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-36-198"
                name="Cell Damage"
                age={31}
                position="Sex Worker / Fixer"
                department="Independent Operator"
                hireDate="Resident for 4 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Anarchist sex worker and fixer",
                  "Well-connected throughout The 55",
                  "Can arrange meetings, jobs, and introductions",
                  "Actively working against corporate interests",
                  "Member of underground resistance networks",
                  "Trusted by locals, hated by corpos",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Gray Jacob": {
            content: (
              <PersonnelFile
                employeeId="CAPSULE-48-231"
                name="Gray Jacob"
                age={null}
                position="Unknown"
                department="None"
                hireDate="Resident for unknown duration"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Capsule Closets"
                performance={null}
                notes={[
                  "Only remembers recent memes and viral content",
                  "Total amnesia about everything else",
                  "Can recite entire meme timelines verbatim",
                  "No memory of personal history or identity",
                  "Friendly but deeply confused about own existence",
                  "Medical scans show unusual neural patterns",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "The Shades": {
            content: (
              <>
                <Line cyan large bold>[THE SHADES - CLONE COMMUNITY]</Line>
                <Line smoke>Floor 23 | Escaped clone collective</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Community of a dozen escaped clones</Line>
                  <Line>Originally used as organ farms or body doubles</Line>
                  <Line>All clones of pop-star "Shade" (various generations)</Line>
                  <Line>Living together in modified capsule cluster</Line>
                </Section>

                <Section title="COMMUNITY STRUCTURE">
                  <Line neon>12 members total</Line>
                  <Line>Ages range from 3 to 8 years (accelerated growth)</Line>
                  <Line>Share resources, memories, and identity</Line>
                  <Line>Extremely protective of each other</Line>
                </Section>

                <Section title="NOTABLE DETAILS">
                  <Line yellow>⚠ Original "Shade" unaware of their existence</Line>
                  <Line>Clones fear discovery and reclamation</Line>
                  <Line>Some possess fragments of Shade's memories</Line>
                  <Line>Occasionally perform together (wearing masks)</Line>
                </Section>
              </>
            ),
          },

          "Remote Hall": {
            content: (
              <>
                <Line cyan large bold>[REMOTE HALL - UPLOAD COMMUNITY]</Line>
                <Line smoke>Floor 35 | Uploaded consciousness collective</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Several capsules modified for uploaded residents</Line>
                  <Line>Consciousness uploaded to drones, machines, hardware</Line>
                  <Line>Bodies maintained in capsules (life support)</Line>
                  <Line>Residents operate remotely via various platforms</Line>
                </Section>

                <Section title="COMMUNITY MEMBERS">
                  <Line neon>6 uploaded residents currently active:</Line>
                  <Line>• Former corpo exec (now surveillance drone)</Line>
                  <Line>• Elderly woman (now service robot)</Line>
                  <Line>• Accident victim (now vehicle AI)</Line>
                  <Line>• Hacker (distributed across multiple terminals)</Line>
                  <Line>• Artist (now hologram projection system)</Line>
                  <Line>• Unknown individual (maintenance bot)</Line>
                </Section>

                <Section title="SERVICES">
                  <Line>Community offers remote work services</Line>
                  <Line>Surveillance, delivery, data processing</Line>
                  <Line>Payment goes to maintain life support systems</Line>
                </Section>
              </>
            ),
          },

          "The Serpent's Nest": {
            content: (
              <>
                <Line cyan large bold>[THE SERPENT'S NEST - VIRID VIPERS]</Line>
                <Line smoke>Floor 17 | Gang territory</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Entire floor occupied by [VIRID VIPERS] gang</Line>
                  <Line>Act as couriers and security for local residents</Line>
                  <Line>Fiercely protective of Capsule Closets community</Line>
                </Section>

                <Section title="SERVICES">
                  <DataTable
                    data={[
                      { label: "Package delivery", value: "20¤ - 50¤" },
                      { label: "Personal security", value: "100¤ per day" },
                      { label: "Bodyguard work", value: "300¤ per job" },
                      { label: "Intimidation services", value: "150¤" },
                      { label: "Smuggling (small items)", value: "Negotiable" },
                    ]}
                  />
                </Section>

                <Section title="GANG NOTES">
                  <Line neon>Leader: Jade Boomslang (see Personnel File)</Line>
                  <Line>Members: ~30 active gang members</Line>
                  <Line yellow>⚠ Do not cross them in Capsule Closets</Line>
                  <Line>Relatively honorable - keep their word</Line>
                </Section>
              </>
            ),
          },

          "Eco Hall": {
            content: (
              <>
                <Line cyan large bold>[ECO HALL - COMMUNITY GARDENS]</Line>
                <Line smoke>Floor 40 | Fresh produce cultivation</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>A few dozen capsules converted to planters</Line>
                  <Line>Growing fresh fruit and vegetables</Line>
                  <Line>Maintained by residents with redirected water</Line>
                  <Line>Gardeners sleep on the floor (no capsule space)</Line>
                </Section>

                <Section title="PRODUCE AVAILABLE">
                  <Line neon>Available for purchase or trade:</Line>
                  <DataTable
                    data={[
                      { label: "Tomatoes", value: "5¤ per kg" },
                      { label: "Lettuce", value: "8¤ per head" },
                      { label: "Peppers", value: "6¤ per kg" },
                      { label: "Strawberries (rare)", value: "20¤ per 100g" },
                      { label: "Herbs (various)", value: "3¤ per bunch" },
                    ]}
                  />
                </Section>

                <Section title="COMMUNITY IMPACT">
                  <Line neon>Provides fresh food to hundreds of residents</Line>
                  <Line>Reduces dependence on synth-food</Line>
                  <Line>Gardeners accept volunteers and donations</Line>
                  <Line yellow>⚠ Water redirection technically illegal</Line>
                </Section>
              </>
            ),
          },
        },
      },

      "Sealed Units": {
        content: (
          <>
            <Line cyan large bold>[SEALED/QUARANTINED CAPSULES]</Line>
            <Line smoke>Dangerous or contaminated units</Line>
            <Divider />

            <Section title="CAPSULE 13-33">
              <Line red bold>STATUS: MAXIMUM SECURITY</Line>
              <KeyValue label="Contents" value="2x [CY-RAGING MENACES]" />
              <KeyValue label="Sealed" value="Years ago (exact date unknown)" />
              <KeyValue label="Threat Level" value="EXTREME" />
              <Line>Improvised prison for two cyber-psychos</Line>
              <Line>Capsule reinforced with welded steel plates</Line>
              <Line yellow>⚠ Occasionally hear screaming from inside</Line>
              <Line red>DO NOT ATTEMPT TO OPEN</Line>
            </Section>

            <Divider />

            <Section title="CAPSULE 43-103">
              <Line red bold>STATUS: CONTAINMENT ACTIVE</Line>
              <KeyValue label="Contents" value="[GHOST] entity" />
              <KeyValue label="Sealed" value="8 months ago" />
              <KeyValue label="Threat Level" value="HIGH" />
              <Line>Imprisoned digital entity/consciousness</Line>
              <Line>Capsule lined with Faraday cage</Line>
              <Line>No network access - isolated from all systems</Line>
              <Line yellow>⚠ Entity attempts communication via electrical interference</Line>
            </Section>

            <Divider />

            <Section title="CAPSULE 18-367">
              <Line red bold>STATUS: BIOHAZARD QUARANTINE</Line>
              <KeyValue label="Contents" value="[G0] infection site" />
              <KeyValue label="Sealed" value="2 years ago" />
              <KeyValue label="Threat Level" value="CATASTROPHIC" />
              <Line>Former resident exposed to [G0] nano-virus</Line>
              <Line>Capsule sealed and abandoned in place</Line>
              <Line red>BREACH WOULD CONTAMINATE ENTIRE FLOOR</Line>
              <Line yellow>⚠ Corporate containment team monitors remotely</Line>
            </Section>
          </>
        ),
      },

      access_capsule_maintenance: {
        password: {
          pw: "closets",
          hint: "What the capsule units are called (second word)",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="CAPSULE CLOSETS MAINTENANCE"
            message="MAINTENANCE ACCESS GRANTED"
            networkInfo="⚠ Building systems - Authorized personnel only"
            theme="limeade"
          />
        ),
        related_commands: {
          "Unit Registry": {
            content: (
              <>
                <Line cyan large bold>[CAPSULE UNIT REGISTRY]</Line>
                <Line smoke>Levels 7-50 | 6,240 total units</Line>
                <Divider />

                <Section title="OCCUPANCY STATUS">
                  <DataTable
                    data={[
                      { label: "Occupied units", value: "5,847 (94%)" },
                      { label: "Vacant units", value: "361 (6%)" },
                      { label: "Sealed/Quarantined", value: "32 (0.5%)" },
                    ]}
                  />
                </Section>

                <Section title="RENT COLLECTION">
                  <Line neon>Monthly rent: 100¤ per capsule</Line>
                  <Line>Expected monthly revenue: 584,700¤</Line>
                  <Line yellow>⚠ Actual collection rate: 72%</Line>
                  <Line smoke>Many residents behind on payments</Line>
                </Section>

                <Section title="UNIT CONDITIONS">
                  <Line yellow>⚠ MAINTENANCE BACKLOG:</Line>
                  <Line>• 487 units need electrical repairs</Line>
                  <Line>• 623 units have water leaks</Line>
                  <Line>• 1,204 units have broken climate control</Line>
                  <Line>• 89 units structurally compromised</Line>
                </Section>
              </>
            ),
          },

          "Maintenance Logs": {
            content: (
              <>
                <Line cyan large bold>[MAINTENANCE LOG]</Line>
                <Line smoke>Last 30 days of service calls</Line>
                <Divider />

                <Section title="RECENT WORK ORDERS">
                  <Line neon bold>WORK ORDER #2847 (2 days ago)</Line>
                  <Line>Location: Floor 23 (The Shades community)</Line>
                  <Line>Issue: Electrical overload from modified capsules</Line>
                  <Line>Resolution: Upgraded power supply (temporary fix)</Line>
                  <Line yellow>⚠ Modifications technically against regulations</Line>
                  <Divider />

                  <Line neon bold>WORK ORDER #2851 (5 days ago)</Line>
                  <Line>Location: Floor 40 (Eco Hall)</Line>
                  <Line>Issue: Water redirection to garden capsules</Line>
                  <Line>Resolution: Maintenance aware but unofficially ignoring</Line>
                  <Line smoke>Community provides maintenance crew with fresh food</Line>
                  <Divider />

                  <Line neon bold>WORK ORDER #2839 (8 days ago)</Line>
                  <Line>Location: Floor 17 (Serpent's Nest)</Line>
                  <Line>Issue: Structural reinforcement request</Line>
                  <Line>Resolution: Virid Vipers paid extra for priority service</Line>
                  <Divider />

                  <Line neon bold>WORK ORDER #2862 (1 day ago)</Line>
                  <Line>Location: Capsule 13-33 (sealed unit)</Line>
                  <Line>Issue: Reinforcement plates showing stress fractures</Line>
                  <Line red>Resolution: URGENT - Additional welding required</Line>
                  <Line yellow>⚠ Contained entities becoming more aggressive</Line>
                </Section>
              </>
            ),
          },

          "Quarantine Protocols": {
            password: {
              pw: "sealed",
              hint: "What dangerous capsules are (past tense of seal)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[QUARANTINE PROTOCOLS]</Line>
                <Line smoke>Sealed unit management procedures</Line>
                <Divider />

                <Section title="ACTIVE QUARANTINES">
                  <Line red bold>32 UNITS CURRENTLY SEALED:</Line>
                  <Line>• 3 biohazard (G0 and other infections)</Line>
                  <Line>• 12 structural collapse (unsafe to enter)</Line>
                  <Line>• 8 criminal evidence (sealed by C.O.P.)</Line>
                  <Line>• 6 entity containment (Ghosts, AI, anomalies)</Line>
                  <Line>• 3 extreme violence (crime scenes, remains)</Line>
                </Section>

                <Section title="CAPSULE 18-367 (G0 INFECTION)">
                  <Line red bold>HIGHEST THREAT LEVEL</Line>
                  <Line>Monitoring: Remote sensors (24/7)</Line>
                  <Line>Corporate team: TG Labs containment unit on standby</Line>
                  <Line>Breach protocol: Evacuate entire floor, seal level</Line>
                  <Line yellow>⚠ If infection spreads, entire stack at risk</Line>
                </Section>

                <Section title="CAPSULE 13-33 (CY-RAGING MENACES)">
                  <Line red bold>PHYSICAL CONTAINMENT DETERIORATING</Line>
                  <Line>Last inspection: 1 week ago</Line>
                  <Line>Structural integrity: 68% (declining)</Line>
                  <Line>Recommendation: Relocate to proper facility</Line>
                  <Line yellow>⚠ No facility willing to accept transfer</Line>
                  <Line red>Current plan: Reinforce until catastrophic failure</Line>
                </Section>

                <Section title="BREACH RESPONSE">
                  <Line neon bold>IF QUARANTINE UNIT BREACHED:</Line>
                  <Line>1. Immediate evacuation of affected floor</Line>
                  <Line>2. Seal stairwells and elevators (contain spread)</Line>
                  <Line>3. Contact Stack Command & Control</Line>
                  <Line>4. Deploy available security (Virid Vipers if needed)</Line>
                  <Line>5. Await corporate response team</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_CAPSULE_CLOSETS_COMMANDS;
