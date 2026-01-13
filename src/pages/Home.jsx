import {
  Page,
  PageHeader,
  PageBox,
  Callout,
} from "../components/PageComponents";

export default function Home() {
  return (
    <Page>
      <PageHeader
        title="CY_BORG"
        subtitle="Character Creator & Combat Assistant"
      />

      <PageBox title="Welcome to 20X3_">
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          The City of Cy writhes in its death throes. The world ended. Then it ended again.
          And again. It keeps ending, keeps reborn, always worse.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          You're a <span className="text-cy-cyan font-bold">punk</span> — infected,
          injected, infested with something that won't let you die quietly. The megacorps
          own everything. The cops are corpo thugs. The system is rigged.
        </p>
        <p className="text-lg text-red-400 font-bold">
          You are the enemy of all of them.
        </p>
      </PageBox>

      {/* Rule Zero */}
      <Callout title="[RULE #00]">
        <p className="text-gray-300 leading-relaxed">
          Player Characters <span className="text-red-400 font-bold">cannot</span> be loyal to
          or have sympathy for the corps, the cops, or the capitalist system. You might be
          forced to do missions for them. But make no mistake — <span className="text-cy-yellow font-bold">they are the enemy</span>.
        </p>
      </Callout>

      {/* The Megacorps */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-cy-yellow mb-6 uppercase">
          The Megacorps [The Enemy]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CorpCard
            name="ALLIANSEN INC."
            tagline="Real estate. Security. Your vote."
            detail="They own the prisons. They own the polls. At war with UCS."
          />
          <CorpCard
            name="SPECTRAL FT"
            tagline="Banking. Divine uploads."
            detail="The Neon Pillar promises eternal life in the cloud. Results questionable."
          />
          <CorpCard
            name="UCS"
            tagline="United Citadel Security"
            detail="Private military. Weapontech. Most of Cy's cops work for them."
          />
          <CorpCard
            name="ACGS"
            tagline="AI. Weapons. Insurance."
            detail="The Hermit — first 'true' AI — runs their vehicle grid."
          />
          <CorpCard
            name="KAYTELL MAKERS"
            tagline="Materials. Production. Flesh."
            detail="Rumor: CEO has run the corp for 150 years."
          />
          <CorpCard
            name="HEIRS OF KERGOZ"
            tagline="Nano worship. Death cult."
            detail="Not a corp. A horde. They serve the two-headed daemon."
          />
        </div>
      </section>

      {/* Core Concept */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-cy-yellow mb-6 uppercase">
          How to Play
        </h2>
        <div className="space-y-4">
          <ConceptBox
            title="Tests"
            description="Roll d20 ± Ability. Beat the DR (Difficulty Rating) to succeed."
          />
          <ConceptBox
            title="Hit Points"
            description="At 0 HP, roll d8 to see how bad it is. You might die. You might Cy-rage."
          />
          <ConceptBox
            title="Glitches"
            description="Reality glitches in your favor. Spend them to reroll, reduce damage, or guarantee max damage."
          />
          <ConceptBox
            title="Combat"
            description="Hit = test Strength/Presence/Agility DR12. Defense = test Agility DR12. Crits double damage."
          />
        </div>
      </section>

      {/* The City */}
      <section className="mb-12">
        <h2 className="text-3xl font-black text-cy-yellow mb-6 uppercase">
          The City of Cy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DistrictCard
            name="CENTRAL"
            vibe="Corporate towers. Neon. Coffin apartments."
          />
          <DistrictCard
            name="G0 [GROUND ZERO]"
            vibe="Where the rock fell. Quarantined. Lethal."
          />
          <DistrictCard
            name="THE PORTS"
            vibe="Black market. Hedonism. Gunfights drowned by bass."
          />
          <DistrictCard
            name="THE SLUMS"
            vibe="Gangs. Cults. Honest people with no hope."
          />
          <DistrictCard
            name="MOSSCROFT"
            vibe="Industrial hellscape. Toxic smog. Worker drones."
          />
          <DistrictCard
            name="THE HILLS"
            vibe="Gated luxury. Panopticon surveillance. Old money."
          />
        </div>
      </section>

      {/* Getting Started */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-cy-yellow/10 via-transparent to-cy-cyan/10 border-2 border-cy-yellow p-8">
          <h2 className="text-3xl font-black text-cy-yellow mb-6 uppercase">
            Ready to Create Your Punk?
          </h2>
          <div className="space-y-3 text-gray-300">
            <p className="text-lg">
              <span className="text-cy-cyan font-bold">→</span> Check the{" "}
              <span className="text-cy-cyan font-bold">Rules</span> tab for complete mechanics
            </p>
            <p className="text-lg">
              <span className="text-cy-yellow font-bold">→</span> Use the{" "}
              <span className="text-cy-yellow font-bold">Combat</span> tab during fights (step-by-step flow)
            </p>
            <p className="text-lg">
              <span className="text-cy-cyan font-bold">→</span> Hit{" "}
              <span className="text-cy-cyan font-bold">Classes</span> when you're ready to roll (it's also the character creator)
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}

// Component: Corp Card
function CorpCard({ name, tagline, detail }) {
  return (
    <div className="bg-gray-900/70 border border-gray-700 p-4 hover:border-cy-cyan/50 transition-all group">
      <h3 className="text-lg font-black text-cy-cyan mb-1 group-hover:text-cy-yellow transition-colors">
        {name}
      </h3>
      <p className="text-sm text-cy-yellow mb-2 font-bold">{tagline}</p>
      <p className="text-xs text-gray-400">{detail}</p>
    </div>
  );
}

// Component: Concept Box
function ConceptBox({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 p-4 hover:border-gray-700 transition-colors">
      {icon && (
        <div className="text-3xl">{icon}</div>
      )}
      <div>
        <h3 className="text-lg font-bold text-cy-cyan mb-1">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
}

// Component: District Card
function DistrictCard({ name, vibe }) {
  return (
    <div className="bg-black/50 border border-gray-800 p-4 hover:border-cy-cyan/50 transition-all">
      <h3 className="text-sm font-black text-cy-cyan mb-2 uppercase tracking-wide">
        {name}
      </h3>
      <p className="text-xs text-gray-400 italic">{vibe}</p>
    </div>
  );
}
