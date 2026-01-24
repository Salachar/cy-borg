import React, { useState, useEffect } from 'react';

export default function TerminalHeader({
  children,
}) {
  const [adsBlocked, setAdsBlocked] = useState(47);
  const [packetsRouted, setPacketsRouted] = useState(1247);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    // Ad counter increases in random bursts
    const adInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% chance every interval
        const burst = Math.floor(Math.random() * 5) + 1; // 1-5 ads blocked
        setAdsBlocked(prev => prev + burst);
      }
    }, 8000); // Check every 8 seconds

    // Packets routed increases constantly
    const packetInterval = setInterval(() => {
      const burst = Math.floor(Math.random() * 20) + 5; // 5-24 packets
      setPacketsRouted(prev => prev + burst);
    }, 3000); // Every 3 seconds

    // Uptime counter (in seconds)
    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(adInterval);
      clearInterval(packetInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  // Format uptime as HH:MM:SS
  const formatUptime = () => {
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div
      style={{
        marginBottom: '1rem',
        width: '100%',
        border: '2px solid rgb(77, 167, 188)',
        borderRadius: '8px',
        backgroundColor: 'rgba(29, 35, 50, 0.95)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        gap: '2rem',
      }}
    >
      {/* Animated corner brackets */}
      <div
        style={{
          position: 'absolute',
          top: '0.75rem',
          left: '0.75rem',
          width: '20px',
          height: '20px',
          borderTop: '3px solid rgb(79, 209, 197)',
          borderLeft: '3px solid rgb(79, 209, 197)',
          animation: 'pulse 2s ease-in-out infinite',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0.75rem',
          left: '0.75rem',
          width: '20px',
          height: '20px',
          borderBottom: '3px solid rgb(79, 209, 197)',
          borderLeft: '3px solid rgb(79, 209, 197)',
          animation: 'pulse 2s ease-in-out infinite 1s',
        }}
      />

      {/* Device icon/logo - left side */}
      <div
        style={{
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '1.5rem 2rem',
        }}
      >
        {/* Stylized eye/retinal icon */}
        <div
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          {/* Outer ring - slower spin */}
          <div
            style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              border: '3px solid rgb(77, 167, 188)',
              borderRadius: '50%',
              animation: 'spin 8s linear infinite',
            }}
          >
            {/* Notches on ring */}
            <div style={{ position: 'absolute', top: '-3px', left: '50%', transform: 'translateX(-50%)', width: '3px', height: '8px', backgroundColor: 'rgb(79, 209, 197)' }} />
            <div style={{ position: 'absolute', bottom: '-3px', left: '50%', transform: 'translateX(-50%)', width: '3px', height: '8px', backgroundColor: 'rgb(79, 209, 197)' }} />
            <div style={{ position: 'absolute', left: '-3px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '3px', backgroundColor: 'rgb(79, 209, 197)' }} />
            <div style={{ position: 'absolute', right: '-3px', top: '50%', transform: 'translateY(-50%)', width: '8px', height: '3px', backgroundColor: 'rgb(79, 209, 197)' }} />
          </div>

          {/* Inner eye */}
          <div
            style={{
              width: '30px',
              height: '30px',
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
                width: '10px',
                height: '10px',
                backgroundColor: 'rgb(0, 255, 65)',
                borderRadius: '50%',
                boxShadow: '0 0 10px rgb(0, 255, 65)',
                animation: 'blink 3s ease-in-out infinite',
              }}
            />
          </div>
        </div>

        {/* Device name */}
        <div>
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 'bold',
              color: 'rgb(79, 209, 197)',
              fontFamily: 'monospace',
              letterSpacing: '0.15em',
              textShadow: '0 0 10px rgba(79, 209, 197, 0.5)',
            }}
          >
            RCD-7
          </div>
          <div
            style={{
              fontSize: '0.65rem',
              color: 'rgb(148, 163, 184)',
              fontFamily: 'monospace',
              marginTop: '0.15rem',
            }}
          >
            RETINAL COM DEVICE
          </div>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          width: '2px',
          height: '60px',
          backgroundColor: 'rgb(77, 167, 188)',
          opacity: 0.5,
          flexShrink: 0,
          margin: '1.5rem 0',
        }}
      />

      {/* Status info - right side */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          padding: '1.5rem 0',
        }}
      >
        {/* Version info */}
        <div
          style={{
            fontSize: '0.75rem',
            color: 'rgb(148, 163, 184)',
            fontFamily: 'monospace',
          }}
        >
          Interface v2.047 | Neural Link Active
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            fontSize: '0.75rem',
            fontFamily: 'monospace',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'rgb(148, 163, 184)' }}>ADS BLOCKED:</span>
            <span style={{ color: 'rgb(0, 255, 65)', fontWeight: 'bold' }}>{adsBlocked}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'rgb(148, 163, 184)' }}>PACKETS:</span>
            <span style={{ color: 'rgb(79, 209, 197)', fontWeight: 'bold' }}>{packetsRouted.toLocaleString()}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ color: 'rgb(148, 163, 184)' }}>UPTIME:</span>
            <span style={{ color: 'rgb(251, 191, 36)', fontWeight: 'bold' }}>{formatUptime()}</span>
          </div>
        </div>
      </div>

      {children}

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
