class PetlabauthPO{

    getEmail_element(){

        return cy.get('#email')
    }

    getPassword_Element(){

        return cy.get('#password')
    }

    getForgotPassword_Element(){

        return cy.get('[href="/forgot_password"]')
    }

    getSubmitButton_Element(){

        return cy.get('[type="submit"]')
    }

}

export default PetlabauthPO;