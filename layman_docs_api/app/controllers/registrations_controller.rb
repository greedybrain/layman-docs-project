class RegistrationsController < ApplicationController

     def create 
          layman = Layman.new(layman_params)
     end

     private 

     def layman_params 
          params.require(:layman).permit(:name, :email, :password)
     end

end
