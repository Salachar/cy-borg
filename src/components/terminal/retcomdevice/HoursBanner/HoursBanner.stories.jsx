import HoursBanner from './HoursBanner';

export default {
  title: 'Terminal/HoursBanner',
  component: HoursBanner,
};

export const BlankProps = () => (
  <HoursBanner />
);

// Open business
export const OpenBusiness = () => (
  <HoursBanner
    businessName="CAVE CLUB"
    hours="20:00 - 06:00"
    days="Every Night"
    status="OPEN"
    statusColor="open"
    location="Ports District, Eastern Section"
    note="Best time: 23:00-03:00 (peak crowd, live music)"
  />
);

// Closed business
export const ClosedBusiness = () => (
  <HoursBanner
    businessName="NEON DINER"
    hours="06:00 - 22:00"
    days="Mon-Sat"
    status="CLOSED"
    statusColor="closed"
    location="Central District, Main Street"
    note="Opens at 06:00 - Breakfast specials available"
  />
);

// Closing soon (warning)
export const ClosingSoon = () => (
  <HoursBanner
    businessName="LUCKY FLIGHT CASINO"
    hours="18:00 - 04:00"
    days="Every Night"
    status="CLOSING SOON"
    statusColor="warning"
    location="Central District, Near Metro Station"
    note="Last entry at 03:30"
  />
);

// Minimal info
export const MinimalInfo = () => (
  <HoursBanner
    businessName="24/7 BODEGA"
    hours="24 Hours"
    status="OPEN"
    statusColor="open"
  />
);
