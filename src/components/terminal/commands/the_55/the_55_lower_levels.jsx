import {
  PublicPortal,
  InternalAccess,
  HoursBanner,
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

export const THE_55_LOWER_LEVELS_COMMANDS = {
  "The Synk (Levels B50-B21)": {
    content: (
      <>
        <Line cyan large bold>[THE SYNK]</Line>
        <Line smoke>Levels B50-B21 | Ancient ruins below the city</Line>
        <Divider />

        <Box color="red">
          <Line bold>⚠ EXTREME HAZARD ZONE</Line>
          <Line>Dark maze of ruins, tunnels, and waste water</Line>
          <Line>Miles below city surface - no official infrastructure</Line>
          <Line>1 in 6 chance of large vermin encounter</Line>
          <Line>DR14 to navigate through/out</Line>
        </Box>

        <Section title="KNOWN LOCATIONS">
          <Line yellow>Mapped by urban explorers and cultists:</Line>
          <Line>• Sewage Chasm - Bottomless cliffs, bridge crossing</Line>
          <Line>• The Offertory - Cult chamber in cliff wall</Line>
          <Line>• Crypto Mine - Semi-clean water cooling processors</Line>
          <Line>• The Dead Queen - Mass of dying flesh (extreme danger)</Line>
          <Line>• Path to G0 - Secret route to [G0] (partially blocked)</Line>
          <Line>• Medieval Ruins - Ancient structures, cult activity</Line>
        </Section>

        <Section title="INHABITANTS">
          <Line red bold>HOSTILE ENTITIES:</Line>
          <Line>• Dredgers (2d6 at bridge, 2d4 at Offertory)</Line>
          <Line>• Dredge Priest (Leads cult rituals)</Line>
          <Line>• Gang-Goons (d6 at crypto mine)</Line>
          <Line>• Nanogoons (2d4 at Medieval Ruins)</Line>
          <Line>• Heir of Kergoz (1 at Medieval Ruins)</Line>
          <Line>• The Dead Queen (Massive flesh entity - avoid)</Line>
        </Section>

        <Section title="ACCESS POINTS">
          <Line neon>Known entrances from The 55:</Line>
          <Line>• The Base maintenance tunnels (DR16 to find)</Line>
          <Line>• Kergoz Compound (Floor B15, DR14 to locate)</Line>
          <Line>• Mr. Book's apartment (Alliansen Arms #7631, DR14)</Line>
          <Line yellow>⚠ All routes dangerous and unmarked</Line>
        </Section>

        <Section title="WARNINGS">
          <Line red>• No light sources - total darkness in most areas</Line>
          <Line red>• Toxic water - DR12 Toughness or take damage</Line>
          <Line red>• Easy to get lost - navigation extremely difficult</Line>
          <Line red>• The Dead Queen will attempt to capture anything nearby</Line>
          <Line yellow>• Dredger Priest corpse attracts Dead Queen if killed above</Line>
        </Section>
      </>
    ),
    related_commands: {
      "Sewage Chasm": {
        content: (
          <>
            <Line cyan large bold>[SEWAGE CHASM]</Line>
            <Line smoke>Massive tunnel system with bottomless cliffs</Line>
            <Divider />

            <Section title="DESCRIPTION">
              <Line>Enormous tunnels lead to cliff edges and total darkness</Line>
              <Line>Improvised bridge spans the chasm (unstable)</Line>
              <Line>Sound of rushing water echoes from far below</Line>
              <Line>Bridge guarded by 2d6 Dredgers expecting toll</Line>
            </Section>

            <Section title="DREDGERS">
              <Line neon bold>HOSTILE GUARDS (2d6):</Line>
              <KeyValue label="HP" value="6" />
              <KeyValue label="Morale" value="7" />
              <KeyValue label="Armor" value="None" />
              <KeyValue label="Weapon" value="Shivs (d3 damage)" />
              <Line yellow>Demand toll: Useful gear or supplies</Line>
              <Line smoke>Will attack if refused or if group appears weak</Line>
            </Section>

            <Section title="THE BRIDGE">
              <Line yellow>⚠ STRUCTURAL HAZARD:</Line>
              <Line>Cobbled together from scrap metal and cables</Line>
              <Line>DR12 Agility to cross safely if rushed</Line>
              <Line>Can hold ~6 people at once before risk of collapse</Line>
              <Line>Dredgers know safe crossing points</Line>
            </Section>
          </>
        ),
      },

      "The Offertory": {
        content: (
          <>
            <Line cyan large bold>[THE OFFERTORY]</Line>
            <Line smoke>Cult chamber in the Sewage Chasm cliff</Line>
            <Divider />

            <Section title="DESCRIPTION">
              <Line>Large cyclopean chamber carved into cliff face</Line>
              <Line>Accessed via narrow ledge from bridge</Line>
              <Line>Lit by bioluminescent fungi and torches</Line>
              <Line>Altar faces the darkness of the chasm below</Line>
            </Section>

            <Section title="OCCUPANTS">
              <Line neon bold>CULT PRESENCE:</Line>
              <Line>• 2d4 Dredgers (worshippers)</Line>
              <Line>• 1 Dredge Priest (cult leader)</Line>
            </Section>

            <Section title="DREDGE PRIEST">
              <KeyValue label="HP" value="12" />
              <KeyValue label="Morale" value="9" />
              <KeyValue label="Armor" value="Trash Robes (-d2)" />
              <KeyValue label="Weapon" value="Ancient Revolver (d8)" />
              <Line red bold>ON DEATH (Outside The Synk):</Line>
              <Line>
                The Dead Queen sends appendage to retrieve corpse (unstoppable)
              </Line>
            </Section>

            <Section title="RITUAL ACTIVITY">
              <Line>Cultists make offerings to the 'dead god' below</Line>
              <Line>Items thrown into the chasm (into Dead Queen)</Line>
              <Line>Chanting and prayer at irregular intervals</Line>
              <Line yellow>⚠ Will defend chamber if intruders are hostile</Line>
            </Section>
          </>
        ),
      },

      "The Dead Queen": {
        content: (
          <>
            <Line cyan large bold>[THE DEAD QUEEN]</Line>
            <Line smoke>Massive entity at bottom of Sewage Chasm</Line>
            <Divider />

            <Box color="red">
              <Line bold>🚨 EXTREME THREAT - AVOID IF POSSIBLE</Line>
              <Line>Mass of dying flesh that catches anything thrown/falling</Line>
              <Line>Believes it is the 'dead god' worshipped by Dredgers</Line>
              <Line>Partially blocks Path to G0</Line>
            </Box>

            <Section title="THREAT PROFILE">
              <KeyValue label="Damage (on contact)" value="-2d6 (initial capture)" />
              <KeyValue label="Ongoing damage" value="d3 per round (incorporation)" />
              <KeyValue label="Escape" value="DR14 to break free" />
              <KeyValue label="Size" value="Enormous (fills chasm floor)" />
            </Section>

            <Section title="BEHAVIOR">
              <Line>Anything that falls into chasm ends up here</Line>
              <Line>Reaches up with appendages to catch victims</Line>
              <Line>Slowly incorporates captured matter into itself</Line>
              <Line>Will pursue Dredge Priest corpses (unstoppable)</Line>
              <Line yellow>⚠ Can extend tendrils up into tunnels if motivated</Line>
            </Section>

            <Section title="COMPOSITION">
              <Line>Accumulated trash, corpses, and waste from The 55</Line>
              <Line>Still-living tissue mixed with decaying matter</Line>
              <Line>Vaguely humanoid shape (barely recognizable)</Line>
              <Line>Constantly shifting and writhing</Line>
            </Section>
          </>
        ),
      },
    },
  },

  "The Base (Levels B20-B1)": {
    content: (
      <PublicPortal
        network="BASE_MAINTENANCE"
        signalStrength="weak"
        status="⚠ FOUNDATION LEVELS"
        statusColor="yellow"
        nowPlaying="Maintenance alerts and utility status"
        notes={[
          "Foundations of The 55",
          "Maintenance corridors, car parks, cheapest rents",
          "Dark corners and flickering lights",
          "Most residents avoid if possible",
        ]}
        theme="limeade"
      />
    ),
    related_commands: {
      "Base Directory": {
        content: (
          <>
            <Line cyan large bold>[THE BASE - FACILITY DIRECTORY]</Line>
            <Line smoke>Levels B20-B1 | Foundation infrastructure</Line>
            <Divider />

            <Section title="STORAGE & PARKING">
              <Line neon>1. Resident Storage Drawers</Line>
              <Line smoke>
                Thousands of body-sized units (50¤/month, questionable uses)
              </Line>
              <Divider />

              <Line neon>2. Bike Cages</Line>
              <Line smoke>
                Forgotten relics and stolen corporate tricycles (Ol' Sam repairs for 50¤)
              </Line>
              <Divider />

              <Line neon>3. Parking Pyre</Line>
              <Line smoke>Car park full of vehicle husks, trash, scrap metal</Line>
              <Divider />

              <Line neon>4. Resident Parking</Line>
              <Line smoke>
                Junkers and cheap cars (1/4 chance of 2d4 carjacking gang-goons)
              </Line>
              <Divider />

              <Line neon>5. VIP Parking</Line>
              <Line smoke>
                Robot valet, 2d6 cars (d20x1K¤ each), corporate access only
              </Line>
              <Divider />

              <Line neon>6. VIP Storage</Line>
              <Line smoke>Room-sized units (DR14 to break in, valuable contents)</Line>
            </Section>

            <Section title="HOUSING">
              <Line neon>7. Crypt Rooms</Line>
              <Line smoke>Concrete boxes, 50¤/month rent (cheapest in The 55)</Line>
            </Section>

            <Section title="INFRASTRUCTURE">
              <Line neon>8. Utility Corridors</Line>
              <Line smoke>
                Dark, winding, damp (DR16 to find back door to upper levels)
              </Line>
              <Divider />

              <Line neon>9. 'Net Control</Line>
              <Line smoke>Absolute mess of wires and thick cables</Line>
              <Divider />

              <Line neon>10. Water Reclamation</Line>
              <Line smoke>Sewage processing, grey water, massive tanks</Line>
              <Divider />

              <Line neon>11. Reactor ('The Devil')</Line>
              <Line smoke>
                Nuclear power source (2d4 workers, temperamental, critical)
              </Line>
              <Divider />

              <Line neon>12. The Grove</Line>
              <Line smoke>Workshop for cars and local machinery</Line>
            </Section>

            <Section title="ILLEGAL OPERATIONS">
              <Line neon>13. Crypto Racks</Line>
              <Line smoke>
                Processors mining cryptocurrency (2d6 gang-goons, natural cave)
              </Line>
              <Divider />

              <Line neon>14. The Rot</Line>
              <Line smoke>
                Fungal growths, decaying flesh (DR12 Toughness or get infestation)
              </Line>
              <Divider />

              <Line neon>15. Kergoz Compound</Line>
              <Line smoke>
                Cultists in repurposed cars/tents (1 Heir of Kergoz, secret Synk entrance)
              </Line>
            </Section>

            <Section title="SEALED/DANGEROUS">
              <Line neon>16. Fallout Shelter</Line>
              <Line smoke>Old, sealed for decade+ (500¤ bounty to open)</Line>
              <Divider />

              <Line neon>17. Stack Archive</Line>
              <Line smoke>Rusted filing cabinets, hundreds of rats and vermin</Line>
              <Divider />

              <Line neon>18. Stack Graveyard</Line>
              <Line smoke>PO box-sized plots for cremated remains (5¤ toll)</Line>
              <Divider />

              <Line neon>19. Trash Cave</Line>
              <Line smoke>
                Hollow carved from rock, compressed trash chunks (salvage opportunity)
              </Line>
              <Divider />

              <Line neon>20. Body Compactor</Line>
              <Line smoke>
                Was for trash, now gang-goons dispose of bodies here
              </Line>
            </Section>
          </>
        ),
        related_commands: {
          "The Reactor": {
            content: (
              <>
                <Line cyan large bold>[THE REACTOR - 'THE DEVIL']</Line>
                <Line smoke>Level B11 | Nuclear power source</Line>
                <Divider />

                <Section title="DESCRIPTION">
                  <Line>Huge temperamental nuclear reactor</Line>
                  <Line>Primary power source for The 55</Line>
                  <Line>Nicknamed 'The Devil' by maintenance workers</Line>
                  <Line>Constant humming and heat radiation</Line>
                </Section>

                <Section title="STAFF">
                  <Line neon bold>2d4 WORKERS (24/7 shifts):</Line>
                  <Line>Monitoring and maintaining reactor stability</Line>
                  <Line>Paranoid about catastrophic failure</Line>
                  <Line>Extremely protective of their workspace</Line>
                  <Line yellow>⚠ Will defend reactor from sabotage attempts</Line>
                </Section>

                <Section title="STATUS">
                  <KeyValue label="Power Output" value="98% of capacity" />
                  <KeyValue label="Condition" value="Stable but aging" />
                  <KeyValue label="Last Incident" value="4 years ago (minor leak)" />
                  <KeyValue label="Backup Systems" value="Solar + emergency batteries" />
                </Section>

                <Section title="HAZARDS">
                  <Line red>⚠ RADIATION EXPOSURE:</Line>
                  <Line>Shielded but not perfectly safe</Line>
                  <Line>DR12 Toughness after 1 hour exposure (unshielded areas)</Line>
                  <Line>Workers rotate shifts to minimize long-term exposure</Line>
                </Section>
              </>
            ),
          },

          "Kergoz Compound": {
            content: (
              <>
                <Line cyan large bold>[KERGOZ COMPOUND]</Line>
                <Line smoke>Level B15 | Cult of Kergoz settlement</Line>
                <Divider />

                <Section title="DESCRIPTION">
                  <Line>Cultists and supplicants squatting in repurposed cars</Line>
                  <Line>Tents and makeshift shelters</Line>
                  <Line>Covered in occult symbols and graffiti</Line>
                  <Line>Smells of incense and decay</Line>
                </Section>

                <Section title="LEADERSHIP">
                  <Line neon bold>1 HEIR OF KERGOZ:</Line>
                  <Line>Guards secret entrance to The Synk (DR14 to find)</Line>
                  <Line>Leads rituals and sacrifices</Line>
                  <Line>Hostile to outsiders unless they show interest in cult</Line>
                </Section>

                <Section title="POPULATION">
                  <Line>~20-30 cultists at any given time</Line>
                  <Line>Mix of desperate residents and true believers</Line>
                  <Line>Some come for shelter, stay for community</Line>
                  <Line yellow>⚠ Occasionally kidnap victims for sacrifice</Line>
                </Section>

                <Section title="SECRET ENTRANCE">
                  <Line red bold>PATH TO THE SYNK:</Line>
                  <Line>Hidden behind altar in main tent</Line>
                  <Line>DR14 to locate without guidance</Line>
                  <Line>Leads to Medieval Ruins in The Synk</Line>
                  <Line>Heavily guarded by Heir of Kergoz</Line>
                </Section>
              </>
            ),
          },

          "Crypto Racks": {
            content: (
              <>
                <Line cyan large bold>[CRYPTO RACKS]</Line>
                <Line smoke>Level B13 | Cryptocurrency mining operation</Line>
                <Divider />

                <Section title="DESCRIPTION">
                  <Line>Hundreds of processing units mining cryptocurrency</Line>
                  <Line>Located in natural cave (former water spring)</Line>
                  <Line>Extreme heat from processors</Line>
                  <Line>Constant whirring and fan noise</Line>
                </Section>

                <Section title="SECURITY">
                  <Line neon bold>2d6 GANG-GOONS on guard:</Line>
                  <Line>Desperate for investors and protection money</Line>
                  <Line>Will negotiate before resorting to violence</Line>
                  <Line>Poorly armed but determined</Line>
                </Section>

                <Section title="OPERATION">
                  <Line>Mining RATCOIN cryptocurrency</Line>
                  <Line>Barely profitable after power costs</Line>
                  <Line>Frequent equipment failures</Line>
                  <Line yellow>⚠ Gang always looking for backers or buyers</Line>
                </Section>

                <Section title="OPPORTUNITY">
                  <Line neon>POTENTIAL INTERACTIONS:</Line>
                  <Line>• Invest in operation (risky, small returns)</Line>
                  <Line>• Buy equipment (used crypto miners)</Line>
                  <Line>• Steal RATCOIN (heavily guarded)</Line>
                  <Line>• Sabotage for rival gang</Line>
                </Section>
              </>
            ),
          },
        },
      },

      access_base_maintenance: {
        password: {
          pw: "foundation",
          hint: "What The Base is (the bottom structural support)",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            businessName="THE BASE MAINTENANCE"
            welcomeMessage="MAINTENANCE ACCESS GRANTED"
            networkInfo="⚠ Foundation systems - Critical infrastructure"
            theme="limeade"
          />
        ),
        related_commands: {
          "Reactor Monitoring": {
            content: (
              <>
                <Line cyan large bold>[REACTOR MONITORING SYSTEM]</Line>
                <Line smoke>Real-time nuclear reactor status</Line>
                <Divider />

                <Section title="CORE STATUS">
                  <DataTable
                    data={[
                      { label: "Core Temperature", value: "547°C (Normal range)" },
                      { label: "Radiation Levels", value: "Contained (0.02 Sv/hr)" },
                      { label: "Power Output", value: "98% capacity (stable)" },
                      { label: "Cooling System", value: "Operational (96%)" },
                      { label: "Fuel Rods", value: "82% life remaining" },
                    ]}
                  />
                </Section>

                <Section title="ALERTS">
                  <Line yellow>⚠ COOLING SYSTEM PUMP #3:</Line>
                  <Line smoke>Operating at reduced efficiency (96%)</Line>
                  <Line smoke>Maintenance scheduled for next month</Line>
                  <Line smoke>Backup pump ready if needed</Line>
                </Section>

                <Section title="STAFF NOTES">
                  <Line neon bold>MAINTENANCE LOG (Last 24h):</Line>
                  <Line>• Routine inspection completed (all normal)</Line>
                  <Line>• Cooling system pressure adjusted</Line>
                  <Line>• Control rod calibration verified</Line>
                  <Line>• No anomalies detected</Line>
                </Section>

                <Section title="EMERGENCY PROTOCOLS">
                  <Line red bold>REACTOR FAILURE RESPONSE:</Line>
                  <Line>1. Automatic SCRAM (emergency shutdown)</Line>
                  <Line>2. Evacuate Base levels immediately</Line>
                  <Line>3. Seal reactor containment</Line>
                  <Line>4. Switch to backup power (solar + batteries)</Line>
                  <Line>5. Contact corporate nuclear response team</Line>
                  <Line yellow>⚠ Stack can run 72 hours on backup power</Line>
                </Section>
              </>
            ),
          },

          "Utility Access Map": {
            content: (
              <>
                <Line cyan large bold>[UTILITY CORRIDOR MAP]</Line>
                <Line smoke>Secret routes through The Base</Line>
                <Divider />

                <Section title="KNOWN PASSAGES">
                  <Line neon bold>VERIFIED ROUTES (DR16 to navigate):</Line>
                  <Line>• Base to Capsule Closets (via 'Net Control)</Line>
                  <Line>• Base to The Synk (via multiple maintenance shafts)</Line>
                  <Line>• Base to Multimart (via freight corridors)</Line>
                  <Line>• Base to Alliansen Arms (via water reclamation)</Line>
                  <Line yellow>⚠ All routes dark, dangerous, and unmapped</Line>
                </Section>

                <Section title="HAZARDS">
                  <Line red>CORRIDOR DANGERS:</Line>
                  <Line>• Total darkness (bring light source)</Line>
                  <Line>• Flooded sections (waist-deep water)</Line>
                  <Line>• Exposed electrical wiring</Line>
                  <Line>• Structural instability (ceiling collapse risk)</Line>
                  <Line>• Vermin encounters (rats, worse)</Line>
                  <Line>• Easy to get lost (DR16 navigation)</Line>
                </Section>

                <Section title="ADVANTAGES">
                  <Line neon>WHY USE UTILITY CORRIDORS:</Line>
                  <Line>• Bypass security checkpoints</Line>
                  <Line>• Avoid cameras and surveillance</Line>
                  <Line>• Access restricted areas undetected</Line>
                  <Line>• Fastest route between distant levels (if you know the way)</Line>
                </Section>
              </>
            ),
          },

          "Sealed Areas Log": {
            password: {
              pw: "sealed",
              hint: "What dangerous base areas are (closed off)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[SEALED AREAS - BASE LEVELS]</Line>
                <Line smoke>Quarantined and dangerous zones</Line>
                <Divider />

                <Section title="THE ROT (Level B18)">
                  <Line red bold>BIOHAZARD - FUNGAL CONTAMINATION</Line>
                  <KeyValue label="Status" value="Partially contained" />
                  <KeyValue label="Threat" value="Infestation risk" />
                  <KeyValue label="Last Entry" value="6 months ago" />
                  <Line>Fungal growths covering entire section</Line>
                  <Line>Decaying organic matter throughout</Line>
                  <Line>DR12 Toughness when breathing unfiltered air</Line>
                  <Line yellow>⚠ Random infestation on failed save</Line>
                </Section>

                <Divider />

                <Section title="FALLOUT SHELTER (Level B17)">
                  <Line yellow bold>SEALED - UNKNOWN CONTENTS</Line>
                  <KeyValue label="Status" value="Locked for 10+ years" />
                  <KeyValue label="Bounty" value="500¤ to open and report" />
                  <KeyValue label="Last Access" value="Over a decade ago" />
                  <Line>Old Cold War-era shelter</Line>
                  <Line>No one knows what's inside</Line>
                  <Line>Door heavily reinforced and locked</Line>
                  <Line yellow>⚠ May contain supplies, corpses, or worse</Line>
                </Section>

                <Divider />

                <Section title="BODY COMPACTOR (Level B19)">
                  <Line yellow bold>UNSANCTIONED USE - GANG ACTIVITY</Line>
                  <KeyValue label="Status" value="Active (illegal use)" />
                  <KeyValue label="Users" value="Local gang-goons" />
                  <KeyValue label="Risk" value="Witness elimination" />
                  <Line>Originally for trash compaction</Line>
                  <Line>Now used to dispose of bodies</Line>
                  <Line>Gang-goons guard area sporadically</Line>
                  <Line red>⚠ Witnessing disposal is extremely dangerous</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },

  "Four Court (Ground Level)": {
    content: (
      <PublicPortal
        network="FOUR_COURT_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN 24/7"
        statusColor="neon"
        nowPlaying="Market feeds, local music, daily memes"
        notes={[
          "4 large ground entrances opening to central courtyard",
          "Local merchants, con artists, street culture",
          "Whatever music, memes, and media is popular today",
          "Main access point for The 55",
        ]}
        theme="limeade"
      />
    ),
    related_commands: {
      "Court Directory": {
        content: (
          <>
            <Line cyan large bold>[FOUR COURT DIRECTORY]</Line>
            <Line smoke>Ground level | Main entrance to The 55</Line>
            <Divider />

            <Section title="KEY LOCATIONS">
              <Line neon>1. Info Walls</Line>
              <Line smoke>
                Inner walls covered in printouts, graffiti, requests (roll mission
                generator)
              </Line>
              <Divider />

              <Line neon>2. Court Market</Line>
              <Line smoke>
                Dozens of merchants, basic equipment (DR12 to not get pickpocketed)
              </Line>
              <Divider />

              <Line neon>3. Food Stalls</Line>
              <Line smoke>
                Locust pizza, synth ramen, moonshine, modified vending machines
              </Line>
              <Divider />

              <Line neon>4. C.O.P. Booth</Line>
              <Line smoke>
                Corporate Order Police (2d6 generic sec ops, 2 armored cars, 1 Vindicator
                droid)
              </Line>
              <Divider />

              <Line neon>5. Gates (4 total)</Line>
              <Line smoke>
                Massive accordion doors, open 24/7 (beggars, con artists, preachers)
              </Line>
              <Divider />

              <Line neon>6. [Fideistic Transformation] Kiosk</Line>
              <Line smoke>
                Religious converts, body rental contracts (2 United Citadel sec ops during
                hours)
              </Line>
              <Divider />

              <Line neon>7. Elevators</Line>
              <Line smoke>Slow, crowded (hours-long lineups, most use stairs)</Line>
              <Divider />

              <Line neon>8. Community Outreach Booth</Line>
              <Line smoke>
                Volunteers protecting The 55 from corpos/cults/NuFascists (jobs available,
                low/no pay)
              </Line>
            </Section>
          </>
        ),
        related_commands: {
          "Court Market": {
            content: (
              <>
                <Line cyan large bold>[COURT MARKET]</Line>
                <Line smoke>Ground level courtyard | Daily merchant activity</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Dozens of local merchants haggling over everyday items</Line>
                  <Line>Easy place to find basic equipment</Line>
                  <Line>DR12 to not get pickpocketed while here</Line>
                  <Line yellow>⚠ Active pickpocket problem</Line>
                </Section>

                <Section title="AVAILABLE GOODS">
                  <Line neon>BASIC EQUIPMENT (Standard prices):</Line>
                  <Line>• Food and water (synth and some fresh)</Line>
                  <Line>• Clothing (second-hand, some new)</Line>
                  <Line>• Tools (general purpose, basic quality)</Line>
                  <Line>• Electronics (phones, chargers, batteries)</Line>
                  <Line>• Miscellaneous supplies</Line>
                  <Divider />

                  <Line yellow>FOR LESS LEGAL ITEMS:</Line>
                  <Line smoke>Look further up the stack (Multimart, private vendors)</Line>
                </Section>

                <Section title="MERCHANTS">
                  <Line>30-40 vendors on any given day</Line>
                  <Line>Mix of regulars and traveling merchants</Line>
                  <Line>Most are friendly and willing to haggle</Line>
                  <Line>Some sell questionable goods (buyer beware)</Line>
                </Section>

                <Section title="SECURITY">
                  <Line red>⚠ PICKPOCKET ALERT:</Line>
                  <Line>DR12 to avoid theft while shopping</Line>
                  <Line>Multiple reported incidents daily</Line>
                  <Line>C.O.P. booth nearby but rarely intervenes</Line>
                  <Line>Vendors watch each others' stalls</Line>
                </Section>
              </>
            ),
          },

          "Food Stalls": {
            content: (
              <>
                <Line cyan large bold>[FOUR COURT FOOD STALLS]</Line>
                <Line smoke>Street food and refreshments</Line>
                <Divider />

                <Section title="AVAILABLE FOOD">
                  <DataTable
                    data={[
                      { label: "Locust pizza slice", value: "6¤" },
                      { label: "Synth ramen bowl", value: "8¤" },
                      { label: "Local moonshine (shot)", value: "4¤" },
                      { label: "Vending machine snacks", value: "2-5¤" },
                      { label: "Mystery meat skewer", value: "5¤" },
                      { label: "Fresh fruit (rare)", value: "10¤" },
                      { label: "Bottled water", value: "3¤" },
                      { label: "Synth coffee", value: "2¤" },
                    ]}
                  />
                </Section>

                <Section title="POPULAR STALLS">
                  <Line neon bold>MAMA'S LOCUST PIZZA:</Line>
                  <Line>Best pizza in Four Court (locals swear by it)</Line>
                  <Line>Run by elderly woman, always busy</Line>
                  <Divider />

                  <Line neon bold>SYNTH RAMEN CART:</Line>
                  <Line>Fast service, filling portions</Line>
                  <Line>Various flavors (quality varies)</Line>
                  <Divider />

                  <Line neon bold>MOONSHINE VENDOR:</Line>
                  <Line>Homemade alcohol of questionable origin</Line>
                  <Line yellow>⚠ Strength varies (DR10 Toughness or regret it)</Line>
                </Section>
              </>
            ),
          },

          "Community Outreach Booth": {
            content: (
              <>
                <Line cyan large bold>[55 COMMUNITY OUTREACH BOOTH]</Line>
                <Line smoke>Ground level | Volunteer organization</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>One of the few public institutions left</Line>
                  <Line>Overworked volunteers trying to protect The 55</Line>
                  <Line>Fighting corporations, cults, and NuFascists</Line>
                  <Line>Have jobs but don't expect much payment (if any)</Line>
                </Section>

                <Section title="SERVICES">
                  <Line>• Job board (community defense, investigations)</Line>
                  <Line>• Conflict mediation</Line>
                  <Line>• Resource coordination (food, supplies)</Line>
                  <Line>• Legal aid referrals (connect to Catie Calahan)</Line>
                  <Line>• Information sharing (warnings, threats)</Line>
                </Section>

                <Section title="ACTIVE VOLUNTEERS (Shift rotation)">
                  <Line>2-3 volunteers at booth during waking hours</Line>
                  <Line>Connected to Ada Five-Five (Alliansen Arms)</Line>
                  <Line>Network of ~20 active community members</Line>
                </Section>

                <Section title="CURRENT PRIORITIES">
                  <Line neon bold>ACTIVE CAMPAIGNS:</Line>
                  <Line>• NuFascist bounty program (1k¤ per head)</Line>
                  <Line>• Anti-eviction legal defense</Line>
                  <Line>• Universal basic income fund (12% funded)</Line>
                  <Line>• Corporate expansion resistance</Line>
                </Section>
              </>
            ),
          },
        },
      },

      "C.O.P. Booth": {
        content: (
          <>
            <Line cyan large bold>[CORPORATE ORDER POLICE BOOTH]</Line>
            <Line smoke>Ground level | Four Court security presence</Line>
            <Divider />

            <Section title="STAFFING">
              <Line neon bold>ALWAYS ON DUTY:</Line>
              <Line>• 2d6 Generic Sec Ops (rotating shifts)</Line>
              <Line>• 2 Armored Cars (garage attached)</Line>
              <Line>• 1 Vindicator Droid (emergency response)</Line>
            </Section>

            <Section title="JURISDICTION">
              <Line>Officially responsible for Four Court security</Line>
              <Line>In practice: Minimal enforcement</Line>
              <Line>Only respond to major incidents or corpo interests</Line>
              <Line yellow>⚠ Will not help with pickpocketing, minor disputes</Line>
            </Section>

            <Section title="RESPONSE PROTOCOLS">
              <Line neon bold>WILL RESPOND TO:</Line>
              <Line>• Violence involving corpo personnel</Line>
              <Line>• Major theft (more than 1,000¤ value)</Line>
              <Line>• Threats to Four Court structure</Line>
              <Line>• Gang warfare affecting access</Line>
              <Divider />

              <Line red bold>WILL IGNORE:</Line>
              <Line>• Pickpocketing</Line>
              <Line>• Con artists</Line>
              <Line>• Minor disputes</Line>
              <Line>• Most resident-on-resident crime</Line>
            </Section>

            <Section title="REPUTATION">
              <Line>Locals view C.O.P. as corporate enforcers (not real police)</Line>
              <Line>Most residents avoid contact unless absolutely necessary</Line>
              <Line>Known to harass lower-level residents</Line>
              <Line yellow>⚠ Reporting crimes may lead to being hassled yourself</Line>
            </Section>
          </>
        ),
      },
    },
  },
};

export default THE_55_LOWER_LEVELS_COMMANDS;
