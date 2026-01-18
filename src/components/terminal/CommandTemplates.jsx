// TERMINAL_COMPONENT_LIBRARY.jsx
// Master reference for building new locations quickly
// Copy/paste and customize as needed

import {
  Line,
  Box,
  Section,
  ListItem,
  Warning,
  Divider,
  KeyValue,
  DataTable,
} from '../TerminalComponents';

// ============================================================================
// PUBLIC-FACING COMMANDS (What customers/visitors see)
// ============================================================================

export const PUBLIC_TEMPLATES = {

  // HOURS & LOCATION
  hours_location: {
    content: (
      <>
        <Line smoke large bold>[HOURS & LOCATION]</Line>
        <Divider />
        <Section title="OPERATING HOURS:">
          <Line neon>Monday-Friday: 00:00 - 00:00</Line>
          <Line neon>Saturday: 00:00 - 00:00</Line>
          <Line neon>Sunday: Closed / Open 00:00 - 00:00</Line>
          <Line yellow>Peak hours: 00:00 - 00:00</Line>
        </Section>
        <Divider />
        <Section title="LOCATION:">
          <Line cyan>District name, specific area</Line>
          <Line cyan>Street address or landmark</Line>
          <Line cyan>Nearby reference points</Line>
          <Line yellow>Access notes (hidden entrance, public transit, etc.)</Line>
        </Section>
        <Divider />
        <Section title="PARKING / ACCESS:">
          <Line neon>Parking availability</Line>
          <Line neon>Entry requirements</Line>
          <Line neon>Special instructions</Line>
        </Section>
      </>
    ),
  },

  // MENU / DEALS / SPECIALS
  menu_template: {
    content: (
      <>
        <Line yellow large bold>[TODAY'S MENU / DEALS]</Line>
        <Line cyan>Updated: [timestamp or frequency]</Line>
        <Divider />
        <Section title="SPECIALS:">
          <KeyValue label="Item 1" value="00¤" />
          <KeyValue label="Item 2" value="00¤" />
          <KeyValue label="Item 3" value="00¤" />
        </Section>
        <Divider />
        <Section title="REGULAR ITEMS:">
          <Line neon>• Category 1:</Line>
          <ListItem indent>Item A - 00¤</ListItem>
          <ListItem indent>Item B - 00¤</ListItem>
          <Line neon>• Category 2:</Line>
          <ListItem indent>Item C - 00¤</ListItem>
          <ListItem indent>Item D - 00¤</ListItem>
        </Section>
        <Divider />
        <Line pink>"Tagline or special note from owner"</Line>
      </>
    ),
  },

  // ENTERTAINMENT / EVENTS
  entertainment_schedule: {
    content: (
      <>
        <Line yellow large bold>[TONIGHT'S ENTERTAINMENT]</Line>
        <Line cyan>Updated: [frequency]</Line>
        <Divider />
        <Section title="LIVE PERFORMANCES:">
          <Line neon>00:00 → Act Name (genre/style)</Line>
          <Line neon>00:00 → Act Name (genre/style)</Line>
          <Line neon>00:00 → Act Name (genre/style)</Line>
        </Section>
        <Divider />
        <Section title="REGULAR FEATURES:">
          <Line yellow>→ Feature 1 (description)</Line>
          <Line yellow>→ Feature 2 (description)</Line>
        </Section>
        <Divider />
        <Section title="COVER & ENTRY:">
          <Line cyan>Entry: 00¤ (includes bonus)</Line>
          <Line cyan>VIP: By invitation / 00¤</Line>
          <Line yellow>Special rules or discounts</Line>
        </Section>
      </>
    ),
  },

  // SERVICES OFFERED
  services_list: {
    content: (
      <>
        <Line yellow large bold>[SERVICES AVAILABLE]</Line>
        <Divider />
        <Section title="PRIMARY SERVICES:">
          <Line neon>✓ Service 1 - Description</Line>
          <Line neon>✓ Service 2 - Description</Line>
          <Line neon>✓ Service 3 - Description</Line>
        </Section>
        <Divider />
        <Section title="ADDITIONAL OFFERINGS:">
          <ListItem>Extra service A</ListItem>
          <ListItem>Extra service B</ListItem>
          <ListItem>Extra service C</ListItem>
        </Section>
        <Divider />
        <Section title="PRICING:">
          <KeyValue label="Service 1" value="00¤" />
          <KeyValue label="Service 2" value="00¤" />
          <KeyValue label="Service 3" value="Negotiable / Free" />
        </Section>
      </>
    ),
  },

  // COMMUNITY BOARD / BULLETIN
  community_board: {
    content: (
      <>
        <Line smoke large bold>[COMMUNITY BOARD]</Line>
        <Line neon>Physical postings scanned - recent updates</Line>
        <Divider />
        <Section title="RECENT POSTS:">
          <Line pink>→ "Post content 1"</Line>
          <Line pink>→ "Post content 2"</Line>
          <Line pink>→ "Post content 3"</Line>
          <Line pink>→ "Post content 4"</Line>
        </Section>
        <Divider />
        <Section title="SERVICES / TRADES:">
          <ListItem>Service advertisement 1</ListItem>
          <ListItem>Service advertisement 2</ListItem>
          <ListItem>Looking for / Selling item</ListItem>
        </Section>
        <Divider />
        <Line yellow>Community mood: [emotional temperature]</Line>
      </>
    ),
  },

  // PUBLIC INFO DISPLAY
  public_info_display: {
    content: (
      <>
        <Line smoke large bold>[PUBLIC INFORMATION]</Line>
        <Divider />
        <DataTable data={[
          { label: "Info Label 1", value: "Value 1" },
          { label: "Info Label 2", value: "Value 2" },
          { label: "Info Label 3", value: "Value 3" },
        ]} />
        <Divider />
        <Section title="IMPORTANT NOTICES:">
          <Line yellow>→ Notice 1</Line>
          <Line yellow>→ Notice 2</Line>
          <Line red>⚠ Warning or critical info</Line>
        </Section>
      </>
    ),
  },
};

// ============================================================================
// BACKEND SYSTEMS (Internal access, password protected)
// ============================================================================

export const BACKEND_TEMPLATES = {

  // INTERNAL NETWORK ACCESS (Parent for backend systems)
  internal_network_access: {
    password: {
      pw: "password",
      hint: "Hint for password",
      hintStrength: 2,
    },
    content: (
      <>
        <Line smoke large bold>[INTERNAL SYSTEMS]</Line>
        <Line cyan>[EMPLOYEE ACCESS GRANTED]</Line>
        <Divider />
        <Section title="AVAILABLE SYSTEMS:">
          <Line neon>→ System category 1</Line>
          <Line neon>→ System category 2</Line>
          <Line neon>→ System category 3</Line>
        </Section>
        <Divider />
        <Line yellow>Internal network maintained by [who/what]</Line>
      </>
    ),
  },

  // FACILITY LAYOUT
  facility_layout: {
    password: {
      pw: "password",
      hint: "Hint for password",
      hintStrength: 2,
    },
    content: (
      <>
        <Line smoke large bold>[FACILITY LAYOUT]</Line>
        <Divider />
        <Section title="FLOOR 1 (Description):">
          <Line cyan>→ Area 1 (description, purpose)</Line>
          <Line cyan>→ Area 2 (description, purpose)</Line>
          <Line cyan>→ Area 3 (description, purpose)</Line>
          <KeyValue label="Capacity" value="Number of people" />
        </Section>
        <Divider />
        <Section title="FLOOR 2 (Description):">
          <Line yellow>→ Area 1 (description, purpose)</Line>
          <Line yellow>→ Area 2 (description, purpose)</Line>
          <KeyValue label="Access" value="Restricted / Public" />
        </Section>
        <Divider />
        <Section title="INFRASTRUCTURE:">
          <Line neon>Notable building features</Line>
          <Line neon>Emergency exits, special access points</Line>
          <Line neon>Structural or historical notes</Line>
        </Section>
      </>
    ),
  },

  // SECURITY SYSTEMS
  security_systems: {
    content: (
      <>
        <Line smoke large bold>[SECURITY SYSTEMS]</Line>
        <Divider />
        <Section title="SURVEILLANCE:">
          <Line cyan>Area 1: Coverage level (# cameras)</Line>
          <Line cyan>Area 2: Coverage level</Line>
          <Line yellow>Private Area: NO cameras (reason)</Line>
        </Section>
        <Divider />
        <Section title="ACCESS CONTROL:">
          <Line neon>Entry point 1: Control method</Line>
          <Line neon>Entry point 2: Control method</Line>
          <Line red>Emergency: Panic button / alarm location</Line>
        </Section>
        <Divider />
        <Section title="STAFF PRESENCE:">
          <Line neon>Number of security personnel</Line>
          <Line neon>Patrol routes or stations</Line>
          <Line yellow>Response protocols</Line>
        </Section>
      </>
    ),
  },

  // SECURITY FOOTAGE
  security_footage: {
    password: {
      pw: "password",
      hint: "Hint for password",
      hintStrength: 2,
    },
    content: (
      <>
        <Line smoke large bold>[SECURITY FOOTAGE ARCHIVE]</Line>
        <Line cyan>[ACCESSING LAST 72 HOURS...]</Line>
        <Divider />
        <Section title="X DAYS AGO (Timeline):">
          <Line neon>00:00 → Event description</Line>
          <Line neon>00:00 → Event description</Line>
          <Line yellow>00:00 → Notable event</Line>
          <Line red>00:00 → Critical event / FEED LOST</Line>
        </Section>
        <Divider />
        <Section title="YESTERDAY:">
          <Line neon>00:00 → Event description</Line>
          <Line red>00:00 → Important event</Line>
        </Section>
        <Divider />
        <Line yellow>Note: Camera limitations or blind spots</Line>
      </>
    ),
  },

  // PERSONNEL DATABASE (Parent)
  personnel_database: {
    content: (
      <>
        <Line smoke large bold>[PERSONNEL RECORDS]</Line>
        <Line cyan>Active employees: [number]</Line>
        <Divider />
        <Section title="EMPLOYEE ROSTER:">
          <Line neon>→ Name (Position)</Line>
          <Line neon>→ Name (Position)</Line>
          <Line neon>→ Name (Position)</Line>
        </Section>
      </>
    ),
  },

  // PERSONNEL FILE (Individual)
  personnel_file: {
    password: {
      pw: "password",
      hint: "Hint for password",
      hintStrength: 2,
    },
    content: (
      <Box color="cyan">
        <Line cyan large bold>[EMPLOYEE FILE: NAME]</Line>
        <Divider color="cyan" />
        <DataTable data={[
          { label: "Full Name", value: "First Last" },
          { label: "Age", value: "00" },
          { label: "Position", value: "Job title" },
          { label: "Employment Start", value: "Month YYYY" },
          { label: "Emergency Contact", value: "Name (relation)" },
        ]} />
        <Divider color="cyan" />
        <Section title="EMPLOYMENT NOTES:">
          <Line neon>Performance history</Line>
          <Line neon>Special skills or certifications</Line>
          <Line neon>Access levels or responsibilities</Line>
        </Section>
        <Divider color="cyan" />
        <Section title="FINANCIAL DATA:">
          <KeyValue label="Salary/Income" value="000¤ per month" />
          <KeyValue label="Outstanding Debts" value="000¤" />
          <KeyValue label="Creditor" value="Who they owe" />
        </Section>
        <Divider color="cyan" />
        <Section title="RECENT ACTIVITY:">
          <Line yellow>X days ago → Activity description</Line>
          <Line yellow>X days ago → Activity description</Line>
          <Line neon>Yesterday → Recent action or status</Line>
        </Section>
        <Divider color="cyan" />
        <Section title="CONTACT INFORMATION:">
          <Line neon>RCD: email@address.cy</Line>
          <Line neon>Address: Location details</Line>
          <Line neon>Known associates: Names</Line>
        </Section>
      </Box>
    ),
  },

  // INVENTORY / STOCK
  inventory_system: {
    content: (
      <>
        <Line smoke large bold>[INVENTORY DATABASE]</Line>
        <Line yellow>Last updated: [timestamp]</Line>
        <Divider />
        <Section title="CURRENT STOCK STATUS:">
          <Line neon>Category 1: Status level</Line>
          <Line neon>Category 2: Status level</Line>
          <Line red>⚠ Notes on shortages or issues</Line>
        </Section>
        <Divider />
        <Section title="HIGH-VALUE ITEMS:">
          <Line cyan>Item 1: Quantity / Location</Line>
          <Line cyan>Item 2: Quantity / Location</Line>
          <Line cyan>Item 3: Quantity / Location</Line>
        </Section>
        <Divider />
        <Section title="EQUIPMENT STATUS:">
          <Line yellow>Equipment 1: Condition</Line>
          <Line yellow>Equipment 2: Condition</Line>
        </Section>
      </>
    ),
  },

  // FINANCIAL RECORDS
  financial_records: {
    password: {
      pw: "password",
      hint: "Hint for password",
      hintStrength: 3,
    },
    content: (
      <Box color="yellow">
        <Line yellow large bold>[FINANCIAL RECORDS]</Line>
        <Divider color="yellow" />
        <Section title="MONTHLY SUMMARY:">
          <KeyValue label="Revenue" value="0,000¤" />
          <KeyValue label="Expenses" value="0,000¤" />
          <KeyValue label="Net Profit" value="000¤" />
          <KeyValue label="Outstanding Debts" value="0,000¤" />
        </Section>
        <Divider color="yellow" />
        <Section title="MAJOR TRANSACTIONS (Last 30 days):">
          <Line neon>Date → Description: Amount¤</Line>
          <Line neon>Date → Description: Amount¤</Line>
          <Line yellow>Date → Notable transaction: Amount¤</Line>
        </Section>
        <Divider color="yellow" />
        <Section title="CREDITORS / LOANS:">
          <Line red>Creditor name: Amount owed, terms</Line>
          <Line red>Creditor name: Amount owed, terms</Line>
        </Section>
      </Box>
    ),
  },

  // INCIDENT REPORTS
  incident_reports: {
    content: (
      <>
        <Line smoke large bold>[INCIDENT LOG]</Line>
        <Line cyan>Last [timeframe]</Line>
        <Divider />
        <Section title="X DAYS AGO (00:00):">
          <Line yellow>Incident Type: Category</Line>
          <Line neon>Details: What happened</Line>
          <Line neon>Individuals involved: Names/descriptions</Line>
          <Line neon>Response: Actions taken</Line>
          <Line neon>Resolution: Outcome</Line>
          <Line red>Follow-up: Any ongoing concerns</Line>
        </Section>
        <Divider />
        <Section title="X DAYS AGO (00:00):">
          <Line yellow>Incident Type: Category</Line>
          <Line neon>Details: What happened</Line>
          <Line neon>Resolution: Outcome</Line>
        </Section>
      </>
    ),
  },

  // COMMUNICATIONS LOG
  communications_log: {
    content: (
      <>
        <Line smoke large bold>[COMMUNICATIONS LOG]</Line>
        <Line cyan>Recent messages and calls</Line>
        <Divider />
        <Section title="X DAYS AGO:">
          <Line neon>00:00 → From: Name</Line>
          <Line cyan>  Subject/Type: Message category</Line>
          <Line cyan>  Content: Brief summary or excerpt</Line>
        </Section>
        <Divider />
        <Section title="YESTERDAY:">
          <Line neon>00:00 → From: Name</Line>
          <Line cyan>  Subject/Type: Message category</Line>
          <Line cyan>  Content: Brief summary or excerpt</Line>
        </Section>
      </>
    ),
  },
};

// ============================================================================
// DEVICES & OBJECTS (Physical items in the world)
// ============================================================================

export const DEVICE_TEMPLATES = {


  // SMART TV / DISPLAY
  smart_tv: {
    content: (
      <>
        <Line smoke large bold>[SMART TV - MODEL]</Line>
        <Line cyan>Location: [room/area]</Line>
        <Divider />
        <DataTable data={[
          { label: "Status", value: "ON / STANDBY" },
          { label: "Network", value: "Connected SSID" },
          { label: "Current Input", value: "HDMI 1 / Streaming / etc." },
        ]} />
        <Divider />
        <Section title="VIEWING HISTORY:">
          <Line neon>Recent: Show/channel names</Line>
          <Line neon>Streaming: Account details</Line>
        </Section>
      </>
    ),
  },

  // LAPTOP / WORKSTATION
  workstation: {
    password: {
      pw: "password",
      hint: "Owner's hint or pattern",
      hintStrength: 2,
    },
    content: (
      <>
        <Line smoke large bold>[WORKSTATION - OWNER'S NAME]</Line>
        <Line cyan>[USER ACCESS GRANTED]</Line>
        <Divider />
        <Section title="SYSTEM INFO:">
          <KeyValue label="User" value="Name" />
          <KeyValue label="Last Login" value="Timestamp" />
          <KeyValue label="Network" value="Connected to" />
        </Section>
        <Divider />
        <Section title="RECENT FILES:">
          <Line neon>→ Document name (timestamp)</Line>
          <Line neon>→ Document name (timestamp)</Line>
          <Line yellow>→ Interesting file (timestamp)</Line>
        </Section>
        <Divider />
        <Section title="EMAIL / MESSAGES:">
          <Line cyan>Unread: [number]</Line>
          <Line neon>Recent: Brief subject lines</Line>
        </Section>
      </>
    ),
  },

  // SMARTPHONE / PERSONAL DEVICE
  smartphone: {
    password: {
      pw: "password",
      hint: "Personal hint",
      hintStrength: 2,
    },
    content: (
      <>
        <Line smoke large bold>[SMARTPHONE - OWNER'S NAME]</Line>
        <Line cyan>[DEVICE UNLOCKED]</Line>
        <Divider />
        <Section title="RECENT ACTIVITY:">
          <Line neon>Last call: Contact name (timestamp)</Line>
          <Line neon>Last message: Contact name (timestamp)</Line>
          <Line neon>Last app: App name</Line>
        </Section>
        <Divider />
        <Section title="MESSAGES (Recent):">
          <Line cyan>From: Name - "Message preview..."</Line>
          <Line cyan>From: Name - "Message preview..."</Line>
        </Section>
        <Divider />
        <Section title="CONTACTS:">
          <Line yellow>Notable contacts or groups</Line>
        </Section>
      </>
    ),
  },

  // SMART FRIDGE
  smart_fridge: {
    content: (
      <>
        <Line smoke large bold>[SMART FRIDGE - MODEL]</Line>
        <Line cyan>Location: [kitchen/area]</Line>
        <Divider />
        <Section title="INVENTORY TRACKING:">
          <Line neon>Milk: Expires in [days]</Line>
          <Line neon>Item: Quantity</Line>
          <Line yellow>Item: EXPIRED</Line>
        </Section>
        <Divider />
        <Section title="RECENT ORDERS:">
          <Line cyan>Auto-ordered: Item (delivery date)</Line>
        </Section>
        <Divider />
        <Line yellow>Network: Connected to home automation</Line>
      </>
    ),
  },

  // DIGITAL ASSISTANT (Echo/Google Home)
  digital_assistant: {
    content: (
      <>
        <Line smoke large bold>[DIGITAL ASSISTANT - MODEL]</Line>
        <Line cyan>Location: [room]</Line>
        <Divider />
        <Section title="RECENT COMMANDS:">
          <Line neon>00:00 → "Command given"</Line>
          <Line neon>00:00 → "Command given"</Line>
        </Section>
        <Divider />
        <Section title="LINKED ACCOUNTS:">
          <Line cyan>Account: [service name]</Line>
          <Line cyan>Smart home: Devices controlled</Line>
        </Section>
        <Divider />
        <Section title="VOICE RECORDINGS (if enabled):">
          <Line yellow>Recent audio stored on cloud</Line>
        </Section>
      </>
    ),
  },

  // GAME CONSOLE
  game_console: {
    content: (
      <>
        <Line smoke large bold>[GAME CONSOLE - MODEL]</Line>
        <Line cyan>Location: [room]</Line>
        <Divider />
        <Section title="USER ACCOUNT:">
          <KeyValue label="Username" value="Gamertag" />
          <KeyValue label="Last Played" value="Game title (timestamp)" />
          <KeyValue label="Online Status" value="Connected / Offline" />
        </Section>
        <Divider />
        <Section title="GAME LIBRARY:">
          <Line neon>→ Game title (playtime)</Line>
          <Line neon>→ Game title (playtime)</Line>
        </Section>
        <Divider />
        <Section title="MESSAGES / FRIENDS:">
          <Line cyan>Recent messages from friends</Line>
        </Section>
      </>
    ),
  },

  // PAYMENT TERMINAL
  payment_terminal: {
    content: (
      <>
        <Line smoke large bold>[PAYMENT TERMINAL - MODEL]</Line>
        <Line cyan>Location: [counter/register]</Line>
        <Divider />
        <DataTable data={[
          { label: "Status", value: "ONLINE / OFFLINE" },
          { label: "Today's Transactions", value: "Count" },
          { label: "Today's Total", value: "Amount¤" },
          { label: "Network", value: "Payment processor" },
        ]} />
        <Divider />
        <Section title="RECENT TRANSACTIONS:">
          <Line neon>00:00 → Amount¤ (approved/declined)</Line>
          <Line neon>00:00 → Amount¤ (approved/declined)</Line>
        </Section>
      </>
    ),
  },

  // THERMOSTAT / HVAC
  smart_thermostat: {
    content: (
      <>
        <Line smoke large bold>[SMART THERMOSTAT - MODEL]</Line>
        <Line cyan>Location: [area controlled]</Line>
        <Divider />
        <DataTable data={[
          { label: "Current Temp", value: "00°C" },
          { label: "Target Temp", value: "00°C" },
          { label: "Mode", value: "Heat / Cool / Auto" },
          { label: "Schedule", value: "Active / Off" },
        ]} />
        <Divider />
        <Section title="PRESENCE DETECTION:">
          <Line neon>Home: Occupied / Empty</Line>
          <Line yellow>Last motion: Timestamp</Line>
        </Section>
      </>
    ),
  },

  // PRINTER / COPIER
  network_printer: {
    content: (
      <>
        <Line smoke large bold>[NETWORK PRINTER - MODEL]</Line>
        <Line cyan>Location: [room/area]</Line>
        <Divider />
        <DataTable data={[
          { label: "Status", value: "Ready / Error / Offline" },
          { label: "Paper", value: "Tray status" },
          { label: "Toner", value: "Level %" },
        ]} />
        <Divider />
        <Section title="RECENT JOBS:">
          <Line neon>00:00 → User: Document name (pages)</Line>
          <Line neon>00:00 → User: Document name (pages)</Line>
        </Section>
        <Divider />
        <Section title="STORED SCANS:">
          <Line yellow>Scanned documents in memory</Line>
        </Section>
      </>
    ),
  },
};
