class SessionsAdapter {
     constructor() {
          this.loginPath = "https://layman-docs.herokuapp.com/login/"
          this.logoutPath = "https://layman-docs.herokuapp.com/logout/"
          this.loginForm = document.querySelector("#login-form")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     createLaymanSession(e) {
          const data = {
               email: e.target.email.value,
               password: e.target.password.value
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          fetch(`${this.loginPath}`, options)
               .then(res => res.json())
               .then(laymen => {
                    localStorage.setItem("token", laymen.jwt)
                    localStorage.setItem("laymanId", laymen.layman.data.id)
                    localStorage.setItem("laymanEmail", laymen.layman.data.attributes.email)
                    localStorage.setItem("laymanName", laymen.layman.data.attributes.name)
               })
               .then(App.refresh(300))
               .catch(err => console.log(err.message))
     }

     static destroyLaymanSession() {
          localStorage.clear()
          App.refresh(300)
     }


}