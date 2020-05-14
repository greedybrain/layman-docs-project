class PostsAdapter {
     constructor() {
          this.getAllPosts = "http://localhost:3000/posts/"
     }

     indexPosts() {
          fetch(`${this.getAllPosts}`)
               .then(res => {
                    return res.json()
               })
               .catch(err => console.log(err.message))
     }
}