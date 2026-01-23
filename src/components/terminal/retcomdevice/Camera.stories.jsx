import Camera from './Camera';

export default {
  title: 'Terminal/Camera',
  component: Camera,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique camera identifier',
    },
    location: {
      control: 'text',
      description: 'Camera location description',
    },
    coverage: {
      control: 'text',
      description: 'What the camera can see',
    },
    status: {
      control: 'select',
      options: ['ACTIVE', 'OFFLINE', 'RECORDING'],
      description: 'Camera operational status',
    },
    recording: {
      control: 'boolean',
      description: 'Is the camera recording',
    },
    storage: {
      control: 'text',
      description: 'Where footage is stored',
    },
    timeline: {
      control: 'object',
      description: 'Array of timestamped event strings',
    },
    blindSpots: {
      control: 'object',
      description: 'Array of blind spot descriptions',
    },
    lastMaintenance: {
      control: 'text',
      description: 'Last maintenance date',
    },
  },
};

// Store security camera
export const BodegaMainCamera = {
  args: {
    id: 'bodega-main-cam',
    location: 'Lucky Star Bodega - Main entrance',
    coverage: 'Front door, register area, first 3 aisles',
    status: 'ACTIVE',
    recording: true,
    storage: 'Local server (basement office)',
    timeline: [
      '22:47 - Elderly woman purchases cigarettes',
      '23:12 - Suspicious figure loiters near entrance',
      '23:15 - Figure enters store, face obscured by hood',
      '23:17 - Register drawer opened forcefully',
      '23:18 - ⚠ ALERT: Glass shattered (camera angle shows partial struggle)',
      '23:19 - Camera briefly loses signal',
      '23:21 - Signal restored, store empty',
    ],
    blindSpots: [
      'Back corner near refrigerators (blocked by shelving)',
      'Storage room entrance (outside camera arc)',
      'Area behind register counter (limited visibility)',
    ],
    lastMaintenance: 'March 15, 2024',
  },
};

// Warehouse security
export const WarehouseCamera = {
  args: {
    id: 'wh-07-secure',
    location: 'SecureCargo Warehouse - Container yard 7',
    coverage: 'Containers 7A-7D, loading dock entrance, guard station',
    status: 'RECORDING',
    recording: true,
    storage: 'Cloud backup + local DVR (30-day retention)',
    timeline: [
      '01:45 - Night shift guard begins patrol',
      '02:12 - Delivery truck arrives at loading dock',
      '02:18 - Guard escorts driver to container 7B',
      '02:23 - ⚠ Motion detected near perimeter fence (sector 7C)',
      '02:24 - Guard investigates, leaves frame',
      '02:27 - LOST SIGNAL (cause unknown)',
      '02:35 - Signal restored automatically',
      '02:36 - Container 7B door ajar, guard unconscious nearby',
      '02:41 - Backup guards arrive, secure area',
    ],
    blindSpots: [
      'Between containers (narrow gaps create shadows)',
      'North fence line (trees obstruct view)',
      'Guard station interior (separate camera system)',
    ],
    lastMaintenance: 'January 8, 2025',
  },
};

// Casino surveillance
export const CasinoCamera = {
  args: {
    id: 'lf-vip-03',
    location: 'Lucky Flight Casino - VIP lounge area',
    coverage: 'Poker tables 1-4, bar area, VIP entrance',
    status: 'ACTIVE',
    recording: true,
    storage: 'Encrypted server (90-day retention, legal requirement)',
    timeline: [
      '20:15 - VIP guest enters with security escort',
      '20:22 - High-stakes poker game begins (table 2)',
      '21:45 - Waitress spills drink near table 3',
      '22:10 - Guest at table 1 appears intoxicated, escorted out',
      '23:30 - Maintenance crew cleans bar area',
      '00:05 - Unidentified individual lingers near manager office',
    ],
    blindSpots: [
      'Private booth seating (intentional privacy zones)',
      'Restroom corridor (separate monitoring)',
      'Upper mezzanine sections (different camera coverage)',
    ],
    lastMaintenance: 'December 2, 2024',
  },
};

// Apartment building
export const ApartmentCamera = {
  args: {
    id: 'apt-lobby-1',
    location: 'Riverside Apartments - Main lobby',
    coverage: 'Entrance doors, mailboxes, elevator access',
    status: 'ACTIVE',
    recording: true,
    storage: 'Building management server (14-day loop)',
    timeline: [
      '22:15 - Resident returns with groceries',
      '22:48 - Pizza delivery to unit 3B',
      '23:05 - Maintenance worker exits building',
      '23:52 - Unknown person attempts door (locked)',
      '00:17 - Same person tests side entrance (also locked)',
    ],
    blindSpots: [
      'Stairwell landings (individual floor cameras)',
      'Parking garage (separate system)',
      'Service entrance (blind spot - pending camera install)',
    ],
    lastMaintenance: 'November 20, 2024',
  },
};

// Offline camera
export const OfflineCamera = {
  args: {
    id: 'st-alley-02',
    location: 'Stone Street Alley - North entrance',
    coverage: 'Alley entrance, dumpster area, fire escape',
    status: 'OFFLINE',
    recording: false,
    storage: 'Local server (connection lost)',
    timeline: [
      '18:30 - Delivery truck unloads supplies',
      '19:15 - Rat activity near dumpsters',
      '20:42 - ⚠ Camera feed becomes unstable',
      '20:45 - SIGNAL LOST (camera offline)',
      '20:46 - NO DATA AVAILABLE',
    ],
    blindSpots: [
      'Deep alley sections (lighting insufficient)',
      'Rooftop access points (outside range)',
      'Adjacent building doorways (camera angle limitation)',
    ],
    lastMaintenance: 'October 5, 2024',
  },
};

// Corporate data center
export const DataCenterCamera = {
  args: {
    id: 'dc-s7-sl3-main',
    location: 'Corporate Data Center - Sector 7, Sublevel 3',
    coverage: 'Main server corridor, biometric access point, emergency exits',
    status: 'RECORDING',
    recording: true,
    storage: 'Redundant encrypted servers (indefinite retention)',
    timeline: [
      '21:45 - Shift change begins',
      '21:52 - Guard patrol passes mainframe access',
      '22:00 - All guards report to security office',
      '22:08 - Biometric access logged: Employee #4782',
      '22:15 - ⚠ Unusual activity: Multiple failed access attempts (terminal 7)',
      '22:18 - Security alerted, guards dispatched',
      '22:22 - Employee #4782 exits sector normally',
      '22:45 - Area secured, incident logged',
    ],
    blindSpots: [
      'Server rack interiors (physical access only)',
      'HVAC maintenance crawlspaces',
      'Executive terminal area (privacy shutters active)',
    ],
    lastMaintenance: 'January 18, 2025',
  },
};

// Street camera
export const StreetCamera = {
  args: {
    id: 'ports-dist-09',
    location: 'Ports District - Canal Street & 5th intersection',
    coverage: 'Street intersection, canal pier entrance, pedestrian crossing',
    status: 'ACTIVE',
    recording: true,
    storage: 'Municipal server (30-day retention)',
    timeline: [
      '19:30 - Heavy foot traffic (rush hour)',
      '20:15 - Water taxi docks at pier',
      '21:00 - Traffic density decreases',
      '22:30 - ⚠ Suspicious vehicle circles block (3 passes)',
      '22:45 - Vehicle parks near pier entrance',
      '23:00 - Multiple figures exit vehicle',
      '23:15 - Vehicle departs rapidly',
    ],
    blindSpots: [
      'Canal underpass areas (separate camera needed)',
      'Building alcoves and doorways',
      'Pier end sections (beyond camera range)',
    ],
    lastMaintenance: 'January 10, 2025',
  },
};

// Minimal camera (basic security)
export const MinimalCamera = {
  args: {
    id: 'shop-01',
    location: 'Corner Shop - Front counter',
    coverage: 'Register and front door',
    status: 'ACTIVE',
    recording: true,
    storage: 'USB drive (3-day loop)',
    timeline: [
      '14:30 - Customer purchases snacks',
      '15:45 - Owner takes break',
      '16:20 - Delivery arrives',
    ],
  },
};

// High-security installation
export const MaxSecurityCamera = {
  args: {
    id: 'vault-omega-1',
    location: 'Bigmosse Corporate HQ - Executive vault level',
    coverage: '360° coverage, thermal imaging, motion sensors integrated',
    status: 'RECORDING',
    recording: true,
    storage: 'Military-grade encrypted servers (permanent archive)',
    timeline: [
      '09:00 - Vault access: Executive clearance verified',
      '09:15 - Asset retrieval logged (item #VLT-8847)',
      '09:22 - Vault sealed, multiple authentication confirmed',
      '12:00 - Automated security sweep (all clear)',
      '15:30 - Maintenance crew denied access (insufficient clearance)',
      '18:00 - Evening security protocol activated',
      '22:00 - Motion sensors: ACTIVE, thermal scan: NEGATIVE',
      '23:30 - ⚠ ALERT: Unauthorized proximity detected (perimeter)',
      '23:31 - Response team deployed (ETA 4 minutes)',
      '23:34 - False alarm: Maintenance bot malfunction',
      '23:40 - All systems confirmed secure',
    ],
    blindSpots: [
      'NONE - Full coverage with overlapping fields',
      'Backup cameras cover all redundancies',
      'AI-assisted blind spot elimination active',
    ],
    lastMaintenance: 'January 20, 2025 (daily inspection protocol)',
  },
};
