import { Line, Divider } from '../TerminalComponents';

/**
 * RelatedCommands Component - Terminal-style navigation helper
 *
 * Shows available sub-commands in terminal style with clear button affordance.
 * Tablet-friendly spacing and touch targets.
 *
 * Props:
 * - commands: Array of full command paths (e.g., "access_mainframe/security_logs")
 * - onSelect: Callback when a command is clicked (receives full path)
 */
export default function RelatedCommands({ commands = [], onSelect }) {
  if (commands.length === 0) return null;

  return (
    <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
      <Divider color="cyan" />

      <Line cyan bold style={{ marginTop: '0.75rem', marginBottom: '0.75rem' }}>
        ┌─ RELATED COMMANDS AVAILABLE ─┐
      </Line>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {commands.map((fullPath) => {
          // Extract just the last part of the path for display
          const displayName = fullPath.split('/').pop();

          return (
            <button
              key={fullPath}
              onClick={() => onSelect(fullPath)}
              className="related-command-button"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                minHeight: '3rem',
                backgroundColor: 'rgba(29, 35, 50, 0.5)',
                border: '1px solid rgb(77, 167, 188)',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                fontSize: '0.875rem',
                textAlign: 'left',
                color: 'rgb(133, 175, 231)',
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
                ›
              </span>

              {/* Command name - show only last part */}
              <span
                style={{
                  flex: 1,
                  wordBreak: 'break-word',
                }}
              >
                {displayName}
              </span>
            </button>
          );
        })}
      </div>

      <Line smoke style={{ marginTop: '0.75rem', fontSize: '0.75rem' }}>
        └─ Click to execute | Also available via 'list' command
      </Line>

      <Divider color="cyan" />

      <style>{`
        .related-command-button:active {
          background-color: rgba(79, 209, 197, 0.15);
          border-color: rgb(79, 209, 197);
          color: rgb(79, 209, 197);
          text-shadow: 0 0 8px rgba(79, 209, 197, 0.6);
          box-shadow: 0 0 10px rgba(79, 209, 197, 0.3);
        }

        .related-command-button:active span:first-child {
          content: '▶';
        }
      `}</style>
    </div>
  );
}
