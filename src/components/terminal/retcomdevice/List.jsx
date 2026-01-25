import { useState } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';

import './list.css';

// Storage key constant
const TREE_STORAGE_KEY = 'terminal-tree-expanded';

export default function List({
  discoveredSecrets = [],
  campaignCommandList = [],
  setInputCallback = () => {},
  discoveredPasswords = {},
}) {
  // Load expanded state from localStorage
  const [expandedSections, setExpandedSections] = useState(() => {
    try {
      const saved = localStorage.getItem(TREE_STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to load tree state:', e);
      return {};
    }
  });

  const toggleSection = (fullPath) => {
    setExpandedSections(prev => {
      const newState = {
        ...prev,
        [fullPath]: !prev[fullPath],
      };

      // Save to localStorage
      try {
        localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(newState));
      } catch (e) {
        console.error('Failed to save tree state:', e);
      }

      return newState;
    });
  };

  const expandAll = () => {
    const allExpanded = {};

    const expandRecursive = (cmds, parentPath = '') => {
      cmds.forEach(cmd => {
        const fullPath = parentPath ? `${parentPath}/${cmd.id}` : cmd.id;

        if (cmd.related_commands && Object.keys(cmd.related_commands).length > 0) {
          allExpanded[fullPath] = true;
          expandRecursive(
            Object.entries(cmd.related_commands).map(([id, cmdDef]) => ({
              id,
              password: cmdDef.password,
              related_commands: cmdDef.related_commands,
            })),
            fullPath
          );
        }
      });
    };

    expandRecursive(campaignCommandList);
    setExpandedSections(allExpanded);

    try {
      localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify(allExpanded));
    } catch (e) {
      console.error('Failed to save tree state:', e);
    }
  };

  const collapseAll = () => {
    setExpandedSections({});
    try {
      localStorage.setItem(TREE_STORAGE_KEY, JSON.stringify({}));
    } catch (e) {
      console.error('Failed to save tree state:', e);
    }
  };

  // Recursive render function - builds full paths
  const renderCommandTree = (commands, depth = 0, parentPath = '') => {
    // Sort commands alphabetically
    const sortedCommands = [...commands].sort((a, b) => a.id.localeCompare(b.id));

    return sortedCommands.map(cmd => {
      // Build full path from root
      const fullPath = parentPath ? `${parentPath}/${cmd.id}` : cmd.id;

      const isDiscovered = discoveredSecrets.includes(fullPath);
      const hasPassword = cmd.password;
      const passwordKnown = discoveredPasswords[fullPath];
      const hasChildren = cmd.related_commands && Object.keys(cmd.related_commands).length > 0;
      const isExpanded = expandedSections[fullPath];
      const checkmark = isDiscovered ? '✓' : '○';

      return (
        <div
          key={fullPath}
          className="list-command-wrapper"
          style={{
            marginLeft: depth > 0 ? `1.5rem` : '0',
          }}
        >
          {/* Command button */}
          <button
            onClick={() => setInputCallback(fullPath)}
            className="list-command-button"
          >
            {/* Expand/collapse button - only show if has children and is discovered */}
            {hasChildren && isDiscovered ? (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSection(fullPath);
                }}
                className="list-expand-toggle"
              >
                {isExpanded ? '▼' : '▶'}
              </div>
            ) : (
              <span className="list-expand-spacer" />
            )}

            {/* Checkmark */}
            <span className="list-checkmark">
              {checkmark}
            </span>

            {/* Command name - show only the last part, not full path */}
            <span className="list-command-name">
              {cmd.id}
            </span>

            {/* Password indicator */}
            {hasPassword && (
              <span className="list-password-badge">
                {passwordKnown ? `PW:${passwordKnown}` : 'PW'}
              </span>
            )}

            {/* Child count indicator */}
            {hasChildren && isDiscovered && (
              <span className="list-child-count">
                ({Object.keys(cmd.related_commands).length})
              </span>
            )}
          </button>

          {/* Related sub-commands - show only if expanded */}
          {isDiscovered && hasChildren && isExpanded && (
            <div className="list-children-container">
              {renderCommandTree(
                Object.entries(cmd.related_commands).map(([id, cmdDef]) => ({
                  id,
                  password: cmdDef.password,
                  related_commands: cmdDef.related_commands,
                })),
                depth + 1,
                fullPath  // Pass current path as parent for next level
              )}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <Line smoke large bold>[ACCESS POINTS]</Line>
      <Line yellow top>✓ = Accessed | ▶/▼ = Expand/Collapse | [PW:****] = Password Known</Line>
      <Divider />

      {campaignCommandList.length === 0 ? (
        <Line neon>No access points available</Line>
      ) : (
        <>
          <div className="list-controls">
            <button onClick={expandAll} className="list-control-button list-expand">
              EXPAND ALL
            </button>
            <button onClick={collapseAll} className="list-control-button list-collapse">
              COLLAPSE ALL
            </button>
          </div>
          <div className="list-tree">
            {renderCommandTree(campaignCommandList)}
          </div>
        </>
      )}
    </>
  );
}
