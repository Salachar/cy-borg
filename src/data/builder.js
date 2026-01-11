import ShunnedNanomancer from "./ShunnedNanomancer";
import BurnedHacker from "./BurnedHacker";
import DischargedCorpKiller from "./DischargedCorpKiller";
import OrphanedGearhead from "./OrphanedGearhead";
import RenegadeCyberslasher from "./RenegadeCyberslasher";
import ForsakenGangGoon from "./ForsakenGangGoon";

export const CLASS_MAP = {
  [ShunnedNanomancer.class]: ShunnedNanomancer,
  [BurnedHacker.class]: BurnedHacker,
  [DischargedCorpKiller.class]: DischargedCorpKiller,
  [OrphanedGearhead.class]: OrphanedGearhead,
  [RenegadeCyberslasher.class]: RenegadeCyberslasher,
  [ForsakenGangGoon.class]: ForsakenGangGoon,
};

const NanoMancerInstance = new ShunnedNanomancer();
const BurnedHackerInstance  = new BurnedHacker();
const DischargedCorpKillerInstance  = new DischargedCorpKiller();
const OrphanedGearheadInstance  = new OrphanedGearhead();
const RenegadeCyberslasherInstance  = new RenegadeCyberslasher();
const ForsakenGangGoonInstance  = new ForsakenGangGoon();

export const CLASSES = [
  {
    id: NanoMancerInstance.class_id,
    constructor: ShunnedNanomancer,
    instance: NanoMancerInstance,
  },
  {
    id: BurnedHackerInstance.class_id,
    constructor: BurnedHacker,
    instance: BurnedHackerInstance,
  },
  {
    id: DischargedCorpKillerInstance.class_id,
    constructor: DischargedCorpKiller,
    instance: DischargedCorpKillerInstance,
  },
  {
    id: OrphanedGearheadInstance.class_id,
    constructor: OrphanedGearhead,
    instance: OrphanedGearheadInstance,
  },
  {
    id: RenegadeCyberslasherInstance.class_id,
    constructor: RenegadeCyberslasher,
    instance: RenegadeCyberslasherInstance,
  },
  {
    id: ForsakenGangGoonInstance.class_id,
    constructor: ForsakenGangGoon,
    instance: ForsakenGangGoonInstance,
  },
];

class BuilderManager {
  _characters = {};

  constructor (opts = {}) {
    this.load();
  }

  get characters () {
    return this._characters;
  }

  addCharacter (new_character) {
    if (!new_character) {
      console.log('No character passed to builder');
      return;
    }
    if (!new_character.id) {
      console.log('Character with no id, stop that');
      return;
    }
    this._characters[new_character.id] = new_character;
    this.save();
  }

  deleteCharacter (id) {
    delete this._characters[id];
    this.save();
  }

  save () {
    try {
      const chars = this.characters;
      const charJSON = {};
      Object.keys(chars).forEach((c_id) => {
        const c = chars[c_id];
        charJSON[c.id] = c.toJSON();
      })
      localStorage.setItem('cyborg_saved_characters', JSON.stringify(charJSON));
    } catch (e) {
      console.log("Failed to save characters", e);
    }
  }

  load () {
    try {
      const chars = localStorage.getItem('cyborg_saved_characters');
      if (!chars) return;
      const parsed = JSON.parse(chars);
      Object.keys(parsed).forEach((c_id) => {
        const c_json = parsed[c_id];
        const ClassConstructor = CLASS_MAP[c_json.class];
        if (!ClassConstructor) {
          console.log(`Unknown class: ${c_json.class}`);
          return;
        }
        const new_character = new ClassConstructor(c_json);
        this.addCharacter(new_character);
      });
    } catch (e) {
      console.log("Failed to load characters", e);
    }
  }
}

export default new BuilderManager();
