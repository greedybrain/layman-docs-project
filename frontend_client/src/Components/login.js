class Login {
     constructor() {
          this.form = document.querySelector("#login-form")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     newLaymanSession() {

          const adapter = new SessionsAdapter()

          this.form.addEventListener("submit", e => {
               e.preventDefault()

               let options = {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         "Accept": "application/json"
                    },
                    body: JSON.stringify({
                         email: this.email.value,
                         password: this.password.value
                    })
               }
               fetch(adapter.loginPath, options)
                    .then(res => res.json())
                    .then(data => {
                         debugger
                         localStorage.setItem("laymanId", data.layman.data.id)
                         localStorage.setItem("token", data.jwt)
                    })
               this.form.reset()
          })

     }
}