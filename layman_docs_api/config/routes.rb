Rails.application.routes.draw do
  devise_for :laymen
  root to: "home#index"


  
end
