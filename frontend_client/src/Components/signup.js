class Signup {
     constructor() {
          this.signupForm = document.querySelector("#signup-form")
          this.name = document.querySelector("input[name=full_name]")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }
     newLaymanRegistration() {

          const adapter = new RegistrationsAdapter()

          this.signupForm.addEventListener("submit", e => {
               e.preventDefault()
               // debugger

               let options = {
                    method: "POST",
                    headers: {
                         "Content-Type": "application/json",
                         "Accept": "application/json"
                    },
                    body: JSON.stringify({
                         name: e.target.full_name.value,
                         email: e.target.email.value,
                         password: e.target.password.value
                    })
               }
               
               fetch(adapter.signupPath, options)
                    .then(res => res.json())
                    .then(data => {
                         console.log(data)
                         localStorage.setItem("laymanId", data.layman.data.id)
                         localStorage.setItem("token", data.jwt)
                         this.signupForm.reset()
                    })
               
          })

     }
}