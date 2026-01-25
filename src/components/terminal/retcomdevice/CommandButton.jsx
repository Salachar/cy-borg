import React from 'react';

import './commandButton.css';

export default function CommandButton({
  fullPath,
  displayName,
  isDiscovered = false,
  hasBlocker = false,
  isBypassed = null,
  bypassLabel = 'PW',
  hasChildren = undefined,
  childCount = 0,
  isExpanded = false,
  onToggleExpand = null,
  onClick,
}) {
  const checkmark = isDiscovered ? '✓' : '○';
  const collapsable = Boolean(hasChildren) && Boolean(isDiscovered);

  return (
    <button onClick={onClick} className="command-button">
      {collapsable && (
        <div
          onClick={onToggleExpand}
          className="command-toggle"
        >
          {isExpanded ? '▼' : '▶'}
        </div>
      )}
      {!collapsable && (
        <span className="command-spacer" />
      )}

      {/* Checkmark */}
      <span className="command-checkmark">
        {checkmark}
      </span>

      {/* Command name */}
      <span className="command-name">
        {displayName}
      </span>

      {/* Blocker badge */}
      {hasBlocker && (
        <span className="command-badge">
          {isBypassed ? `${bypassLabel}:${isBypassed}` : bypassLabel}
        </span>
      )}

      {/* Child count - only show if hasChildren is true */}
      {hasChildren && childCount > 0 && (
        <span className="command-count">
          ({childCount})
        </span>
      )}
    </button>
  );
}
