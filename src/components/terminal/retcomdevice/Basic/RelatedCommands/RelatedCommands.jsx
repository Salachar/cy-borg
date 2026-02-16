import List from '../List/List';

import {
  getDiscoveredSecrets,
  getDiscoveredPasswords,
} from '@utils/terminal';

export default function RelatedCommands({ related_commands = {}, parentPath = '', onSelect }) {
  if (!related_commands || Object.keys(related_commands).length === 0) return null;

  const listCommands = Object.entries(related_commands).map(([id, cmdDef]) => ({
    id,
    password: cmdDef.password,
    mastermind: cmdDef.mastermind,
    icebreaker: cmdDef.icebreaker,
    related_commands: cmdDef.related_commands,
  }));

  return (
    <List
      discoveredSecrets={getDiscoveredSecrets()}
      discoveredPasswords={getDiscoveredPasswords()}
      campaignCommandList={listCommands}
      setInputCallback={onSelect}
      parentPath={parentPath}
    />
  );
}
