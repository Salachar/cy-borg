import { useState } from 'react';

export default function CollapsibleSection({
  title,
  startOpen = false,
  children
}) {
  const [isOpen, setIsOpen] = useState(startOpen);

  return (
    <div className="mb-6">
      {/* Header - clickable to toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full flex items-center justify-between
          mb-4 pb-2
          border-b-2 border-cy-cyan
          text-left
          group
        "
      >
        <h2 className="text-2xl font-bold text-cy-cyan group-hover:text-cy-cyan/80 transition-colors">
          {title}
        </h2>
        <span className="text-cy-cyan text-2xl group-hover:text-cy-cyan/80 transition-all">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {/* Content - slides in/out */}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${isOpen ? 'max-h-[10000px] opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        {children}
      </div>
    </div>
  );
}
