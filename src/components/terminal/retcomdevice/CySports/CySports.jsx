import './cySports.css';

/**
 * CySports - Live Blood Bowl coverage
 *
 * Corporate-sponsored ultraviolent sports entertainment.
 * Features Blood Bowl leagues, matches, and mayhem.
 */
export default function CySports() {
  const sportsData = {
    featured: {
      league: 'CY BLOOD BOWL CHAMPIONSHIP',
      home: 'Central Cyborgs',
      away: 'Scargag Snivellers',
      homeScore: 2,
      awayScore: 1,
      status: 'TURN 12 - 2ND HALF',
      casualties: { home: 3, away: 5 },
      sponsor: 'KILLTECH™',
    },
    liveGames: [
      {
        home: 'Mosscroft Mutants',
        away: 'Port Reavers',
        homeScore: 1,
        awayScore: 2,
        turn: 'TURN 8',
        casualties: 6
      },
      {
        home: 'Slum Scrappers',
        away: 'Hills Highborn',
        homeScore: 0,
        awayScore: 0,
        turn: 'TURN 5',
        casualties: 2
      },
      {
        home: 'Kaytell Killers',
        away: 'NeoTech Knights',
        homeScore: 3,
        awayScore: 1,
        turn: 'HALFTIME',
        casualties: 4
      },
    ],
    headlines: [
      { title: 'Scargag Snivellers Goblin Thrown Out of Stadium - Lands in Canal', category: 'INJURY', time: '12m' },
      { title: 'Central Cyborgs Star Blitzer Kills Opposing Lineman - No Foul Called', category: 'FATAL', time: '45m' },
      { title: 'Mosscroft Accused of Using Illegal Mutations', category: 'SCANDAL', time: '1h' },
      { title: 'Referee Hospitalized After "Accidental" Tackle', category: 'INJURY', time: '3h' },
    ],
    standings: [
      { team: 'Central Cyborgs', w: 12, l: 2, td: 38, cas: 47 },
      { team: 'Kaytell Killers', w: 10, l: 4, td: 32, cas: 41 },
      { team: 'Mosscroft Mutants', w: 9, l: 5, td: 29, cas: 62 },
      { team: 'Scargag Snivellers', w: 6, l: 8, td: 18, cas: 38 },
      { team: 'Port Reavers', w: 4, l: 10, td: 15, cas: 29 },
    ],
  };

  // Blood Bowl spiked ball icon component
  const BloodBowlIcon = () => (
    <div className="bloodbowl-icon">
      <div className="bb-spike bb-spike-top"></div>
      <div className="bb-spike bb-spike-left"></div>
      <div className="bb-spike bb-spike-right"></div>
      <div className="bb-ball"></div>
      <div className="bb-spike bb-spike-bottom"></div>
    </div>
  );

  return (
    <div className="cy-sports">
      {/* Header */}
      <div className="cy-sports-header">
        <div className="cy-sports-brand">
          <BloodBowlIcon />
          <div className="cy-sports-title">
            <div className="cy-sports-name">CySports LIVE</div>
            <div className="cy-sports-tagline">Blood Bowl Coverage</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="cy-sports-main">
        {/* Featured game */}
        <div className="cy-sports-featured">
          <div className="cy-sports-featured-header">
            <span className="cy-sports-featured-badge">FEATURED</span>
            <span className="cy-sports-featured-league">{sportsData.featured.league}</span>
          </div>

          <div className="cy-sports-featured-matchup">
            <div className="cy-sports-featured-team">
              <div className="cy-sports-featured-team-name">{sportsData.featured.home}</div>
              <div className="cy-sports-featured-cas">{sportsData.featured.casualties.home} CAS</div>
            </div>
            <div className="cy-sports-featured-score">
              {sportsData.featured.homeScore} - {sportsData.featured.awayScore}
            </div>
            <div className="cy-sports-featured-team">
              <div className="cy-sports-featured-team-name">{sportsData.featured.away}</div>
              <div className="cy-sports-featured-cas">{sportsData.featured.casualties.away} CAS</div>
            </div>
          </div>

          <div className="cy-sports-featured-footer">
            <span>{sportsData.featured.status}</span>
            <span>Sponsored by {sportsData.featured.sponsor}</span>
          </div>
        </div>

        {/* Two column layout */}
        <div className="cy-sports-columns">
          {/* Left column */}
          <div className="cy-sports-column">
            {/* Live games */}
            <div className="cy-sports-section">
              <div className="cy-sports-section-title">LIVE MATCHES</div>
              {sportsData.liveGames.map((game, idx) => (
                <div key={idx} className="cy-sports-game">
                  <div className="cy-sports-game-teams">
                    <span>{game.home}</span>
                    <span className="cy-sports-game-score">{game.homeScore}-{game.awayScore}</span>
                    <span>{game.away}</span>
                  </div>
                  <div className="cy-sports-game-meta">
                    <span>{game.turn}</span>
                    <span className="cy-sports-game-cas">{game.casualties} casualties</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Headlines */}
            <div className="cy-sports-section">
              <div className="cy-sports-section-title">BREAKING NEWS</div>
              {sportsData.headlines.map((headline, idx) => (
                <div key={idx} className="cy-sports-headline">
                  <span className="cy-sports-headline-cat" data-category={headline.category.toLowerCase()}>
                    {headline.category}
                  </span>
                  <div className="cy-sports-headline-content">
                    <div className="cy-sports-headline-title">{headline.title}</div>
                    <div className="cy-sports-headline-time">{headline.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="cy-sports-column">
            {/* Standings */}
            <div className="cy-sports-section">
              <div className="cy-sports-section-title">LEAGUE STANDINGS</div>
              <div className="cy-sports-standings">
                <div className="cy-sports-standings-header">
                  <span>TEAM</span>
                  <span>W-L</span>
                  <span>TD</span>
                  <span>CAS</span>
                </div>
                {sportsData.standings.map((team, idx) => (
                  <div key={idx} className="cy-sports-standings-row">
                    <span>{team.team}</span>
                    <span>{team.w}-{team.l}</span>
                    <span>{team.td}</span>
                    <span className="cy-sports-standings-cas">{team.cas}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="cy-sports-footer">
          Blood Bowl casualty statistics are estimates. CySports not responsible for accuracy.
          Viewer discretion advised.
        </div>
      </div>
    </div>
  );
}
