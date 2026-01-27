import { useState } from 'react';
import { Line } from '@terminal/TerminalComponents';
import CommandButton from './CommandButton';

import { TREE_STORAGE_KEY } from '@utils/terminal';

import './list.css';

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

  // Recursive render function - builds full paths
  const renderCommandTree = (commands, depth = 0, parentPath = '') => {
    // Sort commands alphabetically
    const sortedCommands = [...commands].sort((a, b) => a.id.localeCompare(b.id));

    return sortedCommands.map(cmd => {
      // Build full path from root
      const fullPath = parentPath ? `${parentPath}/${cmd.id}` : cmd.id;

      const isDiscovered = discoveredSecrets.includes(fullPath);
      const hasBlocker = !!(cmd.password || cmd.blocker);
      // Auto bypass commands with no blocker
      const isBypassed = hasBlocker ? discoveredPasswords[fullPath] : true;
      const bypassLabel = cmd.password ? 'PW' : 'HACK';
      const hasChildren = cmd.related_commands && Object.keys(cmd.related_commands).length > 0;
      const isExpanded = expandedSections[fullPath];
      const childCount = hasChildren ? Object.keys(cmd.related_commands).length : 0;

      return (
        <div
          key={fullPath}
          className="list-command-wrapper"
          style={{
            marginLeft: depth > 0 ? `1.5rem` : '0',
          }}
        >
          {/* Command button */}
          <CommandButton
            fullPath={fullPath}
            displayName={cmd.id}
            isDiscovered={isDiscovered}
            hasBlocker={hasBlocker}
            isBypassed={isBypassed}
            bypassLabel={bypassLabel}
            hasChildren={hasChildren}
            childCount={childCount}
            isExpanded={isExpanded}
            onToggleExpand={(e) => {
              e.stopPropagation();
              toggleSection(fullPath);
            }}
            onClick={() => setInputCallback(fullPath)}
          />

          {/* Related sub-commands - show only if expanded */}
          {isBypassed && hasChildren && isExpanded && (
            <div className="list-children-container">
              {renderCommandTree(
                Object.entries(cmd.related_commands).map(([id, cmdDef]) => ({
                  id,
                  password: cmdDef.password,
                  related_commands: cmdDef.related_commands,
                  blocker: cmdDef.blocker,
                })),
                depth + 1,
                fullPath
              )}
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <>
      {/* <Line smoke large bold>[ACCESS POINTS]</Line> */}
      {/* <Line yellow top>✓ = Accessed | ▶/▼ = Expand/Collapse | [PW:****] = Password Known</Line> */}

      {campaignCommandList.length === 0 ? (
        <Line neon>No access points available</Line>
      ) : (
        <div className="list-tree">
          {renderCommandTree(campaignCommandList)}
        </div>
      )}
    </>
  );
}
