<template>
  <div :class="isOpen ? 'side-nav side-nav--open' : 'side-nav'">
    <img
      src="@/assets/close-icon.png"
      alt="Close icon"
      class="side-nav__close-icon"
      @click="toggle"
    />
    <img
      src="https://en.gravatar.com/userimage/75266148/c238b26ec6e092f1103ac8bad3eebf55?size=200"
      alt="Profile picture"
      class="side-nav__profile-picture"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideNav',
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>
<style lang="scss">
.side-nav {
  width: 70%;
  height: 100vh;
  background-color: #202020;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  transform: translate(-100%, 0);
  transition: all 0.3s ease-in-out;
  &--open {
    transform: translate(0, 0);
    transition: all 0.3s ease-in-out;
  }
}
</style>
