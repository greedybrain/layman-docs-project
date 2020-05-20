class LaymenAdapter {
     constructor() {
          this.laymenBasePath = "https://layman-docs.herokuapp.com/laymen/"
     }

     static getLaymenIndexPage() {
          return fetch(`${this.laymenBasePath}`)
               .then(res => res.json())
               .then(data => { 
                    console.log(data)
               })
     }

     getLaymanShowPage(id) {
          const token = localStorage.token
          return fetch(`${this.laymenBasePath}${id}`, {
               headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
               }
          })
               .then(res => res.json())               
     }
}