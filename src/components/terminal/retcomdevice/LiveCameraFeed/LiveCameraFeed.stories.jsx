import LiveCameraFeed from './LiveCameraFeed';

export default {
  title: 'Terminal/LiveCameraFeed',
  component: LiveCameraFeed,
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
