import RollableTable from "./RollableTable";
import CollapsibleSection from "./CollapsibleSection";
import { findEntriesByIds } from "../data/searchTables";

export default function Style({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  if (!character || !sections.length) return null;

  return (
    <CollapsibleSection title="Character Flavor" startOpen={false}>
      {sections.map((section, index) => {
        const { name, label, entries } = section;
        const selections = character.getStyleSelections?.(name) || character.getTableSelections(name);

        return (
          <RollableTable
            key={`style_${name}_${index}`}
            character_id={character.id}
            locked={character.locked}
            selectable={!character.locked}
            rollable={true}
            compact={true}
            collapsible={true}
            startCollapsed={true}
            label={label}
            entries={entries}
            selected={selections}
            select_mode="single"
            onClick={(entry) => {
              if (!entry) return;
              if (character.setStyleSelection) {
                character.setStyleSelection(name, entry);
              } else {
                character.setTableSelection(name, entry, "single");
              }
              onUpdate();
            }}
            before={index > 0 ? <div className="divider" /> : null}
          />
        );
      })}
    </CollapsibleSection>
  );
}
