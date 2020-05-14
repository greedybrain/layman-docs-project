class AppEventLogoClick {
      
     static clickLogoToRefresh() {
          document.addEventListener("click", e => {
               if (e.target == document.querySelector(".heading") || e.target == document.querySelector(".heading h1")) {
                    App.refresh(300)
               }
          })
     }
 }