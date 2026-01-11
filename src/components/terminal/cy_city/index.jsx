import {
  Line,
  Box,
  Section,
  ListItem,
  Warning,
  Divider,
  KeyValue,
  DataTable,
  ProgressBar,
} from '../TerminalComponents';

const CY_CITY_COMMANDS = {
  // === SIMPLE INFO COMMANDS ===
  "Batcave (wifi)": {
    content: (
      <>
        <Line cyan>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="SVARTA_APTS_312" />
        <KeyValue label="Signal" value="████░░ (4/6)" />
        <Line yellow mt>* Residential network detected</Line>
        <Line neon>* Multiple unsecured devices found</Line>
      </>
    ),
  },

  connect_cody_wifi: {
    content: (
      <>
        <Line cyan>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="SVARTA_APTS_312" />
        <KeyValue label="Signal" value="████░░ (4/6)" />
        <Line yellow mt>* Residential network detected</Line>
        <Line neon>* Multiple unsecured devices found</Line>
      </>
    ),
  },

  connect_bodys_pho: {
    content: (
      <>
        <Line cyan pulse>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="BODYS_PHO_GUEST" />
        <KeyValue label="Signal" value="██████ (6/6)" />
        <Line yellow top>* Best pho in the Ports. Cash only. No cameras.</Line>
      </>
    ),
  },

  connect_neon_pillar_public: {
    content: (
      <>
        <Line cyan>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="SPECTRAL_FT_PUBLIC" />
        <KeyValue label="Signal" value="██████ (6/6)" />
        <Line yellow top>WARNING: All traffic monitored by Spectral FT Holdings</Line>
        <Line cyan>Terms of Service: Your data belongs to us now</Line>
      </>
    ),
  },

  connect_street_clinic: {
    content: (
      <>
        <Line cyan>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="FINGERS_CLINIC_5G" />
        <KeyValue label="Signal" value="███░░░ (3/6)" />
        <Line yellow top>* No questions asked. Credstick or chrome as payment.</Line>
      </>
    ),
  },

  query_cy_traffic: {
    content: (
      <Box>
        <Line smoke large bold>[CY TRAFFIC - REAL-TIME]</Line>
        <Section title="CURRENT CONDITIONS:">
          <Line red>Central Bridge: GRIDLOCK (accident - 3 fatalities)</Line>
          <Line yellow>Ports Canal Taxi: DELAYED (fatberg collision)</Line>
          <Line neon>Air Traffic: NORMAL (smog visibility: 100m)</Line>
          <Line neon>Metro Lines: 75% OPERATIONAL</Line>
        </Section>
        <Section title="ADVISORIES:">
          <Line red>Avoid Bigmosse - gang activity reported</Line>
          <Line yellow top>Heavy SecOps presence in South Central</Line>
        </Section>
      </Box>
    ),
  },

  query_air_quality: {
    content: (
      <>
        <Line smoke large bold>[CY AIR QUALITY INDEX]</Line>
        <DataTable data={[
          { label: "AQI", value: "387 (HAZARDOUS)" },
          { label: "PM2.5", value: "421 µg/m³" },
          { label: "Toxicity", value: "EXTREME" },
          { label: "Visibility", value: "50-200m" },
        ]} />
        <Warning>RESPIRATOR RECOMMENDED</Warning>
        <Line neon>Brought to you by Kaytell Makers</Line>
      </>
    ),
  },

  access_street_food_vendors: {
    content: (
      <>
        <Line smoke large bold>[STREET FOOD DIRECTORY]</Line>
        <Section title="PORTS DISTRICT:">
          <Line neon>→ Noodle Cart #447: Synthetic ramen (5¤)</Line>
          <Line neon>→ Meat Skewer Stand: Mystery meat (3¤)</Line>
          <Line neon>→ Fungi Fries: Mycobiotic chips (4¤)</Line>
        </Section>
        <Section title="HEALTH RATING:">
          <Line yellow mt>★★☆☆☆ - Probably won't kill you</Line>
        </Section>
      </>
    ),
  },

  query_current_events: {
    content: (
      <>
        <Line smoke large bold>[CY NEWS FEED - LIVE]</Line>
        <ListItem>Undersjön construction enters year 15</ListItem>
        <ListItem>Spectral FT stock hits record high</ListItem>
        <ListItem>3 dead in Central Bridge collision</ListItem>
        <ListItem>Nanomold outbreak in Laketon water supply</ListItem>
        <ListItem>New celebrity couple Tulles&deVerte announce merger</ListItem>
        <ListItem>G0 containment wall holding, officials say</ListItem>
        <Line yellow mt>Last updated: 3 minutes ago</Line>
      </>
    ),
  },

  access_black_market_rumors: {
    password: {
      pw: "credits",
      hint: "What everyone wants",
    },
    content: (
      <Box color="pink">
        <Line pink bold large>[BLACK MARKET WHISPERS]</Line>
        <Section title="HOT ITEMS THIS WEEK:">
          <Line neon>→ Military-grade cyberware (stolen from ACGS shipment)</Line>
          <Line neon>→ Pre-Incident artifacts from G0 scrapheads</Line>
          <Line neon>→ Unregistered cyberdeck with clean serial</Line>
          <Line neon>→ Virid Viper's new synthetic (highly addictive)</Line>
        </Section>
        <Section title="SELLER LOCATIONS:">
          <Line yellow mt>Meet at the usual spots. You know the drill.</Line>
        </Section>
      </Box>
    ),
  },

  // === CHAINED COMMANDS ===

  connect_apartment_complex_wifi: {
    content: (
      <>
        <Line cyan>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="SVARTA_APTS_312" />
        <KeyValue label="Signal" value="████░░ (4/6)" />
        <Line yellow mt>* Residential network detected</Line>
        <Line neon>* Multiple unsecured devices found</Line>
      </>
    ),
    related_commands: {
      access_neighbor_smart_tv: {
        content: (
          <>
            <Line cyan>[ACCESSING SMART TV - APT 312-B]</Line>
            <Section title="CURRENTLY WATCHING:">
              <Line neon>"Corporate Wars: Season 7 Episode 12"</Line>
              <Line yellow mt>Reality show where megacorps battle for market share</Line>
            </Section>
            <Section title="VIEWING HISTORY:">
              <Line neon>→ "Upload or Die: Fideistic Transformation Documentary"</Line>
              <Line neon>→ "Cy's Got Chrome" (talent show)</Line>
              <Line neon>→ "Real Housewives of Central Hills"</Line>
              <Line neon>→ "G0 Survivor" (banned in 47 districts)</Line>
            </Section>
          </>
        ),
      },

      access_neighbor_security_cam: {
        content: (
          <>
            <Line cyan>[ACCESSING SECURITY CAMERA - APT 312-B]</Line>
            <Section title="LIVE FEED:">
              <Line neon>Empty apartment. Lights off.</Line>
              <Line neon>Time stamp: 03:47 AM</Line>
            </Section>
            <Section title="MOTION ALERTS (PAST 24H):">
              <Line neon>→ 22:34: Person entering apartment</Line>
              <Line neon>→ 06:15: Person leaving apartment</Line>
              <Line neon>→ 18:43: Person entering apartment</Line>
            </Section>
            <Line yellow mt>* Owner works night shift at Mosscroft</Line>
          </>
        ),
      },

      access_neighbor_fridge: {
        content: (
          <>
            <Line cyan>[ACCESSING SMART FRIDGE - APT 312-B]</Line>
            <Section title="INVENTORY:">
              <Line neon>→ Synth-milk (expired 2 weeks ago)</Line>
              <Line neon>→ AST biomatter protein bars (x4)</Line>
              <Line neon>→ Mystery leftovers in foil</Line>
              <Line neon>→ Can of NutriBrew energy drink</Line>
            </Section>
            <Section title="TEMPERATURE:">
              <KeyValue label="Current" value="4°C" />
              <KeyValue label="Status" value="OPTIMAL" />
            </Section>
            <Line yellow mt>* Fridge has sent 47 low-stock alerts (all ignored)</Line>
          </>
        ),
      },
    },
  },

  // === MORE WIFI CHAINS ===

  connect_nightclub_hellscape: {
    content: (
      <>
        <Line cyan>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="HELLSCAPE_VIP" />
        <KeyValue label="Signal" value="██████ (6/6)" />
        <Line pink>* Premium nightclub in Ports district</Line>
        <Line neon>* VIP access detected - all amenities available</Line>
      </>
    ),
    related_commands: {
      access_nightclub_security: {
        content: (
          <>
            <Line cyan>[ACCESSING SECURITY SYSTEM]</Line>
            <Section title="CAMERA FEEDS:">
              <Line neon>→ Main Floor: 342 patrons (capacity: 400)</Line>
              <Line neon>→ VIP Lounge: 12 patrons (Stone Eels gang members)</Line>
              <Line neon>→ Back Alley: 3 people (drug transaction in progress)</Line>
              <Line neon>→ Bathroom: [FEED DISABLED]</Line>
            </Section>
            <Section title="SECURITY ALERTS:">
              <Line yellow mt>→ Weapons detected: 47 firearms, 23 blades</Line>
              <Line yellow mt>→ SecOps bribe status: CURRENT (paid this week)</Line>
            </Section>
          </>
        ),
      },

      access_vip_booth_tab: {
        content: (
          <>
            <Line cyan>[ACCESSING VIP BOOTH #3 - CURRENT TAB]</Line>
            <DataTable data={[
              { label: "Synth-champagne", value: "400¤ x3" },
              { label: "Premium vodka", value: "350¤ x5" },
              { label: "Virid Special", value: "800¤ x2" },
              { label: "Energy drinks", value: "50¤ x12" },
              { label: "Service charge", value: "500¤" },
            ]} />
            <Divider />
            <KeyValue label="TOTAL" value="5,450¤" valueColor="red" />
            <Line yellow mt>* Charged to: Saša (Stone Eels)</Line>
          </>
        ),
      },

      access_dj_playlist: {
        content: (
          <>
            <Line smoke large bold>[NOW PLAYING - DJ HEXCORE]</Line>
            <Section title="CURRENT TRACK:">
              <Line pink>"Neon Funeral" - PHASER/MOB</Line>
              <Line neon>Genre: Blackened Chromecore</Line>
            </Section>
            <Section title="UP NEXT:">
              <Line neon>→ "Digital Burial" - I must leave</Line>
              <Line neon>→ "Chrome Goddess" - HeCcc</Line>
              <Line neon>→ "Orbital Decay" - Sirius Last Light</Line>
            </Section>
            <Line yellow mt>* Crowd energy: 94% (HIGH)</Line>
          </>
        ),
      },
    },
  },

  // === CORPORATE NETWORK CHAIN ===

  connect_kaytell_guest_wifi: {
    content: (
      <>
        <Line cyan>[CONNECTING...]</Line>
        <KeyValue label="Connected to" value="KAYTELL_GUEST" />
        <KeyValue label="Signal" value="██████ (6/6)" />
        <Line yellow mt>Terms: All activity monitored. Violation = termination.</Line>
        <Line neon>Employee portal detected on network</Line>
      </>
    ),
    related_commands: {
      access_kaytell_employee_portal: {
        password: {
          pw: "makers",
          hint: "What Kaytell does",
        },
        content: (
          <Box color="yellow">
            <Line yellow bold large>[KAYTELL MAKERS - EMPLOYEE PORTAL]</Line>
            <Section title="SHIFT SCHEDULE:">
              <Line neon>Current shift: 06:00 - 18:00</Line>
              <KeyValue label="Active workers" value="2,847" />
              <KeyValue label="Injuries today" value="14" />
              <KeyValue label="Fatalities today" value="0" />
            </Section>
            <Section title="PRODUCTION QUOTAS:">
              <Line neon>Textile output: 87% of target</Line>
              <Line red>Chemical efficiency: 112% (VIOLATION)</Line>
            </Section>
            <Warning>Safety inspector visit: POSTPONED (bribe accepted)</Warning>
          </Box>
        ),
      },
    },
  },

  // === RANDOM ENCOUNTERS / EASTER EGGS ===

  scan_nearby_devices: {
    content: (
      <>
        <Line cyan>[SCANNING FOR NEARBY DEVICES...]</Line>
        <ProgressBar percent={100} label="Scanning" />
        <Section title="DEVICES FOUND:">
          <Line neon>→ RCD-7721 "CHROME_DADDY"</Line>
          <Line neon>→ RCD-8832 "definitely_not_a_cop"</Line>
          <Line neon>→ RCD-3421 "Fingers_DocBag"</Line>
          <Line neon>→ Cyberdeck-991 [ENCRYPTED]</Line>
          <Line neon>→ SmartGun-4477 "Saša's_Backup"</Line>
        </Section>
        <Line yellow mt>* 14 more devices detected (too far to connect)</Line>
      </>
    ),
  },

  access_abandoned_server: {
    content: (
      <>
        <Line cyan>[CONNECTING TO UNKNOWN SERVER...]</Line>
        <Line cyan pulse>Establishing connection...</Line>
        <Divider />
        <Line pink bold pulse>ERROR: UNKNOWN PROTOCOL DETECTED</Line>
        <Line neon>Last accessed: 47 years ago</Line>
        <Section title="ARCHIVED DATA:">
          <Line neon>→ Pre-Incident city maps</Line>
          <Line neon>→ Meteorological data (corrupted)</Line>
          <Line neon>→ Emergency broadcast logs</Line>
          <Line neon>→ [FILE DELETED BY UNKNOWN USER]</Line>
        </Section>
        <Line red>Connection unstable. Disconnecting...</Line>
      </>
    ),
  },

  query_urban_legends: {
    content: (
      <>
        <Line smoke large bold>[CY URBAN LEGENDS DATABASE]</Line>
        <Section title="MOST SEARCHED:">
          <Line pink>→ The Salmon Door (Ports exclusive restaurant)</Line>
          <Line pink>→ My Wall (underground killclub/venue)</Line>
          <Line pink>→ The Terpischore Sisters (secret society)</Line>
          <Line pink>→ The Night Sound (what screams in G0)</Line>
          <Line pink>→ Basilisk sightings (deep Net entities)</Line>
        </Section>
        <Line yellow mt>* 78% of legends have basis in fact</Line>
      </>
    ),
  },

  access_street_preacher_stream: {
    content: (
      <Box color="red">
        <Line red bold large>[LIVE STREAM: BROTHER STATIC]</Line>
        <Section title="CURRENT SERMON:">
          <Line red>"...AND THE MACHINES WILL WEEP CHROME TEARS!"</Line>
          <Line neon>"The corporations feed on your SOUL!"</Line>
          <Line red>"G0 was THEIR doing! THEIR sacrifice!"</Line>
          <Line neon>"Reject the upload! Reject the singularity!"</Line>
          <Line red>"ONLY FLESH IS REAL! ONLY PAIN IS TRUTH!"</Line>
        </Section>
        <KeyValue label="Viewers" value="47" />
        <KeyValue label="Donations" value="12¤ total" />
        <Line yellow mt>* Stream location: Ports district, Pier 7</Line>
      </Box>
    ),
  },

  download_city_survival_guide: {
    content: (
      <>
        <Line cyan>[DOWNLOADING: CY_SURVIVAL_TIPS.TXT]</Line>
        <ProgressBar percent={100} label="Download" />
        <Section title="SURVIVAL TIPS:">
          <Line neon>1. Never drink canal water (even filtered)</Line>
          <Line neon>2. SecOps response time: 4-12 minutes (if they come)</Line>
          <Line neon>3. Respirator masks mandatory in Mosscroft</Line>
          <Line neon>4. Don't make eye contact in the Slums</Line>
          <Line neon>5. G0 radiation will kill you in 20 minutes</Line>
          <Line neon>6. Street food is 60% safe (better odds than Corps)</Line>
          <Line neon>7. If you see Nanophreaks, run</Line>
          <Line neon>8. The Stone Eels are surprisingly reasonable</Line>
          <Line neon>9. Never trust anyone from the Hills</Line>
          <Line neon>10. The city wants you dead. Prove it wrong.</Line>
        </Section>
      </>
    ),
  },

  // === LOOT/REWARDS ===

  access_dead_drop_network: {
    password: {
      pw: "runner",
      hint: "What people who need dead drops usually are",
    },
    content: (
      <Box color="cyan">
        <Line smoke large bold>[DEAD DROP NETWORK - ACTIVE DROPS]</Line>
        <Section title="PORTS DISTRICT:">
          <Line cyan>→ Drop #412: Behind dumpster, Pier 9</Line>
          <Line neon>Contents: 500¤ credstick, encrypted data chip</Line>
        </Section>
        <Section title="CENTRAL:">
          <Line cyan>→ Drop #89: Undersjön construction site, Level -2</Line>
          <Line neon>Contents: [CLAIMED 4 hours ago]</Line>
        </Section>
        <Section title="SLUMS:">
          <Line cyan>→ Drop #724: Lilypond, abandoned metro station</Line>
          <Line neon>Contents: Unregistered handgun (d6 damage)</Line>
        </Section>
        <Line yellow mt>* GM discretion required for item acquisition</Line>
      </Box>
    ),
  },

  "atm_machine (hack)": {
    content: (
      <>
        <Line cyan>[ACCESSING ATM TERMINAL...]</Line>
        <Line cyan pulse>Bypassing security</Line>
        <Divider />
        <Line neon>Security bypassed successfully</Line>
        <Section title="DISPENSING:">
          <Line cyan>→ 200¤ (before ATM alarm triggers)</Line>
        </Section>
        <Line red>WARNING: Alarm triggered!</Line>
        <Line red>SecOps response time: d4 minutes</Line>
        <Line yellow mt>* GM discretion - roll for consequences</Line>
      </>
    ),
  },

  access_lost_and_found: {
    content: (
      <>
        <Line smoke large bold>[PORTS METRO - LOST & FOUND DATABASE]</Line>
        <Section title="UNCLAIMED ITEMS (7 DAYS):">
          <Line neon>→ Black leather jacket (synthetic)</Line>
          <Line neon>→ Broken cyberdeck (salvageable parts)</Line>
          <Line neon>→ 50¤ credstick (PIN: 1234)</Line>
          <Line neon>→ Bottle of unknown pills</Line>
          <Line neon>→ Data chip labeled "EVIDENCE"</Line>
        </Section>
        <Line yellow mt>* Location: Metro Station Central-7, Office 4B</Line>
        <Line yellow mt>* GM decides if items are still available</Line>
      </>
    ),
  },

  // === JUST FOR FUN ===

  access_food_delivery_app: {
    content: (
      <>
        <Line smoke large bold>[CY-EATS DELIVERY APP]</Line>
        <Section title="TRENDING NOW:">
          <Line neon>→ Body's Pho - Synthetic Beef Noodle Soup (35¤)</Line>
          <Line neon>→ Mosscroft Grill - "Meat" Skewers (22¤)</Line>
          <Line neon>→ AST Fresh - Biomatter Protein Bowl (18¤)</Line>
          <Line neon>→ Fungi Garden - Mycobiotic Burger (28¤)</Line>
        </Section>
        <Section title="DELIVERY TIME:">
          <Line red>Currently: 2-4 hours (high demand)</Line>
          <Line yellow mt>* Drones get shot down in the Slums</Line>
        </Section>
      </>
    ),
  },

  query_horoscope: {
    content: (
      <Box color="pink">
        <Line pink bold large>[DAILY HOROSCOPE - BY THE NET ORACLE]</Line>
        <Section title="ALL SIGNS:">
          <Line pink>Today the stars align in a pattern of corporate oppression.</Line>
          <Line pink>Your lucky number is: [REDACTED FOR PROFIT]</Line>
          <Line pink>Avoid: SecOps, gang territory, G0, the rich, the poor, everyone</Line>
          <Line pink>Lucky color: The color of blood on chrome</Line>
          <Line pink>Romance: You will meet someone. They will betray you.</Line>
          <Line pink>Career: Your boss doesn't know you exist. Good.</Line>
        </Section>
        <Line yellow mt>* Brought to you by Fideistic Transformation</Line>
      </Box>
    ),
  },

  access_dating_app: {
    content: (
      <>
        <Line smoke large bold>[CY-MATCH DATING APP]</Line>
        <Section title="NEARBY PROFILES:">
          <Line pink>→ "CHROME_QUEEN" - 2km away</Line>
          <Line neon>"Looking for someone who isn't a corpo rat"</Line>
          <Line pink>→ "DEFINITELY_HUMAN" - 0.5km away</Line>
          <Line neon>"I promise I'm not a SecOps honey trap"</Line>
          <Line pink>→ "NEON_DREAMS" - 4km away</Line>
          <Line neon>"Swipe right if you have a working cyberdeck ;)"</Line>
        </Section>
        <Line yellow mt>* 78% of profiles are bots, scams, or cops</Line>
      </>
    ),
  },

  query_arcade_cabinets: {
    content: (
      <Box color="cyan">
        <Line smoke large bold>[RETRO ARCADE - GAME SELECT]</Line>
        <Section title="AVAILABLE GAMES:">
          <Line cyan>→ DRONE HUNTER (Classic shooter)</Line>
          <Line cyan>→ CHROME OR DIE (Racing game)</Line>
          <Line cyan>→ CORPO CRUSH (Puzzle game)</Line>
          <Line cyan>→ G0 SURVIVOR (Horror game - BANNED)</Line>
        </Section>
        <KeyValue label="Insert coins" value="5¤ per play" />
        <Line yellow mt>* High score: SAŠA - 1,337,420 points</Line>
      </Box>
    ),
  },
};

export default CY_CITY_COMMANDS;
