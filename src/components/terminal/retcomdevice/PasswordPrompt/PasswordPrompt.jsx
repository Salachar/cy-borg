import React, { useState, useEffect, useRef } from 'react';

// Shuffle array helper
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Get unique characters from password with frequency count
const getUniqueKeysWithFrequency = (password) => {
  const freq = {};
  const upperPassword = password.toUpperCase();
  for (const char of upperPassword) {
    freq[char] = (freq[char] || 0) + 1;
  }
  return freq;
};

export default function PasswordPrompt({
  command,
  commandDef,
  password,
  hint = "",
  hintStrength = 1,
  onSubmit,
  onCancel,
  children,
}) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [shuffledKeys, setShuffledKeys] = useState([]);
  const [keyFrequency, setKeyFrequency] = useState({});
  const [feedback, setFeedback] = useState("");
  const [clickedKey, setClickedKey] = useState(null);
  const [isActive, setIsActive] = useState(true);

  // Initialize shuffled keys
  useEffect(() => {
    const freq = getUniqueKeysWithFrequency(password);
    setKeyFrequency(freq);
    setShuffledKeys(shuffleArray(Object.keys(freq)));
  }, [password]);

  const handleKeyClick = (key) => {
    setCurrentPassword(prev => prev + key);
    setFeedback(""); // Clear feedback on new input

    // Visual feedback
    setClickedKey(key);
    setTimeout(() => setClickedKey(null), 150);
  };

  const handleBackspace = () => {
    setCurrentPassword(prev => prev.slice(0, -1));
    setFeedback("");
  };

  const handleClear = () => {
    setCurrentPassword("");
    setFeedback("");
  };

  const handleSubmit = () => {
    if (currentPassword.toUpperCase() === password.toUpperCase()) {
      setIsActive(false);
      onSubmit(command, commandDef, password);
    } else {
      setFeedback("INCORRECT PASSWORD");
    }
  };

  const handleCancel = () => {
    setIsActive(false);
    onCancel();
  };

  // Character count display
  const getCharacterCountDisplay = () => {
    const current = currentPassword.length;
    const target = password.length;

    if (current === target) {
      return `${current}/${target}`;
    } else if (current > target) {
      return `${current}/${target} (+${current - target})`;
    } else {
      return `${current}/${target}`;
    }
  };

  return (
    <div
      className="my-4 border-2 rounded-lg p-4 font-mono"
      style={{
        borderColor: 'rgb(77, 167, 188)',
        backgroundColor: 'rgba(29, 35, 50, 0.9)',
      }}
    >
      {/* Header */}
      <div
        className={isActive ? `mb-4 pb-2 border-b` : ""}
        style={{ borderColor: 'rgb(77, 167, 188)' }}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <div className="font-bold text-lg"
             style={{ color: 'rgb(133, 175, 231)' }}>
          PASSWORD ENTRY
        </div>
        <div className="text-sm"
             style={{ color: 'rgb(148, 163, 184)' }}>
          {command}
        </div>
      </div>

      {isActive && (
        <>
          {/* Current Password Display */}
          <div className="mb-4">
            <div className="text-2xl font-bold tracking-wider mb-1"
                style={{ color: 'rgb(79, 209, 197)' }}>
              {currentPassword || '_'}
            </div>
            {hintStrength >= 2 && (
              <div className="text-sm"
                  style={{ color: 'rgb(148, 163, 184)' }}>

                {getCharacterCountDisplay()} characters
              </div>
            )}
          </div>

          {/* Virtual Keyboard */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {shuffledKeys.map(key => (
                <button
                  key={key}
                  onClick={() => handleKeyClick(key)}
                  className="relative px-4 py-2 font-bold text-lg rounded transition-all duration-150"
                  style={{
                    backgroundColor: clickedKey === key
                      ? 'rgb(56, 178, 172)'
                      : 'rgb(45, 53, 72)',
                    color: 'rgb(133, 175, 231)',
                    border: '2px solid rgb(77, 167, 188)',
                    minWidth: '48px',
                  }}
                  onMouseEnter={(e) => {
                    if (clickedKey !== key) {
                      e.target.style.backgroundColor = 'rgb(56, 178, 172)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (clickedKey !== key) {
                      e.target.style.backgroundColor = 'rgb(45, 53, 72)';
                    }
                  }}
                >
                  {key}
                  {hintStrength >= 3 && keyFrequency[key] > 1 && (
                    <span className="absolute top-0 right-1 text-xs"
                          style={{ color: 'rgb(251, 191, 36)' }}>
                      {keyFrequency[key]}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {Boolean(children) && (
            <div className="mb-4">
              {children}
            </div>
          )}

          {/* Hints */}
          {hint && (
            <div
              className="mb-4 p-3 rounded"
              style={{
                backgroundColor: 'rgba(45, 53, 72, 0.5)',
              }}
            >
              <div
                className="text-sm mb-1"
                style={{
                  color: 'rgb(251, 191, 36)',
                }}
              >
                <span className="font-bold">Hint:</span> {hint}
              </div>
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div className="mb-4 p-2 rounded text-center font-bold"
                style={{
                  backgroundColor: 'rgba(252, 129, 129, 0.2)',
                  color: 'rgb(252, 129, 129)',
                }}>
              {feedback}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={handleBackspace}
              className="px-4 py-2 font-bold rounded transition-colors"
              style={{
                backgroundColor: 'rgb(45, 53, 72)',
                color: 'rgb(133, 175, 231)',
                border: '2px solid rgb(77, 167, 188)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(56, 178, 172)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(45, 53, 72)'}
            >
              ← Backspace
            </button>
            <button
              onClick={handleClear}
              className="px-4 py-2 font-bold rounded transition-colors"
              style={{
                backgroundColor: 'rgb(45, 53, 72)',
                color: 'rgb(133, 175, 231)',
                border: '2px solid rgb(77, 167, 188)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(56, 178, 172)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(45, 53, 72)'}
            >
              Clear
            </button>
            <button
              onClick={handleSubmit}
              className="flex-1 px-4 py-2 font-bold rounded transition-colors"
              style={{
                backgroundColor: 'rgb(79, 209, 197)',
                color: 'rgb(19, 23, 34)',
                border: '2px solid rgb(79, 209, 197)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgb(56, 178, 172)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgb(79, 209, 197)'}
            >
              Submit
            </button>
            <button
              onClick={handleCancel}
              className="px-4 py-2 font-bold rounded transition-colors"
              style={{
                backgroundColor: 'rgba(252, 129, 129, 0.2)',
                color: 'rgb(252, 129, 129)',
                border: '2px solid rgb(252, 129, 129)',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(252, 129, 129, 0.4)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'rgba(252, 129, 129, 0.2)'}
            >
              X Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}
