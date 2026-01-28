import './networkDevices.css';

/**
 * NetworkDevices - Shows connected devices on local network
 *
 * Non-interactive list for world-building and sparking player ideas.
 *
 * Props:
 * - devices: Array of device objects
 *   - name: String (e.g., "Smart Fridge (Kitchen)")
 *   - model: String (optional, e.g., "CoolTech CF-2000")
 *   - status: String (optional, e.g., "Online", "Standby", "Offline")
 * - title: String (default: "CONNECTED DEVICES")
 * - subtitle: String (optional, e.g., "Local network scan")
 * - footer: String (optional, disclaimer text)
 */
export default function NetworkDevices({
  devices = [],
  title = "CONNECTED DEVICES",
  subtitle,
  footer,
}) {
  if (devices.length === 0) {
    return (
      <div className="network-devices">
        <div className="network-devices-header">
          <div className="network-devices-title">{title}</div>
          {subtitle && <div className="network-devices-subtitle">{subtitle}</div>}
        </div>
        <div className="network-devices-empty">No devices detected</div>
      </div>
    );
  }

  return (
    <div className="network-devices">
      {/* Header */}
      <div className="network-devices-header">
        <div className="network-devices-title">{title}</div>
        {subtitle && <div className="network-devices-subtitle">{subtitle}</div>}
      </div>

      {/* Device list */}
      <div className="network-devices-list">
        {devices.map((device, idx) => (
          <div key={idx} className="network-device-item">
            <div className="network-device-main">
              <div className="network-device-name">{device.name}</div>
              {device.model && (
                <div className="network-device-model">{device.model}</div>
              )}
            </div>
            {device.status && (
              <div
                className="network-device-status"
                data-status={device.status.toLowerCase()}
              >
                {device.status}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      {footer && (
        <div className="network-devices-footer">
          {footer}
        </div>
      )}
    </div>
  );
}
