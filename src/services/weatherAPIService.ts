import axios from 'axios';
import {
  IWeatherAPI,
  NextDayPredictionI,
  NextHourPredictionI,
  WeatherI,
} from '../interfaces/weatherAPI.interfaces';

interface HourPredictionApiResponseI {
  dt: number;
  temp: number;
  feels_like: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherI[];
  pop: number;
}

interface DayPredictionAPIResponseI {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: WeatherI[];
  clouds: number;
  pop: number;
  uvi: number;
}

const getWeather = async (city: string): Promise<IWeatherAPI> => {
  let currentWeatherData: any;
  const splitInput: string[] = city.split(' ');

  if (splitInput.some((e) => !Object.is(+e, NaN))) {
    ({ data: currentWeatherData } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${splitInput[0]}&lon=${splitInput[2]}&appid=${process.env.VUE_APP_OPENWEATHER_API}`
    ));
  } else {
    ({ data: currentWeatherData } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.VUE_APP_OPENWEATHER_API}`
    ));
  }

  const { data: oneCallWeatherData } = await axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${currentWeatherData.coord.lat}&lon=${currentWeatherData.coord.lon}&appid=${process.env.VUE_APP_OPENWEATHER_API}`
  );

  return {
    location: currentWeatherData.name,
    country: currentWeatherData.sys.country,
    timezone: currentWeatherData.timezone,
    petitionTimestamp: currentWeatherData.dt,
    currentWeather: currentWeatherData.weather[0],
    currentTempAndHumidity: {
      temp: currentWeatherData.main.temp,
      feelsLike: currentWeatherData.main.feels_like,
      tempMin: currentWeatherData.main.temp_min,
      tempMax: currentWeatherData.main.temp_max,
      humidity: currentWeatherData.main.humidity,
    },
    currentSunrise: currentWeatherData.sys.sunrise,
    currentSunset: currentWeatherData.sys.sunset,
    nextHoursPrediction: oneCallWeatherData.hourly.map(
      (hour: HourPredictionApiResponseI): NextHourPredictionI => ({
        dt: hour.dt,
        temp: hour.temp,
        feelsLike: hour.feels_like,
        humidity: hour.humidity,
        weather: hour.weather[0],
      })
    ),
    nextWeekPrediction: oneCallWeatherData.daily.map(
      (day: DayPredictionAPIResponseI): NextDayPredictionI => ({
        dt: day.dt,
        sunrise: day.sunrise,
        sunset: day.sunset,
        temp: {
          day: day.temp.day,
          min: day.temp.min,
          max: day.temp.max,
          night: day.temp.night,
          eve: day.temp.eve,
          morn: day.temp.morn,
        },
        feelsLike: {
          day: day.feels_like.day,
          night: day.feels_like.night,
          eve: day.feels_like.eve,
          morn: day.feels_like.morn,
        },
        humidity: day.humidity,
        weather: day.weather[0],
      })
    ),
  };
};

export default getWeather;
