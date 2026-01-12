export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="mb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cy-cyan/5 via-cy-pink/5 to-cy-yellow/5 blur-3xl -z-10" />
        <h1 className="text-7xl font-black text-cy-cyan mb-3 tracking-tight uppercase glitch-text">
          CY_BORG
        </h1>
        <p className="text-2xl text-cy-pink font-bold mb-6">Character Creator & Combat Assistant</p>
        <div className="h-1 w-32 bg-gradient-to-r from-cy-cyan via-cy-pink to-cy-yellow" />
      </div>

      {/* Welcome to the End */}
      <section className="mb-12">
        <div className="bg-gradient-to-br from-gray-900/90 to-black border-2 border-cy-cyan/30 p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cy-pink/5 blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-cy-yellow mb-4 uppercase">
              Welcome to 20X3_
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              The City of Cy writhes in its death throes. The world ended. Then it ended again.
              And again. It keeps ending, keeps reborn, always worse.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-4">
              You're a <span className="text-cy-cyan font-bold">punk</span> — infected,
              injected, infested with something that won't let you die quietly. The megacorps
              own everything. The cops are corpo thugs. The system is rigged.
            </p>
            <p className="text-lg text-cy-pink font-bold">
              You are the enemy of all of them.
            </p>
          </div>
        </div>
      </section>

      {/* Rule Zero */}
      <section className="mb-12">
        <div className="bg-gradient-to-r from-cy-pink/20 via-red-900/20 to-cy-pink/20 border-l-4 border-cy-pink p-6">
          <p className="text-xl font-black text-cy-pink mb-2 uppercase tracking-wide">
            [RULE #00]
          </p>
          <p className="text-gray-300 leading-relaxed">
            Player Characters <span className="text-cy-pink font-bold">cannot</span> be loyal to
            or have sympathy for the corps, the cops, or the capitalist system. You might be
            forced to do missions for them. But make no mistake — <span className="text-cy-yellow font-bold">they are the enemy</span>.
          </p>
        </div>
      </section>

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
              <span className="text-cy-pink font-bold">→</span> Use the{" "}
              <span className="text-cy-pink font-bold">Combat</span> tab during fights (step-by-step flow)
            </p>
            <p className="text-lg">
              <span className="text-cy-yellow font-bold">→</span> Hit{" "}
              <span className="text-cy-yellow font-bold">Classes</span> when you're ready to roll (it's also the character creator)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component: Corp Card
function CorpCard({ name, tagline, detail }) {
  return (
    <div className="bg-gray-900/70 border border-gray-700 p-4 hover:border-cy-cyan/50 transition-all group">
      <h3 className="text-lg font-black text-cy-cyan mb-1 group-hover:text-cy-pink transition-colors">
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
    <div className="bg-black/50 border border-gray-800 p-4 hover:border-cy-pink/50 transition-all">
      <h3 className="text-sm font-black text-cy-pink mb-2 uppercase tracking-wide">
        {name}
      </h3>
      <p className="text-xs text-gray-400 italic">{vibe}</p>
    </div>
  );
}
