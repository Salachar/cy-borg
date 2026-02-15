import { Line, Section, Divider } from '@terminal/TerminalComponents';
import { PublicPortal, FacilityPortal } from '@terminal/retcomdevice';

export const IDOL_COFFINS_HOTEL = {
  "Idol Coffins Pop-Up Hotel": {
    content: (
      <PublicPortal
        name="IDOL COFFINS"
        tagline="Sleep like a rock star. Wake up like a legend."
        network="IDOL_GUEST_WIFI"
        signalStrength="strong"
        status="NOW BOOKING"
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
  },
};

export const ROYAL_WEST_WAREHOUSE = {
  "Royal West Shipping Warehouse": {
    password: {
      difficulty: 'corporate',
      pw: 'royalwestisthebest',
      decoyLetters: "z,p,u,x",
    },
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
  },
};

export const PORTS_BIGMOSSE_ADDITIONAL_LOCATIONS = {
  ...IDOL_COFFINS_HOTEL,
  ...ROYAL_WEST_WAREHOUSE,
};

export default PORTS_BIGMOSSE_ADDITIONAL_LOCATIONS;
