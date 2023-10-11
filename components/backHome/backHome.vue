<template>
  <div class="back-home">
    <NuxtLink to="/" class="back-home__link">
      <span class="back-home__link-text">back</span>
      <img class="back-home__icon" src="/img/common/back-icon.svg" alt="back-icon" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'backHome',
})
</script>

<style scoped lang="scss">
  @import "~/assets/components/back-home/back-home";
</style>