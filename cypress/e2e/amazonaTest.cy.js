describe('My Amazona Test Suite', () => {
    it('Load Homepage', () => {
        cy.visit('http://localhost:3000/signin')

        cy.get('[data-test-id="email"]').type('admin@example.com')
        cy.get('[data-test-id="password"]').type("1234")

        cy.get('[data-test-id="signin"]').click();
    })
});