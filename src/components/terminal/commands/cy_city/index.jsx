import {
  Line,
  Box,
  Section,
  Warning,
  Divider,
  KeyValue,
  DataTable,
} from '@terminal/TerminalComponents';
import {
  ATM,
  CorpAd,
} from "@terminal/retcomdevice"

import CyCityPublicAccessBanner from './public_access_banner';
import CyCityCorporatePortalsBanner from './corp_portal_banner';

export const CY_CITY_NETWORK = {
  "ATM": {
    blocker: {
      mastermind_hack: {
        enabled: true,
      }
    },
    content: (
      <ATM
        id="lfc-lobby-atm"
        model="ATM-700X"
        location="Lucky Flight Casino - Main lobby (near entrance)"
        network="CasinoBlizzFunds Network"
        cashAvailable="5,000¤ (high capacity)"
        lastService="Yesterday"
        transactions={[
          "2 hours ago → Withdrawal: 200¤",
          "3 hours ago → Withdrawal: 500¤",
          "4 hours ago → Failed transaction (insufficient funds)",
          "5 hours ago → Withdrawal: 100¤",
          "6 hours ago → Withdrawal: 1,000¤",
        ]}
      />
    ),
  },

  "CY CITY PUBLIC ACCESS": {
    content: (
      <CyCityPublicAccessBanner />
    ),
    related_commands: {
      "Cy News Network (24/7)": {
        content: (
          <>
            <Line cyan large bold>CY NEWS NETWORK</Line>
            <Line yellow>"Truth. Verified. Corporate-Approved."</Line>
            <Divider />
            <Line neon>LIVE FEED - Updated every 30 seconds</Line>
            <Divider />
            <Section title="BREAKING NEWS:">
              <Line red>→ Undersjön construction enters year 15, still 60% complete</Line>
              <Line red>→ Spectral FT stock hits record high amid merger rumors</Line>
              <Line red>→ 3 dead in Central Bridge collision, traffic diverted</Line>
              <Line yellow>→ Nanomold outbreak in Laketon water supply - residents advised to boil</Line>
            </Section>
            <Divider />
            <Section title="TRENDING STORIES:">
              <Line neon>• Celebrity couple Tulles&deVerte announce merger deal</Line>
              <Line neon>• G0 containment wall holding strong, officials confirm</Line>
              <Line neon>• UCS unveils new automated security platform</Line>
              <Line neon>• Kaytell Makers reports record profits this quarter</Line>
              <Line neon>• Mysterious illness spreads through Mosscroft factory workers</Line>
            </Section>
            <Divider />
            <Section title="WEATHER:">
              <Line cyan>Current: Heavy smog, visibility 100m</Line>
              <Line cyan>Temperature: 18°C (feels like 22° due to pollution)</Line>
              <Line yellow>Air Quality Index: 387 (HAZARDOUS)</Line>
              <Line red>Respirator recommended for extended outdoor activity</Line>
            </Section>
            <Divider />
            <Line pink>"Brought to you by our corporate partners."</Line>
          </>
        ),
      },

      "Cy Traffic (Real-Time)": {
        content: (
          <>
            <Line smoke large bold>[CY TRAFFIC - LIVE UPDATES]</Line>
            <Line cyan>Powered by ACGS Chariot AI</Line>
            <Divider />
            <Section title="MAJOR ROUTES:">
              <Line red>Central Bridge (North-South): GRIDLOCK</Line>
              <Line neon>  → Accident scene - 3 fatalities, SecOps on site</Line>
              <Line neon>  → Estimated clearance: 2-3 hours</Line>
              <Divider />
              <Line yellow>Ports Canal Route: DELAYED</Line>
              <Line neon>  → Fatberg collision near Dock 12</Line>
              <Line neon>  → Water taxi diversions in effect</Line>
              <Divider />
              <Line cyan>Metro Lines: 75% OPERATIONAL</Line>
              <Line neon>  → Central-5 closed for maintenance</Line>
              <Line neon>  → Slums-3 suspended due to "security concerns"</Line>
            </Section>
            <Divider />
            <Section title="DISTRICT ADVISORIES:">
              <Line red>⚠ AVOID: Bigmosse (gang activity reported)</Line>
              <Line yellow>⚠ CAUTION: South Central (heavy SecOps presence)</Line>
              <Line yellow>⚠ CAUTION: Mosscroft West (chemical leak, respirators required)</Line>
            </Section>
            <Divider />
            <Line pink>"Plan your route. Save your life. Trust ACGS."</Line>
          </>
        ),
      },

      "Cy Weather & Environment": {
        content: (
          <>
            <Line smoke large bold>[CY ENVIRONMENTAL STATUS]</Line>
            <Line cyan>Monitoring provided by Kaytell Environmental Division</Line>
            <Divider />
            <Section title="AIR QUALITY:">
              <DataTable data={[
                { label: "AQI", value: "387 (HAZARDOUS)" },
                { label: "PM2.5", value: "421 µg/m³" },
                { label: "PM10", value: "512 µg/m³" },
                { label: "Toxicity Level", value: "EXTREME" },
                { label: "Visibility", value: "50-200m" },
              ]} />
            </Section>
            <Divider />
            <Section title="CURRENT CONDITIONS:">
              <Line yellow>Temperature: 18°C</Line>
              <Line yellow>Humidity: 67%</Line>
              <Line yellow>Wind: 12 km/h (northeast)</Line>
              <Line red>Smog Level: SEVERE</Line>
              <Line red>Acid Rain Probability: 40%</Line>
            </Section>
            <Divider />
            <Section title="REGIONAL VARIATIONS:">
              <Line neon>Central: Visibility 150m (skyscraper zones better)</Line>
              <Line neon>Ports: Visibility 120m (canal fog)</Line>
              <Line red>Mosscroft: Visibility 50m (industrial emissions)</Line>
              <Line yellow>Slums: Variable (40-100m)</Line>
              <Line cyan>The Hills: Visibility 300m+ (elevated, filtered air)</Line>
            </Section>
            <Divider />
            <Warning>OUTDOOR ACTIVITY NOT RECOMMENDED WITHOUT PROTECTION</Warning>
            <Line pink>"Breathe easy with Kaytell Air Filtration Systems."</Line>
          </>
        ),
      },

      "Cy Entertainment Guide": {
        content: (
          <>
            <Line smoke large bold>[CY ENTERTAINMENT DIRECTORY]</Line>
            <Line yellow>What's hot in the city tonight</Line>
            <Divider />
            <Section title="TRENDING VENUES:">
              <Line pink>→ HELLSCAPE (Ports) - Industrial nightclub, VIP available</Line>
              <Line pink>→ The Neon Pillar (Central) - Corporate lounge & temple</Line>
              <Line pink>→ Idol Coffins Hotels (Various) - Rock-star themed pop-ups</Line>
              <Line pink>→ The Salmon Door (Ports) - Ultra-exclusive restaurant [RUMORED]</Line>
            </Section>
            <Divider />
            <Section title="LIVE MUSIC TONIGHT:">
              <Line neon>→ PHASER/MOB @ Underground Venue TBA</Line>
              <Line neon>→ HeCcc @ The Pit (Ports district)</Line>
              <Line neon>→ I must leave @ Secret location (password required)</Line>
            </Section>
            <Divider />
            <Section title="CURRENT TRENDS:">
              <Line cyan>• Mycobiotic cuisine (Burnchurch Hex pop-ups)</Line>
              <Line cyan>• Cyberbike racing (illegal street events)</Line>
              <Line cyan>• G0 artifacts (black market collectibles)</Line>
              <Line cyan>• Mind-upload parties (Fideistic Transformation sponsored)</Line>
            </Section>
            <Divider />
            <Line yellow>"Paid placements available. Contact Tulles&deVerte."</Line>
          </>
        ),
      },

      "Cy Survival Tips": {
        content: (
          <>
            <Line smoke large bold>[UNOFFICIAL CY SURVIVAL GUIDE]</Line>
            <Line yellow>User-contributed wisdom from the streets</Line>
            <Divider />
            <Section title="ESSENTIAL TIPS:">
              <Line neon>1. Never drink canal water (not even filtered)</Line>
              <Line neon>2. SecOps response time: 4-12 minutes (if they bother)</Line>
              <Line neon>3. Respirator mandatory in Mosscroft (your lungs will thank you)</Line>
              <Line neon>4. Don't make eye contact in the Slums (unless you want trouble)</Line>
              <Line neon>5. G0 radiation kills in 20 minutes (don't test this)</Line>
              <Line neon>6. Street food is 60% safe (better odds than corporate meals)</Line>
              <Line neon>7. If you see Nanophreaks, RUN</Line>
              <Line neon>8. The Stone Eels are surprisingly reasonable (comparatively)</Line>
              <Line neon>9. Never trust anyone from the Hills (they're not like you)</Line>
              <Line neon>10. The city wants you dead. Prove it wrong.</Line>
            </Section>
            <Divider />
            <Line pink>"Stay smart. Stay alive. Stay cynical."</Line>
          </>
        ),
      },

      "Cy Dating Network": {
        content: (
          <>
            <Line smoke large bold>[CY-MATCH SOCIAL NETWORK]</Line>
            <Line pink>"Find Connection in the Disconnected City"</Line>
            <Divider />
            <Section title="NEARBY PROFILES:">
              <Line pink>→ "CHROME_QUEEN_23" - 2km away</Line>
              <Line neon>"Looking for someone who isn't a corpo rat"</Line>
              <Divider />
              <Line pink>→ "DEFINITELY_HUMAN" - 0.5km away</Line>
              <Line neon>"I promise I'm not a SecOps honey trap (really)"</Line>
              <Divider />
              <Line pink>→ "NEON_DREAMS_CY" - 4km away</Line>
              <Line neon>"Swipe right if you have a working cyberdeck ;)"</Line>
              <Divider />
              <Line pink>→ "JUST_SURVIVING" - 1.2km away</Line>
              <Line neon>"Not looking for love, just someone to split rent"</Line>
            </Section>
            <Divider />
            <Line yellow>* Platform disclaimer: 78% of profiles may be bots, scams, or law enforcement</Line>
            <Line cyan>"Love in the time of corporate dystopia. Good luck."</Line>
          </>
        ),
      },

      "Cy Food Delivery App": {
        content: (
          <>
            <Line smoke large bold>[CY-EATS DELIVERY SERVICE]</Line>
            <Line yellow>"Hot food. Cold city. Fast delivery (eventually)."</Line>
            <Divider />
            <Section title="TRENDING RESTAURANTS:">
              <Line neon>→ Body's Pho - Synthetic Beef Noodle Soup</Line>
              <Line cyan>  Price: 35¤ | Rating: 4.2/5 | Delivery: 45-90min</Line>
              <Divider />
              <Line neon>→ Mosscroft Grill - "Mystery Meat" Skewers</Line>
              <Line cyan>  Price: 22¤ | Rating: 3.8/5 | Delivery: 30-60min</Line>
              <Divider />
              <Line neon>→ AST Fresh - Biomatter Protein Bowl</Line>
              <Line cyan>  Price: 18¤ | Rating: 4.0/5 | Delivery: 20-40min</Line>
              <Divider />
              <Line neon>→ Fungi Garden - Mycobiotic Burger</Line>
              <Line cyan>  Price: 28¤ | Rating: 4.5/5 | Delivery: 60-120min</Line>
            </Section>
            <Divider />
            <Section title="DELIVERY STATUS:">
              <Line yellow>Current wait times: 2-4 hours (high demand)</Line>
              <Line red>⚠ Drone delivery suspended in Slums districts (too many shootdowns)</Line>
              <Line yellow>⚠ Water taxi couriers experiencing fatberg delays</Line>
            </Section>
            <Divider />
            <Line pink>"Hungry? We'll get there. Probably."</Line>
          </>
        ),
      },

      "Cy Horoscope Network": {
        content: (
          <Box color="pink">
            <Line pink bold large>[DAILY HOROSCOPE - THE NET ORACLE]</Line>
            <Line yellow>Cosmic guidance for the cybernetic age</Line>
            <Divider color="pink" />
            <Section title="TODAY'S READING (ALL SIGNS):">
              <Line pink>The stars align in a pattern of corporate oppression.</Line>
              <Line pink>Your lucky number is: [REDACTED FOR PROFIT]</Line>
              <Line pink>Avoid: SecOps, gang territory, G0, the rich, the poor, everyone.</Line>
              <Line pink>Lucky color: The color of blood on chrome</Line>
              <Line neon>Romance: You will meet someone. They will betray you.</Line>
              <Line neon>Career: Your boss doesn't know you exist. This is good.</Line>
              <Line neon>Health: The smog will outlast you. Accept it.</Line>
              <Line neon>Wealth: Money is fleeting. Debt is eternal.</Line>
              <Line pink>Overall: The city wants you dead. Don't give it satisfaction.</Line>
            </Section>
            <Divider color="pink" />
            <Line yellow>"Brought to you by Fideistic Transformation - Upload your destiny!"</Line>
          </Box>
        ),
      },

      "Cy Urban Legends Archive": {
        content: (
          <>
            <Line smoke large bold>[CY URBAN LEGENDS DATABASE]</Line>
            <Line yellow>Separating fact from fiction (probably)</Line>
            <Divider />
            <Section title="MOST SEARCHED LEGENDS:">
              <Line pink>→ The Salmon Door - Ultra-exclusive Ports restaurant</Line>
              <Line neon>  Guards in brown tailcoats, salmon-painted door</Line>
              <Line neon>  Allegedly so exclusive even the Guide can't get a table</Line>
              <Divider />
              <Line pink>→ My Wall - Underground killclub/music venue</Line>
              <Line neon>  Entrance allegedly through door on G0 containment wall</Line>
              <Line neon>  Rumored meeting place for Terpischore Sisters</Line>
              <Divider />
              <Line pink>→ The Terpischore Sisters - Secret society</Line>
              <Line neon>  Base allegedly beneath Old Cy, accessible via My Wall</Line>
              <Line neon>  Purpose unknown, members unknown</Line>
              <Divider />
              <Line pink>→ The Night Sound - What screams in G0</Line>
              <Line neon>  Heard nightly from within quarantine zone</Line>
              <Line neon>  Neither human nor machine</Line>
              <Divider />
              <Line pink>→ Basilisk Entities - Deep Net manifestations</Line>
              <Line neon>  AI? Gods? Demons? Aliens?</Line>
              <Line neon>  Hacker collectives whisper of encounters</Line>
            </Section>
            <Divider />
            <Line yellow>* 78% of legends have some basis in documented events</Line>
            <Line cyan>"Believe what you want. The city doesn't care."</Line>
          </>
        ),
      },

      "Cy Public Services": {
        content: (
          <>
            <Line smoke large bold>[CY PUBLIC SERVICES PORTAL]</Line>
            <Line cyan>Citizen resources and emergency information</Line>
            <Divider />
            <Section title="EMERGENCY CONTACTS:">
              <KeyValue label="SecOps (Emergency)" value="911" />
              <KeyValue label="Fire Response" value="912" />
              <KeyValue label="Medical Emergency" value="913" />
              <KeyValue label="Infrastructure Failure" value="914" />
              <Line yellow>Average response time: 8-45 minutes (varies by district)</Line>
            </Section>
            <Divider />
            <Section title="TRANSIT INFORMATION:">
              <Line neon>Metro: 75% operational (see route map for closures)</Line>
              <Line neon>Water taxis: Available 24/7 at all major docks</Line>
              <Line neon>Automated vehicles: ACGS Chariot network active</Line>
              <Line red>Air transit: Restricted to licensed commercial operations</Line>
            </Section>
            <Divider />
            <Section title="HEALTH ADVISORIES:">
              <Line yellow>→ Laketon: Water boil advisory (nanomold contamination)</Line>
              <Line yellow>→ Mosscroft West: Chemical leak - respirators required</Line>
              <Line yellow>→ Barnyard Fields: Avoid area (cult activity)</Line>
              <Line red>→ G0: QUARANTINE ZONE - Entry prohibited without authorization</Line>
            </Section>
            <Divider />
            <Line cyan>"Your safety is our priority. (Terms and conditions apply.)"</Line>
          </>
        ),
      },

      "Cy Job Board": {
        content: (
          <>
            <Line smoke large bold>[CY EMPLOYMENT NETWORK]</Line>
            <Line yellow>"Your Future. Their Profit."</Line>
            <Divider />
            <Line cyan>Connecting to job database...</Line>
            <Line neon>Current listings: 1,247 active positions</Line>
            <Divider />
            <Section title="FEATURED OPPORTUNITIES:">
              <Line pink>→ FACTORY WORKER - Kaytell Makers (Mosscroft)</Line>
              <Line neon>  Pay: 800¤/month + company housing</Line>
              <Line neon>  Shifts: 12-hour rotations (day/night available)</Line>
              <Line yellow>  Benefits: Medical (on-site only), meal vouchers</Line>
              <Line red>  Note: Injury rate 14% (within acceptable limits)</Line>
              <Divider />
              <Line pink>→ WAREHOUSE OPERATOR - Royal West (Multiple locations)</Line>
              <Line neon>  Pay: 750¤/month + overtime opportunities</Line>
              <Line neon>  Requirements: Basic literacy, ability to lift 25kg</Line>
              <Line yellow>  Benefits: Medical, employee discounts</Line>
              <Line red>  Note: All operations monitored by NordShip AI</Line>
              <Divider />
              <Line pink>→ SECOPS TRAINEE - UCS Academy (Central)</Line>
              <Line neon>  Pay: 1,200¤/month (during training)</Line>
              <Line neon>  Requirements: Physical fitness, clean record preferred</Line>
              <Line yellow>  Benefits: Full corpo package after graduation</Line>
              <Line red>  Note: 6-month contract, combat deployment likely</Line>
              <Divider />
              <Line pink>→ DATA ENTRY CLERK - ACGS (Industries)</Line>
              <Line neon>  Pay: 650¤/month</Line>
              <Line neon>  Requirements: Typing 60 WPM, basic AI interface skills</Line>
              <Line yellow>  Benefits: None (contract position)</Line>
              <Line red>  Note: Remote work not available</Line>
            </Section>
            <Divider />
            <Section title="GIG ECONOMY LISTINGS:">
              <Line cyan>• Drone delivery pilot: 8¤/delivery (bring your own drone)</Line>
              <Line cyan>• Water taxi operator: 12¤/hour (license required)</Line>
              <Line cyan>• Street vendor permit: 200¤/month (location lottery)</Line>
              <Line cyan>• Courier (foot): 5¤/delivery (Ports/Slums only)</Line>
            </Section>
            <Divider />
            <Section title="EXECUTIVE POSITIONS:">
              <Line yellow>→ Senior AI Ethics Consultant - ACGS</Line>
              <Line neon>  Pay: Competitive (disclosed upon interview)</Line>
              <Line neon>  Requirements: PhD preferred, 5-year NDA mandatory</Line>
              <Divider />
              <Line yellow>→ Security Director - Alliansen Inc.</Line>
              <Line neon>  Pay: 15,000¤/month + performance bonuses</Line>
              <Line neon>  Requirements: Military/SecOps experience, clean record</Line>
              <Divider />
              <Line yellow>→ Regional Manager - AST Endless Seas</Line>
              <Line neon>  Pay: 12,000¤/month + housing stipend</Line>
              <Line neon>  Requirements: 10+ years food service management</Line>
            </Section>
            <Divider />
            <Warning>All positions subject to background checks and corporate loyalty agreements</Warning>
            <Line pink>"Work hard. Die young. Leave a profitable corpse."</Line>
          </>
        ),
      },

      "Cy Housing Market": {
        content: (
          <>
            <Line smoke large bold>[CY REAL ESTATE LISTINGS]</Line>
            <Line yellow>"Affordable is a relative term."</Line>
            <Divider />
            <Line cyan>Accessing property database...</Line>
            <Line neon>Current listings: 342 rentals, 18 sales</Line>
            <Divider />
            <Section title="RENTALS - CENTRAL DISTRICT:">
              <Line pink>→ Luxury 2BR Apartment (South Central)</Line>
              <Line neon>  Rent: 8,500¤/month</Line>
              <Line neon>  Features: 120m², filtered air, SecOps patrol, parking</Line>
              <Line yellow>  Utilities: Additional 600¤/month (estimate)</Line>
              <Line red>  Available: Next month (current tenant being evicted)</Line>
              <Divider />
              <Line pink>→ Studio Apartment (North Central)</Line>
              <Line neon>  Rent: 3,200¤/month</Line>
              <Line neon>  Features: 35m², shared bathroom, filtered water</Line>
              <Line yellow>  Utilities: Included (basic tier only)</Line>
              <Line red>  Note: Building has "minor" mold issues</Line>
            </Section>
            <Divider />
            <Section title="RENTALS - PORTS DISTRICT:">
              <Line pink>→ 1BR Apartment (East Ports)</Line>
              <Line neon>  Rent: 900¤/month</Line>
              <Line neon>  Features: 45m², canal view, basic utilities</Line>
              <Line yellow>  Security: Minimal (Stone Eels territory)</Line>
              <Line red>  Note: Noise from nearby clubs 20:00-06:00</Line>
              <Divider />
              <Line pink>→ Shared Housing (West Ports)</Line>
              <Line neon>  Rent: 300¤/month per person (4-person unit)</Line>
              <Line neon>  Features: Shared kitchen/bathroom, no frills</Line>
              <Line yellow>  Utilities: Split between tenants</Line>
              <Line red>  Current occupants: 2 factory workers seeking roommates</Line>
            </Section>
            <Divider />
            <Section title="RENTALS - SLUMS DISTRICTS:">
              <Line pink>→ Coffin Apartment (Laketon)</Line>
              <Line neon>  Rent: 180¤/month</Line>
              <Line neon>  Features: 2m × 1m × 1m sleeping pod, shared facilities</Line>
              <Line yellow>  Security: None</Line>
              <Line red>  Note: Water currently under boil advisory</Line>
              <Divider />
              <Line pink>→ Converted Shipping Container (Various)</Line>
              <Line neon>  Rent: 250¤/month</Line>
              <Line neon>  Features: 6m × 2.5m space, basic electrical hookup</Line>
              <Line yellow>  Heating: Space heater (not included)</Line>
              <Line red>  Legal status: Technically not residential zoning</Line>
            </Section>
            <Divider />
            <Section title="FOR SALE:">
              <Line yellow>→ Luxury Penthouse (The Neon Pillar)</Line>
              <Line neon>  Price: 15,000,000¤</Line>
              <Line neon>  Features: 400m², rooftop access, corpo-level everything</Line>
              <Divider />
              <Line yellow>→ Commercial Warehouse (Mosscroft)</Line>
              <Line neon>  Price: 2,500,000¤</Line>
              <Line neon>  Features: 1,200m², zoned industrial, rail access</Line>
            </Section>
            <Divider />
            <Section title="BUYER BEWARE:">
              <Line red>• All prices subject to "market adjustment" fees</Line>
              <Line red>• Background checks required (corporate credit preferred)</Line>
              <Line red>• First/last/security deposit standard (3 months upfront)</Line>
              <Line red>• Eviction proceedings average 2 weeks (tenant rights limited)</Line>
            </Section>
            <Divider />
            <Line pink>"Home is where your credchip works."</Line>
          </>
        ),
      },

      "Cy Crime Reports": {
        content: (
          <Box color="red">
            <Line red bold large>[CY CRIME STATISTICS - PUBLIC DIGEST]</Line>
            <Line yellow>Sanitized for public consumption</Line>
            <Divider color="red" />
            <Section title="LAST 24 HOURS (Official Reports):">
              <Line pink>CENTRAL DISTRICT:</Line>
              <Line neon>• Reported incidents: 0</Line>
              <Line cyan>  (SecOps coverage: Excellent)</Line>
              <Line cyan>  (Corporate confidence: High)</Line>
              <Divider color="red" />
              <Line pink>PORTS DISTRICT:</Line>
              <Line neon>• Reported incidents: 47</Line>
              <Line yellow>  - Gang-related: 23 (expected/acceptable)</Line>
              <Line yellow>  - Property crime: 18</Line>
              <Line yellow>  - Assaults: 6</Line>
              <Line cyan>  (SecOps coverage: Minimal by design)</Line>
              <Divider color="red" />
              <Line pink>MOSSCROFT INDUSTRIAL:</Line>
              <Line neon>• Reported incidents: 12</Line>
              <Line yellow>  - Workplace accidents: 8 (within projections)</Line>
              <Line yellow>  - Theft: 3</Line>
              <Line yellow>  - Trespassing: 1</Line>
              <Divider color="red" />
              <Line pink>SLUMS DISTRICTS:</Line>
              <Line neon>• Reported incidents: [DATA INSUFFICIENT]</Line>
              <Line red>  (SecOps coverage: None)</Line>
              <Line red>  (Civilian estimates: 200+ unreported)</Line>
            </Section>
            <Divider color="red" />
            <Section title="MAJOR INVESTIGATIONS (Active):">
              <Line yellow>→ Central Bridge fatalities (traffic incident)</Line>
              <Line yellow>→ Mosscroft chemical leak (industrial accident)</Line>
              <Line yellow>→ [REDACTED] (corporate matter, sealed)</Line>
            </Section>
            <Divider color="red" />
            <Section title="MOST WANTED:">
              <Line red>1. "GHOST" - Cybercrime, data theft (reward: 50,000¤)</Line>
              <Line red>2. "SCALPEL" - Multiple homicides (reward: 75,000¤)</Line>
              <Line red>3. [CLASSIFIED] - Corporate espionage</Line>
            </Section>
            <Divider color="red" />
            <Warning>Crime reporting varies by district corporate investment</Warning>
            <Line pink>"Stay safe. Stay compliant. Stay profitable."</Line>
          </Box>
        ),
      },

      "Cy Sports Network": {
        content: (
          <>
            <Line smoke large bold>[CY SPORTS & ENTERTAINMENT]</Line>
            <Line yellow>"Bread and Circuses for the Modern Age"</Line>
            <Divider />
            <Line cyan>Live scores and upcoming events</Line>
            <Divider />
            <Section title="CYBORGS TEAM (Official Cy League):">
              <Line pink>→ Next Game: CyBorgs vs. Northside Drones</Line>
              <Line neon>  Date: This Saturday, 19:00</Line>
              <Line neon>  Location: Central Arena</Line>
              <Line neon>  Tickets: 80-500¤ (limited availability)</Line>
              <Divider />
              <Line cyan>STAR PLAYERS:</Line>
              <Line yellow>  #13 - Zane "The Blade" Morrison (Forward)</Line>
              <Line neon>      Stats: 42 goals this season, team MVP</Line>
              <Line yellow>  #7 - Kira "Ironwall" Chen (Goalkeeper)</Line>
              <Line neon>      Stats: 89% save rate, league leader</Line>
              <Divider />
              <Line neon>Current Season Record: 14 wins, 3 losses, 2 draws</Line>
              <Line yellow>League Standing: #2 (behind Industries Hammers)</Line>
            </Section>
            <Divider />
            <Section title="CYBERBIKE RACING (Sanctioned):">
              <Line pink>→ Cy Grand Prix - Next race in 2 weeks</Line>
              <Line neon>  Location: Canal Circuit (Ports loop)</Line>
              <Line neon>  Prize pool: 100,000¤</Line>
              <Line yellow>  Sponsors: ACGS Chariot, Royal West, Kaytell</Line>
              <Divider />
              <Line cyan>TOP RACERS:</Line>
              <Line neon>  1. "BURNOUT QUEEN" - 3 consecutive wins</Line>
              <Line neon>  2. "CHROME DADDY" - Fan favorite</Line>
              <Line neon>  3. "SPEED DEMON" - Rookie sensation</Line>
            </Section>
            <Divider />
            <Section title="UNDERGROUND RACING (Illegal):">
              <Line red>⚠ Participation in illegal racing subject to arrest</Line>
              <Line yellow>Rumored locations: Ports docks, Mosscroft factory district</Line>
              <Line yellow>Prize pools: Unknown (estimated 50,000¤+)</Line>
              <Line cyan>SecOps awareness: High (enforcement: Selective)</Line>
            </Section>
            <Divider />
            <Section title="BETTING ODDS (Current):">
              <Line neon>CyBorgs vs Drones: CyBorgs favored (3:1)</Line>
              <Line neon>Grand Prix winner: BURNOUT QUEEN (2:1)</Line>
              <Line yellow>Place bets: Authorized vendors only</Line>
              <Line red>Illegal bookies operate throughout Ports/Slums</Line>
            </Section>
            <Divider />
            <Line pink>"May the best corpo-sponsored team win."</Line>
          </>
        ),
      },

      "Cy Meme Feed": {
        content: (
          <Box color="pink">
            <Line pink bold large>[CY VIRAL CONTENT NETWORK]</Line>
            <Line yellow>"The People's Voice (Probably)"</Line>
            <Divider color="pink" />
            <Section title="TRENDING NOW:">
              <Line neon>→ "TAG YOURSELF I'M THE DRONE THAT GOT SHOT DOWN"</Line>
              <Line cyan>  (Image: Crashed delivery drone in Slums)</Line>
              <Line yellow>  Engagement: 847k shares, 2.1M likes</Line>
              <Divider color="pink" />
              <Line neon>→ "POV: You're a Mosscroft factory worker"</Line>
              <Line cyan>  (Video: Guy coughing for 30 seconds straight)</Line>
              <Line yellow>  Engagement: 1.2M views, 450k shares</Line>
              <Divider color="pink" />
              <Line neon>→ "Undersjön opening in Year 18" Timeline meme</Line>
              <Line cyan>  2064: "Opens in 5 years!"</Line>
              <Line cyan>  2069: "Opens in 5 years!"</Line>
              <Line cyan>  2074: "Opens in 5 years!"</Line>
              <Line cyan>  2082: "Opens in 5 years!"</Line>
              <Line yellow>  Engagement: 3.4M shares, AST legal takedown pending</Line>
            </Section>
            <Divider color="pink" />
            <Section title="CLASSIC HITS:">
              <Line pink>• "Corpo meeting could have been an RCD"</Line>
              <Line pink>• "That's not smog, that's Cy seasoning"</Line>
              <Line pink>• "My cyberdeck vs the cyberdeck she told me not to worry about"</Line>
              <Line pink>• "When your rent is due but you already sold your kidney"</Line>
              <Line pink>• "G0 incident survivors be like: [IMAGE CORRUPTED]"</Line>
            </Section>
            <Divider color="pink" />
            <Section title="CONTROVERSIAL (Flagged):">
              <Line red>→ "How many corpos does it take to screw in a lightbulb?"</Line>
              <Line yellow>  [Content removed - violates community guidelines]</Line>
              <Divider color="pink" />
              <Line red>→ "Actual photo of Fideistic Transformation upload process"</Line>
              <Line yellow>  [Content removed - corporate complaint]</Line>
            </Section>
            <Divider color="pink" />
            <Warning>Platform moderation provided by ACGS sentiment analysis AI</Warning>
            <Line yellow>"Laugh now. Cry later. Delete before SecOps sees."</Line>
          </Box>
        ),
      },
    }
  },

  "Cy City Corporate Portals": {
    content: (
      <CyCityCorporatePortalsBanner />
    ),
    related_commands: {
      "ACGS": {
        content: (
          <>
          <CorpAd
              corp="ACGS"
              slogan="Automated Certainty"
              tagline="The future drives itself."
              products={[
                "AI-Powered Transit Solutions",
                "Smart Weapon Systems",
                "BioMed Enhancement Packages",
                "Automated Vehicle Fleet Management"
              ]}
              cta="LET THE CHARIOT DRIVE YOU"
              theme="cyber"
              logo="🤖"
            >
              <p style={{ fontSize: '0.7rem', color: '#6bc9ff', marginTop: '0.5rem' }}>
                <strong>NEW:</strong> Chariot 2.0 traffic prediction now 40% more accurate
              </p>
            </CorpAd>
            <Line cyan large bold>ACGS</Line>
            <Line yellow>"Innovation. Intelligence. Inevitability."</Line>
            <Divider />
            <Line neon>Connecting to corporate network...</Line>
            <Line cyan>[PUBLIC ACCESS GRANTED]</Line>
            <Divider />
            <Section title="ABOUT ACGS:">
              <Line neon>Leading provider of AI solutions, weapontech, and vehicles</Line>
              <Line neon>Home to Chariot - The first "true" AI controlling Cy's transport</Line>
              <Line neon>Decentralized offices throughout Central and Industries</Line>
            </Section>
            <Divider />
            <Section title="LATEST INNOVATIONS:">
              <Line cyan>→ Chariot 2.0 - Enhanced traffic prediction algorithms</Line>
              <Line cyan>→ Bio-Enhanced Combat Platforms (military exclusive)</Line>
              <Line cyan>→ Neural Insurance Protocols (predict health issues before they occur)</Line>
            </Section>
            <Divider />
            <Section title="CAREER OPPORTUNITIES:">
              <Line yellow>Now hiring: AI Ethics Consultants (5-year NDA required)</Line>
              <Line yellow>Now hiring: Weapons Testing Personnel (hazard pay included)</Line>
              <Line yellow>Now hiring: Data Entry (Mosscroft facility)</Line>
            </Section>
            <Divider />
            <Line pink>"Your future, automated. Your success, inevitable."</Line>
          </>
        ),
      },

      "Alliansen Inc.": {
        content: (
          <>
            <CorpAd
              corp="ALLIANSEN INC."
              slogan="Securing Tomorrow"
              tagline="Security. Analytics. Control."
              products={[
                "Private Security Forces",
                "Behavioral Analytics & Prediction",
                "Real Estate Development",
                "Entertainment Complexes"
              ]}
              cta="TRUST IN STRUCTURE. TRUST IN US."
              theme="corporate"
              logo="🛡️"
            >
              <p style={{ fontSize: '0.7rem', color: '#6bc9ff', marginTop: '0.5rem' }}>
                Leasing infrastructure to 50% of Cy's SecOps divisions
              </p>
              <p style={{ fontSize: '0.65rem', color: '#ff6b6b', marginTop: '0.3rem', fontStyle: 'italic' }}>
                ⚠ Currently in corporate conflict with UCS
              </p>
            </CorpAd>
            <Line cyan large bold>ALLIANSEN INC.</Line>
            <Line yellow>"Security. Entertainment. Excellence."</Line>
            <Divider />
            <Line neon>Welcome to Alliansen corporate network</Line>
            <Line cyan>[PUBLIC ACCESS]</Line>
            <Divider />
            <Section title="ABOUT ALLIANSEN:">
              <Line neon>Real estate, security, entertainment, behavioral analytics</Line>
              <Line neon>Leasing infrastructure to half of Cy's SecOps divisions</Line>
              <Line neon>Controls most of the Borghold prison complex</Line>
            </Section>
            <Divider />
            <Section title="FEATURED PROPERTIES:">
              <Line cyan>→ Luxury apartments in South Central (starting at 50,000¤/month)</Line>
              <Line cyan>→ Commercial space in the Ports (SecOps-protected zones)</Line>
              <Line cyan>→ Entertainment venues (turnkey operations available)</Line>
            </Section>
            <Divider />
            <Section title="SECURITY SERVICES:">
              <Line yellow>Premium SecOps contracts available</Line>
              <Line yellow>Behavioral analytics for workplace optimization</Line>
              <Line yellow>Surveillance infrastructure (turnkey solutions)</Line>
            </Section>
            <Divider />
            <Line red>⚠ Currently engaged in corporate conflict with UCS</Line>
            <Line pink>"Building tomorrow's Cy, one district at a time."</Line>
          </>
        ),
      },

      "AST Endless Seas": {
        content: (
          <>
            <CorpAd
              corp="AST ENDLESS SEAS"
              slogan="From Ocean to Table"
              tagline="The future is underwater."
              products={[
                "Fish & Algae Products",
                "Restaurant Chain (15 Locations)",
                "Submarine Construction",
                "Undersjön Project Lead"
              ]}
              cta="TASTE THE FUTURE"
              theme="green"
              logo="🐟"
            >
              <p style={{ fontSize: '0.7rem', color: '#86efac', marginTop: '0.5rem' }}>
                <strong>SPECIAL:</strong> AlgaeBars™ - Buy 10, get 2 free!
              </p>
              <p style={{ fontSize: '0.65rem', color: '#34d399', marginTop: '0.3rem' }}>
                Now with 30% real fish in all protein bowls
              </p>
            </CorpAd>
            <Line cyan large bold>AST ENDLESS SEAS</Line>
            <Line yellow>"From Ocean to Table. From Sea to Sky."</Line>
            <Divider />
            <Line neon>Accessing AST corporate network...</Line>
            <Line cyan>[CONSUMER ACCESS]</Line>
            <Divider />
            <Section title="ABOUT AST:">
              <Line neon>Leading fish/algae products, restaurants, submarine construction</Line>
              <Line neon>Gigantic processing plant in south Mosscroft</Line>
              <Line neon>Project lead for Undersjön construction</Line>
            </Section>
            <Divider />
            <Section title="POPULAR PRODUCTS:">
              <Line cyan>→ AST Fresh Protein Bowls (Now with 30% real fish!)</Line>
              <Line cyan>→ AlgaeBars™ - Nutrient-dense meal replacement</Line>
              <Line cyan>→ SynthSalmon™ - "Tastes almost like the real thing"</Line>
              <Line cyan>→ BioBrew™ - Energy drink made from ocean nutrients</Line>
            </Section>
            <Divider />
            <Section title="DINING LOCATIONS:">
              <Line yellow>15 AST Fresh locations across Cy</Line>
              <Line yellow>Now delivering via drone to Central and Ports</Line>
              <Line yellow>Submarine dining experiences available (Undersjön preview)</Line>
            </Section>
            <Divider />
            <Line pink>"The future is underwater. The future is AST."</Line>
          </>
        ),
      },

      "Cynergy Water & Power": {
        content: (
          <>
            <CorpAd
              corp="CYNERGY WATER & POWER CO."
              slogan="We Keep CY Alive"
              products={[
                "💧 WATER - Purified & Delivered",
                "⚡ POWER - Always On",
                "🏠 PROPERTY - Premium Locations",
                "🚇 TRANSIT - Fast & Reliable"
              ]}
              cta="Your City. Our Infrastructure."
              theme="dystopian"
              logo="⚡"
            >
              <p style={{ fontSize: '0.7rem', color: '#ffd93d', marginTop: '0.5rem' }}>
                <strong>RATES:</strong> Water from 120¤/mo • Power from 180¤/mo
              </p>
              <p style={{ fontSize: '0.65rem', color: '#ff8c42', marginTop: '0.3rem', fontStyle: 'italic' }}>
                Late payment fee: 50¤ per day (mandatory service agreements)
              </p>
            </CorpAd>
            <Line cyan large bold>CYNERGY WATER & POWER CO</Line>
            <Line yellow>"Your Lifeblood. Our Business."</Line>
            <Divider />
            <Line neon>Connecting to infrastructure network...</Line>
            <Line cyan>[PUBLIC PORTAL]</Line>
            <Divider />
            <Section title="ABOUT CYNERGY:">
              <Line neon>Facilities, infrastructure, transportation, real estate</Line>
              <Line neon>Headquarters in The Floating Hive, North Central</Line>
              <Line neon>Official utility provider (mandatory service agreements)</Line>
            </Section>
            <Divider />
            <Section title="SERVICE RATES (Monthly):">
              <KeyValue label="Water (basic tier)" value="120¤" />
              <KeyValue label="Water (filtered tier)" value="280¤" />
              <KeyValue label="Water (premium clean)" value="650¤" />
              <KeyValue label="Power (residential)" value="180-450¤" />
              <KeyValue label="Late Payment Fee" value="50¤ per day" />
            </Section>
            <Divider />
            <Section title="CURRENT ADVISORIES:">
              <Line yellow>→ Planned outages: Slums districts (rotating schedule)</Line>
              <Line yellow>→ Water quality notice: Laketon (boil advisory active)</Line>
              <Line red>→ Power surge warning: Mosscroft industrial zones</Line>
            </Section>
            <Divider />
            <Line pink>"We keep Cy running. You keep paying."</Line>
          </>
        ),
      },

      "Fideistic Transformation": {
        content: (
          <>
            <CorpAd
              corp="FIDEISTIC TRANSFORMATION"
              slogan="Upgrade Your Soul™"
              products={[
                "Neural Interfaces - Direct Divine Connection",
                "Spiritual Cybernetics - Faith Enhanced",
                "Ego Enhancement - Become More",
                "Transcendence Packages - Eternal Life*"
              ]}
              cta="The Divine Is Just A Download Away"
              theme="purple"
              logo="✝️"
            >
              <p style={{ fontSize: '0.7rem', color: '#c77dff', marginTop: '0.5rem' }}>
                <strong>FREE:</strong> First personality scan complimentary
              </p>
              <p style={{ fontSize: '0.65rem', color: '#b39ddb', marginTop: '0.3rem' }}>
                Transformation packages starting at 5,000¤
              </p>
              <p style={{ fontSize: '0.6rem', color: '#9b59b6', marginTop: '0.3rem', fontStyle: 'italic', opacity: 0.7 }}>
                *Results may vary. Upload success rates not disclosed.
              </p>
            </CorpAd>
            <Line cyan large bold>FIDEISTIC TRANSFORMATION</Line>
            <Line yellow>"Upload Your Soul. Achieve Eternal Unity."</Line>
            <Divider />
            <Line neon>Welcome to the Path of Transformation</Line>
            <Line cyan>[SEEKER ACCESS]</Line>
            <Divider />
            <Section title="ABOUT THE CHURCH:">
              <Line neon>Religion, cerebral interfaces, egotech, medtech</Line>
              <Line neon>Megatemple in the Neon Pillar, North Central</Line>
              <Line neon>Promise of eternal singularity through mind-upload</Line>
            </Section>
            <Divider />
            <Section title="SERVICES OFFERED:">
              <Line cyan>→ Free personality scans (first session complimentary)</Line>
              <Line cyan>→ Ego-mapping consultations (determine upload readiness)</Line>
              <Line cyan>→ Neural interface installations (certified technicians)</Line>
              <Line cyan>→ Transformation ceremonies (packages starting at 5,000¤)</Line>
            </Section>
            <Divider />
            <Section title="TESTIMONIALS:">
              <Line pink>"I feel closer to divinity every day." - Anonymous Devotee</Line>
              <Line pink>"My consciousness expanded beyond flesh." - Former Executive</Line>
              <Line pink>"The upload changed everything." - [DATA CORRUPTED]</Line>
            </Section>
            <Divider />
            <Warning>Upload success rates and ego continuance results not publicly disclosed</Warning>
            <Line yellow>"Transcend the meat. Embrace eternity."</Line>
          </>
        ),
      },

      "Kaytell Makers": {
        content: (
          <>
            <CorpAd
              corp="KAYTELL MAKERS"
              slogan="Building Tomorrow, Today"
              products={[
                "Advanced Materials & Production",
                "Construction Services",
                "BioTech & CyberTech Components",
                "Fashion & Retail Goods"
              ]}
              cta="If It's Made, Kaytell Made It Better"
              theme="corporate"
              logo="🏭"
            >
              <p style={{ fontSize: '0.7rem', color: '#6bc9ff', marginTop: '0.5rem' }}>
                150 years of continuous operation under Mr. Kaytell
              </p>
              <p style={{ fontSize: '0.7rem', color: '#ffd93d', marginTop: '0.3rem' }}>
                <strong>HIRING:</strong> Factory workers - 800¤/mo + housing
              </p>
            </CorpAd>
            <Line cyan large bold>KAYTELL MAKERS</Line>
            <Line yellow>"We Make Everything. Everything Makes Us."</Line>
            <Divider />
            <Line neon>Accessing Kaytell corporate systems...</Line>
            <Line cyan>[CONSUMER PORTAL]</Line>
            <Divider />
            <Section title="ABOUT KAYTELL:">
              <Line neon>Materials, production, construction, bio/cybertech</Line>
              <Line neon>Several large factories on Mosscroft</Line>
              <Line neon>150 years of continuous operation under Mr. Kaytell</Line>
            </Section>
            <Divider />
            <Section title="PRODUCT LINES:">
              <Line cyan>→ Kaytell Home™ - Furniture, appliances, decor</Line>
              <Line cyan>→ Kaytell Fashion™ - Synthetic textiles, workwear</Line>
              <Line cyan>→ Kaytell Construction™ - Building materials, prefab units</Line>
              <Line cyan>→ Kaytell Bio™ - Basic cyberware, medical devices</Line>
            </Section>
            <Divider />
            <Section title="EMPLOYMENT:">
              <Line yellow>Now hiring: Factory workers (all shifts, Mosscroft)</Line>
              <Line yellow>Starting pay: 800¤/month + company housing</Line>
              <Line yellow>Benefits: Medical coverage (Kaytell Bio facilities only)</Line>
              <Line red>Average injury rate: [REDACTED]</Line>
            </Section>
            <Divider />
            <Line pink>"If it's made, Kaytell made it first."</Line>
          </>
        ),
      },

      "Spectral FT Banks": {
        content: (
          <>
            <CorpAd
              corp="SPECTRAL FT BANKS & HOLDINGS"
              slogan="Your Future, Financed"
              products={[
                "Personal & Corporate Banking",
                "Real Estate Investment",
                "Infrastructure Funding",
                "MedTech Financing Options"
              ]}
              cta="BUILD YOUR EMPIRE. WE'LL PROVIDE THE FOUNDATION."
              theme="gold"
              logo="💰"
            >
              <p style={{ fontSize: '0.7rem', color: '#daa520', marginTop: '0.5rem' }}>
                <strong>PROMO:</strong> New accounts receive 100¤ credit
              </p>
              <p style={{ fontSize: '0.65rem', color: '#b8994d', marginTop: '0.3rem' }}>
                High-yield savings: 3% APY (50,000¤+ balance required)
              </p>
            </CorpAd>
            <Line cyan large bold>SPECTRAL FT BANKS & HOLDINGS</Line>
            <Line yellow>"Your Wealth. Our Vision."</Line>
            <Divider />
            <Line neon>Welcome to Spectral Financial Services</Line>
            <Line cyan>[ACCOUNT ACCESS]</Line>
            <Divider />
            <Section title="ABOUT SPECTRAL FT:">
              <Line neon>Financial services, real estate, infrastructure investment</Line>
              <Line neon>Headquarters in the Neon Pillar, North Central</Line>
              <Line neon>Focus on medtech sector investment opportunities</Line>
            </Section>
            <Divider />
            <Section title="FINANCIAL PRODUCTS:">
              <Line cyan>→ Personal checking accounts (minimum 5,000¤ balance)</Line>
              <Line cyan>→ High-yield savings (3% APY for balances over 50,000¤)</Line>
              <Line cyan>→ Investment portfolios (managed by AI advisors)</Line>
              <Line cyan>→ Real estate loans (competitive rates for qualified buyers)</Line>
            </Section>
            <Divider />
            <Section title="CURRENT PROMOTIONS:">
              <Line yellow>New account bonus: 100¤ credit (terms apply)</Line>
              <Line yellow>Referral program: Earn 50¤ per new customer</Line>
              <Line yellow>Premium tier: Waived fees for 100,000¤+ accounts</Line>
            </Section>
            <Divider />
            <Line pink>"Building wealth. Building Cy. Building tomorrow."</Line>
          </>
        ),
      },

      "UCS Corporate": {
        content: (
          <>
            <CorpAd
              corp="UNITED CITADEL SECURITY"
              slogan="Strength Through Defense"
              products={[
                "Military-Grade Weaponry",
                "Combat Enhancement Systems",
                "Corporate Protection Services",
                "Automated Defense Platforms"
              ]}
              cta="WHEN ALLIANSEN ISN'T ENOUGH"
              theme="sleek"
              logo="⚔️"
            >
              <p style={{ fontSize: '0.7rem', color: '#999', marginTop: '0.5rem' }}>
                Currently outfitting most of Cy's SecOps divisions
              </p>
              <p style={{ fontSize: '0.7rem', color: '#ffd93d', marginTop: '0.3rem' }}>
                <strong>NEW:</strong> Sentinel™ Auto-Turret (home defense edition)
              </p>
              <p style={{ fontSize: '0.65rem', color: '#ff6b6b', marginTop: '0.3rem', fontStyle: 'italic' }}>
                ⚠ In corporate conflict with Alliansen Inc.
              </p>
            </CorpAd>
            <Line cyan large bold>UNITED CITADEL SECURITY</Line>
            <Line yellow>"Protecting What Matters. Eliminating What Doesn't."</Line>
            <Divider />
            <Line neon>Accessing UCS corporate network...</Line>
            <Line cyan>[PUBLIC ACCESS]</Line>
            <Divider />
            <Section title="ABOUT UCS:">
              <Line neon>Security, weapontech, combat enhancers</Line>
              <Line neon>Headquarters in Citadel Tower, South Central</Line>
              <Line neon>Outfitting most of Cy's SecOps divisions</Line>
            </Section>
            <Divider />
            <Section title="SECURITY SOLUTIONS:">
              <Line cyan>→ Personal protection services (armed detail available)</Line>
              <Line cyan>→ Home security systems (AI-monitored, armed response)</Line>
              <Line cyan>→ Corporate security contracts (customizable threat levels)</Line>
              <Line cyan>→ Automated weapon platforms (residential & commercial)</Line>
            </Section>
            <Divider />
            <Section title="LATEST PRODUCTS:">
              <Line yellow>NEW: Sentinel™ Auto-Turret (home defense edition)</Line>
              <Line yellow>NEW: Guardian™ Combat Enhancer (legal for licensed security)</Line>
              <Line yellow>COMING SOON: Aegis™ Personal Shield Generator</Line>
            </Section>
            <Divider />
            <Line red>⚠ Currently engaged in corporate conflict with Alliansen Inc.</Line>
            <Line pink>"When safety matters, trust UCS."</Line>
          </>
        ),
      },

      "Tulles&deVerte Lifestyle Feed": {
        content: (
          <>
            <CorpAd
              corp="TULLES&DEVERTE"
              slogan="Live. Stream. Consume."
              products={[
                "Lifestyle Products & Feeds",
                "Entertainment & Nightlife",
                "Social Platform Investments",
                "Premium Drug Experiences"
              ]}
              cta="EVERYONE'S WATCHING. ARE YOU WORTH IT?"
              theme="neon"
              logo="📱"
            >
              <p style={{ fontSize: '0.7rem', color: '#ff006e', marginTop: '0.5rem' }}>
                <strong>NEW DROP:</strong> Fashion line launching next week
              </p>
              <p style={{ fontSize: '0.65rem', color: '#ff5d8f', marginTop: '0.3rem' }}>
                Club opening in Ports - VIP list at capacity
              </p>
            </CorpAd>
            <Line cyan large bold>TULLES&DEVERTE</Line>
            <Line pink>"Famous for Being Famous."</Line>
            <Divider />
            <Line neon>Accessing celebrity lifestyle feed...</Line>
            <Line cyan>[PUBLIC ACCESS - ALL FEEDS]</Line>
            <Divider />
            <Section title="LATEST FROM T&D:">
              <Line pink>→ Just announced: Merger with mystery partner (reveal in 48hrs!)</Line>
              <Line pink>→ New fashion line dropping next week (pre-order now)</Line>
              <Line pink>→ Club opening in Ports (VIP list already at capacity)</Line>
              <Line pink>→ Exclusive interview: "Why we're better than you" (premium access)</Line>
            </Section>
            <Divider />
            <Section title="TRENDING POSTS:">
              <Line neon>• Photo dump from our yacht party (47k likes)</Line>
              <Line neon>• Rate our matching chrome upgrades (89k comments)</Line>
              <Line neon>• New sponsorship deal announced (mystery corp)</Line>
            </Section>
            <Divider />
            <Section title="LIFESTYLE PRODUCTS:">
              <Line cyan>T&D Signature Fragrance: 450¤</Line>
              <Line cyan>Limited Edition Sunglasses: 890¤</Line>
              <Line cyan>Energy Drink Collab: 15¤ per can</Line>
              <Line yellow>"Live like us. Buy like us. Be like us (but not really)."</Line>
            </Section>
            <Divider />
            <Line pink>"Subscribe to premium for exclusive behind-the-scenes content!"</Line>
          </>
        ),
      },

      "Royal West Shipping": {
        content: (
          <>
            <CorpAd
              corp="ROYAL WEST SHIPPING CO."
              slogan="Connected Horizons"
              tagline="Global logistics, local delivery."
              products={[
                "Global Logistics Network",
                "Automated Warehousing",
                "Retail Distribution",
                "AI-Managed Operations"
              ]}
              cta="From Warehouse To Your Door - NordShip Never Sleeps"
              theme="green"
              logo="🚢"
            >
              <p style={{ fontSize: '0.7rem', color: '#86efac', marginTop: '0.5rem' }}>
                <strong>RATES:</strong> Standard 15¤ • Express 35¤ • Same-day 80¤
              </p>
              <p style={{ fontSize: '0.65rem', color: '#34d399', marginTop: '0.3rem' }}>
                All operations managed by NordShip™ AI (zero human error)
              </p>
            </CorpAd>
            <Line cyan large bold>ROYAL WEST SHIPPING CO.</Line>
            <Line yellow>"Connecting the World. Delivering the Future."</Line>
            <Divider />
            <Line neon>Accessing logistics network...</Line>
            <Line cyan>[PUBLIC PORTAL]</Line>
            <Divider />
            <Section title="ABOUT ROYAL WEST:">
              <Line neon>Global shipping, warehousing, retail distribution</Line>
              <Line neon>NordShip™ AI manages all operations (zero human error)</Line>
              <Line neon>Primary warehouse hub: Mosscroft industrial district</Line>
              <Line neon>Partnerships: Major retailers, corps, government contracts</Line>
            </Section>
            <Divider />
            <Section title="SERVICES OFFERED:">
              <Line cyan>→ Global freight shipping (air, sea, land, automated)</Line>
              <Line cyan>→ Warehouse storage solutions (short/long-term)</Line>
              <Line cyan>→ Last-mile delivery (drone, vehicle, water taxi)</Line>
              <Line cyan>→ Supply chain optimization (AI-powered forecasting)</Line>
              <Line cyan>→ Retail fulfillment (direct-to-consumer solutions)</Line>
            </Section>
            <Divider />
            <Section title="SHIPPING RATES (Cy Local):">
              <KeyValue label="Standard (2-5 days)" value="15¤" />
              <KeyValue label="Express (1-2 days)" value="35¤" />
              <KeyValue label="Same-day (Central only)" value="80¤" />
              <KeyValue label="Drone delivery" value="+20¤ (restrictions apply)" />
              <Line yellow>* Slums deliveries subject to additional fees</Line>
            </Section>
            <Divider />
            <Section title="TRACK YOUR SHIPMENT:">
              <Line neon>Enter tracking number: [_______________]</Line>
              <Line cyan>Real-time GPS tracking powered by NordShip™</Line>
              <Line yellow>Delivery notifications via RCD</Line>
            </Section>
            <Divider />
            <Section title="WAREHOUSE SERVICES:">
              <Line cyan>Small locker (1m³): 50¤/month</Line>
              <Line cyan>Standard unit (10m³): 200¤/month</Line>
              <Line cyan>Large unit (50m³): 800¤/month</Line>
              <Line cyan>Climate-controlled: +40%</Line>
              <Line yellow>Security: 24/7 monitoring, biometric access</Line>
            </Section>
            <Divider />
            <Section title="CAREER OPPORTUNITIES:">
              <Line yellow>Now hiring: Warehouse operators (Mosscroft)</Line>
              <Line yellow>Starting: 750¤/month + overtime</Line>
              <Line yellow>Benefits: Medical coverage, company discounts</Line>
              <Line red>Note: All operations managed by NordShip AI (human oversight minimal)</Line>
            </Section>
            <Divider />
            <Line pink>"The world moves. We move it faster."</Line>
          </>
        ),
      },

      "Gravf/Mellberg/Tosk Law": {
        content: (
          <>
            <CorpAd
              corp="GRAVF/MELLBERG/TOSK"
              slogan="No Paying Client Goes to Borghold"
              tagline="Corporate law. Criminal defense. Results guaranteed."
              products={[
                "Corporate Legal Services",
                "Criminal Defense (All Charges)",
                "Contract Negotiation & Review",
                "Risk Management Consulting"
              ]}
              cta="When The Law Isn't On Your Side, We Are."
              theme="sleek"
              logo="⚖️"
            >
              <p style={{ fontSize: '0.7rem', color: '#999', marginTop: '0.5rem' }}>
                150+ years combined experience • 94% acquittal rate
              </p>
              <p style={{ fontSize: '0.7rem', color: '#ffd93d', marginTop: '0.3rem' }}>
                <strong>RATES:</strong> Consultation 500¤ • Retainer from 5,000¤/mo
              </p>
            </CorpAd>
            <Line cyan large bold>GRAVF/MELLBERG/TOSK</Line>
            <Line yellow>"Defending Power. Protecting Profit."</Line>
            <Divider />
            <Line neon>Accessing legal services portal...</Line>
            <Line cyan>[CONSULTATION REQUIRED]</Line>
            <Divider />
            <Section title="ABOUT THE FIRM:">
              <Line neon>Premier corporate law firm, established 2044</Line>
              <Line neon>Headquartered in The Neon Pillar, North Central</Line>
              <Line neon>Specialties: Corporate law, criminal defense, contract disputes</Line>
              <Line neon>Motto: "No paying client of ours ever goes to Borghold"</Line>
              <Line yellow>Track record: 94% acquittal rate for criminal cases</Line>
            </Section>
            <Divider />
            <Section title="LEGAL SERVICES:">
              <Line cyan>→ Corporate representation (mergers, acquisitions, disputes)</Line>
              <Line cyan>→ Criminal defense (white-collar, violent crimes, all charges)</Line>
              <Line cyan>→ Contract law (review, negotiation, breach litigation)</Line>
              <Line cyan>→ Regulatory compliance (corp law, environmental, labor)</Line>
              <Line cyan>→ Risk management consulting (pre-emptive legal strategy)</Line>
              <Line cyan>→ Litigation support (trial preparation, expert witnesses)</Line>
            </Section>
            <Divider />
            <Section title="RETAINER PACKAGES:">
              <KeyValue label="Basic consultation" value="500¤ (1 hour)" />
              <KeyValue label="Standard retainer" value="5,000¤/month" />
              <KeyValue label="Premium retainer" value="20,000¤/month" />
              <KeyValue label="Crisis response" value="50,000¤+ (immediate deployment)" />
              <Line yellow>Payment plans available for qualified clients</Line>
              <Line red>Corporate accounts receive priority scheduling</Line>
            </Section>
            <Divider />
            <Section title="RECENT VICTORIES:">
              <Line pink>→ ACGS v. Alliansen Inc. - Contract upheld, 12M¤ settlement</Line>
              <Line pink>→ Executive murder trial - Full acquittal (self-defense)</Line>
              <Line pink>→ Kaytell regulatory violation - Charges dismissed</Line>
              <Line pink>→ UCS weapons trafficking - Reduced to misdemeanor fine</Line>
            </Section>
            <Divider />
            <Section title="OUR ATTORNEYS:">
              <Line neon>Senior Partner: Ms. Gravf (Corporate law, 45 years)</Line>
              <Line neon>Senior Partner: Mr. Mellberg (Criminal defense, 38 years)</Line>
              <Line neon>Senior Partner: Dr. Tosk (Contract law, 42 years)</Line>
              <Line cyan>+ 47 associate attorneys across all specialties</Line>
            </Section>
            <Divider />
            <Warning>Legal advice is attorney-client privileged and confidential</Warning>
            <Line pink>"When the stakes are high, we don't lose."</Line>
          </>
        ),
      },

      "Idol Coffins Hotels": {
        content: (
          <>
            <CorpAd
              corp="IDOL COFFINS"
              slogan="Live Fast. Die Young. Sleep In Style."
              tagline="Rock-star themed pop-up hotels across Cy."
              products={[
                "Themed Luxury Suites",
                "24/7 Room Service & Bar",
                "Private Concert Access",
                "Memorabilia Collections"
              ]}
              cta="Book Your Rock-Star Experience Today"
              theme="neon"
              logo="🎸"
            >
              <p style={{ fontSize: '0.7rem', color: '#ff006e', marginTop: '0.5rem' }}>
                <strong>CURRENT LOCATION:</strong> Ports District (through end of year)
              </p>
              <p style={{ fontSize: '0.65rem', color: '#ff5d8f', marginTop: '0.3rem' }}>
                Rates: 700-2,500¤/night • Tonight: PHASER/MOB live (10pm)
              </p>
            </CorpAd>
            <Line cyan large bold>IDOL COFFINS</Line>
            <Line pink>"Immortalize Your Night."</Line>
            <Divider />
            <Line neon>Connecting to hotel network...</Line>
            <Line cyan>[RESERVATIONS OPEN]</Line>
            <Divider />
            <Section title="ABOUT IDOL COFFINS:">
              <Line neon>Pop-up hotel chain themed around legendary dead musicians</Line>
              <Line neon>Each location: 6-month residency, then relocates</Line>
              <Line neon>Luxury suites, rock memorabilia, live music venues</Line>
              <Line neon>Target clientele: Music fans, wealthy tourists, corpo elite</Line>
            </Section>
            <Divider />
            <Section title="CURRENT LOCATION (Ports District):">
              <Line yellow>Hotel Theme: "The Neon Graveyard"</Line>
              <Line yellow>Address: Converted warehouse, Canal Dock 9</Line>
              <Line yellow>Open: Now through end of year</Line>
              <Line yellow>Rooms: 24 themed suites + 1 penthouse</Line>
            </Section>
            <Divider />
            <Section title="FEATURED SUITES:">
              <Line pink>→ "The Purple Haze" Suite (Hendrix-inspired)</Line>
              <Line neon>  King bed, vintage amp decor, purple velvet everywhere</Line>
              <Line neon>  Rate: 800¤/night</Line>
              <Divider />
              <Line pink>→ "27 Club" Penthouse (Mixed legends)</Line>
              <Line neon>  Rooftop access, full bar, stage equipment</Line>
              <Line neon>  Rate: 2,500¤/night</Line>
              <Divider />
              <Line pink>→ "Electric Chapel" Suite (Bowie tribute)</Line>
              <Line neon>  Mirror walls, neon lighting, avant-garde design</Line>
              <Line neon>  Rate: 950¤/night</Line>
              <Divider />
              <Line pink>→ "Nevermind" Suite (Grunge aesthetic)</Line>
              <Line neon>  Distressed furniture, vinyl collection, pacific northwest vibe</Line>
              <Line neon>  Rate: 700¤/night</Line>
            </Section>
            <Divider />
            <Section title="HOTEL AMENITIES:">
              <Line cyan>• 24/7 room service (bar + food)</Line>
              <Line cyan>• Private concert venue (capacity: 200)</Line>
              <Line cyan>• Museum wing (authentic memorabilia)</Line>
              <Line cyan>• Rooftop bar (guests only)</Line>
              <Line cyan>• Recording studio (available for booking)</Line>
            </Section>
            <Divider />
            <Section title="UPCOMING EVENTS:">
              <Line yellow>Tonight: PHASER/MOB live performance (10pm)</Line>
              <Line yellow>This weekend: Vinyl swap meet (Saturday, noon-6pm)</Line>
              <Line yellow>Next week: HeCcc acoustic set (Thursday, 9pm)</Line>
            </Section>
            <Divider />
            <Section title="BOOKING:">
              <Line neon>Reserve online: idolcoffins.cy</Line>
              <Line neon>Walk-ins accepted (subject to availability)</Line>
              <Line yellow>Discounts: Musicians (20%), corpo accounts (15%)</Line>
              <Line red>No refunds. No questions. Rock on.</Line>
            </Section>
            <Divider />
            <Line pink>"Where legends sleep. Where you party."</Line>
          </>
        ),
      },

    }
  },


  "Undersjön Project Updates": {
    content: (
      <>
        <Line cyan large bold>UNDERSJÖN CONSTRUCTION PROJECT</Line>
        <Line yellow>"Retail Paradise Beneath the Waves"</Line>
        <Divider />
        <Line neon>Project lead: AST Endless Seas</Line>
        <Line cyan>Construction status: Year 15, 60% complete</Line>
        <Divider />
        <Section title="PROJECT OVERVIEW:">
          <Line neon>Sprawling underwater retail park beneath Lake Gravel</Line>
          <Line neon>Separates North and South Central districts</Line>
          <Line neon>1,200+ planned retail spaces, restaurants, entertainment</Line>
          <Line neon>Submarine access, glass tunnels, luxury accommodations</Line>
        </Section>
        <Divider />
        <Section title="CONSTRUCTION MILESTONES:">
          <Line yellow>✓ Structural foundation (Years 1-3)</Line>
          <Line yellow>✓ Primary tunnel network (Years 4-8)</Line>
          <Line cyan>▶ Retail build-out (Years 9-15, ongoing)</Line>
          <Line neon>○ Grand opening (Projected Year 18-20)</Line>
        </Section>
        <Divider />
        <Section title="CURRENT CHALLENGES:">
          <Line red>→ Budget overruns: 340% over original estimate</Line>
          <Line red>→ Structural issues: Multiple tunnel reinforcements required</Line>
          <Line red>→ Labor disputes: 3 strikes in past 2 years</Line>
          <Line yellow>→ Environmental concerns: Lake ecosystem impact</Line>
        </Section>
        <Divider />
        <Line pink>"The future of shopping is underwater. Eventually."</Line>
      </>
    ),
  },

  "Street Preacher Live Stream": {
    content: (
      <Box color="red">
        <Line red bold large>[LIVE: BROTHER STATIC'S SERMON]</Line>
        <Line yellow>Streaming from: Ports district, Pier 7</Line>
        <Divider color="red" />
        <Section title="CURRENT BROADCAST:">
          <Line red>"...AND THE MACHINES WILL WEEP CHROME TEARS!"</Line>
          <Line neon>"The corporations feed on your SOUL like vampires!"</Line>
          <Line red>"G0 was THEIR doing! THEIR sacrifice to dark gods!"</Line>
          <Line neon>"Reject the upload! Your consciousness DIES in the cloud!"</Line>
          <Line red>"ONLY FLESH IS REAL! ONLY PAIN IS TRUTH!"</Line>
          <Line neon>"The Basilisk watches from the Deep Net! WATCHING!"</Line>
          <Line red>"Repent! REPENT! Before the second Incident comes!"</Line>
        </Section>
        <Divider color="red" />
        <KeyValue label="Live Viewers" value="47" />
        <KeyValue label="Total Donations" value="12¤" />
        <Line yellow>"Chat is disabled due to spam."</Line>
      </Box>
    ),
  },

  "Arcade High Scores": {
    content: (
      <Box color="cyan">
        <Line smoke large bold>[RETRO ARCADE LEADERBOARDS]</Line>
        <Line yellow>Cy's premier gaming network</Line>
        <Divider color="cyan" />
        <Section title="DRONE HUNTER (Classic Shooter):">
          <Line neon>1. SAŠA - 1,337,420 pts</Line>
          <Line neon>2. CHROME_DADDY - 842,100 pts</Line>
          <Line neon>3. NO_LIFE_GAMER - 731,250 pts</Line>
        </Section>
        <Divider color="cyan" />
        <Section title="CHROME OR DIE (Racing):">
          <Line neon>1. BURNOUT_QUEEN - 02:47.3</Line>
          <Line neon>2. SPEED_DEMON - 02:51.8</Line>
          <Line neon>3. TURBO_TRASH - 03:04.2</Line>
        </Section>
        <Divider color="cyan" />
        <Section title="CORPO CRUSH (Puzzle):">
          <Line neon>1. BIG_BRAIN - Level 247</Line>
          <Line neon>2. LOGIC_KING - Level 198</Line>
          <Line neon>3. SAŠA - Level 147</Line>
        </Section>
        <Divider color="cyan" />
        <Line red>* G0 SURVIVOR has been banned from leaderboards</Line>
        <Line yellow>"Insert 5¤ to play. Insert more to win."</Line>
      </Box>
    ),
  },

  "TG Labs Ad": {
    content: (
      <CorpAd
        corp="TG LABS"
        slogan="Science Redefined"
        tagline="Where impossibility ends."
        products={[
          "BioTech Research & Development",
          "Nano-Engineering Solutions",
          "Genetic Enhancement Programs",
          "Space Technology Innovation"
        ]}
        cta="Visit Our Ports Showroom - Experience The Future"
        theme="neon"
        logo="🔬"
      >
        <p style={{ fontSize: '0.7rem', color: '#ff006e', marginTop: '0.5rem' }}>
          Orbital research stations now accepting applications
        </p>
        <p style={{ fontSize: '0.65rem', color: '#ff5d8f', marginTop: '0.3rem' }}>
          Ports showroom: See nano-engineering in action (free tours)
        </p>
      </CorpAd>
    ),
  },
};

export default CY_CITY_NETWORK;
