import { useState, useEffect } from 'react';
import './rcdAlert.css';

/**
 * RCDAlert - Your illegal RCD injecting tactical intel
 *
 * Old-school terminal aesthetic - jailbroken tech from a few OS versions ago
 * Purple/pink theme = YOUR device talking
 */
export default function RCDAlert({
  message,
  details = [],
  critical = false,
  children,
}) {
  const [blink, setBlink] = useState(true);

  // Old-school cursor blink
  useEffect(() => {
    if (critical) {
      const interval = setInterval(() => {
        setBlink(prev => !prev);
      }, 500);
      return () => clearInterval(interval);
    }
  }, [critical]);

  return (
    <div className={`rcd-alert ${critical ? 'rcd-alert-critical' : ''}`}>
      {/* Old terminal header with ASCII border */}
      <div className="rcd-alert-header">
        <div className="rcd-alert-border-top">
          ╔═══════════════════════════════════════════════════════════════╗
        </div>
        <div className="rcd-alert-title">
          <span className="rcd-alert-bracket">║</span>
          <span className="rcd-alert-icon">◈</span>
          <span className="rcd-alert-label">RCD-7_INTEL.SYS</span>
          {critical && (
            <span className={`rcd-alert-critical-indicator ${blink ? 'rcd-blink' : ''}`}>
              [!]
            </span>
          )}
          <span className="rcd-alert-bracket">║</span>
        </div>
        <div className="rcd-alert-border-mid">
          ╠═══════════════════════════════════════════════════════════════╣
        </div>
      </div>

      {/* Body with old terminal styling */}
      <div className="rcd-alert-body">
        <div className="rcd-alert-prompt">
          <span className="rcd-alert-prompt-symbol">&gt;</span>
          <span className="rcd-alert-message">{message}</span>
        </div>

        {details.length > 0 && (
          <div className="rcd-alert-details">
            {details.map((detail, i) => (
              <div key={i} className="rcd-alert-detail">
                <span className="rcd-alert-detail-marker">├─</span>
                <span className="rcd-alert-detail-text">{detail}</span>
              </div>
            ))}
          </div>
        )}

        {children && (
          <div className="rcd-alert-children">
            {children}
          </div>
        )}
      </div>

      {/* Bottom border */}
      <div className="rcd-alert-footer">
        <div className="rcd-alert-border-bottom">
          ╚═══════════════════════════════════════════════════════════════╝
        </div>
      </div>
    </div>
  );
}
