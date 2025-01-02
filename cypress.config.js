const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "https://spring-framework-petclinic-qctjpkmzuq-od.a.run.app/",
  },
});
