class ApplicationController < ActionController::API

     def encode_token(payload)
          JWT.encode(payload, ENV['JWT_TOKEN_SECRET'], ENV['JWT_ALGORITHM'])
     end

     def decode_token(token)
          JWT.decode(token, ENV['JWT_TOKEN_SECRET'], true, { algorithm: ENV['JWT_ALGORITHM']}) 
     end

end
