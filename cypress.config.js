const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    projectId: 'oo4en7',
    viewportWidth: 1000,
    viewportHeight: 660,
    baseUrl: 'https://buger-eats-qa.vercel.app',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
