import ArcadeCabinet from './ArcadeCabinet';

export default {
  title: 'Terminal/ArcadeCabinet',
  component: ArcadeCabinet,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for localStorage',
    },
    cabinetName: {
      control: 'text',
      description: 'Arcade cabinet name',
    },
    location: {
      control: 'text',
      description: 'Physical location of the cabinet',
    },
    currentGame: {
      control: 'object',
      description: 'Currently loaded game object',
    },
    screenState: {
      control: 'select',
      options: ['ATTRACT', 'PLAYING', 'GAME_OVER', 'HIGH_SCORE'],
      description: 'What is showing on the screen',
    },
    gamesAvailable: {
      control: 'object',
      description: 'Array of game titles available',
    },
    wallet: {
      control: 'object',
      description: 'Player wallet data (stealable)',
    },
    lastPlayed: {
      control: 'text',
      description: 'Last activity timestamp',
    },
    playerAccount: {
      control: 'text',
      description: 'Current player account name',
    },
  },
};

// Attract mode - waiting for player
export const AttractMode = {
  args: {
    id: 'arcade-pixel-palace-01',
    cabinetName: 'NEON FIGHTER II',
    location: 'Pixel Palace Arcade - Main Floor',
    currentGame: {
      title: 'NEON FIGHTER II TURBO',
      genre: 'FIGHTER',
      highScore: 985700,
    },
    screenState: 'ATTRACT',
    gamesAvailable: [
      'NEON FIGHTER II TURBO',
      'CYBER RACER X',
      'SPACE INVADER 2088',
      'TETRIS NEON',
      'STREET BRAWLER EX',
      'MEGA RUNNER DELUXE',
    ],
    wallet: {
      credits: 247,
      achievements: 38,
      totalPlaytime: '127h',
    },
    lastPlayed: '15 minutes ago',
    playerAccount: 'SHADOW_NINJA_42',
  },
};

// Game in progress
export const GameInProgress = {
  args: {
    id: 'arcade-downtown-02',
    cabinetName: 'GALACTIC DEFENDER',
    location: 'Downtown Arcade - Corner Unit',
    currentGame: {
      title: 'SPACE WARS ULTIMATE',
      genre: 'SHOOTER',
      highScore: 1523400,
    },
    screenState: 'PLAYING',
    gamesAvailable: [
      'SPACE WARS ULTIMATE',
      'ASTEROID BLASTER',
      'CYBER FIGHTER ALPHA',
      'PUZZLE MASTER PRO',
    ],
    wallet: {
      credits: 89,
      achievements: 15,
      totalPlaytime: '45h',
    },
    lastPlayed: 'Just now',
    playerAccount: 'LASER_ACE_99',
  },
};

// Game over screen
export const GameOver = {
  args: {
    id: 'arcade-club-racing',
    cabinetName: 'CYBER RACER X',
    location: 'Cave Club - Gaming Corner',
    currentGame: {
      title: 'NEON NIGHT RACER',
      genre: 'RACING',
      highScore: 2847500,
    },
    screenState: 'GAME_OVER',
    gamesAvailable: [
      'NEON NIGHT RACER',
      'TURBO DRIFT 2088',
      'STREET FIGHTER EX+',
      'PUZZLE COMBO DELUXE',
      'SPACE SHOOTER EXTREME',
    ],
    wallet: {
      credits: 523,
      achievements: 67,
      totalPlaytime: '203h',
    },
    lastPlayed: '2 minutes ago',
    playerAccount: 'SPEED_DEMON_X',
  },
};

// High score entry
export const HighScoreEntry = {
  args: {
    id: 'arcade-cafe-puzzle',
    cabinetName: 'PUZZLE MASTER PRO',
    location: 'Grounded Café - Corner Table',
    currentGame: {
      title: 'TETRIS ULTIMATE',
      genre: 'PUZZLE',
      highScore: 456780,
    },
    screenState: 'HIGH_SCORE',
    gamesAvailable: [
      'TETRIS ULTIMATE',
      'MATCH-3 MANIA',
      'BLOCK BREAKER DELUXE',
      'NEON FIGHTER ZERO',
    ],
    wallet: {
      credits: 34,
      achievements: 12,
      totalPlaytime: '28h',
    },
    lastPlayed: '30 seconds ago',
    playerAccount: 'PUZZLE_QUEEN',
  },
};

// High roller VIP player
export const HighRollerVIP = {
  args: {
    id: 'arcade-vip-lounge',
    cabinetName: 'ELITE FIGHTER TURBO',
    location: 'Lucky Flight Casino - VIP Gaming Lounge',
    currentGame: {
      title: 'ULTRA COMBAT X',
      genre: 'FIGHTER',
      highScore: 9999999,
    },
    screenState: 'ATTRACT',
    gamesAvailable: [
      'ULTRA COMBAT X',
      'NEON FIGHTER III GOLD',
      'CYBER RACER PRO',
      'SPACE SHOOTER EX',
      'PUZZLE LEGENDS',
      'MEGA BRAWLER ULTIMATE',
    ],
    wallet: {
      credits: 9847,
      achievements: 247,
      totalPlaytime: '1,247h',
    },
    lastPlayed: '1 hour ago',
    playerAccount: 'PRO_GAMER_ELITE',
  },
};

// Beginner player
export const BeginnerPlayer = {
  args: {
    id: 'arcade-beginner-01',
    cabinetName: 'STARTER ARCADE',
    location: 'Community Center - Gaming Room',
    currentGame: {
      title: 'EASY FIGHTER',
      genre: 'FIGHTER',
      highScore: 12500,
    },
    screenState: 'PLAYING',
    gamesAvailable: [
      'EASY FIGHTER',
      'SIMPLE SHOOTER',
      'BASIC PUZZLES',
    ],
    wallet: {
      credits: 5,
      achievements: 1,
      totalPlaytime: '2h',
    },
    lastPlayed: 'Just now',
    playerAccount: 'NEWBIE_2025',
  },
};

// Bar arcade - attract mode
export const RetroBarArcade = {
  args: {
    id: 'arcade-bar-classic',
    cabinetName: 'CLASSIC KOMBAT',
    location: 'The Rusty Anchor - Back Corner',
    currentGame: {
      title: 'MORTAL KOMBAT CYBER',
      genre: 'FIGHTER',
      highScore: 654320,
    },
    screenState: 'ATTRACT',
    gamesAvailable: [
      'MORTAL KOMBAT CYBER',
      'STREET FIGHTER NEON',
      'GALAGA 2088',
      'DIG DUG DELUXE',
      'CENTIPEDE X',
      'MS. PAC-MAN',
    ],
    wallet: {
      credits: 156,
      achievements: 34,
      totalPlaytime: '78h',
    },
    lastPlayed: '3 days ago',
    playerAccount: 'OLD_SCHOOL_88',
  },
};

// Minimal setup
export const MinimalCabinet = {
  args: {
    id: 'arcade-minimal',
    cabinetName: 'BASIC ARCADE',
    location: 'Small Shop - Corner',
    currentGame: {
      title: 'DEMO GAME',
      genre: 'PUZZLE',
      highScore: 1000,
    },
    screenState: 'ATTRACT',
    gamesAvailable: [
      'PUZZLE GAME',
      'SHOOTER GAME',
    ],
    wallet: {
      credits: 10,
      achievements: 2,
      totalPlaytime: '5h',
    },
    lastPlayed: '1 week ago',
    playerAccount: 'PLAYER',
  },
};

// Casino arcade
export const CasinoArcade = {
  args: {
    id: 'arcade-casino-main',
    cabinetName: 'LUCKY FIGHTER GOLD',
    location: 'Lucky Flight Casino - Arcade Section',
    currentGame: {
      title: 'LUCKY COMBAT DELUXE',
      genre: 'FIGHTER',
      highScore: 7777777,
    },
    screenState: 'HIGH_SCORE',
    gamesAvailable: [
      'LUCKY COMBAT DELUXE',
      'FORTUNE RACER',
      'JACKPOT SHOOTER',
      'SLOT PUZZLE MANIA',
    ],
    wallet: {
      credits: 1456,
      achievements: 89,
      totalPlaytime: '456h',
    },
    lastPlayed: 'Just now',
    playerAccount: 'LUCKY_PLAYER_13',
  },
};

// No player logged in
export const NoPlayerGuest = {
  args: {
    id: 'arcade-public-01',
    cabinetName: 'PUBLIC ARCADE',
    location: 'Mall Food Court',
    currentGame: {
      title: 'FREE PLAY DEMO',
      genre: 'ATTRACT',
      highScore: 0,
    },
    screenState: 'ATTRACT',
    gamesAvailable: [
      'DEMO GAME 1',
      'DEMO GAME 2',
      'DEMO GAME 3',
    ],
    wallet: {
      credits: 0,
      achievements: 0,
      totalPlaytime: '0h',
    },
    lastPlayed: 'Never',
    playerAccount: 'GUEST',
  },
};
