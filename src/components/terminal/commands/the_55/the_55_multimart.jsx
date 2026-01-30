import {
  PublicPortal,
  InternalAccess,
  Menu,
  HoursBanner,
  Safe,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
} from "@terminal/TerminalComponents";

export const THE_55_MULTIMART_COMMANDS = {
  "Multimart (Levels 101-124)": {
    content: (
      <PublicPortal
        network="MULTIMART_GUEST"
        signalStrength="medium"
        status="✓ OPEN (24/7)"
        statusColor="neon"
        nowPlaying="Current: Vendor specials rotating hourly"
        notes={[
          "One-stop shop for locals",
          "Cash and credchips accepted",
          "Haggling encouraged - DR14 (DR12 if you're local)",
          "Watch your belongings - pickpockets active",
        ]}
        theme="limeade"
      />
    ),
    related_commands: {
      "Vendor Directory": {
        content: (
          <>
            <Line cyan large bold>[MULTIMART VENDOR DIRECTORY]</Line>
            <Line smoke>Levels 101-124 | Over 50 vendors</Line>
            <Divider />

            <Section title="FEATURED VENDORS">
              <Line neon>• Guillotine Row - Cybertech & prosthetics</Line>
              <Line neon>• Zed's Pawn Shop - General goods & gear</Line>
              <Line neon>• Seams Shrine - Custom clothing & armor</Line>
              <Line neon>• Angela Ammo's Auto-Mart - Food & ammunition</Line>
              <Line neon>• Monday Morning Medicine - Drugs & medical supplies</Line>
              <Line neon>• Carlyle's Cars - Auto repair & parts</Line>
              <Line neon>• Smile Cafe - Best food in The 55</Line>
              <Line neon>• Bio Court - Pets, seeds, fresh catch</Line>
              <Line neon>• Blaster's Hoverboards - Custom rides</Line>
            </Section>

            <Section title="VENDOR NOTES">
              <Line yellow>⚠ Lot #105-3: Temporarily vacant</Line>
              <Line smoke>Fierce bidding war between locals and corpo reps</Line>
              <Divider />
              <Line yellow>⚠ Lots #43, 61, 124: Under renovation</Line>
              <Line smoke>Corporate contractors converting to corpo storefronts</Line>
            </Section>

            <Section title="COMMUNITY SPACE">
              <Line neon bold>THE 55 COMMUNITY CENTRE (Floor 112)</Line>
              <Line smoke>Entire floor converted to fitness, parks, gardens</Line>
              <Line smoke>Replacing what was lost in The REC</Line>
              <Line smoke>Free access to all residents</Line>
            </Section>
          </>
        ),
      },

      "Guillotine Row": {
        content: (
          <>
            <Line cyan large bold>[GUILLOTINE ROW]</Line>
            <Line smoke>Level 103 | Cybertech & Prosthetics</Line>
            <Divider />

            <Section title="ABOUT">
              <Line>Dozens of vendors in one hall selling refurbished prosthetics and cybertech.</Line>
              <Line>Some used, some custom made, others clearly cleaved from wealthy suits.</Line>
            </Section>

            <Section title="SAMPLE INVENTORY">
              <DataTable
                data={[
                  { label: "Cyberarms (used)", value: "800¤ - 2,500¤" },
                  { label: "Cyberlegs (refurb)", value: "1,200¤ - 4,000¤" },
                  { label: "Cybereyes (basic)", value: "600¤" },
                  { label: "Cybereyes (enhanced)", value: "1,800¤" },
                  { label: "Neural interfaces", value: "900¤ - 3,000¤" },
                  { label: "Custom installs", value: "Negotiable" },
                ]}
              />
            </Section>

            <Section title="VENDOR NOTES">
              <Line yellow>⚠ Provenance questionable on premium items</Line>
              <Line smoke>Some tech may be "recently liberated" from corpo suits</Line>
              <Line smoke>Warranty: None. Installation: Extra 200¤</Line>
            </Section>
          </>
        ),
      },

      "Zed's Pawn Shop": {
        content: (
          <>
            <Line cyan large bold>[ZED'S PAWN SHOP]</Line>
            <Line smoke>Level 108 | General goods, gear, and curiosities</Line>
            <Divider />

            <Section title="PROPRIETOR">
              <Line neon bold>ZED</Line>
              <Line>Boisterous man with a cybertech bear head</Line>
              <Line>Fair dealer, good place to find basic gear</Line>
              <Line>Specializes in items "acquired" from rich folks</Line>
            </Section>

            <Section title="INVENTORY CATEGORIES">
              <Line>• Weapons (melee & firearms)</Line>
              <Line>• Armor (light to medium)</Line>
              <Line>• Electronics & tools</Line>
              <Line>• Miscellaneous gear</Line>
              <Line>• "Special acquisitions" (ask Zed directly)</Line>
            </Section>

            <Section title="PRICING">
              <Line neon>Basic gear: Standard prices</Line>
              <Line neon>Used gear: 30-50% off retail</Line>
              <Line neon>"Liberated" corpo gear: Negotiable (DR14 to haggle)</Line>
            </Section>
          </>
        ),
      },

      "Seams Shrine": {
        content: (
          <>
            <Line cyan large bold>[SEAMS SHRINE]</Line>
            <Line smoke>Level 106 | Custom clothing & light armor</Line>
            <Divider />

            <Section title="PROPRIETORS">
              <Line neon bold>THE SAINTS FAMILY</Line>
              <Line>Tailors and second-hand clothing merchants</Line>
              <Line>Locals say they make the best clothes in The 55</Line>
              <Line>Also operate from Alliansen Arms apartment #18</Line>
            </Section>

            <Section title="SERVICES">
              <DataTable
                data={[
                  { label: "Custom tailoring", value: "150¤ - 500¤" },
                  { label: "Armor weaving", value: "200¤ - 800¤" },
                  { label: "Repairs & alterations", value: "30¤ - 100¤" },
                  { label: "Second-hand clothing", value: "10¤ - 80¤" },
                ]}
              />
            </Section>

            <Section title="SPECIALTIES">
              <Line>• StyleGuard fabric integration (-d2 armor)</Line>
              <Line>• Concealed weapon pockets</Line>
              <Line>• Corporate knockoffs (look the part without the price)</Line>
              <Line>• Climate adaptive materials</Line>
            </Section>
          </>
        ),
      },

      "Angela Ammo's Auto-Mart": {
        content: (
          <Menu
            title="ANGELA AMMO'S AUTO-MART"
            subtitle="Level 110 | Food, drinks, and ammunition"
            signType="food"
            categories={[
              {
                name: "FOOD",
                items: [
                  { name: "Pre-packaged proteins", price: "8¤" },
                  { name: "Homemade sandwiches", price: "12¤" },
                  { name: "Synth milkshakes", price: "6¤" },
                  { name: "Fresh fruit (rare)", price: "15¤" },
                ],
              },
              {
                name: "AMMUNITION",
                items: [
                  { name: "9mm (box of 50)", price: "25¤" },
                  { name: "Shotgun shells (box of 25)", price: "30¤" },
                  { name: "Rifle rounds (box of 20)", price: "35¤" },
                  { name: "Special orders", price: "Inquire" },
                ],
              },
            ]}
            footer="⚠ ID required for ammo purchases (loosely enforced)"
          />
        ),
      },

      "Monday Morning Medicine": {
        content: (
          <>
            <Line cyan large bold>[MONDAY MORNING MEDICINE]</Line>
            <Line smoke>Level 109 | Drugs, remedies, medical supplies</Line>
            <Divider />

            <Section title="INVENTORY">
              <Line neon bold>HOME REMEDIES:</Line>
              <DataTable
                data={[
                  { label: "Painkillers (generic)", value: "10¤" },
                  { label: "Antibiotics (bootleg)", value: "25¤" },
                  { label: "Stimulants (mild)", value: "15¤" },
                  { label: "Sleep aids", value: "12¤" },
                ]}
              />
              <Divider />

              <Line neon bold>RECREATIONAL (with beneficial side effects):</Line>
              <DataTable
                data={[
                  { label: "Blackout", value: "30¤" },
                  { label: "Red-juice", value: "40¤" },
                  { label: "Vurt", value: "50¤" },
                  { label: "Faceblock", value: "20¤" },
                ]}
              />
              <Divider />

              <Line neon bold>STOLEN CORPORATE MEDICAL EQUIPMENT:</Line>
              <Line smoke>First aid kits, diagnostic tools, nano-patches</Line>
              <Line smoke>Prices negotiable (DR14 to haggle)</Line>
            </Section>

            <Section title="VENDOR NOTES">
              <Line yellow>⚠ Quality varies - buyer beware</Line>
              <Line smoke>No refunds on "experimental" items</Line>
            </Section>
          </>
        ),
      },

      "Carlyle's Cars": {
        content: (
          <>
            <Line cyan large bold>[CARLYLE'S CARS]</Line>
            <Line smoke>Level 115 | Auto repair & parts</Line>
            <Divider />

            <Section title="PROPRIETORS">
              <Line neon bold>THE CARLYLE FAMILY</Line>
              <Line>Multi-generational auto shop</Line>
              <Line>Worried about corporate buyout attempts</Line>
              <Line>Also operate from Alliansen Arms apartment #13</Line>
            </Section>

            <Section title="SERVICES">
              <DataTable
                data={[
                  { label: "Basic repairs", value: "50¤ - 200¤" },
                  { label: "Engine work", value: "300¤ - 1,500¤" },
                  { label: "Body work", value: "200¤ - 800¤" },
                  { label: "Cyberbike mods", value: "400¤+" },
                  { label: "Diagnostic scan", value: "25¤" },
                ]}
              />
            </Section>

            <Section title="LOCATION NOTES">
              <Line>Near The 55's freight elevators (lower levels access)</Line>
              <Line>Can handle cars, bikes, and small transport vehicles</Line>
              <Line yellow>⚠ Currently facing aggressive corporate buyout offers</Line>
            </Section>
          </>
        ),
      },

      "Smile Cafe": {
        content: (
          <Menu
            title="SMILE CAFE"
            subtitle="Level 114 | Best food in the stack"
            signType="food"
            categories={[
              {
                name: "FOOD",
                items: [
                  { name: "Full breakfast", price: "18¤" },
                  { name: "Greasy burger & fries", price: "15¤" },
                  { name: "Synth-ramen bowl", price: "12¤" },
                  { name: "Mystery meat sandwich", price: "10¤" },
                  { name: "Daily special", price: "20¤" },
                ],
              },
              {
                name: "DRINKS",
                items: [
                  { name: "Coffee (real)", price: "5¤" },
                  { name: "Coffee (synth)", price: "2¤" },
                  { name: "Tea", price: "3¤" },
                  { name: "Soda", price: "4¤" },
                  { name: "Beer (local)", price: "6¤" },
                ],
              },
            ]}
            footer="★ Packed 24/7 | Smokers welcome! | Best food in The 55 according to locals"
          />
        ),
      },

      "Bio Court": {
        content: (
          <>
            <Line cyan large bold>[BIO COURT]</Line>
            <Line smoke>Level 111 | Pets, seeds, fresh catch</Line>
            <Divider />

            <Section title="VENDORS">
              <Line>Various vendors selling artificial pets, synth-seeds, and rare catches</Line>
            </Section>

            <Section title="SAMPLE INVENTORY">
              <DataTable
                data={[
                  { label: "Artificial pets (small)", value: "50¤ - 200¤" },
                  { label: "Gene-spliced pets", value: "400¤ - 2,000¤" },
                  { label: "Synth-seeds (vegetables)", value: "5¤ per pack" },
                  { label: "Synth-seeds (flowers)", value: "8¤ per pack" },
                  { label: "Fresh fish (mutated)", value: "10¤ per kg" },
                  { label: "Fresh fish (non-mutated)", value: "40¤ per kg" },
                ]}
              />
            </Section>

            <Section title="NOTES">
              <Line yellow>⚠ Non-mutated fish cost extra (rare in The City)</Line>
              <Line smoke>Gene-spliced pets require special care instructions</Line>
            </Section>
          </>
        ),
      },

      "Blaster's Hoverboards": {
        content: (
          <>
            <Line cyan large bold>[BLASTER'S HOVERBOARDS]</Line>
            <Line smoke>Level 119 | Custom hoverboards & extreme sports gear</Line>
            <Divider />

            <Section title="PROPRIETOR">
              <Line neon bold>BLASTER</Line>
              <Line>Local legend in underground racing scene</Line>
              <Line>Builds custom boards from scavenged parts</Line>
            </Section>

            <Section title="INVENTORY">
              <DataTable
                data={[
                  { label: "Basic hoverboard", value: "500¤" },
                  { label: "Custom build", value: "1,200¤ - 3,000¤" },
                  { label: "Racing mods", value: "300¤ - 800¤" },
                  { label: "Safety gear", value: "100¤ - 400¤" },
                  { label: "Repairs", value: "50¤+" },
                ]}
              />
            </Section>

            <Section title="SPECIAL OFFER">
              <Line neon bold>FIRST FLIGHT IS FREE!</Line>
              <Line yellow>⚠ Homemade and dangerous</Line>
              <Line smoke>Waiver required. Blaster not responsible for injuries.</Line>
            </Section>
          </>
        ),
      },

      access_vendor_network: {
        password: {
          pw: "multimart",
          hint: "The name of this shopping area",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="MULTIMART VENDOR NETWORK"
            message="VENDOR ACCESS GRANTED"
            networkInfo="⚠ Shared vendor systems - Authorized merchants only"
            theme="limeade"
          />
        ),
        related_commands: {
          "Vendor Communications": {
            content: (
              <>
                <Line cyan large bold>[VENDOR COMMUNICATIONS]</Line>
                <Line smoke>Internal message board | Last 30 days</Line>
                <Divider />

                <Section title="RECENT MESSAGES">
                  <Line neon bold>FROM: Zed (Zed's Pawn Shop)</Line>
                  <Line smoke>Subject: Lot #105-3 bidding war</Line>
                  <Line>
                    "Heard corpo reps offering 50k¤ for the vacant lot. We need to pool
                    resources and outbid them. Who's in?"
                  </Line>
                  <Line yellow>15 vendors replied (mixed support)</Line>
                  <Divider />

                  <Line neon bold>FROM: The Saints (Seams Shrine)</Line>
                  <Line smoke>Subject: Corporate renovation crews</Line>
                  <Line>
                    "Lots 43, 61, and 124 being converted to corpo stores. They're pricing
                    us out. Community meeting this Friday at Smile Cafe?"
                  </Line>
                  <Line yellow>22 vendors confirmed attendance</Line>
                  <Divider />

                  <Line neon bold>FROM: Angela (Angela Ammo's)</Line>
                  <Line smoke>Subject: Pickpocket problem</Line>
                  <Line>
                    "3 customers hit this week alone. Can we pool credits for better
                    security? Or at least share descriptions of known thieves?"
                  </Line>
                  <Line yellow>Ongoing discussion (18 replies)</Line>
                  <Divider />

                  <Line neon bold>FROM: Carlyle's Cars</Line>
                  <Line smoke>Subject: Help needed</Line>
                  <Line>
                    "Corporate buyout pressure getting worse. They're threatening to cut
                    our supply lines. Anyone have contacts outside The 55?"
                  </Line>
                  <Line yellow>12 vendors offered support</Line>
                </Section>
              </>
            ),
          },

          "Collective Inventory": {
            content: (
              <>
                <Line cyan large bold>[SHARED INVENTORY SYSTEM]</Line>
                <Line smoke>Cross-vendor stock tracking</Line>
                <Divider />

                <Section title="HOT ITEMS (High demand)">
                  <Line yellow>⚠ LOW STOCK ALERT:</Line>
                  <Line>• Ammunition (all calibers) - Multiple vendors</Line>
                  <Line>• Fresh food (non-synth) - Bio Court, Smile Cafe</Line>
                  <Line>• Medical supplies - Monday Morning Medicine</Line>
                  <Line>• Cyberlegs (refurbished) - Guillotine Row</Line>
                </Section>

                <Section title="OVERSTOCKED (Deals available)">
                  <Line neon>EXCESS INVENTORY:</Line>
                  <Line>• Synth-clothing (last season) - Seams Shrine (30% off)</Line>
                  <Line>• Basic tools - Zed's Pawn Shop (40% off)</Line>
                  <Line>• Artificial pets (small) - Bio Court (Buy 1 Get 1)</Line>
                </Section>

                <Section title="RECENT ACQUISITIONS">
                  <Line neon bold>NEW STOCK (Last 7 days):</Line>
                  <Line>• High-end corpo cybertech - Guillotine Row (provenance unknown)</Line>
                  <Line>• Luxury vehicle parts - Carlyle's Cars (from wealthy district)</Line>
                  <Line>• Designer clothing (knockoffs) - Seams Shrine</Line>
                </Section>
              </>
            ),
          },

          "Sales Records": {
            password: {
              pw: "vendors",
              hint: "What the merchants in the Multimart are called",
              hintStrength: 1,
            },
            content: (
              <>
                <Line cyan large bold>[SALES RECORDS]</Line>
                <Line smoke>Aggregate vendor revenue | Last 30 days</Line>
                <Divider />

                <Section title="TOP PERFORMING VENDORS">
                  <DataTable
                    data={[
                      { label: "Smile Cafe", value: "18,500¤ (Food & beverage)" },
                      { label: "Guillotine Row", value: "16,200¤ (Cybertech)" },
                      { label: "Zed's Pawn Shop", value: "14,800¤ (General goods)" },
                      { label: "Carlyle's Cars", value: "12,300¤ (Auto repair)" },
                      {
                        label: "Monday Morning Medicine",
                        value: "11,900¤ (Drugs & medical)",
                      },
                    ]}
                  />
                </Section>

                <Section title="TOTAL MULTIMART REVENUE">
                  <Line neon bold>Monthly Total: 142,000¤</Line>
                  <Line smoke>Average per vendor: 2,840¤</Line>
                  <Line smoke>Growth vs. last month: +8%</Line>
                </Section>

                <Section title="TRENDS">
                  <Line yellow>⚠ CONCERNS:</Line>
                  <Line>
                    • Corporate storefronts may reduce foot traffic to local vendors
                  </Line>
                  <Line>• Rising security costs eating into margins</Line>
                  <Line>• Lot #105-3 bidding war draining collective funds</Line>
                  <Divider />

                  <Line neon>OPPORTUNITIES:</Line>
                  <Line>• Community Centre driving more residents to Multimart</Line>
                  <Line>• Increased demand from upper level workers (Kaytell, TG Labs)</Line>
                </Section>
              </>
            ),
          },

          "Security Incidents": {
            content: (
              <>
                <Line cyan large bold>[SECURITY INCIDENT LOG]</Line>
                <Line smoke>Vendor-reported incidents | Last 30 days</Line>
                <Divider />

                <Section title="THEFT & PICKPOCKETING">
                  <Line red bold>INCIDENT #1 (3 days ago):</Line>
                  <Line>Location: Angela Ammo's Auto-Mart</Line>
                  <Line>Type: Shoplifting (ammunition)</Line>
                  <Line>Suspect: Male, 20s, hood obscuring face</Line>
                  <Line>Resolution: Escaped before confrontation</Line>
                  <Divider />

                  <Line red bold>INCIDENT #2 (5 days ago):</Line>
                  <Line>Location: Bio Court</Line>
                  <Line>Type: Pickpocketing (customer credchip stolen)</Line>
                  <Line>Suspect: Female, 30s, professional demeanor</Line>
                  <Line>Resolution: Victim reported to C.O.P. booth (no action taken)</Line>
                  <Divider />

                  <Line red bold>INCIDENT #3 (8 days ago):</Line>
                  <Line>Location: Zed's Pawn Shop</Line>
                  <Line>Type: Armed robbery attempt</Line>
                  <Line>Suspect: 2 males, armed with knives</Line>
                  <Line>
                    Resolution: Zed defended store (suspects fled, one injured)
                  </Line>
                </Section>

                <Section title="VANDALISM">
                  <Line yellow bold>INCIDENT #4 (12 days ago):</Line>
                  <Line>Location: Lot #105-3 (vacant)</Line>
                  <Line>Type: Graffiti and property damage</Line>
                  <Line>Message: "KEEP THE 55 LOCAL"</Line>
                  <Line>
                    Resolution: Community suspects anti-corpo activists (investigation
                    ongoing)
                  </Line>
                </Section>

                <Section title="DISPUTES">
                  <Line yellow bold>INCIDENT #5 (15 days ago):</Line>
                  <Line>Location: Carlyle's Cars</Line>
                  <Line>Type: Verbal altercation with corporate rep</Line>
                  <Line>Details: Corpo rep threatened legal action over buyout refusal</Line>
                  <Line>Resolution: Security escorted corpo rep out, no further action</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_MULTIMART_COMMANDS;
