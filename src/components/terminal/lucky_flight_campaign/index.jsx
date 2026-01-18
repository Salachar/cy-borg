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
          <Box color="cyan">
            <Line cyan bold>[MISSION - CHARLIE SAND]</Line>
            <Divider />
            <Section title="PRIMARY:">
              <Line red>Destroy debt records</Line>
              <Line smoke>Records are stored in an offline database</Line>
              <Line smoke>Likely located on/near the 2nd Floor tech room</Line>
            </Section>
            <Divider />
            <Section title="SECONDARY:">
              <Line yellow>Find Batu</Line>
              <Line cyan>Bonus: If rescued alive</Line>
              <Line yellow>Permanently close the casino</Line>
              <Line smoke>Likely located in the basement security room</Line>
            </Section>
            <Divider />
            <Section title="PAYMENT:">
              <Line neon>Decommissioned patrol car</Line>
              <Line cyan>+ Bonus for Batu</Line>
            </Section>
            <Divider />
            <Line red>Keep it QUIET. NO mass murder.</Line>
          </Box>
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
