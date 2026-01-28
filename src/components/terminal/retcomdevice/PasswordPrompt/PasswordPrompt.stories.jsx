import PasswordPrompt from './PasswordPrompt';
import DigitalWallet from '../DigitalWallet/DigitalWallet';

export default {
  title: 'Terminal/PasswordPrompt',
  component: PasswordPrompt,
};

// Basic password prompt
export const SimplePassword = {
  args: {
    command: 'Access: Employee Locker',
    password: 'BLUE',
    hint: 'Color of the sky',
    hintStrength: 1,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

export const SimplePasswordChild = {
  args: {
    command: 'Access: Employee Locker',
    password: 'BLUE',
    hint: 'Color of the sky',
    hintStrength: 1,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
    children: (
      <DigitalWallet
        accountHolder="Marcus 'Slip' Chen"
        isLocked={true}
      />
    )
  },
};

// Computer password
export const ComputerLogin = {
  args: {
    command: 'Login: Manager Desktop PC',
    password: 'ADMIN',
    hint: 'Common default username',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Safe combination
export const SafeAccess = {
  args: {
    command: 'Open: Office Safe',
    password: 'CASH',
    hint: 'What you find inside',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Door code
export const DoorCode = {
  args: {
    command: 'Access: Server Room Door',
    password: 'SERVER',
    hint: 'What\'s behind this door?',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Longer password with repeating characters
export const RepeatingChars = {
  args: {
    command: 'Access: Personal Computer',
    password: 'COFFEE',
    hint: 'Morning beverage',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Game-style password
export const GamePassword = {
  args: {
    command: 'Unlock: Hidden Terminal',
    password: 'NEON',
    hint: 'Type of lights in this city',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Warehouse password
export const WarehouseAccess = {
  args: {
    command: 'Access: Secure Cargo Container 7B',
    password: 'CARGO',
    hint: 'What this building stores',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Casino password
export const CasinoSafe = {
  args: {
    command: 'Open: Manager Office Safe',
    password: 'LUCKY',
    hint: 'Theme of this establishment',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Personal device
export const PersonalDevice = {
  args: {
    command: 'Unlock: Personal Tablet',
    password: 'WINTER',
    hint: 'Coldest season',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Short password - minimal hint
export const ShortPassword = {
  args: {
    command: 'Access: Storage Locker',
    password: 'BOX',
    hint: 'A container',
    hintStrength: 1,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Medium length with hint
export const MediumPassword = {
  args: {
    command: 'Login: Workstation Terminal',
    password: 'WIDGET',
    hint: 'Generic product name',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// No hint - hardest mode
export const NoHint = {
  args: {
    command: 'Access: Encrypted Drive',
    password: 'SECRET',
    hint: '',
    hintStrength: 1,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Gang hideout
export const GangHideout = {
  args: {
    command: 'Access: Stone Eels Safehouse',
    password: 'STONE',
    hint: 'First word of gang name',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Corporate access
export const CorporateAccess = {
  args: {
    command: 'Login: Bigmosse Executive Terminal',
    password: 'PROFIT',
    hint: 'What corporations care about most',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Vending machine
export const VendingMachine = {
  args: {
    command: 'Access: QuickDrinx Maintenance Panel',
    password: 'DRINK',
    hint: 'What this machine dispenses',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// ATM access
export const ATMAccess = {
  args: {
    command: 'Service Mode: ATM-500',
    password: 'MONEY',
    hint: 'What people withdraw',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// All hints enabled
export const MaxHints = {
  args: {
    command: 'Tutorial: Password Entry',
    password: 'HELLO',
    hint: 'Common greeting (character count shown, frequency markers visible)',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Difficult password
export const DifficultPassword = {
  args: {
    command: 'Access: High Security Vault',
    password: 'QUANTUM',
    hint: 'Type of computing used for encryption',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Game puzzle
export const PuzzlePassword = {
  args: {
    command: 'Decrypt: Mysterious File',
    password: 'CIPHER',
    hint: 'Another word for code or encryption',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Character-based hint
export const CharacterHint = {
  args: {
    command: 'Access: Apartment 4B',
    password: 'PARK',
    hint: 'The guard\'s last name (James ____)',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Location-based
export const LocationPassword = {
  args: {
    command: 'Open: Canal District Gate',
    password: 'CANAL',
    hint: 'The district you\'re in',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Tech-themed
export const TechPassword = {
  args: {
    command: 'Login: Developer Console',
    password: 'DEBUG',
    hint: 'What developers do to fix code',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Medical facility
export const MedicalAccess = {
  args: {
    command: 'Access: VitalCorp Medical Records',
    password: 'VITAL',
    hint: 'Company name',
    hintStrength: 2,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Minimal UI test
export const MinimalHint = {
  args: {
    command: 'Test: Basic Entry',
    password: 'TEST',
    hint: 'What you\'re doing right now',
    hintStrength: 1,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};

// Complex repeating pattern
export const ComplexPattern = {
  args: {
    command: 'Access: Pattern Lock System',
    password: 'LETTER',
    hint: 'Contains three of the same character',
    hintStrength: 3,
    onSubmit: (password) => console.log('Submitted:', password),
    onCancel: () => console.log('Cancelled'),
  },
};
