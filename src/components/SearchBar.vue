<template>
  <form>
    <input v-bind="inputValue" placeholder="Enter some location..." />
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
});
</script>
