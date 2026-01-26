import './cySports.css';

/**
 * CySports - Live sports coverage feed
 *
 * Corporate-sponsored ultraviolent sports entertainment.
 * Death Ball, Combat Racing, Corpo Leagues, and underground fights.
 */
export default function CySports() {
  const sportsData = {
    featured: {
      league: 'DEATH BALL CHAMPIONSHIP',
      matchup: 'Mosscroft Mutants vs Central Cyborgs',
      score: '47-42',
      status: 'LIVE - Q3 12:34',
      casualties: 8,
      sponsor: 'Brought to you by KILLTECH™',
    },
    liveGames: [
      {
        league: 'DEATH BALL',
        home: 'Slum Runners',
        away: 'Port Authority',
        score: '23-31',
        time: 'Q2 END',
        injuries: 4
      },
      {
        league: 'COMBAT RACING',
        leader: 'Vex "Chrome" Nakamura',
        lap: '14/20',
        time: 'LIVE',
        wrecks: 3
      },
      {
        league: 'CORPO LEAGUE',
        home: 'Kaytell Killers',
        away: 'NeoTech Knights',
        score: '2-1',
        time: 'HALF',
        injuries: 0
      },
    ],
    headlines: [
      {
        title: 'DEATH BALL: Mosscroft Star "Razor" Hospitalized After Brutal Hit',
        category: 'INJURY',
        time: '15m ago',
      },
      {
        title: 'RACING: Three Drivers Dead in Pier 7 Crash',
        category: 'FATAL',
        time: '1h ago',
      },
      {
        title: 'SCANDAL: Kaytell Accused of Illegal Cybernetic Enhancements',
        category: 'INVESTIGATION',
        time: '2h ago',
      },
      {
        title: 'UNDERGROUND: Stone Eels Fighter Wins Unsanctioned Bout',
        category: 'STREET',
        time: '4h ago',
      },
    ],
    standings: [
      { team: 'Central Cyborgs', wins: 14, losses: 3, casualties: 47 },
      { team: 'Mosscroft Mutants', wins: 12, losses: 5, casualties: 62 },
      { team: 'Slum Runners', wins: 10, losses: 7, casualties: 38 },
      { team: 'Port Authority', wins: 6, losses: 11, casualties: 29 },
    ],
    bettingOdds: [
      { matchup: 'Mutants vs Cyborgs', favorite: 'Cyborgs', line: '-3.5', over: '89.5' },
      { matchup: 'Runners vs Authority', favorite: 'Authority', line: '-7', over: '76' },
    ],
  };

  return (
    <div className="cy-sports">
      {/* Header */}
      <div className="cy-sports-header">
        <div className="cy-sports-brand">
          <div className="cy-sports-title">
            <div className="cy-sports-name">CySports LIVE</div>
            <div className="cy-sports-tagline">Your Source for Combat Entertainment</div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="cy-sports-main">
        {/* Featured game */}
        <div className="cy-sports-featured">
          <div className="cy-sports-featured-badge">FEATURED MATCH</div>
          <div className="cy-sports-featured-league">{sportsData.featured.league}</div>
          <div className="cy-sports-featured-matchup">{sportsData.featured.matchup}</div>
          <div className="cy-sports-featured-score">{sportsData.featured.score}</div>
          <div className="cy-sports-featured-status">{sportsData.featured.status}</div>
          <div className="cy-sports-featured-casualties">
            Casualties This Game: {sportsData.featured.casualties}
          </div>
          <div className="cy-sports-featured-sponsor">{sportsData.featured.sponsor}</div>
        </div>

        {/* Live games grid */}
        <div className="cy-sports-live">
          <div className="cy-sports-section-title">LIVE NOW</div>
          <div className="cy-sports-live-grid">
            {sportsData.liveGames.map((game, idx) => (
              <div key={idx} className="cy-sports-game">
                <div className="cy-sports-game-league">{game.league}</div>
                {game.home ? (
                  <>
                    <div className="cy-sports-game-teams">
                      <div className="cy-sports-game-team">{game.home}</div>
                      <div className="cy-sports-game-score">{game.score}</div>
                      <div className="cy-sports-game-team">{game.away}</div>
                    </div>
                    <div className="cy-sports-game-status">
                      <span>{game.time}</span>
                      {game.injuries > 0 && (
                        <span className="cy-sports-game-injuries">
                          {game.injuries} injured
                        </span>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="cy-sports-game-leader">{game.leader}</div>
                    <div className="cy-sports-game-lap">Lap {game.lap}</div>
                    <div className="cy-sports-game-status">
                      <span>{game.time}</span>
                      <span className="cy-sports-game-wrecks">
                        {game.wrecks} wrecks
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Headlines */}
        <div className="cy-sports-headlines">
          <div className="cy-sports-section-title">BREAKING NEWS</div>
          <div className="cy-sports-headlines-list">
            {sportsData.headlines.map((headline, idx) => (
              <div key={idx} className="cy-sports-headline">
                <div className="cy-sports-headline-category" data-category={headline.category.toLowerCase()}>
                  {headline.category}
                </div>
                <div className="cy-sports-headline-content">
                  <div className="cy-sports-headline-title">{headline.title}</div>
                  <div className="cy-sports-headline-time">{headline.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Standings */}
        <div className="cy-sports-standings">
          <div className="cy-sports-section-title">DEATH BALL STANDINGS</div>
          <div className="cy-sports-standings-table">
            <div className="cy-sports-standings-header">
              <div className="cy-sports-standings-cell">TEAM</div>
              <div className="cy-sports-standings-cell">W-L</div>
              <div className="cy-sports-standings-cell">CASUALTIES</div>
            </div>
            {sportsData.standings.map((team, idx) => (
              <div key={idx} className="cy-sports-standings-row">
                <div className="cy-sports-standings-cell">{team.team}</div>
                <div className="cy-sports-standings-cell">{team.wins}-{team.losses}</div>
                <div className="cy-sports-standings-cell cy-sports-standings-casualties">
                  {team.casualties}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Betting odds */}
        <div className="cy-sports-betting">
          <div className="cy-sports-section-title">BETTING LINES</div>
          <div className="cy-sports-betting-list">
            {sportsData.bettingOdds.map((bet, idx) => (
              <div key={idx} className="cy-sports-bet">
                <div className="cy-sports-bet-matchup">{bet.matchup}</div>
                <div className="cy-sports-bet-lines">
                  <div className="cy-sports-bet-line">
                    <span className="cy-sports-bet-label">SPREAD:</span>
                    <span className="cy-sports-bet-value">{bet.favorite} {bet.line}</span>
                  </div>
                  <div className="cy-sports-bet-line">
                    <span className="cy-sports-bet-label">O/U:</span>
                    <span className="cy-sports-bet-value">{bet.over}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cy-sports-betting-disclaimer">
            Gambling services provided by CyBet™ - Always bet responsibly
          </div>
        </div>

        {/* Disclaimer */}
        <div className="cy-sports-disclaimer">
          All death and injury statistics are estimates. CySports is not responsible for
          accuracy of casualty reports. Viewer discretion advised.
        </div>
      </div>
    </div>
  );
}
