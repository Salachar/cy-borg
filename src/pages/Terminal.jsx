import { useEffect, useRef, useState } from 'react';

import {
  SYSTEM_COMMANDS,
  MINIGAME_COMMANDS,
} from "../components/terminal/Commands";

import TUTORIAL_APARTMENT_COMPLEX from '../components/terminal/cy_city/tutorial';
import CY_CITY_COMMANDS from '../components/terminal/cy_city';
import { LUCKY_FLIGHT_TAKEDOWN } from "../components/terminal/lucky_flight";

import TerminalShell, {
  TerminalHeader,
  TerminalHistoryArea,
  TerminalInputArea,
  TerminalHelpText,
} from '../components/terminal/TerminalShell';
import {
  getBootMessages,
  Line,
  Box,
  Divider,
  CommandLink,
} from "../components/terminal/TerminalComponents";

import PasswordPrompt from '../components/terminal/PasswordPrompt';

// ============================================================================
// ALL COMMANDS - Comment out what you don't need
// ============================================================================

const CAMPAIGN_COMMANDS = {
  ...MINIGAME_COMMANDS,
  ...TUTORIAL_APARTMENT_COMPLEX,
  ...CY_CITY_COMMANDS,
  ...LUCKY_FLIGHT_TAKEDOWN,
};

const CAMPAIGN_COMMANDS_LIST = Object.entries(CAMPAIGN_COMMANDS).map(([id, cmdDef]) => ({
  id,
  password: cmdDef.password,
  related_commands: cmdDef.related_commands,
}));


const STORAGE_KEY = 'cyborg_terminal_secrets';
const PASSWORD_STORAGE_KEY = 'cyborg_terminal_passwords';
const HISTORY_KEY = 'cyborg_terminal_history';

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getDiscoveredSecrets() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error('Failed to load discovered secrets:', e);
    return [];
  }
}

function saveDiscoveredSecrets(secrets) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(secrets));
  } catch (e) {
    console.error('Failed to save discovered secrets:', e);
  }
}

function getDiscoveredPasswords() {
  try {
    const data = localStorage.getItem(PASSWORD_STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.error('Failed to load discovered passwords:', e);
    return {};
  }
}

function saveDiscoveredPasswords(passwords) {
  try {
    localStorage.setItem(PASSWORD_STORAGE_KEY, JSON.stringify(passwords));
  } catch (e) {
    console.error('Failed to save discovered passwords:', e);
  }
}

// Flatten commands for lookup (parent + all nested related_commands, recursively)
function flattenCommands(commands, flat = {}) {
  for (const [key, cmd] of Object.entries(commands)) {
    flat[key] = cmd;

    // Recursively flatten nested related_commands
    if (cmd.related_commands && typeof cmd.related_commands === 'object') {
      flattenCommands(cmd.related_commands, flat);
    }
  }

  return flat;
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Related Commands Component
// function RelatedCommands({ commands, onSelect }) {
//   return (
//     <div
//       className="border-2 p-4 my-2"
//       style={{
//         borderColor: 'rgb(77, 167, 188)',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       }}
//     >
//       <div
//         className="font-bold mb-2"
//         style={{ color: 'rgb(79, 209, 197)' }}
//       >
//         ━━━ COMMANDS AVAILABLE ━━━
//       </div>
//       <div className="space-y-1">
//         {commands.map(cmd => (
//           <div key={cmd}>
//             <span
//               className="cursor-pointer hover:underline"
//               style={{ color: 'rgb(0, 170, 40)' }}
//               onClick={() => onSelect(cmd)}
//             >
//               → {cmd}
//             </span>
//             <span className="text-xs ml-2"
//                   style={{ color: 'rgba(0, 170, 40, 0.5)' }}>
//               [Click to execute]
//             </span>
//           </div>
//         ))}
//       </div>
//       <div
//         className="text-xs mt-3 italic"
//         style={{ color: 'rgb(0, 170, 40)' }}
//       >
//         Available via 'list'
//       </div>
//     </div>
//   );
// }

// Related Commands Component
function RelatedCommands({ commands, onSelect, flatCommands }) {
  return (
    <Box color="cyan" className="my-2">
      <Line teal bold>━━━ RELATED COMMANDS AVAILABLE ━━━</Line>
      <Divider />
      <div className="space-y-1">
        {commands.map(cmd => {
          const commandDef = flatCommands[cmd];
          const hasPassword = commandDef?.password;

          return (
            <div key={cmd}>
              <Line neon>
                → <CommandLink command={cmd} onClick={onSelect} />
                {hasPassword && (
                  <span className="text-xs ml-2" style={{ color: 'rgb(250, 204, 21)' }}>
                    [PW]
                  </span>
                )}
              </Line>
            </div>
          );
        })}
      </div>
      <Divider />
      <Line neon small>
        These commands are now available via 'list'
      </Line>
    </Box>
  );
}

// History Entry Component
function HistoryEntry({ entry, index, onCommandSelect, flatCommands }) {
  switch (entry.type) {
    case 'password_prompt':
    case 'component':
      return entry.content;
    case 'user':
      return (
        <Line neon>
          <Line teal inline>{`CY_NET://>`}</Line> {entry.content}
        </Line>
      );
    case 'error':
      return (
        <div className="whitespace-pre-wrap" style={{ color: 'rgb(252, 129, 129)' }}>
          {entry.content}
        </div>
      );
    case 'related_commands':
      return (
        <RelatedCommands
          commands={entry.commands}
          onSelect={onCommandSelect}
          flatCommands={flatCommands}
        />
      );
    default: // generally "system"
      return (
        <Line neon>
          {typeof entry.content === 'string'
            ? <div className="whitespace-pre-wrap">{entry.content}</div>
            : entry.content
          }
        </Line>
      );
  }
}

// ============================================================================
// MAIN TERMINAL COMPONENT
// ============================================================================

export default function Terminal() {
  // State
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [discoveredSecrets, setDiscoveredSecrets] = useState([]);
  const [discoveredPasswords, setDiscoveredPasswords] = useState({});
  const [isBooting, setIsBooting] = useState(true);
  const [passwordMode, setPasswordMode] = useState(false); // Track if password prompt is active

  const [hasLoadedHistory, setHasLoadedHistory] = useState(false);

  // Refs
  const hasBootedRef = useRef(false);
  const inputRef = useRef(null);
  const historyEndRef = useRef(null);
  const historyContainerRef = useRef(null);

  // Flatten campaign commands once for lookup
  const flatCommands = useRef(flattenCommands(CAMPAIGN_COMMANDS)).current;

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Load discovered secrets and passwords on mount
  useEffect(() => {
    if (hasBootedRef.current) return;

    const initializeTerminal = async () => {
      const secrets = getDiscoveredSecrets();
      const passwords = getDiscoveredPasswords();
      setDiscoveredSecrets(secrets);
      setDiscoveredPasswords(passwords);

      // Pull saved history before boot sequence modifies it
      let savedHistory = [];
      try {
        savedHistory = JSON.parse(localStorage.getItem(HISTORY_KEY));
        if (!Array.isArray(savedHistory)) savedHistory = [];
      } catch (e) {
        savedHistory = [];
      }

      await bootSequence(savedHistory.length >= 1);

      savedHistory.forEach((entry) => {
        const type = entry.cmd || entry.type;

        if (type === 'user') {
          addToHistory({
            type,
            content: entry.content,
          });
          return;
        }

        const command = flatCommands[type] || SYSTEM_COMMANDS[type];

        if (!command) {
          console.warn('No command found for', type)
          return;
        }

        let displayContent = null;
        if (typeof command === 'function') {
          // System level commands are special funcions to take extra shit
          displayContent = command({
            discoveredSecrets: secrets,
            campaignCommandList: CAMPAIGN_COMMANDS_LIST,
            setInputCallback: setInput,
            discoveredPasswords: passwords,
          }).content;
        } else if (typeof command.content === 'function') {
          displayContent = command.content();
        } else {
          displayContent = command.content;
        }

        if (!displayContent) return;

        addToHistory({
          type,
          content: displayContent,
        });
      });
    };

    initializeTerminal();
    setTimeout(() => {
      setHasLoadedHistory(true);
    }, 100)
    hasBootedRef.current = true;
  }, []);

  // Save discovered secrets whenever they change
  useEffect(() => {
    if (discoveredSecrets.length > 0) {
      saveDiscoveredSecrets(discoveredSecrets);
    }
  }, [discoveredSecrets]);

  // Save discovered passwords whenever they change
  useEffect(() => {
    if (Object.keys(discoveredPasswords).length > 0) {
      saveDiscoveredPasswords(discoveredPasswords);
    }
  }, [discoveredPasswords]);

  // Auto-scroll to bottom
  useEffect(() => {
    if (historyContainerRef.current) {
      const savable_history = [];
      for (let i = 0; i < history.length; ++i) {
        const save = {};
        const entry = history[i];
        if (typeof entry.content === 'string') {
          save.content = entry.content;
        }
        if (!save.content && entry.type === 'system') {
          // System ties to no command with content, so there if there is no
          // content for it, there is nothing to display
          continue;
        }
        save.type = entry.type;
        savable_history.push(save);
      }
      localStorage.setItem(HISTORY_KEY, JSON.stringify(savable_history));

      // Use setTimeout to ensure DOM has updated
      if (!hasLoadedHistory) {
        historyContainerRef.current.scrollTo({
          top: historyContainerRef.current.scrollHeight,
          behavior: 'instant',
        });
      } else {
        setTimeout(() => {
          historyContainerRef.current.scrollTo({
            top: historyContainerRef.current.scrollHeight,
            behavior: 'smooth',
          });
        }, 100);
      }
    }
  }, [history]);

  // ============================================================================
  // HELPER FUNCTIONS
  // ============================================================================

  const addToHistory = (entry) => {
    setHistory(prev => [...prev, { ...entry, timestamp: Date.now() }]);
  };

  const bootSequence = async (hasHistory) => {
    const bootMessages = getBootMessages(setInput);
    for (let i = 0; i < bootMessages.length; i++) {
      if (!hasHistory) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      addToHistory({
        type: 'system',
        content: bootMessages[i].content,
      });
    }
    setIsBooting(false);
  };

  // ============================================================================
  // COMMAND EXECUTION
  // ============================================================================

  const executeCommandWithResult = (cmd, commandDef, save = true) => {
    let endCmd = commandDef;
    if (commandDef && typeof commandDef.content === 'function') {
      endCmd = result.content();
    }
    if (!discoveredSecrets.includes(cmd) && save) {
      setDiscoveredSecrets(prev => [...prev, cmd]);
    }

    // Add result to history
    if (endCmd.type === 'clear') {
      localStorage.setItem(HISTORY_KEY, JSON.stringify([]));
      setHistory([]);
      return;
    }

    addToHistory({
      type: cmd || 'system',
      content: endCmd.content,
    });
    // Don't automatically unlock sub-commands - they'll be discovered when accessed
    // But DO show a notification that related commands are now available
    const relatedKeys = Object.keys(endCmd?.related_commands || {});
    if (relatedKeys.length) {
      addToHistory({
        type: 'related_commands',
        commands: relatedKeys,
      });
    }
  };

  const executeCommand = (commandStr) => {
    const trimmed = commandStr.trim();
    if (!trimmed) return;
    // If in password mode, don't execute commands - password prompt handles input
    if (passwordMode) return;
    // Add to command history
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);
    // Add user input to history
    addToHistory({
      type: 'user',
      content: trimmed,
    });
    // Parse command
    // const parts = trimmed.split(' ');
    const cmd = trimmed; // .toLowerCase();
    // Check command types in order
    if (handleSystemCommand(cmd)) return;
    if (handleCampaignCommand(cmd)) return;
    // Unknown command
    addToHistory({
      type: 'error',
      content: `ERROR: Command not recognized. Type 'help' for available commands.`,
    });
  };

  const handlePasswordSubmit = (command, commandDef, password) => {
    // Track that this password was discovered
    setDiscoveredPasswords(prev => ({
      ...prev,
      [command]: password,
    }));
    // Execute the command
    executeCommandWithResult(command, commandDef);
  };

  const handleSystemCommand = (cmd) => {
    if (!SYSTEM_COMMANDS[cmd]) return false;

    const result = SYSTEM_COMMANDS[cmd]({
      discoveredSecrets,
      campaignCommandList: CAMPAIGN_COMMANDS_LIST,
      setInputCallback: setInput,
      discoveredPasswords,
    });

    if (result.type === 'reset') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
      localStorage.setItem(PASSWORD_STORAGE_KEY, JSON.stringify({}));
      localStorage.setItem(HISTORY_KEY, JSON.stringify([]));
      setDiscoveredPasswords({});
      setDiscoveredSecrets([]);
      setHistory([]);
      setIsBooting(true);
      bootSequence();
      return true;
    }

    if (result.type === 'clear') {
      setHistory([]);
      return true;
    }

    addToHistory({
      type: cmd || result.type || 'system',
      content: result.content,
    });

    return true;
  };

  const handleCampaignCommand = (cmd) => {
    // Look up in flattened commands (includes parent + all related sub-commands)
    if (!flatCommands[cmd]) return false;

    const commandDef = flatCommands[cmd];

    // Check if password required and password not yet discovered
    if (commandDef.password && !discoveredPasswords[cmd]) {
      // Enable password mode
      setPasswordMode(true);

      // Show password prompt inline
      addToHistory({
        type: 'password_prompt',
        content: (
          <PasswordPrompt
            key={`password_${cmd}_${Date.now()}`}
            command={cmd}
            password={commandDef.password.pw}
            hint={commandDef.password.hint}
            hintStrength={commandDef.password.hintStrength || 1}
            onSubmit={(password) => {
              setPasswordMode(false);
              handlePasswordSubmit(cmd, commandDef, password);
            }}
            onCancel={() => {
              setPasswordMode(false);
              addToHistory({
                type: cmd || 'system',
                content: 'Password entry cancelled',
              });
            }}
          />
        ),
      });
      return true;
    }

    // No password required (or password already discovered) - execute directly
    executeCommandWithResult(cmd, commandDef);
    return true;
  };

  // ============================================================================
  // EVENT HANDLERS
  // ============================================================================

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!passwordMode) {
      executeCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    // Don't handle shortcuts in password mode
    if (passwordMode) return;

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      handleHistoryNavigation('up');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      handleHistoryNavigation('down');
    } else if (e.key === 'Tab') {
      handleAutocomplete(e);
    }
  };

  const handleHistoryNavigation = (direction) => {
    if (commandHistory.length === 0) return;

    let newIndex = historyIndex;

    if (direction === 'up') {
      newIndex = historyIndex === -1
        ? commandHistory.length - 1
        : Math.max(0, historyIndex - 1);
    } else if (direction === 'down') {
      newIndex = historyIndex + 1;

      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput('');
        return;
      }
    }

    setHistoryIndex(newIndex);
    setInput(commandHistory[newIndex]);
  };

  const handleAutocomplete = (e) => {
    e.preventDefault();

    const partial = input; // .toLowerCase();
    if (!partial) return;

    // Get available commands (system + all campaign commands including nested ones)
    const available = [
      ...Object.keys(SYSTEM_COMMANDS),
      ...Object.keys(flatCommands),
    ];

    const matches = available.filter(cmd => cmd.startsWith(partial));

    if (matches.length === 1) {
      // Single match - complete it
      setInput(matches[0]);
    } else if (matches.length > 1) {
      // Multiple matches - show them
      addToHistory({
        type: 'system',
        content: `Possible commands: ${matches.join(', ')}`,
      });
    }
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  const promptPrefix = 'CY_NET://>';
  const inputPlaceholder = passwordMode ? 'Password prompt active...' : 'Enter command...';

  return (
    <TerminalShell
      header={<TerminalHeader />}

      historyArea={
        <TerminalHistoryArea
          historyContainerRef={historyContainerRef}
          historyEndRef={historyEndRef}
        >
          {history.map((entry, index) => (
            <div key={`${entry.timestamp}_${index}`} className="mb-2">
              <HistoryEntry
                entry={entry}
                index={index}
                onCommandSelect={setInput}
                flatCommands={flatCommands}
              />
            </div>
          ))}
        </TerminalHistoryArea>
      }

      inputArea={
        <TerminalInputArea
          onSubmit={handleSubmit}
          promptPrefix={promptPrefix}
          passwordMode={passwordMode}
          input={input}
          onInputChange={(e) => !passwordMode && setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          isBooting={isBooting}
          inputPlaceholder={inputPlaceholder}
          inputRef={inputRef}
          onCancelPassword={() => {}}
        />
      }

      helpText={<TerminalHelpText passwordMode={passwordMode} />}
    />
  );
}
