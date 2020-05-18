class MyPosts {
     constructor() {
          this.postCont = document.querySelector("div.laymens-post-cont");
          this.profileIconCont = document.createElement("div");
          this.profileIconCont.classList.add("profile-icon");
          this.mainInfo = document.createElement("div");
          this.mainInfo.classList.add("main-info");
          this.laymanName = document.createElement("h4");
          this.laymanName.classList.add("layman-name")
          this.firstInitial = document.createElement("span");
          this.profileIconCont.appendChild(this.firstInitial)
          this.postDate = document.createElement("div");
          this.postDate.classList.add("date");
          this.postTitle = document.createElement("h2");
          this.langFrame = document.createElement("h4");
          this.langFrame.classList.add("lang-frame");
          this.sourceCont = document.createElement("div");
          this.sourceCont.classList.add("source-cont");
          this.source = document.createElement("a");
          
          this.profileIconCont.appendChild
          this.mainInfo.append(this.laymanName, this.postDate, this.postTitle, this.langFrame)
          this.sourceCont.appendChild(this.source)
          this.postCont.append(this.profileIconCont, this.mainInfo, this.sourceCont)
     }

     buildLaymensPost() {
          new PostsAdapter().laymensPosts()
               .then((data) => {
               debugger;
               data.posts.data.forEach((post) => {
                    // assign id to card
                    this.postCont.setAttribute("data-id", post.id);
                         // assign first initial span to profile icon wrapper
                    this.firstInitial.textContent = AuthCheckUser.currentUser()
                         .laymanName.slice(0, 1)
                         .toUpperCase();
                    this.profileIconCont.appendChild(this.firstInitial);
                         // assign elements to main info container
                              // get layman name
                    this.laymanName.textContent = AuthCheckUser.currentUser().laymanName;
                              // get post date
                    this.postDate.textContent = moment(post.attributes.created_at).fromNow();
                              // get post title
                    this.postTitle.textContent = post.attributes.doc_title;
                              // get lang and/or framework
                    this.langFrame.textContent = post.attributes.language_or_framework;
                         // get source link
                    this.source.href = post.attributes.doc_url;
               });
          });
     }
}

// <div class="laymens-post-cont">
//   <div class="profile-icon">
//     <span>N</span>
//   </div>
//   <div class="main-info">
//     <h4 class="layman-name">Naya Willis</h4>
//     <p class="date">May 10</p>
//     <h2>My Post Title</h2>
//     <h4 class="lang-frame">
//     </h4 >
//     <div class="engagement">
//       <ul class="likes-comments">
//         <li>Likes</li>
//         <li>Comments</li>
//       </ul>
//     </div>
//   </div>
//   <div class="source-cont">
//     <a href="#">Source</a>
//   </div>
// </div>
