import { useState, useEffect } from 'react';
import './historyEntryWrapper.css';

const COLORS = {
  border: {
    default: 'rgb(77, 167, 188)',
  },
  text: {
    primary: 'rgb(133, 175, 231)',
    secondary: 'rgb(148, 163, 184)',
  },
  accent: {
    teal: 'rgb(79, 209, 197)',
    red: 'rgb(252, 129, 129)',
  },
  bg: {
    panel: 'rgba(29, 35, 50, 0.7)',
  },
};

const COLLAPSED_STORAGE_KEY = 'terminal_commands_expanded';

/**
 * HistoryEntryWrapper - Generic shell for terminal history entries
 *
 * Provides collapse and remove functionality for any history entry.
 *
 * Props:
 * - entryId: Unique identifier for this entry (e.g., timestamp)
 * - commandPath: Display path/label for the command
 * - children: The actual content to display
 * - onRemove: Callback when remove button is clicked
 * - collapsedState: [collapsed, setCollapsed] state from parent
 */
export default function HistoryEntryWrapper({
  entryId,
  commandPath,
  children,
  onRemove,
  collapsedState,
}) {
  const [isCollapsed, setIsCollapsed] = collapsedState || useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleRemove = () => {
    if (onRemove) {
      onRemove(entryId);
    }
  };

  return (
    <div className="history-entry-wrapper">
      {/* Toolbar */}
      <div className="history-entry-toolbar">
        {/* Command path */}
        <div className="history-entry-path">
          {commandPath}
        </div>

        {/* Controls */}
        <div className="history-entry-controls">
          {/* Collapse button */}
          <button
            onClick={handleCollapse}
            className="history-entry-button collapse-btn"
            aria-label={isCollapsed ? 'Expand' : 'Collapse'}
          >
            {isCollapsed ? '▶' : '▼'}
          </button>

          {/* Remove button */}
          <button
            onClick={handleRemove}
            className="history-entry-button remove-btn"
            aria-label="Remove"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Content - only show if not collapsed */}
      {!isCollapsed && (
        <div className="history-entry-content">
          {children}
        </div>
      )}
    </div>
  );
}
