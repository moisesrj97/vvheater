<template>
  <form @submit.prevent="emitLocation" class="location-form">
    <img
      src="@/assets/hamburger-icon.png"
      alt="open menu icon"
      class="location-form__open-menu-icon"
      @click="toggleSideNav"
    />

    <input
      v-model="inputValue"
      placeholder="Enter some location..."
      class="location-form__input"
    />
    <button type="submit" class="location-form__button">
      <img src="@/assets/search-icon.png" alt="search button" />
    </button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'SearchBar',
  data() {
    return {
      inputValue: '',
    };
  },
  methods: {
    emitLocation() {
      this.$emit('emitInput', this.inputValue);
    },
    ...mapActions(['toggleSideNav']),
  },
});
</script>
<style lang="scss">
.location-form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  &__open-menu-icon {
    width: 30px;
    margin: 0 5px;
    cursor: pointer;
  }
  &__input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1.1rem;
    font-weight: 400;
    margin: 0;
    color: white;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 15px;
    outline: none;
  }
  &__button {
    background-color: transparent;
    color: transparent;
    box-shadow: none;
    border: none;
    & img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
}
</style>
