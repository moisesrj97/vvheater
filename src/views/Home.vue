<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <SearchBar />
    <BasicWeatherDisplay msg="Welcome to VVeather" />
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
});
</script>
