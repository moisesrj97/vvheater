<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ weatherData }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getWeather from '@/services/weatherAPIService';

export default defineComponent({
  name: 'BasicWeatherDisplay',
  props: {
    locationName: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      weatherData: {},
    };
  },
  async beforeMount() {
    this.weatherData = await getWeather(this.locationName);
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
