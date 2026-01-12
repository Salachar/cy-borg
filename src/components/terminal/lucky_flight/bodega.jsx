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
        <Line cyan large bold>[CONNECTING TO NETWORK...]</Line>
        <Line neon>Connection established</Line>
        <Divider />
        <DataTable data={[
          { label: "SSID", value: "FREE_BODEGA_5G" },
          { label: "Signal Strength", value: "████░░ (4/6 bars)" },
          { label: "Security", value: "OPEN (No encryption)" },
          { label: "Bandwidth", value: "Shared with neighbors" },
        ]} />
        <Divider />
        <Line yellow>* Batu offers free wifi to support the community</Line>
        <Line red>* Network traffic visible - avoid sensitive operations</Line>
      </>
    ),
    related_commands: {
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
              <ListItem>Street doc ("Fingers" - 2 blocks south)</ListItem>
              <ListItem>Chop shop (3 blocks east, ask for Razor)</ListItem>
              <ListItem>Black market credchip exchange</ListItem>
              <ListItem>Unlicensed cyberware installation</ListItem>
            </Section>
            <Divider />
            <Line yellow>Community sentiment: ANGRY and DESPERATE</Line>
          </>
        ),
      },
      "Operating Status": {
        content: (
          <>
            <Line smoke large bold>[BATU'S BODEGA - STATUS REPORT]</Line>
            <Divider />
            <DataTable data={[
              { label: "Status", value: "⚠ CLOSED (3 days)" },
              { label: "Owner", value: "Batu (MISSING)" },
              { label: "Last Transaction", value: "3 days ago, 19:47" },
              { label: "Security System", value: "OFFLINE" },
            ]} />
            <Divider />
            <Section title="LOCATION DETAILS:">
              <Line neon>→ Corner store, Ports/Bigmosse border</Line>
              <Line neon>→ Located near Lucky Flight Casino</Line>
              <KeyValue label="Building age" value="15 years operating" />
            </Section>
            <Divider />
            <Section title="KNOWN FOR:">
              <ListItem>Free wifi (password: freewifi)</ListItem>
              <ListItem>Fair prices (no price gouging during shortages)</ListItem>
              <ListItem>No questions asked policy</ListItem>
              <ListItem>Bathroom access for regulars</ListItem>
              <ListItem>Community bulletin board</ListItem>
            </Section>
          </>
        ),
      },
      access_bodega_internal_network: {
        password: {
          pw: "zara",
          hint: "Employee of the Month",
          hintStrength: 0,
        },
        content: (
          <>
            <Line yellow>INTERNAL NETWORK ACCESSED</Line>
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
                <Line smoke large bold>[BODEGA SECURITY FOOTAGE]</Line>
                <Line cyan>[ACCESSING LAST 72 HOURS...]</Line>
                <Divider />
                <Section title="TIMELINE - 3 DAYS AGO:">
                  <Line neon>19:15 → Batu closes register early (unusual)</Line>
                  <Line neon>19:30 → Last customers leave</Line>
                  <Line neon>19:45 → Batu exits through front, heads toward casino</Line>
                  <Line yellow>19:47 → Batu enters casino (LAST CAMERA SIGHTING)</Line>
                  <Line neon>20:00-22:00 → No activity (store empty, lights on)</Line>
                  <Line yellow>22:15 → Unknown person tries front door, leaves after finding it locked</Line>
                  <Line red>22:30 → CAMERA OFFLINE (power cut to building)</Line>
                </Section>
                <Divider />
                <Section title="TIMELINE - 2 DAYS AGO:">
                  <Line red>Camera still offline - no footage</Line>
                </Section>
                <Divider />
                <Section title="TIMELINE - YESTERDAY:">
                  <Line cyan>07:00 → Power restored, camera back online</Line>
                  <Line red>07:15 → Front window shattered (visible on camera)</Line>
                  <Line neon>07:16-07:45 → Three individuals loot store</Line>
                  <Line yellow>Stone Eels gang tag spray-painted on wall</Line>
                </Section>
              </>
            ),
          },
          query_bodega_personsel: {
            related_commands: {
              query_batu_personal_files: {
                password: {
                  pw: "community",
                  hint: "What Batu cares about more than profit",
                  hintStrength: 2,
                },
                content: (
                  <Box color="cyan">
                    <Line cyan large bold>[BATU'S PERSONAL FILES]</Line>
                    <Divider color="cyan" />
                    <Section title="FINANCIAL RECORDS:">
                      <DataTable data={[
                        { label: "Outstanding Debts", value: "3,200¤" },
                        { label: "Owed To", value: "Lucky Flight Casino" },
                        { label: "Monthly Income", value: "~800¤ (bodega)" },
                        { label: "Monthly Debt Payment", value: "450¤ (56% of income)" },
                        { label: "Personal Savings", value: "47¤" },
                      ]} />
                    </Section>
                    <Divider color="cyan" />
                    <Section title="DEBT HISTORY:">
                      <Line neon>Original loan: 1,500¤ (medical emergency for niece Zara)</Line>
                      <Line neon>Interest rate: 47% annually (predatory)</Line>
                      <Line neon>Payments made: 18 months consecutive</Line>
                      <Line red>Current balance: 3,200¤ (HIGHER than original loan)</Line>
                      <Line yellow>Casino refuses debt forgiveness despite overpayment</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="RECENT ACTIVITY:">
                      <Line yellow>4 days ago → Attempted to negotiate with casino management</Line>
                      <Line yellow>4 days ago → Request for debt forgiveness DENIED</Line>
                      <Line yellow>3 days ago → Withdrew 200¤ from emergency savings</Line>
                      <Line yellow>3 days ago → Closed shop early, walked to casino</Line>
                      <Line red>3 days ago → Last seen entering Lucky Flight main entrance</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Section title="PERSONAL NOTES (Found on RCD):">
                      <Line pink>"Can't keep living like this. The neighborhood deserves better."</Line>
                      <Line pink>"If I don't come back, tell Zara I'm sorry."</Line>
                      <Line pink>"Charlie was right. Someone needs to act."</Line>
                    </Section>
                    <Divider color="cyan" />
                    <Warning>ASSESSMENT: Batu attempted solo infiltration to destroy his debt records</Warning>
                    <Line red>Likely captured and detained by casino security</Line>
                  </Box>
                ),
              },
              query_batus_niece_zara: {
                content: (
                  <>
                    <Line smoke large bold>[ZARA - BATU'S NIECE]</Line>
                    <Divider />
                    <DataTable data={[
                      { label: "Name", value: "Zara" },
                      { label: "Age", value: "Early 20s" },
                      { label: "Relation", value: "Batu's niece" },
                      { label: "Occupation", value: "Courier (cyberbike)" },
                      { label: "Status", value: "Worried about uncle" },
                    ]} />
                    <Divider />
                    <Section title="BACKGROUND:">
                      <Line neon>Medical emergency 18 months ago (cyberware rejection)</Line>
                      <Line neon>Batu took out casino loan to pay for her treatment</Line>
                      <Line yellow>Feels guilty about uncle's debt situation</Line>
                      <Line neon>Occasionally helps run bodega between courier jobs</Line>
                    </Section>
                    <Divider />
                    <Section title="CURRENT SITUATION:">
                      <Line red>Hasn't heard from Batu in 3 days</Line>
                      <Line yellow>Checked bodega, found it closed and damaged</Line>
                      <Line neon>May appear randomly to check on store</Line>
                      <Line cyan>Could provide: Food, basic medical supplies, local intel</Line>
                    </Section>
                    <Divider />
                    <Line yellow>If players help find Batu, Zara becomes valuable ally</Line>
                  </>
                ),
              },
            }
          },
          query_bodega_inventory: {
            content: (
              <>
                <Line smoke large bold>[BODEGA INVENTORY SYSTEM]</Line>
                <Divider />
                <Section title="CURRENT STOCK (Post-looting):">
                  <Line red>Much inventory stolen during 3-day closure</Line>
                  <Line neon>Remaining items:</Line>
                  <ListItem indent>2d10¤ in loose credchips (hidden in register)</ListItem>
                  <ListItem indent>d4 energy drinks/stims (+1 skill check, 1hr)</ListItem>
                  <ListItem indent>Basic first aid kit (heal d6 HP, 3 uses)</ListItem>
                  <ListItem indent>d6 synth-food rations</ListItem>
                  <ListItem indent>Batu's "lucky" casino chip (d6¤ value, sentimental)</ListItem>
                </Section>
                <Divider />
                <Section title="EQUIPMENT (Intact):">
                  <ListItem indent>Free wifi router (still functional)</ListItem>
                  <ListItem indent>Old taser (d2 damage, DR12 Toughness or fall prone, 4 charges)</ListItem>
                  <ListItem indent>Bottle of cheap liquor (makeshift Molotov possible)</ListItem>
                  <ListItem indent>Fire extinguisher (under counter)</ListItem>
                </Section>
                <Divider />
                <Line cyan>Players can use bodega as safe house and supply cache</Line>
                <Line yellow>Wifi password still works: "freewifi"</Line>
              </>
            ),
          },
        }
      }
    },
  },
};
