import { useEffect, useState } from 'react';

import { TerminalMascotController } from './mascots/TerminalMascot';

const COLORS = {
  // Background colors
  bg: {
    main: 'rgb(19, 23, 34)',        // Main background - deep charcoal-blue
    panel: 'rgb(29, 35, 50, 0.7)',       // Panel background - lighter blue-gray
    panelHover: 'rgb(45, 53, 72)',  // Panel hover state
  },

  // Border colors
  border: {
    default: 'rgb(77, 167, 188)',   // Default border - muted blue-gray
  },

  // Text colors
  text: {
    primary: 'rgb(133, 175, 231)',     // Primary text - light gray
    secondary: 'rgb(148, 163, 184)',   // Secondary/muted text - softer gray
    terminal: 'rgb(0, 255, 65)',       // Terminal content - classic green
    terminalMuted: 'rgb(0, 170, 40)',  // Muted terminal text
  },

  // Accent colors
  accent: {
    teal: 'rgb(79, 209, 197)',        // Primary accent - teal/cyan
    tealHover: 'rgb(56, 178, 172)',   // Teal hover state
    yellow: 'rgb(251, 191, 36)',      // Warning/password - yellow
    red: 'rgb(252, 129, 129)',        // Error/alert - red
  },

  // Status colors
  status: {
    batteryGood: 'rgb(79, 209, 197)',   // Battery >50% - teal
    batteryMid: 'rgb(246, 173, 85)',    // Battery 20-50% - orange
    batteryLow: 'rgb(252, 129, 129)',   // Battery <20% - red
  },
};

// ============================================================================
// COMPONENTS
// ============================================================================

export default function TerminalShell({
  header,
  historyArea,
  inputArea,
  helpText,
  quickCommands = [],
  terminalActivity = 0,
}) {
  // Mascot state with localStorage persistence
  const [mascotEnabled, setMascotEnabled] = useState(() => {
    const saved = localStorage.getItem('terminal-mascot-enabled');
    return saved !== null ? saved === 'true' : true; // Default enabled
  });

  const [currentAnimal, setCurrentAnimal] = useState(() => {
    const saved = localStorage.getItem('terminal-mascot-animal');
    return saved || 'fox'; // Default to fox
  });

  // Available animals
  const animals = ['fox', 'turtle', 'cat-tiger'];

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('terminal-mascot-enabled', mascotEnabled);
  }, [mascotEnabled]);

  useEffect(() => {
    localStorage.setItem('terminal-mascot-animal', currentAnimal);
  }, [currentAnimal]);

  // Animal navigation
  const nextAnimal = () => {
    const currentIndex = animals.indexOf(currentAnimal);
    const nextIndex = (currentIndex + 1) % animals.length;
    setCurrentAnimal(animals[nextIndex]);
  };

  const prevAnimal = () => {
    const currentIndex = animals.indexOf(currentAnimal);
    const prevIndex = (currentIndex - 1 + animals.length) % animals.length;
    setCurrentAnimal(animals[prevIndex]);
  };

  // Get display name for current animal
  const getAnimalDisplayName = () => {
    const names = {
      'fox': 'FOX',
      'turtle': 'TURTLE',
      'cat-tiger': 'CAT',
    };
    return names[currentAnimal] || currentAnimal.toUpperCase();
  };

  return (
    <div
      className="flex-1 flex overflow-hidden relative pb-6"
      style={{ backgroundColor: COLORS.bg.main }}
    >
      {/* Main terminal area - left aligned, slight offset */}
      <div className="flex-1 flex flex-col font-mono overflow-hidden">
        <div className="flex-1 flex flex-col p-4 pl-8 overflow-hidden">
          {header}
          {historyArea}
          {inputArea}
          {helpText}
        </div>
      </div>

      {/* Right sidebar for quick command buttons + mascot */}
      {quickCommands.length > 0 && (
        <div className="w-32 flex-shrink-0 p-4 pl-0 pr-8 flex flex-col gap-2 overflow-y-auto relative">
          {/* Quick command buttons */}
          {quickCommands.map((cmd, i) => (
            <QuickCommandButton
              key={i}
              label={cmd.label}
              onClick={cmd.onClick}
              disabled={cmd.disabled}
            />
          ))}

          {/* Divider */}
          <div style={{
            height: '1px',
            backgroundColor: COLORS.border.default,
            opacity: 0.3,
            margin: '0.5rem 0',
          }} />

          {/* Mascot toggle button */}
          <QuickCommandButton
            label={mascotEnabled ? "MASCOT" : "MASCOT OFF"}
            onClick={() => setMascotEnabled(!mascotEnabled)}
          />

          {/* Animal selector - only show if mascot enabled */}
          {mascotEnabled && (
            <div className="flex items-center gap-1">
              <button
                onClick={prevAnimal}
                className="p-2 rounded border font-bold text-xs transition-all flex-1"
                style={{
                  backgroundColor: COLORS.bg.panel,
                  borderColor: COLORS.border.default,
                  color: COLORS.accent.teal,
                  minHeight: '2rem',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.bg.panelHover}
                onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.bg.panel}
              >
                ←
              </button>
              <button
                onClick={nextAnimal}
                className="p-2 rounded border font-bold text-xs transition-all flex-1"
                style={{
                  backgroundColor: COLORS.bg.panel,
                  borderColor: COLORS.border.default,
                  color: COLORS.accent.teal,
                  minHeight: '2rem',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.bg.panelHover}
                onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.bg.panel}
              >
                →
              </button>
            </div>
          )}

          {/* Mascot render area */}
          {mascotEnabled && (
            <div style={{
              marginTop: 'auto',
              position: 'relative',
              minHeight: '12rem',
              marginBottom: '2rem',
              overflowX: 'hidden',
            }}>
              <TerminalMascotController
                animal={currentAnimal}
                onTerminalActivity={terminalActivity}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// Quick command button component
function QuickCommandButton({ label, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="p-2 rounded border font-bold text-xs transition-all disabled:opacity-30 flex-shrink-0"
      style={{
        backgroundColor: COLORS.bg.panel,
        borderColor: COLORS.border.default,
        color: COLORS.accent.teal,
        minHeight: '2.5rem',
      }}
      onMouseEnter={(e) => !disabled && (e.target.style.backgroundColor = COLORS.bg.panelHover)}
      onMouseLeave={(e) => !disabled && (e.target.style.backgroundColor = COLORS.bg.panel)}
    >
      {label}
    </button>
  );
}

// RCD-themed header with dynamic elements
export function TerminalHeader() {
  const [adsBlocked, setAdsBlocked] = useState(47);
  const [battery, setBattery] = useState(87);

  useEffect(() => {
    // Ad counter increases in random bursts
    const adInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every interval
        const burst = Math.floor(Math.random() * 5) + 1; // 1-5 ads blocked
        setAdsBlocked(prev => prev + burst);
      }
    }, 8000); // Check every 8 seconds

    // Battery slowly decreases
    const batteryInterval = setInterval(() => {
      setBattery(prev => {
        const newVal = prev - 1;
        return newVal < 0 ? 100 : newVal; // Loop back to 100
      });
    }, 120000); // Decrease every 2 minutes

    return () => {
      clearInterval(adInterval);
      clearInterval(batteryInterval);
    };
  }, []);

  // Battery color based on level
  const getBatteryColor = () => {
    if (battery > 50) return COLORS.status.batteryGood;
    if (battery > 20) return COLORS.status.batteryMid;
    return COLORS.status.batteryLow;
  };

  return (
    <div
      className="rounded-lg mb-4 p-4 border flex-shrink-0"
      style={{
        backgroundColor: COLORS.bg.panel,
        borderColor: COLORS.border.default,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="font-bold text-sm" style={{ color: COLORS.text.primary }}>
            RETINAL COM DEVICE
          </div>
          <div className="text-xs" style={{ color: COLORS.text.secondary }}>
            RCD-7 Interface v2.047
          </div>
        </div>

        <div className="text-right space-y-1">
          <div className="flex items-center gap-2 justify-end">
            <span className="text-xs" style={{ color: COLORS.text.secondary }}>SIGNAL</span>
            <span className="text-xs animate-pulse" style={{ color: COLORS.accent.red }}>
              [UNSECURED]
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1">
              <span style={{ color: COLORS.text.secondary }}>ADS BLOCKED:</span>
              <span style={{ color: COLORS.accent.teal }}>{adsBlocked}</span>
            </div>

            <div className="flex items-center gap-1">
              <span style={{ color: COLORS.text.secondary }}>PWR:</span>
              <span style={{ color: getBatteryColor() }}>{battery}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Pre-built history area wrapper
export function TerminalHistoryArea({ children, historyContainerRef, historyEndRef }) {
  return (
    <div
      ref={historyContainerRef}
      className="flex-1 rounded-lg p-4 mb-4 overflow-y-auto border"
      style={{
        minHeight: 0, // Critical for proper flexbox behavior
        textShadow: '0 0 5px rgba(0, 255, 65, 0.5)',
        backgroundColor: COLORS.bg.panel,
        borderColor: COLORS.border.default,
        color: COLORS.text.terminal,
      }}
    >
      {children}
      <div ref={historyEndRef} />
    </div>
  );
}

// Pre-built input area
export function TerminalInputArea({
  onSubmit,
  promptPrefix,
  passwordMode,
  input,
  onInputChange,
  onKeyDown,
  isBooting,
  inputPlaceholder,
  inputRef,
  onCancelPassword,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg p-4 border flex-shrink-0"
      style={{
        backgroundColor: COLORS.bg.panel,
        borderColor: COLORS.border.default,
      }}
    >
      <div className="flex items-center gap-2">
        <span
          className="flex-shrink-0"
          style={{ color: passwordMode ? COLORS.accent.yellow : COLORS.accent.teal }}
        >
          {promptPrefix}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          disabled={isBooting}
          placeholder={inputPlaceholder}
          className="flex-1 bg-transparent border-none outline-none"
          style={{
            textShadow: '0 0 5px rgba(0, 255, 65, 0.8)',
            color: COLORS.text.terminal,
          }}
          autoFocus
        />
        <button
          type="submit"
          disabled={isBooting}
          className="px-6 py-2 font-bold transition-colors disabled:opacity-50 rounded flex-shrink-0"
          style={{
            backgroundColor: COLORS.accent.teal,
            color: COLORS.bg.main,
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.accent.tealHover}
          onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.accent.teal}
        >
          SEND
        </button>
        {passwordMode && (
          <button
            type="button"
            onClick={onCancelPassword}
            className="px-4 py-2 font-bold transition-colors rounded flex-shrink-0"
            style={{
              backgroundColor: COLORS.bg.panelHover,
              color: COLORS.accent.red,
              border: `1px solid ${COLORS.accent.red}`,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = COLORS.accent.red;
              e.target.style.color = COLORS.bg.main;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = COLORS.bg.panelHover;
              e.target.style.color = COLORS.accent.red;
            }}
          >
            X
          </button>
        )}
      </div>
    </form>
  );
}

// Pre-built help text
export function TerminalHelpText({ passwordMode }) {
  return (
    <div className="mt-4 text-center text-xs flex-shrink-0" style={{ color: COLORS.text.secondary }}>
      {passwordMode
        ? 'Enter password or press [X] to cancel'
        : 'Type \'help\' for usage | Type \'list\' for access points | Tab for autocomplete | ↑↓ for history'
      }
    </div>
  );
}
