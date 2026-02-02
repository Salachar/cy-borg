import {
  Divider,
  Line,
  Section,
} from '@terminal/TerminalComponents';
import {
  CorpAd,
  DistrictPortal,
} from '@terminal/retcomdevice';

export const CENTRAL_DISTRICT = {
  "Central District": {
    content: (
      <DistrictPortal
        districtName="CENTRAL"
        districtId="CENTRAL-DISTRICT-PRIME"
        tagline="Where the money lives and the law doesn't apply"
        region="Western Hills, Business/Enterprise Zone"
        population="~80,000 residents (not counting corporate workforce)"
        corporatePresence="DOMINANT"
        crimeThreat="LOW (Street crime) / EXTREME (White collar)"
        securityResponse="MAXIMUM (For the rich) / NONE (For the rest)"
        atmosphere="Neon-crowned hills overlook the wretched city below. Crystal facades and holo-shimmering skyscrapers rise from what was once woodland. Iron horizon of arcologies under corporate gaze. A coffin apartment costs more than you'd make in ten lifetimes. It won't let you forget that."
        accessPoints={[
          "North Central - The Neon Pillar & financial district",
          "South Central - Alliansen Inc. dominance zone",
          "Undersjon - Retail park beneath Lake Gravel",
          "Corporate arcologies and headquarters",
          "Luxury residential towers",
          "Premium entertainment venues",
        ]}
        warnings={[
          "SecCorps EVERYWHERE - multiple competing jurisdictions",
          "Facial recognition active in all public spaces",
          "Can't afford to be here? You'll be reminded constantly",
          "White-collar crimes go unpunished - rich above the law",
          "SecCorps contracts = violent competition between firms",
          "Act like you belong or expect immediate removal",
        ]}
        theme="corporate"
      >
        <Divider />
        <Section title="NORTH CENTRAL:">
          <Line neon bold>The Neon Pillar:</Line>
          <Line cyan>• HQ of Spectral FT Banks & Holdings</Line>
          <Line cyan>• Casts fluorescent sun upon the district</Line>
          <Line cyan>• Tallest structure in North Central</Line>

          <Divider />

          <Line neon bold>Fideistic Transformation (Megatemple):</Line>
          <Line cyan>• Subsidiary corp-church of Spectral FT</Line>
          <Line cyan>• Promises eternal singularity in divine mind-cloud</Line>
          <Line cyan>• Uploaded sentience (success questionable)</Line>
          <Line cyan>• Ego continuance unknown</Line>
          <Line yellow>• Congregation of the desperate wealthy</Line>
        </Section>

        <Divider />

        <Section title="SOUTH CENTRAL:">
          <Line neon bold>Major Players:</Line>
          <Line cyan>• Alliansen Inc. - Dominates southern sector</Line>
          <Line cyan>• Grave/Mellberg/Tosk - Mobster law firm</Line>
          <Line cyan>• Tulles&deVerte - Superstar it couple empire</Line>

          <Divider />

          <Line neon bold>Notable Locations:</Line>
          <Line yellow>• Svärta District - Street-level services</Line>
          <Line yellow>• Central Plaza Tower Block 7 - Luxury residential</Line>
          <Line yellow>• Premium penthouses and executive suites</Line>
        </Section>

        <Divider />

        <Section title="UNDERSJON (Lake Gravel Retail Park):">
          <Line neon bold>"An altar to consumerism"</Line>
          <Line cyan>• Sprawling retail park BENEATH Lake Gravel</Line>
          <Line cyan>• Separates North and South Central</Line>
          <Line yellow>• Perpetually under construction (always expanding)</Line>
          <Line smoke>• Shopping as religion - consume or be consumed</Line>
        </Section>

        <Divider />

        <Section title="SECURITY SITUATION:">
          <Line red bold>SecCorps Presence: EXTREME</Line>
          <Line yellow>• Multiple firms with competing jurisdictions</Line>
          <Line yellow>• Ironclad contracts enforced violently</Line>
          <Line yellow>• Each corp has its own SecCorps allegiance</Line>
          <Line yellow>• Jurisdictional disputes = shootouts</Line>
          <Line cyan>• They're not here for you - they're here for THEM</Line>
        </Section>

        <Divider />

        <Section title="CRIME PROFILE:">
          <Line neon bold>White Collar Paradise:</Line>
          <Line cyan>• Financial crimes: High yields, low convictions</Line>
          <Line cyan>• Embezzlement, fraud, insider trading</Line>
          <Line cyan>• Market manipulation, money laundering</Line>
          <Line red>• The rich remain above the law</Line>
          <Line yellow>• Street crime? Crushed instantly by SecCorps</Line>
          <Line yellow>• Boardroom crime? What crime?</Line>
        </Section>

        <Divider />

        <Section title="COST OF LIVING:">
          <Line red bold>EXTREME - Beyond most comprehension</Line>
          <Line yellow>• Coffin apartment: 10+ lifetimes of earnings</Line>
          <Line yellow>• Penthouse suite: Generational wealth required</Line>
          <Line yellow>• Daily expenses: More than most make in months</Line>
          <Line yellow>• Simply existing here costs more than breathing</Line>
          <Line smoke>• You can't afford to be here. They know it. You know it.</Line>
        </Section>

        <Divider />

        <Line smoke small>
          Once this was woodland and villas. The Incident ravaged it into an iron horizon.
          Now crystal and neon overlook G0 and the piss-poor city below. The money lives here.
          Everyone else just serves it.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      "TG Labs [Ad]": {
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
    },
  },
};

export default CENTRAL_DISTRICT;
