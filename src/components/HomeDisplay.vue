<template>
  <div class="hello">
    <div v-if="loading">
      <WeatherGraphic :chartData="chartData" />
      <BasicDisplay :tempData="tempData" />

      <p>{{ weatherData }}</p>
    </div>
    <div v-else><p>Loading</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getWeather from '@/services/weatherAPIService';
import WeatherGraphic from '@/components/WeatherGraphic.vue';
import BasicDisplay from '@/components/BasicDisplay.vue';
import { IWeatherAPI } from '@/interfaces/weatherAPI.interfaces';

interface DataObject {
  weatherData: IWeatherAPI;
  timeMarker: number;
}

export default defineComponent({
  name: 'HomeDisplay',
  components: { WeatherGraphic, BasicDisplay },
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
        sunrise: this.weatherData.currentSunset,
        sunset: this.weatherData.currentSunset,
      };
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
