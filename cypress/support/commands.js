const compareSnapshotCommand = require("cypress-visual-regression/dist/command");

compareSnapshotCommand();

const severityIndicators = {
  minor:    '⚪️',
  moderate: '🟡',
  serious:  '🟠',
  critical: '🔴',
}

function callback(violations) {
  violations.forEach(violation => {
    const nodes = Cypress.$(violation.nodes.map(node => node.target).join(','))

    Cypress.log({
      name: `${severityIndicators[violation.impact]} A11Y`,
      consoleProps: () => violation,
      $el: nodes,
      message: `[${violation.help}](${violation.helpUrl})`
    })

    violation.nodes.forEach(({ target }) => {
      Cypress.log({
        name: '🔧',
        consoleProps: () => violation,
        $el: Cypress.$(target.join(',')),
        message: target
      })
    })
  });
}

Cypress.Commands.add("checkPageA11y", (path) => {
  cy.visit(path);
  cy.injectAxe();
  cy.checkA11y(null, null, callback);
})
