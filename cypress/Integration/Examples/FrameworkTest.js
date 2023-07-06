/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
import GatsbyFunnel from './pageObjects/GatsByFunnel';

describe('This is my First Suite', function()  { 
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

        before(function(){

            cy.fixture('example').then(function(data)
            {
                this.data=data
            })
        })

      it('This is to PetLab Page', function(){
        const pageObject =new GatsbyFunnel()
        this.data.url.forEach(function(element) {
          cy.viewport(320, 480)
                   cy.visit(element)
                   cy.title().should('include', 'PetLab Co.')

                   pageObject.getOneTubSub().should('have.text','1 Tub') //1 Tub and Sub

                  });
                  
         cy.visit('https://offer.thepetlabco.com/probiotic-chews',{
           onBeforeLoad: (win) => {
            win.ontouchstart = true
          }
        })
        cy.visit('https://offer.thepetlabco.com/probiotic-chews')
       // cy.viewport(320, 480)

        cy.title().should('include', 'PetLab Co.')

        cy.visit('https://offer.thepetlabco.com/dentalformula/dental')
       // cy.viewport(320, 480)

        cy.title().should('include', 'PetLab Co.')

        cy.visit('https://offer.thepetlabco.com/jointcarechews')
       // cy.viewport(320, 480)

        cy.title().should('include', 'PetLab Co.')
        const title=cy.title()
        console.log(title)
        
        cy.visit('https://offer.thepetlabco.com/anal-gland-support')
       // cy.viewport(320, 480)

        cy.title().should('include', 'PetLab Co.')
       
        cy.wait(6000)
       
        pageObject.getProductTitle().should('have.text','Probiotic Chews (+FREE Gift)')

        pageObject.getOneTubSub().should('have.text','1 Tub') //1 Tub and Sub
        pageObject.getPrice().should('contain.text',this.data.One_tub_Sub_Cost)

        pageObject.getTwoTubsSub().should('have.text','2 Tubs').click({force: true}) //2 Tubs and Sub
        pageObject.getPrice().should('contain.text',this.data.Two_tubs_Sub_Cost)

        pageObject.getThreeTubsSub().should('have.text','3 Tubs').click({force: true}) //3 Tubs and Sub
        pageObject.getPrice().should('contain.text',this.data.Three_tubs_Sub_Cost)

        pageObject.getFourTubsSub().should('have.text','4 Tubs').click({force: true}) //4 Tubs and Sub
        pageObject.getPrice().should('contain.text',this.data.Four_tubs_Sub_Cost)

        pageObject.clickOTP().click({force: true})
        pageObject.getPrice().should('contain.text',this.data.Four_Tubs_OTP_Cost) //4 Tubs OTP

        cy.get(':nth-child(3) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div').should('have.text','3 Tubs').click({force: true}) //3 Tubs and OTP
        pageObject.getPrice().should('contain.text',this.data.Three_Tubs_OTP_Cost)

        cy.get(':nth-child(2) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div').should('have.text','2 Tubs').click({force: true}) //2 Tubs and OTP
        pageObject.getPrice().should('contain.text',this.data.Two_Tubs_OTP_Cost)

        cy.get(':nth-child(1) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div').click({force: true})
        cy.get('.SubTabItemstyles__TabItemDot-sc-eyrc7j-0').click({force: true})

        cy.get('.frequency-select__single-value').should('contain.text','Monthly (Most Common)')

        cy.get('.BumpOfferSelectorV1styles__BumpOfferContentText-sc-1xe6egv-7').should('contain.text','Cleanser Clear Ears Therapy')


        cy.get('.AddToCartButtonV1styles__AddToCartButton-sc-q4n6f9-1').click({force: true})
        

        cy.wait(3000)

        cy.get('#form-customer_email').type(this.data.test_email)
        cy.get('#form-customer_shipping_first_name').type(this.data.shipping_first_name)
        cy.get('#form-customer_shipping_last_name').type(this.data.shipping_last_name)
        cy.get('#form-customer_shipping_address1').type(this.data.shipping_address)
        cy.get('#form-customer_shipping_city').type(this.data.shipping_city)
        cy.get('#form-customer_shipping_zip').type(this.data.shipping_zip)
        cy.get('#form-customer_shipping_state').select("MT")
              .invoke("val")
            cy.get('#form-customer_shipping_phone').type(this.data.shipping_phone)
            cy.get('.policy-check').click({force: true})

          this.data.Price_validations_on_AddressDetailsPage.forEach(function(element) {
            cy.get('#cart-all').should('contain.text',element)
          });


                cy.get('#submitSipping').click({force:true})
                cy.get('#btn_dup_confirm').click({force: true})

                cy.wait(6000)
                cy.get(':nth-child(1) > .get-info').should('contain.text',this.data.test_email)
                cy.get(':nth-child(2) > .get-info').should('contain.text','Sharath Automation')

                cy.frameLoaded("#cardNumber")
               
                cy.iframe('#cardNumber').find('#checkout-frames-card-number').type(this.data.Card_number)
                
                 cy.frameLoaded("#expiryDate")
                 cy.iframe('#expiryDate').find('#checkout-frames-expiry-date').type(this.data.card_expiry)

                 cy.frameLoaded("#cvv")
                 cy.iframe('#cvv').find('#checkout-frames-cvv').type(this.data.card_cvv)

                 cy.get('#paymentBtn').click({force: true})

                cy.wait(5000)
                 cy.get('.builder-2d55dd1ba3c247eb9b56189d5d971a47').click({force: true})

                this.data.Price_validations_on_FinalCheckoutPage.forEach(function(element) {
                  cy.get('#cart-all').should('contain.text',element)
                });

        
      })
 

})