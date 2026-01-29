import { Line, Divider, DataTable } from '@terminal/TerminalComponents';

/**
 * NetworkDevices - Shows connected devices on local network
 *
 * Minimal list matching MaintenanceAccess styling.
 *
 * Props:
 * - networkName: String (e.g., "TOWER_INTERNAL")
 * - devices: Array of device objects
 *   - name: String
 *   - ip: String
 *   - type: String
 *   - status: String ("ONLINE", "OFFLINE", "STANDBY")
 *   - lastSeen: String (optional)
 */
export default function NetworkDevices({
  networkName = "LOCAL_NETWORK",
  devices = [],
}) {
  // Status color mapping
  const statusColors = {
    ONLINE: 'rgb(34, 197, 94)',      // green
    STANDBY: 'rgb(251, 191, 36)',    // yellow
    OFFLINE: 'rgb(148, 163, 184)',   // gray
  };

  if (devices.length === 0) {
    return (
      <div style={{ position: 'relative' }}>
        <div
          style={{
            border: '2px solid rgb(100, 116, 139)',
            borderRadius: '4px',
            backgroundColor: 'rgba(30, 41, 59, 0.5)',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              backgroundColor: 'rgb(51, 65, 85)',
              padding: '0.75rem 1rem',
              borderBottom: '1px solid rgb(100, 116, 139)',
            }}
          >
            <Line smoke large bold style={{ margin: 0 }}>
              [NETWORK DEVICES - {networkName}]
            </Line>
          </div>
          <div style={{ padding: '2rem 1rem', textAlign: 'center' }}>
            <Line smoke style={{ fontStyle: 'italic' }}>
              No devices detected
            </Line>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          border: '2px solid rgb(100, 116, 139)',
          borderRadius: '4px',
          backgroundColor: 'rgba(30, 41, 59, 0.5)',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: 'rgb(51, 65, 85)',
            padding: '0.75rem 1rem',
            borderBottom: '1px solid rgb(100, 116, 139)',
          }}
        >
          <Line smoke large bold style={{ margin: 0 }}>
            [NETWORK DEVICES - {networkName}]
          </Line>
        </div>

        {/* Device list */}
        <div style={{ padding: '1rem' }}>
          {devices.map((device, idx) => {
            const statusColor = statusColors[device.status] || statusColors.OFFLINE;

            return (
              <div
                key={idx}
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgb(71, 85, 105)',
                  borderRadius: '3px',
                  padding: '0.75rem',
                  marginBottom: idx < devices.length - 1 ? '0.5rem' : '0',
                }}
              >
                {/* Device header with status */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <Line cyan bold style={{ margin: 0, fontSize: '0.875rem' }}>
                    {device.name}
                  </Line>

                  {/* Status indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: statusColor,
                        boxShadow: `0 0 6px ${statusColor}`,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 'bold',
                        color: statusColor,
                        fontFamily: 'monospace',
                      }}
                    >
                      {device.status}
                    </span>
                  </div>
                </div>

                <Divider />

                {/* Device details */}
                <DataTable
                  data={[
                    { label: 'IP Address', value: device.ip },
                    { label: 'Type', value: device.type },
                    ...(device.lastSeen ? [{ label: 'Last Seen', value: device.lastSeen }] : []),
                  ]}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: '0.75rem 1rem',
            borderTop: '1px solid rgb(100, 116, 139)',
            backgroundColor: 'rgb(51, 65, 85)',
          }}
        >
          <Line yellow style={{ fontSize: '0.7rem', margin: 0 }}>
            {devices.length} device{devices.length !== 1 ? 's' : ''} detected
          </Line>
        </div>
      </div>
    </div>
  );
}
