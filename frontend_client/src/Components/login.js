class Login {
     constructor(email, password) {
          this.email = email 
          this.password = password
     }
}

Login.prototype.login = function () {
     const adapter = new SessionsAdapter()
}