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
     
     static goHome() {
          document.addEventListener("click", e => {
               if (e.target == document.querySelector(".heading") || e.target == document.querySelector(".heading h1")) {
                    App.refresh()
               }
          })
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
               }
          })
          document.addEventListener('click', e => {
               switch (e.target) {
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
     
     loginFormSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()
               
               const adapter = new SessionsAdapter()
               adapter.createLaymanSession(e) // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
               setInterval(() => {
                    App.refresh()
               }, 300);
          })
     }

     signupFormSubmit(form) {
          form.addEventListener("submit", e => {
               e.preventDefault()

               const adapter = new RegistrationsAdapter()
               adapter.createLaymanRegistration(e) // loggin in layman
               form.reset() //clearing form fields
               form.parentElement.remove() //removing form
               setTimeout(() => {
                    App.refresh()
               }, 300);
          })
          
     }


     static listeningForLogoutEvent() {
          document.addEventListener("click", () => {
               SessionsAdapter.destroyLaymanSession()
               setTimeout(() => {
                    App.refresh()
               }, 300);
          })
     }
     
     static listeningForLoginOrSignupEvents() {
          const attachEventTo = new this
          return attachEventTo.openSignupOrLogin()
     }
}