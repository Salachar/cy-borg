import {
  Line,
  Box,
  Section,
  Warning,
  Divider,
  KeyValue,
  DataTable,
} from '../TerminalComponents';

const TUTORIAL_APARTMENT_COMPLEX = {
  access_tutorial_complex: {
    content: (
      <>
        <Line cyan>[CONNECTING TO BUILDING NETWORK...]</Line>
        <KeyValue label="Connected to" value="RIVERVIEW_APTS_PUBLIC" />
        <KeyValue label="Signal" value="█████░ (5/6)" />
        <Line neon>* Old apartment building near Lucky Flight Casino</Line>
        <Line neon>* Weak security, most residents use default passwords</Line>
        <Line yellow mt>* Good place to practice your hacking skills</Line>
      </>
    ),
    related_commands: {
      // === APARTMENT 201 - THE DEEP PASSWORDLESS CHAIN ===
      access_apartment_201: {
        content: (
          <>
            <Line cyan>[ACCESSING APARTMENT 201]</Line>
            <Line neon>Tenant: Marcus Chen (tech journalist)</Line>
            <Line yellow mt>* Network completely unsecured (no passwords)</Line>
            <Line neon>* Multiple smart devices detected</Line>
          </>
        ),
        related_commands: {
          access_201_smart_home_hub: {
            content: (
              <>
                <Line cyan>[SMART HOME HUB - APT 201]</Line>
                <KeyValue label="Device" value="HomeSmart 3000" />
                <KeyValue label="Security" value="NONE (default settings)" />
                <Section title="CONNECTED DEVICES:">
                  <Line neon>→ Living room entertainment system</Line>
                  <Line neon>→ Kitchen appliances</Line>
                  <Line neon>→ Security camera (front door)</Line>
                </Section>
              </>
            ),
            related_commands: {
              access_201_entertainment_system: {
                content: (
                  <>
                    <Line cyan>[ENTERTAINMENT SYSTEM]</Line>
                    <Section title="CURRENTLY PLAYING:">
                      <Line neon>"The Dark Net: Cybersecurity Exposed" - Episode 3</Line>
                      <Line yellow mt>Ironic, given his complete lack of security</Line>
                    </Section>
                    <Section title="STREAMING HISTORY:">
                      <Line neon>→ "How to Secure Your Smart Home"</Line>
                      <Line neon>→ "Top 10 Password Mistakes"</Line>
                      <Line neon>→ "Are You Being Watched?"</Line>
                    </Section>
                    <Line yellow mt>* Marcus writes about security but doesn't practice it</Line>
                  </>
                ),
                related_commands: {
                  access_201_streaming_account: {
                    content: (
                      <>
                        <Line smoke large bold>[STREAMING ACCOUNT DETAILS]</Line>
                        <DataTable data={[
                          { label: "Service", value: "CyStream Premium" },
                          { label: "Username", value: "mchen_tech_writer" },
                          { label: "Subscription", value: "Family Plan (5 devices)" },
                          { label: "Password", value: "hunter2" },
                        ]} />
                        <Line yellow mt>* Classic terrible password</Line>
                        <Line neon>* Feel free to share with your friends</Line>
                        <Section title="RECOMMENDATION ALGORITHM:">
                          <Line neon>80% Tech documentaries</Line>
                          <Line neon>15% Cyberpunk movies</Line>
                          <Line neon>5% Cooking shows</Line>
                        </Section>
                      </>
                    ),
                  },
                },
              },

              access_201_kitchen_appliances: {
                content: (
                  <>
                    <Line cyan>[SMART KITCHEN]</Line>
                    <Section title="CONNECTED APPLIANCES:">
                      <Line neon>→ Smart Fridge (inventory management)</Line>
                      <Line neon>→ Coffee Maker (auto-brew enabled)</Line>
                      <Line neon>→ Microwave (voice controlled)</Line>
                    </Section>
                    <KeyValue label="Fridge Temperature" value="3°C" />
                    <Section title="LOW STOCK ALERTS:">
                      <Line yellow mt>→ Milk (expired yesterday)</Line>
                      <Line yellow mt>→ Eggs (2 remaining)</Line>
                      <Line yellow mt>→ Coffee beans (CRITICAL)</Line>
                    </Section>
                  </>
                ),
              },

              access_201_door_camera: {
                content: (
                  <>
                    <Line cyan>[FRONT DOOR SECURITY CAMERA]</Line>
                    <Section title="LIVE FEED:">
                      <Line neon>Hallway visible. No movement detected.</Line>
                    </Section>
                    <Section title="RECENT ACTIVITY (PAST 24H):">
                      <Line neon>→ 08:32 - Marcus leaving (coffee in hand)</Line>
                      <Line neon>→ 18:15 - Marcus returning (takeout bag)</Line>
                      <Line neon>→ 20:47 - Delivery person (pizza)</Line>
                    </Section>
                    <Line yellow mt>* Low resolution, easy to avoid if needed</Line>
                  </>
                ),
              },
            },
          },
        },
      },

      // === APARTMENT 305 - EASY PASSWORD (tutorial level) ===
      access_apartment_305: {
        password: {
          pw: "1234",
          hint: "The most common password in the world (4 digits)",
        },
        content: (
          <>
            <Line cyan>[ACCESSING APARTMENT 305]</Line>
            <Line neon>Tenant: Rosa Martinez (retiree)</Line>
            <Line yellow mt>* Used building manager's suggested password</Line>
            <Line neon>* Minimal smart home integration</Line>
          </>
        ),
        related_commands: {
          access_305_tablet: {
            content: (
              <>
                <Line cyan>[ROSA'S TABLET]</Line>
                <KeyValue label="Device" value="SeniorPad Plus" />
                <KeyValue label="Battery" value="73%" />
                <Section title="ACTIVE APPS:">
                  <Line neon>→ Video calls with grandchildren</Line>
                  <Line neon>→ Digital photo album (2,847 photos)</Line>
                  <Line neon>→ Recipe collection</Line>
                  <Line neon>→ Neighborhood watch forum</Line>
                </Section>
                <Section title="RECENT MESSAGES:">
                  <Line yellow mt>"That casino is ruining this neighborhood!"</Line>
                  <Line yellow mt>"Has anyone seen Batu? His shop's been closed..."</Line>
                  <Line yellow mt>"I heard gunshots last night near the pier"</Line>
                </Section>
                <Line neon>* Rosa knows everything happening in the neighborhood</Line>
              </>
            ),
          },

          access_305_medical_monitor: {
            content: (
              <>
                <Line cyan>[HEALTH MONITORING SYSTEM]</Line>
                <DataTable data={[
                  { label: "Heart Rate", value: "72 bpm (normal)" },
                  { label: "Blood Pressure", value: "125/80 (slightly elevated)" },
                  { label: "Sleep Quality", value: "Poor (noise disturbances)" },
                  { label: "Medication Adherence", value: "100%" },
                ]} />
                <Section title="ALERTS:">
                  <Line yellow mt>Sleep disrupted by external noise (casino patrons)</Line>
                  <Line neon>All vital signs within normal range</Line>
                </Section>
              </>
            ),
          },
        },
      },

      // === APARTMENT 412 - MEDIUM PASSWORD ===
      access_apartment_412: {
        password: {
          pw: "bassline",
          hint: "What's the foundation of every good track? (music term)",
        },
        content: (
          <>
            <Line cyan>[ACCESSING APARTMENT 412]</Line>
            <Line neon>Tenant: DJ Kai "Hexwave" (electronic music producer)</Line>
            <Line yellow mt>* High-end audio equipment detected</Line>
            <Line neon>* Password-protected for privacy</Line>
          </>
        ),
        related_commands: {
          access_412_music_studio: {
            content: (
              <>
                <Line smoke large bold>[HOME STUDIO SYSTEM]</Line>
                <Section title="EQUIPMENT:">
                  <Line neon>→ Digital Audio Workstation (running)</Line>
                  <Line neon>→ MIDI controllers (x4)</Line>
                  <Line neon>→ Studio monitors (high-end)</Line>
                  <Line neon>→ Synthesizers (vintage collection)</Line>
                </Section>
                <Section title="CURRENT PROJECT:">
                  <Line pink>"Neon Requiem" - 73% complete</Line>
                  <Line neon>Genre: Dark synthwave</Line>
                  <KeyValue label="BPM" value="128" />
                  <KeyValue label="Key" value="D minor" />
                </Section>
                <Line yellow mt>* This track is actually pretty good</Line>
              </>
            ),
            related_commands: {
              access_412_project_files: {
                password: {
                  pw: "synthwave",
                  hint: "The genre of music Kai produces",
                },
                content: (
                  <Box color="pink">
                    <Line pink bold large>[PROJECT FILES ACCESSED]</Line>
                    <Section title="UNRELEASED TRACKS:">
                      <Line pink>→ "Neon Requiem" (work in progress)</Line>
                      <Line pink>→ "Chrome Dreams" (mastering stage)</Line>
                      <Line pink>→ "Electric Funeral" (finished, unreleased)</Line>
                      <Line pink>→ "Hexwave_LiveSet_LuckyFlight.wav"</Line>
                    </Section>
                    <Divider color="pink" />
                    <Warning>Last file is from a gig at Lucky Flight Casino!</Warning>
                    <Line neon>* Recording from 2 weeks ago</Line>
                    <Line yellow mt>* Might contain background conversations?</Line>
                  </Box>
                ),
              },
            },
          },

          access_412_booking_calendar: {
            content: (
              <>
                <Line smoke large bold>[PERFORMANCE SCHEDULE]</Line>
                <Section title="UPCOMING GIGS:">
                  <Line neon>→ Tonight: Club Hellscape (Ports district)</Line>
                  <Line neon>→ Friday: Underground rave (location TBD)</Line>
                  <Line neon>→ Next week: Lucky Flight Casino (return booking)</Line>
                </Section>
                <Section title="PAYMENT HISTORY:">
                  <KeyValue label="Average per gig" value="800¤" />
                  <KeyValue label="Lucky Flight pays" value="1,200¤ (premium venue)" />
                </Section>
                <Line yellow mt>* Kai plays at the casino regularly</Line>
              </>
            ),
          },
        },
      },

      // === APARTMENT 108 - HARDER PASSWORD (optional challenge) ===
      access_apartment_108: {
        password: {
          pw: "nanomold",
          hint: "The dangerous fungal outbreak in Laketon's water supply",
        },
        content: (
          <>
            <Line cyan>[ACCESSING APARTMENT 108]</Line>
            <Line neon>Tenant: Dr. Sato Kim (microbiologist, remote worker)</Line>
            <Line yellow mt>* Research workstation detected</Line>
            <Line neon>* Password relates to current Cy crisis</Line>
          </>
        ),
        related_commands: {
          access_108_research_terminal: {
            password: {
              pw: "spores",
              hint: "What fungus releases to reproduce",
            },
            content: (
              <Box color="yellow">
                <Line yellow bold large>[RESEARCH TERMINAL - DR. KIM]</Line>
                <Section title="CURRENT RESEARCH:">
                  <Line neon>Project: Nanomold contamination analysis</Line>
                  <Line neon>Status: Active investigation</Line>
                  <KeyValue label="Samples collected" value="47" />
                  <KeyValue label="Samples analyzed" value="23" />
                </Section>
                <Divider />
                <Section title="FINDINGS (PRELIMINARY):">
                  <Line yellow mt>→ Nanomold strain is artificial (engineered?)</Line>
                  <Line yellow mt>→ Source traced to G0 contamination runoff</Line>
                  <Line yellow mt>→ Infection rate accelerating in Slums</Line>
                  <Line red>→ Corporate coverup suspected</Line>
                </Section>
                <Divider />
                <Warning>Research funded by anonymous donor</Warning>
                <Line neon>* Dr. Kim is trying to help the community</Line>
              </Box>
            ),
            related_commands: {
              access_108_sample_database: {
                content: (
                  <>
                    <Line smoke large bold>[SAMPLE DATABASE]</Line>
                    <Section title="COLLECTION SITES:">
                      <Line neon>→ Laketon water supply (23 samples)</Line>
                      <Line neon>→ Bigmosse residential pipes (12 samples)</Line>
                      <Line neon>→ Lilypond cisterns (8 samples)</Line>
                      <Line neon>→ G0 perimeter runoff (4 samples)</Line>
                    </Section>
                    <Section title="CONTAMINATION LEVELS:">
                      <Line yellow mt>Laketon: SEVERE (critical intervention needed)</Line>
                      <Line yellow mt>Bigmosse: MODERATE (worsening)</Line>
                      <Line neon>Lilypond: LOW (isolated cases)</Line>
                      <Line red>G0 runoff: OFF THE SCALE</Line>
                    </Section>
                  </>
                ),
              },
            },
          },

          access_108_personal_notes: {
            content: (
              <>
                <Line smoke large bold>[DR. KIM'S PERSONAL NOTES]</Line>
                <Section title="JOURNAL ENTRY - YESTERDAY:">
                  <Line neon>"The casino's wastewater connects to Laketon supply.</Line>
                  <Line neon>Maintenance records show illegal dumping.</Line>
                  <Line neon>Someone is paying to keep this quiet.</Line>
                  <Line yellow mt>I need more evidence before I can publish."</Line>
                </Section>
                <Divider />
                <Section title="TO-DO LIST:">
                  <Line neon>→ Request casino maintenance logs (denied 3x)</Line>
                  <Line neon>→ Contact investigative journalist</Line>
                  <Line neon>→ Collect more G0 runoff samples</Line>
                  <Line yellow mt>→ Buy more respirator filters</Line>
                </Section>
              </>
            ),
          },
        },
      },

      // === BUILDING SYSTEMS (NO PASSWORDS) ===
      access_building_systems: {
        content: (
          <>
            <Line cyan>[BUILDING MANAGEMENT SYSTEM]</Line>
            <Line neon>Riverview Apartments - Maintenance Portal</Line>
            <Line yellow mt>* Old system, minimal security</Line>
          </>
        ),
        related_commands: {
          view_building_roster: {
            content: (
              <>
                <Line smoke large bold>[TENANT DIRECTORY]</Line>
                <Section title="OCCUPIED UNITS:">
                  <Line neon>108 - Dr. Sato Kim (microbiologist)</Line>
                  <Line neon>201 - Marcus Chen (tech journalist)</Line>
                  <Line neon>305 - Rosa Martinez (retiree)</Line>
                  <Line neon>412 - Kai "Hexwave" (DJ/producer)</Line>
                  <Line neon>+ 12 other units</Line>
                </Section>
                <Section title="VACANT UNITS:">
                  <Line yellow mt>→ 4 units (can't afford rent increase)</Line>
                </Section>
                <KeyValue label="Building Occupancy" value="80%" />
              </>
            ),
          },

          view_maintenance_logs: {
            content: (
              <>
                <Line smoke large bold>[MAINTENANCE LOG]</Line>
                <Section title="RECENT ISSUES:">
                  <Line yellow mt>→ Water pressure low (Laketon supply issues)</Line>
                  <Line yellow mt>→ Elevator broken (3 days, still not fixed)</Line>
                  <Line yellow mt>→ Roof leak in Unit 501</Line>
                  <Line neon>→ Suspicious mold in basement (being "investigated")</Line>
                </Section>
                <Section title="BUILDING MANAGER:">
                  <Line neon>Contact: Victor (rarely responds)</Line>
                  <Line yellow mt>* Known for ignoring tenant complaints</Line>
                </Section>
              </>
            ),
          },

          access_security_cameras: {
            content: (
              <>
                <Line smoke large bold>[BUILDING SECURITY CAMERAS]</Line>
                <Section title="CAMERA LOCATIONS:">
                  <Line neon>→ Front entrance</Line>
                  <Line neon>→ Rear alley door</Line>
                  <Line neon>→ Elevator (broken camera)</Line>
                </Section>
                <Section title="FOOTAGE QUALITY:">
                  <Line yellow mt>Resolution: 480p (ancient system)</Line>
                  <Line yellow mt>Storage: 7 days then auto-delete</Line>
                  <Line neon>Most angles have blind spots</Line>
                </Section>
                <Line yellow mt>* Easy to avoid if you know the layout</Line>
              </>
            ),
          },
        },
      },
    },
  },
};

export default TUTORIAL_APARTMENT_COMPLEX;
