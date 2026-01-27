import CommercialCamera from './CommercialCamera';
import LiveCameraFeed from './LiveCameraFeed';

// ============================================================================
// COMMERCIAL CAMERA STORIES
// ============================================================================

export default {
  title: 'Terminal/CommercialCamera',
  component: CommercialCamera,
  tags: ['autodocs'],
  argTypes: {
    location: {
      control: 'text',
      description: 'Camera location description',
    },
    cameraId: {
      control: 'text',
      description: 'Camera system identifier',
    },
    status: {
      control: 'select',
      options: ['ACTIVE', 'OFFLINE', 'RECORDING', 'MAINTENANCE'],
      description: 'Camera operational status',
    },
    coverage: {
      control: 'text',
      description: 'Coverage area description',
    },
    details: {
      control: 'object',
      description: 'Array of technical specification strings',
    },
    alerts: {
      control: 'object',
      description: 'Array of recent activity alerts {time, message}',
    },
    lastMaintenance: {
      control: 'text',
      description: 'Last maintenance date',
    },
  },
};

// Restaurant VIP area camera
export const RestaurantVIP = {
  args: {
    location: 'VIP Private Rooms',
    cameraId: 'CAM-VIP-01',
    status: 'ACTIVE (PRIVACY MODE: Obsidian Suite)',
    coverage: 'Pearl Room, Obsidian Suite, Diamond Terrace',
    details: [
      '4 cameras (1 per room + corridor)',
      'Privacy mode can be enabled by guests',
      'Corridor camera always active (security)',
      'Facial recognition enabled for guest verification',
    ],
    alerts: [
      {
        time: '18:30',
        message: 'Privacy mode activated: Obsidian Suite (V. Cross)',
      },
      {
        time: '19:05',
        message: 'Security personnel entered Pearl Room (prep)',
      },
    ],
    lastMaintenance: '3 days ago',
  },
};

// Corporate office camera
export const CorporateOffice = {
  args: {
    location: 'Executive Floor - Main Corridor',
    cameraId: 'CAM-EXEC-12',
    status: 'RECORDING',
    coverage: 'Executive offices, conference rooms, elevator access',
    details: [
      'High-resolution 4K recording',
      'Night vision capable (IR 850nm)',
      'Audio recording disabled (privacy compliance)',
      'Motion tracking with object recognition',
      'Encrypted storage with 90-day retention',
    ],
    alerts: [
      {
        time: '08:45',
        message: 'Executive arrival detected: CEO Winters',
      },
      {
        time: '14:20',
        message: 'Conference room 3 reserved - Privacy mode requested',
      },
      {
        time: '17:30',
        message: 'After-hours access logged: Maintenance crew verified',
      },
    ],
    lastMaintenance: '1 week ago',
  },
};

// ============================================================================
// LIVE CAMERA FEED STORIES
// ============================================================================

export const LiveCameraFeedStories = {
  title: 'LiveCameraFeed',
  component: LiveCameraFeed,
  tags: ['autodocs'],
  argTypes: {
    location: {
      control: 'text',
      description: 'Location identifier for the hacked camera feed',
    },
  },
};

// Dining floor feed
export const DiningFloorFeed = {
  args: {
    location: 'Main Dining Floor',
  },
};

// VIP rooms feed
export const VIPRoomsFeed = {
  args: {
    location: 'VIP Private Rooms',
  },
};

// Kitchen feed
export const KitchenFeed = {
  args: {
    location: 'Kitchen & Back of House',
  },
};
