describe('Component screenshot', () => {
	it('should match previous screenshot', () => {
		cy.visit('/');
		cy.get('.cypress-wrapper').each((element) => {
			cy.wrap(element).matchImageSnapshot('home');
		});
	});
});

