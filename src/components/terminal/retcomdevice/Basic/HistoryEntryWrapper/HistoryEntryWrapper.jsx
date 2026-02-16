import { useState } from 'react';
import './historyEntryWrapper.css';

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
        <button
          onClick={handleCollapse}
          className="history-entry-button collapse-btn"
          aria-label={isCollapsed ? 'Expand' : 'Collapse'}
        >
          {isCollapsed ? '▶' : '▼'}
        </button>

        <div className="history-entry-path">
          {commandPath}
        </div>

        <button
          onClick={handleRemove}
          className="history-entry-button remove-btn"
          aria-label="Remove"
        >
          ✕
        </button>
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
