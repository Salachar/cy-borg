import Tenet from './Tenet';

export default {
  title: 'Terminal/Tenet',
  component: Tenet,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Citizen ID number',
    },
    name: {
      control: 'text',
      description: 'Full name',
    },
    age: {
      control: 'number',
      description: 'Age',
    },
    dob: {
      control: 'text',
      description: 'Date of birth',
    },
    occupation: {
      control: 'text',
      description: 'Current job',
    },
    employer: {
      control: 'text',
      description: 'Company name',
    },
    district: {
      control: 'text',
      description: 'Where they live',
    },
    bio: {
      control: 'text',
      description: 'Personal bio/about section',
    },
    interests: {
      control: 'object',
      description: 'Array of interests/hobbies',
    },
    connections: {
      control: 'number',
      description: 'Number of connections',
    },
    status: {
      control: 'select',
      options: ['ACTIVE', 'SUSPENDED', 'DELETED'],
      description: 'Account status',
    },
    privacy: {
      control: 'select',
      options: ['PUBLIC', 'FRIENDS', 'PRIVATE'],
      description: 'Privacy level',
    },
  },
};

// Public profile - complete info
export const PublicProfile = {
  args: {
    id: 'CIT-45782',
    name: 'Sarah Chen',
    age: 32,
    dob: '04/15/1993',
    occupation: 'Senior Data Analyst',
    employer: 'Bigmosse Analytics Division',
    district: 'Downtown Financial District',
    bio: 'Data enthusiast, coffee addict, weekend hiker. Love exploring the city and trying new restaurants. Always looking to connect with fellow tech professionals!',
    interests: ['Data Science', 'Hiking', 'Photography', 'Coffee', 'Cybersecurity'],
    connections: 247,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Young professional
export const YoungProfessional = {
  args: {
    id: 'CIT-89234',
    name: 'Alex Rodriguez',
    age: 23,
    dob: '07/03/2002',
    occupation: 'Customer Service Representative',
    employer: 'CityLink Communications',
    district: 'Canal District',
    bio: 'Recent college grad trying to make it in the big city. Love gaming, music, and meeting new people. Hit me up if you want to grab drinks!',
    interests: ['Gaming', 'Music', 'Nightlife', 'Sports'],
    connections: 89,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Corporate executive
export const ExecutiveProfile = {
  args: {
    id: 'CIT-00012',
    name: 'Victoria Sterling',
    age: 45,
    dob: '11/22/1979',
    occupation: 'Vice President of Operations',
    employer: 'Bigmosse International',
    district: 'Skyline Towers, Penthouse District',
    bio: 'Executive leader passionate about innovation and sustainable growth. Board member, mentor, occasional speaker. Views are my own.',
    interests: ['Business Strategy', 'Leadership', 'Philanthropy', 'Art Collecting'],
    connections: 1834,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Blue collar worker
export const BlueCollarWorker = {
  args: {
    id: 'CIT-62471',
    name: 'James Park',
    age: 38,
    dob: '03/28/1987',
    occupation: 'Warehouse Security Guard',
    employer: 'SecureCargo Logistics',
    district: 'Ports District',
    bio: 'Hard worker, family man. Just trying to make an honest living. Not very active on here but check messages occasionally.',
    interests: ['Family', 'Fishing', 'Cars'],
    connections: 34,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Creative professional
export const CreativeProfile = {
  args: {
    id: 'CIT-77823',
    name: 'Luna Santiago',
    age: 28,
    dob: '09/12/1996',
    occupation: 'Freelance Graphic Designer',
    employer: 'Self-Employed',
    district: 'Arts District',
    bio: 'Visual storyteller and design enthusiast. Available for freelance work. Let\'s create something beautiful together! Portfolio in bio.',
    interests: ['Graphic Design', 'Digital Art', 'Music', 'Street Art', 'Fashion'],
    connections: 521,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Student
export const StudentProfile = {
  args: {
    id: 'CIT-91245',
    name: 'Sophia Nguyen',
    age: 21,
    dob: '04/22/2003',
    occupation: 'University Student',
    employer: 'Tech University',
    district: 'University District',
    bio: 'CS major, aspiring software engineer. Love coding, bubble tea, and late-night study sessions. Always looking for internship opportunities!',
    interests: ['Programming', 'Anime', 'Gaming', 'Robotics', 'Bubble Tea'],
    connections: 156,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Friends-only privacy
export const FriendsOnlyProfile = {
  args: {
    id: 'CIT-55123',
    name: 'Marcus Johnson',
    age: 44,
    dob: '09/30/1980',
    occupation: 'Corporate Security Officer',
    employer: 'Bigmosse Security',
    district: 'Security District 7',
    bio: 'Professional security specialist. Connect with me if we\'ve worked together.',
    interests: ['Security', 'Fitness', 'Martial Arts'],
    connections: 78,
    status: 'ACTIVE',
    privacy: 'FRIENDS',
  },
};

// Private profile
export const PrivateProfile = {
  args: {
    id: 'CIT-33456',
    name: 'Kevin Zhang',
    age: 29,
    occupation: 'Systems Administrator',
    employer: 'DataVault Systems',
    district: 'Tech Campus District',
    bio: 'I value my privacy.',
    interests: ['Privacy', 'Security'],
    connections: 12,
    status: 'ACTIVE',
    privacy: 'PRIVATE',
  },
};

// Suspended account
export const SuspendedAccount = {
  args: {
    id: 'CIT-71829',
    name: 'Michael Torres',
    age: 41,
    occupation: 'Floor Manager',
    employer: 'Apex Manufacturing',
    status: 'SUSPENDED',
    privacy: 'PUBLIC',
  },
};

// Deleted account
export const DeletedAccount = {
  args: {
    id: 'CIT-55923',
    name: 'Rachel Kim',
    age: 35,
    status: 'DELETED',
    privacy: 'PUBLIC',
  },
};

// Service worker
export const ServiceWorker = {
  args: {
    id: 'CIT-40812',
    name: 'Maria Santos',
    age: 47,
    dob: '06/08/1977',
    occupation: 'Small Business Owner',
    employer: 'Lucky Star Bodega',
    district: 'Stone Street',
    bio: 'Proud owner of Lucky Star Bodega for 15 years. Stop by for fresh coffee and a friendly chat! Open 24/7.',
    interests: ['Small Business', 'Community', 'Cooking', 'Family'],
    connections: 203,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Medical professional
export const MedicalProfessional = {
  args: {
    id: 'CIT-22334',
    name: 'Dr. Patricia Lewis',
    age: 42,
    dob: '03/17/1982',
    occupation: 'Chief Medical Officer',
    employer: 'VitalCorp Medical Center',
    district: 'Medical District',
    bio: 'Dedicated to improving healthcare access and quality. Board certified in Internal Medicine. Patient advocate and medical educator.',
    interests: ['Medicine', 'Public Health', 'Medical Research', 'Teaching'],
    connections: 891,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Retired person
export const RetiredCitizen = {
  args: {
    id: 'CIT-00891',
    name: 'Dorothy Martinez',
    age: 58,
    dob: '02/18/1966',
    occupation: 'Retired Accountant',
    employer: 'Formerly: Bigmosse Financial',
    district: 'Suburban District North',
    bio: 'Retired after 30+ years in finance. Now enjoying gardening, book club, and time with grandchildren. Life is good!',
    interests: ['Gardening', 'Reading', 'Cooking', 'Grandchildren', 'Travel'],
    connections: 412,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Minimal profile
export const MinimalProfile = {
  args: {
    id: 'CIT-99999',
    name: 'John Doe',
    age: 30,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Gig economy worker
export const GigWorker = {
  args: {
    id: 'CIT-66543',
    name: 'Brian Foster',
    age: 36,
    dob: '07/11/1988',
    occupation: 'Freelance Developer',
    employer: 'Multiple Clients',
    district: 'Remote Worker',
    bio: 'Full-stack developer available for contract work. Remote-first lifestyle. Always learning new technologies. Open to interesting projects!',
    interests: ['Web Development', 'Open Source', 'Tech Startups', 'Coffee', 'Remote Work'],
    connections: 334,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Influencer/creator
export const Influencer = {
  args: {
    id: 'CIT-77212',
    name: 'Neon Dreams (Lisa Park)',
    age: 25,
    dob: '05/30/1999',
    occupation: 'Content Creator',
    employer: 'Self-Employed / Sponsored',
    district: 'Entertainment District',
    bio: '✨ Lifestyle & Fashion Content Creator | 500K+ followers across platforms | Collab inquiries: neon.dreams@contact.com | Living my best life in the city! ✨',
    interests: ['Fashion', 'Photography', 'Travel', 'Nightlife', 'Beauty', 'Social Media'],
    connections: 2847,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Law enforcement
export const LawEnforcement = {
  args: {
    id: 'CIT-31092',
    name: 'Officer Frank Miller',
    age: 39,
    dob: '12/05/1985',
    occupation: 'Police Officer',
    employer: 'City Police Department',
    district: 'Downtown Precinct',
    bio: 'Serving and protecting our community. 12 years on the force. Family man and community volunteer.',
    interests: ['Community Service', 'Fitness', 'Public Safety'],
    connections: 167,
    status: 'ACTIVE',
    privacy: 'FRIENDS',
  },
};

// Underground/shady
export const ShadyProfile = {
  args: {
    id: 'CIT-88472',
    name: 'Saša Volkov',
    age: 34,
    dob: '08/21/1990',
    occupation: 'Import/Export Specialist',
    employer: 'Independent Contractor',
    district: 'Ports District',
    bio: 'Business consultant. Available for specialized projects. Discretion guaranteed.',
    interests: ['Business', 'Networking', 'Logistics'],
    connections: 421,
    status: 'ACTIVE',
    privacy: 'FRIENDS',
  },
};

// Artist
export const ArtistProfile = {
  args: {
    id: 'CIT-52341',
    name: 'Marco Rossi',
    age: 31,
    dob: '01/14/1994',
    occupation: 'Street Artist / Muralist',
    employer: 'Independent',
    district: 'Arts District',
    bio: 'Creating art that speaks to the soul of the city. Commission work available. Check out my latest murals around downtown!',
    interests: ['Street Art', 'Graffiti', 'Urban Culture', 'Music', 'Skateboarding'],
    connections: 678,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Bartender/nightlife
export const NightlifeWorker = {
  args: {
    id: 'CIT-63829',
    name: 'Charlie Stone',
    age: 29,
    dob: '10/08/1995',
    occupation: 'Head Bartender',
    employer: 'Cave Club',
    district: 'Entertainment District',
    bio: 'Master mixologist and nightlife enthusiast. If you see me behind the bar, first drink is on the house (friends only). Living for the weekend!',
    interests: ['Mixology', 'Electronic Music', 'Nightlife', 'DJing', 'Parties'],
    connections: 1243,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};

// Teacher/educator
export const Educator = {
  args: {
    id: 'CIT-41276',
    name: 'Amanda Gray',
    age: 37,
    dob: '02/25/1987',
    occupation: 'High School Teacher',
    employer: 'City Public Schools',
    district: 'Residential District East',
    bio: 'Teaching Computer Science to the next generation. Passionate about STEM education and helping students reach their potential.',
    interests: ['Education', 'Technology', 'Reading', 'Mentorship', 'Science'],
    connections: 289,
    status: 'ACTIVE',
    privacy: 'PUBLIC',
  },
};
