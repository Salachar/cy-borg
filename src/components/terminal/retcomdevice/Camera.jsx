import { Line, Divider, DataTable, Section } from '../TerminalComponents';

export default function Camera({
  id,
  location,
  coverage,
  status = 'ACTIVE',
  recording = true,
  storage = 'Local server',
  timeline = [],
  blindSpots = [],
  lastMaintenance,
}) {
  const isOnline = status === 'ACTIVE' || status === 'RECORDING';

  return (
    <div style={{ position: 'relative' }}>
      {/* Camera container */}
      <div
        style={{
          border: '2px solid rgb(77, 167, 188)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header with camera icon and REC indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Camera Icon */}
          <div style={{ position: 'relative', width: '24px', height: '20px', flexShrink: 0 }}>
            {/* Camera body */}
            <div
              style={{
                position: 'absolute',
                top: '4px',
                left: '2px',
                width: '20px',
                height: '14px',
                backgroundColor: 'rgb(148, 163, 184)',
                borderRadius: '3px',
              }}
            />
            {/* Lens */}
            <div
              style={{
                position: 'absolute',
                top: '7px',
                left: '8px',
                width: '10px',
                height: '10px',
                backgroundColor: 'rgb(19, 23, 34)',
                borderRadius: '50%',
                border: '2px solid rgb(79, 209, 197)',
              }}
            />
            {/* Mount bracket */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '9px',
                width: '6px',
                height: '5px',
                backgroundColor: 'rgb(148, 163, 184)',
                borderRadius: '2px 2px 0 0',
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [SECURITY CAMERA - {id.toUpperCase()}]
          </Line>

          {/* Recording indicator */}
          {recording && isOnline && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'rgb(252, 129, 129)',
                  borderRadius: '50%',
                  animation: 'blink 2s infinite',
                }}
              />
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: 'rgb(252, 129, 129)',
                  fontFamily: 'monospace',
                }}
              >
                REC
              </span>
            </div>
          )}
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        {/* Camera info */}
        <DataTable
          data={[
            { label: 'Status', value: status },
            { label: 'Coverage', value: coverage },
            { label: 'Recording', value: recording ? 'YES (7-day loop)' : 'NO' },
            { label: 'Storage', value: storage },
          ]}
        />

        {/* Timeline */}
        {timeline.length > 0 && (
          <>
            <Divider />
            <Section title="FOOTAGE TIMELINE:">
              {timeline.map((event, i) => (
                <Line
                  key={i}
                  neon={!event.includes('LOST') && !event.includes('offline')}
                  red={event.includes('LOST') || event.includes('offline') || event.includes('shattered')}
                  yellow={event.includes('suspicious') || event.includes('⚠')}
                >
                  {event}
                </Line>
              ))}
            </Section>
          </>
        )}

        {/* Blind spots */}
        {blindSpots.length > 0 && (
          <>
            <Divider />
            <Section title="BLIND SPOTS:">
              {blindSpots.map((spot, i) => (
                <Line key={i} yellow>
                  → {spot}
                </Line>
              ))}
            </Section>
          </>
        )}

        {/* Maintenance info */}
        {lastMaintenance && (
          <>
            <Divider />
            <Line neon>Last maintenance: {lastMaintenance}</Line>
          </>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </div>
  );
}
