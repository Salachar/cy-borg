import {
  Box,
  Line,
  Section,
  Divider,
  InsetBox,
} from '@terminal/TerminalComponents';

import {
  Camera,
  EncryptedMessage,
  Extractable,
  GameConsole,
  Jukebox,
  Locked,
  MaintenanceAccess,
  Message,
  NetworkDevices,
  NetworkTrafficMonitor,
  PersonnelFile,
  RCDAlert,
  Safe,
  SmartFridge,
  VIPList,
  Workstation,
} from '@terminal/retcomdevice';

export const STEEL_PENTHOUSE_COMMANDS = {
  "Steel Jackhammer's Penthouse - Smart Home System": {
    content: (
      <Message
        title="PENTHOUSE SMART HOME"
        message="NETWORK ACCESS ESTABLISHED"
        note="Connected to JACKHAMMER_HOME | Welcome to the most over-engineered apartment in Central District"
        theme="casual"
      >
        <RCDAlert
          message="High-density RCD activity detected in vicinity"
          details={[
            "67+ active RCD devices within 50m radius",
            "Majority: Party guests using mesh network for comms",
            "Potential signal interference in crowded areas",
            "Dealer RCDs cycling frequently (rotating stock)",
          ]}
        />
      </Message>
    ),
    related_commands: {

      // ============================================================
      // NETWORK STATUS
      // ============================================================
      "Network Status": {
        content: (
          <NetworkTrafficMonitor
            systemName="JACKHAMMER_HOME NETWORK TRAFFIC"
            location="Penthouse Network - Unit 4201"
            bandwidth="847 Mbps / 1 Gbps (85% capacity)"
            activeConnections={67}
            transfers={[
              {
                timestamp: "14:47:33",
                status: "ACTIVE",
                filename: "holo_avatar_stream_batch_47.dat",
                size: "2.3 GB",
                source: "External (multiple IPs)",
                destination: "Holo Projector Array",
                protocol: "HOLO-STREAM-v3",
                progress: 78,
                notes: "22 concurrent holo-avatar connections"
              },
              {
                timestamp: "14:45:12",
                status: "ACTIVE",
                filename: "killmatch_champions_tournament_sync.pkg",
                size: "847 MB",
                source: "GameBox Elite Network",
                destination: "Game Console",
                protocol: "GAME-SYNC",
                progress: 34,
                notes: "4-player tournament active"
              },
              {
                timestamp: "14:42:01",
                status: "COMPLETE",
                filename: "audio_stream_industrial_techno.opus",
                size: "156 MB",
                source: "Music Streaming Service",
                destination: "Jukebox System",
                protocol: "AUDIO-STREAM",
                notes: "Continuous playback for 3+ days"
              },
              {
                timestamp: "14:38:47",
                status: "COMPLETE",
                filename: "camera_feed_buffer_dump.vid",
                size: "4.1 GB",
                source: "Security Camera Array",
                destination: "Local NAS Storage",
                protocol: "SURVEILLANCE-LOG",
                notes: "Automated hourly backup"
              },
              {
                timestamp: "14:15:22",
                status: "COMPLETE",
                filename: "rcd_messaging_batch_update.enc",
                size: "67 MB",
                source: "Multiple RCD devices (guests)",
                destination: "Network Gateway",
                protocol: "RCD-MESH-ENCRYPTED",
                notes: "Party guest communications relay"
              },
              {
                timestamp: "13:52:08",
                status: "FAILED",
                filename: "smart_fridge_auto_reorder.req",
                size: "2.3 KB",
                source: "Kitchen Smart Fridge",
                destination: "Grocery Delivery Service",
                protocol: "IOT-ORDER",
                notes: "ALERT: Auto-reorder disabled after 47 failed attempts (consumption too high)"
              },
            ]}
          />
        ),
        related_commands: {
          "Connected Devices": {
            content: (
              <NetworkDevices
                networkName="JACKHAMMER_HOME"
                devices={[
                  { name: "Security Console", ip: "192.168.1.10", type: "Security", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Camera System (8 units)", ip: "192.168.1.20-28", type: "Surveillance", status: "ONLINE", lastSeen: "Active now" },
                  { name: "NAS Storage", ip: "192.168.1.29", type: "Storage", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Entertainment Hub", ip: "192.168.1.30", type: "Media", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Jukebox", ip: "192.168.1.31", type: "Audio", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Holo Projectors (11 units)", ip: "192.168.1.40-50", type: "Display", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Game Console", ip: "192.168.1.51", type: "Entertainment", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Smart Fridge", ip: "192.168.1.60", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Smart Freezer", ip: "192.168.1.61", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Coffee Machine", ip: "192.168.1.62", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
                  { name: "HVAC Control", ip: "192.168.1.70", type: "Climate", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Lighting System", ip: "192.168.1.71", type: "Climate", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Hot Tub Controller", ip: "192.168.1.72", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Sauna Controller", ip: "192.168.1.73", type: "Appliance", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Gym Equipment Hub", ip: "192.168.1.80", type: "Fitness", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Sparring Cydroid", ip: "192.168.1.81", type: "Training", status: "ONLINE", lastSeen: "Active now" },
                  { name: "SDC Controller", ip: "192.168.1.82", type: "Wellness", status: "ONLINE", lastSeen: "Active now" },
                  { name: "Holo Safe (encrypted)", ip: "192.168.1.90", type: "Security", status: "ONLINE", lastSeen: "Active now" },
                ]}
              />
            ),
          },
        },
      },

      // ============================================================
      // BUILDING SERVICES
      // ============================================================
      "Building Services": {
        content: (
          <MaintenanceAccess
            title="[BUILDING SYSTEMS - UNIT 4201]"
            deviceModel="Integrated Building Services"
            deviceId="BLDG-SVC-4201"
            firmwareVersion="v5.1.2"
            systemStatus="OPERATIONAL"
            notes={[
              "Inherited from Tower Block 7 infrastructure",
              "HVAC, lighting, fire suppression",
              "Emergency systems operational",
              "Climate control struggling with party load"
            ]}
          />
        ),
        related_commands: {
          "HVAC & Climate": {
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

          "Fire Suppression": {
            content: (
              <MaintenanceAccess
                title="[FIRE SUPPRESSION SYSTEM]"
                deviceModel="AutoSafe Fire Control"
                deviceId="FIRE-SUP-4201"
                firmwareVersion="v3.2.0"
                systemStatus="STANDBY"
                notes={[
                  "Sprinkler system armed",
                  "Smoke detectors active (8 units)",
                  "Manual override available",
                  "Last test: 2 months ago"
                ]}
              >
                <Divider />
                <InsetBox title="COVERAGE:">
                  <Line neon>All rooms except bathroom/SDC</Line>
                  <Line neon>Sprinkler heads: 12 total</Line>
                  <Line neon>Water pressure: GOOD</Line>
                </InsetBox>
                <InsetBox title="MANUAL ACTIVATION:">
                  <Line yellow>Can trigger sprinklers remotely</Line>
                  <Line yellow>Floods entire penthouse</Line>
                  <Line yellow>Automatic emergency services alert</Line>
                  <Line red>⚠ Will destroy electronics, ruin party, cause chaos</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },

          "Emergency Systems": {
            content: (
              <MaintenanceAccess
                title="[EMERGENCY SYSTEMS]"
                deviceModel="Building Safety Integration"
                deviceId="EMERGENCY-4201"
                firmwareVersion="v2.0.0"
                systemStatus="ARMED"
                notes={[
                  "Smoke alarms active",
                  "Emergency exit lighting functional",
                  "Panic button in master bedroom",
                  "Direct line to building security"
                ]}
              >
                <Divider />
                <InsetBox title="PANIC BUTTON:">
                  <Line yellow>Location: Master bedroom nightstand</Line>
                  <Line yellow>Alert: Building security + SecCorps</Line>
                  <Line yellow>Response time: ~3 minutes</Line>
                  <Line smoke small>Steel hasn't used it (too proud/drunk)</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      // ============================================================
      // SECURITY & SURVEILLANCE
      // ============================================================
      "Security & Surveillance": {
        content: (
          <MaintenanceAccess
            title="[SECURITY SYSTEMS HUB]"
            deviceModel="Integrated Security Platform"
            deviceId="SECURITY-MAIN-4201"
            firmwareVersion="v6.0.3"
            systemStatus="RECORDING"
            notes={[
              "8 cameras active across penthouse",
              "Local NAS storage (30-day retention)",
              "No active monitoring (party chaos)",
              "All footage accessible"
            ]}
          />
        ),
        related_commands: {
          "Camera System": {
            content: (
              <MaintenanceAccess
                title="[SECURITY CAMERA GRID]"
                deviceModel="Surveillance System"
                deviceId="CAM-GRID-4201"
                firmwareVersion="v3.0.0"
                systemStatus="RECORDING"
                notes={[
                  "8 cameras covering penthouse interior",
                  "All cameras recording 24/7",
                  "No one actively monitoring (party chaos)",
                  "Footage saved to local NAS (30-day retention)"
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
              "Hallway Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-hallway"
                    location="Hallway (Entry Point)"
                    coverage="Entry door, hallway, room connections"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → Constant guest traffic, 2 dealers visible",
                      "14:32 → Delivery arrival (alcohol restock)",
                      "14:15 → 3 guests entered, 2 left",
                      "13:50 → Dealer rotation (one left, one arrived)",
                    ]}
                    blindSpots={[]}
                    lastService="2 weeks ago"
                  />
                ),
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

              "Kitchen Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-kitchen"
                    location="Kitchen"
                    coverage="Appliances, counters, entry"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → 1 guest raiding fridge",
                      "14:20 → Someone made coffee (finally)",
                      "13:35 → Guest grabbed freezer items",
                      "12:45 → Empty for 30 minutes",
                    ]}
                    blindSpots={[]}
                    lastService="2 weeks ago"
                  />
                ),
              },

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

              "Gym Camera": {
                content: (
                  <Camera
                    id="cam-penthouse-gym"
                    location="Gym"
                    coverage="Equipment, sparring ring, mirror wall"
                    status="ACTIVE"
                    recording={true}
                    storage="Local NAS (30 day retention)"
                    timeline={[
                      "Now → Empty (cydroid in standby)",
                      "Yesterday, 18:00 → Steel training session (2 hours)",
                      "Yesterday, 10:00 → Guest entered ring, cydroid engaged (guest fled)",
                      "2 days ago → Last used normally",
                    ]}
                    blindSpots={[]}
                    lastService="2 weeks ago"
                  />
                ),
              },

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

          "Footage Management": {
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

          "Access Control": {
            content: (
              <MaintenanceAccess
                title="[DOOR LOCK CONTROL]"
                deviceModel="Smart Lock System"
                deviceId="LOCK-CONTROL-4201"
                firmwareVersion="v2.1.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Entry door: Smart lock (networked)",
                  "Balcony door: Smart lock (networked)",
                  "Interior doors: Manual (no network control)",
                  "Override available for networked locks"
                ]}
              >
                <Divider />
                <InsetBox title="CONTROLLABLE LOCKS:">
                  <Line yellow>Entry Door (currently unlocked - party mode)</Line>
                  <Line yellow>Balcony Door (currently unlocked)</Line>
                </InsetBox>
                <InsetBox title="OVERRIDE OPTIONS:">
                  <Line cyan>Lock entry door (trap guests inside)</Line>
                  <Line cyan>Lock balcony door (prevent escape/access)</Line>
                  <Line cyan>Unlock all (emergency exit)</Line>
                  <Line smoke small>Duration: Permanent until manually changed</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      // ============================================================
      // ENTERTAINMENT SYSTEMS
      // ============================================================
      "Entertainment Systems": {
        content: (
          <MaintenanceAccess
            title="[ENTERTAINMENT HUB]"
            deviceModel="Media Control Center"
            deviceId="ENTERTAINMENT-4201"
            firmwareVersion="v4.0.0"
            systemStatus="PARTY MODE ACTIVE"
            notes={[
              "All systems running at high capacity",
              "Music playing continuously for 3+ days",
              "Gaming tournament in progress",
              "Holo-avatars at maximum capacity"
            ]}
          />
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
              "Audio Controls": {
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
        },
      },

      // ============================================================
      // SMART APPLIANCES
      // ============================================================
      "Smart Appliances": {
        content: (
          <MaintenanceAccess
            title="[SMART APPLIANCE NETWORK]"
            deviceModel="IoT Appliance Hub"
            deviceId="APPLIANCE-HUB-4201"
            firmwareVersion="v3.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "All kitchen and spa appliances networked",
              "High power consumption (party mode)",
              "Fridge auto-reorder disabled (consumption too high)",
              "All systems accessible remotely"
            ]}
          />
        ),
        related_commands: {
          "Kitchen Appliances": {
            content: (
              <MaintenanceAccess
                title="[KITCHEN APPLIANCES]"
                deviceModel="Smart Kitchen Hub"
                deviceId="KITCHEN-APPLIANCES"
                firmwareVersion="v2.0.0"
                systemStatus="OPERATIONAL"
                notes={[
                  "Never used for actual cooking",
                  "High-end equipment gathering dust",
                  "Party supplies dominate actual food",
                  "All connected to network"
                ]}
              >
                <Divider />
                <InsetBox title="CONNECTED APPLIANCES:">
                  <Line neon>Smart Fridge (well-stocked with drinks)</Line>
                  <Line neon>Smart Freezer (party supplies + drugs)</Line>
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

          "Spa Controls": {
            content: (
              <MaintenanceAccess
                title="[SPA CONTROL SYSTEMS]"
                deviceModel="Wellness Equipment Hub"
                deviceId="SPA-CONTROLS"
                firmwareVersion="v2.0.0"
                systemStatus="ACTIVE"
                notes={[
                  "Hot tub and sauna both running",
                  "High power consumption",
                  "Water filtration active",
                  "Temperature stable"
                ]}
              >
                <Divider />
                <InsetBox title="HOT TUB:">
                  <Line cyan>Temperature: 40°C (104°F)</Line>
                  <Line cyan>Jets: ACTIVE</Line>
                  <Line cyan>Current occupancy: 4 guests</Line>
                  <Line cyan>Override: Can adjust temp, disable jets, drain</Line>
                </InsetBox>
                <InsetBox title="SAUNA:">
                  <Line yellow>Temperature: 85°C (185°F)</Line>
                  <Line yellow>Steam: ACTIVE</Line>
                  <Line yellow>Current occupancy: 2 guests</Line>
                  <Line yellow>Override: Can adjust temp, disable steam</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
          },
        },
      },

      // ============================================================
      // ROOM SYSTEMS
      // ============================================================
      "Room Systems": {
        content: (
          <MaintenanceAccess
            title="[ROOM-BY-ROOM STATUS]"
            deviceModel="Smart Home Room Monitor"
            deviceId="ROOM-STATUS-4201"
            firmwareVersion="v3.0.0"
            systemStatus="MONITORING"
            notes={[
              "Real-time occupancy tracking",
              "Inventory management for storage areas",
              "Equipment status monitoring",
              "All rooms accessible via network"
            ]}
          />
        ),
        related_commands: {
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
              "Drawer Storage": {
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

              "Closet Inventory": {
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
                  "Backpack Contents": {
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
              </MaintenanceAccess>
            ),
            related_commands: {
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
                    content: (
                      <Safe
                        id="penthouse-holo-safe"
                        model="FortressMax-Elite"
                        location="Holo Space - Behind Cyber-Lich painting"
                        owner="Steel Jackhammer"
                        security="Scan/EMP-shielded + Mechanical lock"
                        lastAccess="3 days ago (pre-party)"
                        physical={[]}
                        digital={[]}
                        notes="Data chip detected - encrypted communications archive"
                        stealing={true}
                      >
                        <EncryptedMessage
                          messages={[
                            "[TIMESTAMP: Oct 28, 2067 - 02:47]",
                            "FROM: A.Inc_Legal_7",
                            "TO: TG_Research_Lead",
                            "",
                            "Prototype leg transfer confirmed. Jackhammer incident",
                            "scheduled for Oct 29 (Krok match). Legs will be",
                            "'damaged beyond repair' as planned.",
                            "",
                            "Medical team standing by for installation.",
                            "Cover story: Alliansen developed independently.",
                            "",
                            "Payment: 2.5M¤ to your offshore account.",
                            "Delete this after reading.",
                            "",
                            "[MARKET VALUE: 9,000¤ to competitor media]",
                            "[CONSEQUENCE: Career/life termination for Steel Jackhammer]",
                          ]}
                        />
                      </Safe>
                    ),
                  },
                },
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
                  <Line yellow>Cage security: Reinforced bars, electronic lock</Line>
                  <Line yellow>Behavior: Aggressive when startled or if anyone panics near cage</Line>
                  <Line smoke small>Warning labels indicate exotic predator classification</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
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
                  "Flesh guests use for intimate conversations"
                ]}
              >
                <Divider />
                <InsetBox title="BALCONY FEATURES:">
                  <Line cyan>Supposedly bulletproof glass (manufacturer claims)</Line>
                  <Line cyan>Panoramic view of Central District</Line>
                  <Line cyan>No holo projectors (flesh guests only)</Line>
                  <Line cyan>Private area for conversations</Line>
                  <Line yellow>⚠ Building insurance disclaimer: Not responsible for structural failures</Line>
                  <Line smoke small>It's a long way down from Floor 42...</Line>
                </InsetBox>
              </MaintenanceAccess>
            ),
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

          "Gym Equipment": {
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
                    <InsetBox title="CYDROID SPECIFICATIONS:">
                      <Line red bold>Model: CombatTrain Pro-X</Line>
                      <Line red bold>Difficulty: MAXIMUM (10/10)</Line>
                      <Line red bold>Combat Style: Killmatch simulation</Line>
                      <Line red bold>Safety Protocols: DISABLED</Line>
                      <Line yellow>Engagement zone: Training ring only</Line>
                      <Line yellow>Behavior: Attacks anyone entering ring until they exit or are incapacitated</Line>
                      <Line smoke small>Metal construction, reinforced joints, designed for professional athlete training</Line>
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
        },
      },

      // ============================================================
      // PARTY MANAGEMENT
      // ============================================================
      "Party Management": {
        content: (
          <MaintenanceAccess
            title="[PARTY MANAGEMENT SYSTEMS]"
            deviceModel="Event Tracking Platform"
            deviceId="PARTY-MANAGE-4201"
            firmwareVersion="v1.0.0"
            systemStatus="OVERWHELMED"
            notes={[
              "Day 3+ of continuous party",
              "Guest tracking active",
              "VIP monitoring enabled",
              "Dealer activity logged"
            ]}
          />
        ),
        related_commands: {
          "Guest Tracking": {
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
              </MaintenanceAccess>
            ),
            related_commands: {
              "VIP Guest List": {
                content: (
                  <VIPList
                    eventName="Steel Jackhammer's Penthouse Party"
                    location="Central Plaza Tower - Unit 4201, Floor 42"
                    date="Nov 16-18, 2067 (Ongoing)"
                    vips={[
                      {
                        name: "ZENIT",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "Writer for KILL!KILL!KILL! fan feed. Known for intimate athlete interviews. Often armed.",
                        arrivalTime: "Nov 16"
                      },
                      {
                        name: "IKHON",
                        alias: "The Warlock",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "Nano-using athlete with mysterious warlock persona. Heavyweight division. Friendly when substances are available.",
                        arrivalTime: "Nov 16"
                      },
                      {
                        name: "THUGGER",
                        alias: "The Unstoppable",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "11-month win streak (will not stop mentioning this). Electro-taur chromed. Cyberspine enhanced. Extremely cocky.",
                        arrivalTime: "Nov 16"
                      },
                      {
                        name: "RAZE",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "Hacker/fighter hybrid. Tech overall with medical auto-injectors. Known gambler. Gathering intel on attendees.",
                        arrivalTime: "Nov 17"
                      },
                      {
                        name: "AMANDE",
                        alias: "The Pilot",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "Mech pilot. Rarely recognized without mech. Lightweight build. Upcoming fight vs Thugger scheduled.",
                        arrivalTime: "Nov 17"
                      },
                      {
                        name: "MASTER CRIMSON",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "Arvtagarna cult member. Nano abilities confirmed. C-list veteran, visibly bored with party scene.",
                        arrivalTime: "Nov 16"
                      },
                      {
                        name: "GOLIATHESS",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "Up-and-coming heavyweight. StoneSkin chrome. Known for engineering dramatic moments for feed engagement.",
                        arrivalTime: "Nov 16"
                      },
                      {
                        name: "JADE BOOMSLANG",
                        status: "ARRIVED",
                        clearance: "VIP",
                        notes: "Virid Vipers sponsored. Full-body reptile scale modifications. New to scene, actively seeking connections.",
                        arrivalTime: "Nov 17"
                      }
                    ]}
                  >
                    <Divider />
                    <Line cyan>Guest list last updated: Nov 18, 14:30</Line>
                    <Line yellow>⚠ All VIP guests are professional killmatch athletes</Line>
                    <Line yellow>Security has been instructed to allow reasonable carry for self-defense</Line>
                    <Line smoke small>Additional unnamed guests (friends, associates, holo-avatars) not tracked in this system</Line>
                  </VIPList>
                ),
              },
            },
          },

          "Steel Jackhammer Intel": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-SJ-2067"
                name="Steel Jackhammer"
                age={28}
                position="Professional Killmatch Athlete"
                occupation="Heavyweight Division"
                department="Alliansen Inc. Sponsored"
                district="Central Plaza Tower - Unit 4201"
                notes={[
                  "Recent viral moment: Both legs ripped off by 5 Kroks, continued fighting (50M+ views)",
                  "New chrome legs installed 2 weeks ago (Alliansen Inc. prototype)",
                  "Currently hosting multi-day recovery party (Day 3+, not actually resting)",
                  "Signature move: Jackhammer Punch (rapid chained attacks on successful hits)",
                  "Upcoming match: vs Gargoyle (odds 3:1 against Jackhammer)",
                  "Location pattern: Rotates between Master Bedroom, Balcony, Dining Room, Holo Space",
                  "Known associate: Doc Joy (reaperdoc) - claims legs are stolen design",
                  "Contract status: Active bounty from Doc Joy - legs wanted intact",
                ]}
                status="ACTIVE - PARTY HOST"
              />
            ),
          },
        },
      },
    },
  },
};

export default STEEL_PENTHOUSE_COMMANDS;
