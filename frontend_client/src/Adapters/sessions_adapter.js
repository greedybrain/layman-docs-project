class SessionsAdapter {
     constructor() {
          this.loginPath = "http://localhost:3000/login"
          this.autoLoginPath = "http://localhost:3000/login"
     }

}
SessionsAdapter.prototype.getUser = function (email, password) {
     let options = {
          method: "POST",
          headers: {
               "Content-Type": "application/json",
               "Accept": "application/json"
          },
          body: JSON.stringify({
               email,
               password
          })
     }
     return fetch(this.loginPath, options).then(res => res.json())
}

SessionsAdapter.prototype.autoLoginUser = function() {
     return fetch(this.autoLoginPath).then(res => res.json())
}