const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qtfh2o',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: "hw618d",
    experimentalWebKitSupport: true,
    
    //specPattern: 'cypress/Integration/Examples/FrameworkTest.js',
   // specPattern: 'cypress/Integration/Examples/TrackingScenarios.cy.js'
    //specPattern: 'cypress/Integration/Examples/NewTest.js'
   specPattern: 'cypress/Integration/Examples/Imran_Test.js'
   //specPattern: 'cypress/Integration/Examples/Anusha_Test.js'
   //specPattern: 'cypress/Integration/Examples/testcrom.js'
   //specPattern: 'cypress/Integration/Examples/FirstTest.js'
    //specPattern: 'cypress/Integration/Examples/MultipleFunnels.js'
    
  },
});
