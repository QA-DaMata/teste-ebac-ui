describe('Funcionalidade: Login', () => {

    it('Deve fazer o login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('guilhermemata.teste@teste.com.br')//para escrever
        cy.get('#password').type('teste@123')//para escrever
        cy.get('.woocommerce-form > .button').click()//para clicar
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilhermemata.teste (não é guilhermemata.teste? Sair)')//valida se contem a mensagem

    })
})