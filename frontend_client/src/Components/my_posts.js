class MyPosts {
     constructor() {
          this.postCont = document.querySelector("div.laymens-post-cont");
     }

     static buildLaymensPost() {
          
          new PostsAdapter().laymensPosts()
               .then((data) => {
                    data.posts.data.forEach((post) => {
                         const specficLaymanCard = document.createElement("div")
                         specficLaymanCard.classList.add("layman-card")
                         const profileIconCont = document.createElement("div");
                         profileIconCont.classList.add("profile-icon");
                         const mainInfo = document.createElement("div");
                         mainInfo.classList.add("main-info");
                         const laymanName = document.createElement("h2");
                         laymanName.classList.add("layman-name")
                         const firstInitial = document.createElement("span");
                         const postDate = document.createElement("div");
                         postDate.classList.add("date");
                         const postTitle = document.createElement("h3");
                         postTitle.innerHTML += `
                              <a href=${post.attributes.doc_url} target="_blank">${post.attributes.doc_title}<a>
                         `
                         const langFrame = document.createElement("h5");
                         langFrame.classList.add("lang-frame");
                         const sourceCont = document.createElement("div");
                         sourceCont.classList.add("source-cont");
                         const source = document.createElement("a");
                         source.setAttribute('target', '_blank')
                         // assign id to card
                         specficLaymanCard.setAttribute("data-id", post.id);
                         // assign first initial span to profile icon wrapper
                         firstInitial.textContent = AuthCheckUser.currentUser()
                         .laymanName.slice(0, 1)
                         .toUpperCase();
                         profileIconCont.appendChild(firstInitial);
                         // assign elements to main info container
                         // get layman name
                         laymanName.textContent = AuthCheckUser.currentUser().laymanName;
                                   // get post date
                         postDate.textContent = moment(post.attributes.created_at).fromNow();
                                   // get lang and/or framework
                         langFrame.textContent = post.attributes.language_or_framework;
                                   // get source link
                         source.href = post.attributes.doc_url;
                         source.textContent = "Source"

                         profileIconCont.appendChild(firstInitial)
                         mainInfo.append(laymanName, postDate, postTitle, langFrame)
                         sourceCont.appendChild(source)
                         specficLaymanCard.append(profileIconCont, mainInfo, sourceCont)

                         new this().postCont.append(specficLaymanCard)
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
