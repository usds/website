describe('A11y', () => {
  it('apply page is accessible', () => {
    cy.checkPageA11y('/apply');
  });
});