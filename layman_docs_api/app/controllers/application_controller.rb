class ApplicationController < ActionController::API
     before_action :require_login

     def auth_header
          request.headers['Authorization']
     end

     def encode_token(payload)
          JWT.encode(payload, ENV['JWT_TOKEN_SECRET'], ENV['JWT_ALGORITHM'])
     end

     def decoded_token
          if auth_header
               token = auth_header.split(' ')[1]
               begin
                    JWT.decode(token, ENV['JWT_TOKEN_SECRET'], true, { algorithm: ENV['JWT_ALGORITHM']})
               rescue JWT::DecodeError
                    []
               end
          end 
     end

     def session_layman
          decoded_hash = decoded_token 
          if !decoded_hash.nil?
               layman_id = decoded_hash[0]['layman_id']
               @layman = Layman.find_by(id: layman_id)
          else
               nil
          end
     end

     def logged_in?
          !!session_layman
     end

     def require_login
          render json: {
               message: "You must be logged in to do that"
          }, status: 401 unless logged_in?
     end

end
