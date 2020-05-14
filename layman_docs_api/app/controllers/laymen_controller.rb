class LaymenController < ApplicationController
     before_action :require_login, except: [:index, :show]

     def index 
          laymen = Layman.all.order("created_at DESC")
          render json: {
               laymen: LaymanSerializer.new(laymen).serializable_hash
          }
     end

     def show 
          layman = Layman.find(params[:id])
          render json: {
               layman: LaymanSerializer.new(layman).serializable_hash
          }
     end

end
