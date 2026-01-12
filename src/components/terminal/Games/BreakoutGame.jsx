import React, { useState, useEffect, useRef } from 'react';
import { GameLoop, CollisionDetector, Physics } from './gameEngine';
import './breakoutGame.css';

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
    pink: 'rgb(255, 0, 128)',
  },
};

const BRICK_COLORS = [
  'rgb(252, 129, 129)', // red
  'rgb(246, 173, 85)',  // orange
  'rgb(251, 191, 36)',  // yellow
  'rgb(79, 209, 197)',  // teal
  'rgb(133, 175, 231)', // blue
  'rgb(255, 0, 128)',   // pink
];

export default function BreakoutGame({
  boardWidth = 600,
  boardHeight = 500,
  onClose,
}) {
  // Game dimensions
  const paddleWidth = 100;
  const paddleHeight = 15;
  const ballSize = 12;
  const brickRows = 6;
  const brickCols = 10;
  const brickWidth = boardWidth / brickCols;
  const brickHeight = 25;
  const brickPadding = 2;

  // Game state
  const [gameState, setGameState] = useState('ready'); // 'ready' | 'playing' | 'won' | 'lost'
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Game objects
  const [paddle, setPaddle] = useState({
    x: (boardWidth - paddleWidth) / 2,
    y: boardHeight - 40,
    width: paddleWidth,
    height: paddleHeight,
  });

  const [ball, setBall] = useState({
    x: boardWidth / 2,
    y: boardHeight / 2,
    radius: ballSize / 2,
    velocityX: 3,
    velocityY: -3,
  });

  const [bricks, setBricks] = useState([]);

  // Refs
  const gameLoopRef = useRef(null);
  const boardRef = useRef(null);
  const paddleRef = useRef(paddle);
  const bricksRef = useRef(bricks);
  const ballRef = useRef(ball);

  // Keep refs in sync with state
  useEffect(() => {
    paddleRef.current = paddle;
  }, [paddle]);

  useEffect(() => {
    bricksRef.current = bricks;
  }, [bricks]);

  useEffect(() => {
    ballRef.current = ball;
  }, [ball]);

  // Initialize bricks
  useEffect(() => {
    initializeBricks();
  }, []);

  // Setup game loop
  useEffect(() => {
    gameLoopRef.current = new GameLoop(() => {
      updateGame();
    }, 60);

    return () => {
      if (gameLoopRef.current) {
        gameLoopRef.current.cleanup();
        gameLoopRef.current = null;
      }
    };
  }, []);

  // Control game loop based on state
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopRef.current?.start();
    } else {
      gameLoopRef.current?.stop();
    }
  }, [gameState]);

  const initializeBricks = () => {
    const newBricks = [];
    for (let row = 0; row < brickRows; row++) {
      for (let col = 0; col < brickCols; col++) {
        newBricks.push({
          x: col * brickWidth + brickPadding,
          y: row * brickHeight + 60 + brickPadding,
          width: brickWidth - brickPadding * 2,
          height: brickHeight - brickPadding * 2,
          color: BRICK_COLORS[row % BRICK_COLORS.length],
          destroyed: false,
          points: (brickRows - row) * 10, // Top rows worth more
        });
      }
    }
    setBricks(newBricks);
  };

  const resetBall = () => {
    setBall({
      x: boardWidth / 2,
      y: boardHeight / 2,
      radius: ballSize / 2,
      velocityX: 3 * (Math.random() > 0.5 ? 1 : -1),
      velocityY: -3,
    });
    setPaddle(prev => ({
      ...prev,
      x: (boardWidth - paddleWidth) / 2,
    }));
  };

  const resetGame = () => {
    setScore(0);
    setLives(3);
    setGameState('ready');
    initializeBricks();
    resetBall();
  };

  const updateGame = () => {
    const currentPaddle = paddleRef.current;
    const currentBricks = bricksRef.current;
    const currentBall = ballRef.current;

    // Calculate new ball position
    let newX = currentBall.x + currentBall.velocityX;
    let newY = currentBall.y + currentBall.velocityY;
    let newVelX = currentBall.velocityX;
    let newVelY = currentBall.velocityY;

    // Wall collisions (left/right)
    if (newX - currentBall.radius <= 0) {
      newX = currentBall.radius;
      newVelX = Math.abs(newVelX);
    }
    if (newX + currentBall.radius >= boardWidth) {
      newX = boardWidth - currentBall.radius;
      newVelX = -Math.abs(newVelX);
    }

    // Top wall collision
    if (newY - currentBall.radius <= 0) {
      newY = currentBall.radius;
      newVelY = Math.abs(newVelY);
    }

    // Bottom wall (lose life)
    if (newY - currentBall.radius > boardHeight) {
      setLives(prev => {
        const newLives = prev - 1;
        if (newLives <= 0) {
          setTimeout(() => setGameState('lost'), 100);
        } else {
          setTimeout(() => resetBall(), 500);
        }
        return newLives;
      });
      return; // Don't update ball
    }

    // Paddle collision (AABB)
    const ballLeft = newX - currentBall.radius;
    const ballRight = newX + currentBall.radius;
    const ballTop = newY - currentBall.radius;
    const ballBottom = newY + currentBall.radius;

    const paddleLeft = currentPaddle.x;
    const paddleRight = currentPaddle.x + currentPaddle.width;
    const paddleTop = currentPaddle.y;
    const paddleBottom = currentPaddle.y + currentPaddle.height;

    const paddleCollision =
      ballRight > paddleLeft &&
      ballLeft < paddleRight &&
      ballBottom > paddleTop &&
      ballTop < paddleBottom &&
      newVelY > 0; // Only if moving down

    if (paddleCollision) {
      const bounced = Physics.bounceBallOffPaddle(
        { ...currentBall, x: newX, y: newY, velocityX: newVelX, velocityY: newVelY },
        currentPaddle
      );
      newVelX = bounced.velocityX;
      newVelY = bounced.velocityY;
      newY = paddleTop - currentBall.radius;
    }

    // Brick collisions
    let brickDestroyed = false;
    const newBricks = currentBricks.map(brick => {
      if (brick.destroyed || brickDestroyed) return brick;

      const brickLeft = brick.x;
      const brickRight = brick.x + brick.width;
      const brickTop = brick.y;
      const brickBottom = brick.y + brick.height;

      const brickCollision =
        ballRight > brickLeft &&
        ballLeft < brickRight &&
        ballBottom > brickTop &&
        ballTop < brickBottom;

      if (brickCollision) {
        brickDestroyed = true;

        // Determine bounce direction based on overlap
        const overlapLeft = ballRight - brickLeft;
        const overlapRight = brickRight - ballLeft;
        const overlapTop = ballBottom - brickTop;
        const overlapBottom = brickBottom - ballTop;

        const minOverlap = Math.min(overlapLeft, overlapRight, overlapTop, overlapBottom);

        if (minOverlap === overlapLeft || minOverlap === overlapRight) {
          newVelX = -newVelX;
        } else {
          newVelY = -newVelY;
        }

        // Update score
        setScore(prev => prev + brick.points);

        return { ...brick, destroyed: true };
      }

      return brick;
    });

    if (brickDestroyed) {
      setBricks(newBricks);

      // Check win
      const remaining = newBricks.filter(b => !b.destroyed).length;
      if (remaining === 0) {
        setTimeout(() => setGameState('won'), 100);
      }
    }

    // Update ball position and velocity
    setBall({
      ...currentBall,
      x: newX,
      y: newY,
      velocityX: newVelX,
      velocityY: newVelY,
    });
  };

  const handleMouseMove = (e) => {
    if (gameState === 'lost' || gameState === 'won') return;

    if (boardRef.current) {
      const rect = boardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;

      setPaddle(prev => ({
        ...prev,
        x: Physics.clamp(mouseX - paddleWidth / 2, 0, boardWidth - paddleWidth),
      }));
    }
  };

  const handleTouchControl = (e) => {
    if (gameState === 'lost' || gameState === 'won') return;
    e.preventDefault();

    if (!boardRef.current) return;

    const rect = boardRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const touchX = touch.clientX - rect.left;

    setPaddle(prev => ({
      ...prev,
      x: Physics.clamp(touchX - paddleWidth / 2, 0, boardWidth - paddleWidth),
    }));
  };

  const handleClick = () => {
    if (gameState === 'ready') {
      setGameState('playing');
    }
  };

  const getStatusMessage = () => {
    switch (gameState) {
      case 'ready': return 'CLICK TO LAUNCH DATA STREAM';
      case 'playing': return 'FIREWALL BREACH IN PROGRESS';
      case 'won': return 'FIREWALL NEUTRALIZED ✓';
      case 'lost': return 'CONNECTION TERMINATED ✗';
      default: return '';
    }
  };

  if (isCollapsed) {
    return (
      <div
        className="breakout-container collapsed"
        style={{
          border: `2px solid ${COLORS.border.default}`,
          backgroundColor: COLORS.bg.panel,
        }}
      >
        <div className="breakout-collapsed-header" onClick={() => setIsCollapsed(false)}>
          <span style={{ color: COLORS.text.primary }}>FIREWALL BREACH</span>
          <span style={{ color: COLORS.accent.teal }}>[Click to expand]</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className="breakout-container"
      style={{
        border: `2px solid ${COLORS.border.default}`,
        backgroundColor: COLORS.bg.panel,
      }}
    >
      <div className="breakout-header" style={{ borderBottom: `1px solid ${COLORS.border.default}` }}>
        <div>
          <div className="font-bold text-sm" style={{ color: COLORS.text.primary }}>
            FIREWALL BREACH
          </div>
          <div className="text-xs" style={{ color: COLORS.text.secondary }}>
            Protocol: STANDARD | {brickCols}x{brickRows} Grid
          </div>
          <div className="breakout-stats">
            <div className="text-xs" style={{ color: COLORS.accent.yellow }}>
              SCORE: {score.toString().padStart(5, '0')}
            </div>
            <div className="text-xs" style={{ color: COLORS.accent.teal }}>
              LIVES: {'●'.repeat(Math.max(0, lives))}{'○'.repeat(Math.max(0, 3 - lives))}
            </div>
          </div>
        </div>

        <div
          className="breakout-game-state"
          style={{
            color: gameState === 'won' ? COLORS.accent.teal :
                   gameState === 'lost' ? COLORS.accent.red :
                   COLORS.text.secondary,
          }}
        >
          {getStatusMessage()}
        </div>

        <div className="breakout-header-actions">
          <button
            onClick={resetGame}
            className="breakout-button breakout-reset-button"
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
            className="breakout-button"
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
              className="breakout-button"
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

      <div className="breakout-game-container">
        {/* Game board */}
        <div
          ref={boardRef}
          className="breakout-board"
          style={{
            width: `${boardWidth}px`,
            height: `${boardHeight}px`,
            position: 'relative',
            backgroundColor: COLORS.bg.main,
            border: `2px solid ${COLORS.border.default}`,
          }}
          onMouseMove={handleMouseMove}
          onClick={handleClick}
        >
          {/* Bricks */}
          {bricks.map((brick, index) => (
            !brick.destroyed && (
              <div
                key={index}
                className="brick"
                style={{
                  position: 'absolute',
                  left: `${brick.x}px`,
                  top: `${brick.y}px`,
                  width: `${brick.width}px`,
                  height: `${brick.height}px`,
                  backgroundColor: brick.color,
                  border: `1px solid ${brick.color}`,
                  boxShadow: `inset 0 0 8px rgba(255, 255, 255, 0.2), 0 0 4px ${brick.color}`,
                }}
              />
            )
          ))}

          {/* Ball */}
          <div
            className="ball"
            style={{
              position: 'absolute',
              left: `${ball.x - ball.radius}px`,
              top: `${ball.y - ball.radius}px`,
              width: `${ball.radius * 2}px`,
              height: `${ball.radius * 2}px`,
              borderRadius: '50%',
              backgroundColor: COLORS.accent.teal,
              boxShadow: `0 0 12px ${COLORS.accent.teal}, inset 0 0 6px rgba(255, 255, 255, 0.5)`,
            }}
          />

          {/* Paddle */}
          <div
            className="paddle"
            style={{
              position: 'absolute',
              left: `${paddle.x}px`,
              top: `${paddle.y}px`,
              width: `${paddle.width}px`,
              height: `${paddle.height}px`,
              backgroundColor: COLORS.accent.teal,
              border: `2px solid ${COLORS.border.default}`,
              boxShadow: `0 0 10px ${COLORS.accent.teal}`,
              borderRadius: '4px',
            }}
          />

          {/* Instructions overlay */}
          {gameState === 'ready' && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: COLORS.text.primary,
                fontSize: '1.2rem',
                fontWeight: 'bold',
                textAlign: 'center',
                pointerEvents: 'none',
                textShadow: `0 0 10px ${COLORS.accent.teal}`,
              }}
            >
              CLICK TO LAUNCH
            </div>
          )}

          {/* Win message */}
          {gameState === 'won' && (
            <div
              className="breakout-win-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: COLORS.accent.teal,
              }}
            >
              <div className="text-2xl font-bold mb-2">FIREWALL BREACHED</div>
              <div className="text-lg">Final Score: {score}</div>
            </div>
          )}

          {/* Lose message */}
          {gameState === 'lost' && (
            <div
              className="breakout-lose-overlay"
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                color: COLORS.accent.red,
              }}
            >
              <div className="text-2xl font-bold mb-2">CONNECTION LOST</div>
              <div className="text-lg">Final Score: {score}</div>
            </div>
          )}
        </div>

        {/* Touch control area */}
        <div
          className="breakout-touch-control"
          style={{
            width: `${boardWidth}px`,
            height: '80px',
            backgroundColor: COLORS.bg.panel,
            border: `2px solid ${COLORS.border.default}`,
            borderTop: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'ew-resize',
          }}
          onTouchStart={handleTouchControl}
          onTouchMove={handleTouchControl}
        >
          <div
            className="text-sm"
            style={{
              color: COLORS.text.secondary,
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            ◄ SLIDE FINGER TO CONTROL PADDLE ►
          </div>
        </div>
      </div>
    </div>
  );
}
