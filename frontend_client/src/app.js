document.addEventListener("DOMContentLoaded", () => {

     const loginForm = new LoginForm()
     loginForm.renderLoginForm()

     document.querySelector("#login-form").addEventListener("submit", e => {
          e.preventDefault()

          const adapter = new SessionsAdapter()
          adapter.createLaymanSession(e)
     })
     
})