<template>
  <div :class="isSideNavOpen ? 'side-nav side-nav--open' : 'side-nav'">
    <img
      src="@/assets/close-icon.png"
      alt="Close icon"
      class="side-nav__close-icon"
      @click="toggleSideNav"
    />
    <img
      src="https://en.gravatar.com/userimage/75266148/c238b26ec6e092f1103ac8bad3eebf55?size=200"
      alt="Profile picture"
      class="side-nav__profile-picture"
    />
    <ul>
      <li>Home</li>
      <li>Favorites</li>
    </ul>
    <label for="units-select"
      >Units:
      <select id="units-select" class="side-nav__units-select">
        <option value="metric">Metric</option>
        <option value="imperial">Imperial</option>
      </select>
    </label>
    <p>Login/Logout button</p>
    <p>Logo</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';

export default defineComponent({
  name: 'SideNav',
  methods: {
    ...mapActions(['toggleSideNav']),
  },
  computed: {
    ...mapGetters(['isSideNavOpen']),
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &--open {
    transform: translate(0, 0);
    transition: all 0.3s ease-in-out;
  }
  &__close-icon {
    align-self: end;
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;
  }
}
</style>
