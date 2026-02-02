import {
  Line,
  Divider,
  Section,
} from '@terminal/TerminalComponents';
import {
  Briefing,
  DistrictPortal,
} from "@terminal/retcomdevice"

import { BODEGA_COMMANDS } from './bodega';
import { STONE_EELS_COMMANDS } from './caveclub';
import { LUCKY_FLIGHT_CASINO } from './casino';
import { NEIGHBORHOOD_COMMANDS } from './neighborhood';
import { FUN_COMMANDS } from './fun';
import { WAREHOUSE_COMMANDS } from './warehouse';
import { PORTS_BIGMOSSE_ADDITIONAL_LOCATIONS } from "./major_locations";

export const BIGMOSSE_PORTS_COMMANDS = {
  "Ports & Bigmosse": {
    content: (
      <DistrictPortal
        districtName="BIGMOSSE & PORTS"
        districtId="SLUMS-PORTS-BORDER"
        tagline="Where the desperate meet the decadent at the water's edge"
        region="Slums/Ports Border Zone"
        population="~120,000+ (estimated, many unregistered)"
        corporatePresence="MODERATE"
        crimeThreat="HIGH"
        securityResponse="DELAYED"
        atmosphere="The border bleeds. Slum desperation crashes into Port hedonism. Cargo containers become homes. Warehouses become clubs. The black market thrives where SecCorps fear to tread. Gangs, cults, and corpos vie for dominance in endless violent spirals."
        warnings={[
          "EXTREME DANGER - Gang war zone (Virid Vipers vs Heirs of Kergoz)",
          "SecCorps presence minimal - bribes required for response",
          "Drug trade highly active - avoid suspicious packages",
          "Cult activity (Heirs of Kergoz) - Nanomantic blood rites",
          "G0 contamination seepage from nearby quarantine",
          "Water supply tainted - nanomold outbreaks common",
          "Unauthorized weapons trade - expect armed civilians",
        ]}
        theme="slums"
      >
        <Divider />
        <Section title="MAJOR FACTIONS:">
          <Line red bold>• Virid Vipers - Drug trade kingpins</Line>
          <Line red bold>• Heirs of Kergoz - Cult with Barnyard Fields base</Line>
          <Line yellow>• Royal West Shipping - Legitimate (armed) warehouses</Line>
          <Line yellow>• Idol Coffins - Pop-up rock-star hotels</Line>
          <Line yellow>• Various street gangs and smaller factions</Line>
        </Section>
        <Divider />
        <Section title="BORDER ZONE CHARACTERISTICS:">
          <Line cyan>• Slums side: Festering scars from G0 Incident, rundown</Line>
          <Line cyan>• Ports side: Entertainment, black market, hedonism</Line>
          <Line cyan>• Canal access: Taxi boats, smuggling routes</Line>
          <Line cyan>• Mixed architecture: Cargo containers, warehouses, clubs</Line>
        </Section>
        <Divider />
        <Section title="SURVIVAL TIPS:">
          <Line yellow>• Pay protection money or have gang connections</Line>
          <Line yellow>• Don't ask questions about cargo or packages</Line>
          <Line yellow>• Avoid Barnyard Fields (cult territory)</Line>
          <Line yellow>• Water must be filtered - trust nothing from taps</Line>
          <Line yellow>• Night activity dangerous - travel in groups</Line>
        </Section>
        <Divider />
        <Line smoke small>
          Drugs and guns, clubs and fun - this is the entertainment district of Cy's true citizens. If you can't pay, you can't stay. If you can't fight, you won't survive.
        </Line>
      </DistrictPortal>
    ),
    related_commands: {
      "Charlie's Mission Brief": {
        content: (
          <Briefing
            title="Lucky Flight Takedown"
            issuer="Charlie Sand (via note)"
            classification="CONFIDENTIAL"
            primary={[
              {
                text: "Destroy debt records",
                note: "Records stored in offline database - likely 2nd floor tech room or vault",
                priority: "critical",
              },
            ]}
            secondary={[
              {
                text: "Find Batu (if possible)",
                note: "Bodega owner missing for 3 days - may be held in casino",
                priority: "high",
              },
              {
                text: "Permanently close the casino",
                note: "Make it impossible for them to reopen and continue preying on neighborhood",
                priority: "normal",
              },
            ]}
            intel={[
              "Casino has private power source somewhere",
              "Debt records are offline (can't be accessed remotely)",
              "Charlie will return to bodega in TWO DAYS to meet you",
            ]}
            payment={[
              "Decommissioned patrol car (functional, untraceable)",
              "Bonus if Batu rescued alive (Charlie didn't specify amount)",
              "Neighborhood's gratitude and protection",
            ]}
            warnings={[
              "Keep it QUIET. Mass murder complicates everything.",
              "SecOps monitors casino - heavy response if major alarm triggered",
              "Workers are victims too - avoid unnecessary casualties",
            ]}
            footer="Note: Charlie wasn't here when you arrived. Thugs spooked him. He left this briefing and will return in 2 days. You're on your own until then. — Good luck."
          />
        ),
      },
      ...BODEGA_COMMANDS,
      ...LUCKY_FLIGHT_CASINO,
      ...STONE_EELS_COMMANDS,
      ...NEIGHBORHOOD_COMMANDS,
      ...FUN_COMMANDS,
      ...WAREHOUSE_COMMANDS,
      ...PORTS_BIGMOSSE_ADDITIONAL_LOCATIONS,
    },
  },
}

export default BIGMOSSE_PORTS_COMMANDS;
