<template>
  <div class="hello">
    <div v-if="loading">
      <p>{{ weatherData }}</p>
    </div>
    <div v-else><p>Loading</p></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import getWeather from '@/services/weatherAPIService';

export default defineComponent({
  name: 'HomeDisplay',
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
