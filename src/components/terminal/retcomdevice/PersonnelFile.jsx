import { Line, Divider, DataTable, Section } from '../TerminalComponents';

/**
 * PersonnelFile Component - Corporate HR Employee Record
 *
 * Internal employee file - HR database style.
 * Shows employment history, performance, security clearance, etc.
 * More formal/corporate than Tenet social profiles.
 *
 * Props:
 * - employeeId: Employee ID number
 * - name: Full name
 * - age: Age
 * - dob: Date of birth
 * - position: Job title
 * - department: Department name
 * - hireDate: When they were hired
 * - supervisor: Who they report to
 * - clearanceLevel: Security clearance (1-5 or "NONE")
 * - district: Home district (commute info)
 * - emergencyContact: Emergency contact info
 * - performance: Performance rating (optional)
 * - notes: HR notes/flags (optional, array)
 * - status: Employment status ("ACTIVE" | "SUSPENDED" | "TERMINATED")
 */
export default function PersonnelFile({
  employeeId,
  name,
  age,
  dob,
  position,
  department,
  hireDate,
  supervisor,
  clearanceLevel = 'NONE',
  district,
  emergencyContact,
  performance,
  notes = [],
  status = 'ACTIVE',
}) {
  const getStatusColor = () => {
    switch (status) {
      case 'ACTIVE':
        return 'rgb(34, 197, 94)';
      case 'SUSPENDED':
        return 'rgb(251, 191, 36)';
      case 'TERMINATED':
        return 'rgb(239, 68, 68)';
      default:
        return 'rgb(148, 163, 184)';
    }
  };

  const getClearanceColor = () => {
    if (typeof clearanceLevel === 'number') {
      if (clearanceLevel >= 4) return 'rgb(239, 68, 68)'; // High clearance - red
      if (clearanceLevel >= 2) return 'rgb(251, 191, 36)'; // Medium - yellow
      return 'rgb(79, 209, 197)'; // Low - cyan
    }
    return 'rgb(148, 163, 184)'; // None - gray
  };

  const getPerformanceColor = () => {
    if (!performance) return 'rgb(148, 163, 184)';
    if (performance >= 80) return 'rgb(34, 197, 94)';
    if (performance >= 60) return 'rgb(251, 191, 36)';
    return 'rgb(239, 68, 68)';
  };

  return (
    <div
      style={{
        border: '2px solid rgb(77, 167, 188)',
        borderRadius: '4px',
        padding: '1rem',
        backgroundColor: 'rgba(29, 35, 50, 0.5)',
        opacity: status === 'TERMINATED' ? 0.7 : 1,
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
        {/* HR file icon */}
        <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
          {/* Folder */}
          <div
            style={{
              position: 'absolute',
              bottom: '4px',
              left: '2px',
              width: '20px',
              height: '16px',
              backgroundColor: 'rgb(251, 191, 36)',
              borderRadius: '2px',
            }}
          />
          {/* Tab */}
          <div
            style={{
              position: 'absolute',
              top: '4px',
              left: '2px',
              width: '12px',
              height: '8px',
              backgroundColor: 'rgb(251, 191, 36)',
              borderRadius: '2px 2px 0 0',
            }}
          />
        </div>

        <Line smoke large bold style={{ margin: 0, flex: 1 }}>
          [PERSONNEL FILE]
        </Line>

        {/* Status badge */}
        <div
          style={{
            padding: '0.25rem 0.5rem',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: getStatusColor(),
            backgroundColor: `${getStatusColor()}20`,
            border: `1px solid ${getStatusColor()}`,
            borderRadius: '3px',
            fontFamily: 'monospace',
          }}
        >
          {status}
        </div>
      </div>

      {/* Employee ID */}
      <Line cyan style={{ fontSize: '0.875rem' }}>
        Employee ID: {employeeId}
      </Line>
      <Divider />

      {/* Basic Information */}
      <Section title="BASIC INFORMATION:">
        <DataTable
          data={[
            { label: 'Name', value: name },
            { label: 'Age', value: age },
            { label: 'Date of Birth', value: dob },
            { label: 'Home District', value: district },
          ]}
        />
      </Section>

      <Divider />

      {/* Employment Details */}
      <Section title="EMPLOYMENT DETAILS:">
        <DataTable
          data={[
            { label: 'Position', value: position },
            { label: 'Department', value: department },
            { label: 'Hire Date', value: hireDate },
            { label: 'Supervisor', value: supervisor },
          ]}
        />
      </Section>

      <Divider />

      {/* Security & Clearance */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginBottom: '0.25rem' }}>
            CLEARANCE LEVEL
          </div>
          <div
            style={{
              fontSize: '1.25rem',
              fontWeight: 'bold',
              color: getClearanceColor(),
              fontFamily: 'monospace',
            }}
          >
            {clearanceLevel}
          </div>
        </div>

        {performance !== undefined && (
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginBottom: '0.25rem' }}>
              PERFORMANCE RATING
            </div>
            <div
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: getPerformanceColor(),
                fontFamily: 'monospace',
              }}
            >
              {performance}%
            </div>
          </div>
        )}
      </div>

      {/* Emergency Contact */}
      {emergencyContact && (
        <>
          <Divider />
          <Section title="EMERGENCY CONTACT:">
            <Line neon style={{ fontSize: '0.875rem' }}>
              {emergencyContact}
            </Line>
          </Section>
        </>
      )}

      {/* HR Notes */}
      {notes.length > 0 && (
        <>
          <Divider />
          <Section title="HR NOTES:">
            {notes.map((note, i) => (
              <Line
                key={i}
                yellow
                style={{
                  fontSize: '0.875rem',
                  marginBottom: '0.35rem',
                  fontStyle: 'italic',
                }}
              >
                • {note}
              </Line>
            ))}
          </Section>
        </>
      )}

      <Divider />

      {/* Footer */}
      <Line
        smoke
        style={{
          fontSize: '0.7rem',
          textAlign: 'center',
          fontStyle: 'italic',
        }}
      >
        Alliansen Inc. Human Resources - Confidential
      </Line>
    </div>
  );
}
