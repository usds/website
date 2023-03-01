//This test loops through all the pages in the sitemap.

const urls = require('../sitemap.json'); // see sitemap.sh

describe('Entire Website accessibility', () => {
  urls.forEach((url) => {
    it(`${url.length === 0 ? '/' : url}`, () => {
      // Wait for page to load ...
      cy.intercept(url).as('getPage');
      cy.visit(url);
      cy.wait('@getPage').then(() => {
        cy.checkPageA11y(url);  
        })  
      });
    });
  });
