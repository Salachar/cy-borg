import VendingMachine from './VendingMachine';

export default {
  title: 'Terminal/VendingMachine',
  component: VendingMachine,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier',
    },
    model: {
      control: 'text',
      description: 'Vending machine model',
    },
    location: {
      control: 'text',
      description: 'Where the machine is located',
    },
    drinks: {
      control: 'object',
      description: 'Array of drink objects with name, pattern, color, and availability',
    },
  },
};

// Standard vending machine
export const OfficeVendingMachine = {
  args: {
    id: 'bigmosse-lobby-vm',
    model: 'SynthDrinx 3000',
    location: 'Bigmosse Corporate - Lobby',
    drinks: [
      { name: 'ORANGE BLAST', pattern: 'circles', color: 'orange', available: true },
      { name: 'CHERRY COLA', pattern: 'dots', color: 'red', available: true },
      { name: 'LEMON FIZZ', pattern: 'waves', color: 'yellow', available: true },
      { name: 'BLUE RUSH', pattern: 'blocks', color: 'blue', available: true },
      { name: 'GREEN BOOST', pattern: 'lines', color: 'green', available: true },
      { name: 'GRAPE POWER', pattern: 'circles', color: 'purple', available: true },
    ],
  },
};

// Warehouse vending machine - some sold out
export const WarehouseVendingMachine = {
  args: {
    id: 'warehouse-break-room-vm',
    model: 'QuickDrinx 2000',
    location: 'SecureCargo Warehouse - Break Room',
    drinks: [
      { name: 'ENERGY ORANGE', pattern: 'blocks', color: 'orange', available: true },
      { name: 'POWER RED', pattern: 'circles', color: 'red', available: false },
      { name: 'CITRUS BURST', pattern: 'waves', color: 'yellow', available: true },
      { name: 'HYDRO BLUE', pattern: 'lines', color: 'blue', available: true },
      { name: 'MINT FRESH', pattern: 'dots', color: 'green', available: false },
      { name: 'BERRY BLAST', pattern: 'blocks', color: 'purple', available: true },
    ],
  },
};

// Casino vending machine - premium
export const CasinoVendingMachine = {
  args: {
    id: 'casino-vip-vm',
    model: 'LuxDrinx Elite',
    location: 'Lucky Flight Casino - VIP Lounge',
    drinks: [
      { name: 'SUNSET SPLASH', pattern: 'waves', color: 'orange', available: true },
      { name: 'RUBY RUSH', pattern: 'circles', color: 'red', available: true },
      { name: 'GOLD FIZZ', pattern: 'dots', color: 'yellow', available: true },
      { name: 'SAPPHIRE CHILL', pattern: 'blocks', color: 'blue', available: true },
      { name: 'EMERALD ENERGY', pattern: 'lines', color: 'green', available: true },
      { name: 'AMETHYST WAVE', pattern: 'waves', color: 'purple', available: true },
    ],
  },
};

// Gym vending machine - health focused
export const GymVendingMachine = {
  args: {
    id: 'gym-vending-01',
    model: 'FitDrinx Pro',
    location: 'Power Fitness Center - Main Floor',
    drinks: [
      { name: 'PROTEIN ORANGE', pattern: 'blocks', color: 'orange', available: true },
      { name: 'ELECTROLYTE RED', pattern: 'waves', color: 'red', available: true },
      { name: 'VITAMIN BOOST', pattern: 'circles', color: 'yellow', available: true },
      { name: 'SPORTS HYDRATE', pattern: 'lines', color: 'blue', available: true },
      { name: 'GREEN RECOVERY', pattern: 'dots', color: 'green', available: true },
      { name: 'BERRY PROTEIN', pattern: 'blocks', color: 'purple', available: false },
    ],
  },
};

// Hospital vending machine
export const HospitalVendingMachine = {
  args: {
    id: 'hospital-cafeteria-vm',
    model: 'MediDrinx 500',
    location: 'VitalCorp Medical Center - Cafeteria',
    drinks: [
      { name: 'ORANGE JUICE', pattern: 'circles', color: 'orange', available: true },
      { name: 'CRANBERRY JUICE', pattern: 'dots', color: 'red', available: true },
      { name: 'LEMONADE', pattern: 'waves', color: 'yellow', available: false },
      { name: 'WATER', pattern: 'lines', color: 'blue', available: true },
      { name: 'GREEN TEA', pattern: 'blocks', color: 'green', available: true },
      { name: 'GRAPE JUICE', pattern: 'circles', color: 'purple', available: true },
    ],
  },
};

// Budget vending machine - minimal selection
export const BudgetVendingMachine = {
  args: {
    id: 'budget-vm-01',
    model: 'BasicDrinx 100',
    location: 'Strip Mall - Laundromat',
    drinks: [
      { name: 'ORANGE SODA', pattern: 'circles', color: 'orange', available: true },
      { name: 'COLA', pattern: 'dots', color: 'red', available: true },
      { name: 'LEMON LIME', pattern: 'waves', color: 'yellow', available: true },
      { name: 'WATER', pattern: 'lines', color: 'blue', available: false },
    ],
  },
};

// Data center vending machine
export const DataCenterVendingMachine = {
  args: {
    id: 'datacenter-vm-s7',
    model: 'TechDrinx 4000',
    location: 'DataVault Systems - Break Area',
    drinks: [
      { name: 'CODER FUEL', pattern: 'blocks', color: 'orange', available: true },
      { name: 'DEBUG COLA', pattern: 'lines', color: 'red', available: true },
      { name: 'COMPILE LEMON', pattern: 'waves', color: 'yellow', available: true },
      { name: 'BLUE SCREEN', pattern: 'circles', color: 'blue', available: true },
      { name: 'MATRIX GREEN', pattern: 'dots', color: 'green', available: true },
      { name: 'PURPLE HAZE', pattern: 'blocks', color: 'purple', available: false },
    ],
  },
};

// Airport vending machine
export const AirportVendingMachine = {
  args: {
    id: 'airport-terminal-vm',
    model: 'TravelDrinx Express',
    location: 'City Airport - Terminal 2',
    drinks: [
      { name: 'SUNRISE ORANGE', pattern: 'waves', color: 'orange', available: true },
      { name: 'RED EYE ENERGY', pattern: 'blocks', color: 'red', available: true },
      { name: 'LEMON REFRESH', pattern: 'circles', color: 'yellow', available: false },
      { name: 'SKY BLUE WATER', pattern: 'lines', color: 'blue', available: true },
      { name: 'GREEN JOURNEY', pattern: 'dots', color: 'green', available: true },
      { name: 'PURPLE CLOUD', pattern: 'waves', color: 'purple', available: true },
    ],
  },
};

// School vending machine
export const SchoolVendingMachine = {
  args: {
    id: 'school-cafeteria-vm',
    model: 'EduDrinx 250',
    location: 'Tech University - Student Center',
    drinks: [
      { name: 'STUDY ORANGE', pattern: 'circles', color: 'orange', available: true },
      { name: 'BRAIN FUEL', pattern: 'dots', color: 'red', available: true },
      { name: 'FOCUS LEMON', pattern: 'waves', color: 'yellow', available: true },
      { name: 'HYDRATION H2O', pattern: 'lines', color: 'blue', available: false },
      { name: 'GREEN ENERGY', pattern: 'blocks', color: 'green', available: true },
      { name: 'MIDNIGHT STUDY', pattern: 'circles', color: 'purple', available: true },
    ],
  },
};

// Nightclub vending machine
export const NightclubVendingMachine = {
  args: {
    id: 'club-vending-01',
    model: 'NeonDrinx Party',
    location: 'Cave Club - Main Floor',
    drinks: [
      { name: 'NEON ORANGE', pattern: 'waves', color: 'orange', available: true },
      { name: 'RAVE RED', pattern: 'circles', color: 'red', available: true },
      { name: 'GLOW YELLOW', pattern: 'dots', color: 'yellow', available: true },
      { name: 'ELECTRIC BLUE', pattern: 'blocks', color: 'blue', available: false },
      { name: 'LASER GREEN', pattern: 'lines', color: 'green', available: true },
      { name: 'PURPLE HAZE', pattern: 'waves', color: 'purple', available: true },
    ],
  },
};

// Factory vending machine
export const FactoryVendingMachine = {
  args: {
    id: 'factory-floor-vm',
    model: 'IndustrialDrinx Heavy',
    location: 'Apex Manufacturing - Production Floor',
    drinks: [
      { name: 'WORKER ORANGE', pattern: 'blocks', color: 'orange', available: true },
      { name: 'POWER RED', pattern: 'lines', color: 'red', available: false },
      { name: 'LEMON BOOST', pattern: 'circles', color: 'yellow', available: true },
      { name: 'COOL BLUE', pattern: 'waves', color: 'blue', available: true },
      { name: 'FRESH GREEN', pattern: 'dots', color: 'green', available: true },
      { name: 'GRAPE BREAK', pattern: 'blocks', color: 'purple', available: false },
    ],
  },
};

// Retro arcade vending machine
export const ArcadeVendingMachine = {
  args: {
    id: 'arcade-vending-01',
    model: 'PixelDrinx Classic',
    location: 'Pixel Palace Arcade',
    drinks: [
      { name: '8-BIT ORANGE', pattern: 'blocks', color: 'orange', available: true },
      { name: 'POWER-UP RED', pattern: 'blocks', color: 'red', available: true },
      { name: 'COIN LEMON', pattern: 'blocks', color: 'yellow', available: true },
      { name: 'PIXEL BLUE', pattern: 'blocks', color: 'blue', available: true },
      { name: 'LEVEL UP GREEN', pattern: 'blocks', color: 'green', available: false },
      { name: 'RETRO PURPLE', pattern: 'blocks', color: 'purple', available: true },
    ],
  },
};

// Mostly sold out
export const MostlySoldOut = {
  args: {
    id: 'neglected-vm-01',
    model: 'OldDrinx 1000',
    location: 'Abandoned Office Building - Floor 3',
    drinks: [
      { name: 'ORANGE', pattern: 'circles', color: 'orange', available: false },
      { name: 'RED', pattern: 'dots', color: 'red', available: false },
      { name: 'YELLOW', pattern: 'waves', color: 'yellow', available: true },
      { name: 'BLUE', pattern: 'lines', color: 'blue', available: false },
      { name: 'GREEN', pattern: 'blocks', color: 'green', available: false },
      { name: 'PURPLE', pattern: 'circles', color: 'purple', available: false },
    ],
  },
};

// All patterns showcase
export const AllPatterns = {
  args: {
    id: 'showcase-vm',
    model: 'PatternDrinx Demo',
    location: 'Display Model - Showroom',
    drinks: [
      { name: 'CIRCLES DEMO', pattern: 'circles', color: 'orange', available: true },
      { name: 'BLOCKS DEMO', pattern: 'blocks', color: 'red', available: true },
      { name: 'LINES DEMO', pattern: 'lines', color: 'yellow', available: true },
      { name: 'WAVES DEMO', pattern: 'waves', color: 'blue', available: true },
      { name: 'DOTS DEMO', pattern: 'dots', color: 'green', available: true },
      { name: 'MIXED DEMO', pattern: 'circles', color: 'purple', available: true },
    ],
  },
};

// Coffee shop vending machine
export const CoffeeShopVendingMachine = {
  args: {
    id: 'cafe-vending-01',
    model: 'CafeDrinx Deluxe',
    location: 'Grounded Café - Side Wall',
    drinks: [
      { name: 'CARAMEL ICED', pattern: 'waves', color: 'orange', available: true },
      { name: 'STRAWBERRY CHILL', pattern: 'circles', color: 'red', available: true },
      { name: 'VANILLA FROST', pattern: 'dots', color: 'yellow', available: true },
      { name: 'BLUEBERRY SHAKE', pattern: 'lines', color: 'blue', available: true },
      { name: 'MATCHA BOOST', pattern: 'blocks', color: 'green', available: false },
      { name: 'GRAPE SMOOTHIE', pattern: 'waves', color: 'purple', available: true },
    ],
  },
};
