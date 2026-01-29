import { useState } from 'react';
import { Line, Divider } from '@terminal/TerminalComponents';

/**
 * Extractable Component - Reusable item extraction interface
 *
 * Generic component for taking items (stealing, claiming, retrieving, etc.)
 * Tracks extraction state in localStorage under unified key.
 * Physical and digital items can be extracted independently.
 *
 * Props:
 * - id: Unique identifier (e.g., "safe-master-bedroom")
 * - physicalItems: Array of { item, desc, value? } - requires physical presence
 * - digitalItems: Array of { item, desc, value? } - remote extraction
 * - stealing: Boolean - changes UI tone (default: false)
 *   - false: "TAKE", "CLAIM", "RETRIEVE" (neutral)
 *   - true: "STEAL", "EXTRACT" (criminal tone)
 * - disabled: Disable extraction (default: false)
 * - onExtract: Callback function when extracted (optional) - receives (items, totalValue, type: 'physical'|'digital')
 */
export default function Extractable({
  id,
  physicalItems = [],
  digitalItems = [],
  stealing = false,
  disabled = false,
  onExtract,
}) {
  const STORAGE_KEY = 'cyborg_retcom_extracted';

  const [extractedPhysical, setExtractedPhysical] = useState(() => {
    try {
      const extracted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return extracted[`${id}-physical`] === true;
    } catch {
      return false;
    }
  });

  const [extractedDigital, setExtractedDigital] = useState(() => {
    try {
      const extracted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return extracted[`${id}-digital`] === true;
    } catch {
      return false;
    }
  });

  const handleExtractPhysical = () => {
    if (disabled || extractedPhysical) return;

    try {
      const extracted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      extracted[`${id}-physical`] = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(extracted));
      setExtractedPhysical(true);

      if (onExtract) {
        const value = physicalItems.reduce((sum, item) => sum + (item.value || 0), 0);
        onExtract(physicalItems, value, 'physical');
      }
    } catch (error) {
      console.error('Failed to save extraction state:', error);
    }
  };

  const handleExtractDigital = () => {
    if (disabled || extractedDigital) return;

    try {
      const extracted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      extracted[`${id}-digital`] = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(extracted));
      setExtractedDigital(true);

      if (onExtract) {
        const value = digitalItems.reduce((sum, item) => sum + (item.value || 0), 0);
        onExtract(digitalItems, value, 'digital');
      }
    } catch (error) {
      console.error('Failed to save extraction state:', error);
    }
  };

  const hasPhysical = physicalItems.length > 0;
  const hasDigital = digitalItems.length > 0;

  // Labels based on stealing mode
  const labels = stealing
    ? {
        physical: { label: 'PHYSICAL CONTENTS', button: 'STEAL', buttonPast: 'STOLEN' },
        digital: { label: 'DIGITAL CONTENTS', button: 'EXTRACT', buttonPast: 'EXTRACTED' },
      }
    : {
        physical: { label: 'PHYSICAL ITEMS', button: 'TAKE', buttonPast: 'TAKEN' },
        digital: { label: 'DIGITAL ITEMS', button: 'CLAIM', buttonPast: 'CLAIMED' },
      };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
      {/* Physical Items Section */}
      {hasPhysical && (
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: `1px solid ${extractedPhysical && stealing ? 'rgba(239, 68, 68, 0.4)' : 'rgb(71, 85, 105)'}`,
            borderRadius: '3px',
            padding: '0.75rem',
          }}
        >
          {/* Header with button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
            }}
          >
            <div style={{ flex: 1 }}>
              <Line
                style={{
                  margin: 0,
                  color: 'rgb(251, 191, 36)',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                }}
              >
                {labels.physical.label}
                {stealing && (
                  <span style={{
                    marginLeft: '0.5rem',
                    color: 'rgb(239, 68, 68)',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}>
                    [THEFT]
                  </span>
                )}
              </Line>
              {!extractedPhysical && (
                <Line smoke style={{ fontSize: '0.7rem', margin: 0, marginTop: '0.25rem' }}>
                  {stealing ? 'Physical presence required' : 'Requires physical access'}
                </Line>
              )}
            </div>

            {/* Extract button */}
            <button
              onClick={handleExtractPhysical}
              disabled={extractedPhysical || disabled}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                backgroundColor: extractedPhysical
                  ? 'rgb(45, 53, 72)'
                  : disabled
                    ? 'rgb(45, 53, 72)'
                    : 'rgb(251, 191, 36)',
                color: extractedPhysical
                  ? 'rgb(148, 163, 184)'
                  : disabled
                    ? 'rgb(148, 163, 184)'
                    : 'rgb(19, 23, 34)',
                border: 'none',
                borderRadius: '3px',
                cursor: (extractedPhysical || disabled) ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                flexShrink: 0,
              }}
            >
              {extractedPhysical ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ✓ {labels.physical.buttonPast}
                </span>
              ) : (
                labels.physical.button
              )}
            </button>
          </div>

          <Divider />

          {/* Items list */}
          <div style={{ marginTop: '0.75rem' }}>
            {physicalItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: i < physicalItems.length - 1 ? '0.5rem' : '0',
                  opacity: extractedPhysical ? 0.6 : 1,
                }}
              >
                <span style={{
                  color: extractedPhysical ? 'rgb(148, 163, 184)' : 'rgb(251, 191, 36)',
                  fontSize: '0.875rem',
                  flexShrink: 0
                }}>
                  {extractedPhysical ? '✓' : '→'}
                </span>
                <div style={{ flex: 1 }}>
                  <Line
                    style={{
                      margin: 0,
                      color: extractedPhysical ? 'rgb(148, 163, 184)' : 'rgb(251, 191, 36)',
                      fontSize: '0.875rem',
                    }}
                  >
                    <strong>{item.item}</strong>: {item.desc}
                    {item.value && (
                      <span style={{
                        color: extractedPhysical ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                        marginLeft: '0.5rem',
                        fontWeight: 'bold',
                      }}>
                        [{item.value}¤]
                      </span>
                    )}
                  </Line>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Digital Items Section */}
      {hasDigital && (
        <div
          style={{
            backgroundColor: 'rgba(15, 23, 42, 0.6)',
            border: `1px solid ${extractedDigital && stealing ? 'rgba(239, 68, 68, 0.4)' : 'rgb(71, 85, 105)'}`,
            borderRadius: '3px',
            padding: '0.75rem',
          }}
        >
          {/* Header with button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '0.75rem',
            }}
          >
            <div style={{ flex: 1 }}>
              <Line
                style={{
                  margin: 0,
                  color: 'rgb(79, 209, 197)',
                  fontSize: '0.875rem',
                  fontWeight: 'bold',
                }}
              >
                {labels.digital.label}
                {stealing && (
                  <span style={{
                    marginLeft: '0.5rem',
                    color: 'rgb(239, 68, 68)',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                  }}>
                    [THEFT]
                  </span>
                )}
              </Line>
              {!extractedDigital && (
                <Line smoke style={{ fontSize: '0.7rem', margin: 0, marginTop: '0.25rem' }}>
                  {stealing ? 'Extractable remotely via network connection' : 'Remote extraction available'}
                </Line>
              )}
            </div>

            {/* Extract button */}
            <button
              onClick={handleExtractDigital}
              disabled={extractedDigital || disabled}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                backgroundColor: extractedDigital
                  ? 'rgb(45, 53, 72)'
                  : disabled
                    ? 'rgb(45, 53, 72)'
                    : 'rgb(79, 209, 197)',
                color: extractedDigital
                  ? 'rgb(148, 163, 184)'
                  : disabled
                    ? 'rgb(148, 163, 184)'
                    : 'rgb(19, 23, 34)',
                border: 'none',
                borderRadius: '3px',
                cursor: (extractedDigital || disabled) ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                flexShrink: 0,
              }}
            >
              {extractedDigital ? (
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ✓ {labels.digital.buttonPast}
                </span>
              ) : (
                labels.digital.button
              )}
            </button>
          </div>

          <Divider />

          {/* Items list */}
          <div style={{ marginTop: '0.75rem' }}>
            {digitalItems.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.5rem',
                  marginBottom: i < digitalItems.length - 1 ? '0.5rem' : '0',
                  opacity: extractedDigital ? 0.6 : 1,
                }}
              >
                <span style={{
                  color: extractedDigital ? 'rgb(148, 163, 184)' : 'rgb(79, 209, 197)',
                  fontSize: '0.875rem',
                  flexShrink: 0
                }}>
                  {extractedDigital ? '✓' : '→'}
                </span>
                <div style={{ flex: 1 }}>
                  <Line
                    style={{
                      margin: 0,
                      color: extractedDigital ? 'rgb(148, 163, 184)' : 'rgb(79, 209, 197)',
                      fontSize: '0.875rem',
                    }}
                  >
                    <strong>{item.item}</strong>: {item.desc}
                    {item.value && (
                      <span style={{
                        color: extractedDigital ? 'rgb(148, 163, 184)' : 'rgb(34, 197, 94)',
                        marginLeft: '0.5rem',
                        fontWeight: 'bold',
                      }}>
                        [{item.value}¤]
                      </span>
                    )}
                  </Line>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
