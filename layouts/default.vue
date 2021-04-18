<template>
  <div class="bg-white dark:bg-dark-default dark:text-gray-300">
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
button {
  @apply py-2 px-4 focus:ring-primary-dark w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2
}
</style>
