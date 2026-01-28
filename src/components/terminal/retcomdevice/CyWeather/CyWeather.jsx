import './cyWeather.css';

export default function CyWeather() {
  // Simulated data - could be randomized/dynamic
  const weatherData = {
    temp: 18,
    humidity: 67,
    wind: 12,
    aqi: 387,
    pm25: 421,
    visibility: 120,
    acidRain: 40,
    smogLevel: 'SEVERE',
    regions: [
      { name: 'Central', visibility: 150, status: 'hazardous', color: '#f59e0b' },
      { name: 'Ports', visibility: 120, status: 'hazardous', color: '#ef4444' },
      { name: 'Mosscroft', visibility: 50, status: 'critical', color: '#dc2626' },
      { name: 'Slums', visibility: 75, status: 'hazardous', color: '#f97316' },
      { name: 'The Hills', visibility: 320, status: 'moderate', color: '#10b981' },
    ],
    hourlyForecast: [
      { hour: '20:00', aqi: 395, icon: '💀' },
      { hour: '21:00', aqi: 410, icon: '💀' },
      { hour: '22:00', aqi: 425, icon: '☠️' },
      { hour: '23:00', aqi: 401, icon: '💀' },
      { hour: '00:00', aqi: 385, icon: '💀' },
    ],
  };

  const getAQIColor = (aqi) => {
    if (aqi >= 400) return '#dc2626'; // Critical
    if (aqi >= 300) return '#ef4444'; // Hazardous
    if (aqi >= 200) return '#f59e0b'; // Very Unhealthy
    if (aqi >= 100) return '#fbbf24'; // Unhealthy
    return '#10b981'; // Moderate
  };

  const getAQILabel = (aqi) => {
    if (aqi >= 400) return 'CRITICAL';
    if (aqi >= 300) return 'HAZARDOUS';
    if (aqi >= 200) return 'VERY UNHEALTHY';
    if (aqi >= 100) return 'UNHEALTHY';
    return 'MODERATE';
  };

  return (
    <div className="cy-weather">
      <div className="cy-weather-header">
        <div className="cy-weather-brand">
          <div className="cy-weather-title">
            <div className="cy-weather-name">CyWeather™</div>
            <div className="cy-weather-tagline">Brought to you by Kaytell Environmental</div>
          </div>
        </div>
      </div>

      <div className="cy-weather-main">
        <div style={{ gridArea: "weather-current" }}>
          <div className="cy-weather-current">
            <div className="cy-weather-temp-display">
              <div className="cy-weather-temp-big">{weatherData.temp}°</div>
              <div className="cy-weather-conditions">
                <div className="cy-weather-condition-item">
                  <span className="cy-weather-icon">💧</span>
                  <span>{weatherData.humidity}%</span>
                </div>
                <div className="cy-weather-condition-item">
                  <span className="cy-weather-icon">💨</span>
                  <span>{weatherData.wind} km/h</span>
                </div>
                <div className="cy-weather-condition-item">
                  <span className="cy-weather-icon">👁️</span>
                  <span>{weatherData.visibility}m</span>
                </div>
              </div>
            </div>

            {/* AQI Alert */}
            <div
              className="cy-weather-aqi-alert"
              style={{
                backgroundColor: `${getAQIColor(weatherData.aqi)}15`,
                borderColor: getAQIColor(weatherData.aqi)
              }}
            >
              <div className="cy-weather-aqi-number" style={{ color: getAQIColor(weatherData.aqi) }}>
                {weatherData.aqi}
              </div>
              <div className="cy-weather-aqi-info">
                <div className="cy-weather-aqi-label" style={{ color: getAQIColor(weatherData.aqi) }}>
                  {getAQILabel(weatherData.aqi)}
                </div>
                <div className="cy-weather-aqi-detail">PM2.5: {weatherData.pm25} µg/m³</div>
                <div className="cy-weather-aqi-detail">Acid Rain: {weatherData.acidRain}%</div>
              </div>
            </div>
          </div>

          {/* Hourly forecast */}
          <div className="cy-weather-hourly">
            <div className="cy-weather-section-title">NEXT 5 HOURS</div>
            <div className="cy-weather-hourly-grid">
              {weatherData.hourlyForecast.map((hour, idx) => (
                <div key={idx} className="cy-weather-hour">
                  <div className="cy-weather-hour-time">{hour.hour}</div>
                  <div className="cy-weather-hour-icon">{hour.icon}</div>
                  <div
                    className="cy-weather-hour-aqi"
                    style={{ color: getAQIColor(hour.aqi) }}
                  >
                    {hour.aqi}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cy-weather-regions">
          <div className="cy-weather-section-title">DISTRICT CONDITIONS</div>
          <div className="cy-weather-region-grid">
            {weatherData.regions.map((region, idx) => (
              <div
                key={idx}
                className="cy-weather-region"
                style={{ borderLeftColor: region.color }}
              >
                <div className="cy-weather-region-name">{region.name}</div>
                <div className="cy-weather-region-vis">{region.visibility}m</div>
                <div
                  className="cy-weather-region-status"
                  style={{ color: region.color }}
                >
                  {region.status.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cy-weather-warning">
          <div className="cy-weather-warning-icon">⚠️</div>
          <div className="cy-weather-warning-text">
            OUTDOOR ACTIVITY NOT RECOMMENDED WITHOUT PROTECTION
          </div>
          <div className="cy-weather-warning-icon">⚠️</div>
        </div>

        <div className="cy-weather-ad">
          <div className="cy-weather-ad-text">
            "Breathe easy with <span className="cy-weather-ad-brand">Kaytell Air™</span> Filtration Systems"
          </div>
        </div>
      </div>
    </div>
  );
}
