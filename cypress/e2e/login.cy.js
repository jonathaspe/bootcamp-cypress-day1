/// <reference types="cypress"/>

// feature
describe('Login', () => {

    // cenários
    it('Login com sucesso', () => {
        // 1 - Acessar a tela de login
        cy.visit('/login')
        // 2 - Escrever o campo e-mail
        cy.get('#user').type('eduardo@qazando.com.br')
        // 3 - Escrever o campo senha
        cy.get('#password').type('1234567')
        // 4 - Clicar no botão Login
        cy.get('#btnLogin').click()
        // 5 - validação
        //cy.get('.swal2-success-ring').should('be.visible') // Verifica se o elemento de sucesso está visível
        cy.get('#swal2-title')
        cy.get('.swal2-confirm')
        //cy.get(".swal2-success-ring").should("have.class", "swal2-success-ring"); // Verifica se o elemento possui a classe correta
        //cy.get(".swal2-success-ring").should("have.css", "border-color", "rgb(0, 255, 0)"); // Verifica a cor da borda do elemento
        cy.url().should('include', '/my-account')
        
    })

    it('Assinar news', () => {
        // 1 - Acessar a tela de login
        cy.visit('/')
        // 2 - Escrever o campo e-mail
        cy.get('.form-control').type('jonathas.santos@email.com.br{enter}')
        // 3 - validação
        cy.get('#swal2-title')
        cy.get('#swal2-html-container')
        // 4 - Clicar no botão OK
        cy.get('.swal2-confirm').click()
        cy.get('.swal2-success-ring').should('be.visible'); // Verifica se o elemento de sucesso está visível
        cy.get('.swal2-success-ring').should('have.class', 'swal2-success-ring'); // Verifica se o elemento possui a classe correta
        //cy.get('.swal2-success-ring').should('have.css', 'border-color', 'rgb(0, 255, 0)'); // Verifica a cor da borda do elemento
  })
})