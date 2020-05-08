class Signup {
     constructor() {
          this.form = document.querySelector("#signup-form")
          this.name = document.querySelector("input[name=name]")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }
     newLaymanRegistration() {

          const adapter = new RegistrationsAdapter()

          this.form.addEventListener("submit", e => {
               e.preventDefault()

               let options = {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         "Accept": "application/json"
                    },
                    body: JSON.stringify({
                         name: this.name.value,
                         email: this.email.value,
                         password: this.password.value
                    })
               }
               fetch(adapter.signupPath, options)
                    .then(res => res.json())
                    .then(data => {
                         localStorage.setItem("laymanId", data.layman.data.id)
                         localStorage.setItem("token", data.jwt)
                    })
               this.form.reset()
          })

     }
}