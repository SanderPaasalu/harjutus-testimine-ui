// test.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
//-w// <reference types="cypress" />

context('Todo List', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it('School test', () => {
        cy.get('input')
            .type('lorem ipsum1').should('have.value', 'lorem ipsum1')
        cy.contains('Add').click().then(() =>{
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 1)
        });
        cy.get('input')
            .type('lorem ipsum2').should('have.value', 'lorem ipsum2')
        cy.contains('Add').click().then(() =>{
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 2)

        });
        cy.get('input')
            .type('lorem ipsum3').should('have.value', 'lorem ipsum3')
        cy.contains('Add').click().then(() =>{
            cy.get('input').should('have.value', '')
            cy.get('ul').find('li').should('have.length', 3)});

            cy.get('li:first').find('button').click().then(() => {
                cy.get('ul').find('li').should('have.length', 2)})
            cy.get('li:first').find('button').click().then(() => {
                cy.get('ul').find('li').should('have.length', 1)})

    });
})