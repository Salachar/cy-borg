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
  const collapsable = Boolean(hasChildren) && Boolean(isBypassed);

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
      <span className="command-checkmark">
        {checkmark}
      </span>
      <span className="command-name">
        {displayName}
      </span>
      {hasBlocker && (
        <span className="command-badge">
          {isBypassed ? `${bypassLabel}:${isBypassed}` : bypassLabel}
        </span>
      )}
      {isBypassed && hasChildren && childCount > 0 && (
        <span className="command-count">
          ({childCount})
        </span>
      )}
    </button>
  );
}
