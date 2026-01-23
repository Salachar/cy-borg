import { useState } from 'react';
import { Line, Divider, DataTable, Section } from '../TerminalComponents';

/**
 * Safe Component - Digital safe with physical/digital contents
 *
 * Tracks stolen state separately for physical and digital contents in localStorage.
 * Physical contents require physical presence to steal.
 * Digital contents can be extracted remotely via network.
 *
 * Props:
 * - id: Unique identifier for localStorage (e.g., "silverpeak-6c")
 * - model: Safe model number (e.g., "DS-400")
 * - location: Where the safe is located
 * - owner: Owner name and occupation
 * - security: Type of security (keypad, biometric, etc.)
 * - lastAccess: When it was last accessed
 * - physical: Array of { item, desc, value? } for physical contents
 * - digital: Array of { item, desc, value? } for digital contents
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
  // Track stolen states separately in localStorage
  const [physicalStolen, setPhysicalStolen] = useState(() => {
    return localStorage.getItem(`safe-physical-stolen-${id}`) === 'true';
  });

  const [digitalStolen, setDigitalStolen] = useState(() => {
    return localStorage.getItem(`safe-digital-stolen-${id}`) === 'true';
  });

  const handleStealPhysical = () => {
    localStorage.setItem(`safe-physical-stolen-${id}`, 'true');
    setPhysicalStolen(true);
  };

  const handleStealDigital = () => {
    localStorage.setItem(`safe-digital-stolen-${id}`, 'true');
    setDigitalStolen(true);
  };

  // Calculate total value if items have value property
  const calculateValue = (items) => {
    return items.reduce((sum, item) => sum + (item.value || 0), 0);
  };

  // Determine security color
  const getSecurityColor = () => {
    const secLower = security.toLowerCase();
    if (secLower.includes('retinal') || secLower.includes('biometric')) {
      return 'rgb(239, 68, 68)'; // red - high security
    }
    if (secLower.includes('keypad') || secLower.includes('pin')) {
      return 'rgb(250, 204, 21)'; // yellow - medium security
    }
    return 'rgb(79, 209, 197)'; // cyan - standard security
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
            {
              label: 'Security',
              value: security
            },
            { label: 'Last Access', value: lastAccess },
            { label: 'Owner', value: owner },
          ]}
        />

        {/* Show security level indicator */}
        <div style={{ marginTop: '0.5rem' }}>
          <Line smoke style={{ fontSize: '0.75rem' }}>
            Security Level:{' '}
            <span style={{ color: getSecurityColor(), fontWeight: 'bold' }}>
              {security.toLowerCase().includes('retinal') || security.toLowerCase().includes('biometric')
                ? 'HIGH'
                : security.toLowerCase().includes('keypad') || security.toLowerCase().includes('pin')
                ? 'MEDIUM'
                : 'STANDARD'}
            </span>
          </Line>
        </div>

        {/* Physical contents section */}
        {physical.length > 0 && (
          <>
            <Divider />
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <div>
                  <span
                    style={{
                      color: 'rgb(250, 204, 21)',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}
                  >
                    PHYSICAL CONTENTS
                  </span>
                  <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginTop: '0.15rem' }}>
                    Requires physical presence at safe location
                  </div>
                </div>

                {/* Steal Physical button */}
                <button
                  onClick={handleStealPhysical}
                  disabled={physicalStolen}
                  style={{
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    backgroundColor: physicalStolen ? 'rgb(45, 53, 72)' : 'rgb(250, 204, 21)',
                    color: physicalStolen ? 'rgb(148, 163, 184)' : 'rgb(19, 23, 34)',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: physicalStolen ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'monospace',
                  }}
                  onMouseEnter={(e) => {
                    if (!physicalStolen) {
                      e.target.style.backgroundColor = 'rgb(234, 179, 8)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!physicalStolen) {
                      e.target.style.backgroundColor = 'rgb(250, 204, 21)';
                    }
                  }}
                >
                  {physicalStolen ? (
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

              {/* Physical contents list */}
              <div
                style={{
                  backgroundColor: 'rgba(250, 204, 21, 0.05)',
                  padding: '0.5rem',
                  borderRadius: '3px',
                  border: physicalStolen
                    ? '1px solid rgba(239, 68, 68, 0.3)'
                    : '1px solid rgba(250, 204, 21, 0.2)',
                  position: 'relative',
                }}
              >
                {physical.map((item, i) => (
                  <Line
                    key={i}
                    yellow={!physicalStolen}
                    smoke={physicalStolen}
                    style={{
                      textDecoration: physicalStolen ? 'line-through' : 'none',
                      opacity: physicalStolen ? 0.5 : 1,
                    }}
                  >
                    → {item.item}: {item.desc}
                    {item.value && (
                      <span style={{ color: 'rgb(0, 170, 40)', marginLeft: '0.5rem' }}>
                        [{item.value}¤]
                      </span>
                    )}
                  </Line>
                ))}

                {/* Stolen indicator - cyber style */}
                {physicalStolen && (
                  <div
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '1px solid rgb(239, 68, 68)',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'rgb(239, 68, 68)',
                        borderRadius: '50%',
                        animation: 'blink 2s infinite',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: 'rgb(239, 68, 68)',
                        fontFamily: 'monospace',
                      }}
                    >
                      [CONTENTS STOLEN - {new Date().toLocaleDateString()}]
                      {calculateValue(physical) > 0 && ` - VALUE: ${calculateValue(physical)}¤`}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Digital contents section */}
        {digital.length > 0 && (
          <>
            <Divider />
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <div>
                  <span
                    style={{
                      color: 'rgb(79, 209, 197)',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                    }}
                  >
                    DIGITAL CONTENTS
                  </span>
                  <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginTop: '0.15rem' }}>
                    Extractable remotely via network connection
                  </div>
                </div>

                {/* Steal Digital button */}
                <button
                  onClick={handleStealDigital}
                  disabled={digitalStolen}
                  style={{
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    backgroundColor: digitalStolen ? 'rgb(45, 53, 72)' : 'rgb(79, 209, 197)',
                    color: digitalStolen ? 'rgb(148, 163, 184)' : 'rgb(19, 23, 34)',
                    border: 'none',
                    borderRadius: '3px',
                    cursor: digitalStolen ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: 'monospace',
                  }}
                  onMouseEnter={(e) => {
                    if (!digitalStolen) {
                      e.target.style.backgroundColor = 'rgb(56, 178, 172)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!digitalStolen) {
                      e.target.style.backgroundColor = 'rgb(79, 209, 197)';
                    }
                  }}
                >
                  {digitalStolen ? (
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
                    'EXTRACT'
                  )}
                </button>
              </div>

              {/* Digital contents list */}
              <div
                style={{
                  backgroundColor: 'rgba(79, 209, 197, 0.05)',
                  padding: '0.5rem',
                  borderRadius: '3px',
                  border: digitalStolen
                    ? '1px solid rgba(239, 68, 68, 0.3)'
                    : '1px solid rgba(79, 209, 197, 0.2)',
                  position: 'relative',
                }}
              >
                {digital.map((item, i) => (
                  <Line
                    key={i}
                    cyan={!digitalStolen}
                    smoke={digitalStolen}
                    style={{
                      textDecoration: digitalStolen ? 'line-through' : 'none',
                      opacity: digitalStolen ? 0.5 : 1,
                    }}
                  >
                    → {item.item}: {item.desc}
                    {item.value && (
                      <span style={{ color: 'rgb(0, 170, 40)', marginLeft: '0.5rem' }}>
                        [{item.value}¤]
                      </span>
                    )}
                  </Line>
                ))}

                {/* Stolen indicator - cyber style */}
                {digitalStolen && (
                  <div
                    style={{
                      marginTop: '0.5rem',
                      padding: '0.25rem 0.5rem',
                      backgroundColor: 'rgba(239, 68, 68, 0.2)',
                      border: '1px solid rgb(239, 68, 68)',
                      borderRadius: '3px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        backgroundColor: 'rgb(239, 68, 68)',
                        borderRadius: '50%',
                        animation: 'blink 2s infinite',
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color: 'rgb(239, 68, 68)',
                        fontFamily: 'monospace',
                      }}
                    >
                      [DATA EXTRACTED - {new Date().toLocaleDateString()}]
                      {calculateValue(digital) > 0 && ` - VALUE: ${calculateValue(digital)}¤`}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Empty safe state */}
        {physical.length === 0 && digital.length === 0 && (
          <>
            <Divider />
            <Line yellow>Safe is empty - No contents detected</Line>
          </>
        )}

        {/* Notes */}
        {notes && (
          <>
            <Divider />
            <Line neon>{notes}</Line>
          </>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
