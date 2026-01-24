import { useState } from 'react';
import { Line, Divider } from '../TerminalComponents';

export default function RelatedCommands({ commands = [], onSelect, flatCommands = {} }) {
  const [hoveredCommand, setHoveredCommand] = useState(null);

  if (commands.length === 0) return null;

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Divider color="cyan" />

      <Line cyan bold style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
        ┌─ RELATED COMMANDS AVAILABLE ─┐
      </Line>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {commands.map((cmd) => {
          const commandDef = flatCommands[cmd];
          const hasPassword = commandDef?.password;
          const isHovered = hoveredCommand === cmd;

          return (
            <button
              key={cmd}
              onClick={() => onSelect(cmd)}
              onMouseEnter={() => setHoveredCommand(cmd)}
              onMouseLeave={() => setHoveredCommand(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                minHeight: '3rem', // Tablet-friendly touch target
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
              {/* Arrow indicator */}
              <span
                style={{
                  flexShrink: 0,
                  color: 'rgb(79, 209, 197)',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                {isHovered ? '▶' : '›'}
              </span>

              {/* Command name */}
              <span
                style={{
                  flex: 1,
                  wordBreak: 'break-word',
                  fontWeight: isHovered ? 'bold' : 'normal',
                }}
              >
                {cmd}
              </span>

              {/* Password badge */}
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
                  PW
                </span>
              )}
            </button>
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
