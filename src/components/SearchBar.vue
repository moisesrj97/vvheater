<template>
  <form @submit.prevent="emitLocation">
    <input v-model="inputValue" placeholder="Enter some location..." />
    <button type="submit">Search</button>
  </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

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
  },
});
</script>
