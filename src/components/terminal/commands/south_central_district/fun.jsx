import {
  Line,
  Section,
  Divider,
  KeyValue,
  InsetBox,
} from '@terminal/TerminalComponents';
import {
  ATM,
  Safe,
  Camera,
  Jukebox,
  MaintenanceAccess,
  VendingMachine,
  PublicPortal,
  FacilityPortal,
  HoursBanner,
  Menu,
  PersonnelFile,
  IncidentLog,
  Workstation,
  Locked,
  CoffeeMachine,
  NetworkDevices,
} from "@terminal/retcomdevice"

export const SOUTH_CENTRAL_FUN_COMMANDS = {
  // ============================================================================
  // GRAVE/MELLBERG/TOSK - MOBSTER LAW FIRM
  // ============================================================================

  "Gravf|Mellberg|Tosk Law Offices": {
    content: (
      <FacilityPortal
        companyName="GRAVE/MELLBERG/TOSK"
        facilityId="LAW-OFFICES-SC-01"
        tagline="We don't get you off. We make sure you never go on trial."
        location="South Central - Corporate Tower, Floors 18-22"
        owner="Partners: Grave, Mellberg, Tosk"
        function="Criminal Defense & Corporate Law"
        personnel="47 lawyers, 23 support staff"
        networkStatus="CORPORATE_SECURE (Client-attorney privilege enforced)"
        securityLevel="HIGH"
        warnings={[
          "All visitors logged and screened",
          "Recording devices prohibited",
          "Armed security on every floor",
          "Client confidentiality enforced by mob connections"
        ]}
        theme="corporate"
      >
        <Divider />
        <Section title="FIRM OVERVIEW:">
          <Line neon bold>The most feared law firm in South Central</Line>
          <Line cyan>• Specialization: Criminal defense, corporate litigation</Line>
          <Line cyan>• Reputation: Never lose (because witnesses disappear)</Line>
          <Line cyan>• Clientele: Organized crime, corrupt corps, wealthy criminals</Line>
          <Line cyan>• Success rate: 98% (cases dismissed or won)</Line>
          <Line cyan>• Known for: Making evidence vanish, witness intimidation</Line>
        </Section>
        <Divider />
        <Section title="THE PARTNERS:">
          <Line yellow bold>Marcus Grave:</Line>
          <Line yellow>• Senior partner, former prosecutor turned defense</Line>
          <Line yellow>• Specializes in making murder charges disappear</Line>

          <Divider />

          <Line yellow bold>Helena Mellberg:</Line>
          <Line yellow>• Corporate litigation expert</Line>
          <Line yellow>• Has dirt on every judge in Central District</Line>

          <Divider />

          <Line yellow bold>Viktor Tosk:</Line>
          <Line yellow>• Former mob enforcer with law degree</Line>
          <Line yellow>• Handles "delicate negotiations"</Line>
        </Section>
        <Divider />
        <Line smoke small>
          They say if you can afford Grave/Mellberg/Tosk, you can afford to get away with murder.
          They're not wrong.
        </Line>
      </FacilityPortal>
    ),
    related_commands: {
      "Reception Area": {
        content: (
          <MaintenanceAccess
            title="[RECEPTION - FLOOR 18]"
            deviceModel="Client Services Area"
            deviceId="GMT-RECEPTION-18"
            firmwareVersion="v3.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Marble floors, leather furniture",
              "Armed security guard at desk",
              "All visitors must sign in (names logged)",
              "Magazines: Luxury Living, Corporate Law Review, KILL!KILL!KILL!"
            ]}
          >
            <Divider />
            <InsetBox title="SECURITY MEASURES:">
              <Line red>• Metal detector at entrance</Line>
              <Line red>• Armed guard (24/7 presence)</Line>
              <Line red>• Biometric elevator access to upper floors</Line>
              <Line red>• Panic buttons at reception desk</Line>
              <Line red>• Direct line to UCS SecCorps (2-minute response)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
      "Internal Access": {
        content: (
          <MaintenanceAccess
            title="Gravf|Mellberg|Tosk Law Offices"
            deviceId="NET-GATEWAY-MAIN"
            firmwareVersion="v2.7.3"
            systemStatus="OPERATIONAL"
            uptime="42 days, 11 hours"
          />
        ),
        related_commands: {
          "Personnel File - Marcus Grave": {
            content: (
              <PersonnelFile
                employeeId="GMT-PARTNER-001"
                name="Marcus Grave"
                age={58}
                position="Senior Partner"
                department="Criminal Defense Division"
                hireDate="Firm Founded: 2047 (20 years)"
                supervisor="Managing Partner"
                clearanceLevel={5}
                district="South Central (lives in The Hills)"
                emergencyContact="Private security detail"
                performance={98}
                notes={[
                  "Former prosecutor - switched sides after scandal",
                  "Win rate: 98% (highest in firm history)",
                  "Specialization: Making murder charges vanish",
                  "Known for: Destroying prosecution witnesses on stand",
                  "Connections: Every judge, half the SecCorps captains",
                  "Rumored: Keeps evidence disposal team on retainer",
                  "Warning: Do NOT cross him - witnesses tend to disappear"
                ]}
                status="ACTIVE"
              />
            ),
          },
        }
      },
      "Coffee Machine": {
        content: (
          <CoffeeMachine />
        ),
      },
    },
  },

  // ============================================================================
  // UNDERSJON - UNDERWATER RETAIL PARK
  // ============================================================================

  "Undersjon Retail Park": {
    content: (
      <PublicPortal
        name="UNDERSJON"
        tagline="An Altar to Consumerism - Beneath Lake Gravel"
        network="UNDERSJON_PUBLIC"
        signalStrength="medium"
        status="✓ OPEN (Perpetual Construction)"
        statusColor="yellow"
        nowPlaying="Ambient underwater sounds mixed with shopping music"
        notes={[
          "Located beneath Lake Gravel (separates North/South Central)",
          "Perpetually under construction (always expanding)",
          "300+ stores and counting",
          "Accessible via underwater tunnels from both districts"
        ]}
        theme="fancy"
      >
        <Divider />
        <Section title="RETAIL PARK OVERVIEW:">
          <Line cyan>• Location: Beneath Lake Gravel (between North/South Central)</Line>
          <Line cyan>• Size: 15 city blocks (underwater)</Line>
          <Line cyan>• Stores: 300+ luxury retailers</Line>
          <Line cyan>• Status: Always expanding (construction never stops)</Line>
          <Line cyan>• Access: Underwater tunnels, submersible taxi service</Line>
        </Section>
        <Divider />
        <Section title="NOTABLE STORES:">
          <Line neon>• Tulles&deVerte Flagship (celebrity fashion empire)</Line>
          <Line neon>• ChromeLux (premium cyberware boutique)</Line>
          <Line neon>• Spectral Banking Center (underwater branch)</Line>
          <Line neon>• The Aquarium Restaurant ($$$$)</Line>
          <Line neon>• Idol Coffins Pop-Up (changes location monthly)</Line>
          <Line neon>• 295+ other luxury retailers</Line>
        </Section>
        <Divider />
        <Section title="UNIQUE FEATURES:">
          <Line yellow>• Floor-to-ceiling aquarium walls (Lake Gravel visible)</Line>
          <Line yellow>• Holographic fish swimming through corridors</Line>
          <Line yellow>• Construction zones randomly close sections (always shifting)</Line>
          <Line yellow>• Premium oxygen filtration (better air than outside)</Line>
          <Line yellow>• Water leaks common but "adds to the ambiance"</Line>
        </Section>
        <Divider />
        <Line smoke small>
          Shopping as religion. Consume or be consumed. The construction never stops because
          capitalism never stops. Lake Gravel occasionally leaks through the ceiling.
        </Line>
      </PublicPortal>
    ),
    related_commands: {
      // Individual stores could go here
    },
  },

  // ============================================================================
  // THE GOLDEN RATIO - EXECUTIVE FITNESS CLUB
  // ============================================================================

  "The Golden Ratio": {
    content: (
      <PublicPortal
        name="THE GOLDEN RATIO"
        tagline="Where Excellence Sculpts Excellence"
        network="GOLDENRATIO_MEMBERS"
        signalStrength="strong"
        status="✓ MEMBERS ONLY"
        statusColor="yellow"
        notes={[
          "Membership: 50,000¤/year (waiting list: 2+ years)",
          "Personal trainers are former olympians",
          "Equipment more expensive than most apartments",
          "Valet parking, spa services, nutrition consultations included"
        ]}
        theme="fancy"
      >
        <HoursBanner
          name="Club Hours"
          hours="05:00 - 23:00"
          days="Every Day"
        />
        <Divider />
        <Section title="MEMBERSHIP TIERS:">
          <Line yellow bold>PLATINUM: 50,000¤/year</Line>
          <Line yellow>• Full club access, personal trainer (3x/week)</Line>
          <Line yellow>• Spa services, nutrition consultation</Line>
          <Line yellow>• Private locker, complimentary towel service</Line>

          <Divider />

          <Line neon bold>DIAMOND: 100,000¤/year</Line>
          <Line neon>• All Platinum benefits</Line>
          <Line neon>• Private training suite, cryotherapy chamber access</Line>
          <Line neon>• Weekly massage, personalized meal prep service</Line>

          <Divider />

          <Line cyan bold>OLYMPUS: 250,000¤/year (Limited to 50 members)</Line>
          <Line cyan>• All Diamond benefits</Line>
          <Line cyan>• Exclusive rooftop gym with city views</Line>
          <Line cyan>• Personal physician on call, experimental chrome consultations</Line>
          <Line cyan>• Access to private lounge with full bar</Line>
        </Section>
        <Divider />
        <Line smoke small>
          Your body is your temple. Make sure it's expensive enough to keep the poor people out.
        </Line>
      </PublicPortal>
    ),
    related_commands: {
      "Member Directory": {
        // password: {
        //   pw: "olympus",
        //   hint: "The highest membership tier",
        //   difficulty: "medium",
        //   content: <Locked theme="terminal" title="MEMBER RECORDS" />
        // },
        content: (
          <MaintenanceAccess
            title="[MEMBER DIRECTORY]"
            deviceModel="Membership Database"
            deviceId="GOLDENRATIO-MEMBERS"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Total members: 487 (Platinum: 412, Diamond: 65, Olympus: 10)",
              "Waiting list: 1,847 applications",
              "Average net worth: 15M¤+",
              "Celebrity members: 23 confirmed"
            ]}
          >
            <Divider />
            <InsetBox title="NOTABLE MEMBERS:">
              <Line neon>• 12 corporate CEOs</Line>
              <Line neon>• 8 killmatch athletes (including Steel Jackhammer - Platinum)</Line>
              <Line neon>• 5 entertainment celebrities</Line>
              <Line neon>• 3 politicians</Line>
              <Line neon>• Numerous lawyers, doctors, executives</Line>
            </InsetBox>
            <InsetBox title="OLYMPUS TIER (50 Member Cap):">
              <Line cyan>Current: 10 members (40 slots available)</Line>
              <Line yellow>Application fee: 10,000¤ (non-refundable)</Line>
              <Line yellow>Annual dues: 250,000¤</Line>
              <Line smoke small>Names withheld for privacy (ultra-wealthy demand discretion)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Locker Room Safe": {
        // password: {
        //   pw: "platinum",
        //   hint: "The most common membership tier",
        //   difficulty: "easy",
        //   content: <Locked theme="safe" title="MEMBER LOCKER" />
        // },
        content: (
          <Safe
            id="goldenratio-locker-447"
            model="SecureFit Locker"
            location="Platinum locker room - Locker #447"
            owner="Anonymous Member #447"
            security="Biometric (fingerprint)"
            lastAccess="This morning (workout session)"
            physical={[
              {
                id: "locker_workout_gear",
                label: "Workout clothes",
                description: "Designer athletic wear (unwashed, expensive)"
              },
              {
                id: "locker_towel",
                label: "Personal towel",
                description: "Monogrammed (initials: M.G.)"
              },
              {
                id: "locker_supplement",
                label: "Supplements",
                description: "Bottle of expensive pre-workout (probably legal)"
              },
            ]}
            digital={[
              {
                id: "locker_credchip",
                label: "Credchip",
                description: "80¤ (for smoothie bar purchases)",
                value: 80,
                isCredits: true
              },
            ]}
            notes="Standard member locker - nothing interesting"
          />
        ),
      },
    },
  },

  // ============================================================================
  // SHAFT & PISTON - SERVICE WORKERS BAR
  // ============================================================================

  "Shaft & Piston": {
    content: (
      <PublicPortal
        name="SHAFT & PISTON"
        tagline="Where the people who make South Central run come to drink"
        network="SHAFT_PISTON_GUEST"
        signalStrength="medium"
        status="OPEN"
        statusColor="neon"
        nowPlaying="Industrial rock - The Maintenance Crew"
        notes={[
          "Cheap drinks, cheaper conversation",
          "Service workers, maintenance crews, delivery drivers",
          "No corporate executives allowed (enforced by regulars)",
          "Cash only, no credchips"
        ]}
        theme="casual"
      >
        <HoursBanner
          name="Schedule"
          hours="16:00 - 04:00"
          days="Every Day (After the day shift ends)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Bar Menu": {
        content: (
          <Menu
            title="SHAFT & PISTON"
            subtitle="Service Workers' Watering Hole Since 2063"
            signType="coffee"
            categories={[
              {
                name: "DRINKS",
                items: [
                  { name: "Beer (synth, local)", price: "5¤" },
                  { name: "Whiskey (bottom shelf)", price: "8¤" },
                  { name: "Vodka (you don't want to know)", price: "7¤" },
                  { name: "Well drinks", price: "6¤" },
                  { name: "Water (from tap, free)", price: "0¤" },
                ],
              },
              {
                name: "FOOD",
                items: [
                  { name: "Pretzels (stale)", price: "Free with drink" },
                  { name: "Synth-meat sandwich", price: "8¤" },
                  { name: "Fried protein cubes", price: "10¤" },
                  { name: "Mystery stew", price: "12¤ (ask what's in it)" },
                ],
              },
            ]}
            footer="No corpo trash allowed. We check your hands for calluses."
          />
        ),
      },

      "Personnel File - Owner": {
        content: (
          <PersonnelFile
            employeeId="BAR-SHAFT-001"
            name="Hank 'Wrench' Morrison"
            age={52}
            position="Owner / Bartender"
            department="Independent Hospitality"
            hireDate="2063 (19 years in business)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="South Central (lives in Inbetweens)"
            emergencyContact="Maintenance Union Local 447"
            performance={82}
            notes={[
              "Former maintenance worker (30 years in the trade)",
              "Opened bar after injury forced early retirement",
              "Known for: Enforcing 'no corpos' rule with baseball bat",
              "Reputation: Fair, honest, protective of workers",
              "Bar is unofficial union meeting spot",
              "Has dirt on every building manager in South Central",
              "Motto: 'We fix their toilets. Least they can do is let us drink.'"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Jukebox": {
        content: (
          <Jukebox
            model="JB-500"
            location="Corner by pool table"
            cost="2¤"
            songs={[
              { title: "Grease Monkey Blues", artist: "The Wrenches", genre: "Industrial blues", color: 'orange' },
              { title: "Overtime", artist: "Union Strong", genre: "Punk rock", color: 'red' },
              { title: "Elevator to Hell", artist: "Shaft Collapse", genre: "Heavy metal", color: 'yellow' },
              { title: "Concrete Dreams", artist: "The Builders", genre: "Folk-rock", color: 'cyan' },
              { title: "Break Time", artist: "Lunch Hour", genre: "Ska-punk", color: 'green' },
            ]}
          />
        ),
      },

      "Bar Safe": {
        // password: {
        //   pw: "union",
        //   hint: "What the workers at this bar believe in",
        //   difficulty: "easy",
        //   content: <Locked theme="safe" title="BAR SAFE" />
        // },
        content: (
          <Safe
            id="shaft-piston-safe"
            model="DS-200"
            location="Behind bar, floor-mounted"
            owner="Hank 'Wrench' Morrison"
            security="Combination lock (mechanical)"
            lastAccess="Last night (closing)"
            physical={[
              {
                id: "bar_cash",
                label: "Cash",
                description: "280¤ (daily receipts)",
                value: 280,
                isCredits: true
              },
              {
                id: "bar_bat",
                label: "Baseball bat",
                description: "For 'enforcing house rules' (bloodstains)"
              },
              {
                id: "bar_union_card",
                label: "Union membership card",
                description: "Maintenance Union Local 447 (expired but kept)"
              },
            ]}
            digital={[
              {
                id: "bar_credchip",
                label: "Credchip",
                description: "45¤ (emergency fund)",
                value: 45,
                isCredits: true
              },
            ]}
            notes="Wrench keeps the bat handy for when corpo types ignore the 'no executives' sign"
          />
        ),
      },
    },
  },

  // ============================================================================
  // UCS SECORPS STATION
  // ============================================================================

  "UCS SecCorps Station #7": {
    content: (
      <FacilityPortal
        companyName="UNITED CITADEL SECURITY"
        facilityId="STATION-SC-07"
        tagline="Protect. Serve. Profit."
        location="South Central - Street Level Station"
        owner="UCS (United Citadel Security)"
        function="Private Security & Law Enforcement"
        personnel="47 officers, 8 support staff"
        networkStatus="SECOPS_SECURE (Law enforcement network)"
        securityLevel="MAXIMUM"
        warnings={[
          "Armed security personnel on-site 24/7",
          "Jurisdiction: South Central District only",
          "Response time: ~2 minutes to premium clients",
          "Deadly force authorized for contract violations"
        ]}
        theme="secure"
      >
        <Divider />
        <Section title="STATION OVERVIEW:">
          <Line neon bold>One of 12 competing SecCorps in Central District</Line>
          <Line cyan>• Jurisdiction: South Central (street level to mid-rise)</Line>
          <Line cyan>• Personnel: 47 officers (3 shifts, 15-16 per shift)</Line>
          <Line cyan>• Equipment: Lethal weapons, armored vehicles, drones</Line>
          <Line cyan>• Funding: Corporate contracts + protection fees</Line>
        </Section>
        <Divider />
        <Section title="SERVICE TIERS:">
          <Line yellow bold>PLATINUM CONTRACT: 10,000¤/month</Line>
          <Line yellow>• Response time: ~2 minutes</Line>
          <Line yellow>• Armed response team (4 officers minimum)</Line>
          <Line yellow>• Property protection, personal security details available</Line>

          <Divider />

          <Line neon bold>GOLD CONTRACT: 5,000¤/month</Line>
          <Line neon>• Response time: ~5 minutes</Line>
          <Line neon>• Standard patrol response (2 officers)</Line>

          <Divider />

          <Line cyan bold>SILVER CONTRACT: 2,000¤/month</Line>
          <Line cyan>• Response time: ~15 minutes (if available)</Line>
          <Line cyan>• Single officer response</Line>

          <Divider />

          <Line red bold>NO CONTRACT: Not our problem</Line>
          <Line red>• Response time: Never</Line>
          <Line red>• SecCorps will NOT respond to calls from non-clients</Line>
        </Section>
        <Divider />
        <Section title="COMPETING JURISDICTIONS:">
          <Line red>UCS vs. 11 other SecCorps in Central District</Line>
          <Line red>Turf wars common - jurisdictional disputes turn violent</Line>
          <Line red>Contracts signed in blood (metaphorically, usually)</Line>
        </Section>
        <Divider />
        <Line smoke small>
          Your safety is our business. Literally. No contract? No protection.
          Welcome to private law enforcement.
        </Line>
      </FacilityPortal>
    ),
    related_commands: {
      "Duty Roster": {
        // password: {
        //   pw: "secops",
        //   hint: "What the security personnel are called",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="DUTY ROSTER" />
        // },
        content: (
          <MaintenanceAccess
            title="[DUTY ROSTER - CURRENT SHIFT]"
            deviceModel="Personnel Management"
            deviceId="UCS-SC07-ROSTER"
            firmwareVersion="v3.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Current shift: Day (06:00 - 18:00)",
              "Personnel on duty: 16 officers",
              "Patrol units: 4 active, 2 standby",
              "Dispatcher: 2 on duty"
            ]}
          >
            <Divider />
            <InsetBox title="PATROL UNITS (ACTIVE):">
              <Line neon>UNIT 1: Officers Chen & Rodriguez (Sector A patrol)</Line>
              <Line neon>UNIT 2: Officers Kim & Foster (Sector B patrol)</Line>
              <Line neon>UNIT 3: Officers Patel & Volkov (Sector C patrol)</Line>
              <Line neon>UNIT 4: Officers Morrison & Silva (Sector D patrol)</Line>
            </InsetBox>
            <InsetBox title="STANDBY UNITS:">
              <Line yellow>UNIT 5: Officers Johnson & Martinez (Station, rapid response)</Line>
              <Line yellow>UNIT 6: Officers Wright & Anderson (Station, backup)</Line>
            </InsetBox>
            <InsetBox title="RECENT CALLS:">
              <Line cyan>08:30 - Platinum contract alarm (Central Plaza Tower) - False alarm</Line>
              <Line cyan>10:15 - Gold contract disturbance - Resolved, no arrests</Line>
              <Line cyan>12:45 - Platinum contract medical emergency - Responded, EMS called</Line>
              <Line red>14:20 - Non-contract assault call - IGNORED (not our jurisdiction)</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Evidence Locker": {
        // password: {
        //   pw: "evidence",
        //   hint: "What's stored in this room",
        //   difficulty: "medium",
        //   content: <Locked theme="vault" title="EVIDENCE STORAGE" />
        // },
        content: (
          <MaintenanceAccess
            title="[EVIDENCE LOCKER]"
            deviceModel="Secure Storage"
            deviceId="UCS-SC07-EVIDENCE"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Biometric access required",
              "All access logged",
              "Chain of custody maintained (theoretically)",
              "Items mysteriously disappear sometimes"
            ]}
          >
            <Divider />
            <InsetBox title="CURRENT INVENTORY:">
              <Line neon>Case #2847: Stolen credchip (12,000¤ value) - Awaiting trial</Line>
              <Line neon>Case #2848: Illegal firearm (9mm pistol, serial filed) - Pending</Line>
              <Line neon>Case #2849: Narcotics (50 doses stim) - Confiscated, to be destroyed</Line>
              <Line yellow>Case #2850: Corporate espionage data chip - SEALED (high-profile)</Line>
            </InsetBox>
            <InsetBox title="MISSING EVIDENCE (UNSOLVED):">
              <Line red>Case #2843: 5,000¤ credchip - Disappeared from locker (no explanation)</Line>
              <Line red>Case #2844: Chrome cyberware - Missing (officer under investigation)</Line>
            </InsetBox>
            <Line smoke small>Corruption? In MY SecCorps? More likely than you'd think.</Line>
          </MaintenanceAccess>
        ),
      },
    },
  },

  // ============================================================================
  // CHROMELUX - PREMIUM CYBERWARE BOUTIQUE
  // ============================================================================

  "ChromeLux Boutique": {
    content: (
      <PublicPortal
        name="CHROMELUX"
        tagline="Premium augmentation for the discerning individual"
        network="CHROMELUX_GUEST"
        signalStrength="strong"
        status="✓ OPEN (By Appointment)"
        statusColor="neon"
        notes={[
          "Appointment required (walk-ins discouraged)",
          "Consultation: 500¤ (credited toward purchase)",
          "Installation by certified surgeons only",
          "Financing available (18% APR)"
        ]}
        theme="fancy"
      >
        <HoursBanner
          name="Boutique Hours"
          hours="10:00 - 20:00"
          days="Monday - Saturday (Closed Sunday)"
        />
      </PublicPortal>
    ),
    related_commands: {
      "Product Catalog": {
        content: (
          <MaintenanceAccess
            title="[CHROMELUX PRODUCT CATALOG]"
            deviceModel="Inventory System"
            deviceId="CHROMELUX-CATALOG"
            firmwareVersion="v4.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Premium cyberware only",
              "Military-grade equipment available (license required)",
              "Custom installations available (consultation required)",
              "All products come with 1-year warranty"
            ]}
          >
            <Divider />
            <InsetBox title="NEURAL AUGMENTS:">
              <Line neon>Reflex Booster MK-II: 8,500¤</Line>
              <Line neon>Neural Interface (Premium): 12,000¤</Line>
              <Line neon>Memory Expansion Unit: 6,000¤</Line>
              <Line neon>Combat Targeting System: 15,000¤</Line>
            </InsetBox>
            <Divider />
            <InsetBox title="PHYSICAL AUGMENTS:">
              <Line cyan>Dermal Plating (Titanium): 10,000¤</Line>
              <Line cyan>Subdermal Armor (Ceramic): 14,000¤</Line>
              <Line cyan>Reinforced Skeleton: 18,000¤</Line>
              <Line cyan>Cyber-limbs (per limb): 20,000¤+</Line>
            </InsetBox>
            <Divider />
            <InsetBox title="OPTICAL AUGMENTS:">
              <Line yellow>Low-light Vision: 4,500¤</Line>
              <Line yellow>Thermal Imaging: 7,000¤</Line>
              <Line yellow>Targeting Reticle: 5,500¤</Line>
              <Line yellow>Full Cyber-eyes (premium): 12,000¤</Line>
            </InsetBox>
            <Divider />
            <InsetBox title="MILITARY-GRADE (License Required):">
              <Line red>Adrenaline Injector System: 25,000¤</Line>
              <Line red>Pain Editor: 30,000¤</Line>
              <Line red>Sandevistan Reflex System: 45,000¤</Line>
              <Line red>Gorilla Arms: 35,000¤</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },

      "Personnel File - Owner": {
        content: (
          <PersonnelFile
            employeeId="CHROMELUX-OWNER-001"
            name="Dr. Yuki Nakamura"
            age={44}
            position="Owner / Chief Surgeon"
            department="Cyberware Installation"
            hireDate="Founded: 2061 (6 years)"
            supervisor="Self-employed"
            clearanceLevel={5}
            district="South Central (lives in penthouse)"
            emergencyContact="Private medical insurance"
            performance={96}
            notes={[
              "Former TG Labs researcher (cybernetics division)",
              "Left TG Labs to open private practice",
              "Specialization: High-end custom chrome installations",
              "Reputation: Best chrome surgeon in South Central",
              "Clientele: Corporate executives, killmatch athletes, wealthy criminals",
              "Known for: Zero rejection rate, artistic installations",
              "Warning: Prices reflect skill level (no discounts, ever)"
            ]}
            status="ACTIVE"
          />
        ),
      },

      "Vault Safe": {
        // password: {
        //   pw: "augmentation",
        //   hint: "What ChromeLux specializes in",
        //   difficulty: "medium",
        //   content: <Locked theme="vault" title="CHROMELUX VAULT" />
        // },
        content: (
          <Safe
            id="chromelux-vault"
            model="MilitaryGrade-X"
            location="Secure vault room, floor-mounted"
            owner="Dr. Yuki Nakamura"
            security="Biometric + retinal scan + 8-digit PIN"
            lastAccess="Yesterday (inventory check)"
            physical={[
              {
                id: "vault_cyberware_stock",
                label: "Premium cyberware inventory",
                description: "Various high-end augments (estimated 500k¤+ value)"
              },
              {
                id: "vault_military_chrome",
                label: "Military-grade chrome",
                description: "Restricted augments (requires license to sell)"
              },
              {
                id: "vault_custom_parts",
                label: "Custom installation components",
                description: "Rare parts for specialized installations"
              },
            ]}
            digital={[
              {
                id: "vault_credchip",
                label: "Business credchip",
                description: "45,000¤ (operating capital)",
                value: 45000,
                isCredits: true
              },
              {
                id: "vault_client_list",
                label: "Client database",
                description: "Complete installation records (encrypted)"
              },
            ]}
            notes="⚠ Vault is military-grade secure. Professional thieves only need apply."
          />
        ),
      },
    },
  },

  // ============================================================================
  // THE GLASS GARDENS - ROOFTOP RESTAURANT
  // ============================================================================

  "The Glass Gardens": {
    content: (
      <PublicPortal
        name="THE GLASS GARDENS"
        tagline="Elevated Dining. Literally."
        network="GLASS_GARDENS_GUEST"
        signalStrength="strong"
        status="✓ RESERVATIONS REQUIRED"
        statusColor="yellow"
        notes={[
          "Reservations: 2-week minimum wait",
          "Dress code: Strictly enforced (formal attire)",
          "Average meal cost: 500¤+ per person",
          "Located on rooftop with panoramic city views"
        ]}
        theme="fancy"
      >
        <HoursBanner
          name="Restaurant Hours"
          hours="17:00 - 23:00"
          days="Tuesday - Saturday (Closed Sun-Mon)"
        />
        <Divider />
        <Section title="DINING EXPERIENCE:">
          <Line cyan>• Rooftop location with floor-to-ceiling windows</Line>
          <Line cyan>• Panoramic views of South Central District</Line>
          <Line cyan>• Live piano music (nightly)</Line>
          <Line cyan>• Michelin-starred chef (allegedly)</Line>
          <Line cyan>• Wine cellar with 500+ bottles</Line>
        </Section>
        <Divider />
        <Line smoke small>
          Not as exclusive as The Salmon Door, but you still can't afford it.
        </Line>
      </PublicPortal>
    ),
    related_commands: {
      "Menu": {
        content: (
          <Menu
            title="THE GLASS GARDENS"
            subtitle="Rooftop Fine Dining - Est. 2064"
            signType="cocktail"
            categories={[
              {
                name: "APPETIZERS",
                items: [
                  { name: "Oysters Rockefeller", price: "80¤" },
                  { name: "Foie Gras Terrine", price: "120¤" },
                  { name: "Truffle Carpaccio", price: "95¤" },
                  { name: "Lobster Bisque", price: "75¤" },
                ],
              },
              {
                name: "ENTREES",
                items: [
                  { name: "Wagyu Beef (synth, premium)", price: "450¤" },
                  { name: "Pan-Seared Salmon", price: "380¤" },
                  { name: "Duck Confit", price: "420¤" },
                  { name: "Vegetarian Tasting Menu", price: "350¤" },
                ],
              },
              {
                name: "DESSERTS",
                items: [
                  { name: "Chocolate Soufflé", price: "65¤" },
                  { name: "Crème Brûlée", price: "55¤" },
                  { name: "Seasonal Fruit Tart", price: "60¤" },
                ],
              },
            ]}
            footer="Wine pairings available. Gratuity not included."
          />
        ),
      },

      "Reservation System": {
        // password: {
        //   pw: "reservation",
        //   hint: "What you need to dine here",
        //   difficulty: "easy",
        //   content: <Locked theme="terminal" title="RESERVATIONS" />
        // },
        content: (
          <MaintenanceAccess
            title="[RESERVATION SYSTEM]"
            deviceModel="Booking Management"
            deviceId="GLASS-GARDENS-RES"
            firmwareVersion="v2.0.0"
            systemStatus="OPERATIONAL"
            notes={[
              "Current wait time: 2 weeks minimum",
              "VIP reservations: Immediate seating (for the right price)",
              "Cancellation policy: 48-hour notice required",
              "No-show fee: 200¤ per person"
            ]}
          >
            <Divider />
            <InsetBox title="TONIGHT'S RESERVATIONS:">
              <Line neon>17:30 - Party of 2 (Mr. & Mrs. Sterling)</Line>
              <Line neon>18:00 - Party of 4 (Alliansen Inc. executives)</Line>
              <Line neon>19:00 - Party of 6 (Anniversary celebration)</Line>
              <Line neon>20:00 - Party of 2 (VIP - last-minute reservation)</Line>
              <Line neon>21:00 - Party of 3 (Killmatch athlete + guests)</Line>
            </InsetBox>
            <InsetBox title="VIP LIST (Immediate Seating):">
              <Line yellow>• Corporate board members</Line>
              <Line yellow>• Entertainment celebrities</Line>
              <Line yellow>• Politicians (district level and above)</Line>
              <Line yellow>• Anyone willing to pay 5,000¤ "priority fee"</Line>
            </InsetBox>
          </MaintenanceAccess>
        ),
      },
    },
  },
};

export default SOUTH_CENTRAL_FUN_COMMANDS;
