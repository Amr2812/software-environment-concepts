<template>
  <button
    class="btn border capitalize border-black dark:border-white"
    @click="changeMode"
  >
    {{ btnLabel }}
  </button>
</template>

<script>
export default {
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
  computed: {
    btnLabel() {
      return this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
};
</script>
