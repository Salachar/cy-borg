import React, { useEffect, useState } from "react";

import { rollDie } from "../utils/dice";

const DICE_SHAPES = {
  2: {
    // Coin flip
    shape: 'circle',
    size: 32,
    clipPath: 'none',
  },
  4: {
    // Tetrahedron (pyramid)
    shape: 'pyramid',
    size: 36,
    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
  },
  6: {
    // Cube
    shape: 'cube',
    size: 32,
    clipPath: 'none',
  },
  8: {
    // Octahedron (diamond)
    shape: 'diamond',
    size: 36,
    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
  },
  10: {
    // Pentagonal trapezohedron (kite)
    shape: 'kite',
    size: 38,
    clipPath: 'polygon(50% 0%, 90% 40%, 75% 100%, 25% 100%, 10% 40%)',
  },
  12: {
    // Dodecahedron (pentagon)
    shape: 'pentagon',
    size: 40,
    clipPath: 'polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%)',
  },
  20: {
    // Icosahedron (hexagon for simplicity)
    shape: 'hexagon',
    size: 40,
    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  },
  100: {
    // Percentile (larger pentagon)
    shape: 'pentagon-large',
    size: 44,
    clipPath: 'polygon(50% 0, 100% 38%, 81% 100%, 19% 100%, 0 38%)',
  },
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
  basicMode = false, // If true, show simple calculation without die shapes
}) {
  const [currentId, setCurrentId] = useState(character_id);
  const [diceStates, setDiceStates] = useState([]);
  const [dieMax, setDieMax] = useState(6);
  const [diceCount, setDiceCount] = useState(1);
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

    setDiceCount(amount);
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

  const getCalculationString = () => {
    let parts = [];

    if (diceCount > 0) {
      parts.push(`${diceCount}d${dieMax}`);
    }

    if (mod !== 0) {
      parts.push(mod > 0 ? `+${mod}` : `${mod}`);
    }

    if (multiplier !== 1) {
      parts.push(`×${multiplier}`);
    }

    return parts.join(' ');
  }

  if (!rollable) return null;

  // Basic mode: simple calculation display
  if (basicMode) {
    return (
      <>
        {label && (
          <h3 className="font-bold text-lg mb-2 text-cy-cyan">{label}</h3>
        )}
        <div className="flex items-center gap-3">
          <button
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-cy-cyan/50 text-cy-cyan font-bold uppercase text-sm transition-colors"
            onClick={rerollAll}
          >
            Roll
          </button>

          <div className="flex items-center gap-2">
            <span className="text-gray-400 font-mono text-sm">
              {getCalculationString()}
            </span>

            {rolled && (
              <>
                <span className="text-gray-600">=</span>
                <span className="text-2xl font-bold text-cy-yellow font-mono">
                  {formatTotal(getTotal() * multiplier)}
                </span>
              </>
            )}
          </div>
        </div>
      </>
    );
  }

  // Visual mode: show die shapes
  const diceShape = DICE_SHAPES[dieMax] || DICE_SHAPES[6];

  return (
    <>
      {label && (
        <h3 className="font-bold text-lg mb-2 text-cy-cyan">{label}</h3>
      )}
      <div className="flex items-center gap-3">
        <button
          className="px-3 py-2 bg-gray-800 hover:bg-gray-700 border border-cy-cyan/50 text-cy-cyan font-bold uppercase text-xs transition-colors flex-shrink-0"
          onClick={rerollAll}
        >
          Roll
        </button>

        <div className="flex flex-wrap items-center gap-2">
          {diceStates.map((value, idx) => {
            const isCircle = dieMax === 2;

            return (
              <React.Fragment key={`key_${type}_dice+${idx}`}>
                {idx !== 0 && (
                  <span className="font-bold text-lg text-gray-500">+</span>
                )}
                <div
                  className="relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => animateDie(idx)}
                  title="Click to reroll"
                >
                  <div
                    className="relative flex items-center justify-center select-none cursor-pointer"
                    style={{
                      background: 'var(--color-class)',
                      width: `${diceShape.size}px`,
                      height: `${diceShape.size}px`,
                      borderRadius: isCircle ? '50%' : (diceShape.shape === 'cube' ? '0.25rem' : '0'),
                      clipPath: diceShape.clipPath,
                    }}
                  >
                    <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold pointer-events-none font-sans ${isIgnored(value) ? "text-red-500" : ""}`}
                      style={{
                        fontSize: dieMax === 100 ? '0.7rem' : (diceShape.size > 36 ? '1.125rem' : '1rem'),
                        paddingTop: ['pyramid', 'pentagon', 'pentagon-large'].includes(diceShape.shape) ? '0.25rem' : '0',
                      }}
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
              <span className="font-bold text-lg text-gray-500">+</span>
              <span className="font-bold text-lg text-gray-400">{mod}</span>
            </>
          )}
          {multiplier !== 1 && (
            <>
              <span className="font-bold text-lg text-gray-500">×</span>
              <span className="font-bold text-lg text-gray-400">{multiplier}</span>
            </>
          )}
          {rolled && (
            <>
              <span className="font-bold text-lg text-gray-600">=</span>
              <span className="font-bold text-2xl text-cy-yellow font-mono">{formatTotal(getTotal() * multiplier)}</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}
