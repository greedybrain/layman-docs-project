class App {
     static start() {
          Header.renderHeader()
          AppEventSessionReg.goHome()
          
          if (AuthCheckUser.isloggedIn()) {
               AppEventSessionReg.listeningForLogoutEvent()
          } 
          else {
               AppEventSessionReg.listeningForLoginOrSignupEvents()
          }
     }

     static refresh() {
          window.location.reload()
     }
}

document.addEventListener("DOMContentLoaded", () => {
     App.start()
})

