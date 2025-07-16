const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    /* afterEach(() =>{
         cy.screenshot()//tira um print da tela depois de cada it (horrivel na minha opinião)
     })*/

    it('Deve fazer o login com sucesso', () => {
        cy.get('#username').type('guilhermemata.teste@teste.com.br')//para escrever
        cy.get('#password').type('teste@123')//para escrever
        cy.get('.woocommerce-form > .button').click()//para clicar
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilhermemata.teste (não é guilhermemata.teste? Sair)')//valida se contem a mensagem
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
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

    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)//para escrever
        cy.get('#password').type(perfil.senha)//para escrever
        cy.get('.woocommerce-form > .button').click()//para clicar
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilhermemata.teste (não é guilhermemata.teste? Sair)')//valida se contem a mensagem
    })

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then(dados => { //precisa do then pois é assincrono 
            cy.get('#username').type(dados.usuario)//para escrever
            cy.get('#password').type(dados.senha, {log:false})//o log:false serve para esconder a senha do terminal do cypress
            cy.get('.woocommerce-form > .button').click()//para clicar
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilhermemata.teste (não é guilhermemata.teste? Sair)')//valida se contem a mensagem
        })//vai pegar a massa de dados dentro da pasta fixture sem precisar importar
    })

    it('Deve fazer login com sucesso - utilizando comando customizados', () =>{
        cy.login(perfil.usuario, perfil.senha)
    })

    it.only('Deve fazer login com sucesso - utilizando fixture e comandos costomizados', () =>{
        cy.fixture('perfil').then(res =>{
            cy.login(res.usuario, res.senha)
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, guilhermemata.teste (não é guilhermemata.teste? Sair)')//valida se contem a mensagem
        })
    })
})