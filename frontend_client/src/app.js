document.addEventListener("DOMContentLoaded", () => {
     const layman = new Login()
     layman.newLaymanSession()

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