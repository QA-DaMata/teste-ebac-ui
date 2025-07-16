Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)//para escrever
    cy.get('#password').type(senha)//para escrever
    cy.get('.woocommerce-form > .button').click()//para clicar
})

Cypress.Commands.add('preCadastro', (email, senha, nome, sobrenome) => {
    cy.get('#reg_email').type(email)//usando a lib faker para geral um email fake aleatorio
    cy.get('#reg_password').type(senha, {log:false})//o log:false serve para esconder a senha do terminal do cypress
    cy.get(':nth-child(4) > .button').click()
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(nome)//usando a lib faker para geral um nome fake aleatorio
    cy.get('#account_last_name').type(sobrenome)//usando a lib faker para geral um sobrenome fake aleatorio
    cy.get('.woocommerce-Button').click()
})

Cypress.Commands.add('detalhesConta', (nome, sobrenome, usuario) =>{
    cy.get('#account_first_name').clear().type(nome)
    cy.get('#account_last_name').clear().type(sobrenome)
    cy.get('#account_display_name').clear().type(usuario)
    cy.get('.woocommerce-Button').click()
})