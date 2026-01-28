import NetworkRouter from './NetworkRouter';
import NetworkDevices from '../NetworkDevices/NetworkDevices';

export default {
  title: 'Terminal/NetworkRouter',
  component: NetworkRouter,
};

// Simple router with NetworkDevices as child
export const WithDeviceList = () => (
  <NetworkRouter
    model="NetLink Pro 5000"
    ip="192.168.1.1"
    status="Online"
    firmware="v2.4.1"
    uptime="14 days, 3 hours"
    signalStrength="excellent"
  >
    <NetworkDevices
      title="CONNECTED DEVICES"
      subtitle="Local network scan"
      devices={[
        { name: "Smart Fridge (Kitchen)", model: "CoolTech CF-2000", status: "Online" },
        { name: "Security Camera (Front)", model: "WatchEye Pro", status: "Online" },
        { name: "Smart TV (Lounge)", model: "NeoScreen 65\"", status: "Standby" },
        { name: "Thermostat (Main)", model: "ClimateControl Pro", status: "Online" },
      ]}
    />
  </NetworkRouter>
);

// Router with expandable sections
export const WithSections = () => (
  <NetworkRouter
    model="CyberLink Router X9"
    ip="10.0.0.1"
    status="Online"
    firmware="v3.1.0"
    uptime="2 days, 8 hours"
    signalStrength="good"
    sections={[
      {
        title: "Connected Devices (4)",
        defaultOpen: true,
        content: (
          <NetworkDevices
            devices={[
              { name: "Smart Fridge (Kitchen)", model: "CoolTech CF-2000", status: "Online" },
              { name: "Security Camera (Front)", model: "WatchEye Pro", status: "Online" },
              { name: "Smart TV (Lounge)", model: "NeoScreen 65\"", status: "Standby" },
              { name: "Thermostat (Main)", model: "ClimateControl Pro", status: "Online" },
            ]}
          />
        )
      },
      {
        title: "Network Settings",
        content: (
          <div style={{ padding: '1rem', color: 'rgb(203, 213, 225)', fontSize: '0.875rem' }}>
            <div style={{ marginBottom: '0.5rem' }}>SSID: Home_Network_5G</div>
            <div style={{ marginBottom: '0.5rem' }}>Channel: 36 (5GHz)</div>
            <div style={{ marginBottom: '0.5rem' }}>Security: WPA3</div>
            <div>DHCP Range: 192.168.1.100 - 192.168.1.200</div>
          </div>
        )
      }
    ]}
  />
);

// Corporate office router
export const CorporateOffice = () => (
  <NetworkRouter
    model="SecureNet Enterprise 7000"
    ip="10.10.1.1"
    status="Online"
    firmware="v4.2.3"
    uptime="47 days, 12 hours"
    signalStrength="excellent"
  >
    <NetworkDevices
      title="AUTHORIZED DEVICES"
      subtitle="Corporate network - monitored"
      devices={[
        { name: "Security System (Main)", model: "WatchDog Pro", status: "Online" },
        { name: "Smart Lock (Server Room)", model: "SecureTech SL-9", status: "Online" },
        { name: "Coffee Maker (Break Room)", model: "BrewTech Auto-3000", status: "Online" },
        { name: "Printer (Accounting)", model: "PrintPro X500", status: "Online" },
        { name: "Smart TV (Conference A)", model: "NeoScreen 85\"", status: "Standby" },
        { name: "Smart TV (Conference B)", model: "NeoScreen 85\"", status: "Standby" },
      ]}
      footer="⚠ Unauthorized devices will be disconnected automatically"
    />
  </NetworkRouter>
);

// Gang hideout router
export const GangHideout = () => (
  <NetworkRouter
    model="BurnerBox 2000 (Modified)"
    ip="192.168.0.1"
    status="Online"
    firmware="Custom v1.0"
    signalStrength="fair"
  >
    <NetworkDevices
      title="DETECTED DEVICES"
      devices={[
        { name: "Burner Phone #1", model: "DisposaTalk 2G", status: "Online" },
        { name: "Burner Phone #2", model: "DisposaTalk 2G", status: "Offline" },
        { name: "Security Camera (Alley)", model: "StreetEye Basic", status: "Online" },
        { name: "Gaming Console", model: "NeoStation 6", status: "Online" },
      ]}
      footer="⚠ Stone Eels secure network - Encrypted"
    />
  </NetworkRouter>
);

// Minimal/offline router
export const OfflineRouter = () => (
  <NetworkRouter
    model="BasicLink 100"
    ip="192.168.1.1"
    status="Offline"
    signalStrength="poor"
  >
    <NetworkDevices
      devices={[]}
    />
  </NetworkRouter>
);
