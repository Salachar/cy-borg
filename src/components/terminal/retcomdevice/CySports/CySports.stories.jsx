import CySports from './CySports';

export default {
  title: 'Terminal/CySports',
  component: CySports,
};

// Default Blood Bowl coverage
export const BloodBowlCoverage = () => <CySports />;

// Close game variant
export const CloseGame = () => {
  // Note: Since CySports has inline data, this story just shows the default
  // In the future, you could make CySports accept props to customize the data
  return <CySports />;
};
