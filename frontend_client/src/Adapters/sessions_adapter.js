class SessionsAdapter {
     constructor() {
          this.loginPath = "http://localhost:3000/login"
          this.logoutPath = "http://localhost:3000/logout/"
          this.loginForm = document.querySelector("#login-form")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     createLaymanSession(e) {
          const configs = new Header()
          const data = {
               email: this.email.value,
               password: this.password.value
          }
          const options = {
               method: "POST",
               headers: configs.defaultHeaders,
               body: JSON.stringify(data)
          }
          return fetch("http://localhost:3000/login", options)
               .then(res => res.json())
               .then(laymen => {
                    console.log(laymen)
                    localStorage.setItem("token", laymen.jwt)
                    localStorage.setItem("currentLayman", laymen.layman.data)
               })
               .catch(err => console.log(err.message))
     }

     destroyLaymanSession() {
          localStorage.clear()
     }


}