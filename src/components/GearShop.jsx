import React from "react";
import ShopCart from "./ShopCart";
import CollapsibleSection from './CollapsibleSection';

export default function GearShop({
  character = null,
  sections = [],
  onUpdate = () => {},
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  if (!character || !sections.length) return null;
  // if (!character.locked) return null; // Only show when locked

  // Build allEntries object for cart total calculation
  const allEntries = {};
  sections.forEach(section => {
    allEntries[section.name] = section.entries;
  });

  const cartItems = character.getCartItems();
  const cartTotal = character.getCartTotal(allEntries);

  const formatCost = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M¤`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k¤`;
    } else {
      return `${value}¤`;
    }
  };

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

            return (
              <div key={`shop_section_${name}_${sectionIndex}`}>
                {sectionIndex > 0 && <div className="my-6 border-t border-gray-800" />}

                {/* Section Header */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-l-4 border-yellow-500 px-4 py-3 mb-3">
                  <h4 className="text-lg font-black text-yellow-400 uppercase tracking-wide">
                    {label}
                  </h4>
                </div>

                {note && (
                  <div className="mb-3 px-4 py-2 bg-yellow-900/10 border border-yellow-900/30 text-sm text-gray-300">
                    {note}
                  </div>
                )}

                {/* Items List */}
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
                          <span className="font-bold text-cy-cyan">
                            {entry.label}
                            {entry.die && (
                              <span className="text-cy-yellow ml-1">({entry.die})</span>
                            )}
                          </span>
                          <span className="text-yellow-400 font-mono font-bold">
                            {entry.cost || "0¤"}
                          </span>
                        </div>

                        {/* Description */}
                        {entry.description && (
                          <div className="text-sm text-gray-400 mb-2">
                            {entry.description}
                          </div>
                        )}

                        {/* Tags */}
                        {entry.tags && entry.tags.length > 0 && (
                          <div className="flex gap-2 mb-2">
                            {entry.tags.map((tag, tagIdx) => (
                              <span key={tagIdx} className="text-xs px-2 py-1 bg-cy-pink/20 border border-cy-pink/50 text-cy-pink uppercase">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Cart Controls (if in cart) */}
                        {inCart && (
                          <div className="flex items-center justify-between pt-2 border-t border-gray-700">
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

                        {/* Add to Cart hint (if not in cart) */}
                        {!inCart && (
                          <div className="text-xs text-gray-600 italic mt-2">
                            Click to add to cart
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
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
