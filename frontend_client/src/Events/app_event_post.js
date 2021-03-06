class AppEventPost {
     constructor() {
          this.createPosttBtnShow = document.querySelector(".create-post")
          this.postFormCont = document.querySelector(".post-form-cont")
          this.closeBtn = document.querySelector(".close")
     }

     static openSearch() {
          const searchIcon = document.querySelector(".search-icon")
          const searchBar = document.querySelector("li.search")
          searchIcon.addEventListener("click", () => {
               searchBar.style.display = "block"
          })
     }

     static openCloseCreatePostForm() {
          const close = new this().closeBtn
          new this().createPosttBtnShow.addEventListener("click", () => {
               const formCont = new this().postFormCont
               formCont.style.display = "flex"
               formCont.classList.add(
                    "animate__animated",
                    "animate__slideInLeft",
                    "animate__fast"
               )
          })
          close.addEventListener("click", () => {
               close.parentElement.classList.add(
                    "animate__animated",
                    "animate__slideOutLeft",
                    "animate__fast"
               )
               App.refresh(500)
          })
     }

     static openCloseLaymensPosts() {
          const myPostBtn = document.querySelector(".feed")
          const laymanPostCont = document.querySelector("div.laymens-post-cont")
          const close = document.querySelector("div.laymens-post-cont .close")
          myPostBtn.addEventListener("click", () => {
               laymanPostCont.style.display = "block"
               laymanPostCont.classList.add(
                    "animate__animated",
                    "animate__slideInRight",
                    "animate__fast"
               )
          })
          close.addEventListener("click", () => {
               close.parentElement.classList.add(
                    "animate__animated",
                    "animate__slideOutRight",
                    "animate__fast"
               )
               App.refresh(500)
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
                                   }, 3000);
                                   
                              }
                         })
               }, 0);
          })
     }

     static submitPost() {
          const form = new this().postFormCont.children[1]
          form.addEventListener("submit", e => {
               e.preventDefault()
               
               new PostsAdapter().
                    finalizeAndSubmitPost()
                    .then(
                         form.reset(),
                         form.parentElement.classList.add(
                              "animate__animated",
                              "animate__slideOutLeft",
                              "animate__faster"
                         ),
                         App.refresh(500)
                    )
                    
          })
     }

}