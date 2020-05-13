class SignupPage {

     static renderSignupForm() {
          const form = new SignupForm().buildSignupForm()
          return form.parentElement
     }

}