<template>
  <div>
    <Header />
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const colorMode = localStorage.getItem("nuxt-color-mode");

    if (colorMode) {
      this.$colorMode.preference = colorMode;
    }
  },
};
</script>

<style>
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
