class AppEventSessionReg {
     constructor() {
          this.signupFormDiv = SignupForm.renderSignupForm()
          this.loginSpan = document.querySelector(".open-login")
          this.loginFormDiv = LoginForm.renderLoginForm()
          this.signupSpan = document.querySelector(".open-signup")
          this.signupBtnHeader = document.querySelector(".signup")
          this.loginBtnHeader = document.querySelector(".login")
          this.logoutBtnHeader = document.querySelector(".logout")
     }

     // LOGIN / SIGNUP 
     openSignupOrLogin() {
          document.addEventListener('click', e => {
               switch (e.target) {
                    case this.signupBtnHeader:
                         this.signupFormDiv.style.display = "flex"
                         break
                    case this.loginBtnHeader:
                         this.loginFormDiv.style.display = "flex"
                         break
                    case this.loginSpan:
                         this.signupFormDiv.style.display = "none"
                         this.loginFormDiv.style.display = "flex"
                         break
                    case this.signupSpan:
                         this.signupFormDiv.style.display = "flex"
                         this.loginFormDiv.style.display = "none"
                         break;
               }
          })
          this.signupFormSubmit(this.signupFormDiv.firstChild) || this.loginFormSubmit(this.loginFormDiv.firstChild)
     }
     
     // handle login form submit event 
     loginFormSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()
               
               const adapter = new SessionsAdapter()
               adapter.createLaymanSession(e) // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
          })
     }

     // handle signup form submit event 
     signupFormSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()

               const adapter = new RegistrationsAdapter()
               adapter.createLaymanRegistration(e) // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
          })
          
     }

     // handle logout event 
     static listeningForLogoutEvent() {
          new this().logoutBtnHeader.addEventListener("click", () => {
               SessionsAdapter.destroyLaymanSession()
          })
     }
     
     static listeningForLoginOrSignupEvents() {
          return new this().openSignupOrLogin()
     }
}