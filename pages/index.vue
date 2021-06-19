<template>
  <div>
    <div v-if="!isPWA">
      <Intro />
      <Features />
    </div>
    <Modules />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPWA: false,
    };
  },
  mounted() {
    // For IOS
    if (window.navigator.standalone) this.isPWA = true;

    // For Android
    if (window.matchMedia("(display-mode: standalone)").matches)
      this.isPWA = true;
  },
};
</script>
