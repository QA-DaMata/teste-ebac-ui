/// <reference types='cypress'/>
import { faker } from '@faker-js/faker';
describe('Funcionalidade: Cadastro', () => {

    let mail = faker.internet.email()
    let firstName = faker.person.firstName()
    let lastName = faker.person.lastName()

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o cadastro com sucesso', () => {
        cy.get('#reg_email').type(faker.internet.email())//usando a lib faker para geral um email fake aleatorio
        cy.get('#reg_password').type('A123456@12')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())//usando a lib faker para geral um nome fake aleatorio
        cy.get('#account_last_name').type(faker.person.lastName())//usando a lib faker para geral um sobrenome fake aleatorio
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o cadastro com sucesso - Usando variáveis', () => {
        firstName = faker.person.firstName()
        mail = faker.internet.email(firstName)

        cy.get('#reg_email').type(mail)//usando a lib faker para geral um email fake aleatorio
        cy.get('#reg_password').type('A123456@12')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(firstName)//usando a lib faker para geral um nome fake aleatorio
        cy.get('#account_last_name').type(lastName)//usando a lib faker para geral um sobrenome fake aleatorio
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
})