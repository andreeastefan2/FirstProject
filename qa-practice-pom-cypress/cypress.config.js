const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "5cj2j8",
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 15000,
  requestTimeout: 15000,
  //video:true
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
