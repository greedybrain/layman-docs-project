class SessionsController < ApplicationController

     def create 
          layman = Layman.find_by(email: params[:email])
          if layman&.authenticate(params[:password])
               render json: LaymanSerializer.new(layman).serialized_json
          end
     end

end
