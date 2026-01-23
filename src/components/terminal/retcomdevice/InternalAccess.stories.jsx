import InternalAccess from './InternalAccess';

export default {
  title: 'Terminal/InternalAccess',
  component: InternalAccess,
  tags: ['autodocs'],
  argTypes: {
    businessName: {
      control: 'text',
      description: 'Name of business/location',
    },
    welcomeMessage: {
      control: 'text',
      description: 'Custom welcome text',
    },
    networkInfo: {
      control: 'text',
      description: 'Footer note about the network',
    },
    theme: {
      control: 'select',
      options: ['corporate', 'casual', 'secure'],
      description: 'Visual theme',
    },
  },
};

// Small business - bodega
export const BodegaAccess = {
  args: {
    businessName: 'LUCKY STAR BODEGA',
    welcomeMessage: 'EMPLOYEE ACCESS GRANTED',
    networkInfo: 'Network: BODEGA-STAFF-01 | Connected to POS system',
    theme: 'casual',
  },
};

// Casino internal
export const CasinoAccess = {
  args: {
    businessName: 'LUCKY FLIGHT CASINO',
    welcomeMessage: 'STAFF NETWORK ACCESS APPROVED',
    networkInfo: 'Security Level: HIGH | All activity monitored',
    theme: 'corporate',
  },
};

// Warehouse system
export const WarehouseAccess = {
  args: {
    businessName: 'SECURECARGO WAREHOUSE',
    welcomeMessage: 'LOGISTICS SYSTEM ONLINE',
    networkInfo: 'Connected to inventory management | Shift: NIGHT',
    theme: 'corporate',
  },
};

// Corporate HQ
export const CorporateAccess = {
  args: {
    businessName: 'BIGMOSSE CORPORATE',
    welcomeMessage: 'AUTHORIZED PERSONNEL ONLY',
    networkInfo: 'Encrypted connection | VPN active | Building: TOWER A',
    theme: 'secure',
  },
};

// Nightclub
export const NightclubAccess = {
  args: {
    businessName: 'CAVE CLUB',
    welcomeMessage: 'STAFF ACCESS GRANTED',
    networkInfo: 'Sound system network | Lighting controls | Bar POS',
    theme: 'casual',
  },
};

// Medical facility
export const MedicalAccess = {
  args: {
    businessName: 'VITALCORP CLINIC',
    welcomeMessage: 'MEDICAL STAFF ACCESS',
    networkInfo: 'HIPAA-compliant network | Patient records accessible',
    theme: 'corporate',
  },
};

// Restaurant/bar
export const RestaurantAccess = {
  args: {
    businessName: 'NEON BISTRO',
    welcomeMessage: 'KITCHEN & FRONT OF HOUSE ACCESS',
    networkInfo: 'POS system | Reservation system | Inventory',
    theme: 'casual',
  },
};

// Security company
export const SecurityAccess = {
  args: {
    businessName: 'SECOPS HQ',
    welcomeMessage: 'SECURITY PERSONNEL AUTHORIZED',
    networkInfo: 'CRITICAL: All communications encrypted | Emergency protocols active',
    theme: 'secure',
  },
};

// Data center
export const DataCenterAccess = {
  args: {
    businessName: 'DATAVAULT SYSTEMS',
    welcomeMessage: 'TECHNICIAN ACCESS VERIFIED',
    networkInfo: 'Server monitoring | Climate controls | Power management',
    theme: 'secure',
  },
};

// Manufacturing
export const ManufacturingAccess = {
  args: {
    businessName: 'APEX MANUFACTURING',
    welcomeMessage: 'FLOOR SUPERVISOR ACCESS',
    networkInfo: 'Production line controls | Quality metrics | Safety systems',
    theme: 'corporate',
  },
};

// Retail store
export const RetailAccess = {
  args: {
    businessName: 'TECHMART ELECTRONICS',
    welcomeMessage: 'EMPLOYEE DASHBOARD',
    networkInfo: 'Inventory system | Customer lookup | Returns processing',
    theme: 'casual',
  },
};

// Hotel
export const HotelAccess = {
  args: {
    businessName: 'SKYLINE GRAND HOTEL',
    welcomeMessage: 'FRONT DESK & CONCIERGE ACCESS',
    networkInfo: 'Reservations | Guest services | Housekeeping coordination',
    theme: 'corporate',
  },
};

// Gym/fitness center
export const GymAccess = {
  args: {
    businessName: 'POWER FITNESS CENTER',
    welcomeMessage: 'STAFF & TRAINER ACCESS',
    networkInfo: 'Member database | Class schedules | Equipment tracking',
    theme: 'casual',
  },
};

// Underground/gang front
export const UndergroundAccess = {
  args: {
    businessName: 'STONE EELS - SECURE CHANNEL',
    welcomeMessage: 'VERIFIED MEMBER - WELCOME',
    networkInfo: '⚠ Encrypted communication only | No logs | Trust no one',
    theme: 'secure',
  },
};

// Government office
export const GovernmentAccess = {
  args: {
    businessName: 'CITIZEN SERVICES PORTAL',
    welcomeMessage: 'CIVIL SERVANT ACCESS APPROVED',
    networkInfo: 'Official use only | All transactions logged for audit',
    theme: 'secure',
  },
};

// Library
export const LibraryAccess = {
  args: {
    businessName: 'CITY PUBLIC LIBRARY',
    welcomeMessage: 'LIBRARIAN WORKSTATION',
    networkInfo: 'Catalog system | Circulation desk | Digital archives',
    theme: 'casual',
  },
};

// Gas station
export const GasStationAccess = {
  args: {
    businessName: 'QUICKFUEL STATION',
    welcomeMessage: 'ATTENDANT ACCESS',
    networkInfo: 'Pump controls | Register system | Inventory alerts',
    theme: 'casual',
  },
};

// Bank branch
export const BankAccess = {
  args: {
    businessName: 'QUANTUM FINANCIAL',
    welcomeMessage: 'TELLER STATION AUTHENTICATED',
    networkInfo: 'CRITICAL: Customer data encrypted | Transaction monitoring active',
    theme: 'secure',
  },
};

// School/university
export const SchoolAccess = {
  args: {
    businessName: 'TECH UNIVERSITY',
    welcomeMessage: 'FACULTY & STAFF ACCESS',
    networkInfo: 'Student records | Grading system | Resource booking',
    theme: 'corporate',
  },
};

// Minimal (no network info)
export const MinimalAccess = {
  args: {
    businessName: 'LOCAL SHOP',
    welcomeMessage: 'ACCESS GRANTED',
    theme: 'casual',
  },
};

// High security facility
export const MaxSecurityAccess = {
  args: {
    businessName: 'CLASSIFIED FACILITY',
    welcomeMessage: 'LEVEL 7 CLEARANCE VERIFIED',
    networkInfo: '⚠ CRITICAL: Quantum encryption active | Biometric auth confirmed | Zero-trust protocol',
    theme: 'secure',
  },
};

// Hacker/underground network
export const HackerAccess = {
  args: {
    businessName: 'PHANTOM NETWORK',
    welcomeMessage: 'ANONYMOUS NODE CONNECTED',
    networkInfo: 'TOR routing active | No logs | Encrypted traffic only | Exit at will',
    theme: 'secure',
  },
};

// Pharmacy
export const PharmacyAccess = {
  args: {
    businessName: 'MEDIPLUS PHARMACY',
    welcomeMessage: 'PHARMACIST WORKSTATION',
    networkInfo: 'Prescription database | Insurance verification | Controlled substance tracking',
    theme: 'corporate',
  },
};

// Auto repair shop
export const AutoShopAccess = {
  args: {
    businessName: 'CHROME CUSTOMS GARAGE',
    welcomeMessage: 'MECHANIC TERMINAL',
    networkInfo: 'Work orders | Parts inventory | Diagnostic tools',
    theme: 'casual',
  },
};

// TV/radio station
export const MediaAccess = {
  args: {
    businessName: 'NEON CITY BROADCASTING',
    welcomeMessage: 'PRODUCTION TEAM ACCESS',
    networkInfo: 'Live feed controls | Archive system | Scheduling dashboard',
    theme: 'corporate',
  },
};
