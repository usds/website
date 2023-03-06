const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

module.exports = defineConfig({
  screenshotsFolder: './cypress/snapshots/actual',
  trashAssetsBeforeRuns: true,
  video: false,
  e2e: {
    baseUrl: "http://localhost:4080",
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
        table(message) {
          console.table(message)

          return null
        }
      })
    },
  },
});