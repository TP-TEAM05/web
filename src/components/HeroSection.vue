<template>
  <div id="hero" class="relative">
    <img src="img/highway-2025863_1920.jpg" alt="Hero section" class="w-full object-cover pt-20" style="height: 50vh">
    <div class="absolute text-center text-white top-28 sm:top-48 w-full px-4">
      <h1 class="text-3xl font-bold tracking-tight text-white sm:text-5xl pb-4">
        Cooperative driving of RC cars
      </h1>
      <span class="text-lg">Move efficiently and fluently</span>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'HeroSection'
});
</script>
