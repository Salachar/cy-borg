import Extractable from './Extractable';

export default {
  title: 'Terminal/Extractable',
  component: Extractable,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for localStorage',
    },
    items: {
      control: 'object',
      description: 'Array of extractable items',
    },
    type: {
      control: 'select',
      options: ['physical', 'digital', 'data', 'credits'],
      description: 'Type of extraction (affects styling)',
    },
    buttonLabel: {
      control: 'text',
      description: 'Custom button text (optional)',
    },
    requiresPresence: {
      control: 'boolean',
      description: 'Show "requires presence" note',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable extraction',
    },
  },
};

// Physical items (yellow theme)
export const PhysicalContents = {
  args: {
    id: 'safe-physical-alliansen-01',
    type: 'physical',
    requiresPresence: true,
    items: [
      { item: 'Maintenance Uniform', desc: 'Alliansen Inc. service uniform (size M)', value: 50 },
      { item: 'Security Keycard', desc: 'Level 2 access - Warehouse floors', value: 200 },
      { item: 'Credchips', desc: 'Petty cash reserve', value: 450 },
    ],
  },
};

// Digital data (cyan theme)
export const DigitalContents = {
  args: {
    id: 'safe-digital-alliansen-01',
    type: 'digital',
    requiresPresence: true,
    items: [
      { item: 'Personnel Database', desc: 'Employee records and security clearances', value: 800 },
      { item: 'R&D Files', desc: 'Classified research documentation', value: 2500 },
      { item: 'Security Schedules', desc: 'Guard rotation patterns - next 2 weeks', value: 300 },
    ],
  },
};

// ATM credits (green theme)
export const ATMCredits = {
  args: {
    id: 'atm-bodega-001',
    type: 'credits',
    requiresPresence: false,
    items: [
      { item: 'Account Balance', desc: 'Last accessed: Sarah Chen', value: 147 },
      { item: 'Transaction History', desc: 'Recent withdrawals and deposits' },
    ],
  },
};

// Arcade wallet (data theme)
export const ArcadeWallet = {
  args: {
    id: 'arcade-wallet-pixel-palace-01',
    type: 'data',
    requiresPresence: false,
    items: [
      { item: 'Digital Wallet', desc: 'In-game currency and achievements', value: 247 },
      { item: 'Account Credentials', desc: 'Username: SHADOW_NINJA_42', value: 50 },
    ],
  },
};

// Custom button label
export const CustomButtonLabel = {
  args: {
    id: 'custom-extract-01',
    type: 'digital',
    buttonLabel: 'COPY',
    requiresPresence: false,
    items: [
      { item: 'Encrypted Files', desc: 'Unknown contents - requires decryption', value: 1000 },
    ],
  },
};

// Disabled extraction
export const DisabledExtraction = {
  args: {
    id: 'disabled-extract-01',
    type: 'digital',
    disabled: true,
    requiresPresence: false,
    items: [
      { item: 'Locked Data', desc: 'Requires higher security clearance' },
    ],
  },
};

// Empty extractable
export const EmptyExtractable = {
  args: {
    id: 'empty-extract-01',
    type: 'physical',
    requiresPresence: true,
    items: [],
  },
};

// Large value extraction
export const HighValueData = {
  args: {
    id: 'high-value-01',
    type: 'data',
    requiresPresence: false,
    items: [
      { item: 'Corporate Secrets', desc: 'Merger & acquisition plans', value: 15000 },
      { item: 'Executive Emails', desc: 'Compromising communications', value: 8000 },
      { item: 'Financial Records', desc: 'Money laundering evidence', value: 12000 },
    ],
  },
};

// Simple credit skim
export const SimpleCreditSkim = {
  args: {
    id: 'simple-skim-01',
    type: 'credits',
    requiresPresence: false,
    items: [
      { item: 'Available Balance', desc: 'Skimmable amount', value: 89 },
    ],
  },
};

// Physical loot
export const PhysicalLoot = {
  args: {
    id: 'loot-warehouse-01',
    type: 'physical',
    requiresPresence: true,
    items: [
      { item: 'Prototype Device', desc: 'Experimental neural interface', value: 5000 },
      { item: 'Component Parts', desc: 'Rare cyberware components', value: 1200 },
      { item: 'Pharmaceuticals', desc: 'Restricted medical supplies', value: 800 },
    ],
  },
};
