class SessionsController < ApplicationController

     def create 
          layman = Layman.find_by(email: params[:email])
          if layman&.authenticate(params[:password])
               payload = { layman_id: layman.id }
               token = encode_token(payload)
               render json: {
                    layman: LaymanSerializer.new(layman).serializable_hash,
                    jwt: token,
                    message: "Welcome back, #{layman.name}"
               }
          else
               render json: {
                    failure: "Log in failed! Email or Password invalid!"
               }
          end
     end

     def auto_login
          if session_layman
               render json: LaymanSerializer.new(session_layman).serializable_hash
          else
               render json: {
                    errors: "No Layman Logged In"
               }
          end
     end

end
