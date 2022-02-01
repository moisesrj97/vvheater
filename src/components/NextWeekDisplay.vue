<template>
  <h2>7-day prediction</h2>
  <div>
    <ul>
      <li
        v-for="(day, index) in nextWeekPredictionDisplay"
        v-bind:key="index"
        @click="dayMarker = index"
      >
        {{ day.weekDay }}
      </li>
    </ul>
    <div>
      <div>
        <h3>
          {{ nextWeekPredictionDisplay[dayMarker].weekDay }}
          {{ capitalizedWeather }}
        </h3>
        <img
          :src="`${`http://openweathermap.org/img/wn/${nextWeekPredictionDisplay[dayMarker].weather.icon}@2x.png`}`"
          :alt="
            nextWeekPredictionDisplay[dayMarker].weather.description.concat(
              ' icon'
            )
          "
        />
        <p>
          {{ nextWeekPredictionDisplay[dayMarker].temp.max }}ºC /
          {{ nextWeekPredictionDisplay[dayMarker].temp.min }}ºC
        </p>
        <p>Humidity:{{ nextWeekPredictionDisplay[dayMarker].humidity }}%</p>
        <p>
          Sunrise:
          {{ generateTime(nextWeekPredictionDisplay[dayMarker].sunrise) }}
        </p>
        <p>
          Sunset:
          {{ generateTime(nextWeekPredictionDisplay[dayMarker].sunset) }}
        </p>
        <p>
          Morning: {{ nextWeekPredictionDisplay[dayMarker].temp.morn }}ºC({{
            nextWeekPredictionDisplay[dayMarker].feelsLike.morn
          }})
        </p>
        <p>
          Day: {{ nextWeekPredictionDisplay[dayMarker].temp.day }}ºC({{
            nextWeekPredictionDisplay[dayMarker].feelsLike.day
          }})
        </p>
        <p>
          Evening: {{ nextWeekPredictionDisplay[dayMarker].temp.eve }}ºC({{
            nextWeekPredictionDisplay[dayMarker].feelsLike.eve
          }})
        </p>
        <p>
          Night: {{ nextWeekPredictionDisplay[dayMarker].temp.night }}ºC({{
            nextWeekPredictionDisplay[dayMarker].feelsLike.night
          }})
        </p>
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
  data(): { dayMarker: number } {
    return {
      dayMarker: 0,
    };
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
