class RegistrationsController < ApplicationController
     before_action :require_login, except: [:create]

     def create 
          layman = Layman.new(layman_params)
          
          
          if layman.save!
               payload = { layman_id: layman.id }
               token = encode_token(payload)
               render json: {
                    layman: LaymanSerializer.new(layman).serializable_hash,
                    jwt: token
               }
          else
               render json: {
                    errors: layman.errors.full_messages
               }, status: :not_acceptable
          end
     end

     private 

     def layman_params 
          params.permit(:name, :email, :password)
     end

end
