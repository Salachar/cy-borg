import {
  Line,
  Box,
  Section,
  ListItem,
  Warning,
  Divider,
  KeyValue,
  DataTable,
  StatBlock,
} from '../TerminalComponents';

export const STONE_EELS_COMMANDS = {
  access_cave_club_network: {
    password: {
      pw: "serpent",
      hint: "The Stone Eels gang symbol - what kind of creature?",
      hintStrength: 1,
    },
    content: (
      <>
        <Line smoke large bold>[CAVE CLUB - NETWORK ACCESS]</Line>
        <Line cyan>[CONNECTED TO STONE EELS PRIVATE NETWORK]</Line>
        <Divider />
        <KeyValue label="Security Level" value="MODERATE (Gang internal)" />
        <KeyValue label="Location" value="Underground, converted storm chamber" />
        <KeyValue label="Territory" value="Stone Eels (Ports district)" />
        <Divider />
        <Section title="AVAILABLE SYSTEMS:">
          <Line neon>→ Club layout and operations</Line>
          <Line neon>→ Stone Eels gang intel</Line>
          <Line neon>→ Security systems</Line>
          <Line neon>→ VIP guest lists</Line>
          <Line neon>→ Recent incidents</Line>
        </Section>
        <Divider />
        <Warning>This is gang headquarters - handle with caution</Warning>
      </>
    ),
    related_commands: {
      query_cave_club_layout: {
        password: {
          pw: "storm",
          hint: "What the club was before it was a club - a water overflow...",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[CAVE CLUB - FACILITY LAYOUT]</Line>
            <Divider />
            <Section title="GROUND FLOOR (Main Public Area):">
              <Line cyan>→ Entrance checkpoint (bouncer station, weapon check)</Line>
              <Line cyan>→ Main club floor (dance floor, bar, 40-60 patrons)</Line>
              <Line cyan>→ Service block (storage, kitchen, 2 bathrooms)</Line>
              <Line cyan>→ Central stairways (guarded access to upper level)</Line>
            </Section>
            <Divider />
            <Section title="UPPER LEVEL (VIP & Management):">
              <Line yellow>→ Main VIP lounge (2 large booths, overlooks dance floor)</Line>
              <Line yellow>→ Semi-private booth (intimate meetings)</Line>
              <Line yellow>→ Saša's office complex (waiting room, main office, back room with safe)</Line>
              <Line yellow>→ Security area (monitors, checkpoint to private booths)</Line>
              <Line yellow>→ Private booths (2 exclusive, accessed through security)</Line>
            </Section>
            <Divider />
            <Section title="SECURITY FLOW:">
              <Line neon>Public: Entrance → Main floor → (VIP) Stairs → VIP lounge</Line>
              <Line neon>High Security: Stairs → Office → Security Area → Private booths</Line>
              <Line red>Saša's office has windows overlooking VIP lounge and main floor</Line>
            </Section>
            <Divider />
            <KeyValue label="Operating Hours" value="20:00-06:00" />
            <KeyValue label="Closed Hours" value="06:00-20:00 (cleanup, meetings)" />
          </>
        ),
      },

      query_stone_eels_intel: {
        password: {
          pw: "sasa",
          hint: "The gang leader's first name (4 letters)",
          hintStrength: 3,
        },
        content: (
          <Box color="pink">
            <Line pink large bold>[STONE EELS GANG - INTELLIGENCE FILE]</Line>
            <Divider color="pink" />
            <DataTable data={[
              { label: "Leader", value: "Saša" },
              { label: "Territory", value: "Ports district (eastern section)" },
              { label: "Members", value: "~100 total (~20-30 active combatants)" },
              { label: "Headquarters", value: "Cave Club" },
              { label: "Reputation", value: "Diplomatic but dangerous" },
            ]} />
            <Divider color="pink" />
            <Section title="ORGANIZATIONAL STRUCTURE:">
              <Line neon>Leadership: Saša (tactical, intelligent)</Line>
              <Line neon>Enforcers: Personal guards (loyal, well-equipped)</Line>
              <Line neon>Security: Bouncers and patrol members</Line>
              <Line neon>Associates: Off-duty members, local allies</Line>
            </Section>
            <Divider color="pink" />
            <Section title="THREAT ASSESSMENT:">
              <KeyValue label="Threat Level" value="MODERATE-HIGH" valueColor="yellow" />
              <Line yellow>Prefer negotiation over violence (cost-benefit focused)</Line>
              <Line yellow>Will defend territory fiercely if attacked</Line>
              <Line yellow>Honorable - keep their word in deals</Line>
              <Line red>Betray them and they will hunt you forever</Line>
            </Section>
            <Divider color="pink" />
            <Section title="ENEMIES:">
              <ListItem indent>Virid Vipers (rival gang, hostile encounters)</ListItem>
              <ListItem indent>Alliansen Inc. (megacorp trying to gentrify Ports)</ListItem>
              <ListItem indent>SecOps (bribes keep them at distance)</ListItem>
            </Section>
            <Divider color="pink" />
            <Section title="ALLIES:">
              <ListItem indent>Local Ports residents (protection racket is fair)</ListItem>
              <ListItem indent>Some fixers and info brokers</ListItem>
              <ListItem indent>Underground music scene (Cave Club is venue)</ListItem>
            </Section>
            <Divider color="pink" />
            <Section title="KNOWN OPERATIONS:">
              <Line neon>→ Protection money collection (reasonable rates)</Line>
              <Line neon>→ Drug distribution (Stone Eels product only, ban Vipers)</Line>
              <Line neon>→ Weapons smuggling</Line>
              <Line neon>→ Information brokering</Line>
              <Line neon>→ Neutral ground negotiations (Cave Club)</Line>
            </Section>
            <Divider color="pink" />
            <Warning>Current Status: May be connected to Charlie Sand's mission</Warning>
            <Line cyan>Potential ally against Alliansen/casino operations</Line>
          </Box>
        ),
      },

      profile_sasa: {
        password: {
          pw: "ports",
          hint: "The district Saša fights to protect",
          hintStrength: 2,
        },
        content: (
          <Box color="yellow">
            <Line yellow large bold>[SAŠA - STONE EELS LEADER]</Line>
            <Divider color="yellow" />
            <DataTable data={[
              { label: "Position", value: "Stone Eels Gang Leader" },
              { label: "Threat Level", value: "HIGH (if provoked)" },
              { label: "Combat Rating", value: "7/10" },
              { label: "Tactical Intelligence", value: "9/10" },
            ]} />
            <Divider color="yellow" />
            <Section title="COMBAT PROFILE:">
              <StatBlock stats={{
                "HP": "7",
                "Morale": "5 (will flee if losing badly)",
                "Armor": "Rough jacket (-d4)",
                "Primary Weapon": "Throwing knives (d4, 2 attacks/round, 30ft range)",
                "Backup Weapon": "Concealed handgun (d6)",
              }} />
            </Section>
            <Divider color="yellow" />
            <Section title="PERSONALITY PROFILE:">
              <Line neon>Demeanor: Calm, calculating, intelligent</Line>
              <Line neon>Speech: Direct, no bullshit, occasionally philosophical</Line>
              <Line neon>Motivation: Protect Stone Eels territory from corps</Line>
              <Line neon>Leadership Style: Leads by respect, not just fear</Line>
              <Line yellow>Values competence, honor, and keeping your word</Line>
            </Section>
            <Divider color="yellow" />
            <Section title="DEAL BREAKERS (Will Kill You For):">
              <Line red>→ Betrayal (breaking agreements)</Line>
              <Line red>→ Attacking Stone Eels unprovoked</Line>
              <Line red>→ Threatening Ports civilians</Line>
              <Line red>→ Working with Virid Vipers</Line>
              <Line red>→ Snitching to corps/SecOps</Line>
            </Section>
            <Divider color="yellow" />
            <Section title="RESPECTS:">
              <Line cyan>→ Competence and professionalism</Line>
              <Line cyan>→ Keeping your word</Line>
              <Line cyan>→ Protecting your people</Line>
              <Line cyan>→ Standing up to corps</Line>
              <Line cyan>→ Smart tactics over brute force</Line>
            </Section>
            <Divider color="yellow" />
            <Section title="KNOWN ASSETS:">
              <Line neon>Keys to Cave Club safe (2d10×100¤)</Line>
              <Line neon>Master access to Stone Eels hideouts</Line>
              <Line neon>Intel network throughout Ports</Line>
              <Line neon>2,000¤ on traceable credchip (personal funds)</Line>
            </Section>
            <Divider color="yellow" />
            <Warning>Typical Location: VIP lounge or office at Cave Club</Warning>
            <Line cyan>Can be negotiated with - prefers smart deals to violence</Line>
          </Box>
        ),
      },

      query_cave_club_security: {
        content: (
          <>
            <Line smoke large bold>[CAVE CLUB - SECURITY SYSTEMS]</Line>
            <Divider />
            <Section title="PERSONNEL (Light Presence):">
              <Line neon>1-2 Bouncers at entrance checkpoint (HP 7, shocksticks/handguns)</Line>
              <Line neon>1 Bouncer/guard at stair access</Line>
              <Line neon>2 Guards in security area (upper level)</Line>
              <Line neon>Saša + 3-5 personal guards (VIP lounge or office)</Line>
              <Line neon>d6 off-duty Stone Eels on main floor (will engage if provoked)</Line>
            </Section>
            <Divider />
            <Section title="SURVEILLANCE:">
              <Line cyan>Main floor: Full camera coverage</Line>
              <Line cyan>Security area: Multiple monitors</Line>
              <Line yellow>VIP lounge: NO cameras (privacy for guests)</Line>
              <Line yellow>Saša's office: NO cameras (secure meetings)</Line>
              <Line yellow>Private booths: NO cameras</Line>
            </Section>
            <Divider />
            <Section title="ACCESS CONTROL:">
              <Line neon>Entrance: Weapon check (enforced or not, depends on approach)</Line>
              <Line neon>Stairs: Guarded (VIP access only)</Line>
              <Line neon>Security Area: Checkpoint before private booths</Line>
              <Line red>Panic button in security area (summons all available gang members)</Line>
            </Section>
            <Divider />
            <Section title="RESPONSE TIMES:">
              <KeyValue label="Panic button" value="All Stone Eels converge in <1 minute" />
              <KeyValue label="Nearby members" value="d6 arrive in d2 rounds" />
              <KeyValue label="Outside reinforcements" value="d6 arrive in d4 rounds" />
            </Section>
            <Divider />
            <Line yellow>Security is moderate - Stone Eels control the territory</Line>
            <Line cyan>Nobody dares attack here (neutral ground reputation)</Line>
          </>
        ),
      },

      query_vip_guest_list: {
        password: {
          pw: "gibos",
          hint: "The nickname of the cyborg grandpa high roller",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[CAVE CLUB - VIP GUEST LIST]</Line>
            <Divider />
            <Section title="REGULARS:">
              <Line pink>→ Saša (always present, owner/operator)</Line>
              <Line pink>→ Stone Eels leadership (meetings and business)</Line>
              <Line pink>→ Local fixers and info brokers</Line>
              <Line pink>→ Underground music acts (performing tonight)</Line>
              <Line pink>→ High rollers from Lucky Flight Casino</Line>
            </Section>
            <Divider />
            <Section title="CURRENT VIP GUESTS:">
              <Line cyan>→ "Gibos" - Hyper-cybered grandpa, Lucky Flight's top winner</Line>
              <Line neon>  Status: Legs glitching, seated in VIP booth</Line>
              <Line neon>  Winnings: 84,200¤ this month (spent on chrome)</Line>
              <Line yellow>  → Could be source of casino intel if approached</Line>
            </Section>
            <Divider />
            <Section title="TONIGHT'S ENTERTAINMENT:">
              <Line neon>→ PHASER/MOB (blackened chromecore) - 22:00</Line>
              <Line neon>→ HeCcc (hexcore) - 23:30</Line>
              <Line neon>→ I must leave (doompunk) - 01:00</Line>
              <Line yellow>Live music provides cover for covert conversations</Line>
            </Section>
            <Divider />
            <Line cyan>Cave Club is neutral ground - violence here brings consequences</Line>
          </>
        ),
      },

      query_recent_incidents_club: {
        content: (
          <>
            <Line smoke large bold>[CAVE CLUB - RECENT INCIDENTS]</Line>
            <Divider />
            <Section title="LAST 7 DAYS:">
              <Line yellow>3 days ago:</Line>
              <ListItem indent>Stone Eels members grab someone from Batu's Bodega</ListItem>
              <ListItem indent>Target: "Charlie Sand" (brought to Cave Club)</ListItem>
              <ListItem indent>Reason: Asking too many questions about casino</ListItem>
              <ListItem indent>Status: Held for questioning, then released with "offer"</ListItem>
              <Divider />
              <Line yellow>5 days ago:</Line>
              <ListItem indent>Virid Vipers scout spotted outside club</ListItem>
              <ListItem indent>Stone Eels mobilized, Vipers fled</ListItem>
              <ListItem indent>No casualties, tension increased</ListItem>
              <Divider />
              <Line yellow>6 days ago:</Line>
              <ListItem indent>Fight broke out on main floor (drunk patrons)</ListItem>
              <ListItem indent>Bouncers intervened (shocksticks, non-lethal)</ListItem>
              <ListItem indent>Both parties ejected, no further issues</ListItem>
            </Section>
            <Divider />
            <Warning>Charlie Sand was here recently - connection to players' mission</Warning>
          </>
        ),
      },

      access_operation_clean_break_dossier: {
        password: {
          pw: "alliansen",
          hint: "The megacorp trying to take over the Ports",
          hintStrength: 2,
        },
        content: (
          <Box color="red">
            <Line red large bold>[OPERATION CLEAN BREAK - CLASSIFIED DOSSIER]</Line>
            <Divider color="red" />
            <Warning>STONE EELS INTELLIGENCE - TOP PRIORITY</Warning>
            <Divider color="red" />
            <Section title="OPERATION OVERVIEW:">
              <Line neon>Target: Alliansen Inc. convoy through Ports</Line>
              <Line neon>Timing: 48 hours from now, 23:00</Line>
              <Line neon>Route: Main canal thoroughfare</Line>
              <Line neon>Cargo: Security equipment, weapons, tech, personnel</Line>
            </Section>
            <Divider color="red" />
            <Section title="ALLIANSEN'S GOAL:">
              <Line yellow>"Clean Break" = Corporate euphemism for hostile takeover</Line>
              <Line neon>→ Consolidate control over Ports district</Line>
              <Line neon>→ Displace residents through economic pressure</Line>
              <Line neon>→ Build private security infrastructure</Line>
              <Line neon>→ Gentrify neighborhood into corp-controlled zone</Line>
              <Line red>Stone Eels territory will be destroyed</Line>
            </Section>
            <Divider color="red" />
            <Section title="CONVOY DETAILS:">
              <DataTable data={[
                { label: "Vehicles", value: "3 armored transports" },
                { label: "Escort", value: "Alliansen private security (heavily armed)" },
                { label: "Estimated Value", value: "500,000¤+ in cargo" },
                { label: "Route Security", value: "SecOps bribed to look away" },
              ]} />
            </Section>
            <Divider color="red" />
            <Section title="STONE EELS PLAN:">
              <Line cyan>⚠ Hit the convoy during transit</Line>
              <Line neon>Goal: Steal cargo, disrupt Alliansen operations</Line>
              <Line yellow>Problem: Need professionals who can handle corp security</Line>
              <Line red>Stone Eels specialize in street combat, not military-grade security</Line>
            </Section>
            <Divider color="red" />
            <Section title="ALLIANCE OPPORTUNITY:">
              <Line cyan>Saša needs skilled operators for convoy hit</Line>
              <Line yellow>Payment: 500¤ advance + split of convoy loot</Line>
              <Line neon>Benefits: Stone Eels alliance, territory access, intel network</Line>
              <Line red>Risk: Corporate retaliation from Alliansen Inc.</Line>
            </Section>
            <Divider color="red" />
            <Warning>This operation connects to larger corporate war</Warning>
            <Line yellow>UCS vs Alliansen - Ports is contested territory</Line>
          </Box>
        ),
      },
    },
  },
};
