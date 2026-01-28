import CoffeeMachine from './CoffeeMachine';

export default {
  title: 'Terminal/CoffeeMachine',
  component: CoffeeMachine,
};

// Office break room
export const OfficeBreakRoom = () => (
  <CoffeeMachine
    id="coffee-01"
    model="CYBERBEAN AUTOMAT-3000"
    location="Corporate Office - Break Room"
  />
);

// Luxury suite
export const LuxurySuite = () => (
  <CoffeeMachine
    id="coffee-vip-01"
    model="SYNAPRESSO ELITE"
    location="Executive Suite - Private Lounge"
  />
);

// Warehouse facility
export const WarehouseFacility = () => (
  <CoffeeMachine
    id="coffee-warehouse-02"
    model="INDUSTRIAL BREWMATIC"
    location="Warehouse District - Employee Area"
  />
);

// Hacker den
export const HackerDen = () => (
  <CoffeeMachine
    id="coffee-underground-01"
    model="DARKNET DRIP SYSTEM"
    location="Underground Server Farm"
  />
);

// Out of order
export const OutOfOrder = () => (
  <CoffeeMachine
    id="coffee-broken-01"
    model="CYBERBEAN AUTOMAT-3000"
    location="Abandoned Office - Floor 7"
    disabled={true}
  />
);

// Casino VIP lounge
export const CasinoVIPLounge = () => (
  <CoffeeMachine
    id="coffee-casino-01"
    model="GOLDEN BEAN DELUXE"
    location="Lucky Flight Casino - VIP Area"
  />
);

// Medical facility
export const MedicalFacility = () => (
  <CoffeeMachine
    id="coffee-hospital-01"
    model="MEDPRESSO SANITIZED"
    location="VitalCorp Medical Center - Staff Lounge"
  />
);
