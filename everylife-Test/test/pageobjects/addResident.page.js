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
    await this.title.selectByVisibleText(Title);
    await this.firstname.setValue(Firstname);
    await this.surname.setValue(Surname);
    await this.nickname.setValue(Nickname);
    await this.sex.selectByVisibleText(Sex);
    await this.dateOfBirth.setValue(DateOfBirth);
    await this.socialServiceNumber.setValue(SocialServiceNumber);
    await this.residentWeight.setValue(ResidentWeight);
    await this.residentHeight.setValue(ResidentHeight);
    await this.admissionDate.setValue(AdmissionDate);
    await this.address1.setValue(Address1);
    await this.address2.setValue(Address2);
    await this.city.setValue(City);
    await this.county.setValue(County);
    await this.postcode.setValue(Postcode);
    await this.country.setValue(Country);
    await this.externalTel.setValue(ExternalTel);
    await this.email.setValue(Email);
    await this.mobile.setValue(Mobile);
    await this.accessDetails.setValue(AccessDetails);
    await this.allergies.setValue(Allergies);
    await this.nextOfKinTel.setValue(NextOfKinTel);
    await this.doctorDetails.setValue(DoctorDetails);
    await this.surgery.setvalue(Surgery);
    await this.surgeryTel.setValue(SurgeryTel);
    await this.saveButton.click();
    await this.newResident.getText();

  }
}
module.exports = new AddResident();
