import React from "react";

import SegmentedDice from "../SegmentedDice";
import CollapsibleSection from '../CollapsibleSection';

// Category definitions with colors
const CATEGORIES = {
  weapons: { label: "WEAPON", color: "text-red-400", border: "border-red-700", bg: "bg-red-900/20" },
  equipment: { label: "EQUIPMENT", color: "text-yellow-400", border: "border-yellow-700", bg: "bg-yellow-900/20" },
  armor: { label: "ARMOR", color: "text-blue-400", border: "border-blue-700", bg: "bg-blue-900/20" },
  cybertech: { label: "CYBERTECH", color: "text-cy-cyan", border: "border-cy-cyan", bg: "bg-cy-cyan/20" },
  drugs: { label: "DRUG", color: "text-cy-pink", border: "border-cy-pink", bg: "bg-cy-pink/20" },
  ammo: { label: "AMMO", color: "text-green-400", border: "border-green-700", bg: "bg-green-900/20" },
};

const CATEGORY_ORDER = ["weapons", "ammo", "armor", "equipment", "cybertech", "drugs"];

export default function Inventory({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  if (!character) return null;

  const allEntries = {};
  sections.forEach(section => {
    allEntries[section.name] = section.entries;
  });

  // Gather all inventory items
  const inventoryItems = [];
  Object.keys(character.gear).forEach(section => {
    const sectionEntries = allEntries[section] || [];
    Object.keys(character.gear[section]).forEach(itemId => {
      const gearItem = character.gear[section][itemId];
      if (!gearItem.selected) return;

      const entry = sectionEntries.find(e => (e.id || e.label) === itemId);
      if (!entry) return;

      inventoryItems.push({
        section,
        itemId,
        quantity: gearItem.quantity,
        entry,
      });
    });
  });

  // Sort by category order
  inventoryItems.sort((a, b) => {
    const aIndex = CATEGORY_ORDER.indexOf(a.section);
    const bIndex = CATEGORY_ORDER.indexOf(b.section);
    return aIndex - bIndex;
  });

  const formatCost = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M¤`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k¤`;
    } else {
      return `${value}¤`;
    }
  };

  const getItemCost = (entry) => {
    const costStr = entry.cost || "0¤";
    const match = costStr.match(/^(\d+(?:\.\d+)?[kM]?)¤/);

    if (match) {
      let value = match[1];
      if (value.includes('k')) {
        return parseFloat(value) * 1000;
      } else if (value.includes('M')) {
        return parseFloat(value) * 1000000;
      } else {
        return parseFloat(value);
      }
    }
    return 0;
  };

  const handleDecrement = (section, itemId) => {
    const gearItem = character.gear[section][itemId];
    if (gearItem.quantity <= 1) {
      // Remove item completely
      delete character.gear[section][itemId];
      // Clean up empty sections
      if (Object.keys(character.gear[section]).length === 0) {
        delete character.gear[section];
      }
    } else {
      // Decrement quantity
      gearItem.quantity -= 1;
    }
    onUpdate();
  };

  const handleRemove = (section, itemId) => {
    delete character.gear[section][itemId];
    // Clean up empty sections
    if (Object.keys(character.gear[section]).length === 0) {
      delete character.gear[section];
    }
    onUpdate();
  };

  // if (inventoryItems.length === 0) {
  //   return (
  //     <div className="mb-8">
  //       <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700 p-4 mb-4">
  //         <h2 className="text-2xl font-black text-gray-400 uppercase tracking-wider">
  //           Inventory
  //         </h2>
  //       </div>
  //       <div className="text-center py-12 text-gray-500 italic border border-gray-800 bg-gray-900/20">
  //         No items in inventory
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <CollapsibleSection
      title="Inventory"
      character={character}
      headerClass="bg-gradient-to-r from-gray-800 to-gray-900 border-2 border-gray-700 p-4 mb-4"
      headerTextClass="text-gray-400"
      headerChildren={(
        <div className="text-right">
          <div className="text-xs text-gray-500 uppercase mb-1">Total Items</div>
          <div className="text-xl font-bold text-gray-400">
            {inventoryItems.reduce((sum, item) => sum + item.quantity, 0)}
          </div>
        </div>
      )}
    >
      {inventoryItems.length === 0 && (
        <div className="text-center py-12 text-gray-500 italic border border-gray-800 bg-gray-900/20">
          No items in inventory
        </div>
      )}

      {inventoryItems.length > 0 && (
        <div className="space-y-2">
          {inventoryItems.map(({ section, itemId, quantity, entry }) => {
            const category = CATEGORIES[section] || CATEGORIES.equipment;
            const itemCost = getItemCost(entry);
            const totalValue = itemCost * quantity;

            return (
              <div
                key={`${section}_${itemId}`}
                className="p-3 border-l-2 border-y border-r bg-gray-900/20 border-gray-800"
                style={{ borderLeftColor: category.border.replace('border-', '') }}
              >
                {/* Top Row: Category Tag + Name + Total Value */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 border ${category.border} ${category.bg} ${category.color} font-bold uppercase`}>
                      {category.label}
                    </span>
                    <span className="font-bold text-cy-cyan">
                      {entry.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      ×{quantity}
                    </span>
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    {formatCost(totalValue)}
                  </div>
                </div>

                {/* Description */}
                {entry.description && (
                  <div className="text-sm text-gray-400 mb-3">
                    {entry.description}
                  </div>
                )}

                {/* Action Row */}
                <div className="flex items-center justify-between gap-2 pt-2 border-t border-gray-800">
                  {/* Dice Roller (if applicable) */}
                  <div className="flex-1">
                    {entry.die && (
                      <SegmentedDice
                        dice={entry.die}
                        rollable={true}
                        character_id={character.id}
                      />
                    )}
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleDecrement(section, itemId)}
                      className="px-3 py-1 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-gray-300 font-bold text-sm transition-colors"
                      title="Use one / Decrement"
                    >
                      −1
                    </button>
                    <button
                      onClick={() => handleRemove(section, itemId)}
                      className="px-3 py-1 bg-red-900/20 hover:bg-red-900/30 border border-red-700 text-red-400 font-bold text-sm transition-colors"
                      title="Remove all"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </CollapsibleSection>
  );
}
