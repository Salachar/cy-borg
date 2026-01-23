import RelatedCommands from './RelatedCommands';

export default {
  title: 'Terminal/RelatedCommands',
  component: RelatedCommands,
  tags: ['autodocs'],
  argTypes: {
    commands: {
      control: 'object',
      description: 'Array of command name strings',
    },
    onSelect: {
      description: 'Callback when a command is clicked',
    },
    flatCommands: {
      control: 'object',
      description: 'Flattened command lookup object',
    },
  },
};

// Standard related commands
export const StandardCommands = {
  args: {
    commands: ['employee_records', 'financial_reports', 'security_logs', 'camera_feed', 'exit'],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      employee_records: { password: null },
      financial_reports: { password: 'ADMIN' },
      security_logs: { password: null },
      camera_feed: { password: 'SECURE' },
      exit: { password: null },
    },
  },
};

// Short command list
export const ShortList = {
  args: {
    commands: ['read', 'delete', 'back'],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      read: { password: null },
      delete: { password: 'CONFIRM' },
      back: { password: null },
    },
  },
};

// Long command list
export const LongList = {
  args: {
    commands: [
      'view_personnel_files',
      'access_security_system',
      'open_safe_door',
      'check_inventory',
      'review_shift_schedule',
      'maintenance_panel',
      'network_diagnostics',
      'camera_playback',
      'alarm_history',
      'exit_system',
    ],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      view_personnel_files: { password: null },
      access_security_system: { password: 'ADMIN' },
      open_safe_door: { password: 'VAULT' },
      check_inventory: { password: null },
      review_shift_schedule: { password: null },
      maintenance_panel: { password: 'TECH' },
      network_diagnostics: { password: null },
      camera_playback: { password: 'SECURITY' },
      alarm_history: { password: null },
      exit_system: { password: null },
    },
  },
};

// All password protected
export const AllPasswordProtected = {
  args: {
    commands: ['admin_panel', 'root_access', 'delete_logs', 'override_system'],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      admin_panel: { password: 'ADMIN' },
      root_access: { password: 'ROOT' },
      delete_logs: { password: 'CONFIRM' },
      override_system: { password: 'MASTER' },
    },
  },
};

// No passwords
export const NoPasswords = {
  args: {
    commands: ['view_menu', 'check_hours', 'location_info', 'contact_support', 'exit'],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      view_menu: { password: null },
      check_hours: { password: null },
      location_info: { password: null },
      contact_support: { password: null },
      exit: { password: null },
    },
  },
};

// Mixed long names
export const MixedLongNames = {
  args: {
    commands: [
      'quick',
      'access_the_restricted_employee_personnel_database',
      'view',
      'initiate_emergency_lockdown_protocol',
      'exit',
    ],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      quick: { password: null },
      access_the_restricted_employee_personnel_database: { password: 'SECURE' },
      view: { password: null },
      initiate_emergency_lockdown_protocol: { password: 'EMERGENCY' },
      exit: { password: null },
    },
  },
};

// Single command
export const SingleCommand = {
  args: {
    commands: ['continue'],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      continue: { password: null },
    },
  },
};

// Casino commands
export const CasinoCommands = {
  args: {
    commands: ['view_floor_cams', 'check_dealer_stats', 'vip_guest_list', 'revenue_report', 'exit'],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      view_floor_cams: { password: null },
      check_dealer_stats: { password: null },
      vip_guest_list: { password: 'VIP' },
      revenue_report: { password: 'FINANCE' },
      exit: { password: null },
    },
  },
};

// Warehouse commands
export const WarehouseCommands = {
  args: {
    commands: ['inventory_check', 'open_container_7b', 'guard_schedule', 'security_override', 'logout'],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {
      inventory_check: { password: null },
      open_container_7b: { password: 'CARGO' },
      guard_schedule: { password: null },
      security_override: { password: 'MASTER' },
      logout: { password: null },
    },
  },
};

// Empty (edge case - should render nothing)
export const EmptyList = {
  args: {
    commands: [],
    onSelect: (cmd) => console.log('Selected command:', cmd),
    flatCommands: {},
  },
};
