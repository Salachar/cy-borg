import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  Camera,
  Extractable,
  GameConsole,
  Jukebox,
  Locked,
  MaintenanceAccess,
  Message,
  NetworkDevices,
  RetComImage,
  Safe,
  SmartFridge,
} from '@terminal/retcomdevice';

export const STEEL_PENTHOUSE_COMMANDS = {
  "Steel Jackhammer's Penthouse": {
    // password: {
    //   pw: "jackhammer_home",
    //   hint: "Network name visible on building systems",
    //   difficulty: "hard",
    //   content: <Locked theme="terminal" title="PENTHOUSE NETWORK" />
    // },
    content: (
      <Message
        title="PENTHOUSE SMART HOME"
        message="NETWORK ACCESS ESTABLISHED"
        note="Connected to JACKHAMMER_HOME | Welcome to the most over-engineered apartment in Central District"
        theme="casual"
      />
    ),
    related_commands: {
      "Penthouse Layout": {
        content: (
          <MaintenanceAccess
            title="[PENTHOUSE LAYOUT - UNIT 4201]"
            deviceModel="Smart Home Mapping System"
            deviceId="LAYOUT-4201"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Source: Viral interview footage (uncut version)",
              "Verified by smart home sensor data",
              "3-bedroom penthouse suite",
              "Southeast corner unit, Floor 42"
            ]}
          >
            <Divider />
            <InsetBox title="BLUEPRINT:">
              <RetComImage
                src="/path/to/penthouse_blueprint.jpg"
                alt="Steel Jackhammer Penthouse Layout"
                caption="Unit 4201 - Floor plan from interview footage"
              />
            </InsetBox>
            <Divider />
            <InsetBox title="ROOM DIRECTORY:">
              <Line neon>HALLWAY - Entry point, constant guest/dealer traffic</Line>
              <Line neon>GUEST ROOM - Rarely used storage, random items</Line>
              <Line neon>MASTER BEDROOM - Soundproof, wall safe, closet stash</Line>
              <Line neon>KITCHEN - Unused for cooking, smart appliances begging for attention</Line>
              <Line neon>HOLO SPACE - Main party hub, multi-person entertainment</Line>
              <Line neon>DINING ROOM - Buffet table, gene-spliced big cats in cage</Line>
              <Line neon>BALCONY - "Bulletproof" glass (allegedly), no holos, incredible view</Line>
              <Line neon>SPA - Hot tub and sauna, steamy, drowsy guests</Line>
              <Line neon>SENSORY DEPRIVATION CHAMBER - Water coffin, lockable from outside</Line>
              <Line neon>GYM - Weights and sparring cydroid (MAXIMUM DIFFICULTY)</Line>
            </InsetBox>
            <InsetBox title="STEEL JACKHAMMER'S LOCATION:">
              <Line yellow>Currently day 3+ of continuous party</Line>
              <Line yellow>Moves between rooms randomly (D4):</Line>
              <Line yellow>1. Master Bedroom</Line>
              <Line yellow>2. Balcony</Line>
              <Line yellow>3. Dining Room</Line>
              <Line yellow>4. Holo Space</Line>
              <Line smoke small>May move if events call his attention elsewhere</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Party Status": {
        content: (
          <MaintenanceAccess
            title="[CURRENT PARTY STATUS]"
            deviceModel="Guest Tracking System"
            deviceId="PARTY-MONITOR-01"
            firmwareVersion="v1.0.0"
            systemStatus="OVERWHELMED"
            notes={[
              "Day 3+ of continuous party",
              "No end in sight",
              "Guest count: 20+ (mix of flesh and holo-avatars)",
              "Majority of guests are holo-projections",
              "Dealers rotating in hallway constantly"
            ]}
          >
            <Divider />
            <InsetBox title="GUEST COMPOSITION:">
              <Line cyan>Most guests: Ordinary people (friends, fans, associates)</Line>
              <Line cyan>Majority present as holo-avatars (remote attendance)</Line>
              <Line cyan>Flesh guests: Will avoid violence if possible</Line>
              <Line yellow bold>VIP Athletes: 8 killmatch fighters (WILL fight)</Line>
            </InsetBox>
            <InsetBox title="ENTRY SECURITY:">
              <Line yellow>Two guards outside penthouse door</Line>
              <Line yellow>Brutish looking but lazy after days of party traffic</Line>
              <Line yellow>Check for heavy weapons on entry</Line>
              <Line yellow>Check for excess drugs on exit</Line>
              <Line yellow>Reasonable excuse/lie gets you in</Line>
              <Line yellow>If you look like you can party with C-list killmatch athletes, you're in</Line>
              <Line smoke small>Asked to leave twice before force is used</Line>
            </InsetBox>
            <InsetBox title="GUARD STATS (FOR GM):">
              <Line red>HP: 10 | Morale: 8</Line>
              <Line red>Armor: Flak jacket (-D2)</Line>
              <Line red>Weapons: Shotgun (D8) / Fire axe (D6)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "VIP Guest List": {
            content: (
              <MaintenanceAccess
                title="[VIP KILLMATCH ATHLETES]"
                deviceModel="Guest Database"
                deviceId="VIP-ROSTER-01"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "8 VIP athletes confirmed at party",
                  "Roll D6 for number of unnamed guests in room",
                  "Roll D8 for which VIP is present",
                  "These fighters WILL engage in violence",
                  "Most regular guests will flee or hide"
                ]}
              >
                <Divider />
                <InsetBox title="D8 VIP ROSTER:">
                  <Line yellow bold>1. ZENIT</Line>
                  <Line>HP: 8 | Morale: 7 | No armor | 9mm (D6a)</Line>
                  <Line smoke>Writer for KILL!KILL!KILL! fan feed. Publishes intimate athlete interviews via manipulation and guile.</Line>

                  <Divider />

                  <Line yellow bold>2. IKHON</Line>
                  <Line>HP: 12 | Morale: 9 | Heavy robes (-D2) | Shockstick (D4)</Line>
                  <Line>Death Grip: Large black hand grabs target (Agility DR12 or D6 damage/round for D4 rounds)</Line>
                  <Line smoke>Nano-using athlete with mysterious warlock persona. Cheerful and friendly when drugs are available.</Line>

                  <Divider />

                  <Line yellow bold>3. THUGGER</Line>
                  <Line>HP: 9 | Morale: 10 | Skinhard (-D2) | Mollys (D6)</Line>
                  <Line>Electro-taurs: Charge attack (D10 damage + knockdown)</Line>
                  <Line>Cyberspine: Attacks twice each round</Line>
                  <Line smoke>Cocky asshole with 11-month win streak. Never shuts up about it.</Line>

                  <Divider />

                  <Line yellow bold>4. RAZE</Line>
                  <Line>HP: 4 | Morale: 4 | Tech overall (-D2) | Smartgun (D10)</Line>
                  <Line>Tech Overall: Auto-injects Red-juice (+D10 HP) at 1 HP or less</Line>
                  <Line>RazeCD App: Floods D3 targets' RCDs with holovids (attacks +2DR, +4DR if targeting Raze)</Line>
                  <Line smoke>Greedy hacker with gambling problem. Here to gather gossip for result-prediction model.</Line>

                  <Divider />

                  <Line yellow bold>5. AMANDE</Line>
                  <Line>HP: 6 | Morale: 5 | No armor | Filament knife (D6)</Line>
                  <Line smoke>Pilots small mech when fighting. Without it, hardly recognized. Plans to poison Thugger before their upcoming fight.</Line>

                  <Divider />

                  <Line yellow bold>6. MASTER CRIMSON</Line>
                  <Line>HP: 12 | Morale: 8 | No armor | Injectors (D2 + Red Pain DR12 or D10 damage)</Line>
                  <Line>Rust Dust: Spits cloud slowing target (attacks/defense +2DR for D4 rounds)</Line>
                  <Line smoke>Member of Arvtagarna (Heirs of Kergoz breakout group). Seeks Nano dominance, not eradication. C-list veteran, bored of circus.</Line>

                  <Divider />

                  <Line yellow bold>7. GOLIATHESS</Line>
                  <Line>HP: 18 | Morale: 10 | StoneSkin (-D4) | Stone fist (D8)</Line>
                  <Line>Berserker: At 9 HP, attacks twice per round (second attack D10)</Line>
                  <Line smoke>Up-and-coming athlete. In it for drama and storylines, not fights. Engineers drama for views.</Line>

                  <Divider />

                  <Line yellow bold>8. JADE BOOMSLANG</Line>
                  <Line>HP: 10 | Morale: 5 | Scales (-D2) | Boomslang punch (D6, fires 10m, DR14 to defend)</Line>
                  <Line smoke>Virid Vipers sponsored talent. Reptile scale tattoos are actually Nano infestation (secret). Desperately wants friends.</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Random Events": {
            content: (
              <MaintenanceAccess
                title="[RANDOM EVENT TABLE]"
                deviceModel="Party Chaos Tracker"
                deviceId="EVENT-MONITOR-01"
                firmwareVersion="v1.0.0"
                systemStatus="CHAOTIC"
                notes={[
                  "Roll every hour (in-game or IRL, whichever comes first)",
                  "Each event happens only once",
                  "Pick available event if you roll same number twice",
                  "GM discretion for timing and severity"
                ]}
              >
                <Divider />
                <InsetBox title="D6 RANDOM EVENTS:">
                  <Line yellow bold>1. DEALER TURF WAR</Line>
                  <Line>D4+1 rival dealers storm in. Violent fight ensues.</Line>
                  <Line>Unless someone interferes: Fight ends quickly, bodies dragged out, winner sets up shop in hallway.</Line>

                  <Divider />

                  <Line yellow bold>2. CATS RELEASED</Line>
                  <Line>The gene-spliced big cats are let loose.</Line>
                  <Line>They attack anyone who panics. Someone will panic.</Line>

                  <Divider />

                  <Line yellow bold>3. VIP INVITES FANS</Line>
                  <Line>One VIP invites their fans remotely.</Line>
                  <Line>Hundreds of holoprojected heads scream with excitement until muted.</Line>
                  <Line>They follow anyone famous-looking around, silently watching.</Line>

                  <Divider />

                  <Line yellow bold>4. VIP FIGHT</Line>
                  <Line>Fight breaks out between two VIPs.</Line>
                  <Line>If no one interferes: Steel Jackhammer intervenes, taking side of non-athlete first, smaller fighter second.</Line>

                  <Divider />

                  <Line yellow bold>5. SDC LOCKDOWN</Line>
                  <Line>Someone gets locked in the sensory deprivation chamber.</Line>
                  <Line>Can go unnoticed for hours.</Line>

                  <Divider />

                  <Line yellow bold>6. DRONE-SUIT PUNKS</Line>
                  <Line>Four punks in drone suits land on balcony.</Line>
                  <Line>Here to kidnap Master Crimson, but not paid well enough to risk death.</Line>
                  <Line smoke small>Punk stats: HP 5, Morale 4, StyleGuard (-D2), 9mm (D6a) or Pneumatic glove (D6)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Steel Jackhammer Stats": {
            content: (
              <MaintenanceAccess
                title="[TARGET: STEEL JACKHAMMER]"
                deviceModel="Combat Profile Database"
                deviceId="TARGET-STEEL-01"
                firmwareVersion="v1.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Killmatch heavyweight division",
                  "Currently recovering from Krok fight (legs ripped off)",
                  "New chrome legs from Alliansen Inc. (STOLEN DESIGN)",
                  "Day 3+ of recovery party (not actually resting)",
                  "Moves between Master Bedroom, Balcony, Dining Room, Holo Space"
                ]}
              >
                <Divider />
                <InsetBox title="COMBAT STATS:">
                  <Line red bold>HP: 12</Line>
                  <Line red bold>Morale: 8</Line>
                  <Line red bold>Armor: None (party mode)</Line>
                  <Line red bold>Weapon: Jackhammer Punch (D6)</Line>
                  <Line yellow>Special: On 5+ damage, attack again (chained attacks)</Line>
                </InsetBox>
                <InsetBox title="CHROME LEG EXTRACTION:">
                  <Line cyan bold>CRITICAL PROCEDURE:</Line>
                  <Line cyan>1. Target must be incapacitated (unconscious/restrained)</Line>
                  <Line cyan>2. DR14 Knowledge test required for safe removal</Line>
                  <Line cyan>3. Failure causes D8 damage to legs = payment reduction</Line>
                  <Line cyan>4. Witness reactions depend on PC actions during party</Line>
                  <Line red>Payment reduction: -500¤ per point of damage to merchandise</Line>
                </InsetBox>
                <InsetBox title="AFTERMATH (IF STEEL SURVIVES):">
                  <Line smoke>His next match becomes big news.</Line>
                  <Line smoke>Opponent Gargoyle wins by strangling Steel with his own stolen legs.</Line>
                  <Line smoke>The irony is not lost on the feeds.</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Network Devices": {
        content: (
          <NetworkDevices
            networkName="JACKHAMMER_HOME"
            devices={[
              { name: "Security Console", ip: "192.168.1.10", type: "Security", status: "ONLINE", lastSeen: "Active now" },
              { name: "Camera System", ip: "192.168.1.20-28", type: "Surveillance", status: "ONLINE", lastSeen: "Active now" },
              { name: "Entertainment Hub", ip: "192.168.1.30", type: "Media", status: "ONLINE", lastSeen: "Active now" },
              { name: "Jukebox", ip: "192.168.1.31", type: "Audio", status: "ONLINE", lastSeen: "Active now" },
              { name: "Holo Projectors", ip: "192.168.1.40-49", type: "Display", status: "ONLINE", lastSeen: "Active now" },
              { name: "Game Console", ip: "192.168.1.50", type: "Entertainment", status: "ONLINE", lastSeen: "Active now" },
              { name: "Smart Fridge", ip: "192.168.1.60", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
              { name: "Smart Freezer", ip: "192.168.1.61", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
              { name: "Coffee Machine", ip: "192.168.1.62", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
              { name: "HVAC Control", ip: "192.168.1.70", type: "Climate", status: "ONLINE", lastSeen: "Active now" },
              { name: "Lighting System", ip: "192.168.1.71", type: "Climate", status: "ONLINE", lastSeen: "Active now" },
              { name: "Gym Equipment", ip: "192.168.1.80", type: "Fitness", status: "ONLINE", lastSeen: "Active now" },
              { name: "Sparring Cydroid", ip: "192.168.1.81", type: "Training", status: "ONLINE", lastSeen: "Active now" },
              { name: "Holo Space Safe", ip: "192.168.1.90", type: "Security", status: "ONLINE", lastSeen: "Active now" },
            ]}
          />
        ),
      },

      "Hallway": {
        content: (
          <MaintenanceAccess
            title="[HALLWAY - ENTRY POINT]"
            deviceModel="Entry Monitoring System"
            deviceId="HALL-4201"
            firmwareVersion="v1.0.0"
            systemStatus="HIGH TRAFFIC"
            notes={[
              "Guests and deliveries coming and going",
              "Dealers rotating constantly",
              "As soon as one dealer leaves, another shows up",
              "Two guards posted outside in building hallway",
              "Inside hallway connects all rooms"
            ]}
          >
            <Divider />
            <InsetBox title="CURRENT ACTIVITY:">
              <Line cyan>Constant flow of party guests</Line>
              <Line cyan>Multiple dealers visible (drugs, stims, party supplies)</Line>
              <Line cyan>Delivery personnel (food, alcohol)</Line>
              <Line cyan>Mix of flesh guests and holo-avatars</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Guest Room": {
        content: (
          <MaintenanceAccess
            title="[GUEST ROOM]"
            deviceModel="Room Status Monitor"
            deviceId="GUEST-4201"
            firmwareVersion="v1.0.0"
            systemStatus="UNUSED"
            notes={[
              "Rarely used room",
              "Mostly storage for random items",
              "Closet full of boxes",
              "Never-used kitchen items, books, formal wear"
            ]}
          >
            <Divider />
            <InsetBox title="CLOSET CONTENTS:">
              <Line smoke>Boxes with random, never-used items:</Line>
              <Line smoke>• Pots and pans (still in packaging)</Line>
              <Line smoke>• Old books (unread, decorative)</Line>
              <Line smoke>• Tuxedo (worn once, maybe)</Line>
              <Line smoke>• Various other forgotten purchases</Line>
            </InsetBox>
            <InsetBox title="DRAWER CONTENTS:">
              <Line yellow>Two packs of Faceblock detected</Line>
              <Line smoke small>Facial recognition blocker. Useful for not being identified...</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Search Drawer": {
            content: (
              <Extractable
                id="penthouse-guest-drawer"
                physicalItems={[
                  {
                    id: "faceblock_pack_1",
                    label: "Faceblock (Pack 1)",
                    description: "Facial recognition blocker",
                    value: 450
                  },
                  {
                    id: "faceblock_pack_2",
                    label: "Faceblock (Pack 2)",
                    description: "Facial recognition blocker",
                    value: 450
                  },
                ]}
                stealing={true}
              />
            ),
          },
        },
      },

      "Master Bedroom": {
        content: (
          <MaintenanceAccess
            title="[MASTER BEDROOM]"
            deviceModel="Room Status Monitor"
            deviceId="MASTER-4201"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Soundproof room",
              "Smells of incense and cleaning detergent",
              "Bed unmade (unused for days)",
              "Small wall safe visible",
              "Closet contains backpack with hidden items"
            ]}
          >
            <Divider />
            <InsetBox title="ROOM FEATURES:">
              <Line cyan>Soundproofed walls (good for privacy or crimes)</Line>
              <Line cyan>King-sized bed (unmade, unused during party)</Line>
              <Line cyan>Expensive watch on nightstand</Line>
              <Line cyan>Clothes scattered everywhere</Line>
              <Line cyan>Door to en-suite bathroom</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Wall Safe": {
            // password: {
            //   pw: "4201",
            //   hint: "The penthouse unit number",
            //   difficulty: "easy",
            //   content: <Locked theme="safe" title="WALL SAFE" />
            // },
            content: (
              <Safe
                id="penthouse-master-safe"
                model="SafeBox Mini"
                location="Master Bedroom - Small wall safe"
                owner="Steel Jackhammer"
                security="Mechanical lock"
                lastAccess="4 days ago (pre-party)"
                physical={[]}
                digital={[]}
                notes="Nothing of value or interest inside. Just an empty safe for show."
                stealing={true}
              />
            ),
          },

          "Closet": {
            content: (
              <MaintenanceAccess
                title="[MASTER BEDROOM CLOSET]"
                deviceModel="Inventory System"
                deviceId="CLOSET-MASTER"
                firmwareVersion="v1.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Designer clothes everywhere",
                  "30+ pairs of shoes",
                  "Multiple gym bags",
                  "Otherwise-empty backpack on floor"
                ]}
              >
                <Divider />
                <InsetBox title="BACKPACK DETECTED:">
                  <Line yellow>Weight sensors indicate hidden items inside</Line>
                  <Line yellow>Appears empty at first glance</Line>
                  <Line yellow>Smart hiding spot for emergency stash</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Search Backpack": {
                content: (
                  <Extractable
                    id="penthouse-master-backpack"
                    digitalItems={[
                      {
                        id: "credstick_2500",
                        label: "Credstick",
                        description: "2,500¤",
                        value: 2500,
                        isCredits: true
                      },
                    ]}
                    physicalItems={[
                      {
                        id: "vurt_dose",
                        label: "Vurt",
                        description: "1 dose - high-grade hallucinogen",
                        value: 300
                      },
                    ]}
                    stealing={true}
                  />
                ),
              },
            },
          },

          "Master Bedroom Camera": {
            content: (
              <Camera
                id="cam-penthouse-master"
                location="Master Bedroom"
                coverage="Full room view including closet and bathroom door"
                status="ACTIVE"
                recording={true}
                storage="Local NAS (30 day retention)"
                timeline={[
                  "Today, 14:45 → Room empty (Steel at party)",
                  "Today, 13:20 → Someone entered briefly, checked closet",
                  "Yesterday, 22:00 → Room empty all evening",
                  "Yesterday, 16:30 → Steel grabbed gym bag, left quickly",
                ]}
                blindSpots={[
                  "Inside bathroom (privacy mode)",
                ]}
                lastService="2 weeks ago"
              />
            ),
          },
        },
      },

      "Kitchen": {
        content: (
          <MaintenanceAccess
            title="[KITCHEN]"
            deviceModel="Appliance Network"
            deviceId="KITCHEN-4201"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Never used for actual cooking",
              "Smart appliances longing for attention",
              "High-end equipment gathering dust",
              "Party supplies dominate actual food"
            ]}
          >
            <Divider />
            <InsetBox title="CONNECTED APPLIANCES:">
              <Line neon>Smart Fridge (well-stocked with drinks)</Line>
              <Line neon>Smart Freezer (party supplies + Blackout doses)</Line>
              <Line neon>Coffee Machine (lonely and unused)</Line>
              <Line neon>Smart Oven (pristine, never used)</Line>
              <Line neon>Dishwasher (running constantly during party)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Smart Fridge": {
            content: (
              <SmartFridge
                id="penthouse-fridge"
                model="CoolTech VIP-9000"
                location="Kitchen"
                temperature={38}
                physicalItems={[
                  {
                    id: "fridge_beer",
                    label: "Beer x48 bottles",
                    description: "Various brands for party"
                  },
                  {
                    id: "fridge_energy",
                    label: "Energy Drinks x32 cans",
                    description: "Party fuel"
                  },
                  {
                    id: "fridge_synth_juice",
                    label: "Synth-juice x12 bottles",
                    description: "Synthetic fruit juice"
                  },
                  {
                    id: "fridge_cocktails",
                    label: "Pre-mixed Cocktails x18 cans",
                    description: "Ready to drink"
                  },
                  {
                    id: "fridge_water",
                    label: "Water x24 bottles",
                    description: "Mostly untouched"
                  },
                  {
                    id: "fridge_protein",
                    label: "Protein Packs x8",
                    description: "Meal replacement"
                  },
                  {
                    id: "fridge_takeout",
                    label: "Leftover Takeout",
                    description: "Days old, probably bad"
                  },
                ]}
                freezerItems={[
                  {
                    id: "freezer_blackout",
                    label: "Blackout x10 doses",
                    description: "Sedative drug - kept frozen for preservation",
                    value: 1500,
                    isCredits: false
                  },
                  {
                    id: "freezer_ice_cream",
                    label: "Ice Cream x3 containers",
                    description: "Various flavors"
                  },
                  {
                    id: "freezer_pizza",
                    label: "Frozen Pizza x4 boxes",
                    description: "Untouched"
                  },
                  {
                    id: "freezer_ice",
                    label: "Ice x2 bags",
                    description: "For drinks"
                  },
                ]}
                freezerTemp={0}
                notes="Auto-reorder disabled - party consumption too high. Fridge desperately trying to order supplies but gave up."
              />
            ),
          },

          "Coffee Machine": {
            content: (
              <MaintenanceAccess
                title="[PREMIUM COFFEE MACHINE]"
                deviceModel="BrewMaster 8000 Pro"
                deviceId="COFFEE-KITCHEN"
                firmwareVersion="v3.1.0"
                systemStatus="STANDBY"
                notes={[
                  "Unused during party (everyone's on harder stuff)",
                  "Last use: 4 days ago",
                  "Bean supply: Full",
                  "Water: Full",
                  "Lonely machine sits on standby while party rages"
                ]}
              >
                <Divider />
                <InsetBox title="MAINTENANCE PANEL:">
                  <Line yellow>Side panel shows signs of tampering...</Line>
                  <Line yellow>Hidden compartment detected</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Hidden Compartment": {
                // password: {
                //   pw: "brew8000",
                //   hint: "Model number from the machine specs",
                //   difficulty: "easy",
                //   content: <Locked theme="terminal" title="MAINTENANCE PANEL" />
                // },
                content: (
                  <Extractable
                    id="penthouse-coffee-stash"
                    physicalItems={[
                      {
                        id: "coffee_emergency_cash",
                        label: "Emergency cash",
                        description: "180¤ in bills",
                        value: 180,
                        isCredits: true
                      },
                    ]}
                    stealing={true}
                  />
                ),
              },
            },
          },
        },
      },

      "Holo Space": {
        content: (
          <MaintenanceAccess
            title="[HOLO SPACE - MAIN PARTY HUB]"
            deviceModel="Entertainment Center"
            deviceId="HOLO-4201"
            firmwareVersion="v2.0.0"
            systemStatus="PARTY MODE ACTIVE"
            notes={[
              "Multi-person holo entertainment setup",
              "Main party gathering area",
              "8-10 people visible constantly",
              "Music blasting, gaming in progress",
              "Cyber-Lich painting on wall (hiding safe)"
            ]}
          >
            <Divider />
            <InsetBox title="CURRENT SCENE:">
              <Line cyan>8-10 people visible (mix flesh/holo-avatars)</Line>
              <Line cyan>Gaming tournament on big screen</Line>
              <Line cyan>Music bass vibrations visible on camera</Line>
              <Line cyan>Gin and tonics on table (canned, pre-mixed)</Line>
              <Line cyan>Someone passed out on couch</Line>
              <Line cyan>Cyber-Lich painting slightly crooked on wall</Line>
            </InsetBox>
            <InsetBox title="ENTERTAINMENT SYSTEMS:">
              <Line neon>Jukebox (loud techno currently playing)</Line>
              <Line neon>Holo projectors (4 units for immersive display)</Line>
              <Line neon>Game console (GameBox Elite Pro)</Line>
              <Line neon>Smart TV (holo-integrated)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Jukebox": {
            content: (
              <Jukebox
                location="Steel Jackhammer's Penthouse - Holo Space"
                credits={0}
                theme="club"
                nowPlaying={{
                  title: "Chrome Fist Fury",
                  artist: "Killmatch Anthems Vol. 3",
                  genre: "Industrial Techno"
                }}
                queue={[
                  { title: "Blood on the Canvas", artist: "Cage Kings", genre: "Heavy Metal" },
                  { title: "Victory Lap", artist: "Champion Sounds", genre: "Trap" }
                ]}
                library={[
                  {
                    genre: "Industrial Techno",
                    songs: [
                      { title: "Chrome Fist Fury", artist: "Killmatch Anthems Vol. 3" },
                      { title: "Steel Rain", artist: "Cyber Assault" },
                      { title: "Hydraulic Pressure", artist: "Machine Gods" }
                    ]
                  },
                  {
                    genre: "Heavy Metal",
                    songs: [
                      { title: "Blood on the Canvas", artist: "Cage Kings" },
                      { title: "Warrior's Anthem", artist: "Battle Cry" },
                      { title: "No Mercy", artist: "Killzone" }
                    ]
                  },
                  {
                    genre: "Synthwave",
                    songs: [
                      { title: "Neon Victory", artist: "Retro Fighters" },
                      { title: "Digital Champion", artist: "ChromeCast" }
                    ]
                  }
                ]}
              />
            ),
            related_commands: {
              "Admin Control": {
                // password: {
                //   pw: "dj_override",
                //   hint: "Music control admin access",
                //   difficulty: "medium",
                //   content: <Locked theme="terminal" title="JUKEBOX ADMIN" />
                // },
                content: (
                  <MaintenanceAccess
                    title="[JUKEBOX CONTROL - ADMIN ACCESS]"
                    deviceModel="SoundBlast Pro DJ"
                    deviceId="JUKE-HOLO"
                    firmwareVersion="v4.0.0"
                    systemStatus="PARTY MODE"
                    notes={[
                      "Full audio control available",
                      "Volume: Currently at 85% (loud)",
                      "Party has been LOUD for 3+ days"
                    ]}
                  >
                    <Divider />
                    <InsetBox title="OVERRIDE OPTIONS:">
                      <Line yellow>Force-play specific song immediately</Line>
                      <Line yellow>Loop obnoxious track indefinitely</Line>
                      <Line yellow>Kill audio entirely (awkward silence)</Line>
                      <Line yellow>Max volume (painful levels)</Line>
                    </InsetBox>
                    <InsetBox title="TACTICAL USES:">
                      <Line cyan>Distraction: Sudden audio change draws attention</Line>
                      <Line cyan>Chaos: Loop annoying song at max volume</Line>
                      <Line cyan>Stealth: Kill audio for quieter movement</Line>
                      <Line cyan>Social: Play Steel's hype song to draw him out</Line>
                    </InsetBox>
                    <Line smoke small>Current party is LOUD. Audio changes might go unnoticed unless extreme.</Line>
                  </MaintenanceAccess>
                ),
              },
            },
          },

          "Game Console": {
            content: (
              <GameConsole
                id="console-penthouse-elite"
                model="GameBox Elite Pro"
                location="Steel Jackhammer's Penthouse - Holo Space"
                onlineStatus={true}
                games={[
                  {
                    title: "Killmatch Champions",
                    genre: "Fighting Sim",
                    players: "1-8 Online",
                    lastPlayed: "Currently running (4 players in tournament)"
                  },
                  {
                    title: "Street Wars Online",
                    genre: "Action RPG",
                    players: "1-4 Co-op",
                    lastPlayed: "6 hours ago"
                  },
                  {
                    title: "Cyber Racing Unlimited",
                    genre: "Racing",
                    players: "1-12 Online",
                    lastPlayed: "2 days ago"
                  }
                ]}
                wallet={{
                  credits: 47500,
                  items: []
                }}
              >
                <Divider />
                <InsetBox title="IN-GAME WALLET DETECTED:">
                  <Line yellow bold>47,500 in-game credits available</Line>
                  <Line yellow>Can be converted to real currency on black market</Line>
                  <Line yellow>Conversion rate: ~25% (11,875¤ real value)</Line>
                  <Line smoke small>Pro gamers with money to burn. Lots of microtransactions...</Line>
                </InsetBox>
              </GameConsole>
            ),
          },

          "Holo Projectors": {
            content: (
              <MaintenanceAccess
                title="[HOLO PROJECTOR CONTROL]"
                deviceModel="Multi-Room Holographic System"
                deviceId="HOLO-PROJ-01"
                firmwareVersion="v5.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "11 projectors total across penthouse",
                  "Currently displaying party content",
                  "Majority of party guests are holo-avatars",
                  "Real guests mixed with projections"
                ]}
              >
                <Divider />
                <InsetBox title="ACTIVE PROJECTORS:">
                  <Line neon>Holo Space: 4 projectors (main entertainment)</Line>
                  <Line neon>Master Bedroom: 2 projectors (ambient/entertainment)</Line>
                  <Line neon>Dining Room: 2 projectors (atmosphere)</Line>
                  <Line neon>Gym: 1 projector (training displays)</Line>
                  <Line neon>Spa: 2 projectors (relaxation visuals)</Line>
                  <Line smoke small>No projectors in: Balcony, SDC (by design)</Line>
                </InsetBox>
                <InsetBox title="OVERRIDE CAPABILITIES:">
                  <Line yellow>Display custom content on any projector</Line>
                  <Line yellow>Invite unlimited holo-avatars (flood with fake guests)</Line>
                  <Line yellow>Kill projections entirely</Line>
                  <Line yellow>Seizure-inducing flashing (extreme measure)</Line>
                </InsetBox>
                <Line red>WARNING: Extreme holo interference may cause panic or investigation</Line>
                <Line smoke small>Half the party guests are holo-avatars. Real guests in flesh.</Line>
              </MaintenanceAccess>
            ),
          },

          "Cyber-Lich Painting": {
            content: (
              <MaintenanceAccess
                title="[CYBER-LICH PAINTING]"
                deviceModel="Art Piece (Decorative)"
                deviceId="ART-HOLO-01"
                firmwareVersion="N/A"
                systemStatus="SLIGHTLY CROOKED"
                notes={[
                  "Expensive digital art piece",
                  "Currently hanging at slight angle",
                  "Mounted on wall",
                  "Hiding something behind it..."
                ]}
              >
                <Divider />
                <InsetBox title="OBSERVATION:">
                  <Line yellow>Painting appears to be concealing wall-mounted object</Line>
                  <Line yellow>Size and position suggest hidden safe</Line>
                  <Line yellow>Would need to remove painting to access</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
            related_commands: {
              "Hidden Safe": {
                // password: {
                //   pw: "match_fix",
                //   hint: "What the data chip inside proves (two words, underscore)",
                //   difficulty: "hard",
                //   content: <Locked theme="vault" title="SAFE ACCESS" />
                // },
                content: (
                  <Safe
                    id="penthouse-holo-safe"
                    model="FortressMax-Elite"
                    location="Holo Space - Behind Cyber-Lich painting"
                    owner="Steel Jackhammer"
                    security="Scan/EMP-shielded + Mechanical lock"
                    lastAccess="3 days ago (pre-party)"
                    physical={[]}
                    digital={[
                      {
                        id: "match_fixing_chip",
                        label: "Data Chip",
                        description: "Evidence of match fixing between Alliansen Inc. and TG Labs",
                        value: 9000,
                      }
                    ]}
                    notes="Can be sold to competitor's media or PR agents for up to 9,000¤. Publishing this will end Steel Jackhammer's career/life if it hasn't ended already. He probably doesn't even know what he has."
                    stealing={true}
                  />
                ),
              },
            },
          },

          "Holo Space Camera": {
            content: (
              <Camera
                id="cam-penthouse-holo"
                location="Holo Space (Main Party Area)"
                coverage="Main entertainment area, seating, table, Cyber-Lich painting"
                status="ACTIVE"
                recording={true}
                storage="Local NAS (30 day retention)"
                timeline={[
                  "Now → 8-10 people visible, gaming tournament active",
                  "14:32 → New guests arrived, joined game",
                  "13:45 → Someone passed out on couch (still there)",
                  "12:20 → VIP altercation (resolved quickly)",
                ]}
                blindSpots={[]}
                lastService="2 weeks ago"
              />
            ),
          },
        },
      },

      "Dining Room": {
        content: (
          <MaintenanceAccess
            title="[DINING ROOM]"
            deviceModel="Room Monitor"
            deviceId="DINING-4201"
            firmwareVersion="v1.0.0"
            systemStatus="ACTIVE"
            notes={[
              "Half room barred off as cage",
              "Two gene-spliced big cats contained",
              "Buffet table set up",
              "3-4 guests typically eating and socializing"
            ]}
          >
            <Divider />
            <InsetBox title="BUFFET TABLE:">
              <Line cyan>Fresh oysters (mostly picked over)</Line>
              <Line cyan>Seaweed burgers</Line>
              <Line cyan>Synthmeat hot dogs</Line>
              <Line cyan>Various other party food</Line>
              <Line smoke small>Catering has been keeping it stocked</Line>
            </InsetBox>
            <InsetBox title="GENE-SPLICED BIG CATS:">
              <Line red bold>STRIPE: Multi-colored striped fur, currently sleeping</Line>
              <Line red bold>SHADE: Dark violet fur, pacing around cage</Line>
              <Line red>HP: 12 | Morale: 9 | No armor</Line>
              <Line red>Attack: Bite (D8) + Trip (Strength DR10 or knocked down, +2DR until standing)</Line>
              <Line yellow>NOTE: They attack anyone who panics. Someone will panic.</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Dining Room Camera": {
            content: (
              <Camera
                id="cam-penthouse-dining"
                location="Dining Room"
                coverage="Dining table, buffet, cat cage"
                status="ACTIVE"
                recording={true}
                storage="Local NAS (30 day retention)"
                timeline={[
                  "Now → 3 guests eating, cats in cage (Stripe sleeping, Shade pacing)",
                  "14:15 → Someone fed cats through bars (not recommended)",
                  "13:30 → Catering refresh (buffet restocked)",
                  "12:00 → Shade tested cage bars (held firm)",
                ]}
                blindSpots={[]}
                lastService="2 weeks ago"
              />
            ),
          },
        },
      },

      "Balcony": {
        content: (
          <MaintenanceAccess
            title="[BALCONY]"
            deviceModel="Outdoor Zone Monitor"
            deviceId="BALCONY-4201"
            firmwareVersion="v1.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "All supposedly bulletproof glass",
              "View to die for",
              "No holo projectors (by design)",
              "Flesh guests use for intimate conversations",
              "Floor may break if shot (roll D4, breaks on 1)"
            ]}
          >
            <Divider />
            <InsetBox title="BALCONY FEATURES:">
              <Line cyan>Supposedly bulletproof glass (allegedly)</Line>
              <Line cyan>Panoramic view of Central District</Line>
              <Line cyan>No holo projectors (flesh guests only)</Line>
              <Line cyan>Private area for conversations</Line>
              <Line red>WARNING: Glass may break if shot (D4 roll, 1 = large section breaks)</Line>
              <Line red>It's a long way down from Floor 42...</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Balcony Camera": {
            content: (
              <Camera
                id="cam-penthouse-balcony"
                location="Balcony"
                coverage="Outdoor area, glass walls, view"
                status="ACTIVE"
                recording={true}
                storage="Local NAS (30 day retention)"
                timeline={[
                  "Now → 2 guests having private conversation",
                  "13:50 → Someone smoking alone, looking at view",
                  "12:30 → Small group discussing business",
                  "11:00 → Empty (too early in day)",
                ]}
                blindSpots={[
                  "Corners of balcony (partial obstruction)",
                ]}
                lastService="2 weeks ago"
              />
            ),
          },
        },
      },

      "Spa": {
        content: (
          <MaintenanceAccess
            title="[SPA]"
            deviceModel="Wellness Zone Monitor"
            deviceId="SPA-4201"
            firmwareVersion="v1.0.0"
            systemStatus="STEAMY"
            notes={[
              "Hot tub pool active",
              "Sauna running",
              "Very steamy atmosphere",
              "Most guests unarmed and drowsy",
              "Relaxation zone"
            ]}
          >
            <Divider />
            <InsetBox title="SPA FEATURES:">
              <Line cyan>Hot tub pool (jets active, heated)</Line>
              <Line cyan>Sauna (temperature high, steamy)</Line>
              <Line cyan>Holo projectors (2 units - relaxation visuals)</Line>
              <Line yellow>Most guests here are unarmed</Line>
              <Line yellow>Guests typically drowsy, relaxed, vulnerable</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Spa Camera": {
            content: (
              <Camera
                id="cam-penthouse-spa"
                location="Spa Area"
                coverage="Hot tub, sauna entrance, relaxation area"
                status="ACTIVE"
                recording={true}
                storage="Local NAS (30 day retention)"
                timeline={[
                  "Now → 4 guests in hot tub, 2 in sauna",
                  "14:00 → Someone fell asleep in hot tub (woken by friend)",
                  "13:15 → Steam reduced visibility temporarily",
                  "12:45 → Group rotated between hot tub and sauna",
                ]}
                blindSpots={[
                  "Inside sauna (too steamy)",
                ]}
                lastService="2 weeks ago"
              />
            ),
          },
        },
      },

      "Sensory Deprivation Chamber": {
        content: (
          <MaintenanceAccess
            title="[SENSORY DEPRIVATION CHAMBER]"
            deviceModel="SDC Control System"
            deviceId="SDC-4201"
            firmwareVersion="v1.0.0"
            systemStatus="AVAILABLE"
            notes={[
              "Water coffin design",
              "Black and padded interior",
              "Button outside locks door",
              "Enables noise reduction and turns off lights",
              "No holo projectors (flesh guests only)",
              "Curiosity attraction for guests"
            ]}
          >
            <Divider />
            <InsetBox title="SDC CONTROLS:">
              <Line cyan>External button: Locks door from outside</Line>
              <Line cyan>Noise reduction: Activated when locked</Line>
              <Line cyan>Lights: Turn off when locked</Line>
              <Line cyan>Emergency release: Inside (can be disabled externally)</Line>
              <Line yellow>No holoprojectors - everyone here is flesh guest</Line>
              <Line yellow>Curious guests want to see personal SDC</Line>
            </InsetBox>
            <InsetBox title="TACTICAL NOTE:">
              <Line red>Someone could get locked in here</Line>
              <Line red>Could go unnoticed for hours during party chaos</Line>
              <Line red>Perfect containment for unwanted witness...</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Gym": {
        content: (
          <MaintenanceAccess
            title="[GYM]"
            deviceModel="Fitness Equipment Network"
            deviceId="GYM-4201"
            firmwareVersion="v1.0.0"
            systemStatus="ACTIVE"
            notes={[
              "Professional-grade equipment",
              "Weights (latest fad - actual physical weights!)",
              "Sparring cydroid active",
              "Set to MAXIMUM DIFFICULTY",
              "Mirror wall with AR feedback"
            ]}
          >
            <Divider />
            <InsetBox title="EQUIPMENT:">
              <Line cyan>Weight machines (actual weights, not VR)</Line>
              <Line cyan>Cardio equipment</Line>
              <Line cyan>Mirror wall (AR workout feedback)</Line>
              <Line red bold>Sparring Cydroid (ACTIVE - ATTACKS ON SIGHT)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Sparring Cydroid": {
            content: (
              <MaintenanceAccess
                title="[SPARRING CYDROID CONTROL]"
                deviceModel="CombatTrain Pro-X"
                deviceId="CYDROID-GYM"
                firmwareVersion="v3.0.0"
                systemStatus="ACTIVE / STANDBY"
                notes={[
                  "AI training partner",
                  "Set to MAXIMUM DIFFICULTY (10/10)",
                  "Programmed with Steel's fighting style",
                  "Safety protocols DISABLED",
                  "Attacks anyone entering training ring"
                ]}
              >
                <Divider />
                <InsetBox title="CYDROID STATS:">
                  <Line red bold>HP: 14</Line>
                  <Line red bold>Morale: - (no morale, it's a machine)</Line>
                  <Line red bold>Armor: Metal plating (-D4)</Line>
                  <Line red bold>Attack: Kick/Punch (D6)</Line>
                </InsetBox>
                <InsetBox title="BEHAVIOR:">
                  <Line red>Attacks anyone entering training ring</Line>
                  <Line red>Programmed with killmatch combat style</Line>
                  <Line red>Maximum aggression mode</Line>
                  <Line red>No safety protocols (real injuries possible)</Line>
                  <Line red>Will not stop until opponent leaves ring or is incapacitated</Line>
                </InsetBox>
                <InsetBox title="ADMIN CONTROL OPTIONS:">
                  <Line yellow>Change difficulty level (1-10)</Line>
                  <Line yellow>Enable/disable safety protocols</Line>
                  <Line yellow>Set specific target person</Line>
                  <Line yellow>Emergency shutdown</Line>
                  <Line yellow>Activate outside ring (chaos mode)</Line>
                </InsetBox>
                <Line red>WARNING: Activating cydroid in party areas will cause extreme chaos and injuries</Line>
                <Line smoke small>This thing is basically a combat robot with the safety switches turned off.</Line>
              </MaintenanceAccess>
            ),
          },
        },
      },

      "Climate Control": {
        content: (
          <MaintenanceAccess
            title="[CLIMATE & LIGHTING CONTROL]"
            deviceModel="Smart Home Environmental System"
            deviceId="CLIMATE-4201"
            firmwareVersion="v4.0.0"
            systemStatus="STRUGGLING"
            notes={[
              "Set temperature: 22°C",
              "Actual temperature: 24°C (party heat exceeding capacity)",
              "Humidity: 45%",
              "Air quality: POOR (smoke, body heat, party)",
              "Lighting: Party mode (dynamic colors)"
            ]}
          >
            <Divider />
            <InsetBox title="OVERRIDE OPTIONS:">
              <Line yellow>Drop temperature to minimum (15°C)</Line>
              <Line yellow>Kill AC entirely (gets hot fast with 20+ people)</Line>
              <Line yellow>Manipulate lighting (blackout, strobing, etc.)</Line>
              <Line yellow>Lock windows/balcony door remotely</Line>
            </InsetBox>
            <InsetBox title="TACTICAL USES:">
              <Line cyan>Make rooms uncomfortably hot → People move to balcony</Line>
              <Line cyan>Kill lights in specific room → Darkness for stealth</Line>
              <Line cyan>Strobe lights → Disorientation, distraction</Line>
            </InsetBox>
            <Line smoke small>Climate manipulation takes 10-15 minutes to have noticeable effect.</Line>
          </MaintenanceAccess>
        ),
      },

      "Security Cameras": {
        content: (
          <MaintenanceAccess
            title="[INTERNAL SECURITY CAMERAS]"
            deviceModel="Surveillance System"
            deviceId="CAM-SYSTEM-4201"
            firmwareVersion="v3.0.0"
            systemStatus="RECORDING"
            notes={[
              "8 cameras covering penthouse interior",
              "All cameras recording 24/7",
              "No one actively monitoring (party chaos)",
              "Footage saved to local NAS (30-day retention)",
              "Can disable cameras or wipe footage"
            ]}
          >
            <Divider />
            <InsetBox title="CAMERA LOCATIONS:">
              <Line neon>Hallway (entrance monitoring)</Line>
              <Line neon>Holo Space (main party area)</Line>
              <Line neon>Kitchen (rarely viewed)</Line>
              <Line neon>Dining Room (cat monitoring)</Line>
              <Line neon>Master Bedroom (privacy mode available)</Line>
              <Line neon>Gym (training review)</Line>
              <Line neon>Spa (rarely viewed)</Line>
              <Line neon>Balcony (exterior view)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
        related_commands: {
          "Footage Management": {
            // password: {
            //   pw: "delete_footage",
            //   hint: "What you'd want to do with incriminating video",
            //   difficulty: "medium",
            //   content: <Locked theme="terminal" title="FOOTAGE CONTROL" />
            // },
            content: (
              <MaintenanceAccess
                title="[SECURITY FOOTAGE MANAGEMENT]"
                deviceModel="NAS Storage System"
                deviceId="NAS-SEC-4201"
                firmwareVersion="v2.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Storage: Local NAS (Penthouse server)",
                  "Retention: 30 days (auto-delete)",
                  "Current usage: 2.4 TB / 8 TB",
                  "Backup: None (local only - no cloud)"
                ]}
              >
                <Divider />
                <InsetBox title="ADMIN CAPABILITIES:">
                  <Line yellow>Disable specific cameras</Line>
                  <Line yellow>Disable all cameras</Line>
                  <Line yellow>Delete footage (specific timeframes)</Line>
                  <Line yellow>Delete ALL footage (wipe system)</Line>
                  <Line yellow>Export footage</Line>
                </InsetBox>
                <Line red>WARNING: Deleting footage is PERMANENT - no cloud backup exists</Line>
                <Line smoke>Pro tip: If you're doing crimes, wipe the footage on your way out.</Line>
              </MaintenanceAccess>
            ),
          },
        },
      },
    },
  },
};

export default STEEL_PENTHOUSE_COMMANDS;
