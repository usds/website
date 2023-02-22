describe('A11y', () => {
    it('should have one h1 element', () => {
      cy.visit('/');
      cy.get('h1').should('have.length', 1);
    });

    it('home page is accessible', () => {
      cy.checkPageA11y('/');
  });
  
});
