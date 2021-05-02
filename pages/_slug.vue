<template>
  <div class="mb-10">
    <article>
      <h1 class="text-center text-secondary text-4xl my-5 font-extrabold">
        {{ page.title }}
      </h1>
      <nuxt-content
        :document="page"
        class="prose lg:prose-lg xl:prose-xl"
      />
    </article>
    <hr class="my-6" />
    <div class="flex justify-between">
      <nuxt-link v-if="prev" :to="prev.slug">
        <Button class="bg-primary-default text-gray-100" :text="'Prev'">
          <template #icon>
            <svg
              class="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              ></path>
            </svg>
          </template>
        </Button>
      </nuxt-link>
      <nuxt-link v-if="next" :to="next.slug">
        <Button class="bg-primary-default text-gray-100" :text="'Next'">
          <template #icon-right>
            <svg
              class="w-6 h-6 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </template>
        </Button>
      </nuxt-link>
    </div>
    <Modules />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content(params.slug).fetch();
    const [prev, next] = await $content()
      .only(["slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return {
      page,
      prev,
      next,
    };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.page.title },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.page.title,
        },
      ],
    };
  },
};
</script>

<style>
.prose {
  max-width: 1800px !important;
}
.prose a {
  @apply text-primary-default no-underline !important;
}
.prose a:hover {
  @apply underline !important;
}
.prose h3 {
  @apply text-2xl mt-5 mb-2 text-primary-default font-extrabold capitalize !important;
}
.prose h4 {
  @apply text-xl font-bold my-2 !important;
}
.prose strong {
  @apply text-secondary;
}
.icon.icon-link::before {
  content: "#";
  margin-right: 7px;
}
</style>