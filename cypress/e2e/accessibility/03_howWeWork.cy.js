describe('A11y', () => {
  it('how we work page is accessible', () => {
    cy.checkPageA11y('/how-we-work');
  });
});