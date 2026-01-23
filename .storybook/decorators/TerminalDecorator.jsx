export const TerminalDecorator = (Story) => {
  return (
    <div
      style={{
        heigh: '100vh',
        width: '100vw',
        backgroundColor: 'rgb(19, 23, 34)',
        padding: '2rem',
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Terminal window */}
      <div
        style={{
          // maxWidth: '900px',
          width: '100%',
          border: '2px solid rgb(77, 167, 188)',
          borderRadius: '8px',
          backgroundColor: 'rgba(29, 35, 50, 0.95)',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
        }}
      >
        {/* Terminal header bar */}
        <div
          style={{
            backgroundColor: 'rgb(29, 35, 50)',
            borderBottom: '1px solid rgb(77, 167, 188)',
            padding: '0.75rem 1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {/* Window controls */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgb(239, 68, 68)',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgb(251, 191, 36)',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'rgb(34, 197, 94)',
              }}
            />
          </div>

          {/* Terminal title */}
          <div
            style={{
              flex: 1,
              textAlign: 'center',
              fontSize: '0.875rem',
              color: 'rgb(148, 163, 184)',
              fontWeight: 'bold',
              letterSpacing: '0.05em',
            }}
          >
            CY_NET TERMINAL - COMPONENT PREVIEW
          </div>
        </div>

        {/* Terminal content area */}
        <div
          style={{
            padding: '2rem',
            minHeight: '400px',
            maxHeight: '80vh',
            overflowY: 'auto',
            backgroundColor: 'rgba(19, 23, 34, 0.5)',
          }}
        >
          <Story />
        </div>

        {/* Terminal footer */}
        <div
          style={{
            backgroundColor: 'rgb(29, 35, 50)',
            borderTop: '1px solid rgb(77, 167, 188)',
            padding: '0.5rem 1rem',
            fontSize: '0.75rem',
            color: 'rgb(148, 163, 184)',
            textAlign: 'center',
          }}
        >
          Storybook Component Library - CY_BORG Terminal Interface
        </div>
      </div>
    </div>
  );
};
