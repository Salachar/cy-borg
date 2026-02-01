import {
  Line,
  Section,
  Divider,
} from '@terminal/TerminalComponents';
import {
  FacilityPortal,
} from "@terminal/retcomdevice"

import { DOC_JOY_CLINIC_COMMANDS } from './doc_joy_clinic';
import { CENTRAL_PLAZA_TOWER_COMMANDS } from './central_plaza_tower';
import { STEEL_PENTHOUSE_COMMANDS } from './steel_penthouse';

export const REAPER_REPO_COMMANDS = {
  "South Central District": {
    content: (
      <FacilityPortal
        companyName="SOUTH CENTRAL"
        facilityId="DISTRICT ACCESS"
        tagline="Where the money lives and the chrome shines"
        location="Central District, Southern Sector"
        owner="Central District Municipal Authority"
        function="Mixed-Use District: Residential, Corporate, Entertainment"
        personnel="High-net-worth residents, corporate executives, killmatch celebrities"
        networkStatus="PUBLIC_ACCESS (Multiple networks available)"
        securityLevel="HIGH"
        warnings={[
          "Premium security - SecCorps patrol constantly",
          "Crimes here get attention - expect heavy response",
          "Wealth disparity extreme - act like you belong"
        ]}
        theme="corporate"
      >
        <Divider />
        <Section title="AVAILABLE NETWORKS:">
          <Line neon>• Doc Joy's Clinic (Svärta District - Street level)</Line>
          <Line neon>• Central Plaza Tower Block 7 (Luxury residential high-rise)</Line>
          <Line neon>• Steel Jackhammer's Penthouse (Unit 4201 - Floor 42)</Line>
        </Section>
        <Divider />
        <Line smoke small>Accessing networks in order of street level to penthouse level...</Line>
      </FacilityPortal>
    ),
    related_commands: {
      ...DOC_JOY_CLINIC_COMMANDS,
      ...CENTRAL_PLAZA_TOWER_COMMANDS,
      ...STEEL_PENTHOUSE_COMMANDS,
    },
  },
}

export default REAPER_REPO_COMMANDS;
