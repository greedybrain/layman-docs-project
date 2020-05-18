class App {
     static start() {
          
          // ALL-ACCESS TO THIS IS NEEDED
          Header.renderHeader()
          AppEventPost.openSearch()
          AppEventLogoClick.clickLogoToRefresh()
          Topic.fillTopicCont()

          //FULL ACCESS
          if (AuthCheckUser.isloggedIn()) {
               // POST HANDLING
               AppEventPost.openCreatePostForm()
               AppEventPost.closePostForm()
               AppEventPost.authenticateUrl()
               AppEventPost.authenticateSectionPasted()
               AppEventPost.submitPost()
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

