class AuthAdapter {

     get currentUser() {
          return localStorage
     }

     postBelongToUser(post) {
          return parseInt(this.currentUser().laymanId) === post.id
     }

     isloggedIn() {
          return this.currentUser.token && this.currentUser.laymanId
     }

}