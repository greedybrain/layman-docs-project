class LoginPage {

     static renderLoginForm() {

          if (AuthCheckUser.isloggedIn()) {
               document.querySelector(".login").remove()
          } else {
               const form = new LoginForm().buildLoginForm()
               return form.parentElement
          }
     }

}