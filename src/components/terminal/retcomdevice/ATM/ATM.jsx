import { useState } from 'react';

import { Line, Divider, DataTable, Section } from '@terminal/TerminalComponents';
import Extractable from '../Extractable/Extractable';

export default function ATM({
  id,
  model = 'ATM-500',
  location,
  network = 'CityBank',
  accountHolder,
  balance,
  recentTransactions = [],
  lastService,
  skimmableAmount,
}) {
  // Generate random skimmable amount if not provided
  const [actualSkimmableAmount] = useState(() => {
    return skimmableAmount || Math.floor(Math.random() * 41) + 10; // 10-50¤
  });

  // Convert account data to extractable format
  const accountItems = [
    {
      item: 'Recent Transaction Data',
      desc: `Account: ${accountHolder}`,
      value: actualSkimmableAmount,
    },
  ];

  return (
    <div style={{ position: 'relative' }}>
      {/* ATM container */}
      <div
        style={{
          border: '2px solid rgb(79, 209, 197)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header with ATM icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS ATM Icon */}
          <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
            {/* ATM body */}
            <div
              style={{
                position: 'absolute',
                width: '24px',
                height: '24px',
                backgroundColor: 'rgb(79, 209, 197)',
                borderRadius: '2px',
              }}
            />
            {/* Card slot */}
            <div
              style={{
                position: 'absolute',
                top: '8px',
                left: '4px',
                width: '16px',
                height: '3px',
                backgroundColor: 'rgb(19, 23, 34)',
                borderRadius: '1px',
              }}
            />
            {/* Screen */}
            <div
              style={{
                position: 'absolute',
                top: '2px',
                left: '6px',
                width: '12px',
                height: '4px',
                backgroundColor: 'rgb(0, 255, 65)',
                opacity: 0.6,
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0 }}>
            [ATM - MODEL {model}]
          </Line>
        </div>

        <Line cyan>{location}</Line>
        <Divider />

        {/* ATM Info */}
        <DataTable
          data={[
            { label: 'Network', value: network },
            { label: 'Status', value: 'ONLINE' },
            { label: 'Account Holder', value: accountHolder },
            { label: 'Current Balance', value: balance },
          ]}
        />
        <Divider />

        {/* Recent Transactions */}
        {recentTransactions.length > 0 && (
          <>
            <Section title="RECENT TRANSACTIONS:">
              {recentTransactions.map((transaction, i) => (
                <Line key={i} neon style={{ fontSize: '0.875rem' }}>
                  {transaction}
                </Line>
              ))}
            </Section>
            <Divider />
          </>
        )}

        {lastService && (
          <>
            <Line yellow style={{ fontSize: '0.75rem' }}>
              Last service: {lastService}
            </Line>
            <Divider />
          </>
        )}

        {/* Skim section - using Extractable component */}
        <Extractable
          id={`${id}-skim`}
          digitalItems={[
            {
              item: 'Transaction Skim',
              desc: `Account: ${accountHolder} - Small % from daily transactions`,
              value: actualSkimmableAmount,
            },
          ]}
          stealing={true}
        />

      </div>
    </div>
  );
}
