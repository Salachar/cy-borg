// CY_BORG Base Character Class
// Abilities: Agility, Knowledge, Presence, Strength, Toughness
// Ability scores range from -3 to +3

class BaseClass {
  _name = "";
  _max_health = 0;
  _current_health = 0;
  _stat_points = 0; // For manual adjustment if needed
  _credits = 0;
  _glitches = 0;

  _stats = {
    AGI: 0, // Agility - Sneak, dodge, drive, autofire
    KNO: 0, // Knowledge - Science, use tech or App
    PRE: 0, // Presence - Snipe/shoot, use Nano, charm
    STR: 0, // Strength - Strike, grapple, lift, throw
    TOU: 0, // Toughness - Survive falling, poison, and elements
  };

  _selected_tables = {}; // Generic table selections: { table_name: { entry_name: true } }
  _gear = {}; // Gear selections: { section_name: { item_id: { quantity: 1, selected: true } } }
  _style = {}; // Style selections: { section_name: { item_id: true } }
  _starting_items = {}; // Starting items selections: { section_name: { item_id: true } }

  _locked = false;

  constructor(data = {}) {
    this.id = data.id || crypto.randomUUID();
    this._name = data.name || "";

    this._stats = data.stats || {
      AGI: 0,
      KNO: 0,
      PRE: 0,
      STR: 0,
      TOU: 0,
    };

    if (typeof data.current_health === "number") {
      this._current_health = data.current_health;
    } else {
      // Start with a reasonable default (will be set manually based on Toughness + die roll)
      this._current_health = 1;
    }

    if (typeof data.stat_points === "number") {
      this._stat_points = data.stat_points;
    }

    if (typeof data.credits === "number") {
      this._credits = data.credits;
    }

    if (typeof data.glitches === "number") {
      this._glitches = data.glitches;
    }

    if (data.selected_tables && Object.keys(data.selected_tables).length) {
      this._selected_tables = data.selected_tables;
    }

    if (data.gear && Object.keys(data.gear).length) {
      this._gear = data.gear;
    }

    if (data.style && Object.keys(data.style).length) {
      this._style = data.style;
    }

    if (data.starting_items && Object.keys(data.starting_items).length) {
      this._starting_items = data.starting_items;
    }

    if (data.locked) {
      this._locked = true;
    }
  }

  #checkStatPoints(stat, new_value) {
    // CY_BORG allows -3 to +3
    if (new_value < -3 || new_value > 3) return false;
    return true;
  }

  // Lock/unlock character sheet
  get locked() {
    return this._locked;
  }

  toggleLock() {
    this._locked = !this._locked;
    if (this._locked) {
      this._max_health = this._current_health;
    }
  }

  // Class information
  get class_id() {
    return this.constructor.id;
  }

  get color() {
    return this.constructor.color;
  }

  get class() {
    return this.constructor.class;
  }

  get description() {
    return this.constructor.description;
  }

  // Character name
  get name() {
    return this._name;
  }

  set name(new_name) {
    this._name = new_name;
  }

  // Health
  get max_health() {
    // In CY_BORG, max health is set at character creation (Toughness + die roll)
    // We use current_health as max since it's manually set
    if (!this._locked) return this._current_health;
    return this._max_health;
  }

  get current_health() {
    return this._current_health;
  }

  set current_health(new_health) {
    if (new_health < 0) new_health = 0;
    this._current_health = new_health;
  }

  // Credits
  get credits() {
    return this._credits;
  }

  set credits(new_credits) {
    if (new_credits < 0) new_credits = 0;
    this._credits = new_credits;
  }

  // Glitches
  get glitches() {
    return this._glitches;
  }

  set glitches(new_glitches) {
    if (new_glitches < 0) new_glitches = 0;
    this._glitches = new_glitches;
  }

  // Stats
  get stats() {
    return this._stats;
  }

  // Agility
  get agi() {
    return this._stats.AGI;
  }

  set agi(new_value) {
    const check = this.#checkStatPoints("AGI", new_value);
    if (!check) return;
    this._stats.AGI = new_value;
  }

  // Knowledge
  get kno() {
    return this._stats.KNO;
  }

  set kno(new_value) {
    const check = this.#checkStatPoints("KNO", new_value);
    if (!check) return;
    this._stats.KNO = new_value;
  }

  // Presence
  get pre() {
    return this._stats.PRE;
  }

  set pre(new_value) {
    const check = this.#checkStatPoints("PRE", new_value);
    if (!check) return;
    this._stats.PRE = new_value;
  }

  // Strength
  get str() {
    return this._stats.STR;
  }

  set str(new_value) {
    const check = this.#checkStatPoints("STR", new_value);
    if (!check) return;
    this._stats.STR = new_value;
  }

  // Toughness
  get tou() {
    return this._stats.TOU;
  }

  set tou(new_value) {
    const check = this.#checkStatPoints("TOU", new_value);
    if (!check) return;
    this._stats.TOU = new_value;
  }

  get stat_points() {
    return this._stat_points;
  }

  // Generic tables system
  get selected_tables() {
    return this._selected_tables;
  }

  getTableSelections(table_name) {
    return this._selected_tables[table_name] || {};
  }

  getTableSelectionsAmount(table_name) {
    const selections = this.getTableSelections(table_name);
    return Object.keys(selections).length;
  }

  setTableSelection(table_name, entry, select_mode = "single") {
    // Get entry identifier - prefer id, fall back to label or name
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    // Initialize table if it doesn't exist
    if (!this._selected_tables[table_name]) {
      this._selected_tables[table_name] = {};
    }

    const current = this._selected_tables[table_name];

    // If already selected, deselect it
    if (current[entry_id]) {
      delete current[entry_id];
      return;
    }

    // Handle selection based on mode
    if (select_mode === "single") {
      // Single mode: clear all others and set this one
      this._selected_tables[table_name] = { [entry_id]: true };
    } else if (select_mode === "multiple") {
      // Multiple mode: just add this one
      current[entry_id] = true;
    }
  }

  // Gear system (with quantities for future-proofing)
  get gear() {
    return this._gear;
  }

  getGearSelections(section_name) {
    const section = this._gear[section_name] || {};
    // Convert to simple {id: true} format for compatibility with RollableTable
    const selections = {};
    Object.keys(section).forEach((id) => {
      if (section[id].selected) {
        selections[id] = true;
      }
    });
    return selections;
  }

  setGearSelection(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    // Initialize section if it doesn't exist
    if (!this._gear[section_name]) {
      this._gear[section_name] = {};
    }

    const current = this._gear[section_name][entry_id];

    // Toggle selection
    if (current && current.selected) {
      delete this._gear[section_name][entry_id];
    } else {
      this._gear[section_name][entry_id] = {
        quantity: 1, // Future-proof for multiple items
        selected: true,
      };
    }
  }

  // Style/flavor system (single selection per section)
  get style() {
    return this._style;
  }

  getStyleSelections(section_name) {
    return this._style[section_name] || {};
  }

  setStyleSelection(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    // Initialize section if it doesn't exist
    if (!this._style[section_name]) {
      this._style[section_name] = {};
    }

    const current = this._style[section_name];

    // If already selected, deselect it
    if (current[entry_id]) {
      delete this._style[section_name][entry_id];
    } else {
      // Single selection: clear all others and set this one
      this._style[section_name] = { [entry_id]: true };
    }
  }

  // Starting items system (single selection per section)
  get starting_items() {
    return this._starting_items;
  }

  getStartingItemsSelections(section_name) {
    return this._starting_items[section_name] || {};
  }

  setStartingItemsSelection(section_name, entry) {
    const entry_id = entry.id || entry.label || entry.name;
    if (!entry_id) return;

    // Initialize section if it doesn't exist
    if (!this._starting_items[section_name]) {
      this._starting_items[section_name] = {};
    }

    const current = this._starting_items[section_name];

    // If already selected, deselect it
    if (current[entry_id]) {
      delete this._starting_items[section_name][entry_id];
    } else {
      // Single selection: clear all others and set this one
      this._starting_items[section_name] = { [entry_id]: true };
    }
  }

  // Serialize character to JSON
  toJSON() {
    return {
      id: this.id,
      locked: this.locked,
      class: this.class,
      name: this.name,
      current_health: this.current_health,
      credits: this.credits,
      glitches: this.glitches,
      selected_tables: this.selected_tables,
      gear: this.gear,
      style: this.style,
      starting_items: this.starting_items,
      stats: this.stats,
      stat_points: this.stat_points,
    };
  }
}

export default BaseClass;
