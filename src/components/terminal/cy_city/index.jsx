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

export const CY_CITY_NETWORK = {

  // ============================================================================
  // MAJOR NEWS FEEDS
  // ============================================================================

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

  // ============================================================================
  // CORPORATE PRESENCE
  // ============================================================================

  "ACGS Corporate Portal": {
    content: (
      <>
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

  "Alliansen Inc. Portal": {
    content: (
      <>
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

  "AST Endless Seas Portal": {
    content: (
      <>
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

  "Cynergy Water & Power Portal": {
    content: (
      <>
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

  "Fideistic Transformation Portal": {
    content: (
      <>
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

  "Kaytell Makers Portal": {
    content: (
      <>
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

  "Spectral FT Banks Portal": {
    content: (
      <>
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

  "UCS Corporate Portal": {
    content: (
      <>
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

  // ============================================================================
  // ENTERTAINMENT & LIFESTYLE
  // ============================================================================

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

  "Tulles&deVerte Lifestyle Feed": {
    content: (
      <>
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

  // ============================================================================
  // PUBLIC SERVICES
  // ============================================================================

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

  // ============================================================================
  // URBAN LEGENDS & RUMORS
  // ============================================================================

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

  // ============================================================================
  // RANDOM FLAVOR
  // ============================================================================

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
};

export default CY_CITY_NETWORK;
