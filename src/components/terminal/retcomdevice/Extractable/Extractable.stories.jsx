import Extractable from './Extractable';

export default {
  title: 'Terminal/Extractable',
  component: Extractable,
  parameters: {
    layout: 'padded',
  },
};

// ============================================================================
// STEALING MODE (Criminal Activities)
// ============================================================================

export const BlankProps = {
  args: {},
};

export const StealingSafe = {
  name: 'Stealing - Safe (Both Physical & Digital)',
  args: {
    id: 'story-safe-master-bedroom',
    physicalItems: [
      { item: 'Credits', desc: 'Physical currency', value: 5000 },
      { item: 'Access Keycard', desc: 'Manager-level clearance' },
    ],
    digitalItems: [
      { item: 'Employee Records', desc: 'Full personnel database' },
      { item: 'Financial Reports', desc: 'Q3 2067 statements' },
      { item: 'Security Codes', desc: 'Building access codes', value: 2500 },
    ],
    stealing: true,
  },
};

export const StealingPhysicalOnly = {
  name: 'Stealing - Physical Only (Cash Stash)',
  args: {
    id: 'story-coffee-machine-stash',
    physicalItems: [
      { item: 'Credstick', desc: '1,200¤', value: 1200 },
      { item: 'Data chip', desc: "Labeled 'Insurance' - encrypted" },
      { item: 'Note', desc: "'For emergencies only - J'" },
    ],
    stealing: true,
  },
};

export const StealingDigitalOnly = {
  name: 'Stealing - Digital Only (Data Heist)',
  args: {
    id: 'story-atm-skim',
    digitalItems: [
      { item: 'Transaction Skim', desc: 'Small % from daily transactions', value: 850 },
    ],
    stealing: true,
  },
};

export const StealingGameWallet = {
  name: 'Stealing - Game Console Wallet',
  args: {
    id: 'story-game-wallet',
    digitalItems: [
      { item: 'In-game credits', desc: '47,500 credits (black market convertible)', value: 11875 },
    ],
    stealing: true,
  },
};

export const StealingMatchFixingData = {
  name: 'Stealing - Match-Fixing Evidence (High Value)',
  args: {
    id: 'story-penthouse-safe',
    digitalItems: [
      { item: 'Data Chip', desc: 'Match-fixing evidence: Alliansen Inc. + TG Labs collusion', value: 9000 },
    ],
    stealing: true,
  },
};

// ============================================================================
// NON-STEALING MODE (Legitimate Actions)
// ============================================================================

export const TakingFromFridge = {
  name: 'Taking - Fridge/Freezer Contents',
  args: {
    id: 'story-freezer-blackout',
    physicalItems: [
      { item: 'Blackout (10 doses)', desc: 'Sedative/anesthetic - frozen storage', value: 1500 },
    ],
    stealing: false,
  },
};

export const TakingFromDrawer = {
  name: 'Taking - Guest Room Drawer',
  args: {
    id: 'story-guest-drawer',
    physicalItems: [
      { item: 'Faceblock (2 packs)', desc: 'Facial recognition blocker', value: 300 },
    ],
    stealing: false,
  },
};

export const TakingBackpack = {
  name: 'Taking - Backpack Contents',
  args: {
    id: 'story-backpack-closet',
    physicalItems: [
      { item: 'Credstick', desc: '2,500¤', value: 2500 },
      { item: 'Vurt (1 dose)', desc: 'High-grade hallucinogen', value: 300 },
    ],
    stealing: false,
  },
};

export const ClaimingBounty = {
  name: 'Claiming - Bounty Payment',
  args: {
    id: 'story-bounty-viktor',
    digitalItems: [
      { item: 'Bounty Payment', desc: 'Proof of capture submitted', value: 50000 },
    ],
    stealing: false,
  },
};

export const ClaimingReward = {
  name: 'Claiming - Contract Reward',
  args: {
    id: 'story-contract-payment',
    digitalItems: [
      { item: 'Contract Payment', desc: '5,000¤ base reward', value: 5000 },
      { item: 'Reputation Bonus', desc: '+50 street cred' },
    ],
    stealing: false,
  },
};

export const RetrievingMedicalSupplies = {
  name: 'Retrieving - Medical Supplies',
  args: {
    id: 'story-doc-joy-supplies',
    physicalItems: [
      { item: 'Faceblock (3 doses)', desc: 'Facial recognition blocker', value: 450 },
      { item: 'Red-juice (2 doses)', desc: 'Emergency healing stimulant', value: 600 },
      { item: 'Vurt (1 dose)', desc: 'High-grade hallucinogen', value: 300 },
    ],
    digitalItems: [
      { item: 'Crypto Wallet', desc: 'Emergency funds access', value: 2500 },
    ],
    stealing: false,
  },
};

// ============================================================================
// EDGE CASES & STATES
// ============================================================================

export const NoItems = {
  name: 'Edge Case - No Items',
  args: {
    id: 'story-empty',
    physicalItems: [],
    digitalItems: [],
    stealing: false,
  },
};

export const Disabled = {
  name: 'State - Disabled',
  args: {
    id: 'story-disabled',
    physicalItems: [
      { item: 'Locked Item', desc: 'Cannot be accessed yet' },
    ],
    stealing: true,
    disabled: true,
  },
};

export const HighValueHeist = {
  name: 'Scenario - High Value Mixed Heist',
  args: {
    id: 'story-mega-heist',
    physicalItems: [
      { item: 'Platinum Credstick', desc: 'Corp executive account', value: 25000 },
      { item: 'Prototype Chrome', desc: 'Unreleased military-grade implant', value: 15000 },
      { item: 'Bearer Bonds', desc: 'Untraceable securities', value: 50000 },
    ],
    digitalItems: [
      { item: 'Corporate Secrets', desc: 'Alliansen R&D database', value: 100000 },
      { item: 'Blackmail Files', desc: 'Exec compromising material', value: 75000 },
      { item: 'Crypto Keys', desc: 'Access to offshore accounts', value: 200000 },
    ],
    stealing: true,
  },
};

export const SimpleSupplyRun = {
  name: 'Scenario - Simple Supply Run',
  args: {
    id: 'story-supply-run',
    physicalItems: [
      { item: 'Protein Bars (5)', desc: 'Emergency rations' },
      { item: 'Water Bottles (3)', desc: 'Purified water' },
      { item: 'First Aid Kit', desc: 'Basic medical supplies' },
    ],
    stealing: false,
  },
};

export const DataOnlyInfiltration = {
  name: 'Scenario - Pure Data Infiltration',
  args: {
    id: 'story-data-heist',
    digitalItems: [
      { item: 'Employee Database', desc: 'Personnel records and credentials' },
      { item: 'Security Protocols', desc: 'Building access codes and procedures' },
      { item: 'Client List', desc: 'Corporate client information' },
      { item: 'Financial Ledger', desc: 'Transaction history and accounts' },
    ],
    stealing: true,
  },
};

// ============================================================================
// WITH CALLBACK
// ============================================================================

export const WithCallback = {
  name: 'Interactive - With Callback',
  args: {
    id: 'story-with-callback',
    physicalItems: [
      { item: 'Credits', desc: 'Cash stash', value: 1000 },
    ],
    digitalItems: [
      { item: 'Access Codes', desc: 'Security bypass codes', value: 500 },
    ],
    stealing: true,
    onExtract: (items, totalValue) => {
      alert(`Extracted ${items.length} items! Total value: ${totalValue}¤`);
      console.log('Extracted items:', items);
    },
  },
};

// ============================================================================
// COMPARISON: STEALING VS NOT STEALING
// ============================================================================

export const ComparisonStealing = {
  name: 'Comparison - Stealing Mode (Red/Criminal)',
  args: {
    id: 'story-comparison-steal',
    physicalItems: [
      { item: 'Credits', desc: 'Stolen cash', value: 5000 },
    ],
    digitalItems: [
      { item: 'Data', desc: 'Stolen files', value: 2000 },
    ],
    stealing: true,
  },
};

export const ComparisonLegitimate = {
  name: 'Comparison - Legitimate Mode (Green/Neutral)',
  args: {
    id: 'story-comparison-legit',
    physicalItems: [
      { item: 'Credits', desc: 'Earned payment', value: 5000 },
    ],
    digitalItems: [
      { item: 'Data', desc: 'Retrieved files', value: 2000 },
    ],
    stealing: false,
  },
};
