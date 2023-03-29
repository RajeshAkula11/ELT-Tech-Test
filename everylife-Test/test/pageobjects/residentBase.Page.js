const chai = require('chai')


class ResidentBasePage{

    get residentsButton() {
        return $('//span[contains(text(),"Residents")]');
      }
      get firstname() {
        return $("#firstname");
      }
      get surname() {
        return $("#surname");
      }
      get dateOfBirth() {
        return $("#dob");
      }

}