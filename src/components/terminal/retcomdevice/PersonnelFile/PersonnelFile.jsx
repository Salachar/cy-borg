import './personnelFile.css';

/**
 * PersonnelFile - Internal HR employee record
 *
 * Professional HR file layout for employee information.
 * Password-protected, confidential company data.
 *
 * Props:
 * - employeeId: String
 * - name: String
 * - position: String
 * - department: String
 * - hireDate: String
 * - supervisor: String
 * - clearanceLevel: Number or String (1-5, or "NONE")
 * - salary: String (optional, e.g., "65,000 credits/year")
 * - location: String (optional, office location)
 * - email: String (optional)
 * - phone: String (optional)
 * - emergencyContact: String (optional)
 * - performance: Number (optional, 0-100)
 * - notes: Array of strings (optional, HR notes)
 * - status: String (ACTIVE, SUSPENDED, TERMINATED)
 */
export default function PersonnelFile({
  employeeId,
  name,
  position,
  department,
  hireDate,
  supervisor,
  clearanceLevel = 'NONE',
  salary,
  location,
  email,
  phone,
  emergencyContact,
  performance,
  notes = [],
  status = 'ACTIVE',
}) {
  const getStatusColor = () => {
    switch (status) {
      case 'ACTIVE':
        return '#10b981';
      case 'SUSPENDED':
        return '#f59e0b';
      case 'TERMINATED':
        return '#ef4444';
      default:
        return '#94a3b8';
    }
  };

  const getClearanceColor = () => {
    if (typeof clearanceLevel === 'number') {
      if (clearanceLevel >= 4) return '#ef4444';
      if (clearanceLevel >= 2) return '#f59e0b';
      return '#3b82f6';
    }
    return '#94a3b8';
  };

  const getPerformanceRating = () => {
    if (!performance) return null;
    if (performance >= 90) return 'Exceptional';
    if (performance >= 75) return 'Exceeds Expectations';
    if (performance >= 60) return 'Meets Expectations';
    if (performance >= 40) return 'Needs Improvement';
    return 'Unsatisfactory';
  };

  return (
    <div className="personnel-file">
      {/* Header */}
      <div className="personnel-header">
        <div className="personnel-header-left">
          <div className="personnel-company">ALLIANSEN INC.</div>
          <div className="personnel-title">Employee Personnel Record</div>
        </div>
        <div className="personnel-header-right">
          <div
            className="personnel-status"
            style={{ backgroundColor: `${getStatusColor()}15`, borderColor: getStatusColor() }}
          >
            <div
              className="personnel-status-dot"
              style={{ backgroundColor: getStatusColor() }}
            ></div>
            <span style={{ color: getStatusColor() }}>{status}</span>
          </div>
        </div>
      </div>

      {/* Employee ID banner */}
      <div className="personnel-id-banner">
        <span className="personnel-id-label">EMPLOYEE ID:</span>
        <span className="personnel-id-value">{employeeId}</span>
      </div>

      {/* Content */}
      <div className="personnel-content">
        {/* Basic Information */}
        <div className="personnel-section">
          <div className="personnel-section-title">Employee Information</div>
          <div className="personnel-grid">
            <div className="personnel-field">
              <div className="personnel-field-label">Full Name</div>
              <div className="personnel-field-value">{name}</div>
            </div>
            <div className="personnel-field">
              <div className="personnel-field-label">Position</div>
              <div className="personnel-field-value">{position}</div>
            </div>
            <div className="personnel-field">
              <div className="personnel-field-label">Department</div>
              <div className="personnel-field-value">{department}</div>
            </div>
            <div className="personnel-field">
              <div className="personnel-field-label">Supervisor</div>
              <div className="personnel-field-value">{supervisor}</div>
            </div>
            <div className="personnel-field">
              <div className="personnel-field-label">Hire Date</div>
              <div className="personnel-field-value">{hireDate}</div>
            </div>
            {location && (
              <div className="personnel-field">
                <div className="personnel-field-label">Office Location</div>
                <div className="personnel-field-value">{location}</div>
              </div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        {(email || phone || emergencyContact) && (
          <div className="personnel-section">
            <div className="personnel-section-title">Contact Information</div>
            <div className="personnel-grid">
              {email && (
                <div className="personnel-field">
                  <div className="personnel-field-label">Email</div>
                  <div className="personnel-field-value">{email}</div>
                </div>
              )}
              {phone && (
                <div className="personnel-field">
                  <div className="personnel-field-label">Phone</div>
                  <div className="personnel-field-value">{phone}</div>
                </div>
              )}
              {emergencyContact && (
                <div className="personnel-field">
                  <div className="personnel-field-label">Emergency Contact</div>
                  <div className="personnel-field-value">{emergencyContact}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Clearance & Performance */}
        <div className="personnel-section">
          <div className="personnel-section-title">Security & Performance</div>
          <div className="personnel-badges">
            <div className="personnel-badge">
              <div className="personnel-badge-label">Security Clearance</div>
              <div
                className="personnel-badge-value"
                style={{
                  color: getClearanceColor(),
                  borderColor: getClearanceColor()
                }}
              >
                LEVEL {clearanceLevel}
              </div>
            </div>
            {performance !== undefined && (
              <div className="personnel-badge">
                <div className="personnel-badge-label">Performance Rating</div>
                <div className="personnel-badge-value">{performance}%</div>
                <div className="personnel-badge-sublabel">{getPerformanceRating()}</div>
              </div>
            )}
            {salary && (
              <div className="personnel-badge">
                <div className="personnel-badge-label">Annual Salary</div>
                <div className="personnel-badge-value">{salary}</div>
              </div>
            )}
          </div>
        </div>

        {/* HR Notes */}
        {notes.length > 0 && (
          <div className="personnel-section">
            <div className="personnel-section-title">HR Notes</div>
            <div className="personnel-notes">
              {notes.map((note, i) => (
                <div key={i} className="personnel-note">
                  <div className="personnel-note-bullet"></div>
                  <div className="personnel-note-text">{note}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="personnel-footer">
        <div className="personnel-confidential">CONFIDENTIAL - INTERNAL USE ONLY</div>
        <div className="personnel-footer-text">Alliansen Inc. Human Resources Department</div>
      </div>
    </div>
  );
}
