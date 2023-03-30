import TestData from "../testdata/addResident.json"

class AddResident extends ResidentBasePage

 {

  
  get addNewResident() {
    return $('//button[contains(text(),"Add")]');
  }
  get title() {
    return $("#title");
  }
  
  get nickname() {
    return $("#nickname");
  }
  get sex() {
    return $("#sex");
  }
  get dateOfBirth() {
    return $("#dob");
  }
  get socialServiceNumber(){
    return $("#ssNumber");
  }
  get residentWeight(){
    return $("#admissionWeightInKilograms");
  }
  get residentHeight(){
    return $("#admissionHeightInMeters");
  }
  get admissionDate(){
    return $("#startDate");
  }
  get address1(){
    return $("#address1")
  }
  get address2(){
    return $("#address2")
  }
  get city(){
    return $("#city")
  }
  get county(){
    return $("#county")
  }
  get postcode(){
    return $("#postcode")
  }
  get externalTel(){
    return $("#tel")
  }
  get email(){
    return $("#email")
  }
  get mobile(){
    return $("#mobile")
  }
  get accessDetails(){
    return $("#accessDetails")
  }
  get allergies(){
    return $("#allergies")
  }
  get nextOfKinTel(){
    return $("#nextofkintel")
  }
  get surgery(){
    return $("#surgery")
  }
  get surgeryTel(){
    return $("#surgeryTel")
  }
  get saveButton(){
    return $("//button[contains(text(),'Save')]")
  }
  get newResident(){
    return $("//*[@id='context-bar']/div/div[2]/div[1]")
  }
  

  async addNewReceiver() {
    
    await this.residentsbutton.click();
    await this.addNewResident.click();
    await this.title.selectByVisibleText(TestData.addResident.Title);
    await this.firstname.setValue(TestData.addResident.FirstName);
    await this.surname.setValue(TestData.addResident.Surname);
    await this.nickname.setValue(TestData.addResident.Nickname);
    await this.sex.selectByVisibleText(TestData.addResident.Sex);
    await this.dateOfBirth.setValue(TestData.addResident.DateOfBirth);
    await this.socialServiceNumber.setValue(TestData.addResident.SocialServiceNumber);
    await this.residentWeight.setValue(TestData.addResident.ResidentWeight);
    await this.residentHeight.setValue(TestData.addResident.ResidentHeight);
    await this.admissionDate.setValue(TestData.addResident.AdmissionDate);
    await this.address1.setValue(TestData.addResident.Address1);
    await this.address2.setValue(TestData.addResident.Address2);
    await this.city.setValue(TestData.addResident.City);
    await this.county.setValue(TestData.addResident.County);
    await this.postcode.setValue(TestData.addResident.Postcode);
    await this.country.setValue(TestData.addResident.Country);
    await this.externalTel.setValue(TestData.addResident.ExternalTel);
    await this.email.setValue(TestData.addResident.Email);
    await this.mobile.setValue(TestData.addResident.Mobile);
    await this.accessDetails.setValue(TestData.addResident.AccessDetails);
    await this.allergies.setValue(TestData.addResident.Allergies);
    await this.nextOfKinTel.setValue(TestData.addResident.NextOfKinTel);
    await this.doctorDetails.setValue(TestData.addResident.DoctorDetails);
    await this.surgery.setvalue(TestData.addResident.Surgery);
    await this.surgeryTel.setValue(TestData.addResident.SurgeryTel);
    await this.saveButton.click();
    await this.newResident.getText();

  }
}
module.exports = new AddResident();
