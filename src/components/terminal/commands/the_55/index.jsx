import THE_55_LOWER_LEVELS_COMMANDS from "./the_55_01_lower_levels";
import THE_55_CAPSULE_CLOSETS_COMMANDS from "./the_55_02_capsule_closets";
import THE_55_REC_COMMANDS from "./the_55_03_rec";
import THE_55_ALLIANSEN_ARMS_COMMANDS from "./the_55_04_alliansen_arms";
import THE_55_MULTIMART_COMMANDS from "./the_55_05_multimart";
import THE_55_LOST_ZONE_COMMANDS from "./the_55_06_lost_zone";
import THE_55_KAYTELL_MANUFACTURING_COMMANDS from "./the_55_07_kaytell";
import THE_55_GREEN_ZONE_COMMANDS from "./the_55_08_green_zone";
import THE_55_STACK_COMMAND_COMMANDS from "./the_55_09_stack_command";
import THE_55_CORP_QUAD_COMMANDS from "./the_55_10_corp_quad";
import THE_55_SPECTRAL_LUXVITAE_COMMANDS from "./the_55_11_spectral_luxvitae";
import THE_55_ROOFLINE_COMMANDS from "./the_55_12_roofline"

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
      ...THE_55_LOWER_LEVELS_COMMANDS,
      ...THE_55_CAPSULE_CLOSETS_COMMANDS,
      ...THE_55_REC_COMMANDS,
      ...THE_55_ALLIANSEN_ARMS_COMMANDS,
      ...THE_55_MULTIMART_COMMANDS,
      ...THE_55_LOST_ZONE_COMMANDS,
      ...THE_55_KAYTELL_MANUFACTURING_COMMANDS,
      ...THE_55_GREEN_ZONE_COMMANDS,
      ...THE_55_STACK_COMMAND_COMMANDS,
      ...THE_55_CORP_QUAD_COMMANDS,
      ...THE_55_SPECTRAL_LUXVITAE_COMMANDS,
      ...THE_55_ROOFLINE_COMMANDS,
    },
  },
}

export default THE_55_COMMANDS;
