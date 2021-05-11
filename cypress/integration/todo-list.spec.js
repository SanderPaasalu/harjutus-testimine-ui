//-w// <reference types="cypress" />

context('Todo List', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('interact with list', () => {
        cy.get('input')
            .type('Lorem ipsum').should('have.value', 'Lorem ipsum')
        
        cy.get('button').click().then(() => {
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 1)

            cy.get('li').find('button').click().then(() => {
                cy.get('ul').find('li').should('have.length', 0)
            })
        })
    });
    it('School test', () => {
        cy.get('input')
            .type('Test1').should('have.value', 'lorem ipsum')
    });
})
  