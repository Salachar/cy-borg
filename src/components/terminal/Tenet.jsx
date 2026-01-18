import { Line, Divider, DataTable, Section } from './TerminalComponents';

/**
 * Tenet Component - Citizen Profile Display
 *
 * Public profile system - like a Facebook/LinkedIn profile.
 * Shows citizen information, employment, social connections, etc.
 * Amount of info depends on privacy settings and what user filled out.
 *
 * Props:
 * - id: Citizen ID number
 * - name: Full name
 * - age: Age (optional)
 * - dob: Date of birth (optional)
 * - occupation: Current job (optional)
 * - employer: Company name (optional)
 * - district: Where they live (optional)
 * - bio: Personal bio/about section (optional)
 * - interests: Array of interests/hobbies (optional)
 * - connections: Number of connections (optional)
 * - status: Account status ("ACTIVE" | "SUSPENDED" | "DELETED")
 * - privacy: Privacy level ("PUBLIC" | "FRIENDS" | "PRIVATE")
 */
export default function Tenet({
  id,
  name,
  age,
  dob,
  occupation,
  employer,
  district,
  bio,
  interests = [],
  connections,
  status = 'ACTIVE',
  privacy = 'PUBLIC',
}) {
  const isRestricted = privacy === 'PRIVATE' || status !== 'ACTIVE';

  // Privacy icon
  const getPrivacyIcon = () => {
    switch (privacy) {
      case 'PUBLIC':
        return '🌐';
      case 'FRIENDS':
        return '👥';
      case 'PRIVATE':
        return '🔒';
      default:
        return '';
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Tenet container */}
      <div
        style={{
          border: '2px solid rgb(79, 209, 197)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
          opacity: status === 'DELETED' ? 0.5 : 1,
        }}
      >
        {/* Header with Tenet branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Tenet Icon - person silhouette */}
          <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
            {/* Head */}
            <div
              style={{
                position: 'absolute',
                top: '2px',
                left: '8px',
                width: '8px',
                height: '8px',
                backgroundColor: 'rgb(79, 209, 197)',
                borderRadius: '50%',
              }}
            />
            {/* Body */}
            <div
              style={{
                position: 'absolute',
                bottom: '2px',
                left: '6px',
                width: '12px',
                height: '10px',
                backgroundColor: 'rgb(79, 209, 197)',
                borderRadius: '2px 2px 0 0',
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [TENET CITIZEN PROFILE]
          </Line>

          {/* Privacy indicator */}
          <div style={{ fontSize: '0.875rem' }}>
            <span style={{ marginRight: '0.25rem' }}>{getPrivacyIcon()}</span>
            <span
              style={{
                fontSize: '0.7rem',
                color: 'rgb(148, 163, 184)',
                fontFamily: 'monospace',
              }}
            >
              {privacy}
            </span>
          </div>
        </div>

        {/* Citizen ID */}
        <Line cyan style={{ fontSize: '0.875rem' }}>
          Citizen ID: {id}
        </Line>
        <Divider />

        {/* Basic info */}
        <DataTable
          data={[
            { label: 'Name', value: name },
            ...(age ? [{ label: 'Age', value: age }] : []),
            ...(dob && !isRestricted ? [{ label: 'DOB', value: dob }] : []),
            { label: 'Status', value: status },
          ]}
        />

        {/* Employment (if not restricted) */}
        {(occupation || employer) && !isRestricted && (
          <>
            <Divider />
            <Section title="EMPLOYMENT:">
              {occupation && <Line neon>Position: {occupation}</Line>}
              {employer && <Line neon>Employer: {employer}</Line>}
            </Section>
          </>
        )}

        {/* Location (if not restricted) */}
        {district && !isRestricted && (
          <>
            <Divider />
            <Section title="LOCATION:">
              <Line cyan>District: {district}</Line>
            </Section>
          </>
        )}

        {/* Bio (if available and not restricted) */}
        {bio && !isRestricted && (
          <>
            <Divider />
            <Section title="ABOUT:">
              <Line yellow style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
                "{bio}"
              </Line>
            </Section>
          </>
        )}

        {/* Interests (if available and not restricted) */}
        {interests.length > 0 && !isRestricted && (
          <>
            <Divider />
            <Section title="INTERESTS:">
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {interests.map((interest, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '0.25rem 0.5rem',
                      fontSize: '0.75rem',
                      backgroundColor: 'rgba(79, 209, 197, 0.1)',
                      border: '1px solid rgba(79, 209, 197, 0.3)',
                      borderRadius: '3px',
                      color: 'rgb(79, 209, 197)',
                      fontFamily: 'monospace',
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* Connections (if available) */}
        {connections !== undefined && (
          <>
            <Divider />
            <Line neon style={{ fontSize: '0.875rem' }}>
              Connections: {connections}
            </Line>
          </>
        )}

        {/* Privacy notice */}
        {isRestricted && (
          <>
            <Divider />
            <div
              style={{
                padding: '0.75rem',
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                borderRadius: '3px',
                textAlign: 'center',
              }}
            >
              <Line yellow style={{ fontSize: '0.875rem' }}>
                {status === 'DELETED'
                  ? '⚠ ACCOUNT DELETED - Limited information available'
                  : status === 'SUSPENDED'
                  ? '⚠ ACCOUNT SUSPENDED - Limited information available'
                  : '🔒 PRIVATE PROFILE - Additional information hidden'}
              </Line>
            </div>
          </>
        )}

        {/* Tenet footer */}
        <Divider />
        <Line
          style={{
            fontSize: '0.7rem',
            color: 'rgb(148, 163, 184)',
            textAlign: 'center',
            fontStyle: 'italic',
          }}
        >
          Tenet Citizen Network - Connecting Cy since 2067
        </Line>
      </div>
    </div>
  );
}
