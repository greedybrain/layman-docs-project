class Login {
     constructor() {
          this.loginForm = document.querySelector("#login-form")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     newLaymanSession() {

          const adapter = new SessionsAdapter()

          this.loginForm.addEventListener("submit", e => {
               e.preventDefault()

               let options = {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         "Accept": "application/json"
                    },
                    body: JSON.stringify({
                         email: e.target.email.value,
                         password: e.target.password.value
                    })
               }

               fetch(adapter.loginPath, options)
                    .then(res => res.json())
                    .then(data => {
                         localStorage.setItem("laymanId", data.layman.data.id)
                         localStorage.setItem("token", data.jwt)
                         this.loginForm.reset()
                    })
               
          })

     }
}