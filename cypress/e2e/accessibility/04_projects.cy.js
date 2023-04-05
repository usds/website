describe('A11y', () => {
  it('projects page is accessible', () => {
    cy.checkPageA11y('/projects');
  });
});