class App {
     static start() {
          
          // ALL-ACCESS TO THIS IS NEEDED
          Header.renderHeader()
          AppEventLogoClick.clickLogoToRefresh()

          //FULL ACCESS
          if (AuthCheckUser.isloggedIn()) {
               // POST HANDLING
               AppEventPost.openCreatePostForm()
               AppEventPost.handlingPostCreation()

               // END SESSION
               AppEventSessionReg.listeningForLogoutEvent()
          } 
          //RESTRICTED ACCESS
          else {
               // CURIOUS VISITOR 
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

