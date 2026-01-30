import {
  Line,
  Box,
  Section,
  Divider,
  KeyValue,
  DataTable,
} from '@terminal/TerminalComponents';
import {
  PublicPortal,
  InternalAccess,
  Menu,
  HoursBanner,
  CommunityBoard,
  VendingMachine,
  Jukebox,
  CommercialCamera,
  Camera,
  Safe,
  PersonnelFile,
  IncidentLog,
  MaintenanceAccess,
} from "@terminal/retcomdevice";

// ============================================================================
// DOC JOY'S REAPER CLINIC COMMANDS
// ============================================================================

export const DOC_JOY_CLINIC_COMMANDS = {
  "Doc Joy's Reaper Clinic (Svärta)": {
    content: (
      <PublicPortal
        network="REAPER_CLINIC_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN (24/7)"
        statusColor="neon"
        nowPlaying="Waiting room: Calming synth-ambient (barely masks the screams)"
        notes={[
          "Professional cyberware installation & removal",
          "Svärta district - Discreet location",
          "Cash or credchip accepted (corp cards reluctantly)",
          "No questions asked (mostly)",
        ]}
        theme="neon"
      />
    ),
    related_commands: {

      // ======================================================================
      // PUBLIC LAYER
      // ======================================================================

      "Clinic Services & Pricing": {
        content: (
          <Menu
            title="DOC JOY'S REAPER CLINIC"
            subtitle="Professional Cyberware Services - No Judgments"
            signType="medical"
            categories={[
              {
                name: "INSTALLATION",
                items: [
                  { name: "Basic implant (chips, ports)", price: "500¤" },
                  { name: "Standard cyberware (arms, eyes)", price: "1,200¤" },
                  { name: "Advanced systems (legs, organs)", price: "2,500¤" },
                  { name: "Military-grade (custom work)", price: "5,000¤+" },
                  { name: "Rush job (same day)", price: "+50%" },
                ],
              },
              {
                name: "REMOVAL & REPAIR",
                items: [
                  { name: "Cyberware removal", price: "300¤" },
                  { name: "Repair (minor damage)", price: "400¤" },
                  { name: "Repair (major damage)", price: "800¤" },
                  { name: "Diagnostics", price: "100¤" },
                ],
              },
              {
                name: "EXTRAS",
                items: [
                  { name: "Anesthesia (recommended)", price: "150¤" },
                  { name: "Post-op care package", price: "200¤" },
                  { name: "Recovery room (4 hours)", price: "100¤" },
                  { name: "Discretion guarantee", price: "500¤" },
                ],
              },
            ]}
            footer="⚠ Prices negotiable for bulk work | Payment due before surgery"
          />
        ),
      },

      "Hours & Location": {
        content: (
          <HoursBanner
            name="DOC JOY'S REAPER CLINIC"
            hours="24/7"
            days="Every Day"
            status="OPEN"
            statusColor="open"
            location="Svärta District, Industrial Section"
            note="Emergency services available - Call ahead for complex procedures"
          />
        ),
      },

      "Patient Portal": {
        content: (
          <>
            <Line cyan large bold>[PATIENT PORTAL]</Line>
            <Line smoke>Appointment system & general info</Line>
            <Divider />

            <Section title="UPCOMING APPOINTMENTS">
              <Line neon>Limited availability this week</Line>
              <Line yellow>Next open slot: 3 days from now (standard work)</Line>
              <Line yellow>Emergency slots: Available (premium rates apply)</Line>
            </Section>

            <Divider />

            <Section title="WHAT TO EXPECT">
              <Line neon>• Consultation: 15-30 minutes (free)</Line>
              <Line neon>• Standard procedure: 2-4 hours</Line>
              <Line neon>• Recovery time: Varies by complexity</Line>
              <Line neon>• Follow-up: Recommended after 1 week</Line>
            </Section>

            <Divider />

            <Section title="PREPARATION">
              <Line yellow>⚠ Do not eat 6 hours before surgery</Line>
              <Line yellow>⚠ Bring payment (no credit after the fact)</Line>
              <Line yellow>⚠ Arrange transportation (you won't be walking great)</Line>
              <Line yellow>⚠ Tell someone where you are (seriously)</Line>
            </Section>

            <Divider />
            <Line pink>"I fix what breaks. I break what doesn't need fixing." - Doc Joy</Line>
          </>
        ),
      },

      "Waiting Room Info": {
        content: (
          <>
            <Line cyan large bold>[WAITING ROOM]</Line>
            <Line smoke>Current status & amenities</Line>
            <Divider />

            <Section title="STATUS">
              <KeyValue label="Patients waiting" value="2" />
              <KeyValue label="Estimated wait" value="45 minutes" />
              <KeyValue label="Operating room" value="OCCUPIED" />
              <KeyValue label="Doc Joy" value="IN SURGERY" />
            </Section>

            <Divider />

            <Section title="AMENITIES">
              <Line neon>• Vending machine (snacks, drinks, meds)</Line>
              <Line neon>• Medical supply kiosk (basic items)</Line>
              <Line neon>• Ancient magazines (2-3 years old)</Line>
              <Line neon>• Uncomfortable chairs (builds character)</Line>
              <Line neon>• Free water (filter questionable)</Line>
            </Section>

            <Divider />

            <Section title="RULES">
              <Line red>• No weapons drawn (keep them holstered)</Line>
              <Line red>• No violence (this is neutral ground)</Line>
              <Line red>• No drugs (save it for after surgery)</Line>
              <Line red>• No loud arguments (people are recovering)</Line>
              <Line yellow>⚠ Violators will be escorted out (painfully if necessary)</Line>
            </Section>
          </>
        ),
      },

      "Vending Machine (Clinic Lobby)": {
        content: (
          <VendingMachine
            id="clinic-lobby-vending"
            model="MediSnack 3000"
            location="Doc Joy's Clinic - Waiting room"
            drinks={[
              { name: 'ENERGY STIM', pattern: 'lines', color: 'yellow', available: true },
              { name: 'PAINKILL-AID', pattern: 'blocks', color: 'red', available: true },
              { name: 'RECOVERY SHAKE', pattern: 'circles', color: 'cyan', available: true },
              { name: 'WATER (FILTERED)', pattern: 'waves', color: 'blue', available: true },
              { name: 'PROTEIN+', pattern: 'dots', color: 'purple', available: false }, // Sold out
            ]}
          />
        ),
        related_commands: {
          "Maintenance Access": {
            password: {
              pw: "restock",
              hint: "What you do to refill the machine",
              hintStrength: 2,
            },
            content: (
              <MaintenanceAccess
                deviceModel="MediSnack 3000"
                deviceId="MS-3000-1847"
                firmwareVersion="v2.8.4"
                systemStatus="OPERATIONAL"
                uptime="21 days, 4 hours"
              />
            ),
            related_commands: {
              // "Internal Safe": {
              //   password: {
              //     pw: "change",
              //     hint: "What accumulates in the cash box",
              //     hintStrength: 1,
              //   },
              //   content: (
              //     <Safe
              //       id="clinic-vending-machine"
              //       model="VM-CASH-100"
              //       location="Internal cash collection box"
              //       owner="HealthSnack Corp (vending division)"
              //       security="Maintenance keypad"
              //       lastAccess="3 weeks ago (overdue service)"
              //       physical={[
              //         { item: "Coins", desc: "142¤ in change (very full, neglected)" },
              //       ]}
              //       digital={[
              //         { item: "Credchip", desc: "87¤ (3 weeks of receipts, transferable)" },
              //       ]}
              //       notes="Machine service overdue - cash box nearly at capacity, captive audience pricing"
              //     />
              //   ),
              // },
              "Debug Mode": {
                password: {
                  pw: "freemeds",
                  hint: "The mode that gives away drinks for free",
                  hintStrength: 2,
                },
                content: (
                  <>
                    <Line smoke large bold>[DEBUG MODE ACTIVATED]</Line>
                    <Divider />
                    <Line yellow large>⚠ FREE VEND MODE ENABLED</Line>
                    <Line cyan>All payment verification disabled</Line>
                    <Divider />
                    <Line neon>Dispense drinks via main interface - no charge</Line>
                    <Line pink>"Help yourself to overpriced waiting room supplies"</Line>
                  </>
                ),
              },
            },
          },
        },
      },

      "Medical Supply Kiosk": {
        content: (
          <>
            <Line cyan large bold>[MEDICAL SUPPLY KIOSK]</Line>
            <Line smoke>Self-service medical supplies</Line>
            <Divider />

            <Section title="AVAILABLE ITEMS">
              <DataTable
                data={[
                  { label: "Basic First Aid Kit", value: "15¤" },
                  { label: "Sterile Bandages (pack)", value: "5¤" },
                  { label: "Antiseptic Spray", value: "8¤" },
                  { label: "Cheap Painkillers", value: "12¤" },
                  { label: "Anti-infection Pills", value: "18¤" },
                  { label: '"Totally Legit" Antibiotics', value: "25¤" },
                  { label: "Surgical Tape", value: "6¤" },
                  { label: "Disposable Gloves (box)", value: "10¤" },
                ]}
              />
            </Section>

            <Divider />

            <Section title="PAYMENT">
              <Line yellow>Insert credchip or cash</Line>
              <Line yellow>No refunds, no returns</Line>
              <Line yellow>Items dispensed in secure drawer</Line>
            </Section>

            <Divider />
            <Line pink>⚠ Quality not guaranteed | Use at own risk</Line>
          </>
        ),
      },

      "Community Board (Reaper Clinic)": {
        content: (
          <CommunityBoard
            title="COMMUNITY POSTINGS"
            subtitle="Bulletin board - Clinic lobby"
            posts={[
              {
                category: "LOST & FOUND",
                text: "Lost cat - Chrome, cyberware implants, answers to 'Sparks' - 50¤ reward",
                color: "pink",
              },
              {
                category: "BUYING",
                text: "Buying bulk painkillers, no questions asked - Contact: [RCD code redacted]",
                color: "yellow",
              },
              {
                category: "WARNINGS",
                text: "Virid Vipers spotted near clinic last week - Watch your back",
                color: "red",
              },
              {
                category: "SUPPORT",
                text: "Bad Cyberware Survivors support group - Thursdays 20:00 at Cave Club",
                color: "cyan",
              },
              {
                category: "SERVICES",
                text: "Selling used cyberware (removed, cleaned) - Cheap prices, questionable history",
                color: "pink",
              },
              {
                category: "WARNINGS",
                text: "Fake reaperdocs operating in Laketon - Verify credentials before surgery!",
                color: "red",
              },
              {
                category: "JOBS",
                text: "Need muscle for transport job - No questions, good pay - Meet at Ports docks",
                color: "yellow",
              },
            ]}
            footer="⚠ Clinic not responsible for posted content"
          />
        ),
      },

      // ======================================================================
      // STAFF ACCESS LAYER
      // ======================================================================

      access_clinic_internal_network: {
        password: {
          pw: "reaper",
          hint: "What kind of doctor is Doc Joy? (singular)",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="DOC JOY'S REAPER CLINIC"
            message="STAFF ACCESS GRANTED"
            note="⚠ Internal systems - Staff only | Connection: Clinic-Net-047"
            theme="secure"
          />
        ),
        related_commands: {
          "Today's Appointments": {
            content: (
              <>
                <Line cyan large bold>[APPOINTMENT SCHEDULE]</Line>
                <Line smoke>Today's patient roster</Line>
                <Divider />

                <Section title="COMPLETED">
                  <Line neon>08:00 - Marcus Rivera (cyberarm repair) - COMPLETED</Line>
                  <Line neon>11:30 - Sofia Chen (neural port installation) - COMPLETED</Line>
                  <Line neon>15:00 - "Anonymous" (removal job) - COMPLETED</Line>
                </Section>

                <Divider />

                <Section title="CURRENT">
                  <Line yellow>18:45 - Diego Santos (leg actuator replacement) - IN PROGRESS</Line>
                  <Line smoke>Estimated completion: 19:30</Line>
                </Section>

                <Divider />

                <Section title="UPCOMING">
                  <Line cyan>20:00 - Yuki Tanaka (eye upgrade consultation)</Line>
                  <Line cyan>21:30 - Emergency slot (AVAILABLE)</Line>
                  <Line cyan>23:00 - "No Name" (discretion job, pre-paid)</Line>
                </Section>

                <Divider />

                <Section title="NO-SHOWS / CANCELLED">
                  <Line red>14:00 - Steel Jackhammer (post-op checkup) - NO SHOW</Line>
                  <Line yellow>  Note: 3rd missed appointment | Contact attempts failed</Line>
                  <Line yellow>  Patient unreachable at listed RCD | Last contact: 2 weeks ago</Line>
                </Section>

                <Divider />
                <Line pink>Total revenue today: 4,800¤ (cash) + 2,300¤ (credchip)</Line>
              </>
            ),
          },

          "Cyberware Inventory": {
            content: (
              <>
                <Line cyan large bold>[CYBERWARE INVENTORY]</Line>
                <Line smoke>Current stock levels</Line>
                <Divider />

                <Section title="NEURAL IMPLANTS">
                  <DataTable
                    data={[
                      { label: "Basic neural ports", value: "12 units" },
                      { label: "Enhanced neural chips", value: "5 units" },
                      { label: "Memory expansion modules", value: "3 units" },
                      { label: "Reflex boosters", value: "8 units" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="LIMBS & ORGANS">
                  <DataTable
                    data={[
                      { label: "Cyberarms (standard)", value: "4 units" },
                      { label: "Cyberlegs (standard)", value: "2 units" },
                      { label: "Cyber-eyes (basic)", value: "6 pairs" },
                      { label: "Organ replacements", value: "3 units (mixed)" },
                    ]}
                  />
                  <Line red>⚠ Advanced leg system: 0 units (STOLEN - see incident log)</Line>
                </Section>

                <Divider />

                <Section title="WEAPONS & ENHANCEMENTS">
                  <DataTable
                    data={[
                      { label: "Retractable blades", value: "7 units" },
                      { label: "Hidden compartments", value: "5 units" },
                      { label: "Dermal plating", value: "10 sections" },
                      { label: "Military-grade (classified)", value: "1 unit" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="POPULAR ITEMS">
                  <Line yellow>• Neural ports (always in demand)</Line>
                  <Line yellow>• Cyber-eyes (vision upgrades popular)</Line>
                  <Line yellow>• Retractable weapons (street survival)</Line>
                  <Line yellow>• Reflex boosters (killmatch athletes)</Line>
                </Section>

                <Divider />
                <Line pink>Last restocked: 3 days ago | Next shipment: 5 days</Line>
              </>
            ),
          },

          "Security Camera (Clinic Lobby)": {
            content: (
              <Camera
                id="clinic-lobby-cam"
                location="Doc Joy's Clinic - Waiting room"
                coverage="Main entrance, waiting area, reception desk"
                status="ACTIVE"
                recording={true}
                storage="Local server (back office)"
                timeline={[
                  "17:00 → Patient arrived (leg repair, currently in surgery)",
                  "17:15 → Two individuals entered, browsed vending machine, left",
                  "17:45 → Patient arrived for 20:00 consultation (waiting)",
                  "18:00 → Delivery person dropped off medical supplies",
                  "18:30-Present → Quiet, 2 people in waiting room",
                ]}
                blindSpots={[
                  "Operating room (separate camera system)",
                  "Staff break room",
                  "Doc Joy's private office",
                ]}
                lastService="1 week ago"
              />
            ),
            related_commands: {
              "LiveCameraFeed (Lobby)": {
                password: {
                  pw: "monitor",
                  hint: "What you do with a camera feed",
                  hintStrength: 1,
                },
                content: (
                  <>
                    <Line cyan large bold>[LIVE CAMERA FEED - LOBBY]</Line>
                    <Line smoke>Real-time surveillance</Line>
                    <Divider />

                    <Box color="cyan">
                      <Line cyan bold>📹 LIVE FEED</Line>
                      <Divider />
                      <Line>Waiting room: 2 patients seated</Line>
                      <Line>  - Individual 1: Male, 30s, nervous (consulting RCD)</Line>
                      <Line>  - Individual 2: Female, 40s, cyberarm visible (reading magazine)</Line>
                      <Divider />
                      <Line>Reception desk: Unattended (staff in operating room)</Line>
                      <Line>Vending machine: No activity</Line>
                      <Line>Main entrance: Closed, no movement outside</Line>
                    </Box>

                    <Divider />
                    <Line yellow>⚠ Recording active - 7-day loop</Line>
                    <Line yellow>Last incident: 3 weeks ago (break-in, see logs)</Line>
                  </>
                ),
              },
            },
          },

          "Commercial Camera (Operating Room)": {
            content: (
              <CommercialCamera
                id="clinic-operating-room-cam"
                location="Doc Joy's Clinic - Operating theater"
                coverage="Full surgical bay, equipment stations, recovery area"
                status="ACTIVE"
                recording={true}
                resolution="4K medical-grade"
                storage="Secure local server + encrypted cloud backup"
                features={[
                  "Night vision",
                  "Thermal imaging",
                  "Audio recording",
                  "Motion detection",
                  "Automatic surgical documentation",
                ]}
                timeline={[
                  "15:00 → Previous surgery completed (removal job)",
                  "15:30 → Room sterilized, equipment reset",
                  "18:45 → Current surgery began (leg actuator replacement)",
                  "19:00 → Procedure progressing normally",
                  "19:15-Present → Surgery ongoing (estimated 15 min remaining)",
                ]}
                accessLog={[
                  { time: "08:00", user: "Doc Joy", action: "Surgery (cyberarm repair)" },
                  { time: "11:30", user: "Doc Joy", action: "Surgery (neural port)" },
                  { time: "15:00", user: "Doc Joy", action: "Surgery (removal)" },
                  { time: "18:45", user: "Doc Joy", action: "Surgery (leg actuator) - ACTIVE" },
                ]}
                lastService="3 days ago"
                notes="High-security system - Required for medical liability insurance"
              />
            ),
            related_commands: {
              "LiveCameraFeed (Operating Room)": {
                password: {
                  pw: "surgery",
                  hint: "What happens in the operating room",
                  hintStrength: 1,
                },
                content: (
                  <>
                    <Line cyan large bold>[LIVE CAMERA FEED - OPERATING ROOM]</Line>
                    <Line smoke>Real-time surgical surveillance</Line>
                    <Divider />

                    <Box color="red">
                      <Line red bold>⚠ MEDICAL PROCEDURE IN PROGRESS</Line>
                      <Divider />
                      <Line>Doc Joy: Performing leg actuator replacement</Line>
                      <Line>Patient: Male, 40s, stable vitals</Line>
                      <Line>Anesthesia: Active, monitored</Line>
                      <Line>Procedure status: 75% complete</Line>
                      <Line>Estimated completion: 15 minutes</Line>
                    </Box>

                    <Divider />

                    <Section title="SURGICAL BAY STATUS">
                      <Line neon>• Operating table: OCCUPIED</Line>
                      <Line neon>• Anesthesia machine: ACTIVE</Line>
                      <Line neon>• Vital signs monitor: STABLE</Line>
                      <Line neon>• Surgical tools: IN USE</Line>
                      <Line neon>• Recovery area: PREPARED</Line>
                    </Section>

                    <Divider />
                    <Line yellow>⚠ Recording active - Medical documentation purposes</Line>
                  </>
                ),
              },
            },
          },

          "Staff Break Room Terminal": {
            content: (
              <>
                <Line cyan large bold>[STAFF BREAK ROOM]</Line>
                <Line smoke>Crew lounge & amenities</Line>
                <Divider />

                <Section title="BREAK ROOM STATUS">
                  <KeyValue label="Currently occupied" value="No (all staff working)" />
                  <KeyValue label="Coffee status" value="Half pot remaining (made 2 hours ago)" />
                  <KeyValue label="Fridge status" value="Someone's lunch stolen AGAIN" />
                </Section>

                <Divider />

                <Section title="AVAILABLE AMENITIES">
                  <Line neon>• Staff vending machine (better snacks)</Line>
                  <Line neon>• Jukebox (music player)</Line>
                  <Line neon>• Coffee maker (ancient but functional)</Line>
                  <Line neon>• Microwave (don't ask about the smell)</Line>
                  <Line neon>• Message board (staff gossip)</Line>
                </Section>

                <Divider />
                <Line pink>"Survived another shift" - Common staff sentiment</Line>
              </>
            ),
            related_commands: {
              "Jukebox (Staff Break Room)": {
                content: (
                  <Jukebox
                    id="clinic-breakroom-jukebox"
                    location="Doc Joy's Clinic - Staff break room"
                    status="OPERATIONAL"
                    currentTrack="None (room empty)"
                    volume={4}
                    playlist={[
                      {
                        title: "Surgery Simulator 2080 Theme",
                        artist: "MediCore Productions",
                        genre: "Game OST",
                        color: "cyan",
                      },
                      {
                        title: "Stitch You Up",
                        artist: "The Reapers",
                        genre: "Industrial metal",
                        color: "red",
                      },
                      {
                        title: "Ambient OR Suite 7",
                        artist: "Chill Medical Beats",
                        genre: "Lo-fi ambient",
                        color: "blue",
                      },
                      {
                        title: "Never Gonna Give You Up",
                        artist: "Rick Astley",
                        genre: "Classic (joke addition)",
                        color: "pink",
                      },
                      {
                        title: "Cyberware Dreams",
                        artist: "Chrome Hearts",
                        genre: "Synthwave",
                        color: "purple",
                      },
                      {
                        title: "Code Blue",
                        artist: "Emergency Protocol",
                        genre: "Dark techno",
                        color: "red",
                      },
                      {
                        title: "Post-Op Bliss",
                        artist: "Recovery Room Records",
                        genre: "Chill ambient",
                        color: "cyan",
                      },
                    ]}
                    notes="Staff favorites - Helps survive long shifts"
                  />
                ),
              },

              "Vending Machine (Staff Only)": {
                content: (
                  <VendingMachine
                    id="clinic-staff-vending"
                    model="BreakRoom Pro"
                    location="Doc Joy's Clinic - Staff break room"
                    drinks={[
                      { name: 'REAL COFFEE', pattern: 'lines', color: 'purple', available: true },
                      { name: 'BLACK STIM', pattern: 'blocks', color: 'red', available: true },
                      { name: 'ENERGY BOOST', pattern: 'circles', color: 'yellow', available: true },
                      { name: 'SYNTH JUICE', pattern: 'waves', color: 'orange', available: true },
                      { name: "DOC'S SPECIAL", pattern: 'dots', color: 'pink', available: true },
                    ]}
                  />
                ),
                related_commands: {
                  "Maintenance Access": {
                    password: {
                      pw: "staff",
                      hint: "Who uses this vending machine?",
                      hintStrength: 1,
                    },
                    content: (
                      <MaintenanceAccess
                        deviceModel="BreakRoom Pro"
                        deviceId="BRP-8847"
                        firmwareVersion="v4.2.1"
                        systemStatus="OPERATIONAL"
                        uptime="32 days, 12 hours"
                      />
                    ),
                    related_commands: {
                      // "Internal Safe": {
                      //   password: {
                      //     pw: "subsidy",
                      //     hint: "What makes staff prices cheaper",
                      //     hintStrength: 2,
                      //   },
                      //   content: (
                      //     <Safe
                      //       id="clinic-staff-vending-safe"
                      //       model="VM-CASH-100"
                      //       location="Internal cash collection box"
                      //       owner="Doc Joy (clinic subsidized)"
                      //       security="Maintenance keypad"
                      //       lastAccess="1 week ago"
                      //       physical={[
                      //         { item: "Coins", desc: "38¤ in change (staff prices)" },
                      //       ]}
                      //       digital={[
                      //         { item: "Credchip", desc: "45¤ (1 week of staff purchases, transferable)" },
                      //       ]}
                      //       notes="Staff subsidized prices - Don't let patients see this menu"
                      //     />
                      //   ),
                      // },
                      "Debug Mode": {
                        password: {
                          pw: "breaktime",
                          hint: "When staff use this machine",
                          hintStrength: 2,
                        },
                        content: (
                          <>
                            <Line smoke large bold>[DEBUG MODE ACTIVATED]</Line>
                            <Divider />
                            <Line yellow large>⚠ FREE VEND MODE ENABLED</Line>
                            <Line cyan>All payment verification disabled</Line>
                            <Divider />
                            <Line neon>Dispense drinks via main interface - no charge</Line>
                            <Line pink>"Survived another shift? Have a free one."</Line>
                          </>
                        ),
                      },
                    },
                  },
                },
              },

              "Staff Message Board": {
                content: (
                  <>
                    <Line cyan large bold>[STAFF MESSAGE BOARD]</Line>
                    <Line smoke>Internal communications & complaints</Line>
                    <Divider />

                    <Section title="RECENT POSTS">
                      <Line pink>• "Who ate my lunch AGAIN? Third time this week!" - Nurse Maya</Line>
                      <Divider />

                      <Line yellow>
                        • "Reminder: Sterilize equipment BEFORE surgery, not after" - Doc Joy
                      </Line>
                      <Divider />

                      <Line red>
                        • "Doc Joy in bad mood today - the Alliansen thing still bothering him" -
                        Anonymous
                      </Line>
                      <Divider />

                      <Line cyan>
                        • "Patient tried to pay in 'exposure' and 'future favors' - NO. Cash or
                        credchip only!" - Reception
                      </Line>
                      <Divider />

                      <Line neon>
                        • "Coffee machine fixed! Finally!" - Maintenance (2 days ago)
                      </Line>
                      <Divider />

                      <Line pink>
                        • "Anyone know a good place for cheap cyberware? Asking for a friend" -
                        Anonymous
                      </Line>
                      <Divider />

                      <Line yellow>
                        • "That Steel Jackhammer guy never showed for his checkup. Third time. Should
                        we even bother rescheduling?" - Scheduling
                      </Line>
                    </Section>

                    <Divider />
                    <Line smoke>"Complaints are welcome. Solutions are better."</Line>
                  </>
                ),
              },
            },
          },

          "Patient Check-in Kiosk": {
            content: (
              <>
                <Line cyan large bold>[PATIENT CHECK-IN SYSTEM]</Line>
                <Line smoke>Recent sign-ins & status</Line>
                <Divider />

                <Section title="TODAY'S CHECK-INS">
                  <DataTable
                    data={[
                      { label: "08:00 - Marcus Rivera", value: "Completed, paid, left" },
                      { label: "11:30 - Sofia Chen", value: "Completed, paid, left" },
                      { label: "15:00 - Anonymous", value: "Completed, paid cash, left quickly" },
                      { label: "17:00 - Diego Santos", value: "Currently in surgery" },
                      { label: "17:45 - Yuki Tanaka", value: "Waiting for 20:00 consultation" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="NO-SHOWS (LAST 7 DAYS)">
                  <Line red>• Steel Jackhammer (3 times)</Line>
                  <Line yellow>• "Chrome Cat" (2 times - suspected fake name)</Line>
                  <Line yellow>• Alexei Volkov (1 time - rescheduled)</Line>
                </Section>

                <Divider />

                <Section title="BLACKLIST">
                  <Line red>⚠ "Tommy Scraps" - Banned (tried to rob the clinic)</Line>
                  <Line red>⚠ "Viper Jake" - Banned (gang violence on premises)</Line>
                  <Line red>⚠ "Corporate Carl" - Banned (attempted bribe for illegal work)</Line>
                </Section>
              </>
            ),
          },

          "Anesthesia Machine Interface": {
            content: (
              <>
                <Line cyan large bold>[ANESTHESIA MACHINE INTERFACE]</Line>
                <Line smoke>SleepWell 9000 - Medical grade anesthesia system</Line>
                <Divider />

                <Section title="CURRENT STATUS">
                  <DataTable
                    data={[
                      { label: "Status", value: "ACTIVE (in use)" },
                      { label: "Patient ID", value: "ORG-2025-047 (Diego Santos)" },
                      { label: "Anesthesia level", value: "Stable (monitored)" },
                      { label: "Duration", value: "45 minutes (surgery in progress)" },
                      { label: "Vitals link", value: "Connected to patient monitor" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="SYSTEM MAINTENANCE">
                  <Line neon>Last serviced: 1 week ago</Line>
                  <Line neon>Next service: 2 months</Line>
                  <Line neon>Gas reserves: 78% (adequate)</Line>
                  <Line neon>Filter status: Good (replaced 3 days ago)</Line>
                  <Line yellow>⚠ Calibration recommended in 3 weeks</Line>
                </Section>

                <Divider />

                <Section title="USAGE LOG (TODAY)">
                  <Line cyan>08:00 - Marcus Rivera (2 hours)</Line>
                  <Line cyan>11:30 - Sofia Chen (1.5 hours)</Line>
                  <Line cyan>15:00 - Anonymous (1 hour)</Line>
                  <Line yellow>18:45 - Diego Santos (IN PROGRESS)</Line>
                </Section>

                <Divider />
                <Line pink>"Sleep tight. Wake up chrome."</Line>
              </>
            ),
          },
        },
      },

      // ======================================================================
      // DOC JOY'S PRIVATE SYSTEMS
      // ======================================================================

      access_private_systems: {
        password: {
          pw: "alliansen",
          hint: "The corp that stole Doc Joy's designs",
          hintStrength: 2,
        },
        content: (
          <InternalAccess
            name="DOC JOY - PRIVATE SYSTEMS"
            message="ADMINISTRATOR ACCESS GRANTED"
            note="⚠ Restricted access - Doc Joy's personal files only"
            theme="secure"
          />
        ),
        related_commands: {
          "Security Incident Log": {
            content: (
              <IncidentLog
                title="SECURITY INCIDENTS"
                timeframe="Last 30 days"
                incidents={[
                  {
                    timestamp: "3 WEEKS AGO (03:15)",
                    type: "BREAK-IN",
                    details: {
                      "Location": "Back office, design archive",
                      "Entry method": "Forced lock on rear entrance (professional job)",
                      "Items stolen": "Advanced leg system design files (digital + physical blueprints)",
                      "Perpetrators": "Unknown (2-3 individuals, no facial ID)",
                      "Evidence":
                        "Corporate-grade tools used, clean job, no fingerprints",
                      "Suspects": "Alliansen Inc. (circumstantial - they used the design 2 weeks later)",
                      "Police report": "Filed, no investigation (corp influence suspected)",
                      "Resolution": "UNSOLVED",
                    },
                  },
                  {
                    timestamp: "2 WEEKS AGO (14:30)",
                    type: "Surveillance",
                    details: {
                      "Details":
                        "Suspicious individuals observed outside clinic (corp security suspected)",
                      "Duration": "20 minutes, photographing exterior",
                      "Response": "Confronted, individuals left immediately",
                      "Follow-up": "Increased security measures implemented",
                    },
                  },
                  {
                    timestamp: "1 WEEK AGO (22:00)",
                    type: "Threatening contact",
                    details: {
                      "Details":
                        "Anonymous message received (RCD): 'Drop the complaints or else'",
                      "Context": "After Doc Joy contacted authorities about stolen design",
                      "Response": "Message reported, no action taken",
                      "Status": "Ongoing concern",
                    },
                  },
                ]}
              />
            ),
          },

          "Stolen Design Files": {
            content: (
              <>
                <Line cyan large bold>[STOLEN DESIGN FILES - EVIDENCE]</Line>
                <Line smoke>Advanced leg system design (stolen 3 weeks ago)</Line>
                <Divider />

                <Box color="red">
                  <Line red bold>⚠ INTELLECTUAL PROPERTY THEFT</Line>
                  <Divider />
                  <Line>Design: Advanced cyberleg system with enhanced actuators</Line>
                  <Line>Creator: Doc Joy (designed 6 months ago)</Line>
                  <Line>Patent status: Pending (application filed 4 months ago)</Line>
                  <Line>Stolen: 3 weeks ago (break-in, see incident log)</Line>
                  <Line>
                    Current use: Alliansen Inc. installed on Steel Jackhammer (killmatch fighter)
                  </Line>
                </Box>

                <Divider />

                <Section title="DESIGN SPECIFICATIONS">
                  <Line neon>• Enhanced actuators (3x strength over standard)</Line>
                  <Line neon>• Adaptive balance system (AI-assisted)</Line>
                  <Line neon>• Reinforced frame (military-grade alloys)</Line>
                  <Line neon>• Neural integration (seamless control)</Line>
                  <Line neon>• Maintenance interval: 10,000 hours (5x industry standard)</Line>
                  <Line yellow>Estimated market value: 50,000¤+ per pair</Line>
                </Section>

                <Divider />

                <Section title="PROOF OF THEFT">
                  <Line yellow>⚠ Timeline evidence:</Line>
                  <Line>  • Doc Joy design created: 6 months ago</Line>
                  <Line>  • Patent filed: 4 months ago</Line>
                  <Line>  • Break-in at clinic: 3 weeks ago</Line>
                  <Line>  • Alliansen Inc. reveals "new" design: 2 weeks ago</Line>
                  <Line>  • Steel Jackhammer receives legs: 10 days ago</Line>
                  <Divider />
                  <Line red>
                    Design specifications match Doc Joy's files exactly (unique markers present)
                  </Line>
                </Section>

                <Divider />

                <Section title="RECOVERY OPTIONS">
                  <Line cyan>1. Legal action (expensive, slow, corporate influence)</Line>
                  <Line cyan>2. Physical recovery (get the legs back, prove theft)</Line>
                  <Line cyan>3. Sell evidence to competitor (quick cash, abandons IP claim)</Line>
                  <Line yellow>⚠ Doc Joy chose option 2 - hired local crew for recovery job</Line>
                </Section>

                <Divider />
                <Line pink>
                  "They stole my work. I want it back. Every piece." - Doc Joy's job briefing
                </Line>
              </>
            ),
          },

          // "Office Safe (Doc Joy)": {
          //   password: {
          //     pw: "svarta",
          //     hint: "The district where the clinic is located",
          //     hintStrength: 2,
          //   },
          //   content: (
          //     <Safe
          //       id="clinic-docjoy-office-safe"
          //       model="SecureVault Pro 800"
          //       location="Doc Joy's private office (behind medical diploma)"
          //       owner="Doc Joy"
          //       security="Biometric (fingerprint) + 6-digit code"
          //       lastAccess="Yesterday (evening)"
          //       physical={[
          //         {
          //           item: "Cash",
          //           desc: "8,400¤ (clinic emergency fund, large bills)",
          //         },
          //         {
          //           item: "Contracts",
          //           desc: "Business contracts, lease agreements, supplier deals",
          //         },
          //         {
          //           item: "Alliansen evidence",
          //           desc: "Original design blueprints (physical copy, proof of creation date)",
          //         },
          //         {
          //           item: "Backup cyberware",
          //           desc: "2 neural chips (high-end, personal use or resale)",
          //         },
          //         {
          //           item: "Personal documents",
          //           desc: "Medical license, identity papers, insurance",
          //         },
          //         {
          //           item: "Weapon",
          //           desc: "Compact 9mm pistol (loaded, emergency defense)",
          //         },
          //       ]}
          //       digital={[
          //         {
          //           item: "Credchip",
          //           desc: "1,200¤ (emergency fund, transferable)",
          //         },
          //         {
          //           item: "Data file",
          //           desc: "Client blackmail files - Info on various patients (sellable, dangerous)",
          //         },
          //         {
          //           item: "Evidence file",
          //           desc: "Alliansen theft documentation (emails, photos, timeline)",
          //         },
          //         {
          //           item: "Contact list",
          //           desc: "Black market suppliers, fixers, info brokers (valuable connections)",
          //         },
          //       ]}
          //       notes="⚠ Alarm silent trigger if opened without correct biometric | Doc Joy checks safe daily"
          //     />
          //   ),
          // },

          "Financial Records": {
            content: (
              <>
                <Line cyan large bold>[FINANCIAL RECORDS]</Line>
                <Line smoke>Clinic accounting & transactions</Line>
                <Divider />

                <Section title="MONTHLY REVENUE (CURRENT)">
                  <DataTable
                    data={[
                      { label: "Standard procedures", value: "42,000¤" },
                      { label: "Complex surgeries", value: "28,500¤" },
                      { label: "Emergency work", value: "15,200¤" },
                      { label: "Discretion premiums", value: "9,800¤" },
                      { label: "Total", value: "95,500¤" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="EXPENSES">
                  <DataTable
                    data={[
                      { label: "Cyberware supplies", value: "32,000¤" },
                      { label: "Medical supplies", value: "8,500¤" },
                      { label: "Rent & utilities", value: "6,200¤" },
                      { label: "Equipment maintenance", value: "4,800¤" },
                      { label: "Staff salaries", value: "18,000¤" },
                      { label: "Security & insurance", value: "5,500¤" },
                      { label: "Bribes (SecOps)", value: "3,000¤" },
                      { label: "Total", value: "78,000¤" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="SUSPICIOUS TRANSACTION">
                  <Line red bold>⚠ FLAGGED FOR REVIEW:</Line>
                  <Line yellow>3 weeks ago: Large payment from "Anonymous Corp LLC"</Line>
                  <Line yellow>Amount: 15,000¤ (direct bank transfer)</Line>
                  <Line yellow>
                    Purpose: Listed as "consulting services" (no work performed)
                  </Line>
                  <Line yellow>
                    Timing: 2 days BEFORE break-in (possible distraction/bribe attempt?)
                  </Line>
                  <Line yellow>Traced to: Shell company linked to Alliansen Inc.</Line>
                  <Divider />
                  <Line red>
                    Theory: Payment to employee for inside info or to distract Doc Joy
                  </Line>
                </Section>

                <Divider />
                <Line pink>Profit margin: ~18% (typical for underground medical)</Line>
              </>
            ),
          },

          "Client Database": {
            content: (
              <>
                <Line cyan large bold>[CLIENT DATABASE]</Line>
                <Line smoke>Patient records & history</Line>
                <Divider />

                <Section title="DATABASE ACCESS">
                  <Line neon>Total patients on file: 847</Line>
                  <Line neon>Active patients (last 6 months): 312</Line>
                  <Line neon>VIP/Discretion clients: 28</Line>
                  <Line yellow>⚠ Confidential medical records - HIPAA equivalent laws apply</Line>
                </Section>

                <Divider />

                <Section title="NOTABLE CLIENTS">
                  <Line cyan>SELECT NAME FOR DETAILED FILE:</Line>
                  <Line>• Steel Jackhammer (killmatch fighter, recent work)</Line>
                  <Line>• "Anonymous" (multiple visits, cash only)</Line>
                  <Line>• Marcus "Chrome" Rivera (regular maintenance)</Line>
                  <Line>• Alexei Volkov (gang member, weapon implants)</Line>
                  <Line>• Sofia Chen (corporate exec, discretion premium)</Line>
                </Section>

                <Divider />
                <Line pink>
                  "Patient confidentiality is sacred. Unless they don't pay." - Doc Joy
                </Line>
              </>
            ),
            related_commands: {
              "Steel Jackhammer - Patient File": {
                content: (
                  <PersonnelFile
                    employeeId="PATIENT-2025-183"
                    name="Steel Jackhammer"
                    age={32}
                    position="Professional Killmatch Fighter"
                    department="Patient Record"
                    hireDate="First visit: 18 months ago"
                    supervisor="N/A"
                    clearanceLevel={null}
                    district="South Central (penthouse residence)"
                    emergencyContact="Alliansen Inc. (sponsor/manager)"
                    performance={null}
                    notes={[
                      "CURRENT STATUS: Post-operative recovery (advanced leg system installation)",
                      "Procedure date: 10 days ago (performed by Alliansen Inc., not this clinic)",
                      "Cyberware installed: Advanced leg system (STOLEN DESIGN from Doc Joy)",
                      "Address: South Central penthouse (luxury building, high security)",
                      "Current activity: Hosting extended party (2+ days running, per social feeds)",
                      "Next scheduled appointment: Today 14:00 - NO SHOW (3rd missed checkup)",
                      "Medical notes: Patient non-compliant with post-op care, excessive activity",
                      "Warning: Legs not properly settled, premature stress could cause damage",
                      "Previous work: Multiple repairs, cyberarm maintenance, neural port upgrade",
                      "Payment history: Always pays (sponsored by Alliansen Inc.)",
                      "Personality: Arrogant, impatient, dismissive of medical advice",
                      "Security: High-profile target, bodyguards likely, penthouse has security systems",
                    ]}
                    status="ACTIVE - NON-COMPLIANT"
                  />
                ),
              },
            },
          },

          "Personal Terminal (Doc Joy's Desk)": {
            content: (
              <>
                <Line cyan large bold>[DOC JOY'S PERSONAL TERMINAL]</Line>
                <Line smoke>Private workstation</Line>
                <Divider />

                <Section title="TERMINAL ACCESS">
                  <Line neon>User: Doc Joy</Line>
                  <Line neon>Last login: 2 hours ago</Line>
                  <Line neon>Active sessions: Email, calendar, file browser</Line>
                </Section>

                <Divider />

                <Section title="QUICK ACCESS">
                  <Line cyan>• Email archive (recent threatening messages)</Line>
                  <Line cyan>• Calendar (appointments & personal meetings)</Line>
                  <Line cyan>• Design files (backup of stolen work)</Line>
                  <Line cyan>• Contact list (underground network)</Line>
                </Section>
              </>
            ),
            related_commands: {
              "Email Archive": {
                content: (
                  <>
                    <Line cyan large bold>[EMAIL ARCHIVE]</Line>
                    <Line smoke>Recent threatening messages</Line>
                    <Divider />

                    <Box color="red">
                      <Line red bold>⚠ THREATENING EMAIL 1</Line>
                      <Divider />
                      <Line smoke>From: [ANONYMOUS]</Line>
                      <Line smoke>Date: 1 week ago</Line>
                      <Line smoke>Subject: Drop it</Line>
                      <Divider />
                      <Line>
                        "Stop making noise about the design. You don't want this fight. Corporations
                        have long memories and deep pockets. Drop the complaints or face
                        consequences."
                      </Line>
                    </Box>

                    <Divider />

                    <Box color="red">
                      <Line red bold>⚠ THREATENING EMAIL 2</Line>
                      <Divider />
                      <Line smoke>From: legal@alliansen-corp.cy (OFFICIAL)</Line>
                      <Line smoke>Date: 5 days ago</Line>
                      <Line smoke>Subject: Cease and Desist</Line>
                      <Divider />
                      <Line>
                        "Alliansen Inc. denies all allegations of intellectual property theft. Any
                        further public statements will result in legal action for defamation and
                        harassment. Our design was independently developed. Similarity is
                        coincidental."
                      </Line>
                      <Line yellow>Attached: 47-page legal threat document</Line>
                    </Box>

                    <Divider />

                    <Box color="yellow">
                      <Line yellow bold>RESPONSE EMAIL (DRAFT - UNSENT)</Line>
                      <Divider />
                      <Line smoke>To: [FIXER CONTACT]</Line>
                      <Line smoke>Date: 3 days ago</Line>
                      <Line smoke>Subject: Job offer</Line>
                      <Divider />
                      <Line>
                        "I need a crew. Discreet. Professional. The job: steal back my stolen
                        property. Target is Steel Jackhammer's new legs. Payment: 5,000¤ + choice
                        of cyberware. Deadline: 36 hours from acceptance. Interested?"
                      </Line>
                      <Line red>Status: SENT (job posted to underground network)</Line>
                    </Box>

                    <Divider />
                    <Line pink>"They think they can intimidate me. They're right. But I'm more angry than scared."</Line>
                  </>
                ),
              },

              "Calendar": {
                content: (
                  <>
                    <Line cyan large bold>[PERSONAL CALENDAR]</Line>
                    <Line smoke>Doc Joy's schedule</Line>
                    <Divider />

                    <Section title="TODAY">
                      <Line yellow>08:00 - Surgery (Marcus Rivera) - COMPLETED</Line>
                      <Line yellow>11:30 - Surgery (Sofia Chen) - COMPLETED</Line>
                      <Line red>14:00 - Steel Jackhammer checkup - NO SHOW</Line>
                      <Line yellow>15:00 - Surgery (Anonymous) - COMPLETED</Line>
                      <Line yellow>18:45 - Surgery (Diego Santos) - IN PROGRESS</Line>
                      <Line cyan>20:00 - Consultation (Yuki Tanaka) - UPCOMING</Line>
                      <Line cyan>23:00 - Surgery (discretion job) - UPCOMING</Line>
                    </Section>

                    <Divider />

                    <Section title="PERSONAL APPOINTMENTS">
                      <Line pink>Tomorrow, 22:00 - "Meeting with buyers"</Line>
                      <Line smoke>  Note: Potential buyers for Alliansen evidence</Line>
                      <Line smoke>  Location: TBD (neutral ground)</Line>
                      <Divider />

                      <Line pink>3 days from now - "Crew check-in"</Line>
                      <Line smoke>  Note: Follow up on recovery job status</Line>
                      <Line smoke>  Deadline: 36 hours from job acceptance</Line>
                    </Section>

                    <Divider />
                    <Line yellow>⚠ Reminder: Change all passwords after security breach</Line>
                  </>
                ),
              },
            },
          },

          "Clinic Security System": {
            content: (
              <>
                <Line cyan large bold>[CLINIC SECURITY SYSTEM]</Line>
                <Line smoke>Alarm logs & access control</Line>
                <Divider />

                <Section title="SYSTEM STATUS">
                  <DataTable
                    data={[
                      { label: "Armed", value: "YES (after hours mode)" },
                      { label: "Cameras", value: "All active (2 units)" },
                      { label: "Door sensors", value: "All functional" },
                      { label: "Motion detectors", value: "Active (off-hours only)" },
                      { label: "Silent alarm", value: "Armed (links to Doc Joy's RCD)" },
                    ]}
                  />
                </Section>

                <Divider />

                <Section title="ALARM LOG (LAST 30 DAYS)">
                  <Line red>3 WEEKS AGO (03:15) - BREAK-IN DETECTED</Line>
                  <Line yellow>  Rear entrance forced open</Line>
                  <Line yellow>  Motion detected: Back office area</Line>
                  <Line yellow>  Duration: 8 minutes (quick, professional)</Line>
                  <Line yellow>  Response: Doc Joy arrived 15 minutes after alarm</Line>
                  <Line yellow>  Police: Filed report, no investigation</Line>
                  <Divider />

                  <Line cyan>2 WEEKS AGO (14:30) - PERIMETER ALERT</Line>
                  <Line yellow>  Suspicious activity outside (individuals photographing building)</Line>
                  <Line yellow>  Confronted by staff, individuals left</Line>
                  <Line yellow>  No break-in attempted</Line>
                  <Divider />

                  <Line cyan>No other incidents (typical false alarms excluded)</Line>
                </Section>

                <Divider />

                <Section title="ACCESS LOG (TODAY)">
                  <Line neon>08:00 - Doc Joy entered (staff entrance)</Line>
                  <Line neon>08:15 - Nurse Maya entered (staff entrance)</Line>
                  <Line neon>08:00-Present - Multiple patient entries (front entrance)</Line>
                  <Line neon>All authorized access - No anomalies</Line>
                </Section>

                <Divider />

                <Section title="ENHANCED SECURITY (POST-BREACH)">
                  <Line yellow>⚠ New measures implemented:</Line>
                  <Line>• Reinforced locks on all entrances</Line>
                  <Line>• Additional motion sensors</Line>
                  <Line>• Backup power for security system</Line>
                  <Line>• Doc Joy now carries weapon (9mm in office safe)</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default DOC_JOY_CLINIC_COMMANDS;
