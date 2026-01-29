import {
  Line,
  Box,
  Section,
  Divider,
  KeyValue,
  DataTable,
  Warning,
} from '@terminal/TerminalComponents';

import {
  NewsTicker,
  PersonnelFile,
  BountyCard,
} from '@terminal/retcomdevice';

const KILLMATCH_FEEDS_COMMANDS = {
  "killmatch_feeds": {
    content: (
      <>
        <Line cyan large bold>[KILLMATCH FEEDS - PUBLIC ACCESS]</Line>
        <Line smoke>News, rankings, and gossip from the cage</Line>
        <Divider />

        <Box color="pink">
          <Line bold>★ WELCOME TO THE BLOOD SPORT ★</Line>
          <Line>The most popular entertainment in Cy - Legal murder for profit</Line>
        </Box>

        <Divider />

        <Section title="AVAILABLE FEEDS">
          <Line neon>• KILL!KILL!KILL! - Premier killmatch fan publication</Line>
          <Line neon>• Match results & upcoming bouts</Line>
          <Line neon>• Athlete rankings & statistics</Line>
          <Line neon>• VIP athlete database (public profiles)</Line>
          <Line neon>• Betting odds & predictions</Line>
        </Section>

        <Divider />

        <Line smoke small>Millions watch. Thousands compete. Few survive to retire.</Line>
      </>
    ),
    related_commands: {
      "kill_kill_kill_feed": {
        content: (
          <>
            <Line cyan large bold>[KILL!KILL!KILL! - LATEST STORIES]</Line>
            <Line smoke>Written by Zenit - Intimate interviews & hot takes</Line>
            <Divider />

            <NewsTicker
              title="KILL!KILL!KILL! HEADLINES"
              updateFrequency="Updated every 2 hours"
              items={[
                { text: "Steel Jackhammer's recovery party hits 72+ hours - 'I'm celebrating being alive!' says champ", category: "PARTY LIFE" },
                { text: "Exclusive: Thugger opens up about pressure of 11-month win streak - 'Every fight could be the last'", category: "INTERVIEW" },
                { text: "Goliathess accused of staging drama with rival - 'It's all part of the show,' she admits", category: "CONTROVERSY" },
                { text: "Behind the scenes: How Ikhon creates his mysterious warlock persona (but he's actually super chill)", category: "PROFILE" },
                { text: "Master Crimson spotted at underground Nano gathering - Arvtagarna recruiting for 'the cause'?", category: "RUMORS" },
                { text: "Jade Boomslang's meteoric rise - Virid Vipers' newest weapon or flash in the pan?", category: "RISING STARS" },
                { text: "BREAKING: Amande seen purchasing suspicious chemicals - Poisoning rumors before Thugger fight?", category: "BREAKING" },
                { text: "Raze's betting model predicts upset in next heavyweight bout - Bookies scrambling", category: "BETTING" }
              ]}
            />

            <Divider />

            <Box color="yellow">
              <Line bold>FEATURED STORY:</Line>
              <Line>"Steel Jackhammer: From Legless to Legendary"</Line>
              <Line smoke>By Zenit</Line>
              <Line top>Three weeks ago, Steel Jackhammer's career appeared over when five Kroks literally ripped his legs off in the most brutal match of the season. Today, he's partying like a champion with state-of-the-art Alliansen chrome. We sat down with Steel (well, virtually - he's too busy partying) to discuss his miraculous recovery...</Line>
              <Line top smoke small>[Full story requires premium subscription]</Line>
            </Box>

            <Divider />

            <Line smoke small>Zenit's specialty: Manipulation and guile to get intimate athlete interviews. Wildly popular.</Line>
          </>
        )
      },

      "recent_matches": {
        content: (
          <>
            <Line cyan large bold>[RECENT MATCH RESULTS]</Line>
            <Line smoke>Last 7 days of cage carnage</Line>
            <Divider />

            <Section title="HEAVYWEIGHT DIVISION">
              <Box color="cyan">
                <Line yellow bold>Nov 14: Thugger vs. Bone Crusher</Line>
                <KeyValue label="Result" value="Thugger victory (Round 2 KO)" valueColor="neon" />
                <KeyValue label="Method" value="Electro-horn charge - Opponent unconscious" />
                <KeyValue label="Notes" value="Win streak extends to 11 months" />
              </Box>

              <Box color="cyan">
                <Line yellow bold>Nov 12: Iron Maiden vs. The Grinder</Line>
                <KeyValue label="Result" value="Iron Maiden victory (Round 4)" valueColor="neon" />
                <KeyValue label="Method" value="Submission hold - Opponent tapped out" />
                <KeyValue label="Controversy" value="Grinder claimed illegal chrome enhancement" />
              </Box>

              <Box color="cyan">
                <Line yellow bold>Nov 10: Steel Jackhammer vs. Five Kroks</Line>
                <KeyValue label="Result" value="No Contest (Medical stoppage)" valueColor="red" />
                <KeyValue label="Method" value="Jackhammer legs ripped off - Match stopped" />
                <KeyValue label="Views" value="52M+ across all feeds (viral sensation)" />
                <KeyValue label="Status" value="Jackhammer recovering, fitted with new chrome" />
              </Box>
            </Section>

            <Divider />

            <Section title="OTHER DIVISIONS">
              <Line neon>Nov 15: Jade Boomslang def. Razor Rick (Lightweight)</Line>
              <Line neon>Nov 13: Goliathess def. Diamond Fist (Heavyweight - Women's)</Line>
              <Line neon>Nov 11: Master Crimson def. Chrome Skull (Nano Division)</Line>
            </Section>
          </>
        )
      },

      "upcoming_bouts": {
        content: (
          <>
            <Line cyan large bold>[UPCOMING MATCHES]</Line>
            <Line smoke>Next 2 weeks of scheduled carnage</Line>
            <Divider />

            <Section title="FEATURED BOUTS">
              <Box color="pink">
                <Line bold>Nov 19: Amande vs. Thugger</Line>
                <KeyValue label="Division" value="Heavyweight" />
                <KeyValue label="Stakes" value="Title Eliminator" />
                <KeyValue label="Odds" value="Thugger -400 / Amande +280" />
                <KeyValue label="Notes" value="Amande using mech suit - Thugger's streak on the line" />
                <Line top red>RUMOR: Amande planning to poison Thugger before match</Line>
              </Box>

              <Box color="pink">
                <Line bold>Nov 21: Steel Jackhammer vs. Gargoyle</Line>
                <KeyValue label="Division" value="Heavyweight" />
                <KeyValue label="Stakes" value="Steel's comeback fight" />
                <KeyValue label="Odds" value="Gargoyle -180 / Steel +140" />
                <KeyValue label="Notes" value="First match with new Alliansen chrome legs" />
                <Line top yellow>Steel's party supposed to end before this match... not looking likely</Line>
              </Box>

              <Box color="pink">
                <Line bold>Nov 23: Goliathess vs. Titaness</Line>
                <KeyValue label="Division" value="Heavyweight Women's" />
                <KeyValue label="Stakes" value="Champion vs. Challenger" />
                <KeyValue label="Odds" value="Even money (Pick 'em)" />
                <KeyValue label="Notes" value="Goliathess accused of staging drama for views" />
              </Box>
            </Section>

            <Divider />

            <Section title="OTHER SCHEDULED MATCHES">
              <Line neon>Nov 20: Master Crimson vs. Void Walker (Nano Division)</Line>
              <Line neon>Nov 22: Jade Boomslang vs. Wire (Lightweight)</Line>
              <Line neon>Nov 24: Ikhon vs. Shade Priest (Nano Division)</Line>
            </Section>
          </>
        )
      },

      "athlete_rankings": {
        content: (
          <>
            <Line cyan large bold>[KILLMATCH ATHLETE RANKINGS]</Line>
            <Line smoke>Current standings by division</Line>
            <Divider />

            <Section title="HEAVYWEIGHT DIVISION - TOP 20">
              <DataTable data={[
                { label: "#1", value: "Thugger (11-month win streak)" },
                { label: "#2", value: "The Titan" },
                { label: "#3", value: "Iron Maiden" },
                { label: "#4", value: "Bone Breaker" },
                { label: "#5", value: "Gargoyle" },
                { label: "...", value: "..." },
                { label: "#18", value: "Steel Jackhammer (climbing)" },
                { label: "#19", value: "Amande" },
                { label: "#20", value: "Chrome Fist" }
              ]} />
            </Section>

            <Divider />

            <Section title="OTHER DIVISION LEADERS">
              <Line yellow>Heavyweight Women's: Goliathess</Line>
              <Line yellow>Lightweight: Wire</Line>
              <Line yellow>Nano Division: Master Crimson</Line>
              <Line yellow>Rookie of the Year: Jade Boomslang</Line>
            </Section>

            <Divider />

            <Box color="yellow">
              <Line bold>NOTABLE MOVES:</Line>
              <Line>• Steel Jackhammer +3 positions (viral Krok fight boosted popularity)</Line>
              <Line>• Thugger holding #1 for record 11 months</Line>
              <Line>• Jade Boomslang fastest climb in lightweight history</Line>
            </Box>
          </>
        )
      },

      "betting_odds": {
        content: (
          <>
            <Line cyan large bold>[LIVE BETTING ODDS]</Line>
            <Line smoke>Current lines from major bookies</Line>
            <Divider />

            <Section title="FEATURED MATCHUPS">
              <Box color="yellow">
                <Line bold>Amande vs. Thugger (Nov 19)</Line>
                <KeyValue label="Thugger" value="-400 (heavy favorite)" valueColor="neon" />
                <KeyValue label="Amande" value="+280 (underdog)" />
                <KeyValue label="Over/Under" value="2.5 rounds" />
                <Line top smoke>Sharp money coming in on Amande. Odds shifting...</Line>
              </Box>

              <Box color="yellow">
                <Line bold>Steel Jackhammer vs. Gargoyle (Nov 21)</Line>
                <KeyValue label="Gargoyle" value="-180 (favorite)" />
                <KeyValue label="Steel" value="+140" valueColor="yellow" />
                <KeyValue label="Over/Under" value="3.5 rounds" />
                <Line top smoke>Public backing Steel. Sharps like Gargoyle's experience.</Line>
              </Box>

              <Box color="yellow">
                <Line bold>Goliathess vs. Titaness (Nov 23)</Line>
                <KeyValue label="Goliathess" value="-110" />
                <KeyValue label="Titaness" value="-110" valueColor="yellow" />
                <KeyValue label="Over/Under" value="4.5 rounds" />
                <Line top smoke>True pick 'em. Books can't decide.</Line>
              </Box>
            </Section>

            <Divider />

            <Box color="red">
              <Line bold>⚠ BETTING ALERT ⚠</Line>
              <Line>Unusual action detected on Steel vs. Gargoyle.</Line>
              <Line>Large bets placed on Gargoyle by strangling in Round 2.</Line>
              <Line>Odds of "strangling with stolen legs" prop bet: 50:1 → 8:1</Line>
              <Line smoke small>Someone knows something...</Line>
            </Box>

            <Divider />

            <Line smoke small>Raze's prediction model says: Don't bet on Steel right now.</Line>
          </>
        )
      },

      "vip_database": {
        content: (
          <>
            <Line cyan large bold>[VIP ATHLETE DATABASE]</Line>
            <Line smoke>Public profiles - Known associates of Steel Jackhammer</Line>
            <Divider />

            <Section title="HIGH-PROBABILITY PARTY ATTENDEES">
              <Line yellow>Athletes frequently seen at Steel's events:</Line>
              <Line neon>• Zenit (Journalist, not athlete - but always at parties)</Line>
              <Line neon>• Ikhon (Friendly Nano-warlock)</Line>
              <Line neon>• Thugger (Cocky champion)</Line>
              <Line neon>• Raze (Hacker/gambler)</Line>
              <Line neon>• Amande (Mech pilot, plotting revenge)</Line>
              <Line neon>• Master Crimson (Bored Arvtagarna member)</Line>
              <Line neon>• Goliathess (Drama queen)</Line>
              <Line neon>• Jade Boomslang (Eager newcomer)</Line>
            </Section>

            <Warning>Party guests are RANDOM. These may or may not be present.</Warning>

            <Divider />

            <Line smoke small>Access individual profiles for detailed intelligence...</Line>
          </>
        ),
        related_commands: {
          "zenit": {
            content: (
              <PersonnelFile
                employeeId="MEDIA-KKK-001"
                name="Zenit"
                position="Senior Writer"
                department="KILL!KILL!KILL! Publication"
                hireDate="Career Start: 2063"
                supervisor="Editorial Team"
                clearanceLevel="MEDIA"
                status="ACTIVE"
                notes={[
                  "Specialist in intimate athlete interviews",
                  "Known for manipulation and guile to extract stories",
                  "Publishes short, revealing pieces about fighters",
                  "Carries 9mm pistol (licensed for protection)",
                  "Attends most major athlete parties for gossip",
                  "Not physically threatening but socially dangerous",
                  "Current focus: Steel Jackhammer recovery story"
                ]}
              />
            )
          },

          "ikhon": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-KM-892"
                name="Ikhon"
                position="Nano Division Athlete"
                department="Independent (No Sponsor)"
                hireDate="Career Start: 2064"
                supervisor="Self-managed"
                clearanceLevel="NONE"
                status="ACTIVE"
                performance={72}
                notes={[
                  "Fights with mysterious warlock persona (Nano-powered)",
                  "Actually cheerful and friendly when drugs available",
                  "Heavy drug user - performance depends on supply",
                  "Signature move: Death grip (black hand crush attack)",
                  "Wears heavy robes, carries shockstick",
                  "Well-liked in athlete community despite gimmick",
                  "Known to share drugs at parties"
                ]}
              />
            )
          },

          "thugger": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-KM-447"
                name="Thugger"
                position="Heavyweight Champion (#1 Ranked)"
                department="Independent (No Sponsor)"
                hireDate="Career Start: 2066"
                supervisor="Self-managed"
                clearanceLevel="NONE"
                status="ACTIVE"
                performance={95}
                notes={[
                  "Current #1 heavyweight - 11-month win streak (RECORD)",
                  "Cyberspine enhancement: Attacks twice per round",
                  "Electro-taurs: Charging attack with electrified horns",
                  "Cocky personality - never misses chance to brag",
                  "Extremely aggressive in and out of cage",
                  "DANGEROUS - Avoid confrontation if possible",
                  "Next fight: vs. Amande (Nov 19) - Title eliminator",
                  "Known to start fights at parties when drinking"
                ]}
              />
            )
          },

          "raze": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-KM-334"
                name="Raze"
                position="Tech Division Athlete"
                department="Independent Hacker"
                hireDate="Career Start: 2065"
                supervisor="Self-managed"
                clearanceLevel="NONE"
                status="ACTIVE"
                performance={58}
                notes={[
                  "Fights using tech overall and smartgun",
                  "Skilled hacker with gambling problem",
                  "Developed prediction model for match outcomes",
                  "Attends parties to gather gossip for betting model",
                  "Auto-injects Red-juice when critically injured",
                  "Custom app floods targets with holovids (distraction)",
                  "Greedy - may be bribed for information or hacking services",
                  "Physically weak without tech advantages"
                ]}
              />
            )
          },

          "amande": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-KM-223"
                name="Amande"
                position="Mech Division Athlete"
                department="Independent (No Sponsor)"
                hireDate="Career Start: 2064"
                supervisor="Self-managed"
                clearanceLevel="NONE"
                status="ACTIVE"
                performance={65}
                notes={[
                  "Pilots small mech when fighting",
                  "Without mech: Hardly recognized, not intimidating",
                  "Carries filament knife for personal protection",
                  "CURRENT PLOT: Planning to poison Thugger before Nov 19 fight",
                  "Attends Steel's party possibly to execute plan",
                  "Quiet, calculating personality",
                  "Underestimated due to unimpressive appearance without mech"
                ]}
              />
            )
          },

          "master_crimson": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-KM-156"
                name="Master Crimson"
                position="Nano Division Athlete"
                department="Arvtagarna (Nano Supremacist Group)"
                hireDate="Career Start: 2060"
                supervisor="Arvtagarna Leadership"
                clearanceLevel="NONE"
                status="ACTIVE"
                performance={78}
                notes={[
                  "Member of Arvtagarna - Heirs of Kergoz breakout group",
                  "Seeks Nano dominance over non-Nano (not eradication)",
                  "C-list veteran, bored of entire killmatch circus",
                  "Rust dust ability: Slows targets with red cloud",
                  "Injector weapons cause severe pain (Red Pain toxin)",
                  "Attends parties mostly out of boredom",
                  "May use social events for Arvtagarna recruitment",
                  "Dangerous but predictable - ideology-driven"
                ]}
              />
            )
          },

          "goliathess": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-KM-789"
                name="Goliathess"
                position="Heavyweight Women's Champion"
                department="Independent (No Sponsor)"
                hireDate="Career Start: 2065"
                supervisor="Self-managed"
                clearanceLevel="NONE"
                status="ACTIVE"
                performance={88}
                notes={[
                  "Up-and-coming heavyweight women's division star",
                  "StoneSkin™ chrome: Heavy armor plating (-D4 damage)",
                  "Goes berserk when injured - attacks twice per round",
                  "In it for DRAMA and STORYLINES, not just fighting",
                  "Actively engineers conflict for views and publicity",
                  "Doesn't mind admitting matches are 'part of the show'",
                  "May start drama at party for social media content",
                  "Physically dangerous but motivations are calculated"
                ]}
              />
            )
          },

          "jade_boomslang": {
            content: (
              <PersonnelFile
                employeeId="ATHLETE-KM-991"
                name="Jade Boomslang"
                position="Lightweight Division Rising Star"
                department="Virid Vipers (Gang Sponsor)"
                hireDate="Career Start: 2067"
                supervisor="Virid Vipers Management"
                clearanceLevel="NONE"
                status="ACTIVE"
                performance={82}
                notes={[
                  "New talent - fastest climb in lightweight history",
                  "Sponsored by Virid Vipers gang",
                  "Boomslang punch: Metal fist fires up to 10m range",
                  "Tattooed reptile scales cover body (actually Nano infestation)",
                  "Desperately hiding Nano infection from public",
                  "WANTS TO MAKE FRIENDS - Eager, friendly, insecure",
                  "Will try to befriend anyone at party",
                  "Virid Vipers may be using him as walking weapon"
                ]}
              />
            )
          }
        }
      },

      "sponsor_info": {
        password: {
          pw: "industry_insider",
          hint: "Someone with inside knowledge of the business (two words, underscore)",
          hintStrength: 2
        },
        content: (
          <>
            <Line cyan large bold>[CORPORATE SPONSORSHIP DATABASE]</Line>
            <Line smoke>Industry insider information - Not for public consumption</Line>
            <Divider />

            <Box color="red">
              <Line bold>⚠ CONFIDENTIAL INFORMATION ⚠</Line>
              <Line>Corporate sponsorship deals, backroom agreements</Line>
            </Box>

            <Divider />

            <Section title="MAJOR SPONSORS">
              <Line yellow bold>ALLIANSEN INC. (Chrome Manufacturer)</Line>
              <Line>• Primary Athlete: Steel Jackhammer</Line>
              <Line>• Contract Value: 2.5M¤ annually</Line>
              <Line>• Includes: Equipment, medical, housing</Line>
              <Line>• Recent: Fitted Steel with "proprietary" chrome legs</Line>
              <Line smoke small>Timing suspicious - legs identical to stolen Doc Joy prototype</Line>

              <Line yellow bold top>TG LABS (Pharmaceutical/Enhancement)</Line>
              <Line>• Multiple athletes on enhancement contracts</Line>
              <Line>• Known for "gray area" performance drugs</Line>
              <Line>• Rumored collusion with Alliansen on match outcomes</Line>
              <Line smoke small>See: Match-fixing evidence in Steel's safe</Line>

              <Line yellow bold top>VIRID VIPERS (Gang/Criminal Organization)</Line>
              <Line>• Primary Athlete: Jade Boomslang</Line>
              <Line>• "Sponsorship" is actually gang recruitment</Line>
              <Line>• Using killmatch for publicity and territory control</Line>
            </Section>

            <Divider />

            <Box color="yellow">
              <Line bold>INDUSTRY RUMORS:</Line>
              <Line>• Alliansen-TG Labs match-fixing ring (unconfirmed)</Line>
              <Line>• Steel Jackhammer unknowingly involved</Line>
              <Line>• Data chip with evidence exists (location unknown)</Line>
              <Line>• Publishing info would destroy multiple careers</Line>
            </Box>
          </>
        ),
        related_commands: {
          "alliansen_deals": {
            content: (
              <>
                <Line cyan large bold>[ALLIANSEN INC. - ATHLETE CONTRACTS]</Line>
                <Line smoke>Chrome manufacturer's killmatch investments</Line>
                <Divider />

                <Section title="CURRENT SPONSORED ATHLETES">
                  <Box color="cyan">
                    <Line bold>STEEL JACKHAMMER (Primary)</Line>
                    <KeyValue label="Contract Value" value="2.5M¤/year" valueColor="yellow" />
                    <KeyValue label="Duration" value="3 years (1 year remaining)" />
                    <KeyValue label="Includes" value="Chrome, medical, housing, stipend" />
                    <KeyValue label="Performance Bonus" value="500k¤ per title win" />
                    <Line top>Recent investment: "State-of-the-art" leg replacements</Line>
                    <Line smoke small>Design allegedly stolen from Doc Joy</Line>
                  </Box>

                  <Box color="cyan">
                    <Line bold>IRON MAIDEN (Secondary)</Line>
                    <KeyValue label="Contract Value" value="800k¤/year" />
                    <KeyValue label="Chrome Package" value="Defensive armor suite" />
                  </Box>

                  <Box color="cyan">
                    <Line bold>THE GRINDER (Tertiary)</Line>
                    <KeyValue label="Contract Value" value="400k¤/year" />
                    <KeyValue label="Chrome Package" value="Strength enhancement" />
                  </Box>
                </Section>

                <Divider />

                <Box color="red">
                  <Line bold>CONFIDENTIAL NOTES:</Line>
                  <Line>Steel's new legs match design stolen from Doc Joy clinic.</Line>
                  <Line>Alliansen claims "independent development" but timing suspicious.</Line>
                  <Line>Legal team prepared to deny any connection to theft.</Line>
                  <Line>If Steel's career ends, contract void - massive financial loss.</Line>
                </Box>
              </>
            )
          },

          "match_fixing_rumors": {
            content: (
              <>
                <Line cyan large bold>[MATCH-FIXING INVESTIGATION]</Line>
                <Line smoke>Unconfirmed allegations - Industry whispers</Line>
                <Divider />

                <Box color="red">
                  <Line bold>⚠ EXTREMELY SENSITIVE ⚠</Line>
                  <Line>Publication would destroy multiple companies and careers</Line>
                </Box>

                <Divider />

                <Section title="ALLEGED CONSPIRACY">
                  <Line yellow>PARTIES INVOLVED:</Line>
                  <Line>• Alliansen Inc. (Chrome manufacturer)</Line>
                  <Line>• TG Labs (Pharmaceutical company)</Line>
                  <Line>• Multiple athletes (unknowing participants?)</Line>
                  <Line>• Bookmakers (suspicious betting patterns)</Line>

                  <Line yellow top>MECHANISM:</Line>
                  <Line>1. TG Labs provides "enhancement drugs" to select athletes</Line>
                  <Line>2. Alliansen sponsors athletes with their chrome</Line>
                  <Line>3. Both companies coordinate match outcomes</Line>
                  <Line>4. Betting syndicates profit from insider knowledge</Line>
                  <Line>5. Athletes may not know they're part of scheme</Line>
                </Section>

                <Divider />

                <Box color="yellow">
                  <Line bold>EVIDENCE STATUS:</Line>
                  <Line>• Data chip with proof allegedly exists</Line>
                  <Line>• Contains communications between Alliansen & TG Labs</Line>
                  <Line>• Location: Unknown (possibly in Steel's possession?)</Line>
                  <Line>• Value: 9,000¤+ to media or PR agents (hush money)</Line>
                </Box>

                <Divider />

                <Warning>Anyone publishing this information would face severe legal retaliation</Warning>

                <Line smoke small>Steel might not even know what he has in his safe...</Line>
              </>
            )
          }
        }
      },

      "steel_jackhammer_profile": {
        content: (
          <>
            <Line cyan large bold>[STEEL JACKHAMMER - ATHLETE PROFILE]</Line>
            <Line smoke>Public information + recent news</Line>
            <Divider />

            <Box color="pink">
              <Line bold>★ STEEL JACKHAMMER ★</Line>
              <Line>Rising heavyweight star | Alliansen Inc. sponsored</Line>
            </Box>

            <Divider />

            <DataTable data={[
              { label: "Real Name", value: "Unknown (stage name only)" },
              { label: "Division", value: "Heavyweight Killmatch" },
              { label: "Current Rank", value: "#18 (climbing fast)" },
              { label: "Record", value: "24 wins, 8 losses" },
              { label: "Signature Move", value: "Jackhammer Punch (chain attacks)" },
              { label: "Sponsor", value: "Alliansen Inc. (2.5M¤/year contract)" }
            ]} />

            <Divider />

            <Section title="CAREER HIGHLIGHTS">
              <Line neon>• Debut: 2064 (3 years active)</Line>
              <Line neon>• Fastest rise in heavyweight division (2066-2067)</Line>
              <Line neon>• Known for aggressive, brawling style</Line>
              <Line neon>• Fan favorite due to "never give up" attitude</Line>
              <Line neon>• Viral moment: Krok fight (52M+ views)</Line>
            </Section>

            <Divider />

            <Section title="RECENT EVENTS">
              <Line yellow bold>Nov 10: THE KROK FIGHT</Line>
              <Line>Faced five Kroks simultaneously (exhibition match).</Line>
              <Line>Both legs literally ripped off mid-fight.</Line>
              <Line>Continued fighting for 30 seconds before collapse.</Line>
              <Line>Video went viral - "Warrior of the Week" declared.</Line>

              <Line yellow bold top>Nov 11: ALLIANSEN ANNOUNCEMENT</Line>
              <Line>Sponsor provided "state-of-the-art" replacement chrome legs.</Line>
              <Line>Public statement: "Proprietary new design from R&D team."</Line>
              <Line>Installation completed in 24 hours.</Line>

              <Line yellow bold top>Nov 12-PRESENT: RECOVERY PARTY</Line>
              <Line>Steel began "recovery celebration" at penthouse.</Line>
              <Line>Party now entering day 3+ with no signs of stopping.</Line>
              <Line>Dozens of VIP athletes and guests rotating through.</Line>
              <Line>Next fight scheduled Nov 21 vs. Gargoyle.</Line>
            </Section>

            <Divider />

            <Box color="cyan">
              <Line bold>CURRENT LOCATION:</Line>
              <Line>Central Plaza Tower, Unit 4201 (Penthouse)</Line>
              <Line>Address: 2847 Central Plaza, Southeast corner</Line>
              <Line>Security: 2 private guards at door (not building security)</Line>
              <Line>Status: Party ongoing, guests welcomed</Line>
            </Box>

            <Divider />

            <Box color="yellow">
              <Line bold>PERSONALITY PROFILE:</Line>
              <Line>• Loves attention and celebration</Line>
              <Line>• Heavy partier - drugs and alcohol</Line>
              <Line>• Friendly to fans and fellow athletes</Line>
              <Line>• Not particularly intelligent or cautious</Line>
              <Line>• Trusts sponsor Alliansen completely</Line>
              <Line>• Probably doesn't realize he might have stolen property</Line>
            </Box>
          </>
        )
      }
    }
  }
};

export default KILLMATCH_FEEDS_COMMANDS;
