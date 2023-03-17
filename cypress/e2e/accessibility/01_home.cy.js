describe('A11y', () => {
    it('home page is accessible', () => {
      cy.checkPageA11y('/');
  });
 
});
