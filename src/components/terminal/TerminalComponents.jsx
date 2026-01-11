// Terminal UI Helper Components

const COLOR_MAP = {
  cyan: 'rgb(0, 255, 255)',
  smoke: 'rgb(133, 175, 231)',
  neon: 'rgb(0, 170, 40)',
  yellow: 'rgb(250, 204, 21)',
  pink: 'rgb(255, 0, 128)',
  red: 'rgb(239, 68, 68)',
  teal: 'rgb(79, 209, 197)',
}

// Text styling components
export const Line = ({
  className = "",
  styles = {},
  inline,
  cyan = false,
  smoke = false,
  neon = false,
  yellow = false,
  pink = false,
  red = false,
  teal = false,
  top = false,
  bottom = false,
  left = false,
  bold = false,
  xsmall = false,
  small = false,
  large = false,
  color = "",
  pulse,
  loading = false,
  children,
}) => {
  let appliedClassname = className;
  let appliedStyles = {...styles};

  if (inline) appliedStyles.display = "inline-block";

  if (color && COLOR_MAP[color]) {
    appliedStyles.color = COLOR_MAP[color];
  } else {
    if (cyan) appliedStyles.color = COLOR_MAP.cyan;
    if (smoke) appliedStyles.color = COLOR_MAP.smoke;
    if (neon)  appliedStyles.color = COLOR_MAP.neon;
    if (yellow)  appliedStyles.color = COLOR_MAP.yellow;
    if (pink)  appliedStyles.color = COLOR_MAP.pink;
    if (red) appliedStyles.color = COLOR_MAP.red;
    if (teal) appliedStyles.color = COLOR_MAP.teal;
  }

  if (top) appliedStyles.marginTop = "0.5rem";
  if (bottom) appliedStyles.marginBottom = "0.5rem";
  if (left) appliedStyles.marginLeft = "0.5rem";

  if (bold) appliedClassname += " font-bold";
  if (pulse) appliedClassname += " animate-pulse";
  if (xsmall) appliedClassname += " text-xs";
  if (small) appliedClassname += " text-sm";
  if (large) appliedClassname += " text-lg";

  return (
    <div className={appliedClassname} style={appliedStyles}>{children}{loading ? "..." : ""}</div>
  );
};

// Section components
export const Section = ({ title, center = false, children, color = "yellow" }) => {
  let appliedStyles = {
    marginTop: "0.5rem"
  };
  if (center) appliedStyles.textAlign = "center";
  return (
    <div style={appliedStyles}>
      <div style={{
        color: COLOR_MAP[color],
        fontWeight: "bold"
      }}>
        {title}
      </div>
      {children}
    </div>
  );
};

// Box/Border components
export const Box = ({ children, color = "cyan", className = "" }) => {
  return (
    <div
      className={className}
      style={{
        border: `2px solid ${COLOR_MAP[color]}`,
        padding: "1rem"
      }}
    >
      {children}
    </div>
  );
};

// Divider
export const Divider = ({ color = "cyan" }) => {
  return (
    <div style={{
      borderTop: `1px solid ${COLOR_MAP[color]}`,
      marginTop: "0.5rem",
      marginBottom: "0.5rem"
    }} />
  );
};

// List item component
export const ListItem = ({ children, indent = false }) => {
  return (
    <div style={{
      color: COLOR_MAP.neon,
      marginLeft: indent ? "1rem" : "0"
    }}>
      → {children}
    </div>
  );
};

// Warning/Alert component
export const Warning = ({ children }) => {
  return (
    <div style={{
      color: COLOR_MAP.red,
      fontWeight: "bold",
      marginTop: "0.5rem"
    }}>
      ⚠ {children}
    </div>
  );
};

// Header component
export const Header = ({ children, color = "cyan" }) => {
  return (
    <div style={{
      color: COLOR_MAP[color],
      fontWeight: "bold"
    }}>
      {children}
    </div>
  );
};

// Status badge
export const Status = ({ children, type = "success" }) => {
  const typeColorMap = {
    success: COLOR_MAP.neon,
    warning: COLOR_MAP.yellow,
    error: COLOR_MAP.red,
    info: COLOR_MAP.cyan,
  };

  return (
    <span style={{
      color: typeColorMap[type],
      fontWeight: "bold"
    }}>
      [{children}]
    </span>
  );
};

// Clickable command link (for use in terminal output)
export const CommandLink = ({ command, children, onClick }) => {
  return (
    <span
      style={{
        color: COLOR_MAP.cyan,
        cursor: "pointer",
        textDecoration: "none"
      }}
      onMouseEnter={(e) => e.target.style.textDecoration = "underline"}
      onMouseLeave={(e) => e.target.style.textDecoration = "none"}
      onClick={() => onClick && onClick(command)}
    >
      {children || command}
    </span>
  );
};

// Data table component
export const DataTable = ({ data }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {data.map((row, index) => (
        <div key={index} style={{ display: "flex", gap: "1rem" }}>
          <span style={{ color: COLOR_MAP.yellow, minWidth: "150px" }}>{row.label}:</span>
          <span style={{ color: COLOR_MAP.neon }}>{row.value}</span>
        </div>
      ))}
    </div>
  );
};

// Code block
export const CodeBlock = ({ children }) => {
  return (
    <div style={{
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      border: `1px solid ${COLOR_MAP.neon}`,
      padding: "0.5rem",
      marginTop: "0.5rem",
      fontFamily: "monospace",
      fontSize: "0.875rem"
    }}>
      <pre style={{
        color: COLOR_MAP.neon,
        whiteSpace: "pre-wrap",
        margin: 0
      }}>
        {children}
      </pre>
    </div>
  );
};

// Progress bar
export const ProgressBar = ({ percent = 100, label = "" }) => {
  const filled = Math.round(percent / 4);
  const empty = 25 - filled;

  return (
    <div style={{ color: COLOR_MAP.neon }}>
      {label && <span style={{ color: COLOR_MAP.yellow }}>{label}: </span>}
      [{'█'.repeat(filled)}{'░'.repeat(empty)}] {percent}%
    </div>
  );
};

// Stat display (for character/enemy stats)
export const StatBlock = ({ stats }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {Object.entries(stats).map(([key, value]) => (
        <div key={key} style={{ display: "flex", gap: "0.5rem" }}>
          <span style={{
            color: COLOR_MAP.yellow,
            textTransform: "uppercase",
            minWidth: "100px"
          }}>
            {key}:
          </span>
          <span style={{
            color: COLOR_MAP.neon,
            fontWeight: "bold"
          }}>
            {value}
          </span>
        </div>
      ))}
    </div>
  );
};

// Key-value pair display
export const KeyValue = ({ label, value, valueColor = "neon" }) => {
  return (
    <div style={{ display: "flex", gap: "0.5rem" }}>
      <span style={{ color: COLOR_MAP.yellow }}>{label}:</span>
      <span style={{ color: COLOR_MAP[valueColor] }}>{value}</span>
    </div>
  );
};

// Boot messages helper - needs to be a function that receives setInput
export const getBootMessages = (setInput) => [{
  content: (
    <Line smoke>BOOTING CY_NET TERMINAL...</Line>
  ),
}, {
  content: (
    <Line pink>Client: {navigator.userAgent}</Line>
  ),
}, {
  content: (
    <Line cyan>Platform: {navigator.platform || "#"} | {navigator.oscpu || "#"} | {navigator.vendor || "#"}</Line>
  ),
}, {
  content: (
    <ProgressBar />
  ),
}, {
  content: (
    <Line smoke>INITIALIZING SECURE CONNECTION...</Line>
  ),
}, {
  content: (
    <Line cyan>CONNECTION ESTABLISHED <Line red inline>[UNSECURED]</Line></Line>
  ),
}, {
  content: (
    <Line smoke>
      <CommandLink command="help" onClick={(cmd) => setInput(cmd)}>help</CommandLink> - Basic usage information.
    </Line>
  ),
}, {
  content: (
    <Line smoke>
      <CommandLink command="list" onClick={(cmd) => setInput(cmd)}>list</CommandLink> - See all access points.
    </Line>
  ),
}];
