/**
 * Animal Registry
 *
 * Central registry for all available mascot sprites.
 * Maps animal IDs to their sprite definitions.
 */

import { FOX_SPRITE } from './animals/fox';
import { TURTLE_SPRITE } from './animals/turtle';

export const ANIMAL_REGISTRY = {
  'fox-red': {
    ...FOX_SPRITE,
    variant: 'red',
    displayName: 'Red Fox',
  },
  'turtle-brown': {
    ...TURTLE_SPRITE,
    variant: 'brown',
    displayName: 'Brown Turtle',
  },
  // Future animals can be added here:
  // 'cat-black': { ...CAT_SPRITE, variant: 'black', spriteSheet: '/sprites/cat-black.png' },
  // 'cat-white': { ...CAT_SPRITE, variant: 'white', spriteSheet: '/sprites/cat-white.png' },
  // 'dog-brown': { ...DOG_SPRITE, variant: 'brown', spriteSheet: '/sprites/dog-brown.png' },
};

/**
 * Get sprite config by animal ID
 */
export function getAnimalSprite(animalId) {
  const sprite = ANIMAL_REGISTRY[animalId];
  if (!sprite) {
    console.warn(`Animal sprite "${animalId}" not found in registry. Available: ${Object.keys(ANIMAL_REGISTRY).join(', ')}`);
    return null;
  }
  return sprite;
}

/**
 * Get all available animal IDs
 */
export function getAvailableAnimals() {
  return Object.keys(ANIMAL_REGISTRY);
}
