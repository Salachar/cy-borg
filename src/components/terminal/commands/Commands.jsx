import React from 'react';

import {
  Line,
  Section,
  Divider,
} from '@terminal/TerminalComponents';

import List from '../retcomdevice/List';

import MinesweeperGame from '@terminal/retcomdevice/games/MinesweeperGame';
import MemoryGame from '@terminal/retcomdevice/games/MemoryGame';
import CyberPoker from '@terminal/retcomdevice/games/CyberPoker';

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
        <List
          discoveredSecrets={discoveredSecrets}
          campaignCommandList={campaignCommandList}
          setInputCallback={setInputCallback}
          discoveredPasswords={discoveredPasswords}
        />
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
