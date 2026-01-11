import blueprintImage from '../../../images/blueprints/lucky_flight_floor_2.png';

import {
  Line,
  Section,
  Box,
  Divider,
  ListItem,
  Warning,
} from "../TerminalComponents";

export default function LuckyFlightFloor2() {
  return (
    <Box color="neon">
      <Section title="LUCKY FLIGHT CASINO - FLOOR 2 BLUEPRINT" center>
        <Line red xsmall bottom pulse>CLASSIFIED // SECURITY CLEARANCE 3</Line>
      </Section>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
        <Line neon small>Floor 2 Layout and Intel</Line>
        <div style={{ marginTop: "1rem", width: "100%" }}>
          <img
            src={blueprintImage}
            alt="Lucky Flight Casino Floor 2"
            style={{
              width: "100%",
              imageRendering: 'crisp-edges',
              boxShadow: '0 0 20px rgba(0, 255, 65, 0.3)',
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <Line cyan bold bottom>INTEL NOTES:</Line>
        <ListItem>VIP section restricted. Enhanced security</ListItem>
        <ListItem>Office space houses administrative functions</ListItem>
        <ListItem>Tech room adjacent to secure vault area</ListItem>

        <Warning>TARGET: Offline database located on this floor</Warning>
        <Line yellow top bold>⚠ Limited camera coverage in certain areas</Line>
      </div>

      <Divider color="neon" />
      <div style={{ textAlign: "center" }}>
        <Line neon xsmall>
          FILE ID: LFC_FLOOR_02_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
        </Line>
      </div>
    </Box>
  );
}
