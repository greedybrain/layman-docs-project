class FlashMessages {
     constructor() {
          this.appContainer = document.querySelector("div.app-container")
          this.flashMessageCont = document.createElement("div")
     }
     
     renderLoginSuccess() {
          const token = localStorage.token
          if (token) {
               const successDiv = this.flashMessageCont
               successDiv.textContent = "Login Successful!"
               successDiv.classList.add('success', 'animate__animated', 'animate__swing', 'animate__delay-2s')
               this.appContainer.appendChild(successDiv)
               return successDiv
          }
     }
}
