import BiometricRecognition from './BiometricRecognition';

export default {
  title: 'Terminal/BiometricRecognition',
  component: BiometricRecognition,
};

// Cave Club - Charlie Sand detention scenario
export const CharlieDetained = {
  args: {
    id: 'cave-club-biorecog',
    systemName: 'BIOMETRIC RECOGNITION SYSTEM',
    location: 'Cave Club - Security Network',
    lastCalibration: '3 weeks ago',
    confidence: '85%',
    scans: [
      {
        timestamp: '18:30:47',
        result: 'FAILED',
        confidence: 34,
        details: 'Face: PARTIALLY OBSCURED (unconscious, head down), Gait: N/A (carried), Retinal: FAILED (eyes closed)',
        source: 'Camera 07 - Back Room Entrance',
        notes: 'Subject appears unconscious, carried by two guards',
      },
      {
        timestamp: '18:32:15',
        result: 'OVERRIDE',
        name: 'Charlie Sand',
        source: 'Security Terminal - SaÅ¡a Override',
        notes: 'DETAINED - Unauthorized intel gathering, Risk Level: MEDIUM',
      },
      {
        timestamp: '20:15:33',
        result: 'MATCHED',
        name: 'Kova Milic',
        confidence: 94,
        source: 'Camera 03 - VIP Entrance',
        notes: 'Stone Eels lieutenant - VIP access confirmed',
      },
      {
        timestamp: '22:47:22',
        result: 'MATCHED',
        name: 'SaÅ¡a',
        confidence: 98,
        source: 'Camera 09 - Office Entrance',
      },
    ],
  },
};

// High security facility with mostly successful scans
export const CorporateFacility = {
  args: {
    id: 'alliansen-biorecog',
    systemName: 'ALLIANSEN BIOMETRIC ACCESS',
    location: 'Alliansen Warehouse - Main Security',
    lastCalibration: '1 week ago',
    confidence: '92%',
    scans: [
      {
        timestamp: '08:15:23',
        result: 'MATCHED',
        name: 'Dr. Helena Voss',
        confidence: 96,
        source: 'Camera 01 - Main Entrance',
        notes: 'Senior Researcher - Full access',
      },
      {
        timestamp: '08:47:11',
        result: 'MATCHED',
        name: 'Marcus Webb',
        confidence: 91,
        source: 'Camera 02 - Loading Bay',
        notes: 'Warehouse Supervisor - Standard access',
      },
      {
        timestamp: '09:23:45',
        result: 'PARTIAL',
        name: 'Unknown Individual',
        confidence: 67,
        source: 'Camera 01 - Main Entrance',
        details: 'Face mask detected - Security protocol 7A triggered',
        notes: 'Flagged for manual review',
      },
      {
        timestamp: '10:05:18',
        result: 'MATCHED',
        name: 'Sarah Chen',
        confidence: 89,
        source: 'Camera 04 - R&D Wing',
        notes: 'Research Assistant - R&D access only',
      },
    ],
  },
};

// Degraded system with many failures
export const MalfunctioningSystem = {
  args: {
    id: 'old-system-biorecog',
    systemName: 'LEGACY BIOMETRIC SCANNER',
    location: 'Abandoned Office Building - Floor 3',
    lastCalibration: '8 months ago',
    confidence: '65%',
    scans: [
      {
        timestamp: '15:23:11',
        result: 'FAILED',
        confidence: 23,
        source: 'Camera 01 - Lobby',
        details: 'Low light conditions, face not visible',
        notes: 'System degraded - recommend recalibration',
      },
      {
        timestamp: '16:47:33',
        result: 'FAILED',
        confidence: 41,
        source: 'Camera 02 - Hallway',
        details: 'Motion blur, subject moving too fast',
      },
      {
        timestamp: '17:12:05',
        result: 'PARTIAL',
        name: 'Possible match: J. Morrison',
        confidence: 58,
        source: 'Camera 01 - Lobby',
        details: 'Partial face visible, low confidence',
        notes: 'WARNING - Below threshold',
      },
      {
        timestamp: '18:05:42',
        result: 'FAILED',
        confidence: 12,
        source: 'Camera 03 - Stairwell',
        details: 'Camera obstruction detected',
      },
    ],
  },
};

// Minimal scans - quiet location
export const QuietLocation = {
  args: {
    id: 'quiet-biorecog',
    systemName: 'RESIDENTIAL BIOMETRIC SYSTEM',
    location: 'Apartment Complex - Building C',
    lastCalibration: '2 days ago',
    confidence: '88%',
    scans: [
      {
        timestamp: '07:45:22',
        result: 'MATCHED',
        name: 'David Park',
        confidence: 95,
        source: 'Camera 01 - Main Door',
        notes: 'Resident - Unit 3C',
      },
      {
        timestamp: '19:23:15',
        result: 'MATCHED',
        name: 'David Park',
        confidence: 93,
        source: 'Camera 01 - Main Door',
        notes: 'Resident returning home',
      },
    ],
  },
};

// No scans yet
export const NoActivity = {
  args: {
    id: 'new-biorecog',
    systemName: 'BIOMETRIC RECOGNITION SYSTEM',
    location: 'New Installation - Office Complex',
    lastCalibration: 'Today',
    confidence: '90%',
    scans: [],
  },
};

// VIP club with override activity
export const VIPClubSecurity = {
  args: {
    id: 'vip-club-biorecog',
    systemName: 'ELITE CLUB BIOMETRICS',
    location: 'Neon Heights VIP Club - Security Hub',
    lastCalibration: '5 days ago',
    confidence: '94%',
    scans: [
      {
        timestamp: '22:15:47',
        result: 'MATCHED',
        name: 'Alexei Volkov',
        confidence: 97,
        source: 'Camera 01 - VIP Entrance',
        notes: 'High-value patron - Diamond tier',
      },
      {
        timestamp: '22:47:33',
        result: 'OVERRIDE',
        name: 'Mystery Guest',
        source: 'Security Override - Management',
        notes: 'VIP guest - no scan required per management directive',
      },
      {
        timestamp: '23:12:05',
        result: 'PARTIAL',
        name: 'Possible match: L. Martinez',
        confidence: 72,
        source: 'Camera 02 - Side Entrance',
        details: 'Sunglasses detected - removed, rescan successful',
        notes: 'Verified after accessory removal',
      },
      {
        timestamp: '00:05:18',
        result: 'MATCHED',
        name: 'Nina Cross',
        confidence: 91,
        source: 'Camera 01 - VIP Entrance',
        notes: 'Regular patron - Platinum tier',
      },
      {
        timestamp: '01:23:44',
        result: 'FAILED',
        confidence: 19,
        source: 'Camera 03 - Back Exit',
        details: 'Face covered, attempted entry denied',
        notes: 'FLAGGED - Security notified',
      },
    ],
  },
};
