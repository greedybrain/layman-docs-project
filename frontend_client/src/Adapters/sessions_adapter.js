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
                    localStorage.setItem("token", laymen.jwt)
                    localStorage.setItem("laymanId", laymen.layman.data.id)
                    localStorage.setItem("laymanEmail", laymen.layman.data.attributes.email)
                    localStorage.setItem("laymanName", laymen.layman.data.attributes.name)
               })
               .catch(err => console.log(err.message))
     }

     destroyLaymanSession() {
          localStorage.clear()
     }


}