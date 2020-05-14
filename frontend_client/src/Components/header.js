class Header {
     constructor() {
          this.header = document.createElement("header")
          this.heading = document.createElement("div")
          this.heading.classList.add("heading")
          this.headingH1 = document.createElement("h1")
          this.headingH1.textContent = "Layman Docs"
          this.heading.appendChild(this.headingH1)
          this.headerOptions = document.createElement("div")
          this.headerOptions.classList.add("header-options")
          this.headerUl = document.createElement("ul")
          this.headerOptions.appendChild(this.headerUl)
          this.headerSearchLi = document.createElement("li")
          this.headerSearchLi.classList.add("search")
          this.searchLiInput = document.createElement("input")
          this.searchLiInput.type = "search"
          this.searchLiInput.name = "search"
          this.searchLiInput.placeholder = "Search Layman Docs"
          this.searchLiInput.classList.add("search-bar")
          this.headerSearchLi.appendChild(this.searchLiInput)
          this.searchLiIconCont = document.createElement("li")
          this.searchLiIconCont.classList.add("search-icon")
          this.icon = document.createElement("i")
          this.icon.classList.add("fas", "fa-search")
          this.searchLiIconCont.appendChild(this.icon)
          this.headerSearchLi.appendChild(this.searchLiInput)
          this.signupLi = document.createElement("li")
          this.signupLi.classList.add("signup")
          this.signupLi.textContent = "Signup"
          this.loginLi = document.createElement("li")
          this.loginLi.classList.add("login")
          this.loginLi.textContent = "Login"
          this.logoutLi = document.createElement("li")
          this.logoutLi.classList.add("logout")
          this.logoutLi.textContent = "Logout"
          this.headerUl.append(this.headerSearchLi, this.searchLiIconCont)
          this.header.append(this.heading, this.headerOptions)
     }

     static renderHeader() {
          const thisElem = new this()
          thisElem.header.remove()
          if (AuthCheckUser.isloggedIn()) {
               thisElem.headerUl.append(
                    thisElem.logoutLi
               )
               document.body.prepend(thisElem.header)
          } else {
               thisElem.headerUl.append(
                    thisElem.signupLi,
                    thisElem.loginLi
               )
               document.body.prepend(thisElem.header)
          }
     }

     // static reRenderHeader() {
     //      setTimeout(() => {
     //           App.start()
     //      }, 500);
     // }
}
