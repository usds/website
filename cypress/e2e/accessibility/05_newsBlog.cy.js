describe('A11y', () => {
  it('news and blog page is accessible', () => {
    cy.checkPageA11y('/news-and-blog');
  });
});