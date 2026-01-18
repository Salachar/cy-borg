import {
  Line,
} from '../TerminalComponents';

import { BODEGA_COMMANDS } from './bodega';
import { STONE_EELS_COMMANDS } from './stone_eels';
import { LUCKY_FLIGHT_CASINO } from './casino';
import { NEIGHBORHOOD_COMMANDS } from './neighborhood';
import { FUN_COMMANDS } from './fun';
import { WAREHOUSE_COMMANDS } from './warehouse';

import Briefing from '../Briefing';

export const LUCKY_FLIGHT_TAKEDOWN_COMMANDS = {
  "Local Access Points": {
    password: {
      pw: "luckyflight",
    },
    content: (
      <>
        <Line yellow large bold>Welcome to the Lucky Flight Takedown campaign</Line>
      </>
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
    },
  },
}

export default LUCKY_FLIGHT_TAKEDOWN_COMMANDS;
