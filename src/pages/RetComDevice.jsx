import { useEffect, useRef, useState } from 'react';

import {
  SYSTEM_COMMANDS,
  MINIGAME_COMMANDS,
} from "@terminal/commands/Commands";

import CY_CITY_COMMANDS from '@terminal/commands/cy_city';
import LUCKY_FLIGHT_TAKEDOWN_COMMANDS from "@terminal/commands/lucky_flight_campaign";
import THE_55_COMMANDS from '../components/terminal/commands/the_55';
import DOC_JOY_CLINIC_COMMANDS from '../components/terminal/commands/reaper_repo';

import TerminalShell, {
  TerminalHistoryArea,
  TerminalInputArea,
} from '@terminal/TerminalShell';
import {
  Line,
} from "@terminal/TerminalComponents";
import {
  RelatedCommands,
  PasswordPrompt,
  MastermindHack,
  IceBreaker,
  HistoryEntryWrapper,
} from "@terminal/retcomdevice";

import {
  STORAGE_KEY,
  PASSWORD_STORAGE_KEY,
  HISTORY_KEY,
  COLLAPSED_STORAGE_KEY,
  getDiscoveredSecrets,
  saveDiscoveredSecrets,
  getDiscoveredPasswords,
  saveDiscoveredPasswords,
} from '@utils/terminal';

// ============================================================================
// ALL COMMANDS - Comment out what you don't need
// ============================================================================

const CAMPAIGN_COMMANDS = {
  ...CY_CITY_COMMANDS,
  ...LUCKY_FLIGHT_TAKEDOWN_COMMANDS,
  ...THE_55_COMMANDS,
  ...DOC_JOY_CLINIC_COMMANDS,
  ...MINIGAME_COMMANDS,
};

const CAMPAIGN_COMMANDS_LIST = Object.entries(CAMPAIGN_COMMANDS).map(([id, cmdDef]) => ({
  id,
  mastermind: cmdDef.blocker,
  icebreaker: cmdDef.icebreaker,
  password: cmdDef.password,
  related_commands: cmdDef.related_commands,
}));

// Path-based command lookup - traverses tree structure
function findCommandByPath(path, commands) {
  const parts = path.split('/');
  let current = commands;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (!current[part]) {
      return null;
    }

    current = current[part];

    // If there are more parts, drill into related_commands
    if (i < parts.length - 1) {
      if (!current.related_commands) {
        return null;
      }
      current = current.related_commands;
    }
  }

  return current;
}

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// History Entry Component
function HistoryEntry({ entry, index, onCommandSelect, collapsedEntries, setCollapsedEntries, onRemove }) {
  const entryId = `${entry.timestamp}_${index}`;
  const isCollapsed = collapsedEntries[entryId] || false;

  const setIsCollapsed = (collapsed) => {
    setCollapsedEntries(prev => {
      const newState = { ...prev, [entryId]: collapsed };
      try {
        localStorage.setItem(COLLAPSED_STORAGE_KEY, JSON.stringify(newState));
      } catch (e) {
        console.error('Failed to save collapsed state:', e);
      }
      return newState;
    });
  };

  // Get display label for the entry
  const getEntryLabel = () => {
    if (entry.type === 'user') return 'USER INPUT';
    if (entry.type === 'error') return 'ERROR';
    if (entry.type === 'related_commands') return 'RELATED COMMANDS';
    if (entry.type === 'password_prompt') return `PASSWORD: ${entry.command || 'UNKNOWN'}`;
    return entry.type || 'SYSTEM';
  };

  // Render the actual content
  const renderContent = () => {
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
            commandList={entry.commandList || []}
            onSelect={onCommandSelect}
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
  };

  return (
    <HistoryEntryWrapper
      entryId={entryId}
      commandPath={getEntryLabel()}
      onRemove={onRemove}
      collapsedState={[isCollapsed, setIsCollapsed]}
    >
      {renderContent()}
    </HistoryEntryWrapper>
  );
}

// ============================================================================
// MAIN TERMINAL COMPONENT
// ============================================================================

export default function RetComDevice() {
  // State
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [discoveredSecrets, setDiscoveredSecrets] = useState([]);
  const [discoveredPasswords, setDiscoveredPasswords] = useState({});
  const [hasLoadedHistory, setHasLoadedHistory] = useState(false);
  const [collapsedEntries, setCollapsedEntries] = useState({});

  // Refs
  const hasBootedRef = useRef(false);
  const inputRef = useRef(null);
  const historyEndRef = useRef(null);
  const historyContainerRef = useRef(null);

  const [terminalActivity, setTerminalActivity] = useState(0);

  // ============================================================================
  // EFFECTS
  // ============================================================================

  // Load collapsed state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(COLLAPSED_STORAGE_KEY);
      if (saved) {
        setCollapsedEntries(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load collapsed state:', e);
    }
  }, []);

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

      // Check system commands first
      const systemCommand = SYSTEM_COMMANDS[type];
      if (systemCommand) {
        const displayContent = systemCommand({
          discoveredSecrets: secrets,
          campaignCommandList: CAMPAIGN_COMMANDS_LIST,
          setInputCallback: setInput,
          discoveredPasswords: passwords,
        }).content;

        if (displayContent) {
          addToHistory({
            type,
            content: displayContent,
          });
        }
        return;
      }

      // Try path-based lookup for campaign commands
      const commandDef = findCommandByPath(type, CAMPAIGN_COMMANDS);
      if (!commandDef) {
        console.warn('No command found for', type);
        return;
      }

      let displayContent = null;
      if (typeof commandDef.content === 'function') {
        displayContent = commandDef.content();
      } else {
        displayContent = commandDef.content;
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

  const removeFromHistory = (entryId) => {
    setHistory(prev => prev.filter((entry, index) => `${entry.timestamp}_${index}` !== entryId));

    // Also remove from collapsed state
    setCollapsedEntries(prev => {
      const newState = { ...prev };
      delete newState[entryId];
      try {
        localStorage.setItem(COLLAPSED_STORAGE_KEY, JSON.stringify(newState));
      } catch (e) {
        console.error('Failed to save collapsed state:', e);
      }
      return newState;
    });
  };

  // ============================================================================
  // COMMAND EXECUTION
  // ============================================================================

  const executeCommandWithResult = (path, commandDef, save = true) => {
    let endCmd = commandDef;
    if (commandDef && typeof commandDef.content === 'function') {
      endCmd = commandDef.content();
    }
    if (!discoveredSecrets.includes(path) && save) {
      setDiscoveredSecrets(prev => [...prev, path]);
    }

    // Add result to history
    if (endCmd.type === 'clear') {
      localStorage.setItem(HISTORY_KEY, JSON.stringify([]));
      setHistory([]);
      return;
    }

    addToHistory({
      type: path || 'system',
      content: endCmd.content,
    });

    const related_commands_list = Object.entries(endCmd?.related_commands || {}).map(([id, cmdDef]) => ({
      id,
      mastermind: cmdDef.blocker,
      icebreaker: cmdDef.icebreaker,
      password: cmdDef.password,
    }));

    const relatedPaths = related_commands_list.map(cmd => `${path}/${cmd.id}`);

    if (relatedPaths.length) {
      addToHistory({
        type: 'related_commands',
        commands: relatedPaths,
        commandList: related_commands_list,
      });
    }
  };

  const executeCommand = (commandStr) => {
    const trimmed = commandStr.trim();
    if (!trimmed) return;
    // Add to command history
    setCommandHistory(prev => [...prev, trimmed]);
    setHistoryIndex(-1);
    // Check command types in order
    if (handleSystemCommand(trimmed)) return;
    if (handleCampaignCommand(trimmed)) return;
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
      localStorage.setItem(COLLAPSED_STORAGE_KEY, JSON.stringify({}));
      setDiscoveredPasswords({});
      setDiscoveredSecrets([]);
      setHistory([]);
      setCollapsedEntries({});
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

  const handleCampaignCommand = (path) => {
    // Look up command by path
    const commandDef = findCommandByPath(path, CAMPAIGN_COMMANDS);
    if (!commandDef) return false;

    const isDiscovered = Boolean(discoveredPasswords[path]);
    if (!isDiscovered) {
      if (commandDef.mastermind) {
        addToHistory({
          type: 'password_prompt',
          command: path,
          content: (
            <MastermindHack
              command={path}
              commandDef={commandDef}
              difficulty={commandDef.mastermind.difficulty}
              onSuccess={(cmdPath, commandDef, answer) => {
                setDiscoveredPasswords(prev => ({
                  ...prev,
                  [cmdPath]: answer,
                }));
                executeCommandWithResult(cmdPath, commandDef);
              }}
            />
          ),
        });
        return true;
      }
      if (commandDef.icebreaker) {
        addToHistory({
          type: 'password_prompt',
          command: path,
          content: (
            <IceBreaker
              command={path}
              commandDef={commandDef}
              difficulty={commandDef.icebreaker.difficulty}
              onSuccess={(cmdPath, commandDef) => {
                setDiscoveredPasswords(prev => ({
                  ...prev,
                  [cmdPath]: 'CRACKED',
                }));
                executeCommandWithResult(cmdPath, commandDef);
              }}
            />
          ),
        });
        return true;
      }
      // Check if password required and password not yet discovered
      if (commandDef.password) {
        addToHistory({
          type: 'password_prompt',
          command: path,
          content: (
            <PasswordPrompt
              key={`password_${path}_${Date.now()}`}
              command={path}
              commandDef={commandDef}
              password={commandDef.password.pw}
              hint={commandDef.password.hint}
              hintStrength={commandDef.password.hintStrength || 1}
              onSubmit={(cmdPath, commandDef, password) => {
                setDiscoveredPasswords(prev => ({
                  ...prev,
                  [cmdPath]: password,
                }));
                executeCommandWithResult(cmdPath, commandDef);
              }}
            >
              {commandDef.password?.content ? commandDef.password.content : null}
            </PasswordPrompt>
          ),
        });
        return true;
      }
    }

    // No password required (or password already discovered) - execute directly
    executeCommandWithResult(path, commandDef);
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
                collapsedEntries={collapsedEntries}
                setCollapsedEntries={setCollapsedEntries}
                onRemove={removeFromHistory}
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
