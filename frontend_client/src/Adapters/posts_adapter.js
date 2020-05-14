class PostsAdapter {
     constructor() {
          this.getAllPosts = "http://localhost:3000/posts/"
     }

     indexPosts() {
          fetch(`${this.getAllPosts}`)
               .then(res => res.json())
               .then(postsInfo => {
                    console.log(postsInfo)
               })
               .catch(err => console.log(err.message))
     }
}