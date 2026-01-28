import PersonnelFile from './PersonnelFile';

export default {
  title: 'Terminal/PersonnelFile',
  component: PersonnelFile,
};

// Standard employee - good standing
export const StandardEmployee = {
  args: {
    employeeId: 'EMP-45782',
    name: 'Sarah Chen',
    age: 32,
    dob: '04/15/1993',
    position: 'Senior Data Analyst',
    department: 'Analytics & Reporting',
    hireDate: '06/12/2019',
    supervisor: 'Marcus Webb',
    clearanceLevel: 2,
    district: 'Downtown Financial District',
    emergencyContact: 'David Chen (Spouse) - 555-0142',
    performance: 87,
    notes: [
      'Promoted from Junior Analyst 03/2021',
      'Completed Advanced Analytics Training 08/2023',
    ],
    status: 'ACTIVE',
  },
};

// High clearance executive
export const ExecutiveEmployee = {
  args: {
    employeeId: 'EMP-00012',
    name: 'Victoria Sterling',
    age: 45,
    dob: '11/22/1979',
    position: 'Vice President of Operations',
    department: 'Executive Leadership',
    hireDate: '01/08/2015',
    supervisor: 'CEO - Robert Alliansen',
    clearanceLevel: 5,
    district: 'Skyline Towers, Penthouse District',
    emergencyContact: 'Legal Team - 555-EXEC',
    performance: 95,
    notes: [
      'Board member since 2018',
      'Authorized for all facility access',
      'Requires executive security escort',
    ],
    status: 'ACTIVE',
  },
};

// Entry level employee
export const EntryLevel = {
  args: {
    employeeId: 'EMP-89234',
    name: 'Alex Rodriguez',
    age: 23,
    dob: '07/03/2002',
    position: 'Customer Service Representative',
    department: 'Customer Support',
    hireDate: '09/15/2024',
    supervisor: 'Jennifer Park',
    clearanceLevel: 1,
    district: 'Canal District',
    emergencyContact: 'Maria Rodriguez (Mother) - 555-7823',
    performance: 72,
    notes: [
      'Currently in 90-day probationary period',
      'Attended new hire orientation 09/16/2024',
    ],
    status: 'ACTIVE',
  },
};

// Warehouse worker
export const WarehouseWorker = {
  args: {
    employeeId: 'EMP-62471',
    name: 'James Park',
    age: 38,
    dob: '03/28/1987',
    position: 'Warehouse Guard',
    department: 'Security & Logistics',
    hireDate: '11/20/2020',
    supervisor: 'Security Chief - Tom Harris',
    clearanceLevel: 2,
    district: 'Ports District',
    emergencyContact: 'Emily Park (Wife) - 555-9012',
    performance: 68,
    notes: [
      'Certified in forklift operation',
      'Recent attendance issues noted - 3 late arrivals in Q4 2024',
      'Scheduled for performance review 02/2025',
    ],
    status: 'ACTIVE',
  },
};

// IT admin with high clearance
export const ITAdministrator = {
  args: {
    employeeId: 'EMP-33456',
    name: 'Kevin Zhang',
    age: 29,
    dob: '08/14/1995',
    position: 'Systems Administrator',
    department: 'Information Technology',
    hireDate: '04/01/2021',
    supervisor: 'IT Director - Lisa Morgan',
    clearanceLevel: 4,
    district: 'Tech Campus District',
    emergencyContact: 'Lin Zhang (Sister) - 555-3344',
    performance: 91,
    notes: [
      'Access to all corporate systems',
      'On-call rotation - responds to critical incidents',
      'Security clearance updated 01/2024',
    ],
    status: 'ACTIVE',
  },
};

// Suspended employee
export const SuspendedEmployee = {
  args: {
    employeeId: 'EMP-71829',
    name: 'Michael Torres',
    age: 41,
    dob: '12/09/1983',
    position: 'Floor Manager',
    department: 'Manufacturing',
    hireDate: '05/18/2017',
    supervisor: 'Plant Director - Carol Stevens',
    clearanceLevel: 2,
    district: 'Industrial Zone East',
    emergencyContact: 'Susan Torres (Ex-Wife) - 555-8877',
    performance: 55,
    notes: [
      'SUSPENDED: Pending investigation into safety violation',
      'Incident date: 01/10/2025',
      'HR investigation in progress - Security clearance temporarily revoked',
      'Expected resolution: 02/15/2025',
    ],
    status: 'SUSPENDED',
  },
};

// Terminated employee
export const TerminatedEmployee = {
  args: {
    employeeId: 'EMP-55923',
    name: 'Rachel Kim',
    age: 35,
    dob: '06/21/1989',
    position: 'Marketing Coordinator',
    department: 'Marketing & Communications',
    hireDate: '02/14/2022',
    supervisor: 'Marketing Director - Steve Johnson',
    clearanceLevel: 1,
    district: 'Downtown Arts District',
    emergencyContact: 'John Kim (Brother) - 555-2211',
    performance: 42,
    notes: [
      'TERMINATED: Performance improvement plan failed',
      'Termination date: 12/20/2024',
      'Final paycheck processed',
      'All access credentials revoked',
      'Exit interview completed',
    ],
    status: 'TERMINATED',
  },
};

// Security personnel
export const SecurityOfficer = {
  args: {
    employeeId: 'EMP-40012',
    name: 'Marcus Johnson',
    age: 44,
    dob: '09/30/1980',
    position: 'Corporate Security Officer',
    department: 'Security Operations',
    hireDate: '07/01/2016',
    supervisor: 'Security Director - Frank Miller',
    clearanceLevel: 3,
    district: 'Security District 7',
    emergencyContact: 'Angela Johnson (Wife) - 555-4455',
    performance: 83,
    notes: [
      'Former law enforcement - 10 years NYPD',
      'Armed security certified',
      'Cleared for executive protection details',
    ],
    status: 'ACTIVE',
  },
};

// No clearance employee
export const NoClearance = {
  args: {
    employeeId: 'EMP-92341',
    name: 'Tommy Lee',
    age: 19,
    dob: '05/15/2005',
    position: 'Janitor',
    department: 'Facilities & Maintenance',
    hireDate: '10/01/2024',
    supervisor: 'Facilities Manager - Bob Smith',
    clearanceLevel: 'NONE',
    district: 'South Residential',
    emergencyContact: 'Grace Lee (Mother) - 555-6677',
    performance: 78,
    notes: [
      'Part-time position - 20 hours per week',
      'Evening shift only',
    ],
    status: 'ACTIVE',
  },
};

// Long-term veteran employee
export const VeteranEmployee = {
  args: {
    employeeId: 'EMP-00234',
    name: 'Dorothy Martinez',
    age: 58,
    dob: '02/18/1966',
    position: 'Senior Accountant',
    department: 'Finance & Accounting',
    hireDate: '03/15/2001',
    supervisor: 'CFO - William Chen',
    clearanceLevel: 3,
    district: 'Suburban District North',
    emergencyContact: 'Carlos Martinez (Husband) - 555-9988',
    performance: 89,
    notes: [
      '23 years of service',
      'Eligible for retirement benefits',
      'Perfect attendance award 2018, 2020, 2022',
      'Mentors junior accountants',
    ],
    status: 'ACTIVE',
  },
};

// Contractor/temporary
export const ContractWorker = {
  args: {
    employeeId: 'CON-78654',
    name: 'Elena Volkov',
    age: 31,
    dob: '11/08/1993',
    position: 'Contract Software Developer',
    department: 'IT - Development',
    hireDate: '01/15/2025',
    supervisor: 'Dev Team Lead - Amy Chen',
    clearanceLevel: 2,
    district: 'Tech Campus',
    emergencyContact: 'Dmitri Volkov (Brother) - 555-3366',
    performance: 85,
    notes: [
      'CONTRACT POSITION - 6 month term',
      'Specializes in cybersecurity',
      'Contract end date: 07/15/2025',
      'May be extended based on project needs',
    ],
    status: 'ACTIVE',
  },
};

// Intern
export const InternEmployee = {
  args: {
    employeeId: 'INT-12345',
    name: 'Sophia Nguyen',
    age: 21,
    dob: '04/22/2003',
    position: 'Summer Intern - Marketing',
    department: 'Marketing & Communications',
    hireDate: '06/01/2024',
    supervisor: 'Marketing Manager - Lisa Park',
    clearanceLevel: 1,
    district: 'University District',
    emergencyContact: 'Minh Nguyen (Father) - 555-7766',
    notes: [
      'INTERNSHIP PROGRAM - 12 weeks',
      'University of Tech - Senior year',
      'Expected graduation: May 2025',
      'Strong performance - potential full-time hire',
    ],
    status: 'ACTIVE',
  },
};

// Remote worker
export const RemoteEmployee = {
  args: {
    employeeId: 'EMP-66789',
    name: 'Brian Foster',
    age: 36,
    dob: '07/11/1988',
    position: 'Senior UX Designer',
    department: 'Product Design',
    hireDate: '08/20/2022',
    supervisor: 'Design Director - Amanda Gray',
    clearanceLevel: 2,
    district: 'Remote - West Coast',
    emergencyContact: 'Sarah Foster (Wife) - 555-4433',
    performance: 92,
    notes: [
      'REMOTE EMPLOYEE - Works from home office',
      'Visits HQ quarterly for team meetings',
      'Strong collaborator across time zones',
    ],
    status: 'ACTIVE',
  },
};

// Minimal information
export const MinimalFile = {
  args: {
    employeeId: 'EMP-99999',
    name: 'John Doe',
    age: 30,
    dob: '01/01/1995',
    position: 'Staff',
    department: 'General',
    hireDate: '01/01/2025',
    supervisor: 'Manager',
    clearanceLevel: 1,
    district: 'Unknown',
    status: 'ACTIVE',
  },
};

// Casino employee
export const CasinoEmployee = {
  args: {
    employeeId: 'EMP-54312',
    name: 'Daniel Rivera',
    age: 27,
    dob: '09/05/1997',
    position: 'Pit Boss',
    department: 'Gaming Operations',
    hireDate: '03/10/2023',
    supervisor: 'Casino Manager - Frank Stone',
    clearanceLevel: 3,
    district: 'Canal District',
    emergencyContact: 'Isabella Rivera (Sister) - 555-8899',
    performance: 81,
    notes: [
      'Gaming license verified and current',
      'Trained in fraud detection',
      'Handles high-stakes tables',
      'Background check cleared 02/2023',
    ],
    status: 'ACTIVE',
  },
};

// Medical staff
export const MedicalStaff = {
  args: {
    employeeId: 'EMP-22334',
    name: 'Dr. Patricia Lewis',
    age: 42,
    dob: '03/17/1982',
    position: 'Chief Medical Officer',
    department: 'Medical Services',
    hireDate: '09/01/2018',
    supervisor: 'Operations Director - James Wilson',
    clearanceLevel: 4,
    district: 'Medical District',
    emergencyContact: 'Hospital Admin - 555-MEDIC',
    performance: 94,
    notes: [
      'Board certified - Internal Medicine',
      'Access to patient records system',
      'HIPAA compliance training current',
      'Oversees 15 medical staff',
    ],
    status: 'ACTIVE',
  },
};
