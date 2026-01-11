import { BODEGA_COMMANDS } from './bodega';
import { STONE_EELS_COMMANDS } from './stone_eels';
import { LUCKY_FLIGHT_CASINO } from './casino';
import { NEIGHBORHOOD_COMMANDS } from './neighborhood';

export const LUCKY_FLIGHT_TAKEDOWN = {
  ...BODEGA_COMMANDS,
  ...NEIGHBORHOOD_COMMANDS,
  ...LUCKY_FLIGHT_CASINO,
  ...STONE_EELS_COMMANDS,
}
