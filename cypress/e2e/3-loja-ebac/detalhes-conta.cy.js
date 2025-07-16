/// <reference types='cypress'/>

describe('Funcionalidade: detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(res => {
            cy.login(res.usuario, res.senha)
        })
    });

    it('Deve completar os detalhes da conta com sucesso', () => {
        cy.detalhesConta('Guilherme', 'Cordeiro', 'Guilherme.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })

})