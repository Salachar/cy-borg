import { Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import Classes from './pages/Classes';
import Terminal from './pages/Terminal';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cyberpunk Nav */}
      <nav className="relative bg-black border-b border-cy-cyan/30 overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />

        <div className="relative flex items-center h-16 px-4">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `
              relative px-6 py-3 mr-2
              font-bold uppercase tracking-wider text-sm
              transition-all duration-300
              ${isActive
                ? 'text-cy-cyan'
                : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            {({ isActive }) => (
              <>
                {/* Slanted background for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cy-cyan/20 to-cy-cyan/10 transform -skew-x-12 border border-cy-cyan/50"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)'
                    }}
                  />
                )}
                <span className="relative z-10">Home</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/classes"
            className={({ isActive }) => `
              relative px-6 py-3 mr-2
              font-bold uppercase tracking-wider text-sm
              transition-all duration-300
              ${isActive
                ? 'text-cy-pink'
                : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            {({ isActive }) => (
              <>
                {/* Slanted background for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cy-pink/20 to-cy-pink/10 transform -skew-x-12 border border-cy-pink/50"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 0, 128, 0.3), inset 0 0 20px rgba(255, 0, 128, 0.1)'
                    }}
                  />
                )}
                <span className="relative z-10">Classes</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/retcomdevice"
            className={({ isActive }) => `
              relative px-6 py-3
              font-bold uppercase tracking-wider text-sm
              transition-all duration-300
              ${isActive
                ? 'text-cy-green'
                : 'text-gray-400 hover:text-gray-200'
              }
            `}
          >
            {({ isActive }) => (
              <>
                {/* Slanted background for active state */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cy-green/20 to-cy-green/10 transform -skew-x-12 border border-cy-green/50"
                    style={{
                      boxShadow: '0 0 20px rgba(0, 255, 65, 0.3), inset 0 0 20px rgba(0, 255, 65, 0.1)'
                    }}
                  />
                )}
                <span className="relative z-10">RetComDevice</span>
              </>
            )}
          </NavLink>
        </div>

        {/* Bottom glowing line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cy-cyan to-transparent" />
      </nav>
      <div className="flex-1 flex flex-col">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classes/:slug?" element={<Classes />} />
        <Route path="/retcomdevice" element={<Terminal />} />
      </Routes>
      </div>
    </div>
  );
}
