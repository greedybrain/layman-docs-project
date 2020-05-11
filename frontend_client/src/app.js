class App {
     static start() {
          // LAYMAN EITHER LOGS IN OR SIGNS UP - STEP 1
          AppEventSessionReg.openSignup()
          AppEventSessionReg.openLogin()
          //===========================================
     }
}

document.addEventListener("DOMContentLoaded", () => {
     App.start()
})

