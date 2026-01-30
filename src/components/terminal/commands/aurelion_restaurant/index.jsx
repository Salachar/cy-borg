import {
  PublicPortal,
  InternalAccess,
  Menu,
  HoursBanner,
  Safe,
  PersonnelFile,
  IncidentLog,
  Camera,
  LiveCameraFeed,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
  Box,
} from "@terminal/TerminalComponents";

export const AURELION_COMMANDS = {
  "The Aurelion": {
    content: (
      <PublicPortal
        network="AURELION_GUEST"
        signalStrength="strong"
        status="✓ OPEN (18:00-02:00)"
        statusColor="neon"
        nowPlaying="Live: Jazz Quartet - 'Midnight in Neo-Tokyo'"
        notes={[
          "Reservations required for dining",
          "Smart casual dress code enforced",
          "Private rooms available for corporate events",
          "Award-winning sommelier on staff",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Reservations & Hours": {
        content: (
          <HoursBanner
            name="THE AURELION"
            hours="18:00 - 02:00"
            days="Tuesday - Sunday"
            status="OPEN"
            statusColor="open"
            location="Central District, Executive Plaza"
            note="Reservations required | Walk-ins accepted at bar only"
          />
        ),
      },

      "Tonight's Menu": {
        content: (
          <Menu
            title="THE AURELION"
            subtitle="Curated tasting menu | Prix fixe 280¤"
            signType="food"
            categories={[
              {
                name: "AMUSE-BOUCHE",
                items: [
                  { name: "Seared scallop", price: "with citrus foam & microgreens" },
                ],
              },
              {
                name: "FIRST COURSE",
                items: [
                  { name: "Heirloom tomato tartare", price: "basil oil, aged balsamic" },
                  { name: "Foie gras terrine", price: "fig compote, brioche" },
                ],
              },
              {
                name: "SECOND COURSE",
                items: [
                  { name: "Pan-seared halibut", price: "lemon beurre blanc, asparagus" },
                  { name: "Wagyu beef tenderloin", price: "truffle demi-glace, pommes anna" },
                ],
              },
              {
                name: "DESSERT",
                items: [
                  { name: "Dark chocolate soufflé", price: "raspberry coulis" },
                  { name: "Crème brûlée", price: "vanilla bean, fresh berries" },
                ],
              },
              {
                name: "BEVERAGE PAIRINGS",
                items: [
                  { name: "Wine pairing", price: "+120¤" },
                  { name: "Sake pairing", price: "+95¤" },
                  { name: "Non-alcoholic pairing", price: "+45¤" },
                ],
              },
            ]}
            footer="★ Michelin recommended | Chef Marcus Laurent presiding"
          />
        ),
      },

      "Private Dining Inquiry": {
        content: (
          <>
            <Line cyan large bold>[PRIVATE DINING SERVICES]</Line>
            <Line smoke>Corporate events | Executive gatherings | Discreet meetings</Line>
            <Divider />

            <Section title="AVAILABLE ROOMS">
              <DataTable
                data={[
                  { label: "The Pearl Room", value: "8 guests | 1,200¤ minimum" },
                  { label: "The Obsidian Suite", value: "12 guests | 2,000¤ minimum" },
                  { label: "The Diamond Terrace", value: "20 guests | 4,500¤ minimum" },
                ]}
              />
            </Section>

            <Section title="INCLUDED SERVICES">
              <Line>• Dedicated sommelier & waitstaff</Line>
              <Line>• Custom menu consultation with Chef Laurent</Line>
              <Line>• Acoustic privacy & signal dampening</Line>
              <Line>• Secure entry & valet parking</Line>
              <Line>• Corporate entertainment systems</Line>
            </Section>

            <Section title="BOOKING">
              <Line neon>Contact: reservations@aurelion-dining.cy</Line>
              <Line smoke>Minimum 72 hours notice required</Line>
              <Line smoke>⚠ Cancellations within 24h forfeit 50% deposit</Line>
            </Section>
          </>
        ),
      },

      "Guest Services": {
        content: (
          <>
            <Line cyan large bold>[GUEST SERVICES]</Line>
            <Line smoke>Your experience is our priority</Line>
            <Divider />

            <Section title="AMENITIES">
              <Line>• Coat check & secure storage</Line>
              <Line>• Device charging stations</Line>
              <Line>• Curated cigar selection (terrace only)</Line>
              <Line>• Private phone booths</Line>
              <Line>• Luxury restroom facilities</Line>
            </Section>

            <Section title="DIETARY ACCOMMODATIONS">
              <Line>We cater to all dietary restrictions:</Line>
              <Line smoke>Vegetarian | Vegan | Gluten-free | Allergies</Line>
              <Line smoke>Please notify staff upon arrival</Line>
            </Section>

            <Section title="POLICIES">
              <Line>• Smart casual attire required (no sportswear)</Line>
              <Line>• Photography discouraged in dining areas</Line>
              <Line>• Children welcome (prix fixe menu only)</Line>
              <Line>• Smoking permitted on terrace only</Line>
            </Section>

            <Section title="CONTACT">
              <KeyValue label="Phone" value="+81-3-AURELION" />
              <KeyValue label="Email" value="concierge@aurelion-dining.cy" />
              <KeyValue label="Address" value="Executive Plaza, Level 42" />
            </Section>
          </>
        ),
      },

      access_internal_network: {
        password: {
          pw: "laurent",
          hint: "The head chef's last name",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="THE AURELION"
            message="STAFF ACCESS GRANTED"
            networkInfo="⚠ Internal systems - Authorized personnel only"
            theme="secure"
          />
        ),
        related_commands: {
          "Reservation System": {
            password: {
              pw: "pearl",
              hint: "The smallest private dining room (first word)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[RESERVATION SYSTEM]</Line>
                <Line smoke>Access granted: Front of house management</Line>
                <Divider />

                <Section title="SYSTEM STATUS">
                  <KeyValue label="Active Reservations" value="23 tables" />
                  <KeyValue label="VIP Guests Tonight" value="8 individuals" />
                  <KeyValue label="Private Rooms Booked" value="2 of 3" />
                  <KeyValue label="Waitlist" value="12 parties" />
                </Section>

                <Box color="yellow">
                  <Line>⚠ ALERT: Table 7 flagged for special attention</Line>
                  <Line smoke>Guest: Takeshi Yamamoto (Kaytell Makers VP)</Line>
                  <Line smoke>Note: Prefers window seating, allergic to shellfish</Line>
                </Box>
              </>
            ),
            related_commands: {
              "Tonight's VIP List": {
                content: (
                  <>
                    <Line cyan large bold>[VIP GUEST LIST - TONIGHT]</Line>
                    <Line smoke>Updated: 18:45 | 8 VIP guests confirmed</Line>
                    <Divider />

                    <Section title="CURRENTLY DINING">
                      <Line neon bold>TABLE 7 - TAKESHI YAMAMOTO</Line>
                      <Line smoke>Affiliation: Kaytell Makers (VP of Operations)</Line>
                      <Line smoke>Party: 2 guests | Private booth</Line>
                      <Line smoke>Special requests: Window seating, no shellfish</Line>
                      <Line smoke>Spending: 450¤ (wine pairing included)</Line>
                      <Line red>⚠ Security flag: Known corporate espionage target</Line>
                      <Divider />

                      <Line neon bold>OBSIDIAN SUITE - VALENTINA CROSS</Line>
                      <Line smoke>Affiliation: Cross Media Syndicate (CEO)</Line>
                      <Line smoke>Party: 6 guests | Private room</Line>
                      <Line smoke>Special requests: Signal dampening active</Line>
                      <Line smoke>Spending: 2,800¤ (bottle service)</Line>
                      <Line yellow>⚠ High-priority: Do not disturb unless emergency</Line>
                      <Divider />

                      <Line neon bold>TABLE 12 - MARCUS DELACROIX</Line>
                      <Line smoke>Affiliation: TG Labs (Research Director)</Line>
                      <Line smoke>Party: 3 guests | Standard seating</Line>
                      <Line smoke>Special requests: Vegetarian menu</Line>
                      <Line smoke>Spending: 340¤</Line>
                      <Divider />

                      <Line neon bold>TABLE 18 - ARIA NOVAK</Line>
                      <Line smoke>Affiliation: Spectral FT (Investment Banker)</Line>
                      <Line smoke>Party: 2 guests | Bar seating (walk-in)</Line>
                      <Line smoke>Spending: 180¤</Line>
                    </Section>

                    <Section title="ARRIVING SOON (20:00-21:00)">
                      <Line>• Chen Wei (Alliansen Inc. Board Member) - Pearl Room</Line>
                      <Line>• Diana Volkov (Independent Fixer) - Table 3</Line>
                      <Line>• Kaito Tanaka (Professional Gambler) - Bar seating</Line>
                      <Line>• "Mr. Smith" (Anonymous booking) - Diamond Terrace</Line>
                    </Section>
                  </>
                ),
              },

              "Guest Profiles Database": {
                content: (
                  <>
                    <Line cyan large bold>[GUEST PROFILES DATABASE]</Line>
                    <Line smoke>Confidential records | 847 profiles on file</Line>
                    <Divider />

                    <Section title="SEARCH INTERFACE">
                      <Line neon>Select a profile below for detailed information:</Line>
                    </Section>

                    <Box color="pink">
                      <Line>⚠ CONFIDENTIALITY NOTICE</Line>
                      <Line smoke>These profiles contain sensitive information</Line>
                      <Line smoke>Unauthorized access is grounds for termination</Line>
                    </Box>
                  </>
                ),
                related_commands: {
                  "Profile: Takeshi Yamamoto": {
                    content: (
                      <PersonnelFile
                        employeeId="GUEST-00847"
                        name="Takeshi Yamamoto"
                        age={52}
                        position="VP of Operations"
                        department="Kaytell Makers"
                        hireDate="First visit: 8 months ago"
                        supervisor="N/A"
                        clearanceLevel={5}
                        district="Central District, Executive Housing"
                        performance={95}
                        notes={[
                          "Visits 2-3 times per month, always with business associates",
                          "Prefers window seating, dislikes being seated near kitchen",
                          "Allergic to shellfish - flag immediately with kitchen",
                          "Known corporate espionage target - security monitors table",
                          "Generous tipper (25-30%), treats staff well",
                          "Often discusses sensitive Kaytell business - valuable intel",
                          "Last visit: He mentioned 'Project Eidolon' to his guest",
                        ]}
                        status="ACTIVE VIP"
                      />
                    ),
                  },

                  "Profile: Valentina Cross": {
                    content: (
                      <PersonnelFile
                        employeeId="GUEST-00203"
                        name="Valentina Cross"
                        age={44}
                        position="CEO"
                        department="Cross Media Syndicate"
                        hireDate="First visit: 3 years ago"
                        supervisor="N/A"
                        clearanceLevel={5}
                        district="Upper Central, Penthouse District"
                        performance={92}
                        notes={[
                          "One of our most frequent VIP guests (monthly private dinners)",
                          "Always books Obsidian Suite, requires signal dampening",
                          "Extremely private - staff instructed to minimize interaction",
                          "Known to conduct sensitive business deals during meals",
                          "Security detail waits in lobby during dinners",
                          "Has blacklist of 3 staff members (will not serve her)",
                          "Rumored to have dirt on half the city's power players",
                          "Recent visit: Overheard discussing 'leverage' on a senator",
                        ]}
                        status="PLATINUM VIP"
                      />
                    ),
                  },

                  "Profile: Marcus Delacroix": {
                    content: (
                      <PersonnelFile
                        employeeId="GUEST-00531"
                        name="Marcus Delacroix"
                        age={39}
                        position="Research Director"
                        department="TG Labs"
                        hireDate="First visit: 14 months ago"
                        supervisor="N/A"
                        clearanceLevel={4}
                        district="Green Zone, Research Quarter"
                        performance={88}
                        notes={[
                          "Regular guest (visits every 2-3 weeks)",
                          "Always vegetarian menu, occasionally brings researchers",
                          "Polite but distracted, often working on tablet during meals",
                          "Pays with TG Labs corporate account",
                          "Last visit: Left a data chip on table (returned by staff)",
                          "Security note: Potential target for corporate espionage",
                          "Overheard discussing nano-tech research breakthroughs",
                        ]}
                        status="ACTIVE VIP"
                      />
                    ),
                  },

                  "Profile: Aria Novak": {
                    content: (
                      <PersonnelFile
                        employeeId="GUEST-00692"
                        name="Aria Novak"
                        age={31}
                        position="Investment Banker"
                        department="Spectral FT"
                        hireDate="First visit: 4 months ago"
                        supervisor="N/A"
                        clearanceLevel={3}
                        district="Financial District, High-rise Apartments"
                        performance={79}
                        notes={[
                          "Newer guest, typically walks in for bar seating",
                          "Young professional, climbing corporate ladder quickly",
                          "Often meets with older executives (possible mentors?)",
                          "Drinks heavily - staff watch for overconsumption",
                          "Last visit: Argued loudly with date, asked to quiet down",
                          "Pays with personal credchip, not corporate account",
                          "Friendly with bartender, sometimes overshares about work",
                        ]}
                        status="ACTIVE"
                      />
                    ),
                  },
                },
              },

              "Seating Chart (Current)": {
                content: (
                  <>
                    <Line cyan large bold>[LIVE SEATING CHART]</Line>
                    <Line smoke>Updated in real-time | Current capacity: 78%</Line>
                    <Divider />

                    <Section title="MAIN DINING FLOOR">
                      <Line neon>OCCUPIED (18 of 24 tables):</Line>
                      <Line>• Table 1-6: Standard seating (all occupied)</Line>
                      <Line yellow>• Table 7: Takeshi Yamamoto (VIP - window booth)</Line>
                      <Line>• Table 8-11: Standard seating (occupied)</Line>
                      <Line yellow>• Table 12: Marcus Delacroix (VIP - center)</Line>
                      <Line>• Table 13-17: Standard seating (occupied)</Line>
                      <Line yellow>• Table 18: Aria Novak (bar seating)</Line>
                      <Line>• Table 19-24: Standard seating (4 available)</Line>
                    </Section>

                    <Section title="PRIVATE ROOMS">
                      <Line red bold>• PEARL ROOM: RESERVED (20:30 - Chen Wei party)</Line>
                      <Line neon bold>• OBSIDIAN SUITE: OCCUPIED (Valentina Cross party)</Line>
                      <Line red bold>• DIAMOND TERRACE: RESERVED (21:00 - Mr. Smith)</Line>
                    </Section>

                    <Section title="BAR & LOUNGE">
                      <KeyValue label="Bar Seats" value="7 of 12 occupied" />
                      <KeyValue label="Lounge Area" value="3 of 5 tables occupied" />
                    </Section>

                    <Box color="yellow">
                      <Line>⚠ UPCOMING RESERVATIONS (Next 30 min):</Line>
                      <Line>• 19:15 - Party of 4 (Table 20)</Line>
                      <Line>• 19:30 - Party of 2 (Table 15)</Line>
                      <Line>• 19:45 - Party of 6 (Table 9-10 combined)</Line>
                    </Box>
                  </>
                ),
              },
            },
          },

          "Kitchen Systems": {
            password: {
              pw: "soufflé",
              hint: "The chocolate dessert on tonight's menu",
              hintStrength: 1,
            },
            content: (
              <>
                <Line cyan large bold>[KITCHEN MANAGEMENT SYSTEM]</Line>
                <Line smoke>Back of house operations | Real-time coordination</Line>
                <Divider />

                <Section title="SYSTEM STATUS">
                  <KeyValue label="Active Orders" value="23 tickets" />
                  <KeyValue label="Kitchen Temp" value="28°C (Normal)" />
                  <KeyValue label="Staff on Duty" value="12 personnel" />
                  <KeyValue label="Prep Completion" value="87%" />
                </Section>

                <Box color="yellow">
                  <Line>⚠ ALERT: Table 7 - NO SHELLFISH</Line>
                  <Line smoke>Guest: Takeshi Yamamoto (severe allergy)</Line>
                  <Line smoke>All stations notified | Cross-contamination watch</Line>
                </Box>
              </>
            ),
            related_commands: {
              "Active Orders (Live)": {
                content: (
                  <>
                    <Line cyan large bold>[ACTIVE ORDERS - LIVE FEED]</Line>
                    <Line smoke>Updated every 30 seconds | 23 tickets in queue</Line>
                    <Divider />

                    <Section title="PRIORITY - VIP TABLES">
                      <Line neon bold>TICKET #047 - TABLE 7 (Yamamoto party)</Line>
                      <Line>• Course: Second (mains)</Line>
                      <Line>• Orders: 1x Wagyu beef, 1x Pan-seared halibut</Line>
                      <Line>• Status: PLATING (Est. 3 minutes)</Line>
                      <Line red>• Alert: NO SHELLFISH - Verified clean station</Line>
                      <Line smoke>Assigned: Station 2 (Chef Marie)</Line>
                      <Divider />

                      <Line neon bold>TICKET #051 - OBSIDIAN SUITE (Cross party)</Line>
                      <Line>• Course: First (appetizers)</Line>
                      <Line>• Orders: 3x Foie gras, 2x Tomato tartare, 1x Scallop</Line>
                      <Line>• Status: COOKING (Est. 8 minutes)</Line>
                      <Line smoke>Assigned: Station 1 (Chef Laurent - personal service)</Line>
                      <Divider />

                      <Line neon bold>TICKET #044 - TABLE 12 (Delacroix party)</Line>
                      <Line>• Course: Dessert</Line>
                      <Line>• Orders: 2x Chocolate soufflé, 1x Crème brûlée</Line>
                      <Line>• Status: BAKING (Est. 12 minutes)</Line>
                      <Line smoke>Assigned: Pastry (Chef Anton)</Line>
                    </Section>

                    <Section title="STANDARD QUEUE (Selected)">
                      <Line>• Ticket #038 - Table 3: Appetizers (READY)</Line>
                      <Line>• Ticket #039 - Table 5: Mains (COOKING - 5 min)</Line>
                      <Line>• Ticket #040 - Table 9: Appetizers (PREP - 10 min)</Line>
                      <Line>• Ticket #041 - Table 11: Desserts (BAKING - 15 min)</Line>
                      <Line>• Ticket #042 - Table 14: Mains (COOKING - 7 min)</Line>
                      <Line smoke>... 13 more tickets in queue</Line>
                    </Section>

                    <Box color="pink">
                      <Line>⚠ DELAY ALERT - Ticket #035 (Table 1)</Line>
                      <Line>Reason: Special dietary modification request</Line>
                      <Line>Est. delay: +8 minutes | Manager notified</Line>
                    </Box>
                  </>
                ),
              },

              "Inventory Status": {
                content: (
                  <>
                    <Line cyan large bold>[KITCHEN INVENTORY]</Line>
                    <Line smoke>Updated: 19:00 | Next delivery: Tomorrow 08:00</Line>
                    <Divider />

                    <Section title="CRITICAL STOCK LEVELS">
                      <Line yellow>⚠ LOW STOCK:</Line>
                      <Line>• Foie gras: 4 portions remaining</Line>
                      <Line>• Wagyu beef: 6 portions remaining</Line>
                      <Line>• Fresh scallops: 8 portions remaining</Line>
                      <Line smoke>→ Recommend 86'ing after current reservations</Line>
                    </Section>

                    <Section title="ADEQUATE STOCK">
                      <Line neon>GOOD LEVELS:</Line>
                      <DataTable
                        data={[
                          { label: "Halibut", value: "18 portions" },
                          { label: "Heirloom tomatoes", value: "2.5kg" },
                          { label: "Asparagus", value: "4kg" },
                          { label: "Chocolate (dark)", value: "1.2kg" },
                          { label: "Eggs (fresh)", value: "3 dozen" },
                          { label: "Cream (heavy)", value: "4 liters" },
                        ]}
                      />
                    </Section>

                    <Section title="BEVERAGE INVENTORY">
                      <DataTable
                        data={[
                          { label: "Wine (red)", value: "23 bottles" },
                          { label: "Wine (white)", value: "31 bottles" },
                          { label: "Champagne", value: "12 bottles" },
                          { label: "Sake (premium)", value: "8 bottles" },
                          { label: "Spirits (assorted)", value: "Fully stocked" },
                        ]}
                      />
                    </Section>

                    <Box color="red">
                      <Line bold>🚨 CRITICAL: Fresh berries depleted</Line>
                      <Line>Crème brûlée presentation affected</Line>
                      <Line>Solution: Using preserved berry compote</Line>
                    </Box>
                  </>
                ),
              },

              "Prep Station Assignments": {
                content: (
                  <>
                    <Line cyan large bold>[PREP STATION ASSIGNMENTS]</Line>
                    <Line smoke>Current shift: Evening service (18:00-02:00)</Line>
                    <Divider />

                    <Section title="STATION 1 - HOT LINE (MAINS)">
                      <KeyValue label="Chef" value="Marcus Laurent (Head Chef)" />
                      <KeyValue label="Sous Chef" value="Marie Dubois" />
                      <KeyValue label="Status" value="Active - VIP orders priority" />
                      <Line smoke>Current: Wagyu beef, Halibut, Sauces</Line>
                    </Section>

                    <Section title="STATION 2 - GARDE MANGER (COLD)">
                      <KeyValue label="Chef" value="Kenji Matsuda" />
                      <KeyValue label="Assistant" value="Sofia Reyes" />
                      <KeyValue label="Status" value="Active - Appetizers" />
                      <Line smoke>Current: Tartares, Foie gras, Salads</Line>
                    </Section>

                    <Section title="STATION 3 - PASTRY">
                      <KeyValue label="Chef" value="Anton Richter" />
                      <KeyValue label="Assistant" value="Lily Chen" />
                      <KeyValue label="Status" value="Active - Dessert rush" />
                      <Line smoke>Current: Soufflés, Crème brûlée, Plating</Line>
                    </Section>

                    <Section title="STATION 4 - EXPEDITER">
                      <KeyValue label="Expediter" value="Head Chef Laurent (oversight)" />
                      <KeyValue label="Status" value="Coordinating all stations" />
                      <Line smoke>Quality control, timing, final plating</Line>
                    </Section>

                    <Section title="SUPPORT STAFF">
                      <Line>• Dishwashers: 2 personnel (Rotation shift)</Line>
                      <Line>• Prep cooks: 3 personnel (Vegetable, Protein, Sauces)</Line>
                      <Line>• Runners: 2 personnel (Kitchen to floor)</Line>
                    </Section>
                  </>
                ),
              },
            },
          },

          "Staff Directory": {
            content: (
              <>
                <Line cyan large bold>[STAFF DIRECTORY]</Line>
                <Line smoke>Current shift: Evening service | 24 staff on duty</Line>
                <Divider />

                <Section title="PERSONNEL CATEGORIES">
                  <Line neon>Select department for roster:</Line>
                  <Line>• Front of House (Host, Servers, Bartenders)</Line>
                  <Line>• Kitchen Staff (Chefs, Prep, Support)</Line>
                  <Line>• Security Personnel (Guards, Surveillance)</Line>
                </Section>
              </>
            ),
            related_commands: {
              "Front of House Staff": {
                content: (
                  <>
                    <Line cyan large bold>[FRONT OF HOUSE ROSTER]</Line>
                    <Line smoke>Evening shift | Guest-facing personnel</Line>
                    <Divider />

                    <Section title="MANAGEMENT">
                      <Line neon bold>ELENA VOSS - General Manager</Line>
                      <Line smoke>Age: 41 | 8 years tenure</Line>
                      <Line smoke>Clearance: Full building access</Line>
                      <Line smoke>Notes: Handles VIP relations, corporate bookings</Line>
                      <Divider />

                      <Line neon bold>JULIAN CROSS - Front of House Manager</Line>
                      <Line smoke>Age: 35 | 4 years tenure</Line>
                      <Line smoke>Clearance: Dining floor, private rooms</Line>
                      <Line smoke>Notes: Oversees seating, service flow, staff</Line>
                    </Section>

                    <Section title="HOST STAND">
                      <Line>• ISABELLE MOREAU - Head Host (Age 29, 3 years)</Line>
                      <Line>• DAVID PARK - Assistant Host (Age 24, 1 year)</Line>
                    </Section>

                    <Section title="SERVERS (Evening Shift)">
                      <Line>• CLAIRE BEAUMONT - Senior Server (VIP specialist)</Line>
                      <Line>• THOMAS WILDE - Server (Main floor)</Line>
                      <Line>• NINA VOLKOV - Server (Main floor)</Line>
                      <Line>• ALEXANDER KIM - Server (Private rooms)</Line>
                      <Line>• SOPHIE LAURENT - Server (Bar & lounge)</Line>
                      <Line>• MARCO RUSSO - Server (Main floor)</Line>
                    </Section>

                    <Section title="BAR STAFF">
                      <Line>• VIKTOR BERGMAN - Head Bartender (15 years exp)</Line>
                      <Line>• JADE CHEN - Bartender (8 years exp)</Line>
                      <Line>• LUCAS MORALES - Barback (Support staff)</Line>
                    </Section>

                    <Section title="SOMMELIER">
                      <Line>• CATHERINE BEAUREGARD - Wine Director</Line>
                      <Line smoke>Age: 48 | Award-winning (International certification)</Line>
                      <Line smoke>Notes: Handles wine pairings, private tastings</Line>
                    </Section>
                  </>
                ),
              },

              "Kitchen Staff": {
                content: (
                  <>
                    <Line cyan large bold>[KITCHEN ROSTER]</Line>
                    <Line smoke>Evening shift | Back of house personnel</Line>
                    <Divider />

                    <Section title="CULINARY LEADERSHIP">
                      <Line neon bold>MARCUS LAURENT - Executive Chef</Line>
                      <Line smoke>Age: 52 | 12 years tenure</Line>
                      <Line smoke>Credentials: Michelin-trained, Paris culinary school</Line>
                      <Line smoke>Notes: Runs all kitchen operations, VIP service</Line>
                      <Divider />

                      <Line neon bold>MARIE DUBOIS - Sous Chef</Line>
                      <Line smoke>Age: 38 | 6 years tenure</Line>
                      <Line smoke>Notes: Second in command, manages hot line</Line>
                    </Section>

                    <Section title="STATION CHEFS">
                      <Line>• KENJI MATSUDA - Garde Manger (Cold station)</Line>
                      <Line>• ANTON RICHTER - Pastry Chef (Desserts)</Line>
                      <Line>• CARLOS MENDEZ - Saucier (Sauces, stocks)</Line>
                    </Section>

                    <Section title="LINE COOKS">
                      <Line>• SOFIA REYES - Line Cook (Garde manger assist)</Line>
                      <Line>• LILY CHEN - Line Cook (Pastry assist)</Line>
                      <Line>• JAMES OKAFOR - Line Cook (Hot line)</Line>
                      <Line>• MAYA PATEL - Line Cook (Prep & vegetables)</Line>
                    </Section>

                    <Section title="SUPPORT STAFF">
                      <Line>• DIEGO VARGAS - Dishwasher (Lead)</Line>
                      <Line>• MINH NGUYEN - Dishwasher</Line>
                      <Line>• PABLO SANTOS - Food Runner</Line>
                      <Line>• EMMA FROST - Food Runner</Line>
                    </Section>
                  </>
                ),
              },

              "Security Personnel": {
                content: (
                  <>
                    <Line cyan large bold>[SECURITY ROSTER]</Line>
                    <Line smoke>Evening shift | Protection & surveillance</Line>
                    <Divider />

                    <Section title="SECURITY MANAGEMENT">
                      <Line neon bold>DMITRI VOLKOV - Security Director</Line>
                      <Line smoke>Age: 45 | Former corporate security (10 years)</Line>
                      <Line smoke>Clearance: Full building, surveillance access</Line>
                      <Line smoke>Notes: Coordinates all security, VIP protection</Line>
                    </Section>

                    <Section title="FLOOR SECURITY">
                      <Line>• JACKSON REED - Floor Security (Main dining)</Line>
                      <Line smoke>Age: 32 | Plainclothes, unarmed</Line>
                      <Line smoke>Notes: Guest observation, de-escalation specialist</Line>
                      <Divider />

                      <Line>• MAYA SANTOS - Floor Security (VIP rooms)</Line>
                      <Line smoke>Age 29 | Plainclothes, concealed sidearm</Line>
                      <Line smoke>Notes: Private room monitoring, VIP escort</Line>
                    </Section>

                    <Section title="ENTRANCE SECURITY">
                      <Line>• MARCUS STONE - Door Security</Line>
                      <Line smoke>Age: 38 | Uniform, visible deterrent</Line>
                      <Line smoke>Notes: Valet coordination, guest screening</Line>
                    </Section>

                    <Section title="SURVEILLANCE">
                      <Line>• KEVIN ZHAO - Surveillance Operator</Line>
                      <Line smoke>Age: 27 | Security office (monitors)</Line>
                      <Line smoke>Notes: Camera feeds, door controls, alerts</Line>
                    </Section>

                    <Box color="red">
                      <Line>⚠ ARMED PERSONNEL: 1 of 5 (Concealed carry)</Line>
                      <Line smoke>Protocol: VIP protection only, extreme situations</Line>
                    </Box>
                  </>
                ),
              },
            },
          },

          access_security_systems: {
            password: {
              pw: "volkov",
              hint: "The security director's last name",
              hintStrength: 3,
            },
            content: (
              <>
                <Line cyan large bold>[SECURITY SYSTEMS ACCESS]</Line>
                <Line smoke>Surveillance & Access Control | Authorized personnel only</Line>
                <Divider />

                <Section title="AVAILABLE SYSTEMS">
                  <Line neon>• Camera Network (4 zones)</Line>
                  <Line neon>• Access Control Panel</Line>
                  <Line neon>• Incident Log (30 days)</Line>
                  <Line neon>• Emergency Protocols</Line>
                </Section>

                <Box color="red">
                  <Line bold>🚨 WARNING: SECURITY AUDIT ACTIVE</Line>
                  <Line>All system access is logged and monitored</Line>
                  <Line>Unauthorized use will trigger immediate response</Line>
                </Box>
              </>
            ),
            related_commands: {
              "Camera Network": {
                content: (
                  <>
                    <Line cyan large bold>[SURVEILLANCE CAMERA NETWORK]</Line>
                    <Line smoke>4 coverage zones | 16 total cameras active</Line>
                    <Divider />

                    <Section title="CAMERA ZONES">
                      <Line neon>SELECT ZONE FOR LIVE FEED:</Line>
                      <Line>• Dining Floor (8 cameras)</Line>
                      <Line>• VIP Rooms (4 cameras)</Line>
                      <Line>• Kitchen & Back of House (3 cameras)</Line>
                      <Line>• Service Corridors (1 camera)</Line>
                    </Section>

                    <Section title="SYSTEM STATUS">
                      <KeyValue label="Active Cameras" value="16 of 16" />
                      <KeyValue label="Recording" value="Continuous (30 day buffer)" />
                      <KeyValue label="Motion Detection" value="Enabled (All zones)" />
                      <KeyValue label="Facial Recognition" value="VIP guests only" />
                    </Section>

                    <Box color="yellow">
                      <Line>⚠ PRIVACY NOTICE:</Line>
                      <Line>VIP rooms have privacy mode available</Line>
                      <Line>Currently active: Obsidian Suite (V. Cross)</Line>
                    </Box>
                  </>
                ),
                related_commands: {
                  "Camera Feed: Dining Floor": {
                    content: (
                      <Camera
                        location="Main Dining Floor"
                        cameraId="CAM-DF-01"
                        status="ACTIVE"
                        coverage="Tables 1-24, Main circulation"
                        details={[
                          "8 cameras covering entire dining floor",
                          "High-resolution feeds with zoom capability",
                          "Audio recording disabled (privacy compliance)",
                          "Motion tracking active on all tables",
                        ]}
                        alerts={[
                          {
                            time: "18:45",
                            message: "VIP guest detected: Takeshi Yamamoto (Table 7)",
                          },
                          {
                            time: "19:12",
                            message: "Large party arriving (Table 9-10 combined)",
                          },
                        ]}
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "dining",
                          hint: "The type of floor this camera watches",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="Main Dining Floor" />,
                      },
                    },
                  },

                  "Camera Feed: VIP Rooms": {
                    content: (
                      <Camera
                        location="VIP Private Rooms"
                        cameraId="CAM-VIP-01"
                        status="ACTIVE (PRIVACY MODE: Obsidian Suite)"
                        coverage="Pearl Room, Obsidian Suite, Diamond Terrace"
                        details={[
                          "4 cameras (1 per room + corridor)",
                          "Privacy mode can be enabled by guests",
                          "Corridor camera always active (security)",
                          "Facial recognition enabled for guest verification",
                        ]}
                        alerts={[
                          {
                            time: "18:30",
                            message: "Privacy mode activated: Obsidian Suite (V. Cross)",
                          },
                          {
                            time: "19:05",
                            message: "Security personnel entered Pearl Room (prep)",
                          },
                        ]}
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "pearl",
                          hint: "The smallest VIP room (one word)",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="VIP Private Rooms" />,
                      },
                    },
                  },

                  "Camera Feed: Kitchen": {
                    content: (
                      <Camera
                        location="Kitchen & Back of House"
                        cameraId="CAM-KIT-01"
                        status="ACTIVE"
                        coverage="All prep stations, storage, loading dock"
                        details={[
                          "3 cameras covering entire kitchen",
                          "Used for training review and quality control",
                          "Chef Laurent has override to disable (rare)",
                          "Loading dock monitored for security",
                        ]}
                        alerts={[
                          {
                            time: "17:45",
                            message: "Delivery arrival: Fresh produce (verified)",
                          },
                          {
                            time: "18:20",
                            message: "Chef Laurent reviewing Station 2 (routine)",
                          },
                        ]}
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "soufflé",
                          hint: "The chocolate dessert (same as kitchen systems)",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="Kitchen & Back of House" />,
                      },
                    },
                  },

                  "Camera Feed: Service Corridors": {
                    content: (
                      <Camera
                        location="Service Corridors"
                        cameraId="CAM-COR-01"
                        status="ACTIVE"
                        coverage="Staff hallways, emergency exits, storage"
                        details={[
                          "1 camera with corridor coverage",
                          "Monitors staff movement and emergency exits",
                          "Connected to access control system",
                          "Low priority unless incident occurs",
                        ]}
                        alerts={[
                          {
                            time: "18:55",
                            message: "Staff member accessed storage (routine)",
                          },
                        ]}
                      />
                    ),
                    related_commands: {
                      "Hack Live Feed": {
                        password: {
                          pw: "corridor",
                          hint: "Another word for hallway",
                          hintStrength: 2,
                        },
                        content: <LiveCameraFeed location="Service Corridors" />,
                      },
                    },
                  },
                },
              },

              "Access Control Panel": {
                content: (
                  <>
                    <Line cyan large bold>[ACCESS CONTROL SYSTEM]</Line>
                    <Line smoke>Door locks, zones, emergency systems</Line>
                    <Divider />

                    <Section title="ZONE CONTROLS">
                      <Line neon>AVAILABLE SYSTEMS:</Line>
                      <Line>• Door Status (All Zones) - View only</Line>
                      <Line>• Lock/Unlock Zones - Requires authorization</Line>
                      <Line>• Emergency Exits Status - View only</Line>
                    </Section>

                    <Box color="yellow">
                      <Line>⚠ AUTHENTICATION REQUIRED</Line>
                      <Line>Door control modifications require manager approval</Line>
                      <Line>Emergency systems override all access controls</Line>
                    </Box>
                  </>
                ),
                related_commands: {
                  "Door Status (All Zones)": {
                    content: (
                      <>
                        <Line cyan large bold>[DOOR STATUS - ALL ZONES]</Line>
                        <Line smoke>Real-time status | Updated every 10 seconds</Line>
                        <Divider />

                        <Section title="MAIN ENTRANCES">
                          <KeyValue label="Front Entrance" value="🟢 UNLOCKED (Valet active)" />
                          <KeyValue label="VIP Entrance" value="🟡 LOCKED (Card access only)" />
                          <KeyValue label="Service Entrance" value="🟡 LOCKED (Staff only)" />
                        </Section>

                        <Section title="INTERNAL DOORS">
                          <KeyValue label="Kitchen Access" value="🟢 UNLOCKED (Service hours)" />
                          <KeyValue label="Storage Rooms" value="🟡 LOCKED (Manager key)" />
                          <KeyValue label="Security Office" value="🔴 LOCKED (Biometric)" />
                          <KeyValue label="Manager's Office" value="🔴 LOCKED (Keycard + PIN)" />
                        </Section>

                        <Section title="VIP ROOMS">
                          <KeyValue
                            label="Pearl Room"
                            value="🟡 LOCKED (Awaiting reservation)"
                          />
                          <KeyValue label="Obsidian Suite" value="🔴 LOCKED (Occupied - V. Cross)" />
                          <KeyValue
                            label="Diamond Terrace"
                            value="🟡 LOCKED (Prep in progress)"
                          />
                        </Section>

                        <Section title="EMERGENCY EXITS">
                          <Line neon>All emergency exits are ARMED:</Line>
                          <Line>• Exit A (Dining floor) - Armed, will trigger alarm</Line>
                          <Line>• Exit B (Kitchen) - Armed, will trigger alarm</Line>
                          <Line>• Exit C (VIP corridor) - Armed, will trigger alarm</Line>
                          <Line smoke>→ Use only in emergency | Silent alarm to security</Line>
                        </Section>
                      </>
                    ),
                  },

                  "Lock/Unlock Zones": {
                    password: {
                      pw: "override",
                      hint: "What you're attempting to do to the system",
                      hintStrength: 3,
                    },
                    content: (
                      <>
                        <Line cyan large bold>[ZONE LOCK CONTROL]</Line>
                        <Line smoke>Manual override | Manager authorization required</Line>
                        <Divider />

                        <Section title="AVAILABLE ACTIONS">
                          <Line neon>SELECT ZONE TO MODIFY:</Line>
                          <Line>• Dining Floor - Lock all non-emergency doors</Line>
                          <Line>• VIP Rooms - Lock/unlock specific room</Line>
                          <Line>• Kitchen - Lock/unlock kitchen access</Line>
                          <Line>• Staff Areas - Lock/unlock storage, offices</Line>
                        </Section>

                        <Box color="red">
                          <Line bold>🚨 CRITICAL WARNING</Line>
                          <Line>Unauthorized door control is logged</Line>
                          <Line>Security will be notified of manual overrides</Line>
                          <Line>Fire safety regulations prohibit dining floor lockdown</Line>
                        </Box>

                        <Section title="EMERGENCY OVERRIDE">
                          <Line red bold>EMERGENCY LOCKDOWN:</Line>
                          <Line smoke>Seals all VIP rooms, locks non-emergency exits</Line>
                          <Line smoke>Triggers silent alarm to corporate security</Line>
                          <Line smoke>Cannot be reversed without manager + security approval</Line>
                        </Section>
                      </>
                    ),
                  },

                  "Emergency Exits Status": {
                    content: (
                      <>
                        <Line cyan large bold>[EMERGENCY EXIT STATUS]</Line>
                        <Line smoke>Fire safety compliance | Always accessible</Line>
                        <Divider />

                        <Section title="EXIT LOCATIONS">
                          <Line neon bold>EXIT A - DINING FLOOR (East wall)</Line>
                          <KeyValue label="Status" value="🟢 ARMED (Functional)" />
                          <KeyValue label="Exit Route" value="→ Emergency stairwell to street" />
                          <KeyValue label="Alarm" value="Silent to security, audible to floor" />
                          <Line smoke>Capacity: 50 people</Line>
                          <Divider />

                          <Line neon bold>EXIT B - KITCHEN (Loading dock)</Line>
                          <KeyValue label="Status" value="🟢 ARMED (Functional)" />
                          <KeyValue label="Exit Route" value="→ Service alley" />
                          <KeyValue label="Alarm" value="Silent to security only" />
                          <Line smoke>Capacity: 30 people (staff priority)</Line>
                          <Divider />

                          <Line neon bold>EXIT C - VIP CORRIDOR (West side)</Line>
                          <KeyValue label="Status" value="🟢 ARMED (Functional)" />
                          <KeyValue label="Exit Route" value="→ Private stairwell to lobby" />
                          <KeyValue label="Alarm" value="Silent to security + VIP alert" />
                          <Line smoke>Capacity: 40 people (VIP priority route)</Line>
                        </Section>

                        <Section title="EVACUATION PROTOCOL">
                          <Line>1. All exits unlock automatically on fire alarm</Line>
                          <Line>2. Emergency lighting activates (30min battery)</Line>
                          <Line>3. Security guides VIPs to Exit C (priority)</Line>
                          <Line>4. Staff assist general evacuation to Exits A & B</Line>
                          <Line>5. Manager coordinates with external emergency services</Line>
                        </Section>

                        <Box color="yellow">
                          <Line>⚠ LAST INSPECTION: 6 days ago (Passed)</Line>
                          <Line>Next inspection: 24 days</Line>
                        </Box>
                      </>
                    ),
                  },
                },
              },

              "Incident Log (30 days)": {
                content: (
                  <IncidentLog
                    title="SECURITY INCIDENT LOG"
                    timeframe="Last 30 days"
                    incidents={[
                      {
                        timestamp: "2 DAYS AGO (21:15)",
                        type: "Verbal Altercation",
                        details: {
                          Location: "Table 14 (Main dining floor)",
                          Parties: "Two male guests, mid-40s, corporate attire",
                          Incident:
                            "Loud argument over business deal. Raised voices, aggressive posturing.",
                          Response:
                            "Floor security (Jackson Reed) intervened. Guests calmed down.",
                          Resolution:
                            "Guests apologized to nearby tables. Finished meal without further issue.",
                          "Follow-up": "Both guests flagged for future monitoring",
                        },
                      },
                      {
                        timestamp: "5 DAYS AGO (23:40)",
                        type: "Intoxicated Guest",
                        details: {
                          Location: "Bar area",
                          Individual: "Female guest, late 20s (Aria Novak - Spectral FT)",
                          Incident:
                            "Over-served at bar. Slurred speech, unsteady. Attempted to order more drinks.",
                          Response:
                            "Bartender (Viktor) cut off service. Manager (Julian Cross) called taxi.",
                          Resolution: "Guest escorted to taxi. No damage or injury.",
                          "Follow-up":
                            "Bartender reminded of service limits. Guest profile updated.",
                        },
                      },
                      {
                        timestamp: "12 DAYS AGO (20:30)",
                        type: "Unauthorized Access Attempt",
                        details: {
                          Location: "VIP corridor (Diamond Terrace entrance)",
                          Individual: "Male guest, early 30s, attempted to enter private room",
                          Incident:
                            "Guest claimed he had reservation. Room was occupied by another party.",
                          Response:
                            "VIP security (Maya Santos) verified reservation. Guest was mistaken.",
                          Resolution:
                            "Guest apologized, seated at correct table (Main floor).",
                          "Follow-up": "Host stand reminded to clearly communicate room assignments.",
                        },
                      },
                      {
                        timestamp: "18 DAYS AGO (22:00)",
                        type: "Medical Emergency",
                        details: {
                          Location: "Table 8 (Main dining floor)",
                          Individual: "Male guest, 60s, possible allergic reaction",
                          Incident:
                            "Guest experienced difficulty breathing after consuming appetizer. Shellfish allergy not disclosed.",
                          Response:
                            "Staff administered epinephrine (on-site emergency kit). Called paramedics.",
                          Resolution:
                            "Guest stabilized, transported to hospital. Full recovery confirmed next day.",
                          "Follow-up":
                            "Kitchen reminded of allergy protocols. Guest allergy added to profile.",
                        },
                      },
                      {
                        timestamp: "25 DAYS AGO (19:50)",
                        type: "Theft Attempt",
                        details: {
                          Location: "Coat check area",
                          Incident:
                            "Coat check attendant noticed guest attempting to claim coat not belonging to them.",
                          Response:
                            "Attendant requested ticket verification. Guest became defensive, left quickly.",
                          Resolution:
                            "Actual coat owner retrieved item without issue. Suspect not identified.",
                          "Follow-up":
                            "Security reviewing entrance camera footage. No further incidents.",
                        },
                      },
                    ]}
                  />
                ),
              },

              "Emergency Protocols": {
                content: (
                  <>
                    <Line cyan large bold>[EMERGENCY PROTOCOLS]</Line>
                    <Line smoke>Critical incident response procedures</Line>
                    <Divider />

                    <Section title="AVAILABLE PROTOCOLS">
                      <Line neon>SELECT PROTOCOL FOR DETAILS:</Line>
                      <Line>• Lockdown Procedures</Line>
                      <Line>• VIP Evacuation Routes</Line>
                      <Line>• Fire Suppression Override</Line>
                    </Section>

                    <Box color="red">
                      <Line bold>🚨 EMERGENCY CONTACTS</Line>
                      <KeyValue label="Security Director" value="Dmitri Volkov (Internal)" />
                      <KeyValue label="General Manager" value="Elena Voss (Internal)" />
                      <KeyValue
                        label="Corporate Security"
                        value="+81-CORP-SECURE (External)"
                      />
                      <KeyValue label="Emergency Services" value="911 (External)" />
                    </Box>
                  </>
                ),
                related_commands: {
                  "Lockdown Procedures": {
                    content: (
                      <>
                        <Line cyan large bold>[LOCKDOWN PROTOCOL]</Line>
                        <Line smoke>Facility security response | Extreme situations only</Line>
                        <Divider />

                        <Section title="ACTIVATION TRIGGERS">
                          <Line red bold>LOCKDOWN INITIATED WHEN:</Line>
                          <Line>• Armed intruder detected on premises</Line>
                          <Line>• Active threat to VIP guest safety</Line>
                          <Line>• Corporate security incident (external order)</Line>
                          <Line>• Manager or Security Director authorization</Line>
                        </Section>

                        <Section title="LOCKDOWN SEQUENCE">
                          <Line neon bold>PHASE 1 - IMMEDIATE (0-30 seconds):</Line>
                          <Line>1. All VIP room doors auto-lock (occupants sealed inside)</Line>
                          <Line>2. Front entrance locks (no entry/exit)</Line>
                          <Line>3. Service entrance locks (staff only via keycard)</Line>
                          <Line>4. Silent alarm sent to corporate security</Line>
                          <Line>5. Emergency exits remain functional (fire code)</Line>
                          <Divider />

                          <Line neon bold>PHASE 2 - CONTAINMENT (30 seconds - 5 minutes):</Line>
                          <Line>1. Security personnel move to defensive positions</Line>
                          <Line>2. All cameras switch to security monitoring mode</Line>
                          <Line>3. Manager makes PA announcement (pre-recorded)</Line>
                          <Line>4. VIP guests notified via private channels</Line>
                          <Line>5. Staff directed to secure stations</Line>
                          <Divider />

                          <Line neon bold>PHASE 3 - RESOLUTION (5+ minutes):</Line>
                          <Line>
                            1. Corporate security arrives (avg. 8 minutes response time)
                          </Line>
                          <Line>2. Threat assessed and neutralized</Line>
                          <Line>3. Manager + Security Director authorize unlocking</Line>
                          <Line>4. Guests evacuated or allowed to resume dining</Line>
                          <Line>5. Incident report filed with corporate</Line>
                        </Section>

                        <Section title="STAFF RESPONSIBILITIES">
                          <Line>• Security: Assess threat, protect VIPs, coordinate response</Line>
                          <Line>• Manager: Activate lockdown, communicate with guests</Line>
                          <Line>• Kitchen: Secure all equipment, stand by for evacuation</Line>
                          <Line>• Servers: Remain calm, reassure guests, await instructions</Line>
                        </Section>

                        <Box color="red">
                          <Line bold>⚠ CRITICAL NOTES:</Line>
                          <Line>• VIP guests CANNOT unlock rooms from inside during lockdown</Line>
                          <Line>• Emergency exits will trigger alarm but remain functional</Line>
                          <Line>• Lockdown duration: Minimum 15 minutes, avg. 30 minutes</Line>
                          <Line>• Last lockdown drill: 3 months ago (Passed)</Line>
                        </Box>
                      </>
                    ),
                  },

                  "VIP Evacuation Routes": {
                    content: (
                      <>
                        <Line cyan large bold>[VIP EVACUATION PROTOCOL]</Line>
                        <Line smoke>Priority extraction procedures | High-value guests</Line>
                        <Divider />

                        <Section title="VIP PRIORITY SYSTEM">
                          <Line neon bold>EVACUATION PRIORITY ORDER:</Line>
                          <Line>1. PLATINUM VIPs (Corporate board, celebrities)</Line>
                          <Line>2. GOLD VIPs (Executives, high-value clients)</Line>
                          <Line>3. STANDARD VIPs (Regular guests, professionals)</Line>
                          <Line>4. General guests (All remaining patrons)</Line>
                          <Line smoke>→ Security escorts VIPs first, then assists general evac</Line>
                        </Section>

                        <Section title="PRIMARY ROUTE - EXIT C (VIP Corridor)">
                          <Line neon bold>PREFERRED EVACUATION PATH:</Line>
                          <Line>1. Security unlocks VIP room doors</Line>
                          <Line>2. VIPs escorted to VIP corridor (west side)</Line>
                          <Line>3. Exit C leads to private stairwell</Line>
                          <Line>4. Stairwell descends to secure ground-level lobby</Line>
                          <Line>5. Corporate vehicles waiting at VIP pickup zone</Line>
                          <Line smoke>
                            → Security priority: Shield VIPs from public/media exposure
                          </Line>
                        </Section>

                        <Section title="SECONDARY ROUTE - KITCHEN EXIT">
                          <Line yellow bold>BACKUP PATH (if Exit C compromised):</Line>
                          <Line>1. VIPs escorted through service corridors</Line>
                          <Line>2. Pass through kitchen to loading dock (Exit B)</Line>
                          <Line>3. Service alley provides discreet exit</Line>
                          <Line>4. Security coordinates vehicle pickup at alternate location</Line>
                          <Line smoke>
                            → Less ideal: Exposes VIPs to staff areas, possible media
                          </Line>
                        </Section>

                        <Section title="EMERGENCY ROUTE - MAIN EXIT">
                          <Line red bold>LAST RESORT (catastrophic emergency):</Line>
                          <Line>1. All guests evacuate via main dining floor (Exit A)</Line>
                          <Line>2. Security forms protective perimeter around VIPs</Line>
                          <Line>3. Emergency stairwell to street level</Line>
                          <Line>4. Public exposure unavoidable</Line>
                          <Line smoke>
                            → Only used if both VIP routes blocked or fire code mandates
                          </Line>
                        </Section>

                        <Section title="CURRENT VIP LOCATIONS">
                          <Line neon>TONIGHT'S VIPs (as of 19:15):</Line>
                          <Line>• Valentina Cross - Obsidian Suite (Exit C - 15 sec)</Line>
                          <Line>• Takeshi Yamamoto - Table 7, main floor (Exit A - 30 sec)</Line>
                          <Line>• Marcus Delacroix - Table 12, main floor (Exit A - 25 sec)</Line>
                          <Line>• Chen Wei - Pearl Room [arriving 20:30] (Exit C - 10 sec)</Line>
                        </Section>

                        <Box color="yellow">
                          <Line>⚠ SECURITY NOTES:</Line>
                          <Line>
                            • Maya Santos (VIP security) assigned to Obsidian Suite tonight
                          </Line>
                          <Line>• Jackson Reed (floor security) monitoring Yamamoto table</Line>
                          <Line>
                            • Corporate security on standby (8 min response) for high-threat VIPs
                          </Line>
                        </Box>
                      </>
                    ),
                  },

                  "Fire Suppression Override": {
                    password: {
                      pw: "sprinkler",
                      hint: "The system that sprays water during fires",
                      hintStrength: 3,
                    },
                    content: (
                      <>
                        <Line cyan large bold>[FIRE SUPPRESSION SYSTEM]</Line>
                        <Line smoke>Emergency override controls | Manager authorization required</Line>
                        <Divider />

                        <Section title="SYSTEM OVERVIEW">
                          <KeyValue label="System Type" value="Wet pipe sprinkler system" />
                          <KeyValue label="Coverage" value="100% (All zones)" />
                          <KeyValue label="Water Source" value="Building main + reserve tanks" />
                          <KeyValue label="Status" value="🟢 ARMED (Fully operational)" />
                          <KeyValue label="Last Test" value="15 days ago (Passed)" />
                        </Section>

                        <Section title="AUTOMATIC ACTIVATION">
                          <Line neon bold>SYSTEM TRIGGERS AUTOMATICALLY:</Line>
                          <Line>• Heat sensors detect 165°F / 74°C (standard threshold)</Line>
                          <Line>• Smoke detectors confirm fire presence</Line>
                          <Line>• Manual pull stations (4 locations in building)</Line>
                          <Line smoke>→ Once triggered, cannot be stopped (safety regulation)</Line>
                        </Section>

                        <Section title="ZONE CONTROLS">
                          <Line yellow bold>MANUAL OVERRIDE OPTIONS:</Line>
                          <Line>1. ZONE ISOLATION - Disable specific zones (pre-emptive)</Line>
                          <Line>2. FULL SYSTEM TEST - Activate all zones (maintenance only)</Line>
                          <Line>3. EMERGENCY SHUTOFF - Stop water flow (post-suppression)</Line>
                          <Line smoke>→ All overrides logged and require manager PIN</Line>
                        </Section>

                        <Box color="red">
                          <Line bold>🚨 CRITICAL WARNINGS:</Line>
                          <Line>• Water damage to VIP rooms: ~50,000¤ per room</Line>
                          <Line>• Kitchen electronics vulnerable: 100,000¤+ damage risk</Line>
                          <Line>• Electrical systems must be shut off before water activation</Line>
                          <Line>
                            • Fire marshal approval required to disable zones during service
                          </Line>
                        </Box>

                        <Section title="ACTIVATION CONSEQUENCES">
                          <Line red bold>IF SYSTEM ACTIVATES:</Line>
                          <Line>• All dining areas flooded (1-2 inches standing water)</Line>
                          <Line>• Service halted immediately (health code violation)</Line>
                          <Line>• Guests evacuated, no re-entry for 24-48 hours</Line>
                          <Line>• Insurance claim filed, corporate investigation initiated</Line>
                          <Line>• Revenue loss: ~80,000¤ per day of closure</Line>
                        </Section>

                        <Section title="MANUAL PULL STATIONS">
                          <Line neon>4 PULL STATION LOCATIONS:</Line>
                          <Line>• Main entrance (near host stand)</Line>
                          <Line>• Kitchen (near prep stations)</Line>
                          <Line>• VIP corridor (near Exit C)</Line>
                          <Line>• Service corridor (near loading dock)</Line>
                        </Section>
                      </>
                    ),
                  },
                },
              },
            },
          },

          access_management_terminal: {
            password: {
              pw: "aurelion",
              hint: "The restaurant's name",
              hintStrength: 3,
            },
            content: (
              <>
                <Line cyan large bold>[MANAGEMENT TERMINAL]</Line>
                <Line smoke>Executive access | Elena Voss authorization required</Line>
                <Divider />

                <Section title="AVAILABLE SYSTEMS">
                  <Line neon>• Financial Records</Line>
                  <Line neon>• Corporate Contracts</Line>
                  <Line neon>• VIP Intelligence Files</Line>
                  <Line neon>• Manager's Office Safe</Line>
                </Section>

                <Box color="red">
                  <Line bold>🚨 HIGHEST SECURITY CLEARANCE</Line>
                  <Line>This terminal contains sensitive corporate data</Line>
                  <Line>All access is monitored and logged</Line>
                  <Line>Unauthorized disclosure is grounds for termination & legal action</Line>
                </Box>
              </>
            ),
            related_commands: {
              "Financial Records": {
                content: (
                  <>
                    <Line cyan large bold>[FINANCIAL RECORDS]</Line>
                    <Line smoke>Revenue, expenses, profitability analysis</Line>
                    <Divider />

                    <Section title="QUICK SUMMARY">
                      <Line neon>Select report for detailed breakdown:</Line>
                      <Line>• Weekly Revenue (Last 7 days)</Line>
                      <Line>• Expense Reports (Monthly)</Line>
                    </Section>

                    <Box color="yellow">
                      <Line>💰 PROFITABILITY SNAPSHOT (This Month):</Line>
                      <KeyValue label="Gross Revenue" value="340,000¤" />
                      <KeyValue label="Operating Expenses" value="180,000¤" />
                      <KeyValue label="Net Profit" value="160,000¤ (47% margin)" />
                    </Box>
                  </>
                ),
                related_commands: {
                  "Weekly Revenue": {
                    content: (
                      <>
                        <Line cyan large bold>[WEEKLY REVENUE REPORT]</Line>
                        <Line smoke>Last 7 days | Detailed breakdown</Line>
                        <Divider />

                        <Section title="DAILY REVENUE">
                          <DataTable
                            data={[
                              { label: "Monday", value: "28,500¤ (68 covers)" },
                              { label: "Tuesday", value: "Closed (Day off)" },
                              { label: "Wednesday", value: "32,000¤ (74 covers)" },
                              { label: "Thursday", value: "35,200¤ (82 covers)" },
                              { label: "Friday", value: "48,500¤ (110 covers)" },
                              { label: "Saturday", value: "52,000¤ (118 covers)" },
                              { label: "Sunday", value: "41,000¤ (95 covers)" },
                            ]}
                          />
                          <Divider />
                          <Line neon bold>WEEKLY TOTAL: 237,200¤</Line>
                          <Line smoke>Average per cover: 434¤</Line>
                        </Section>

                        <Section title="REVENUE BY CATEGORY">
                          <DataTable
                            data={[
                              { label: "Food sales", value: "142,300¤ (60%)" },
                              { label: "Beverage sales", value: "71,200¤ (30%)" },
                              { label: "Private events", value: "18,900¤ (8%)" },
                              { label: "Other (merchandise)", value: "4,800¤ (2%)" },
                            ]}
                          />
                        </Section>

                        <Section title="VIP REVENUE">
                          <Line neon bold>VIP GUEST SPENDING (This Week):</Line>
                          <Line>• Valentina Cross: 8,400¤ (3 visits, Obsidian Suite)</Line>
                          <Line>• Takeshi Yamamoto: 3,200¤ (2 visits, private booths)</Line>
                          <Line>• Chen Wei: 6,500¤ (1 visit, Pearl Room event)</Line>
                          <Line>• Other VIPs: 12,300¤ (Various)</Line>
                          <Divider />
                          <Line smoke>Total VIP revenue: 30,400¤ (13% of weekly total)</Line>
                        </Section>

                        <Box color="yellow">
                          <Line>📊 WEEK-OVER-WEEK COMPARISON:</Line>
                          <Line>Previous week: 221,000¤</Line>
                          <Line neon>Growth: +7.3% (↑ 16,200¤)</Line>
                          <Line smoke>Driven by: Increased VIP bookings (Friday, Saturday)</Line>
                        </Box>
                      </>
                    ),
                  },

                  "Expense Reports": {
                    content: (
                      <>
                        <Line cyan large bold>[MONTHLY EXPENSE REPORT]</Line>
                        <Line smoke>Current month | Operating costs breakdown</Line>
                        <Divider />

                        <Section title="MAJOR EXPENSE CATEGORIES">
                          <DataTable
                            data={[
                              { label: "Food & Beverage (COGS)", value: "95,000¤ (53%)" },
                              { label: "Labor (Salaries + benefits)", value: "52,000¤ (29%)" },
                              { label: "Rent & Utilities", value: "18,000¤ (10%)" },
                              { label: "Marketing & PR", value: "6,500¤ (4%)" },
                              { label: "Equipment & Maintenance", value: "4,200¤ (2%)" },
                              { label: "Insurance & Licensing", value: "2,800¤ (2%)" },
                              { label: "Miscellaneous", value: "1,500¤ (<1%)" },
                            ]}
                          />
                          <Divider />
                          <Line neon bold>TOTAL MONTHLY EXPENSES: 180,000¤</Line>
                        </Section>

                        <Section title="FOOD & BEVERAGE COSTS">
                          <Line neon bold>TOP EXPENSE ITEMS (This Month):</Line>
                          <Line>• Wagyu beef: 18,500¤ (Premium protein)</Line>
                          <Line>• Fresh seafood: 14,200¤ (Halibut, scallops, etc.)</Line>
                          <Line>• Wine & spirits: 22,000¤ (Inventory + pairings)</Line>
                          <Line>• Foie gras & truffles: 12,000¤ (Luxury ingredients)</Line>
                          <Line>• Produce & herbs: 8,500¤ (Fresh, local sourcing)</Line>
                          <Line>• Dairy & eggs: 6,200¤ (Butter, cream, etc.)</Line>
                          <Line>• Other ingredients: 13,600¤ (Miscellaneous)</Line>
                        </Section>

                        <Section title="LABOR BREAKDOWN">
                          <DataTable
                            data={[
                              { label: "Kitchen staff", value: "24,000¤ (46%)" },
                              { label: "Front of house", value: "18,000¤ (35%)" },
                              { label: "Security", value: "6,000¤ (12%)" },
                              { label: "Management", value: "4,000¤ (7%)" },
                            ]}
                          />
                          <Line smoke>→ Includes salaries, tips distribution, benefits</Line>
                        </Section>

                        <Box color="red">
                          <Line>⚠ EXPENSE ALERT: Wine inventory costs up 15%</Line>
                          <Line>Cause: VIP demand for rare vintages</Line>
                          <Line>Action: Adjust pricing on premium pairings (+10¤)</Line>
                        </Box>
                      </>
                    ),
                  },
                },
              },

              "Corporate Contracts": {
                password: {
                  pw: "contracts",
                  hint: "The name of these documents (plural)",
                  hintStrength: 3,
                },
                content: (
                  <>
                    <Line cyan large bold>[CORPORATE CONTRACTS]</Line>
                    <Line smoke>Confidential agreements | Legal partnerships</Line>
                    <Divider />

                    <Section title="ACTIVE CONTRACTS">
                      <Line neon bold>CONTRACT #1: KAYTELL MAKERS</Line>
                      <KeyValue label="Type" value="VIP Hosting Agreement" />
                      <KeyValue label="Duration" value="2 years (18 months remaining)" />
                      <KeyValue label="Value" value="120,000¤ annually" />
                      <Line smoke>
                        Terms: Priority reservations for executives, private rooms at 20%
                        discount, monthly billing
                      </Line>
                      <Line smoke>
                        Contact: Takeshi Yamamoto (VP Operations) - Primary liaison
                      </Line>
                      <Divider />

                      <Line neon bold>CONTRACT #2: CROSS MEDIA SYNDICATE</Line>
                      <KeyValue label="Type" value="Exclusive VIP Partnership" />
                      <KeyValue label="Duration" value="3 years (8 months remaining)" />
                      <KeyValue label="Value" value="200,000¤ annually" />
                      <Line smoke>
                        Terms: Obsidian Suite reserved 1st Friday each month, signal
                        dampening guarantee, NDA enforcement
                      </Line>
                      <Line smoke>
                        Contact: Valentina Cross (CEO) - Requires personal approval for changes
                      </Line>
                      <Divider />

                      <Line neon bold>CONTRACT #3: TG LABS</Line>
                      <KeyValue label="Type" value="Corporate Catering Agreement" />
                      <KeyValue label="Duration" value="1 year (4 months remaining)" />
                      <KeyValue label="Value" value="45,000¤ annually" />
                      <Line smoke>
                        Terms: Weekly lunch service for executives, dietary accommodations,
                        discreet service
                      </Line>
                      <Line smoke>Contact: Marcus Delacroix (Research Director) - Liaison</Line>
                      <Divider />

                      <Line neon bold>CONTRACT #4: SPECTRAL FT BANKS</Line>
                      <KeyValue label="Type" value="Corporate Event Hosting" />
                      <KeyValue label="Duration" value="Ongoing (Annual renewal)" />
                      <KeyValue label="Value" value="~30,000¤ annually (variable)" />
                      <Line smoke>
                        Terms: Quarterly networking events, private room access, beverage
                        packages
                      </Line>
                      <Line smoke>Contact: Various executives (No primary liaison)</Line>
                    </Section>

                    <Box color="yellow">
                      <Line>💼 CONTRACT REVENUE: ~395,000¤ annually</Line>
                      <Line>Represents 12% of total restaurant revenue</Line>
                    </Box>

                    <Section title="PENDING NEGOTIATIONS">
                      <Line red bold>⚠ RENEWAL ALERT - Cross Media Syndicate</Line>
                      <Line>Contract expires in 8 months</Line>
                      <Line>Valentina Cross demands: Exclusive Friday rights, 10% rate cut</Line>
                      <Line>Status: Negotiating (Manager Elena Voss handling)</Line>
                    </Section>
                  </>
                ),
              },

              "VIP Intelligence Files": {
                password: {
                  pw: "intelligence",
                  hint: "Another word for information/data gathering (this file category)",
                  hintStrength: 3,
                },
                content: (
                  <>
                    <Line cyan large bold>[VIP INTELLIGENCE FILES]</Line>
                    <Line smoke>
                      Confidential dossiers | Compiled from observation & surveillance
                    </Line>
                    <Divider />

                    <Box color="red">
                      <Line bold>🚨 EXTREME CONFIDENTIALITY</Line>
                      <Line>These files contain blackmail-grade information</Line>
                      <Line>Unauthorized disclosure will result in immediate termination</Line>
                      <Line>Legal liability: Corporate + personal lawsuits</Line>
                    </Box>

                    <Section title="AVAILABLE DOSSIERS">
                      <Line neon>
                        Intelligence gathered from: Staff observations, camera footage, overheard
                        conversations
                      </Line>
                      <Divider />

                      <Line yellow bold>DOSSIER: TAKESHI YAMAMOTO (Kaytell Makers VP)</Line>
                      <Line>• Discusses Project Eidolon frequently (nano-tech weapon?)</Line>
                      <Line>
                        • Meeting pattern: Always brings same guest (Corporate spy? Buyer?)
                      </Line>
                      <Line>• Personal weakness: Gambling debts (Overheard phone call)</Line>
                      <Line>
                        • Security note: Target of espionage (3 known attempts to plant
                        listening devices)
                      </Line>
                      <Line red>• Leverage potential: HIGH (Corporate espionage blackmail)</Line>
                      <Divider />

                      <Line yellow bold>DOSSIER: VALENTINA CROSS (Cross Media CEO)</Line>
                      <Line>
                        • Known to record private conversations (Hidden recorder found in
                        Obsidian Suite)
                      </Line>
                      <Line>
                        • Mentioned "leverage on Senator Kline" during last visit (Audio
                        captured)
                      </Line>
                      <Line>
                        • Rumored affair with Alliansen Inc. board member (Seen leaving
                        together, 3am)
                      </Line>
                      <Line>
                        • Pays security detail to wait outside (Suggests illegal discussions
                        inside)
                      </Line>
                      <Line red>
                        • Leverage potential: EXTREME (Blackmail files, illegal recordings,
                        political corruption)
                      </Line>
                      <Divider />

                      <Line yellow bold>DOSSIER: MARCUS DELACROIX (TG Labs Director)</Line>
                      <Line>
                        • Left data chip on table (Recovered by staff, contains nano-research
                        data)
                      </Line>
                      <Line>
                        • Overheard discussing "unsanctioned human trials" with guest
                        (Researcher?)
                      </Line>
                      <Line>
                        • Personal detail: Vegetarian due to ethical concerns (Corporate
                        hypocrisy?)
                      </Line>
                      <Line red>
                        • Leverage potential: MEDIUM (Corporate espionage, ethical violations)
                      </Line>
                      <Divider />

                      <Line yellow bold>DOSSIER: ARIA NOVAK (Spectral FT Banker)</Line>
                      <Line>
                        • Heavy drinker - security concern (Twice asked to quiet down)
                      </Line>
                      <Line>
                        • Overshares when intoxicated (Mentioned insider trading to bartender)
                      </Line>
                      <Line>
                        • Meets with older executives frequently (Mentorship or exploitation?)
                      </Line>
                      <Line red>• Leverage potential: LOW (Personal embarrassment only)</Line>
                    </Section>

                    <Section title="FILE USAGE PROTOCOLS">
                      <Line neon bold>AUTHORIZED USES:</Line>
                      <Line>1. Corporate security threat assessment</Line>
                      <Line>2. Manager discretion (Elena Voss only)</Line>
                      <Line>3. Legal defense (if restaurant implicated in VIP actions)</Line>
                      <Divider />

                      <Line red bold>PROHIBITED USES:</Line>
                      <Line>❌ Personal blackmail or extortion</Line>
                      <Line>❌ Sale to third parties (media, competitors, fixers)</Line>
                      <Line>❌ Disclosure to VIP targets</Line>
                    </Section>
                  </>
                ),
              },

              "Manager's Office Safe": {
                password: {
                  pw: "elena",
                  hint: "The general manager's first name",
                  hintStrength: 2,
                },
                content: (
                  <Safe
                    id="aurelion-manager-safe"
                    model="SecureTech Executive 9000"
                    location="Manager's office, behind oil painting"
                    owner="Elena Voss (General Manager)"
                    security="Biometric fingerprint + 6-digit PIN"
                    lastAccess="Yesterday evening (23:15)"
                    physical={[
                      {
                        item: "Cash reserve",
                        desc: "15,000¤ (Emergency operating funds, mixed bills)",
                      },
                      {
                        item: "Corporate contracts",
                        desc: "Physical copies of all VIP agreements (Backup documentation)",
                      },
                      {
                        item: "Master keycards",
                        desc: "3 cards (Full building access, emergency override)",
                      },
                      { item: "Firearm", desc: "9mm handgun (Licensed, 12 rounds loaded)" },
                      {
                        item: "Jewelry",
                        desc: "Personal items, estimated 8,000¤ value (Elena's property)",
                      },
                    ]}
                    digital={[
                      {
                        item: "Encrypted data chip",
                        desc: "VIP intelligence files (Blackmail-grade information)",
                      },
                      {
                        item: "Credchip (Emergency)",
                        desc: "10,000¤ (Transferable, corporate emergency fund)",
                      },
                      {
                        item: "Credchip (Personal)",
                        desc: "5,000¤ (Elena's personal emergency fund)",
                      },
                      {
                        item: "Backup security codes",
                        desc: "Full building access, camera system, fire suppression override",
                      },
                    ]}
                    notes="⚠ Safe is monitored by security system. Opening triggers silent log entry to security director. Tampering triggers audible alarm + security response (Est. 2 min)."
                  />
                ),
              },
            },
          },
        },
      },
    },
  },
};

export default AURELION_COMMANDS;
