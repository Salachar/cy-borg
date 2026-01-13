import React from "react";
import Dice from "./Dice";
import SegmentedDice from "./SegmentedDice";

export default function CharacterTracker({
  character,
  trait,
  label,
  diceFormula = "1d6",
  multiplier = 1,
  displayFormat = null,
  onUpdate,
}) {
  const builderMode = !character.locked;
  const currentValue = character[trait] || 0;

  const handleInputChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    if (onUpdate) {
      onUpdate(newValue);
    } else {
      character[trait] = newValue;
    }
  };

  const handleRollComplete = (total) => {
    if (onUpdate) {
      onUpdate(total);
    } else {
      character[trait] = total;
    }
  };

  return (
    <div className="my-4">
      {builderMode ? (
        <>
          <h3 className="font-bold text-lg mb-2">{label}</h3>
          <div className="flex flex-row gap-2">
            <input
              type="number"
              value={currentValue}
              onChange={handleInputChange}
              placeholder="0"
              className="mr-8 w-40 px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-600"
            />
            <SegmentedDice
              character_id={character.id}
              dice={diceFormula}
              multiplier={multiplier}
              rollable={true}
              displayFormat={displayFormat}
              onRollComplete={handleRollComplete}
            />
          </div>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <label className="font-bold min-w-[100px]">{label}</label>
          <input
            type="number"
            value={currentValue}
            onChange={handleInputChange}
            placeholder="0"
            className="w-40 px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-gray-600"
          />
        </div>
      )}
    </div>
  );
}
