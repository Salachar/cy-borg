import { CLASSES } from "../data/builder";

export default function ClassButtons({
  currentIndex = null,
  onClick = () => {},
  onAdd = () => {},
}) {
  return (
    <div className="bg-black border-b border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Class Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {CLASSES.map((character_class, index) => {
            const ci = character_class.instance;
            const isActive = currentIndex === index;

            return (
              <div
                key={`class_${index}`}
                className="relative group"
              >
                {/* Main Class Button */}
                <button
                  onClick={() => onClick({ ...character_class, index })}
                  className={`
                    relative w-full h-24
                    flex flex-col items-center justify-center
                    bg-gradient-to-br from-gray-900 to-gray-950
                    border-2 transition-all duration-200
                    overflow-hidden
                    ${isActive
                      ? 'border-[var(--class-color)] shadow-lg'
                      : 'border-gray-800 hover:border-gray-700'
                    }
                  `}
                  style={{
                    '--class-color': ci.color,
                    opacity: typeof currentIndex === "number" ? (isActive ? 1 : 0.6) : 0.8,
                    boxShadow: isActive ? `0 0 20px ${ci.color}40` : 'none',
                  }}
                >
                  {/* Background pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `
                        repeating-linear-gradient(
                          45deg,
                          ${ci.color} 0,
                          ${ci.color} 2px,
                          transparent 2px,
                          transparent 10px
                        )
                      `,
                    }}
                  />

                  {/* Class Name */}
                  <span
                    className="relative z-10 text-sm font-bold uppercase tracking-wider text-center px-2 transition-all"
                    style={{
                      color: isActive ? ci.color : '#9ca3af',
                      textShadow: isActive ? `0 0 10px ${ci.color}80` : 'none',
                    }}
                  >
                    {ci.class}
                  </span>

                  {/* Active Indicator */}
                  {isActive && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1"
                      style={{ backgroundColor: ci.color }}
                    />
                  )}
                </button>

                {/* Add Character Button (floating) */}
                <button
                  onClick={() => onAdd({ ...character_class, index })}
                  className="
                    absolute -top-2 -right-2 z-20
                    w-8 h-8
                    flex items-center justify-center
                    bg-gray-800 hover:bg-gray-700
                    border-2 border-gray-700 hover:border-cy-green
                    text-cy-green font-bold text-lg
                    rounded-full
                    transition-all duration-200
                    shadow-lg
                  "
                  style={{
                    textShadow: '0 0 5px rgba(0, 255, 65, 0.5)',
                  }}
                  title={`Create new ${ci.class}`}
                >
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
