import Extractable from '../Extractable/Extractable';
import './digitalWallet.css';

/**
 * DigitalWallet - Banner-style digital safe
 *
 * Compact vertical banner for digital wallet.
 * Shows fancy lock screen when locked, Extractable when unlocked.
 *
 * Props:
 * - id: String (wallet ID, required for Extractable)
 * - accountNumber: String (display account number)
 * - balance: Number (credits available)
 * - accountHolder: String (optional, account name)
 * - lastTransaction: String (optional, date)
 * - isLocked: Boolean (optional, shows locked screen)
 */
export default function DigitalWallet({
  id,
  accountNumber,
  balance = 0,
  accountHolder,
  lastTransaction,
  isLocked = false,
}) {
  return (
    <div className={`digital-wallet ${isLocked ? 'digital-wallet-locked' : ''}`}>
      {/* Header - Account info */}
      <div className="wallet-header">
        <div className="wallet-title">
          <span className="wallet-title-text">DIGITAL WALLET</span>
          {isLocked && <span className="wallet-locked-badge">LOCKED</span>}
        </div>
        <div className="wallet-details">
          {accountNumber && (
            <div className="wallet-detail-item">
              <span className="wallet-detail-label">ACCT:</span>
              <span className="wallet-detail-value">{accountNumber}</span>
            </div>
          )}
          {accountHolder && (
            <div className="wallet-detail-item">
              <span className="wallet-detail-label">HOLDER:</span>
              <span className="wallet-detail-value">{accountHolder}</span>
            </div>
          )}
          {lastTransaction && (
            <div className="wallet-detail-item">
              <span className="wallet-detail-label">LAST TX:</span>
              <span className="wallet-detail-value">{lastTransaction}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content area - lock screen OR extractable */}
      {isLocked ? (
        /* Locked state - fancy lock screen */
        <div className="wallet-lock-screen">
          <div className="wallet-lock-visual">
            {/* Large lock icon */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="16" y="28" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="3"/>
              <path d="M20 28V20C20 14.4772 24.4772 10 30 10H34C39.5228 10 44 14.4772 44 20V28" stroke="currentColor" strokeWidth="3"/>
              <circle cx="32" cy="42" r="4" fill="currentColor"/>
              <rect x="30" y="42" width="4" height="8" fill="currentColor"/>
            </svg>

            {/* Pulsing ring */}
            <div className="wallet-lock-ring"></div>
          </div>

          <div className="wallet-lock-text">
            <div className="wallet-lock-title">AUTHENTICATION REQUIRED</div>
          </div>
        </div>
      ) : (
        /* Unlocked state - Extractable */
        <div className="wallet-extract-area">
          <Extractable
            id={id}
            digitalItems={[
              {
                item: 'Digital Credits',
                desc: `${balance.toLocaleString()}¤ available balance`,
                value: balance
              }
            ]}
            stealing={true}
          />
        </div>
      )}
    </div>
  );
}
