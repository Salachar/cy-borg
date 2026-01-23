import { useState, useEffect } from 'react';
import { EVENT_FEED } from '@data/random/eventFeed';

/**
 * NewsTicker Component - Slim scrolling news ticker
 *
 * Cycles through events from eventData in a compact ticker format.
 * Perfect for terminal headers or sidebars.
 *
 * Props:
 * - interval: How long to display each event in ms (default: 5000)
 * - filterType: Filter by event type ("ALL", "CORP_NEWS", etc.) (default: "ALL")
 * - showTypeLabel: Show the event type badge (default: true)
 * - autoScroll: Auto-advance to next event (default: true)
 */
export default function NewsTicker({
  interval = 5000,
  filterType = "ALL",
  showTypeLabel = true,
  autoScroll = true,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter events based on type
  const filteredEvents = filterType === "ALL"
    ? EVENT_FEED
    : EVENT_FEED.filter(event => event.type === filterType);

  const currentEvent = filteredEvents[currentIndex] || EVENT_FEED[0];

  // Auto-advance ticker
  useEffect(() => {
    if (!autoScroll || filteredEvents.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredEvents.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoScroll, interval, filteredEvents.length]);

  // Manual navigation
  const handlePrev = () => {
    setCurrentIndex(prev => (prev - 1 + filteredEvents.length) % filteredEvents.length);
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredEvents.length);
  };

  // Event type color mapping
  const getEventColor = (type) => {
    const colorMap = {
      'CORP_NEWS': 'rgb(59, 130, 246)', // blue
      'STREET_INTEL': 'rgb(250, 204, 21)', // yellow
      'GANG_CHATTER': 'rgb(239, 68, 68)', // red
      'SEC_OPS': 'rgb(168, 85, 247)', // purple
      'SYSTEM': 'rgb(79, 209, 197)', // cyan
    };
    return colorMap[type] || 'rgb(79, 209, 197)';
  };

  const eventColor = getEventColor(currentEvent.type);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        backgroundColor: 'rgba(15, 23, 42, 0.8)',
        border: '1px solid rgb(71, 85, 105)',
        borderRadius: '3px',
        padding: '0.5rem 0.75rem',
        fontFamily: 'monospace',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Live indicator */}
      <div
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: 'rgb(239, 68, 68)',
          borderRadius: '50%',
          animation: 'blink 2s infinite',
          flexShrink: 0,
        }}
      />

      {/* Event type badge */}
      {showTypeLabel && (
        <div
          style={{
            fontSize: '0.65rem',
            fontWeight: 'bold',
            color: eventColor,
            padding: '0.15rem 0.4rem',
            backgroundColor: `${eventColor}20`,
            border: `1px solid ${eventColor}60`,
            borderRadius: '2px',
            textTransform: 'uppercase',
            flexShrink: 0,
            letterSpacing: '0.05em',
          }}
        >
          {currentEvent.type.replace('_', ' ')}
        </div>
      )}

      {/* Ticker text */}
      <div
        style={{
          flex: 1,
          fontSize: '0.75rem',
          color: 'rgb(203, 213, 225)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {currentEvent.text}
      </div>

      {/* Timestamp */}
      <div
        style={{
          fontSize: '0.65rem',
          color: 'rgb(148, 163, 184)',
          flexShrink: 0,
        }}
      >
        {currentEvent.timestamp}
      </div>

      {/* Navigation arrows */}
      <div style={{ display: 'flex', gap: '0.25rem', flexShrink: 0 }}>
        <button
          onClick={handlePrev}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'rgba(79, 209, 197, 0.1)',
            border: '1px solid rgb(79, 209, 197)',
            borderRadius: '2px',
            color: 'rgb(79, 209, 197)',
            fontSize: '0.65rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(79, 209, 197, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(79, 209, 197, 0.1)';
          }}
        >
          ◀
        </button>

        <button
          onClick={handleNext}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: 'rgba(79, 209, 197, 0.1)',
            border: '1px solid rgb(79, 209, 197)',
            borderRadius: '2px',
            color: 'rgb(79, 209, 197)',
            fontSize: '0.65rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(79, 209, 197, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(79, 209, 197, 0.1)';
          }}
        >
          ▶
        </button>
      </div>

      {/* Progress indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          backgroundColor: eventColor,
          animation: autoScroll ? `progress ${interval}ms linear` : 'none',
          width: '100%',
          transformOrigin: 'left',
        }}
      />

      {/* CSS animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
