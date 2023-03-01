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

function terminalLog(violations) {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )

  cy.task('table', violationData)
}

Cypress.Commands.add("checkPageA11y", (path) => {
  cy.visit(path);
  cy.injectAxe();
  // make sure the website is also accessible on smaller devices
  ;[[1920, 1080], 'macbook-15',
  'macbook-13',
  'macbook-11',
  'iphone-6',
  'iphone-6+',
  'ipad-mini',].forEach(size => {
    if (Cypress._.isArray(size)) {
      cy.viewport(size[0], size[1])
    } else {
      cy.viewport(size)
    }
  cy.checkA11y(null, null, callback, terminalLog);
  })
})
