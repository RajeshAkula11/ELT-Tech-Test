import TestData from "../testdata/addResident.json"

class ResidentDetails extends ResidentBasePage

{

get residentDetails(){
    return $('//a[contains(text(),"Details")]')
}
get customerStatusUpdate(){
    return $('#customer-status-update')
}
get newCustomerStatus(){
    return $('//div[1]/div/div/status-modal-component/div[2]/form/div[1]/div/select')
}
get reasonMessage(){
    return $('/html/body/div[1]/div/div/status-modal-component/div[2]/form/div[2]/div[1]/div/input')
}
get customerStatusSaveButton()
{
    return $('/html/body/div[1]/div/div/status-modal-component/div[3]/button[1]')
}

get residentsSearchTerm(){
    return $('#filterTerm')
}
get searchResidentResult(){
    return $('//*[@id="customersContainer"]/div[3]/div[2]/ng-include/div/div[1]/div[1]/h3/span')
}
get statusActiveResident(){
    return $('//span[contains(text(),"Active")]')
}

async residentDetails(){
    
    await this.residentDetails.click();
    await this.customerStatusUpdate.click();
    await this.newCustomerStatus.selectByVisibleText(TestData.residentDetails.NewCustomerStatus);
    await this.reasonMessage.setvalue(TestData.residentDetails.ReasonMessage);
    await this.customerStatusSaveButton.click();
    await chai.expect(statusActiveResident.getText(),"Active")
    await this.residentsButton.click();
    await this.residentsSearch.setvalue(TestData.residentDetails.ResidentsSearch);
    await this.searchResidentResult.click();
    await this.residentDetails.click();
    await chai.expect(firstname.getText(),"Test")
    await chai.expect(surname.getText(),"Smith")
    await chai.expect(dateOfBirth.getText(),"01/01/1950")

}

}
module.exports = new ResidentDetails()