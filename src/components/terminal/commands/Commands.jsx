import { useState, useEffect } from 'react';
import {
  Line,
  Section,
  Divider,
  CommandLink,
} from '@terminal/TerminalComponents';

import MinesweeperGame from './games/MinesweeperGame';
import MemoryGame from './games/MemoryGame';
import CyberPoker from './games/CyberPoker';

export const MINIGAME_COMMANDS = {
  "Play Nanobomb Defusal": {
    type: "component",
    content: <MinesweeperGame width={20} height={10} tileSize={2} />,
  },

  "Play Netrunner Memory Deck": {
    type: "component",
    content: <MemoryGame gridSize={4} tileSize={4} />,
  },

  "Play Netrunner Memory Deck (Hard)": {
    type: "component",
    content: <MemoryGame gridSize={6} tileSize={3.5} />,
  },

  "Play Cyber Poker": {
    type: "component",
    content: <CyberPoker />,
  },
};

// Storage key constant
const TREE_STORAGE_KEY = 'terminal-tree-expanded';

function CommandTree({ commands, discovered, passwords, depth = 0, setInputCallback }) {
  const [hoveredCommand, setHoveredCommand] = useState(null);

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

  const toggleSection = (cmdId, e) => {
    e.stopPropagation(); // Prevent triggering command link

    setExpandedSections(prev => {
      const newState = {
        ...prev,
        [cmdId]: !prev[cmdId],
      };

      // Save immediately after state update
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
    const expandRecursive = (cmds) => {
      cmds.forEach(cmd => {
        if (cmd.related_commands && Object.keys(cmd.related_commands).length > 0) {
          allExpanded[cmd.id] = true;
          expandRecursive(
            Object.entries(cmd.related_commands).map(([id, cmdDef]) => ({
              id,
              password: cmdDef.password,
              related_commands: cmdDef.related_commands,
            }))
          );
        }
      });
    };
    expandRecursive(commands);

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

  // Sort commands alphabetically
  const sortedCommands = [...commands].sort((a, b) => a.id.localeCompare(b.id));

  return (
    <>
      {/* Expand/Collapse all buttons - only show at root level */}
      {depth === 0 && (
        <div style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={expandAll}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              backgroundColor: 'rgba(79, 209, 197, 0.1)',
              border: '1px solid rgb(79, 209, 197)',
              borderRadius: '4px',
              color: 'rgb(79, 209, 197)',
              cursor: 'pointer',
              fontFamily: 'monospace',
              transition: 'all 0.2s',
              minHeight: '2.5rem',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(79, 209, 197, 0.2)';
              e.target.style.boxShadow = '0 0 10px rgba(79, 209, 197, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(79, 209, 197, 0.1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            EXPAND ALL
          </button>
          <button
            onClick={collapseAll}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              backgroundColor: 'rgba(148, 163, 184, 0.1)',
              border: '1px solid rgb(148, 163, 184)',
              borderRadius: '4px',
              color: 'rgb(148, 163, 184)',
              cursor: 'pointer',
              fontFamily: 'monospace',
              transition: 'all 0.2s',
              minHeight: '2.5rem',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(148, 163, 184, 0.2)';
              e.target.style.boxShadow = '0 0 10px rgba(148, 163, 184, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(148, 163, 184, 0.1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            COLLAPSE ALL
          </button>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {sortedCommands.map(cmd => {
          const isDiscovered = discovered.includes(cmd.id);
          const hasPassword = cmd.password;
          const passwordKnown = passwords[cmd.id];
          const hasChildren = cmd.related_commands && Object.keys(cmd.related_commands).length > 0;
          const isExpanded = expandedSections[cmd.id];
          const isHovered = hoveredCommand === cmd.id;

          const checkmark = isDiscovered ? '✓' : '○';

          return (
            <div
              key={cmd.id}
              style={{
                marginLeft: depth > 0 ? `1.5rem` : '0',
              }}
            >
              {/* Command button */}
              <button
                onClick={() => setInputCallback(cmd.id)}
                onMouseEnter={() => setHoveredCommand(cmd.id)}
                onMouseLeave={() => setHoveredCommand(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.75rem 1rem',
                  minHeight: '3rem',
                  width: '100%',
                  backgroundColor: isHovered ? 'rgba(79, 209, 197, 0.15)' : 'rgba(29, 35, 50, 0.5)',
                  border: `1px solid ${isHovered ? 'rgb(79, 209, 197)' : 'rgb(77, 167, 188)'}`,
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  textAlign: 'left',
                  color: isHovered ? 'rgb(79, 209, 197)' : 'rgb(133, 175, 231)',
                  textShadow: isHovered ? '0 0 8px rgba(79, 209, 197, 0.6)' : 'none',
                  boxShadow: isHovered ? '0 0 10px rgba(79, 209, 197, 0.3)' : 'none',
                }}
              >
                {/* Expand/collapse button - only show if has children and is discovered */}
                {hasChildren && isDiscovered ? (
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSection(cmd.id, e);
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0',
                      color: 'rgb(79, 209, 197)',
                      fontSize: '1rem',
                      minWidth: '1.5rem',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {isExpanded ? '▼' : '▶'}
                  </div>
                ) : (
                  <span style={{ minWidth: '1.5rem', display: 'inline-block', flexShrink: 0 }} />
                )}

                {/* Checkmark */}
                <span style={{
                  color: 'rgb(79, 209, 197)',
                  fontSize: '1rem',
                  minWidth: '1.25rem',
                  flexShrink: 0,
                  fontWeight: 'bold',
                }}>
                  {checkmark}
                </span>

                {/* Command name */}
                <span
                  style={{
                    flex: 1,
                    wordBreak: 'break-word',
                    fontWeight: isHovered ? 'bold' : 'normal',
                  }}
                >
                  {cmd.id}
                </span>

                {/* Password indicator */}
                {hasPassword && (
                  <span
                    style={{
                      padding: '0.25rem 0.5rem',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      color: 'rgb(251, 191, 36)',
                      backgroundColor: 'rgba(251, 191, 36, 0.15)',
                      border: '1px solid rgba(251, 191, 36, 0.4)',
                      borderRadius: '3px',
                      flexShrink: 0,
                    }}
                  >
                    {passwordKnown ? `PW:${passwordKnown}` : 'PW'}
                  </span>
                )}

                {/* Child count indicator */}
                {hasChildren && isDiscovered && (
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'rgb(148, 163, 184)',
                      fontFamily: 'monospace',
                      opacity: 0.7,
                      minWidth: '2.5rem',
                      flexShrink: 0,
                      textAlign: 'right',
                    }}
                  >
                    ({Object.keys(cmd.related_commands).length})
                  </span>
                )}
              </button>

              {/* Related sub-commands - show only if expanded */}
              {isDiscovered && hasChildren && isExpanded && (
                <div
                  style={{
                    marginTop: '0.5rem',
                    paddingLeft: '1rem',
                    borderLeft: '2px solid rgba(79, 209, 197, 0.3)',
                  }}
                >
                  <CommandTree
                    commands={Object.entries(cmd.related_commands).map(([id, cmdDef]) => ({
                      id,
                      password: cmdDef.password,
                      related_commands: cmdDef.related_commands,
                    }))}
                    discovered={discovered}
                    passwords={passwords}
                    depth={depth + 1}
                    setInputCallback={setInputCallback}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export const SYSTEM_COMMANDS = {
  help: () => ({
    content: (
      <>
        <Line smoke large bold>RCD-7 RETINAL INTERFACE v2.047</Line>
        <Divider />

        <Section title="BASIC COMMANDS:">
          <Line neon>help - Display this message</Line>
          <Line neon>list - View all access points and status</Line>
          <Line neon>clear - Clear terminal display</Line>
        </Section>

        <Section title="NAVIGATION:">
          <Line yellow top>• Type or tap any command name to execute</Line>
          <Line yellow top>• Commands marked [PW] require password authentication</Line>
          <Line yellow top>• Click ▶/▼ to expand/collapse command groups</Line>
        </Section>

        <Section title="PASSWORD SYSTEM:">
          <Line yellow top>• Passwords discovered through exploration, NPCs, documents</Line>
          <Line yellow top>• Once entered correctly, passwords are saved automatically</Line>
          <Line yellow top>• Virtual keyboard shows only valid characters</Line>
        </Section>

        <Section title="PROGRESS:">
          <Line yellow top>• Access points unlock related sub-commands when accessed</Line>
          <Line yellow top>• Terminal history persists between sessions</Line>
          <Line yellow top>• All discoveries saved to device memory</Line>
        </Section>
      </>
    )
  }),

  list: ({
    discoveredSecrets = [],
    campaignCommandList = [],
    setInputCallback = () => {},
    discoveredPasswords = {},
  }) => {
    return {
      content: (
        <>
          <Line smoke large bold>[ACCESS POINTS]</Line>
          <Line yellow top>✓ = Accessed | ▶/▼ = Expand/Collapse | [PW:****] = Password Known</Line>
          <Divider />

          {campaignCommandList.length === 0 ? (
            <Line neon>No access points available</Line>
          ) : (
            <CommandTree
              commands={campaignCommandList}
              discovered={discoveredSecrets}
              passwords={discoveredPasswords}
              setInputCallback={setInputCallback}
            />
          )}
        </>
      )
    };
  },

  clear: () => ({
    type: 'clear',
  }),

  reset: () => ({
    type: 'reset',
  })
};

export default SYSTEM_COMMANDS;
