import React from "react";
import Dice from "./Dice";

const STAT_INFO = {
  STR: {
    name: "Strength",
    description: "Strike, grapple, lift, throw",
  },
  AGI: {
    name: "Agility",
    description: "Sneak, dodge, drive, autofire",
  },
  PRE: {
    name: "Presence",
    description: "Snipe/shoot, use Nano, charm",
  },
  TOU: {
    name: "Toughness",
    description: "Survive falling, poison, and elements",
  },
  KNO: {
    name: "Knowledge",
    description: "Science, use tech or App",
  },
};

function StatButton({ locked = false, value = 0, onChange = () => {} }) {
  if (locked) {
    // Locked view: just show the value prominently
    return (
      <div className="flex items-center justify-center h-16 bg-black/30 border border-cy-cyan/30">
        <span className="text-4xl font-black text-cy-cyan font-mono">
          {value >= 0 ? '+' : ''}{value}
        </span>
      </div>
    );
  }

  // Unlocked view: show increment/decrement buttons
  return (
    <div className="flex items-stretch gap-1 h-12">
      <button
        onClick={() => onChange(-1)}
        className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-cy-cyan font-bold text-2xl transition-colors"
      >
        −
      </button>
      <div className="flex-1 flex items-center justify-center bg-black/50 border border-cy-yellow/30">
        <span className="text-2xl font-black text-cy-yellow font-mono">
          {value >= 0 ? '+' : ''}{value}
        </span>
      </div>
      <button
        onClick={() => onChange(1)}
        className="flex-1 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-cy-cyan font-bold text-2xl transition-colors"
      >
        +
      </button>
    </div>
  );
}

export default function CharacterStats({
  character = null,
  locked = false,
  onUpdate = () => {},
}) {
  if (!character) return null;

  const stats = character.stats;
  const statKeys = Object.keys(STAT_INFO);

  return (
    <div className="w-full">
      {!locked && (
        <div className="mb-6 bg-cy-yellow/10 border border-cy-yellow/30 p-4">
          <p className="text-sm text-gray-300 leading-relaxed">
            <span className="font-bold text-cy-yellow">Roll 3d6 per ability:</span>{' '}
            <span className="font-mono text-xs block mt-2 text-gray-400">
              1-4 = -3 | 5-6 = -2 | 7-8 = -1 | 9-12 = ±0 | 13-14 = +1 | 15-16 = +2 | 17-20 = +3
            </span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {statKeys.map((statKey) => {
          const info = STAT_INFO[statKey];
          const value = stats[statKey];

          return (
            <div
              key={statKey}
              className="flex flex-col bg-gray-900/80 border-2 border-gray-800 hover:border-cy-cyan/30 transition-colors"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-3 border-b border-gray-700">
                <div className="text-base font-black text-cy-cyan uppercase tracking-wide mb-1">
                  {info.name}
                </div>
                <div className="text-xs text-gray-500 font-mono uppercase">
                  {statKey}
                </div>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-3 gap-3">
                {/* Description */}
                <div className="text-xs text-gray-400 leading-tight min-h-[2.5rem]">
                  {info.description}
                </div>

                {/* Stat Value/Controls */}
                <StatButton
                  locked={locked}
                  value={value}
                  onChange={(mod) => {
                    const currentValue = character[statKey.toLowerCase()];
                    character[statKey.toLowerCase()] = currentValue + mod;
                    onUpdate();
                  }}
                />

                {/* Dice Roller (only when unlocked) */}
                {!locked && (
                  <div className="pt-2 border-t border-gray-800">
                    <Dice
                      dice="3d6"
                      rollable={true}
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
