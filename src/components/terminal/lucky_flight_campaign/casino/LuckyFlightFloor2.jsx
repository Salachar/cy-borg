import blueprintImage from '../../../../images/blueprints/lucky_flight_floor_2.png';

import {
  Line,
  Section,
  Box,
  Divider,
} from "../../TerminalComponents";

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
      <Divider color="neon" />
      <div style={{ textAlign: "center" }}>
        <Line neon xsmall>
          FILE ID: LFC_FLOOR_02_V1.2 | LAST UPDATED: 20X2.08.14 | AUTHOR: [REDACTED]
        </Line>
      </div>
    </Box>
  );
}
