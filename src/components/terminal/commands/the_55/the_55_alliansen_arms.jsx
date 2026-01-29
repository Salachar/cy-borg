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

export const THE_55_ALLIANSEN_ARMS_COMMANDS = {
  "Alliansen Arms (Levels 61-100)": {
    content: (
      <PublicPortal
        network="ALLIANSEN_RESIDENT"
        signalStrength="medium"
        status="✓ RESIDENTIAL"
        statusColor="neon"
        nowPlaying="Resident community feeds and local news"
        notes={[
          "Bachelor-style concrete prefab apartments",
          "Many families pooling income to afford rent",
          "Some have only one occupant with corpo salary",
          "Similar graffiti and personality to Capsule Closets",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Tenant Directory": {
        content: (
          <>
            <Line cyan large bold>[ALLIANSEN ARMS TENANT DIRECTORY]</Line>
            <Line smoke>Levels 61-100 | 40 floors of apartments</Line>
            <Divider />

            <Section title="NOTABLE TENANTS">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Lazet (Apt. #6101)</Line>
              <Line>• Hacksaw Coil (Apt. #6203)</Line>
              <Line>• Catie Calahan (Apt. #6305)</Line>
              <Line>• Ada Five-Five (Apt. #6407)</Line>
              <Line>• V (Apt. #6509) - Vending Machine</Line>
              <Line>• Galatea (Apt. #6611)</Line>
              <Line>• Karl Johnson (Apt. #6713) - ⚠ NuFascist</Line>
              <Line>• Arthur Smith (Apt. #6815) - Corporate Safehouse</Line>
              <Line>• Abra Cardera (Apt. #6917)</Line>
              <Line>• Ryant Family (Apt. #7019)</Line>
              <Line>• [REDACTED] (Apt. #7121) - Quarantined</Line>
              <Line>• Corsair Con (Apt. #7223)</Line>
              <Line>• The Carlyles (Apt. #7325)</Line>
              <Line>• Trant and TJ (Apt. #7427)</Line>
              <Line>• Kincaid (Apt. #7529)</Line>
              <Line>• Mr. Book (Apt. #7631)</Line>
              <Line>• Signal (Apt. #7733)</Line>
              <Line>• The Saints (Apt. #7835)</Line>
              <Line>• Co-Op 47 (Apt. #7937)</Line>
              <Line>• Apt. #8799 - Mysterious Computer Room</Line>
            </Section>

            <Section title="COMMUNITY RESOURCES">
              <Line neon>• Community Outreach Board (Floor 64)</Line>
              <Line neon>• Laundry facilities (Every 5 floors)</Line>
              <Line neon>• Shared roof access (Floor 100)</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Lazet": {
            content: (
              <PersonnelFile
                employeeId="APT-6101"
                name="Lazet"
                age={35}
                position="Biologist / Researcher"
                department="Independent"
                hireDate="Resident for 2 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Will pay for odd biological samples",
                  "Trying to figure out local ecosystems in The 55",
                  "Particularly interested in REC specimens (100¤ bounty)",
                  "Small lab setup in apartment",
                  "Published several papers on urban mutations",
                  "Friendly but obsessive about research",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Hacksaw Coil": {
            content: (
              <PersonnelFile
                employeeId="APT-6203"
                name="Hacksaw Coil"
                age={29}
                position="Punk Musician"
                department="Band: Hacksaw Coil & The Razors"
                hireDate="Resident for 1 year"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Lead singer of local punk band",
                  "Band members live here with him (5 people total)",
                  "On the verge of selling out to corporate label",
                  "Internal band tension over money vs. integrity",
                  "Noise complaints from neighbors (ongoing)",
                  "Plays shows at local venues, building following",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Catie Calahan": {
            content: (
              <PersonnelFile
                employeeId="APT-6305"
                name="Catie Calahan"
                age={42}
                position="Lawyer"
                department="Independent Practice"
                hireDate="Resident for 5 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Does pro bono cases for The 55 residents",
                  "Specializes in tenant rights and corporate disputes",
                  "Constantly battling against corpo evictions",
                  "Well-respected in the community",
                  "Struggling financially (takes very few paying clients)",
                  "On corporate blacklists for being 'difficult'",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Ada Five-Five": {
            content: (
              <PersonnelFile
                employeeId="APT-6407"
                name="Ada Five-Five"
                age={38}
                position="Community Organizer"
                department="55 Community Outreach Board"
                hireDate="Resident for 7 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "On the Community Outreach board",
                  "Looking to start a universal basic income fund for The 55",
                  "Charismatic speaker and organizer",
                  "Trying to unite lower and middle level residents",
                  "Corporate security watches her closely",
                  "Has connections throughout the entire stack",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "V (Vending Machine)": {
            content: (
              <PersonnelFile
                employeeId="APT-6509"
                name="V"
                age={null}
                position="Vending Machine (Sentient)"
                department="Independent"
                hireDate="Resident for 3 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Sentient vending machine renting an apartment",
                  "Sells rare sodas, snacks, and collectible beverages",
                  "Desperately craves freedom from machine body",
                  "Saving money for consciousness upload procedure",
                  "Friendly and chatty (loves conversation)",
                  "Neighborhood curiosity - people visit just to talk",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Galatea": {
            content: (
              <PersonnelFile
                employeeId="APT-6611"
                name="Galatea"
                age={33}
                position="Unemployed (Recently Fired)"
                department="Former Corporate Employee"
                hireDate="Resident for 4 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "About to lose her cybertech after being fired",
                  "Can't make payments on implants (repo imminent)",
                  "Desperate for work or money",
                  "Skilled in corporate systems and data analysis",
                  "Bitter about corporate treatment",
                  "Considering illegal work to keep her tech",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Karl Johnson": {
            content: (
              <PersonnelFile
                employeeId="APT-6713"
                name="Karl Johnson"
                age={36}
                position="Unemployed"
                department="NuFascist Extremist"
                hireDate="Resident for 2 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Known NuFascist and [CY-RAGING MENACE]",
                  "1k¤ bounty from 55 Community Outreach",
                  "Hostile to non-human residents and cyborgs",
                  "Has been involved in several violent incidents",
                  "Eviction attempts blocked by legal technicalities",
                  "Neighbors fear him - most avoid contact",
                ]}
                status="ACTIVE - THREAT"
              />
            ),
          },

          "Arthur Smith": {
            content: (
              <PersonnelFile
                employeeId="APT-6815"
                name="Arthur Smith"
                age={null}
                position="Cover Identity"
                department="Military Corporate Safehouse"
                hireDate="Unoccupied"
                supervisor="Unknown Corporate Entity"
                clearanceLevel={5}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Apartment is actually a military corporate safehouse",
                  "Unoccupied most of the time",
                  "Contains weapons, equipment, supplies",
                  "Used by corporate operatives for staging",
                  "High-security locks and surveillance",
                  "Neighbors assume tenant travels frequently",
                ]}
                status="ACTIVE - CLASSIFIED"
              />
            ),
          },

          "Abra Cardera": {
            content: (
              <PersonnelFile
                employeeId="APT-6917"
                name="Abra Cardera"
                age={27}
                position="Streamer"
                department="Content Creator"
                hireDate="Resident for 1 year"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Popular streamer known as 'Magic'",
                  "Specializes in urban exploration and 55 content",
                  "Large following (50k+ subscribers)",
                  "Makes decent money from streams and sponsorships",
                  "Sometimes live-streams from dangerous areas (REC, Lost Zone)",
                  "Friendly with most residents, good source of local info",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Ryant Family": {
            content: (
              <PersonnelFile
                employeeId="APT-7019"
                name="Ryant Family"
                age={null}
                position="Family Unit"
                department="Alleged Smugglers"
                hireDate="Residents for 10+ years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "3 generations of the Ryant clan (8 people total)",
                  "Some say they smuggle products for a living",
                  "Always have access to hard-to-find goods",
                  "Tight-knit family, protective of each other",
                  "Grandmother runs the operation (sharp as ever)",
                  "Community trusts them - never betrayed a customer",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Unit 7121 [REDACTED]": {
            content: (
              <>
                <Line cyan large bold>[APARTMENT #7121 - REDACTED]</Line>
                <Line smoke>Status: QUARANTINED</Line>
                <Divider />

                <Section title="QUARANTINE STATUS">
                  <Line red bold>SEALED DUE TO VIRAL CONTAMINATION</Line>
                  <KeyValue label="Sealed Date" value="8 months ago" />
                  <KeyValue label="Threat Level" value="BIOHAZARD" />
                  <KeyValue label="Access" value="DR14 to break in" />
                </Section>

                <Section title="DETAILS">
                  <Line>Former resident exposed to unknown pathogen</Line>
                  <Line>Entire apartment sealed by hazmat team</Line>
                  <Line>Contents unknown - resident fate unknown</Line>
                  <Line yellow>⚠ Breaking seal may release contamination</Line>
                  <Line red>Corporate monitoring active</Line>
                </Section>
              </>
            ),
          },

          "Corsair Con": {
            content: (
              <PersonnelFile
                employeeId="APT-7223"
                name="Corsair Con"
                age={null}
                position="Artist Collective"
                department="Anarcho-Socialist Artists"
                hireDate="Squatting for 6 months"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Group of 4 anarcho-socialist artists squatting",
                  "Struggling to make money from art",
                  "Create political murals and installations",
                  "Rent technically unpaid (landlord unaware or ignoring)",
                  "Well-liked by community for their activism",
                  "May be evicted if discovered",
                ]}
                status="SQUATTING"
              />
            ),
          },

          "The Carlyles": {
            content: (
              <PersonnelFile
                employeeId="APT-7325"
                name="The Carlyle Family"
                age={null}
                position="Auto Shop Owners"
                department="Carlyle's Cars (Multimart)"
                hireDate="Residents for 15 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Family worried their auto shop will be bought out",
                  "Multi-generational business facing corporate pressure",
                  "Father, mother, and two adult children",
                  "Shop in Multimart is their livelihood",
                  "Considering selling but don't want to lose independence",
                  "Community rallying to support them",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Trant and TJ": {
            content: (
              <PersonnelFile
                employeeId="APT-7427"
                name="Trant and TJ"
                age={null}
                position="Real Estate Agents"
                department="Independent"
                hireDate="Residents for 3 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Burnt-out real estate agents",
                  "Roommates trying to make ends meet",
                  "Eager to gossip about building drama",
                  "Know everyone's business (sometimes useful)",
                  "Failed to make it in upper levels, stuck here",
                  "Friendly but exhausting to talk to",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Kincaid": {
            content: (
              <PersonnelFile
                employeeId="APT-7529"
                name="Kincaid"
                age={31}
                position="Mech Enthusiast"
                department="Independent Tinkerer"
                hireDate="Resident for 2 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Trying to build their own mech",
                  "It isn't going well (constant failures)",
                  "Apartment full of scrap metal and parts",
                  "Occasionally causes power surges or small fires",
                  "Determined but lacking proper resources and knowledge",
                  "Neighbors complain about noise and smell",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Mr. Book": {
            content: (
              <PersonnelFile
                employeeId="APT-7631"
                name="Mr. Book"
                age={54}
                position="Cultist"
                department="Cult of Kergoz"
                hireDate="Resident for 8 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Member of Cult of Kergoz (lower levels)",
                  "Has a secret entrance to THE SYNK (DR14 to find)",
                  "Quiet and reclusive, avoids neighbors",
                  "Apartment filled with occult items and texts",
                  "Occasionally disappears for days (cult activities)",
                  "Harmless unless provoked or threatened",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Signal": {
            content: (
              <PersonnelFile
                employeeId="APT-7733"
                name="Signal"
                age={67}
                position="Original Resident"
                department="Retired"
                hireDate="Has lived here since building was constructed"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Hoarder who's lived here since The 55 was built",
                  "Apartment completely packed with decades of items",
                  "Knows the entire history of the building",
                  "Walking encyclopedia of 55 lore and secrets",
                  "Friendly but rambling - hard to get useful info quickly",
                  "Fire hazard (neighbors worried)",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "The Saints": {
            content: (
              <PersonnelFile
                employeeId="APT-7835"
                name="The Saints Family"
                age={null}
                position="Tailors / Clothiers"
                department="Seams Shrine (Multimart)"
                hireDate="Residents for 12 years"
                supervisor="None"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Tailors and second-hand clothing merchants",
                  "Locals say they make the best clothes in The 55",
                  "Family of 5 (parents, 3 adult children)",
                  "Run Seams Shrine shop in Multimart",
                  "Skilled in both fashion and light armor weaving",
                  "Well-respected, trusted by community",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Co-Op 47": {
            content: (
              <PersonnelFile
                employeeId="APT-7937"
                name="Co-Op 47"
                age={null}
                position="Shared Housing"
                department="Transient Residents"
                hireDate="Established 3 years ago"
                supervisor="Rotating"
                clearanceLevel={0}
                district="The 55, Alliansen Arms"
                performance={null}
                notes={[
                  "Several bunk beds in shared apartment",
                  "Only 5¤ per night when vacant",
                  "Almost never vacant (very popular)",
                  "Rotating residents (mostly short-term workers)",
                  "Clean and well-maintained by community",
                  "Good place for newcomers to The 55",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Apt. #8799": {
            content: (
              <>
                <Line cyan large bold>[APARTMENT #8799]</Line>
                <Line smoke>Status: MYSTERIOUS</Line>
                <Divider />

                <Section title="DETAILS">
                  <Line>Room packed full of computers and CRT monitors</Line>
                  <Line>Rent always paid on time (electronic transfer)</Line>
                  <Line>No one has ever seen the occupant</Line>
                  <Line>Constant humming noise from equipment</Line>
                </Section>

                <Section title="THEORIES">
                  <Line yellow>Neighbors speculate:</Line>
                  <Line>• Corporate surveillance operation</Line>
                  <Line>• Cryptocurrency mining operation</Line>
                  <Line>• AI entity renting apartment</Line>
                  <Line>• Hacker collective safehouse</Line>
                  <Line>• Dead tenant with automated payments</Line>
                </Section>

                <Section title="ACCESS">
                  <Line red>Door always locked (high-security)</Line>
                  <Line>No response to knocking or messages</Line>
                  <Line yellow>⚠ Breaking in may trigger unknown countermeasures</Line>
                </Section>
              </>
            ),
          },
        },
      },

      "Community Board": {
        content: (
          <>
            <Line cyan large bold>[COMMUNITY OUTREACH BOARD]</Line>
            <Line smoke>Floor 64 | Community organizing and support</Line>
            <Divider />

            <Section title="ABOUT">
              <Line>One of the few public institutions left in The 55</Line>
              <Line>Overworked volunteers protecting residents</Line>
              <Line>Fighting against corporations, cults, and NuFascists</Line>
              <Line>Run primarily by Ada Five-Five and volunteers</Line>
            </Section>

            <Section title="ACTIVE CAMPAIGNS">
              <Line neon bold>UNIVERSAL BASIC INCOME FUND:</Line>
              <Line>Goal: Provide 50¤/month to every 55 resident</Line>
              <Line>Progress: 12% funded (need corporate sponsors or donors)</Line>
              <Divider />

              <Line neon bold>ANTI-EVICTION LEGAL DEFENSE:</Line>
              <Line>Lawyer Catie Calahan leading effort</Line>
              <Line>Successfully blocked 23 evictions this year</Line>
              <Line>Constantly battling new corporate buyout attempts</Line>
              <Divider />

              <Line neon bold>NUFASCIST BOUNTY PROGRAM:</Line>
              <Line>1k¤ per head for confirmed NuFascist extremists</Line>
              <Line>Karl Johnson (Apt. #6713) currently targeted</Line>
              <Line>Community-funded, verified bounties only</Line>
            </Section>

            <Section title="SERVICES">
              <Line>• Free legal consultations (limited hours)</Line>
              <Line>• Job placement assistance</Line>
              <Line>• Food distribution (donated goods)</Line>
              <Line>• Conflict mediation</Line>
              <Line>• Community defense coordination</Line>
            </Section>

            <Section title="JOBS AVAILABLE">
              <Line yellow>⚠ Low or no payment - community service:</Line>
              <Line>• Protect vendors from corporate intimidation</Line>
              <Line>• Investigate mysterious apartments or threats</Line>
              <Line>• Escort vulnerable residents through dangerous areas</Line>
              <Line>• Gather evidence against corrupt corpo operations</Line>
            </Section>
          </>
        ),
      },

      access_building_management: {
        password: {
          pw: "alliansen",
          hint: "The name of this apartment building (first word)",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            businessName="ALLIANSEN ARMS MANAGEMENT"
            welcomeMessage="BUILDING MANAGEMENT ACCESS"
            note="⚠ Property systems - Authorized personnel only"
            theme="corporate"
          />
        ),
        related_commands: {
          "Lease Records": {
            content: (
              <>
                <Line cyan large bold>[LEASE RECORDS]</Line>
                <Line smoke>Levels 61-100 | 800 total units</Line>
                <Divider />

                <Section title="OCCUPANCY STATUS">
                  <DataTable
                    data={[
                      { label: "Occupied units", value: "782 (98%)" },
                      { label: "Vacant units", value: "17 (2%)" },
                      { label: "Quarantined", value: "1 (0.1%)" },
                    ]}
                  />
                </Section>

                <Section title="RENT COLLECTION">
                  <Line neon>Average monthly rent: 400¤ per unit</Line>
                  <Line>Expected monthly revenue: 312,800¤</Line>
                  <Line yellow>⚠ Actual collection rate: 81%</Line>
                  <Line smoke>Many tenants behind on payments</Line>
                </Section>

                <Section title="LEASE CONCERNS">
                  <Line red bold>EVICTION PROCEEDINGS (12 units):</Line>
                  <Line>• 8 units behind 3+ months on rent</Line>
                  <Line>• 3 units violating lease terms (noise, damage)</Line>
                  <Line>• 1 unit occupied by NuFascist (Karl Johnson)</Line>
                  <Line yellow>⚠ Lawyer Catie Calahan blocking most evictions</Line>
                  <Divider />

                  <Line yellow bold>SQUATTING (2 units known):</Line>
                  <Line>• Apt. #7223 (Corsair Con artists)</Line>
                  <Line>• Apt. #8103 (Unknown occupants)</Line>
                </Section>

                <Section title="LEASE VIOLATIONS">
                  <Line>• Apt. #6203 (Hacksaw Coil) - Excessive noise</Line>
                  <Line>• Apt. #7529 (Kincaid) - Fire safety hazard</Line>
                  <Line>• Apt. #7733 (Signal) - Hoarding violation</Line>
                </Section>
              </>
            ),
          },

          "Maintenance Requests": {
            content: (
              <>
                <Line cyan large bold>[MAINTENANCE REQUESTS]</Line>
                <Line smoke>Open work orders | Last 30 days</Line>
                <Divider />

                <Section title="URGENT REQUESTS">
                  <Line red bold>REQUEST #7841 (Apt. #7529 - Kincaid)</Line>
                  <Line>Issue: Electrical overload from mech project</Line>
                  <Line>Status: URGENT - Fire hazard</Line>
                  <Line>Action required: Inspection and possible disconnect</Line>
                  <Divider />

                  <Line red bold>REQUEST #7833 (Apt. #7121 - Quarantine)</Line>
                  <Line>Issue: Seal integrity check required</Line>
                  <Line>Status: OVERDUE - Biohazard concern</Line>
                  <Line>Action required: Corporate hazmat team inspection</Line>
                </Section>

                <Section title="STANDARD REQUESTS">
                  <Line neon bold>34 OPEN WORK ORDERS:</Line>
                  <Line>• 12 plumbing issues (leaks, clogs)</Line>
                  <Line>• 8 electrical problems (outlets, lighting)</Line>
                  <Line>• 6 HVAC repairs (heating/cooling)</Line>
                  <Line>• 5 structural concerns (cracks, damage)</Line>
                  <Line>• 3 security issues (locks, windows)</Line>
                </Section>

                <Section title="BACKLOG">
                  <Line yellow>⚠ MAINTENANCE STAFF UNDERSTAFFED:</Line>
                  <Line>Current staff: 3 technicians</Line>
                  <Line>Required staff: 8+ technicians</Line>
                  <Line>Average response time: 2-3 weeks</Line>
                  <Line>Priority given to safety hazards only</Line>
                </Section>
              </>
            ),
          },

          "Security Incidents": {
            content: (
              <>
                <Line cyan large bold>[SECURITY INCIDENT LOG]</Line>
                <Line smoke>Reported incidents | Last 30 days</Line>
                <Divider />

                <Section title="VIOLENT INCIDENTS">
                  <Line red bold>INCIDENT #1 (5 days ago):</Line>
                  <Line>Location: Apt. #6713 (Karl Johnson)</Line>
                  <Line>Type: Assault (verbal and physical)</Line>
                  <Line>Details: Johnson attacked neighbor over noise complaint</Line>
                  <Line>Resolution: Victim treated, Johnson warned (no arrest)</Line>
                  <Line yellow>⚠ Community Outreach increased bounty to 1k¤</Line>
                  <Divider />

                  <Line red bold>INCIDENT #2 (12 days ago):</Line>
                  <Line>Location: Floor 72 corridor</Line>
                  <Line>Type: Attempted break-in</Line>
                  <Line>Details: 2 individuals attempting to breach Apt. #6815</Line>
                  <Line>
                    Resolution: Suspects fled when alarms triggered (corporate
                    safehouse security)
                  </Line>
                </Section>

                <Section title="DISTURBANCES">
                  <Line yellow bold>INCIDENT #3 (8 days ago):</Line>
                  <Line>Location: Apt. #6203 (Hacksaw Coil)</Line>
                  <Line>Type: Noise complaint (band practice)</Line>
                  <Line>Details: Loud music at 2am, multiple neighbor complaints</Line>
                  <Line>Resolution: Final warning issued, lease violation logged</Line>
                  <Divider />

                  <Line yellow bold>INCIDENT #4 (15 days ago):</Line>
                  <Line>Location: Apt. #7529 (Kincaid)</Line>
                  <Line>Type: Fire alarm triggered</Line>
                  <Line>Details: Electrical fire from mech project</Line>
                  <Line>Resolution: Fire extinguished, safety inspection pending</Line>
                </Section>

                <Section title="SUSPICIOUS ACTIVITY">
                  <Line yellow bold>INCIDENT #5 (20 days ago):</Line>
                  <Line>Location: Apt. #8799 (Computer room)</Line>
                  <Line>Type: Unidentified individuals entering at night</Line>
                  <Line>Details: 3 people seen entering, never seen leaving</Line>
                  <Line>Resolution: Ongoing monitoring, no further action</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_ALLIANSEN_ARMS_COMMANDS;
