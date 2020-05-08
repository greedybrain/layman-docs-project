class SessionAdapter {
     constructor() {
          this.loginPath = "http://localhost:3000/login"
          this.autoLoginPath = "http://localhost:3000/login"
     }

}
SessionAdapter.prototype.getUser = function() {
     return fetch(this.loginPath).then(res => res.json())
}

SessionAdapter.prototype.autoLoginUser = function() {
     return fetch(this.autoLoginPath).then(res => res.json())
}