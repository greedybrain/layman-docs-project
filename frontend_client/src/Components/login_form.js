class LoginForm {
     constructor() {
          this.appContainer = document.querySelector("div.app-container")
          this.loginFormCont = document.createElement("div")
          this.form = document.createElement("form")
          this.headingH1 = document.createElement('h1')
          this.emailDiv = document.createElement("div")
          this.emailInputField = document.createElement("input")
          this.pwDiv = document.createElement("div")
          this.pwInputField = document.createElement("input")
          this.rememberMeDiv = document.createElement("div")
          this.rememberMeLabel = document.createElement("label")
          this.rememberMeInput = document.createElement("input")
          this.loginBtn = document.createElement('button')
          this.pTag = document.createElement("p")
          this.span = document.createElement("span")
          this.lastPTag = document.createElement("p")
     }
     
     buildLoginForm() {
          this.loginFormCont.classList.add("login-form")
          this.form.id = "login-form"
          this.headingH1.textContent = "Welcome Back"
          // EMAIL DEALINGS 
          this.emailDiv.classList.add('email')
          this.emailInputField.classList.add('email-field')
          this.emailInputField.type = "email"
          this.emailInputField.name = "email"
          this.emailInputField.placeholder = "Email"
          this.emailInputField.required = true
          this.emailDiv.appendChild(this.emailInputField)
          // PASSWORD DEALINGS 
          this.pwDiv.classList.add('password')
          this.pwInputField.classList.add('pw-field')
          this.pwInputField.type = "password"
          this.pwInputField.name = "password"
          this.pwInputField.placeholder = "Password"
          this.pwInputField.required = true
          this.pwDiv.appendChild(this.pwInputField)
          // REMEMBER ME DEALINGS 
          this.rememberMeDiv.classList.add('remember-me-cb')
          this.rememberMeLabel.for = "remember-me"
          this.rememberMeLabel.style = "word-wrap:break-word"
          this.rememberMeInput.type = "checkbox"
          this.rememberMeInput.name = "remember-me"
          this.rememberMeLabel.textContent = " Remember me"
          this.rememberMeLabel.prepend(this.rememberMeInput)
          this.rememberMeDiv.append(this.rememberMeLabel)
          // BUTTON DEALINGS 
          this.loginBtn.textContent = "Login"
          this.loginBtn.classList.add("login-btn")
          this.loginBtn.type = "submit"
          // P TAG DEALINGS 
          this.pTag.textContent = "Don't have an account? "
          // a TAG DEALINGS 
          this.span.textContent = "Signup"
          this.span.classList.add("open-signup")
          this.pTag.appendChild(this.span)
          // LAST P TAG DEALINGS 
          this.lastPTag.textContent = "© 2020. LaymanDocs"
          this.lastPTag.classList.add("login-copyright-info")
     
          // PUT FORM TOGETHER
          this.form.append(
               this.headingH1,
               this.emailDiv, 
               this.pwDiv, 
               this.rememberMeDiv, 
               this.loginBtn, 
               this.pTag,
               this.lastPTag
          )
     
          // ADD FORM TO FORM CONTAINER 
          this.loginFormCont.appendChild(this.form)
          this.appContainer.appendChild(this.loginFormCont)
     
          return this.form
     }
     
     static renderLoginForm() {
          const form = new LoginForm().buildLoginForm()
          return form.parentElement
     }
}
