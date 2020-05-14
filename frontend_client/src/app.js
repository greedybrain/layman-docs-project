class App {
     static start() {
          // everything outside if block happens regardless
          Header.renderHeader()
          AppEventThenRefresh.clickLogoToRefresh()

          // state is decided by whether a layman is logged in or not in below if block 
          if (AuthCheckUser.isloggedIn()) {
               AppEventSessionReg.listeningForLogoutEvent()
          } 
          else {
               AppEventSessionReg.listeningForLoginOrSignupEvents()
          }
     }

     static refresh(time) {
          setTimeout(() => {
               window.location.reload()
          }, time)
     }
}

document.addEventListener("DOMContentLoaded", () => {
     App.start()
})

