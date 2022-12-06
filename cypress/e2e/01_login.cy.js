"use strict";
import Login from "../pages/Login"; 
import testData from '../fixtures/dataLogin.json';



describe('validate the header section can be navigate', () => {

  beforeEach(()=>{
    cy.visit('/');
  })
  
  //LOGIN_01
  it('Sign in with microsoft account', () => {
    Login.clickBtnMicrosoft();
  })

})