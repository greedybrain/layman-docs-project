class LaymenController < ApplicationController

     def home 
          render json: { message: "You've reached the home page" }
     end

end
