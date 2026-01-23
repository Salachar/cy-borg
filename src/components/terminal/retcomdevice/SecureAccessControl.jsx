import { Line, Divider, DataTable, Section } from '../TerminalComponents';

/**
 * SecureAccessControl Component - Building access control and security system
 *
 * Shows door locks, access requirements, security protocols, and access logs.
 * Reveals ANOMALIES - unusual security measures, recent overrides, enhanced protocols.
 * Creates intrigue: "Why does THIS door need retinal scan?"
 *
 * Props:
 * - id: Unique identifier (e.g., "cave-club-access")
 * - systemName: Access control system name
 * - location: Building/facility location
 * - systemVersion: Software version
 * - lastUpdate: When system was last updated
 * - accessPoints: Array of access point objects with:
 *   - name: Door/room name (e.g., "VIP Booth 3", "Back Room")
 *   - status: "LOCKED" | "UNLOCKED" | "SEALED" | "OVERRIDE"
 *   - security: Security level/type (e.g., "KEYCARD", "BIOMETRIC", "RETINAL SCAN")
 *   - authorized: Who can access (e.g., "Security Personnel", "SaÅ¡a Only")
 *   - lastAccess: When last accessed
 *   - accessCount: How many times accessed (24h)
 *   - flags: Array of unusual characteristics (e.g., "ENHANCED SECURITY", "RECENT OVERRIDE")
 *   - notes: Additional security notes
 */
export default function SecureAccessControl({
  id,
  systemName = "SECURE ACCESS CONTROL",
  location,
  systemVersion = "v4.2.1",
  lastUpdate,
  accessPoints = [],
}) {
  // Count security levels
  const highSecurityPoints = accessPoints.filter(
    ap => ap.security && (ap.security.includes('BIOMETRIC') || ap.security.includes('RETINAL'))
  ).length;
  const overrides = accessPoints.filter(ap => ap.status === 'OVERRIDE').length;
  const sealed = accessPoints.filter(ap => ap.status === 'SEALED').length;

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
        {/* Header with lock/access icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Shield/Lock Icon */}
          <div style={{ position: 'relative', width: '20px', height: '24px', flexShrink: 0 }}>
            {/* Shield outline */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '20px',
                height: '24px',
                border: '2px solid rgb(250, 204, 21)',
                borderRadius: '3px 3px 10px 10px',
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 70%, 50% 100%, 0% 70%)',
              }}
            />
            {/* Lock symbol inside */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '7px',
                width: '6px',
                height: '6px',
                border: '2px solid rgb(250, 204, 21)',
                borderBottom: 'none',
                borderRadius: '3px 3px 0 0',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '13px',
                left: '6px',
                width: '8px',
                height: '6px',
                backgroundColor: 'rgb(250, 204, 21)',
                borderRadius: '1px',
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [{systemName}]
          </Line>

          {/* Alert indicator for overrides or sealed rooms */}
          {(overrides > 0 || sealed > 0) && (
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: sealed > 0 ? 'rgb(239, 68, 68)' : 'rgb(250, 204, 21)',
                fontFamily: 'monospace',
              }}
            >
              {sealed > 0 ? '[SEALED]' : '[OVERRIDE]'}
            </div>
          )}
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        {/* System info */}
        <DataTable
          data={[
            { label: 'System Version', value: systemVersion },
            { label: 'Last Update', value: lastUpdate },
            { label: 'Access Points', value: accessPoints.length.toString() },
            { label: 'High Security', value: highSecurityPoints.toString() },
            { label: 'Active Overrides', value: overrides.toString() },
          ]}
        />

        {/* Access points list */}
        {accessPoints.length > 0 && (
          <>
            <Divider />
            <Section title="ACCESS POINTS:" color="yellow">
              {accessPoints.map((point, i) => {
                const hasFlags = point.flags && point.flags.length > 0;
                const isUnusual =
                  point.status === 'OVERRIDE' ||
                  point.status === 'SEALED' ||
                  hasFlags ||
                  (point.security &&
                    (point.security.includes('BIOMETRIC') || point.security.includes('RETINAL')));

                return (
                  <div
                    key={i}
                    style={{
                      marginBottom: '1rem',
                      padding: '0.75rem',
                      backgroundColor: isUnusual ? 'rgba(250, 204, 21, 0.1)' : 'rgba(79, 209, 197, 0.05)',
                      border: `1px solid ${
                        point.status === 'SEALED'
                          ? 'rgba(239, 68, 68, 0.3)'
                          : point.status === 'OVERRIDE'
                          ? 'rgba(250, 204, 21, 0.3)'
                          : isUnusual
                          ? 'rgba(250, 204, 21, 0.2)'
                          : 'rgba(79, 209, 197, 0.2)'
                      }`,
                      borderRadius: '3px',
                      position: 'relative',
                    }}
                  >
                    {/* Access point name and status */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Line yellow bold style={{ fontSize: '1rem' }}>
                        {point.name}
                      </Line>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 'bold',
                          color:
                            point.status === 'SEALED'
                              ? 'rgb(239, 68, 68)'
                              : point.status === 'OVERRIDE'
                              ? 'rgb(250, 204, 21)'
                              : point.status === 'UNLOCKED'
                              ? 'rgb(0, 170, 40)'
                              : 'rgb(79, 209, 197)',
                          fontFamily: 'monospace',
                        }}
                      >
                        [{point.status}]
                      </span>
                    </div>

                    {/* Security details */}
                    <div style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>
                      <Line
                        cyan={
                          !point.security ||
                          (!point.security.includes('BIOMETRIC') && !point.security.includes('RETINAL'))
                        }
                        yellow={
                          point.security &&
                          (point.security.includes('BIOMETRIC') || point.security.includes('RETINAL'))
                        }
                        bold={
                          point.security &&
                          (point.security.includes('BIOMETRIC') || point.security.includes('RETINAL'))
                        }
                      >
                        Security: {point.security || 'STANDARD'}
                      </Line>
                      {point.authorized && <Line smoke>Authorized: {point.authorized}</Line>}
                      {point.lastAccess && <Line smoke>Last Access: {point.lastAccess}</Line>}
                      {point.accessCount !== undefined && (
                        <Line smoke>Access Count (24h): {point.accessCount}</Line>
                      )}
                    </div>

                    {/* Flags for unusual characteristics */}
                    {hasFlags && (
                      <div style={{ marginTop: '0.75rem' }}>
                        {point.flags.map((flag, fi) => (
                          <div
                            key={fi}
                            style={{
                              display: 'inline-block',
                              marginRight: '0.5rem',
                              marginBottom: '0.25rem',
                              padding: '0.25rem 0.5rem',
                              backgroundColor:
                                flag.includes('ENHANCED') || flag.includes('ADDITIONAL')
                                  ? 'rgba(250, 204, 21, 0.2)'
                                  : flag.includes('OVERRIDE') || flag.includes('RECENT')
                                  ? 'rgba(239, 68, 68, 0.2)'
                                  : 'rgba(79, 209, 197, 0.2)',
                              border: `1px solid ${
                                flag.includes('ENHANCED') || flag.includes('ADDITIONAL')
                                  ? 'rgba(250, 204, 21, 0.4)'
                                  : flag.includes('OVERRIDE') || flag.includes('RECENT')
                                  ? 'rgba(239, 68, 68, 0.4)'
                                  : 'rgba(79, 209, 197, 0.4)'
                              }`,
                              borderRadius: '3px',
                              fontSize: '0.75rem',
                              fontWeight: 'bold',
                              color:
                                flag.includes('ENHANCED') || flag.includes('ADDITIONAL')
                                  ? 'rgb(250, 204, 21)'
                                  : flag.includes('OVERRIDE') || flag.includes('RECENT')
                                  ? 'rgb(239, 68, 68)'
                                  : 'rgb(79, 209, 197)',
                              fontFamily: 'monospace',
                            }}
                          >
                            {flag}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Security notes */}
                    {point.notes && (
                      <Line
                        red={point.notes.includes('DETAINED') || point.notes.includes('RESTRICTED')}
                        yellow={
                          !point.notes.includes('DETAINED') &&
                          !point.notes.includes('RESTRICTED') &&
                          (point.notes.includes('CAUTION') || point.notes.includes('WARNING'))
                        }
                        cyan={
                          !point.notes.includes('DETAINED') &&
                          !point.notes.includes('RESTRICTED') &&
                          !point.notes.includes('CAUTION') &&
                          !point.notes.includes('WARNING')
                        }
                        style={{ fontSize: '0.875rem', marginTop: '0.5rem', fontStyle: 'italic' }}
                      >
                        Notes: {point.notes}
                      </Line>
                    )}
                  </div>
                );
              })}
            </Section>
          </>
        )}

        {accessPoints.length === 0 && (
          <>
            <Divider />
            <Line yellow>No access points configured.</Line>
          </>
        )}
      </div>
    </div>
  );
}
