import THE_55_ALLIANSEN_ARMS_COMMANDS from "./the_55_alliansen_arms";
import THE_55_CAPSULE_CLOSETS_COMMANDS from "./the_55_capsule_closets";
import THE_55_CORP_QUAD_COMMANDS from "./the_55_core_quad";
import THE_55_GREEN_ZONE_COMMANDS from "./the_55_green_zone";
import THE_55_KAYTELL_MANUFACTURING_COMMANDS from "./the_55_kaytell";
import THE_55_LOST_ZONE_COMMANDS from "./the_55_lost_zone";
import THE_55_LOWER_LEVELS_COMMANDS from "./the_55_lower_levels";
import THE_55_MULTIMART_COMMANDS from "./the_55_multimart";
import THE_55_REC_COMMANDS from "./the_55_rec";
import THE_55_ROOFLINE_COMMANDS from "./the_55_roofline"
import THE_55_SPECTRAL_LUXVITAE_COMMANDS from "./the_55_spectral_luxvitae";
import THE_55_STACK_COMMAND_COMMANDS from "./the_55_stack_command";

import {
  Line,
  Section,
} from '@terminal/TerminalComponents';

export const THE_55_COMMANDS = {
  "The 55": {
    content: (
      <Section>
        <Line yellow large bold>Welcome to The 55</Line>
      </Section>
    ),
    related_commands: {
      ...THE_55_ALLIANSEN_ARMS_COMMANDS,
      ...THE_55_CAPSULE_CLOSETS_COMMANDS,
      ...THE_55_CORP_QUAD_COMMANDS,
      ...THE_55_GREEN_ZONE_COMMANDS,
      ...THE_55_KAYTELL_MANUFACTURING_COMMANDS,
      ...THE_55_LOST_ZONE_COMMANDS,
      ...THE_55_LOWER_LEVELS_COMMANDS,
      ...THE_55_MULTIMART_COMMANDS,
      ...THE_55_REC_COMMANDS,
      ...THE_55_ROOFLINE_COMMANDS,
      ...THE_55_SPECTRAL_LUXVITAE_COMMANDS,
      ...THE_55_STACK_COMMAND_COMMANDS,
    },
  },
}

export default THE_55_COMMANDS;
