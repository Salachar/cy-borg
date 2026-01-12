import React, { useState, useEffect, useRef } from 'react';
import { GridUtils } from './gameEngine';
import './pipeDreamGame.css';

const COLORS = {
  bg: {
    main: 'rgb(19, 23, 34)',
    panel: 'rgb(29, 35, 50)',
  },
  border: {
    default: 'rgb(77, 167, 188)',
  },
  text: {
    primary: 'rgb(133, 175, 231)',
    secondary: 'rgb(148, 163, 184)',
  },
  accent: {
    teal: 'rgb(79, 209, 197)',
    yellow: 'rgb(251, 191, 36)',
    red: 'rgb(252, 129, 129)',
  },
};

// Pipe types with 9-grid patterns (which of the 9 cells are active)
// Grid layout: [0,1,2]
//              [3,4,5]
//              [6,7,8]
const PIPE_TYPES = {
  straight_h: {
    pattern: [false, false, false, true, true, true, false, false, false],
    connections: { north: false, east: true, south: false, west: true },
  },
  straight_v: {
    pattern: [false, true, false, false, true, false, false, true, false],
    connections: { north: true, east: false, south: true, west: false },
  },
  corner_ne: {
    pattern: [false, true, false, false, true, true, false, false, false],
    connections: { north: true, east: true, south: false, west: false },
  },
  corner_se: {
    pattern: [false, false, false, false, true, true, false, true, false],
    connections: { north: false, east: true, south: true, west: false },
  },
  corner_sw: {
    pattern: [false, false, false, true, true, false, false, true, false],
    connections: { north: false, east: false, south: true, west: true },
  },
  corner_nw: {
    pattern: [false, true, false, true, true, false, false, false, false],
    connections: { north: true, east: false, south: false, west: true },
  },
  cross: {
    pattern: [false, true, false, true, true, true, false, true, false],
    connections: { north: true, east: true, south: true, west: true },
  },
};

const PIPE_ARRAY = Object.keys(PIPE_TYPES);

export default function PipeDreamGame({
  gridWidth = 10,
  gridHeight = 8,
  tileSize = 60,
  prepTime = 10, // Configurable prep time in seconds
  flowDelay = 400, // Delay between tile flow (ms)
  onClose,
}) {
  const [gameState, setGameState] = useState('ready'); // 'ready' | 'prep' | 'flowing' | 'won' | 'lost'
  const [grid, setGrid] = useState([]);
  const [nextPipe, setNextPipe] = useState(null);
  const [score, setScore] = useState(0);
  const [flowPath, setFlowPath] = useState([]);
  const [startPos, setStartPos] = useState({ row: 0, col: 0 });
  const [endPos, setEndPos] = useState({ row: 0, col: gridWidth - 1 });
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [countdown, setCountdown] = useState(prepTime);
  const [connectedTiles, setConnectedTiles] = useState(new Set());

  const longPressTimerRef = useRef(null);
  const longPressTargetRef = useRef(null);
  const gridRef = useRef(grid);

  // Keep gridRef in sync
  useEffect(() => {
    gridRef.current = grid;
  }, [grid]);

  // Initialize game
  useEffect(() => {
    initializeGame();
  }, []);

  // Countdown timer (only during prep phase)
  useEffect(() => {
    if (gameState === 'prep' && countdown > 0 && !isCollapsed) {
      const timer = setTimeout(() => {
        setCountdown(prev => {
          if (prev === 1) {
            startFlow();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown, gameState, isCollapsed]);

  const initializeGame = () => {
    // Create empty grid
    const newGrid = [];
    for (let row = 0; row < gridHeight; row++) {
      for (let col = 0; col < gridWidth; col++) {
        newGrid.push({
          row,
          col,
          pipe: null,
          hasFlow: false,
          isConnected: false,
        });
      }
    }

    // Set start and end positions
    const startRow = Math.floor(gridHeight / 2);
    const newStartPos = { row: startRow, col: 0 };
    const newEndPos = { row: startRow, col: gridWidth - 1 };

    setStartPos(newStartPos);
    setEndPos(newEndPos);

    // Place starting pipe (straight horizontal facing right)
    const startIndex = GridUtils.coordsToIndex(newStartPos.col, newStartPos.row, gridWidth);
    newGrid[startIndex].pipe = 'straight_h';
    newGrid[startIndex].isConnected = true;

    setGrid(newGrid);
    setNextPipe(getRandomPipe());
    setFlowPath([]);
    setScore(0);
    setGameState('ready');
    setCountdown(prepTime);
    setConnectedTiles(new Set([startIndex]));
  };

  const getRandomPipe = () => {
    return PIPE_ARRAY[Math.floor(Math.random() * PIPE_ARRAY.length)];
  };

  const startGame = () => {
    setGameState('prep');
  };

  const rotatePipe = (pipeType) => {
    // Rotate pipe 90 degrees clockwise
    const rotations = {
      straight_h: 'straight_v',
      straight_v: 'straight_h',
      corner_ne: 'corner_se',
      corner_se: 'corner_sw',
      corner_sw: 'corner_nw',
      corner_nw: 'corner_ne',
      cross: 'cross', // Cross doesn't change
    };
    return rotations[pipeType];
  };

  const handleTileMouseDown = (row, col) => {
    if (gameState !== 'prep') return;

    const index = GridUtils.coordsToIndex(col, row, gridWidth);
    const tile = grid[index];

    // Start long press timer
    longPressTargetRef.current = { row, col, index };
    longPressTimerRef.current = setTimeout(() => {
      // Long press - delete pipe
      if (tile.pipe && !(row === startPos.row && col === startPos.col)) {
        setGrid(prev => {
          const newGrid = [...prev];
          newGrid[index] = {
            ...newGrid[index],
            pipe: null,
            isConnected: false,
          };
          return newGrid;
        });
      }
    }, 500);
  };

  const handleTileMouseUp = (row, col) => {
    if (gameState !== 'prep') return;

    // Clear long press timer
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }

    // If this was a quick click (not long press)
    if (longPressTargetRef.current) {
      const index = GridUtils.coordsToIndex(col, row, gridWidth);
      const tile = grid[index];

      // Can't interact with start tile
      if (row === startPos.row && col === startPos.col) return;

      if (tile.pipe) {
        // Rotate existing pipe
        setGrid(prev => {
          const newGrid = [...prev];
          newGrid[index] = {
            ...newGrid[index],
            pipe: rotatePipe(tile.pipe),
          };
          return newGrid;
        });
      } else {
        // Place new pipe
        if (nextPipe) {
          setGrid(prev => {
            const newGrid = [...prev];
            newGrid[index] = {
              ...newGrid[index],
              pipe: nextPipe,
            };
            return newGrid;
          });
          setNextPipe(getRandomPipe());
          setScore(prev => prev + 10);
        }
      }
    }

    longPressTargetRef.current = null;
  };

  // Update connected tiles whenever grid changes
  useEffect(() => {
    if (gameState !== 'prep') return;

    const connected = new Set();
    const queue = [GridUtils.coordsToIndex(startPos.col, startPos.row, gridWidth)];
    const visited = new Set();

    while (queue.length > 0) {
      const currentIndex = queue.shift();
      if (visited.has(currentIndex)) continue;
      visited.add(currentIndex);

      const currentTile = grid[currentIndex];
      if (!currentTile || !currentTile.pipe) continue;

      const { row, col } = GridUtils.indexToCoords(currentIndex, gridWidth);
      connected.add(currentIndex);

      const pipeType = PIPE_TYPES[currentTile.pipe];

      // Check all four directions
      const directions = [
        { name: 'north', row: row - 1, col: col, opposite: 'south' },
        { name: 'east', row: row, col: col + 1, opposite: 'west' },
        { name: 'south', row: row + 1, col: col, opposite: 'north' },
        { name: 'west', row: row, col: col - 1, opposite: 'east' },
      ];

      for (const dir of directions) {
        // Does current pipe connect in this direction?
        if (!pipeType.connections[dir.name]) continue;

        // Is neighbor position valid?
        if (!GridUtils.isValidPosition(dir.col, dir.row, gridWidth, gridHeight)) continue;

        const neighborIndex = GridUtils.coordsToIndex(dir.col, dir.row, gridWidth);
        if (visited.has(neighborIndex)) continue;

        const neighborTile = grid[neighborIndex];
        if (!neighborTile || !neighborTile.pipe) continue;

        const neighborType = PIPE_TYPES[neighborTile.pipe];

        // Does neighbor pipe connect back to us?
        if (neighborType.connections[dir.opposite]) {
          queue.push(neighborIndex);
        }
      }
    }

    setConnectedTiles(connected);

    setGrid(prev => prev.map((tile, idx) => ({
      ...tile,
      isConnected: connected.has(idx),
    })));
  }, [grid.map(t => t.pipe).join(','), gameState]); // Re-run when any pipe changes

  const startFlow = async () => {
    setGameState('flowing');

    let currentIndex = GridUtils.coordsToIndex(startPos.col, startPos.row, gridWidth);
    const visited = new Set();
    const path = [];

    while (currentIndex !== null) {
      if (visited.has(currentIndex)) {
        // Loop detected - lose
        setGameState('lost');
        return;
      }

      visited.add(currentIndex);
      path.push(currentIndex);

      // Light up current tile
      setGrid(prev => {
        const newGrid = [...prev];
        newGrid[currentIndex] = {
          ...newGrid[currentIndex],
          hasFlow: true,
        };
        return newGrid;
      });

      setScore(prev => prev + 25);

      const { row, col } = GridUtils.indexToCoords(currentIndex, gridWidth);

      // Check if we reached the end
      if (row === endPos.row && col === endPos.col) {
        setGameState('won');
        return;
      }

      // Wait before advancing
      await new Promise(resolve => setTimeout(resolve, flowDelay));

      // Find next tile - use current grid ref
      const currentGrid = gridRef.current;
      const tile = currentGrid[currentIndex];

      if (!tile.pipe) {
        setGameState('lost');
        return;
      }

      const pipeType = PIPE_TYPES[tile.pipe];
      const neighbors = [
        { dir: 'north', row: row - 1, col },
        { dir: 'east', row, col: col + 1 },
        { dir: 'south', row: row + 1, col },
        { dir: 'west', row, col: col - 1 },
      ];

      // Find where we came from
      let cameFrom = null;
      if (path.length > 1) {
        const prevIndex = path[path.length - 2];
        const { row: pRow, col: pCol } = GridUtils.indexToCoords(prevIndex, gridWidth);
        if (pRow < row) cameFrom = 'north';
        else if (pRow > row) cameFrom = 'south';
        else if (pCol < col) cameFrom = 'west';
        else if (pCol > col) cameFrom = 'east';
      }

      let nextIndex = null;

      for (const { dir, row: nRow, col: nCol } of neighbors) {
        // Don't go back
        if (cameFrom && dir === cameFrom) continue;

        // Check if this direction is connected
        if (!pipeType.connections[dir]) continue;
        if (!GridUtils.isValidPosition(nCol, nRow, gridWidth, gridHeight)) continue;

        const neighborIndex = GridUtils.coordsToIndex(nCol, nRow, gridWidth);
        const neighborTile = currentGrid[neighborIndex];

        if (!neighborTile.pipe) continue;

        const neighborType = PIPE_TYPES[neighborTile.pipe];
        const oppositeDir = { north: 'south', south: 'north', east: 'west', west: 'east' }[dir];

        if (neighborType.connections[oppositeDir]) {
          nextIndex = neighborIndex;
          break;
        }
      }

      if (nextIndex === null) {
        // Dead end
        setGameState('lost');
        return;
      }

      currentIndex = nextIndex;
    }
  };

  const getStatusMessage = () => {
    switch (gameState) {
      case 'ready': return 'CLICK TO BEGIN ROUTING';
      case 'prep': return `ROUTING IN ${countdown}...`;
      case 'flowing': return 'DATA STREAM ACTIVE';
      case 'won': return 'CONNECTION ESTABLISHED ✓';
      case 'lost': return 'ROUTING FAILURE ✗';
      default: return '';
    }
  };

  if (isCollapsed) {
    return (
      <div
        className="pipe-container collapsed"
        style={{
          border: `2px solid ${COLORS.border.default}`,
          backgroundColor: COLORS.bg.panel,
        }}
      >
        <div className="pipe-collapsed-header" onClick={() => setIsCollapsed(false)}>
          <span style={{ color: COLORS.text.primary }}>SIGNAL ROUTER</span>
          <span style={{ color: COLORS.accent.teal }}>[Click to expand]</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="pipe-container"
      style={{
        border: `2px solid ${COLORS.border.default}`,
        backgroundColor: COLORS.bg.panel,
      }}
    >
      <div className="pipe-header" style={{ borderBottom: `1px solid ${COLORS.border.default}` }}>
        <div>
          <div className="font-bold text-sm" style={{ color: COLORS.text.primary }}>
            SIGNAL ROUTER
          </div>
          <div className="text-xs" style={{ color: COLORS.text.secondary }}>
            Protocol: PUZZLE | {gridWidth}x{gridHeight} Grid
          </div>
          <div className="pipe-stats">
            <div className="text-xs" style={{ color: COLORS.accent.yellow }}>
              SCORE: {score.toString().padStart(5, '0')}
            </div>
            {gameState === 'prep' && (
              <div className="text-xs" style={{ color: COLORS.accent.red }}>
                TIME: {countdown}s
              </div>
            )}
          </div>
        </div>

        <div
          className="pipe-game-state"
          style={{
            color: gameState === 'won' ? COLORS.accent.teal :
                   gameState === 'lost' ? COLORS.accent.red :
                   COLORS.text.secondary,
          }}
        >
          {getStatusMessage()}
        </div>

        <div className="pipe-header-actions">
          <button
            onClick={initializeGame}
            className="pipe-button pipe-reset-button"
            style={{
              backgroundColor: COLORS.bg.main,
              border: `1px solid ${COLORS.border.default}`,
              color: COLORS.accent.yellow,
            }}
            title="New Game"
          >
            ⟲
          </button>
          <button
            onClick={() => setIsCollapsed(true)}
            className="pipe-button"
            style={{
              backgroundColor: COLORS.bg.main,
              color: COLORS.text.primary,
              border: `1px solid ${COLORS.border.default}`,
            }}
          >
            Minimize
          </button>
          {onClose && (
            <button
              onClick={onClose}
              className="pipe-button"
              style={{
                backgroundColor: COLORS.bg.main,
                color: COLORS.accent.red,
                border: `1px solid ${COLORS.accent.red}`,
              }}
            >
              Close
            </button>
          )}
        </div>
      </div>

      <div className="pipe-game-area">
        {/* Next pipe preview */}
        {gameState === 'prep' && nextPipe && (
          <div
            className="pipe-next-preview"
            style={{
              border: `2px solid ${COLORS.border.default}`,
              backgroundColor: COLORS.bg.main,
            }}
          >
            <div className="text-xs mb-2" style={{ color: COLORS.text.secondary }}>
              NEXT PIPE:
            </div>
            <div className="pipe-preview-container">
              <div
                className="pipe-nine-grid"
                style={{
                  width: '90px',
                  height: '90px',
                  padding: '8px',
                }}
              >
                {PIPE_TYPES[nextPipe].pattern.map((active, idx) => (
                  <div
                    key={idx}
                    className={`pipe-grid-cell ${active ? 'active' : ''}`}
                    style={{
                      backgroundColor: active ? COLORS.accent.teal : COLORS.bg.panel,
                      boxShadow: active ? `0 0 4px ${COLORS.accent.teal}` : 'none',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="text-xs mt-3" style={{ color: COLORS.text.secondary }}>
              Click: Place/Rotate
            </div>
            <div className="text-xs" style={{ color: COLORS.text.secondary }}>
              Hold: Delete
            </div>
          </div>
        )}

        {/* Game grid */}
        <div
          className="pipe-grid-wrapper"
          style={{ position: 'relative' }}
        >
          <div
            className="pipe-grid"
            style={{
              gridTemplateColumns: `repeat(${gridWidth}, ${tileSize}px)`,
              gridTemplateRows: `repeat(${gridHeight}, ${tileSize}px)`,
              border: `2px solid ${COLORS.border.default}`,
              backgroundColor: COLORS.bg.main,
            }}
          >
            {grid.map((tile, index) => {
              const isStart = tile.row === startPos.row && tile.col === startPos.col;
              const isEnd = tile.row === endPos.row && tile.col === endPos.col;

              return (
                <div
                  key={index}
                  className={`pipe-tile ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''}`}
                  style={{
                    width: `${tileSize}px`,
                    height: `${tileSize}px`,
                    border: `1px solid ${COLORS.border.default}`,
                    backgroundColor: COLORS.bg.panel,
                    cursor: gameState === 'prep' ? 'pointer' : 'default',
                  }}
                  onMouseDown={() => handleTileMouseDown(tile.row, tile.col)}
                  onMouseUp={() => handleTileMouseUp(tile.row, tile.col)}
                  onTouchStart={() => handleTileMouseDown(tile.row, tile.col)}
                  onTouchEnd={() => handleTileMouseUp(tile.row, tile.col)}
                >
                  {tile.pipe && (
                    <div className="pipe-nine-grid">
                      {PIPE_TYPES[tile.pipe].pattern.map((active, idx) => (
                        <div
                          key={idx}
                          className={`pipe-grid-cell ${active ? 'active' : ''} ${
                            tile.hasFlow && active ? 'flowing' : ''
                          } ${tile.isConnected && active && !tile.hasFlow ? 'connected' : ''}`}
                          style={{
                            backgroundColor:
                              tile.hasFlow && active ? COLORS.accent.teal :
                              active ? 'rgb(45, 53, 72)' :
                              'transparent',
                          }}
                        />
                      ))}
                    </div>
                  )}
                  {isStart && (
                    <div
                      className="tile-label"
                      style={{
                        fontSize: `${tileSize * 0.2}px`,
                        color: COLORS.accent.teal
                      }}
                    >
                      START
                    </div>
                  )}
                  {isEnd && (
                    <div
                      className="tile-label"
                      style={{
                        fontSize: `${tileSize * 0.2}px`,
                        color: COLORS.accent.yellow
                      }}
                    >
                      END
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Click to start overlay - only covers grid */}
          {gameState === 'ready' && (
            <div className="pipe-start-overlay" onClick={startGame}>
              <div
                style={{
                  color: COLORS.text.primary,
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  textShadow: `0 0 10px ${COLORS.accent.teal}`,
                }}
              >
                CLICK TO START
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
