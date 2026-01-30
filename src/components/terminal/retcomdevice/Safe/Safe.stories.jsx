import Safe from './Safe';

export default {
  title: 'Terminal/Safe',
  component: Safe,
};

export const BlankProps = {
  args: {},
};

export const EmptySafe = {
  args: {
    id: 'casino-manager-safe',
    model: 'DS-400',
    location: 'Lucky Flight Casino - Manager Office',
    owner: 'Frank Stone, Casino Manager',
    security: '6-digit keypad + biometric',
    lastAccess: 'Yesterday 11:45 PM',
    notes: 'Safe is bolted to floor. Combination changed monthly.',
  },
};

// Office safe - manager
export const ManagerOfficeSafe = {
  args: {
    id: 'casino-manager-safe',
    model: 'DS-400',
    location: 'Lucky Flight Casino - Manager Office',
    owner: 'Frank Stone, Casino Manager',
    security: '6-digit keypad + biometric',
    lastAccess: 'Yesterday 11:45 PM',
    physical: [
      { item: 'Cash', desc: '8,500¤ in mixed bills' },
      { item: 'Master Keycard', desc: 'Access to all casino doors' },
      { item: 'Backup Keys', desc: 'Safe deposit boxes, office doors' },
      { item: 'Personal Items', desc: 'Watch, family photos' },
    ],
    digital: [
      { item: 'Financial Reports', desc: 'Monthly revenue & expenses' },
      { item: 'Employee Records', desc: 'Staff files, background checks' },
      { item: 'Security Footage Keys', desc: 'Access codes for camera system' },
      { item: 'Supplier Contacts', desc: 'Black market connections list' },
    ],
    notes: 'Safe is bolted to floor. Combination changed monthly.',
  },
};

// Warehouse safe
export const WarehouseSafe = {
  args: {
    id: 'securecargo-safe-7b',
    model: 'DS-300',
    location: 'SecureCargo Warehouse - Supervisor Office',
    owner: 'Marcus Webb, Night Supervisor',
    security: '4-digit keypad',
    lastAccess: 'Today 6:15 PM',
    physical: [
      { item: 'Petty Cash', desc: '1,200¤ for operational expenses' },
      { item: 'Shipping Manifests', desc: 'Physical copies of cargo logs' },
      { item: 'Container Keys', desc: 'Access to secure containers' },
    ],
    digital: [
      { item: 'Inventory Database', desc: 'Current stock levels & locations' },
      { item: 'Employee Schedules', desc: 'Guard rotations & shift assignments' },
      { item: 'Security Codes', desc: 'Gate access, alarm codes' },
    ],
    notes: 'Combination known by day and night supervisors.',
  },
};

// Corporate executive safe
export const ExecutiveSafe = {
  args: {
    id: 'bigmosse-exec-vault',
    model: 'DS-900 Executive',
    location: 'Bigmosse Tower - Executive Suite',
    owner: 'Victoria Sterling, VP Operations',
    security: 'Biometric + voice recognition + 8-digit code',
    lastAccess: 'Today 2:30 PM',
    physical: [
      { item: 'Bearer Bonds', desc: '50,000¤ in negotiable securities' },
      { item: 'Cryptocurrency Wallet', desc: 'Hardware wallet with 200,000¤' },
      { item: 'Jewelry', desc: 'Diamond necklace, gold watch' },
      { item: 'Contracts', desc: 'Original signed agreements' },
    ],
    digital: [
      { item: 'Board Meeting Minutes', desc: 'Confidential strategic discussions' },
      { item: 'Merger Documents', desc: 'Acquisition plans, due diligence' },
      { item: 'Executive Passwords', desc: 'Master credentials for all systems' },
      { item: 'Offshore Accounts', desc: 'Bank account numbers, tax havens' },
    ],
    notes: 'Protected by advanced security. Tampering triggers silent alarm.',
  },
};

// Apartment safe
export const ApartmentSafe = {
  args: {
    id: 'apartment-4b-safe',
    model: 'DS-100 Home',
    location: 'Riverside Apartments - Unit 4B',
    owner: 'Sarah Chen, Data Analyst',
    security: 'Electronic keypad',
    lastAccess: '3 days ago',
    physical: [
      { item: 'Passport', desc: 'Valid travel document' },
      { item: 'Cash', desc: '600¤ emergency funds' },
      { item: 'Jewelry', desc: 'Family heirlooms, engagement ring' },
    ],
    digital: [
      { item: 'Personal Documents', desc: 'Birth certificate, tax records' },
      { item: 'Photo Backup', desc: 'Family photos, personal memories' },
      { item: 'Password List', desc: 'Encrypted file of account credentials' },
    ],
    notes: 'Small home safe, hidden in bedroom closet.',
  },
};

// Bodega safe
export const BodegaSafe = {
  args: {
    id: 'lucky-star-safe',
    model: 'DS-200',
    location: 'Lucky Star Bodega - Back Office',
    owner: 'Maria Santos, Owner',
    security: 'Mechanical dial lock',
    lastAccess: 'Today 10:00 PM (closing)',
    physical: [
      { item: 'Daily Receipts', desc: '450¤ from today\'s sales' },
      { item: 'Lottery Tickets', desc: 'Unsold scratch-offs, about 200¤ value' },
      { item: 'Business Permits', desc: 'License, insurance documents' },
    ],
    digital: [
      { item: 'Sales Records', desc: 'Daily transaction logs' },
      { item: 'Supplier Invoices', desc: 'Pending payments, receipts' },
    ],
    notes: 'Old but reliable safe. Been here since the store opened.',
  },
};

// Bank vault
export const BankVault = {
  args: {
    id: 'quantum-bank-vault',
    model: 'DS-1000 Bank Vault',
    location: 'Quantum Financial - Main Branch',
    owner: 'Bank Operations',
    security: 'Time-lock + dual-key system + biometric',
    lastAccess: 'Today 9:00 AM (opening)',
    physical: [
      { item: 'Currency Reserves', desc: '500,000¤ in various denominations' },
      { item: 'Gold Bars', desc: '10 bars, approximately 100,000¤ value' },
      { item: 'Safe Deposit Boxes', desc: 'Customer valuables, unknown contents' },
      { item: 'Securities', desc: 'Stock certificates, bonds' },
    ],
    digital: [
      { item: 'Transaction Logs', desc: 'All customer transactions, account activity' },
      { item: 'Vault Codes', desc: 'Combination changes, access schedules' },
      { item: 'Security Protocols', desc: 'Emergency procedures, alarm codes' },
      { item: 'Customer Data', desc: 'Account information, credit histories' },
    ],
    notes: 'Maximum security. Requires bank manager + security chief to open.',
  },
};

// Data center safe
export const DataCenterSafe = {
  args: {
    id: 'datavault-s7-safe',
    model: 'DS-500 Secure',
    location: 'DataVault Systems - Sector 7, Sublevel 3',
    owner: 'Kevin Zhang, Systems Administrator',
    security: 'Biometric + RFID badge + PIN',
    lastAccess: 'Today 4:00 PM',
    physical: [
      { item: 'Backup Drives', desc: 'Encrypted external drives with system images' },
      { item: 'Hardware Tokens', desc: 'Physical 2FA devices for critical systems' },
      { item: 'Emergency Keys', desc: 'Server room access, power controls' },
    ],
    digital: [
      { item: 'Root Credentials', desc: 'Master admin passwords for all servers' },
      { item: 'Encryption Keys', desc: 'Decryption keys for customer data' },
      { item: 'Network Diagrams', desc: 'Complete infrastructure maps' },
      { item: 'Disaster Recovery', desc: 'Emergency procedures, backup locations' },
    ],
    notes: 'Contains keys to entire data center. Highest security clearance required.',
  },
};

// Gang safehouse
export const GangSafe = {
  args: {
    id: 'stone-eels-safe',
    model: 'DS-250',
    location: 'Stone Eels Safehouse - Underground',
    owner: 'Saša, Stone Eels Lieutenant',
    security: 'Combination lock (known to core members only)',
    lastAccess: '2 days ago',
    physical: [
      { item: 'Weapons', desc: '3 pistols, ammunition' },
      { item: 'Cash', desc: '15,000¤ - crew fund' },
      { item: 'Stolen Goods', desc: 'Jewelry, electronics - fence later' },
      { item: 'Drugs', desc: 'Product for distribution' },
    ],
    digital: [
      { item: 'Operation Plans', desc: 'Upcoming heists, target locations' },
      { item: 'Contact List', desc: 'Gang members, allies, suppliers' },
      { item: 'Police Intel', desc: 'Corrupt cop connections, patrol schedules' },
      { item: 'Territory Map', desc: 'Controlled areas, rival gang positions' },
    ],
    notes: 'Well-hidden. Moving location soon due to heat from rivals.',
  },
};

// Medical facility safe
export const MedicalSafe = {
  args: {
    id: 'vitalcorp-pharmacy-safe',
    model: 'DS-350 Medical',
    location: 'VitalCorp Clinic - Pharmacy',
    owner: 'Dr. Patricia Lewis, Chief Medical Officer',
    security: 'Dual-lock system + electronic log',
    lastAccess: 'Today 3:45 PM',
    physical: [
      { item: 'Controlled Substances', desc: 'Schedule II medications, narcotics' },
      { item: 'Expensive Medications', desc: 'Rare drugs, high-value treatments' },
      { item: 'Patient Samples', desc: 'Biological specimens for testing' },
    ],
    digital: [
      { item: 'Prescription Records', desc: 'Patient medication histories' },
      { item: 'DEA Logs', desc: 'Controlled substance tracking' },
      { item: 'Audit Trail', desc: 'All safe access attempts logged' },
    ],
    notes: 'Heavily regulated. Access logged and reported to authorities.',
  },
};

// Hotel safe
export const HotelSafe = {
  args: {
    id: 'skyline-penthouse-safe',
    model: 'DS-150 Hospitality',
    location: 'Skyline Grand Hotel - Penthouse Suite',
    owner: 'Guest Services (Current: VIP Guest)',
    security: 'Guest-set 4-digit code',
    lastAccess: 'Unknown (guest privacy)',
    physical: [
      { item: 'Guest Valuables', desc: 'Laptop, jewelry, cash' },
      { item: 'Travel Documents', desc: 'Passport, tickets' },
    ],
    digital: [
      { item: 'Hotel Master Code', desc: 'Override code known to management' },
      { item: 'Guest Preferences', desc: 'VIP profile, special requests' },
    ],
    notes: 'In-room safe. Hotel staff have emergency override access.',
  },
};

// Pawn shop safe
export const PawnShopSafe = {
  args: {
    id: 'quick-cash-pawn-safe',
    model: 'DS-280',
    location: 'Quick Cash Pawn - Back Room',
    owner: 'Eddie "Fast Cash" Martinez, Owner',
    security: 'Combination lock',
    lastAccess: 'Today 7:00 PM',
    physical: [
      { item: 'Pawned Jewelry', desc: 'Rings, necklaces, watches - about 8,000¤' },
      { item: 'Cash Reserve', desc: '5,000¤ for buy-backs and loans' },
      { item: 'Firearms', desc: '2 pistols (legally pawned, registered)' },
      { item: 'Hot Items', desc: 'Probably stolen - no questions asked' },
    ],
    digital: [
      { item: 'Pawn Records', desc: 'Item logs, customer info' },
      { item: 'Fence Contacts', desc: 'Buyers for questionable items' },
      { item: 'Police Contacts', desc: 'Cops on the take, blind eye deals' },
    ],
    notes: 'Dual-purpose: legitimate pawn business + fence for stolen goods.',
  },
};

// Research lab safe
export const ResearchLabSafe = {
  args: {
    id: 'synth-minds-lab-safe',
    model: 'DS-600 Research',
    location: 'Synthetic Minds R&D - Lab Alpha-05',
    owner: 'Dr. Lisa Park, Lead Researcher',
    security: 'Biometric + time-lock + supervisor override',
    lastAccess: 'Today 1:00 PM',
    physical: [
      { item: 'Prototype Chips', desc: 'Experimental neural interface hardware' },
      { item: 'Lab Notebooks', desc: 'Handwritten research notes, formulas' },
      { item: 'Sample Vials', desc: 'Biological samples, chemical compounds' },
    ],
    digital: [
      { item: 'Research Data', desc: 'AI training models, experiment results' },
      { item: 'Patent Applications', desc: 'Pending intellectual property filings' },
      { item: 'Test Subject Files', desc: 'Human trial participant data' },
      { item: 'Source Code', desc: 'Proprietary AI algorithms' },
    ],
    notes: 'Contains groundbreaking AI research. Corporate espionage target.',
  },
};

// Small business safe
export const SmallBusinessSafe = {
  args: {
    id: 'chrome-customs-safe',
    model: 'DS-180',
    location: 'Chrome Customs Garage - Office',
    owner: 'Mike Rodriguez, Owner/Mechanic',
    security: 'Key lock',
    lastAccess: 'Yesterday 6:00 PM',
    physical: [
      { item: 'Cash', desc: '800¤ from recent jobs' },
      { item: 'Customer Keys', desc: 'Car keys for vehicles being worked on' },
      { item: 'Title Documents', desc: 'Vehicle titles, work orders' },
    ],
    digital: [
      { item: 'Customer Database', desc: 'Contact info, service history' },
      { item: 'Supplier Accounts', desc: 'Parts vendors, login credentials' },
    ],
    notes: 'Basic safe for small business. Needs upgrade.',
  },
};

// Minimal safe
export const MinimalSafe = {
  args: {
    id: 'minimal-safe-01',
    model: 'DS-100',
    location: 'Small Office',
    owner: 'Business Owner',
    security: 'Keypad',
    lastAccess: 'Today',
    physical: [
      { item: 'Cash', desc: 'Daily receipts' },
    ],
    digital: [
      { item: 'Records', desc: 'Business documents' },
    ],
  },
};

// High-value safe
export const HighValueSafe = {
  args: {
    id: 'collector-vault',
    model: 'DS-800 Premium',
    location: 'Private Residence - Hidden Room',
    owner: 'Anonymous Collector',
    security: 'Multi-factor: Retinal scan + fingerprint + 12-digit code',
    lastAccess: 'Last week',
    physical: [
      { item: 'Art Collection', desc: 'Rare paintings, worth 200,000¤+' },
      { item: 'Rare Coins', desc: 'Ancient currency collection, priceless' },
      { item: 'Precious Gems', desc: 'Uncut diamonds, rare rubies' },
      { item: 'Vintage Wine', desc: 'Bottles worth 5,000¤ each' },
    ],
    digital: [
      { item: 'Provenance Records', desc: 'Authenticity certificates, purchase history' },
      { item: 'Insurance Documents', desc: 'Policies, appraisals, photos' },
      { item: 'Auction Access', desc: 'Private sale invitations, dealer contacts' },
      { item: 'Collection Catalog', desc: 'Complete inventory with valuations' },
    ],
    notes: 'Climate-controlled vault. Hidden behind bookshelf. Insured for 1M¤.',
  },
};
