<template>
  <div class="bg-white dark:bg-dark-default dark:text-gray-300">
    <Header />
    <main class="container">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  mounted() {
    if (window.location.protocol === "http:") {
      window.location.href.replace("http://", "https://");
    }

    const colorMode = localStorage.getItem("nuxt-color-mode");

    if (colorMode) {
      this.$colorMode.preference = colorMode;
    } else {
      this.$colorMode.preference = "dark";
    }
  }
};
</script>

<style>
.container {
  @apply flex justify-center items-center max-w-screen-xl min-h-screen mx-auto px-3;
}
button,
.btn {
  @apply py-2 px-4 transition ease-in duration-100 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded;
}
a {
  @apply focus:outline-none focus:ring-2 rounded;
}
p {
  @apply text-gray-600 dark:text-gray-400;
}
</style>
