<template>
  <section id="search" class="my-8">
    <h3 class="text-center text-3xl mb-8 text-primary-default font-extrabold">
      Search
    </h3>
    <input
      type="text"
      id="rounded-email"
      class="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-4 focus:ring-secondary focus:border-transparent"
      placeholder="Search Expressions"
      v-model="query"
    />
    <ul class="mt-4">
      <li
        v-for="(module, i) in articlesFromSearch"
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
      articlesFromSearch: [],
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articlesFromSearch = [];
        return;
      }
      const articlesFromTitleSearch = await this.$content()
        .only(["title", "slug"])
        .limit(3)
        .search("title", query)
        .fetch();

      if (articlesFromTitleSearch) {
        this.articlesFromSearch = articlesFromTitleSearch;
      } else {
        this.articlesFromSearch = await this.$content()
          .only(["title", "slug"])
          .limit(3)
          .search(query)
          .fetch();
      }
    },
  },
};
</script>