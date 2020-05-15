class PostsAdapter {
     constructor() {
          this.getAllPostsPath = "http://localhost:3000/posts/"
          this.validateUrlDocPath = "http://localhost:3000/doc_fetch"
          this.validateSOCPaste = "http://localhost:3000/validating"
          this.submitPostPath = `http://localhost:3000/laymen/${AuthCheckUser.currentUser.laymanId}/posts`
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
               doc_url: e.target.value
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          return fetch(this.validateUrlDocPath, options)
               .then(res => res.json())
               .catch(err => console.log(err.message))
     }

     authSectionPaste(url, e) {
          const data = {
               doc_url: url,
               section_of_concern: e.target.value
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          return fetch(this.validateSOCPaste, options)
               .then(res => res.json())
               .catch(err => console.log(err.message))
     }

     finalizeAndSubmitPost(e, url, docHead, soc) {
          const data = {
               language_or_framework: e.target.value,
               doc_url: url,
               doc_title: docHead,
               section_of_concern: soc
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          fetch(this.submitPostPath, options)
               .then(res => res.json())
               .then(data => console.log(data))
          
     }
}