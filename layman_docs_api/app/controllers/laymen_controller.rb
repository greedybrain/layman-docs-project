class LaymenController < ApplicationController
     before_action :require_login, except: [:index]

     def index 
          laymen = Layman.all.order("created_at DESC")
          render json: {
               laymen: LaymanSerializer.new(laymen).serializable_hash
          }
     end

     def show 
          layman = Layman.find(params[:id])
          render json: LaymanSerializer.new(layman).serializable_hash
     end

end
