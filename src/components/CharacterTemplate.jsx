import Definitions from "./Definitions";
import RollableTable from "./RollableTable";
import CharacterStats from "./CharacterStats";
import CharacterTracker from "./CharacterTracker";
import HealthBar from "./HealthBar";
import CharacterName from "./CharacterName";
import { Callout } from "./PageComponents";
import { CreditsTracker, GlitchesTracker } from "./ResourceTrackers";

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

      {builder && (
        <button
          type="button"
          onClick={() => {
            character.toggleLock();
            onUpdate();
          }}
          className="
            fixed top-0 right-0 z-50
            w-28 h-10
            bg-gray-800 hover:bg-gray-700
            border-2 border-cy-cyan
            text-cy-cyan font-bold uppercase text-sm
            transition-all
            shadow-lg shadow-cy-cyan/30
          "
        >
          {character.locked ? "Locked" : "Unlocked"}
        </button>
      )}

      <CharacterName
        character={character}
        builder={builder}
        locked={character.locked}
        onUpdate={onUpdate}
      />

      {/* Character Stats (builder mode) */}
      {builder && (
        <>
          {!character.locked && (
            <>
              <div className="divider" />
              <Callout title="STARTING GEAR!">
                <p className="text-gray-300 leading-relaxed">
                  Its actually important to roll Starting Gear first, though you'll find it near the bottom. Please do that first before continuing.
                </p>
              </Callout>
            </>
          )}
          <div className="divider" />
          <CharacterStats
            character={character}
            locked={character.locked}
            onUpdate={onUpdate}
          />
          <div className="divider" />
          <HealthBar
            character={character}
            locked={character.locked}
            onUpdate={onUpdate}
          />
          <div className="divider" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <CreditsTracker
              character={character}
              locked={character.locked}
              onUpdate={onUpdate}
            />
            <GlitchesTracker
              character={character}
              locked={character.locked}
              onUpdate={onUpdate}
            />
          </div>
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
