describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() =>{
        cy.screenshot()//tira um print da tela depois de cada it (horrivel na minha opinião)
    })

    it('Deve fazer o login com sucesso', () => {
        cy.get('#username').type('guilhermemata.teste@teste.com.br')//para escrever
        cy.get('#password').type('teste@123')//para escrever
        cy.get('.woocommerce-form > .button').click()//para clicar
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilhermemata.teste (não é guilhermemata.teste? Sair)')//valida se contem a mensagem
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () =>{
        cy.get('#username').type('naotenhocadastro.teste@teste.com.br')//para escrever
        cy.get('#password').type('teste@123')//para escrever
        cy.get('.woocommerce-form > .button').click()//para clicar
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')//validando a mensagem de erro (Não precisa escrever toda a mensagem)
        cy.get('.woocommerce-error > li').should('exist')//valida se o modal existe (se foi redenrizado na tela)
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('guilhermemata.teste@teste.com.br')//para escrever
        cy.get('#password').type('asf4ewg4')//para escrever
        cy.get('.woocommerce-form > .button').click()//para clicar
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail guilhermemata.teste@teste.com.br está incorreta. Perdeu a senha?')//valida se tem o texto
        cy.get('.woocommerce-error > li').should('exist')//valida se exite
    })
})