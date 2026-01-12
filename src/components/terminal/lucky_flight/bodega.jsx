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

export const BODEGA_COMMANDS = {
  "Batu's Bodega (FREE ACCESS)": {
    content: (
      <>
        <Line cyan large bold>✦ BATU'S BODEGA ✦</Line>
        <Line yellow>"Your Neighborhood Corner Store Since 2067"</Line>
        <Divider />
        <Line neon>Connecting to FREE_BODEGA_5G...</Line>
        <Line cyan>[CONNECTION ESTABLISHED]</Line>
        <Divider />
        <DataTable data={[
          { label: "SSID", value: "FREE_BODEGA_5G" },
          { label: "Signal", value: "████░░ (Strong)" },
          { label: "Security", value: "Open Network" },
          { label: "Status", value: "⚠ Store Currently CLOSED" },
        ]} />
        <Divider />
        <Line pink>🎵 Now playing: Underground Radio - Ports District Mix</Line>
        <Line yellow>* Free wifi courtesy of Batu - No purchase necessary</Line>
        <Line yellow>* Please respect bandwidth - Community shared connection</Line>
      </>
    ),
    related_commands: {
      "Deals!": {
        content: (
          <>
            <Line yellow large bold>[TODAY'S SPECIALS]</Line>
            <Line cyan>Updated: 3 days ago (Store closed since)</Line>
            <Divider />
            <Section title="WEEKLY DEALS:">
              <Line neon>• Synth-Ramen 6-pack → 12¤ (was 18¤)</Line>
              <Line neon>• Energy Drinks (any brand) → 2 for 8¤</Line>
              <Line neon>• Protein Bars (expired last week) → 1¤ each</Line>
              <Line neon>• Credchip Top-Up (10¤ value) → 11¤ (includes fee)</Line>
            </Section>
            <Divider />
            <Section title="ALWAYS IN STOCK:">
              <Line yellow>→ Cigarettes (all brands)</Line>
              <Line yellow>→ Lottery tickets (Ports Weekly Draw)</Line>
              <Line yellow>→ Basic first aid supplies</Line>
              <Line yellow>→ Cheap liquor & beer</Line>
              <Line yellow>→ Snacks & candy</Line>
            </Section>
            <Divider />
            <Section title="SERVICES:">
              <Line cyan>✓ Credchip exchange (small fee)</Line>
              <Line cyan>✓ Package pickup/dropoff for couriers</Line>
              <Line cyan>✓ Bathroom access (regulars only)</Line>
              <Line cyan>✓ Free wifi (password: freewifi)</Line>
              <Line cyan>✓ Community bulletin board</Line>
            </Section>
            <Divider />
            <Line pink>"Fair prices. No questions. - Batu"</Line>
          </>
        ),
      },

      "Operating Status": {
        content: (
          <>
            <Line smoke large bold>[STORE STATUS]</Line>
            <Divider />
            <DataTable data={[
              { label: "Current Status", value: "⚠ CLOSED" },
              { label: "Duration", value: "3 days" },
              { label: "Last Transaction", value: "72 hours ago (19:47)" },
              { label: "Owner Contact", value: "NO RESPONSE" },
            ]} />
            <Divider />
            <Section title="NORMAL HOURS:">
              <Line neon>Monday-Saturday: 06:00 - 23:00</Line>
              <Line neon>Sunday: 08:00 - 20:00</Line>
              <Line yellow>Batu sometimes stays open late for regulars</Line>
            </Section>
            <Divider />
            <Section title="LOCATION:">
              <Line cyan>Corner of Drech Ave & 5th Street</Line>
              <Line cyan>Ports/Bigmosse border (4 blocks from Lucky Flight Casino)</Line>
              <Line cyan>Ground floor of old apartment complex</Line>
            </Section>
            <Divider />
            <Line red>⚠ Store appears damaged - front window broken</Line>
            <Line yellow>Neighbors report no sign of Batu for 3 days</Line>
          </>
        ),
      },

      "Bodega Neighborhood Bulletin": {
        content: (
          <>
            <Line smoke large bold>[COMMUNITY BULLETIN BOARD]</Line>
            <Line neon>Accessing physical postings via photo scan...</Line>
            <Divider />
            <Section title="RECENT POSTS:">
              <Line pink>→ "MISSING: Batu, bodega owner. Anyone seen him?"</Line>
              <Line pink>→ "Lucky Flight took another house on our street this week"</Line>
              <Line pink>→ "Can't afford groceries after casino payment this month"</Line>
              <Line pink>→ "4th eviction on our block this year. When does it stop?"</Line>
              <Line pink>→ "Organizing neighborhood meeting - discuss casino problem"</Line>
              <Line pink>→ "We need to do something about that fucking place"</Line>
              <Line pink>→ "Anyone know a good fixer? Asking for a friend..."</Line>
            </Section>
            <Divider />
            <Section title="SERVICES ADVERTISED:">
              <ListItem>Street doc - "Fingers" (2 blocks south, knock 3x)</ListItem>
              <ListItem>Chop shop - Razor's (3 blocks east, alley entrance)</ListItem>
              <ListItem>Black market credchip exchange (fluctuating rates)</ListItem>
              <ListItem>Cyberware installation (unlicensed, cheap)</ListItem>
              <ListItem>Taxi boat service to canal district (negotiable rates)</ListItem>
            </Section>
            <Divider />
            <Line yellow>General mood: Frustrated, angry, desperate</Line>
          </>
        ),
      },

      access_bodega_internal_network: {
        password: {
          pw: "zara",
          hint: "Batu's niece who helps run the store",
          hintStrength: 2,
        },
        content: (
          <>
            <Line smoke large bold>[BODEGA INTERNAL SYSTEMS]</Line>
            <Line cyan>[EMPLOYEE ACCESS GRANTED]</Line>
            <Divider />
            <Section title="AVAILABLE SYSTEMS:">
              <Line neon>→ Security camera archive</Line>
              <Line neon>→ Personnel records</Line>
              <Line neon>→ Inventory database</Line>
            </Section>
            <Divider />
            <Line yellow>Internal network maintained by Batu (basic security)</Line>
          </>
        ),
        related_commands: {
          access_bodega_security_cam: {
            password: {
              pw: "freewifi",
              hint: "The password Batu gives everyone for his network",
              hintStrength: 2,
            },
            content: (
              <>
                <Line smoke large bold>[SECURITY FOOTAGE ARCHIVE]</Line>
                <Line cyan>[ACCESSING LAST 72 HOURS...]</Line>
                <Divider />
                <Section title="3 DAYS AGO (Timeline):">
                  <Line neon>19:15 → Batu closes register (earlier than usual)</Line>
                  <Line neon>19:30 → Last customers exit</Line>
                  <Line neon>19:45 → Batu locks front door, exits</Line>
                  <Line neon>19:47 → Batu walks north on Drech Ave (direction: casino)</Line>
                  <Line yellow>20:00-22:00 → Store empty, lights remain on</Line>
                  <Line yellow>22:15 → Unidentified individual tries door, leaves</Line>
                  <Line red>22:30 → FEED LOST (power outage to building)</Line>
                </Section>
                <Divider />
                <Section title="2 DAYS AGO:">
                  <Line red>No footage - camera offline</Line>
                </Section>
                <Divider />
                <Section title="YESTERDAY:">
                  <Line cyan>07:00 → Power restored, camera active</Line>
                  <Line red>07:15 → Front window shattered (impact visible)</Line>
                  <Line neon>07:16 → Three individuals enter through broken window</Line>
                  <Line neon>07:17-07:45 → Store looted (shelves cleared, register opened)</Line>
                  <Line yellow>07:46 → Stone Eels gang tag spray-painted on wall</Line>
                  <Line neon>07:47 → Individuals exit, head east on foot</Line>
                </Section>
                <Divider />
                <Line yellow>Note: Camera angle doesn't capture Lucky Flight Casino entrance</Line>
              </>
            ),
          },

          query_bodega_personnel: {
            content: (
              <>
                <Line smoke large bold>[PERSONNEL RECORDS]</Line>
                <Line cyan>Active employees: 2</Line>
                <Divider />
                <Section title="EMPLOYEE ROSTER:">
                  <Line neon>→ Batu (Owner/Operator)</Line>
                  <Line neon>→ Zara (Part-time, Batu's niece)</Line>
                </Section>
              </>
            ),
            related_commands: {
              query_batu_personnel_file: {
                password: {
                  pw: "community",
                  hint: "What Batu cares about more than profit",
                  hintStrength: 2,
                },
                content: (
                  <Box color="cyan">
                    <Line cyan large bold>[EMPLOYEE FILE: BATU]</Line>
                    <Divider color="cyan" />
                    <DataTable data={[
                      { label: "Full Name", value: "Batu Khamidov" },
                      { label: "Age", value: "54" },
                      { label: "Position", value: "Owner/Operator" },
                      { label: "Employment Start", value: "May 2067 (15 years)" },
                      { label: "Emergency Contact", value: "Zara Khamidova (niece)" },
                    ]} />
                    <Divider color="cyan" />
                    <Section title="FINANCIAL SUMMARY:">
                      <KeyValue label="Monthly Revenue" value="~800¤ (variable)" />
                      <KeyValue label="Outstanding Debts" value="3,200¤" />
                      <KeyValue label="Primary Creditor" value="CasinoBlizzFunds Inc." />
                      <KeyValue label="Monthly Payment" value="450¤ (auto-debit)" />
                      <KeyValue label="Personal Savings" value="47¤" />
                    </Section>
                    <Divider color="cyan" />
                    <Section title="LOAN DETAILS:">
                      <Line neon>Original Amount: 1,500¤</Line>
                      <Line neon>Purpose: Medical expenses (family emergency)</Line>
                      <Line neon>Date Issued: 18 months ago</Line>
                      <Line neon>Interest Rate: 47% annually</Line>
                      <Line neon>Total Paid To Date: ~8,100¤</Line>
                      <Line neon>Current Balance: 3,200¤</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT BANKING ACTIVITY:">
                      <Line yellow>4 days ago → Transfer OUT: 200¤ (emergency withdrawal)</Line>
                      <Line yellow>3 days ago → No transactions recorded</Line>
                      <Line yellow>2 days ago → Auto-debit FAILED: 450¤ (insufficient funds)</Line>
                      <Line yellow>Yesterday → Auto-debit FAILED: 450¤ (insufficient funds)</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="PERSONAL NOTES (RCD Cloud Backup):">
                      <Line pink>"Can't keep living like this. The neighborhood deserves better."</Line>
                      <Line pink>"If I don't come back, tell Zara I'm sorry."</Line>
                      <Line pink>"Charlie was right. Someone needs to act."</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT COMMUNICATIONS:">
                      <Line neon>4 days ago → Email to Lucky Flight management (debt negotiation request)</Line>
                      <Line neon>4 days ago → Response received: "Request DENIED - Full payment required"</Line>
                      <Line neon>3 days ago → Text to Zara: "Closing early. Don't worry about me."</Line>
                    </Section>
                  </Box>
                ),
              },

              query_zara_personnel_file: {
                content: (
                  <Box color="pink">
                    <Line pink large bold>[EMPLOYEE FILE: ZARA]</Line>
                    <Divider color="pink" />
                    <DataTable data={[
                      { label: "Full Name", value: "Zara Khamidova" },
                      { label: "Age", value: "23" },
                      { label: "Position", value: "Part-time Associate" },
                      { label: "Employment Start", value: "June 2081 (intermittent)" },
                      { label: "Primary Job", value: "Courier (freelance)" },
                      { label: "Relation to Owner", value: "Niece" },
                    ]} />
                    <Divider color="pink" />
                    <Section title="EMPLOYMENT NOTES:">
                      <Line neon>Works bodega shifts between courier jobs</Line>
                      <Line neon>Unpaid labor (family arrangement)</Line>
                      <Line neon>Has keys and security codes for store</Line>
                      <Line neon>Handles deliveries and inventory when Batu unavailable</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="MEDICAL HISTORY (Store Insurance):">
                      <Line yellow>18 months ago: Emergency hospitalization</Line>
                      <Line yellow>Diagnosis: Cyberware rejection syndrome</Line>
                      <Line yellow>Treatment Cost: 1,500¤ (paid by Batu via loan)</Line>
                      <Line yellow>Current Status: Recovered, no ongoing treatment</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="CONTACT INFORMATION:">
                      <Line neon>RCD: zara_k_courier@freenet.cy</Line>
                      <Line neon>Address: 2 blocks north (shares apt with 3 roommates)</Line>
                      <Line neon>Vehicle: Modified cyberbike (courier work)</Line>
                    </Section>
                    <Divider color="pink" />
                    <Section title="RECENT ACTIVITY LOG:">
                      <Line yellow>3 days ago → Shift cancelled by Batu (unusual)</Line>
                      <Line yellow>2 days ago → No contact with store</Line>
                      <Line yellow>Yesterday → Attempted to reach Batu via RCD (no response)</Line>
                      <Line yellow>This morning → Visited store, found damage, filed missing person report</Line>
                    </Section>
                  </Box>
                ),
              },
            },
          },

          query_bodega_inventory: {
            content: (
              <>
                <Line smoke large bold>[INVENTORY DATABASE]</Line>
                <Line yellow>Last updated: 3 days ago (pre-closure)</Line>
                <Divider />
                <Section title="CURRENT STOCK STATUS:">
                  <Line red>⚠ Significant inventory loss detected</Line>
                  <Line red>⚠ Physical count required for accuracy</Line>
                </Section>
                <Divider />
                <Section title="ESTIMATED REMAINING STOCK:">
                  <Line neon>Credchips (loose change in register): Present</Line>
                  <Line neon>Energy drinks/stims: Low stock</Line>
                  <Line neon>First aid supplies: Partial kit remaining</Line>
                  <Line neon>Synth-food rations: Minimal</Line>
                  <Line neon>Batu's personal items: 1 casino chip (sentimental)</Line>
                </Section>
                <Divider />
                <Section title="EQUIPMENT STATUS:">
                  <Line cyan>✓ Wifi router: Operational</Line>
                  <Line cyan>✓ Security system: Online</Line>
                  <Line cyan>✓ Under-counter storage: Intact</Line>
                  <Line yellow>? Old taser (Batu's personal defense): Location unknown</Line>
                  <Line yellow>? Fire extinguisher: Should be under counter</Line>
                  <Line yellow>? Bottle inventory: Needs physical inspection</Line>
                </Section>
                <Divider />
                <Line cyan>Store layout unchanged - familiar to regulars</Line>
                <Line yellow>Free wifi still active (password: freewifi)</Line>
              </>
            ),
          },
        },
      },
    },
  },
};

// import {
//   Line,
//   Box,
//   Section,
//   ListItem,
//   Warning,
//   Divider,
//   KeyValue,
//   DataTable,
// } from '../TerminalComponents';

// export const BODEGA_COMMANDS = {
//   "Batu's Bodega (FREE ACCESS)": {
//     content: (
//       <>
//         <Line cyan large bold>[CONNECTING TO NETWORK...]</Line>
//         <Line neon>Connection established</Line>
//         <Divider />
//         <DataTable data={[
//           { label: "SSID", value: "FREE_BODEGA_5G" },
//           { label: "Signal Strength", value: "████░░ (4/6 bars)" },
//           { label: "Security", value: "OPEN (No encryption)" },
//           { label: "Bandwidth", value: "Shared with neighbors" },
//         ]} />
//         <Divider />
//         <Line yellow>* Batu offers free wifi to support the community</Line>
//         <Line red>* Network traffic visible - avoid sensitive operations</Line>
//       </>
//     ),
//     related_commands: {
//       "Bodega Neighborhood Bulletin": {
//         content: (
//           <>
//             <Line smoke large bold>[COMMUNITY BULLETIN BOARD]</Line>
//             <Line neon>Accessing physical postings via photo scan...</Line>
//             <Divider />
//             <Section title="RECENT POSTS:">
//               <Line pink>→ "MISSING: Batu, bodega owner. Anyone seen him?"</Line>
//               <Line pink>→ "Lucky Flight took another house on our street this week"</Line>
//               <Line pink>→ "Can't afford groceries after casino payment this month"</Line>
//               <Line pink>→ "4th eviction on our block this year. When does it stop?"</Line>
//               <Line pink>→ "Organizing neighborhood meeting - discuss casino problem"</Line>
//               <Line pink>→ "We need to do something about that fucking place"</Line>
//               <Line pink>→ "Anyone know a good fixer? Asking for a friend..."</Line>
//             </Section>
//             <Divider />
//             <Section title="SERVICES ADVERTISED:">
//               <ListItem>Street doc ("Fingers" - 2 blocks south)</ListItem>
//               <ListItem>Chop shop (3 blocks east, ask for Razor)</ListItem>
//               <ListItem>Black market credchip exchange</ListItem>
//               <ListItem>Unlicensed cyberware installation</ListItem>
//             </Section>
//             <Divider />
//             <Line yellow>Community sentiment: ANGRY and DESPERATE</Line>
//           </>
//         ),
//       },
//       "Deals!": {

//       },
//       "Operating Status": {
//         content: (
//           <>
//             <Line smoke large bold>[BATU'S BODEGA - STATUS REPORT]</Line>
//             <Divider />
//             <DataTable data={[
//               { label: "Status", value: "⚠ CLOSED (3 days)" },
//               { label: "Owner", value: "Batu (MISSING)" },
//               { label: "Last Transaction", value: "3 days ago, 19:47" },
//               { label: "Security System", value: "OFFLINE" },
//             ]} />
//             <Divider />
//             <Section title="LOCATION DETAILS:">
//               <Line neon>→ Corner store, Ports/Bigmosse border</Line>
//               <Line neon>→ Located near Lucky Flight Casino</Line>
//               <KeyValue label="Building age" value="15 years operating" />
//             </Section>
//             <Divider />
//             <Section title="KNOWN FOR:">
//               <ListItem>Free wifi (password: freewifi)</ListItem>
//               <ListItem>Fair prices (no price gouging during shortages)</ListItem>
//               <ListItem>No questions asked policy</ListItem>
//               <ListItem>Bathroom access for regulars</ListItem>
//               <ListItem>Community bulletin board</ListItem>
//             </Section>
//           </>
//         ),
//       },
//       access_bodega_internal_network: {
//         password: {
//           pw: "zara",
//           hint: "Employee of the Month",
//           hintStrength: 0,
//         },
//         content: (
//           <>
//             <Line yellow>INTERNAL NETWORK ACCESSED</Line>
//           </>
//         ),
//         related_commands: {
//           access_bodega_security_cam: {
//             password: {
//               pw: "freewifi",
//               hint: "The password Batu gives everyone for his network",
//               hintStrength: 2,
//             },
//             content: (
//               <>
//                 <Line smoke large bold>[BODEGA SECURITY FOOTAGE]</Line>
//                 <Line cyan>[ACCESSING LAST 72 HOURS...]</Line>
//                 <Divider />
//                 <Section title="TIMELINE - 3 DAYS AGO:">
//                   <Line neon>19:15 → Batu closes register early (unusual)</Line>
//                   <Line neon>19:30 → Last customers leave</Line>
//                   <Line neon>19:45 → Batu exits through front, heads toward casino</Line>
//                   <Line yellow>19:47 → Batu enters casino (LAST CAMERA SIGHTING)</Line>
//                   <Line neon>20:00-22:00 → No activity (store empty, lights on)</Line>
//                   <Line yellow>22:15 → Unknown person tries front door, leaves after finding it locked</Line>
//                   <Line red>22:30 → CAMERA OFFLINE (power cut to building)</Line>
//                 </Section>
//                 <Divider />
//                 <Section title="TIMELINE - 2 DAYS AGO:">
//                   <Line red>Camera still offline - no footage</Line>
//                 </Section>
//                 <Divider />
//                 <Section title="TIMELINE - YESTERDAY:">
//                   <Line cyan>07:00 → Power restored, camera back online</Line>
//                   <Line red>07:15 → Front window shattered (visible on camera)</Line>
//                   <Line neon>07:16-07:45 → Three individuals loot store</Line>
//                   <Line yellow>Stone Eels gang tag spray-painted on wall</Line>
//                 </Section>
//               </>
//             ),
//           },
//           query_bodega_personsel: {
//             related_commands: {
//               query_batu_personal_file: {
//                 password: {
//                   pw: "community",
//                   hint: "What Batu cares about more than profit",
//                   hintStrength: 2,
//                 },
//                 content: (
//                   <Box color="cyan">
//                     <Line cyan large bold>[BATU'S PERSONAL FILES]</Line>
//                     <Divider color="cyan" />
//                     <Section title="FINANCIAL RECORDS:">
//                       <DataTable data={[
//                         { label: "Outstanding Debts", value: "3,200¤" },
//                         { label: "Owed To", value: "Lucky Flight Casino" },
//                         { label: "Monthly Income", value: "~800¤ (bodega)" },
//                         { label: "Monthly Debt Payment", value: "450¤ (56% of income)" },
//                         { label: "Personal Savings", value: "47¤" },
//                       ]} />
//                     </Section>
//                     <Divider color="cyan" />
//                     <Section title="DEBT HISTORY:">
//                       <Line neon>Original loan: 1,500¤ (medical emergency for niece Zara)</Line>
//                       <Line neon>Interest rate: 47% annually (predatory)</Line>
//                       <Line neon>Payments made: 18 months consecutive</Line>
//                       <Line red>Current balance: 3,200¤ (HIGHER than original loan)</Line>
//                       <Line yellow>Casino refuses debt forgiveness despite overpayment</Line>
//                     </Section>
//                     <Divider color="cyan" />
//                     <Section title="RECENT ACTIVITY:">
//                       <Line yellow>4 days ago → Attempted to negotiate with casino management</Line>
//                       <Line yellow>4 days ago → Request for debt forgiveness DENIED</Line>
//                       <Line yellow>3 days ago → Withdrew 200¤ from emergency savings</Line>
//                       <Line yellow>3 days ago → Closed shop early, walked to casino</Line>
//                       <Line red>3 days ago → Last seen entering Lucky Flight main entrance</Line>
//                     </Section>
//                     <Divider color="cyan" />
//                     <Section title="PERSONAL NOTES (Found on RCD):">
//                       <Line pink>"Can't keep living like this. The neighborhood deserves better."</Line>
//                       <Line pink>"If I don't come back, tell Zara I'm sorry."</Line>
//                       <Line pink>"Charlie was right. Someone needs to act."</Line>
//                     </Section>
//                     <Divider color="cyan" />
//                     <Warning>ASSESSMENT: Batu attempted solo infiltration to destroy his debt records</Warning>
//                     <Line red>Likely captured and detained by casino security</Line>
//                   </Box>
//                 ),
//               },
//               query_zara_personel_file: {
//                 content: (
//                   <>
//                     <Line smoke large bold>[ZARA - BATU'S NIECE]</Line>
//                     <Divider />
//                     <DataTable data={[
//                       { label: "Name", value: "Zara" },
//                       { label: "Age", value: "Early 20s" },
//                       { label: "Relation", value: "Batu's niece" },
//                       { label: "Occupation", value: "Courier (cyberbike)" },
//                       { label: "Status", value: "Worried about uncle" },
//                     ]} />
//                     <Divider />
//                     <Section title="BACKGROUND:">
//                       <Line neon>Medical emergency 18 months ago (cyberware rejection)</Line>
//                       <Line neon>Batu took out casino loan to pay for her treatment</Line>
//                       <Line yellow>Feels guilty about uncle's debt situation</Line>
//                       <Line neon>Occasionally helps run bodega between courier jobs</Line>
//                     </Section>
//                     <Divider />
//                     <Section title="CURRENT SITUATION:">
//                       <Line red>Hasn't heard from Batu in 3 days</Line>
//                       <Line yellow>Checked bodega, found it closed and damaged</Line>
//                       <Line neon>May appear randomly to check on store</Line>
//                       <Line cyan>Could provide: Food, basic medical supplies, local intel</Line>
//                     </Section>
//                     <Divider />
//                     <Line yellow>If players help find Batu, Zara becomes valuable ally</Line>
//                   </>
//                 ),
//               },
//             }
//           },
//           query_bodega_inventory: {
//             content: (
//               <>
//                 <Line smoke large bold>[BODEGA INVENTORY SYSTEM]</Line>
//                 <Divider />
//                 <Section title="CURRENT STOCK (Post-looting):">
//                   <Line red>Much inventory stolen during 3-day closure</Line>
//                   <Line neon>Remaining items:</Line>
//                   <ListItem indent>2d10¤ in loose credchips (hidden in register)</ListItem>
//                   <ListItem indent>d4 energy drinks/stims (+1 skill check, 1hr)</ListItem>
//                   <ListItem indent>Basic first aid kit (heal d6 HP, 3 uses)</ListItem>
//                   <ListItem indent>d6 synth-food rations</ListItem>
//                   <ListItem indent>Batu's "lucky" casino chip (d6¤ value, sentimental)</ListItem>
//                 </Section>
//                 <Divider />
//                 <Section title="EQUIPMENT (Intact):">
//                   <ListItem indent>Free wifi router (still functional)</ListItem>
//                   <ListItem indent>Old taser (d2 damage, DR12 Toughness or fall prone, 4 charges)</ListItem>
//                   <ListItem indent>Bottle of cheap liquor (makeshift Molotov possible)</ListItem>
//                   <ListItem indent>Fire extinguisher (under counter)</ListItem>
//                 </Section>
//                 <Divider />
//                 <Line cyan>Players can use bodega as safe house and supply cache</Line>
//                 <Line yellow>Wifi password still works: "freewifi"</Line>
//               </>
//             ),
//           },
//         }
//       }
//     },
//   },
// };
