class LoginPage extends ResidentBasePage
{

get usernameTextbox(){
    return $('#exampleInputEmail1')
}
get passwordTextbox(){
    return $('#exampleInputPassword1')
}
get loginButton(){
    return $('#login-btn')
}

async login(username, password){
    await this.usernameTextbox.setValue(username)
    await this.passwordTextbox.setValue(password)
    await this.loginButton.click()
}

}
module.exports = new LoginPage()