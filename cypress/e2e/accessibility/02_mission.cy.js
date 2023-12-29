describe('A11y', () => {
  it('mission page is accessible', () => {
    cy.checkPageA11y('/mission');
  });
});