<template>
  <section class="grid grid-cols-1 md:grid-cols-3 gap-x-20 mt-5">
    <div class="md:col-span-2 mb-6 text-center md:text-left mt-4">
      <h1
        class="text-3xl lg:text-5xl font-bold text-primary-dark capitalize mb-4"
      >
        software environment concepts
      </h1>
      <p class="mb-6">
        If you are new to software engineering or you are working in a software
        company (Manager, HR, Product Manager, etc..) and you want to understand
        what the engineers are talking about or you are Busines man/woman and
        you want to build a software product but you don't have experience in
        the field of software engineering then you should read this book. This
        eBook is like a glossary for software expressions or concepts where you
        can carry everywhere offline and online.
      </p>
      <div class="flex justify-center md:justify-start">
        <a href="#modules">
          <Button
            class="bg-primary-dark focus:ring-primary-dark ring-offset-2 mr-2 text-gray-100"
            :text="'Read Now For Free'"
          ></Button>
        </a>
        <button
          class="text-secondary focus:ring-secondary"
          @click="install"
          id="installBtn"
        >
          Read Offline (Install)
        </button>
      </div>
    </div>
    <div class="md:col-span-1 self-center">
      <img
        src="/logo.svg"
        alt="logo"
        class="h-40 md:h-50 mx-auto object-contain"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      deferredPrompt: null,
    };
  },
  mounted() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e;
    });
    window.addEventListener("appinstalled", () => {
      this.deferredPrompt = null;
    });
  },
  methods: {
    install() {
      if (!this.deferredPrompt) {
        // The deferred prompt isn't available.
        return;
      }
      // Show the install prompt.
      this.deferredPrompt.prompt();

      this.deferredPrompt = null;
    },
  },
};
</script>
