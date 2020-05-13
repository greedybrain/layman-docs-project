class AuthCheckUser {

     get currentUser() {
          return localStorage
     }

     static postBelongToUser(post) {
          return parseInt(this.currentUser().laymanId) === post.id
     }

     static isloggedIn() {
          return localStorage.token && localStorage.token !== "undefined"
     }

}