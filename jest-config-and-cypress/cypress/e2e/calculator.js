describe('anonymous calculator', () => {
  it('can make calculations', () => {
    cy.visit('http://localhost:8080')

    cy.findByText(/^1$/).click()
    cy.findByText(/^\+$/).click()
    cy.findByText(/^2$/).click()
    cy.findByText(/^=$/).click()

    cy.findByTestId('total').should('have.text', '3')

  })
})
