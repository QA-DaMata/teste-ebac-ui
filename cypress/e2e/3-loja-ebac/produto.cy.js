/// <reference types='cypress'/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
            .contains('Apollo Running Short')//para capturar pelo nome do produto na lista
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block')
            .first()//para capturar o primeiro elemento da lista
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve selecionar o ultimo produto da lista', () => {
        cy.get('.product-block')
            .last()//para capturar o ultimo elemento da lista
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

    it('Deve selecionar o 3° produto da lista', () => {
        cy.get('.product-block')
            .eq(2)//para capturar um especifico na lista pela posição dele 
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
        cy.get('.single_add_to_cart_button').should('exist')
    })

});