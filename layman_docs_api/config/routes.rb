Rails.application.routes.draw do

  resources :laymen
  post 'layman_token' => 'layman_token#create'
end
