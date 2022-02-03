<template>
  <SearchBar v-on:emitInput="setLocation" />
  <HomeDisplay :location-name="locationName" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeDisplay from '@/components/HomeDisplay.vue'; // @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeDisplay,
    SearchBar,
  },
  data() {
    return {
      locationName: '',
    };
  },
  methods: {
    setLocation(locationName: string) {
      this.locationName = locationName;
    },
  },
  beforeMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setLocation(
          `${position.coords.latitude} , ${position.coords.longitude}`
        );
      },
      (error) => {
        throw new Error(`Geolocation failed. Error: ${error}`);
      }
    );
  },
});
</script>
