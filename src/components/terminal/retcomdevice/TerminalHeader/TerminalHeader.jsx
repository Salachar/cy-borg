import React, { useState, useEffect } from 'react';

export default function TerminalHeader({
  discoveredCount = 0,
  passwordsCount = 0,
  creditsExtracted = 0,
  onHelp,
  onList,
  onClear,
  onWallet,
}) {
  const [adsBlocked, setAdsBlocked] = useState(47);
  const [packetsRouted, setPacketsRouted] = useState(1247);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Ad counter increases in random bursts
    const adInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        const burst = Math.floor(Math.random() * 5) + 1;
        setAdsBlocked(prev => prev + burst);
      }
    }, 8000);

    // Packets routed increases constantly
    const packetInterval = setInterval(() => {
      const burst = Math.floor(Math.random() * 20) + 5;
      setPacketsRouted(prev => prev + burst);
    }, 3000);

    return () => {
      clearInterval(adInterval);
      clearInterval(packetInterval);
    };
  }, []);

  return (
    <div
      style={{
        marginBottom: '1rem',
        width: '100%',
        border: '2px solid rgb(77, 167, 188)',
        borderRadius: '6px',
        backgroundColor: 'rgba(29, 35, 50, 0.95)',
        position: 'relative',
        overflow: 'hidden',
        padding: '0.75rem 1rem',
      }}
    >
      {/* Animated corner brackets - smaller */}
      <div
        style={{
          position: 'absolute',
          top: '0.5rem',
          left: '0.5rem',
          width: '12px',
          height: '12px',
          borderTop: '2px solid rgb(79, 209, 197)',
          borderLeft: '2px solid rgb(79, 209, 197)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0.5rem',
          left: '0.5rem',
          width: '12px',
          height: '12px',
          borderBottom: '2px solid rgb(79, 209, 197)',
          borderLeft: '2px solid rgb(79, 209, 197)',
          animation: 'pulse 2s ease-in-out infinite 1s',
        }}
      />

      {/* Main content - flex wrap for natural condensing */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        {/* Device icon/logo - compact */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            flexShrink: 0,
          }}
        >
          {/* Stylized eye/retinal icon - smaller */}
          <div
            style={{
              position: 'relative',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Outer ring */}
            <div
              style={{
                position: 'absolute',
                width: '40px',
                height: '40px',
                border: '2px solid rgb(77, 167, 188)',
                borderRadius: '50%',
                animation: 'spin 8s linear infinite',
              }}
            >
              {/* Notches on ring */}
              <div style={{ position: 'absolute', top: '-2px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '6px', backgroundColor: 'rgb(79, 209, 197)' }} />
              <div style={{ position: 'absolute', bottom: '-2px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '6px', backgroundColor: 'rgb(79, 209, 197)' }} />
              <div style={{ position: 'absolute', left: '-2px', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '2px', backgroundColor: 'rgb(79, 209, 197)' }} />
              <div style={{ position: 'absolute', right: '-2px', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '2px', backgroundColor: 'rgb(79, 209, 197)' }} />
            </div>

            {/* Inner eye */}
            <div
              style={{
                width: '20px',
                height: '20px',
                border: '2px solid rgb(79, 209, 197)',
                borderRadius: '50%',
                backgroundColor: 'rgba(79, 209, 197, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            >
              {/* Pupil */}
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'rgb(0, 255, 65)',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px rgb(0, 255, 65)',
                  animation: 'blink 3s ease-in-out infinite',
                }}
              />
            </div>
          </div>

          {/* Device name */}
          <div>
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: 'bold',
                color: 'rgb(79, 209, 197)',
                fontFamily: 'monospace',
                letterSpacing: '0.1em',
                textShadow: '0 0 8px rgba(79, 209, 197, 0.5)',
                lineHeight: 1,
              }}
            >
              RCD-7
            </div>
            <div
              style={{
                fontSize: '0.6rem',
                color: 'rgb(148, 163, 184)',
                fontFamily: 'monospace',
                marginTop: '0.15rem',
              }}
            >
              RETINAL COM DEVICE
            </div>
          </div>
        </div>

        {/* Divider - optional, will wrap naturally */}
        <div
          style={{
            width: '1px',
            height: '40px',
            backgroundColor: 'rgb(77, 167, 188)',
            opacity: 0.5,
            flexShrink: 0,
          }}
        />

        {/* Stats container - wraps naturally */}
        <div
          style={{
            flex: 1,
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {/* Top row - gameplay stats */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.7rem',
              fontFamily: 'monospace',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'rgb(148, 163, 184)' }}>DISCOVERED:</span>
              <span style={{ color: 'rgb(79, 209, 197)', fontWeight: 'bold' }}>{discoveredCount}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'rgb(148, 163, 184)' }}>BYPASSED:</span>
              <span style={{ color: 'rgb(251, 191, 36)', fontWeight: 'bold' }}>{passwordsCount}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'rgb(148, 163, 184)' }}>EXTRACTED:</span>
              <span style={{ color: 'rgb(0, 255, 65)', fontWeight: 'bold' }}>{creditsExtracted}¤</span>
            </div>
          </div>

          {/* Bottom row - system stats */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              fontSize: '0.65rem',
              fontFamily: 'monospace',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'rgb(148, 163, 184)' }}>ADS:</span>
              <span style={{ color: 'rgb(0, 255, 65)', fontWeight: 'bold' }}>{adsBlocked}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', whiteSpace: 'nowrap' }}>
              <span style={{ color: 'rgb(148, 163, 184)' }}>PKT:</span>
              <span style={{ color: 'rgb(79, 209, 197)', fontWeight: 'bold' }}>{packetsRouted.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Icon buttons - pushed to right */}
        <div
          style={{
            display: 'flex',
            gap: '1.25rem',
            marginLeft: 'auto',
            flexShrink: 0,
          }}
        >
          {onWallet && (
            <button
              onClick={onWallet}
              style={{
                width: '32px',
                height: '32px',
                border: '2px solid rgb(251, 191, 36)',
                borderRadius: '4px',
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                color: 'rgb(251, 191, 36)',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                lineHeight: 1,
              }}
            >
              $
            </button>
          )}

          {onList && (
            <button
              onClick={onList}
              style={{
                width: '32px',
                height: '32px',
                border: '2px solid rgb(79, 209, 197)',
                borderRadius: '4px',
                backgroundColor: 'rgba(79, 209, 197, 0.1)',
                color: 'rgb(79, 209, 197)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '3px',
                transition: 'all 0.2s',
                padding: '6px',
              }}
            >
              <div style={{ width: '100%', height: '2px', backgroundColor: 'rgb(79, 209, 197)' }} />
              <div style={{ width: '100%', height: '2px', backgroundColor: 'rgb(79, 209, 197)' }} />
              <div style={{ width: '100%', height: '2px', backgroundColor: 'rgb(79, 209, 197)' }} />
            </button>
          )}

          {onHelp && (
            <button
              onClick={onHelp}
              style={{
               width: '32px',
                height: '32px',
                border: '2px solid rgb(79, 209, 197)',
                borderRadius: '4px',
                backgroundColor: 'rgba(79, 209, 197, 0.1)',
                color: 'rgb(79, 209, 197)',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                lineHeight: 1,
              }}
            >
              ?
            </button>
          )}

          {onClear && (
            <button
              onClick={onClear}
              style={{
                width: '32px',
                height: '32px',
                border: '2px solid rgb(251, 191, 36)',
                borderRadius: '4px',
                backgroundColor: 'rgba(251, 191, 36, 0.1)',
                color: 'rgb(251, 191, 36)',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
                lineHeight: 1,
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        @keyframes blink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.2; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
