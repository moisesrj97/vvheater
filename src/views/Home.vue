<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SearchBar v-on:emitInput="setLocation" />
    <BasicWeatherDisplay :location-name="locationName" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicWeatherDisplay from '@/components/BasicWeatherDisplay.vue'; // @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BasicWeatherDisplay,
    SearchBar,
  },
  data() {
    return {
      locationName: 'Madrid',
    };
  },
  methods: {
    setLocation(locationName: string) {
      this.locationName = locationName;
    },
  },
});
</script>
