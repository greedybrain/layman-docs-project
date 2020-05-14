class SignupForm {
     constructor() {
          this.appContainer = document.querySelector("div.app-container")
          this.signupFormCont = document.createElement("div")
          this.form = document.createElement("form")
          this.headingH1 = document.createElement('h1')
          this.nameDiv = document.createElement("div")
          this.nameInputField = document.createElement("input")
          this.emailDiv = document.createElement("div")
          this.emailInputField = document.createElement("input")
          this.pwDiv = document.createElement("div")
          this.pwInputField = document.createElement("input")
          this.signupBtn = document.createElement('button')
          this.pTag = document.createElement("p")
          this.span = document.createElement("span")
          this.lastPTag = document.createElement("p")
     }
     
     buildSignupForm() {
          this.signupFormCont.classList.add("signup-form")
          this.form.id = "signup-form"
          this.headingH1.textContent = "Signup"
          // NAME DEALINGS 
          this.nameDiv.classList.add('name')
          this.nameInputField.classList.add('name-field')
          this.nameInputField.type = "text"
          this.nameInputField.name = "name"
          this.nameInputField.placeholder = "Name"
          this.nameInputField.required = true
          this.nameDiv.appendChild(this.nameInputField)
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
          // BUTTON DEALINGS 
          this.signupBtn.textContent = "Signup"
          this.signupBtn.classList.add("signup-btn")
          this.signupBtn.type = "submit"
          // P TAG DEALINGS 
          this.pTag.textContent = "Already have an account? "
          // a TAG DEALINGS 
          this.span.textContent = "Login"
          this.span.classList.add("open-login")
          this.pTag.appendChild(this.span)
          // LAST P TAG DEALINGS 
          this.lastPTag.textContent = "© 2020. LaymanDocs"
          this.lastPTag.classList.add("signup-copyright-info")
     
          // PUT FORM TOGETHER
          this.form.append(
               this.headingH1,
               this.nameDiv,
               this.emailDiv,
               this.pwDiv,
               this.signupBtn,
               this.pTag,
               this.lastPTag
          )
     
          // ADD FORM TO FORM CONTAINER 
          this.signupFormCont.appendChild(this.form)
          this.appContainer.append(this.signupFormCont)
          
          return this.form
     }

     static renderSignupForm() {
          const form = new SignupForm().buildSignupForm()
          return form.parentElement
     }
}
