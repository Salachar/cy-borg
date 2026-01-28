import React from 'react';

import { Line, Divider, DataTable } from '@terminal/TerminalComponents';
import Extractable from '../Extractable/Extractable';

export default function Safe({
  id,
  model,
  location,
  owner,
  security,
  lastAccess,
  physical = [],
  digital = [],
  notes,
}) {
  // Determine security color
  const getSecurityColor = () => {
    const secLower = security.toLowerCase();
    if (secLower.includes('retinal') || secLower.includes('biometric')) {
      return 'rgb(239, 68, 68)'; // red - high security
    }
    if (secLower.includes('keypad') || secLower.includes('pin')) {
      return 'rgb(250, 204, 21)'; // yellow - medium security
    }
    return 'rgb(79, 209, 197)'; // cyan - standard security
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Safe container with border */}
      <div
        style={{
          border: '2px solid rgb(77, 167, 188)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header with lock icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Lock Icon */}
          <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
            {/* Lock body */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '4px',
                width: '12px',
                height: '10px',
                backgroundColor: 'rgb(148, 163, 184)',
                borderRadius: '2px',
              }}
            />
            {/* Lock shackle */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '6px',
                width: '8px',
                height: '12px',
                border: '2px solid rgb(148, 163, 184)',
                borderBottom: 'none',
                borderRadius: '4px 4px 0 0',
              }}
            />
          </div>
          <Line smoke large bold style={{ margin: 0 }}>
            [DIGITAL SAFE - MODEL {model}]
          </Line>
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        {/* Safe info table */}
        <DataTable
          data={[
            { label: 'Status', value: 'LOCKED' },
            {
              label: 'Security',
              value: security
            },
            { label: 'Last Access', value: lastAccess },
            { label: 'Owner', value: owner },
          ]}
        />

        {/* Show security level indicator */}
        <div style={{ marginTop: '0.5rem' }}>
          <Line smoke style={{ fontSize: '0.75rem' }}>
            Security Level:{' '}
            <span style={{ color: getSecurityColor(), fontWeight: 'bold' }}>
              {security.toLowerCase().includes('retinal') || security.toLowerCase().includes('biometric')
                ? 'HIGH'
                : security.toLowerCase().includes('keypad') || security.toLowerCase().includes('pin')
                ? 'MEDIUM'
                : 'STANDARD'}
            </span>
          </Line>
        </div>

        <Divider />
        <Extractable
          id={`${id}-physical`}
          type="physical"
          items={physical}
          requiresPresence={true}
        />
        <Divider />
        <Extractable
          id={`${id}-digital`}
          type="digital"
          items={digital}
          requiresPresence={false}
        />

        {/* Notes */}
        {notes && (
          <>
            <Divider />
            <Line neon>{notes}</Line>
          </>
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
