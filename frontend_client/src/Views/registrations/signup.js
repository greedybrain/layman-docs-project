class SignupPage {

     static renderSignupForm() {

          if (AuthCheckUser.isloggedIn()) {
               document.querySelector(".signup").remove()
          } else {
               const form = new SignupForm().buildSignupForm()
               return form.parentElement
          }
     }

}