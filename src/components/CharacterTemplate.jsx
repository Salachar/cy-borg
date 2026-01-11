import Definitions from "./Definitions";
import RollableTable from "./RollableTable";
import CharacterStats from "./CharacterStats";
import CharacterTracker from "./CharacterTracker";

import StartingItems from "./StartingItems";
import Gear from "./Gear";
import Style from "./Style";

import {
  WEAPONS_FOR_SALE,
  EQUIPMENT,
  CYBERTECH,
  DRUGS,
  AMMO_BOOSTERS,
  STYLES,
  FEATURES,
  WANTS,
  QUIRKS,
  CURRENT_OBSESSIONS,
  STARTING_ITEMS_1,
  STARTING_ITEMS_2,
  STARTING_ITEMS_3,
} from "../data/tables";

export default function CharacterTemplate({
  builder = false,
  character = null,
  onUpdate = () => {},
}) {
  if (!character) return null;

  // Render a component based on its type
  const renderComponent = (component, index) => {
    const {
      preview = true,
      type,
      name,
    } = component;

    if (!builder && !preview) return null;

    const key = `${type}_${name}_${index}`;

    switch (component.type) {
      case "definitions":
        return (
          <Definitions
            key={key}
            h3={component.h3}
            definitions={component.entries}
            before={component.before}
            after={component.after}
          />
        );

      case "rollable":
        const selections = character.getTableSelections(component.name);
        return (
          <RollableTable
            key={key}
            character_id={character.id}
            locked={character.locked}
            selectable={builder}
            rollable={builder}
            label={component.label}
            note={component.note}
            entries={component.entries}
            selected={selections}
            select_mode={component.select_mode}
            onClick={(entry) => {
              if (character.locked) return;
              if (component.select_mode === "none") return;
              if (!entry || !builder) return;
              character.setTableSelection(component.name, entry, component.select_mode);
              onUpdate();
            }}
            before={component.before}
            after={component.after}
          />
        );

      case "custom":
        // Render custom component
        const CustomComponent = component.component;
        return (
          <div key={key}>
            {component.before}
            <CustomComponent character={character} onUpdate={onUpdate} />
            {component.after}
          </div>
        );

      default:
        console.warn(`Unknown component type: ${component.type}`);
        return null;
    }
  };

  return (
    <div className="relative">
      {/* Class Description (non-builder mode) */}
      {!builder && (
        <div className="mb-8 p-6 bg-gray-900/50 border border-gray-800 space-y-3">
          {character.description.map((paragraph, index) => (
            <p key={`${character.class}_desc_${index}`} className="text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {/* Character Header with Lock Button */}
      <div className="mb-8 relative">
        {/* Lock Button - Top right of character sheet */}
        {builder && (
          <button
            type="button"
            onClick={() => {
              character.toggleLock();
              onUpdate();
            }}
            className="
              fixed top-4 right-4 z-50
              w-28 h-10
              bg-gray-800 hover:bg-gray-700
              border-2 border-cy-cyan
              text-cy-cyan font-bold uppercase text-sm
              transition-all
              shadow-lg shadow-cy-cyan/30
            "
          >
            {character.locked ? "🔒 Locked" : "🔓 Unlocked"}
          </button>
        )}

        {/* Class Name */}
        <h1
          className="text-xl font-black uppercase mb-4"
          style={{ color: character.color }}
        >
          {character.class}
        </h1>

        {/* Character Name Input (builder mode) */}
        {builder && !character.locked && (
          <input
            type="text"
            className="
              w-full h-12 px-4
              bg-gray-900 border-2 border-gray-700 focus:border-cy-pink
              text-2xl font-bold text-white
              placeholder-gray-600
              transition-colors
              outline-none
            "
            placeholder="Character Name"
            value={character.name}
            onChange={(e) => {
              character.name = e.target.value;
              onUpdate();
            }}
          />
        )}

        {/* Character Name Display (locked) */}
        {builder && character.locked && (
          <div className="h-12 flex items-center">
            <h1
              className="text-3xl font-bold"
              style={{ color: character.color }}
            >
              {character.name || "No Name"}
            </h1>
          </div>
        )}
      </div>

      {/* Health Bar (builder mode) */}
      {builder && (
        <>
          <h3 className="text-2xl font-bold text-cy-cyan">Health</h3>
          <div className="relative mb-6 h-16 flex items-center overflow-hidden bg-red-900/30 border border-red-900">
            {/* Background bar */}
            <div
              className="absolute inset-0 bg-red-900 transition-all duration-200"
              style={{
                width: `${(character.current_health / character.max_health) * 100}%`
              }}
            />

            {/* Buttons and Text */}
            <button
              onClick={() => {
                character.current_health = Math.max(0, character.current_health - 1);
                onUpdate();
              }}
              className="relative z-10 flex-1 h-full text-3xl font-bold text-white/70 hover:text-white transition-colors text-left pl-6"
            >
              −
            </button>

            <div className="relative z-10 px-6 font-mono text-2xl font-bold text-white tracking-wider">
              <span>{character.current_health}</span>
              <span className="mx-2 text-white/50">/</span>
              <span>{character.max_health}</span>
            </div>

            <button
              onClick={() => {
                character.current_health = character.current_health + 1;
                onUpdate();
              }}
              className="relative z-10 flex-1 h-full text-3xl font-bold text-white/70 hover:text-white transition-colors text-right pr-6"
            >
              +
            </button>
          </div>
        </>
      )}

      {/* Character Stats (builder mode) */}
      {builder && (
        <>
          <CharacterStats
            character={character}
            locked={character.locked}
            onUpdate={onUpdate}
          />
          <div className="divider" />
          <CharacterTracker
            character={character}
            trait="credits"
            label="Credits (2d6x10)"
            diceFormula="2d6"
            multiplier={10}
            displayFormat={(val) => `${val}¤`}
            onUpdate={(newValue) => {
              character.credits = newValue;
              onUpdate();
            }}
          />
          <CharacterTracker
            character={character}
            trait="glitches"
            label="Glitches (1d2)"
            diceFormula="1d2"
            multiplier={1}
            onUpdate={(newValue) => {
              character.glitches = newValue;
              onUpdate();
            }}
          />
          <div className="divider" />
        </>
      )}

      {/* Render all class components */}
      {character.constructor.components && character.constructor.components.map((component, index) =>
        renderComponent(component, index)
      )}

      {builder && (
        <>
          <StartingItems
            character={character}
            sections={[
              { name: "d8", label: "Starting Items", entries: STARTING_ITEMS_1 },
              { name: "d12_1", label: "Starting Items", entries: STARTING_ITEMS_2 },
              { name: "d12_2", label: "Starting Items", entries: STARTING_ITEMS_3 },
            ]}
            onUpdate={onUpdate}
          />
          <Gear
            character={character}
            sections={[
              {
                name: "weapons",
                label: "Weapons",
                note: (
                  <span>You get d4 mags if applicable to the weapon</span>
                ),
                entries: WEAPONS_FOR_SALE,
              },
              {
                name: "equipment",
                label: "Equipment",
                note: (
                  <span>Illegal items require a Security Operative License. Without it, SecOps are authorized to shoot to kill.</span>
                ),
                entries: EQUIPMENT,
              },
              {
                name: "cybertech",
                label: "Cybertech",
                entries: CYBERTECH,
              },
              {
                name: "drugs",
                label: "Drugs",
                note: (
                  <span>Cost after the / is for weaker, recreational doses</span>
                ),
                entries: DRUGS,
              },
              {
                name: "ammo",
                label: "Ammo & Boosters",
                entries: AMMO_BOOSTERS,
              },
            ]}
            onUpdate={onUpdate}
          />
          <Style
            character={character}
            sections={[
              { name: "style", label: "Style", entries: STYLES },
              { name: "feature", label: "Feature", entries: FEATURES },
              { name: "wants", label: "Wants", entries: WANTS },
              { name: "quirk", label: "Quirk", entries: QUIRKS },
              { name: "obsession", label: "Obsession", entries: CURRENT_OBSESSIONS },
            ]}
            onUpdate={onUpdate}
          />
        </>
      )}
    </div>
  );
}
