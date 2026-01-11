import {
  Line,
  Section,
  Divider,
  CommandLink,
} from './TerminalComponents';

import MinesweeperGame from './MinesweeperGame';

export const MINIGAME_COMMANDS = {
  play_nanobomb_defusal: {
    type: "component",
    content: <MinesweeperGame width={20} height={10} tileSize={2} />,
  },

  // play_nanobomb_defusal_quick: {
  //   type: "component",
  //   content: <MinesweeperGame width={10} height={8} tileSize={1.5} />,
  // },
  // play_nanobomb_defusal_easy: {
  //   type: "component",
  //   content: <MinesweeperGame width={12} height={10} tileSize={2} bombChance={3} />,
  // },
  // play_nanobomb_defusal_hard: {
  //   type: "component",
  //   content: <MinesweeperGame width={16} height={12} tileSize={1.5} bombChance={8} />,
  // },
  // play_nanobomb_defusal_expert: {
  //   type: "component",
  //   content: <MinesweeperGame width={20} height={16} tileSize={1.2} bombChance={10} />,
  // },
};

export const SYSTEM_COMMANDS = {
  help: ({ setInputCallback }) => ({
    content: (
      <>
        <Line smoke large bold>CY_NET TERMINAL v2.047</Line>
        <Divider />

        <Section title="BASIC COMMANDS:">
          <Line neon><CommandLink command="help" onClick={setInputCallback} /> - Display this message</Line>
          <Line neon><CommandLink command="list" onClick={setInputCallback} /> - Show all access points and their status</Line>
          <Line neon><CommandLink command="clear" onClick={setInputCallback} /> - Clear terminal history</Line>
          <Line neon><CommandLink command="about" onClick={setInputCallback} /> - System information</Line>
          <Line neon><CommandLink command="uptime" onClick={setInputCallback} /> - Display system uptime</Line>
          <Line neon><CommandLink command="date" onClick={setInputCallback} /> - Display current date/time</Line>
          <Line neon><CommandLink command="reset" onClick={setInputCallback} /> - Reset RetComDevice</Line>
        </Section>

        <Section title="NAVIGATION:">
          <Line yellow top>• Type (or click) any command name to execute it</Line>
          <Line yellow top>• Use Tab for autocomplete</Line>
          <Line yellow top>• Use ↑↓ arrows to cycle through command history</Line>
          <Line yellow top>• Commands marked with [PW] require passwords</Line>
          <Line yellow top>• Find passwords through exploration, NPCs, or documents</Line>
        </Section>

        <Section title="DISCOVERY:">
          <Line yellow top>• Access points may unlock related sub-commands</Line>
          <Line yellow top>• Use 'list' to see your progress through each access point</Line>
          <Line yellow top>• Discovered passwords are saved for easy reference</Line>
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
    // Recursive component to render command hierarchy
    const CommandTree = ({ commands, discovered, passwords, depth = 0 }) => {
      // Sort commands alphabetically
      const sortedCommands = [...commands].sort((a, b) => a.id.localeCompare(b.id));

      return (
        <>
          {sortedCommands.map(cmd => {
            const isDiscovered = discovered.includes(cmd.id);
            const hasPassword = cmd.password;
            const passwordKnown = passwords[cmd.id];
            const prefix = depth === 0 ? '' : '→ ';
            const checkmark = isDiscovered ? '✓' : '○';
            const textColor = depth === 0 ? 'text-cy-cyan' : 'text-[#00aa28]';

            return (
              <div
                key={cmd.id}
                className="mb-2"
                style={{
                  marginLeft: depth === 0 ? '' : `${depth}rem`,
                }}
              >
                {/* Command line */}
                <div className="flex items-center gap-2">
                  <span className={textColor}>
                    {checkmark}
                  </span>
                  {prefix && <span className={textColor}>{prefix}</span>}
                  <CommandLink command={cmd.id} onClick={setInputCallback} />
                  {hasPassword && (
                    <span className="text-yellow-400 text-sm">
                      [PW{passwordKnown ? `:${passwordKnown}` : ''}]
                    </span>
                  )}
                </div>

                {/* Related sub-commands - show all nested commands if parent accessed */}
                {isDiscovered && cmd.related_commands && Object.keys(cmd.related_commands).length > 0 && (
                  <div className="mt-1">
                    <CommandTree
                      commands={Object.entries(cmd.related_commands).map(([id, cmdDef]) => ({
                        id,
                        password: cmdDef.password,
                        related_commands: cmdDef.related_commands,
                      }))}
                      discovered={discovered}
                      passwords={passwords}
                      depth={depth + 1}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </>
      );
    };

    return {
      content: (
        <>
          <Line smoke large bold>[ACCESS POINTS]</Line>
          <Line yellow top>✓ = Accessed | [PW:****] = Password Known</Line>
          <Divider />

          {campaignCommandList.length === 0 ? (
            <Line neon>No access points available</Line>
          ) : (
            <CommandTree
              commands={campaignCommandList}
              discovered={discoveredSecrets}
              passwords={discoveredPasswords}
            />
          )}
        </>
      )
    };
  },

  clear: () => ({
    type: 'clear',
  }),

  about: () => ({
    content: (
      <>
        <Line smoke large bold>CY_NET TERMINAL v2.047</Line>
        <Line neon>Unsecured connection to CY network</Line>
        <Line neon>Unauthorized access monitored and logged</Line>
        <Divider />
        <Line yellow top>Type 'help' for usage information</Line>
        <Line yellow top>Type 'list' to see all access points</Line>
      </>
    )
  }),

  uptime: () => ({
    content: `System uptime: 420d 69h 13m 37s`
  }),

  date: () => ({
    content: new Date().toString()
  }),

  reset: () => ({
    type: 'reset',
  })
};

export default SYSTEM_COMMANDS;
