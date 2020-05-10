class SignupPage {

     static renderSignupForm() {
          if (!AuthCheckUser.isloggedIn()) {
               const form = new SignupForm().buildSignupForm()
               AppEvent.formSubmit(form)
          }
     }

}