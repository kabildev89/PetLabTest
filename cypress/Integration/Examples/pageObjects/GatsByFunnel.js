class GatsbyFunnel{

getProductTitle()
{
    return cy.get('.ProductTitleV2styles__Name-sc-1xf7n1q-2')
    
}

getOneTubSub()
{
    return cy.get('.active > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div')
          
}

getTwoTubsSub(){
    return cy.get(':nth-child(2) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div')
    
}
getThreeTubsSub(){
    return cy.get(':nth-child(3) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div')
}
getFourTubsSub(){
    return cy.get(':nth-child(4) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div')
}

clickOTP(){
    return cy.get('.OtpTabItemstyles__TabItemDot-sc-1uerucl-0')
}

threeTubsOTP(){
    return cy.get(':nth-child(3) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div')
}

twoTubsOTP(){
   return cy.get(':nth-child(2) > .TubSelectorV1styles__TubListItemContainer-sc-1f30qvg-3 > div')
}

getPrice()
{
    return cy.get('.PriceComparisonstyles__Price-sc-13i79mc-0')
}







}

export default GatsbyFunnel;
