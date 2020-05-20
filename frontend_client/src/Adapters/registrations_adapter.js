class RegistrationsAdapter {
     constructor() {
          this.signupPath = "https://layman-docs.herokuapp.com/signup"
          this.signupForm = document.querySelector("#signup-form")
          this.name = document.querySelector("input[name=full_name]")
          this.email = document.querySelector("input[name=email]")
          this.password = document.querySelector("input[name=password]")
     }

     createLaymanRegistration(e) {
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify({
                    name: e.target.name.value,
                    email: e.target.email.value,
                    password: e.target.password.value
               })
          }

          fetch(this.signupPath, options)
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
}