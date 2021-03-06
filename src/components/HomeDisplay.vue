<template>
  <div class="home">
    <div v-if="loading" class="home__container">
      <h2 class="home__location">
        {{ weatherData.location }} ({{ weatherData.country }})
      </h2>
      <WeatherGraphic
        :chartData="chartData"
        v-on:emitTimeMarker="setTimeMarker"
      />
      <BasicDisplay :tempData="tempData" />
      <NextWeekDisplay :nextWeekPrediction="weatherData.nextWeekPrediction" />
    </div>
    <div v-else class="home__container"><p>Loading</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getWeather from '@/services/weatherAPIService';
import WeatherGraphic from '@/components/WeatherGraphic.vue';
import BasicDisplay from '@/components/BasicDisplay.vue';
import NextWeekDisplay from '@/components/NextWeekDisplay.vue';
import { IWeatherAPI } from '@/interfaces/weatherAPI.interfaces';

interface DataObject {
  weatherData: IWeatherAPI;
  timeMarker: number;
}

export default defineComponent({
  name: 'HomeDisplay',
  components: { WeatherGraphic, BasicDisplay, NextWeekDisplay },
  props: {
    locationName: {
      required: true,
      type: String,
    },
  },
  data(): DataObject {
    return {
      weatherData: {} as IWeatherAPI,
      timeMarker: 0,
    };
  },
  watch: {
    async locationName(newLocationName: string) {
      this.weatherData = await getWeather(newLocationName);
    },
  },
  async beforeMount() {
    if (this.locationName !== '') {
      this.weatherData = await getWeather(this.locationName);
    }
  },
  methods: {
    setTimeMarker(timeMarker: number) {
      this.timeMarker = timeMarker;
    },
  },
  computed: {
    loading() {
      return JSON.stringify(this.weatherData) !== '{}';
    },
    chartData() {
      const currentHour = new Date(
        new Date(0).setUTCSeconds(this.weatherData.petitionTimestamp)
      )
        .toLocaleTimeString()
        .split(':')[0];
      const nextHours: string[] = [];

      for (let i = 0; i < 48; i += 1) {
        let hour = +currentHour + i;
        let days = 0;
        while (hour > 24) {
          days += 1;
          hour -= 24;
        }
        const daysString = `+${days}`;
        nextHours.push(
          hour.toString().concat(`h ${days > 0 ? daysString : ''}`)
        );
      }

      const nextTemps = this.weatherData.nextHoursPrediction.map(
        (hour) => hour.temp
      );

      return {
        nextHours,
        nextTemps,
      };
    },
    tempData() {
      if (this.timeMarker === 0) {
        return {
          time: this.weatherData.petitionTimestamp,
          weather: this.weatherData.currentWeather,
          tempAndHumidity: this.weatherData.currentTempAndHumidity,
          sunrise: this.weatherData.currentSunrise,
          sunset: this.weatherData.currentSunset,
        };
      }
      return {
        time: this.weatherData.nextHoursPrediction[this.timeMarker].dt,
        weather: this.weatherData.nextHoursPrediction[this.timeMarker].weather,
        tempAndHumidity: {
          temp: this.weatherData.nextHoursPrediction[this.timeMarker].temp,
          feelsLike:
            this.weatherData.nextHoursPrediction[this.timeMarker].feelsLike,
          humidity:
            this.weatherData.nextHoursPrediction[this.timeMarker].humidity,
        },
        sunrise: this.weatherData.currentSunrise,
        sunset: this.weatherData.currentSunset,
      };
    },
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 90%;
  margin: 30px 0;
  &__container {
    width: 100%;
  }
  &__location {
    font-size: 1.5rem;
    font-weight: 400;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
