import {
  Line,
  Box,
  Section,
  ListItem,
  Warning,
  Divider,
  DataTable,
} from '../TerminalComponents';

export const NEIGHBORHOOD_COMMANDS = {
  query_ports_district_status: {
    content: (
      <>
        <Line smoke large bold>[PORTS DISTRICT - STATUS REPORT]</Line>
        <Divider />
        <DataTable data={[
          { label: "Population", value: "~15,000 residents" },
          { label: "Economic Status", value: "LOW (poverty, debt-trapped)" },
          { label: "Crime Rate", value: "HIGH (gang activity, corp exploitation)" },
          { label: "Corp Presence", value: "Alliansen Inc. (expanding influence)" },
          { label: "Gang Control", value: "Stone Eels (eastern), Virid Vipers (western)" },
        ]} />
        <Divider />
        <Section title="INFRASTRUCTURE:">
          <Line yellow>Condition: DETERIORATING</Line>
          <Line neon>→ Canal water heavily polluted</Line>
          <Line neon>→ Power grid unstable (frequent outages)</Line>
          <Line neon>→ Buildings old and poorly maintained</Line>
          <Line neon>→ Public services minimal (underfunded)</Line>
          <Line red>Corporate "redevelopment" = forced displacement</Line>
        </Section>
        <Divider />
        <Section title="MAJOR LOCATIONS:">
          <ListItem>Lucky Flight Casino (debt trap, corp-owned)</ListItem>
          <ListItem>Cave Club (Stone Eels headquarters, underground)</ListItem>
          <ListItem>Batu's Bodega (community hub, currently closed)</ListItem>
          <ListItem>Canal docks (smuggling, transport)</ListItem>
          <ListItem>Old warehouses (various gang/illegal operations)</ListItem>
        </Section>
        <Divider />
        <Section title="CURRENT THREATS:">
          <Line red>→ Lucky Flight Casino debt predation</Line>
          <Line red>→ Alliansen Inc. gentrification efforts</Line>
          <Line red>→ Gang conflicts (Stone Eels vs Virid Vipers)</Line>
          <Line red>→ SecOps corruption (bribed to ignore crime)</Line>
          <Line red>→ Resident displacement (evictions, foreclosures)</Line>
        </Section>
        <Divider />
        <Line cyan>Community sentiment: DESPERATE but RESILIENT</Line>
        <Line yellow>Residents support anyone who fights back against corps</Line>
      </>
    ),
  },

  access_street_doc_database: {
    password: {
      pw: "fingers",
      hint: "The nickname locals use for the street doc (related to hands)",
      hintStrength: 1,
    },
    content: (
      <>
        <Line smoke large bold>[STREET DOC - "FINGERS" - MEDICAL SERVICES]</Line>
        <Divider />
        <DataTable data={[
          { label: "Name", value: "'Fingers' (real name unknown)" },
          { label: "Location", value: "2 blocks south of bodega, basement clinic" },
          { label: "Specialty", value: "Trauma care, cyberware installation" },
          { label: "License Status", value: "UNLICENSED (black market)" },
          { label: "Reputation", value: "Reliable but expensive" },
        ]} />
        <Divider />
        <Section title="SERVICES OFFERED:">
          <Line neon>→ Emergency medical treatment (heals 2d6 HP, 100¤)</Line>
          <Line neon>→ Cyberware installation (prices vary, +50¤ no questions)</Line>
          <Line neon>→ Bullet removal and trauma surgery (150¤)</Line>
          <Line neon>→ Stim and painkiller prescriptions (20¤/dose)</Line>
          <Line neon>→ ID forgery for medical records (80¤)</Line>
        </Section>
        <Divider />
        <Section title="PAYMENT POLICY:">
          <Line yellow>Cash only, no credchip traces</Line>
          <Line yellow>Discount for Stone Eels members (-20%)</Line>
          <Line red>Will report to SecOps if you can't pay (survival tactic)</Line>
        </Section>
        <Divider />
        <Warning>Quality: GOOD (despite lack of license)</Warning>
        <Line cyan>Fingers trained as corp medic before going independent</Line>
      </>
    ),
  },

  access_chop_shop_network: {
    password: {
      pw: "razor",
      hint: "The chop shop owner's street name (sharp tool)",
      hintStrength: 2,
    },
    content: (
      <>
        <Line smoke large bold>[RAZOR'S CHOP SHOP - BLACK MARKET TECH]</Line>
        <Divider />
        <DataTable data={[
          { label: "Owner", value: "'Razor' (tech specialist)" },
          { label: "Location", value: "3 blocks east, abandoned garage" },
          { label: "Services", value: "Cyberware, weapons, vehicle mods" },
          { label: "Quality", value: "QUESTIONABLE (20% failure rate)" },
          { label: "Reputation", value: "Cheap but risky" },
        ]} />
        <Divider />
        <Section title="INVENTORY (Black Market):">
          <Line neon>→ Stolen cyberware (50% off retail, no warranty)</Line>
          <Line neon>→ Modified weapons (d6 types, +1 damage, jams on 1)</Line>
          <Line neon>→ Hacking tools (DR-2 to tech checks, one-time use)</Line>
          <Line neon>→ Fake credentials and IDs (80¤, DR12 to detect forgery)</Line>
          <Line neon>→ Surveillance counter-measures (jammers, scramblers)</Line>
        </Section>
        <Divider />
        <Section title="SPECIAL SERVICES:">
          <Line yellow>Vehicle theft and modification (2d10×100¤)</Line>
          <Line yellow>Weapon serial number removal (50¤)</Line>
          <Line yellow>Cyberdeck overclocking (+1 to hacking, burns out in d6 uses)</Line>
        </Section>
        <Divider />
        <Warning>⚠ 20% chance of defective merchandise</Warning>
        <Warning>⚠ No refunds, no complaints (enforced by violence)</Warning>
        <Divider />
        <Line red>Razor has connections to both Stone Eels and Virid Vipers</Line>
        <Line yellow>Neutral ground - no gang violence allowed in shop</Line>
      </>
    ),
  },

  query_taxi_boat_service: {
    content: (
      <>
        <Line smoke large bold>[CANAL TAXI BOAT SERVICE]</Line>
        <Divider />
        <Section title="OVERVIEW:">
          <Line neon>Primary water transport in Ports district</Line>
          <Line neon>Cheap alternative to car bridges and foot traffic</Line>
          <Line yellow>Many drivers bribed by gangs (look the other way)</Line>
        </Section>
        <Divider />
        <Section title="RATES:">
          <DataTable data={[
            { label: "Short trip (<1km)", value: "10¤" },
            { label: "Medium trip (1-3km)", value: "20¤" },
            { label: "Long trip (3km+)", value: "40¤" },
            { label: "No questions asked", value: "+20¤ surcharge" },
          ]} />
        </Section>
        <Divider />
        <Section title="COMMON ROUTES:">
          <ListItem indent>Residential docks → Market district</ListItem>
          <ListItem indent>Smuggler's pier → Industrial zone</ListItem>
          <ListItem indent>Lucky Flight Casino pier → Various destinations</ListItem>
          <ListItem indent>Cave Club area → Anywhere (band equipment transport)</ListItem>
        </Section>
        <Divider />
        <Section title="TACTICAL USE:">
          <Line cyan>✓ Low visibility approach (water routes less monitored)</Line>
          <Line cyan>✓ Cover story for transporting equipment</Line>
          <Line cyan>✓ Quick escape route if needed</Line>
          <Line yellow>Drivers won't report minor crimes (bribed or apathetic)</Line>
        </Section>
        <Divider />
        <Line neon>Available 24/7, hail from any dock with credits in hand</Line>
      </>
    ),
  },

  query_virid_vipers_intel: {
    password: {
      pw: "green",
      hint: "The color in the gang's name",
      hintStrength: 1,
    },
    content: (
      <Box color="red">
        <Line red large bold>[VIRID VIPERS - RIVAL GANG INTELLIGENCE]</Line>
        <Divider color="red" />
        <Warning>⚠ HOSTILE GANG - AVOID IF POSSIBLE</Warning>
        <Divider color="red" />
        <DataTable data={[
          { label: "Territory", value: "Ports district (western section)" },
          { label: "Members", value: "~80 estimated" },
          { label: "Leadership", value: "Unknown (decentralized structure)" },
          { label: "Primary Business", value: "Drug trade, protection rackets" },
          { label: "Threat Level", value: "HIGH (violent, unpredictable)" },
        ]} />
        <Divider color="red" />
        <Section title="REPUTATION:">
          <Line red>Violent and unpredictable</Line>
          <Line red>Poor negotiators (prefer intimidation)</Line>
          <Line red>Known for drug-related violence</Line>
          <Line red>Frequent clashes with Stone Eels</Line>
          <Line yellow>Avoid Virid Vipers territory if possible</Line>
        </Section>
        <Divider color="red" />
        <Section title="KNOWN OPERATIONS:">
          <Line neon>→ Drug manufacturing and distribution</Line>
          <Line neon>→ Violent protection rackets</Line>
          <Line neon>→ Weapons smuggling (lower quality than Stone Eels)</Line>
          <Line neon>→ Turf wars with Stone Eels</Line>
        </Section>
        <Divider color="red" />
        <Section title="RELATIONSHIP WITH PLAYERS:">
          <Line red>If allied with Stone Eels: HOSTILE</Line>
          <Line yellow>If neutral: SUSPICIOUS but negotiable</Line>
          <Line yellow>If you have something they want: INTERESTED</Line>
        </Section>
        <Divider color="red" />
        <Warning>Do NOT work for both Stone Eels and Virid Vipers</Warning>
        <Line red>Betrayal of either gang = death sentence</Line>
      </Box>
    ),
  },

  access_secops_patrol_patterns: {
    password: {
      pw: "bribe",
      hint: "How SecOps are controlled in the Ports",
      hintStrength: 2,
    },
    content: (
      <>
        <Line smoke large bold>[SECOPS PATROL PATTERNS - PORTS DISTRICT]</Line>
        <Divider />
        <Section title="PATROL FREQUENCY:">
          <DataTable data={[
            { label: "Stone Eels territory", value: "MINIMAL (bribed)" },
            { label: "Virid Vipers territory", value: "LOW (occasional sweeps)" },
            { label: "Casino vicinity", value: "MODERATE (corp-funded)" },
            { label: "Residential areas", value: "VERY LOW (underfunded)" },
          ]} />
        </Section>
        <Divider />
        <Section title="RESPONSE TIMES:">
          <Line neon>Violent crime in progress: d6+4 minutes</Line>
          <Line neon>Property crime: d10+10 minutes</Line>
          <Line neon>Gang activity: Ignore unless corp property threatened</Line>
          <Line yellow>Casino alarm: IMMEDIATE response (corp-funded)</Line>
        </Section>
        <Divider />
        <Section title="CORRUPTION LEVEL:">
          <Line red>EXTREMELY HIGH</Line>
          <Line neon>→ Stone Eels pay 2,000¤/month for limited patrols</Line>
          <Line neon>→ Virid Vipers pay 1,500¤/month for same</Line>
          <Line neon>→ Alliansen Inc. pays 10,000¤/month for casino protection</Line>
          <Line yellow>SecOps will ignore most crimes if not corp-related</Line>
        </Section>
        <Divider />
        <Section title="TACTICAL IMPLICATIONS:">
          <Line cyan>✓ Gang activity largely ignored</Line>
          <Line cyan>✓ Can operate with minimal SecOps interference</Line>
          <Line red>⚠ Casino hits bring IMMEDIATE response</Line>
          <Line yellow>Corporate property = high-priority targets</Line>
        </Section>
        <Divider />
        <Line neon>Residents view SecOps as corrupt and ineffective</Line>
        <Line yellow>Community won't report crimes to SecOps (no trust)</Line>
      </>
    ),
  },

  query_underground_music_scene: {
    content: (
      <>
        <Line smoke large bold>[PORTS UNDERGROUND MUSIC SCENE]</Line>
        <Divider />
        <Section title="MAJOR VENUE:">
          <Line cyan>Cave Club (Stone Eels headquarters)</Line>
          <Line neon>Hours: 20:00-06:00</Line>
          <Line neon>Capacity: 60-80 patrons</Line>
          <Line yellow>Neutral ground - violence banned during shows</Line>
        </Section>
        <Divider />
        <Section title="POPULAR ACTS:">
          <Line pink>→ PHASER/MOB - blackened chromecore</Line>
          <Line pink>→ G_-.- - seismic noise</Line>
          <Line pink>→ Ternion 2 - meta/progen-rap</Line>
          <Line pink>→ I must leave - doompunk</Line>
          <Line pink>→ HeCcc - hexcore</Line>
          <Line pink>→ Sirius Last Light - atmo-orbitalwave</Line>
        </Section>
        <Divider />
        <Section title="SCENE CULTURE:">
          <Line neon>Anti-corporate sentiment (music reflects resistance)</Line>
          <Line neon>DIY ethics (bands handle own equipment via canal)</Line>
          <Line neon>Community-focused (proceeds support local causes)</Line>
          <Line yellow>Many musicians are also gang members or affiliates</Line>
        </Section>
        <Divider />
        <Section title="TACTICAL RELEVANCE:">
          <Line cyan>✓ Band equipment provides cover for smuggling</Line>
          <Line cyan>✓ Loud music masks conversations and activity</Line>
          <Line cyan>✓ Crowds provide anonymity</Line>
          <Line cyan>✓ Neutral ground protection</Line>
        </Section>
      </>
    ),
  },
};
