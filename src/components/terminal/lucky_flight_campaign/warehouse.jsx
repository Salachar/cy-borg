import {
  Line,
  Box,
  Section,
  Divider,
  DataTable,
} from '../TerminalComponents';

import Camera from '../Camera';
import Safe from '../Safe';
import Tenet from '../Tenet';

export const WAREHOUSE_COMMANDS = {
  "Alliansen Inc. Warehouse (Ports)": {
    content: (
      <>
        <Line cyan large bold>✦ ALLIANSEN INC. WAREHOUSE ✦</Line>
        <Line yellow>"Ports Industrial District - Facility #47"</Line>
        <Divider />
        <Line neon>Scanning for network access...</Line>
        <Line cyan>[WEAK WIFI SIGNAL DETECTED]</Line>
        <Divider />
        <DataTable data={[
          { label: "Location", value: "Ports industrial district" },
          { label: "Owner", value: "Alliansen Inc." },
          { label: "Function", value: "Storage & distribution hub" },
          { label: "Current Shift", value: "Night crew (6 personnel)" },
          { label: "Network", value: "Corporate WAN (limited external access)" },
        ]} />
        <Divider />
        <Line pink>⚠ Active security systems detected</Line>
        <Line yellow>* Limited RCD access from outside perimeter</Line>
        <Line yellow>* Full systems require physical network access inside</Line>
      </>
    ),
    related_commands: {
      "Shipping Manifests": {
        content: (
          <>
            <Line smoke large bold>[SHIPPING DATABASE]</Line>
            <Line cyan>Public shipping records (last 30 days)</Line>
            <Divider />
            <Section title="RECENT INCOMING SHIPMENTS:">
              <Line neon>Jan 15 → Electronics components (TechCore Industries)</Line>
              <Line neon>Jan 14 → Industrial machinery parts (MetalWorks Co.)</Line>
              <Line neon>Jan 12 → Office supplies (standard)</Line>
              <Line yellow>Jan 11 → [REDACTED] - SecOps authorization required</Line>
              <Line neon>Jan 10 → Synthetic food products (NutriCorp)</Line>
              <Line neon>Jan 8 → Building materials (ConStruct Ltd.)</Line>
            </Section>
            <Divider />
            <Section title="TONIGHT'S EXPECTED ARRIVALS:">
              <Line cyan>22:30 → Routine supply delivery (already received)</Line>
              <Line red>01:00 → [CLASSIFIED] - Military-grade cargo</Line>
              <Line yellow>↑ Requires Level 3 clearance to view details</Line>
            </Section>
            <Divider />
            <Line pink>Classified shipment currently in Secure Cargo area</Line>
          </>
        ),
      },

      "Employee Roster": {
        content: (
          <>
            <Line smoke large bold>[PERSONNEL DATABASE]</Line>
            <Line cyan>Current shift: Night crew (22:00 - 06:00)</Line>
            <Divider />
            <Section title="ON DUTY TONIGHT:">
              <Line neon>→ Marcus Webb (Night Supervisor)</Line>
              <Line neon>→ David Chen (Security - Main station)</Line>
              <Line neon>→ Sofia Martinez (Security - Patrol)</Line>
              <Line neon>→ James Park (Security - Break)</Line>
              <Line neon>→ Andre Foster (Security - Secure Cargo checkpoint)</Line>
              <Line neon>→ Nina Volkov (Security - Secure Cargo interior)</Line>
            </Section>
            <Divider />
            <Line yellow>Full employee records require internal network access</Line>
          </>
        ),
      },

      "Floor Plan (Public)": {
        content: (
          <>
            <Line smoke large bold>[FACILITY LAYOUT]</Line>
            <Line cyan>Basic floor plan (fire safety documentation)</Line>
            <Divider />
            <Section title="MAIN AREAS:">
              <Line neon>→ Administrative offices (northwest)</Line>
              <Line neon>→ Main warehouse floor (center/east)</Line>
              <Line neon>→ Loading dock (north entrance)</Line>
              <Line neon>→ Employee facilities (bathrooms, rec room, rest area)</Line>
              <Line red>→ Secure Cargo area (southwest - RESTRICTED)</Line>
            </Section>
            <Divider />
            <Section title="EMERGENCY EXITS:">
              <Line yellow>→ Front entrance (main)</Line>
              <Line yellow>→ Loading dock (north)</Line>
              <Line yellow>→ Side exit (east warehouse)</Line>
              <Line yellow>→ Emergency exit (south, alarm)</Line>
            </Section>
            <Divider />
            <Line pink>Detailed security layout requires Level 2+ access</Line>
          </>
        ),
      },

      "External Security Camera": {
        content: (
          <Camera
            id="alliansen-warehouse-external"
            location="Alliansen Warehouse - Front entrance (exterior)"
            coverage="Main gate, parking area, front entrance"
            status="ACTIVE"
            recording={true}
            storage="Alliansen corporate cloud"
            timeline={[
              "18:00 → Day shift departs (8 personnel)",
              "19:30 → Delivery truck arrives, unloads routine supplies",
              "20:45 → Delivery truck departs",
              "22:00 → Night shift arrives (6 personnel)",
              "22:30 → Supervisor's vehicle arrives (late)",
              "23:00-Present → No activity",
            ]}
            blindSpots={[
              "Loading dock area (separate camera)",
              "East and south sides of building",
              "Warehouse interior",
            ]}
            lastMaintenance="1 week ago"
          />
        ),
      },

      access_warehouse_internal_network: {
        password: {
          pw: "logistics47",
          hint: "Facility number + department name",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[ALLIANSEN INTERNAL NETWORK]</Line>
            <Line cyan>[EMPLOYEE ACCESS GRANTED]</Line>
            <Divider />
            <Section title="AVAILABLE SYSTEMS:">
              <Line neon>→ Security camera system</Line>
              <Line neon>→ Personnel records (detailed)</Line>
              <Line neon>→ Supervisor's terminal</Line>
              <Line neon>→ Secure Cargo manifest</Line>
            </Section>
            <Divider />
            <Line yellow>⚠ Network access logged - Connection ID: RCD-#8834</Line>
            <Line yellow>⚠ Suspicious activity may trigger security review</Line>
          </>
        ),
        related_commands: {
          "Security Camera System": {
            content: (
              <Camera
                id="alliansen-warehouse-main"
                location="Alliansen Warehouse - Main warehouse floor"
                coverage="Warehouse floor, aisles, loading dock interior"
                status="ACTIVE"
                recording={true}
                storage="Local server + cloud backup"
                timeline={[
                  "22:00 → Night shift begins, guards take positions",
                  "22:15 → Supervisor enters Main Office",
                  "22:30 → Guard 2 begins patrol route",
                  "23:00 → Guard 3 takes break in rec room",
                  "23:15 → Forklift moved to loading dock (routine)",
                  "23:30-Present → Minimal activity",
                ]}
                blindSpots={[
                  "Inside Secure Cargo area (separate closed system)",
                  "Bathroom interiors",
                  "Some corners behind large containers",
                ]}
                lastMaintenance="2 weeks ago"
              />
            ),
            related_commands: {
              "Secure Cargo Camera (RESTRICTED)": {
                password: {
                  pw: "secops2082",
                  hint: "Who authorized tonight's classified shipment?",
                  hintStrength: 2,
                },
                content: (
                  <Camera
                    id="alliansen-warehouse-securecargo"
                    location="Alliansen Warehouse - Secure Cargo area (interior)"
                    coverage="High-value storage, electronics lab, security checkpoint"
                    status="ACTIVE"
                    recording={true}
                    storage="Encrypted local server (air-gapped)"
                    timeline={[
                      "22:00 → Guards 4 & 5 report to Secure Cargo",
                      "22:45 → Target crate logged into inventory",
                      "23:00 → Security sweep completed, all clear",
                      "23:30-Present → Guards stationed, no movement",
                    ]}
                    blindSpots={[
                      "Electronics lab testing booth (privacy screen)",
                      "Behind large storage containers",
                    ]}
                    lastMaintenance="3 days ago"
                  />
                ),
              },
            },
          },

          "Personnel Records (Detailed)": {
            content: (
              <>
                <Line smoke large bold>[PERSONNEL FILES]</Line>
                <Line cyan>Night shift employees - Detailed records</Line>
                <Divider />
                <Section title="QUICK ACCESS:">
                  <Line neon>→ Marcus Webb (Supervisor)</Line>
                  <Line neon>→ Security team members (5)</Line>
                </Section>
              </>
            ),
            related_commands: {
              "Marcus Webb (Supervisor)": {
                content: (
                  <Tenet
                    id="CIT-4721-MW"
                    name="Marcus Webb"
                    age={41}
                    dob="08/23/2041"
                    occupation="Night Supervisor"
                    employer="Alliansen Inc. (Warehouse Division)"
                    district="Bigmosse (commutes to Ports)"
                    bio="15 years with Alliansen. Reliable, by-the-book. Just wants to get through shifts without incident. Saving up for early retirement."
                    interests={['Fishing', 'Old motorcycles', 'Classic cinema', 'Coffee']}
                    connections={23}
                    status="ACTIVE"
                    privacy="PUBLIC"
                  />
                ),
              },

              "David Chen (Security)": {
                content: (
                  <Tenet
                    id="CIT-6892-DC"
                    name="David Chen"
                    age={28}
                    dob="03/15/2054"
                    occupation="Security Officer"
                    employer="Alliansen Inc. (Security Division)"
                    district="Lilypond"
                    bio="Night shift security. Spends most of time watching holovideos on monitors. Corporate paycheck is good enough. Not a hero."
                    interests={['Gaming', 'Holovids', 'Energy drinks', 'Sleeping']}
                    connections={67}
                    status="ACTIVE"
                    privacy="PUBLIC"
                  />
                ),
              },

              "Sofia Martinez (Security)": {
                content: (
                  <Tenet
                    id="CIT-5438-SM"
                    name="Sofia Martinez"
                    age={32}
                    dob="11/07/2050"
                    occupation="Security Officer (Patrol)"
                    employer="Alliansen Inc. (Security Division)"
                    district="Ports"
                    bio="Former SecOps, now corporate security. Takes job more seriously than coworkers. Patrols actually patrol. Still not paid enough to die for cargo."
                    interests={['Martial arts', 'Firearms', 'Physical fitness', 'Street food']}
                    connections={34}
                    status="ACTIVE"
                    privacy="FRIENDS"
                  />
                ),
              },
            },
          },

          "Supervisor's Terminal": {
            password: {
              pw: "webb2041",
              hint: "Supervisor's last name + birth year",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[SUPERVISOR TERMINAL]</Line>
                <Line cyan>Marcus Webb's workstation access</Line>
                <Divider />
                <Section title="RECENT ACTIVITY:">
                  <Line neon>→ Opened tonight's shift report</Line>
                  <Line neon>→ Reviewed classified shipment manifest</Line>
                  <Line neon>→ Acknowledged SecOps coordination memo</Line>
                  <Line neon>→ Currently working on inventory reconciliation</Line>
                </Section>
                <Divider />
                <Section title="AVAILABLE FILES:">
                  <Line cyan>→ Shift schedules (next 2 weeks)</Line>
                  <Line cyan>→ Security protocols</Line>
                  <Line cyan>→ Tonight's classified manifest</Line>
                  <Line cyan>→ Alarm override codes (emergency use)</Line>
                </Section>
              </>
            ),
            related_commands: {
              "Classified Shipment Manifest": {
                content: (
                  <>
                    <Line smoke large bold>[CLASSIFIED CARGO MANIFEST]</Line>
                    <Line red>SecOps Authorization Required - Level 3</Line>
                    <Divider />
                    <DataTable data={[
                      { label: "Shipment ID", value: "SEC-2082-0147" },
                      { label: "Origin", value: "TechCore Industries (Military Division)" },
                      { label: "Destination", value: "SecOps Equipment Division" },
                      { label: "Arrival", value: "Tonight, 01:00 (received)" },
                      { label: "Pickup", value: "Tomorrow, 08:00" },
                      { label: "Current Location", value: "Secure Cargo - Container 7B" },
                    ]} />
                    <Divider />
                    <Section title="CONTENTS:">
                      <Line cyan>→ 12x MilSpec Neural Interface Modules</Line>
                      <Line cyan>→ Estimated Value: 5,000¤</Line>
                      <Line cyan>→ Classification: Military-grade cyberware</Line>
                      <Line cyan>→ Intended Use: SecOps tactical enhancement program</Line>
                    </Section>
                    <Divider />
                    <Section title="SECURITY NOTES:">
                      <Line yellow>→ Guards 4 & 5 assigned to Secure Cargo</Line>
                      <Line yellow>→ No entry without supervisor authorization</Line>
                      <Line yellow>→ Alarm system armed (30-second delay)</Line>
                      <Line yellow>→ Backup response time: 10 minutes</Line>
                    </Section>
                    <Divider />
                    <Line red>⚠ THEFT RISK: HIGH - Stone Eels gang active in area</Line>
                  </>
                ),
              },

              "Alarm Override Codes": {
                password: {
                  pw: "redcode47",
                  hint: "Emergency designation + facility number",
                  hintStrength: 3,
                },
                content: (
                  <>
                    <Line smoke large bold>[EMERGENCY OVERRIDE SYSTEM]</Line>
                    <Line red>⚠ SUPERVISOR ACCESS ONLY ⚠</Line>
                    <Divider />
                    <Section title="ALARM OVERRIDE CODES:">
                      <Line cyan>→ Secure Cargo Alarm: #4719</Line>
                      <Line cyan>→ Fire System: #8833</Line>
                      <Line cyan>→ Emergency Exit: #2204</Line>
                      <Line cyan>→ Master Override: #0047</Line>
                    </Section>
                    <Divider />
                    <Section title="USAGE INSTRUCTIONS:">
                      <Line neon>1. Enter code at security panel within 30 seconds</Line>
                      <Line neon>2. System will cancel alarm transmission</Line>
                      <Line neon>3. Override logged for review by corporate security</Line>
                    </Section>
                    <Divider />
                    <Line yellow>⚠ Unauthorized use results in immediate termination</Line>
                    <Line yellow>⚠ All overrides logged with timestamp and user ID</Line>
                  </>
                ),
              },
            },
          },

          "Supervisor's Office Safe": {
            password: {
              pw: "fisherman",
              hint: "Marcus Webb's favorite hobby from his profile",
              hintStrength: 2,
            },
            content: (
              <Safe
                id="alliansen-warehouse-supervisor"
                model="DS-400"
                location="Main Office - Wall safe behind framed Alliansen certificate"
                owner="Marcus Webb (Night Supervisor)"
                security="4-digit PIN"
                lastAccess="Tonight (shift start)"
                physical={[
                  { item: "Master keycard", desc: "All-access (offices, secure cargo, override)" },
                  { item: "Petty cash", desc: "180¤ (small bills for misc expenses)" },
                  { item: "Documents", desc: "Employee files, shift reports, inventory logs" },
                  { item: "Personal items", desc: "Fishing lure (lucky charm), family photo" },
                ]}
                digital={[
                  { item: "Credchip", desc: "120¤ (personal emergency fund)" },
                  { item: "Access codes", desc: "Alarm overrides, security panel passwords" },
                ]}
                notes="Marcus keeps everything by-the-book - safe checked at shift start/end"
              />
            ),
          },
        },
      },
    },
  },
};
