<template>
  <PageHeader></PageHeader>

  <router-view/>

  <PageFooter></PageFooter>
</template>

<style lang="scss">
@import "assets/scss/style.scss";
</style>

<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>