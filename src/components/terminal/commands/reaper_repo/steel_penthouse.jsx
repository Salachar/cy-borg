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
  Camera,
  Jukebox,
  GameConsole,
  Safe,
  Extractable,
  NetworkDevices,
} from '@terminal/retcomdevice';

const STEEL_PENTHOUSE_COMMANDS = {
  "steel_penthouse_network": {
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
        <Line cyan large bold>[PENTHOUSE SMART HOME - UNIT 4201]</Line>
        <Line smoke>Steel Jackhammer's private network - JACKHAMMER_HOME</Line>
        <Divider />

        <Box color="pink">
          <Line bold>★ NETWORK ACCESS ESTABLISHED ★</Line>
          <Line>Welcome to the most over-engineered apartment in Central District</Line>
        </Box>

        <Divider />

        <Section title="CONNECTED SYSTEMS">
          <Line neon>• Entertainment system (Jukebox, holo projectors)</Line>
          <Line neon>• Security cameras (internal)</Line>
          <Line neon>• Smart kitchen appliances</Line>
          <Line neon>• Climate & lighting control</Line>
          <Line neon>• Gym equipment (including sparring cydroid)</Line>
          <Line neon>• Master bedroom safe (network-connected for "convenience")</Line>
        </Section>

        <Box color="yellow">
          <Line bold>PARTY STATUS:</Line>
          <Line>Day 3+ of continuous party. Systems show heavy usage.</Line>
          <Line>Multiple guests on network. High bandwidth consumption.</Line>
          <Line>Security cameras show 20+ people throughout penthouse.</Line>
        </Box>

        <Divider />

        <Line smoke small>Smart homes: Because why secure your safe with just a lock when you can put it on the network?</Line>
      </>
    ),
    related_commands: {
      "penthouse_layout": {
        content: (
          <>
            <Line cyan large bold>[PENTHOUSE LAYOUT - UNIT 4201]</Line>
            <Line smoke>From viral interview footage + smart home system data</Line>
            <Divider />

            <Box color="cyan">
              <Line bold>LAYOUT MAP (ASCII):</Line>
              <CodeBlock>{`
    [Hallway]━━━[Guest Room]
        ┃
    [Master]━━━[Kitchen]
        ┃           ┃
    [Holo  ]━━━[Dining]━━━[Balcony]
     Space      w/Cats
        ┃
    [Gym]━━━━━━[Spa]━━━━━[SDC]
                        Sensory
                      Deprivation
              `}</CodeBlock>
            </Box>

            <Divider />

            <Section title="ROOM DETAILS">
              <Line yellow bold>HALLWAY:</Line>
              <Line>Entry point. Constant guest traffic. Guards outside door.</Line>

              <Line yellow bold>GUEST ROOM:</Line>
              <Line>Rarely used. Storage closet with random items. Packs of Faceblock in drawer.</Line>

              <Line yellow bold>MASTER BEDROOM:</Line>
              <Line>Soundproof. Wall safe with data chip. Backpack in closet (credstick 2.5k¤ + Vurt dose).</Line>

              <Line yellow bold>KITCHEN:</Line>
              <Line>Never used for cooking. Smart appliances. Fridge: drinks. Freezer: 10 doses Blackout.</Line>

              <Line yellow bold>HOLO SPACE:</Line>
              <Line>Multi-person entertainment. Gin & tonics on table. Cyber-Lich painting (SAFE BEHIND IT).</Line>

              <Line yellow bold>DINING ROOM:</Line>
              <Line>Two gene-spliced big cats in cage (Stripe & Shade). Buffet table. Half room is cat cage.</Line>

              <Line yellow bold>BALCONY:</Line>
              <Line>"Bulletproof" glass (allegedly). No holo projectors. View to die for. Glass may break if shot.</Line>

              <Line yellow bold>SPA:</Line>
              <Line>Hot tub, sauna. Steamy. Guests mostly unarmed and drowsy here.</Line>

              <Line yellow bold>SENSORY DEPRIVATION CHAMBER (SDC):</Line>
              <Line>Water coffin. Button outside locks it. No holos. Flesh guests only.</Line>

              <Line yellow bold>GYM:</Line>
              <Line>Weights and sparring cydroid set to MAXIMUM DIFFICULTY. Attacks anyone in ring.</Line>
            </Section>
          </>
        )
      },

      "entertainment_system": {
        content: (
          <>
            <Line cyan large bold>[ENTERTAINMENT SYSTEM]</Line>
            <Line smoke>State-of-the-art party infrastructure</Line>
            <Divider />

            <Section title="AVAILABLE CONTROLS">
              <Line neon>• Jukebox (currently playing loud techno)</Line>
              <Line neon>• Holo projectors (most rooms except balcony/SDC)</Line>
              <Line neon>• Game console (VIP lounge mode)</Line>
              <Line neon>• Smart TV (holo space)</Line>
            </Section>
          </>
        ),
        related_commands: {
          "jukebox": {
            content: (
              <Jukebox
                location="Steel Jackhammer's Penthouse - Main Holo Space"
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
              "queue_override": {
                content: (
                  <>
                    <Line cyan large bold>[JUKEBOX CONTROL - ADMIN ACCESS]</Line>
                    <Divider />

                    <Box color="yellow">
                      <Line bold>OVERRIDE OPTIONS:</Line>
                      <Line>• Force-play specific song immediately</Line>
                      <Line>• Loop obnoxious track indefinitely</Line>
                      <Line>• Kill audio entirely (awkward silence)</Line>
                      <Line>• Max volume (painful levels)</Line>
                    </Box>

                    <Divider />

                    <Section title="TACTICAL USES">
                      <Line neon>• Distraction: Sudden audio change draws attention</Line>
                      <Line neon>• Chaos: Loop annoying song, max volume</Line>
                      <Line neon>• Stealth: Kill audio for quieter movement</Line>
                      <Line neon>• Social engineering: Play Steel's "hype song" to draw him out</Line>
                    </Section>

                    <Line smoke small>Current party is LOUD. Audio changes might go unnoticed unless extreme.</Line>
                  </>
                )
              }
            }
          },

          "game_console": {
            content: (
              <>
                <GameConsole
                  id="console-penthouse-vip"
                  model="GameBox Elite Pro"
                  location="Steel Jackhammer's Penthouse - Holo Space"
                  onlineStatus={true}
                  games={[
                    {
                      title: "Killmatch Champions",
                      genre: "Fighting Sim",
                      players: "1-8 Online",
                      lastPlayed: "Currently running (4 players)"
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
                />

                <Divider />

                <Box color="yellow">
                  <Line bold>IN-GAME WALLET DETECTED:</Line>
                  <Line>47,500 in-game credits. Can be converted to real currency on black market.</Line>
                  <Line>Conversion rate: ~25% (11,875¤ real value)</Line>
                </Box>

                <Divider />

                <Extractable
                  id="game-console-wallet-extract"
                  type="credits"
                  items={[
                    { item: "In-game credits", desc: "47,500 credits (black market convertible)", value: 11875 }
                  ]}
                  buttonLabel="DRAIN WALLET"
                  requiresPresence={false}
                />

                <Line smoke small>Pro gamers with money to burn. That's a lot of microtransactions...</Line>
              </>
            )
          },

          "holo_projectors": {
            content: (
              <>
                <Line cyan large bold>[HOLO PROJECTOR CONTROL]</Line>
                <Line smoke>Multi-room holographic projection system</Line>
                <Divider />

                <Section title="ACTIVE PROJECTORS">
                  <Line neon>• Holo Space: Main entertainment (4 projectors)</Line>
                  <Line neon>• Master Bedroom: Ambient/entertainment (2 projectors)</Line>
                  <Line neon>• Dining Room: Atmosphere (2 projectors)</Line>
                  <Line neon>• Gym: Training displays (1 projector)</Line>
                  <Line neon>• Spa: Relaxation visuals (2 projectors)</Line>
                  <Line smoke small>No projectors in: Balcony, SDC (by design)</Line>
                </Section>

                <Divider />

                <Box color="yellow">
                  <Line bold>OVERRIDE CAPABILITIES:</Line>
                  <Line>• Display custom content on any projector</Line>
                  <Line>• Invite unlimited holo-avatars (flood rooms with fake guests)</Line>
                  <Line>• Kill projections entirely</Line>
                  <Line>• Seizure-inducing flashing (extreme)</Line>
                </Box>

                <Warning>Extreme holo interference may cause party-goers to panic or investigate</Warning>

                <Line smoke small>Remember: Half the party guests are holo-avatars. Real guests in the flesh.</Line>
              </>
            )
          }
        }
      },

      "smart_kitchen": {
        content: (
          <>
            <Line cyan large bold>[SMART KITCHEN APPLIANCES]</Line>
            <Line smoke>Never used for actual cooking. High-end appliances beg for attention.</Line>
            <Divider />

            <Section title="CONNECTED APPLIANCES">
              <Line neon>• Smart Fridge (inventory-tracked, auto-order)</Line>
              <Line neon>• Smart Freezer (separate, temperature-critical)</Line>
              <Line neon>• Coffee Machine (barely used)</Line>
              <Line neon>• Smart Oven (never used)</Line>
              <Line neon>• Dishwasher (running constantly during party)</Line>
            </Section>
          </>
        ),
        related_commands: {
          "smart_fridge": {
            content: (
              <>
                <Line cyan large bold>[SMART FRIDGE - INVENTORY SYSTEM]</Line>
                <Divider />

                <Section title="CURRENT CONTENTS (AUTO-TRACKED)">
                  <Line yellow>DRINKS (Well-stocked for party):</Line>
                  <Line>• Beer: 48 bottles (various brands)</Line>
                  <Line>• Energy drinks: 32 cans</Line>
                  <Line>• Synth-juice: 12 bottles</Line>
                  <Line>• Pre-mixed cocktails: 18 cans</Line>
                  <Line>• Water: 24 bottles (mostly untouched)</Line>

                  <Line yellow top>FOOD (Minimal - party has catering):</Line>
                  <Line>• Protein packs: 8</Line>
                  <Line>• Leftover takeout: Various containers</Line>
                  <Line>• Condiments: Full stock</Line>
                </Section>

                <Divider />

                <Box color="cyan">
                  <Line bold>SMART FEATURES:</Line>
                  <Line>• Auto-reorder when low (currently disabled - party consumption too high)</Line>
                  <Line>• Expiration tracking (14 items past expiration)</Line>
                  <Line>• Nutrition analysis (never used)</Line>
                  <Line>• Remote lock (why though?)</Line>
                </Box>

                <Line smoke small>Fridge is desperately trying to order more supplies. Auto-order system gave up.</Line>
              </>
            )
          },

          "smart_freezer": {
            content: (
              <>
                <Line cyan large bold>[SMART FREEZER]</Line>
                <Divider />

                <DataTable data={[
                  { label: "Temperature", value: "-18°C (Optimal)" },
                  { label: "Status", value: "OPERATIONAL" },
                  { label: "Door Status", value: "CLOSED" },
                  { label: "Last Opened", value: "2 hours ago" }
                ]} />

                <Divider />

                <Section title="CONTENTS">
                  <Line yellow>FROZEN FOOD:</Line>
                  <Line>• Ice cream: 3 containers</Line>
                  <Line>• Frozen pizza: 4 boxes (untouched)</Line>
                  <Line>• Ice: 2 bags</Line>

                  <Line yellow top>PARTY SUPPLIES:</Line>
                  <Line>• Blackout (sedative drug): 10 doses</Line>
                  <Line smoke small>Kept frozen for preservation. High-grade anesthetic.</Line>
                </Section>

                <Divider />

                <Extractable
                  id="freezer-blackout-stash"
                  type="physical"
                  items={[
                    { item: "Blackout (10 doses)", desc: "Sedative/anesthetic - frozen storage", value: 1500 }
                  ]}
                  requiresPresence={true}
                  buttonLabel="POCKET DOSES"
                />

                <Line smoke small>Steel keeps his party supplies well-stocked. This could be useful...</Line>
              </>
            )
          },

          "coffee_machine": {
            content: (
              <>
                <Line cyan large bold>[PREMIUM COFFEE MACHINE]</Line>
                <Line smoke>Unused during party. Everyone's on harder stuff.</Line>
                <Divider />

                <DataTable data={[
                  { label: "Model", value: "BrewMaster 8000 Pro" },
                  { label: "Status", value: "STANDBY" },
                  { label: "Last Use", value: "4 days ago" },
                  { label: "Bean Supply", value: "Full" },
                  { label: "Water", value: "Full" }
                ]} />

                <Divider />

                <Line smoke>Lonely coffee machine sits unused while party rages.</Line>
                <Line smoke>Still on standby, ready to brew. No one cares.</Line>

                <Divider />

                <Box color="yellow">
                  <Line bold>HIDDEN COMPARTMENT DETECTED:</Line>
                  <Line>Maintenance panel on side shows signs of tampering...</Line>
                </Box>
              </>
            ),
            related_commands: {
              "maintenance_panel": {
                password: {
                  pw: "brew8000",
                  hint: "Model number - check the machine specs above",
                  hintStrength: 1
                },
                content: (
                  <>
                    <Line cyan large bold>[COFFEE MACHINE - HIDDEN COMPARTMENT]</Line>
                    <Divider />

                    <Line smoke>Panel pops open. Someone's been using this as a stash spot.</Line>

                    <Divider />

                    <Extractable
                      id="coffee-machine-stash-penthouse"
                      type="physical"
                      items={[
                        { item: "Credstick", desc: "800¤ - emergency cash?", value: 800 },
                        { item: "Red-juice (2 doses)", desc: "Emergency healing stim", value: 600 },
                        { item: "Note", desc: "Handwritten: 'For bad days - SJ'" }
                      ]}
                      requiresPresence={true}
                      buttonLabel="TAKE STASH"
                    />

                    <Line smoke small>Even killmatch champions need an emergency fund. Smart hiding spot.</Line>
                  </>
                )
              }
            }
          }
        }
      },

      "gym_equipment": {
        content: (
          <>
            <Line cyan large bold>[GYM EQUIPMENT CONTROL]</Line>
            <Line smoke>Professional-grade training equipment</Line>
            <Divider />

            <Section title="EQUIPMENT">
              <Line neon>• Weight machines (latest fad - actual weights!)</Line>
              <Line neon>• Sparring Cydroid (AI training partner)</Line>
              <Line neon>• Cardio equipment</Line>
              <Line neon>• Mirror wall (AR workout feedback)</Line>
            </Section>

            <Divider />

            <Box color="red">
              <Line bold>⚠ SPARRING CYDROID - ACTIVE ⚠</Line>
              <Line>Model: CombatTrain Pro-X</Line>
              <Line>Current Setting: MAXIMUM DIFFICULTY</Line>
              <Line>Status: ACTIVE - Will attack anyone entering training ring</Line>
              <Line>Safety Protocols: DISABLED (Steel trains hard)</Line>
            </Box>
          </>
        ),
        related_commands: {
          "sparring_cydroid": {
            content: (
              <>
                <Line cyan large bold>[SPARRING CYDROID CONTROL]</Line>
                <Divider />

                <DataTable data={[
                  { label: "Model", value: "CombatTrain Pro-X" },
                  { label: "Status", value: "ACTIVE / STANDBY" },
                  { label: "Difficulty", value: "MAXIMUM (10/10)" },
                  { label: "Combat Style", value: "Killmatch Simulation" },
                  { label: "Safety Mode", value: "DISABLED" },
                  { label: "Armor Rating", value: "Metal plating (-D4 damage)" }
                ]} />

                <Divider />

                <Section title="CAPABILITIES">
                  <Line red>• Attacks anyone entering ring</Line>
                  <Line red>• Programmed with Steel's fighting style</Line>
                  <Line red>• Maximum aggression mode</Line>
                  <Line red>• No safety protocols (real injuries possible)</Line>
                  <Line red>• Will not stop until opponent leaves ring or is incapacitated</Line>
                </Section>

                <Divider />

                <Box color="yellow">
                  <Line bold>ADMIN CONTROL OPTIONS:</Line>
                  <Line>• Change difficulty level (1-10)</Line>
                  <Line>• Enable/disable safety protocols</Line>
                  <Line>• Set target (could target specific person)</Line>
                  <Line>• Emergency shutdown</Line>
                  <Line>• Activate outside of ring (chaos mode)</Line>
                </Box>

                <Warning>Activating cydroid in party areas will cause extreme chaos and injuries</Warning>

                <Line smoke small>This thing is basically a combat robot with the serial numbers filed off.</Line>
              </>
            )
          }
        }
      },

      "climate_control": {
        content: (
          <>
            <Line cyan large bold>[CLIMATE & LIGHTING CONTROL]</Line>
            <Line smoke>Smart home environmental systems</Line>
            <Divider />

            <DataTable data={[
              { label: "Temperature", value: "24°C (set to 22°C - party heat exceeding capacity)" },
              { label: "Humidity", value: "45%" },
              { label: "Air Quality", value: "POOR (smoke, body heat, party)" },
              { label: "Lighting", value: "Party mode (dynamic colors)" }
            ]} />

            <Divider />

            <Box color="yellow">
              <Line bold>OVERRIDE OPTIONS:</Line>
              <Line>• Drop temperature to freezing (15°C minimum)</Line>
              <Line>• Kill AC entirely (gets hot fast with 20+ people)</Line>
              <Line>• Manipulate lighting (blackout, strobing, etc.)</Line>
              <Line>• Lock windows/balcony door remotely</Line>
            </Box>

            <Section title="TACTICAL USES">
              <Line neon>• Make rooms uncomfortably hot → People move to balcony</Line>
              <Line neon>• Kill lights in specific room → Darkness for stealth</Line>
              <Line neon>• Strobe lights → Disorientation, distraction</Line>
            </Section>

            <Line smoke small>Climate manipulation takes 10-15 minutes to have noticeable effect.</Line>
          </>
        )
      },

      "security_cameras": {
        content: (
          <>
            <Line cyan large bold>[INTERNAL SECURITY CAMERAS]</Line>
            <Line smoke>8-camera system covering penthouse interior</Line>
            <Divider />

            <Section title="CAMERA LOCATIONS">
              <Line neon>• Hallway (entrance monitoring)</Line>
              <Line neon>• Holo Space (main party area)</Line>
              <Line neon>• Kitchen (rarely viewed)</Line>
              <Line neon>• Dining Room (cat monitoring)</Line>
              <Line neon>• Master Bedroom (privacy mode available)</Line>
              <Line neon>• Gym (training review)</Line>
              <Line neon>• Spa (rarely viewed)</Line>
              <Line neon>• Balcony (exterior view)</Line>
            </Section>

            <Box color="yellow">
              <Line bold>CURRENT STATUS:</Line>
              <Line>All cameras recording. No one actively monitoring (party chaos).</Line>
              <Line>Footage saved to local NAS (30-day retention).</Line>
              <Line>Can disable cameras individually or wipe footage.</Line>
            </Box>
          </>
        ),
        related_commands: {
          "cam_master_bedroom": {
            content: (
              <Camera
                cameraId="CAM-PH-MASTER"
                location="Master Bedroom"
                status="online"
                resolution="2560x1440"
                nightVision={true}
                motionDetection={true}
                coverage="Full room view including closet and bathroom door"
                lastMotion="45 minutes ago"
                recording={true}
              />
            ),
            related_commands: {
              "live_feed": {
                password: {
                  pw: "bedroom_cam",
                  hint: "Location + cam (underscore separated, lowercase)",
                  hintStrength: 2
                },
                content: (
                  <>
                    <Line cyan large bold>[MASTER BEDROOM - LIVE FEED]</Line>
                    <Divider />

                    <Box color="cyan">
                      <Line bold>CURRENT VIEW:</Line>
                      <Line>• Room currently empty</Line>
                      <Line>• King-sized bed unmade (hasn't been used in days)</Line>
                      <Line>• Closet door half-open - backpack visible inside</Line>
                      <Line>• Wall safe visible (behind will be hidden later)</Line>
                      <Line>• Bathroom door closed</Line>
                      <Line>• Door to hallway closed - soundproofed room</Line>
                    </Box>

                    <Divider />

                    <Box color="yellow">
                      <Line bold>NOTABLE ITEMS:</Line>
                      <Line>• Backpack in closet (last motion: someone grabbed from it)</Line>
                      <Line>• Small wall safe visible on camera (not hidden well)</Line>
                      <Line>• Expensive watch on nightstand</Line>
                      <Line>• Clothes scattered everywhere</Line>
                    </Box>

                    <Line smoke small>Soundproof room. Good place for privacy... or crimes.</Line>
                  </>
                )
              }
            }
          },

          "cam_holo_space": {
            content: (
              <Camera
                cameraId="CAM-PH-HOLO"
                location="Holo Space (Main Party Area)"
                status="online"
                resolution="2560x1440"
                nightVision={false}
                motionDetection={true}
                coverage="Main entertainment area, seating, table"
                lastMotion="10 seconds ago"
                recording={true}
              />
            ),
            related_commands: {
              "live_feed": {
                password: {
                  pw: "holo_cam",
                  hint: "Location + cam (underscore separated, lowercase)",
                  hintStrength: 2
                },
                content: (
                  <>
                    <Line cyan large bold>[HOLO SPACE - LIVE FEED]</Line>
                    <Line smoke>Main party area - Chaos in real-time</Line>
                    <Divider />

                    <Box color="cyan">
                      <Line bold>CURRENT SCENE:</Line>
                      <Line>• 8-10 people visible (mix of flesh and holo-avatars)</Line>
                      <Line>• Gaming in progress on big screen</Line>
                      <Line>• Music blasting (can see bass vibrations on camera)</Line>
                      <Line>• Drinks on table - gin & tonics in cans</Line>
                      <Line>• Someone passed out on couch</Line>
                      <Line>• Cyber-Lich painting on wall (slightly crooked)</Line>
                    </Box>

                    <Divider />

                    <Box color="yellow">
                      <Line bold>OBSERVATIONS:</Line>
                      <Line>• Steel Jackhammer NOT currently visible in this room</Line>
                      <Line>• Heavy party atmosphere - loud, crowded, chaotic</Line>
                      <Line>• Multiple VIP-looking guests (athletic builds, confident postures)</Line>
                      <Line>• Cyber-Lich painting is covering something on the wall (safe?)</Line>
                    </Box>

                    <Line smoke small>Party shows no signs of stopping. This has been going for DAYS.</Line>
                  </>
                )
              }
            }
          },

          "cam_dining_room": {
            content: (
              <Camera
                cameraId="CAM-PH-DINING"
                location="Dining Room (w/ Big Cats)"
                status="online"
                resolution="2560x1440"
                nightVision={true}
                motionDetection={true}
                coverage="Dining table, buffet, and cat cage area"
                lastMotion="2 minutes ago"
                recording={true}
              />
            ),
            related_commands: {
              "live_feed": {
                password: {
                  pw: "dining_cam",
                  hint: "Location + cam (underscore separated, lowercase)",
                  hintStrength: 2
                },
                content: (
                  <>
                    <Line cyan large bold>[DINING ROOM - LIVE FEED]</Line>
                    <Divider />

                    <Box color="cyan">
                      <Line bold>CURRENT SCENE:</Line>
                      <Line>• Buffet table set up with food (mostly picked over)</Line>
                      <Line>• 3 people eating and chatting</Line>
                      <Line>• Large cage taking up half the room</Line>
                      <Line>• Two gene-spliced big cats visible in cage:</Line>
                      <Line>  → STRIPE: Multi-colored striped fur, currently sleeping</Line>
                      <Line>  → SHADE: Dark violet fur, pacing around cage</Line>
                    </Box>

                    <Divider />

                    <Box color="red">
                      <Line bold>⚠ DANGER: GENE-SPLICED BIG CATS ⚠</Line>
                      <Line>These are NOT normal cats. Large, aggressive, dangerous.</Line>
                      <Line>Cage appears secure but who knows with drunk party guests.</Line>
                      <Line>Mission doc mentions: "They attack anyone who panics. Someone will."</Line>
                    </Box>

                    <Line smoke small>Why does anyone need two giant murder cats? Because they can, apparently.</Line>
                  </>
                )
              }
            }
          },

          "footage_management": {
            password: {
              pw: "delete_footage",
              hint: "What you'd want to do with incriminating video (two words, underscore)",
              hintStrength: 2
            },
            content: (
              <>
                <Line cyan large bold>[SECURITY FOOTAGE MANAGEMENT]</Line>
                <Divider />

                <DataTable data={[
                  { label: "Storage Location", value: "Local NAS - Penthouse Server" },
                  { label: "Retention", value: "30 days (auto-delete)" },
                  { label: "Current Usage", value: "2.4 TB / 8 TB" },
                  { label: "Backup", value: "None (local only)" }
                ]} />

                <Divider />

                <Box color="yellow">
                  <Line bold>ADMIN CAPABILITIES:</Line>
                  <Line>• Disable specific cameras</Line>
                  <Line>• Disable all cameras</Line>
                  <Line>• Delete footage (specific timeframes)</Line>
                  <Line>• Delete ALL footage (wipe system)</Line>
                  <Line>• Export footage</Line>
                </Box>

                <Warning>Deleting footage is PERMANENT - no cloud backup exists</Warning>

                <Divider />

                <Line smoke>Pro tip: If you're doing crimes, wipe the footage on your way out.</Line>
              </>
            )
          }
        }
      },

      "master_bedroom_safe": {
        blocker: {
          mastermind_hack: {
            sequenceLength: 6,
            sequenceCount: 15,
            attempts: 3,
            symbolCount: 5,
            colorCount: 5
          }
        },
        content: (
          <>
            <Line cyan large bold>[MASTER BEDROOM - WALL SAFE ACCESS]</Line>
            <Line smoke>Behind the Cyber-Lich painting in Holo Space</Line>
            <Divider />

            <Box color="pink">
              <Line bold>★ SAFE LOCATION CONFIRMED ★</Line>
              <Line>The painting is hiding a scan/EMP-shielded safe with mechanical lock.</Line>
              <Line>Network-connected (because of course it is) for "remote monitoring."</Line>
            </Box>

            <Divider />

            <Safe
              id="safe-penthouse-master"
              model="FortressMax-Elite"
              location="Master Bedroom - Behind Cyber-Lich painting (in Holo Space)"
              owner="Steel Jackhammer"
              security="Mechanical lock + Scan/EMP shielding"
              lastAccess="3 days ago (pre-party)"
              physical={[]}
              digital={[
                { item: "Data Chip", desc: "Match-fixing evidence: Alliansen Inc. + TG Labs collusion", value: 9000 }
              ]}
              notes="Contains evidence that could end Steel Jackhammer's career. Probably doesn't even know what he has."
            />

            <Divider />

            <Box color="yellow">
              <Line bold>DATA CHIP DETAILS:</Line>
              <Line>Evidence of match fixing between Alliansen Inc. and TG Labs.</Line>
              <Line>Can be sold to:</Line>
              <Line>• Competitor's media outlets: Up to 9,000¤</Line>
              <Line>• PR agents from either company: Up to 9,000¤ (hush money)</Line>
              <Line>• Published publicly: Ends Steel's career/life</Line>
            </Box>

            <Warning>Publishing this information will destroy Steel Jackhammer if he survives the leg repo</Warning>
          </>
        )
      },

      "guest_room_finds": {
        content: (
          <>
            <Line cyan large bold>[GUEST ROOM - QUICK SEARCH]</Line>
            <Line smoke>Rarely used room. Mostly storage.</Line>
            <Divider />

            <Section title="ROOM CONTENTS (FROM SMART HOME INVENTORY)">
              <Line>• Closet full of boxes (random unused items)</Line>
              <Line>• Pots and pans (never used)</Line>
              <Line>• Old books (unread)</Line>
              <Line>• Tuxedo (worn once, maybe)</Line>
              <Line>• Drawer with personal items...</Line>
            </Section>

            <Divider />

            <Extractable
              id="guest-room-drawer-stash"
              type="physical"
              items={[
                { item: "Faceblock (2 packs)", desc: "Facial recognition blocker", value: 300 }
              ]}
              requiresPresence={true}
              buttonLabel="TAKE FACEBLOCK"
            />

            <Line smoke small>Faceblock in a drawer. Handy for someone who doesn't want to be recognized...</Line>
          </>
        )
      },

      "master_bedroom_closet": {
        content: (
          <>
            <Line cyan large bold>[MASTER BEDROOM CLOSET]</Line>
            <Line smoke>Smart inventory system tracking contents</Line>
            <Divider />

            <Section title="CLOSET CONTENTS">
              <Line>• Designer clothes (excessive amount)</Line>
              <Line>• Shoes (30+ pairs)</Line>
              <Line>• Gym bags (multiple)</Line>
              <Line>• Backpack (otherwise empty, sitting on floor)</Line>
            </Section>

            <Divider />

            <Box color="yellow">
              <Line bold>BACKPACK - CONTENTS DETECTED:</Line>
              <Line>Weight sensors indicate items inside despite appearing empty.</Line>
            </Box>

            <Divider />

            <Extractable
              id="master-closet-backpack-stash"
              type="physical"
              items={[
                { item: "Credstick", desc: "2,500¤", value: 2500 },
                { item: "Vurt (1 dose)", desc: "High-grade hallucinogen", value: 300 }
              ]}
              requiresPresence={true}
              buttonLabel="SEARCH BACKPACK"
            />

            <Line smoke small>Emergency cash and party supplies. Smart to keep separate from the safe.</Line>
          </>
        )
      },

      "network_devices": {
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
              { name: "Master Bedroom Safe", ip: "192.168.1.90", type: "Security", status: "ONLINE", lastSeen: "Active now" }
            ]}
          />
        )
      }
    }
  }
};

export default STEEL_PENTHOUSE_COMMANDS;
