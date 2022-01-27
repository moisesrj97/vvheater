<template>
  <div class="hello">
    <div v-if="loading">
      <WeatherGraphic :chartData="chartData" />

      <p>{{ weatherData }}</p>
    </div>
    <div v-else><p>Loading</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getWeather from '@/services/weatherAPIService';
import WeatherGraphic from '@/components/WeatherGraphic.vue';
import { IWeatherAPI } from '@/interfaces/weatherAPI.interfaces';

interface DataObject {
  weatherData: IWeatherAPI;
}

export default defineComponent({
  name: 'HomeDisplay',
  components: { WeatherGraphic },
  props: {
    locationName: {
      required: true,
      type: String,
    },
  },
  data(): DataObject {
    return {
      weatherData: {} as IWeatherAPI,
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
      const currentHour = new Date(new Date(0).setUTCSeconds(1643295835))
        .toLocaleTimeString()
        .split(':')[0];
      const nextHours: number[] = [];

      for (let i = 0; i < 48; i += 1) {
        let hour = +currentHour + i;
        while (hour > 24) {
          hour -= 24;
        }
        nextHours.push(hour);
      }

      const nextTemps = this.weatherData.nextHoursPrediction.map(
        (hour) => hour.temp
      );

      return {
        nextHours,
        nextTemps,
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
