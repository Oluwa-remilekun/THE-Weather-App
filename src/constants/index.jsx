export const DEFAULT_PLACE = {
    name: 'London',
    place_id: 'london',
    adm_area1: 'England',
    adm_area2: 'Greater London',
    country: 'United Kingdom',
    lat: 51.50853,
    lon: -0.12574,
    timezone: 'Europe/London',
    type: 'settlement',
  };
  
  export const MEASUREMENT_SYSTEMS = {
    AUTO: 'auto',
    METRIC: 'metric',
    UK: 'uk',
    US: 'us',
    CA: 'ca',
  };
  
  export const UNITS = {
    metric: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'm/s',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    imperial: { // Changed to 'imperial' instead of 'us'
      temperature: '°F',
      precipitation: 'in/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    uk: {
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'mph',
      visibility: 'mi',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
    canada: { // Changed to 'canada' instead of 'ca'
      temperature: '°C',
      precipitation: 'mm/h',
      wind_speed: 'km/h',
      visibility: 'km',
      humidity: '%',
      uv_index: '',
      cloud_cover: '%',
    },
  };
  