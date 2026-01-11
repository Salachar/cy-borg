import React, { useEffect, useState } from "react";

import { rollDie } from "../utils/dice";

const SUPPORTED_DIE = {
  6: true,
  12: true,
};

export default function Dice({
  type = "",
  label = "",
  character_id = "", // Changes will reset the dice
  dice = "1d6",
  mod = 0,
  multiplier = 1,
  ignore = "",
  rollable = false,
  displayFormat = null, // Function to format the total display (e.g., val => val + '¤')
  onRollComplete = null, // Callback when roll finishes: (total) => {}
}) {
  const [currentId, setCurrentId] = useState(character_id);
  const [diceStates, setDiceStates] = useState([]);
  const [dieMax, setDieMax] = useState(6);
  const [rolled, setRolled] = useState(false);
  const [rollingCount, setRollingCount] = useState(0);

  useEffect(() => {
    let amount = 1;
    let max = 6;

    if (typeof dice === "string" && dice.includes("d")) {
      const [count, sides] = dice.split("d").map(Number);
      amount = isNaN(count) ? 1 : count;
      max = isNaN(sides) ? 6 : sides;
    }

    setDieMax(max);
    setDiceStates(Array.from({ length: amount }, () => ""));
  }, [dice]);

  useEffect(() => {
    if (character_id === currentId) return;
    setCurrentId(character_id);
    setRolled(false);
  }, [character_id]);

  // Check if all dice finished rolling
  useEffect(() => {
    if (rollingCount === 0 && rolled && onRollComplete) {
      const total = getTotal();
      if (total !== null) {
        onRollComplete(total * multiplier);
      }
    }
  }, [rollingCount, rolled]);

  const getIgnoredValue = (die_value) => {
    if (!die_value) return 0;
    if (isIgnored(die_value)) return 0;
    return die_value;
  }

  const isIgnored = (die_value) => {
    if (!die_value) return false;
    if (!ignore) return false;

    if (ignore && die_value === ignore) {
      return true;
    }
    if (ignore === "odd" && die_value % 2 === 1) {
      return true;
    }
    if (ignore === "even" && die_value % 2 === 0) {
      return true;
    }

    return false;
  }

  const animateDie = (index) => {
    // Either the roll button or a die was clicked, either way, the component
    // has now officially been interacted with
    if (!rolled) setRolled(true);

    // Increment rolling counter
    setRollingCount(prev => prev + 1);

    const duration = 500; // ms
    const interval = 50;
    let elapsed = 0;

    const intervalId = setInterval(() => {
      elapsed += interval;

      setDiceStates(prev => {
        const copy = [...prev];
        copy[index] = rollDie(dieMax);
        return copy;
      });

      if (elapsed >= duration) {
        clearInterval(intervalId);
        const finalValue = rollDie(dieMax);
        setDiceStates(prev => {
          const copy = [...prev];
          copy[index] = finalValue;
          return copy;
        });

        // Decrement rolling counter
        setRollingCount(prev => prev - 1);
      }
    }, interval);
  };

  const rerollAll = () => {
    for (let i = 0; i < diceStates.length; i++) {
      animateDie(i);
    }
  };

  const getTotal = () => {
    if (!diceStates || !diceStates.length) return null;
    let total = 0;
    for (let i = 0; i < diceStates.length; i++) {
      total += getIgnoredValue(diceStates[i]);
    }
    total += mod;
    return total;
  }

  const formatTotal = (value) => {
    if (displayFormat) {
      return displayFormat(value);
    }
    return value;
  }

  return (
    <>
      {label && (
        <h3 className="font-bold text-lg mb-2">{label}</h3>
      )}
      {rollable && (
        <div className="flex items-center gap-4">
          <button
            className="w-12 h-12 border-2 border-black bg-transparent font-bold cursor-pointer hover:bg-gray-100"
            onClick={rerollAll}
          >
            Roll
          </button>

          <div className="flex flex-wrap items-center gap-2">
            {diceStates.map((value, idx) => {
              const supported = SUPPORTED_DIE[dieMax];
              // Use a d6 for any unsupported die, the max is still accurate
              let sides = supported ? dieMax : 6;

              return (
                <React.Fragment key={`key_${type}_dice+${idx}`}>
                  {idx !== 0 && (
                    <span className="font-bold text-xl">+</span>
                  )}
                  <div
                    className="relative cursor-pointer"
                    onClick={() => animateDie(idx)}
                    title="Click to reroll"
                  >
                    <div
                      className="relative flex items-center justify-center select-none cursor-pointer"
                      style={{
                        background: 'var(--color-class)',
                        width: sides === 6 ? '32px' : '40px',
                        height: sides === 6 ? '32px' : '40px',
                        borderRadius: sides === 6 ? '0.25rem' : '0',
                        clipPath: sides === 12 ? 'polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%)' : 'none',
                      }}
                    >
                      <div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl pointer-events-none font-sans ${isIgnored(value) ? "text-red-500" : ""}`}
                        style={{ paddingTop: sides === 12 ? '0.25rem' : '0' }}
                      >
                        {rolled ? value : ""}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
            {mod !== 0 && (
              <>
                <span className="font-bold text-xl">+</span>
                <span className="font-bold text-xl">{mod}</span>
              </>
            )}
            {multiplier !== 1 && (
              <>
                <span className="font-bold text-xl">×</span>
                <span className="font-bold text-xl">{multiplier}</span>
              </>
            )}
            {rolled && (
              <>
                <span className="font-bold text-xl">=</span>
                <span className="font-bold text-xl">{formatTotal(getTotal() * multiplier)}</span>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
