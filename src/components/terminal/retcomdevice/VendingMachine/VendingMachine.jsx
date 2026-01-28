import { useState } from 'react';
import './vendingMachine.css';

/**
 * VendingMachine - Interactive vending machine interface
 *
 * Three-column layout: Left info panel, Center temperature bar, Right drink buttons
 *
 * Props:
 * - id: String (e.g., "vm-lobby-01")
 * - model: String (default: "VENDTRON-2000")
 * - location: String (optional, e.g., "Office Lobby")
 * - brandName: String (optional, custom branding, default: "VENDTRON")
 * - statusText: String (optional, custom status, default: "INSERT CREDITS")
 * - temperature: Number (0-100, affects cooling bar, default: 35)
 * - drinks: Array of drink objects
 *   - name: String
 *   - pattern: String ("circles", "waves", "swirl", "zigzag", "bubbles", "stripe")
 *   - color: String ("red", "blue", "green", "yellow", "orange", "purple")
 *   - available: Boolean (default: true)
 * - children: React nodes (for ads, promotions, etc.)
 */
export default function VendingMachine({
  id = 'vm-unknown',
  model = 'VENDTRON-2000',
  location,
  brandName = 'VENDTRON',
  statusText = 'INSERT CREDITS',
  temperature = 35,
  drinks = [],
  children,
}) {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [dispensing, setDispensing] = useState(false);

  const handleDrinkSelect = (drink, index) => {
    if (!drink.available || dispensing) return;

    setSelectedDrink(index);
    setDispensing(true);

    // Simulate dispensing
    setTimeout(() => {
      setDispensing(false);
      setSelectedDrink(null);
    }, 2000);
  };

  // Generate slot labels (A1, A2, B1, B2, etc.)
  const getSlotLabel = (index) => {
    const row = String.fromCharCode(65 + Math.floor(index / 2)); // A, B, C, etc.
    const col = (index % 2) + 1; // 1 or 2
    return `${row}${col}`;
  };

  // Get temperature bar color and label
  const getTempStatus = () => {
    if (temperature <= 40) return { color: '#3b82f6', label: 'OPTIMAL COOLING', glow: 'rgba(59, 130, 246, 0.6)' };
    if (temperature <= 60) return { color: '#10b981', label: 'COOL', glow: 'rgba(16, 185, 129, 0.6)' };
    if (temperature <= 75) return { color: '#fbbf24', label: 'MODERATE', glow: 'rgba(251, 191, 36, 0.6)' };
    return { color: '#ef4444', label: 'WARM', glow: 'rgba(239, 68, 68, 0.6)' };
  };

  const tempStatus = getTempStatus();

  return (
    <div className="vending-machine">
      {/* Three-column layout: Left info, Center temp, Right drinks */}
      <div className="vending-machine-container">

        {/* Left panel - Info */}
        <div className="vending-machine-left">
          {/* Branding area */}
          <div className="vending-machine-brand">
            <div className="vending-machine-logo">{brandName}</div>
            <div className="vending-machine-model">{model}</div>
            {location && <div className="vending-machine-location">{location}</div>}
          </div>

          {/* Status display */}
          <div className="vending-machine-status">
            <div className="vending-machine-status-lights">
              <div className="status-light status-light-active"></div>
              <div className="status-light status-light-active"></div>
              <div className="status-light"></div>
            </div>
            <div className="vending-machine-status-text">
              {dispensing ? 'DISPENSING...' : statusText}
            </div>
          </div>

          {/* Compact visual display area - drink can sized */}
          <div className="vending-machine-display">
            {selectedDrink !== null && drinks[selectedDrink] ? (
              <div
                className={`vending-machine-display-can drink-can-${drinks[selectedDrink].color} drink-pattern-${drinks[selectedDrink].pattern}`}
              >
                <div className="display-banner">
                  <div className="display-banner-text">DISPENSING</div>
                  <div className="display-banner-drink">{drinks[selectedDrink].name}</div>
                </div>
              </div>
            ) : (
              <div className="vending-machine-display-ready">
                READY
              </div>
            )}
          </div>

          {/* Info section with temperature status */}
          <div className="vending-machine-info">
            <div className="vending-machine-info-item">
              <span className="info-label">UNIT ID:</span>
              <span className="info-value">{id}</span>
            </div>
            <div className="vending-machine-info-item">
              <span className="info-label">STATUS:</span>
              <span className="info-value info-value-operational">OPERATIONAL</span>
            </div>
            <div className="vending-machine-info-item">
              <span className="info-label">TEMP:</span>
              <span
                className="info-value"
                style={{ color: tempStatus.color }}
              >
                {tempStatus.label}
              </span>
            </div>
          </div>

          {/* Children slot for ads/promotions */}
          {children && (
            <div className="vending-machine-children">
              {children}
            </div>
          )}
        </div>

        {/* Center panel - Temperature indicator */}
        <div className="vending-machine-temp">
          <div className="temp-value">{temperature}°F</div>
          <div className="temp-bar-container">
            <div
              className="temp-bar-fill"
              style={{
                height: `${100 - temperature}%`,
                backgroundColor: tempStatus.color,
                boxShadow: `0 0 15px ${tempStatus.glow}`
              }}
            ></div>
          </div>
        </div>

        {/* Right panel - Drink buttons */}
        <div className="vending-machine-right">
          <div className="vending-machine-grid">
            {drinks.map((drink, index) => (
              <button
                key={index}
                className={`vending-drink-button ${!drink.available ? 'vending-drink-sold-out' : ''} ${selectedDrink === index ? 'vending-drink-selected' : ''}`}
                onClick={() => handleDrinkSelect(drink, index)}
                disabled={!drink.available || dispensing}
              >
                <div className="drink-slot">{getSlotLabel(index)}</div>
                <div
                  className={`drink-can drink-can-${drink.color} drink-pattern-${drink.pattern}`}
                ></div>
                <div className="drink-name">{drink.name}</div>
                {!drink.available && <div className="drink-sold-out">SOLD OUT</div>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
