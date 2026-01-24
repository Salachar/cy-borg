import { useEffect, useRef, useState } from 'react';

import {
  SYSTEM_COMMANDS,
  MINIGAME_COMMANDS,
} from "@terminal/commands/Commands";
import CY_CITY_COMMANDS from '@terminal/commands/cy_city';
import LUCKY_FLIGHT_TAKEDOWN_COMMANDS from "@terminal/commands/lucky_flight_campaign";

import TerminalShell, {
  TerminalHistoryArea,
  TerminalInputArea,
} from '@terminal/TerminalShell';
import {
  Line,
} from "@terminal/TerminalComponents";
import {
  RelatedCommands,
} from "@terminal/retcomdevice";

import PasswordPrompt from '@terminal/retcomdevice/PasswordPrompt';

// ============================================================================
// ALL COMMANDS - Comment out what you don't need
// ============================================================================

const CAMPAIGN_COMMANDS = {
  ...CY_CITY_COMMANDS,
  ...LUCKY_FLIGHT_TAKEDOWN_COMMANDS,
  ...MINIGAME_COMMANDS,
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
    if (flat[key]) {
      console.log(`Existing key found: ${key}`)
    }
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
          commands={entry.commands || []}
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
  const [hasLoadedHistory, setHasLoadedHistory] = useState(false);

  // Refs
  const hasBootedRef = useRef(false);
  const inputRef = useRef(null);
  const historyEndRef = useRef(null);
  const historyContainerRef = useRef(null);

  // Flatten campaign commands once for lookup
  const flatCommands = useRef(flattenCommands(CAMPAIGN_COMMANDS)).current;

  const [terminalActivity, setTerminalActivity] = useState(0);

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Load discovered secrets and passwords on mount
  useEffect(() => {
    if (hasBootedRef.current) return;

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

    // Prevents animated scrolling on load, so its instant
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
      addToHistory({
        type: 'password_prompt',
        content: (
          <PasswordPrompt
            key={`password_${cmd}_${Date.now()}`}
            command={cmd}
            commandDef={commandDef}
            password={commandDef.password.pw}
            hint={commandDef.password.hint}
            hintStrength={commandDef.password.hintStrength || 1}
            onSubmit={(cmd, commandDef, password) => {
              setDiscoveredPasswords(prev => ({
                ...prev,
                [cmd]: password,
              }));
              executeCommandWithResult(cmd, commandDef);
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

  return (
    <TerminalShell
      executeCommand={executeCommand}
      terminalActivity={terminalActivity}

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
          onSubmit={(e) => {
            e.preventDefault();
            setTerminalActivity(prev => prev + 1);
            executeCommand(input);
            setInput('');
          }}
          input={input}
          onInputChange={(e) => setInput(e.target.value)}
          inputRef={inputRef}
        />
      }
    />
  );
}
