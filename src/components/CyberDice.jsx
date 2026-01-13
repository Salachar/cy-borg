import React, { useEffect, useState } from "react";
import { rollDie } from "../utils/dice";

/**
 * CyberDice - A compact, cyberpunk-styled dice roller with individual die control
 *
 * Features:
 * - Click individual dice to reroll them
 * - Compact display without die shapes
 * - Cyberpunk terminal aesthetic
 * - Support for advantage/disadvantage
 * - Drop highest/lowest functionality
 */
export default function CyberDice({
  label = "",
  dice = "1d6", // Format: "2d6", "3d8", etc.
  mod = 0,
  multiplier = 1,
  advantage = false, // Roll twice, take higher
  disadvantage = false, // Roll twice, take lower
  dropLowest = 0, // Drop N lowest dice
  dropHighest = 0, // Drop N highest dice
  allowIndividualReroll = true,
  rollable = true,
  displayFormat = null, // Function to format the total display
  onRollComplete = null, // Callback: (total) => {}
  character_id = "", // Reset dice when this changes
}) {
  const [currentId, setCurrentId] = useState(character_id);
  const [diceStates, setDiceStates] = useState([]);
  const [dieMax, setDieMax] = useState(6);
  const [diceCount, setDiceCount] = useState(1);
  const [rolled, setRolled] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [rollingIndices, setRollingIndices] = useState(new Set());

  // Parse dice string and initialize
  useEffect(() => {
    let amount = 1;
    let max = 6;

    if (typeof dice === "string" && dice.includes("d")) {
      const [count, sides] = dice.split("d").map(Number);
      amount = isNaN(count) ? 1 : count;
      max = isNaN(sides) ? 6 : sides;
    }

    // Handle advantage/disadvantage
    if (advantage || disadvantage) {
      amount = amount * 2;
    }

    setDiceCount(amount);
    setDieMax(max);
    setDiceStates(Array.from({ length: amount }, () => null));
  }, [dice, advantage, disadvantage]);

  // Reset on character change
  useEffect(() => {
    if (character_id === currentId) return;
    setCurrentId(character_id);
    setRolled(false);
    setDiceStates(Array.from({ length: diceCount }, () => null));
  }, [character_id]);

  // Handle roll complete callback
  useEffect(() => {
    if (!rolling && rolled && onRollComplete) {
      const total = getTotal();
      if (total !== null) {
        onRollComplete(total * multiplier);
      }
    }
  }, [rolling, rolled]);

  const animateDie = async (index) => {
    if (!rolled) setRolled(true);

    setRolling(true);
    setRollingIndices(prev => new Set(prev).add(index));

    const duration = 400;
    const interval = 60;
    let elapsed = 0;

    return new Promise(resolve => {
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

          setRollingIndices(prev => {
            const next = new Set(prev);
            next.delete(index);
            return next;
          });

          resolve();
        }
      }, interval);
    });
  };

  const rerollAll = async () => {
    setRolling(true);
    const promises = [];
    for (let i = 0; i < diceStates.length; i++) {
      promises.push(animateDie(i));
    }
    await Promise.all(promises);
    setRolling(false);
  };

  const rerollDie = async (index) => {
    if (!allowIndividualReroll) return;
    setRolling(true);
    await animateDie(index);
    setRolling(false);
  };

  const getActiveDice = () => {
    if (!rolled || diceStates.some(d => d === null)) return [];

    let activeDice = diceStates.map((value, index) => ({ value, index }));

    // Handle advantage/disadvantage
    if (advantage) {
      const half = Math.floor(activeDice.length / 2);
      const first = activeDice.slice(0, half);
      const second = activeDice.slice(half);

      const firstSum = first.reduce((sum, d) => sum + d.value, 0);
      const secondSum = second.reduce((sum, d) => sum + d.value, 0);

      activeDice = firstSum >= secondSum ? first : second;
    } else if (disadvantage) {
      const half = Math.floor(activeDice.length / 2);
      const first = activeDice.slice(0, half);
      const second = activeDice.slice(half);

      const firstSum = first.reduce((sum, d) => sum + d.value, 0);
      const secondSum = second.reduce((sum, d) => sum + d.value, 0);

      activeDice = firstSum <= secondSum ? first : second;
    }

    // Drop lowest
    if (dropLowest > 0) {
      const sorted = [...activeDice].sort((a, b) => a.value - b.value);
      const toDrop = sorted.slice(0, dropLowest).map(d => d.index);
      activeDice = activeDice.filter(d => !toDrop.includes(d.index));
    }

    // Drop highest
    if (dropHighest > 0) {
      const sorted = [...activeDice].sort((a, b) => b.value - a.value);
      const toDrop = sorted.slice(0, dropHighest).map(d => d.index);
      activeDice = activeDice.filter(d => !toDrop.includes(d.index));
    }

    return activeDice;
  };

  const isDropped = (index) => {
    if (!rolled) return false;
    const activeDice = getActiveDice();
    return !activeDice.some(d => d.index === index);
  };

  const getTotal = () => {
    const activeDice = getActiveDice();
    if (activeDice.length === 0) return null;

    const sum = activeDice.reduce((total, die) => total + die.value, 0);
    return sum + mod;
  };

  const formatTotal = (value) => {
    if (displayFormat) {
      return displayFormat(value);
    }
    return value;
  };

  if (!rollable) return null;

  const total = getTotal();

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <div className="text-xs font-bold text-cy-cyan uppercase tracking-wide">
          {label}
        </div>
      )}

      <div className="flex items-center gap-2">
        {/* Roll Button */}
        <button
          onClick={rerollAll}
          disabled={rolling}
          className="px-3 py-2 bg-gray-900 border border-cy-cyan/50 hover:border-cy-cyan hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-mono text-xs font-bold text-cy-cyan uppercase"
        >
          {rolling ? "..." : "Roll"}
        </button>

        {/* Dice Display */}
        <div className="flex items-center gap-1 flex-wrap">
          {diceStates.map((value, idx) => {
            const isRolling = rollingIndices.has(idx);
            const dropped = isDropped(idx);

            return (
              <React.Fragment key={idx}>
                {idx !== 0 && <span className="text-gray-600 text-sm">+</span>}

                <button
                  onClick={() => rerollDie(idx)}
                  disabled={!allowIndividualReroll || rolling}
                  className={`
                    relative min-w-[2rem] h-8 px-2 font-mono font-bold text-sm
                    border transition-all
                    ${dropped
                      ? 'bg-gray-900 border-gray-700 text-gray-600 line-through'
                      : 'bg-black border-cy-cyan/30 text-cy-yellow hover:border-cy-cyan hover:bg-gray-900'
                    }
                    ${!allowIndividualReroll ? 'cursor-default' : 'cursor-pointer'}
                    ${isRolling ? 'animate-pulse' : ''}
                    disabled:opacity-50
                  `}
                  title={allowIndividualReroll ? "Click to reroll" : ""}
                >
                  <span className={`${isRolling ? 'opacity-50' : ''}`}>
                    {rolled && value !== null ? value : "—"}
                  </span>

                  {/* Glitch effect overlay */}
                  {isRolling && (
                    <div className="absolute inset-0 bg-cy-cyan/20 animate-pulse" />
                  )}
                </button>
              </React.Fragment>
            );
          })}

          {/* Modifier */}
          {mod !== 0 && rolled && (
            <>
              <span className="text-gray-600 text-sm">+</span>
              <span className="text-sm font-mono text-gray-400">{mod}</span>
            </>
          )}

          {/* Multiplier */}
          {multiplier !== 1 && rolled && (
            <>
              <span className="text-gray-600 text-sm">×</span>
              <span className="text-sm font-mono text-gray-400">{multiplier}</span>
            </>
          )}

          {/* Total */}
          {rolled && total !== null && (
            <>
              <span className="text-gray-600 text-sm font-bold mx-1">=</span>
              <div className="px-3 py-1 bg-cy-cyan/10 border border-cy-cyan/50">
                <span className="text-lg font-bold text-cy-cyan font-mono">
                  {formatTotal(total * multiplier)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Info text */}
      {rolled && (advantage || disadvantage || dropLowest > 0 || dropHighest > 0) && (
        <div className="text-xs text-gray-500 font-mono">
          {advantage && "Advantage: Higher set used"}
          {disadvantage && "Disadvantage: Lower set used"}
          {dropLowest > 0 && `Dropped lowest ${dropLowest}`}
          {dropHighest > 0 && `Dropped highest ${dropHighest}`}
        </div>
      )}
    </div>
  );
}
