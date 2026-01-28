import { useState } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';

export default function VendingMachine({
  id,
  model = 'SynthDrinx 3000',
  location,
  drinks = [],
}) {
  const [dispensing, setDispensing] = useState(null);

  const handleDispense = (drinkName) => {
    if (dispensing) return;

    setDispensing(drinkName);

    // Reset after animation
    setTimeout(() => {
      setDispensing(null);
    }, 2000);
  };

  // Color mappings
  const colorMap = {
    orange: { bg: 'rgb(251, 146, 60)', text: 'rgb(194, 65, 12)' },
    red: { bg: 'rgb(239, 68, 68)', text: 'rgb(127, 29, 29)' },
    yellow: { bg: 'rgb(250, 204, 21)', text: 'rgb(161, 98, 7)' },
    blue: { bg: 'rgb(59, 130, 246)', text: 'rgb(30, 58, 138)' },
    green: { bg: 'rgb(34, 197, 94)', text: 'rgb(20, 83, 45)' },
    purple: { bg: 'rgb(168, 85, 247)', text: 'rgb(88, 28, 135)' },
  };

  // Pattern SVG generators
  const getPattern = (pattern, color) => {
    const colors = colorMap[color] || colorMap.orange;

    switch (pattern) {
      case 'circles':
        return (
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <circle cx="20%" cy="30%" r="8" fill={colors.text} opacity="0.4" />
            <circle cx="40%" cy="50%" r="10" fill={colors.text} opacity="0.3" />
            <circle cx="65%" cy="35%" r="7" fill={colors.text} opacity="0.5" />
            <circle cx="80%" cy="60%" r="9" fill={colors.text} opacity="0.4" />
          </svg>
        );

      case 'blocks':
        return (
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <rect x="15%" y="25%" width="15" height="15" fill={colors.text} opacity="0.4" />
            <rect x="45%" y="40%" width="20" height="20" fill={colors.text} opacity="0.3" />
            <rect x="70%" y="30%" width="12" height="12" fill={colors.text} opacity="0.5" />
          </svg>
        );

      case 'lines':
        return (
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <line x1="10%" y1="30%" x2="90%" y2="30%" stroke={colors.text} strokeWidth="3" opacity="0.4" />
            <line x1="10%" y1="50%" x2="90%" y2="50%" stroke={colors.text} strokeWidth="4" opacity="0.3" />
            <line x1="10%" y1="70%" x2="90%" y2="70%" stroke={colors.text} strokeWidth="3" opacity="0.4" />
          </svg>
        );

      case 'waves':
        return (
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            <path d="M 0 40 Q 25 20 50 40 T 100 40" stroke={colors.text} strokeWidth="3" fill="none" opacity="0.4" />
            <path d="M 0 55 Q 25 35 50 55 T 100 55" stroke={colors.text} strokeWidth="3" fill="none" opacity="0.3" />
            <path d="M 0 70 Q 25 50 50 70 T 100 70" stroke={colors.text} strokeWidth="3" fill="none" opacity="0.4" />
          </svg>
        );

      case 'dots':
        return (
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {[...Array(20)].map((_, i) => (
              <circle
                key={i}
                cx={`${15 + (i % 5) * 18}%`}
                cy={`${25 + Math.floor(i / 5) * 18}%`}
                r="4"
                fill={colors.text}
                opacity="0.3"
              />
            ))}
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Vending machine container */}
      <div
        style={{
          border: '2px solid rgb(79, 209, 197)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Vending Machine Icon */}
          <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
            {/* Machine body */}
            <div
              style={{
                position: 'absolute',
                width: '24px',
                height: '24px',
                backgroundColor: 'rgb(79, 209, 197)',
                borderRadius: '3px',
              }}
            />
            {/* Display window */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: '4px',
                width: '16px',
                height: '10px',
                backgroundColor: 'rgba(0, 255, 65, 0.3)',
                borderRadius: '1px',
              }}
            />
            {/* Dispense slot */}
            <div
              style={{
                position: 'absolute',
                bottom: '3px',
                left: '6px',
                width: '12px',
                height: '3px',
                backgroundColor: 'rgb(19, 23, 34)',
                borderRadius: '1px',
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0 }}>
            [{model}]
          </Line>
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        <Line cyan bold style={{ fontSize: '0.875rem', marginBottom: '0.75rem' }}>
          AVAILABLE SELECTIONS:
        </Line>

        {/* Drink buttons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {drinks.map((drink, i) => {
            const colors = colorMap[drink.color] || colorMap.orange;
            const isDispensing = dispensing === drink.name;

            return (
              <button
                key={i}
                onClick={() => drink.available && handleDispense(drink.name)}
                disabled={!drink.available || isDispensing}
                style={{
                  position: 'relative',
                  height: '60px',
                  backgroundColor: drink.available ? colors.bg : 'rgb(45, 53, 72)',
                  border: drink.available ? '2px solid rgba(0, 0, 0, 0.2)' : '2px solid rgb(77, 77, 77)',
                  borderRadius: '4px',
                  cursor: drink.available && !isDispensing ? 'pointer' : 'not-allowed',
                  overflow: 'hidden',
                  transition: 'all 0.2s',
                  opacity: drink.available ? (isDispensing ? 0.7 : 1) : 0.4,
                }}
              >
                {/* Pattern overlay */}
                {drink.available && getPattern(drink.pattern, drink.color)}

                {/* Drink name */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1rem',
                    transform: 'translateY(-50%)',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: drink.available ? colors.text : 'rgb(100, 100, 100)',
                    fontFamily: 'monospace',
                    textShadow: drink.available ? '1px 1px 2px rgba(0, 0, 0, 0.3)' : 'none',
                    zIndex: 1,
                  }}
                >
                  {drink.name}
                </div>

                {/* Price tag */}
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '1rem',
                    transform: 'translateY(-50%)',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    color: drink.available ? colors.text : 'rgb(100, 100, 100)',
                    fontFamily: 'monospace',
                    zIndex: 1,
                  }}
                >
                  {drink.available ? '1¤' : 'SOLD OUT'}
                </div>

                {/* Dispensing animation overlay */}
                {isDispensing && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'flash 0.5s infinite',
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        color: colors.text,
                        fontFamily: 'monospace',
                      }}
                    >
                      DISPENSING...
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <Divider />
        <Line yellow style={{ fontSize: '0.75rem' }}>
          Cost: 1¤ per selection (credchip accepted)
        </Line>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes flash {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
