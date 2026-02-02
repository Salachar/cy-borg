import { Line, Section, Divider } from '@terminal/TerminalComponents';
import { PublicPortal, FacilityPortal } from '@terminal/retcomdevice';

// ============================================================================
// IDOL COFFINS POP-UP HOTEL
// ============================================================================

export const IDOL_COFFINS_HOTEL = {
  "Idol Coffins Pop-Up Hotel": {
    content: (
      <PublicPortal
        name="IDOL COFFINS"
        tagline="Sleep like a rock star. Wake up like a legend."
        network="IDOL_GUEST_WIFI"
        signalStrength="strong"
        status="✓ NOW BOOKING"
        statusColor="neon"
        nowPlaying="Neon Funeral - The Chrome Idols"
        notes={[
          "Theme changes monthly (currently: 'Chrome Idol' aesthetic)",
          "Located near hottest clubs (moves with trends)",
          "Instagram-ready interiors guaranteed",
          "Check-in: 15:00 | Check-out: 11:00"
        ]}
        theme="party"
      >
        <Divider />
        <Section title="ROOM RATES (Per Night):">
          <Line neon>• Coffin Pod (solo): 80¤</Line>
          <Line neon>• Double Coffin (couple): 120¤</Line>
          <Line neon>• VIP Suite ("Backstage Pass"): 250¤</Line>
          <Line pink>• Party Package (4 pods + lounge): 400¤</Line>
        </Section>
        <Divider />
        <Section title="AMENITIES:">
          <Line cyan>✦ Themed interiors (rock star aesthetic)</Line>
          <Line cyan>✦ Premium sound systems in every pod</Line>
          <Line cyan>✦ Complimentary energy drinks & stimulants</Line>
          <Line cyan>✦ Rooftop party deck (21:00-03:00)</Line>
          <Line cyan>✦ Photo-op stations throughout</Line>
        </Section>
        <Divider />
        <Line smoke small>
          "Pop-up locations change with the scene. This month: 3 blocks from Cave Club.
          Next month: Wherever the music takes us."
        </Line>
      </PublicPortal>
    ),
    related_commands: {
      // Individual pods, staff, VIP guests could go here
    },
  },
};

// ============================================================================
// ROYAL WEST SHIPPING WAREHOUSE
// ============================================================================

export const ROYAL_WEST_WAREHOUSE = {
  "Royal West Shipping Warehouse": {
    content: (
      <FacilityPortal
        companyName="ROYAL WEST SHIPPING CO."
        facilityId="PRIMARY PORTS FACILITY"
        tagline="The Largest. The Best Guarded. The Untouchable."
        location="Ports Industrial District - Waterfront"
        owner="Royal West Shipping Co."
        function="Import/Export Hub & Secure Storage"
        personnel="120+ security personnel, 80+ warehouse staff"
        networkStatus="CORPORATE PRIVATE NETWORK (Externally inaccessible)"
        securityLevel="MAXIMUM"
        warnings={[
          "⚠ EXTREME SECURITY - Armed guards patrol 24/7",
          "⚠ Drone surveillance active across entire perimeter",
          "⚠ Lethal force authorized for trespassers",
          "⚠ No external network access - air-gapped systems",
          "⚠ Nobody challenges Royal West - Nobody."
        ]}
        theme="secure"
      >
        <Divider />
        <Section title="FACILITY OVERVIEW:">
          <Line red bold>STATUS: IMPENETRABLE</Line>
          <Line cyan>• Size: 4 city blocks (largest in Ports)</Line>
          <Line cyan>• Security: Military-grade systems</Line>
          <Line cyan>• Warehouses: 12 buildings (each heavily fortified)</Line>
          <Line cyan>• Docks: 8 deep-water berths (24/7 operations)</Line>
          <Line cyan>• Staff: 200+ employees (all background-checked)</Line>
        </Section>
        <Divider />
        <Section title="SECURITY MEASURES:">
          <Line red>✗ Perimeter wall: 6 meters, reinforced concrete</Line>
          <Line red>✗ Guard towers: 8 positions (manned 24/7)</Line>
          <Line red>✗ Patrol teams: 20+ guards on rotation</Line>
          <Line red>✗ Drones: Autonomous surveillance grid</Line>
          <Line red>✗ Cameras: 200+ units (no blind spots)</Line>
          <Line red>✗ Access control: Biometric + retinal scan</Line>
          <Line red>✗ Response time: ~30 seconds to any breach</Line>
          <Line red>✗ Backup: Private military contractors on standby</Line>
        </Section>
        <Divider />
        <Section title="REPUTATION:">
          <Line neon bold>"Nobody dares challenge them."</Line>
          <Line yellow>• Last attempted theft: 6 years ago (3 dead, 2 imprisoned)</Line>
          <Line yellow>• Gang respect: All factions avoid this facility</Line>
          <Line yellow>• SecCorps deference: Even UCS stays clear</Line>
          <Line yellow>• Employee loyalty: Highest pay in district</Line>
        </Section>
        <Divider />
        <Line smoke small>
          Royal West Shipping has the largest and most well-guarded warehouses in Ports.
          Their security budget exceeds most gang's entire operations. Smart people don't
          even look at this place too long.
        </Line>
      </FacilityPortal>
    ),
    related_commands: {
      // This would be a major heist target - empty for now since it's "untouchable"
      // Could add: Guard schedules, shipping manifests, dock access, etc. for ambitious players
    },
  },
};

// ============================================================================
// VIRID VIPERS HEADQUARTERS
// ============================================================================

export const VIRID_VIPERS_HQ = {
  "Virid Vipers HQ": {
    content: (
      <FacilityPortal
        companyName="VIRID VIPERS"
        facilityId="GANG TERRITORY - BIGMOSSE"
        tagline="Drug trade kingpins. Don't fuck with the product."
        location="Bigmosse District - Warehouse complex"
        owner="Virid Vipers (Gang)"
        function="Drug trafficking, distribution, enforcement"
        personnel="50+ gang members, unknown associates"
        networkStatus="GANG NETWORK (Encrypted, hostile)"
        securityLevel="HIGH"
        warnings={[
          "⚠ GANG TERRITORY - Unauthorized entry is suicide",
          "⚠ Armed gang members patrol constantly",
          "⚠ Active gang war with Heirs of Kergoz",
          "⚠ Drug operations - expect extreme violence",
          "⚠ SecCorps won't respond here (bribed or scared)",
        ]}
        theme="industrial"
      >
        <Divider />
        <Section title="GANG OVERVIEW:">
          <Line neon bold>VIRID VIPERS - Major Players in Cy Drug Trade</Line>
          <Line cyan>• Territory: Bigmosse (warehouse district)</Line>
          <Line cyan>• Operations: Drug manufacturing, distribution, money laundering</Line>
          <Line cyan>• Strength: 50+ core members, 100+ associates</Line>
          <Line cyan>• Enemies: Heirs of Kergoz (long, bloody gang war)</Line>
          <Line cyan>• Reputation: Ruthless, professional, profit-driven</Line>
        </Section>
        <Divider />
        <Section title="HEADQUARTERS SECURITY:">
          <Line yellow>• Armed guards: 10-15 at HQ at all times</Line>
          <Line yellow>• Surveillance: Cameras, lookouts on rooftops</Line>
          <Line yellow>• Fortified: Reinforced doors, barred windows</Line>
          <Line yellow>• Escape routes: Multiple exits, safe houses nearby</Line>
          <Line yellow>• Response: Full gang mobilizes within minutes</Line>
        </Section>
        <Divider />
        <Section title="OPERATIONS:">
          <Line neon>Drug types: Stims, hallucinogens, combat enhancers, synth-opioids</Line>
          <Line neon>Distribution: Ports, Slums, some Inbetweens territories</Line>
          <Line neon>Revenue: Estimated 100k¤+ monthly</Line>
          <Line red>Violence level: EXTREME - Body count in dozens annually</Line>
        </Section>
        <Divider />
        <Section title="GANG WAR STATUS:">
          <Line red bold>ACTIVE CONFLICT with Heirs of Kergoz</Line>
          <Line yellow>• Duration: Years-long bloody war</Line>
          <Line yellow>• Cause: Territory disputes, ideological differences</Line>
          <Line yellow>• Casualties: Makes miserable life worse in Bigmosse</Line>
          <Line yellow>• Civilians: Caught in crossfire regularly</Line>
        </Section>
        <Divider />
        <Line smoke small>
          The Virid Vipers are professional criminals. They don't mess around. Their HQ is
          a fortress because they have enemies everywhere. Approach at your own risk.
        </Line>
      </FacilityPortal>
    ),
    related_commands: {
      // Could add: Gang members, drug inventory, safe houses, shipment schedules
    },
  },
};

// ============================================================================
// THE SALMON DOOR RESTAURANT
// ============================================================================

export const SALMON_DOOR_RESTAURANT = {
  "The Salmon Door": {
    content: (
      <PublicPortal
        name="THE SALMON DOOR"
        tagline="If you have to ask, you can't afford it."
        network="[NO PUBLIC NETWORK DETECTED]"
        signalStrength="weak"
        status="✦ BY INVITATION ONLY"
        statusColor="red"
        notes={[
          "Location: Unknown (rumored Ports district)",
          "Guarded by two ultra-chromed giants in brown tailcoats",
          "Reservations: Invitation only, no exceptions",
          "Even the Guide can't get a table",
          "Salmon-painted door (unmarked building)"
        ]}
        theme="fancy"
      >
        <Divider />
        <Section title="REPUTATION:">
          <Line neon bold>The most exclusive restaurant in Cy</Line>
          <Line cyan>• Clientele: Ultra-wealthy, power brokers, crime lords</Line>
          <Line cyan>• Security: Two ultra-chromed bodyguards (never leave door)</Line>
          <Line cyan>• Privacy: Absolute - no recording devices allowed</Line>
          <Line cyan>• Quality: Rumored to serve pre-Incident delicacies</Line>
          <Line yellow>• Mystery: Menu unknown, chef identity unknown</Line>
        </Section>
        <Divider />
        <Section title="ACCESS REQUIREMENTS:">
          <Line red>✗ Personal invitation from existing patron</Line>
          <Line red>✗ Background verification (unknown criteria)</Line>
          <Line red>✗ Deposit: Rumored 10,000¤+ per person</Line>
          <Line red>✗ Dress code: Enforced (turn away billionaires in casual wear)</Line>
          <Line red>✗ No weapons, no recording devices, no exceptions</Line>
        </Section>
        <Divider />
        <Section title="THE GUARDS:">
          <Line yellow bold>Two ultra-chromed giants in brown tailcoats</Line>
          <Line cyan>• Height: Over 2 meters each</Line>
          <Line cyan>• Augmentation: Military-grade combat cyberware</Line>
          <Line cyan>• Weapons: Concealed but certainly present</Line>
          <Line cyan>• Reputation: Have killed trespassers, no charges filed</Line>
          <Line cyan>• Loyalty: Unknown - paid extremely well</Line>
        </Section>
        <Divider />
        <Section title="RUMORS & SPECULATION:">
          <Line pink>• Serves real meat (pre-synthetic, illegally sourced)</Line>
          <Line pink>• Underground entrance via canal tunnels</Line>
          <Line pink>• Connected to organized crime money laundering</Line>
          <Line pink>• Chef is former corporate food scientist gone rogue</Line>
          <Line pink>• Deals brokered here worth more than small countries</Line>
        </Section>
        <Divider />
        <Line smoke small>
          Word is there's a salmon-painted door guarded by two ultra-chromed giants in
          brown tailcoats, allegedly leading to a restaurant so exclusive even the Guide
          can't get a table. Nobody knows what's inside. Nobody talks about what happens there.
        </Line>
      </PublicPortal>
    ),
    related_commands: {
      // This should stay mysterious - maybe just the guards as NPCs if players investigate
    },
  },
};

// ============================================================================
// EXPORT ALL LOCATIONS
// ============================================================================

export const PORTS_BIGMOSSE_ADDITIONAL_LOCATIONS = {
  ...IDOL_COFFINS_HOTEL,
  ...ROYAL_WEST_WAREHOUSE,
  ...VIRID_VIPERS_HQ,
  ...SALMON_DOOR_RESTAURANT,
};

export default PORTS_BIGMOSSE_ADDITIONAL_LOCATIONS;
