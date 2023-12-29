const compareSnapshot = require('cypress-visual-regression/dist/command');
const urls = require('./sitemap.json'); // see sitemap.sh

// The default threshold is zero, meaning all pixels must match to pass test.
// Some pages will vary for legitimate(ish) reasons; custom thresholds are fraction of pixels OK to vary.
const customThresholds = {
  'apply': 0.01,        // iframe'd form has varying "CAPTCHA"
  'how-we-work': 0.03,  // contains animation
  'people/': 0.07,      // top center card's placement varies
  'projects/': 0.09,    // top center card's placement varies
};

describe('Current actual screenshots should match established base screenshots', () => {
  urls.forEach((url) => {
    it(`${url.length === 0 ? '/' : url}`, () => {
      // Wait for page to load ...
      cy.intercept(url).as('getPage');
      cy.visit(url);
      cy.wait('@getPage').then(() => {
        // ... then slowly scroll to force any lazy loading
        cy.scrollTo('bottomRight', { duration: 1500 });
        
        // Compare current "actual" screenshot to previously established "base" screenshot
        let filename = url.replaceAll('/', '_');
        if (filename.length === 0) filename = 'home';
        cy.compareSnapshot(filename, customThresholds[url] || 0);
      });
    });
  });
});