import './hoursBanner.css';

/**
 * HoursBanner - Slick hours of operation display
 *
 * A nice visual banner showing business hours, status, and location.
 *
 * Props:
 * - businessName: String (e.g., "Cave Club")
 * - hours: String (e.g., "20:00 - 06:00")
 * - days: String (optional, e.g., "Every Night", "Mon-Fri")
 * - status: String (e.g., "OPEN", "CLOSED")
 * - statusColor: String (optional, color class: "open", "closed", "warning")
 * - location: String (optional, e.g., "Ports District, Eastern Section")
 * - note: String (optional, additional info)
 */
export default function HoursBanner({
  businessName,
  hours,
  days = "Daily",
  status = "OPEN",
  statusColor = "open",
  location,
  note,
}) {
  return (
    <div className="hours-banner">
      {/* Header */}
      <div className="hours-banner-header">
        <div className="hours-banner-business">{businessName}</div>
        <div className={`hours-banner-status hours-banner-status-${statusColor}`}>
          {status}
        </div>
      </div>

      {/* Main hours display */}
      <div className="hours-banner-main">
        <div className="hours-banner-time">
          <div className="hours-banner-label">HOURS OF OPERATION</div>
          <div className="hours-banner-hours">{hours}</div>
          <div className="hours-banner-days">{days}</div>
        </div>
      </div>

      {/* Location */}
      {location && (
        <div className="hours-banner-location">
          <span className="hours-banner-location-label">LOCATION:</span>
          <span>{location}</span>
        </div>
      )}

      {/* Note */}
      {note && (
        <div className="hours-banner-note">
          {note}
        </div>
      )}
    </div>
  );
}
