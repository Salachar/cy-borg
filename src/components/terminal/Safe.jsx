import { useState } from 'react';
import { Line, Divider, DataTable, Section } from './TerminalComponents';

/**
 * Safe Component - Digital safe with physical/digital contents
 *
 * Tracks "stolen" state in localStorage for player progress tracking.
 * Uses CSS-only icons (no emojis).
 *
 * Props:
 * - id: Unique identifier for localStorage (e.g., "silverpeak-6c")
 * - model: Safe model number (e.g., "DS-400")
 * - location: Where the safe is located
 * - owner: Owner name and occupation
 * - security: Type of security (keypad, biometric, etc.)
 * - lastAccess: When it was last accessed
 * - physical: Array of { item, desc } for physical contents
 * - digital: Array of { item, desc } for digital contents
 * - notes: Additional flavor text about the safe
 */
export default function Safe({
  id,
  model,
  location,
  owner,
  security,
  lastAccess,
  physical = [],
  digital = [],
  notes,
}) {
  // Track stolen state in localStorage
  const [isStolen, setIsStolen] = useState(() => {
    return localStorage.getItem(`safe-stolen-${id}`) === 'true';
  });

  const handleSteal = () => {
    localStorage.setItem(`safe-stolen-${id}`, 'true');
    setIsStolen(true);
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Safe container with border */}
      <div
        style={{
          border: '2px solid rgb(77, 167, 188)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header with lock icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Lock Icon */}
          <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
            {/* Lock body */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '4px',
                width: '12px',
                height: '10px',
                backgroundColor: 'rgb(148, 163, 184)',
                borderRadius: '2px',
              }}
            />
            {/* Lock shackle */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '6px',
                width: '8px',
                height: '12px',
                border: '2px solid rgb(148, 163, 184)',
                borderBottom: 'none',
                borderRadius: '4px 4px 0 0',
              }}
            />
          </div>
          <Line smoke large bold style={{ margin: 0 }}>
            [DIGITAL SAFE - MODEL {model}]
          </Line>
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        {/* Safe info table */}
        <DataTable
          data={[
            { label: 'Status', value: 'LOCKED' },
            { label: 'Security', value: security },
            { label: 'Last Access', value: lastAccess },
            { label: 'Owner', value: owner },
          ]}
        />
        <Divider />

        {/* Physical contents */}
        <Section title="PHYSICAL CONTENTS (Requires presence):">
          {physical.map((item, i) => (
            <Line key={i} yellow>
              → {item.item}: {item.desc}
            </Line>
          ))}
        </Section>
        <Divider />

        {/* Digital contents with steal button */}
        <div style={{ position: 'relative' }}>
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
                color: 'rgb(79, 209, 197)',
                fontSize: '0.875rem',
                fontWeight: 'bold',
              }}
            >
              DIGITAL CONTENTS (Extractable remotely):
            </span>

            {/* Steal button */}
            <button
              onClick={handleSteal}
              disabled={isStolen}
              style={{
                padding: '0.25rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                backgroundColor: isStolen ? 'rgb(45, 53, 72)' : 'rgb(79, 209, 197)',
                color: isStolen ? 'rgb(148, 163, 184)' : 'rgb(19, 23, 34)',
                border: 'none',
                borderRadius: '3px',
                cursor: isStolen ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
              }}
              onMouseEnter={(e) => {
                if (!isStolen) {
                  e.target.style.backgroundColor = 'rgb(56, 178, 172)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isStolen) {
                  e.target.style.backgroundColor = 'rgb(79, 209, 197)';
                }
              }}
            >
              {isStolen ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  {/* CSS Checkmark */}
                  <span
                    style={{
                      display: 'inline-block',
                      width: '10px',
                      height: '6px',
                      borderLeft: '2px solid currentColor',
                      borderBottom: '2px solid currentColor',
                      transform: 'rotate(-45deg)',
                      marginBottom: '2px',
                    }}
                  />
                  STOLEN
                </span>
              ) : (
                'STEAL'
              )}
            </button>
          </div>

          {/* Digital contents list with subtle highlight */}
          <div
            style={{
              backgroundColor: 'rgba(79, 209, 197, 0.05)',
              padding: '0.5rem',
              borderRadius: '3px',
              border: '1px solid rgba(79, 209, 197, 0.2)',
              position: 'relative',
              opacity: isStolen ? 0.5 : 1,
              transition: 'opacity 0.3s',
            }}
          >
            {digital.map((item, i) => (
              <Line key={i} cyan>
                → {item.item}: {item.desc}
              </Line>
            ))}

            {/* Stolen overlay stamp - only over digital contents */}
            {isStolen && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%) rotate(-15deg)',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: 'rgba(252, 129, 129, 0.4)',
                  border: '3px solid rgba(252, 129, 129, 0.4)',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '6px',
                  pointerEvents: 'none',
                  letterSpacing: '0.2em',
                }}
              >
                STOLEN
              </div>
            )}
          </div>
        </div>

        {/* Notes */}
        {notes && (
          <>
            <Divider />
            <Line neon>{notes}</Line>
          </>
        )}
      </div>
    </div>
  );
}
