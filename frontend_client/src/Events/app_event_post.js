class AppEventPost {
     constructor() {
          this.createPosttBtnShow = document.querySelector(".create-post")
          this.postFormCont = document.querySelector(".post-form-cont")
     }

     static openCreatePostForm() {
          new this().createPosttBtnShow.addEventListener("click", () => {
               const formCont = new this().postFormCont
               formCont.style.display = "flex"
               formCont.classList.add(
                    "animate__animated",
                    "animate__slideInLeft",
                    "animate__fast"
               )
          })
     }

     static authenticateUrl() {
          const docUrl = document.querySelector("input[name=doc_url]")
          const docTitle = document.querySelector("input[name=doc_title]")
          
          docUrl.addEventListener("paste", e => {
               setTimeout(() => {
                    new PostsAdapter().authUrl(e)
                         .then(data => {
                              try {
                                   docTitle.classList.add("animate__animated", "animate__lightSpeedInRight")
                                   docTitle.value = data.title
                              } catch (err) {
                                   // alert("Please check the link and try again")
                                   docTitle.classList.remove("animate__animated", "animate__lightSpeedInRight")
                                   docUrl.classList.add("animate__animated", "animate__hinge")
                                   // docUrl.value = ""
                                   setTimeout(() => {
                                        docUrl.classList.remove("animate__animated", "animate__hinge")
                                        docUrl.value = ""
                                   }, 2500);
                              } 
                         })
               }, 0);
          })
     }

     static authenticateSectionPasted() {
          const socPaste = document.querySelector("textarea[name=section_of_concern]")
          const docUrl = document.querySelector("input[name=doc_url]")

          socPaste.addEventListener("paste", e => {
               setTimeout(() => {
                    new PostsAdapter().authSectionPaste(docUrl.value, e)
                         .then(data => { 
                              if (data.message === "Documentation with that information was found!") {
                                   alert(data.message)
                              } else {
                                   socPaste.classList.add("animate__animated", "animate__shakeX")
                                   socPaste.value = data.message
                                   socPaste.style.color = "#ff5145"
                                   setTimeout(() => {
                                        socPaste.classList.remove("animate__animated", "animate__shakeX")
                                        socPaste.style.color = "#333"
                                        socPaste.value = ""
                                   }, 5000);
                              }
                         })
               }, 0);
          })
     }

     static submitPost() {
          // const langFrame = document.querySelector("input[name=lang_frame]")
          const docUrl = document.querySelector("input[name=doc_url]")
          const docTitle = document.querySelector("input[name=doc_title]")
          const socPaste = document.querySelector("textarea[name=section_of_concern]")

          new this().postFormCont.firstChild.addEventListener("submit", e => {
               e.preventDefault()

               new PostsAdapter()
                    .finalizeAndSubmitPost(
                         e,
                         docUrl.value,
                         docTitle.value,
                         socPaste.value
                    )
          })
     }

}