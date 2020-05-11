class AppEventSessionReg {

     // LOGIN / SIGNUP 
     static openSignup() {
          const signupBtnInHeader = document.querySelector(".signup")
          
          document.addEventListener("click", e => { 
               if (e.target === signupBtnInHeader) {
                    const signupForm = SignupPage.renderSignupForm()
                    signupForm.style.display = "flex"

                    const loginSpan = document.querySelector(".open-login")
                    
                    signupForm.addEventListener('click', e => {
                         if (e.target === loginSpan) {
                              signupForm.style.display = "none"
                              const loginForm = LoginPage.renderLoginForm()
                              loginForm.style.display = "flex"
                         }
                    })
               }

          })
     }

     static openLogin() {
          const loginBtnInHeader = document.querySelector(".login")

          document.addEventListener("click", e => {
               if (e.target === loginBtnInHeader) {
                    const loginForm = LoginPage.renderLoginForm()
                    loginForm.style.display = "flex"
                    AppEventSessionReg.loginFormSubmit(loginForm.firstChild)

                    const signupSpan = document.querySelector(".open-signup")

                    loginForm.addEventListener('click', e => {
                         if (e.target === signupSpan) {
                              loginForm.style.display = "none"
                              const signupForm = SignupPage.renderSignupForm()
                              signupForm.style.display = "flex"
                         }
                    })
               }
          })
     }

     static loginFormSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()

               const adapter = new SessionsAdapter()
               adapter.createLaymanSession() // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
          })
     }

}