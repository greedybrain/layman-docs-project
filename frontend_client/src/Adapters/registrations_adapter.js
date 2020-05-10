class RegistrationsAdapter {
     constructor() {
          this.signupPath = "http://localhost:3000/signup"
          this.signupForm = document.querySelector("#signup-form")
          this.name = document.querySelector("input[name=full_name]")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     createLaymanRegistration() {
          const configs = new Header()
          const options = {
               method: "POST",
               headers: configs.defaultHeaders,
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
     }
}