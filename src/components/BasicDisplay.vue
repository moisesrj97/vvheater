<template>
  <h3>{{ time }} {{ capitalizedWeather }}</h3>
  <img :src="iconSrc" :alt="tempData.weather.description.concat(' icon')" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicDisplay',
  props: {
    tempData: {
      required: true,
      type: Object,
    },
  },
  computed: {
    iconSrc() {
      return `http://openweathermap.org/img/wn/${this.tempData.weather.icon}@2x.png`;
    },
    time() {
      return new Date(new Date(0).setUTCSeconds(this.tempData.time))
        .toLocaleTimeString()
        .split(':')
        .splice(0, 2)
        .join(':');
    },

    capitalizedWeather() {
      const weather = this.tempData.weather.description;
      return weather.charAt(0).toUpperCase() + weather.slice(1);
    },
  },
});
</script>
