import blueprintImage from '../../../images/blueprints/lucky_flight_basement.png';

import {
  Line,
  Section,
  Box,
  Divider,
  ListItem,
  Warning,
  KeyValue,
} from "../TerminalComponents";

export default function LuckyFlightBasement() {
  return (
    <Box color="neon">
      <Section title="LUCKY FLIGHT CASINO - BASEMENT BLUEPRINT" center>
        <Line red xsmall bottom pulse>CLASSIFIED // SECURITY CLEARANCE 3</Line>
      </Section>

      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: "0.5rem"
      }}>
        <Line neon small>Basement Layout and Intel</Line>
        <div style={{ marginTop: "1rem", width: "100%" }}>
          <img
            src={blueprintImage}
            alt="Lucky Flight Casino Basement"
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
        <ListItem>Security operations centered on this level</ListItem>
        <ListItem>Maintenance access to critical infrastructure</ListItem>
        <ListItem>Alternative entrance via canal pier</ListItem>
        <ListItem>Structural hazards present in maintenance areas</ListItem>

        <Warning>SECONDARY: Missing person may be held on this floor</Warning>
        <Line yellow top bold>⚠ Power core presents significant risk if damaged</Line>
      </div>

      <Divider color="neon" />
      <div style={{ textAlign: "center" }}>
        <Line neon xsmall>
          FILE ID: LFC_BASEMENT_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
        </Line>
      </div>
    </Box>
  );
}
