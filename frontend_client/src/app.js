class App {
     static start() {
          
          // ALL-ACCESS TO THIS IS NEEDED
          Header.renderHeader()
          AppEventLogoClick.clickLogoToRefresh()
          Topic.fillTopicCont()

          //FULL ACCESS
          if (AuthCheckUser.isloggedIn()) {
               // POST HANDLING
               AppEventPost.openCreatePostForm()
               AppEventPost.handlingPostCreation()
               AppEventPost.closePostForm()
               Topic.fillTopicCont()

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

