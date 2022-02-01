<template>
  <h2>7-day prediction</h2>
  <div>
    <ul>
      <li v-for="(day, index) in nextWeekPredictionDisplay" v-bind:key="index">
        {{ day.weekDay }}
      </li>
    </ul>
    <div>
      <div v-for="(day, index) in nextWeekPredictionDisplay" v-bind:key="index">
        <h3>{{ day.weekDay }} {{ capitalizedWeather }}</h3>
        <img
          :src="`${`http://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}`"
          :alt="day.weather.description.concat(' icon')"
        />
        <p>{{ day.temp.max }}ºC / {{ day.temp.min }}ºC</p>
        <p>Humidity:{{ day.humidity }}%</p>
        <p>Sunrise: {{ generateTime(day.sunrise) }}</p>
        <p>Sunset: {{ generateTime(day.sunset) }}</p>
        <p>Morning: {{ day.temp.morn }}ºC({{ day.feelsLike.morn }})</p>
        <p>Day: {{ day.temp.day }}ºC({{ day.feelsLike.day }})</p>
        <p>Evening: {{ day.temp.eve }}ºC({{ day.feelsLike.eve }})</p>
        <p>Night: {{ day.temp.night }}ºC({{ day.feelsLike.night }})</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { NextDayPredictionI } from '@/interfaces/weatherAPI.interfaces';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NextWeekDisplay',
  props: {
    nextWeekPrediction: {
      required: true,
      type: Array as () => NextDayPredictionI[],
    },
  },
  computed: {
    nextWeekPredictionDisplay() {
      return this.nextWeekPrediction
        .map((day: NextDayPredictionI) => ({
          ...day,
          weekDay: `${new Date(new Date(0).setSeconds(day.dt)).getUTCDate()}/${
            new Date(new Date(0).setSeconds(day.dt)).getUTCMonth() + 1
          }`,
        }))
        .filter((e, i) => i > 0);
    },
  },
  methods: {
    generateTime(time: number) {
      return new Date(new Date(0).setUTCSeconds(time))
        .toLocaleTimeString()
        .split(':')
        .splice(0, 2)
        .join(':');
    },
  },
});
</script>
