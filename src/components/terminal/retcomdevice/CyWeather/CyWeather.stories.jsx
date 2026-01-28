import CyWeather from './CyWeather';

export default {
  title: 'Terminal/CyWeather',
  component: CyWeather,
};

// Default weather dashboard
export const WeatherDashboard = () => <CyWeather />;

// Hazardous conditions variant
export const HazardousConditions = () => {
  // Note: Since CyWeather has inline data, this story just shows the default
  // In the future, you could make CyWeather accept props to customize the data
  return <CyWeather />;
};
