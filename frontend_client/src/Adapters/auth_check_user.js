class AuthCheckUser {

     static currentUser() {
          return localStorage
     }

     static isloggedIn() {
          return localStorage.token && localStorage.token !== "undefined"
     }

     static postBelongToUser(post) {
          return parseInt(this.currentUser().laymanId) === post.id
     }

}