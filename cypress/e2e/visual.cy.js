const compareSnapshot = require('cypress-visual-regression/dist/command');

describe('Current actual screenshots should match established base screenshots',
() => {
  // Test these routes. Some need custom screenshot filenames. 
  // For reasons given, some cannot be checked for exact image match (threshold = 0).
  // (Threshold is the percentage of differing pixels.)
  const tests = [
    { route: '/', filename: 'home' }, 
    { route: 'apply', threshold: 0.01 }, // iframe'd form has varying "CAPTCHA"
    { route: 'contact-us' }, 
    { route: 'faq' }, 
    { route: 'how-we-work', threshold: 0.03 }, // contains animation
    { route: 'mission' }, 
    { route: 'news-and-blog' }, 
    { route: 'people/', filename: 'people', threshold: 0.07 }, // top center card's placement varies
    { route: 'privacy' }, 
    { route: 'project-charter' },
    { route: 'projects/', filename: 'projects', threshold: 0.09 }, // top center card's placement varies
    { route: 'thank-you' },
    { route: 'vulnerability-disclosure-policy' },
    { route: '404' },

    { route: 'aileen-chen', collection: 'people' },
    { route: 'alicia-beckett', collection: 'people' },
    { route: 'anissa-perez', collection: 'people' },
    { route: 'annie-nguyen', collection: 'people' },
    { route: 'brent-maravilla', collection: 'people' },
    { route: 'david-holmes', collection: 'people' },
    { route: 'eunice-garcia', collection: 'people' },
    { route: 'jorge-escobar', collection: 'people' },
    // { route: 'kasia-chimielinski', collection: 'people' }, (redirects)
    { route: 'kasia-chmielinski', collection: 'people' },
    { route: 'kathy-pham', collection: 'people' },
    { route: 'kelly-taylor', collection: 'people' },
    { route: 'marianne-bellotti', collection: 'people' },
    { route: 'selene-diaz', collection: 'people' },
    { route: 'sparkle-joy', collection: 'people' },
    { route: 'steve-albers', collection: 'people' },
    { route: 'whitney-teal', collection: 'people' },

    { route: 'advisor-network', collection: 'projects' },
    { route: 'blue-button-2', collection: 'projects' },
    { route: 'childcare-tax-credit', collection: 'projects' },
    { route: 'disability-appeals-status', collection: 'projects' },
    { route: 'disability-compensation-application', collection: 'projects' },
    { route: 'discharge-upgrade-tool', collection: 'projects' },
    { route: 'ditap', collection: 'projects' },
    { route: 'gi-bill-comparison-tool', collection: 'projects' },
    { route: 'hack-the-pentagon', collection: 'projects' },
    { route: 'medicare-payment-program', collection: 'projects' },
    { route: 'n-400', collection: 'projects' },
    { route: 'personalized-dashboard', collection: 'projects' },
    { route: 'quality-payment-program', collection: 'projects' },
    { route: 'school-safety', collection: 'projects' },
    { route: 'smeqa', collection: 'projects' },
    { route: 'vaccines-dot-gov', collection: 'projects' },
    { route: 'va-dot-gov', collection: 'projects' },
  ];

  tests.forEach((test) => {
    const url = `${test.collection ? test.collection + '/' : ''}${test.route}`;

    it(`${url} - threshold: ${test.threshold || '0.00'}`, () => {
      // Wait for page to load ...
      cy.intercept(url).as('getPage');
      cy.visit(url);
      cy.wait('@getPage').then(() => {
        // ... then slowly scroll to force any lazy loading
        cy.scrollTo('bottomRight', { duration: 2000 });
        
        // Compare current "actual" screenshot to previously established "base" screenshot
        cy.compareSnapshot(test.filename || `${test.collection ? test.collection + '_' : ''}${test.route}`, test.threshold || 0.0);
      });
    });
  });
});