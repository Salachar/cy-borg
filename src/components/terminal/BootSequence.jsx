import { useState, useEffect, useRef } from 'react';
import { Line, ProgressBar, CommandLink, Divider } from './TerminalComponents';

const COLORS = {
  bg: 'rgba(29, 35, 50, 0.9)',
  border: 'rgb(79, 209, 197)',
  borderDim: 'rgb(77, 167, 188)',
};

/**
 * BootSequence Component - Retro terminal boot animation
 *
 * Self-contained boot sequence that displays messages over time.
 * Doesn't block user input - purely visual/atmospheric.
 *
 * Props:
 * - onComplete: Optional callback when boot finishes
 * - skipDelay: Skip delays for testing (default: false)
 */
export default function BootSequence({ onComplete, skipDelay = false }) {
  const [messages, setMessages] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const scrollRef = useRef(null);

  const BOOT_MESSAGES = [
    {
      text: <Line smoke bold>╔═══════════════════════════════════════════════════════╗</Line>,
      delay: 0
    },
    {
      text: <Line cyan bold style={{ textAlign: 'center' }}>CY_BORG RETINAL COM DEVICE - RCD-7</Line>,
      delay: 100
    },
    {
      text: <Line smoke bold>╚═══════════════════════════════════════════════════════╝</Line>,
      delay: 200
    },
    {
      text: <Line smoke>Initializing neural interface...</Line>,
      delay: 400
    },
    {
      text: <Line neon>[OK] Retinal display active</Line>,
      delay: 800
    },
    {
      text: <Line smoke>Loading network drivers...</Line>,
      delay: 1000
    },
    {
      text: <Line neon>[OK] CY_NET adapter ready</Line>,
      delay: 1400
    },
    {
      text: <Line smoke>Establishing connection to CY_NET...</Line>,
      delay: 1600
    },
    {
      text: <ProgressBar percent={100} />,
      delay: 2000
    },
    {
      text: (
        <Line cyan>
          Connection established <Line red inline bold>[UNSECURED]</Line>
        </Line>
      ),
      delay: 2400
    },
    {
      text: <Divider color="cyan" />,
      delay: 2600
    },
    {
      text: <Line yellow bold>SECURITY NOTICE:</Line>,
      delay: 2800
    },
    {
      text: <Line smoke>• Ad-blocker: ACTIVE ({Math.floor(Math.random() * 100)} ads blocked)</Line>,
      delay: 3000
    },
    {
      text: <Line smoke>• Encryption: DISABLED (corp monitoring active)</Line>,
      delay: 3200
    },
    {
      text: <Line smoke>• Anonymous mode: UNAVAILABLE</Line>,
      delay: 3400
    },
    {
      text: <Divider color="cyan" />,
      delay: 3600
    },
    {
      text: <Line smoke>Client: {navigator.userAgent.substring(0, 60)}...</Line>,
      delay: 3800
    },
    {
      text: <Line smoke>Platform: {navigator.platform} | {navigator.vendor}</Line>,
      delay: 4000
    },
    {
      text: <Divider color="cyan" />,
      delay: 4200
    },
    {
      text: <Line neon bold>READY. Type 'help' to begin.</Line>,
      delay: 4400
    },
  ];

  useEffect(() => {
    const delays = skipDelay
      ? BOOT_MESSAGES.map(() => 0)
      : BOOT_MESSAGES.map(msg => msg.delay);

    const timeouts = BOOT_MESSAGES.map((msg, index) => {
      return setTimeout(() => {
        setMessages(prev => [...prev, msg.text]);

        // Auto-scroll to bottom
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }

        // Mark complete on last message
        if (index === BOOT_MESSAGES.length - 1) {
          setTimeout(() => {
            setIsComplete(true);
            onComplete?.();
          }, 500);
        }
      }, delays[index]);
    });

    return () => timeouts.forEach(t => clearTimeout(t));
  }, [skipDelay]);

  if (isCollapsed) {
    return (
      <div
        className="mb-4 border rounded cursor-pointer transition-all hover:border-cyan-400"
        style={{
          backgroundColor: COLORS.bg,
          borderColor: COLORS.borderDim,
          padding: '0.5rem 1rem',
        }}
        onClick={() => setIsCollapsed(false)}
      >
        <div className="flex items-center justify-between">
          <Line cyan small>
            ▶ BOOT SEQUENCE (click to expand)
          </Line>
          <Line smoke xsmall>
            {messages.length} messages
          </Line>
        </div>
      </div>
    );
  }

  return (
    <div
      className="mb-4 border rounded overflow-hidden"
      style={{
        backgroundColor: COLORS.bg,
        borderColor: isComplete ? COLORS.border : COLORS.borderDim,
        boxShadow: isComplete ? '0 0 10px rgba(79, 209, 197, 0.3)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Header */}
      <div
        className="px-4 py-2 border-b flex items-center justify-between"
        style={{
          backgroundColor: 'rgba(19, 23, 34, 0.8)',
          borderColor: COLORS.borderDim,
        }}
      >
        <Line cyan bold small style={{ margin: 0 }}>
          SYSTEM BOOT
        </Line>

        {isComplete && (
          <button
            onClick={() => setIsCollapsed(true)}
            className="text-xs transition-colors"
            style={{
              color: 'rgb(148, 163, 184)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => e.target.style.color = 'rgb(79, 209, 197)'}
            onMouseLeave={(e) => e.target.style.color = 'rgb(148, 163, 184)'}
          >
            [COLLAPSE]
          </button>
        )}
      </div>

      {/* Message area - fixed height, scrollable */}
      <div
        ref={scrollRef}
        className="p-4 font-mono overflow-y-auto"
        style={{
          height: '280px',
          textShadow: '0 0 5px rgba(0, 255, 65, 0.5)',
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} className="mb-1">
            {msg}
          </div>
        ))}

        {/* Blinking cursor while loading */}
        {!isComplete && (
          <span
            className="inline-block w-2 h-4 ml-1 animate-pulse"
            style={{
              backgroundColor: 'rgb(0, 255, 65)',
              verticalAlign: 'middle',
            }}
          />
        )}
      </div>

      {/* Footer status bar */}
      <div
        className="px-4 py-2 border-t flex items-center justify-between"
        style={{
          backgroundColor: 'rgba(19, 23, 34, 0.8)',
          borderColor: COLORS.borderDim,
        }}
      >
        <Line smoke xsmall style={{ margin: 0 }}>
          {isComplete ? 'Boot complete' : 'Loading...'}
        </Line>

        <Line smoke xsmall style={{ margin: 0 }}>
          {messages.length}/{BOOT_MESSAGES.length}
        </Line>
      </div>
    </div>
  );
}
