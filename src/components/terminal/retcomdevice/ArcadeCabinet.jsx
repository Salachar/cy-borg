import { useState, useEffect } from 'react';
import { Line, Divider, Section } from '../TerminalComponents';

/**
 * ArcadeCabinet Component - Remote arcade machine status monitor
 *
 * Network interface showing arcade cabinet status/screen remotely.
 * Visual display of what's on the screen + stealable player wallet data.
 * Physical gameplay happens at the machine - this is just the web interface.
 *
 * Props:
 * - id: Unique identifier for localStorage (e.g., "arcade-station-01")
 * - cabinetName: Arcade cabinet name (e.g., "NEON FIGHTER II")
 * - location: Where the cabinet is physically located
 * - currentGame: Game currently loaded { title, genre, highScore }
 * - screenState: What's showing on screen ('ATTRACT' | 'PLAYING' | 'GAME_OVER' | 'HIGH_SCORE')
 * - gamesAvailable: Array of game titles available on this cabinet
 * - wallet: { credits, achievements, totalPlaytime } - stealable player data
 * - lastPlayed: Time string of last activity
 * - playerAccount: Current player account name
 */
export default function ArcadeCabinet({
  id,
  cabinetName = 'ARCADE CABINET',
  location = 'Unknown Location',
  currentGame = { title: 'DEMO MODE', genre: 'ATTRACT', highScore: 0 },
  screenState = 'ATTRACT',
  gamesAvailable = [],
  wallet = { credits: 0, achievements: 0, totalPlaytime: '0h' },
  lastPlayed = 'Unknown',
  playerAccount = 'GUEST',
}) {
  const [isWalletStolen, setIsWalletStolen] = useState(() => {
    return localStorage.getItem(`arcade-wallet-stolen-${id}`) === 'true';
  });

  const [blinkState, setBlinkState] = useState(true);

  // Blinking animation for attract mode
  useEffect(() => {
    const interval = setInterval(() => {
      setBlinkState((prev) => !prev);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  const handleStealWallet = () => {
    localStorage.setItem(`arcade-wallet-stolen-${id}`, 'true');
    setIsWalletStolen(true);
  };

  // Get screen display based on current state
  const getScreenDisplay = () => {
    switch (screenState) {
      case 'ATTRACT':
        return (
          <div style={{ textAlign: 'center' }}>
            <div
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                opacity: blinkState ? 1 : 0.3,
                transition: 'opacity 0.3s',
              }}
            >
              ╔═══════════════════╗
            </div>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                opacity: blinkState ? 1 : 0.3,
                transition: 'opacity 0.3s',
              }}
            >
              INSERT COIN
            </div>
            <div
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                opacity: blinkState ? 1 : 0.3,
                transition: 'opacity 0.3s',
              }}
            >
              ╚═══════════════════╝
            </div>
            <div style={{ fontSize: '0.875rem', marginTop: '1.5rem', opacity: 0.7 }}>
              {currentGame.title}
            </div>
          </div>
        );

      case 'PLAYING':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.7 }}>
              {currentGame.title}
            </div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              GAME IN PROGRESS
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.6 }}>
              Player at machine
            </div>
          </div>
        );

      case 'GAME_OVER':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.7 }}>
              {currentGame.title}
            </div>
            <div
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: 'rgb(239, 68, 68)',
              }}
            >
              GAME OVER
            </div>
            <div style={{ fontSize: '0.875rem', opacity: 0.6, marginTop: '1rem' }}>
              Continue? 10... 9... 8...
            </div>
          </div>
        );

      case 'HIGH_SCORE':
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '0.875rem', marginBottom: '1rem', opacity: 0.7 }}>
              {currentGame.title}
            </div>
            <div
              style={{
                fontSize: '1.8rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: 'rgb(251, 191, 36)',
              }}
            >
              ★ NEW HIGH SCORE! ★
            </div>
            <div style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
              Enter Initials: {blinkState ? '▊' : '_'}__
            </div>
          </div>
        );

      default:
        return (
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.5rem', opacity: 0.5 }}>
              OFFLINE
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Cabinet container */}
      <div
        style={{
          border: '3px solid rgb(251, 146, 60)',
          borderRadius: '8px',
          padding: '1.5rem',
          backgroundColor: 'rgba(20, 10, 30, 0.9)',
          position: 'relative',
          boxShadow: '0 0 20px rgba(251, 146, 60, 0.4)',
        }}
      >
        {/* Cabinet header */}
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Line
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: 'rgb(251, 146, 60)',
              textShadow: '0 0 10px rgb(251, 146, 60)',
              letterSpacing: '0.2em',
              margin: 0,
            }}
          >
            ◄◄ {cabinetName} ►►
          </Line>
          <Line cyan style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
            {location}
          </Line>
        </div>

        <Divider />

        {/* Screen display - shows current cabinet state */}
        <div
          style={{
            backgroundColor: 'rgb(10, 20, 15)',
            border: '4px solid rgb(148, 163, 184)',
            borderRadius: '6px',
            padding: '2rem 1.5rem',
            marginTop: '1rem',
            marginBottom: '1rem',
            minHeight: '180px',
            position: 'relative',
            boxShadow: 'inset 0 0 20px rgba(0, 255, 65, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* CRT scanline effect */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 65, 0.03) 2px, rgba(0, 255, 65, 0.03) 4px)',
              pointerEvents: 'none',
              borderRadius: '2px',
            }}
          />

          {/* Screen content */}
          <div
            style={{
              position: 'relative',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              lineHeight: '1.4',
              color: 'rgb(0, 255, 65)',
              textShadow: '0 0 5px rgba(0, 255, 65, 0.8)',
              zIndex: 1,
              width: '100%',
            }}
          >
            {getScreenDisplay()}
          </div>

          {/* High score display (always visible) */}
          <div
            style={{
              position: 'absolute',
              top: '0.5rem',
              right: '0.5rem',
              fontSize: '0.7rem',
              color: 'rgb(251, 191, 36)',
              fontFamily: 'monospace',
              zIndex: 2,
            }}
          >
            HI: {currentGame.highScore.toLocaleString()}
          </div>
        </div>

        {/* Status panel */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '0.75rem',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          {/* Player account */}
          <div
            style={{
              padding: '0.5rem',
              backgroundColor: 'rgba(79, 209, 197, 0.1)',
              border: '1px solid rgba(79, 209, 197, 0.3)',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.65rem',
                color: 'rgb(148, 163, 184)',
                marginBottom: '0.25rem',
              }}
            >
              PLAYER
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'rgb(79, 209, 197)',
                fontFamily: 'monospace',
              }}
            >
              {playerAccount}
            </div>
          </div>

          {/* Screen state */}
          <div
            style={{
              padding: '0.5rem',
              backgroundColor: 'rgba(251, 191, 36, 0.1)',
              border: '1px solid rgba(251, 191, 36, 0.3)',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.65rem',
                color: 'rgb(148, 163, 184)',
                marginBottom: '0.25rem',
              }}
            >
              STATUS
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'rgb(251, 191, 36)',
                fontFamily: 'monospace',
              }}
            >
              {screenState}
            </div>
          </div>

          {/* Last played */}
          <div
            style={{
              padding: '0.5rem',
              backgroundColor: 'rgba(148, 163, 184, 0.1)',
              border: '1px solid rgba(148, 163, 184, 0.3)',
              borderRadius: '4px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontSize: '0.65rem',
                color: 'rgb(148, 163, 184)',
                marginBottom: '0.25rem',
              }}
            >
              LAST PLAYED
            </div>
            <div
              style={{
                fontSize: '0.8rem',
                fontWeight: 'bold',
                color: 'rgb(148, 163, 184)',
                fontFamily: 'monospace',
              }}
            >
              {lastPlayed}
            </div>
          </div>
        </div>

        {/* Available games */}
        {gamesAvailable.length > 0 && (
          <>
            <Divider />
            <Section title="GAMES AVAILABLE ON THIS CABINET:" color="cyan">
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                }}
              >
                {gamesAvailable.map((game, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.35rem 0.6rem',
                      fontSize: '0.75rem',
                      backgroundColor: 'rgba(45, 53, 72, 0.4)',
                      border: '1px solid rgb(71, 85, 105)',
                      borderRadius: '3px',
                      color: 'rgb(133, 175, 231)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {game}
                  </span>
                ))}
              </div>
            </Section>
          </>
        )}

        <Divider />

        {/* Wallet section - stealable */}
        <div
          style={{
            position: 'relative',
            backgroundColor: isWalletStolen
              ? 'rgba(239, 68, 68, 0.1)'
              : 'rgba(34, 197, 94, 0.1)',
            border: `1px solid ${isWalletStolen ? 'rgba(239, 68, 68, 0.3)' : 'rgba(34, 197, 94, 0.3)'}`,
            borderRadius: '4px',
            padding: '0.75rem',
            marginTop: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.5rem',
            }}
          >
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                color: isWalletStolen ? 'rgb(239, 68, 68)' : 'rgb(34, 197, 94)',
                fontFamily: 'monospace',
              }}
            >
              {isWalletStolen ? '🔓 WALLET EXTRACTED' : '🔒 GAME WALLET'}
            </span>

            {!isWalletStolen && (
              <button
                onClick={handleStealWallet}
                style={{
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  backgroundColor: 'rgb(79, 209, 197)',
                  color: 'rgb(19, 23, 34)',
                  border: 'none',
                  borderRadius: '3px',
                  cursor: 'pointer',
                  fontFamily: 'monospace',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgb(56, 178, 172)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'rgb(79, 209, 197)';
                }}
              >
                EXTRACT
              </button>
            )}
          </div>

          {/* Wallet contents */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '0.5rem',
              marginTop: '0.5rem',
              opacity: isWalletStolen ? 0.5 : 1,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: 'rgb(148, 163, 184)',
                }}
              >
                CREDITS
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'rgb(251, 191, 36)',
                }}
              >
                {wallet.credits}¤
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: 'rgb(148, 163, 184)',
                }}
              >
                ACHIEVEMENTS
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'rgb(168, 85, 247)',
                }}
              >
                {wallet.achievements}
              </div>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontSize: '0.7rem',
                  color: 'rgb(148, 163, 184)',
                }}
              >
                PLAYTIME
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  color: 'rgb(34, 197, 94)',
                }}
              >
                {wallet.totalPlaytime}
              </div>
            </div>
          </div>

          {/* Stolen overlay */}
          {isWalletStolen && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-15deg)',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'rgba(239, 68, 68, 0.4)',
                border: '3px solid rgba(239, 68, 68, 0.4)',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                pointerEvents: 'none',
                letterSpacing: '0.2em',
              }}
            >
              STOLEN
            </div>
          )}
        </div>

        {/* Footer */}
        <Line
          smoke
          style={{
            fontSize: '0.7rem',
            textAlign: 'center',
            marginTop: '1rem',
            fontStyle: 'italic',
          }}
        >
          Remote cabinet monitor • Physical gameplay at {location}
        </Line>
      </div>
    </div>
  );
}
