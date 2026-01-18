import {
  Line,
  Box,
  Section,
  Divider,
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
      pw: "campaign",
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
            title="Operation Lucky Strike"
            issuer="Charlie Sand"
            classification="CLASSIFIED"
            primary={[
              {
                text: "Destroy debt records",
                note: "Records stored in offline database - somewhere above the 1st floor.",
                priority: "critical",
              },
            ]}
            secondary={[
              {
                text: "Find Batu",
                note: "Bonus payment if rescued alive",
                priority: "high",
              },
              {
                text: "Permanently close the casino",
                note: "Secondary priority - after primary objective complete",
                priority: "normal",
              },
            ]}
            payment={[
              "Decommissioned patrol car (fully functional)",
              "Bonus: +500¤ if Batu rescued alive",
              "Neighborhood goodwill (priceless)",
            ]}
            warnings={[
              "Keep it QUIET. NO mass murder.",
              "SecOps has casino on watchlist - heavy response if alerted",
              "Casino employees are not the enemy - avoid unnecessary casualties",
            ]}
            footer="Remember: We're doing this for the neighborhood, some of them have to work there."
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
