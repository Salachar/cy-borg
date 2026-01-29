import { Line, Divider, Section } from '@terminal/TerminalComponents';

export default function CommercialCamera({
  location,
  cameraId,
  status = 'ACTIVE',
  coverage,
  details = [],
  alerts = [],
  lastMaintenance,
}) {
  const isOnline = status.includes('ACTIVE') || status.includes('RECORDING');

  // Status color mapping
  const getStatusColor = () => {
    if (status.includes('ACTIVE')) return 'rgb(79, 209, 197)';
    if (status.includes('OFFLINE')) return 'rgb(252, 129, 129)';
    if (status.includes('MAINTENANCE')) return 'rgb(251, 191, 36)';
    return 'rgb(148, 163, 184)';
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Main container with corporate aesthetic */}
      <div
        style={{
          border: '2px solid rgb(77, 167, 188)',
          borderTop: '4px solid rgb(79, 209, 197)',
          borderRadius: '6px',
          padding: '1.25rem',
          backgroundColor: 'rgba(29, 35, 50, 0.4)',
          position: 'relative',
        }}
      >
        {/* Header section */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
          {/* Left: Camera icon + ID */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {/* Enhanced camera icon */}
            <div style={{ position: 'relative', width: '32px', height: '28px', flexShrink: 0 }}>
              {/* Camera body */}
              <div
                style={{
                  position: 'absolute',
                  top: '6px',
                  left: '2px',
                  width: '28px',
                  height: '18px',
                  backgroundColor: 'rgb(79, 209, 197)',
                  borderRadius: '4px',
                  opacity: 0.9,
                }}
              />
              {/* Lens */}
              <div
                style={{
                  position: 'absolute',
                  top: '9px',
                  left: '10px',
                  width: '14px',
                  height: '14px',
                  backgroundColor: 'rgb(19, 23, 34)',
                  borderRadius: '50%',
                  border: '2px solid rgb(79, 209, 197)',
                  boxShadow: isOnline ? '0 0 8px rgba(79, 209, 197, 0.6)' : 'none',
                }}
              />
              {/* Mount bracket */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '12px',
                  width: '8px',
                  height: '7px',
                  backgroundColor: 'rgb(79, 209, 197)',
                  borderRadius: '3px 3px 0 0',
                  opacity: 0.9,
                }}
              />
              {/* Pan indicator (small line) */}
              {isOnline && (
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '24px',
                    width: '6px',
                    height: '2px',
                    backgroundColor: 'rgb(79, 209, 197)',
                    opacity: 0.7,
                    animation: 'pan 3s ease-in-out infinite',
                  }}
                />
              )}
            </div>

            <div>
              <Line smoke large bold style={{ margin: 0 }}>
                {cameraId}
              </Line>
              <Line cyan style={{ fontSize: '0.875rem', margin: 0, marginTop: '0.25rem' }}>
                {location}
              </Line>
            </div>
          </div>

          {/* Right: Status badge */}
          <div
            style={{
              padding: '0.35rem 0.75rem',
              backgroundColor: isOnline ? 'rgba(79, 209, 197, 0.15)' : 'rgba(252, 129, 129, 0.15)',
              border: `1px solid ${getStatusColor()}`,
              borderRadius: '4px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: getStatusColor(),
                borderRadius: '50%',
                animation: isOnline ? 'pulse 2s infinite' : 'none',
              }}
            />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: getStatusColor(),
                fontFamily: 'monospace',
                letterSpacing: '0.05em',
              }}
            >
              {status}
            </span>
          </div>
        </div>

        <Divider />

        {/* Coverage info */}
        <Section title="COVERAGE AREA">
          <Line neon>{coverage}</Line>
        </Section>

        {/* Technical specifications grid */}
        {details.length > 0 && (
          <>
            <Divider />
            <Section title="SPECIFICATIONS">
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {details.map((detail, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.5rem',
                      backgroundColor: 'rgba(79, 209, 197, 0.05)',
                      borderLeft: '2px solid rgb(79, 209, 197)',
                      borderRadius: '2px',
                    }}
                  >
                    <div
                      style={{
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'rgb(79, 209, 197)',
                        borderRadius: '50%',
                        flexShrink: 0,
                      }}
                    />
                    <Line smoke style={{ margin: 0, fontSize: '0.875rem' }}>
                      {detail}
                    </Line>
                  </div>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* Recent alerts */}
        {alerts.length > 0 && (
          <>
            <Divider />
            <Section title="RECENT ACTIVITY">
              {alerts.map((alert, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.75rem',
                    marginBottom: i < alerts.length - 1 ? '0.5rem' : 0,
                    backgroundColor: 'rgba(251, 191, 36, 0.1)',
                    border: '1px solid rgb(251, 191, 36)',
                    borderRadius: '3px',
                  }}
                >
                  <Line yellow bold style={{ margin: 0, fontSize: '0.75rem' }}>
                    {alert.time}
                  </Line>
                  <Line smoke style={{ margin: 0, marginTop: '0.25rem', fontSize: '0.875rem' }}>
                    {alert.message}
                  </Line>
                </div>
              ))}
            </Section>
          </>
        )}

        {/* Maintenance info */}
        {lastMaintenance && (
          <>
            <Divider />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem',
                backgroundColor: 'rgba(79, 209, 197, 0.05)',
                borderRadius: '3px',
              }}
            >
              <div
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'rgb(79, 209, 197)',
                  borderRadius: '50%',
                }}
              />
              <Line neon style={{ margin: 0, fontSize: '0.8rem' }}>
                Last maintenance: {lastMaintenance}
              </Line>
            </div>
          </>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px currentColor; }
          50% { opacity: 0.6; box-shadow: 0 0 8px currentColor; }
        }

        @keyframes pan {
          0%, 100% { transform: translateX(0) rotate(0deg); }
          50% { transform: translateX(-2px) rotate(-10deg); }
        }
      `}</style>
    </div>
  );
}
