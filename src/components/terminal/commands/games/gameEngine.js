// gameEngine.js - Reusable game loop, physics, and collision detection

/**
 * GameLoop - Manages game update cycle with proper cleanup
 */
export class GameLoop {
  constructor(updateCallback, fps = 60) {
    this.updateCallback = updateCallback;
    this.fps = fps;
    this.interval = null;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.interval = setInterval(() => {
      this.updateCallback();
    }, 1000 / this.fps);
  }

  stop() {
    if (!this.isRunning) return;
    this.isRunning = false;
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  cleanup() {
    this.stop();
  }

  getIsRunning() {
    return this.isRunning;
  }
}

/**
 * CollisionDetector - Pure collision detection functions
 */
export const CollisionDetector = {
  // Rectangle vs Rectangle (Axis-Aligned Bounding Box)
  rectRect(rect1, rect2) {
    return (
      rect1.x < rect2.x + rect2.width &&
      rect1.x + rect1.width > rect2.x &&
      rect1.y < rect2.y + rect2.height &&
      rect1.y + rect1.height > rect2.y
    );
  },

  // Circle vs Rectangle (for ball vs paddle/brick)
  circleRect(circle, rect) {
    // Find closest point on rectangle to circle center
    const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
    const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height));

    // Calculate distance from circle center to closest point
    const distanceX = circle.x - closestX;
    const distanceY = circle.y - closestY;

    // Collision if distance is less than radius
    return (distanceX * distanceX + distanceY * distanceY) < (circle.radius * circle.radius);
  },

  // Point in Rectangle (for click detection)
  pointInRect(point, rect) {
    return (
      point.x >= rect.x &&
      point.x <= rect.x + rect.width &&
      point.y >= rect.y &&
      point.y <= rect.y + rect.height
    );
  },

  // Circle vs Circle
  circleCircle(circle1, circle2) {
    const dx = circle1.x - circle2.x;
    const dy = circle1.y - circle2.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (circle1.radius + circle2.radius);
  },
};

/**
 * Physics - Game physics utilities
 */
export const Physics = {
  // Bounce ball off paddle with angle based on hit position
  bounceBallOffPaddle(ball, paddle) {
    // Calculate where ball hit paddle (-1 = left edge, 0 = center, 1 = right edge)
    const paddleCenter = paddle.x + paddle.width / 2;
    const ballCenter = ball.x + ball.radius;
    const hitPosition = (ballCenter - paddleCenter) / (paddle.width / 2);

    // Max bounce angle (60 degrees = π/3 radians)
    const maxBounceAngle = Math.PI / 3;
    const bounceAngle = hitPosition * maxBounceAngle;

    // Calculate new velocity maintaining speed
    const speed = Math.sqrt(ball.velocityX ** 2 + ball.velocityY ** 2);

    return {
      velocityX: speed * Math.sin(bounceAngle),
      velocityY: -Math.abs(speed * Math.cos(bounceAngle)), // Always bounce up
    };
  },

  // Simple wall bounce (flip velocity)
  bounceOffWall(velocity, axis) {
    if (axis === 'x') {
      return { velocityX: -velocity.velocityX, velocityY: velocity.velocityY };
    } else {
      return { velocityX: velocity.velocityX, velocityY: -velocity.velocityY };
    }
  },

  // Bounce ball off brick (determine which side was hit)
  bounceBallOffBrick(ball, brick) {
    const ballCenterX = ball.x + ball.radius;
    const ballCenterY = ball.y + ball.radius;
    const brickCenterX = brick.x + brick.width / 2;
    const brickCenterY = brick.y + brick.height / 2;

    const dx = ballCenterX - brickCenterX;
    const dy = ballCenterY - brickCenterY;

    // Determine which side was hit based on angle of approach
    const width = (brick.width + ball.radius * 2) / 2;
    const height = (brick.height + ball.radius * 2) / 2;
    const crossWidth = width * dy;
    const crossHeight = height * dx;

    // Hit from left or right
    if (Math.abs(crossWidth) > Math.abs(crossHeight)) {
      return { velocityX: -ball.velocityX, velocityY: ball.velocityY };
    }
    // Hit from top or bottom
    return { velocityX: ball.velocityX, velocityY: -ball.velocityY };
  },

  // Clamp value between min and max
  clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  },

  // Calculate distance between two points
  distance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  },

  // Normalize vector
  normalize(vector) {
    const magnitude = Math.sqrt(vector.x ** 2 + vector.y ** 2);
    if (magnitude === 0) return { x: 0, y: 0 };
    return {
      x: vector.x / magnitude,
      y: vector.y / magnitude,
    };
  },
};

/**
 * Grid utilities for tile-based games (Pipe Dream)
 */
export const GridUtils = {
  // Convert pixel coordinates to grid coordinates
  pixelToGrid(x, y, tileSize) {
    return {
      col: Math.floor(x / tileSize),
      row: Math.floor(y / tileSize),
    };
  },

  // Convert grid coordinates to pixel coordinates
  gridToPixel(col, row, tileSize) {
    return {
      x: col * tileSize,
      y: row * tileSize,
    };
  },

  // Get grid index from coordinates
  coordsToIndex(col, row, gridWidth) {
    return row * gridWidth + col;
  },

  // Get coordinates from grid index
  indexToCoords(index, gridWidth) {
    return {
      col: index % gridWidth,
      row: Math.floor(index / gridWidth),
    };
  },

  // Check if grid position is valid
  isValidPosition(col, row, gridWidth, gridHeight) {
    return col >= 0 && col < gridWidth && row >= 0 && row < gridHeight;
  },

  // Get neighboring grid positions (4-directional)
  getNeighbors(col, row, gridWidth, gridHeight) {
    const neighbors = [];
    const directions = [
      { col: col, row: row - 1, dir: 'up' },
      { col: col + 1, row: row, dir: 'right' },
      { col: col, row: row + 1, dir: 'down' },
      { col: col - 1, row: row, dir: 'left' },
    ];

    directions.forEach(({ col: newCol, row: newRow, dir }) => {
      if (this.isValidPosition(newCol, newRow, gridWidth, gridHeight)) {
        neighbors.push({ col: newCol, row: newRow, direction: dir });
      }
    });

    return neighbors;
  },
};

/**
 * Random utilities
 */
export const RandomUtils = {
  // Random integer between min and max (inclusive)
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  // Random float between min and max
  randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  },

  // Pick random element from array
  randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  },

  // Shuffle array (Fisher-Yates)
  shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  // Random boolean with given probability (0-1)
  randomBool(probability = 0.5) {
    return Math.random() < probability;
  },
};

/**
 * GameStateManager - Simple state management for games
 */
export class GameStateManager {
  constructor(initialState = 'ready') {
    this.state = initialState;
    this.listeners = [];
  }

  setState(newState) {
    const oldState = this.state;
    this.state = newState;
    this.listeners.forEach(listener => listener(newState, oldState));
  }

  getState() {
    return this.state;
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // Return unsubscribe function
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  reset() {
    this.listeners = [];
  }
}

/**
 * Timer utility for games
 */
export class GameTimer {
  constructor() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) return;
    this.startTime = Date.now() - this.elapsedTime;
    this.isRunning = true;
  }

  stop() {
    if (!this.isRunning) return;
    this.elapsedTime = Date.now() - this.startTime;
    this.isRunning = false;
  }

  reset() {
    this.startTime = 0;
    this.elapsedTime = 0;
    this.isRunning = false;
  }

  getTime() {
    if (this.isRunning) {
      return Date.now() - this.startTime;
    }
    return this.elapsedTime;
  }

  getFormattedTime() {
    const time = this.getTime();
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const ms = Math.floor((time % 1000) / 10);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(2, '0')}`;
  }
}
