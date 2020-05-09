class Layman {

     getLaymanData() {
          const token = localStorage.token
          const laymanId = localStorage.laymanId
          if (token) {
               const adapter = new LaymenAdapter()
               adapter.getLaymanShowPage(laymanId)
                    .then(data => console.log(data))
          }
     }
}