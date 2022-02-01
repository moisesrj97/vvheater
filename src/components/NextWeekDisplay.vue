<template>
  <h2>7-day prediction</h2>
  <div>
    <ul>
      <li v-for="(day, index) in nextWeekPredictionDisplay" v-bind:key="index">
        {{ day.weekDay }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NextWeekDisplay',
  props: {
    nextWeekPrediction: {
      required: true,
      type: Array,
    },
  },
  computed: {
    nextWeekPredictionDisplay() {
      return this.nextWeekPrediction
        .map((day) => ({
          ...day,
          weekDay: `${new Date(new Date(0).setSeconds(day.dt)).getUTCDate()}/${
            new Date(new Date(0).setSeconds(day.dt)).getUTCMonth() + 1
          }`,
        }))
        .filter((e, i) => i > 0);
    },
  },
});
</script>
