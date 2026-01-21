import React from 'react';

export function BatusBodegaAd() {
  return (
    <div style={{
      position: 'relative',
      backgroundColor: '#1e3a5f', // Deep blue
      border: '4px solid #ff8c42', // Warm orange
      borderRadius: '6px',
      padding: '2.5rem',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    }}>
      {/* Tile pattern background (like bodega floor) */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          repeating-linear-gradient(
            90deg,
            transparent 0px,
            transparent 40px,
            rgba(255, 140, 66, 0.05) 40px,
            rgba(255, 140, 66, 0.05) 41px
          ),
          repeating-linear-gradient(
            0deg,
            transparent 0px,
            transparent 40px,
            rgba(255, 140, 66, 0.05) 40px,
            rgba(255, 140, 66, 0.05) 41px
          )
        `,
        pointerEvents: 'none',
      }} />

      {/* Top accent stripe */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: '#ffd93d', // Bright yellow
      }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Store icon (simplified bodega storefront) */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}>
          <BodegaIcon />
        </div>

        {/* Store name */}
        <h2 style={{
          fontSize: '2.75rem',
          fontWeight: 900,
          color: '#ff8c42',
          textAlign: 'center',
          marginBottom: '0.5rem',
          letterSpacing: '1px',
          textShadow: '2px 2px 0px rgba(0, 0, 0, 0.3)',
        }}>
          BATU'S BODEGA
        </h2>

        {/* Tagline */}
        <p style={{
          fontSize: '1.125rem',
          color: '#ffd93d',
          textAlign: 'center',
          marginBottom: '1.5rem',
          fontStyle: 'italic',
        }}>
          "Your Neighborhood Store Since 2067"
        </p>

        {/* Divider */}
        <div style={{
          height: '2px',
          background: '#ff8c42',
          margin: '1.5rem auto',
          width: '75%',
        }} />

        {/* Features */}
        <div style={{ marginBottom: '1.5rem' }}>
          <BodegaFeature icon="📶" text="Free WiFi (Password on Wall)" color="#6bc9ff" />
          <BodegaFeature icon="🏪" text="Fair Prices - No Shortages Markup" color="#6bc9ff" />
          <BodegaFeature icon="📋" text="Community Bulletin Board" color="#6bc9ff" />
          <BodegaFeature icon="☕" text="Coffee Always Fresh" color="#6bc9ff" />
        </div>

        {/* Divider */}
        <div style={{
          height: '1px',
          background: '#ffd93d',
          margin: '1.5rem auto',
          width: '60%',
        }} />

        {/* Hours */}
        <div style={{
          textAlign: 'center',
          marginBottom: '1rem',
        }}>
          <p style={{
            fontSize: '1rem',
            color: '#6bc9ff',
            marginBottom: '0.25rem',
            fontWeight: 'bold',
          }}>
            OPEN DAILY
          </p>
          <p style={{
            fontSize: '0.875rem',
            color: '#a0c4e0',
          }}>
            06:00 - 22:00
          </p>
        </div>

        {/* Location */}
        <p style={{
          fontSize: '0.875rem',
          color: '#ff8c42',
          textAlign: 'center',
          marginBottom: '0.5rem',
        }}>
          Corner of Ports/Bigmosse Border
        </p>

        <p style={{
          fontSize: '0.75rem',
          color: '#a0c4e0',
          textAlign: 'center',
          fontStyle: 'italic',
        }}>
          "We know everyone's name."
        </p>
      </div>

      {/* Corner stars (friendly, warm decoration) */}
      <Star style={{ top: '16px', left: '16px' }} />
      <Star style={{ top: '16px', right: '16px' }} />
      <Star style={{ bottom: '16px', left: '16px' }} />
      <Star style={{ bottom: '16px', right: '16px' }} />

      {/* Bottom stripe */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '6px',
        background: '#ff8c42',
      }} />
    </div>
  );
}

// Simplified bodega storefront icon
function BodegaIcon() {
  return (
    <svg width="90" height="70" viewBox="0 0 90 70" style={{
      filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3))',
    }}>
      {/* Awning */}
      <path
        d="M 10 20 L 10 15 L 80 15 L 80 20 L 75 25 L 15 25 Z"
        fill="#ff8c42"
        stroke="#d46a2a"
        strokeWidth="2"
      />

      {/* Awning stripes */}
      <line x1="25" y1="15" x2="20" y2="25" stroke="#ffd93d" strokeWidth="3" />
      <line x1="45" y1="15" x2="40" y2="25" stroke="#ffd93d" strokeWidth="3" />
      <line x1="65" y1="15" x2="60" y2="25" stroke="#ffd93d" strokeWidth="3" />

      {/* Building */}
      <rect x="15" y="25" width="60" height="40" fill="#6bc9ff" stroke="#4a9fd8" strokeWidth="2" />

      {/* Door */}
      <rect x="35" y="40" width="20" height="25" fill="#1e3a5f" stroke="#ff8c42" strokeWidth="2" />

      {/* Door handle */}
      <circle cx="50" cy="52" r="2" fill="#ffd93d" />

      {/* Windows */}
      <rect x="20" y="30" width="10" height="10" fill="#ffd93d" stroke="#ff8c42" strokeWidth="1" />
      <rect x="60" y="30" width="10" height="10" fill="#ffd93d" stroke="#ff8c42" strokeWidth="1" />

      {/* Window panes (crosshatch) */}
      <line x1="25" y1="30" x2="25" y2="40" stroke="#ff8c42" strokeWidth="1" />
      <line x1="20" y1="35" x2="30" y2="35" stroke="#ff8c42" strokeWidth="1" />
      <line x1="65" y1="30" x2="65" y2="40" stroke="#ff8c42" strokeWidth="1" />
      <line x1="60" y1="35" x2="70" y2="35" stroke="#ff8c42" strokeWidth="1" />

      {/* Sign post */}
      <rect x="8" y="20" width="2" height="15" fill="#ff8c42" />
      <rect x="80" y="20" width="2" height="15" fill="#ff8c42" />
    </svg>
  );
}

function BodegaFeature({ icon, text, color }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      marginBottom: '0.75rem',
    }}>
      <span style={{
        fontSize: '1.25rem',
      }}>{icon}</span>
      <span style={{
        fontSize: '0.95rem',
        color: color,
      }}>{text}</span>
    </div>
  );
}

function Star({ style }) {
  return (
    <div style={{
      position: 'absolute',
      width: '16px',
      height: '16px',
      ...style,
    }}>
      {/* Simple 4-pointed star using rotated squares */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '12px',
        height: '12px',
        transform: 'translate(-50%, -50%) rotate(45deg)',
        backgroundColor: '#ffd93d',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '8px',
        height: '8px',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffd93d',
      }} />
    </div>
  );
}

export default BatusBodegaAd;
