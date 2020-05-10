class LoginPage {

     static renderLoginForm() {
          if (!AuthCheckUser.isloggedIn()) {
               const form = new LoginForm().buildLoginForm()
               AppEvent.formSubmit(form)
          }
     }

}