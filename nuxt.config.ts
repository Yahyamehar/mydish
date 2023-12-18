import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    // Use relative paths for cleaner imports
    './assets/css/bootstraps.min.css',
    './assets/css/global.css',
    './assets/css/all.min.css',
    './assets/css/animate.css',
    './assets/css/slick.css',
    './assets/css/style.css',
    './assets/css/custom-select.css',
    './assets/css/slick-theme.css',
    './assets/css/swiper.min.css',
  ],

  build: {
    extend(config, { isDev, isClient }) {
      // Enable source maps only in development
      if (isDev && isClient) {
        // Check if the config module has a devtool property before setting it
        if (config.module) {
          config.devtool = 'source-map';
        }
      }
    },
  },

  // Define your routes
generate: {
    routes() {
      // Assuming you have a list of products with unique names
      const products = [
        { id: 1, name: 'salmon-fish' },
        { id: 2, name: 'sushi' },
        { id: 3, name: 'vegetable' },
        // Add more products as needed
      ];

      return products.map((product) => `/products/${product.name}`);
    },
  },
});
