export interface WeatherI {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface NextHourPredictionI {
  dt: number;
  temp: number;
  feelsLike: number;
  humidity: number;
  weather: WeatherI;
}

export interface NextDayPredictionI {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feelsLike: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  humidity: number;
  weather: WeatherI;
}

export interface IWeatherAPI {
  location: string;
  country: string;
  timezone: number;
  petitionTimestamp: number;
  currentWeather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  };
  currentTempAndHumidity: {
    temp: number;
    feelsLike: number;
    tempMin: number;
    tempMax: number;
    humidity: number;
  };
  currentSunrise: number;
  currentSunset: number;
  nextHoursPrediction: NextHourPredictionI[];
  nextWeekPrediction: NextDayPredictionI[];
}
