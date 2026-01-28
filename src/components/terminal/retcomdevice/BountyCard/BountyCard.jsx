import { useState, useEffect } from 'react';
import Extractable from '../Extractable/Extractable';

import IMAGE_01 from "@images/profile_images/1.png";
import IMAGE_02 from "@images/profile_images/2.png";
import IMAGE_03 from "@images/profile_images/3.png";
import IMAGE_04 from "@images/profile_images/4.png";
import IMAGE_05 from "@images/profile_images/5.png";
import IMAGE_06 from "@images/profile_images/6.png";
import IMAGE_07 from "@images/profile_images/7.png";
import IMAGE_08 from "@images/profile_images/8.png";
import IMAGE_09 from "@images/profile_images/9.png";
import IMAGE_10 from "@images/profile_images/10.png";
import IMAGE_11 from "@images/profile_images/11.png";
import IMAGE_12 from "@images/profile_images/12.png";
import IMAGE_13 from "@images/profile_images/13.png";

const IMAGES_ARRAY = [
  IMAGE_01,
  IMAGE_02,
  IMAGE_03,
  IMAGE_04,
  IMAGE_05,
  IMAGE_06,
  IMAGE_07,
  IMAGE_08,
  IMAGE_09,
  IMAGE_10,
  IMAGE_11,
  IMAGE_12,
  IMAGE_13,
];

import './bountyCard.css';

/**
 * BountyCard - Wanted bounty listing
 *
 * Bounty hunter's dossier with threat assessment.
 * Shows combat capabilities, gear, and bounty value.
 *
 * Props:
 * - id: String (unique bounty ID, required for Extractable)
 * - name: String (target name)
 * - alias: String (optional, nickname/callsign)
 * - image: String (optional, photo URL)
 * - bounty: String (payment amount, e.g., "5,000¤")
 * - sponsor: String (who's paying)
 * - deadline: String (optional, time limit)
 * - status: String (ACTIVE, CLAIMED, EXPIRED)
 *
 * - hp: Number (used to calculate durability tier)
 * - armor: String (e.g., "Flak jacket -D2", "None")
 * - weapons: Array of strings (weapon descriptions)
 * - specialAbilities: Array of strings (special moves/abilities)
 *
 * - lastSeen: String (optional, location)
 * - knownAssociates: Array of strings (optional)
 * - notes: String (optional, additional intel)
 * - threat: String (optional, LOW/MEDIUM/HIGH/CRITICAL, overrides auto-calc)
 */
export default function BountyCard({
  id,
  name,
  alias,
  image = null,
  bounty,
  sponsor,
  deadline,
  status = 'ACTIVE',

  hp = 10,
  armor = 'None',
  weapons = [],

  lastSeen,
  knownAssociates = [],
  notes,
  threat,
}) {
  let imageSource = image;
  if (typeof image === "number" && IMAGES_ARRAY[image]) {
    imageSource = IMAGES_ARRAY[image];
  }

  // Check if bounty has been claimed
  const [isClaimed, setIsClaimed] = useState(() => {
    try {
      const extracted = JSON.parse(localStorage.getItem('cyborg_retcom_extracted') || '{}');
      return extracted[id] === true;
    } catch {
      return false;
    }
  });

  // Listen for storage changes
  useEffect(() => {
    const checkClaimed = () => {
      try {
        const extracted = JSON.parse(localStorage.getItem('cyborg_retcom_extracted') || '{}');
        setIsClaimed(extracted[id] === true);
      } catch {
        setIsClaimed(false);
      }
    };

    // Check on mount and when storage changes
    window.addEventListener('storage', checkClaimed);
    return () => window.removeEventListener('storage', checkClaimed);
  }, [id]);

  // Override status if claimed
  const displayStatus = isClaimed ? 'CLAIMED' : status;
  // Calculate durability assessment from HP
  const getDurabilityAssessment = () => {
    if (hp <= 4) return {
      tier: 'FRAGILE',
      intel: 'Easy takedown. One good hit should do it.',
      color: '#10b981'
    };
    if (hp <= 8) return {
      tier: 'STANDARD',
      intel: 'Average resilience. Took a broken bottle to the ribs and kept moving.',
      color: '#fbbf24'
    };
    if (hp <= 12) return {
      tier: 'REINFORCED',
      intel: 'Survived three-story fall through synthglass roof. Walked away.',
      color: '#f97316'
    };
    if (hp <= 16) return {
      tier: 'FORTIFIED',
      intel: 'Team of four couldn\'t put them down. Heavy chrome or just tough as hell.',
      color: '#ef4444'
    };
    return {
      tier: 'APEX',
      intel: 'Walked through pulse rifle fire. Bring everything you\'ve got.',
      color: '#dc2626'
    };
  };

  // Auto-calculate threat level if not provided
  const getThreatLevel = () => {
    if (threat) return threat;
    if (hp <= 6) return 'LOW';
    if (hp <= 10) return 'MEDIUM';
    if (hp <= 14) return 'HIGH';
    return 'CRITICAL';
  };

  const getThreatColor = (level) => {
    switch(level) {
      case 'LOW': return '#10b981';
      case 'MEDIUM': return '#fbbf24';
      case 'HIGH': return '#f97316';
      case 'CRITICAL': return '#ef4444';
      default: return '#94a3b8';
    }
  };

  const durability = getDurabilityAssessment();
  const threatLevel = getThreatLevel();
  const threatColor = getThreatColor(threatLevel);

  return (
    <div className={`bounty-card ${isClaimed ? 'bounty-card-claimed' : ''}`}>
      {/* Header */}
      <div className="bounty-header">
        <div className="bounty-header-left">
          <div className="bounty-title">BOUNTY LISTING</div>
          <div className="bounty-id">ID: {id}</div>
        </div>
        <div className="bounty-header-right">
          <div className="bounty-amount">
            <div className="bounty-amount-label">Bounty</div>
            <div className="bounty-amount-value">{bounty}</div>
          </div>

          <div
            className="bounty-status"
            style={{
              backgroundColor: displayStatus === 'ACTIVE' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(148, 163, 184, 0.15)',
              borderColor: displayStatus === 'ACTIVE' ? '#10b981' : '#94a3b8'
            }}
          >
            <div
              className="bounty-status-dot"
              style={{ backgroundColor: displayStatus === 'ACTIVE' ? '#10b981' : '#94a3b8' }}
            ></div>
            <span style={{ color: displayStatus === 'ACTIVE' ? '#10b981' : '#94a3b8' }}>
              {displayStatus}
            </span>
          </div>
        </div>
      </div>

      {/* Content - tighter layout */}
      <div className="bounty-content">
        {/* Main info area */}
        <div className="bounty-main">
          {/* Target info */}
          <div className="bounty-name-section">
            <div className="bounty-name">{name}</div>
            {alias && <div className="bounty-alias">"{alias}"</div>}
          </div>

          {/* Bounty amount & meta */}
          <div className="bounty-payment-section">
            <div className="bounty-meta">
              <div className="bounty-meta-item">
                <span className="bounty-meta-label">Sponsor:</span>
                <span className="bounty-meta-value">{sponsor}</span>
              </div>
              {deadline && (
                <div className="bounty-meta-item">
                  <span className="bounty-meta-label">Deadline:</span>
                  <span className="bounty-meta-value">{deadline}</span>
                </div>
              )}
            </div>
          </div>

          {/* Two-column layout for durability & combat */}
          <div className="bounty-details-grid">
            {/* Combat Capabilities */}
            <div className="bounty-section">
              <div className="bounty-section-title">Combat Capabilities</div>
              <div className="bounty-combat">
                <div className="bounty-combat-item">
                  <span className="bounty-combat-label">Armor:</span>
                  <span className="bounty-combat-value">{armor}</span>
                </div>
                {weapons.length > 0 && (
                  <div className="bounty-combat-item">
                    <span className="bounty-combat-label">Weapons:</span>
                    <div className="bounty-combat-list">
                      {weapons.map((weapon, i) => (
                        <div key={i} className="bounty-combat-list-item">→ {weapon}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Durability Assessment */}
            <div className="bounty-section">
              <div className="bounty-section-title">Durability Assessment</div>
              <div
                className="bounty-durability"
                style={{ borderLeftColor: durability.color }}
              >
                <div
                  className="bounty-durability-tier"
                  style={{ color: durability.color }}
                >
                  {durability.tier}
                </div>
                <div className="bounty-durability-intel">{durability.intel}</div>
              </div>
            </div>
          </div>

          {/* Intel */}
          {(lastSeen || knownAssociates.length > 0 || notes) && (
            <div className="bounty-section">
              <div className="bounty-section-title">Intelligence</div>
              <div className="bounty-intel">
                {lastSeen && (
                  <div className="bounty-intel-item">
                    <span className="bounty-intel-label">Last Seen:</span>
                    <span className="bounty-intel-value">{lastSeen}</span>
                  </div>
                )}
                {knownAssociates.length > 0 && (
                  <div className="bounty-intel-item">
                    <span className="bounty-intel-label">Associates:</span>
                    <span className="bounty-intel-value">{knownAssociates.join(', ')}</span>
                  </div>
                )}
                {notes && (
                  <div className="bounty-intel-notes">{notes}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Image - top right with moving scan line */}
        <div
          className="bounty-image-area"
          style={{
            backgroundColor: `${threatColor}15`,
            borderColor: threatColor
          }}
        >
          <div className="bounty-image-container">
            {imageSource ? (
              <img src={imageSource} alt={name} className="bounty-image" />
            ) : (
              <div className="bounty-silhouette">
                {/* CSS silhouette */}
                <div className="silhouette-head"></div>
                <div className="silhouette-shoulders"></div>
              </div>
            )}
            {/* Scanline overlay with moving line */}
            <div className="bounty-scanlines"></div>
            <div className="bounty-scan-line"></div>
          </div>

          {/* Threat badge */}
          <div className="bounty-threat-badge">
            <div className="threat-label">THREAT</div>
            <div
              className="threat-value"
              style={{ color: threatColor }}
            >
              {threatLevel}
            </div>
          </div>
        </div>
      </div>

      {/* Claim bounty - thin banner */}
      <div className="bounty-claim-banner">
        <Extractable
          id={id}
          type="bounty"
          items={[
            { item: 'Bounty Payment', desc: bounty, value: parseInt(bounty.replace(/[^0-9]/g, '')) || 0 }
          ]}
          requiresPresence={false}
        />
      </div>

      {/* Footer */}
      <div className="bounty-footer">
        <div className="bounty-footer-warning">
          ARMED AND DANGEROUS - EXTREME CAUTION ADVISED
        </div>
      </div>
    </div>
  );
}
