import {
  Line,
} from '../TerminalComponents';

import { BODEGA_COMMANDS } from './bodega';
import { STONE_EELS_COMMANDS } from './stone_eels';
import { LUCKY_FLIGHT_CASINO } from './casino';
import { NEIGHBORHOOD_COMMANDS } from './neighborhood';

export const LUCKY_FLIGHT_TAKEDOWN = {
  "Local Access Points": {
    password: {
      pw: "campaign",
    },
    content: (
      <>
        <Line yellow large bold>LET'S FUCKING GO</Line>
      </>
    ),
    related_commands: {
      ...BODEGA_COMMANDS,
      ...NEIGHBORHOOD_COMMANDS,
      ...LUCKY_FLIGHT_CASINO,
      ...STONE_EELS_COMMANDS,
    },
  },
}
