import RollableTable from "./RollableTable";
import CollapsibleSection from "./CollapsibleSection";
// import { findEntriesByIds } from "../data/searchTables";

export default function Gear({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  if (!character || !sections.length) return null;

  const calculateSectionTotal = (entries, selectedIds) => {
    let total = 0;

    entries.forEach(entry => {
      const entryId = entry.id || entry.label;
      if (selectedIds.includes(entryId)) {
        const costStr = entry.cost || "0¤";
        const match = costStr.match(/^(\d+(?:\.\d+)?[kM]?)¤/);

        if (match) {
          let value = match[1];

          if (value.includes('k')) {
            value = parseFloat(value) * 1000;
          } else if (value.includes('M')) {
            value = parseFloat(value) * 1000000;
          } else {
            value = parseFloat(value);
          }

          total += value;
        }
      }
    });

    if (total >= 1000000) {
      return `${(total / 1000000).toFixed(1)}M¤`;
    } else if (total >= 1000) {
      return `${(total / 1000).toFixed(1)}k¤`;
    } else {
      return `${total}¤`;
    }
  };

  return (
    <CollapsibleSection title="Gear" startOpen={false}>
      {sections.map((section, index) => {
        const { name, label, note, entries } = section;
        const selections = character.getGearSelections?.(name) || character.getTableSelections(name);

        const selectedIds = selections
          ? Object.keys(selections).filter(key => selections[key])
          : [];

        const total = calculateSectionTotal(entries, selectedIds);

        return (
          <RollableTable
            key={`gear_section_${name}_${index}`}
            character_id={character.id}
            locked={character.locked}
            selectable={!character.locked}
            rollable={true}
            compact={true}
            collapsible={!character.locked}
            startCollapsed={!character.locked}
            label={label}
            note={note}
            headerChildren={
              total !== '0¤' && (
                <span className="gear-section-total">{total}</span>
              )
            }
            entries={entries}
            selected={selections}
            select_mode="multiple"
            onClick={(entry) => {
              if (!entry) return;
              if (character.setGearSelection) {
                character.setGearSelection(name, entry);
              } else {
                character.setTableSelection(name, entry, "multiple");
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
