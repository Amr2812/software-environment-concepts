<template>
  <section id="search" class="my-8">
    <h3 class="text-center text-3xl mb-8 text-primary-default font-extrabold">
      Search
    </h3>
    <input
      type="text"
      id="rounded-email"
      class="rounded-lg w-full py-2 px-4 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 ring-offset-gray-400"
      placeholder="Search Expressions"
      v-model="query"
    />
    <ul class="mt-4">
      <li
        v-for="(module, i) in modulesFromSearch"
        :key="i"
        class="capitalize text-primary-default font-bold mb-2"
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
      query: "",
      modulesFromSearch: []
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.modulesFromSearch = [];
        return;
      }
      this.modulesFromSearch = await this.$content()
        .only(["title", "slug"])
        .search(query)
        .fetch();
    }
  }
};
</script>
