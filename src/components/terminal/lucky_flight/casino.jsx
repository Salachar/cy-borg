// ============================================================================
// LUCKY FLIGHT CASINO - REVISED COMMANDS
// ============================================================================
// Mix of public-facing commands (what locals would use) and backend systems

import {
  Line,
  Box,
  Section,
  Warning,
  Divider,
  KeyValue,
  DataTable,
  StatBlock,
} from '../TerminalComponents';

import LuckyFlightBasement from './LuckyFlightBasement';
import LuckyFlightFloor1 from './LuckyFlightFloor1';
import LuckyFlightFloor2 from './LuckyFlightFloor2';

export const LUCKY_FLIGHT_CASINO = {
  "Charlie's Mission Brief": {
    content: (
      <Box color="cyan">
        <Line cyan bold>[MISSION - CHARLIE SAND]</Line>
        <Divider />
        <Section title="PRIMARY:">
          <Line red>Destroy debt records</Line>
          <Line smoke>Records are stored in an offline database</Line>
          <Line smoke>Likely located on/near the 2nd Floor tech room</Line>
        </Section>
        <Divider />
        <Section title="SECONDARY:">
          <Line yellow>Find Batu</Line>
          <Line cyan>Bonus: If rescued alive</Line>
          <Line yellow>Permanently close the casino</Line>
          <Line smoke>Likely located in the basement security room</Line>
        </Section>
        <Divider />
        <Section title="PAYMENT:">
          <Line neon>Decommissioned patrol car</Line>
          <Line cyan>+ Bonus for Batu</Line>
        </Section>
        <Divider />
        <Line red>Keep it QUIET. NO mass murder.</Line>
      </Box>
    ),
  },
  // === PUBLIC-FACING COMMANDS (What locals would access) ===
  "Lucky Flight Casino!": {
    content: (
      <>
        <Line cyan large bold>✦ LUCKY FLIGHT CASINO ✦</Line>
        <Line yellow>"Where Fortune Takes Flight!"</Line>
        <Divider />
        <Section title="HOURS OF OPERATION:">
          <KeyValue label="Open" value="10:00 AM - 7:00 AM" />
          <KeyValue label="Closed" value="7:00 AM - 10:00 AM (Maintenance)" />
        </Section>
        <Divider />
        <Section title="TONIGHT'S ENTERTAINMENT:">
          <Line pink>♪ LIVE MUSIC 20:00-03:00 ♪</Line>
          <Line neon>→ 20:00 - PHASER/MOB (blackened chromecore)</Line>
          <Line neon>→ 21:30 - G_-.- (seismic noise)</Line>
          <Line neon>→ 23:00 - HeCcc (hexcore)</Line>
          <Line neon>→ 01:00 - I must leave (doompunk)</Line>
          <Line neon>→ 02:30 - Sirius Last Light (atmo-orbitalwave)</Line>
        </Section>
        <Divider />
        <Section title="FEATURED GAMES:">
          <Line neon>• Slot Machines (100+ varieties)</Line>
          <Line neon>• Blackjack Tables</Line>
          <Line neon>• Poker Rooms (Texas Hold'em, Omaha)</Line>
          <Line neon>• Roulette</Line>
          <Line neon>• Virtual Reality Gaming Pods</Line>
        </Section>
        <Divider />
        <Line yellow>Located at Ports/Bigmosse Border</Line>
        <Line cyan>Water taxi service available to canal pier!</Line>
      </>
    ),
    related_commands: {
      "Happy Hour Specials! (lfc)": {
        content: (
          <>
            <Line yellow large bold>🍹 HAPPY HOUR 🍹</Line>
            <Line cyan>Every night 18:00-22:00</Line>
            <Divider />
            <Section title="BAR SPECIALS:">
              <KeyValue label="Synth-Whiskey" value="5¤" />
              <KeyValue label="NeoVodka Shots" value="3¤" />
              <KeyValue label="Chrome-Tini" value="8¤" />
              <KeyValue label="Energy Drink Combo" value="6¤" />
            </Section>
            <Divider />
            <Section title="FOOD MENU:">
              <KeyValue label="Synth-Burger Basket" value="12¤" />
              <KeyValue label="Noodle Bowl" value="8¤" />
              <KeyValue label="Fried Protein Sticks" value="6¤" />
              <KeyValue label="Vat-Grown Wings" value="10¤" />
            </Section>
            <Divider />
            <Line pink>★ VIP members get 20% off all night! ★</Line>
          </>
        ),
      },

      "Hours of Operation (lfc)": {
        content: (
          <>
            <Line smoke large bold>[OPERATING HOURS]</Line>
            <KeyValue label="Closed (daily)" value="7:00 AM - 10:00 AM" />
            <Divider />
            <Line neon>Maintenance window: 7:00 AM - 10:00 AM</Line>
            <Line yellow pulse>Casino Monitoring Increased</Line>
            <Line cyan>Please do not disturb the maintenance crew</Line>
          </>
        ),
      },

      "Entertainment Brochure (lfc)"  : {
        content: (
          <>
            <Line smoke large bold>[TONIGHT'S SHOWS]</Line>
            <Divider />
            <Line neon>20:00 - PHASER/MOB</Line>
            <Line neon>21:30 - G_-.-</Line>
            <Line neon>23:00 - HeCcc</Line>
            <Line neon>01:00 - I must leave</Line>
            <Line neon>02:30 - Sirius Last Light</Line>
            <Divider />
            <Line cyan>Stage: Floor 1, Room 3</Line>
            <Line yellow>Loud music = noise cover</Line>
            <Line neon>Band entrance: Canal pier</Line>
          </>
        ),
      },

      "Available Transportation (lfc)": {
        content: (
          <>
            <Line smoke large bold>[TRANSPORT OPTIONS]</Line>
            <Section title="MAIN ENTRANCE:">
              <Line neon>Car bridge or broken escalators</Line>
            </Section>
            <Divider />
            <Section title="WATER TAXI:">
              <Line cyan>⚠ Recommended for patrons wanting s more discrete arrival</Line>
              <Line neon>Cost: 200¤ to canal pier</Line>
              <Line neon>Docks at basement level (Green Room)</Line>
              <Line yellow pulse>Must be pre-approved with security</Line>
            </Section>
          </>
        ),
      },

      "NukaCola_vending_frg_003 (lfc_lobby)": {
        password: {
          pw: "nukacola",
          hint: "It's the soda this dispenses! CHANGE ME!",
          hintStrength: 3,
        },
        content: (
          <>
            <Line cyan pulse>[ACCESSING...]</Line>
            <Line neon>Maintenance Connection Established</Line>
          </>
        ),
        related_commands: {
          "dispense_NukaCola_vending_frg_003": {
            content: (
              <>
                <Line cyan>[ACCESSING...]</Line>
                <Line neon>Bypassing payment...</Line>
                <Line cyan>Dispensing Nuka Cola...</Line>
                <Line neon>🥤 Enjoy!</Line>
              </>
            ),
          }
        }
      },

      "access_casino_internal_network (lfc)": {
        password: {
          pw: "flyaway",
          hint: "What casino staff say when someone hits the jackpot",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[CASINO INTERNAL NETWORK]</Line>
            <Line cyan>[ACCESS GRANTED - PERIPHERAL SYSTEMS]</Line>
            <Divider />
            <Section title="AVAILABLE SYSTEMS:">
              <Line neon>→ Facility blueprints (restricted)</Line>
              <Line neon>→ HR database (employee records)</Line>
              <Line neon>→ Security infrastructure</Line>
              <Line neon>→ Financial systems</Line>
              <Line neon>→ Operations database</Line>
            </Section>
            <Divider />
            <Warning>Higher-value systems require additional credentials</Warning>
          </>
        ),
        related_commands: {
          access_facility_blueprints: {
            password: {
              pw: "architecture",
              hint: "What blueprints are a form of",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[FACILITY BLUEPRINTS]</Line>
                <Line cyan>Architectural database accessed</Line>
                <Divider />
                <Section title="AVAILABLE FLOORS:">
                  <Line neon>→ Basement (mechanical, storage)</Line>
                  <Line neon>→ Floor 1 (casino floor, gaming)</Line>
                  <Line neon>→ Floor 2 (VIP, management, vault)</Line>
                </Section>
                <Divider />
                <Line yellow>Download individual floor plans for tactical analysis</Line>
              </>
            ),
            related_commands: {
              dl_blueprint_basement: {
                password: {
                  pw: "green",
                  hint: "Color of the room where bands prepare (and money)",
                  hintStrength: 2,
                },
                content: (
                  <>
                    <LuckyFlightBasement />
                    <Divider />
                    <Line cyan bold>KEY LOCATIONS:</Line>
                    <Line neon>• Room 13: Locker Room (Batu held here)</Line>
                    <Line neon>• Room 14: Green Room (canal pier access)</Line>
                    <Line neon>• Room 16: Power Core (unstable, sabotage potential)</Line>
                    <Line red>⚠ Wattana patrols this level</Line>
                  </>
                ),
              },
              dl_blueprint_floor1: {
                password: {
                  pw: "slots",
                  hint: "Most common gambling machine type",
                  hintStrength: 1,
                },
                content: (
                  <>
                    <LuckyFlightFloor1 />
                    <Divider />
                    <Line cyan bold>KEY LOCATIONS:</Line>
                    <Line neon>• Room 1: Main entrance (2 bouncers)</Line>
                    <Line neon>• Room 2-4: Casino floor (40-80 patrons)</Line>
                    <Line neon>• Room 3: Live stage (noise cover)</Line>
                    <Line red>⚠ Full camera coverage on this floor</Line>
                  </>
                ),
              },
              dl_blueprint_floor2: {
                password: {
                  pw: "vault",
                  hint: "Where Zola is imprisoned",
                  hintStrength: 3,
                },
                content: (
                  <>
                    <LuckyFlightFloor2 />
                    <Divider />
                    <Line cyan bold>CRITICAL LOCATIONS:</Line>
                    <Line neon>• Room 9: Vaska's Office (vault key here)</Line>
                    <Line neon>• Room 11: Vault & Prison (Zola + debt records)</Line>
                    <Line cyan>⚠ Rooms 9 & 11 have NO cameras (blind spots)</Line>
                  </>
                ),
              },
            },
          },
          access_hr_database: {
            password: {
              pw: "gibos",
              hint: "Nickname of the cyborg grandpa winning big at slots",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[HR DATABASE]</Line>
                <Line cyan>Personnel files accessed</Line>
                <Divider />
                <Section title="CATEGORIES:">
                  <Line neon>→ Management</Line>
                  <Line neon>→ Security personnel</Line>
                  <Line neon>→ Special assets</Line>
                  <Line neon>→ Detainees</Line>
                </Section>
              </>
            ),
            related_commands: {
              profile_wingus: {
                content: (
                  <Box color="cyan">
                    <Line cyan bold>[WINGUS - ENTRANCE BOUNCER]</Line>
                  </Box>
                ),
              },
              profile_dingus: {
                content: (
                  <Box color="cyan">
                    <Line cyan bold>[DINGUS - ENTRANCE BOUNCER]</Line>
                  </Box>
                ),
              },
              profile_adilet: {
                content: (
                  <Box color="cyan">
                    <Line cyan bold>[ADILET - GUEST ENJOYMENT OFFICER]</Line>
                  </Box>
                ),
              },
              profile_vaska_jordan: {
                content: (
                  <Box color="yellow">
                    <Line yellow bold>[VASKA JORDAN - CASINO MANAGER]</Line>
                    <Divider color="yellow" />
                    <Line neon>Office: Floor 2, NW Corner</Line>
                  </Box>
                ),
              },
              profile_wattana: {
                content: (
                  <Box color="red">
                    <Line red bold>[WATTANA - HEAD OF SECURITY]</Line>
                    <Divider color="red" />
                    <StatBlock stats={{
                      "Weapons": "Wristblade (d6) + μSMG (d4a)",
                    }} />
                    <Divider color="red" />
                    <Line neon>Office: Basement Sec Office</Line>
                  </Box>
                ),
              },
              profile_zola: {
                password: {
                  pw: "database",
                  hint: "Please help! I've been turned into a living...",
                  hintStrength: 0,
                },
                content: (
                  <Box color="pink">
                    <Line pink bold>[ZOLA - ACCOUNTANT]</Line>
                    <Divider color="pink" />
                    <Line red pulse>[DELETED]******************</Line>
                    <Line red pulse>[DELETED]******************</Line>
                    <Line red pulse>[DELETED]******************</Line>
                  </Box>
                ),
              },
            },
          },
          access_security_database: {
            password: {
              pw: "surveillance",
              hint: "What cameras are used for",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[SECURITY DATABASE]</Line>
                <Line cyan>Infrastructure accessed</Line>
                <Divider />
                <Section title="MODULES:">
                  <Line neon>→ Camera coverage</Line>
                  <Line neon>→ Patrol schedules</Line>
                  <Line neon>→ Alarm protocols</Line>
                  <Line neon>→ Lock systems</Line>
                  <Line neon>→ Entry points</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_camera_coverage: {
                content: (
                  <>
                    <Line smoke large bold>[CAMERA COVERAGE]</Line>
                    <Divider />
                    <Section title="FLOOR 1:">
                      <DataTable data={[
                        { label: "Entrance", value: "Online" },
                        { label: "Plant 1", value: "Online" },
                        { label: "Plant 2", value: "Online" },
                        { label: "Vending Machine", value: "Online" },
                        { label: "Holo Games 1", value: "Online" },
                        { label: "Holo Games 2", value: "Online" },
                        { label: "Bathroom", value: "Online" },
                        { label: "Stage Left", value: "Online" },
                        { label: "Stage Right", value: "Online" },
                      ]} />
                    </Section>
                    <Divider />
                    <Section title="FLOOR 2:">
                      <DataTable data={[
                        { label: "Tech 1", value: "Online" },
                        { label: "Tech 2", value: "Online" },
                        { label: "Vending Machine", value: "Online" },
                        { label: "Aquarium 1", value: "Online" },
                        { label: "Office 1", value: "Online" },
                        { label: "Office 2", value: "Online" },
                        { label: "Office 3", value: "Online" },
                        { label: "Balcony", value: "Online" },
                        { label: "VIP", value: "Online" },
                      ]} />
                    </Section>
                    <Divider />
                    <Section title="BASEMENT:">
                      <Line red pulse>ERROR: DIRECT LINK REQUIRED</Line>
                    </Section>
                  </>
                ),
              },
              query_alarm_response: {
                content: (
                  <Box color="red">
                    <Line red bold>[ALARM PROTOCOLS]</Line>
                    <Divider color="red" />
                    <Section title="OPEN HOURS:">
                      <Line neon>Response: ~1 minute</Line>
                      <Line neon>Force: ~10 SecOps</Line>
                    </Section>
                    <Divider color="red" />
                    <Section title="CLOSED HOURS:">
                      <Line neon>Response: ~2 minutes</Line>
                      <Line cyan>CySG Team: ~10 minutes</Line>
                    </Section>
                  </Box>
                ),
              },
              query_entry_points: {
                password: {
                  pw: "breach",
                  hint: "What you're planning to do",
                  hintStrength: 2,
                },
                content: (
                  <Box color="cyan">
                    <Line smoke large bold>[ENTRY ANALYSIS]</Line>
                    <Divider color="cyan" />
                    <Section title="A - MAIN ENTRANCE:">
                      <Line neon>2 bouncers on guard</Line>
                      <Line yellow>Risk: MODERATE</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="B - STAFF DOOR:">
                      <Line neon>Dark alley, damaged lock</Line>
                      <Line neon>Possibly unlocked</Line>
                      <Line yellow>Risk: LOW-MODERATE</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="C - CANAL PIER:">
                      <Line neon>Water approach, minimal visibility</Line>
                      <Line neon>Band equipment cover story</Line>
                      <Line yellow>Risk: LOW</Line>
                    </Section>
                  </Box>
                ),
              },
            },
          },
          access_financial_database: {
            password: {
              pw: "debt",
              hint: "What casino uses to control neighborhood",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[FINANCIAL DATABASE]</Line>
                <Line cyan>Records accessed</Line>
                <Divider />
                <Section title="AVAILABLE:">
                  <Line neon>→ Neighborhood debt ledger</Line>
                  <Line neon>→ High roller stats</Line>
                  <Line neon>→ Vault inventory</Line>
                  <Line neon>→ Corporate structure</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_debt_ledger: {
                content: (
                  <Box color="red">
                    <Line red bold>[DEBT LEDGER]</Line>
                    <Divider color="red" />
                    <DataTable data={[
                      { label: "Total Owed", value: "2,847,350¤" },
                      { label: "Accounts", value: "247 residents" },
                      { label: "Default Rate", value: "89%" },
                    ]} />
                    <Divider color="red" />
                    <Line red pulse> MISSION TARGET</Line>
                    <Line neon>Backup: None (offline)</Line>
                  </Box>
                ),
              },
              query_high_rollers: {
                content: (
                  <>
                    <Line smoke large bold>[HIGH ROLLERS]</Line>
                    <Divider />
                    <Section title="TOP WINNER:">
                      <Line cyan>"Gibos" (cyborg grandpa)</Line>
                      <Line neon>Won: 84,200¤ this month</Line>
                      <Line yellow>Legs glitching, seated</Line>
                    </Section>
                    <Divider />
                    <Section title="VIP TONIGHT:">
                      <Line pink>Saša (Stone Eels leader)</Line>
                      <Line neon>+ 3 bodyguards</Line>
                      <Warning>Avoid confrontation</Warning>
                    </Section>
                  </>
                ),
              },
              query_corporate_structure: {
                password: {
                  pw: "subsidiary",
                  hint: "How corps hide ownership",
                  hintStrength: 2,
                },
                content: (
                  <Box color="yellow">
                    <Line yellow bold>[CORPORATE STRUCTURE]</Line>
                    <Divider color="yellow" />
                    <Line neon>Parent: Alliansen Inc.</Line>
                    <Line neon>Subsidiary: CasinoBlizzFunds</Line>
                    <Line neon>Property: Lucky Flight Casino</Line>
                  </Box>
                ),
              },
            },
          },
          access_operations_database: {
            content: (
              <>
                <Line smoke large bold>[OPERATIONS]</Line>
                <Line cyan>Intelligence accessed</Line>
                <Divider />
                <Section title="AVAILABLE:">
                  <Line neon>→ Mission briefing</Line>
                  <Line neon>→ Maintenance schedule</Line>
                  <Line neon>→ Recent incidents</Line>
                  <Line neon>→ Entertainment calendar</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_recent_incidents: {
                password: {
                  pw: "chaos",
                  hint: "Casino's natural state",
                  hintStrength: 1,
                },
                content: (
                  <>
                    <Line smoke large bold>[RECENT INCIDENTS]</Line>
                    <Divider />
                    <Line neon>• Patron vomiting black tar</Line>
                    <Line neon>• Pickpocket at slots</Line>
                    <Line neon>• Band contract dispute</Line>
                    <Line neon>• Brawl on casino floor</Line>
                    <Line neon>• Scammer running magnetic chips</Line>
                    <Divider />
                    <Line cyan>High chaos = good cover</Line>
                    <Line yellow>Security spread thin</Line>
                  </>
                ),
              },
              query_power_core_status: {
                password: {
                  pw: "unstable",
                  hint: "Condition of Room 16",
                  hintStrength: 3,
                },
                content: (
                  <Box color="red">
                    <Line red bold>[POWER CORE - ROOM 16]</Line>
                    <Divider color="red" />
                    <Warning>99% POWER LOAD</Warning>
                    <Divider color="red" />
                    <Line neon>Maintenance: frequent</Line>
                    <Line neon>Modifications: Illegal</Line>
                    <Line yellow pulse>STARTUP PROTOCOL DELETED</Line>
                    <Line red>Tamper Risk: Catastrophic failure</Line>
                  </Box>
                ),
              },
            },
          },
        },
      },
    }
  },
};

export default LUCKY_FLIGHT_CASINO;
