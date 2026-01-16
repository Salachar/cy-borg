import React from "react";
import ShopCart from "./ShopCart";
import CollapsibleSection from './CollapsibleSection';

// Helper functions for collapse state management
const COLLAPSE_STORAGE_KEY = "cy_borg_collapse_states";

function getCollapseStates() {
  try {
    const stored = localStorage.getItem(COLLAPSE_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch (e) {
    console.error("Error reading collapse states:", e);
    return {};
  }
}

function setCollapseState(characterId, sectionKey, isOpen) {
  try {
    const states = getCollapseStates();
    if (!states[characterId]) {
      states[characterId] = {};
    }
    states[characterId][sectionKey] = isOpen;
    localStorage.setItem(COLLAPSE_STORAGE_KEY, JSON.stringify(states));
  } catch (e) {
    console.error("Error saving collapse state:", e);
  }
}

function getCollapseState(characterId, sectionKey, defaultState = true) {
  const states = getCollapseStates();
  return states[characterId]?.[sectionKey] ?? defaultState;
}

export default function GearShop({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  if (!character || !sections.length) return null;

  const characterId = character?.id || "default";

  // Track collapse state for each section
  const [sectionStates, setSectionStates] = React.useState(() => {
    const initial = {};
    sections.forEach(section => {
      const key = `market_section_${section.name}`;
      initial[section.name] = getCollapseState(characterId, key, true);
    });
    return initial;
  });

  const toggleSection = (sectionName) => {
    const key = `market_section_${sectionName}`;
    const newState = !sectionStates[sectionName];
    setSectionStates(prev => ({ ...prev, [sectionName]: newState }));
    setCollapseState(characterId, key, newState);
  };

  const allEntries = {};
  sections.forEach(section => {
    allEntries[section.name] = section.entries;
  });

  const cartItems = character.getCartItems();

  const handleAddToCart = (section, entry) => {
    const entry_id = entry.id || entry.label;
    const cartItem = character.shop_cart[section]?.[entry_id];
    if (cartItem) {
      character.updateCartQuantity(section, entry, cartItem.quantity + 1);
    } else {
      character.addToCart(section, entry, 1);
    }
    onUpdate();
  };

  const handleRemoveFromCart = (section, entry) => {
    character.removeFromCart(section, entry);
    onUpdate();
  };

  const handleCheckout = () => {
    const success = character.checkout(allEntries);
    if (success) {
      onUpdate();
    }
  };

  const handleAddFree = () => {
    character.addFreeToInventory();
    onUpdate();
  };

  const handleClear = () => {
    character.clearCart();
    onUpdate();
  };

  return (
    <CollapsibleSection
      title="Market"
      sectionKey="market"
      character={character}
      headerClass="bg-gradient-to-r from-yellow-900/20 via-gray-900 to-yellow-900/20 border-2 border-yellow-600/50 p-4 mb-4 cursor-pointer hover:border-yellow-600/70 transition-colors"
      headerTextClass="text-yellow-400"
      headerChildrenEnabled={cartItems.length > 0}
      headerChildren={(
        <span className="text-sm text-gray-400">
          ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in cart)
        </span>
      )}
    >
      <div className="flex gap-4">
        {/* Main Shop Area */}
        <div className="flex-1">
          {sections.map((section, sectionIndex) => {
            const { name, label, note, entries } = section;
            const cartSection = character.shop_cart[name] || {};
            const isOpen = sectionStates[name] ?? true;

            return (
              <div key={`shop_section_${name}_${sectionIndex}`}>
                {sectionIndex > 0 && <div className="my-6 border-t border-gray-800" />}

                {/* Section Header - Collapsible */}
                <div
                  onClick={() => toggleSection(name)}
                  className="bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-yellow-500 px-4 py-3 mb-3 cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
                      {label}
                    </h4>
                    <div className="text-xs text-gray-500 uppercase">
                      {isOpen ? '▼' : '▶'}
                    </div>
                  </div>
                </div>

                {note && isOpen && (
                  <div className="mb-3 px-4 py-2 bg-yellow-900/10 border border-yellow-900/30 text-sm text-gray-300">
                    {note}
                  </div>
                )}

                {/* Items List */}
                {isOpen && (
                  <div className="space-y-2">
                    {entries.map((entry, index) => {
                      const entry_id = entry.id || entry.label;
                      const inCart = cartSection[entry_id];
                      const cartQuantity = inCart ? inCart.quantity : 0;

                      return (
                        <div
                          key={`${name}_item_${index}`}
                          onClick={() => {
                            if (!inCart) {
                              handleAddToCart(name, entry);
                            }
                          }}
                          className={`
                            p-3 border-l-2 transition-all
                            ${inCart
                              ? 'bg-gray-800/50 border-l-yellow-500 border-y border-r border-gray-700 cursor-default'
                              : 'bg-gray-900/20 border-l-gray-700 border-y border-r border-gray-800 hover:border-l-yellow-500 hover:bg-gray-800/30 cursor-pointer'
                            }
                          `}
                        >
                          {/* Top Row: Name + Price */}
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex gap-2">
                              <span className="font-bold text-cy-cyan">
                                {entry.label}
                                {entry.die && (
                                  <span className="text-cy-yellow ml-1">({entry.die})</span>
                                )}
                              </span>
                              {entry.tags && entry.tags.length > 0 && (
                                <div className="flex gap-2">
                                  {entry.tags.map((tag, tagIdx) => (
                                    <span key={tagIdx} className="text-xs px-2 py-1 text-cy-pink uppercase">
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                            <span className="text-yellow-400 font-mono font-bold">
                              {entry.cost || "0¤"}
                            </span>
                          </div>

                          {/* Description */}
                          {entry.description && (
                            <div className="text-sm text-gray-400">
                              {entry.description}
                            </div>
                          )}

                          {/* Cart Controls (if in cart) */}
                          {inCart && (
                            <div className="flex items-center justify-between pt-2 border-t border-gray-700 mt-2">
                              <span className="text-xs text-gray-500 uppercase">In Cart:</span>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    character.updateCartQuantity(name, entry, cartQuantity - 1);
                                    onUpdate();
                                  }}
                                  className="w-7 h-7 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-yellow-400 font-bold flex items-center justify-center transition-colors"
                                >
                                  −
                                </button>
                                <span className="font-mono font-bold text-yellow-400 min-w-[2ch] text-center text-lg">
                                  {cartQuantity}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    character.updateCartQuantity(name, entry, cartQuantity + 1);
                                    onUpdate();
                                  }}
                                  className="w-7 h-7 bg-gray-700 hover:bg-gray-600 border border-gray-600 text-yellow-400 font-bold flex items-center justify-center transition-colors"
                                >
                                  +
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Sticky Cart Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="sticky top-4">
            <ShopCart
              character={character}
              allEntries={allEntries}
              onCheckout={handleCheckout}
              onAddFree={handleAddFree}
              onClear={handleClear}
              onRemoveItem={handleRemoveFromCart}
            />
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
}
