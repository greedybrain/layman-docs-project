class AppEvent {

     static headerLoginSignupClick() {
          const headerLoginBtn = document.querySelector('.login')
          const headerSignupBtn = document.querySelector('.signup')
          
          headerLoginBtn.addEventListener("click", () => {
               LoginPage.renderLoginForm()
               document.querySelector(".login-form").style.display = "flex"
               AppEvent.signupLoginToggle()
          })
          headerSignupBtn.addEventListener("click", () => {
               SignupPage.renderSignupForm()
               document.querySelector(".signup-form").style.display = "flex"
               AppEvent.signupLoginToggle()
          })
     }

     static signupLoginToggle() {
          const signupBtn = document.querySelector("span.open-signup")
          const loginBtn = document.querySelector("span.open-login")
          document.body.addEventListener("click", e => {
               // switch (e.target) {
               if (e.target === loginBtn) {
                    document.querySelector(".signup-form").style.display = "none"
                    LoginPage.renderLoginForm()
                    document.querySelector(".login-form").style.display = "flex"
                    console.log(loginBtn)
                    console.log(signupBtn)
               }
               
               if (e.target === signupBtn) {
                    document.querySelector(".login-form").style.display = "none"
                    SignupPage.renderSignupForm()
                    document.querySelector(".signup-form").style.display = "flex"
                    console.log(signupBtn)
                    console.log(loginBtn)
               }
               // }
          })
     }

     static formSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()

               const adapter = new SessionsAdapter()
               adapter.createLaymanSession() // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
          })
     }

}