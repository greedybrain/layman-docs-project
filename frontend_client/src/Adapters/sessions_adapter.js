class SessionAdapter {
     constructor() {
          this.loginPath = "http://localhost:3000/login"
          this.autoLoginPath = "http://localhost:3000/login"
     }

     getUser() {
          return fetch(this.loginPath).then(res => res.json())
     }

     autoLoginUser() {
          return fetch(this.autoLoginPath).then(res => res.json())
     }
}