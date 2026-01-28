import { useState } from 'react';
import './networkRouter.css';

/**
 * NetworkRouter - Visual router/modem display with expandable sections
 *
 * Can contain NetworkDevices or other components as children.
 * Styled like a router admin panel.
 *
 * Props:
 * - model: String (e.g., "NetLink Pro 5000")
 * - ip: String (e.g., "192.168.1.1")
 * - status: String (default: "Online")
 * - firmware: String (optional, e.g., "v2.4.1")
 * - uptime: String (optional, e.g., "14 days, 3 hours")
 * - signalStrength: String (optional, "excellent", "good", "fair", "poor")
 * - children: Components to display (like NetworkDevices)
 * - sections: Array of section objects (optional, for multiple expandable sections)
 *   - title: String
 *   - content: Component
 *   - defaultOpen: Boolean (optional)
 */
export default function NetworkRouter({
  model = "Generic Router",
  ip = "192.168.1.1",
  status = "Online",
  firmware,
  uptime,
  signalStrength,
  children,
  sections = [],
}) {
  const [openSections, setOpenSections] = useState(
    sections.reduce((acc, section, idx) => {
      acc[idx] = section.defaultOpen || false;
      return acc;
    }, {})
  );

  const toggleSection = (idx) => {
    setOpenSections(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const getSignalBars = () => {
    const strength = signalStrength?.toLowerCase();
    if (strength === 'excellent') return 4;
    if (strength === 'good') return 3;
    if (strength === 'fair') return 2;
    if (strength === 'poor') return 1;
    return 0;
  };

  const bars = getSignalBars();

  return (
    <div className="network-router">
      {/* Router visual/icon */}
      <div className="network-router-header">
        <div className="network-router-icon">
          {/* Router device illustration */}
          <div className="router-body">
            <div className="router-antenna router-antenna-left"></div>
            <div className="router-antenna router-antenna-right"></div>
            <div className="router-lights">
              <div className="router-light" data-status={status.toLowerCase()}></div>
              <div className="router-light" data-status={status.toLowerCase()}></div>
              <div className="router-light" data-status={status.toLowerCase()}></div>
            </div>
          </div>
        </div>

        <div className="network-router-info">
          <div className="network-router-model">{model}</div>
          <div className="network-router-details">
            <div className="network-router-detail">
              <span className="network-router-detail-label">IP:</span>
              <span className="network-router-detail-value">{ip}</span>
            </div>
            <div className="network-router-detail">
              <span className="network-router-detail-label">Status:</span>
              <span
                className="network-router-detail-value"
                data-status={status.toLowerCase()}
              >
                {status}
              </span>
            </div>
            {firmware && (
              <div className="network-router-detail">
                <span className="network-router-detail-label">Firmware:</span>
                <span className="network-router-detail-value">{firmware}</span>
              </div>
            )}
            {uptime && (
              <div className="network-router-detail">
                <span className="network-router-detail-label">Uptime:</span>
                <span className="network-router-detail-value">{uptime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Signal strength indicator */}
        {signalStrength && (
          <div className="network-router-signal">
            <div className="signal-bars">
              {[1, 2, 3, 4].map(bar => (
                <div
                  key={bar}
                  className={`signal-bar ${bar <= bars ? 'signal-bar-active' : ''}`}
                  style={{ height: `${bar * 25}%` }}
                ></div>
              ))}
            </div>
            <div className="signal-label">{signalStrength}</div>
          </div>
        )}
      </div>

      {/* Content area */}
      <div className="network-router-content">
        {/* Direct children (like NetworkDevices) */}
        {children && (
          <div className="network-router-section-content">
            {children}
          </div>
        )}

        {/* Expandable sections */}
        {sections.length > 0 && sections.map((section, idx) => (
          <div key={idx} className="network-router-section">
            <button
              className="network-router-section-header"
              onClick={() => toggleSection(idx)}
            >
              <span className="network-router-section-title">{section.title}</span>
              <span className="network-router-section-toggle">
                {openSections[idx] ? '▼' : '▶'}
              </span>
            </button>
            {openSections[idx] && (
              <div className="network-router-section-content">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
