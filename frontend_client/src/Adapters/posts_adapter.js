class PostsAdapter {
     constructor() {
          this.getAllPostsPath = "http://localhost:3000/posts/"
          this.validateUrlDocPath = "http://localhost:3000/doc_fetch"
          this.validateSOCPaste = "http://localhost:3000/validating"
          this.langFrame = document.querySelector("input[name=lang_frame]")
          this.docUrl = document.querySelector("input[name=doc_url]")
          this.docTitle = document.querySelector("input[name=doc_title]")
          this.secOfConcern = document.querySelector("textarea[name=section_of_concern]")
     }

     indexPosts() {
          fetch(`${this.getAllPostsPath}`)
               .then(res => {
                    return res.json()
               })
               .catch(err => console.log(err.message))
     }

     async authUrl(e) {
          const data = {
               doc_url: e.target.value
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          try {
               const res = await fetch(this.validateUrlDocPath, options)
               return await res.json()
          }
          catch (err) {
               return console.log(err.message)
          }
     }

     async authSectionPaste(url, e) {
          const data = {
               doc_url: url,
               section_of_concern: e.target.value
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          try {
               const res = await fetch(this.validateSOCPaste, options)
               return await res.json()
          }
          catch (err) {
               return console.log(err.message)
          }
     }

     async finalizeAndSubmitPost() {
          const data = {
               language_or_framework: this.langFrame.value,
               doc_url: this.docUrl.value,
               doc_title: this.docTitle.value,
               section_of_concern: this.secOfConcern.value
          }
          const options = {
               method: "POST",
               headers: Config.defaultHeaders(),
               body: JSON.stringify(data)
          }
          return fetch(`http://localhost:3000/laymen/${AuthCheckUser.currentUser().laymanId}/posts`, options)
               .then(res => res.json())
               .catch(err => console.log(err.message))
     }
}