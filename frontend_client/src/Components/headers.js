class Header {
     // DEFAULT HEADER OPTIONS 
     get defaultHeaders() {
          const headers = {
               "Content-Type": "application/json",
               "Accept": "application/json"
          }
          return headers
     }

     // HEADERS FOR A POST
     sessionPostConfigs(email, password) {
          const data = {
               email,
               password
          }
          const options = {
               method: "POST",
               headers: this.defaultHeaders,
               body: JSON.stringify(data)
          }
          return options
     }

     // HEADERS FOR A AN PATCH 
     // HEADERS FOR A A DELETE
}