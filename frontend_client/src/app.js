document.addEventListener("DOMContentLoaded", () => {
     const laymanReg = new Signup()
     laymanReg.newLaymanRegistration()
     const laymanSession = new Login()
     laymanSession.newLaymanSession()

     const layman = new Layman()
     layman.getLaymanData()

     const authCheck = new AuthAdapter()
     authCheck.currentUser()
     




     // LOGIN/SIGNUP STUFF 
     let loginForm = document.querySelector("div.login-form")
     let signupForm = document.querySelector("div.signup-form")
     let openSignup = document.querySelector("span.open-signup")
     let openLogin = document.querySelector("span.open-login")

     openSignup
          .addEventListener('click', () => {
               loginForm.style.display = "none"
               signupForm.style.display = "flex"
          })
     openLogin
          .addEventListener('click', () => {
               loginForm.style.display = "flex"
               signupForm.style.display = "none"
          })
     
})