import { useState } from 'react';
import { Line, Divider, DataTable, Section } from './TerminalComponents';

/**
 * ATM Component - Automated Teller Machine
 *
 * Password-protected ATM showing a specific user's account.
 * Players can "skim" recent transactions for 20-40¤ (tracked in localStorage).
 *
 * Props:
 * - id: Unique identifier for localStorage (e.g., "bodega-atm")
 * - model: ATM model number (e.g., "ATM-500")
 * - location: Where the ATM is located
 * - network: Bank network (e.g., "CityBank")
 * - accountHolder: Name of the account being accessed
 * - balance: Current account balance
 * - recentTransactions: Array of recent transaction strings
 * - lastService: When it was last serviced (optional)
 */
export default function ATM({
  id,
  model = 'ATM-500',
  location,
  network = 'CityBank',
  accountHolder,
  balance,
  recentTransactions = [],
  lastService,
}) {
  // Track if already skimmed
  const [hasSkimmed, setHasSkimmed] = useState(() => {
    return localStorage.getItem(`atm-${id}-skimmed`) === 'true';
  });

  const [isSkimming, setIsSkimming] = useState(false);
  const [skimmedAmount, setSkimmedAmount] = useState(() => {
    const stored = localStorage.getItem(`atm-${id}-skimmed-amount`);
    return stored ? parseInt(stored, 10) : 0;
  });

  const handleSkim = () => {
    if (hasSkimmed || isSkimming) return;

    setIsSkimming(true);

    // Simulate skimming delay
    setTimeout(() => {
      const amount = Math.floor(Math.random() * 41) + 10; // 10-40¤

      setSkimmedAmount(amount);
      setHasSkimmed(true);
      localStorage.setItem(`atm-${id}-skimmed`, 'true');
      localStorage.setItem(`atm-${id}-skimmed-amount`, amount.toString());

      setIsSkimming(false);
    }, 2000);
  };

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

        {/* Skim button and status */}
        <div
          style={{
            backgroundColor: 'rgba(252, 129, 129, 0.1)',
            border: '1px solid rgba(252, 129, 129, 0.3)',
            borderRadius: '3px',
            padding: '0.75rem',
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '0.5rem',
          }}>
            <span style={{
              color: 'rgb(252, 129, 129)',
              fontSize: '0.875rem',
              fontWeight: 'bold',
              fontFamily: 'monospace',
            }}>
              SKIM RECENT ACCOUNTS:
            </span>

            <button
              onClick={handleSkim}
              disabled={hasSkimmed || isSkimming}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                backgroundColor: hasSkimmed ? 'rgb(45, 53, 72)' : 'rgb(252, 129, 129)',
                color: hasSkimmed ? 'rgb(148, 163, 184)' : 'rgb(19, 23, 34)',
                border: 'none',
                borderRadius: '3px',
                cursor: hasSkimmed || isSkimming ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                fontFamily: 'monospace',
              }}
              onMouseEnter={(e) => {
                if (!hasSkimmed && !isSkimming) {
                  e.target.style.backgroundColor = 'rgb(220, 100, 100)';
                }
              }}
              onMouseLeave={(e) => {
                if (!hasSkimmed && !isSkimming) {
                  e.target.style.backgroundColor = 'rgb(252, 129, 129)';
                }
              }}
            >
              {isSkimming ? 'PROCESSING...' : hasSkimmed ? 'SKIMMED' : 'SKIM'}
            </button>
          </div>

          <Line yellow style={{ fontSize: '0.75rem' }}>
            {isSkimming && '→ Copying transaction data...'}
            {hasSkimmed && `→ Skimmed ${skimmedAmount}¤ from recent account data`}
            {!hasSkimmed && !isSkimming && '→ Extract data from recent user transactions (10-50¤)'}
          </Line>
        </div>
      </div>
    </div>
  );
}
