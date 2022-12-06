"use strict";
class Login{

    constructor(){
        this.btnMicrosoft = ".azure_fed";
    }

    clickBtnMicrosoft = () =>{
        cy.get(this.btnSignIn)
            .click();
    }

}

module.exports = new Login();