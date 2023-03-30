const LoginPage = require('../pageobjects/careLogin.page')
const AddResident = require('../pageobjects/addResident.page')
const ResidentDetails=require('../pageobjects/residentDetails.page')

const TestData=require('../testdata/addResident.json')

describe('Resident login and add new resident to everylife account',() => {

it('Verify new resident added successfully', async () => {

   await browser.url(baseUrl+'/logon')

   await LoginPage.login('Testuserone1988', 'TechTest123$$')
   await AddResident.addNewReceiver()
   await ResidentDetails.residentDetails()
   
})

})