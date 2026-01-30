import {
  PublicPortal,
  InternalAccess,
  Menu,
  PersonnelFile,
} from "@terminal/retcomdevice";

import {
  Line,
  Section,
  Divider,
  KeyValue,
  DataTable,
} from "@terminal/TerminalComponents";

export const THE_55_CORP_QUAD_COMMANDS = {
  "Corp Quad (Levels 214-264)": {
    content: (
      <PublicPortal
        network="CORP_QUAD_PUBLIC"
        signalStrength="strong"
        status="✓ OPEN (Limited Hours)"
        statusColor="neon"
        nowPlaying="Corporate muzak and promotional content"
        notes={[
          "50 floors of corporate retail and services",
          "High-end stores, luxury brands, exclusive access",
          "Lower-level residents restricted during peak hours",
          "Corporate security presence throughout",
        ]}
        theme="corporate"
      />
    ),
    related_commands: {
      "Corp Quad Directory": {
        content: (
          <>
            <Line cyan large bold>[CORP QUAD DIRECTORY]</Line>
            <Line smoke>Levels 214-264 | Corporate retail district</Line>
            <Divider />

            <Section title="ABOUT">
              <Line>50 floors dedicated to corporate-owned businesses</Line>
              <Line>Luxury retail, professional services, fine dining</Line>
              <Line>Caters to upper-level residents and corporate personnel</Line>
              <Line>
                Lower-level residents discouraged (but not banned) during peak hours
              </Line>
            </Section>

            <Section title="ACCESS RESTRICTIONS">
              <Line yellow bold>⚠ TIME-BASED RESTRICTIONS:</Line>
              <Line>Peak hours (10:00-20:00): Upper-level residents priority</Line>
              <Line>Lower-level residents may face "random" security checks</Line>
              <Line>Off-peak (20:00-10:00): Open to all stack residents</Line>
              <Line>Some stores have independent credit requirements</Line>
            </Section>

            <Section title="MAJOR LOCATIONS">
              <Line neon>SELECT FOR DETAILS:</Line>
              <Line>• Exotique - High-end fashion boutique</Line>
              <Line>• Stadium of Prophets Returned - Mega-church</Line>
              <Line>• Prime Convoys VIP Station - Executive transit hub</Line>
              <Line>• Founder's Floral Garden - Luxury botanical garden</Line>
              <Line>• Opulence Gallery - Art and collectibles</Line>
              <Line>• The Platinum Club - Members-only social club</Line>
              <Line>• Celestial Cuisine - Fine dining restaurant</Line>
              <Line>• Apex Fitness - Premium gym and spa</Line>
            </Section>

            <Section title="SERVICES AVAILABLE">
              <Line>• Luxury retail shopping</Line>
              <Line>• Fine dining and cafes</Line>
              <Line>• Professional services (legal, financial)</Line>
              <Line>• Personal care and wellness</Line>
              <Line>• Entertainment and leisure</Line>
              <Line>• Corporate meeting spaces</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Exotique": {
            content: (
              <>
                <Line cyan large bold>[EXOTIQUE]</Line>
                <Line smoke>Level 220 | High-end fashion boutique</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Luxury fashion store featuring designer brands</Line>
                  <Line>Custom tailoring and personal styling services</Line>
                  <Line>Exclusive collections not available elsewhere in The 55</Line>
                  <Line>Appointment recommended for personal shopping</Line>
                </Section>

                <Section title="FEATURED BRANDS">
                  <Line neon>AVAILABLE DESIGNERS:</Line>
                  <Line>• CHROME COUTURE - Cyberwear fashion</Line>
                  <Line>• NEON DYNASTY - Neo-Asian luxury</Line>
                  <Line>• VOID COLLECTIVE - Minimalist high-end</Line>
                  <Line>• GLITCH ATELIER - Experimental fashion</Line>
                  <Line>• SYNTH ROYALE - Classic with tech integration</Line>
                </Section>

                <Section title="PRICE RANGES">
                  <DataTable
                    data={[
                      { label: "Accessories", value: "300¤ - 2,000¤" },
                      { label: "Ready-to-wear", value: "1,500¤ - 8,000¤" },
                      { label: "Custom tailoring", value: "3,000¤ - 15,000¤" },
                      { label: "Cyberwear fashion", value: "5,000¤ - 25,000¤" },
                      { label: "Exclusive pieces", value: "10,000¤+" },
                    ]}
                  />
                </Section>

                <Section title="SERVICES">
                  <Line>• Personal styling (500¤ session)</Line>
                  <Line>• Custom fitting and alterations</Line>
                  <Line>• Wardrobe consultation (1,000¤)</Line>
                  <Line>• Exclusive preview events (invitation only)</Line>
                  <Line>• VIP loyalty program (spend 50k¤+ annually)</Line>
                </Section>

                <Section title="CLIENTELE">
                  <Line>Corporate executives</Line>
                  <Line>Spectral Luxvitae residents</Line>
                  <Line>Celebrities and influencers</Line>
                  <Line>Wealthy Green Zone dwellers</Line>
                  <Line yellow>
                    ⚠ Lower-level residents often followed by security
                  </Line>
                </Section>
              </>
            ),
          },

          "Stadium of Prophets Returned": {
            content: (
              <>
                <Line cyan large bold>[STADIUM OF PROPHETS RETURNED]</Line>
                <Line smoke>Levels 230-235 | Mega-church facility</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Massive corporate-backed religious organization</Line>
                  <Line>6 floors including worship space, offices, facilities</Line>
                  <Line>Seats 5,000+ for services</Line>
                  <Line>
                    Officially non-denominational, practically prosperity gospel
                  </Line>
                </Section>

                <Section title="LEADERSHIP">
                  <Line neon bold>PROPHET MARCUS AURELIUS GOLD:</Line>
                  <Line>Charismatic leader, former corporate executive</Line>
                  <Line>Preaches "divine wealth through faith and work"</Line>
                  <Line>Lives in Spectral Luxvitae penthouse</Line>
                  <Line>Net worth estimated at 50+ million credits</Line>
                  <Line yellow>⚠ Controversial figure, accused of exploitation</Line>
                </Section>

                <Section title="SERVICES & SCHEDULE">
                  <Line neon>WORSHIP SERVICES:</Line>
                  <Line>• Sunday Main Service - 10:00 (2,000+ attendance)</Line>
                  <Line>• Wednesday Evening Service - 19:00 (500+ attendance)</Line>
                  <Line>• Friday "Prosperity Prayer" - 18:00 (800+ attendance)</Line>
                  <Line>• Daily morning prayer - 07:00 (100+ attendance)</Line>
                  <Divider />

                  <Line neon>PROGRAMS:</Line>
                  <Line>• "Path to Prosperity" seminars (200¤ per session)</Line>
                  <Line>• Business networking events</Line>
                  <Line>• Youth programs and childcare</Line>
                  <Line>• Marriage and family counseling (donation-based)</Line>
                </Section>

                <Section title="FINANCIAL MODEL">
                  <Line yellow bold>⚠ TITHING EXPECTATIONS:</Line>
                  <Line>Members expected to tithe 10% of income</Line>
                  <Line>"Seed offerings" encouraged for blessings (vary widely)</Line>
                  <Line>VIP seating and private sessions cost extra</Line>
                  <Line>Annual revenue estimated at 15+ million credits</Line>
                </Section>

                <Section title="CONTROVERSY">
                  <Line red bold>COMMUNITY CONCERNS:</Line>
                  <Line>• Exploits desperate lower-level residents</Line>
                  <Line>• Promises prosperity that never materializes</Line>
                  <Line>• Prophet Gold lives lavishly while members struggle</Line>
                  <Line>• Allegations of financial mismanagement</Line>
                  <Line>• Some former members claim cult-like behavior</Line>
                </Section>
              </>
            ),
          },

          "Prime Convoys VIP Station": {
            content: (
              <>
                <Line cyan large bold>[PRIME CONVOYS VIP STATION]</Line>
                <Line smoke>Level 240 | Executive transit hub</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Private transportation service for wealthy residents</Line>
                  <Line>Armored vehicles, personal drivers, luxury interiors</Line>
                  <Line>Direct routes to other premium locations in The City</Line>
                  <Line>Membership-based access (expensive)</Line>
                </Section>

                <Section title="SERVICES">
                  <Line neon bold>VEHICLE OPTIONS:</Line>
                  <Line>• Executive Sedan (standard service)</Line>
                  <Line>• Armored SUV (high-security)</Line>
                  <Line>• Luxury Limousine (special occasions)</Line>
                  <Line>• Corporate Shuttle (group transport)</Line>
                  <Line>• Air Transport (helicopter, premium locations only)</Line>
                </Section>

                <Section title="MEMBERSHIP TIERS">
                  <DataTable
                    data={[
                      {
                        label: "Silver (Basic)",
                        value: "5,000¤/month + 100¤ per ride",
                      },
                      {
                        label: "Gold (Priority)",
                        value: "15,000¤/month + 50¤ per ride",
                      },
                      {
                        label: "Platinum (Unlimited)",
                        value: "50,000¤/month, unlimited rides",
                      },
                    ]}
                  />
                </Section>

                <Section title="DESTINATIONS">
                  <Line>Most premium locations throughout The City</Line>
                  <Line>Corporate headquarters and office buildings</Line>
                  <Line>Luxury shopping districts</Line>
                  <Line>Exclusive clubs and restaurants</Line>
                  <Line>Private estates and gated communities</Line>
                  <Line yellow>⚠ Will NOT transport to lower-class areas</Line>
                </Section>

                <Section title="SECURITY FEATURES">
                  <Line>• Bulletproof glass and armor plating</Line>
                  <Line>• Armed drivers (licensed security personnel)</Line>
                  <Line>• GPS tracking and panic buttons</Line>
                  <Line>• Secure communication systems</Line>
                  <Line>• Backup vehicle on standby for emergencies</Line>
                </Section>
              </>
            ),
          },

          "Founder's Floral Garden": {
            content: (
              <>
                <Line cyan large bold>[FOUNDER'S FLORAL GARDEN]</Line>
                <Line smoke>Levels 245-250 | Luxury botanical garden</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>6-floor vertical garden and park</Line>
                  <Line>Rare and exotic plants from around the world</Line>
                  <Line>Climate-controlled environments for different species</Line>
                  <Line>Named after stack's original corporate founder</Line>
                </Section>

                <Section title="ADMISSION">
                  <DataTable
                    data={[
                      { label: "General admission", value: "50¤" },
                      { label: "Guided tour", value: "100¤ (90 minutes)" },
                      { label: "Private event rental", value: "5,000¤+ per hour" },
                      { label: "Annual membership", value: "2,000¤ (unlimited)" },
                    ]}
                  />
                  <Line yellow>⚠ Lower-level residents often scrutinized at entry</Line>
                </Section>

                <Section title="GARDEN ZONES">
                  <Line neon bold>LEVEL 245-246 - TROPICAL ZONE:</Line>
                  <Line>Rainforest plants, high humidity, waterfalls</Line>
                  <Line>Orchids, bromeliads, exotic ferns</Line>
                  <Divider />

                  <Line neon bold>LEVEL 247-248 - TEMPERATE ZONE:</Line>
                  <Line>Japanese garden, meditation spaces</Line>
                  <Line>Cherry blossoms, bamboo, koi ponds</Line>
                  <Divider />

                  <Line neon bold>LEVEL 249-250 - DESERT ZONE:</Line>
                  <Line>Succulents, cacti, arid climate plants</Line>
                  <Line>Rock formations, sand gardens</Line>
                </Section>

                <Section title="AMENITIES">
                  <Line>• Tea house (reservations required)</Line>
                  <Line>• Photography permitted (no flash)</Line>
                  <Line>• Meditation alcoves and seating areas</Line>
                  <Line>• Gift shop (seeds, books, garden supplies)</Line>
                  <Line>• Educational programs and workshops</Line>
                </Section>

                <Section title="EVENTS">
                  <Line>Popular venue for weddings and corporate events</Line>
                  <Line>Photography sessions (500¤ per hour)</Line>
                  <Line>Botanical society meetings</Line>
                  <Line>Children's educational programs (weekends)</Line>
                </Section>
              </>
            ),
          },

          "Celestial Cuisine": {
            content: (
              <Menu
                title="CELESTIAL CUISINE"
                subtitle="Level 255 | Fine dining restaurant"
                signType="food"
                categories={[
                  {
                    name: "APPETIZERS",
                    items: [
                      {
                        name: "Foie Gras Terrine",
                        price: "45¤",
                        description: "Truffle reduction, brioche",
                      },
                      {
                        name: "Oysters on Ice",
                        price: "60¤",
                        description: "Half dozen, mignonette",
                      },
                      {
                        name: "Tuna Tartare",
                        price: "40¤",
                        description: "Avocado, sesame, wonton",
                      },
                    ],
                  },
                  {
                    name: "MAINS",
                    items: [
                      {
                        name: "Wagyu Beef Tenderloin",
                        price: "120¤",
                        description: "Truffle butter, seasonal vegetables",
                      },
                      {
                        name: "Pan-Seared Sea Bass",
                        price: "85¤",
                        description: "Lemon beurre blanc, asparagus",
                      },
                      {
                        name: "Duck Breast",
                        price: "95¤",
                        description: "Cherry reduction, duck fat potatoes",
                      },
                      {
                        name: "Lobster Thermidor",
                        price: "110¤",
                        description: "Cognac cream, gruyère",
                      },
                    ],
                  },
                  {
                    name: "DESSERTS",
                    items: [
                      {
                        name: "Chocolate Soufflé",
                        price: "25¤",
                        description: "Vanilla ice cream",
                      },
                      {
                        name: "Crème Brûlée",
                        price: "20¤",
                        description: "Fresh berries",
                      },
                      {
                        name: "Tasting Platter",
                        price: "35¤",
                        description: "Chef's selection of 4 desserts",
                      },
                    ],
                  },
                  {
                    name: "WINE",
                    items: [
                      { name: "House Red/White", price: "40¤/bottle" },
                      { name: "Premium Selection", price: "80¤-300¤/bottle" },
                      { name: "Sommelier's Choice", price: "Ask server" },
                    ],
                  },
                ]}
                footer="Reservations strongly recommended | Dress code: Business casual or formal"
              />
            ),
          },

          "The Platinum Club": {
            content: (
              <>
                <Line cyan large bold>[THE PLATINUM CLUB]</Line>
                <Line smoke>Level 260 | Members-only social club</Line>
                <Divider />

                <Section title="ABOUT">
                  <Line>Exclusive social club for wealthy and influential residents</Line>
                  <Line>Networking, entertainment, private dining</Line>
                  <Line>Strict membership requirements</Line>
                  <Line>Ultimate status symbol in The 55</Line>
                </Section>

                <Section title="MEMBERSHIP">
                  <Line red bold>REQUIREMENTS:</Line>
                  <Line>• Minimum net worth: 1,000,000¤</Line>
                  <Line>• Two current member sponsors required</Line>
                  <Line>• Background check and interview</Line>
                  <Line>• Initiation fee: 100,000¤</Line>
                  <Line>• Annual dues: 50,000¤</Line>
                  <Divider />

                  <Line yellow>⚠ CURRENT MEMBERS:</Line>
                  <Line>~150 members total</Line>
                  <Line>Corporate executives, celebrities, politicians</Line>
                  <Line>Old money and new tech billionaires</Line>
                  <Line>Waiting list: 2+ years</Line>
                </Section>

                <Section title="FACILITIES">
                  <Line neon>AVAILABLE TO MEMBERS:</Line>
                  <Line>• Private dining rooms (reservation required)</Line>
                  <Line>• Bar and lounge (premium spirits)</Line>
                  <Line>• Cigar room (rare collection)</Line>
                  <Line>• Library and reading room</Line>
                  <Line>• Business center (secure communications)</Line>
                  <Line>• Game room (poker, billiards)</Line>
                  <Line>• Spa and wellness center</Line>
                  <Line>• Rooftop terrace (members only)</Line>
                </Section>

                <Section title="EVENTS">
                  <Line>Quarterly galas and fundraisers</Line>
                  <Line>Monthly networking dinners</Line>
                  <Line>Guest speaker series (industry leaders)</Line>
                  <Line>Private concerts and performances</Line>
                  <Line>Investment opportunity presentations</Line>
                </Section>

                <Section title="REPUTATION">
                  <Line yellow>COMMUNITY PERCEPTION:</Line>
                  <Line>Symbol of extreme wealth inequality</Line>
                  <Line>Where major business deals happen behind closed doors</Line>
                  <Line>Rumors of political manipulation and corruption</Line>
                  <Line>Some members connected to organized crime</Line>
                  <Line red>Community Outreach considers it emblematic of The 55's problems</Line>
                </Section>
              </>
            ),
          },
        },
      },

      "Hours & Restrictions": {
        content: (
          <>
            <Line cyan large bold>[CORP QUAD OPERATING HOURS]</Line>
            <Line smoke>Access schedules and restrictions</Line>
            <Divider />

            <Section title="GENERAL HOURS">
              <DataTable
                data={[
                  { label: "Retail stores", value: "10:00 - 22:00" },
                  { label: "Restaurants", value: "11:00 - 23:00 (varies)" },
                  { label: "Services", value: "09:00 - 18:00 (weekdays)" },
                  { label: "Stadium of Prophets", value: "See schedule" },
                  { label: "Gardens", value: "08:00 - 20:00" },
                ]}
              />
            </Section>

            <Section title="ACCESS RESTRICTIONS">
              <Line yellow bold>⚠ UNOFFICIAL DISCRIMINATION:</Line>
              <Line>
                Peak hours (10:00-20:00): Lower-level residents face increased scrutiny
              </Line>
              <Line>Security "randomly" stops and questions non-wealthy visitors</Line>
              <Line>Some stores require credit checks before entry</Line>
              <Line>Guards may ask residents to leave if "suspicious"</Line>
              <Divider />

              <Line neon bold>OFF-PEAK HOURS (20:00-10:00):</Line>
              <Line>Reduced security presence</Line>
              <Line>More welcoming to all stack residents</Line>
              <Line>Many premium stores closed (but restaurants open)</Line>
            </Section>

            <Section title="DRESS CODE">
              <Line yellow>EXPECTED ATTIRE:</Line>
              <Line>Business casual minimum for most establishments</Line>
              <Line>Some venues require formal dress (The Platinum Club)</Line>
              <Line>Athletic wear discouraged except at Apex Fitness</Line>
              <Line>Visible poverty (torn clothes, etc.) may draw security</Line>
            </Section>

            <Section title="SECURITY PRESENCE">
              <Line neon>CORPORATE SECURITY PATROLS:</Line>
              <Line>20+ guards on duty during peak hours</Line>
              <Line>10+ guards during off-peak hours</Line>
              <Line>Response time: &lt;3 minutes anywhere in Corp Quad</Line>
              <Line>Authorized to detain and eject "troublemakers"</Line>
            </Section>
          </>
        ),
      },

      "Personnel Directory": {
        content: (
          <>
            <Line cyan large bold>[CORP QUAD PERSONNEL]</Line>
            <Line smoke>Notable staff and business owners</Line>
            <Divider />

            <Section title="MANAGEMENT & SECURITY">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Richard Sterling - Corp Quad Administrator</Line>
              <Line>• Lieutenant James Barrett - Security Chief</Line>
            </Section>

            <Section title="BUSINESS OWNERS">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Madame Vivienne Laurent - Exotique Owner</Line>
              <Line>• Prophet Marcus Aurelius Gold - Stadium Leader</Line>
              <Line>• Chef Antoine Rousseau - Celestial Cuisine</Line>
            </Section>

            <Section title="SERVICE STAFF">
              <Line neon>SELECT NAME FOR DETAILS:</Line>
              <Line>• Isabella Chen - Prime Convoys Manager</Line>
              <Line>• Dr. Helena Yamamoto - Founder's Garden Director</Line>
            </Section>
          </>
        ),
        related_commands: {
          "Richard Sterling": {
            content: (
              <PersonnelFile
                employeeId="CQ-ADM-001"
                name="Richard Sterling"
                age={58}
                position="Corp Quad Administrator"
                department="Management"
                hireDate="12 years ago"
                supervisor="Corporate Consortium (off-site)"
                clearanceLevel={5}
                district="Corp Quad"
                performance={89}
                notes={[
                  "Oversees all Corp Quad operations and businesses",
                  "Former corporate executive, connections to multiple corps",
                  "Prioritizes profits and wealthy clientele",
                  "Views lower-level residents as 'bad for business'",
                  "Instructs security to discourage their presence",
                  "Receives bonuses based on revenue growth",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Lieutenant James Barrett": {
            content: (
              <PersonnelFile
                employeeId="CQ-SEC-001"
                name="Lieutenant James Barrett"
                age={44}
                position="Security Chief"
                department="Corporate Security"
                hireDate="8 years ago"
                supervisor="Richard Sterling"
                clearanceLevel={4}
                district="Corp Quad"
                performance={86}
                notes={[
                  "Commands 30+ security personnel in Corp Quad",
                  "Former military, disciplined approach",
                  "Enforces 'discourage lower-level residents' policy",
                  "Personally uncomfortable with discrimination but follows orders",
                  "Treats genuine threats seriously, ignores shopping-while-poor",
                  "Could be convinced to look the other way for right cause",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Prophet Marcus Aurelius Gold": {
            content: (
              <PersonnelFile
                employeeId="CQ-REL-001"
                name="Prophet Marcus Aurelius Gold"
                age={51}
                position="Religious Leader"
                department="Stadium of Prophets Returned"
                hireDate="7 years ago (founded church)"
                supervisor="None (self-appointed)"
                clearanceLevel={3}
                district="Corp Quad (lives in Spectral Luxvitae)"
                performance={null}
                notes={[
                  "Charismatic mega-church leader worth 50+ million",
                  "Former corporate executive turned religious entrepreneur",
                  "Preaches prosperity gospel, lives lavishly",
                  "Exploits desperate lower-level residents for tithes",
                  "Multiple accusations of financial impropriety (unproven)",
                  "Politically connected, untouchable by local authorities",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Madame Vivienne Laurent": {
            content: (
              <PersonnelFile
                employeeId="CQ-RET-005"
                name="Madame Vivienne Laurent"
                age={47}
                position="Boutique Owner"
                department="Exotique Fashion"
                hireDate="5 years ago (opened store)"
                supervisor="None (owner)"
                clearanceLevel={2}
                district="Corp Quad"
                performance={null}
                notes={[
                  "Owner of Exotique high-end fashion boutique",
                  "Impeccable taste, eye for emerging designers",
                  "Connections to fashion industry worldwide",
                  "Treats all customers with respect (unlike some Corps)",
                  "Will serve lower-level residents if they have credits",
                  "Secret: Also fences stolen luxury goods on the side",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Chef Antoine Rousseau": {
            content: (
              <PersonnelFile
                employeeId="CQ-FD-012"
                name="Chef Antoine Rousseau"
                age={52}
                position="Head Chef & Owner"
                department="Celestial Cuisine"
                hireDate="9 years ago (opened restaurant)"
                supervisor="None (owner)"
                clearanceLevel={2}
                district="Corp Quad"
                performance={null}
                notes={[
                  "Acclaimed chef, multiple culinary awards",
                  "Perfectionist, demands excellence from staff",
                  "Restaurant consistently rated among The 55's best",
                  "Personally trained in Paris, New York, Tokyo",
                  "Treats kitchen staff poorly (high turnover)",
                  "Secretly struggling with gambling addiction",
                ]}
                status="ACTIVE"
              />
            ),
          },

          "Dr. Helena Yamamoto": {
            content: (
              <PersonnelFile
                employeeId="CQ-BOT-003"
                name="Dr. Helena Yamamoto"
                age={39}
                position="Garden Director"
                department="Founder's Floral Garden"
                hireDate="6 years ago"
                supervisor="Richard Sterling"
                clearanceLevel={3}
                district="Corp Quad"
                performance={92}
                notes={[
                  "Botanist and horticulturist, PhD in plant biology",
                  "Passionate about plants and conservation",
                  "Maintains rare and exotic species collection",
                  "Frustrated with Corp Quad's exclusivity policies",
                  "Wants garden accessible to all residents (denied)",
                  "Secretly provides seeds and plants to Eco Hall (Capsule Closets)",
                ]}
                status="ACTIVE"
              />
            ),
          },
        },
      },

      access_corp_services: {
        password: {
          pw: "corporate",
          hint: "What type of businesses are in Corp Quad (______ retail)",
          hintStrength: 1,
        },
        content: (
          <InternalAccess
            name="CORP QUAD SERVICES"
            message="BUSINESS ACCESS GRANTED"
            networkInfo="⚠ Corporate systems - Authorized personnel only"
            theme="corporate"
          />
        ),
        related_commands: {
          "Revenue Reports": {
            content: (
              <>
                <Line cyan large bold>[CORP QUAD REVENUE REPORTS]</Line>
                <Line smoke>Financial performance | Last 30 days</Line>
                <Divider />

                <Section title="TOTAL REVENUE">
                  <Line neon bold>MONTHLY TOTAL: 4,850,000¤</Line>
                  <Line>Average per business: 485,000¤</Line>
                  <Line>Growth vs. previous month: +3.2%</Line>
                  <Line>Year-over-year growth: +12.4%</Line>
                </Section>

                <Section title="TOP PERFORMERS">
                  <DataTable
                    data={[
                      { label: "Stadium of Prophets", value: "890,000¤ (18%)" },
                      { label: "The Platinum Club", value: "720,000¤ (15%)" },
                      { label: "Prime Convoys", value: "650,000¤ (13%)" },
                      { label: "Celestial Cuisine", value: "480,000¤ (10%)" },
                      { label: "Exotique", value: "420,000¤ (9%)" },
                    ]}
                  />
                </Section>

                <Section title="CUSTOMER DEMOGRAPHICS">
                  <Line yellow>BREAKDOWN BY RESIDENCE LEVEL:</Line>
                  <DataTable
                    data={[
                      { label: "Spectral Luxvitae", value: "45% of revenue" },
                      { label: "Green Zone", value: "30% of revenue" },
                      { label: "Corp Quad residents", value: "15% of revenue" },
                      { label: "Other upper levels", value: "8% of revenue" },
                      { label: "Lower levels", value: "2% of revenue" },
                    ]}
                  />
                  <Line smoke>
                    Lower-level residents contribute minimal revenue despite population
                  </Line>
                </Section>

                <Section title="TRENDS">
                  <Line neon bold>GROWTH AREAS:</Line>
                  <Line>• Luxury services (+8% this quarter)</Line>
                  <Line>• Fine dining (+6% this quarter)</Line>
                  <Line>• Private memberships (+4% this quarter)</Line>
                  <Divider />

                  <Line yellow bold>⚠ CONCERNS:</Line>
                  <Line>• Lower-level customer traffic declining (-15%)</Line>
                  <Line>• Increasing complaints about discrimination</Line>
                  <Line>• Community Outreach organizing boycotts</Line>
                </Section>
              </>
            ),
          },

          "Security Incidents": {
            content: (
              <>
                <Line cyan large bold>[SECURITY INCIDENT LOG]</Line>
                <Line smoke>Corp Quad incidents | Last 30 days</Line>
                <Divider />

                <Section title="INCIDENT SUMMARY">
                  <DataTable
                    data={[
                      { label: "Total incidents", value: "47" },
                      { label: "Ejections/removals", value: "23 (49%)" },
                      { label: "Shoplifting", value: "8 (17%)" },
                      { label: "Disturbances", value: "12 (26%)" },
                      { label: "Medical emergencies", value: "3 (6%)" },
                      { label: "Other", value: "1 (2%)" },
                    ]}
                  />
                </Section>

                <Section title="EJECTIONS BREAKDOWN">
                  <Line red bold>23 REMOVALS (Last 30 days):</Line>
                  <Line>Reason: "Suspicious behavior" - 14 incidents (61%)</Line>
                  <Line>Reason: Dress code violations - 5 incidents (22%)</Line>
                  <Line>Reason: Aggressive panhandling - 3 incidents (13%)</Line>
                  <Line>Reason: Actual criminal activity - 1 incident (4%)</Line>
                  <Divider />

                  <Line yellow>⚠ DEMOGRAPHICS OF EJECTED INDIVIDUALS:</Line>
                  <Line>100% were lower-level residents</Line>
                  <Line>0% were Green Zone or higher residents</Line>
                  <Line>
                    Community Outreach claims systematic discrimination (accurate)
                  </Line>
                </Section>

                <Section title="NOTABLE INCIDENTS">
                  <Line neon bold>INCIDENT #CQ-2026-034 (5 days ago):</Line>
                  <Line>Location: Exotique boutique</Line>
                  <Line>Type: Shoplifting attempt</Line>
                  <Line>
                    Details: Lower-level resident attempted to steal designer jacket
                    (2,800¤)
                  </Line>
                  <Line>Resolution: Detained, handed to C.O.P., prosecuted</Line>
                  <Divider />

                  <Line neon bold>INCIDENT #CQ-2026-041 (2 days ago):</Line>
                  <Line>Location: Stadium of Prophets</Line>
                  <Line>Type: Disturbance</Line>
                  <Line>
                    Details: Former member disrupted service, accused Prophet Gold of fraud
                  </Line>
                  <Line>Resolution: Ejected, banned from premises</Line>
                  <Divider />

                  <Line neon bold>INCIDENT #CQ-2026-045 (Yesterday):</Line>
                  <Line>Location: Celestial Cuisine</Line>
                  <Line>Type: Medical emergency</Line>
                  <Line>Details: Diner had allergic reaction to shellfish</Line>
                  <Line>Resolution: Treated on-site, transported to medical facility</Line>
                </Section>

                <Section title="DISCRIMINATION COMPLAINTS">
                  <Line yellow bold>⚠ FILED COMPLAINTS (Last 30 days):</Line>
                  <Line>12 formal complaints to Stack Command</Line>
                  <Line>All from lower-level residents</Line>
                  <Line>Alleging unfair treatment and discrimination</Line>
                  <Line red>
                    Management response: "Security personnel exercising reasonable
                    discretion"
                  </Line>
                  <Line>Community Outreach documenting all incidents for lawsuit</Line>
                </Section>
              </>
            ),
          },

          "Tenant Leases": {
            password: {
              pw: "revenue",
              hint: "What businesses generate (money coming in)",
              hintStrength: 2,
            },
            content: (
              <>
                <Line cyan large bold>[CORP QUAD TENANT LEASES]</Line>
                <Line smoke>Business agreements and rent structure</Line>
                <Divider />

                <Section title="LEASE STRUCTURE">
                  <Line>All businesses pay base rent + percentage of revenue</Line>
                  <Line>Premium locations command higher rates</Line>
                  <Line>Long-term leases (5-10 years standard)</Line>
                  <Line>Corporate Consortium owns all property</Line>
                </Section>

                <Section title="MAJOR TENANTS">
                  <Line neon bold>EXOTIQUE (Level 220):</Line>
                  <KeyValue label="Base rent" value="15,000¤/month" />
                  <KeyValue label="Revenue share" value="8% of gross sales" />
                  <KeyValue label="Lease term" value="7 years remaining" />
                  <Divider />

                  <Line neon bold>STADIUM OF PROPHETS (Levels 230-235):</Line>
                  <KeyValue label="Base rent" value="50,000¤/month (6 floors)" />
                  <KeyValue label="Revenue share" value="5% of donations/revenue" />
                  <KeyValue label="Lease term" value="10 years remaining" />
                  <Divider />

                  <Line neon bold>CELESTIAL CUISINE (Level 255):</Line>
                  <KeyValue label="Base rent" value="20,000¤/month" />
                  <KeyValue label="Revenue share" value="10% of gross sales" />
                  <KeyValue label="Lease term" value="4 years remaining" />
                  <Divider />

                  <Line neon bold>THE PLATINUM CLUB (Level 260):</Line>
                  <KeyValue label="Base rent" value="40,000¤/month" />
                  <KeyValue label="Revenue share" value="12% of membership fees" />
                  <KeyValue label="Lease term" value="8 years remaining" />
                </Section>

                <Section title="TOTAL RENTAL INCOME">
                  <Line neon bold>MONTHLY REVENUE FROM LEASES:</Line>
                  <Line>Base rent (all tenants): 280,000¤</Line>
                  <Line>Revenue share (all tenants): ~420,000¤ average</Line>
                  <Line>Total landlord income: ~700,000¤/month</Line>
                  <Line>Annual: ~8,400,000¤</Line>
                </Section>

                <Section title="LEASE VIOLATIONS">
                  <Line yellow>⚠ CURRENT ISSUES:</Line>
                  <Line>• Celestial Cuisine behind on rent (2 months, negotiating)</Line>
                  <Line>• Small boutique (Level 218) closing (lease termination)</Line>
                  <Line>• Stadium under investigation for tax issues (ongoing)</Line>
                </Section>
              </>
            ),
          },

          "Security Patrol Schedules": {
            content: (
              <>
                <Line cyan large bold>[SECURITY PATROL SCHEDULES]</Line>
                <Line smoke>Guard assignments and coverage</Line>
                <Divider />

                <Section title="SHIFT STRUCTURE">
                  <DataTable
                    data={[
                      { label: "Day shift (08:00-16:00)", value: "12 guards" },
                      { label: "Evening shift (16:00-00:00)", value: "10 guards" },
                      { label: "Night shift (00:00-08:00)", value: "8 guards" },
                      { label: "Total personnel", value: "30 guards" },
                    ]}
                  />
                </Section>

                <Section title="PATROL ZONES">
                  <Line neon bold>ZONE A - RETAIL (Levels 214-230):</Line>
                  <Line>5 guards during peak (10:00-20:00)</Line>
                  <Line>3 guards during off-peak</Line>
                  <Line>Focus: Shoplifting, "undesirable" customers</Line>
                  <Divider />

                  <Line neon bold>ZONE B - SERVICES (Levels 231-250):</Line>
                  <Line>4 guards during peak</Line>
                  <Line>2 guards during off-peak</Line>
                  <Line>Focus: Access control, disturbances</Line>
                  <Divider />

                  <Line neon bold>ZONE C - PREMIUM (Levels 251-264):</Line>
                  <Line>6 guards during peak</Line>
                  <Line>4 guards during off-peak</Line>
                  <Line>Focus: VIP protection, Platinum Club security</Line>
                </Section>

                <Section title="RESPONSE TIMES">
                  <DataTable
                    data={[
                      { label: "Zone A", value: "2-3 minutes" },
                      { label: "Zone B", value: "2-4 minutes" },
                      { label: "Zone C", value: "1-2 minutes (priority)" },
                      { label: "Emergency (all zones)", value: "< 90 seconds" },
                    ]}
                  />
                </Section>

                <Section title="KNOWN GAPS">
                  <Line yellow>⚠ SECURITY VULNERABILITIES:</Line>
                  <Line>Shift changes (08:00, 16:00, 00:00) - 10 minute gaps</Line>
                  <Line>Lunch breaks reduce coverage by 30%</Line>
                  <Line>Night shift (00:00-08:00) minimal staffing</Line>
                  <Line>Service corridors rarely patrolled</Line>
                  <Line>Rooftop and emergency exits not monitored constantly</Line>
                </Section>
              </>
            ),
          },
        },
      },
    },
  },
};

export default THE_55_CORP_QUAD_COMMANDS;
