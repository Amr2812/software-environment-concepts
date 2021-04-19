<template>
  <section>
    <h3 class="text-center text-3xl my-8 text-primary-default font-extrabold">
      Modules
    </h3>
    <ul>
      <li
        v-for="(module, i) in modules"
        :key="i"
        class="capitalize text-primary-default font-extrabold text-xl mb-2"
      >
        <nuxt-link :to="module.path">{{ module.title }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      modules: [],
    };
  },
  async fetch() {
    this.modules = await this.$content().sortBy("createdAt").fetch();
  },
};
</script>