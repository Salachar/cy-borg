import { useState } from 'react';
import {
  Line,
} from '../TerminalComponents';

export default function Extractable({
  id,
  items = [],
  type = "digital",
  buttonLabel,
  requiresPresence = false,
  disabled = false,
  onExtract,
}) {
  const hasItems = items && items.length >= 1;
  // Unified localStorage key for all extracted items
  const STORAGE_KEY = 'cyborg_retcom_extracted';

  // Check if this specific item has been extracted
  const [isExtracted, setIsExtracted] = useState(() => {
    try {
      const extracted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      return extracted[id] === true;
    } catch {
      return false;
    }
  });

  const handleExtract = () => {
    if (!hasItems || disabled || isExtracted) return;

    // Save to unified storage
    try {
      const extracted = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      extracted[id] = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(extracted));
      setIsExtracted(true);

      // Call optional callback
      if (onExtract) {
        onExtract(items, calculateValue());
      }
    } catch (error) {
      console.error('Failed to save extraction state:', error);
    }
  };

  // Calculate total value if items have value property
  const calculateValue = () => {
    return items.reduce((sum, item) => sum + (item.value || 0), 0);
  };

  // Type-based styling
  const getTypeConfig = () => {
    const configs = {
      physical: {
        color: 'rgb(250, 204, 21)', // yellow
        bgColor: 'rgba(250, 204, 21, 0.05)',
        borderColor: 'rgba(250, 204, 21, 0.2)',
        borderColorStolen: 'rgba(239, 68, 68, 0.3)',
        label: 'PHYSICAL CONTENTS',
        buttonText: 'STEAL',
        extractedText: 'CONTENTS STOLEN',
        note: 'Requires physical presence at location',
      },
      digital: {
        color: 'rgb(79, 209, 197)', // cyan
        bgColor: 'rgba(79, 209, 197, 0.05)',
        borderColor: 'rgba(79, 209, 197, 0.2)',
        borderColorStolen: 'rgba(239, 68, 68, 0.3)',
        label: 'DIGITAL CONTENTS',
        buttonText: 'EXTRACT',
        extractedText: 'DATA EXTRACTED',
        note: 'Extractable remotely via network connection',
      },
      data: {
        color: 'rgb(79, 209, 197)', // cyan
        bgColor: 'rgba(79, 209, 197, 0.05)',
        borderColor: 'rgba(79, 209, 197, 0.2)',
        borderColorStolen: 'rgba(239, 68, 68, 0.3)',
        label: 'DATA',
        buttonText: 'DOWNLOAD',
        extractedText: 'DATA DOWNLOADED',
        note: 'Remote extraction available',
      },
      credits: {
        color: 'rgb(0, 170, 40)', // green
        bgColor: 'rgba(0, 170, 40, 0.05)',
        borderColor: 'rgba(0, 170, 40, 0.2)',
        borderColorStolen: 'rgba(239, 68, 68, 0.3)',
        label: 'CREDITS',
        buttonText: 'SKIM',
        extractedText: 'CREDITS SKIMMED',
        note: 'Network skim available',
      },
    };
    return configs[type] || configs.digital;
  };

  const config = getTypeConfig();
  const totalValue = calculateValue();

  return (
    <div style={{ position: 'relative' }}>
      {/* Header with button */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.5rem',
        }}
      >
        <div>
          <span
            style={{
              color: config.color,
              fontSize: '0.875rem',
              fontWeight: 'bold',
            }}
          >
            {config.label}
          </span>
          {requiresPresence && (
            <div style={{ fontSize: '0.7rem', color: 'rgb(148, 163, 184)', marginTop: '0.15rem' }}>
              {config.note}
            </div>
          )}
        </div>

        {/* Extract button */}
        {hasItems && (
          <button
            onClick={handleExtract}
            disabled={isExtracted || disabled || !hasItems}
            style={{
              padding: '0.25rem 0.75rem',
              fontSize: '0.75rem',
              fontWeight: 'bold',
              backgroundColor: (isExtracted || disabled) ? 'rgb(45, 53, 72)' : config.color,
              color: (isExtracted || disabled) ? 'rgb(148, 163, 184)' : 'rgb(19, 23, 34)',
              border: 'none',
              borderRadius: '3px',
              cursor: (isExtracted || disabled) ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              fontFamily: 'monospace',
            }}
            onMouseEnter={(e) => {
              if (!isExtracted && !disabled) {
                e.target.style.opacity = '0.8';
              }
            }}
            onMouseLeave={(e) => {
              if (!isExtracted && !disabled) {
                e.target.style.opacity = '1';
              }
            }}
          >
            {isExtracted ? (
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {/* CSS Checkmark */}
                <span
                  style={{
                    display: 'inline-block',
                    width: '10px',
                    height: '6px',
                    borderLeft: '2px solid currentColor',
                    borderBottom: '2px solid currentColor',
                    transform: 'rotate(-45deg)',
                    marginBottom: '2px',
                  }}
                />
                {config.buttonText}ED
              </span>
            ) : (
              buttonLabel || config.buttonText
            )}
          </button>
        )}
      </div>

      {/* Contents list */}
      <div
        style={{
          backgroundColor: config.bgColor,
          padding: '0.5rem',
          borderRadius: '3px',
          border: isExtracted ? `1px solid ${config.borderColorStolen}` : `1px solid ${config.borderColor}`,
          position: 'relative',
        }}
      >
        {items.length === 0 && (
          <Line yellow>No contents detected</Line>
        )}

        {items.map((item, i) => (
          <Line
            key={i}
            style={{
              color: isExtracted ? 'rgb(148, 163, 184)' : config.color,
              textDecoration: isExtracted ? 'line-through' : 'none',
              opacity: isExtracted ? 0.5 : 1,
            }}
          >
            → {item.item}: {item.desc}
            {item.value && (
              <span style={{ color: 'rgb(0, 170, 40)', marginLeft: '0.5rem' }}>
                [{item.value}¤]
              </span>
            )}
          </Line>
        ))}

        {/* Extracted indicator */}
        {hasItems && isExtracted && (
          <div
            style={{
              marginTop: '0.5rem',
              padding: '0.25rem 0.5rem',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgb(239, 68, 68)',
              borderRadius: '3px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <div
              style={{
                width: '6px',
                height: '6px',
                backgroundColor: 'rgb(239, 68, 68)',
                borderRadius: '50%',
                animation: 'blink 2s infinite',
              }}
            />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: 'rgb(239, 68, 68)',
                fontFamily: 'monospace',
              }}
            >
              [{config.extractedText} - {new Date().toLocaleDateString()}]
              {totalValue > 0 && ` - VALUE: ${totalValue}¤`}
            </span>
          </div>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
