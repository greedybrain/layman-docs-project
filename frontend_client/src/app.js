class App {
     static start() {
          Header.renderHeader()
          if (AuthCheckUser.isloggedIn()) {
               AppEventSessionReg.listeningForLogoutEvent()
          } 
          else {
               AppEventSessionReg.listeningForLoginOrSignupEvents()
          }
     }
}

document.addEventListener("DOMContentLoaded", () => {
     App.start()
})

