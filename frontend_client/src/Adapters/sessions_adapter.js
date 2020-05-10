class SessionsAdapter {
     constructor() {
          this.loginPath = "http://localhost:3000/login"
          this.logoutPath = "http://localhost:3000/logout/"
          this.loginForm = document.querySelector("#login-form")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     createLaymanSession() {
          fetch(adapter.loginPath, this.configObj(e))
               .then(res => res.json())
               .then(data => {
                    this.successLoginRes(data)
               })
     }

     destroyLaymanSession() {
          localStorage.clear()
     }


}