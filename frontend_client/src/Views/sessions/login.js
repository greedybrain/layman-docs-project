class LoginPage {

     static renderLoginForm() {
          const form = new LoginForm().buildLoginForm()
          return form.parentElement
     }

}