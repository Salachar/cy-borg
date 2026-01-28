import SecureAccessControl from './SecureAccessControl';

export default {
  title: 'Terminal/SecureAccessControl',
  component: SecureAccessControl,
};

// Cave Club - Shows unusual security on back room
export const CaveClubSecurity = {
  args: {
    id: 'cave-club-access',
    systemName: 'SECURE ACCESS CONTROL',
    location: 'Cave Club - Stone Eels Territory',
    systemVersion: 'v4.2.1',
    lastUpdate: '2 weeks ago',
    accessPoints: [
      {
        name: 'Main Entrance',
        status: 'UNLOCKED',
        security: 'KEYCARD + FACE RECOGNITION',
        authorized: 'All Patrons (ID Check)',
        lastAccess: '2 minutes ago',
        accessCount: 147,
      },
      {
        name: 'VIP Booth 1',
        status: 'LOCKED',
        security: 'KEYCARD',
        authorized: 'VIP Members Only',
        lastAccess: '15 minutes ago',
        accessCount: 8,
      },
      {
        name: 'VIP Booth 3',
        status: 'LOCKED',
        security: 'RETINAL SCAN REQUIRED',
        authorized: 'SaÅ¡a Only',
        lastAccess: '3 hours ago',
        accessCount: 2,
        flags: ['ENHANCED SECURITY', 'ADDITIONAL ENCRYPTION'],
        notes: 'High-priority security - Manual override disabled',
      },
      {
        name: 'Back Room (Office Complex)',
        status: 'SEALED',
        security: 'BIOMETRIC LOCK',
        authorized: 'SaÅ¡a + Senior Security',
        lastAccess: '30 minutes ago',
        accessCount: 4,
        flags: ['ENHANCED SECURITY PROTOCOL ACTIVE', 'RECENT OVERRIDE'],
        notes: 'CAUTION - Holding area active, 2x guards assigned',
      },
      {
        name: 'Security Area',
        status: 'LOCKED',
        security: 'KEYCARD',
        authorized: 'Security Personnel',
        lastAccess: '5 minutes ago',
        accessCount: 23,
      },
      {
        name: 'Storage Room',
        status: 'UNLOCKED',
        security: 'STANDARD',
        authorized: 'Staff Only',
        lastAccess: '1 hour ago',
        accessCount: 12,
      },
    ],
  },
};

// Corporate facility - high security everywhere
export const CorporateFacility = {
  args: {
    id: 'alliansen-access',
    systemName: 'ALLIANSEN SECURE ACCESS',
    location: 'Alliansen Warehouse - Security Network',
    systemVersion: 'v5.1.3',
    lastUpdate: '3 days ago',
    accessPoints: [
      {
        name: 'Main Entrance',
        status: 'LOCKED',
        security: 'BIOMETRIC + KEYCARD',
        authorized: 'All Employees',
        lastAccess: '8 minutes ago',
        accessCount: 47,
      },
      {
        name: 'R&D Wing - Lab 3',
        status: 'LOCKED',
        security: 'RETINAL SCAN + PIN CODE',
        authorized: 'Senior Research Staff',
        lastAccess: '2 hours ago',
        accessCount: 6,
        flags: ['ENHANCED SECURITY', 'CLASSIFIED AREA'],
        notes: 'RESTRICTED - Security clearance Level 4+ required',
      },
      {
        name: 'Executive Office',
        status: 'LOCKED',
        security: 'BIOMETRIC LOCK',
        authorized: 'C-Level Only',
        lastAccess: '4 hours ago',
        accessCount: 3,
        flags: ['ENHANCED SECURITY'],
      },
      {
        name: 'Server Room',
        status: 'LOCKED',
        security: 'RETINAL SCAN',
        authorized: 'IT Security Team',
        lastAccess: '1 hour ago',
        accessCount: 8,
        flags: ['ADDITIONAL ENCRYPTION'],
        notes: 'Climate controlled - Unauthorized access triggers alarm',
      },
      {
        name: 'Loading Bay',
        status: 'UNLOCKED',
        security: 'STANDARD',
        authorized: 'Warehouse Staff',
        lastAccess: '12 minutes ago',
        accessCount: 34,
      },
    ],
  },
};

// Compromised system - overrides detected
export const CompromisedSystem = {
  args: {
    id: 'compromised-access',
    systemName: 'SECURITY SYSTEM (COMPROMISED)',
    location: 'Office Building - Floor 7',
    systemVersion: 'v3.8.2',
    lastUpdate: '6 months ago',
    accessPoints: [
      {
        name: 'Executive Suite',
        status: 'OVERRIDE',
        security: 'BIOMETRIC LOCK',
        authorized: 'C-Level Executives',
        lastAccess: '23 minutes ago',
        accessCount: 1,
        flags: ['RECENT OVERRIDE', 'UNAUTHORIZED ACCESS DETECTED'],
        notes: 'WARNING - Manual override from unknown source',
      },
      {
        name: 'Server Room',
        status: 'OVERRIDE',
        security: 'KEYCARD + PIN',
        authorized: 'IT Staff',
        lastAccess: '45 minutes ago',
        accessCount: 2,
        flags: ['RECENT OVERRIDE'],
        notes: 'ALERT - Security logs show unusual access pattern',
      },
      {
        name: 'Main Office',
        status: 'UNLOCKED',
        security: 'STANDARD',
        authorized: 'All Employees',
        lastAccess: '5 minutes ago',
        accessCount: 78,
      },
    ],
  },
};

// Minimal security - small business
export const SmallBusiness = {
  args: {
    id: 'small-biz-access',
    systemName: 'BASIC ACCESS CONTROL',
    location: "Batu's Bodega - Security System",
    systemVersion: 'v2.1.0',
    lastUpdate: '1 year ago',
    accessPoints: [
      {
        name: 'Main Entrance',
        status: 'UNLOCKED',
        security: 'STANDARD',
        authorized: 'Public',
        lastAccess: '2 minutes ago',
        accessCount: 234,
      },
      {
        name: 'Back Office',
        status: 'LOCKED',
        security: 'KEYPAD CODE',
        authorized: 'Owner + Manager',
        lastAccess: '3 hours ago',
        accessCount: 5,
      },
      {
        name: 'Storage Room',
        status: 'LOCKED',
        security: 'STANDARD LOCK',
        authorized: 'Staff Only',
        lastAccess: '1 hour ago',
        accessCount: 12,
      },
    ],
  },
};

// Residential building - normal access
export const ResidentialBuilding = {
  args: {
    id: 'apartment-access',
    systemName: 'RESIDENTIAL ACCESS SYSTEM',
    location: 'Apartment Complex - Building C',
    systemVersion: 'v4.0.5',
    lastUpdate: '2 weeks ago',
    accessPoints: [
      {
        name: 'Main Lobby',
        status: 'LOCKED',
        security: 'KEYCARD + INTERCOM',
        authorized: 'Residents + Visitors (Buzzed In)',
        lastAccess: '8 minutes ago',
        accessCount: 89,
      },
      {
        name: 'Roof Access',
        status: 'LOCKED',
        security: 'KEYCARD',
        authorized: 'Residents Only',
        lastAccess: '2 days ago',
        accessCount: 3,
      },
      {
        name: 'Basement/Storage',
        status: 'LOCKED',
        security: 'KEYCARD',
        authorized: 'Residents Only',
        lastAccess: '5 hours ago',
        accessCount: 7,
      },
      {
        name: 'Maintenance Room',
        status: 'LOCKED',
        security: 'KEYPAD CODE',
        authorized: 'Maintenance Staff',
        lastAccess: '1 day ago',
        accessCount: 2,
      },
    ],
  },
};

// No access points configured
export const NoAccessPoints = {
  args: {
    id: 'empty-access',
    systemName: 'NEW ACCESS CONTROL SYSTEM',
    location: 'Under Configuration',
    systemVersion: 'v5.0.0',
    lastUpdate: 'Today',
    accessPoints: [],
  },
};

// Maximum security facility
export const MaximumSecurity = {
  args: {
    id: 'max-sec-access',
    systemName: 'MILITARY GRADE ACCESS CONTROL',
    location: 'High Security Research Facility',
    systemVersion: 'v6.2.8',
    lastUpdate: '1 week ago',
    accessPoints: [
      {
        name: 'Perimeter Gate',
        status: 'LOCKED',
        security: 'BIOMETRIC + RETINAL SCAN + PIN',
        authorized: 'Cleared Personnel Only',
        lastAccess: '15 minutes ago',
        accessCount: 12,
        flags: ['ENHANCED SECURITY'],
      },
      {
        name: 'Classified Research Lab',
        status: 'SEALED',
        security: 'RETINAL SCAN + VOICE RECOGNITION + BIOMETRIC',
        authorized: 'Level 5+ Clearance',
        lastAccess: '4 hours ago',
        accessCount: 2,
        flags: ['ENHANCED SECURITY', 'ADDITIONAL ENCRYPTION', 'ARMED RESPONSE'],
        notes: 'RESTRICTED - Lethal force authorized for breach attempts',
      },
      {
        name: 'Vault Access',
        status: 'LOCKED',
        security: 'RETINAL SCAN + DUAL AUTHORIZATION',
        authorized: 'Director + Security Chief (Both Required)',
        lastAccess: '2 days ago',
        accessCount: 1,
        flags: ['ENHANCED SECURITY', 'DUAL KEY REQUIRED'],
        notes: 'CAUTION - Requires simultaneous authorization from two personnel',
      },
      {
        name: 'Server Room',
        status: 'LOCKED',
        security: 'BIOMETRIC LOCK + WEIGHT SENSOR',
        authorized: 'IT Security (Max 2 persons)',
        lastAccess: '6 hours ago',
        accessCount: 4,
        flags: ['ADDITIONAL ENCRYPTION'],
        notes: 'Environmental monitoring active - Tampering triggers lockdown',
      },
    ],
  },
};
