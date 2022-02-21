<template>
  <SideNav />
  <router-view />
</template>

<script>
import SideNav from '@/components/core/SideNav.vue';

export default {
  name: 'App',
  components: {
    SideNav,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #242424;
  color: white;
  font-family: 'Montserrat', sans-serif;
  padding: 20px 0;
}
</style>
