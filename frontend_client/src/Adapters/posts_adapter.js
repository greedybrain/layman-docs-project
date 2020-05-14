class PostsAdapter {
     constructor() {
          this.getAllPostsPath = "http://localhost:3000/posts/"
          this.validateUrlDocPath = "http://localhost:3000/doc_fetch"
     }

     indexPosts() {
          fetch(`${this.getAllPostsPath}`)
               .then(res => {
                    return res.json()
               })
               .catch(err => console.log(err.message))
     }

     authUrl(e) {
          const data = {
               url: e.target.url_link.value
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          fetch(`${this.validateUrlDocPath}`, options)
               .then(res => res.json())
     }

}