import './tenet.css';

/**
 * Tenet - Social network citizen profile
 *
 * Public-facing profile card similar to social media platforms.
 * Shows limited public information.
 *
 * Props:
 * - id: String (citizen ID)
 * - name: String
 * - tagline: String (optional, like "Software Engineer @ TechCorp")
 * - district: String (optional, home district)
 * - connections: Number (connection count)
 * - mutualConnections: Number (optional, mutual connections with viewer)
 * - profilePicture: String (optional, initials if not provided)
 * - bio: String (optional, short bio)
 * - privacy: String (PUBLIC, FRIENDS, PRIVATE)
 * - status: String (ACTIVE, SUSPENDED, DELETED)
 * - memberSince: String (optional, e.g., "2067")
 * - enableIntercom: Boolean (optional, shows intercom button, default: false)
 * - onIntercom: Function (optional, callback for intercom button)
 */
export default function Tenet({
  id,
  name,
  tagline,
  district,
  connections = 0,
  mutualConnections,
  profilePicture,
  bio,
  privacy = 'PUBLIC',
  status = 'ACTIVE',
  memberSince,
  enableIntercom = false,
  onIntercom,
}) {
  const isRestricted = privacy !== 'PUBLIC' || status !== 'ACTIVE';
  const initials = name
    ?.split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2) || '??';

  return (
    <div className="tenet-profile">
      {/* Header bar */}
      <div className="tenet-header">
        <div className="tenet-brand">TENET</div>
        <div className="tenet-privacy">
          {privacy === 'PRIVATE' && <span className="privacy-badge privacy-private">Private</span>}
          {privacy === 'FRIENDS' && <span className="privacy-badge privacy-friends">Friends Only</span>}
          {privacy === 'PUBLIC' && <span className="privacy-badge privacy-public">Public</span>}
        </div>
      </div>

      {/* Profile content - horizontal layout */}
      <div className="tenet-content">
        {/* Left side - Profile picture */}
        <div className="tenet-left">
          <div className="tenet-profile-pic">
            {profilePicture ? (
              <img src={profilePicture} alt={name} />
            ) : (
              <div className="tenet-initials">{initials}</div>
            )}
            {status !== 'ACTIVE' && (
              <div className="tenet-status-overlay">
                {status === 'DELETED' ? 'DELETED' : 'SUSPENDED'}
              </div>
            )}
          </div>
        </div>

        {/* Center - Profile info */}
        <div className="tenet-center">
          <div className="tenet-name">{name}</div>
          {tagline && !isRestricted && <div className="tenet-tagline">{tagline}</div>}
          {district && !isRestricted && <div className="tenet-location">{district}</div>}

          {/* Stats row */}
          {!isRestricted && (
            <div className="tenet-stats">
              <div className="tenet-stat">
                <div className="tenet-stat-value">{connections}</div>
                <div className="tenet-stat-label">Connections</div>
              </div>
              {mutualConnections !== undefined && (
                <div className="tenet-stat">
                  <div className="tenet-stat-value">{mutualConnections}</div>
                  <div className="tenet-stat-label">Mutual</div>
                </div>
              )}
            </div>
          )}

          {/* Bio */}
          {bio && !isRestricted && (
            <div className="tenet-bio">
              <div className="tenet-bio-label">About</div>
              <div className="tenet-bio-text">{bio}</div>
            </div>
          )}

          {/* Restricted message */}
          {isRestricted && (
            <div className="tenet-restricted">
              {status === 'DELETED' && (
                <div className="tenet-restricted-text">
                  This account has been deleted. Limited information available.
                </div>
              )}
              {status === 'SUSPENDED' && (
                <div className="tenet-restricted-text">
                  This account has been suspended. Limited information available.
                </div>
              )}
              {privacy !== 'PUBLIC' && status === 'ACTIVE' && (
                <div className="tenet-restricted-text">
                  This profile is private. Connect to see more information.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Right side - Actions and footer */}
        <div className="tenet-right">
          {/* Intercom button */}
          {enableIntercom && status === 'ACTIVE' && (
            <button
              className="tenet-intercom-button"
              onClick={onIntercom}
              title="Send message via Intercom"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6C2 4.89543 2.89543 4 4 4H16C17.1046 4 18 4.89543 18 6V12C18 13.1046 17.1046 14 16 14H11L7 17V14H4C2.89543 14 2 13.1046 2 12V6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Intercom</span>
            </button>
          )}

          {/* Footer info */}
          <div className="tenet-footer">
            <div className="tenet-id">ID: {id}</div>
            {memberSince && <div className="tenet-member">Member since {memberSince}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
