class SessionsAdapter {
     constructor() {
          this.loginPath = "http://localhost:3000/login"
          this.logoutPath = "http://localhost:3000/logout/"
          this.loginForm = document.querySelector("#login-form")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     static createLaymanSession(e) {
          const config = new Header()
          fetch(this.loginPath, config.sessionPostConfigs(e.target.email.value, e.target.password.value))
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    localStorage.setItem("token", data.jwt)
                    this.successLoginRes(data)
               })
     }

     static destroyLaymanSession() {
          localStorage.clear()
     }


}