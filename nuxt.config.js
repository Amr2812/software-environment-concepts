export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Software Environment Concepts",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Software Environment Concepts"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: process.env.npm_package_description
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/meta.jpg"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Software Env Concepts"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: process.env.npm_package_description
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "/meta.jpg"
      },
      {
        name: "theme-color",
        content: "#1A202C"
      },
      {
        name: "msapplication-navbutton-color",
        content: "#1A202C"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode"
  ],

  tailwindcss: {
    config: {
      theme: {
        darkSelector: ".dark-mode",
        extend: {
          colors: {
            primary: {
              default: "#F59724",
              dark: "#EC6611"
            },
            secondary: "#4C8EC7",
            dark: {
              default: "#0F0F17",
              light: "#1A202C"
            }
          }
        }
      },
      variants: {
        backgroundColor: [
          "dark",
          "dark-hover",
          "dark-group-hover",
          "dark-even",
          "dark-odd",
          "hover",
          "responsive"
        ],
        borderColor: [
          "dark",
          "dark-focus",
          "dark-focus-within",
          "hover",
          "responsive"
        ],
        textColor: ["dark", "dark-hover", "dark-active", "hover", "responsive"]
      },
      plugins: [
        require("tailwindcss-dark-mode")(),
        require("@tailwindcss/typography")
      ],
      purgeCSS: {
        whitelist: ["dark-mode"]
      }
    }
  },

  colorMode: {
    preference: "dark"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // '@nuxtjs/sitemap'
    "@nuxt/content",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    hostname: "https://softwareconcepts.vercel.app/",
    gzip: true,
    routes: async () => {
      let routes = [];
      const { $content } = require("@nuxt/content");
      const modules = await $content().fetch();
      for (const module of modules) {
        routes.push(`/${module.slug}`);
      }
      return routes;
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      mobileAppIOS: true,
      appleStatusBarStyle: "black",
      favicon: "/icon.png",
      name: "Software Environment Concepts",
      author: "Amr Elmohamady",
      theme_color: "#F59724",
      twitterCard: "summary_large_image",
      twitterSite: "@AmrElmohamady2"
    },
    manifest: {
      name: "Software Environment Concepts",
      short_name: "Software Concepts",
      lang: "en",
      background_color: "#1A202C"
    },
    workbox: {
      offlineAssets: ["/logo.svg"]
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
