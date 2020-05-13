class AppEventSessionReg {
     constructor() {
          this.currentHeader = document.querySelector("header")
          this.signupFormDiv = SignupPage.renderSignupForm()
          this.loginSpan = document.querySelector(".open-login")
          this.loginFormDiv = LoginPage.renderLoginForm()
          this.signupSpan = document.querySelector(".open-signup")
          this.signupBtnHeader = document.querySelector(".signup")
          this.loginBtnHeader = document.querySelector(".login")
     }

     // LOGIN / SIGNUP 
     openSignup() {
          this.signupBtnHeader.addEventListener('click', () => {
               this.signupFormDiv.style.display = "flex"
               
               document.addEventListener('click', e => {
                    if (e.target === this.loginSpan) {
                         this.signupFormDiv.style.display = "none"
                         this.loginFormDiv.style.display = "flex"
                    } else {
                         this.signupFormDiv.style.display = "flex"
                         this.loginFormDiv.style.display = "none"
                    }
               })
               this.signupFormSubmit(this.signupFormDiv.firstChild)
          })
     }

     openLogin() {
          this.loginBtnHeader.addEventListener("click", () => {
               this.loginFormDiv.style.display = "flex"
               
               document.addEventListener('click', e => {
                    if (e.target === this.signupSpan) {
                         this.loginFormDiv.style.display = "none"
                         this.signupFormDiv.style.display = "flex"
                    } else {
                         this.loginFormDiv.style.display = "flex"
                         this.signupFormDiv.style.display = "none"
                    }
               })
               this.loginFormSubmit(this.loginFormDiv.firstChild)
          })
     }

     
     loginFormSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()
               
               const adapter = new SessionsAdapter()
               adapter.createLaymanSession(e) // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
               this.currentHeader.remove()
               Header.reRenderHeader()
          })
     }

     signupFormSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()

               const adapter = new RegistrationsAdapter()
               adapter.createLaymanRegistration(e) // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
               this.currentHeader.remove()
               Header.reRenderHeader()
          })
     }


     static listeningForLogoutEvent() {
          const logoutBtnHeader = document.querySelector(".logout")
          logoutBtnHeader.addEventListener("click", () => {
               SessionsAdapter.destroyLaymanSession()
               new this().currentHeader.remove()
               Header.reRenderHeader()
          })
     }
     
     static listeningForLoginOrSignupEvents() {
          const attachEventTo = new this
          return attachEventTo.openLogin() || attachEventTo.openSignup()
     }
}