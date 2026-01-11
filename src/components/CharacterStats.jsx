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
  return (
    <div className="flex items-center justify-center gap-2">
      {!locked && (
        <button
          onClick={() => onChange(-1)}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-cy-cyan font-bold text-xl transition-colors"
        >
          −
        </button>
      )}
      <span className="text-2xl font-bold text-cy-yellow min-w-[3ch] text-center font-mono">
        {value >= 0 ? '+' : ''}{value}
      </span>
      {!locked && (
        <button
          onClick={() => onChange(1)}
          className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-600 text-cy-cyan font-bold text-xl transition-colors"
        >
          +
        </button>
      )}
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
        <div className="mb-6">
          {/* <h3 className="text-2xl font-bold text-cy-cyan mb-2">Abilities</h3> */}
          <p className="text-sm text-gray-400 leading-relaxed">
            Roll 3d6 per ability and consult the table:<br/>
            <span className="font-mono text-xs">
              1-4 = -3, 5-6 = -2, 7-8 = -1, 9-12 = ±0, 13-14 = +1, 15-16 = +2, 17-20 = +3
            </span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {statKeys.map((statKey) => {
          const info = STAT_INFO[statKey];
          const value = stats[statKey];

          return (
            <div
              key={statKey}
              className="flex flex-col gap-3 p-4 bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              {/* Stat Info */}
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-lg font-bold text-cy-pink uppercase">
                    {info.name}
                  </span>
                  <span className="text-sm text-gray-500 font-mono">
                    ({statKey})
                  </span>
                </div>
                <div className="text-xs text-gray-400 italic">
                  {info.description}
                </div>
              </div>

              {/* Stat Button */}
              <StatButton
                locked={locked}
                value={value}
                onChange={(mod) => {
                  const currentValue = character[statKey.toLowerCase()];
                  character[statKey.toLowerCase()] = currentValue + mod;
                  onUpdate();
                }}
              />

              {!locked && (
                <Dice
                  dice="3d6"
                  rollable={true}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
