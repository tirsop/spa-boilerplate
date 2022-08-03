/// <reference types="cypress" />


describe('My First Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/en')
  })

  it('finds title content', () => {
    cy.contains('Support your Local Restaurants')
  })

  it('check form submitssion, dynamic url change, and shoPage of a restaurant', () => {
    cy.get('input[id=location]').type("shibuya")
    cy.get('button[type=submit').click()
    cy.url().should('include', '/shibuya')
    cy.contains('Here are our top recommendations')
    cy.contains('Matsue').click()
    cy.contains('03-6452-6338')
  })
})