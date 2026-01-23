import { Line, Divider, Section, ListItem } from '../TerminalComponents';

/**
 * CommunityBoard Component - Physical bulletin board scanner
 *
 * Shows recent community postings, classified ads, warnings, and neighborhood vibe.
 * Purely informational - captures the feel and concerns of different communities.
 * Like scanning a physical corkboard covered in flyers and handwritten notes.
 *
 * Props:
 * - id: Unique identifier (e.g., "cave-club-board")
 * - boardName: Name of the board (e.g., "Community Bulletin Board")
 * - location: Where the board is physically located
 * - lastUpdate: When board was last updated/scanned
 * - posts: Array of post objects with:
 *   - text: The post content
 *   - color: Optional color override ("pink", "yellow", "red", "neon")
 * - services: Array of service listing strings (optional)
 * - warnings: Array of warning objects (optional) with:
 *   - text: Warning content
 *   - severity: "high" | "medium" | "low"
 * - vibe: Overall neighborhood mood/atmosphere description
 * - sections: Custom sections array (optional) - overrides default structure
 *   Each section: { title, color, items: [{ text, color }] }
 */
export default function CommunityBoard({
  id,
  boardName = "COMMUNITY BULLETIN BOARD",
  location,
  lastUpdate = "Daily",
  posts = [],
  services = [],
  warnings = [],
  vibe,
  sections = null,
}) {
  return (
    <div style={{ position: 'relative' }}>
      {/* Main container */}
      <div
        style={{
          border: '2px solid rgb(0, 187, 255)',
          borderRadius: '4px',
          padding: '1rem',
          backgroundColor: 'rgba(29, 35, 50, 0.3)',
          position: 'relative',
        }}
      >
        {/* Header with bulletin board icon */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          {/* CSS Bulletin Board Icon */}
          <div style={{ position: 'relative', width: '24px', height: '20px', flexShrink: 0 }}>
            {/* Board frame */}
            <div
              style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '24px',
                height: '20px',
                border: '2px solid rgb(255, 0, 128)',
                borderRadius: '2px',
                backgroundColor: 'rgba(255, 0, 128, 0.1)',
              }}
            />
            {/* Pinned notes */}
            <div
              style={{
                position: 'absolute',
                top: '3px',
                left: '3px',
                width: '6px',
                height: '6px',
                backgroundColor: 'rgb(250, 204, 21)',
                borderRadius: '1px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '3px',
                right: '3px',
                width: '5px',
                height: '7px',
                backgroundColor: 'rgb(79, 209, 197)',
                borderRadius: '1px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '3px',
                left: '5px',
                width: '7px',
                height: '5px',
                backgroundColor: 'rgb(133, 175, 231)',
                borderRadius: '1px',
              }}
            />
            {/* Push pins */}
            <div
              style={{
                position: 'absolute',
                top: '2px',
                left: '5px',
                width: '2px',
                height: '2px',
                backgroundColor: 'rgb(239, 68, 68)',
                borderRadius: '50%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '2px',
                right: '5px',
                width: '2px',
                height: '2px',
                backgroundColor: 'rgb(239, 68, 68)',
                borderRadius: '50%',
              }}
            />
          </div>

          <Line smoke large bold style={{ margin: 0, flex: 1 }}>
            [{boardName}]
          </Line>
        </div>

        {location && <Line cyan>{location}</Line>}
        <Line neon>
          {location ? 'Accessing physical postings via photo scan...' : 'Recent postings - Updated daily'}
        </Line>
        <Divider />

        {/* Custom sections (if provided) */}
        {sections ? (
          sections.map((section, i) => (
            <div key={i}>
              <Section title={section.title} color={section.color || 'smoke'}>
                {section.items.map((item, j) => (
                  <Line
                    key={j}
                    smoke={!item.color || item.color === 'smoke'}
                    pink={item.color === 'pink'}
                    yellow={item.color === 'yellow'}
                    red={item.color === 'red'}
                    neon={item.color === 'neon'}
                    cyan={item.color === 'cyan'}
                  >
                    → {item.text}
                  </Line>
                ))}
              </Section>
              {i < sections.length - 1 && <Divider />}
            </div>
          ))
        ) : (
          <>
            {/* Standard posts section */}
            {posts.length > 0 && (
              <>
                <Section title="RECENT POSTS:" color="smoke">
                  {posts.map((post, i) => (
                    <Line
                      key={i}
                      smoke={!post.color || post.color === 'smoke'}
                      pink={post.color === 'pink'}
                      yellow={post.color === 'yellow'}
                      red={post.color === 'red'}
                      neon={post.color === 'neon'}
                      cyan={post.color === 'cyan'}
                    >
                      → {post.text}
                    </Line>
                  ))}
                </Section>
                {(services.length > 0 || warnings.length > 0 || vibe) && <Divider />}
              </>
            )}

            {/* Warnings section */}
            {warnings.length > 0 && (
              <>
                <Section title="WARNINGS:" color="red">
                  {warnings.map((warning, i) => (
                    <Line
                      key={i}
                      red={warning.severity === 'high'}
                      yellow={warning.severity === 'medium'}
                      pink={warning.severity === 'low'}
                    >
                      → {warning.text}
                    </Line>
                  ))}
                </Section>
                {(services.length > 0 || vibe) && <Divider />}
              </>
            )}

            {/* Services section */}
            {services.length > 0 && (
              <>
                <Section title="SERVICES ADVERTISED:" color="pink">
                  {services.map((service, i) => (
                    <ListItem key={i}>{service}</ListItem>
                  ))}
                </Section>
                {vibe && <Divider />}
              </>
            )}
          </>
        )}

        {/* Neighborhood vibe */}
        {vibe && <Line yellow>{vibe}</Line>}
      </div>
    </div>
  );
}
