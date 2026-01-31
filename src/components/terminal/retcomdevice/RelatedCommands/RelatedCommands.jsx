import { Line, Divider } from '@terminal/TerminalComponents';
import CommandButton from '../CommandButton/CommandButton';

import { getDiscoveredSecrets, getDiscoveredPasswords } from '@utils/terminal';

export default function RelatedCommands({ commands = [], commandList = [], onSelect }) {
  if (commands.length === 0) return null;

  const discoveredSecrets = getDiscoveredSecrets();
  const discoveredPasswords = getDiscoveredPasswords();

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Divider color="cyan" />

      <Line cyan bold style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
        ┌─ AVAILABLE ACCESS POINTS ─┐
      </Line>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {commands.map((fullPath, idx) => {
          // Get metadata for this command
          const cmdMeta = commandList[idx] || {};
          const displayName = fullPath.split('/').pop();

          const isDiscovered = discoveredSecrets.includes(fullPath);
          const hasBlocker = !!(cmdMeta.password || cmdMeta.mastermind || cmdMeta.icebreaker);
          const isBypassed = discoveredPasswords[fullPath];
          const bypassLabel = cmdMeta.password ? 'PW' : 'HACK';

          return (
            <CommandButton
              key={fullPath}
              fullPath={fullPath}
              displayName={displayName}
              isDiscovered={isDiscovered}
              hasBlocker={hasBlocker}
              isBypassed={isBypassed}
              bypassLabel={bypassLabel}
              onClick={() => onSelect(fullPath)}
            />
          );
        })}
      </div>

      <Line smoke style={{ marginTop: '0.75rem', fontSize: '0.75rem' }}>
        └─ Click to execute | Also available via 'list' command
      </Line>

      <Divider color="cyan" />
    </div>
  );
}
