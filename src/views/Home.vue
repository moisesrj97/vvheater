<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SearchBar v-on:emitInput="setLocation" />
    <HomeDisplay :location-name="locationName" />
  </div>
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
