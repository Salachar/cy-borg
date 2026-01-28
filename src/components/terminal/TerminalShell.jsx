import React from 'react';

import TerminalHeader from './retcomdevice/TerminalHeader/TerminalHeader';

const COLORS = {
  // Background colors
  bg: {
    main: 'rgb(19, 23, 34)',        // Main background - deep charcoal-blue
    panel: 'rgb(29, 35, 50, 0.7)',       // Panel background - lighter blue-gray
    panelHover: 'rgb(45, 53, 72)',  // Panel hover state
  },

  // Border colors
  border: {
    default: 'rgb(77, 167, 188)',      // Default border - muted blue-gray
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
    yellow: 'rgb(251, 191, 36)',      // Warning - yellow
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
  executeCommand,
  historyArea,
  inputArea,
}) {
  return (
    <div
      className="flex-1 flex overflow-hidden relative pb-6"
      style={{ backgroundColor: COLORS.bg.main }}
    >
      {/* Main terminal area - left aligned, slight offset */}
      <div className="flex-1 flex flex-col font-mono overflow-hidden">
        <div className="flex-1 flex flex-col p-6 overflow-hidden">
          <TerminalHeader
            discoveredCount={12}
            passwordsCount={3}
            creditsExtracted={450}
            onHelp={() => executeCommand('Help')}
            onList={() => executeCommand('Access Points')}
            onClear={() => executeCommand('Clear')}
          />
          {historyArea}
          {inputArea}
        </div>
      </div>
    </div>
  );
}

// Quick command button component
function QuickCommandButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-24 p-2 font-bold text-xs transition-all disabled:opacity-30 flex-shrink-0"
      style={{
        borderBottom: `1px solid ${COLORS.border.default}`,
        borderLeft: `1px solid ${COLORS.border.default}`,
        borderRight: `1px solid ${COLORS.border.default}`,
        borderBottomLeftRadius: '6px',
        borderBottomRightRadius: '6px',
        backgroundColor: COLORS.bg.panel,
        color: COLORS.accent.teal,
        height: '2.5rem',
      }}
    >
      {label}
    </button>
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
  input,
  onInputChange,
  onKeyDown,
  inputRef,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border flex-shrink-0 flex items-center gap-2"
      style={{
        backgroundColor: COLORS.bg.panel,
        borderColor: COLORS.border.default,
      }}
    >
      <span
        className="flex-shrink-0 p-4 pr-0"
        style={{ color: COLORS.accent.teal }}
      >
        {'CY_NET://>'}
      </span>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        placeholder={'Enter command...'}
        className="flex-1 bg-transparent border-none outline-none p-4"
        style={{
          textShadow: '0 0 5px rgba(0, 255, 65, 0.8)',
          color: COLORS.text.terminal,
          fontSize: '0.8rem',
        }}
        autoFocus
      />
      <button
        type="submit"
        className="h-full px-6 py-2 font-bold transition-colors disabled:opacity-50 flex-shrink-0"
        style={{
          borderLeft: `1px solid ${COLORS.accent.teal}`,
          color: COLORS.accent.teal,
          cursor: 'pointer',
        }}
      >
        {`>> SEND`}
      </button>
    </form>
  );
}
