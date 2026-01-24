import { Line, Divider, DataTable, Section } from '../TerminalComponents';

export default function BiometricRecognition({
  id,
  systemName = "BIOMETRIC RECOGNITION SYSTEM",
  location,
  lastCalibration,
  confidence = "85%",
  scans = [],
}) {
  // Determine overall system status
  const recentFailures = scans.filter(s => s.result === 'FAILED').length;
  const systemStatus = recentFailures > 3 ? 'DEGRADED' : 'OPERATIONAL';

  return (
    <div style={{ position: 'relative' }}>
      {/* Main container */}
      <div
        style={{
          border: '2px solid rgb(250, 204, 21)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header with biometric icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Eye/Scan Icon */}
          <div style={{ position: 'relative', width: '28px', height: '20px', flexShrink: 0 }}>
            {/* Eye outline */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '28px',
                height: '16px',
                border: '2px solid rgb(250, 204, 21)',
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              }}
            />
            {/* Iris */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '10px',
                height: '10px',
                backgroundColor: 'rgb(250, 204, 21)',
                borderRadius: '50%',
              }}
            />
            {/* Pupil */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '5px',
                height: '5px',
                backgroundColor: 'rgb(19, 23, 34)',
                borderRadius: '50%',
              }}
            />
            {/* Scan lines */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '32px',
                height: '1px',
                backgroundColor: 'rgb(250, 204, 21)',
                opacity: 0.6,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(90deg)',
                width: '20px',
                height: '1px',
                backgroundColor: 'rgb(250, 204, 21)',
                opacity: 0.6,
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [{systemName}]
          </Line>

          {/* System status indicator */}
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 'bold',
              color: systemStatus === 'OPERATIONAL' ? 'rgb(0, 170, 40)' : 'rgb(250, 204, 21)',
              fontFamily: 'monospace',
            }}
          >
            [{systemStatus}]
          </div>
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        {/* System info */}
        <DataTable
          data={[
            { label: 'Last Calibration', value: lastCalibration },
            { label: 'Confidence Threshold', value: confidence },
            { label: 'Total Scans (24h)', value: scans.length.toString() },
            { label: 'Recent Failures', value: recentFailures.toString() },
          ]}
        />

        {/* Recognition logs */}
        {scans.length > 0 && (
          <>
            <Divider />
            <Section title="RECOGNITION LOG:" color="yellow">
              {scans.map((scan, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: '1rem',
                    padding: '0.75rem',
                    backgroundColor:
                      scan.result === 'MATCHED'
                        ? 'rgba(0, 170, 40, 0.1)'
                        : scan.result === 'OVERRIDE'
                        ? 'rgba(250, 204, 21, 0.1)'
                        : scan.result === 'PARTIAL'
                        ? 'rgba(79, 209, 197, 0.1)'
                        : 'rgba(239, 68, 68, 0.1)',
                    border: `1px solid ${
                      scan.result === 'MATCHED'
                        ? 'rgba(0, 170, 40, 0.3)'
                        : scan.result === 'OVERRIDE'
                        ? 'rgba(250, 204, 21, 0.3)'
                        : scan.result === 'PARTIAL'
                        ? 'rgba(79, 209, 197, 0.3)'
                        : 'rgba(239, 68, 68, 0.3)'
                    }`,
                    borderRadius: '3px',
                  }}
                >
                  {/* Timestamp and result */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Line smoke bold>
                      {scan.timestamp}
                    </Line>
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 'bold',
                        color:
                          scan.result === 'MATCHED'
                            ? 'rgb(0, 170, 40)'
                            : scan.result === 'OVERRIDE'
                            ? 'rgb(250, 204, 21)'
                            : scan.result === 'PARTIAL'
                            ? 'rgb(79, 209, 197)'
                            : 'rgb(239, 68, 68)',
                        fontFamily: 'monospace',
                      }}
                    >
                      [{scan.result}]
                    </span>
                  </div>

                  {/* Source camera/scanner */}
                  {scan.source && (
                    <Line smoke style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      Source: {scan.source}
                    </Line>
                  )}

                  {/* Name (if matched or overridden) */}
                  {scan.name && (
                    <Line
                      yellow={scan.result === 'MATCHED' || scan.result === 'OVERRIDE'}
                      cyan={scan.result === 'PARTIAL'}
                      style={{ marginTop: '0.5rem', fontWeight: 'bold' }}
                    >
                      {`>>`} {scan.result === 'OVERRIDE' ? 'Manual ID: ' : ''}
                      {scan.name}
                    </Line>
                  )}

                  {/* Confidence percentage */}
                  {scan.confidence && (
                    <Line
                      neon={scan.confidence >= 85}
                      yellow={scan.confidence >= 50 && scan.confidence < 85}
                      red={scan.confidence < 50}
                      style={{ fontSize: '0.875rem' }}
                    >
                      Match Confidence: {scan.confidence}%
                    </Line>
                  )}

                  {/* Scan details */}
                  {scan.details && (
                    <Line smoke style={{ fontSize: '0.875rem', marginTop: '0.25rem' }}>
                      {scan.details}
                    </Line>
                  )}

                  {/* Security notes */}
                  {scan.notes && (
                    <Line
                      red={scan.notes.includes('DETAINED') || scan.notes.includes('FLAGGED')}
                      yellow={
                        !scan.notes.includes('DETAINED') &&
                        !scan.notes.includes('FLAGGED') &&
                        (scan.notes.includes('WARNING') || scan.notes.includes('ALERT'))
                      }
                      cyan={
                        !scan.notes.includes('DETAINED') &&
                        !scan.notes.includes('FLAGGED') &&
                        !scan.notes.includes('WARNING') &&
                        !scan.notes.includes('ALERT')
                      }
                      style={{ fontSize: '0.875rem', marginTop: '0.5rem', fontStyle: 'italic' }}
                    >
                      Notes: {scan.notes}
                    </Line>
                  )}
                </div>
              ))}
            </Section>
          </>
        )}

        {scans.length === 0 && (
          <>
            <Divider />
            <Line yellow>No recent recognition attempts logged.</Line>
          </>
        )}
      </div>
    </div>
  );
}
