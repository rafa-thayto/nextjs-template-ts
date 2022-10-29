/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

describe('Navigation', () => {
  it('should open home page', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/')

    // The new page should contain an h1 with "About page"
    cy.get('h1').contains('Next.js template')
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
